/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * Provides interfaces to manage power.
 *
 * @namespace power
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace power {
  /**
   * Shuts down the system.
   * <p>This method requires the ohos.permission.REBOOT permission.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason Indicates the shutdown reason.
   * reason parameter must be of type string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  function shutdown(reason: string): void;

  /**
   * Restarts the system.
   * <p>This method requires the ohos.permission.REBOOT permission.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason Indicates the restart reason. For example, "updater" indicates entering the updater mode
   * after the restart. If the parameter is not specified, the system enters the normal mode after the restart.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power#reboot
   */
  function rebootDevice(reason: string): void;

  /**
   * Restarts the system.
   * <p>This method requires the ohos.permission.REBOOT permission.
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason Indicates the restart reason. For example, "updater" indicates entering the updater mode
   * after the restart. If the parameter is not specified, the system enters the normal mode after the restart.
   * reason parameter must be of type string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function reboot(reason: string): void;

  /**
   * Checks whether the screen of a device is on or off.
   *
   * @param { AsyncCallback<boolean> } callback Returns true if the screen is on; returns false otherwise.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power#isActive
   */
  function isScreenOn(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the screen of a device is on or off.
   *
   * @returns { Promise<boolean> } Returns true if the screen is on; returns false otherwise.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power#isActive
   */
  function isScreenOn(): Promise<boolean>;

  /**
   * Checks whether the device is active.
   * <p>
   * The screen will be on if device is active, screen will be off otherwise.
   *
   * @returns { boolean } Returns true if the device is active; returns false otherwise.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isActive(): boolean;

  /**
   * Wakes up the device to turn on the screen.
   *
   * @param { string } detail Indicates the detail information who request wakeup.
   * detail parameter must be of type string.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9
   */
  /**
   * Wakes up the device to turn on the screen with permission.
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { string } detail Indicates the detail information who request wakeup.
   * detail parameter must be of type string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function wakeup(detail: string): void;

  /**
   * Suspends the device to turn off the screen.
   *
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9
   */
  /**
   * Suspends the device to turn off the screen.
   *
   * @param { boolean } isImmediate Indicates whether suspend the device immediately.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 10
   */
  /**
   * Suspends the device to turn off the screen with permission.
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { boolean } isImmediate Indicates whether suspend the device immediately.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function suspend(isImmediate?: boolean): void;

  /**
   * Obtains the power mode of the current device. For details, see {@link DevicePowerMode}.
   *
   * @returns { DevicePowerMode } The power mode {@link DevicePowerMode} of current device .
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getPowerMode(): DevicePowerMode;

  /**
   * Sets the power mode of current device. For details, see {@link DevicePowerMode}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode Indicates power mode {@link DevicePowerMode} to set.
   *     the DevicePowerMode type is an enumeration class.
   * @param { AsyncCallback<void> } callback Indicates the callback of setting the power mode.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  /**
   * Sets the power mode of current device. For details, see {@link DevicePowerMode}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode Indicates power mode {@link DevicePowerMode} to set.
   *     the DevicePowerMode type is an enumeration class.
   * @param { AsyncCallback<void> } callback Indicates the callback of setting the power mode.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPowerMode(mode: DevicePowerMode, callback: AsyncCallback<void>): void;

  /**
   * Sets the power mode of current device. For details, see {@link DevicePowerMode}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode Indicates power mode {@link DevicePowerMode} to set.
   *     the DevicePowerMode type is an enumeration class.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   */
  /**
   * Sets the power mode of current device. For details, see {@link DevicePowerMode}.
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode Indicates power mode {@link DevicePowerMode} to set.
   *     the DevicePowerMode type is an enumeration class.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPowerMode(mode: DevicePowerMode): Promise<void>;

  /**
   * Returns true if the device is currently in idle mode.
   *
   * @returns { boolean } Returns true if the device is in idle mode; returns false otherwise.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function isStandby(): boolean;

  /**
   * hibernate the device.
   *
   * @param { boolean } clearMemory - Indicates whether to clear the memory before the device hibernates.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12
   */
  /**
   * hibernate the device with permission.
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { boolean } clearMemory - Indicates whether to clear the memory before the device hibernates.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function hibernate(clearMemory: boolean): void;

  /**
   * Sets the timeout duration(ms) for turning off the screen.
   *
   * @param { number } timeout - Indicates duration(ms) for turning off the screen. The value -1 means restore the default value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12
   */
  /**
   * Sets the timeout duration(ms) for turning off the screen with permission.
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { long } timeout - Indicates duration(ms) for turning off the screen. The value -1 means restore the default value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function setScreenOffTime(timeout: long): void;

  /**
   * Refresh the device activity (such as resetting the screen-off time, etc).
   * Available only when the device is active, see {@link isActive}
   *
   * @permission ohos.permission.REFRESH_USER_ACTION
   * @param { string } reason Indicates the reason of refreshing activity. The reason parameter must be of type string.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission 
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900201 - The device activity is being refreshed too frequently; the minimum time
   *     interval is 100 ms.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function refreshActivity(reason: string): void;

  /**
  * Register the notification callback of device shutdown.
  * 
  * @permission ohos.permission.REBOOT 
  * @param { Callback<boolean> } callback Notification callback of device shutdown. The callback parameter value of
  *     true indicates a device restart, while false indicates a device shutdown.
  * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission 
  *     required to call the API.
  * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
  * @throws { BusinessError } 4900101 - Failed to connect to the service.
  * @syscap SystemCapability.PowerManager.PowerManager.Core
  * @systemapi
  * @since 23 dynamic&static
  */
  function registerShutdownCallback(callback: Callback<boolean>): void;

  /**
  * Unregister the notification callback of device shutdown.
  * 
  * @permission ohos.permission.REBOOT 
  * @param { Callback<void> } [callback] Callback used to return the result.
  * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission 
  *     required to call the API.
  * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
  * @throws { BusinessError } 4900101 - Failed to connect to the service.
  * @syscap SystemCapability.PowerManager.PowerManager.Core
  * @systemapi
  * @since 23 dynamic&static
  */
  function unregisterShutdownCallback(callback?: Callback<void>): void;

  /**
   * Power mode of a device.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DevicePowerMode {
    /**
     * Normal power mode
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_NORMAL = 600,
    /**
     * Power save mode
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     *
     */
    MODE_POWER_SAVE,
    /**
     * Performance power mode
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_PERFORMANCE,
    /**
     * Extreme power save mode
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_EXTREME_POWER_SAVE,
    /**
     * Custom power save mode.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MODE_CUSTOM_POWER_SAVE = 650
  }

  /**
   * Set the power key filtering strategy.
   * The power service typically subscribes to the power key event. And this API is used to configure how the power key
   *     event should be handled.
   * 
   * @permission ohos.permission.POWER_MANAGER
   * @param { PowerKeyFilteringStrategy } strategy Indicates power key filtering
   *     strategy {@link PowerKeyFilteringStrategy} to set.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setPowerKeyFilteringStrategy(strategy: PowerKeyFilteringStrategy): void;

  /**
   * Power key filtering strategy.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 21 dynamic
   * @since 23 static
   */
  export enum PowerKeyFilteringStrategy {
    /**
     * Disable the filtering of power key long-press event.
     * The power service typically subscribes to the power key long-press event whose duration is configurable. And this
     *     is the default strategy of handling the power key long-press event.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    DISABLE_LONG_PRESS_FILTERING = 0,
    /**
     * Filter the ongoing power key long-press event only once.
     * The next power key long-press event is not filtered by default.
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    LONG_PRESS_FILTERING_ONCE = 1
  }
}
export default power;