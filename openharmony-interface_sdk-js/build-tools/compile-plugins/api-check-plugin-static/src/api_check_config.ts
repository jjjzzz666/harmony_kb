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

import path from 'path';
import {
  PERMISSION_TAG_CHECK_NAME,
  PERMISSION_TAG_CHECK_ERROR,
  SYSTEM_API_TAG_CHECK_NAME,
  SYSTEM_API_TAG_CHECK_WARNING,
  TEST_TAG_CHECK_NAME,
  TEST_TAG_CHECK_ERROR,
  SYSCAP_TAG_CHECK_NAME,
  SYSCAP_TAG_CHECK_WARNING,
  FORM_TAG_CHECK_NAME,
  FORM_TAG_CHECK_ERROR,
  FIND_MODULE_WARNING,
  CROSSPLATFORM_TAG_CHECK_NAME,
  CROSSPLATFORM_TAG_CHECK_ERROR,
  DEPRECATED_TAG_CHECK_NAME,
  DEPRECATED_TAG_CHECK_WARNING,
  FA_TAG_CHECK_NAME,
  FA_TAG_HUMP_CHECK_NAME,
  FA_TAG_CHECK_ERROR,
  ATOMICSERVICE_BUNDLE_TYPE,
  ATOMICSERVICE_TAG_CHECK_NAME,
  ATOMICSERVICE_TAG_CHECK_ERROR,
  ATOMICSERVICE_TAG_CHECK_VERSION,
  SINCE_TAG_NAME,
  SINCE_TAG_CHECK_ERROR,
  STAGE_TAG_CHECK_NAME,
  STAGE_TAG_HUMP_CHECK_NAME,
  STAGE_TAG_CHECK_ERROR,
  STAGE_COMPILE_MODE
} from '../utils/api_check_plugin_define';
import { globalObject } from '../index';
import {
  checkPermissionTag,
  checkSinceTag,
  checkSyscapTag,
  getJsDocNodeCheckConfigItem,
  isCardFile,
  pushLog,
  collectInfo
} from '../utils/api_check_plugin_utils';
import {
  ApiCheckWrapperServiceHost,
  FileCheckModuleInfo,
  CurrentAddress,
  DiagnosticCategory,
  JsDocNodeCheckConfig,
  JsDocNodeCheckConfigItem
} from '../api-check-wrapper';

const jsDocNodeCheckConfigCache: Map<string, Map<string, JsDocNodeCheckConfig>> =
  new Map<string, Map<string, JsDocNodeCheckConfig>>();

/**
 * 根据ProjectConfig对象存入JsDoc校验规则
 *
 * @param { string } fileName - 原始node文件路径
 * @param { string } sourceFileName - 目标api文件路径
 * @returns { JsDocNodeCheckConfig } - 返回校验规则对象
 */
function getJsDocNodeCheckConfig(fileName: string, sourceFileName: string): JsDocNodeCheckConfig {
  let byFileName: Map<string, JsDocNodeCheckConfig> | undefined = jsDocNodeCheckConfigCache.get(fileName);
  if (byFileName === undefined) {
    byFileName = new Map<string, JsDocNodeCheckConfig>();
    jsDocNodeCheckConfigCache.set(fileName, byFileName);
  }
  let result: JsDocNodeCheckConfig | undefined = byFileName.get(sourceFileName);
  if (result !== undefined) {
    return result;
  }
  // 预留check条件
  let needCheckResult: boolean = true;
  const checkConfigArray: JsDocNodeCheckConfigItem[] = [];
  const apiName: string = path.basename(fileName);
  const sourceBaseName: string = path.basename(sourceFileName);
  if (/(?<!\.d)\.ts$/g.test(fileName)) {
    checkConfigArray.push(getJsDocNodeCheckConfigItem([], FIND_MODULE_WARNING,
      DiagnosticCategory.WARNING, true));
  }
  if (!globalObject.projectConfig.systemModules.includes(apiName) &&
    (globalObject.projectConfig.allModulesPaths.includes(path.normalize(sourceFileName)))) {
    checkConfigArray.push(getJsDocNodeCheckConfigItem([DEPRECATED_TAG_CHECK_NAME],
      DEPRECATED_TAG_CHECK_WARNING, DiagnosticCategory.WARNING, false));
    checkConfigArray.push(getJsDocNodeCheckConfigItem([SYSTEM_API_TAG_CHECK_NAME],
      SYSTEM_API_TAG_CHECK_WARNING, DiagnosticCategory.WARNING, false));
    checkConfigArray.push(getJsDocNodeCheckConfigItem([SINCE_TAG_NAME],
      SINCE_TAG_CHECK_ERROR, DiagnosticCategory.WARNING, false, checkSinceTag));
    // TODO: 预览文件 & CanIUse
    checkConfigArray.push(getJsDocNodeCheckConfigItem([SYSCAP_TAG_CHECK_NAME],
      SYSCAP_TAG_CHECK_WARNING, DiagnosticCategory.WARNING, false, checkSyscapTag));
    if (globalObject.projectConfig.projectRootPath) {
      const ohosTestDir = path.resolve(globalObject.projectConfig.projectRootPath, 'entry', 'src', 'ohosTest');
      if (!path.resolve(fileName).startsWith(ohosTestDir)) {
        checkConfigArray.push(getJsDocNodeCheckConfigItem([TEST_TAG_CHECK_NAME],
          TEST_TAG_CHECK_ERROR, DiagnosticCategory.WARNING, false));
      }
    }
    checkConfigArray.push(getJsDocNodeCheckConfigItem([PERMISSION_TAG_CHECK_NAME],
      PERMISSION_TAG_CHECK_ERROR, DiagnosticCategory.WARNING, false, checkPermissionTag));
    if (isCardFile(fileName)) {
      checkConfigArray.push(getJsDocNodeCheckConfigItem([FORM_TAG_CHECK_NAME],
        FORM_TAG_CHECK_ERROR, DiagnosticCategory.ERROR, true));
    }
    if (globalObject.projectConfig.isCrossplatform) {
      const logType: DiagnosticCategory =
        globalObject.projectConfig.ignoreCrossplatformCheck !== true ? DiagnosticCategory.ERROR :
          DiagnosticCategory.WARNING;
      checkConfigArray.push(getJsDocNodeCheckConfigItem([CROSSPLATFORM_TAG_CHECK_NAME],
        CROSSPLATFORM_TAG_CHECK_ERROR, logType, true));
    }
    if (globalObject.projectConfig.compileMode === STAGE_COMPILE_MODE) {
      checkConfigArray.push(getJsDocNodeCheckConfigItem([FA_TAG_CHECK_NAME, FA_TAG_HUMP_CHECK_NAME],
        FA_TAG_CHECK_ERROR, DiagnosticCategory.ERROR, false));
    } else if (globalObject.projectConfig.compileMode !== '') {
      checkConfigArray.push(getJsDocNodeCheckConfigItem([STAGE_TAG_CHECK_NAME, STAGE_TAG_HUMP_CHECK_NAME],
        STAGE_TAG_CHECK_ERROR, DiagnosticCategory.ERROR, false));
    }
    if (globalObject.projectConfig.bundleType === ATOMICSERVICE_BUNDLE_TYPE &&
      globalObject.projectConfig.compileSdkVersion >= ATOMICSERVICE_TAG_CHECK_VERSION) {
      checkConfigArray.push(getJsDocNodeCheckConfigItem([ATOMICSERVICE_TAG_CHECK_NAME],
        ATOMICSERVICE_TAG_CHECK_ERROR, DiagnosticCategory.ERROR, true));
    }
  } else {
    needCheckResult = false;
  }
  result = {
    nodeNeedCheck: needCheckResult,
    checkConfig: checkConfigArray
  };
  byFileName.set(sourceFileName, result);
  return result;
}


/**
 * 返回apiHost
 * 
 * @returns { ApiCheckWrapperServiceHost } - apiHost
 */
export function getApiCheckWrapperServiceHost(): ApiCheckWrapperServiceHost {
  return {
    getJsDocNodeCheckedConfig: (currentFileName: string, symbolSourceFilePath: string): JsDocNodeCheckConfig => {
      return getJsDocNodeCheckConfig(currentFileName, symbolSourceFilePath);
    },
    getFileCheckedModuleInfo: (containFilePath: string): FileCheckModuleInfo => {
      return {
        fileNeedCheck: true,
        currentFileName: containFilePath
      };
    },
    pushLogInfo: (apiName: string, currentFilePath: string, currentAddress: CurrentAddress,
      logLevel: DiagnosticCategory, logMessage: string): void => {
      pushLog(apiName, currentFilePath, currentAddress, logLevel, logMessage);
    },
    collectImportInfo: (moduleName: string[], modulePath: string, currentFilePath: string): void => {
      collectInfo(moduleName, modulePath, currentFilePath);
    }
  };
}