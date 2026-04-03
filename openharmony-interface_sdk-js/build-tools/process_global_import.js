/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const fs = require('fs');
const ts = require('typescript');
const commander = require('commander');

class HandleUIImports {
  constructor(program, context, outPath, path, exportFlag) {
    this.context = context;
    this.typeChecker = program.getTypeChecker();
    this.printer = ts.createPrinter();

    this.outPath = outPath;
    this.inputDir = path;
    this.exportFlag = exportFlag;
    this.insertPosition = 0;

    this.importedInterfaces = new Set();
    this.interfacesNeedToImport = new Set();
    this.trueSymbolAtLocationCache = new Map();

    this.dynamicImportCollection = new Map();
    this.dynamicImportType = new Map();
  }

  createCustomTransformer(sourceFile) {
    if (sourceFile?.fileName) {
      const name = path.basename(sourceFile.fileName, path.extname(sourceFile.fileName));
      if (name.includes(OHOS_ARKUI_GLOBAL_ESVALUE)) {
        if (this.outPath) {
          this.writeSourceFileToOutPut(sourceFile);
        }
        if (this.exportFlag) {
          return ts.visitNode(sourceFile, this.visitGlobalESValueNode.bind(this));
        }
        return sourceFile;
      }
    }

    this.extractImportedNames(sourceFile);

    const statements = sourceFile.statements;
    for (let i = 0; i < statements.length; ++i) {
      const statement = statements[i];
      if (!ts.isJSDoc(statement) && !(ts.isExpressionStatement(statement) &&
        ts.isStringLiteral(statement.expression))) {
        this.insertPosition = i;
        break;
      }
    }

    return ts.visitNode(sourceFile, this.visitNode.bind(this));
  }

  visitGlobalESValueNode(node) {
    if (ts.isTypeAliasDeclaration(node) && ts.isImportTypeNode(node.type)) {
      return this.processDynamicImportInType(node);
    }

    if (ts.isImportTypeNode(node)) {
      return this.processDynamicImportInImportTypeNode(node);
    }

    const result = ts.visitEachChild(node, this.visitGlobalESValueNode.bind(this), this.context);

    if (ts.isSourceFile(result)) {
      this.processSourceFileForDynamicImport(node, result);
    }

    return result;
  }

  visitNode(node) {
    if (node.parent && ts.isStructDeclaration(node.parent) && ts.isConstructorDeclaration(node)) {
      return undefined;
    }

    if (ts.isImportDeclaration(node)) {
      const moduleSpecifier = node.moduleSpecifier;
      if (ts.isStringLiteral(moduleSpecifier)) {
        const modulePath = moduleSpecifier.text;
        if ([OHOS_ARKUI_STATEMANAGEMENT, OHOS_ARKUI_COMPONENT].includes(modulePath)) {
          return node;
        } else if (modulePath.includes(COMPONENT + '/')) {
          return this.updateImportComponentPath(node, modulePath);
        }
      }
    }

    this.handleImportBuilder(node);
    const result = ts.visitEachChild(node, this.visitNode.bind(this), this.context);

    if (ts.isIdentifier(result) && !this.shouldSkipIdentifier(result)) {
      this.interfacesNeedToImport.add(result.text);
    } else if (ts.isSourceFile(result)) {
      this.addUIImports(result);
    }

    return result;
  }

  updateImportComponentPath(node, modulePath) {
    return ts.factory.updateImportDeclaration(
      node,
      node.modifiers,
      node.importClause,
      ts.factory.createStringLiteral(
        modulePath.replace(/\.\.\/component\/.*/, OHOS_ARKUI_COMPONENT)
      ),
      node.assertClause
    );
  }

  processTypeWithLongMemberChain(node, moduleName, memberChain) {
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createQualifiedName(
          ts.factory.createIdentifier(moduleName),
          ts.factory.createIdentifier(memberChain[1])
        ),
        undefined
      )
    );
  }

  processDynamicImportInType(node) {
    const typeName = node.name.text;
    const importType = node.type;
    const modulePath = importType.argument.literal.text;
    const moduleName = this.extractLastSegment(modulePath);
    const memberChain = this.extractFromImportTypeNode(importType);
    const hasGeneric = !!node.typeParameters?.length;

    if (!this.hasDefaultInMemberChain(memberChain) &&
      (!hasGeneric || !node.typeParameters[0].default)) {

      if (memberChain.length > 1) {
        return this.processTypeWithLongMemberChain(node, moduleName, memberChain);
      }
      this.collectDynamicImport(modulePath, typeName);
      return this.processTypeWithoutDefaultOnly(typeName, modulePath);
    }

    if (this.hasDefaultInMemberChain(memberChain) && memberChain.length > 1) {
      this.collectDynamicImport(modulePath, moduleName);
      return this.processTypeWithDefaultAndLongMemberChain(node, modulePath, moduleName, memberChain);
    }

    if (this.hasDefaultInMemberChain(memberChain) && memberChain.length === 1) {
      this.collectDynamicImport(modulePath, typeName);
      return this.processTypeWithDefaultAndOneMember(typeName, modulePath);
    }

    if (hasGeneric && node.typeParameters[0].default) {
      this.collectDynamicImport(modulePath, typeName);
      return this.processHasGeneric(node, typeName, modulePath);
    }

    return node;
  }

  processDynamicImportInImportTypeNode(node) {
    const modulePath = node.argument.literal.text;
    const moduleName = this.extractLastSegment(modulePath);
    const memberChain = this.extractFromImportTypeNode(node);

    if (memberChain.includes(DEFAULT)) {
      this.setImportType(modulePath, ImportType.DEFAULT);
      this.collectDynamicImport(modulePath, moduleName);
      return ts.factory.createIdentifier(moduleName);
    } else if (memberChain.length) {
      this.setImportType(modulePath, ImportType.NAMED);
      this.collectDynamicImport(modulePath, memberChain[0]);
      return ts.factory.createTypeReferenceNode(
        node.qualifier,
        node.typeArguments
      );
    }
    return node;
  }

  processSourceFileForDynamicImport(node, result) {
    const newStatements = [...result.statements];
    if (this.dynamicImportCollection.size) {
      this.addImportForDynamicImport(newStatements);
    }

    const updatedStatements = ts.factory.createNodeArray(newStatements);
    const updatedSourceFile = ts.factory.updateSourceFile(node,
      updatedStatements,
      node.isDeclarationFile,
      node.referencedFiles,
      node.typeReferenceDirectives,
      node.hasNoDefaultLib,
      node.libReferenceDirectives
    );

    const updatedCode = this.printer.printFile(updatedSourceFile);
    if (this.outPath) {
      this.writeSourceFileToOutPut(updatedSourceFile, updatedCode);
    } else {
      fs.writeFileSync(updatedSourceFile.fileName, updatedCode);
    }
  }

  addUIImports(node) {
    const newStatements = [...node.statements];

    const compImportSpecifiers = [];
    const stateImportSpecifiers = [];

    this.interfacesNeedToImport.forEach((interfaceName) => {
      if (this.importedInterfaces.has(interfaceName)) {
        return;
      }
      const identifier = ts.factory.createIdentifier(interfaceName);
      if (decoratorsWhiteList.includes(interfaceName)) {
        stateImportSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, identifier));
      } else {
        compImportSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, identifier));
      }
    });

    if (compImportSpecifiers.length + stateImportSpecifiers.length > 0) {
      this.processAddUIImport(node, compImportSpecifiers, stateImportSpecifiers, newStatements);
    }

    this.processSourceFileForUIImport(node, newStatements);
  }

  processTypeWithoutDefaultOnly(typeName, modulePath) {
    this.setImportType(modulePath, ImportType.NAMED);
    return ts.factory.createExportDeclaration(
      undefined,
      false,
      ts.factory.createNamedExports([ts.factory.createExportSpecifier(
        false,
        undefined,
        ts.factory.createIdentifier(typeName)
      )]),
      undefined,
      undefined
    );
  }

  processTypeWithDefaultAndLongMemberChain(node, modulePath, moduleName, memberChain) {
    this.setImportType(modulePath, ImportType.DEFAULT);
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createQualifiedName(
          ts.factory.createIdentifier(moduleName),
          ts.factory.createIdentifier(memberChain[1])
        ),
        undefined
      )
    );
  }

  processTypeWithDefaultAndOneMember(typeName, modulePath) {
    this.setImportType(modulePath, ImportType.DEFAULT);
    return ts.factory.createExportDeclaration(
      undefined,
      false,
      ts.factory.createNamedExports([ts.factory.createExportSpecifier(
        false,
        undefined,
        ts.factory.createIdentifier(typeName)
      )]),
      undefined,
      undefined
    );
  }

  processHasGeneric(node, typeName, modulePath) {
    this.setImportType(modulePath, ImportType.ALIAS);
    return ts.factory.updateTypeAliasDeclaration(node,
      node.modifiers,
      node.name,
      node.typeParameters,
      ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier(typeName + GENERIC_T),
        [ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier(GENERIC_T),
          undefined
        )]
      )
    );
  }

  addImportForDynamicImport(newStatements) {
    this.dynamicImportCollection.forEach((value, key) => {
      if (this.dynamicImportType.get(key) === ImportType.DEFAULT) {
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined,
            ts.factory.createIdentifier(Array.from(value)[0]), undefined),
          ts.factory.createStringLiteral(key),
          undefined
        ));
      } else if (this.dynamicImportType.get(key) === ImportType.NAMED) {
        const namedImports = ts.factory.createNamedImports(Array.from(value).map(v => {
          return ts.factory.createImportSpecifier(false, undefined,
            ts.factory.createIdentifier(v));
        }));
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined, undefined, namedImports),
          ts.factory.createStringLiteral(key), undefined
        ));
      } else {
        newStatements.splice(1, 0, ts.factory.createImportDeclaration(undefined,
          ts.factory.createImportClause(undefined, undefined,
            ts.factory.createNamedImports([ts.factory.createImportSpecifier(false,
              ts.factory.createIdentifier(Array.from(value)[0]),
              ts.factory.createIdentifier(Array.from(value)[0] + 'T')
            )])
          ),
          ts.factory.createStringLiteral(key), undefined
        ));
      }
    });

    this.createPromptActionDefaultImport(newStatements);
  }

  createPromptActionDefaultImport(newStatements) {
    newStatements.splice(1, 0, ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        undefined,
        ts.factory.createIdentifier('promptAction'),
        undefined
      ),
      ts.factory.createStringLiteral('./@ohos.promptAction'),
      undefined
    ));
  }

 extractFromImportTypeNode(importTypeNode) {
    if (!importTypeNode.qualifier) {
      return [];
    }

    return importTypeNode.qualifier.getText().split('.');
  }

  collectDynamicImport(k, v) {
    if (this.dynamicImportCollection.has(k)) {
      this.dynamicImportCollection.get(k).add(v);
    } else {
      this.dynamicImportCollection.set(k, new Set([v]));
    }
  }

  extractLastSegment(path) {
    const slashIndex = path.lastIndexOf('/');
    const dotIndex = path.lastIndexOf('.');

    const lastSeparatorIndex = Math.max(slashIndex, dotIndex);
    if (lastSeparatorIndex !== -1 && lastSeparatorIndex < path.length - 1) {
        return path.slice(lastSeparatorIndex + 1);
    }

    return null;
  }

  hasDefaultInMemberChain(memberChain) {
    return memberChain.includes(DEFAULT);
  }

  setImportType(modulePath, type) {
    this.dynamicImportType.set(modulePath, type);
  }

  handleImportBuilder(node) {
    ts.getAllDecorators(node)?.forEach(element => {
      if (element?.getText() === '@' + ARKUI_BUILDER) {
        this.interfacesNeedToImport.add(ARKUI_BUILDER);
        return;
      }
    });
  }

  hasKitArkUI(node) {
    return node.text?.includes(OHOS_KIT_ARKUI);
  }

  getCoreFilename(fileName) {
    if (fileName.endsWith(EXTNAME_D_ETS)) {
      return fileName.slice(0, -EXTNAME_D_ETS.length);
    }
    if (fileName.endsWith(EXTNAME_D_TS)) {
      return fileName.slice(0, -EXTNAME_D_TS.length);
    }
    return fileName;
  }

  isNeedAddImports(node) {
    if (!ts.isSourceFile(node)) {
      return false;
    }

    if (node.fileName.includes(OHOS_ARKUI) ||
      whiteFileList.includes(this.getCoreFilename(path.basename(node.fileName))) ||
      this.hasKitArkUI(node)) {
      return true;
    }

    return false;
  }

  processSourceFileForUIImport(node, newStatements) {
    const updatedStatements = ts.factory.createNodeArray(newStatements);
    const updatedSourceFile = ts.factory.updateSourceFile(node,
      updatedStatements,
      node.isDeclarationFile,
      node.referencedFiles,
      node.typeReferenceDirectives,
      node.hasNoDefaultLib,
      node.libReferenceDirectives
    );

    const updatedCode = this.printer.printFile(updatedSourceFile);
    if (this.outPath) {
      this.writeSourceFileToOutPut(updatedSourceFile, updatedCode);
    } else {
      fs.writeFileSync(updatedSourceFile.fileName, updatedCode);
    }
  }

  writeSourceFileToOutPut(sourceFile, context = sourceFile.text) {
    const outFile = path.resolve(sourceFile.fileName.replace(this.inputDir,
      this.outPath));
    this.safeWriteFileSync(outFile, context);
  }

  safeWriteFileSync(filePath, content) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  }

  addArkUIPath(node, moduleName) {
    if (ts.isSourceFile(node)) {
      const fileName = node.fileName;
      if (apiDir.some(path => fileName.includes(API_PATH + path + '/'))) {
        return '.' + moduleName;
      } else if (apiInternalDir.some(path => fileName.includes(API_PATH + path + '/'))) {
        return '../.' + moduleName;
      }
    }
    return moduleName;
  }

  processAddUIImport(node, compImportSpecifiers, stateImportSpecifiers, newStatements) {
    if (!this.isNeedAddImports(node)) {
      return;
    }

    if (compImportSpecifiers.length) {
      const moduleName = this.addArkUIPath(node, OHOS_ARKUI_COMPONENT);
      const compImportDeclaration = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(false,
          undefined,
          ts.factory.createNamedImports(
            compImportSpecifiers
          )
        ),
        ts.factory.createStringLiteral(moduleName, true),
        undefined
      );
      newStatements.splice(this.insertPosition, 0, compImportDeclaration);
    }

    if (stateImportSpecifiers.length) {
      const moduleName = this.addArkUIPath(node, OHOS_ARKUI_STATEMANAGEMENT);
      const stateImportDeclaration = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(false,
          undefined,
          ts.factory.createNamedImports(
            stateImportSpecifiers
          )
        ),
        ts.factory.createStringLiteral(moduleName, true),
        undefined
      );
      newStatements.splice(this.insertPosition, 0, stateImportDeclaration);
    }
  }

  getDeclarationNode(node) {
    const symbol = this.trueSymbolAtLocation(node);
    return HandleUIImports.getDeclaration(symbol);
  }

  static getDeclaration(tsSymbol) {
    if (tsSymbol?.declarations && tsSymbol.declarations.length > 0) {
      return tsSymbol.declarations[0];
    }

    return undefined;
  }

  followIfAliased(symbol) {
    if ((symbol.getFlags() & ts.SymbolFlags.Alias) !== 0) {
      return this.typeChecker.getAliasedSymbol(symbol);
    }

    return symbol;
  }

  trueSymbolAtLocation(node) {
    const cache = this.trueSymbolAtLocationCache;
    const val = cache.get(node);

    if (val !== undefined) {
      return val !== null ? val : undefined;
    }

    let symbol = this.typeChecker.getSymbolAtLocation(node);

    if (symbol === undefined) {
      cache.set(node, null);
      return undefined;
    }

    symbol = this.followIfAliased(symbol);
    cache.set(node, symbol);

    return symbol;
  }

  shouldSkipIdentifier(identifier) {
    const name = identifier.text;
    const skippedList = new Set([ARKUI_EXTEND, ARKUI_STYLES]);
    if (skippedList.has(name)) {
      return true;
    }

    if (!whiteList.has(name)) {
      return true;
    }

    const symbol = this.typeChecker.getSymbolAtLocation(identifier);
    if (symbol) {
      const decl = this.getDeclarationNode(identifier);
      if (this.isDeclFromSDK(decl, identifier)) {
        return true;
      }
    }

    return this.interfacesNeedToImport.has(name);
  }

  isDeclFromSDK(decl, identifier) {
    const rootNode = decl?.getSourceFile();
    if (!rootNode) {
      return false;
    }

    if (rootNode === identifier.getSourceFile()) {
      return true;
    }

    const fileName = rootNode.fileName;
    if (!fileName.includes('node_modules') && fileName.includes(this.inputDir)) {
      return true;
    }

    return false;
  }

  extractImportedNames(sourceFile) {
    for (const statement of sourceFile.statements) {
      if (!ts.isImportDeclaration(statement)) {
        continue;
      }

      const importClause = statement.importClause;
      if (!importClause) {
        continue;
      }

      const namedBindings = importClause.namedBindings;
      if (!namedBindings || !ts.isNamedImports(namedBindings)) {
        continue;
      }

      for (const specifier of namedBindings.elements) {
        const importedName = specifier.name.getText(sourceFile);
        this.importedInterfaces.add(importedName);
      }
    }
  }
}

function processInteropUI(inputPath, exportFlag, outputPath = '') {
  const filePaths = getDeclgenFiles(inputPath);
  const program = ts.createProgram(filePaths, defaultCompilerOptions());
  const sourceFiles = getSourceFiles(program, filePaths);

  const createTransformer = (ctx) => {
    return (sourceFile) => {
      const handleUIImports = new HandleUIImports(program, ctx, outputPath, inputPath, exportFlag);
      return handleUIImports.createCustomTransformer(sourceFile);
    };
  };
  const res = ts.transform(sourceFiles, [createTransformer]);
  return res;
}

function getDeclgenFiles(dir, filePaths = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getDeclgenFiles(filePath, filePaths);
    } else if (stat.isFile() && (file.endsWith(EXTNAME_D_ETS) || file.endsWith(EXTNAME_D_TS))) {
      filePaths.push(filePath);
    }
  });

  return filePaths;
}

function defaultCompilerOptions() {
  return {
    target: ts.ScriptTarget.Latest,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    checkJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmit: false
  };
}

function getSourceFiles(program, filePaths) {
  const sourceFiles = [];

  filePaths.forEach(filePath => {
    sourceFiles.push(program.getSourceFile(filePath));
  });

  return sourceFiles;
}

class ImportType {
  static DEFAULT = 0;
  static NAMED = 1;
  static ALIAS = 2;
  static DEFAULT_AND_NAMED = 3;
}

exports.processInteropUI = processInteropUI;

function writeAnnotationFile(inputPath, outputPath) {
  if (!outputPath) {
    outputPath = inputPath;
  }

  fs.writeFileSync(path.resolve(outputPath, ANNOTATION_FILENAME), ANNOTATION, 'utf8');
}

const ANNOTATION_FILENAME = '@ohos.arkui.GlobalAnnotation.d.ets';

const ANNOTATION = `'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */

/**
 * Defining State annotation
 * State variable that holds the state property and is used to render the owning custom component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface State {};

/**
 * Defining Prop annotation
 * Prop is an annotation which is mutable, and its changes will not be synchronized to the parent component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Prop {};

/**
 * Defining Link annotation
 * Link decorated variable creates two-way synchronization with a variable of its parent component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Link {};

/**
 * Defining Observed annotation
 * Observed is used to decorate a class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Observed {};

/**
 * Defining Track annotation
 * Track is a decorator used to decorate properties of class objects.
 * Any changes to the properties decorated by Track will trigger only updates to the UI associated with those properties.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Track {};

/**
 * Defining ObjectLink annotation
 * ObjectLink is used to observe property changes in nested class objects.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface ObjectLink {};

/**
 * Defining StorageProp annotation
 * StorageProp a one-way data synchronization is established from the attribute with the given key in AppStorage to the variable.
 * A local change can be made, but it will not be synchronized to AppStorage.
 * An update to the attribute with the given key in AppStorage will overwrite local changes.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface StorageProp {
  /**
   * The give property in AppStorage.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  property: string;
};

/**
 * Defining StorageLink annotation
 * StorageLink is used to create a two-way data synchronization between the variable
 * it decorates and the attribute with the given key in AppStorage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface StorageLink {
  /**
   * The give property in AppStorage.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  property: string;
};

/**
 * Defining LocalStorageProp annotation
 * LocalStorageProp is a one-way data synchronization is established from the attribute with the given key in
 * LocalStorage to the variable. This means that, local changes
 * (if any) will not be synchronized to LocalStorage, and an update to the attribute with the given key in LocalStorage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStorageProp {
  /**
   * The give property in LocalStorage.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  property: string;
};

/**
 * Defining LocalStorageLink annotation
 * LocalStorageLink is used to create a two-way data synchronization with the attribute
 * in LocalStorage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStorageLink {
  /**
   * The give property in LocalStorage.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  property: string;
};

/**
 * Defining Provide annotation
 * Provide is used for two-way data synchronization with descendant components when
 * state data needs to be transferred between multiple levels. An @Provide decorated state
 * variable exists in the ancestor component and is said to be "provided" to descendent components.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Provide {
  /**
   * The alias name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  alias: string = "";
  /**
   * allowOverride is used to override an existing @Provide decorated variable.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  allowOverride: boolean = false;
};

/**
 * Defining Consume annotation
 * Consume is used to access the provided state variable for a descendent component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Consume {
  /**
   * The alias name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  alias: string = "";
};

/**
 * Defining Watch annotation
 * Watch is used to listen for state variables.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Watch {
  /**
   * The callback function name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  callback: string;
};

/**
 * Defining Require annotation
 * Require is a decorator for declaring that parameters - regular variables.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Require {};

/**
 * Defining Local annotation
 * Local is the internal state of a component, which enables the variables in the
 * custom component to observe changes.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Local {};

/**
 * Defining Param annotation
 * Param indicates the state passed in from the external, ensuring that
 * data can be synchronized between the parent and child components.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Param {};

/**
 * Defining Once annotation
 * Once annotation accepts values passed in only during variable initialization
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Once {};

/**
 * Defining Event annotation
 * Event is used to decorate the callback method is a standard, indicating that the
 * child component needs to pass in the callback for updating the data source.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Event {};

/**
 * Defining Provider annotation
 * Provider is used for two-way data synchronization with descendant components when
 * state data needs to be transferred between multiple levels. An @Provider decorated state
 * variable exists in the ancestor component and is said to be "provider" to descendent components.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Provider {
  /**
   * The alias name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  alias: string = "";
};

/**
 * Defining Consumer annotation
 * Consumer is used to access the provided state variable for a descendent component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Consumer {
  /**
   * The alias name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  alias: string = "";
};

/**
 * Defining Monitor annotation
 * Monitor provides the capability of listening for state variables of V2.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Monitor {
  /**
   * Listened property name.
   *
   * @type { string[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  path: string[];
};

/**
 * Defining Computed annotation
 * Computed is a method decorator that decorates the getter method.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Computed {};

/**
 * Defining ObservedV2 annotation
 * ObservedV2 is used to decorate with class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface ObservedV2 {};

/**
 * Defining Trace annotation
 * Trace is used to directly observe the property changes of nested objects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Trace {};

/**
 * Defines Builder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface Builder {}

/**
 * Defines BuilderParam Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface BuilderParam {}

/**
 * Defining AnimatableExtend annotation
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export declare @interface AnimatableExtend {}

/**
 * Defining Reusable Annotation that is used to decorate @Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface Reusable {}

/**
 * Defining ReusableV2 Annotation that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface ReusableV2 {}

/**
 * Defines Entry Annotation.
 *
 * Entry is an Annotation and it supports parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface Entry {
  /**
   * Named route name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  routeName: string = "";

  /**
   * Name of the function which returns LocalStorage instance.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  storage: string = "";

  /**
   * Determines whether to use the LocalStorage instance object returned by UIContext.getSharedLocalStorage() interface.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 22
   */
  useSharedStorage: boolean = false;
}

/**
 * Defining Component Annotation
 *
 * Component is an Annotation to define a custom component using state management V1.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface Component {}

/**
 * Defining ComponentV2 Annotation
 *
 * ComponentV2 is an Annotation to define a custom component using state management V2.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface ComponentV2 {}

/**
 * Defining CustomDialog Annotation
 *
 * CustomDialog is an Annotation to define a custom dialog.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22
 */
@Retention({policy: "SOURCE"})
export @interface CustomDialog {}
`;

const whiteList = new Set([
  'ASTCResource', 'AbstractProperty', 'AccelerationOptions', 'AccessibilityAction',
  'AccessibilityActionInterceptResult', 'AccessibilityCallback', 'AccessibilityHoverEvent',
  'AccessibilityHoverType', 'AccessibilityOptions', 'AccessibilityRoleType',
  'AccessibilitySamePageMode', 'ActionSheet', 'ActionSheetButtonOptions', 'ActionSheetOffset',
  'ActionSheetOptions', 'AdaptiveColor', 'AdsBlockedDetails', 'Affinity', 'AlertDialog',
  'AlertDialogButtonBaseOptions', 'AlertDialogButtonOptions', 'AlertDialogParam',
  'AlertDialogParamWithButtons', 'AlertDialogParamWithConfirm', 'AlertDialogParamWithOptions',
  'AlignRuleOption', 'Alignment', 'AlphabetIndexerOptions', 'AnchoredColorMode',
  'AnimatableArithmetic', 'AnimatableExtend', 'AnimateParam', 'AnimationExtender',
  'AnimationMode', 'AnimationPropertyType', 'AnimationRange', 'AnimationStatus',
  'AnimatorInterface', 'AppRotation', 'AppStorage', 'AppearSymbolEffect', 'Area',
  'ArrowPointPosition', 'ArrowPosition', 'ArrowStyle', 'AutoCapitalizationMode',
  'AutoPlayOptions', 'AvailableLayoutArea', 'AvoidanceMode', 'Axis', 'AxisAction',
  'AxisEvent', 'AxisModel', 'BackgroundBlurStyleOptions', 'BackgroundBrightnessOptions',
  'BackgroundColorStyle', 'BackgroundEffectOptions', 'BackgroundImageOptions', 'BadgeParam',
  'BadgeParamWithNumber', 'BadgeParamWithString', 'BadgePosition', 'BadgeStyle',
  'BarGridColumnOptions', 'BarMode', 'BarPosition', 'BarState', 'BarStyle',
  'BarrierDirection', 'BarrierStyle', 'BaseCustomComponent', 'BaseEvent', 'BaseGestureEvent',
  'BaseHandlerOptions', 'BaseShape', 'BaseSpan', 'BaselineOffsetStyle', 'Bias', 'BindOptions',
  'BlendApplyType', 'BlendMode', 'Blender', 'BlurOptions', 'BlurStyle',
  'BlurStyleActivePolicy', 'BlurStyleOptions', 'BoardStyle', 'BorderImageOption',
  'BorderOptions', 'BorderRadiuses', 'BorderStyle', 'BottomTabBarStyle', 'BounceSymbolEffect',
  'BreakPoints', 'BreakpointsReference', 'Builder', 'BuilderAttachment',
  'BuilderAttachmentInterface', 'BuilderParam', 'BusinessError', 'ButtonConfiguration',
  'ButtonIconOptions', 'ButtonOptions', 'ButtonRole', 'ButtonStyle', 'ButtonStyleMode',
  'ButtonTriggerClickCallback', 'ButtonType', 'CacheMode', 'CalendarAlign',
  'CalendarController', 'CalendarDay', 'CalendarDialogOptions', 'CalendarOptions',
  'CalendarPickerDialog', 'CalendarRequestedData', 'CalendarSelectedDate', 'Callback',
  'CallbackBuffer', 'CallbackKind', 'CallbackResource', 'CallbackResourceHolder',
  'CancelButtonOptions', 'CancelButtonStyle', 'CancelButtonSymbolOptions', 'CanvasDirection',
  'CanvasFillRule', 'CanvasGradient', 'CanvasLineCap', 'CanvasLineJoin', 'CanvasOptions',
  'CanvasPath', 'CanvasPattern', 'CanvasRenderer', 'CanvasRenderingContext2D',
  'CanvasTextAlign', 'CanvasTextBaseline', 'CapsuleStyleOptions', 'CaretOffset', 'CaretStyle',
  'ChainAnimationOptions', 'ChainEdgeEffect', 'ChainStyle', 'ChainWeightOptions',
  'CheckBoxConfiguration', 'CheckBoxShape', 'CheckboxGroupOptions', 'CheckboxGroupResult',
  'CheckboxOptions', 'ChildHitFilterOption', 'ChildrenMainSize', 'CircleOptions',
  'CircleShape', 'CircleStyleOptions', 'ClickEffect', 'ClickEffectLevel', 'ClickEvent',
  'ClientAuthenticationHandler', 'CloseSwipeActionOptions', 'Color', 'ColorContent',
  'ColorFilter', 'ColorMetrics', 'ColorMode', 'ColorSpace', 'ColorStop', 'ColoringStrategy',
  'ColumnOptions', 'ColumnOptionsV2', 'ColumnSplitDividerStyle', 'CommonConfiguration',
  'CommonProgressStyleOptions', 'CommonShape', 'CommonShapeMethod', 'CommonTransition',
  'ComponentContent', 'ComponentOptions', 'ComponentRoot', 'Configuration',
  'ConsoleMessage', 'ConstraintSizeOptions', 'Content', 'ContentClipMode', 'ContentCoverOptions',
  'ContentDidScrollCallback', 'ContentType', 'Context', 'ContextMenu',
  'ContextMenuAnimationOptions', 'ContextMenuEditStateFlags', 'ContextMenuInputFieldType',
  'ContextMenuMediaType', 'ContextMenuOptions', 'ContextMenuSourceType', 'ControlSize',
  'ControllerHandler', 'CopyEvent', 'CopyOptions', 'CrownAction', 'CrownEvent',
  'CrownSensitivity', 'CurrentDayStyle', 'Curve', 'CustomBuilder', 'CustomComponent',
  'CustomComponentV2', 'CustomDialogController', 'CustomDialogControllerOptions',
  'CustomNodeBuilder', 'CustomPopupOptions', 'CustomSpan', 'CustomSpanDrawInfo',
  'CustomSpanMeasureInfo', 'CustomSpanMetrics', 'CustomTheme', 'CutEvent',
  'DataAddOperation', 'DataChangeListener', 'DataChangeOperation', 'DataDeleteOperation',
  'DataExchangeOperation', 'DataMoveOperation', 'DataOperation', 'DataOperationType',
  'DataPanelConfiguration', 'DataPanelOptions', 'DataPanelShadowOptions', 'DataPanelType',
  'DataReloadOperation', 'DataResubmissionHandler', 'DatePickerDialog',
  'DatePickerDialogOptions', 'DatePickerMode', 'DatePickerOptions', 'DatePickerResult',
  'DateRange', 'DateTimeOptions', 'DecorationStyle', 'DecorationStyleInterface',
  'DecorationStyleResult', 'Degree', 'DeleteValue', 'Deserializer', 'DialogAlignment',
  'DialogButtonDirection', 'DialogButtonStyle', 'DialogDisplayMode', 'DigitIndicator',
  'Dimension', 'Direction', 'DirectionalEdgesT', 'DisableSymbolEffect', 'DisappearSymbolEffect',
  'DismissContentCoverAction', 'DismissContinueReason', 'DismissDialogAction',
  'DismissFollowUpAction', 'DismissMenuAction', 'DismissPopupAction', 'DismissReason',
  'DismissSheetAction', 'DistributionType', 'DisturbanceFieldOptions', 'DisturbanceFieldShape',
  'DividerMode', 'DividerOptions', 'DividerStyle', 'DividerStyleOptions', 'DotIndicator',
  'DoubleAnimationParam', 'DpiFollowStrategy', 'DragBehavior', 'DragEvent',
  'DragInteractionOptions', 'DragItemInfo', 'DragPointCoordinate', 'DragPreviewLiftingScale',
  'DragPreviewMode', 'DragPreviewOptions', 'DragResult', 'DraggingSizeChangeEffect',
  'DrawContext', 'DrawModifier', 'DrawableDescriptor', 'DrawingCanvas', 'DrawingColorFilter',
  'DrawingLattice', 'DrawingRenderingContext', 'DropOptions', 'DynamicNode',
  'DynamicRangeMode', 'EclipseStyleOptions', 'Edge', 'EdgeColors', 'EdgeEffect',
  'EdgeEffectOptions', 'EdgeOutlineStyles', 'EdgeOutlineWidths', 'EdgeStyles', 'EdgeWidth',
  'EdgeWidths', 'Edges', 'EditMenuOptions', 'EditMode', 'EditableTextChangeValue',
  'EditableTextOnChangeCallback', 'EffectDirection', 'EffectEdge', 'EffectFillStyle',
  'EffectScope', 'EffectType', 'EllipseOptions', 'EllipseShape', 'EllipsisMode',
  'EmbeddedDpiFollowStrategy', 'EmbeddedOptions', 'EmbeddedType',
  'EmbeddedWindowModeFollowStrategy', 'EmitterOptions', 'EmitterParticleOptions',
  'EmitterProperty', 'EnterKeyType', 'Entry', 'EntryOptions', 'EnvPropsOptions',
  'Environment', 'ErrorCallback', 'Event', 'EventEmulator', 'EventLocationInfo',
  'EventQueryType', 'EventResult', 'EventTarget', 'EventTargetInfo', 'ExchangeIndex',
  'ExchangeKey', 'ExpandedMenuItemOptions', 'ExpectedFrameRateRange', 'Extend', 'FP',
  'FadingEdgeOptions', 'FileSelectorMode', 'FileSelectorParam', 'FileSelectorResult',
  'FillMode', 'Filter', 'FingerInfo', 'FinishCallbackType', 'FirstMeaningfulPaint',
  'FlexAlign', 'FlexDirection', 'FlexOptions', 'FlexSpaceOptions', 'FlexWrap',
  'FocusAxisEvent', 'FocusBoxStyle', 'FocusController', 'FocusDrawLevel', 'FocusMovement',
  'FocusPriority', 'FocusWrapMode', 'FoldStatus', 'FolderStackOptions', 'Font',
  'FontInfo', 'FontOptions', 'FontSettingOptions', 'FontStyle', 'FontWeight',
  'ForegroundBlurStyleOptions', 'ForegroundEffectOptions', 'FormCallbackInfo',
  'FormDimension', 'FormInfo', 'FormLinkOptions', 'FormRenderingMode', 'FormShape',
  'FractionStop', 'FrameNode', 'FrictionMotion', 'FullScreenEnterEvent',
  'FullScreenExitHandler', 'FullscreenInfo', 'FunctionKey', 'GaugeConfiguration',
  'GaugeIndicatorOptions', 'GaugeOptions', 'GaugeShadowOptions', 'GeometryInfo',
  'GeometryTransitionOptions', 'Gesture', 'GestureControl', 'GestureEvent', 'GestureGroup',
  'GestureGroupGestureHandlerOptions', 'GestureGroupHandler', 'GestureHandler',
  'GestureInfo', 'GestureJudgeResult', 'GestureMask', 'GestureMode', 'GestureModifier',
  'GesturePriority', 'GestureRecognizer', 'GestureRecognizerJudgeBeginCallback',
  'GestureRecognizerState', 'GestureStyle', 'GestureType', 'GetItemMainSizeByIndex',
  'GradientDirection', 'GridColColumnOption', 'GridColOptions', 'GridContainerOptions',
  'GridDirection', 'GridItemAlignment', 'GridItemOptions', 'GridItemStyle',
  'GridLayoutOptions', 'GridRowColumnOption', 'GridRowDirection', 'GridRowOptions',
  'GridRowSizeOption', 'GuideLinePosition', 'GuideLineStyle', 'GutterOption',
  'HapticFeedbackMode', 'Header', 'HeightBreakpoint', 'HierarchicalSymbolEffect',
  'HistoricalPoint', 'HitTestMode', 'HitTestType', 'HorizontalAlign', 'HoverCallback',
  'HoverEffect', 'HoverEvent', 'HoverEventParam', 'HoverModeAreaType', 'HttpAuthHandler',
  'ICurve', 'IDataSource', 'IMonitor', 'IMonitorValue', 'IPropertySubscriber',
  'ISinglePropertyChangeSubscriber', 'IconOptions', 'IlluminatedType', 'ImageAIOptions',
  'ImageAnalyzerConfig', 'ImageAnalyzerController', 'ImageAnalyzerType', 'ImageAttachment',
  'ImageAttachmentInterface', 'ImageAttachmentLayoutStyle', 'ImageBitmap',
  'ImageCompleteCallback', 'ImageContent', 'ImageData', 'ImageError', 'ImageErrorCallback',
  'ImageFit', 'ImageFrameInfo', 'ImageInterpolation', 'ImageLoadResult', 'ImageModifier',
  'ImageParticleParameters', 'ImageRenderMode', 'ImageRepeat', 'ImageRotateOrientation',
  'ImageSize', 'ImageSmoothingQuality', 'ImageSourceSize', 'ImageSpanAlignment',
  'IndexerAlign', 'Indicator', 'IndicatorComponentController', 'IndicatorStyle',
  'InputCounterOptions', 'InputType', 'InsertValue', 'IntelligentTrackingPreventionDetails',
  'IntentionCode', 'InteractionHand', 'InterceptionModeCallback', 'InterceptionShowCallback',
  'Interop', 'InvertOptions', 'IsolatedOptions', 'ItemAlign', 'ItemDragEventHandler',
  'ItemDragInfo', 'ItemState', 'JavaScriptProxy', 'JsGeolocation', 'JsResult', 'KVMContext',
  'KeyEvent', 'KeyProcessingMode', 'KeySource', 'KeyType', 'KeyboardAppearance',
  'KeyboardAvoidMode', 'KeyboardOptions', 'KeyframeAnimateParam', 'KeyframeState', 'LPX',
  'LabelStyle', 'LargestContentfulPaint', 'LaunchMode', 'LayoutBorderInfo', 'LayoutChild',
  'LayoutDirection', 'LayoutInfo', 'LayoutManager', 'LayoutMode', 'LayoutPolicy',
  'LayoutSafeAreaEdge', 'LayoutSafeAreaType', 'LayoutStyle', 'Layoutable', 'LazyForEachOps',
  'LeadingMarginPlaceholder', 'Length', 'LengthConstrain', 'LengthMetrics',
  'LengthMetricsUnit', 'LengthUnit', 'LetterSpacingStyle', 'LightSource',
  'LineBreakStrategy', 'LineCapStyle', 'LineHeightStyle', 'LineJoinStyle', 'LineMetrics',
  'LineOptions', 'LineSpacingOptions', 'LinearGradient', 'LinearGradientBlurOptions',
  'LinearGradientOptions', 'LinearIndicatorController', 'LinearIndicatorStartOptions',
  'LinearIndicatorStyle', 'LinearStyleOptions', 'ListDividerOptions', 'ListItemAlign',
  'ListItemGroupArea', 'ListItemGroupOptions', 'ListItemGroupStyle', 'ListItemOptions',
  'ListItemStyle', 'ListOptions', 'ListScroller', 'LoadCommittedDetails', 'Loader',
  'LoadingProgressConfiguration', 'LoadingProgressStyle', 'LocalBuilder', 'LocalStorage',
  'LocalizedAlignRuleOptions', 'LocalizedAlignment', 'LocalizedBarrierDirection',
  'LocalizedBarrierStyle', 'LocalizedBorderRadiuses', 'LocalizedDragPointCoordinate',
  'LocalizedEdgeColors', 'LocalizedEdgeWidths', 'LocalizedEdges',
  'LocalizedHorizontalAlignParam', 'LocalizedMargin', 'LocalizedPadding',
  'LocalizedPosition', 'LocalizedVerticalAlignParam', 'LocationDescription',
  'LocationIconStyle', 'LongPressGesture', 'LongPressGestureEvent', 'LongPressGestureHandler',
  'LongPressGestureHandlerOptions', 'LongPressGestureParams', 'LongPressRecognizer',
  'LunarSwitchStyle', 'Margin', 'MarkStyle', 'MarqueeOptions', 'MarqueeStartPolicy',
  'MarqueeState', 'MarqueeUpdateStrategy', 'Materialized', 'Matrix2D', 'MaxLinesMode',
  'MaxLinesOptions', 'Measurable', 'MeasureOptions', 'MeasureResult', 'MenuAlignType',
  'MenuElement', 'MenuItemConfiguration', 'MenuItemGroupOptions', 'MenuItemOptions',
  'MenuItemOptionsV2', 'MenuMaskType', 'MenuOnAppearCallback', 'MenuOptions',
  'MenuOutlineOptions', 'MenuPolicy', 'MenuPreviewMode', 'MenuType', 'MessageLevel',
  'MixedMode', 'ModalMode', 'ModalTransition', 'ModelType', 'ModifierKey', 'Monitor',
  'MonthData', 'MoreButtonOptions', 'MotionBlurAnchor', 'MotionBlurOptions',
  'MotionPathOptions', 'MouseAction', 'MouseButton', 'MouseEvent', 'MoveIndex',
  'MultiShadowOptions', 'MutableStyledString', 'NativeEmbedDataInfo', 'NativeEmbedInfo',
  'NativeEmbedStatus', 'NativeEmbedTouchInfo', 'NativeEmbedVisibilityInfo',
  'NativeMediaPlayerConfig', 'NativeXComponentParameters', 'NavBar', 'NavBarPosition',
  'NavContentInfo', 'NavDestinationActiveReason', 'NavDestinationCommonTitle',
  'NavDestinationContext', 'NavDestinationCustomTitle', 'NavDestinationInfo',
  'NavDestinationMode', 'NavDestinationTransition', 'NavExtender', 'NavPathInfo',
  'NavPathStack', 'NavRouteMode', 'NavigationAnimatedTransition', 'NavigationCommonTitle',
  'NavigationCustomTitle', 'NavigationDividerStyle', 'NavigationInfo',
  'NavigationInterception', 'NavigationMenuItem', 'NavigationMenuOptions',
  'NavigationMode', 'NavigationOperation', 'NavigationOptions',
  'NavigationSystemTransitionType', 'NavigationTitleMode', 'NavigationTitleOptions',
  'NavigationToolbarOptions', 'NavigationTransitionProxy', 'NavigationType',
  'NestedScrollInfo', 'NestedScrollMode', 'NestedScrollOptions', 'NestedScrollOptionsExt',
  'Node', 'NodeController', 'NonCurrentDayStyle', 'Nullable', 'ObscuredReasons',
  'OffscreenCanvas', 'OffscreenCanvasRenderingContext2D', 'Offset', 'OffsetOptions',
  'OffsetResult', 'OnAdsBlockedCallback', 'OnAlertEvent', 'OnAlphabetIndexerPopupSelectCallback',
  'OnAlphabetIndexerRequestPopupDataCallback', 'OnAlphabetIndexerSelectCallback',
  'OnAudioStateChangedEvent', 'OnBeforeUnloadEvent', 'OnCheckboxChangeCallback',
  'OnCheckboxGroupChangeCallback', 'OnClientAuthenticationEvent', 'OnConfirmEvent',
  'OnConsoleEvent', 'OnContentScrollCallback', 'OnContextMenuHideCallback',
  'OnContextMenuShowEvent', 'OnDataResubmittedEvent', 'OnDidChangeCallback',
  'OnDownloadStartEvent', 'OnErrorReceiveEvent', 'OnFaviconReceivedEvent',
  'OnFirstContentfulPaintEvent', 'OnFirstMeaningfulPaintCallback', 'OnFoldStatusChangeCallback',
  'OnFoldStatusChangeInfo', 'OnFullScreenEnterCallback', 'OnGeolocationShowEvent',
  'OnHoverStatusChangeCallback', 'OnHttpAuthRequestEvent', 'OnHttpErrorReceiveEvent',
  'OnIntelligentTrackingPreventionCallback', 'OnInterceptRequestEvent',
  'OnLargestContentfulPaintCallback', 'OnLinearIndicatorChangeCallback', 'OnLoadInterceptEvent',
  'OnMoveHandler', 'OnNativeEmbedVisibilityChangeCallback', 'OnNativeLoadCallback',
  'OnNavigationEntryCommittedCallback', 'OnOverScrollEvent', 'OnOverrideUrlLoadingCallback',
  'OnPageBeginEvent', 'OnPageEndEvent', 'OnPageVisibleEvent', 'OnPasteCallback',
  'OnPermissionRequestEvent', 'OnProgressChangeEvent', 'OnPromptEvent',
  'OnRefreshAccessedHistoryEvent', 'OnRenderExitedEvent',
  'OnRenderProcessNotRespondingCallback', 'OnRenderProcessRespondingCallback',
  'OnResourceLoadEvent', 'OnSafeBrowsingCheckResultCallback', 'OnScaleChangeEvent',
  'OnScreenCaptureRequestEvent', 'OnScrollCallback', 'OnScrollEdgeCallback', 'OnScrollEvent',
  'OnScrollFrameBeginCallback', 'OnScrollFrameBeginHandlerResult',
  'OnScrollVisibleContentChangeCallback', 'OnSearchResultReceiveEvent',
  'OnShowFileSelectorEvent', 'OnSslErrorEventCallback', 'OnSslErrorEventReceiveEvent',
  'OnSubmitCallback', 'OnSwiperAnimationEndCallback', 'OnSwiperAnimationStartCallback',
  'OnSwiperGestureSwipeCallback', 'OnTabsAnimationEndCallback', 'OnTabsAnimationStartCallback',
  'OnTabsContentWillChangeCallback', 'OnTabsGestureSwipeCallback',
  'OnTextSelectionChangeCallback', 'OnTitleReceiveEvent', 'OnTouchIconUrlReceivedEvent',
  'OnViewportFitChangedCallback', 'OnWillScrollCallback', 'OnWindowNewEvent', 'Once',
  'OptionWidthMode', 'Optional', 'OutlineOptions', 'OutlineRadiuses', 'OutlineStyle',
  'OverScrollMode', 'OverlayOffset', 'OverlayOptions', 'PX', 'Padding', 'PageFlipMode',
  'PageTransitionCallback', 'PageTransitionEnter', 'PageTransitionExit',
  'PageTransitionOptions', 'PanDirection', 'PanGesture', 'PanGestureEvent',
  'PanGestureHandler', 'PanGestureHandlerOptions', 'PanGestureOptions', 'PanGestureParams',
  'PanRecognizer', 'PanelHeight', 'PanelMode', 'PanelType', 'ParagraphStyle',
  'ParagraphStyleInterface', 'ParticleAnnulusRegion', 'ParticleColorOptions',
  'ParticleColorPropertyOptions', 'ParticleColorPropertyUpdaterConfigs',
  'ParticleColorUpdaterOptions', 'ParticleConfigs', 'ParticleEmitterShape',
  'ParticleOptions', 'ParticlePropertyAnimation', 'ParticlePropertyOptions',
  'ParticlePropertyUpdaterConfigs', 'ParticleTuple', 'ParticleType', 'ParticleUpdater',
  'ParticleUpdaterOptions', 'Particles', 'PasswordIcon', 'PasteButtonOnClickResult',
  'PasteButtonOptions', 'PasteDescription', 'PasteEvent', 'PasteEventCallback',
  'PasteIconStyle', 'Path2D', 'PathOptions', 'PathShape', 'PathShapeOptions',
  'PatternLockChallengeResult', 'PatternLockController', 'Percentage',
  'PerfMonitorActionType', 'PerfMonitorSourceType', 'PermissionRequest',
  'PersistPropsOptions', 'PersistentStorage', 'PickerBackgroundStyle',
  'PickerDialogButtonStyle', 'PickerTextStyle', 'PinchGesture', 'PinchGestureEvent',
  'PinchGestureHandler', 'PinchGestureHandlerOptions', 'PinchGestureParams',
  'PinchRecognizer', 'PixelMap', 'PixelMapMock', 'PixelRoundCalcPolicy', 'PixelRoundMode',
  'PixelRoundPolicy', 'PixelStretchEffectOptions', 'PlaceholderStyle', 'Placement',
  'PlayMode', 'PlaybackInfo', 'PlaybackSpeed', 'PluginComponentOptions',
  'PluginComponentTemplate', 'PluginErrorCallback', 'PluginErrorData', 'Point',
  'PointLightStyle', 'PointParticleParameters', 'PointerStyle', 'PolygonOptions',
  'PolylineOptions', 'PopInfo', 'PopupBorderLinearGradient', 'PopupCommonOptions',
  'PopupMaskType', 'PopupMessageOptions', 'PopupOptions', 'PopupStateChangeParam',
  'Position', 'PositionT', 'PositionWithAffinity', 'PosterOptions', 'PreDragStatus',
  'PreparedInfo', 'Preview', 'PreviewConfiguration', 'PreviewMenuOptions', 'PreviewParams',
  'PreviewText', 'Profiler', 'ProgressConfiguration', 'ProgressMask', 'ProgressOptions',
  'ProgressStatus', 'ProgressStyle', 'ProgressStyleMap', 'ProgressStyleOptions',
  'ProgressType', 'Prop', 'ProtectedResourceType', 'Provide', 'ProvideOptions',
  'Provider', 'PulseSymbolEffect', 'QuickReplaceSymbolEffect', 'RRect',
  'RadialGradientOptions', 'RadioConfiguration', 'RadioIndicatorType', 'RadioOptions',
  'RadioStyle', 'RatingConfiguration', 'RatingOptions', 'RawFileDescriptor',
  'ReceiveCallback', 'RectHeightStyle', 'RectOptions', 'RectResult', 'RectShape',
  'RectShapeOptions', 'RectWidthStyle', 'Rectangle', 'RefreshOptions', 'RefreshStatus',
  'RelateType', 'RenderExitReason', 'RenderFit', 'RenderMode',
  'RenderProcessNotRespondingData', 'RenderProcessNotRespondingReason',
  'RenderingContextSettings', 'RepeatItem', 'RepeatMode', 'ReplaceSymbolEffect',
  'ResizableOptions', 'ResolutionQuality', 'Resource', 'ResourceColor',
  'ResourceImageAttachmentOptions', 'ResourceStr', 'ResponseType', 'RestrictedWorker',
  'ReuseOptions', 'RichEditorBaseController', 'RichEditorBuilderSpanOptions',
  'RichEditorChangeValue', 'RichEditorController', 'RichEditorDeleteDirection',
  'RichEditorDeleteValue', 'RichEditorGesture', 'RichEditorImageSpan',
  'RichEditorImageSpanOptions', 'RichEditorImageSpanResult', 'RichEditorImageSpanStyle',
  'RichEditorImageSpanStyleResult', 'RichEditorInsertValue', 'RichEditorLayoutStyle',
  'RichEditorOptions', 'RichEditorParagraphResult', 'RichEditorParagraphStyle',
  'RichEditorParagraphStyleOptions', 'RichEditorRange', 'RichEditorResponseType',
  'RichEditorSelection', 'RichEditorSpan', 'RichEditorSpanPosition',
  'RichEditorSpanStyleOptions', 'RichEditorSpanType', 'RichEditorStyledStringController',
  'RichEditorStyledStringOptions', 'RichEditorSymbolSpanOptions',
  'RichEditorSymbolSpanStyle', 'RichEditorSymbolSpanStyleResult', 'RichEditorTextSpan',
  'RichEditorTextSpanOptions', 'RichEditorTextSpanResult', 'RichEditorTextStyle',
  'RichEditorTextStyleResult', 'RichEditorUpdateImageSpanStyleOptions',
  'RichEditorUpdateSymbolSpanStyleOptions', 'RichEditorUpdateTextSpanStyleOptions',
  'RichEditorUrlStyle', 'RingStyleOptions', 'Root', 'RootSceneSession', 'RotateOptions',
  'RotationGesture', 'RotationGestureEvent', 'RotationGestureHandler',
  'RotationGestureHandlerOptions', 'RotationGestureParams', 'RotationRecognizer',
  'RoundRectShapeOptions', 'RoundedRectOptions', 'RouteInfo', 'RouteMapConfig',
  'RouteType', 'RouterPageInfo', 'RowOptions', 'RowOptionsV2', 'RuntimeType',
  'SafeAreaEdge', 'SafeAreaType', 'SaveButtonOnClickResult', 'SaveButtonOptions',
  'SaveDescription', 'SaveIconStyle', 'ScaleOptions', 'ScaleRingStyleOptions',
  'ScaleSymbolEffect', 'ScanEffectOptions', 'Scene', 'SceneOptions', 'ScreenCaptureConfig',
  'ScreenCaptureHandler', 'ScriptItem', 'ScrollAlign', 'ScrollAnimationOptions',
  'ScrollBarDirection', 'ScrollBarMargin', 'ScrollBarOptions', 'ScrollDirection',
  'ScrollEdgeOptions', 'ScrollMotion', 'ScrollOnScrollCallback', 'ScrollOnWillScrollCallback',
  'ScrollOptions', 'ScrollPageOptions', 'ScrollResult', 'ScrollSizeMode',
  'ScrollSnapAlign', 'ScrollSnapOptions', 'ScrollSource', 'ScrollState',
  'ScrollToIndexOptions', 'ScrollableBarModeOptions', 'ScrollableCommonMethod',
  'ScrollableTargetInfo', 'Scroller', 'SearchButtonOptions', 'SearchController',
  'SearchOptions', 'SearchSubmitCallback', 'SearchType', 'SectionOptions',
  'SecurityComponentLayoutDirection', 'SecurityComponentMethod', 'SeekMode',
  'SelectOption', 'SelectStatus', 'SelectedMode', 'SelectionMenuOptions',
  'SelectionMenuOptionsExt', 'SelectionOptions', 'Serializer', 'ShadowOptions',
  'ShadowStyle', 'ShadowType', 'ShapeSize', 'SharedTransitionEffectType', 'SheetDismiss',
  'SheetInfo', 'SheetKeyboardAvoidMode', 'SheetMode', 'SheetOptions', 'SheetSize',
  'SheetTitleOptions', 'SheetType', 'ShouldBuiltInRecognizerParallelWithCallback',
  'SideBarContainerType', 'SideBarPosition', 'Size', 'SizeChangeCallback', 'SizeOptions',
  'SizeResult', 'SizeT', 'SizeType', 'SlideEffect', 'SlideRange', 'SliderBlockStyle',
  'SliderBlockType', 'SliderChangeMode', 'SliderConfiguration', 'SliderCustomContentOptions',
  'SliderInteraction', 'SliderOptions', 'SliderPrefixOptions', 'SliderShowStepOptions',
  'SliderStepItemAccessibility', 'SliderStyle', 'SliderSuffixOptions',
  'SliderTriggerChangeCallback', 'SnapshotOptions', 'SourceTool', 'SourceType',
  'SpanStyle', 'SpringBackAction', 'SpringMotion', 'SpringProp', 'SslError',
  'SslErrorEvent', 'SslErrorHandler', 'StackOptions', 'StarStyleOptions', 'State',
  'StateStyles', 'Sticky', 'StickyStyle', 'Storage', 'StyleOptions', 'StyledString',
  'StyledStringChangeValue', 'StyledStringChangedListener', 'StyledStringController',
  'StyledStringKey', 'StyledStringValue', 'Styles', 'SubMenuExpandingMode',
  'SubTabBarStyle', 'SubmitCallback', 'SubmitEvent', 'SubscribaleAbstract',
  'SubscribedAbstractProperty', 'Summary', 'SuperscriptStyle', 'SurfaceRect',
  'SurfaceRotationOptions', 'SweepGradientOptions', 'SwipeActionItem', 'SwipeActionOptions',
  'SwipeActionState', 'SwipeDirection', 'SwipeEdgeEffect', 'SwipeGesture',
  'SwipeGestureEvent', 'SwipeGestureHandler', 'SwipeGestureHandlerOptions',
  'SwipeGestureParams', 'SwipeRecognizer', 'Swiper', 'SwiperAnimationEvent',
  'SwiperAnimationMode', 'SwiperAutoFill', 'SwiperContentAnimatedTransition',
  'SwiperContentTransitionProxy', 'SwiperContentWillScrollResult', 'SwiperController',
  'SwiperDisplayMode', 'SwiperNestedScrollMode', 'SwitchStyle', 'SymbolEffect',
  'SymbolEffectStrategy', 'SymbolGlyphModifier', 'SymbolRenderingStrategy',
  'SyncedPropertyOneWay', 'SyncedPropertyTwoWay', 'SystemAdaptiveOptions',
  'SystemBarStyle', 'SystemOps', 'TabBarIconStyle', 'TabBarOptions', 'TabBarSymbol',
  'TabContentAnimatedTransition', 'TabContentTransitionProxy', 'TabsAnimationEvent',
  'TabsCacheMode', 'TabsController', 'TabsCustomContentTransitionCallback',
  'TabsOptions', 'Tag', 'TapGesture', 'TapGestureEvent', 'TapGestureHandler',
  'TapGestureHandlerOptions', 'TapGestureParameters', 'TapGestureParams',
  'TapRecognizer', 'TemplateOptions', 'TerminationInfo', 'Test', 'TextAlign',
  'TextAreaController', 'TextAreaOptions', 'TextAreaSubmitCallback', 'TextAreaType',
  'TextBackgroundStyle', 'TextBaseController', 'TextBox', 'TextCascadePickerRangeContent',
  'TextCase', 'TextChangeOptions', 'TextChangeReason', 'TextClockConfiguration',
  'TextClockController', 'TextClockOptions', 'TextContentControllerBase',
  'TextContentControllerOptions', 'TextContentStyle', 'TextController',
  'TextDataDetectorConfig', 'TextDataDetectorType', 'TextDecorationOptions',
  'TextDecorationStyle', 'TextDecorationType', 'TextDeleteDirection',
  'TextEditControllerEx', 'TextHeightAdaptivePolicy', 'TextLayoutOptions',
  'TextInputController', 'TextInputOptions', 'TextInputStyle', 'TextMarqueeOptions',
  'TextMenuItem', 'TextMenuItemId', 'TextMenuOptions', 'TextMenuShowMode', 'TextMetrics',
  'TextModifier', 'TextOptions', 'TextOverflow', 'TextOverflowOptions',
  'TextPickerDialog', 'TextPickerDialogOptions', 'TextPickerOptions',
  'TextPickerRangeContent', 'TextPickerResult', 'TextPickerTextStyle', 'TextRange',
  'TextResponseType', 'TextSelectableMode', 'TextShadowStyle', 'TextSpanType',
  'TextStyle', 'TextTimerConfiguration', 'TextTimerController', 'TextTimerOptions',
  'Theme', 'ThemeColorMode', 'ThreatType', 'TimePickerDialog', 'TimePickerDialogOptions',
  'TimePickerFormat', 'TimePickerOptions', 'TimePickerResult', 'TipsAnchorType', 'TipsOptions',
  'TitleHeight', 'TodayStyle', 'ToggleConfiguration', 'ToggleOptions', 'ToggleType',
  'ToolBarItemInterface', 'ToolBarItemOptions', 'ToolBarItemPlacement', 'ToolbarItem',
  'ToolbarItemStatus', 'TouchEvent', 'TouchObject', 'TouchPoint', 'TouchResult',
  'TouchTestInfo', 'TouchTestStrategy', 'TouchType', 'TransitionEdge',
  'TransitionEffect', 'TransitionEffects', 'TransitionFinishCallback',
  'TransitionHierarchyStrategy', 'TransitionOptions', 'TransitionType',
  'TranslateOptions', 'UICommonEvent', 'UIContext', 'UIExtensionOptions',
  'UIExtensionProxy', 'UIGestureEvent', 'UnderlineColor', 'UnifiedData',
  'UniformDataType', 'UrlStyle', 'UserDataSpan', 'VMContext', 'VP', 'VelocityOptions',
  'VerticalAlign', 'VideoController', 'VideoOptions', 'View', 'ViewportFit',
  'ViewportRect', 'VirtualScrollOptions', 'Visibility', 'VisibleAreaChangeCallback',
  'VisibleAreaEventOptions', 'VisibleListContentInfo', 'VisualEffect', 'VoiceButtonOptions',
  'VoidCallback', 'Want', 'Watch', 'WaterFlowLayoutMode', 'WaterFlowOptions',
  'WaterFlowSections', 'WebCaptureMode', 'WebContextMenuParam', 'WebContextMenuResult',
  'WebController', 'WebCookie', 'WebDarkMode', 'WebElementType', 'WebHeader',
  'WebKeyboardAvoidMode', 'WebKeyboardCallback', 'WebKeyboardCallbackInfo',
  'WebKeyboardController', 'WebKeyboardOptions', 'WebLayoutMode', 'WebMediaOptions',
  'WebNavigationType', 'WebOptions', 'WebResourceError', 'WebResourceRequest',
  'WebResourceResponse', 'WebResponseType', 'WebviewController', 'Week', 'WeekStyle',
  'WidthBreakpoint', 'WindowAnimationTarget', 'WindowModeFollowStrategy',
  'WindowStatusType', 'WithThemeOptions', 'WordBreak', 'WorkStateStyle', 'WrappedBuilder',
  'XComponentController', 'XComponentOptions', 'XComponentType', 'animateTo',
  'animateToImmediately', 'cursorControl', 'focusControl', 'fp2px', 'getContext',
  'getInspectorNodeById', 'getInspectorNodes', 'lpx2px', 'postCardAction', 'px2fp',
  'px2lpx', 'px2vp', 'setAppBgColor', 'sharedTransitionOptions', 'vp2px'
]);

const decoratorsWhiteList = [
  'State', 'Prop', 'Link', 'Observed', 'Track', 'ObjectLink', 'StorageProp', 'StorageLink',
  'LocalStorageProp', 'LocalStorageLink', 'Provide', 'Consume', 'Watch',
  'Local', 'Param', 'Once', 'Event', 'Provider', 'Consumer', 'Monitor', 'Computed', '@ObservedV2', 'Trace',
  'Builder', 'BuildParam', 'Styles', 'Extend', 'AnimatableExtend', 'Type', 'Require',
  'Reusable', 'ReusableV2', 'Entry', 'Component', 'ComponentV2', 'CustomDialog'
];

const whiteFileList = [
  '@ohos.app.ability.continueManager',
  '@ohos.app.ability.InsightIntentDecorator',
  '@ohos.app.ability.UIExtensionContentSession',
  '@ohos.distributedsched.proxyChannelManager',
  '@ohos.graphics.displaySync',
  '@ohos.graphics.drawing',
  '@ohos.graphics.text',
  '@ohos.i18n',
  '@ohos.inputMethodEngine',
  '@ohos.userIAM.userAuth',
  '@ohos.web.webview',
  'LiveFormExtensionContext',
  'Scene',
  'SceneResources',
  'UIAbilityContext',
];

const apiDir = [
  'ability', 'advertising', 'app', 'application', 'arkui', 'bundle', 'bundleManager', 'commonEvent',
  'continuation', 'data', 'global', 'graphics3d', 'multimedia', 'notification', 'security', 'tag',
  'wantAgent'
];

const apiInternalDir = [
  '@internal/full'
];

const API_PATH = '/api/';
const EXTNAME_D_ETS = '.d.ets';
const EXTNAME_D_TS = '.d.ts';
const OHOS_ARKUI = '@ohos.arkui.';
const OHOS_KIT_ARKUI = '@kit ArkUI';
const OHOS_ARKUI_STATEMANAGEMENT = './@ohos.arkui.GlobalESValue';
const OHOS_ARKUI_COMPONENT = './@ohos.arkui.GlobalESValue';
const OHOS_ARKUI_GLOBAL_ESVALUE = '@ohos.arkui.GlobalESValue';
const ARKUI_EXTEND = 'Extend';
const ARKUI_STYLES = 'Styles';
const ARKUI_BUILDER = 'Builder';
const DEFAULT = 'default';
const GENERIC_T = 'T';
const COMPONENT = 'component';

function start() {
  const program = new commander.Command();
  program
    .name('noninterop_global_import')
    .version('0.0.1');
  program
    .option('--input <string>', 'input path')
    .option('--output <string>', 'output path')
    .option('--export <string>', 'export flag', false)
    .action((opts) => {
      const outputPath = opts.output;
      const inputDir = opts.input;
      const exportFlag = opts.export === 'true';
      if (exportFlag) {
        writeAnnotationFile(inputDir, outputPath);
      } else {
        processInteropUI(inputDir, exportFlag);
      }
    });
  program.parse(process.argv);
}

start();
