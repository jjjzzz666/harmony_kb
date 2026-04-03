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
const commander = require('commander');

const ts = require('typescript');

function transformFiles(inputDir, outputPath, exportFlag) {
  try {
    if (exportFlag) {
      initGlobalESValueFile(outputPath);
    }
    const utFiles = [];
    readFile(inputDir, utFiles);
    tsTransform(utFiles, deleteNonInteropApi, exportFlag, inputDir, outputPath);
  } catch (error) {
    // ignore
  }
}

function tsTransform(utFiles, callback, exportFlag, inputDir,
  outputPath) {
  utFiles.forEach((url) => {
    const apiBaseName = path.basename(url);
    let content = fs.readFileSync(url, 'utf-8');
    let isTransformer = /\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName);
    if (/\.json/.test(url)) {
      isTransformer = false;
    }
    if (!isTransformer) {
      writeFile(url, content, inputDir, outputPath);
      return;
    }

    const fileName = processFileName(url);
    ts.transpileModule(preprocessContent(fileName, content), {
      compilerOptions: {
        target: ts.ScriptTarget.ES2017,
      },
      fileName: fileName,
      transformers: { before: [callback(url, exportFlag, inputDir, outputPath)] },
    });
  });
}

function deleteNonInteropApi(url, exportFlag, inputDir,
  outputPath) {
  return (context) => {
    return (node) => {
      const fullText = String(node.getFullText());
      let fileAndKitComment = getFileAndKitComment(fullText);
      const copyrightMessage = fullText.replace(node.getText(), '').split(/\/\*\*/)[0] +
        fileAndKitComment + '\n';
      let kitName = '';
      if (fullText.match(/\@kit (.*)\r?\n/g)) {
        kitName = RegExp.$1.replace(/\s/g, '');
      }
      const fileName = processFileName(url);
      sourceFile = node;
      const deleteNode = processSourceFile(node, url);
      node = processVisitEachChild(context, deleteNode.node, exportFlag);
      if (needProcessLabelNonInterop(fileName, kitName, inputDir)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        ts.transpileModule(result, {
          compilerOptions: {
            target: ts.ScriptTarget.ES2017,
          },
          fileName: fileName,
          transformers: {
            before: [formatImportDeclaration(url, exportFlag, inputDir, outputPath,
              copyrightMessage, deleteNode.isCopyrightDeleted)]
          },
        });
      }
      return ts.factory.createSourceFile([], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
        ts.NodeFlags.None);
    };
  };
}

function processVisitEachChild(context, node,
  exportFlag) {
  return ts.visitEachChild(node, processAllNodes, context);

  function processAllNodes(node) {
    if (ts.isInterfaceDeclaration(node)) {
      node = processInterfaceDeclaration(node, exportFlag);
    } else if (ts.isClassDeclaration(node)) {
      node = processClassDeclaration(node, exportFlag);
    } else if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
      const newModuleBody =
        ts.factory.updateModuleBlock(node.body, getNewStatements(node));
      node = ts.factory.updateModuleDeclaration(node, node.modifiers, node.name, newModuleBody);
    } else if (ts.isEnumDeclaration(node)) {
      node = processEnumDeclaration(node, exportFlag);
    } else if (ts.isStructDeclaration(node)) {
      node = processStructDeclaration(node);
    } else if (ts.isTypeAliasDeclaration(node)) {
      node = processTypeAliasDeclaration(node, exportFlag);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
}

function getNewStatements(node) {
  const newStatements = [];
  (node.body).statements.forEach((statement) => {
    if (!isNonInterop(statement)) {
      newStatements.push(statement);
    }
  });
  return newStatements;
}

function formatImportDeclaration(url, exportFlag, inputDir,
  outputPath, copyrightMessage = '', isCopyrightDeleted = false) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      const allIdentifierSet = collectAllIdentifier(node, context);
      const formatValue = formatAllNodes(url, inputDir, node, allIdentifierSet);
      node = formatValue.node;
      const referencesMessage = formatValue.referencesMessage;
      if (formatValue.isCopyrightDeleted) {
        copyrightMessage = formatValue.copyrightMessage;
        isCopyrightDeleted = formatValue.isCopyrightDeleted;
      }
      outputFile(url, exportFlag, inputDir, outputPath, node, sourceFile, referencesMessage,
        copyrightMessage, isCopyrightDeleted);
      return ts.factory.createSourceFile([], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
        ts.NodeFlags.None);
    };
  };
}

function formatAllNodes(url, inputDir, node,
  allIdentifierSet, copyrightMessage = '', isCopyrightDeleted = false) {
  let referencesMessage = '';
  let currReferencesModule = [];
  if (!ts.isSourceFile(node) || !node.statements) {
    return { node, referencesMessage, copyrightMessage, isCopyrightDeleted };
  }
  const newStatements = [];
  node.statements.forEach((statement) => {
    if (ts.isImportDeclaration(statement)) {
      const importInfo = formatAllNodesImportDeclaration(node, statement, url, inputDir,
        currReferencesModule, allIdentifierSet);
      if (importInfo.statement) {
        newStatements.push(statement);
      } else if (importInfo.isCopyrightDeleted) {
        copyrightMessage = importInfo.copyrightMessage;
        isCopyrightDeleted = importInfo.isCopyrightDeleted;
      }
    } else if (ts.isStructDeclaration(statement)) {
      statement = ts.factory.updateStructDeclaration(statement, statement.modifiers, statement.name,
        statement.typeParameters, statement.heritageClauses, statement.members.slice(1));
      newStatements.push(statement);
    } else {
      newStatements.push(statement);
    }
  });

  addForSpecialFiles(node, newStatements);

  currReferencesModule.forEach((item) => {
    if (item.isUsed) {
      referencesMessage += item.reference + '\n';
    }
  });
  node = ts.factory.updateSourceFile(node, newStatements);
  return { node, referencesMessage, copyrightMessage, isCopyrightDeleted };
}

function formatAllNodesImportDeclaration(node, statement,
  url, inputDir, currReferencesModule,
  allIdentifierSet) {
  const clauseSet = getClauseSet(statement);
  const importSpecifier = statement.moduleSpecifier.getText().replace(/[\'\"]/g, '');
  const fileDir = path.dirname(url);
  const hasImportSpecifierFile = hasFileByImportPath(importSpecifier, fileDir, inputDir);
  let hasImportSpecifierInModules = globalModules.has(importSpecifier);
  if ((!hasImportSpecifierFile && !hasImportSpecifierInModules) || clauseSet.size === 0) {
    if (hasCopyright(statement)) {
      return { copyrightMessage: node.getFullText().replace(node.getText(), ''), isCopyrightDeleted: true };
    } else {
      return { statement: undefined, copyrightMessage: '', isCopyrightDeleted: false };
    }
  }
  const clauseSetValue = getExsitClauseSet(hasImportSpecifierInModules, importSpecifier,
    currReferencesModule, clauseSet, allIdentifierSet);
  const hasExsitStatus = clauseSetValue.hasExsitStatus;
  const hasNonExsitStatus = clauseSetValue.hasNonExsitStatus;
  let exsitClauseSet = clauseSetValue.exsitClauseSet;
  if (hasExsitStatus) {
    return handleUsedImport(hasNonExsitStatus, statement, exsitClauseSet,
      hasImportSpecifierInModules, currReferencesModule, importSpecifier);
  } else if (hasCopyright(statement)) {
    return { copyrightMessage: node.getFullText().replace(node.getText(), ''), isCopyrightDeleted: true };
  } else {
    return { statement: undefined, copyrightMessage: '', isCopyrightDeleted: false };
  }
}

function addForSpecialFiles(node, newStatements) {
  const fileName = getCoreFilename(path.basename(node.fileName));
  if (fileName === FRAMENODE) {
    newStatements.push(createFrameNodeTypeNode());
  }
}

function initGlobalESValueFile(outputPath) {
  const filePath = `${path.resolve(outputPath, '../api')}/${GLOBAL_ESVALUE_FILE}`;
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, '');
}

function writeGlobalESValueFile(content, outputPath) {
  content = content.replace("'use static';", '').replace(/\.\.\/api/g, '.');
  fs.appendFileSync(`${path.resolve(outputPath, '../api')}/${GLOBAL_ESVALUE_FILE}`, content);
}

function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    // ignore
  }
}

function processSourceFile(node, url) {
  let isCopyrightDeleted = false;
  const newStatements = [];
  const newStatementsWithoutExport = [];
  const deleteNonInteropApiSet = new Set();
  let needDeleteExport = {
    fileName: '',
    default: '',
    exportName: new Set(),
  };
  isCopyrightDeleted = addNewStatements(node, newStatements, deleteNonInteropApiSet, needDeleteExport);
  newStatements.forEach((statement) => {
    const names = getExportIdentifierName(statement);
    if (ts.isExportDeclaration(statement) && statement.moduleSpecifier &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text.startsWith(`./${ARKUI}/${COMPONENT}/`)) {
      const importPath = statement.moduleSpecifier.text.replace(`./${ARKUI}/${COMPONENT}/`, '');
      const isDeleteSystemFile = componentEtsDeleteFiles.includes(getPureName(importPath));
      const hasEtsFile = componentEtsFiles.includes(getPureName(importPath));
      const existFile = isExistImportFile(path.dirname(url), statement.moduleSpecifier.text.toString());
      if (isDeleteSystemFile || !hasEtsFile && !existFile) {
        return;
      }
    }
    if (names.length === 0) {
      newStatementsWithoutExport.push(statement);
      return;
    }
    if (names.length === 1 && !deleteNonInteropApiSet.has(names[0])) {
      newStatementsWithoutExport.push(statement);
      return;
    }
    processExportNode(statement, node, needDeleteExport, names, deleteNonInteropApiSet,
      newStatementsWithoutExport);
  });
  if (needDeleteExport.fileName !== '') {
    kitFileNeedDeleteMap.set(needDeleteExport.fileName, needDeleteExport);
  }
  return {
    node: ts.factory.updateSourceFile(node, newStatementsWithoutExport, node.isDeclarationFile,
      node.referencedFiles),
    isCopyrightDeleted,
  };
}

function addNewStatements(node, newStatements,
  deleteNonInteropApiSet, needDeleteExport) {
  let isCopyrightDeleted = false;
  node.statements.forEach((statement, index) => {
    if (!isNonInterop(statement)) {
      newStatements.push(statement);
      return;
    }
    if (index === 0) {
      isCopyrightDeleted = true;
    }
    if (ts.isVariableStatement(statement)) {
      deleteNonInteropApiSet.add(variableStatementGetEscapedText(statement));
    } else if (
      ts.isModuleDeclaration(statement) ||
      ts.isInterfaceDeclaration(statement) ||
      ts.isClassDeclaration(statement) ||
      ts.isEnumDeclaration(statement) ||
      ts.isStructDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement)
    ) {
      if (statement && statement.name && (statement.name).escapedText) {
        deleteNonInteropApiSet.add((statement.name).escapedText.toString());
      }
      setDeleteExport(statement, node, needDeleteExport, deleteNonInteropApiSet);
    } else if (ts.isExportAssignment(statement) || ts.isExportDeclaration(statement)) {
      setDeleteExport(statement, node, needDeleteExport, deleteNonInteropApiSet);
    }
  });

  return isCopyrightDeleted;
}

function processExportNode(statement, node,
  needDeleteExport, names, deleteNonInteropApiSet,
  newStatementsWithoutExport) {
  if (ts.isExportAssignment(statement)) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = (statement.expression).escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    let needExport = false;
    const newSpecifiers = [];
    names.forEach((name, index) => {
      const exportSpecifier =
        (statement.exportClause).elements[index];
      if (!deleteNonInteropApiSet.has(name)) {
        newSpecifiers.push(exportSpecifier);
        needExport = true;
      } else {
        needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
        needDeleteExport.exportName.add(exportSpecifier.name.escapedText.toString());
      }
    });
    if (needExport) {
      (statement.exportClause) = ts.factory.updateNamedExports(
        statement.exportClause, newSpecifiers);
      newStatementsWithoutExport.push(statement);
    }
  }
}

function getPureName(name) {
  const pureName = path.basename(name)
    .replace(EXTNAME_D_TS, '')
    .replace(EXTNAME_D_ETS, '')
    .replace(/_/g, '')
    .toLowerCase();
  return pureName;
}

function processFileName(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, EXTNAME_TS)
    .replace(/\.d\.ets$/g, EXTNAME_ETS);
}

function processFileNameWithoutExt(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, '')
    .replace(/\.d\.ets$/g, '')
    .replace(/\.ts$/g, '')
    .replace(/\.ets$/g, '');
}

function hasFileByImportPath(importPath, apiDir, inputDir) {
  let fileDir = path.resolve(apiDir);
  if (importPath.startsWith(`@${ARKTS}`)) {
    fileDir = path.resolve(inputDir, `../${ARKTS}`);
  }
  return isExistArkUIFile(path.resolve(inputDir, ARKUI, COMPONENT), importPath, inputDir) ||
  isExistImportFile(fileDir, importPath);
}

function isExistArkUIFile(resolvedPath, importPath, inputDir) {
  const filePath = path.resolve(resolvedPath, importPath);
  if (filePath.includes(path.resolve(inputDir, INTERNAL, COMPONENT, ETS)) ||
    filePath.includes(path.resolve(inputDir, ARKUI, COMPONENT))
  ) {
    const fileName = getPureName(filePath);
    return componentEtsFiles.includes(fileName);
  }
  return isExistImportFile(resolvedPath, importPath);
}

function isExistImportFile(fileDir, importPath) {
  return [EXTNAME_D_TS, EXTNAME_D_ETS].some(ext => {
    return fs.existsSync(path.resolve(fileDir, `${importPath}${ext}`));
  });
}

function preprocessContent(fileName, content) {
  stmtReplacementMap.clear();
  let result = content.replace(/^(\s*)(\@Retention\(\{[^\(\)\{\}]*\}\)$)/mg,
    '$1/**@reserved $2 */');
  const matches = result.match(/(^[^\*]*\s+\@interface\s+.*$)/mg);
  if (matches) {
    for (const match of matches) {
      const transformedStmt = match.replace(/(?<=\s+)\@interface(\s+\w+)\s*\{\}/g, 'const$1');
      result = result.replace(match, transformedStmt);
      stmtReplacementMap.set(match, transformedStmt);
    }
  }
  if (isSpecialFile(fileName)) {
    result = processSpecialFileContext(fileName, result);
  }
  return result;
}

function processSpecialFileContext(fileName, context) {
  fileName = path.basename(fileName, EXTNAME_TS);
  if (fileName === ALERT_DIALOG) {
    context = context.replace(/\bTextStyle\b/g, ALERT_DIALOG_TEXT_STYLE);
  }
  if (fileName === COMMON) {
    context = context.replace(/\bLinearGradient\b/g, COMMON_LINEAR_GRADIENT);
  }
  return context;
}

function isSpecialFile(url) {
  return specialFileList.includes(path.basename(url, EXTNAME_TS));
}

function writeFile(url, data, inputDir, outputPath) {
  const newFilePath = path.resolve(outputPath, path.relative(inputDir, url));
  fs.mkdirSync(path.dirname(newFilePath), { recursive: true });
  fs.writeFileSync(newFilePath, data);
}

function postProcessContent(content) {
  for (const [originalStmt, transformedStmt] of stmtReplacementMap) {
    content = content.replace(transformedStmt, originalStmt);
  }
  return content.replace(/^(\s*)\/\*\*\@reserved (.*) \*\/$/mg, '$1$2');
}

function outputFile(url, exportFlag, inputDir, outputPath,
  node, sourceFile, referencesMessage,
  copyrightMessage, isCopyrightDeleted) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  let result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
  if (isCopyrightDeleted) {
    result = copyrightMessage + '\n' + result;
  }
  copyrightMessage = node.getFullText().replace(node.getText(), '');
  if (referencesMessage) {
    result = result.substring(0, copyrightMessage.length) + '\n' + referencesMessage +
      result.substring(copyrightMessage.length);
  }
  result = removeNonInteropDoc(result);
  result = postProcessContent(result);
  writeFile(url, result, inputDir, outputPath);
  if (exportFlag) {
    writeGlobalESValueFile(removeComments(result), outputPath);
  }
}

function removeComments(content) {
  let result = content.replace(/\/\*[\s\S]*?\*\//g, '');
  result = result.replace(/\/\/.*$/gm, '');
  result = result.replace(/^\s*[\r\n]/gm, '');
  return result;
}

function collectAllIdentifier(node, context) {
  const identifierSet = new Set([]);
  if (!ts.isSourceFile(node) || !node.statements) {
    return identifierSet;
  }
  node.statements.forEach((stat) => {
    if (!ts.isImportDeclaration(stat)) {
      ts.visitEachChild(stat, collectAllNodes, context);
    }
  });

  function collectAllNodes(node) {
    if (ts.isIdentifier(node)) {
      identifierSet.add(node.escapedText.toString());
    }
    return ts.visitEachChild(node, collectAllNodes, context);
  }

  return identifierSet;
}

function getCoreFilename(fileName) {
  if (fileName.endsWith(EXTNAME_TS)) {
    return fileName.slice(0, -EXTNAME_TS.length);
  }
  return fileName;
}

function createFrameNodeTypeNode() {
  return ts.factory.createModuleDeclaration(
    [
      ts.factory.createToken(ts.SyntaxKind.ExportKeyword),
      ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)
    ],
    ts.factory.createIdentifier(TYPENODE),
    ts.factory.createModuleBlock([ts.factory.createTypeAliasDeclaration(
      undefined,
      ts.factory.createIdentifier(XCOMPONENT),
      undefined,
      ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier(ANY),
      undefined
      )
    )]),
    ts.NodeFlags.Namespace | ts.NodeFlags.ExportContext | ts.NodeFlags.ContextFlags
  );
}

function hasCopyright(node) {
  return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(node.getFullText()
    .replace(node.getText(), ''));
}

function getClauseSet(statement) {
  const clauseSet = new Set([]);
  if (!statement.importClause || !ts.isImportClause(statement.importClause)) {
    return clauseSet;
  }
  const clauseNode = statement.importClause;
  if (!clauseNode.namedBindings && clauseNode.name && ts.isIdentifier(clauseNode.name)) {
    clauseSet.add(clauseNode.name.escapedText.toString());
  } else if (clauseNode.namedBindings && ts.isNamespaceImport(clauseNode.namedBindings) &&
    clauseNode.namedBindings.name && ts.isIdentifier(clauseNode.namedBindings.name)) {
    clauseSet.add(clauseNode.namedBindings.name.escapedText.toString());
  } else if (clauseNode.namedBindings && ts.isNamedImports(clauseNode.namedBindings) &&
    clauseNode.namedBindings.elements) {
    clauseNode.namedBindings.elements.forEach((ele) => {
      if (ele.name && ts.isIdentifier(ele.name)) {
        clauseSet.add(ele.name.escapedText.toString());
      }
    });
  }
  return clauseSet;
}

function getExsitClauseSet(hasImportSpecifierInModules, importSpecifier,
  currReferencesModule, clauseSet, allIdentifierSet) {
  let currModule = [];
  if (hasImportSpecifierInModules) {
    let index = globalModules.get(importSpecifier);
    const referenceModule = currReferencesModule[index];
    currModule = referenceModule.modules[importSpecifier];
  }
  const clasueCheckList = [];
  let exsitClauseSet = new Set([]);
  for (const clause of clauseSet) {
    let flag = allIdentifierSet.has(clause);
    if (hasImportSpecifierInModules) {
      flag = allIdentifierSet.has(clause) && currModule.includes(clause);
    }
    if (flag) {
      // use import
      exsitClauseSet.add(clause);
      clasueCheckList.push(EXIST);
    } else {
      clasueCheckList.push(NON_EXIST);
    }
  }
  let hasExsitStatus = false;
  let hasNonExsitStatus = false;
  clasueCheckList.forEach((ele) => {
    if (ele === EXIST) {
      hasExsitStatus = true;
    } else {
      hasNonExsitStatus = true;
    }
  });
  return { exsitClauseSet, hasExsitStatus, hasNonExsitStatus };
}

function handleUsedImport(hasNonExsitStatus, statement,
  exsitClauseSet, hasImportSpecifierInModules,
  currReferencesModule, importSpecifier) {
  if (hasNonExsitStatus) {
    const newSpecifiers = [];
    (statement.importClause.namedBindings).elements.forEach((element) => {
      if (exsitClauseSet.has(element.name.escapedText.toString())) {
        newSpecifiers.push(element);
      }
    });
    (statement.importClause).namedBindings = ts.factory.updateNamedImports(
      statement.importClause.namedBindings,
      newSpecifiers
    );
  }
  if (hasImportSpecifierInModules) {
    let index = globalModules.get(importSpecifier);
    currReferencesModule[index].isUsed = true;
  }
  return { statement };
}

function getFileAndKitComment(fileFullText) {
  let fileAndKitComment = '';
  let pattern = /\/\*\*\s*\*\s*@file[\s\S]*?@kit[\s\S]*?\*\//;
  let comment = fileFullText.match(pattern);
  if (comment) {
    fileAndKitComment = comment[0];
  }
  return fileAndKitComment;
}

function removeNonInteropDoc(result) {
  return result.replace(/\/\*\*[\s\S]*?\*\//g, (substring, p1) => {
    return /@noninterop/g.test(substring) ? '' : substring;
  });
}

function needProcessLabelNonInterop(fileName, kitName, inputDir) {
  if (inputDir.endsWith(COMPONENT) || fileName.startsWith(OHOS_ARKUI) ||
    kitName.toLowerCase() === ARKUI || whiteFileList.includes(fileName.slice(0, -EXTNAME_TS.length))) {
    return true;
  }
  return false;
}

function setDeleteExport(statement, node, needDeleteExport,
  deleteNonInteropApiSet) {
  if (ts.isExportAssignment(statement) &&
    deleteNonInteropApiSet.has((statement.expression).escapedText.toString())) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = (statement.expression).escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    (statement.exportClause).elements.forEach((element) => {
      const exportName = element.propertyName ?
      element.propertyName.escapedText.toString() :
      element.name.escapedText.toString();
      if (deleteNonInteropApiSet.has(exportName)) {
        needDeleteExport.exportName.add(element.name.escapedText.toString());
      }
    });
  }
  //export namespace xxx {}
  const modifiers = statement.modifiers;
  if (modifiers === undefined) {
    return;
  }
  const exportFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
  const defaultFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword);
  if (exportFlag && defaultFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = (statement).name.escapedText.toString();
  } else if (exportFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.exportName.add((statement).name.escapedText.toString());
  }
}

function getExportIdentifierName(statement) {
  const names = [];
  if (ts.isExpressionStatement(statement)) {
    // exports.name = xxx;
    if (ts.isBinaryExpression(statement.expression) && ts.isIdentifier(statement.expression.right) &&
      statement.expression.right.escapedText) {
      names.push(statement.expression.right.escapedText.toString());
    }
  } else if (ts.isExportAssignment(statement)) {
    // export default xxx
    names.push((statement.expression).escapedText.toString());
  } else if (ts.isExportDeclaration(statement) && statement.exportClause) {
    // export {xxx} 、export {xxx as yyy} 、export * from './zzz'
    const specifiers = (statement.exportClause).elements;
    specifiers.forEach((specifier) => {
      if (ts.isExportSpecifier(specifier)) {
        const name = specifier.propertyName ? specifier.propertyName : specifier.name;
        names.push(name.escapedText.toString());
      }
    });
  }
  return names;
}

function addExport2Modifiers(
  modifiers) {
  modifiers = modifiers || [];
  const isAlreadyExported = modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
  if (!isAlreadyExported) {
    modifiers = [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
      ...modifiers];
  }
  return modifiers;
}

function processTypeAliasDeclaration(node,
  exportFlag) {
  if (exportFlag) {
    return ts.factory.updateTypeAliasDeclaration(
      node,
      addExport2Modifiers(node.modifiers),
      node.name,
      node.typeParameters,
      node.type
    );
  } else {
    return node;
  }
}

function processInterfaceDeclaration(node,
  exportFlag) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  let modifiers = exportFlag ? addExport2Modifiers(node.modifiers) : node.modifiers;
  return ts.factory.updateInterfaceDeclaration(
    node,
    modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
}

function processClassDeclaration(node, exportFlag) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  let modifiers = exportFlag ? addExport2Modifiers(node.modifiers) : node.modifiers;
  return ts.factory.updateClassDeclaration(
    node,
    modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
}

function processEnumDeclaration(node, exportFlag) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  let modifiers = exportFlag ? addExport2Modifiers(node.modifiers) : node.modifiers;
  return ts.factory.updateEnumDeclaration(
    node,
    modifiers,
    node.name,
    newMembers
  );
}

function processStructDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member, index) => {
    if (index >= 1 && !isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateStructDeclaration(
    node,
    node.modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
  return node;
}

function variableStatementGetEscapedText(statement) {
  let name = '';
  if (
    statement &&
    statement.declarationList &&
    statement.declarationList.declarations &&
    statement.declarationList.declarations.length > 0 &&
    statement.declarationList.declarations[0].name &&
    (statement.declarationList.declarations[0].name).escapedText
  ) {
    name = (statement.declarationList.declarations[0].name).escapedText.toString();
  }
  return name;
}

function isNonInterop(node) {
  const notesContent = node.getFullText().replace(node.getText(), '').replace(/[\s]/g, '');
  const notesArr = notesContent.split(/\/\*\*/);
  for (const note of notesArr) {
    if (note.length !== 0 && /@noninterop/g.test(note)) {
      return true;
    }
  }
  return false;
}

exports.transformFiles = transformFiles;

let outputPath = '';
let inputDir = '';
let exportFlag = false;

let sourceFile = null;
let componentEtsFiles = [];
let componentEtsDeleteFiles = [];
const kitFileNeedDeleteMap = new Map();
const stmtReplacementMap = new Map();
const globalModules = new Map();

const GLOBAL_ESVALUE_FILE = '@ohos.arkui.GlobalESValue.d.ts';
const ARKUI = 'arkui';
const ARKTS = 'arkts';
const COMPONENT = 'component';

const ANY = 'Any';
const EXTNAME_D_TS = '.d.ts';
const EXTNAME_D_ETS = '.d.ets';
const EXTNAME_TS = '.ts';
const EXTNAME_ETS = '.ets';
const ETS = 'ets';
const INTERNAL = '@internal';
const EXIST = 'exist';
const NON_EXIST = 'non-exist';
const OHOS_ARKUI = '@ohos.arkui';

const FRAMENODE = 'FrameNode';
const TRUE = 'true';
const TYPENODE = 'typeNode';
const XCOMPONENT = 'XComponent';
const ALERT_DIALOG = 'alert_dialog';
const ALERT_DIALOG_TEXT_STYLE = 'AlertDialogTextStyle';
const COMMON = 'common';
const COMMON_LINEAR_GRADIENT = 'CommonLinearGradient';

const whiteFileList = [
  'web',
];

const specialFileList = [
  'alert_dialog',
  'common',
];

function start() {
  const program = new commander.Command();
  program
    .name('noninterop')
    .version('0.0.1');
  program
    .option('--input <string>', 'input path')
    .option('--output <string>', 'output path')
    .option('--export <string>', 'export flag', false)
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      exportFlag = opts.export === TRUE;
      transformFiles(inputDir, outputPath, exportFlag);
    });
  program.parse(process.argv);
}

start();
