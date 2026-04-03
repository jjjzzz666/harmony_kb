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

import { JSDoc, JsDocNodeCheckConfigItem } from '../api-check-wrapper';
import { PermissionValidTokenState } from './api_check_plugin_enums';

/**
 * 定义与显示窗口相关的配置
 */
export interface WindowConfig {
  designWidth: number;
  autoDesignWidth: boolean;
}

/**
 * 卡片form_config.json配置
 */
export interface FormConfig {
  name: string;
  displayName: string;
  description: string;
  src: string; // 目标字段
  uiSyntax: string;
  window: WindowConfig;
  colorMode: string;
  isDynamic: boolean;
  isDefault: boolean;
  updateEnabled: boolean;
  scheduledUpdateTime: string;
  updateDuration: number;
  defaultDimension: string;
  supportDimensions: string[];
}


export interface ConfigSchema {
  forms: FormConfig[];
}

/**
 * 工程编译配置
 */
export interface ProjectConfig extends ApiCheckConfig {
  bundleName: string;
  moduleName: string;
  cachePath: string;
  projectRootPath: string;
  isCrossplatform: boolean;
  ignoreCrossplatformCheck: boolean;
  bundleType: string;
  compileSdkVersion: number;
  compatibleSdkVersion: number;
  compileSdkPath: string;
  externalApiPaths: string;
  buildSdkPath: string;
  nativeDependencies: string[];
  aceSoPath: string;
  permissions: ConfigPermission;
  sdkConfigPaths: string;
  projectPath: string;
  aceModuleJsonPath: string;
  compileMode: string;
  aceProfilePath: string;
  deviceTypes: string[];
  runtimeOS: string;
  dependentModuleList: DependentModuleConfig[];
  entryFiles: string[];
  compileFiles: string[];
  getHvigorConsoleLogger: Function;
}

export interface ApiCheckConfig {
  permissionsArray: string[];
  cardPageSet: string[];
  sdkConfigs: SdkConfig[];
  systemModules: string[];
  allModulesPaths: string[];
  externalSdkPaths: string[];
  sdkConfigPrefix: string;
  syscapIntersectionSet: Set<string>;
  syscapUnionSet: Set<string>;
  deviceTypesMessage: string;
  initApiCheckTag: boolean;
}

export interface DependentModuleConfig {
  packageName: string;
  moduleName: string;
  moduleType: string;
  modulePath: string;
  sourceRoots: string[];
  entryFile: string;
  language: string;
  declFilesPath?: string;
  dependencies?: string[];
}

export interface CheckValidCallbackInterface {
  (jsDocTag: JSDoc[], config: JsDocNodeCheckConfigItem): boolean;
}

export interface SyscapConfig {
  SysCaps: string[]
}

export interface SdkConfig {
  prefix: string;
  apiPath: string[];
}

export interface GlobalObject {
  projectConfig: ProjectConfig
}

export interface PermissionVaildCalcInfo {
  valid: boolean;
  currentToken: PermissionValidTokenState;
  finish: boolean;
  currentPermissionMatch: boolean;
}

export interface PermissionValidCalcGroup {
  subQueue: string[];
  includeParenthesis: boolean;
}

export interface PermissionModule {
  modulePath: string;
  testPermissions: string[];
  permissions: string[];
}

export interface ConfigPermission {
  requestPermissions: Array<{ name: string }>;
  definePermissions: Array<{ name: string }>;
}

export interface ExtensionAbilities {
  type: string;
  metadata: MetaData[];
}

export interface MetaData {
  name: string;
  value: string;
  resource: string
}

export interface ModuleJson {
  module: Module;
}

export interface Module {
  metadata: MetaData[];
  extensionAbilities: ExtensionAbilities[];
}

export interface CardForm {
  type: string;
  uiSyntax: string;
  src: string;
}

export interface CardConfig {
  forms: CardForm[];
}

export interface Logger {
  printInfo(message: string): void;
  printWarn(message: string): void;
  printDebug(message: string): void;
}