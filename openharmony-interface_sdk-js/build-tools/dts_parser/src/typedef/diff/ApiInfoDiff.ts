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

import ts from 'typescript';
import { ApiInfo, MethodInfo, ApiType } from '../parser/ApiInfoDefination';
import { Comment } from '../parser/Comment';
import { NumberConstant } from '../../utils/Constant';
export class BasicDiffInfo {
  private static EMPTY = '';
  //apiType
  apiType: string = BasicDiffInfo.EMPTY;
  statusCode: ApiStatusCode = ApiStatusCode.DEFAULT;
  // parentModuleName: string = 'global';
  //旧数据
  oldApiDefinedText: string = BasicDiffInfo.EMPTY;
  //新数据
  newApiDefinedText: string = BasicDiffInfo.EMPTY;
  //旧apiName
  oldApiName: string = BasicDiffInfo.EMPTY;
  //新apiName
  newApiName: string = BasicDiffInfo.EMPTY;
  //旧dts文件名
  oldDtsName: string = BasicDiffInfo.EMPTY;
  //新dts文件名
  newDtsName: string = BasicDiffInfo.EMPTY;
  //diff节点类型
  diffType: ApiDiffType = ApiDiffType.DEFAULT;
  //diff节点类型描述
  diffMessage: string = '';
  // 获取json的url
  changeLogUrl: string = '';
  // json中的数据
  changeLogs: string[] = [];
  //是否兼容
  isCompatible: boolean = true;
  //层次关系
  oldHierarchicalRelations: string[] = [];
  //层次关系
  newHierarchicalRelations: string[] = [];
  // api所在的位置信息
  oldPos: ts.LineAndCharacter = { line: -1, character: -1 };
  // api所在的位置信息
  newPos: ts.LineAndCharacter = { line: -1, character: -1 };
  oldDescription: string = '';
  newDescription: string = '';
  //syscap中用于区分子系统的字段
  oldSyscapField: string = '';
  newSyscapField: string = '';
  //kit信息
  oldKitInfo: string = '';
  newKitInfo: string = '';
  //是否为系统API
  isSystemapi: boolean = false;
  //是否为同名函数的变更
  isSameNameFunction: boolean = false;

  setApiType(apiType: string): BasicDiffInfo {
    if (apiType) {
      this.apiType = apiType;
    } else {
      this.apiType = BasicDiffInfo.EMPTY;
    }
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  getStatusCode(): ApiStatusCode {
    return this.statusCode;
  }

  setStatusCode(statusCode: ApiStatusCode): BasicDiffInfo {
    this.statusCode = statusCode;
    return this;
  }

  setOldApiDefinedText(oldApiDefinedText: string): BasicDiffInfo {
    this.oldApiDefinedText = oldApiDefinedText;
    return this;
  }

  getOldApiDefinedText(): string {
    return this.oldApiDefinedText;
  }

  setNewApiDefinedText(newApiDefinedText: string): BasicDiffInfo {
    this.newApiDefinedText = newApiDefinedText;
    return this;
  }

  getNewApiDefinedText(): string {
    return this.newApiDefinedText;
  }

  setOldApiName(oldApiName: string): BasicDiffInfo {
    this.oldApiName = oldApiName;
    return this;
  }

  getOldApiName(): string {
    return this.oldApiName;
  }

  setNewApiName(newApiName: string): BasicDiffInfo {
    this.newApiName = newApiName;
    return this;
  }

  getNewApiName(): string {
    return this.newApiName;
  }

  setOldDtsName(oldDtsName: string): BasicDiffInfo {
    this.oldDtsName = oldDtsName;
    return this;
  }

  getOldDtsName(): string {
    return this.oldDtsName;
  }

  setNewDtsName(newDtsName: string): BasicDiffInfo {
    this.newDtsName = newDtsName;
    return this;
  }

  getNewDtsName(): string {
    return this.newDtsName;
  }

  setDiffType(diffType: ApiDiffType): BasicDiffInfo {
    this.diffType = diffType;
    return this;
  }

  getDiffType(): ApiDiffType {
    return this.diffType;
  }

  setDiffMessage(diffMessage: string): BasicDiffInfo {
    this.diffMessage = diffMessage;
    return this;
  }

  getDiffMessage(): string {
    return this.diffMessage;
  }

  setChangeLogUrl(changeLogUrl: string): BasicDiffInfo {
    this.changeLogUrl = changeLogUrl;
    return this;
  }

  getChangeLogUrl(): string {
    return this.changeLogUrl;
  }

  addChangeLogs(changeLogs: string): BasicDiffInfo {
    this.changeLogs.push(changeLogs);
    return this;
  }

  getChangeLogs(): string[] {
    return this.changeLogs;
  }

  setIsCompatible(isCompatible: boolean): BasicDiffInfo {
    this.isCompatible = isCompatible;
    return this;
  }

  getIsCompatible(): boolean {
    return this.isCompatible;
  }

  setOldHierarchicalRelations(oldHierarchicalRelations: string[]): BasicDiffInfo {
    this.oldHierarchicalRelations = oldHierarchicalRelations;
    return this;
  }

  getOldHierarchicalRelations(): string[] {
    return this.oldHierarchicalRelations;
  }

  setNewHierarchicalRelations(newHierarchicalRelations: string[]): BasicDiffInfo {
    this.newHierarchicalRelations = newHierarchicalRelations;
    return this;
  }

  getNewHierarchicalRelations(): string[] {
    return this.newHierarchicalRelations;
  }

  setOldPos(oldPos: ts.LineAndCharacter): BasicDiffInfo {
    this.oldPos = oldPos;
    return this;
  }

  getOldPos(): ts.LineAndCharacter {
    return this.oldPos;
  }

  setNewPos(newPos: ts.LineAndCharacter): BasicDiffInfo {
    this.newPos = newPos;
    return this;
  }

  getNewPos(): ts.LineAndCharacter {
    return this.newPos;
  }

  getOldDescription(): string {
    return this.oldDescription;
  }

  setOldDescription(oldDescription: string): BasicDiffInfo {
    this.oldDescription = oldDescription;
    return this;
  }

  getNewDescription(): string {
    return this.newDescription;
  }

  setNewDescription(newDescription: string): BasicDiffInfo {
    this.newDescription = newDescription;
    return this;
  }

  getOldApiInfo(): string {
    return '';
  }

  getParentModuleName(hierarchicalRelations: string[]): string {
    let parentModuleName: string = 'global';
    if (hierarchicalRelations.length > NumberConstant.RELATION_LENGTH) {
      parentModuleName = hierarchicalRelations[hierarchicalRelations.length - NumberConstant.RELATION_LENGTH];
    }
    return parentModuleName;
  }

  setOldSyscapField(syscapField: string): BasicDiffInfo {
    this.oldSyscapField = syscapField;
    return this;
  }

  getOldSyscapField(): string {
    return this.oldSyscapField;
  }

  setNewSyscapField(syscapField: string): BasicDiffInfo {
    this.newSyscapField = syscapField;
    return this;
  }

  getNewSyscapField(): string {
    return this.newSyscapField;
  }

  setOldKitInfo(kitInfo: string): BasicDiffInfo {
    this.oldKitInfo = kitInfo;
    return this;
  }

  getOldKitInfo(): string {
    return this.oldKitInfo;
  }

  setNewKitInfo(kitInfo: string): BasicDiffInfo {
    this.newKitInfo = kitInfo;
    return this;
  }

  getNewKitInfo(): string {
    return this.newKitInfo;
  }

  setIsSystemapi(isSystemapi: boolean | undefined): BasicDiffInfo {
    if (isSystemapi) {
      this.isSystemapi = isSystemapi;
    }
    return this;
  }

  getIsSystemapi(): boolean {
    return this.isSystemapi;
  }

  setIsSameNameFunction(isSameNameFunction: boolean): BasicDiffInfo {
    this.isSameNameFunction = isSameNameFunction;
    return this;
  }

  getIsSameNameFunction(): boolean {
    return this.isSameNameFunction;
  }
}

export class DiffTypeInfo {
  private diffType: ApiDiffType = ApiDiffType.DEFAULT; //diff节点类型
  private statusCode: ApiStatusCode = ApiStatusCode.DEFAULT;
  private oldMessage: string = ''; //旧版本信息
  private newMessage: string = ''; //新版本信息

  constructor(statusCode?: ApiStatusCode, diffType?: ApiDiffType, oldMessage?: string, newMessage?: string) {
    if (statusCode !== undefined) {
      this.setStatusCode(statusCode);
    }
    if (diffType) {
      this.setDiffType(diffType);
    }
    if (oldMessage) {
      this.setOldMessage(oldMessage);
    }
    if (newMessage) {
      this.setNewMessage(newMessage);
    }
  }

  getStatusCode(): ApiStatusCode {
    return this.statusCode;
  }

  setStatusCode(statusCode: ApiStatusCode): DiffTypeInfo {
    this.statusCode = statusCode;
    return this;
  }

  getDiffType(): ApiDiffType {
    return this.diffType;
  }

  setDiffType(diffType: ApiDiffType): DiffTypeInfo {
    this.diffType = diffType;
    return this;
  }

  getOldMessage(): string {
    return this.oldMessage;
  }
  setOldMessage(oldMessage: string): DiffTypeInfo {
    this.oldMessage = oldMessage;
    return this;
  }

  getNewMessage(): string {
    return this.newMessage;
  }
  setNewMessage(newMessage: string): DiffTypeInfo {
    this.newMessage = newMessage;
    return this;
  }
}

export class DiffNumberInfo {
  apiName: string = '';
  kitName: string = '';
  subsystem: string = '';
  apiType: string = '';
  allDiffType: string[] = [];
  allChangeType: string[] = [];
  compatibleInfo: object = {};
  oldDiffMessage: string[] = [];
  newDiffMessage: string[] = [];
  allCompatible: boolean[] = [];
  diffTypeNumber: number = 0;
  isApi: boolean = true;
  apiRelation: string = '';
  isSystemapi: boolean = false;
  isSameNameFunction: boolean = false;

  setApiName(apiName: string): DiffNumberInfo {
    this.apiName = apiName;
    return this;
  }

  getApiName(): string {
    return this.apiName;
  }

  setKitName(kitName: string | undefined): DiffNumberInfo {
    if (!kitName) {
      return this;
    }
    this.kitName = kitName;
    return this;
  }

  getKitName(): string {
    return this.kitName;
  }

  setSubsystem(subsystem: string | undefined): DiffNumberInfo {
    if (!subsystem) {
      return this;
    }
    this.subsystem = subsystem;
    return this;
  }

  getSubsystem(): string {
    return this.subsystem;
  }

  setApiType(apiType: string): DiffNumberInfo {
    this.apiType = apiType;
    return this;
  }

  getApiType(): string {
    return this.apiType;
  }

  setAllDiffType(diffType: string): DiffNumberInfo {
    this.allDiffType.push(diffType);
    return this;
  }

  getAllDiffType(): string[] {
    return this.allDiffType;
  }

  setOldDiffMessage(oldDiffMessage: string): DiffNumberInfo {
    if (oldDiffMessage === '-1' || oldDiffMessage === '' ) {
      this.oldDiffMessage.push('NA');
      return this;
    }
    this.oldDiffMessage.push(oldDiffMessage);
    return this;
  }

  getOldDiffMessage(): string[] {
    return this.oldDiffMessage;
  }

  setNewDiffMessage(newDiffMessage: string): DiffNumberInfo {
    if (newDiffMessage === '-1' || newDiffMessage === '') {
      this.newDiffMessage.push('NA');
      return this;
    }
    this.newDiffMessage.push(newDiffMessage);
    return this;
  }

  getNewDiffMessage(): string[] {
    return this.newDiffMessage;
  }

  setAllChangeType(changeType: string | undefined): DiffNumberInfo {
    if (!changeType) {
      return this;
    }
    this.allChangeType.push(changeType);
    return this;
  }

  getAllChangeType(): string[] {
    return this.allChangeType;
  }

  setAllCompatible(isCompatible: boolean): DiffNumberInfo {
    this.allCompatible.push(isCompatible);
    return this;
  }

  getAllCompatible(): boolean[] {
    return this.allCompatible;
  }
  setDiffTypeNumber(diffTypeNumber: number): DiffNumberInfo {
    this.diffTypeNumber = diffTypeNumber;
    return this;
  }

  getDiffTypeNumber(): number {
    return this.diffTypeNumber;
  }

  setIsApi(isApi: boolean): DiffNumberInfo {
    this.isApi = isApi;
    return this;
  }

  getIsApi(): boolean {
    return this.isApi;
  }

  setApiRelation(apiRelation: string): DiffNumberInfo {
    this.apiRelation = apiRelation;
    return this;
  }

  getApiRelation(): string {
    return this.apiRelation;
  }

  setIsSystemapi(isSystemapi: boolean): DiffNumberInfo {
    this.isSystemapi = isSystemapi;
    return this;
  }

  getIsSystemapi(): boolean {
    return this.isSystemapi;
  }

  setIsSameNameFunction(isSameNameFunction: boolean): DiffNumberInfo {
    this.isSameNameFunction = isSameNameFunction;
    return this;
  }

  getIsSameNameFunction(): boolean {
    return this.isSameNameFunction;
  }
}

export interface JsDocDiffProcessor {
  (oldJsDocInfo: Comment.JsDocInfo | undefined, newJsDocInfo: Comment.JsDocInfo | undefined, isAllDeprecated?: boolean,
    isAllSheet?: boolean): DiffTypeInfo | undefined;
}

export interface ApiSceneDiffProcessor {
  (oldApiInfo: ApiInfo, newApiInfo: ApiInfo): DiffTypeInfo | undefined;
}
export interface ApiScenesDiffProcessor {
  (oldApiInfo: MethodInfo, newApiInfo: MethodInfo): DiffTypeInfo[] | DiffTypeInfo | undefined;
}

export interface ApiNodeDiffProcessor {
  (oldApiInfo: ApiInfo, newApiInfo: ApiInfo, diffInfos: BasicDiffInfo[]): void;
}

export interface TagInfoDiffProcessor {
  (oldJsDocInfo: Comment.JsDocInfo | undefined, newJsDocInfo: Comment.JsDocInfo | undefined): boolean;
}

export enum ApiStatusCode {
  DEFAULT = -1,
  DELETE = 0,
  DELETE_DTS = 1,
  DELETE_CLASS = 2,
  NEW_API = 3,
  VERSION_CHNAGES = 4,
  DEPRECATED_CHNAGES = 5,
  NEW_ERRORCODE = 6,
  ERRORCODE_CHANGES = 7,
  SYSCAP_CHANGES = 8,
  SYSTEM_API_CHNAGES = 9,
  PERMISSION_DELETE = 10,
  PERMISSION_NEW = 11,
  PERMISSION_CHANGES = 12,
  MODEL_CHNAGES = 13,
  TYPE_CHNAGES = 14,
  CLASS_CHANGES = 15,
  FUNCTION_CHANGES = 16,
  CHANGELOG = 17,
  DTS_CHANGED = 18,
  FORM_CHANGED = 19,
  CROSSPLATFORM_CHANGED = 20,
  NEW_DTS = 21,
  NEW_CLASS = 22,
  NEW_DECORATOR = 23,
  DELETE_DECORATOR = 24,
  KIT_CHANGE = 26,
  ATOMICSERVICE_CHANGE = 27,
  ERRORCODE_DELETE = 28,
}

export enum ApiDiffType {
  DEFAULT = 0,
  SYSTEM_TO_PUBLIC,
  PUBLIC_TO_SYSTEM,
  NA_TO_STAGE,
  NA_TO_FA,
  FA_TO_STAGE,
  STAGE_TO_FA,
  STAGE_TO_NA,
  FA_TO_NA,
  NA_TO_CARD,
  CARD_TO_NA,
  NA_TO_CROSS_PLATFORM,
  CROSS_PLATFORM_TO_NA,
  SYSCAP_NA_TO_HAVE,
  SYSCAP_HAVE_TO_NA,
  SYSCAP_A_TO_B,
  DEPRECATED_NA_TO_HAVE,
  DEPRECATED_HAVE_TO_NA,
  DEPRECATED_A_TO_B,
  DEPRECATED_NOT_All,
  ERROR_CODE_NA_TO_HAVE,
  ERROR_CODE_ADD,
  ERROR_CODE_REDUCE,
  ERROR_CODE_CHANGE,
  PERMISSION_NA_TO_HAVE,
  PERMISSION_HAVE_TO_NA,
  /** 增加or或减少and权限 权限范围变大 */
  PERMISSION_RANGE_BIGGER,
  /** 减少or或增加and权限 权限范围变小 */
  PERMISSION_RANGE_SMALLER,
  /** 同时存在权限范围变大和变小的情况 */
  PERMISSION_RANGE_CHANGE,
  /** type范围变大 */
  TYPE_RANGE_BIGGER,
  /** type范围减小 */
  TYPE_RANGE_SMALLER,
  /** type范围改变，既有变大情况也有变小情况 */
  TYPE_RANGE_CHANGE,
  API_NAME_CHANGE,
  FUNCTION_RETURN_TYPE_ADD,
  FUNCTION_RETURN_TYPE_REDUCE,
  FUNCTION_RETURN_TYPE_CHANGE,
  FUNCTION_PARAM_POS_CHANGE,
  /** 函数新增可选参数 */
  FUNCTION_PARAM_UNREQUIRED_ADD,
  /** 函数新增必选参数 */
  FUNCTION_PARAM_REQUIRED_ADD,
  FUNCTION_PARAM_REDUCE,
  /** 函数中的必选参数变为可选参数 */
  FUNCTION_PARAM_TO_UNREQUIRED,
  /** 函数中的可选参数变为必选参数 */
  FUNCTION_PARAM_TO_REQUIRED,
  FUNCTION_PARAM_NAME_CHANGE,
  FUNCTION_PARAM_TYPE_CHANGE,
  /**  函数的参数类型范围扩大 */
  FUNCTION_PARAM_TYPE_ADD,
  /**  函数的参数类型范围缩小 */
  FUNCTION_PARAM_TYPE_REDUCE,
  FUNCTION_PARAM_CHANGE,
  /** 同名函数变更类型 */
  FUNCTION_CHANGES,
  PROPERTY_READONLY_TO_UNREQUIRED,
  PROPERTY_READONLY_TO_REQUIRED,
  PROPERTY_WRITABLE_TO_UNREQUIRED,
  PROPERTY_WRITABLE_TO_REQUIRED,
  PROPERTY_TYPE_CHANGE,
  PROPERTY_READONLY_ADD,
  PROPERTY_READONLY_REDUCE,
  PROPERTY_WRITABLE_ADD,
  PROPERTY_WRITABLE_REDUCE,
  CONSTANT_VALUE_CHANGE,
  TYPE_ALIAS_CHANGE,
  TYPE_ALIAS_ADD,
  TYPE_ALIAS_REDUCE,
  TYPE_ALIAS_FUNCTION_RETURN_TYPE_ADD,
  TYPE_ALIAS_FUNCTION_RETURN_TYPE_REDUCE,
  TYPE_ALIAS_FUNCTION_RETURN_TYPE_CHANGE,
  TYPE_ALIAS_FUNCTION_PARAM_POS_CHAHGE,
  /** 自定义类型方法新增可选参数 */
  TYPE_ALIAS_FUNCTION_PARAM_UNREQUIRED_ADD,
  /** 自定义类型方法新增必选参数 */
  TYPE_ALIAS_FUNCTION_PARAM_REQUIRED_ADD,
  TYPE_ALIAS_FUNCTION_PARAM_REDUCE,
  TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE,
  /** 自定义类型方法中的必选参数变为可选参数 */
  TYPE_ALIAS_FUNCTION_PARAM_TO_UNREQUIRED,
  /** 自定义类型方法中的可选参数变为必选参数 */
  TYPE_ALIAS_FUNCTION_PARAM_TO_REQUIRED,
  /**  自定义类型方法的参数类型范围扩大 */
  TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD,
  /**  自定义类型方法的参数类型范围缩小 */
  TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE,
  TYPE_ALIAS_FUNCTION_PARAM_CHANGE,
  ENUM_MEMBER_VALUE_CHANGE,
  ADD,
  REDUCE,
  NEW_DECORATOR,
  DELETE_DECORATOR,
  SINCE_VERSION_NA_TO_HAVE,
  SINCE_VERSION_HAVE_TO_NA,
  SINCE_VERSION_A_TO_B,
  HISTORICAL_JSDOC_CHANGE,
  HISTORICAL_API_CHANGE,
  KIT_CHANGE,
  ATOMIC_SERVICE_NA_TO_HAVE,
  ATOMIC_SERVICE_HAVE_TO_NA,
  PROPERTY_TYPE_SIGN_CHANGE,
  KIT_HAVE_TO_NA,
  KIT_NA_TO_HAVE,
  NEW_SAME_NAME_FUNCTION,
  REDUCE_SAME_NAME_FUNCTION,
  /** 匿名对象整改导致的参数类型的兼容改变，*/
  PARAM_TYPE_CHANGE_COMPATIABLE,
  /** 匿名对象整改导致的参数类型的不兼容改变，*/
  PARAM_TYPE_CHANGE_IN_COMPATIABLE,
}

export const diffTypeMap: Map<ApiDiffType, string> = new Map([
  [ApiDiffType.SYSTEM_TO_PUBLIC, 'API访问级别变更'],
  [ApiDiffType.PUBLIC_TO_SYSTEM, 'API访问级别变更'],
  [ApiDiffType.NA_TO_STAGE, 'API模型切换'],
  [ApiDiffType.NA_TO_FA, 'API模型切换'],
  [ApiDiffType.FA_TO_STAGE, 'API模型切换'],
  [ApiDiffType.STAGE_TO_FA, 'API模型切换'],
  [ApiDiffType.STAGE_TO_NA, 'API模型切换'],
  [ApiDiffType.FA_TO_NA, 'API模型切换'],
  [ApiDiffType.NA_TO_CARD, 'API卡片权限变更'],
  [ApiDiffType.CARD_TO_NA, 'API卡片权限变更'],
  [ApiDiffType.NA_TO_CROSS_PLATFORM, 'API跨平台权限变更'],
  [ApiDiffType.CROSS_PLATFORM_TO_NA, 'API跨平台权限变更'],
  [ApiDiffType.SYSCAP_NA_TO_HAVE, 'syscap变更'],
  [ApiDiffType.SYSCAP_HAVE_TO_NA, 'syscap变更'],
  [ApiDiffType.SYSCAP_A_TO_B, 'syscap变更'],
  [ApiDiffType.DEPRECATED_NA_TO_HAVE, 'API废弃版本变更'],
  [ApiDiffType.DEPRECATED_HAVE_TO_NA, 'API废弃版本变更'],
  [ApiDiffType.DEPRECATED_NOT_All, 'API废弃版本变更'],
  [ApiDiffType.DEPRECATED_A_TO_B, 'API废弃版本变更'],
  [ApiDiffType.ERROR_CODE_NA_TO_HAVE, '错误码变更'],
  [ApiDiffType.ERROR_CODE_ADD, '错误码变更'],
  [ApiDiffType.ERROR_CODE_REDUCE, '错误码变更'],
  [ApiDiffType.ERROR_CODE_CHANGE, '错误码变更'],
  [ApiDiffType.PERMISSION_NA_TO_HAVE, '权限变更'],
  [ApiDiffType.PERMISSION_HAVE_TO_NA, '权限变更'],
  [ApiDiffType.PERMISSION_RANGE_BIGGER, '权限变更'],
  [ApiDiffType.PERMISSION_RANGE_SMALLER, '权限变更'],
  [ApiDiffType.PERMISSION_RANGE_CHANGE, '权限变更'],
  [ApiDiffType.TYPE_RANGE_BIGGER, '自定义类型变更'],
  [ApiDiffType.TYPE_RANGE_SMALLER, '自定义类型变更'],
  [ApiDiffType.TYPE_RANGE_CHANGE, '自定义类型变更'],
  [ApiDiffType.API_NAME_CHANGE, 'API名称变更'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_ADD, '函数变更'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE, '函数变更'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_POS_CHANGE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_UNREQUIRED_ADD, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_REDUCE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_TO_UNREQUIRED, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_TO_REQUIRED, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_NAME_CHANGE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_ADD, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE, '函数变更'],
  [ApiDiffType.FUNCTION_PARAM_CHANGE, '函数变更'],
  [ApiDiffType.FUNCTION_CHANGES, '函数变更'],
  [ApiDiffType.PROPERTY_READONLY_TO_UNREQUIRED, '属性变更'],
  [ApiDiffType.PROPERTY_READONLY_TO_REQUIRED, '属性变更'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED, '属性变更'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED, '属性变更'],
  [ApiDiffType.PROPERTY_TYPE_CHANGE, '属性变更'],
  [ApiDiffType.PROPERTY_READONLY_ADD, '属性变更'],
  [ApiDiffType.PROPERTY_READONLY_REDUCE, '属性变更'],
  [ApiDiffType.PROPERTY_WRITABLE_ADD, '属性变更'],
  [ApiDiffType.PROPERTY_WRITABLE_REDUCE, '属性变更'],
  [ApiDiffType.PROPERTY_TYPE_SIGN_CHANGE, '属性变更'],
  [ApiDiffType.CONSTANT_VALUE_CHANGE, '常量变更'],
  [ApiDiffType.TYPE_ALIAS_CHANGE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_ADD, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_REDUCE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_ADD, '函数变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_REDUCE, '函数变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_CHANGE, '函数变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_POS_CHAHGE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_UNREQUIRED_ADD, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REQUIRED_ADD, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REDUCE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_UNREQUIRED, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_REQUIRED, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE, '自定义类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_CHANGE, '自定义类型变更'],
  [ApiDiffType.ENUM_MEMBER_VALUE_CHANGE, '枚举赋值发生改变'],
  [ApiDiffType.ADD, '新增API'],
  [ApiDiffType.REDUCE, '删除API'],
  [ApiDiffType.DELETE_DECORATOR, '删除装饰器'],
  [ApiDiffType.NEW_DECORATOR, '新增装饰器'],
  [ApiDiffType.SINCE_VERSION_A_TO_B, '起始版本有变化'],
  [ApiDiffType.SINCE_VERSION_HAVE_TO_NA, '起始版本有变化'],
  [ApiDiffType.SINCE_VERSION_NA_TO_HAVE, '起始版本有变化'],
  [ApiDiffType.KIT_CHANGE, 'kit变更'],
  [ApiDiffType.KIT_HAVE_TO_NA, '删除kit'],
  [ApiDiffType.KIT_NA_TO_HAVE, '新增kit'],
  [ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA, 'API从支持元服务到不支持元服务'],
  [ApiDiffType.ATOMIC_SERVICE_NA_TO_HAVE, 'API从不支持元服务到支持元服务'],
  [ApiDiffType.NEW_SAME_NAME_FUNCTION, '新增同名函数'],
  [ApiDiffType.REDUCE_SAME_NAME_FUNCTION, '删除同名函数'],
  [ApiDiffType.PARAM_TYPE_CHANGE_COMPATIABLE, '函数变更'],
  [ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE, '函数变更'],
]);

export const diffMap: Map<ApiDiffType, string> = new Map([
  [ApiDiffType.SYSTEM_TO_PUBLIC, '从系统API变更为公开API'],
  [ApiDiffType.PUBLIC_TO_SYSTEM, '从公开API变更为系统API'],
  [ApiDiffType.NA_TO_STAGE, '从无模型使用限制到仅在Stage模型下使用'],
  [ApiDiffType.NA_TO_FA, '从无模型使用限制到仅在FA模型下使用'],
  [ApiDiffType.FA_TO_STAGE, '从仅在FA模型下使用到仅在Stage模型下使用'],
  [ApiDiffType.STAGE_TO_FA, '从仅在Stage模型下使用到仅在FA模型下使用'],
  [ApiDiffType.STAGE_TO_NA, '从仅在Stage模型下使用到无模型使用限制'],
  [ApiDiffType.FA_TO_NA, '从仅在FA模型下使用到无模型使用限制'],
  [ApiDiffType.NA_TO_CARD, '从不支持卡片到支持卡片'],
  [ApiDiffType.CARD_TO_NA, '从支持卡片到不支持卡片'],
  [ApiDiffType.NA_TO_CROSS_PLATFORM, '从不支持跨平台到支持跨平台'],
  [ApiDiffType.CROSS_PLATFORM_TO_NA, '从支持跨平台到不支持跨平台'],
  [ApiDiffType.SYSCAP_NA_TO_HAVE, '从没有syscap到有syscap'],
  [ApiDiffType.SYSCAP_HAVE_TO_NA, '从有syscap到没有syscap'],
  [ApiDiffType.SYSCAP_A_TO_B, 'syscap发生改变'],
  [ApiDiffType.DEPRECATED_NA_TO_HAVE, '接口变更为废弃'],
  [ApiDiffType.DEPRECATED_HAVE_TO_NA, '废弃接口变更为不废弃'],
  [ApiDiffType.DEPRECATED_NOT_All, '接口变更为废弃'],
  [ApiDiffType.DEPRECATED_A_TO_B, '接口废弃版本发生变化'],
  [ApiDiffType.ERROR_CODE_NA_TO_HAVE, '错误码从无到有'],
  [ApiDiffType.ERROR_CODE_ADD, '错误码增加'],
  [ApiDiffType.ERROR_CODE_REDUCE, '错误码减少'],
  [ApiDiffType.ERROR_CODE_CHANGE, '错误码的code值发生变化'],
  [ApiDiffType.PERMISSION_NA_TO_HAVE, '权限从无到有'],
  [ApiDiffType.PERMISSION_HAVE_TO_NA, '权限从有到无'],
  [ApiDiffType.PERMISSION_RANGE_BIGGER, '增加or或减少and权限'],
  [ApiDiffType.PERMISSION_RANGE_SMALLER, '减少or或增加and权限'],
  [ApiDiffType.PERMISSION_RANGE_CHANGE, '权限发生改变无法判断范围变化'],
  [ApiDiffType.TYPE_RANGE_BIGGER, '类型范围变大'],
  [ApiDiffType.TYPE_RANGE_SMALLER, '类型范围变小'],
  [ApiDiffType.TYPE_RANGE_CHANGE, '类型范围改变'],
  [ApiDiffType.API_NAME_CHANGE, 'API名称变更'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_ADD, '函数返回值类型扩大'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE, '函数返回值类型缩小'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE, '函数返回值类型改变'],
  [ApiDiffType.FUNCTION_PARAM_POS_CHANGE, '函数参数位置发生改变'],
  [ApiDiffType.FUNCTION_PARAM_UNREQUIRED_ADD, '函数新增可选参数'],
  [ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD, '函数新增必选参数'],
  [ApiDiffType.FUNCTION_PARAM_REDUCE, '函数删除参数'],
  [ApiDiffType.FUNCTION_PARAM_TO_UNREQUIRED, '函数中的必选参数变为可选参数'],
  [ApiDiffType.FUNCTION_PARAM_TO_REQUIRED, '函数中的可选参数变为必选参数'],
  [ApiDiffType.FUNCTION_PARAM_NAME_CHANGE, '函数中的参数名称发生改变'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE, '函数的参数类型变更'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_ADD, '函数的参数类型范围扩大'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE, '函数的参数类型范围缩小'],
  [ApiDiffType.FUNCTION_PARAM_CHANGE, '函数的参数变更'],
  [ApiDiffType.FUNCTION_CHANGES, '函数有变化'],
  [ApiDiffType.PROPERTY_READONLY_TO_UNREQUIRED, '只读属性由必选变为可选'],
  [ApiDiffType.PROPERTY_READONLY_TO_REQUIRED, '只读属性由可选变为必选'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED, '可写属性由必选变为可选'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED, '可写属性由可选变为必选'],
  [ApiDiffType.PROPERTY_TYPE_CHANGE, '属性类型发生改变'],
  [ApiDiffType.PROPERTY_TYPE_SIGN_CHANGE, '属性类型发生改变'],
  [ApiDiffType.PROPERTY_READONLY_ADD, '只读属性类型范围扩大'],
  [ApiDiffType.PROPERTY_READONLY_REDUCE, '只读属性类型范围缩小'],
  [ApiDiffType.PROPERTY_WRITABLE_ADD, '可写属性类型范围扩大'],
  [ApiDiffType.PROPERTY_WRITABLE_REDUCE, '可写属性类型范围缩小'],
  [ApiDiffType.CONSTANT_VALUE_CHANGE, '常量值发生改变'],
  [ApiDiffType.TYPE_ALIAS_CHANGE, '自定义类型值改变'],
  [ApiDiffType.TYPE_ALIAS_ADD, '自定义类型值范围扩大'],
  [ApiDiffType.TYPE_ALIAS_REDUCE, '自定义类型值范围缩小'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_ADD, '自定义方法类型返回值类型扩大'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_REDUCE, '自定义方法类型返回值类型缩小'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_CHANGE, '自定义方法类型返回值类型改变'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_POS_CHAHGE, '自定义方法类型参数位置发生改变'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_UNREQUIRED_ADD, '自定义方法类型新增可选参数'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REQUIRED_ADD, '自定义方法类型新增必选参数'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REDUCE, '自定义方法类型删除参数'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_UNREQUIRED, '自定义方法类型的必选参数变为可选参数'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_REQUIRED, '自定义方法类型的可选参数变为必选参数'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE, '自定义方法类型的参数类型变更'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD, '自定义方法类型的参数类型范围扩大'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE, '自定义方法类型的参数类型范围缩小'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_CHANGE, '自定义方法类型的参数变更'],
  [ApiDiffType.ENUM_MEMBER_VALUE_CHANGE, '枚举赋值发生改变'],
  [ApiDiffType.ADD, '新增API'],
  [ApiDiffType.REDUCE, '删除API'],
  [ApiDiffType.DELETE_DECORATOR, '删除装饰器'],
  [ApiDiffType.NEW_DECORATOR, '新增装饰器'],
  [ApiDiffType.SINCE_VERSION_A_TO_B, '起始版本号变更'],
  [ApiDiffType.SINCE_VERSION_HAVE_TO_NA, '起始版本号删除'],
  [ApiDiffType.SINCE_VERSION_NA_TO_HAVE, '起始版本号新增'],
  [ApiDiffType.HISTORICAL_JSDOC_CHANGE, '历史版本jsdoc变更'],
  [ApiDiffType.HISTORICAL_API_CHANGE, '历史版本API变更'],
  [ApiDiffType.KIT_CHANGE, 'kit变更'],
  [ApiDiffType.KIT_HAVE_TO_NA, 'kit信息从有到无'],
  [ApiDiffType.KIT_NA_TO_HAVE, 'kit信息从无到有'],
  [ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA, 'API从支持元服务到不支持元服务'],
  [ApiDiffType.ATOMIC_SERVICE_NA_TO_HAVE, 'API从不支持元服务到支持元服务'],
  [ApiDiffType.NEW_SAME_NAME_FUNCTION, '新增同名函数'],
  [ApiDiffType.REDUCE_SAME_NAME_FUNCTION, '删除同名函数'],
  [ApiDiffType.PARAM_TYPE_CHANGE_COMPATIABLE, '函数的参数类型变更'],
  [ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE, '函数的参数类型变更'],
]);

export const apiChangeMap: Map<ApiDiffType, string> = new Map([
  [ApiDiffType.SYSTEM_TO_PUBLIC, 'API修改（约束变化）'],
  [ApiDiffType.PUBLIC_TO_SYSTEM, 'API修改（约束变化）'],
  [ApiDiffType.NA_TO_STAGE, 'API修改（约束变化）'],
  [ApiDiffType.NA_TO_FA, 'API修改（约束变化）'],
  [ApiDiffType.FA_TO_STAGE, 'API修改（约束变化）'],
  [ApiDiffType.STAGE_TO_FA, 'API修改（约束变化）'],
  [ApiDiffType.STAGE_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.FA_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.NA_TO_CARD, 'API修改（约束变化）'],
  [ApiDiffType.CARD_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.NA_TO_CROSS_PLATFORM, 'API修改（约束变化）'],
  [ApiDiffType.CROSS_PLATFORM_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.SYSCAP_NA_TO_HAVE, 'API修改（约束变化）'],
  [ApiDiffType.SYSCAP_HAVE_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.SYSCAP_A_TO_B, 'API修改（约束变化）'],
  [ApiDiffType.DEPRECATED_NA_TO_HAVE, 'API废弃'],
  [ApiDiffType.DEPRECATED_HAVE_TO_NA, 'API废弃'],
  [ApiDiffType.DEPRECATED_NOT_All, 'API修改（约束变化）'],
  [ApiDiffType.DEPRECATED_A_TO_B, 'API废弃'],
  [ApiDiffType.ERROR_CODE_NA_TO_HAVE, 'API修改（约束变化）'],
  [ApiDiffType.ERROR_CODE_ADD, 'API修改（原型修改）'],
  [ApiDiffType.ERROR_CODE_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.ERROR_CODE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.PERMISSION_NA_TO_HAVE, 'API修改（约束变化）'],
  [ApiDiffType.PERMISSION_HAVE_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.PERMISSION_RANGE_BIGGER, 'API修改（约束变化）'],
  [ApiDiffType.PERMISSION_RANGE_SMALLER, 'API修改（约束变化）'],
  [ApiDiffType.PERMISSION_RANGE_CHANGE, 'API修改（约束变化）'],
  [ApiDiffType.TYPE_RANGE_BIGGER, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_RANGE_SMALLER, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_RANGE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.API_NAME_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_ADD, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_POS_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_UNREQUIRED_ADD, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_TO_UNREQUIRED, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_TO_REQUIRED, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_NAME_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_ADD, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_CHANGES, 'API修改（原型修改）'],
  [ApiDiffType.FUNCTION_PARAM_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.PROPERTY_READONLY_TO_UNREQUIRED, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_READONLY_TO_REQUIRED, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_TYPE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.PROPERTY_TYPE_SIGN_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.PROPERTY_READONLY_ADD, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_READONLY_REDUCE, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_WRITABLE_ADD, 'API修改（约束变化）'],
  [ApiDiffType.PROPERTY_WRITABLE_REDUCE, 'API修改（约束变化）'],
  [ApiDiffType.CONSTANT_VALUE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_ADD, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.ENUM_MEMBER_VALUE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.ADD, 'API新增'],
  [ApiDiffType.REDUCE, 'API删除'],
  [ApiDiffType.DELETE_DECORATOR, 'API修改（约束变化）'],
  [ApiDiffType.NEW_DECORATOR, 'API修改（约束变化）'],
  [ApiDiffType.SINCE_VERSION_A_TO_B, 'API修改（约束变化）'],
  [ApiDiffType.SINCE_VERSION_HAVE_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.SINCE_VERSION_NA_TO_HAVE, 'API修改（约束变化）'],
  [ApiDiffType.KIT_CHANGE, '非API变更'],
  [ApiDiffType.KIT_HAVE_TO_NA, '非API变更'],
  [ApiDiffType.KIT_NA_TO_HAVE, '非API变更'],
  [ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA, 'API修改（约束变化）'],
  [ApiDiffType.ATOMIC_SERVICE_NA_TO_HAVE, 'API修改（约束变化）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_ADD, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_RETURN_TYPE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_POS_CHAHGE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_UNREQUIRED_ADD, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REQUIRED_ADD, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_UNREQUIRED, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TO_REQUIRED, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE, 'API修改（原型修改）'],
  [ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_CHANGE, 'API修改（原型修改）'],
  [ApiDiffType.NEW_SAME_NAME_FUNCTION, 'API修改（原型修改）'],
  [ApiDiffType.REDUCE_SAME_NAME_FUNCTION, 'API修改（原型修改）'],
  [ApiDiffType.PARAM_TYPE_CHANGE_COMPATIABLE, 'API修改（原型修改）'],
  [ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE, 'API修改（原型修改）'],
]);

/**
 * 非兼容性变更类型
 */
export const incompatibleApiDiffTypes: Set<ApiDiffType> = new Set([
  ApiDiffType.PUBLIC_TO_SYSTEM,
  ApiDiffType.NA_TO_STAGE,
  ApiDiffType.NA_TO_FA,
  ApiDiffType.FA_TO_STAGE,
  ApiDiffType.STAGE_TO_FA,
  ApiDiffType.CARD_TO_NA,
  ApiDiffType.CROSS_PLATFORM_TO_NA,
  ApiDiffType.ERROR_CODE_NA_TO_HAVE,
  ApiDiffType.ERROR_CODE_CHANGE,
  ApiDiffType.PERMISSION_NA_TO_HAVE,
  ApiDiffType.PERMISSION_RANGE_SMALLER,
  ApiDiffType.PERMISSION_RANGE_CHANGE,
  ApiDiffType.API_NAME_CHANGE,
  ApiDiffType.FUNCTION_RETURN_TYPE_ADD,
  ApiDiffType.FUNCTION_RETURN_TYPE_CHANGE,
  ApiDiffType.FUNCTION_PARAM_POS_CHANGE,
  ApiDiffType.FUNCTION_PARAM_REQUIRED_ADD,
  ApiDiffType.FUNCTION_PARAM_REDUCE,
  ApiDiffType.FUNCTION_PARAM_TO_REQUIRED,
  ApiDiffType.FUNCTION_PARAM_TYPE_CHANGE,
  ApiDiffType.FUNCTION_PARAM_TYPE_REDUCE,
  ApiDiffType.FUNCTION_PARAM_CHANGE,
  ApiDiffType.FUNCTION_CHANGES,
  ApiDiffType.PROPERTY_READONLY_TO_REQUIRED,
  ApiDiffType.PROPERTY_WRITABLE_TO_UNREQUIRED,
  ApiDiffType.PROPERTY_WRITABLE_TO_REQUIRED,
  ApiDiffType.PROPERTY_TYPE_CHANGE,
  ApiDiffType.PROPERTY_READONLY_ADD,
  ApiDiffType.PROPERTY_WRITABLE_ADD,
  ApiDiffType.PROPERTY_WRITABLE_REDUCE,
  ApiDiffType.CONSTANT_VALUE_CHANGE,
  ApiDiffType.TYPE_ALIAS_CHANGE,
  ApiDiffType.TYPE_ALIAS_ADD,
  ApiDiffType.TYPE_ALIAS_REDUCE,
  ApiDiffType.ENUM_MEMBER_VALUE_CHANGE,
  ApiDiffType.REDUCE,
  ApiDiffType.HISTORICAL_JSDOC_CHANGE,
  ApiDiffType.HISTORICAL_API_CHANGE,
  ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_REDUCE,
  ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_CHANGE,
  ApiDiffType.FUNCTION_RETURN_TYPE_REDUCE,
  ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_TYPE_ADD,
  ApiDiffType.TYPE_ALIAS_FUNCTION_PARAM_CHANGE,
  ApiDiffType.ATOMIC_SERVICE_HAVE_TO_NA,
  ApiDiffType.DELETE_DECORATOR,
  ApiDiffType.NEW_DECORATOR,
  ApiDiffType.SYSCAP_A_TO_B,
  ApiDiffType.SYSCAP_HAVE_TO_NA,
  ApiDiffType.SYSCAP_NA_TO_HAVE,
  ApiDiffType.KIT_CHANGE,
  ApiDiffType.KIT_HAVE_TO_NA,
  ApiDiffType.REDUCE_SAME_NAME_FUNCTION,
  ApiDiffType.PARAM_TYPE_CHANGE_IN_COMPATIABLE,
]);

export const isNotApiSet: Set<string> = new Set([
  ApiType.NAMESPACE,
  ApiType.ENUM,
  ApiType.SOURCE_FILE,
]);

/**
 * 以下API类型中新增必选属性/方法都是非兼容性变更
 */
export const parentApiTypeSet: Set<string> = new Set([
  ApiType.INTERFACE,
  ApiType.STRUCT,
  ApiType.CLASS,
  ApiType.TYPE_ALIAS,
]);
