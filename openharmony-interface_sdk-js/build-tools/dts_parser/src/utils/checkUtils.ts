/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import path, { ParsedPath } from 'path';
import fs, { Stats } from 'fs';
import { Workbook, Worksheet } from 'exceljs';
import ts, { LineAndCharacter } from 'typescript';
import { ApiResultSimpleInfo, ApiResultInfo, ApiResultMessage, ApiCheckInfo, ErrorBaseInfo } from '../typedef/checker/result_type';
import { ApiInfo, BasicApiInfo, ClassInfo, ParentClass } from '../typedef/parser/ApiInfoDefination';
import { FileUtils } from './FileUtils';
import { ApiCheckVersion } from '../coreImpl/checker/config/api_check_version.json';
import { PunctuationMark } from './Constant';
import { Comment } from '../typedef/parser/Comment';
import { currentFilePath } from '../coreImpl/checker/src/api_check_plugin';
import { toNumber } from 'lodash';


export class PosOfNode {
  /**
   * 获取行列信息
   * @param { ts.Node } node
   * @param { ts.Diagnostic } diagnostic
   */
  static getPosOfNode(node: ts.Node, diagnostic: ts.Diagnostic): string {
    const posOfNode: LineAndCharacter = ts.getLineAndCharacterOfPosition(
      node.getSourceFile(),
      diagnostic.start as number
    );
    const location: string =
      (diagnostic.file?.fileName as string) + `(line: ${posOfNode.line + 1}, col: ${posOfNode.character + 1})`;
    return location;
  }
}

export class CompolerOptions {
  /**
   * tsconfig配置项设置
   */
  static getCompolerOptions(): ts.CompilerOptions {
    const compilerOptions: ts.CompilerOptions = ts.readConfigFile(
      path.resolve(FileUtils.getBaseDirName(), './tsconfig.json'),
      ts.sys.readFile
    ).config.compilerOptions;
    Object.assign(compilerOptions, {
      target: 'es2020',
      jsx: 'preserve',
      incremental: undefined,
      declaration: undefined,
      declarationMap: undefined,
      emitDeclarationOnly: undefined,
      outFile: undefined,
      composite: undefined,
      tsBuildInfoFile: undefined,
      noEmit: undefined,
      isolatedModules: true,
      paths: undefined,
      rootDirs: undefined,
      types: undefined,
      out: undefined,
      noLib: undefined,
      noResolve: true,
      noEmitOnError: undefined,
      declarationDir: undefined,
      suppressOutputPathCheck: true,
      allowNonTsExtensions: true,
    });
    return compilerOptions;
  }
}

export class GenerateFile {
  /**
   * 将错误信息输出为txt文件
   * @param { ApiResultSimpleInfo[] } resultData
   * @param { string } outputPath
   * @param { string } option
   */
  static writeFile(resultData: ApiResultMessage[], outputPath: string, option: object): void {
    const STANDARD_INDENT: number = 2;
    fs.writeFile(
      path.resolve(outputPath),
      JSON.stringify(resultData, null, STANDARD_INDENT),
      option,
      (err) => {
        if (err) {
          console.error(`ERROR FOR CREATE FILE:${err}`);
        } else {
          console.log('API CHECK FINISH!');
        }
      }
    );
  }

  /**
   * 将错误信息输出为excel文件
   * @param { ApiResultInfo[] } apiCheckArr
   */
  static async writeExcelFile(apiCheckArr: ApiResultMessage[]): Promise<void> {
    const workbook: Workbook = new Workbook();
    const sheet: Worksheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
    sheet.getRow(1).values = [
      'order',
      'analyzerName',
      'buggyFilePath',
      'codeContextStaerLine',
      'defectLevel',
      'defectType',
      'description',
      'language',
      'mainBuggyCode',
      'apiName',
      'apiType',
      'hierarchicalRelations',
      'parentModuleName'
    ];
    for (let i = 1; i <= apiCheckArr.length; i++) {
      const apiData: ApiResultMessage = apiCheckArr[i - 1];
      sheet.getRow(i + 1).values = [
        i,
        apiData.analyzerName,
        apiData.getFilePath(),
        apiData.getLocation(),
        apiData.getLevel(),
        apiData.getType(),
        apiData.getMessage(),
        apiData.language,
        apiData.getMainBuggyCode(),
        apiData.getExtendInfo().getApiName(),
        apiData.getExtendInfo().getApiType(),
        apiData.getExtendInfo().getHierarchicalRelations(),
        apiData.getExtendInfo().getParentModuleName()
      ];
    }
    workbook.xlsx.writeBuffer().then((buffer) => {
      fs.writeFile(path.resolve(FileUtils.getBaseDirName(), './Js_Api.xlsx'), buffer, function (err) {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
  }
}

export class ObtainFullPath {
  /**
   * 获取仓库中api文件夹下的所有d.ts和d.ets路径
   * @param { string } dir -api路径
   * @param { string[] } utFiles -存放具体路径的数组
   */
  static getFullFiles(dir: string, utFiles: string[]): void {
    try {
      const files: string[] = fs.readdirSync(dir);
      files.forEach((element) => {
        const filePath: string = path.join(dir, element);
        const status: Stats = fs.statSync(filePath);
        if (status.isDirectory()) {
          ObtainFullPath.getFullFiles(filePath, utFiles);
        } else if (/\.d\.ts/.test(filePath) || /\.d\.ets/.test(filePath) || /\.ts/.test(filePath)) {
          utFiles.push(filePath);
        }
      });
    } catch (e) {
      console.error('ETS ERROR: ' + e);
    }
  }
}

export class CommonFunctions {
  static getSinceVersion(sinceValue: string): string {
    return sinceValue.indexOf(PunctuationMark.LEFT_PARENTHESES) !== -1 ?
      sinceValue.substring(sinceValue.indexOf(PunctuationMark.LEFT_PARENTHESES) + 1,
        sinceValue.indexOf(PunctuationMark.RIGHT_PARENTHESES)) : sinceValue;
  }
  /**
   * 判断标签是否为官方标签
   */
  static isOfficialTag(tagName: string): boolean {
    return tagsArrayOfOrder.indexOf(tagName) === -1;
  }

  /**
   * Replaces the set placeholder with the target
   * @param { string } errorInfo
   * @param { string[] } params
   * @returns { string }
   */
  static createErrorInfo(errorInfo: string, params: string[]): string {
    params.forEach((param) => {
      errorInfo = errorInfo.replace('$$', param);
    });
    return errorInfo;
  }

  /**
   * Obtain the current version to be checked
   * @returns { number }
   */
  static getCheckApiVersion(): string {
    let checkApiVersion: string = '-1';
    try {
      checkApiVersion = JSON.stringify(ApiCheckVersion);
    } catch (error) {
      throw `Failed to read package.json or parse JSON content: ${error}`;
    }
    if (!checkApiVersion) {
      throw 'Please configure the correct API version to be verified';
    }
    return checkApiVersion;
  }

  static judgeSpecialCase(type: ts.SyntaxKind): string[] {
    let specialCaseType: string[] = [];
    if (type === ts.SyntaxKind.TypeLiteral) {
      specialCaseType = ['object'];
    } else if (type === ts.SyntaxKind.FunctionType) {
      specialCaseType = ['function'];
    }
    return specialCaseType;
  }
  static getExtendsApiValue(singleApi: ApiInfo): string {
    let extendsApiValue: string = '';
    const extendsApiValueArr: string[] = [];
    const extendsApiArr: ParentClass[] = (singleApi as ClassInfo).getParentClasses();
    if (extendsApiArr.length === 0) {
      return extendsApiValue;
    }
    extendsApiArr.forEach(extendsApi => {
      if (extendsApi.getExtendClass().length !== 0) {
        extendsApiValueArr.push(extendsApi.getExtendClass());
      }
    });
    extendsApiValue = extendsApiValueArr.join(',');
    return extendsApiValue;
  }

  static getImplementsApiValue(singleApi: ApiInfo): string {
    let implementsApiValue: string = '';
    const implementsApiArr: ParentClass[] = (singleApi as ClassInfo).getParentClasses();
    if (implementsApiArr.length === 0) {
      return implementsApiValue;
    }
    implementsApiArr.forEach(implementsApi => {
      if (implementsApi.getImplementClass().length !== 0) {
        implementsApiValue = implementsApi.getImplementClass();
      }
    });
    return implementsApiValue;
  }


  static getErrorInfo(singleApi: BasicApiInfo | undefined, apiJsdoc: Comment.JsDocInfo | undefined, filePath: string,
    errorBaseInfo: ErrorBaseInfo): ApiCheckInfo {
    let apiInfo: ApiCheckInfo = new ApiCheckInfo();
    if (singleApi === undefined) {
      return apiInfo;
    }
    const sinceVersion: number = apiJsdoc === undefined ? -1 : toNumber(apiJsdoc.since);
    apiInfo
      .setErrorID(errorBaseInfo.errorID)
      .setErrorLevel(errorBaseInfo.errorLevel)
      .setFilePath(filePath)
      .setApiPostion(singleApi.getPos())
      .setErrorType(errorBaseInfo.errorType)
      .setLogType(errorBaseInfo.logType)
      .setSinceNumber(sinceVersion)
      .setApiName(singleApi.getApiName())
      .setApiType(singleApi.getApiType())
      .setApiText(singleApi.getDefinedText())
      .setErrorInfo(errorBaseInfo.errorInfo)
      .setHierarchicalRelations(singleApi.getHierarchicalRelations().join('|'))
      .setParentModuleName(singleApi.getParentApi()?.getApiName());

    return apiInfo;
  }

  static getMdFiles(url: string): string[] {
    const mdFiles: string[] = [];
    const content: string = fs.readFileSync(url, 'utf-8');
    const filePathArr: string[] = content.split(/[(\r\n)\r\n]+/);
    filePathArr.forEach((filePath: string) => {
      const pathElements: Set<string> = new Set();
      CommonFunctions.splitPath(filePath, pathElements);
      if (!pathElements.has('build-tools')) {
        mdFiles.push(filePath);
      }
    });
    return mdFiles;
  }

  static splitPath(filePath: string, pathElements: Set<string>): void {
    let spliteResult: ParsedPath = path.parse(filePath);
    if (spliteResult.base !== '') {
      pathElements.add(spliteResult.base);
      CommonFunctions.splitPath(spliteResult.dir, pathElements);
    }
  }

  static isAscending(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
}

/**
 * The order between labels
 */
export const tagsArrayOfOrder: string[] = [
  'namespace', 'struct', 'typedef', 'interface', 'extends', 'implements', 'permission', 'enum', 'constant', 'type',
  'param', 'default', 'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodelonly',
  'FAModelOnly', 'stagemodelonly', 'StageModelOnly', 'crossplatform', 'form', 'atomicservice', 'since', 'deprecated',
  'useinstead', 'test', 'example'
];

/**
 * Official label
 */
export const officialTagArr: string[] = [
  'abstract', 'access', 'alias', 'async', 'augments', 'author', 'borrows', 'class', 'classdesc', 'constructs',
  'copyright', 'event', 'exports', 'external', 'file', 'function', 'generator', 'global', 'hideconstructor', 'ignore',
  'inheritdoc', 'inner', 'instance', 'lends', 'license', 'listens', 'member', 'memberof', 'mixes',
  'mixin', 'modifies', 'module', 'package', 'private', 'property', 'protected', 'public', 'requires', 'see', 'summary',
  'this', 'todo', 'tutorial', 'variation', 'version', 'yields', 'also', 'description', 'kind', 'name', 'undocumented'
];

/**
 * Inherit tag
 */
export const inheritTagArr: string[] = ['test', 'famodelonly', 'FAModelOnly', 'stagemodelonly', 'StageModelOnly',
  'deprecated', 'systemapi'];

export const followTagArr: string[] = ['atomicservice', 'form'];

/**
 * Optional tag
 */
export const optionalTags: string[] = [
  'static', 'fires', 'systemapi', 'famodelonly', 'FAModelOnly', 'stagemodelonly',
  'StageModelOnly', 'crossplatform', 'deprecated', 'test', 'form', 'example', 'atomicservice'
];
/**
 * conditional optional tag
 */
export const conditionalOptionalTags: string[] = ['default', 'permission', 'throws'];

/**
 * All api types that can use the permission tag.
 */
export const permissionOptionalTags: ts.SyntaxKind[] = [
  ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration,
  ts.SyntaxKind.CallSignature,
  ts.SyntaxKind.Constructor,
  ts.SyntaxKind.PropertyDeclaration,
  ts.SyntaxKind.PropertySignature,
  ts.SyntaxKind.VariableStatement,
];

/**
 * Each api type corresponds to a set of available tags.
 */
export const apiLegalityCheckTypeMap: Map<ts.SyntaxKind, string[]> = new Map([
  [ts.SyntaxKind.CallSignature, ['param', 'returns', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.ClassDeclaration, ['extends', 'implements', 'syscap', 'since']],
  [ts.SyntaxKind.Constructor, ['param', 'syscap', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.EnumDeclaration, ['enum', 'syscap', 'since']],
  [ts.SyntaxKind.FunctionDeclaration, ['param', 'returns', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.InterfaceDeclaration, ['typedef', 'extends', 'syscap', 'since']],
  [ts.SyntaxKind.MethodDeclaration, ['param', 'returns', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.MethodSignature, ['param', 'returns', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.ModuleDeclaration, ['namespace', 'syscap', 'since']],
  [ts.SyntaxKind.PropertyDeclaration, ['type', 'default', 'permission', 'throws', 'readonly', 'syscap', 'since']],
  [ts.SyntaxKind.PropertySignature, ['type', 'default', 'permission', 'throws', 'readonly', 'syscap', 'since']],
  [ts.SyntaxKind.VariableStatement, ['constant', 'default', 'permission', 'throws', 'syscap', 'since']],
  [ts.SyntaxKind.TypeAliasDeclaration, ['syscap', 'since', 'typedef', 'param', 'returns', 'throws']],
  [ts.SyntaxKind.EnumMember, ['syscap', 'since']],
  [ts.SyntaxKind.NamespaceExportDeclaration, ['syscap', 'since']],
  [ts.SyntaxKind.TypeLiteral, ['syscap', 'since']],
  [ts.SyntaxKind.LabeledStatement, ['syscap', 'since']],
  [ts.SyntaxKind.StructDeclaration, ['struct', 'syscap', 'since']],
]);

/**
 * An array of online error messages
 */
export let compositiveResult: ApiResultSimpleInfo[] = [];

/**
 * An array of local error messages
 */
export const compositiveLocalResult: ApiResultInfo[] = [];

export let apiCheckResult: ApiResultMessage[] = [];

export let hierarchicalRelationsSet: Set<string> = new Set();

export function cleanApiCheckResult(): void {
  apiCheckResult = [];
  compositiveResult = [];
  hierarchicalRelationsSet = new Set();
}

export const punctuationMarkSet: Set<string> = new Set(['\\{', '\\}', '\\(', '\\)', '\\[', '\\]', '\\@', '\\.', '\\:',
  '\\,', '\\;', '\\(', '\\)', '\\"', '\\/', '\\_', '\\-', '\\=', '\\?', '\\<', '\\>', '\\,', '\\!', '\\#', '\：', '\，',
  '\\:', '\\|', '\\%', '\\&', '\\¡', '\\¢', '\\+', '\\`', '\\\\', '\\\'']);

export const throwsTagDescriptionArr: string[] = [
  'Parameter error. Possible causes:',
  'Mandatory parameters are left unspecified',
  'Incorrect parameter types',
  'Parameter verification failed'
];