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

import { Plugins, PluginContext } from '../common/plugin-context';
import { GlobalObject, ProjectConfig } from './utils/api_check_plugin_typedef';
import { createOrCleanProjectConfig, readCardPageSet, readPermissions, readSyscapInfo, readSystemModules, creatApiCheckConfig } from './utils/api_check_plugin_utils';
import { ApiCheckWrapperServiceHost } from './api-check-wrapper';
import { getApiCheckWrapperServiceHost } from './src/api_check_config';
import { checkApiExpression, WrapperApi } from './api-check-wrapper/src/api_check_wrapper';

/**
 * 导出projectConfig作为全局变量
 */
export const globalObject: GlobalObject = {
  projectConfig: createOrCleanProjectConfig()
}

/**
 * 入口方法
 *
 * @returns { Plugins }
 */
export function apiCheckPlugin(): Plugins {
  return {
    name: 'api-check-plugins',
    checked: apiCheckCallback,
    clean(): void { }
  };
}

/**
 * 入口回调方法，调用ApiCheckWrapper启动插件校验功能。
 *
 * @param { PluginContext } this PluginContext对象
 */
function apiCheckCallback(this: PluginContext): void {
  try {
    const currentProjectConfig: ProjectConfig | undefined = this.getProjectConfig() as ProjectConfig | undefined;
    if (currentProjectConfig) {
      initApiCheckConfig(currentProjectConfig);
      Object.assign(globalObject.projectConfig, currentProjectConfig);
      const ContextPtr = WrapperApi.arktsGlobal.compilerContext?.peer ?? this.getContextPtr();
      const apiCheckHost: ApiCheckWrapperServiceHost = getApiCheckWrapperServiceHost();
      checkApiExpression(apiCheckHost, ContextPtr);
    }
    else {
      throw new Error('[API_CHECK_PLUGIN] Get ProjectConfig Fail');
    }
  }
  catch (error) {
    if (error) {
      console.error(`[API_CHECK_PLUGIN] ${error}`);
    }
  }
}

/**
 * 初始化projectConfig，通过调用各方法改装该对象，新增插件需要的各属性。
 *
 * @param { ProjectConfig } projectConfig 获取的系统配置信息
 */
export function initApiCheckConfig(projectConfig: ProjectConfig): void {
  if (projectConfig.initApiCheckTag) {
    return;
  }
  Object.assign(projectConfig, creatApiCheckConfig());
  readPermissions(projectConfig);
  readCardPageSet(projectConfig);
  readSystemModules(projectConfig);
  readSyscapInfo(projectConfig);
}
