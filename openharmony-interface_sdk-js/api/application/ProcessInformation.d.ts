/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type appManager from '../@ohos.app.ability.appManager';
/*** endif */
/*** if arkts static */
import appManager from '../@ohos.app.ability.appManager';
/*** endif */
import bundleManager from '../@ohos.bundle.bundleManager';

/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @since 10
 */
/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export interface ProcessInformation {
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { int }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * @type { number }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * @type { int }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  bundleNames: Array<string>;

  /**
   * The process state.
   *
   * @type { appManager.ProcessState }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10
   */
  /**
   * The process state.
   *
   * @type { appManager.ProcessState }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  state: appManager.ProcessState;

  /**
   * The bundle type of the process.
   *
   * @type { bundleManager.BundleType }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  bundleType: bundleManager.BundleType;

  /**
   * The app clone index of current process if app is multi app mode.
   * @type { ?int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  appCloneIndex?: int;

  /**
   * Indicates whether the process is in the preload state.
   * - `true`: The process is currently in the preload state.
   * - `false`: The process is either not a preload process, or its preload state has been consumed.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  isPreload?: boolean;
}
