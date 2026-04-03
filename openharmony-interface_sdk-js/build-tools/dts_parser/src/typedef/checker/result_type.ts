/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ts from 'typescript';
import { ApiDiffType } from '../../typedef/diff/ApiInfoDiff';

/**
 * error message type
 * @enum { string }
 */
export enum ErrorType {
  UNKNOW_DECORATOR = 'unknow decorator',
  MISSPELL_WORDS = 'misspell words',
  NAMING_ERRORS = 'naming errors',
  UNKNOW_PERMISSION = 'unknow permission',
  UNKNOW_SYSCAP = 'unknow syscap',
  UNKNOW_DEPRECATED = 'unknow deprecated',
  WRONG_ORDER = 'wrong order',
  WRONG_VALUE = 'wrong value',
  WRONG_SCENE = 'wrong scene',
  PARAMETER_ERRORS = 'wrong parameter',
  API_PAIR_ERRORS = 'limited api pair errors',
  FORBIDDEN_WORDS = 'forbidden word',
  API_CHANGE_ERRORS = 'api change errors',
  TS_SYNTAX_ERROR = 'TS syntax error',
  NO_JSDOC = 'No jsdoc',
  JSDOC_HAS_CHINESE = 'JSDOC_HAS_CHINESE',
  ERROR_ERROR_CODE = 'error_error_code'
}

/**
 * error message id
 * @enum { number }
 */
export enum ErrorID {
  UNKNOW_DECORATOR_ID = 0,
  MISSPELL_WORDS_ID = 1,
  NAMING_ERRORS_ID = 2,
  UNKNOW_PERMISSION_ID = 3,
  UNKNOW_SYSCAP_ID = 4,
  UNKNOW_DEPRECATED_ID = 5,
  WRONG_ORDER_ID = 6,
  WRONG_VALUE_ID = 7,
  WRONG_SCENE_ID = 8,
  PARAMETER_ERRORS_ID = 9,
  API_PAIR_ERRORS_ID = 10,
  FORBIDDEN_WORDS_ID = 11,
  API_CHANGE_ERRORS_ID = 12,
  TS_SYNTAX_ERROR_ID = 13,
  NO_JSDOC_ID = 14,
  JSDOC_HAS_CHINESE = 15,
  ERROR_ERROR_CODE = 16
}

/**
 * error type
 * @enum { string }
 */
export enum LogType {
  LOG_API = 'Api',
  LOG_JSDOC = 'JsDoc',
  LOG_FILE = 'File',
}

/**
 * error message level
 * @enum { number }
 */
export enum ErrorLevel {
  HIGH = 3,
  MIDDLE = 2,
  LOW = 1,
}

export enum ParticularErrorCode {
  ERROR_CODE_201 = '201',
  ERROR_CODE_202 = '202',
  ERROR_CODE_401 = '401',
  ERROR_PERMISSION = 'permission',
  ERROR_SYSTEMAPI = 'systemapi'
}

/**
 * error message infomation
 * @enum { string }
 */
export enum ErrorMessage {
  ERROR_INFO_VALUE_EXTENDS = 'The [extends] tag value is incorrect. Please check if the tag value matches the inherited class name.',
  ERROR_INFO_VALUE_IMPLEMENTS = 'The [implements] tag value is incorrect. Please check if the tag value matches the inherited class name.',
  ERROR_INFO_VALUE_ENUM = 'The [enum] tag type is incorrect. Please check if the tag type is { string } or { number }.',
  ERROR_INFO_VALUE_SINCE = 'The [since] tag value is incorrect. Please check if the tag value is a numerical value.',
  ERROR_INFO_VALUE_SINCE_NUMBER = 'The [since] value is greater than the latest version number.',
  ERROR_INFO_VALUE_SINCE_JSDOC = 'The [since] value for different jsdoc should not be the same.',
  ERROR_INFO_RETURNS = 'The [returns] tag was used incorrectly. The returns tag should not be used when the return type is void.',
  ERROR_INFO_VALUE_RETURNS = 'The [returns] tag type is incorrect. Please check if the tag type is consistent with the return type.',
  ERROR_INFO_VALUE_USEINSTEAD = 'The [useinstead] tag value is incorrect. Please check the usage method.',
  ERROR_INFO_VALUE_TYPE = 'The [type] tag type is incorrect. Please check if the type matches the attribute type.',
  ERROR_INFO_VALUE_DEFAULT = 'The [default] tag value is incorrect. Please supplement the default value.',
  ERROR_INFO_VALUE_PERMISSION = 'The [permission] tag value is incorrect. Please check if the permission field has been configured or update the configuration file.',
  ERROR_INFO_VALUE_DEPRECATED = 'The [deprecated] tag value is incorrect. Please check the usage method.',
  ERROR_INFO_VALUE_SYSCAP = 'The [syscap] tag value is incorrect. Please check if the syscap field is configured.',
  ERROR_INFO_VALUE_NAMESPACE = 'The [namespace] tag value is incorrect. Please check if it matches the namespace name.',
  ERROR_INFO_VALUE_INTERFACE = 'The [interface] label value is incorrect. Please check if it matches the interface name.',
  ERROR_INFO_VALUE_TYPEDEF = 'The [typedef] tag value is incorrect. Please check if it matches the interface name or type content.',
  ERROR_INFO_VALUE_STRUCT = 'The [struct] tag value is incorrect. Please check if it matches the struct name.',
  ERROR_INFO_TYPE_PARAM = 'The type of the [$$] [param] tag is incorrect. Please check if it matches the type of the [$$] parameter.',
  ERROR_INFO_VALUE_PARAM = 'The value of the [$$] [param] tag is incorrect. Please check if it matches the [$$] parameter name.',
  ERROR_INFO_VALUE1_THROWS = 'The type of the [$$] [throws] tag is incorrect. Please fill in [BusinessError].',
  ERROR_INFO_VALUE2_THROWS = 'The type of the [$$] [throws] tag is incorrect. Please check if the tag value is a numerical value.',
  ERROR_INFO_VALUE3_THROWS = 'The description of the [401 throws] is incorrect. please fix it according to the specification.',
  ERROR_INFO_INHERIT = 'It was detected that there is an inheritable label [$$] in the current file, but there are child nodes without this label.',
  ERROR_INFO_FOLLOW = 'It was detected that there is a following label [$$] in the current file, but the parent nodes without this label.',
  ERROR_ORDER = 'JSDoc label order error, please adjust the order of [$$] labels.',
  ERROR_LABELNAME = 'The [$$] tag does not exist. Please use a valid JSDoc tag.',
  ERROR_LOST_LABEL = 'JSDoc tag validity verification failed. Please confirm if the [$$] tag is missing.',
  ERROR_USE = 'JSDoc label validity verification failed. The [$$] label is not allowed. Please check the label usage method.',
  ERROR_MORELABEL = 'JSDoc tag validity verification failed.There are [$$] redundant [$$]. Please check if the tag should be deleted.',
  ERROR_REPEATLABEL = 'The validity verification of the JSDoc tag failed. The [$$] tag is not allowed to be reused, please delete the extra tags.',
  ERROR_USE_INTERFACE = 'The validity verification of the JSDoc tag failed. The [interface] tag and [typedef] tag are not allowed to be used simultaneously. Please confirm the interface class.',
  ERROR_EVENT_NAME_STRING = 'The event name should be string.',
  ERROR_EVENT_NAME_NULL = 'The event name cannot be Null value.',
  ERROR_EVENT_NAME_SMALL_HUMP = 'The event name should be named by small hump. (Received ["$$"]).',
  ERROR_EVENT_CALLBACK_OPTIONAL = 'The callback parameter of off function should be optional.',
  ERROR_EVENT_CALLBACK_MISSING = 'The off functions of one single event should have at least one callback parameter, and the callback parameter should be the last parameter.',
  ERROR_EVENT_ON_AND_OFF_PAIR = 'The on and off event subscription methods do not appear in pair.',
  ERROR_EVENT_WITHOUT_PARAMETER = 'The event subscription methods should has at least one parameter.',
  ILLEGAL_USE_ANY = 'Illegal [$$] keyword used in the API.',
  ERROR_CHANGES_VERSION = 'Please check if the changed API version number is 10.',
  ERROR_WORD = 'Error words in [$$]: {$$}. please confirm whether it needs to be corrected to a common word.',
  ERROR_NAMING = 'Prohibited word in [$$]:{$$}.The word allowed is [$$].',
  ERROR_SCENARIO = 'Prohibited word in [$$]:{$$} in the [$$] file.',
  ERROR_UPPERCASE_NAME = 'This name [$$] should be named by all uppercase.',
  ERROR_LARGE_HUMP_NAME = 'This name [$$] should be named by large hump.',
  ERROR_SMALL_HUMP_NAME = 'This name [$$] should be named by small hump.',
  ERROR_SMALL_HUMP_NAME_FILE = 'This API file should be named by small hump.',
  ERROR_LARGE_HUMP_NAME_FILE = 'This API file should be named by large hump.',
  ERROR_ANONYMOUS_FUNCTION = 'Anonymous functions or anonymous object that are not allowed are used in this api.',
  ERROR_NO_JSDOC = 'Jsdoc needs to be added to the current API.',
  ERROR_NO_JSDOC_TAG = 'add  tags to the Jsdoc.',
  ERROR_HAS_CHINESE = 'Jsdoc has chinese.',
  ERROR_ERROR_CODE = 'The generic error code does not contain the current error code.',
  ERROR_ERROR_SYSTEMAPI_ATOMICSERVICE = 'The [systemapi] and [atomicservice] cannot exist in the same doc.',
  ERROR_CHANGES_JSDOC_LEVEL = 'Forbid changes: Cannot change from public API to system API.',
  ERROR_CHANGES_JSDOC_PERMISSION_RANGE = 'Forbid changes: Cannot reduce or permission or increase and permission.',
  ERROR_CHANGES_JSDOC_PERMISSION_VALUE = 'Forbid changes: Cannot change permission value,cannot judge the range change.',
  ERROR_CHANGES_JSDOC_ERROR_CODE_ADD = 'Forbid changes: The number of error codes cannot be increased from 0 to multiple error codes.',
  ERROR_CHANGES_JSDOC_ERROR_CODE_VALUE = 'Forbid changes: Cannot change the error code value.',
  ERROR_CHANGES_JSDOC_CARD = 'Forbid changes: The card application cannot be changed from supported to not supported.',
  ERROR_CHANGES_JSDOC_CROSS_PLATFORM = 'Forbid changes: Crossplatform cannot be changed from supported to not supported.',
  ERROR_CHANGES_JSDOC_API_DELETE = 'Forbid changes: API cannot be deleted.',
  ERROR_CHANGES_JSDOC_FA_TO_STAGE = 'Forbid changes: Cannot change from FAModelOnly to StageModelOnly.',
  ERROR_CHANGES_JSDOC_STAGE_TO_FA = 'Forbid changes: Cannot change from StageModelOnly to FAModelOnly.',
  ERROR_CHANGES_JSDOC_NA_TO_STAGE = 'Forbid changes: Cannot change from nothing to StageModelOnly.',
  ERROR_CHANGES_JSDOC_NA_TO_FA = 'Forbid changes: Cannot change from nothing to FAModelOnly.',
  ERROR_CHANGES_JSDOC_ATOMICSERVICE_TO_NA = 'Forbid changes: Cannot change from atomicservice to NA.',
  ERROR_CHANGES_FUNCTION_RETURN_TYPE_ADD = 'Forbid changes: The function return value type cannot be extended.',
  ERROR_CHANGES_FUNCTION_RETURN_TYPE_REDUCE = 'Forbid changes: The function return value type cannot be reduced.',
  ERROR_CHANGES_FUNCTION_RETURN_TYPE_CHANGE = 'Forbid changes: Cannot change function return value type.',
  ERROR_CHANGES_FUNCTION_PARAM_POS_CHANGE = 'Forbid changes: Cannot change function param position.',
  ERROR_CHANGES_FUNCTION_PARAM_REQUIRED_ADD = 'Forbid changes: Cannot add function required param.',
  ERROR_CHANGES_FUNCTION_PARAM_REDUCE = 'Forbid changes: Cannot delete function param.',
  ERROR_CHANGES_FUNCTION_PARAM_TO_REQUIRED = 'Forbid changes: Cannot change form unrequired param to required param.',
  ERROR_CHANGES_FUNCTION_PARAM_TYPE = 'Forbid changes: Cannot change function param type.',
  ERROR_CHANGES_FUNCTION_PARAM_TYPE_REDUCE = 'Forbid changes: The function param type range is cannot be reduced.',
  ERROR_CHANGES_PROPERTY_READONLY_TO_REQUIRED = 'Forbid changes: Read-only properties cannot be changed from optional to required.',
  ERROR_CHANGES_PROPERTY_WRITABLE_TO_UNREQUIRED = 'Forbid changes: Writable properties cannot be changed from required to optional.',
  ERROR_CHANGES_PROPERTY_WRITABLE_TO_REQUIRED = 'Forbid changes: Writable properties cannot be changed from optional to required.',
  ERROR_CHANGES_PROPERTY_TYPE_CHANGE = 'Forbid changes: Cannot change property type.',
  ERROR_CHANGES_PROPERTY_READONLY_ADD = 'Forbid changes: Cannot Expand the range of readonly property types.',
  ERROR_CHANGES_PROPERTY_WRITABLE_ADD = 'Forbid changes: Cannot Expand the range of writable property types.',
  ERROR_CHANGES_PROPERTY_WRITABLE_REDUCE = 'Forbid changes: Cannot reduce the range of writable property types.',
  ERROR_CHANGES_DELETE_DECORATOR = 'Forbid changes: Decorator cannot be deleted.',
  ERROR_CHANGES_CONSTANT_VALUE = 'Forbid changes: Cannot change constant value.',
  ERROR_CHANGES_TYPE_ALIAS_VALUE = 'Forbid changes: Cannot change custom type value.',
  ERROR_CHANGES_TYPE_ALIAS_ADD = 'Forbid changes: Cannot expand the range of custom type.',
  ERROR_CHANGES_TYPE_ALIAS_REDUCE = 'Forbid changes: Cannot reduce the range of custom type.',
  ERROR_CHANGES_ENUM_MEMBER_VALUE = 'Forbid changes: Cannot change Enumeration assignment.',
  ERROR_CHANGES_JSDOC_CHANGE = 'Forbid changes: Historical JSDoc cannot be changed.',
  ERROR_CHANGES_JSDOC_NUMBER = 'Forbid changes: API changes must add a new section of JSDoc.',
  ERROR_CHANGES_SYSCAP_NA_TO_HAVE = 'Forbid changes: Cannot change from NA to syscap.',
  ERROR_CHANGES_SYSCAP_HAVE_TO_NA = 'Forbid changes: Cannot change from syscap to NA.',
  ERROR_CHANGES_SYSCAP_A_TO_B = 'Forbid changes: Cannot change syscap value.',
  ERROR_CHANGES_ADD_PROPERTY = 'Forbid changes: Cannot add new property to interface API.',
}

export const incompatibleApiDiffTypes: Map<ApiDiffType, ErrorMessage> = new Map(
  [
    [ApiDiffType.HISTORICAL_JSDOC_CHANGE, ErrorMessage.ERROR_CHANGES_JSDOC_CHANGE],
    [ApiDiffType.HISTORICAL_API_CHANGE, ErrorMessage.ERROR_CHANGES_JSDOC_NUMBER],
    // 1.访问级别变更
    [ApiDiffType.PUBLIC_TO_SYSTEM, ErrorMessage.ERROR_CHANGES_JSDOC_LEVEL],
    // 2.权限变更
    [ApiDiffType.PERMISSION_NA_TO_HAVE, ErrorMessage.ERROR_CHANGES_JSDOC_PERMISSION_VALUE],
    [ApiDiffType.PERMISSION_RANGE_SMALLER, ErrorMessage.ERROR_CHANGES_JSDOC_PERMISSION_RANGE],
    [ApiDiffType.PERMISSION_RANGE_CHANGE, ErrorMessage.ERROR_CHANGES_JSDOC_PERMISSION_VALUE],
    // 3.错误码变更
    [ApiDiffType.ERROR_CODE_NA_TO_HAVE, ErrorMessage.ERROR_CHANGES_JSDOC_ERROR_CODE_ADD],
    [ApiDiffType.ERROR_CODE_CHANGE, ErrorMessage.ERROR_CHANGES_JSDOC_ERROR_CODE_VALUE],
    // 4.是否支持卡片应用
    [ApiDiffType.CARD_TO_NA, ErrorMessage.ERROR_CHANGES_JSDOC_CARD],
    // 5.是否支持跨平台
    [ApiDiffType.CROSS_PLATFORM_TO_NA, ErrorMessage.ERROR_CHANGES_JSDOC_CROSS_PLATFORM],
    // 7.api删除
    [ApiDiffType.REDUCE, ErrorMessage.ERROR_CHANGES_JSDOC_API_DELETE],
    // 8.模型使用限制变更
    [ApiDiffType.FA_TO_STAGE, ErrorMessage.ERROR_CHANGES_JSDOC_FA_TO_STAGE],
    [ApiDiffType.STAGE_TO_FA, ErrorMessage.ERROR_CHANGES_JSDOC_STAGE_TO_FA],
    [ApiDiffType.NA_TO_STAGE, ErrorMessage.ERROR_CHANGES_JSDOC_NA_TO_STAGE],
    [ApiDiffType.NA_TO_FA, ErrorMessage.ERROR_CHANGES_JSDOC_NA_TO_FA],
    // 10.函数变更
    [ApiDiffType.FUNCTION_RETURN_TYPE_ADD, ErrorMessage.ERROR_CHANGES_FUNCTION_RETURN_TYPE_ADD],
    [ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE, ErrorMessage.ERROR_CHANGES_FUNCTION_RETURN_TYPE_REDUCE],
    [ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE, ErrorMessage.ERROR_CHANGES_FUNCTION_RETURN_TYPE_CHANGE],
    [ApiDiffType.FUNCTION_PARAM_POS_CHANGE, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_POS_CHANGE],
    [ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_REQUIRED_ADD],
    [ApiDiffType.FUNCTION_PARAM_REDUCE, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_REDUCE],
    [ApiDiffType.FUNCTION_PARAM_TO_REQUIRED, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_TO_REQUIRED],
    [ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_TYPE],
    [ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE, ErrorMessage.ERROR_CHANGES_FUNCTION_PARAM_TYPE_REDUCE],
    // 12.属性变更
    [ApiDiffType.PROPERTY_READONLY_TO_REQUIRED, ErrorMessage.ERROR_CHANGES_PROPERTY_READONLY_TO_REQUIRED],
    [ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED, ErrorMessage.ERROR_CHANGES_PROPERTY_WRITABLE_TO_UNREQUIRED],
    [ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED, ErrorMessage.ERROR_CHANGES_PROPERTY_WRITABLE_TO_REQUIRED],
    [ApiDiffType.PROPERTY_TYPE_CHANGE, ErrorMessage.ERROR_CHANGES_PROPERTY_TYPE_CHANGE],
    [ApiDiffType.PROPERTY_READONLY_ADD, ErrorMessage.ERROR_CHANGES_PROPERTY_READONLY_ADD],
    [ApiDiffType.PROPERTY_WRITABLE_ADD, ErrorMessage.ERROR_CHANGES_PROPERTY_WRITABLE_ADD],
    [ApiDiffType.PROPERTY_WRITABLE_REDUCE, ErrorMessage.ERROR_CHANGES_PROPERTY_WRITABLE_REDUCE],
    [ApiDiffType.DELETE_DECORATOR, ErrorMessage.ERROR_CHANGES_DELETE_DECORATOR],
    // 13.常量变更
    [ApiDiffType.CONSTANT_VALUE_CHANGE, ErrorMessage.ERROR_CHANGES_CONSTANT_VALUE],
    // 14.自定义类型变更
    [ApiDiffType.TYPE_ALIAS_CHANGE, ErrorMessage.ERROR_CHANGES_TYPE_ALIAS_VALUE],
    [ApiDiffType.TYPE_ALIAS_ADD, ErrorMessage.ERROR_CHANGES_TYPE_ALIAS_ADD],
    [ApiDiffType.TYPE_ALIAS_REDUCE, ErrorMessage.ERROR_CHANGES_TYPE_ALIAS_REDUCE],
    // 15.枚举类型变更
    [ApiDiffType.ENUM_MEMBER_VALUE_CHANGE, ErrorMessage.ERROR_CHANGES_ENUM_MEMBER_VALUE],
    // 16.是否拥有元服务能力
    [ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA, ErrorMessage.ERROR_CHANGES_JSDOC_ATOMICSERVICE_TO_NA],
    // 17.syscap变更
    [ApiDiffType.SYSCAP_NA_TO_HAVE, ErrorMessage.ERROR_CHANGES_SYSCAP_NA_TO_HAVE],
    [ApiDiffType.SYSCAP_HAVE_TO_NA, ErrorMessage.ERROR_CHANGES_SYSCAP_HAVE_TO_NA],
    [ApiDiffType.SYSCAP_A_TO_B, ErrorMessage.ERROR_CHANGES_SYSCAP_A_TO_B],
    // 18.interface不允许新增属性
    [ApiDiffType.ADD, ErrorMessage.ERROR_CHANGES_ADD_PROPERTY]
  ]
);

/**
 * online error message format
 */
export class ApiResultSimpleInfo {
  id: number = -1;
  level: number = -1;
  filePath: string = '';
  location: string = '';
  message: string = '';
  type: string = '';
  apiText: string = '';
  apiName: string = '';
  apiType: string = '';
  hierarchicalRelations: string = '';
  parentModuleName: string | undefined = '';

  setID(id: number): ApiResultSimpleInfo {
    this.id = id;
    return this;
  }

  getID(): number {
    return this.id;
  }

  setLevel(level: number): ApiResultSimpleInfo {
    this.level = level;
    return this;
  }

  getLevel(): number {
    return this.level;
  }

  setLocation(location: string): ApiResultSimpleInfo {
    this.location = location;
    return this;
  }

  getLocation(): string {
    return this.location;
  }

  setFilePath(fileFilePath: string): ApiResultSimpleInfo {
    this.filePath = fileFilePath;
    return this;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setMessage(message: string): ApiResultSimpleInfo {
    this.message = message;
    return this;
  }

  getMessage(): string {
    return this.message;
  }

  setType(type: string): ApiResultSimpleInfo {
    this.type = type;
    return this;
  }

  getType(): string {
    return this.type;
  }

  setApiText(apiText: string): ApiResultSimpleInfo {
    this.apiText = apiText;
    return this;
  }

  getApiText(): string {
    return this.apiText;
  }


  setApiName(apiName: string): ApiResultSimpleInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }

  setApiType(apiType: string): ApiResultSimpleInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  setHierarchicalRelations(hierarchicalRelations: string): ApiResultSimpleInfo {
    this.hierarchicalRelations = hierarchicalRelations;
    return this;
  }

  getHierarchicalRelations(): string {
    return this.hierarchicalRelations;
  }

  setParentModuleName(parentModuleName: string | undefined): ApiResultSimpleInfo {
    this.parentModuleName = parentModuleName;
    return this;
  }

  getParentModuleName(): string | undefined {
    return this.parentModuleName;
  }
}

/**
 * local excel table error message format
 */
export class ApiResultInfo {
  errorType: string = '';
  location: string = '';
  apiType: string = '';
  message: string = '';
  version: number = -1;
  level: number = -1;
  apiName: string = '';
  apiFullText: string = '';
  baseName: string = '';
  hierarchicalRelations: string = '';
  parentModuleName: string | undefined = '';
  defectType: string = '';

  setErrorType(errorType: string): ApiResultInfo {
    this.errorType = errorType;
    return this;
  }

  getErrorType(): string {
    return this.errorType;
  }

  setLocation(location: string): ApiResultInfo {
    this.location = location;
    return this;
  }

  getLocation(): string {
    return this.location;
  }
  setApiType(apiType: string): ApiResultInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  setMessage(message: string): ApiResultInfo {
    this.message = message;
    return this;
  }

  getMessage(): string {
    return this.message;
  }

  setVersion(version: number): ApiResultInfo {
    this.version = version;
    return this;
  }

  getVersion(): number {
    return this.version;
  }

  setLevel(level: number): ApiResultInfo {
    this.level = level;
    return this;
  }

  getLevel(): number {
    return this.level;
  }

  setApiName(apiName: string): ApiResultInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }

  setApiFullText(apiFullText: string): ApiResultInfo {
    this.apiFullText = apiFullText;
    return this;
  }

  getApiFullText(): string {
    return this.apiFullText;
  }
  setBaseName(baseName: string): ApiResultInfo {
    this.baseName = baseName;
    return this;
  }

  getBaseName(): string {
    return this.baseName;
  }

  setHierarchicalRelations(hierarchicalRelations: string): ApiResultInfo {
    this.hierarchicalRelations = hierarchicalRelations;
    return this;
  }

  getHierarchicalRelations(): string {
    return this.hierarchicalRelations;
  }

  setParentModuleName(parentModuleName: string | undefined): ApiResultInfo {
    this.parentModuleName = parentModuleName;
    return this;
  }

  getParentModuleName(): string | undefined {
    return this.parentModuleName;
  }

  setDefectType(defectType: string): ApiResultInfo {
    this.defectType = defectType;
    return this;
  }

  getDefectType(): string {
    return this.defectType;
  }
}

/**
 * error message format
 */
export interface ErrorTagFormat {
  state: boolean;
  errorInfo: string;
}

/**
 * permission message format
 */
export interface PermissionData {
  name: string;
  grantMode: string;
  since: number;
  deprecated: string;
  availableLevel: string;
  provisionEnable: boolean;
  distributedSceneEnable: boolean;
  label: string;
  description: string;
}

/**
 * naming dictionary format
 */
export interface NameDictionaryType {
  badWord: string;
  suggestion: string;
  ignore: string[];
}

/**
 * naming dictionary format for file
 */
export interface NameScenarioType {
  word: string;
  files: string[];
}

/**
 * error message format
 */
export class ApiResultMessage {
  analyzerName: string = 'apiengine';
  buggyFilePath: string = '';
  codeContextStaerLine: string = '';
  defectLevel: number = -1;
  defectType: string = '';
  description: string = '';
  language: string = 'typescript';
  mainBuggyCode: string = '';
  mainBuggyLine: string = '';
  extendInfo: ApiBaseInfo = new ApiBaseInfo();

  setLocation(codeContextStaerLine: string): ApiResultMessage {
    this.codeContextStaerLine = codeContextStaerLine;
    return this;
  }

  getLocation(): string {
    return this.codeContextStaerLine;
  }

  setLevel(defectLevel: number): ApiResultMessage {
    this.defectLevel = defectLevel;
    return this;
  }

  getLevel(): number {
    return this.defectLevel;
  }

  setType(defectType: string): ApiResultMessage {
    this.defectType = defectType;
    return this;
  }

  getType(): string {
    return this.defectType;
  }

  setFilePath(fileFilePath: string): ApiResultMessage {
    this.buggyFilePath = fileFilePath;
    return this;
  }

  getFilePath(): string {
    return this.buggyFilePath;
  }

  setMessage(description: string): ApiResultMessage {
    this.description = description;
    return this;
  }

  getMessage(): string {
    return this.description;
  }
  setMainBuggyCode(mainBuggyCode: string): ApiResultMessage {
    this.mainBuggyCode = mainBuggyCode;
    return this;
  }

  getMainBuggyCode(): string {
    return this.mainBuggyCode;
  }

  setMainBuggyLine(mainBuggyLine: string): ApiResultMessage {
    this.mainBuggyLine = mainBuggyLine;
    return this;
  }

  getMainBuggyLine(): string {
    return this.mainBuggyLine;
  }

  setExtendInfo(extendInfo: ApiBaseInfo): ApiResultMessage {
    this.extendInfo = extendInfo;
    return this;
  }

  getExtendInfo(): ApiBaseInfo {
    return this.extendInfo;
  }
}

/**
 * error message format
 */
export class ApiCheckInfo {
  errorID: number = -1;
  errorLevel: number = -1;
  filePath: string = '';
  apiPostion: ts.LineAndCharacter = { line: -1, character: -1 };
  errorType: string = '';
  logType: string = '';
  sinceNumber: number = -1;
  apiName: string = '';
  apiType: string = '';
  apiText: string = '';
  errorInfo: string = '';
  hierarchicalRelations: string = '';
  parentModuleName: string | undefined = '';

  setErrorID(errorID: number): ApiCheckInfo {
    this.errorID = errorID;
    return this;
  }

  getErrorID(): number {
    return this.errorID;
  }

  setErrorLevel(errorLevel: number): ApiCheckInfo {
    this.errorLevel = errorLevel;
    return this;
  }

  getErrorLevel(): number {
    return this.errorLevel;
  }

  setFilePath(filePath: string): ApiCheckInfo {
    this.filePath = filePath;
    return this;
  }

  getFilePath(): string {
    return this.filePath;
  }

  setApiPostion(apiPostion: ts.LineAndCharacter): ApiCheckInfo {
    this.apiPostion = apiPostion;
    return this;
  }

  getApiPostion(): ts.LineAndCharacter {
    return this.apiPostion;
  }

  setErrorType(errorType: string): ApiCheckInfo {
    this.errorType = errorType;
    return this;
  }

  getErrorType(): string {
    return this.errorType;
  }

  setLogType(logType: string): ApiCheckInfo {
    this.logType = logType;
    return this;
  }

  getLogType(): string {
    return this.logType;
  }

  setSinceNumber(sinceNumber: number): ApiCheckInfo {
    this.sinceNumber = sinceNumber;
    return this;
  }

  getSinceNumber(): number {
    return this.sinceNumber;
  }

  setApiName(apiName: string): ApiCheckInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }

  setApiType(apiType: string): ApiCheckInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  setApiText(apiText: string): ApiCheckInfo {
    this.apiText = apiText;
    return this;
  }

  getApiText(): string {
    return this.apiText;
  }

  setErrorInfo(errorInfo: string): ApiCheckInfo {
    this.errorInfo = errorInfo;
    return this;
  }

  getErrorInfo(): string {
    return this.errorInfo;
  }

  setHierarchicalRelations(hierarchicalRelations: string): ApiCheckInfo {
    this.hierarchicalRelations = hierarchicalRelations;
    return this;
  }

  getHierarchicalRelations(): string {
    return this.hierarchicalRelations;
  }

  setParentModuleName(parentModuleName: string | undefined): ApiCheckInfo {
    this.parentModuleName = parentModuleName;
    return this;
  }

  getParentModuleName(): string | undefined {
    return this.parentModuleName;
  }
}

export class ApiBaseInfo {
  apiName: string = '';
  apiType: string = '';
  hierarchicalRelations: string = '';
  parentModuleName: string | undefined = '';

  setApiName(apiName: string): ApiBaseInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }
  setApiType(apiType: string): ApiBaseInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }
  setHierarchicalRelations(hierarchicalRelations: string): ApiBaseInfo {
    this.hierarchicalRelations = hierarchicalRelations;
    return this;
  }

  getHierarchicalRelations(): string {
    return this.hierarchicalRelations;
  }
  setParentModuleName(parentModuleName: string | undefined): ApiBaseInfo {
    this.parentModuleName = parentModuleName;
    return this;
  }

  getParentModuleName(): string | undefined {
    return this.parentModuleName;
  }

}

export class ErrorBaseInfo {
  errorID: number = -1;
  errorLevel: number = -1;
  errorType: string = '';
  logType: string = '';
  errorInfo: string = '';

  setErrorID(errorID: number): ErrorBaseInfo {
    this.errorID = errorID;
    return this;
  }

  getErrorID(): number {
    return this.errorID;
  }

  setErrorLevel(errorLevel: number): ErrorBaseInfo {
    this.errorLevel = errorLevel;
    return this;
  }

  getErrorLevel(): number {
    return this.errorLevel;
  }


  setErrorType(errorType: string): ErrorBaseInfo {
    this.errorType = errorType;
    return this;
  }

  getErrorType(): string {
    return this.errorType;
  }

  setLogType(logType: string): ErrorBaseInfo {
    this.logType = logType;
    return this;
  }

  getLogType(): string {
    return this.logType;
  }

  setErrorInfo(errorInfo: string): ErrorBaseInfo {
    this.errorInfo = errorInfo;
    return this;
  }

  getErrorInfo(): string {
    return this.errorInfo;
  }
}

/**
 * check工具入口传参
 *
 * @interface checkEntryType
 */
export interface checkEntryType {
  /**
   * 文件路径集合
   *
   * @type {string[]}
   */
  filePathArr: string[];

  /**
   * 规则集合，全部规则为第一个字符串为all
   *
   * @type {string[]}
   */
  fileRuleArr: string[];

  /**
   * 输出路径
   *
   * @type {string}
   */
  output: string;

  /**
   * check中判断diff数据时的路径
   * 线上为prid，通过服务器获取差异文件
   * 本地为diff文件，需要包含old和new两个文件
   *
   * @type {string}
   */
  prId: string;

  /**
   * 是否输出excel
   *
   * @type {string}
   * @memberof checkEntry
   */
  isOutExcel: string;

  /**
   * 是否为增量检查
   *
   * @default true
   * @type {boolean}
   * @memberof checkEntryType
   */
  isIncrement: boolean;
}