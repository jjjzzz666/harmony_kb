/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit InputKit
 */

import { Callback } from './@ohos.base';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';

/**
 * The inputConsumer module provides APIs for subscribing to and unsubscribing from global shortcut keys. 
 *
 * @namespace inputConsumer
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @since 14 dynamic
 * @since 23 static
 */
declare namespace inputConsumer {
  /**
   * Represents combination key options.
   *
   * @interface KeyOptions
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyOptions {
    /**
     * Preceding key set. The number of preceding keys ranges from 0 to 4. 
     * There is no requirement on the sequence of the keys. 
     * For example, in the combination keys Ctrl+Alt+A, Ctrl+Alt are called preceding keys.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * Final key. This parameter is mandatory. A callback is triggered by the final key. 
     * For example, in the combination keys Ctrl+Alt+A, A is called the final key.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * Whether the final key is pressed. 
     * The value true indicates that the key is pressed, and the value false indicates the opposite.
     *
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isFinalKeyDown: boolean;

    /**
     * Duration for holding down the key, in μs. 
     * If the value of this field is 0, a callback is triggered immediately. 
     * If the value of this field is greater than 0 and isFinalKeyDown is true, 
     * a callback is triggered when the key keeps being pressed after the specified duration expires. 
     * If isFinalKeyDown is false, a callback is triggered when the key is released before the specified duration expires.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKeyDownDuration: int;

    /**
     * Whether to report repeated key events. The value true means to report repeated key events, and the value false means the opposite. 
     * The default value is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 18 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;
  }

  /**
   * Defines shortcut key options.
   *
   * @typedef HotkeyOptions
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  interface HotkeyOptions {
    /**
     * Modifier key set (including Ctrl, Shift, and Alt). A maximum of two modifier keys are supported. 
     * There is no requirement on the sequence of modifier keys.
     * For example, in Ctrl+Shift+Esc, Ctrl and Shift are modifier keys.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * Modified key, which can be any key except the modifier keys and Meta key. For details about the keys, see Keycode.
     * For example, in Ctrl+Shift+Esc, Esc is called the final key.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * Whether to report repeated key events. The value true means to report repeated key events, and the value false means the opposite.
     * The default value is true.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;
  }

  /**
   * Sets the key event consumption configuration.
   *
   * @typedef KeyPressedConfig
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   * @since 23 static
   */
  interface KeyPressedConfig {
    /**
     * Key value. Currently, only the KEYCODE_VOLUME_UP and KEYCODE_VOLUME_DOWN keys are supported.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16
     */
    /**
     * Key value. One of KEYCODE_VOLUME_UP/KEYCODE_VOLUME_DOWN/KEYCODE_MEDIA_PLAY_PAUSE/
     * KEYCODE_MEDIA_PREVIOUS/KEYCODE_MEDIA_NEXT.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 21 dynamic
     * @since 23 static
     */
    key: int;

    /**
     * Key event type. Currently, this parameter can only be set to 1, indicating key press.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16
     */
    /**
     * Key event type. Setting the value to 1 indicates that the key is pressed,
     * and setting the value to 2 indicates that the key is pressed and released.
     *
     * @type { int }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 21 dynamic
     * @since 23 static
     */
    action: int;

    /**
     * The value true means to report repeated key events, and the value false means the opposite. The default value is true.
     *
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    isRepeat: boolean;
  }

  /**
   * Enumerates shortcut key shield modes.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  enum ShieldMode {
    /**
     * Factory mode, which means to shield all shortcut keys.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    FACTORY_MODE = 0
  }

  /**
   * Enables listening for combination key events.
   * This API uses an asynchronous callback to return the combination key data when a combination key event that meets the specified condition occurs.
   * 
   * @param { 'key' } type - Event type. Currently, only key is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback used to return the combination key data 
   * when a combination key event that meets the specified condition occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8
   */
  /**
   * Enables listening for combination key events.
   * This API uses an asynchronous callback to return the combination key data when a combination key event that meets the specified condition occurs.
   * 
   * @param { 'key' } type - Event type. Currently, only key is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback used to return the combination key data 
   * when a combination key event that meets the specified condition occurs.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;
  
   /**
   * Subscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onKey(keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Disables listening for combination key events.
   *
   * @param { 'key' } type - Event type. Currently, only key is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback to unregister. 
   * If this parameter is not specified, listening will be disabled for all callbacks registered by the current application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8
   */
  /**
   * Disables listening for combination key events.
   *
   * @param { 'key' } type - Event type. Currently, only key is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback to unregister. 
   * If this parameter is not specified, listening will be disabled for all callbacks registered by the current application.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } [callback] - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offKey(keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Sets the shortcut key shield status.
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - Shortcut key shield mode. Currently, only FACTORY_MODE is supported, which means to shield all shortcut keys.
   * @param { boolean } isShield - Whether to enable shortcut key shielding. 
   * The value true means to enable shortcut key shielding, and the value false indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setShieldStatus(shieldMode: ShieldMode, isShield: boolean): void;

  /**
   * Obtains the shortcut key shield status.
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - Shortcut key shield mode. Currently, only FACTORY_MODE is supported, which means to shield all shortcut keys.
   * @returns { boolean } Returns true if shield event interception, returns false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getShieldStatus(shieldMode: ShieldMode): boolean;

  /**
   * Obtains all system hotkeys. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<HotkeyOptions>> } Promise used to return the list of all system shortcut keys.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>;

  /**
   * Subscribes to application shortcut key change events based on the specified options. 
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of hotkeyChange.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return the application shortcut key change event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   */
  function on(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * Listening for hotkey event.
   *
   * @param { HotkeyOptions } hotkeyOptions - Hotkey options.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return hotkey event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function onHotkeyChange(hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * Unsubscribes from application shortcut key change events.
   * 
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of hotkeyChange.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } callback - Callback to unregister. 
   * If this parameter is left unspecified, listening will be disabled for all callbacks registered for the specified shortcut key options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   */
  function off(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * Unsubscribe from hotkey event.
   *
   * @param { HotkeyOptions } hotkeyOptions - Hotkey options.
   * @param { Callback<HotkeyOptions> } [callback] - Callback used to return hotkey event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offHotkeyChange(hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * Subscribes to key press events. This API uses an asynchronous callback to return the result. 
   * If the current application is in the foreground focus window, a callback is triggered when the specified key is pressed.
   *
   * @param { 'keyPressed' } type - Event type. This parameter has a fixed value of keyPressed.
   * @param { KeyPressedConfig } options - Sets the key event consumption configuration.
   * @param { Callback<KeyEvent> } callback - Callback used to return key press events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function on(type: 'keyPressed', options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

   /**
   * Subscribes to key press events. This API uses an asynchronous callback to return the result. 
   * If the current application is in the foreground focus window, a callback is triggered when the specified key is pressed.
   *
   * @param { KeyPressedConfig } options - Key consumption settings.
   * @param { Callback<KeyEvent> } callback - Callback used to return key events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function onKeyPressed(options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

  /**
   * Unsubscribes from key press events.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { 'keyPressed' } type - Event type. This parameter has a fixed value of keyPressed.
   * @param { Callback<KeyEvent> } callback - Callback to unregister. 
   * If this parameter is not specified, listening will be disabled for all registered callbacks.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function off(type: 'keyPressed', callback?: Callback<KeyEvent>): void;

  /**
   * Cancels consumption of key events.
   *
   * @param { Callback<KeyEvent> } [callback] - Callback used to return hotkey events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offKeyPressed(callback?: Callback<KeyEvent>): void;
}

export default inputConsumer;