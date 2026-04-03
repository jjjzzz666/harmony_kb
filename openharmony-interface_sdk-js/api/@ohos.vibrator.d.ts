/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit SensorServiceKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @since 8
 */
/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @atomicservice
 * @since 11 dynamic
 */
/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare namespace vibrator {
  /**
   * The trigger motor vibrates for a specified length of time.
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration Indicate the duration of the motor vibration.
   * @param { AsyncCallback<void> } callback The callback of vibrate.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(duration: number, callback?: AsyncCallback<void>): void;

  /**
   * The trigger motor vibrates for a specified length of time.
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration Indicate the duration of the motor vibration.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(duration: number): Promise<void>;

  /**
   * The trigger motor vibrates for the specified effect of the preset.
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(effectId: EffectId): Promise<void>;

  /**
   * The trigger motor vibrates for the specified effect of the preset.
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<void> } callback The callback of vibrate.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;

  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @param { AsyncCallback<void> } callback - The callback of startVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}
   * @param { AsyncCallback<void> } callback - The callback of startVibration
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported
   * @throws { BusinessError } 14600101 - Device operation failed
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}
   * @param { AsyncCallback<void> } callback - The callback of startVibration
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported
   * @throws { BusinessError } 14600101 - Device operation failed
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;

  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9 dynamic
   */
  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibration(stopMode: VibratorStopMode): Promise<void>;

  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9 dynamic
   */
  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void;

  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibration(callback: AsyncCallback<void>): void;

  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibration(): Promise<void>;

  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibrationSync(): void;

  /**
   * Stop the vibrator on the specified device. When all parameters are set to default, stop all local vibrators.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   * <br> {@code VibratorInfoParam}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  /**
   * Stop the vibrator on the specified device. When all parameters are set to default, stop all local vibrators.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   * <br> {@code VibratorInfoParam}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function stopVibration(param?: VibratorInfoParam): Promise<void>;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<boolean> } callback The callback of isSupportEffect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10 dynamic
   */
  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<boolean> } callback The callback of isSupportEffect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10 dynamic
   */
  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function isSupportEffect(effectId: string): Promise<boolean>;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { boolean } Returns whether the effect is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12 dynamic
   */
  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { boolean } Returns whether the effect is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function isSupportEffectSync(effectId: string): boolean;

  /**
   * Get effect information by device ID and vibrator ID.
   *
   * @param { string } effectId - The effect type to query.
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   * <br> {@code VibratorInfoParam}. By default, query local vibrators.
   * @returns { EffectInfo } Returns information about the specified effect.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  /**
   * Get effect information by device ID and vibrator ID.
   *
   * @param { string } effectId - The effect type to query.
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   * <br> {@code VibratorInfoParam}. By default, query local vibrators.
   * @returns { EffectInfo } Returns information about the specified effect.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function getEffectInfoSync(effectId: string, param?: VibratorInfoParam): EffectInfo;

  /**
  * The information includes Indicates whether the effect is supported.
  *
  * @interface EffectInfo
  * @syscap SystemCapability.Sensors.MiscDevice
  * @since 19 dynamic
  */
  /**
  * The information includes Indicates whether the effect is supported.
  *
  * @interface EffectInfo
  * @syscap SystemCapability.Sensors.MiscDevice
  * @crossplatform
  * @since 22 dynamic
  * @since 23 static
  */
  interface EffectInfo {
    /**
     * Indicates whether the effect is supported, true means supported, false means not supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Indicates whether the effect is supported, true means supported, false means not supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    isEffectSupported: boolean;
  }

  /**
   * Stop the motor from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#stopVibration
   */
  function stop(stopMode: VibratorStopMode): Promise<void>;

  /**
   * Stop the motor from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @param { AsyncCallback<void> } callback The callback of stop.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead vibrator#stopVibration
   */
  function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;

  /**
   * Whether the high-definition haptic is supported.
   *
   * @returns { boolean } Returns whether the high-definition haptic is supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12 dynamic
   */
  /**
   * Whether the high-definition haptic is supported.
   *
   * @returns { boolean } Returns whether the high-definition haptic is supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function isHdHapticSupported(): boolean;

  /**
   * Preset vibration effect string.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamic
   */
  /**
   * Preset vibration effect string.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  enum EffectId {
    /**
     * Describes the vibration effect of the vibrator when a user adjusts the timer.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8 dynamic
     */
    /**
     * Describes the vibration effect of the vibrator when a user adjusts the timer.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
  }

  /**
   * Simple and universal vibration effects.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12 dynamic
   */
  /**
   * Simple and universal vibration effects.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  enum HapticFeedback {
    /**
     * Describes the soft vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12 dynamic
     */
    /**
     * Describes the soft vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_SOFT = 'haptic.effect.soft',

    /**
     * Describes the hard vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12 dynamic
     */
    /**
     * Describes the hard vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_HARD = 'haptic.effect.hard',

    /**
     * Describes the sharp vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12 dynamic
     */
    /**
     * Describes the sharp vibration effect of the vibrator.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_SHARP = 'haptic.effect.sharp',

    /**
     * Describes the vibration effect of the succeed notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Describes the vibration effect of the succeed notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_SUCCESS = 'haptic.notice.success',

    /**
     * Describes the vibration effect of the failed notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Describes the vibration effect of the failed notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_FAILURE = 'haptic.notice.fail',

    /**
     * Describes the vibration effect of the warning notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Describes the vibration effect of the warning notice.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    EFFECT_NOTICE_WARNING = 'haptic.notice.warning'
  }

  /**
   * Vibrator vibration stop mode.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8 dynamic
   */
  /**
   * Vibrator vibration stop mode.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  enum VibratorStopMode {
    /**
     * Indicates the mode of stopping a one-shot vibration effect.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8 dynamic
     */
    /**
     * Indicates the mode of stopping a one-shot vibration effect.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    VIBRATOR_STOP_MODE_TIME = 'time',

    /**
     * Indicates the mode of stopping a preset vibration effect.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8 dynamic
     */
    /**
     * Indicates the mode of stopping a preset vibration effect.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    VIBRATOR_STOP_MODE_PRESET = 'preset'
  }

  /**
   * The use of vibration.
   *
   * @typedef {'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
   * 'touch' | 'media' | 'physicalFeedback' | 'simulateReality'}
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * The use of vibration.
   *
   * @typedef {'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
   * 'touch' | 'media' | 'physicalFeedback' | 'simulateReality'}
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * The use of vibration.
   *
   * @typedef {'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
   * 'touch' | 'media' | 'physicalFeedback' | 'simulateReality'}
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
  'touch' | 'media' | 'physicalFeedback' | 'simulateReality';

  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibrateAttribute {
    /**
     * Vibrator id, default is 0.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * Vibrator id, default is 0.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Vibrator id, default is 0.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    id?: int;

    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     * By default, deviceId represents the local device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 19 dynamic
     */
    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     * By default, deviceId represents the local device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * The use of vibration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The use of vibration.
     *
     * @type { Usage }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * The use of vibration.
     *
     * @type { Usage }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    usage: Usage;

    /**
     * Indicates whether to bypass system management switches.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    systemUsage?: boolean;
  }

  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset | VibrateFromFile }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset | VibrateFromFile }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 18 dynamic
   */
  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern;

  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibrateTime {
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @type { 'time' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @type { 'time' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    type: 'time';

    /**
     * The duration of the vibration, in ms.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The duration of the vibration, in ms.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * The duration of the vibration, in ms.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    duration: int;
  }

  /**
   * Preset vibration type vibration effect.
   *
   * @interface VibratePreset
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9 dynamic
   */
  /**
   * Preset vibration type vibration effect.
   *
   * @interface VibratePreset
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratePreset {
    /**
     * The value is "preset", which triggers motor vibration according to preset vibration effect.
     *
     * @type { 'preset' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9 dynamic
     */
    /**
     * The value is "preset", which triggers motor vibration according to preset vibration effect.
     *
     * @type { 'preset' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    type: 'preset';

    /**
     * Preset type vibration.
     *
     * @type { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9 dynamic
     */
    /**
     * Preset type vibration.
     *
     * @type { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    effectId: string;

    /**
     * The number of vibration repetitions.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The number of vibration repetitions.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12 dynamic
     */
    /**
     * The number of vibration repetitions.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    count?: int;

    /**
     * The intensity of vibration effect.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12 dynamic
     */
    /**
     * The intensity of vibration effect.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    intensity?: int;
  }

  /**
   * Custom vibration, vibrate the effect from a haptic file.
   *
   * @interface VibrateFromFile
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10 dynamic
   */
  /**
   * Custom vibration, vibrate the effect from a haptic file.
   *
   * @interface VibrateFromFile
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibrateFromFile {
    /**
     * The value is "file", which triggers motor vibration according to the vibration profile.
     *
     * @type { 'file' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10 dynamic
     */
    /**
     * The value is "file", which triggers motor vibration according to the vibration profile.
     *
     * @type { 'file' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    type: 'file';

    /**
     * Haptic file descriptor, some formats are supported.
     *
     * @type { HapticFileDescriptor }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10 dynamic
     */
    /**
     * Haptic file descriptor, some formats are supported.
     *
     * @type { HapticFileDescriptor }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    hapticFd: HapticFileDescriptor;
  }

  /**
   * Haptic file descriptor. The caller needs to ensure that the fd is valid and
   * the offset and length are correct.
   *
   * @interface HapticFileDescriptor
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10 dynamic
   */
  /**
   * Haptic file descriptor. The caller needs to ensure that the fd is valid and
   * the offset and length are correct.
   *
   * @interface HapticFileDescriptor
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface HapticFileDescriptor {
    /**
     * The file descriptor of haptic effect source from file system. The caller
     * is responsible to close the file descriptor.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10 dynamic
     */
    /**
     * The file descriptor of haptic effect source from file system. The caller
     * is responsible to close the file descriptor.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    fd: int;

    /**
     * The offset into the file where the data to be read, in bytes. By default,
     * the offset is zero.
     *
     * @type { ?long }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10 dynamic
     */
    /**
     * The offset into the file where the data to be read, in bytes. By default,
     * the offset is zero.
     *
     * @type { ?long }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    offset?: long;

    /**
     * The length in bytes of the data to be read. By default, the length is the
     * rest of bytes in the file from the offset.
     *
     * @type { ?long }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10 dynamic
     */
    /**
     * The length in bytes of the data to be read. By default, the length is the
     * rest of bytes in the file from the offset.
     *
     * @type { ?long }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    length?: long;
  }

  /**
   * Types of vibration events
   *
   * @enum { int }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * Types of vibration events
   *
   * @enum { int }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  enum VibratorEventType {
    /**
     * Steady state long vibration
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Steady state long vibration
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    CONTINUOUS = 0,

    /**
     * Transient short vibration
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Transient short vibration
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    TRANSIENT = 1,
  }

  /**
   * The vibration curve is valid when the vibration event type is 'continuous'
   *
   * @interface VibratorCurvePoint
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * The vibration curve is valid when the vibration event type is 'continuous'
   *
   * @interface VibratorCurvePoint
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratorCurvePoint {
    /**
     * The offset of the starting time of the relative event.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * The offset of the starting time of the relative event.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * Gain in relative event vibration intensity
     *
     * @type { ?double }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Gain in relative event vibration intensity
     *
     * @type { ?double }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    intensity?: double;
    /**
     * Changes in relative event vibration frequency
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Changes in relative event vibration frequency
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    frequency?: int;
  }

  /**
   * Vibration event.
   *
   * @interface VibratorEvent
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * Vibration event.
   *
   * @interface VibratorEvent
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratorEvent {
    /**
     * Types of vibration events
     *
     * @type { VibratorEventType }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Types of vibration events
     *
     * @type { VibratorEventType }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    eventType: VibratorEventType;

    /**
     * Relative starting time of vibration
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Relative starting time of vibration
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * The duration of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * The duration of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * Intensity of vibration events
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Intensity of vibration events
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * Vibration event frequency
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Vibration event frequency
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * Channel number
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Channel number
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    index?: int;

    /**
     * An array representing vibration adjustment curves.
     *
     * @type { ?Array<VibratorCurvePoint> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * An array representing vibration adjustment curves.
     *
     * @type { ?Array<VibratorCurvePoint> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    points?: Array<VibratorCurvePoint>;
  }

  /**
   * Each 'events' attribute in the vibration sequence represents one vibration event
   *
   * @interface VibratorPattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * Each 'events' attribute in the vibration sequence represents one vibration event
   *
   * @interface VibratorPattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratorPattern {
    /**
     * Absolute starting time of vibration
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Absolute starting time of vibration
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    time: int;

    /**
     * Vibration event array, where each 'events' attribute represents one vibration event.
     *
     * @type { Array<VibratorEvent> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Vibration event array, where each 'events' attribute represents one vibration event.
     *
     * @type { Array<VibratorEvent> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    events: Array<VibratorEvent>;
  }

  /**
   * The continuous vibration parameters
   *
   * @interface ContinuousParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * The continuous vibration parameters
   *
   * @interface ContinuousParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface ContinuousParam {
    /**
     * Intensity of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Intensity of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * Frequency of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Frequency of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * The points of vibration
     *
     * @type { ?VibratorCurvePoint[] }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * The points of vibration
     *
     * @type { ?VibratorCurvePoint[] }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    points?: VibratorCurvePoint[];

    /**
     * Index of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Index of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    index?: int;
  }

  /**
   * The transient vibration parameters
   *
   * @interface TransientParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * The transient vibration parameters
   *
   * @interface TransientParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface TransientParam {
    /**
     * Intensity of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Intensity of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    intensity?: int;

    /**
     * Frequency of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Frequency of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    frequency?: int;

    /**
     * Index of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Index of vibration
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    index?: int;
  }

  /**
   * Provide methods for adding long or short vibration events and generate VibratorPattern objects.
   *
   * @name VibratorPatternBuilder
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * Provide methods for adding long or short vibration events and generate VibratorPattern objects.
   *
   * @name VibratorPatternBuilder
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  class VibratorPatternBuilder {
    /**
     * Method for adding long vibration events
     *
     * @param { int } time Relative starting time of the long-term vibration event.
     * @param { int } duration The duration of the long-term vibration event
     * @param { ContinuousParam } [options] Optional parameter object
     * @returns { VibratorPatternBuilder } Return the current VibratorPatternBuilder object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Method for adding long vibration events
     *
     * @param { int } time Relative starting time of the long-term vibration event.
     * @param { int } duration The duration of the long-term vibration event
     * @param { ContinuousParam } [options] Optional parameter object
     * @returns { VibratorPatternBuilder } Return the current VibratorPatternBuilder object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    addContinuousEvent(time: int, duration: int, options?: ContinuousParam): VibratorPatternBuilder;

    /**
     * Method for adding short vibration events.
     *
     * @param { int } time Relative starting time of short oscillation events.
     * @param { TransientParam } [options] Optional parameter object
     * @returns { VibratorPatternBuilder } Return the current VibratorPatternBuilder object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Method for adding short vibration events.
     *
     * @param { int } time Relative starting time of short oscillation events.
     * @param { TransientParam } [options] Optional parameter object
     * @returns { VibratorPatternBuilder } Return the current VibratorPatternBuilder object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br> 2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    addTransientEvent(time: int, options?: TransientParam): VibratorPatternBuilder;

    /**
     * Method for constructing vibration sequences of combined short or long events.
     *
     * @returns { VibratorPattern } Return VibratorPattern object.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Method for constructing vibration sequences of combined short or long events.
     *
     * @returns { VibratorPattern } Return VibratorPattern object.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    build(): VibratorPattern;
  }

  /**
   * Trigger motor vibration with custom vibration effects.
   *
   * @interface VibrateFromPattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 18 dynamic
   */
  /**
   * Trigger motor vibration with custom vibration effects.
   *
   * @interface VibrateFromPattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibrateFromPattern {
    /**
     * The value is "pattern", which triggers motor vibration based on the combination pattern.
     *
     * @type { 'pattern' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * The value is "pattern", which triggers motor vibration based on the combination pattern.
     *
     * @type { 'pattern' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    type: 'pattern';

    /**
     * Customize the sequence of motor vibration events, the VibratorPattern object returned by the build() method.
     *
     * @type { VibratorPattern }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 18 dynamic
     */
    /**
     * Customize the sequence of motor vibration events, the VibratorPattern object returned by the build() method.
     *
     * @type { VibratorPattern }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    pattern: VibratorPattern;
  }

  /**
   * Parameters of vibrator on the device. By default, VibratorInfoParam may default to querying or controlling
   * the local default vibrator.
   *
   * @typedef VibratorInfoParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  /**
   * Parameters of vibrator on the device. By default, VibratorInfoParam may default to querying or controlling
   * the local default vibrator.
   *
   * @typedef VibratorInfoParam
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratorInfoParam {
    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     * By default, deviceId may default to querying or controlling the local default vibrator.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     * By default, deviceId may default to querying or controlling the local default vibrator.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    deviceId?: int;
    /**
     * Unique identifier for the vibrator itself within the device.
     * By default, vibratorId may default to querying or controlling all vibrators on the corresponding device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Unique identifier for the vibrator itself within the device.
     * By default, vibratorId may default to querying or controlling all vibrators on the corresponding device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    vibratorId?: int;
  }

  /**
   * Represents the information about a vibrator device in the system.
   *
   * @typedef VibratorInfo
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  /**
   * Represents the information about a vibrator device in the system.
   *
   * @typedef VibratorInfo
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  interface VibratorInfo {
    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * Unique identifier for the vibrator itself within the device.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Unique identifier for the vibrator itself within the device.
     *
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    vibratorId: int;

    /**
     * Name of the device.
     *
     * @type { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Name of the device.
     *
     * @type { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Indicates whether the vibrator device support HD haptic.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Indicates whether the vibrator device support HD haptic.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    isHdHapticSupported: boolean;

    /**
     * Indicates whether the vibrator is a local device or an external one.
     * If the value is true, it represents a local device; if false, it represents an external device.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     */
    /**
     * Indicates whether the vibrator is a local device or an external one.
     * If the value is true, it represents a local device; if false, it represents an external device.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    isLocalVibrator: boolean;
  }

  /**
   * Retrieve the list of vibrator information about one or all devices.
   *
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   * <br> {@code VibratorInfoParam}. By default, this returns all vibrators on all device when param is unspecified.
   * @returns { Array<VibratorInfo> } A list of vibrator IDs containing information
   * <br> about the vibrator device.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  /**
   * Retrieve the list of vibrator information about one or all devices.
   *
   * @param { VibratorInfoParam } [param] - Indicate the device and vibrator information that needs to be controlled,
   *     <br> {@code VibratorInfoParam}. By default, this returns all vibrators on all device when param is unspecified.
   * @returns { Array<VibratorInfo> } A list of vibrator IDs containing information
   *     <br> about the vibrator device.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  function getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>;

  /**
   * Register a callback function to be called when a vibrator plugin or unplug event occurs.
   *
   * @param { 'vibratorStateChange' } type - Event of the listening.
   * @param { Callback<VibratorStatusEvent> } callback - The callback function to be executed when
   * <br> the event is triggered.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  function on(type: 'vibratorStateChange', callback: Callback<VibratorStatusEvent>): void;

  /**
   * Unregister a callback function for vibrator plugin or unplug events.
   *
   * @param { 'vibratorStateChange' } type - Event of the listening.
   * @param { Callback<VibratorStatusEvent> } [callback] - The callback function to be removed from the event listener.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   */
  function off(type: 'vibratorStateChange', callback?: Callback<VibratorStatusEvent>): void;

  /**
   * Register a callback function to be called when a vibrator plugin or unplug event occurs.
   *
   * @param { Callback<VibratorStatusEvent> } callback - The callback function to be executed when
   * <br> the event is triggered.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 23 static
   */
  function onVibratorStateChange(callback: Callback<VibratorStatusEvent>): void;

  /**
   * Unregister a callback function for vibrator plugin or unplug events.
   *
   * @param { Callback<VibratorStatusEvent> } [callback] - The callback function to be removed from the event listener.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 23 static
   */
  function offVibratorStateChange(callback?: Callback<VibratorStatusEvent>): void;

  /**
   * Indicates information about vibrator online or offline events.
   *
   * @interface
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 19 dynamic
   * @since 23 static
   */
  interface VibratorStatusEvent {
    /**
     * The timestamp of the reported event.
     * @type { long }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Unique identifier for the device that contains one or multiple vibrators.
     * 
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * Indicate the number of vibrators on the device.
     * 
     * @type { int }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    vibratorCount: int;

    /**
     * Indicates the device's online and offline status, true indicates online, false indicates offline.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 19 dynamic
     * @since 23 static
     */
    isVibratorOnline: boolean;
  }
}

export default vibrator;
