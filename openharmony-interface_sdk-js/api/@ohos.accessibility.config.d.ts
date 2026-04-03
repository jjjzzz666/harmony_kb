/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Configuration of the accessibility.
 *
 * @namespace config
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace config {
  /**
   * Indicates the configuration of daltonization state.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const daltonizationState: Config<boolean>;
  /**
   * Indicates the configuration of audio mono.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioMono: Config<boolean>;
  /**
   * Indicates the configuration of audio balance.
   *
   * @type { Config<double> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioBalance: Config<double>;
  /**
   * Indicates the configuration of high-contrast text.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let highContrastText: Config<boolean>;
  /**
   * Indicates the configuration of invert color.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let invertColor: Config<boolean>;
  /**
   * Indicates the configuration of daltonization color filter.
   *
   * @type { Config<DaltonizationColorFilter> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let daltonizationColorFilter: Config<DaltonizationColorFilter>;
  /**
   * Indicates the configuration of content timeout, in units of ms.
   *
   * @type { Config<int> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let contentTimeout: Config<int>;
  /**
   * Indicates the configuration of animation state.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let animationOff: Config<boolean>;
  /**
   * Indicates the configuration of brightness discount.
   *
   * @type { Config<double> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let brightnessDiscount: Config<double>;
  /**
   * Indicates the configuration of mouse key state.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseKey: Config<boolean>;
  /**
   * Indicates the configuration of mouse auto click, in units of ms.
   *
   * @type { Config<int> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseAutoClick: Config<int>;
  /**
   * Indicates the configuration of short key state.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkey: Config<boolean>;
  /**
   * Indicates the configuration of short key target.
   *
   * @type { Config<string> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkeyTarget: Config<string>;
  /**
   * Indicates the configuration of short key multi targets.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const shortkeyMultiTargets: Config<Array<string>>;
  /**
   * Indicates the configuration of captions state.
   *
   * @type { Config<boolean> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captions: Config<boolean>;
  /**
   * Indicates the configuration of captions style.
   *
   * @type { Config<accessibility.CaptionsStyle> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captionsStyle: Config<accessibility.CaptionsStyle>;
  /**
   * Indicates the configuration of click response time.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const clickResponseTime: Config<ClickResponseTime>;
  /**
   * Indicates the configuration of ignore repeat click.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const ignoreRepeatClick: Config<boolean>;
  /**
   * Indicates the configuration of ignore repeat click interval.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const repeatClickInterval: Config<RepeatClickInterval>;
  /**
   * Indicates the configuration of screen magnification.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const screenMagnification: Config<boolean>;

  /**
   * Enable the accessibility extension ability.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @param { Array<accessibility.Capability> } capability Indicates the ability.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableAbility(name: string, capability: Array<accessibility.Capability>): Promise<void>;

  /**
   * Enable the accessibility extension ability.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @param { Array<accessibility.Capability> } capability Indicates the ability.
   * @param { AsyncCallback<void> } callback
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableAbility(
    name: string,
    capability: Array<accessibility.Capability>,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Enable the accessibility extension ability with connect callback.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @param { Array<accessibility.Capability> } capability Indicates the capability of ability.
   * @param { ConnectCallback } connectCallback Indicates the connect callback when state change.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function enableAbilityWithCallback(
    name: string,
    capability: Array<accessibility.Capability>,
    connectCallback: ConnectCallback
  ): Promise<void>;

  /**
   * Disable the accessibility extension ability.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableAbility(name: string): Promise<void>;

  /**
   * Disable the accessibility extension ability.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @param { AsyncCallback<void> } callback
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableAbility(name: string, callback: AsyncCallback<void>): void;

  /**
   * Register the listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type Indicates the type of event.
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void;

  /**
   * Register the listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onEnabledAccessibilityExtensionListChange(callback: Callback<void>): void;

  /**
   * Register the listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type Indicates the type of event.
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void;

  /**
   * Register the listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onInstalledAccessibilityListChange(callback: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type Indicates the type of event.
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'enabledAccessibilityExtensionListChange', callback?: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } [callback] Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offEnabledAccessibilityExtensionListChange(callback?: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type Indicates the type of event.
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed. 
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'installedAccessibilityListChange', callback?: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } [callback] Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed. 
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offInstalledAccessibilityListChange(callback?: Callback<void>): void;

  /**
   * Set display magnification state.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { boolean } state Indicates that whether trigger display magnification.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 9300007 - Trigger magnification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setMagnificationState(state: boolean): void;

  /**
   * Indicates setting, getting, and listening to changes in configuration.
   *
   * @typedef Config<T>
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface Config<T> {
    /**
     * Setting configuration value.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value Indicates the value.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    set(value: T): Promise<void>;

    /**
     * Setting configuration value.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value Indicates the value.
     * @param { AsyncCallback<void> } callback
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    set(value: T, callback: AsyncCallback<void>): void;

    /**
     * Getting configuration value.
     *
     * @returns { Promise<T> }
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(): Promise<T>;

    /**
     * Getting configuration value.
     *
     * @param { AsyncCallback<T> } callback
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(callback: AsyncCallback<T>): void;

    /**
     * Register the listener to listen for configuration changes.
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback Indicates the listener.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    on(callback: Callback<T>): void;

    /**
     * Unregister the listener to listen for configuration changes.
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback Indicates the listener.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    off(callback?: Callback<T>): void;
  }

  /**
   * As an input parameter when enable AccessibilityExtensionAbility, it is used to receive
   * state changes during the connection.
   *
   * @interface ConnectCallback
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ConnectCallback {
    /**
     * The callback function that is invoked when AccessibilityExtensionAbility disconnects.
     *
     * @type { OnDisconnectCallback }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDisconnect: OnDisconnectCallback;
  }

  /**
   * The callback interface for AccessibilityExtensionAbility disconnected.
   *
   * @typedef { function } OnDisconnectCallback
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type OnDisconnectCallback = () => void;

  /**
   * Indicates the type of daltonization color filter.
   *
   * @typedef {'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly';

  /**
   * Indicates the type of click response time.
   *
   * @typedef {'Short' | 'Medium' | 'Long'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type ClickResponseTime = 'Short' | 'Medium' | 'Long';

  /**
   * Indicates the type of ignore repeat click interval.
   *
   * @typedef {'Shortest' | 'Short' | 'Medium' | 'Long' | 'Longest'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type RepeatClickInterval = 'Shortest' | 'Short' | 'Medium' | 'Long' | 'Longest';
}
export default config;
