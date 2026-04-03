/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
import type { AutoStartupCallback } from './application/AutoStartupCallback';
import type { AutoStartupInfo } from './application/AutoStartupInfo';
/*** endif */
/*** if arkts static */
import type AutoStartupCallback from './application/AutoStartupCallback';
import type AutoStartupInfo from './application/AutoStartupInfo';
/*** endif */
import type { AsyncCallback } from './@ohos.base';

/**
 * The class of auto startup manager.
 *
 * @namespace autoStartupManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11 dynamic
 */
/**
 * The class of auto startup manager.
 *
 * @namespace autoStartupManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace autoStartupManager {
  /**
   * Register the listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } callback - Auto startup callback.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   */
  function on(type: 'systemAutoStartup', callback: AutoStartupCallback): void;

  /**
   * Register the listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } callback - Auto startup callback.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onSystemAutoStartup(callback: AutoStartupCallback): void;

  /**
   * Unregister listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } [callback] - Auto startup callback.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   */
  function off(type: 'systemAutoStartup', callback?: AutoStartupCallback): void;

  /**
   * Unregister listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } [callback] - Auto startup callback.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offSystemAutoStartup(callback?: AutoStartupCallback): void;

  /**
   * Set application auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of setApplicationAutoStartup.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function setApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Set application auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function setApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Cancel application auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of cancelApplicationAutoStartup.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Cancel application auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Query the current auto startup status of all applications.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AsyncCallback<Array<AutoStartupInfo>> } callback - The callback is used to return the array of
   *                                                             AutoStartupInfo.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void;

  /**
   * Query the current auto startup status of all applications.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @returns { Promise<Array<AutoStartupInfo>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *                                 "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>;

  /**
   * Retrieves the auto-start status of the current application.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the current application has been enabled for
   *     auto-start on boot by the user; returns {@code false} otherwise.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  function getAutoStartupStatusForSelf(): Promise<boolean>;

  /**
   * Check whether the current device supports auto startup on this device.
   *
   * @returns { boolean }
   *     - `true`: Device supports auto startup.
   *     - `false`: Device do not support auto startup.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isAutoStartupSupported(): boolean;
}

export default autoStartupManager;
