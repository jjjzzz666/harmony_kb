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
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { EnumUtils } from '../utils/EnumUtils';
import { FileUtils } from '../utils/FileUtils';
import { LogUtil } from '../utils/logUtil';
import { FilesMap, Parser } from '../coreImpl/parser/parser';
import { parserParam } from '../coreImpl/parser/NodeProcessor';
import { DiffHelper } from '../coreImpl/diff/diff';
import {
  BasicDiffInfo,
  diffTypeMap,
  ApiDiffType,
  DiffNumberInfo,
  apiChangeMap,
  isNotApiSet,
} from '../typedef/diff/ApiInfoDiff';
import { WriterHelper } from './writer';
import { LocalEntry } from '../coreImpl/checker/local_entry';
import { ApiResultMessage, ApiResultSimpleInfo } from '../typedef/checker/result_type';
import { NumberConstant } from '../utils/Constant';
import { ApiStatisticsHelper } from '../coreImpl/statistics/Statistics';
import { ApiStatisticsInfo, StatisticsInfoValueType } from '../typedef/statistics/ApiStatistics';
import { SyscapProcessorHelper } from '../coreImpl/diff/syscapFieldProcessor';
import { ApiCountInfo } from '../typedef/count/ApiCount';
import { ApiCountHelper } from '../coreImpl/count/count';
import { CommonFunctions } from '../utils/checkUtils';
import { FunctionUtils, KitData } from '../utils/FunctionUtils';
import { ApiInfo, ApiType } from '../typedef/parser/ApiInfoDefination';
import { checkEntryType } from '../typedef/checker/result_type';


/**
 * 工具名称的枚举值，用于判断执行哪个工具
 *
 * @enum { string }
 */
export enum toolNameType {
  /**
   * 统计工具
   */
  COLLECT = 'collect',
  /**
   * 检查工具
   */
  CHECK = 'check',
  /**
   * 检查工具 线上版
   */
  CHECKONLINE = 'checkOnline',
  /**
   * 兼容性变更检查工具 线上版
   */
  APICHANGECHECK = 'apiChangeCheck',
  /**
   * diff工具
   */
  DIFF = 'diff',
  /**
   * 标签漏标检查
   */
  LABELDETECTION = 'detection',
  /**
   * API个数统计
   */
  COUNT = 'count'
}

/**
 * 工具名称的set集合，通过enum生成
 */
export const toolNameSet: Set<string> = new Set(EnumUtils.enum2arr(toolNameType));

/**
 * 输出文件格式,用于判断输出什么类型的文件
 *
 * @enum { string }
 */
export enum formatType {
  NULL = '',
  JSON = 'json',
  EXCEL = 'excel',
  CHANGELOG = 'changelog',
}

/**
 * 输出文件格式的set集合，通过enum生成
 */
export const formatSet: Set<string> = new Set(EnumUtils.enum2arr(formatType));

export const Plugin: PluginType = {
  pluginOptions: {
    name: 'parser',
    version: '0.1.0',
    description: 'Compare the parser the SDKS',
    commands: [
      {
        isRequiredOption: true,
        options: [`-N,--tool-name <${[...toolNameSet]}>`, 'tool name ', 'checkOnline'],
      },
      {
        isRequiredOption: false,
        options: ['-C,--collect-path <string>', 'collect api path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['-F,--collect-file <string>', 'collect api file array', ''],
      },
      {
        isRequiredOption: false,
        options: ['-L,--check-labels <string>', 'detection check labels', ''],
      },
      {
        isRequiredOption: false,
        options: ['--isOH <string>', 'detection check labels', ''],
      },
      {
        isRequiredOption: false,
        options: ['--path <string>', 'check api path, split with comma', ''],
      },
      {
        isRequiredOption: false,
        options: ['--checker <string>', 'check api rule, split with comma', 'all'],
      },
      {
        isRequiredOption: false,
        options: ['--prId <string>', 'check api prId', ''],
      },
      {
        isRequiredOption: false,
        options: ['--is-increment <string>', 'check api is increment, only check change', 'true'],
      },
      {
        isRequiredOption: false,
        options: ['--excel <string>', 'check api excel', 'false'],
      },
      {
        isRequiredOption: false,
        options: ['--old <string>', 'diff old sdk path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['--new <string>', 'diff new sdk path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['--old-version <string>', 'old sdk version', '0'],
      },
      {
        isRequiredOption: false,
        options: ['--new-version <string>', 'new sdk version', '0'],
      },
      {
        isRequiredOption: false,
        options: ['--output <string>', 'output file path', './'],
      },
      {
        isRequiredOption: false,
        options: [`--format <${[...formatSet]}>`, 'output file format', 'json'],
      },
      {
        isRequiredOption: false,
        options: ['--changelogUrl <string>', 'changelog url', ''],
      },
      {
        isRequiredOption: false,
        options: ['--all <boolean>', 'is all sheet', ''],
      },
    ],
  },

  start: async function (argv: OptionObjType) {
    const toolName: toolNameType = argv.toolName;
    const method: ToolNameMethodType | undefined = toolNameMethod.get(toolName);
    if (!method) {
      LogUtil.i(
        'CommandArgs',
        `tool-name may use error name or don't have function,tool-name can use 'collect' or 'diff'`
      );
      return;
    }
    const options: OptionObjType = {
      toolName: toolName,
      collectPath: argv.collectPath,
      collectFile: argv.collectFile,
      checkLabels: argv.checkLabels,
      isOH: argv.isOH,
      path: argv.path,
      checker: argv.checker,
      prId: argv.prId,
      isIncrement: argv.isIncrement,
      old: argv.old,
      new: argv.new,
      oldVersion: argv.oldVersion,
      newVersion: argv.newVersion,
      output: argv.output,
      format: argv.format,
      changelogUrl: argv.changelogUrl,
      excel: argv.excel,
      all: argv.all,
    };
    const methodInfos: ToolNameValueType = method(options);

    outputInfos(methodInfos.data, options, methodInfos.callback);
  },
  stop: function () {
    LogUtil.i('commander', `elapsed time: ${Date.now() - startTime}`);
  },
};
let startTime = Date.now();

/**
 * 工具获取完数据之后，根据format和其他数据处理输出
 *
 * @param {ToolReturnData} infos 工具返回的数据
 * @param {OptionObjType} options 传入的命令参数
 * @param {(ToolNameExcelCallback  | undefined)} callback 导出excel的回调
 */
function outputInfos(infos: ToolReturnData, options: OptionObjType, callback: ToolNameExcelCallback | undefined): void {
  const format = options.format;
  let jsonFileName = `${options.toolName}_${options.oldVersion}_${options.newVersion}.json`;

  if (!format) {
    return;
  }
  if (options.toolName === toolNameType.COUNT) {
    jsonFileName = 'api_kit_js.json';
  }
  switch (format) {
    case formatType.JSON:
      WriterHelper.JSONReporter(
        String(infos[0]),
        options.output,
        jsonFileName
      );
      break;
    case formatType.EXCEL:
      WriterHelper.ExcelReporter(infos, options.output, `${options.toolName}.xlsx`, callback, options);
      break;
    case formatType.CHANGELOG:
      WriterHelper.JSONReporter(String(infos[0]), options.output, `${options.toolName}.json`);
      break;
    default:
      break;
  }
}

/**
 * 收集api工具调用方法
 *
 * @param { OptionObjType } options
 * @return { ToolNameValueType }
 */
function collectApi(options: OptionObjType): ToolNameValueType {
  // process.env.NEED_DETECTION = 'true';
  const fileDir: string = path.resolve(FileUtils.getBaseDirName(), options.collectPath);
  let collectFile: string = '';
  if (options.collectFile !== '') {
    collectFile = path.resolve(FileUtils.getBaseDirName(), options.collectFile);
    parserParam.setSdkPath(collectFile);
  }
  let allApis: FilesMap;
  try {
    if (FileUtils.isDirectory(fileDir)) {
      allApis = Parser.parseDir(fileDir, collectFile);
    } else {
      allApis = Parser.parseFile(path.resolve(fileDir, '..'), fileDir);
    }
    const statisticsInfosObject: StatisticsInfoValueType = ApiStatisticsHelper.getApiStatisticsInfos(allApis);
    const fileContent: string = Parser.getParseResults(allApis);
    let data: ApiStatisticsInfo[] | string[] = [fileContent];
    if (options.format === 'excel') {
      const allApiStatisticsInfos: ApiStatisticsInfo[] | undefined = statisticsInfosObject.allApiStatisticsInfos;
      data = statisticsInfosObject.apiStatisticsInfos;
      if (allApiStatisticsInfos) {
        WriterHelper.ExcelReporter(
          allApiStatisticsInfos,
          options.output,
          `all_${options.toolName}.xlsx`,
          collectApiCallback as ToolNameExcelCallback
        );
      }
    }

    return {
      data: data,
      callback: collectApiCallback as ToolNameExcelCallback,
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e(`error collect`, error.stack ? error.stack : error.message);
    return {
      data: [],
      callback: collectApiCallback as ToolNameExcelCallback,
    };
  }
}

function collectApiCallback(apiData: ApiStatisticsInfo[], workbook: ExcelJS.Workbook, dest?: string,
  options?: OptionObjType): void {
  const sheet: ExcelJS.Worksheet = workbook.addWorksheet();
  const apiRelationsSet: Set<string> = new Set();
  const kitData: KitData = FunctionUtils.readKitFile();
  sheet.name = 'JsApi';
  sheet.views = [{ xSplit: 1 }];
  sheet.getRow(1).values = [
    '模块名',
    '类名',
    '方法名',
    '函数',
    '类型',
    '起始版本',
    '废弃版本',
    'syscap',
    '错误码',
    '是否为系统API',
    '模型限制',
    '权限',
    '是否支持跨平台',
    '是否支持卡片应用',
    '是否为高阶API',
    '装饰器',
    'kit',
    '文件路径',
    '子系统',
    '父节点类型',
    '父节点API是否可选'
  ];
  let lineNumber = 2;
  apiData.forEach((apiInfo: ApiStatisticsInfo) => {
    const apiRelations: string = `${apiInfo.getHierarchicalRelations()},${apiInfo.getDefinedText()}`;
    if (apiRelationsSet.has(apiRelations)) {
      return;
    }
    sheet.getRow(lineNumber).values = [
      apiInfo.getPackageName(),
      apiInfo.getParentModuleName(),
      apiInfo.getApiName(),
      apiInfo.getDefinedText(),
      apiInfo.getApiType(),
      apiInfo.getSince() === '-1' ? '' : apiInfo.getSince(),
      apiInfo.getDeprecatedVersion() === '-1' ? '' : apiInfo.getDeprecatedVersion(),
      apiInfo.getSyscap(),
      apiInfo.getErrorCodes().join() === '-1' ? '' : apiInfo.getErrorCodes().join(),
      apiInfo.getApiLevel(),
      apiInfo.getModelLimitation(),
      apiInfo.getPermission(),
      apiInfo.getIsCrossPlatForm(),
      apiInfo.getIsForm(),
      apiInfo.getIsAutomicService(),
      apiInfo.getDecorators()?.join(),
      apiInfo.getKitInfo() === ''
        ? kitData.kitNameMap.get(apiInfo.getFilePath().replace(/\\/g, '/').replace('api/', ''))
        : apiInfo.getKitInfo(),
      apiInfo.getFilePath(),
      kitData.subsystemMap.get(apiInfo.getFilePath().replace(/\\/g, '/').replace('api/', '')),
      apiInfo.getParentApiType(),
      apiInfo.getIsOptional(),
    ];
    lineNumber++;
    apiRelationsSet.add(apiRelations);
  });

  if (options?.all) {
    handleCollectData(apiData, workbook);
  }
}

/**
 * 用于处理统计工具的数据
 * 
 * @param apiData 
 * @param workbook 
 */
function handleCollectData(apiData: ApiStatisticsInfo[], workbook: ExcelJS.Workbook): void {
  const sheet: ExcelJS.Worksheet = workbook.addWorksheet();
  const apiRelationsSet: Set<string> = new Set();
  const kitData: KitData = FunctionUtils.readKitFile();
  sheet.name = 'JsApi定制版本';
  sheet.views = [{ xSplit: 1 }];
  sheet.getRow(1).values = [
    '模块名',
    '类名',
    '方法名',
    '函数',
    '类型',
    '起始版本',
    '废弃版本',
    'syscap',
    '错误码',
    '是否为系统API',
    '模型限制',
    '权限',
    '是否支持跨平台',
    '是否支持卡片应用',
    '是否为高阶API',
    '装饰器',
    'kit',
    '文件路径',
    '子系统',
    '接口全路径'
  ];
  let lineNumber = 2;
  apiData.forEach((apiInfo: ApiStatisticsInfo) => {
    const apiRelations: string = `${apiInfo.getHierarchicalRelations()},${apiInfo.getDefinedText()}`;
    if (apiRelationsSet.has(apiRelations)) {
      return;
    }
    sheet.getRow(lineNumber).values = [
      apiInfo.getPackageName(),
      apiInfo.getParentModuleName(),
      apiInfo.getApiName(),
      apiInfo.getDefinedText(),
      apiInfo.getApiType(),
      apiInfo.getSince() === '-1' ? '' : apiInfo.getSince(),
      apiInfo.getDeprecatedVersion() === '-1' ? '' : apiInfo.getDeprecatedVersion(),
      apiInfo.getSyscap(),
      apiInfo.getErrorCodes().join() === '-1' ? '' : apiInfo.getErrorCodes().join(),
      apiInfo.getApiLevel(),
      apiInfo.getModelLimitation(),
      apiInfo.getPermission(),
      apiInfo.getIsCrossPlatForm(),
      apiInfo.getIsForm(),
      apiInfo.getIsAutomicService(),
      apiInfo.getDecorators()?.join(),
      apiInfo.getKitInfo() === ''
        ? kitData.kitNameMap.get(apiInfo.getFilePath().replace(/\\/g, '/').replace('api/', ''))
        : apiInfo.getKitInfo(),
      apiInfo.getFilePath(),
      kitData.subsystemMap.get(apiInfo.getFilePath().replace(/\\/g, '/').replace('api/', '')),
      apiInfo.getHierarchicalRelations().replace(/\//g, '#').replace('api\\', ''),
    ];
    lineNumber++;
    apiRelationsSet.add(apiRelations);
  });
}
/**
 * api检查工具调用方法
 *
 * @param { OptionObjType } options
 * @return { ToolNameValueType }
 */
function checkApi(options: OptionObjType): ToolNameValueType {
  try {
    let mdApiFiles: string[] = [];
    const filePathTxt: string = path.resolve(FileUtils.getBaseDirName(), '../mdFiles.txt');
    if (fs.existsSync(filePathTxt)) {
      mdApiFiles = CommonFunctions.getMdFiles(filePathTxt);
    }
    const checkParam: checkEntryType = {
      filePathArr: mdApiFiles,
      fileRuleArr: ['all'],
      output: './result.json',
      prId: options.prId,
      isOutExcel: 'true',
      isIncrement: Boolean(options.isIncrement === 'true'),
    };
    LocalEntry.checkEntryLocal(checkParam);
    return {
      data: [],
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e('error check', error.stack ? error.stack : error.message);
    return {
      data: [],
    };
  }
}

/**
 * api检查工具调用方法
 *
 * @param { OptionObjType } options
 * @return { ToolNameValueType }
 */
function checkOnline(options: OptionObjType): ToolNameValueType {
  options.format = formatType.NULL;
  try {

    const checkParam: checkEntryType = {
      filePathArr: options.path.split(','),
      fileRuleArr: options.checker.split(','),
      output: options.output,
      prId: options.prId,
      isOutExcel: options.excel,
      isIncrement: Boolean(options.isIncrement === 'true'),
    };
    LocalEntry.checkEntryLocal(checkParam);
    return {
      data: [],
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e('error check', error.stack ? error.stack : error.message);
  } finally {
  }
  return {
    data: [],
  };
}

/**
 * api检查工具调用方法
 *
 * @param { OptionObjType } options
 * @return { ToolNameValueType }
 */
function apiChangeCheck(options: OptionObjType): ToolNameValueType {
  options.format = formatType.NULL;
  try {
    const checkParam: checkEntryType = {
      filePathArr: [],
      fileRuleArr: options.checker.split(','),
      output: options.output,
      prId: options.prId,
      isOutExcel: options.excel,
      isIncrement: Boolean(options.isIncrement === 'true'),
    };
    LocalEntry.apiChangeCheckEntryLocal(checkParam);
    return {
      data: [],
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e('error api change check', error.stack ? error.stack : error.message);
  } finally {
  }
  return {
    data: [],
  };
}

/**
 * diffApi工具调用方法
 *
 * @param { OptionObjType } options
 * @return { ToolNameValueType }
 */
function diffApi(options: OptionObjType): ToolNameValueType {
  const oldFileDir: string = path.resolve(FileUtils.getBaseDirName(), options.old);
  const newFileDir: string = path.resolve(FileUtils.getBaseDirName(), options.new);
  const status: fs.Stats = fs.statSync(oldFileDir);
  let data: BasicDiffInfo[] = [];
  try {
    if (status.isDirectory()) {
      const newSDKApiMap: FilesMap = Parser.parseDir(newFileDir);
      Parser.cleanParserParamSDK();
      const oldSDKApiMap: FilesMap = Parser.parseDir(oldFileDir);
      data = DiffHelper.diffSDK(oldSDKApiMap, newSDKApiMap, options.all);
    } else {
      const oldSDKApiMap: FilesMap = Parser.parseFile(path.resolve(oldFileDir, '..'), oldFileDir);
      Parser.cleanParserParamSDK();
      const newSDKApiMap: FilesMap = Parser.parseFile(path.resolve(newFileDir, '..'), newFileDir);
      data = DiffHelper.diffSDK(oldSDKApiMap, newSDKApiMap, options.all);
    }
    let finalData: (string | BasicDiffInfo)[] = [];
    if (options.format === formatType.JSON) {
      finalData = [JSON.stringify(data, null, NumberConstant.INDENT_SPACE)];
    } else {
      finalData = data;
    }
    return {
      data: finalData,
      callback: diffApiCallback as ToolNameExcelCallback,
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e('error diff', error.stack ? error.stack : error.message);
    return {
      data: [],
      callback: diffApiCallback as ToolNameExcelCallback,
    };
  }
}
function detectionApi(options: OptionObjType): ToolNameValueType {
  process.env.NEED_DETECTION = 'true';
  process.env.IS_OH = options.isOH;
  options.format = formatType.NULL;
  const fileDir: string = path.resolve(FileUtils.getBaseDirName(), options.collectPath);
  let collectFile: string = '';
  if (options.collectFile !== '') {
    collectFile = path.resolve(FileUtils.getBaseDirName(), options.collectFile);
  }
  let allApis: FilesMap;
  let buffer: Buffer | string = Buffer.from('');
  try {
    if (FileUtils.isDirectory(fileDir)) {
      allApis = Parser.parseDir(fileDir, collectFile);
    } else {
      allApis = Parser.parseFile(path.resolve(fileDir, '..'), fileDir);
    }
    const fileContent: string = Parser.getParseResults(allApis);
    WriterHelper.JSONReporter(fileContent, path.dirname(options.output), 'detection.json');
    let runningCommand: string = '';

    if (process.env.NODE_ENV === 'development') {
      runningCommand = `python ${path.resolve(
        FileUtils.getBaseDirName(),
        '../api_label_detection/src/main.py'
      )} -N detection -L ${options.checkLabels} -P ${path.resolve(
        path.dirname(options.output),
        'detection.json'
      )} -O ${path.resolve(options.output)}`;
    } else if (process.env.NODE_ENV === 'production') {
      runningCommand = `${path.resolve(FileUtils.getBaseDirName(), './main.exe')} -N detection -L ${options.checkLabels
        } -P ${path.resolve(path.dirname(options.output), 'detection.json')} -O ${path.resolve(options.output)}`;
    }
    buffer = execSync(runningCommand, {
      timeout: 120000,
    });
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e(`error collect`, error.stack ? error.stack : error.message);
  } finally {
    LogUtil.i(`detection run over`, buffer.toString());
  }
  return {
    data: [],
  };
}

/**
 * api个数统计工具的入口函数
 * 
 * @param { OptionObjType } options 
 * @returns { ToolNameValueType }
 */
function countApi(options: OptionObjType): ToolNameValueType {
  const fileDir: string = path.resolve(FileUtils.getBaseDirName(), '../../api');
  let collectFile: string = '';
  if (options.collectFile !== '') {
    collectFile = path.resolve(FileUtils.getBaseDirName(), options.collectFile);
  }
  let allApis: FilesMap;
  try {
    if (FileUtils.isDirectory(fileDir)) {
      allApis = Parser.parseDir(fileDir, collectFile);
    } else {
      allApis = Parser.parseFile(path.resolve(fileDir, '..'), fileDir);
    }
    const statisticApiInfos: ApiStatisticsInfo[] = ApiStatisticsHelper.getApiStatisticsInfos(allApis).apiStatisticsInfos;
    const apiCountInfos: ApiCountInfo[] = ApiCountHelper.countApi(statisticApiInfos);
    let finalData: (string | ApiCountInfo)[] = [];
    if (options.format === formatType.JSON) {
      finalData = [JSON.stringify(apiCountInfos, null, NumberConstant.INDENT_SPACE)];
    } else {
      finalData = apiCountInfos;
    }
    return {
      data: finalData,
      callback: countApiCallback as ToolNameExcelCallback,
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e(`error count`, error.stack ? error.stack : error.message);
    return {
      data: [],
      callback: countApiCallback as ToolNameExcelCallback,
    };
  }
}

function countApiCallback(data: ApiCountInfo[], workbook: ExcelJS.Workbook): void {
  const sheet: ExcelJS.Worksheet = workbook.addWorksheet();
  sheet.name = 'api数量';
  sheet.views = [{ xSplit: 1 }];
  sheet.getRow(1).values = ['子系统', 'kit', '文件', 'api数量'];
  data.forEach((countInfo: ApiCountInfo, index: number) => {
    sheet.getRow(index + NumberConstant.LINE_IN_EXCEL).values = [
      countInfo.getsubSystem(),
      countInfo.getKitName(),
      countInfo.getFilePath(),
      countInfo.getApiNumber()
    ];
  });
}

/**
 * diffApi工具导出excel时的回调方法
 *
 * @param {BasicDiffInfo[]} data diffApi工具获取到的数据
 * @param {ExcelJS.Workbook} workbook ExcelJS构建的Workbook对象
 */
function diffApiCallback(
  data: BasicDiffInfo[],
  workbook: ExcelJS.Workbook,
  dest?: string,
  options?: OptionObjType
): void {
  const relationsSet: Set<string> = new Set();
  const kitData: KitData = FunctionUtils.readKitFile();
  const sheet: ExcelJS.Worksheet = workbook.addWorksheet('api差异');
  sheet.views = [{ xSplit: 2 }];
  sheet.getRow(1).values = ['操作标记', '差异项-旧版本', '差异项-新版本', 'd.ts文件', '归属子系统', 'kit', '是否为系统API'];
  data.forEach((diffInfo: BasicDiffInfo, index: number) => {
    relationsSet.add(getRelation(diffInfo));
    const dtsName = diffInfo.getNewDtsName() ? diffInfo.getNewDtsName() : diffInfo.getOldDtsName();
    sheet.getRow(index + NumberConstant.LINE_IN_EXCEL).values = [
      diffTypeMap.get(diffInfo.getDiffType()),
      joinOldMessage(diffInfo),
      joinNewMessage(diffInfo),
      dtsName.replace(/\\/g, '/'),
      kitData.subsystemMap.get(dtsName.replace(/\\/g, '/').replace('api/', '')),
      SyscapProcessorHelper.getSingleKitInfo(diffInfo) === ''
        ? kitData.kitNameMap.get(dtsName.replace(/\\/g, '/').replace('api/', ''))
        : SyscapProcessorHelper.getSingleKitInfo(diffInfo),
      diffInfo.getIsSystemapi(),
    ];
  });
  WriterHelper.MarkdownReporter.writeInMarkdown(data, dest);

  if (options?.all) {
    addApiNumberSheet(relationsSet, workbook, data, kitData);
  }


}

/**
 * 添加diff工具结果的另一个sheet页，对API变更信息的次数+兼容性信息进行统计
 * 
 * @param relationsSet 
 * @param workbook 
 * @param data 
 * @param kitData 
 */
function addApiNumberSheet(relationsSet: Set<string>, workbook: ExcelJS.Workbook, data: BasicDiffInfo[],
  kitData: KitData): void {
  const numberSheet: ExcelJS.Worksheet = workbook.addWorksheet('api变更数量统计');
  numberSheet.views = [{ xSplit: 2 }];
  numberSheet.getRow(1).values = [
    'api名称',
    'kit名称',
    '归属子系统',
    '是否是api',
    'api类型',
    '操作标记',
    '变更类型',
    '兼容性',
    '变更次数',
    '差异项-旧版本',
    '差异项-新版本',
    '兼容性列表',
    '接口全路径',
    '是否为系统API',
    '是否为同名API'
  ];
  let diffTypeNumberArr: DiffNumberInfo[] = [];
  relationsSet.forEach((apiRelation: string) => {
    let apiName: string = '';
    const diffNumberInfo: DiffNumberInfo = new DiffNumberInfo();
    data.forEach((diffInfo: BasicDiffInfo) => {
      const dtsName: string = diffInfo.getNewDtsName() ? diffInfo.getNewDtsName() : diffInfo.getOldDtsName();
      const kitName =
        SyscapProcessorHelper.getSingleKitInfo(diffInfo) === ''
          ? kitData.kitNameMap.get(dtsName.replace(/\\/g, '/').replace('api/', ''))
          : SyscapProcessorHelper.getSingleKitInfo(diffInfo);
      if (apiRelation === getRelation(diffInfo)) {
        apiName = getDiffApiName(diffInfo);
        diffNumberInfo
          .setAllDiffType(diffInfo.getDiffMessage())
          .setAllChangeType(apiChangeMap.get(diffInfo.getDiffType()))
          .setOldDiffMessage(diffInfo.getOldDescription())
          .setNewDiffMessage(diffInfo.getNewDescription())
          .setAllCompatible(diffInfo.getIsCompatible())
          .setIsApi(!isNotApiSet.has(diffInfo.getApiType()))
          .setKitName(kitName)
          .setSubsystem(kitData.subsystemMap.get(dtsName.replace(/\\/g, '/').replace('api/', '')))
          .setApiName(diffInfo.getApiType() === ApiType.SOURCE_FILE ? 'SOURCEFILE' : getDiffApiName(diffInfo))
          .setApiRelation(getRelation(diffInfo).replace(/\,/g, '#').replace('api\\', ''))
          .setIsSystemapi(diffInfo.getIsSystemapi())
          .setApiType(diffInfo.getApiType())
          .setIsSameNameFunction(diffInfo.getIsSameNameFunction());
      }
    });
    diffTypeNumberArr.push(diffNumberInfo);
  });

  diffTypeNumberArr = handleData(data, diffTypeNumberArr);
  diffTypeNumberArr.forEach((diffNumberInfo: DiffNumberInfo, index: number) => {
    numberSheet.getRow(index + NumberConstant.LINE_IN_EXCEL).values = [
      diffNumberInfo.getApiName(),
      diffNumberInfo.getKitName(),
      diffNumberInfo.getSubsystem(),
      diffNumberInfo.getIsApi(),
      diffNumberInfo.getApiType(),
      diffNumberInfo.getAllDiffType().join(' #&# '),
      diffNumberInfo.getAllChangeType().join(' #&# '),
      getCompatibleObject(diffNumberInfo),
      calculateChangeNumber(diffNumberInfo),
      diffNumberInfo.getOldDiffMessage().join(' #&# '),
      diffNumberInfo.getNewDiffMessage().join(' #&# '),
      diffNumberInfo.getAllCompatible().join(' #&# '),
      diffNumberInfo.getApiRelation(),
      diffNumberInfo.getIsSystemapi(),
      diffNumberInfo.getIsSameNameFunction(),
    ];
  });
}


/**
 * 用于处理diff数据的钩子函数
 * 
 * @param data 基础数据
 * @param diffTypeNumberArr 处理后的数据
 * @returns 
 */
function handleData(data: BasicDiffInfo[], diffTypeNumberArr: DiffNumberInfo[]): DiffNumberInfo[] {
  return diffTypeNumberArr;
}

/**
 * 判断API的变更集合是否兼容
 *
 * @param diffNumberInfo
 * @returns
 */
function getCompatibleObject(diffNumberInfo: DiffNumberInfo): string {
  const compatibleInfoSet: Set<boolean> = new Set(diffNumberInfo.getAllCompatible());
  let compatibleSign = 0;
  let incompatibleSign = 0;
  if (compatibleInfoSet.size === 2) {
    compatibleSign = 1;
    incompatibleSign = 1;
  } else if (compatibleInfoSet.has(true)) {
    compatibleSign = 1;
  } else if (compatibleInfoSet.has(false)) {
    incompatibleSign = 1;
  }
  return `{
    "兼容性":${compatibleSign},
    "非兼容性":${incompatibleSign}
  }`;
}

/**
 * 计算变更次数
 *
 * @param diffNumberInfo
 * @returns
 */
function calculateChangeNumber(diffNumberInfo: DiffNumberInfo): string {
  const changeTypeSet: Set<string> = new Set(diffNumberInfo.getAllChangeType());
  let newApiNumber: number = 0;
  let apiDeleteNumber: number = 0;
  let apiDeprecatedNumber: number = 0;
  let apiChangeNumber: number = 0;
  let apiConstrainedChange: number = 0;
  let apiPrototypeChange: number = 0;
  if (changeTypeSet.has('API修改（原型修改）')) {
    apiPrototypeChange++;
  }
  if (changeTypeSet.has('API修改（约束变化）')) {
    apiConstrainedChange++;
  }
  if (changeTypeSet.has('API修改（原型修改）') || changeTypeSet.has('API修改（约束变化）')) {
    apiChangeNumber++;
  }
  if (changeTypeSet.has('API废弃')) {
    apiDeprecatedNumber++;
  }
  if (changeTypeSet.has('API新增')) {
    newApiNumber++;
  }
  if (changeTypeSet.has('API删除')) {
    apiDeleteNumber++;
  }
  return `{
    "API新增": ${newApiNumber},
    "API删除": ${apiDeleteNumber},
    "API废弃": ${apiDeprecatedNumber},
    "API修改": ${apiChangeNumber},
    "API修改（原型修改）": ${apiPrototypeChange},
    "API修改（约束变化）": ${apiConstrainedChange}
    }`;
}

function getDiffApiName(diffInfo: BasicDiffInfo): string {
  if (diffInfo.getNewApiName() !== '') {
    return diffInfo.getNewApiName();
  }
  return diffInfo.getOldApiName();
}

function getRelation(diffInfo: BasicDiffInfo): string {
  const relationsArr = diffInfo.getNewHierarchicalRelations();
  if (relationsArr.length > 0) {
    return relationsArr.join();
  } else {
    return diffInfo.getOldHierarchicalRelations().join();
  }
}

export function joinOldMessage(diffInfo: BasicDiffInfo): string {
  if (diffInfo.getDiffMessage() === diffTypeMap.get(ApiDiffType.ADD)) {
    return 'NA';
  }
  let oldDescription: string = '';
  const relation: string[] = diffInfo.getOldHierarchicalRelations();
  const parentModuleName: string = diffInfo.getParentModuleName(relation);
  oldDescription =
    diffInfo.getOldDescription() === '-1' || !diffInfo.getOldDescription() ? 'NA' : diffInfo.getOldDescription();
  if (diffInfo.getDiffType() === ApiDiffType.KIT_CHANGE) {
    return `${oldDescription}`;
  }
  return `类名：${parentModuleName}；\n` + `API声明：${diffInfo.getOldApiDefinedText()}\n差异内容：${oldDescription}`;
}

export function joinNewMessage(diffInfo: BasicDiffInfo): string {
  if (diffInfo.getDiffMessage() === diffTypeMap.get(ApiDiffType.REDUCE)) {
    return 'NA';
  }
  let newDescription: string = '';
  const relation: string[] = diffInfo.getNewHierarchicalRelations();
  const parentModuleName: string = diffInfo.getParentModuleName(relation);
  newDescription =
    diffInfo.getNewDescription() === '-1' || !diffInfo.getNewDescription() ? 'NA' : diffInfo.getNewDescription();
  if (diffInfo.getDiffType() === ApiDiffType.KIT_CHANGE) {
    return `${newDescription}`;
  }
  return `类名：${parentModuleName}；\n` + `API声明：${diffInfo.getNewApiDefinedText()}\n差异内容：${newDescription}`;
}

/**
 * 工具名称对应执行的方法
 */
export const toolNameMethod: Map<string, ToolNameMethodType> = new Map([
  [toolNameType.COLLECT, collectApi],
  [toolNameType.CHECK, checkApi],
  [toolNameType.CHECKONLINE, checkOnline],
  [toolNameType.APICHANGECHECK, apiChangeCheck],
  [toolNameType.DIFF, diffApi],
  [toolNameType.LABELDETECTION, detectionApi],
  [toolNameType.COUNT, countApi]
]);

/**
 * 命令传入参数
 */
export type OptionObjType = {
  toolName: toolNameType;
  path: string;
  checker: string;
  prId: string;
  isIncrement: string;
  collectPath: string;
  collectFile: string;
  checkLabels: string;
  isOH: string;
  old: string;
  new: string;
  oldVersion: string;
  newVersion: string;
  output: string;
  format: formatType;
  changelogUrl: string;
  excel: string;
  all: boolean;
};

/**
 * 各个工具当输出为excel时的回调方法
 *
 * @param { ToolReturnData } data 工具获取到的数据
 * @param { ExcelJS.Worksheet } sheet ExcelJS构建的Worksheet对象
 */
export type ToolNameExcelCallback = (
  data: ToolReturnData,
  sheet: ExcelJS.Workbook,
  dest?: string,
  options?: OptionObjType
) => void;

/**
 * 各个工具调用方法返回的格式
 */
export type ToolNameValueType = {
  /**
   * 工具返回的数据格式，默认为数组，方便excel输出，如果是字符串，则将字符串传入数组第一个元素
   *
   * @type { Array}
   */
  data: ToolReturnData;

  /**
   * 用于excel方法回调，返回数据以及ExcelJS构建的Worksheet对象
   *
   * @type {toolNameExcelCallback}
   */
  callback?: ToolNameExcelCallback;
};
export type ToolReturnData = (string | ApiStatisticsInfo | ApiResultMessage | BasicDiffInfo | ApiCountInfo)[];

/**
 * 各个工具调用方法
 *
 */
export type ToolNameMethodType = (options: OptionObjType) => ToolNameValueType;

export type PluginType = {
  pluginOptions: PluginOptionsType;
  start: (argv: OptionObjType) => Promise<void>;
  stop: () => void;
};

export type PluginOptionsType = {
  name: string;
  version: string;
  description: string;
  commands: CommandType[];
};

export type CommandType = {
  isRequiredOption: boolean;
  readonly options: [string, string, string];
};
