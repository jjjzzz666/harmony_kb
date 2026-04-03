/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The definition of AbilityConstant.
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
declare namespace AbilityConstant {
  /**
   * Interface of launch param.
   * @typedef LaunchParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export interface LaunchParam {
    /**
     * Indicates launch reason.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    launchReason: LaunchReason;

    /**
     * Indicates last exit reason.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    lastExitReason: LastExitReason;
  }

  /**
   * Type of launch reason.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum LaunchReason {
    UNKNOWN = 0,
    START_ABILITY = 1,
    CALL = 2,
    CONTINUATION = 3,
    APP_RECOVERY = 4,
  }

  /**
   * Type of last exit reason.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum LastExitReason {
    UNKNOWN = 0,
    ABILITY_NOT_RESPONDING = 1,
    NORMAL = 2,
  }

  /**
   * Type of onContinue result.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum OnContinue {
    AGREE = 0,
    REJECT = 1,
    MISMATCH = 2,
  }

  /**
   * Type of memory level.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum MemoryLevel {
    MEMORY_LEVEL_MODERATE = 0,
    MEMORY_LEVEL_LOW = 1,
    MEMORY_LEVEL_CRITICAL = 2,
  }

  /**
   * Type of window mode.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  export enum WindowMode {
    WINDOW_MODE_UNDEFINED = 0,
    WINDOW_MODE_FULLSCREEN = 1,
    WINDOW_MODE_SPLIT_PRIMARY = 100,
    WINDOW_MODE_SPLIT_SECONDARY = 101,
    WINDOW_MODE_FLOATING = 102,
  }

  /**
   * Type of onSave result.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum OnSaveResult {
    ALL_AGREE = 0,
    CONTINUATION_REJECT = 1,
    CONTINUATION_MISMATCH = 2,
    RECOVERY_AGREE = 3,
    RECOVERY_REJECT = 4,
    ALL_REJECT,
  }

  /**
   * Type of save state.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export enum StateType {
    CONTINUATION = 0,
    APP_RECOVERY = 1,
  }

  /**
* Provides methods for managing devices.
*/
  interface Device {
    /**
     * Releases the {@code DeviceManager} instance after the methods for device management are no longer used.
     *
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    release(): void;

    /**
     * Obtains a list of trusted devices.
     *
     * @throws {BusinessError} 11600101 - Failed to execute the function.
     * @returns Returns a list of trusted devices.
     * @systemapi this method can be used only by system applications.
     */
    getTrustedDeviceListSync(): Array<DeviceInfo>;
  }

  /**
   * Provides the abilities for Pin code authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8
   * @name PINAuth
   */
  class PINAuths {
    /**
     * Constructor to get the PINAuth class instance.
     *
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    constructor();

    /**
     * Register inputer.
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @param { IInputer } inputer - Indicates the password input box callback
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @throws { BusinessError } 12300001 - system service exception.
     * @throws { BusinessError } 12300002 - invalid inputer.
     * @throws { BusinessError } 12300103 - the credential inputer has been registered.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    registerInputer(inputer: IInputer): void;

    /**
     * Unregister inputer.
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    unregisterInputer( ): void;
  }
}

export default AbilityConstant;
