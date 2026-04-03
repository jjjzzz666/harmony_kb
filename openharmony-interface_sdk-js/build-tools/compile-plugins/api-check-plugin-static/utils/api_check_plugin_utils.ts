/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import path from 'path';
import { globalObject, initApiCheckConfig } from '../index';
import {
  CheckValidCallbackInterface,
  ConfigPermission,
  ConfigSchema,
  PermissionValidCalcGroup,
  PermissionVaildCalcInfo,
  ProjectConfig,
  SdkConfig,
  SyscapConfig,
  ApiCheckConfig,
  MetaData,
  ExtensionAbilities,
  ModuleJson,
  CardConfig,
  CardForm,
  Logger
} from './api_check_plugin_typedef';
import {
  MESSAGE_CONFIG_COLOR_ERROR,
  MESSAGE_CONFIG_COLOR_RED,
  MESSAGE_CONFIG_COLOR_RESET,
  MESSAGE_CONFIG_COLOR_WARNING,
  MESSAGE_CONFIG_HEADER_ERROR,
  MESSAGE_CONFIG_HEADER_WARNING,
  PERMISSION_TAG_CHECK_ERROR,
  PERMISSION_TAG_CHECK_NAME,
  RUNTIME_OS_OH,
  SINCE_TAG_CHECK_ERROR,
  SINCE_TAG_NAME,
  STAGE_COMPILE_MODE,
  SYSCAP_TAG_CHECK_NAME
} from './api_check_plugin_define';
import {
  CurrentAddress,
  DiagnosticCategory,
  JSDoc,
  JsDocNodeCheckConfigItem,
  JSDocTag
} from '../api-check-wrapper';
import { PermissionValidTokenState } from './api_check_plugin_enums';

/**
 * 从 JSON 文件中提取所有 src 字段到数组
 * 
 * @param { string } filePath JSON 文件的绝对路径
 * @returns { string[] } 包含所有 src 字段的字符串数组
 * @throws 文件不存在、JSON 解析错误或数据结构不符时抛出异常
 */
export function extractSrcPaths(filePath: string): string[] {
  // 1. 验证路径格式和存在性
  if (!path.isAbsolute(filePath)) {
    throw new Error(`路径必须是绝对路径: ${filePath}`);
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`文件不存在: ${filePath}`);
  }

  try {
    // 2. 读取并解析 JSON 文件
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const config: ConfigSchema = JSON.parse(rawData);

    // 3. 验证数据结构
    if (!config.forms || !Array.isArray(config.forms)) {
      throw new Error('JSON 缺少 forms 数组');
    }

    // 4. 提取所有 src 字段
    const srcPaths: string[] = [];
    for (const form of config.forms) {
      if (form.src && typeof form.src === 'string') {
        let src = form.src.replace(/^\.\/ets/, '');
        srcPaths.push(globalObject.projectConfig?.projectPath + src);
      } else {
        console.warn(`跳过无效 src 字段的表单项: ${form.name}`);
      }
    }

    // 5. 返回结果数组
    return srcPaths;
  } catch (error) {
    // 6. 增强错误信息
    if (error instanceof SyntaxError) {
      throw new SyntaxError(`JSON 解析错误: ${error.message}`);
    }
    throw new Error(`处理失败: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * 判断当前ets文件是否是卡片文件。
 * 
 * @param { string } file 当前ets文件路径
 * @returns { boolean } 是否为卡片文件
 */
export function isCardFile(file: string): boolean {
  if (globalObject.projectConfig.cardPageSet.includes(file)) {
    return true;
  }
  return false;
}

/**
 * 校验since标签，当前api版本是否小于等于compatibleSdkVersion。
 * 
 * @param { JSDoc[] } jsDocs 当前api的JSDoc
 * @param { JsDocNodeCheckConfigItem } config 当前的since标签校验规则
 * @returns { boolean } 是否报错该since标签
 */
export function checkSinceTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  if (jsDocs && jsDocs.length > 0) {
    const minorJSDocVersion: number = getJSDocMinorVersion(jsDocs);
    const compatibleSdkVersion: number = globalObject.projectConfig.compatibleSdkVersion;
    if (minorJSDocVersion > compatibleSdkVersion) {
      config.message = SINCE_TAG_CHECK_ERROR.replace('$SINCE1', minorJSDocVersion.toString())
        .replace('$SINCE2', compatibleSdkVersion.toString());
      return true;
    }
  }
  return false;
}

/**
 * 获取最小的Since版本号
 * 
 * @param { JSDoc[] } jsDocs JSDoc注释对象数组，用于提取版本信息
 * @returns { number } 从@since标签中提取的最大版本号（数值），若未找到则返回0
 */
function getJSDocMinorVersion(jsDocs: JSDoc[]): number {
  let minorVersion: number = 0;

  if (!jsDocs || jsDocs.length === 0) {
    return minorVersion;
  }
  const jsdoc: JSDoc = jsDocs[0];
  if (!jsdoc.tags || jsdoc.tags.length === 0) {
    return minorVersion;
  }
  for (const tag of jsdoc.tags) {
    if (tag.tag !== SINCE_TAG_NAME) {
      continue;
    }
    const currentVersion: number = Number.parseInt(tag.name ?? '');
    if (minorVersion === 0 || (!Number.isNaN(currentVersion) && currentVersion > minorVersion)) {
      minorVersion = currentVersion;
    }
    break;
  }

  return minorVersion;
}

/**
 * 获取JSDoc数组中最新版本的JSDoc注释对象。
 * 
 * @param { JSDoc[] } jsDocs JSDoc注释对象数组，包含多个版本的注释信息
 * @returns { JSDoc } 数组中最后一个JSDoc对象，即最新版本的注释
 */
function getCurrentJSDoc(jsDocs: JSDoc[]): JSDoc {
  let currentJsDoc: JSDoc = jsDocs[jsDocs.length - 1];
  return currentJsDoc;
}

/**
 * 从JSDoc注释对象中获取指定名称的标签，提取如param、permission等特定标签。
 * 
 * @param { JSDoc } jsDoc
 * @param { string } tagName
 * @returns { JSDocTag | undefined }
 */
function getJSDocTag(jsDoc: JSDoc, tagName: string): JSDocTag | undefined {
  const jsDocTag: JSDocTag | undefined = jsDoc.tags.find((item: JSDocTag) => {
    return item.tag === tagName;
  });
  return jsDocTag;
}

/**
 * 验证API文档注释中配置的permission是否被应用permission集合支持。
 * STEP1. 解析permission信息；
 * STEP2. 递归验证permission；
 * 
 * @param { string } comment jsdoc中comment信息
 * @param { string[] } permissionsArray 应用permission集合
 * @returns { boolean } 若应用权限集合满足注释中的权限表达式，返回 true；否则返回 false
 */
function validPermission(comment: string, permissionsArray: string[]): boolean {
  const permissionsItem: string[] = getSplitsArrayWithDesignatedCharAndStr(comment ?? '', ' ')
    .filter((item) => {
      return item !== '';
    });
  const permissionsQueue: string[] = [];
  permissionsItem.forEach((item: string) => {
    // STEP1.1 Parse'('
    const leftParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr([item], '(');
    // STEP1.2 Parse')'
    const rightParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr(leftParenthesisItem, ')');
    permissionsQueue.push(...rightParenthesisItem);
  });
  // STEP2
  const calcValidResult: PermissionVaildCalcInfo = {
    valid: false,
    currentToken: PermissionValidTokenState.Init,
    finish: false,
    currentPermissionMatch: true,
  };
  validPermissionRecursion(permissionsQueue, permissionsArray, calcValidResult);
  return calcValidResult.valid;
}

/**
 * 该函数是权限验证的核心递归入口，若权限队列中包含括号，则先按括号分组处理，再验证分组结果；
 * 若不包含括号，则直接调用getPermissionVaildAtoms处理。
 * 
 * @param { string[] } permissionsQueue 权限表达式队列，包含权限项、逻辑运算符（and/or）及括号（()）
 * @param { string[] } permissions 项目配置的权限列表，用于验证权限项是否有效
 * @param { PermissionVaildCalcInfo } calcValidResult 权限验证计算信息对象，存储中间状态和最终结果
 */
function validPermissionRecursion(permissionsQueue: string[], permissions: string[],
  calcValidResult: PermissionVaildCalcInfo): void {
  if (permissionsQueue.some(item => ['(', ')'].includes(item))) {
    const groups: PermissionValidCalcGroup[] = groupWithParenthesis(permissionsQueue);
    const groupJoin: string[] = getGroupItemPermission(groups, calcValidResult, permissions);
    getPermissionVaildAtoms(groupJoin, calcValidResult, permissions ?? []);
  } else {
    getPermissionVaildAtoms(permissionsQueue, calcValidResult, permissions ?? []);
  }
}

/**
 * 按指定字符分割字符串，并去除每个分割项的首尾空格。
 * 
 * @param { string } permission 需要分割的权限表达式字符串（如"(perm1 or perm2) and perm3"）
 * @param { string } designatedChar 用于分割的指定字符（如'and'、'or'、'('等）
 * @returns { string[] } 分割后的字符串数组，每个元素已去除首尾空格
 */
function getSplitsArrayWithDesignatedCharAndStr(permission: string, designatedChar: string): string[] {
  return permission.split(designatedChar).map(item => item.trim());
}

/**
 * 处理groupWithParenthesis返回的分组，对包含括号的子分组递归验证，
 * 并将验证结果转换为特定标识（空字符串表示有效，'NA'表示无效），用于上层表达式验证。
 * 
 * @param { PermissionValidCalcGroup[] } groups 由groupWithParenthesis返回的分组数组
 * @param { PermissionVaildCalcInfo } calcValidResult 权限验证计算信息对象（用于传递上下文）
 * @param { string[] } permissions 配置的权限列表，用于验证子分组中的权限项
 * @returns { string[] } 处理后的中间结果数组，包含非括号分组的原始项和括号分组的验证标识（''或'NA'）
 */
function getGroupItemPermission(
  groups: PermissionValidCalcGroup[],
  calcValidResult: PermissionVaildCalcInfo,
  permissions: string[]): string[] {
  const groupJoin: string[] = [];
  groups.forEach((groupItem: PermissionValidCalcGroup) => {
    if (groupItem.includeParenthesis) {
      const calcValidResultItem: PermissionVaildCalcInfo = {
        ...calcValidResult,
      };
      const subStack: string[] = groupItem.subQueue.slice(1, groupItem.subQueue.length - 1);
      validPermissionRecursion(subStack, permissions, calcValidResultItem);
      if (calcValidResultItem.valid) {
        groupJoin.push('');
      } else {
        groupJoin.push('NA');
      }
    } else {
      groupJoin.push(...groupItem.subQueue);
    }
  });
  return groupJoin;
}

/**
 * 根据括号对权限队列进行分组，支持嵌套括号，生成包含分组信息的数组。
 * 该函数通过计数器跟踪括号的嵌套层级，将连续的括号及其中间内容划分为一个分组，
 * 非括号内容划分为普通分组，用于处理带优先级的权限表达式。
 * 
 * @param { string[] } stack 权限表达式队列，包含权限项、逻辑运算符（and/or）及括号（'('或')'）
 * @returns { PermissionValidCalcGroup[] } 分组数组，每个元素包含分组的子队列和是否含括号的标识
 */
function groupWithParenthesis(stack: string[]): PermissionValidCalcGroup[] {
  let currentLeftParenthesisCount: number = 0;
  const groups: PermissionValidCalcGroup[] = [];
  let currentGroupItem: PermissionValidCalcGroup = {
    subQueue: [],
    includeParenthesis: false,
  };
  stack.forEach((item: string, index: number) => {
    if (item === '(') {
      if (currentLeftParenthesisCount === 0) {
        groups.push(currentGroupItem);
        currentGroupItem = {
          subQueue: [item],
          includeParenthesis: true
        };
      } else {
        currentGroupItem.subQueue.push(item);
      }
      currentLeftParenthesisCount++;
    } else if (item === ')') {
      currentLeftParenthesisCount--;
      currentGroupItem.subQueue.push(item);
      if (currentLeftParenthesisCount === 0) {
        groups.push(currentGroupItem);
        currentGroupItem = {
          subQueue: [],
          includeParenthesis: false,
        };
      }
    } else {
      currentGroupItem.subQueue.push(item);
      if (index === stack.length - 1) {
        groups.push(currentGroupItem);
      }
    }
  });
  return groups;
}

/**
 * 深度优先递归处理权限原子栈，根据逻辑运算符（and/or）验证权限匹配结果，并将结果存入calcValidResult对象中。
 * 
 * @param { string[] } atomStacks 权限atomStacks，包含权限项（如"perm1"）和逻辑运算符（"and"/"or"），按表达式顺序排列
 * @param { PermissionVaildCalcInfo } calcValidResult 权限验证计算信息对象，用于存储中间状态和最终结果
 * @param { string[] } configPermissions 项目配置的权限列表，用于验证单个权限项是否有效
 */
function getPermissionVaildAtoms(atomStacks: string[], calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): void {
  if (calcValidResult.finish) {
    return;
  }
  if (atomStacks[0] === 'and') {
    calcValidResult.currentToken = PermissionValidTokenState.And;
  } else if (atomStacks[0] === 'or') {
    calcValidResult.currentToken = PermissionValidTokenState.Or;
  } else {
    if (calcValidResult.currentToken === PermissionValidTokenState.Or) {
      if (inValidOrExpression(
        atomStacks,
        calcValidResult,
        configPermissions
      )) {
        calcValidResult.currentPermissionMatch = false;
      }
    } else if (calcValidResult.currentToken === PermissionValidTokenState.And) {
      if (inValidAndExpression(
        atomStacks,
        calcValidResult,
        configPermissions
      )) {
        calcValidResult.currentPermissionMatch = false;
      }
    } else {
      calcValidResult.currentPermissionMatch =
        validPermissionItem(atomStacks[0], configPermissions);
    }
  }
  if (atomStacks.length > 1) {
    getPermissionVaildAtoms(
      atomStacks.slice(1),
      calcValidResult,
      configPermissions
    );
  } else {
    calcValidResult.valid = calcValidResult.currentPermissionMatch;
    calcValidResult.finish = true;
  }
}

/**
 * 验证Or逻辑表达式的有效性
 * 
 * @param { string[] } atomStacks 权限atomStacks，当前处理的元素为需要验证的权限项（atomStacks[0]）
 * @param { PermissionVaildCalcInfo } calcValidResult 权限限验证计算信息对象，存储中间状态
 * @param { string[] } configPermissions 项目配置的权限列表，用于验证权限项是否存在
 * @returns { boolean } 若Or表达式无效（所有条件均不满足），返回true；否则返回false
 */
function inValidOrExpression(
  atomStacks: string[],
  calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): boolean {
  if (
    !calcValidResult.currentPermissionMatch &&
    !validPermissionItem(atomStacks[0], configPermissions)
  ) {
    calcValidResult.valid = false;
    return true;
  }
  calcValidResult.currentPermissionMatch = true;
  return false;
}

/**
 * 验证And逻辑表达式的有效性
 * 
 * @param { string[] } atomStacks 权限atomStacks，当前处理的元素为需要验证的权限项（atomStacks[0]）
 * @param { PermissionVaildCalcInfo } calcValidResult 权限验证计算信息对象，存储中间状态
 * @param { string[] } configPermissions 项目配置的权限列表，用于验证权限项是否存在
 * @returns { boolean } 若And表达式无效（存在不满足的条件），返回true；否则返回false
 */
function inValidAndExpression(
  atomStacks: string[],
  calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): boolean {
  if (
    !calcValidResult.currentPermissionMatch ||
    !validPermissionItem(atomStacks[0], configPermissions)
  ) {
    calcValidResult.valid = false;
    return true;
  }
  calcValidResult.currentPermissionMatch =
    validPermissionItem(atomStacks[0], configPermissions);
  return false;
}

/**
 * 基础校验PermissionItem
 * 
 * @param { string } atomStackItem 待校验的atomStackItem（如具体的权限名称）
 * @param { string[] } configPermissions 项目配置的权限列表，用于校验atomStackItem是否存在
 * @returns { boolean } 若atomStackItem为空字符串或存在于配置列表中，返回true；否则返回false
 */
function validPermissionItem(atomStackItem: string, configPermissions: string[]): boolean {
  return atomStackItem === '' || configPermissions.includes(atomStackItem);
}

/**
 * 将字符串数组中的每个元素按指定字符（如括号、逻辑运算符）拆分，
 * 对拆分后产生的空值用指定字符替换，最终返回拆分后的扁平数组，支持处理嵌套拆分场景。
 * 
 * @param { string[] } leftParenthesisItems 需要拆分的字符串数组
 * @param { string } designatedChar 用于拆分的指定字符（如'('、')'、'and'等）
 * @returns { string[] } 拆分后的字符串数组，空值被替换为指定字符
 */
function getSplitsArrayWithDesignatedCharAndArrayStr(
  leftParenthesisItems: string[],
  designatedChar: string
): string[] {
  const rightParenthesisItems: string[] = [];

  leftParenthesisItems.forEach((leftParenthesisItem: string) => {
    if (!leftParenthesisItem.includes(designatedChar)) {
      rightParenthesisItems.push(leftParenthesisItem);
      return;
    }
    const rightParenthesis: string[] = getSplitsArrayWithDesignatedCharAndStr(leftParenthesisItem, designatedChar);

    rightParenthesis.forEach((item: string) => {
      rightParenthesisItems.push(item === '' ? designatedChar : item);
    });
  });

  return rightParenthesisItems;
}

/**
* 获取jsDocNodeCheckConfigItem配置项
*
* @param { string[] } tagName tag名
* @param { string } message 报错信息
* @param { DiagnosticCategory } type 报错类型
* @param { boolean } tagNameShouldExisted 该tag是否应该存在
* @param { CheckValidCallbackInterface } checkValidCallback 报错验证回调方法
* @returns { JsDocNodeCheckConfigItem } JsDocNodeCheckConfigItem对象
*/
export function getJsDocNodeCheckConfigItem(tagName: string[], message: string, type: DiagnosticCategory,
  tagNameShouldExisted: boolean, checkValidCallback?: CheckValidCallbackInterface): JsDocNodeCheckConfigItem {
  return {
    tagName: tagName,
    message: message,
    type: type,
    tagNameShouldExisted: tagNameShouldExisted,
    checkValidCallback: checkValidCallback
  };
}

/**
 * 创建/清空工程配置
 * 
 * @returns { ProjectConfig }
 */
export function createOrCleanProjectConfig(): ProjectConfig {
  return {
    bundleName: '',
    moduleName: '',
    cachePath: '',
    aceModuleJsonPath: '',
    compileMode: '',
    permissions: {
      requestPermissions: [],
      definePermissions: []
    },
    projectRootPath: '',
    isCrossplatform: false,
    ignoreCrossplatformCheck: false,
    bundleType: '',
    compileSdkVersion: 0,
    compatibleSdkVersion: 0,
    projectPath: '',
    aceProfilePath: '',
    cardPageSet: [],
    compileSdkPath: '',
    systemModules: [],
    allModulesPaths: [],
    sdkConfigs: [],
    externalApiPaths: '',
    externalSdkPaths: [],
    sdkConfigPrefix: '',
    deviceTypes: [],
    deviceTypesMessage: '',
    runtimeOS: '',
    syscapIntersectionSet: new Set([]),
    syscapUnionSet: new Set([]),
    permissionsArray: [],
    buildSdkPath: '',
    nativeDependencies: [],
    aceSoPath: '',
    sdkConfigPaths: '',
    initApiCheckTag: true,
    dependentModuleList: [],
    entryFiles: [],
    compileFiles: [],
    getHvigorConsoleLogger: defaultLogger
  };
}

function defaultLogger(): Logger {
  return {
    printInfo: (message: string): void => {},
    printWarn: (message: string): void => {},
    printDebug: (message: string): void => {}
  }
}

/**
 * 初始化组装projectConfig所需对象
 * 
 * @returns { ApiCheckConfig }
 */
export function creatApiCheckConfig(): ApiCheckConfig {
  return {
    cardPageSet: [],
    systemModules: [],
    allModulesPaths: [],
    sdkConfigs: [],
    externalSdkPaths: [],
    sdkConfigPrefix: '',
    deviceTypesMessage: '',
    syscapIntersectionSet: new Set([]),
    syscapUnionSet: new Set([]),
    permissionsArray: [],
    initApiCheckTag: true
  }
}

/**
 * 重新拆解组装permissions对象成新的permissionsArray数组
 * 
 * @param { ProjectConfig } projectConfig 配置信息
 */
export function readPermissions(projectConfig: ProjectConfig): void {
  if (!projectConfig) {
    return;
  }
  const permissions: ConfigPermission = projectConfig.permissions;
  const requestPermissions: string[] = permissions.requestPermissions
    ? getPermissionFromConfig(permissions.requestPermissions)
    : [];

  const definePermissions: string[] = permissions.definePermissions
    ? getPermissionFromConfig(permissions.definePermissions)
    : [];

  const permissionsArray: string[] = [
    ...requestPermissions,
    ...definePermissions
  ];
  projectConfig.permissionsArray = permissionsArray;
}

/**
 * 遍历permissions数组，提取每个permissions对象的name属性值。
 * 
 * @param { Array<{ name: string }> } array 包含权限对象的数组，每个对象必须有name属性
 * @returns { string[] } 提取出的权限名称字符串数组
 */
function getPermissionFromConfig(array: Array<{ name: string }>): string[] {
  return array.map((item: { name: string }) => {
    return String(item.name);
  });
}

/**
 * 从aceModuleJsonPath中提取模块的extensionAbilities对象。
 * 
 * @param { ProjectConfig } projectConfig 配置信息
 */
export function readCardPageSet(projectConfig: ProjectConfig): void {
  if (projectConfig.aceModuleJsonPath && fs.existsSync(projectConfig.aceModuleJsonPath) && projectConfig.projectPath) {
    projectConfig.compileMode = STAGE_COMPILE_MODE;
    const moduleJson: ModuleJson = JSON.parse(fs.readFileSync(projectConfig.aceModuleJsonPath).toString());
    const extensionAbilities: ExtensionAbilities[] = moduleJson?.module?.extensionAbilities;
    if (extensionAbilities && extensionAbilities.length > 0) {
      setCardPages(extensionAbilities, projectConfig);
    }
  }
}

/**
 * 筛选类型为'form'的扩展能力，提取其metadata中的资源信息
 * 
 * @param { ExtensionAbilities[] } extensionAbilities 扩展能力数组
 * @param { ProjectConfig } projectConfig 项目配置信息
 */
function setCardPages(extensionAbilities: ExtensionAbilities[], projectConfig: ProjectConfig): void {
  if (!extensionAbilities || extensionAbilities.length === 0) {
    return;
  }
  extensionAbilities.forEach((extensionAbility) => {
    if (extensionAbility.type !== 'form' || !extensionAbility.metadata) {
      return;
    }
    extensionAbility.metadata.forEach((metadata) => {
      if (!metadata.resource) {
        return;
      }
      readCardResource(metadata.resource, projectConfig);
    });
  });
}

/**
 * 读取卡片资源配置，筛选符合条件的卡片路径并更新到cardPageSet
 * 
 * @param { string } resource 卡片资源标识（可能包含$profile:前缀）
 * @param { ProjectConfig } projectConfig 项目配置信息
 */
function readCardResource(resource: string, projectConfig: ProjectConfig): void {
  const cardJsonFileName: string = `${resource.replace(/\$profile\:/, '')}.json`;
  const modulePagePath: string = path.resolve(projectConfig.aceProfilePath, cardJsonFileName);
  if (!fs.existsSync(modulePagePath)) {
    return;
  }
  const cardConfig: CardConfig = JSON.parse(fs.readFileSync(modulePagePath, 'utf-8'));
  if (!cardConfig.forms) {
    return;
  }
  cardConfig.forms.forEach((form) => {
    if (!(form.type === 'eTS' || form.uiSyntax === 'arkts')) {
      return;
    }
    const cardPath: string = path.resolve(projectConfig.projectPath, '..', form.src);
    if (!cardPath || !fs.existsSync(cardPath) || projectConfig.cardPageSet.includes(cardPath)) {
      return;
    }
    projectConfig.cardPageSet.push(cardPath);
  });
}

/**
 * 扫描系统模块目录（api、arkts、kits），收集模块路径信息
 * 将直接子模块名称添加到 systemModules，处理文件路径（过滤、替换、格式化）后添加到 allModulesPaths。
 * 
 * @param { ProjectConfig } projectConfig 配置信息
 */
export function readSystemModules(projectConfig: ProjectConfig): void {
  const apiDirPath = path.resolve(projectConfig.buildSdkPath, './api');
  const arktsDirPath = path.resolve(projectConfig.buildSdkPath, './arkts');
  const kitsDirPath = path.resolve(projectConfig.buildSdkPath, './kits');
  const systemModulePathArray = [apiDirPath, arktsDirPath, kitsDirPath];

  systemModulePathArray.forEach(systemModulesPath => {
    if (fs.existsSync(systemModulesPath) && projectConfig) {
      const modulePaths: string[] = [];
      readFile(systemModulesPath, modulePaths);
      projectConfig.systemModules.push(...fs.readdirSync(systemModulesPath));
      modulePaths.filter(filePath => {
        const dirName = path.dirname(filePath);
        return !(dirName === apiDirPath || dirName === arktsDirPath || dirName === kitsDirPath);
      }).map((filePath: string) => {
        return filePath
          .replace(apiDirPath, '')
          .replace(arktsDirPath, '')
          .replace(kitsDirPath, '')
          .replace(/(^\\)|(.d.e?ts$)/g, '')
          .replace(/\\/g, '/');
      });
      projectConfig.allModulesPaths.push(...modulePaths);
    }
  });
  const defaultSdkConfigs: SdkConfig[] = [
    {
      'apiPath': systemModulePathArray,
      'prefix': '@ohos'
    }, {
      'apiPath': systemModulePathArray,
      'prefix': '@system'
    }, {
      'apiPath': systemModulePathArray,
      'prefix': '@arkts'
    }
  ];
  const externalApiPathStr = projectConfig.sdkConfigPaths || '';
  const externalApiPaths = externalApiPathStr.split(path.delimiter);
  projectConfig.externalSdkPaths = [...externalApiPaths];
  const extendSdkConfigs: SdkConfig[] = [];
  collectExternalModules(externalApiPaths, extendSdkConfigs, projectConfig);
  projectConfig.sdkConfigs = [...defaultSdkConfigs, ...extendSdkConfigs];
}

/**
 * 遍历SDK路径，读取每个路径下的sdkConfig.json配置文件，解析并处理其中的API路径和前缀信息，
 * 同时收集路径信息，最终将这些配置添加sdkConfigPrefix中。
 * 
 * @param { string[] } sdkPaths 外部SDK路径数组，每个路径指向一个外部模块的根目录
 * @param { SdkConfig[] } extendSdkConfigs 用于存储外部SDK配置的数组，将与默认配置合并
 * @param { ProjectConfig } projectConfig 配置信息
 */
function collectExternalModules(sdkPaths: string[], extendSdkConfigs: SdkConfig[], projectConfig: ProjectConfig): void {
  for (let i = 0; i < sdkPaths.length; i++) {
    const sdkPath = sdkPaths[i];
    const sdkConfigPath = path.resolve(sdkPath, 'sdkConfig.json');
    if (!fs.existsSync(sdkConfigPath)) {
      continue;
    }
    const sdkConfig: SdkConfig = JSON.parse(fs.readFileSync(sdkConfigPath, 'utf-8'));
    if (!sdkConfig.apiPath) {
      continue;
    }
    let externalApiPathArray: string[] = [];
    if (Array.isArray(sdkConfig.apiPath)) {
      externalApiPathArray = sdkConfig.apiPath;
    } else {
      externalApiPathArray.push(sdkConfig.apiPath);
    }
    const resolveApiPathArray: string[] = [];
    externalApiPathArray.forEach((element: string) => {
      const resolvePath: string = path.resolve(sdkPath, element);
      resolveApiPathArray.push(resolvePath);
      if (fs.existsSync(resolvePath) && projectConfig) {
        const extrenalModulePaths: string[] = [];
        projectConfig.systemModules.push(...fs.readdirSync(resolvePath));
        readFile(resolvePath, extrenalModulePaths);
        projectConfig.allModulesPaths.push(...extrenalModulePaths);
      }
    });
    projectConfig.sdkConfigPrefix += `|${sdkConfig.prefix.replace(/^@/, '')}`;
    sdkConfig.apiPath = resolveApiPathArray;
    extendSdkConfigs.push(sdkConfig);
  }
}

/**
 * 收集指定设备类型的系统能力信息（包括OH和其他的Syscap），
 * 计算所有设备类型共有的系统能力（交集）和所有设备类型的系统能力总和（并集）
 * 
 * @param { ProjectConfig } projectConfig 配置对象
 */
export function readSyscapInfo(projectConfig: ProjectConfig): void {
  projectConfig.deviceTypesMessage = projectConfig.deviceTypes.join(',');
  const deviceDir: string = path.resolve(__dirname, '../../../../../api/device-define/');
  const deviceInfoMap: Map<string, string[]> = new Map();
  const syscaps: Array<string[]> = [];
  let allSyscaps: string[] = [];
  projectConfig.deviceTypes.forEach((deviceType: string) => {
    collectOhSyscapInfos(deviceType, deviceDir, deviceInfoMap);
  });
  if (projectConfig.runtimeOS !== RUNTIME_OS_OH) {
    collectExternalSyscapInfos(projectConfig.externalSdkPaths, projectConfig.deviceTypes,
      deviceInfoMap);
  }
  deviceInfoMap.forEach((value: string[]) => {
    syscaps.push(value);
    allSyscaps = allSyscaps.concat(value);
  });
  const intersectNoRepeatTwice = (arrs: Array<string[]>): string[] => {
    return arrs.reduce(function (prev: string[], cur: string[]) {
      return Array.from(new Set(cur.filter((item: string) => {
        return prev.includes(item);
      })));
    });
  };
  let syscapIntersection: string[] = [];
  if (projectConfig.deviceTypes.length === 1 || syscaps.length === 1) {
    syscapIntersection = syscaps[0];
  } else if (syscaps.length > 1) {
    syscapIntersection = intersectNoRepeatTwice(syscaps);
  }
  projectConfig.syscapIntersectionSet = new Set(syscapIntersection);
  projectConfig.syscapUnionSet = new Set(allSyscaps);
}

/**
 * 指定的设备定义目录中读取对应设备类型的Syscap配置文件，解析并存储系统能力信息到映射表中。
 * 
 * @param { string } deviceType 设备类型
 * @param { string } deviceDir 设备定义配置文件所在的目录路径
 * @param { Map<string, string[]> } deviceInfoMap 用于存储设备类型与对应Syscap数组的映射表
 */
function collectOhSyscapInfos(deviceType: string, deviceDir: string, deviceInfoMap: Map<string, string[]>): void {
  let syscapFilePath: string = '';
  if (deviceType === 'phone') {
    syscapFilePath = path.resolve(deviceDir, 'default.json');
  } else {
    syscapFilePath = path.resolve(deviceDir, deviceType + '.json');
  }
  if (fs.existsSync(syscapFilePath)) {
    const content: SyscapConfig = JSON.parse(fs.readFileSync(syscapFilePath, 'utf-8'));
    if (deviceInfoMap.get(deviceType)) {
      deviceInfoMap.set(deviceType, (deviceInfoMap.get(deviceType) as string[]).concat(content.SysCaps));
    } else {
      deviceInfoMap.set(deviceType, content.SysCaps);
    }
  }
}

/**
 * 从外部SDK路径中查找设备定义目录，读取对应设备类型的Syscap配置文件，
 * 解析并合并系统能力信息到映射表中，用于扩展系统默认的Syscap集合。
 * 
 * @param { string[] } externalApiPaths 外部SDK路径数组
 * @param { string[] } deviceTypes 项目支持的设备类型数组
 * @param { Map<string, string[]> } deviceInfoMap 用于存储设备类型与对应Syscap数组的映射表
 */
function collectExternalSyscapInfos(
  externalApiPaths: string[],
  deviceTypes: string[],
  deviceInfoMap: Map<string, string[]>
): void {
  const externalDeviceDirs: string[] = [];
  externalApiPaths.forEach((externalApiPath: string) => {
    const externalDeviceDir: string = path.resolve(externalApiPath, './api/device-define');
    if (fs.existsSync(externalDeviceDir)) {
      externalDeviceDirs.push(externalDeviceDir);
    }
  });
  externalDeviceDirs.forEach(externalDeviceDir => {
    processDeviceTypes(externalDeviceDir, deviceTypes, deviceInfoMap)
  });
}

/**
 * 在外部SDK路径数组中遍历项目支持的设备类型数组，将对应的设备存入deviceInfoMap中
 * 
 * @param { string } externalDeviceDir 外部SDK路径
 * @param { string[] } deviceTypes 项目支持的设备类型数组
 * @param { Map<string, string[]> } deviceInfoMap 用于存储设备类型与对应Syscap数组的映射表
 */
function processDeviceTypes(externalDeviceDir: string, deviceTypes: string[], deviceInfoMap: Map<string, string[]>): void {
  deviceTypes.forEach((deviceType: string) => {
    const files: string[] = fs.readdirSync(externalDeviceDir);
    files.forEach((fileName: string) => {
      if (!fileName.startsWith(deviceType)) {
        return;
      }
      const syscapFilePath: string = path.resolve(externalDeviceDir, fileName);
      if (!fs.existsSync(syscapFilePath)) {
        return;
      }
      const content: SyscapConfig = JSON.parse(fs.readFileSync(syscapFilePath, 'utf-8'));
      const existingSysCaps: string[] = deviceInfoMap.get(deviceType) || [];
      deviceInfoMap.set(deviceType, existingSysCaps.concat(content.SysCaps));
    });
  });
}


/**
 * 递归读取目录下所有文件路径
 * 
 * @param { string } dir  要读取的目录路径（绝对路径或相对路径）
 * @param { string[] } utFiles 用于存储收集到的文件路径的数组，函数会直接修改该数组
 */
export function readFile(dir: string, utFiles: string[]): void {
  try {
    const files: string[] = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath: string = path.join(dir, element);
      const status: fs.Stats = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.error(MESSAGE_CONFIG_COLOR_RED, 'ArkTS ERROR: ' + e, MESSAGE_CONFIG_COLOR_RESET);
  }
}

/**
*  解析最新版本JSDoc中的@permission标签内容，验证表达式是否与项目配置的权限集合匹配，
* 若不匹配则返回true（表示需要检查提示），并更新错误信息。
*
* @param { JSDoc[] } jsDocs JSDoc注释对象数组，用于获取最新版本的注释
* @param { JsDocNodeCheckConfigItem } config 检查配置对象，用于存储错误提示信息
* @returns { boolean } 若@permission标签不存在、表达式为空或不满足权限要求，返回true；否则返回false
*/
export function checkPermissionTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  const currentJSDoc: JSDoc = getCurrentJSDoc(jsDocs);
  const jsDocTag: JSDocTag | undefined = getJSDocTag(currentJSDoc, PERMISSION_TAG_CHECK_NAME);
  if (!jsDocTag) {
    return false;
  }
  const permissionExpression: string = jsDocTag.comment ?? '';
  config.message = PERMISSION_TAG_CHECK_ERROR.replace('$DT', permissionExpression);
  return permissionExpression !== '' &&
    !validPermission(permissionExpression, globalObject.projectConfig.permissionsArray);
}

/**
 * 从最新版本的JSDoc注释中提取@syscap标签，验证其是否存在于所有设备类型共有的系统能力集合中，
 * 若不存在则返回true（表示需要检查提示）。
 * 
 * @param { JSDoc[] } jsDocs JSDoc注释对象数组，用于获取最新版本的注释
 * @param { JsDocNodeCheckConfigItem } config 检查配置对象（当前函数未使用，预留扩展）
 * @returns { boolean } 若@syscap标签不存在、系统能力值为空或不在交集范围内，返回true；否则返回false
 */
export function checkSyscapTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  let currentSyscapValue: string = '';
  if (jsDocs && jsDocs.length > 0) {
    const jsDoc: JSDoc = getCurrentJSDoc(jsDocs);
    for (let i = 0; i < jsDoc.tags.length; i++) {
      const jsDocTag: JSDocTag = jsDoc.tags[i];
      if (jsDocTag && jsDocTag.tag === SYSCAP_TAG_CHECK_NAME) {
        currentSyscapValue = jsDocTag.name ?? '';
        break;
      }
    }
  }
  return globalObject.projectConfig.syscapIntersectionSet &&
    !globalObject.projectConfig.syscapIntersectionSet.has(currentSyscapValue);
}

/**
 * 格式化日志信息，整合API名称、文件路径、代码位置等上下文，
 * 并调用打印函数输出带有指定级别和消息内容的日志。
 * 
 * @param { string } apiName 涉及的API名称，用于日志中的信息替换
 * @param { string } currentFilePath 当前文件的路径
 * @param { CurrentAddress } currentAddress 行列坐标
 * @param { DiagnosticCategory } logLevel 日志级别（ERROR、WARNING）
 * @param { string } logMessage 日志消息模板，其中{0}会被替换为apiName
 */
export function pushLog(apiName: string, currentFilePath: string, currentAddress: CurrentAddress,
  logLevel: DiagnosticCategory, logMessage: string): void {
  // 组装文件全路径
  const fileFullPath: string = `${currentFilePath}:${currentAddress.line}:${currentAddress.column}).`;
  // 替换api名称
  logMessage = logMessage.replace('{0}', apiName);
  // 打印日志信息
  printMessage(fileFullPath, logMessage, logLevel);
}

/**
 * 根据日志级别打印格式化的日志信息，支持不同级别日志的样式区分。
 * 
 * @param { string } fileInfo 包含文件路径和行列信息的字符串（如“path/to/file.ts(5:10).”）
 * @param { string } message 日志的具体内容消息
 * @param { DiagnosticCategory } level 日志级别
 */
function printMessage(fileInfo: string, message: string, level: DiagnosticCategory): void {
  const logger: Logger = globalObject.projectConfig.getHvigorConsoleLogger();
  // 当前只涉及WARNING的告警
  if (level === DiagnosticCategory.WARNING) {
    logger.printWarn(
      `${MESSAGE_CONFIG_HEADER_WARNING}${fileInfo}\n ${message}\n`
    );
  }
}

/**
 * 检测模块路径是否包含SO文件（.so后缀），并将对应的文件路径添加到项目配置的原生依赖列表中，避免重复添加。
 * 
 * @param { string[] } moduleName 模块名称数组
 * @param { string } modulePath 模块的路径字符串，用于检测是否为SO文件
 * @param { string } currentFilePath 当前模块文件的完整路径，将被添加到原生依赖列表
 */
export function collectInfo(moduleName: string[], modulePath: string, currentFilePath: string): void {
  // 收集so模块依赖
  if (/lib(\S+)\.so/g.test(modulePath) && !globalObject.projectConfig.nativeDependencies.includes(currentFilePath)) {
    globalObject.projectConfig.nativeDependencies.push(currentFilePath);
  }
}

/**
 * 管理项目中使用的OS相关文件列表，若文件已存在则增量添加新文件路径（去重），若不存在则创建文件并写入内容，
 * 同时确保文件所在目录存在。
 * 
 * @param { string[] } useOSFiles 需要写入的OS文件路径数组
 */
export function writeUseOSFiles(useOSFiles: string[]): void {
  let info: string = useOSFiles.join('\n');
  if (!fs.existsSync(globalObject.projectConfig.aceSoPath)) {
    const parent: string = path.resolve(globalObject.projectConfig.aceSoPath, '..');
    if (!(fs.existsSync(parent) && !fs.statSync(parent).isFile())) {
      mkDir(parent);
    }
  } else {
    const currentUseOSFiles: string[] = fs.readFileSync(globalObject.projectConfig.aceSoPath, 'utf-8').split('\n');
    useOSFiles.forEach((filePath: string) => {
      if (!currentUseOSFiles.includes(filePath)) {
        currentUseOSFiles.push(filePath);
      }
    });
    info = currentUseOSFiles.join('\n');
  }
  fs.writeFileSync(globalObject.projectConfig.aceSoPath, info);
}

/**
 * 通过递归方式创建指定路径的目录，若父目录不存在则先创建父目录，确保最终目录可成功创建。
 * 
 * @param { string } path_ 需要创建的目录路径
 */
function mkDir(path_: string): void {
  const parent: string = path.join(path_, '..');
  if (!(fs.existsSync(parent) && !fs.statSync(parent).isFile())) {
    mkDir(parent);
  }
  fs.mkdirSync(path_);
}