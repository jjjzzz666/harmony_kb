/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type hdrCapability from './@ohos.graphics.hdrCapability';

/**
 * Interface of display manager.
 *
 * @namespace display
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @since 7
 */
/**
 * Interface of display manager.
 *
 * @namespace display
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @since 10
 */
/**
 * Interface of display manager.
 *
 * @namespace display
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace display {
  /**
   * Obtain the default display.
   *
   * @param { AsyncCallback<Display> } callback the result of display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * Obtain the default display.
   *
   * @returns { Promise<Display> } the result of display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(): Promise<Display>;

  /**
   * Obtain the default display.
   *
   * @returns { Display } the result of display
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Obtain the default display.
   *
   * @returns { Display } the result of display
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Obtain the default display.
   *
   * @returns { Display } the result of display
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Display is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultDisplaySync(): Display;

  /**
   * Obtain the primary display. For devices other than 2in1 devices, the Display object obtained is the built-in screen. 
   * For 2in1 devices with an external screen, the Display object obtained is the primary screen.
   * For 2in1 devices without an external screen, the Display object obtained is the built-in screen.
   *
   * @returns { Display } the result of primary display
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Invalid display id.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrimaryDisplaySync(): Display;

  /**
   * Obtain the target display.
   *
   * @param { long } displayId Display id to query. This parameter should be greater than or equal to 0.
   * @returns { Display } the result of display
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *                                                                   2. Incorrect parameter types.
   *                                                                   3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally. Possible causes:
   *    Display is null, display id corresponding display does not exist.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getDisplayByIdSync(displayId: long): Display;

  /**
   * Obtain all displays.
   *
   * @param { AsyncCallback<Array<Display>> } callback the result of all displays
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.display#getAllDisplays
   */
  function getAllDisplay(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtain all displays.
   *
   * @returns { Promise<Array<Display>> } the result of all displays
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.display#getAllDisplays
   */
  function getAllDisplay(): Promise<Array<Display>>;

  /**
   * Obtain all displays.
   *
   * @param { AsyncCallback<Array<Display>> } callback the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Obtain all displays.
   *
   * @param { AsyncCallback<Array<Display>> } callback the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplays(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtain all displays.
   *
   * @returns { Promise<Array<Display>> } the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Obtain all displays.
   *
   * @returns { Promise<Array<Display>> } the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplays(): Promise<Array<Display>>;

  /**
   * Obtain all display physical resolution
   *
   * @returns { Promise<Array<DisplayPhysicalResolution>> } the result of all display physical resolution
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplayPhysicalResolution(): Promise<Array<DisplayPhysicalResolution>>;

  /**
   * Check whether there is a privacy window on the current display.
   *
   * @param { long } displayId Display id to query. This parameter should be greater than or equal to 0.
   * @returns { boolean } true means there is a privacy window on the current display
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hasPrivateWindow(displayId: long): boolean;

  /**
   * Register the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change
   * @param { Callback<long> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Register the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change
   * @param { Callback<long> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Register the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change
   * @param { Callback<long> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void;

  /**
   * Register the callback for display add events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onAdd(callback: Callback<long>): void;
  
  /**
   * Register the callback for display remove events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onRemove(callback: Callback<long>): void;

  /**
   * Register the callback for display changes.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onChange(callback: Callback<long>): void;

  /**
   * Register the callback for changes of display specified attributes.
   *
   * @param { Array<string> } displayAttributeOption - The display attributes requiring callback
   * @param { Callback<long> } callback - Callback used to return the display id of changed
   * @throws { BusinessError } 801 - Capability not supported. Function onChangeWithAttribute can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   *     Possible causes: Internal IPC error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void;

  /**
   * Unregister the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change event
   * @param { Callback<long> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Unregister the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change event
   * @param { Callback<long> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Unregister the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change event
   * @param { Callback<long> } [callback] the display id of changed
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void;

  /**
   * Unregister the callback for display add events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offAdd(callback?: Callback<long>): void;
  
  /**
   * Unregister the callback for display remove events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offRemove(callback?: Callback<long>): void;
  
  /**
   * Unregister the callback for display changes.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offChange(callback?: Callback<long>): void;

  /**
   * Register the callback for private mode changes.
   *
   * @param { 'privateModeChange' } type the event of private mode changes
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'privateModeChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for private mode changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onPrivateModeChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for private mode changes.
   *
   * @param { 'privateModeChange' } type the event of private mode changes
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'privateModeChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for private mode changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offPrivateModeChange(callback?: Callback<boolean>): void;

  /**
   * Check whether the device is foldable.
   *
   * @returns { boolean } true means the device is foldable.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Check whether the device is foldable.
   *
   * @returns { boolean } true means the device is foldable.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Check whether the device is foldable.
   *
   * @returns { boolean } true means the device is foldable.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function isFoldable(): boolean;

  /**
   * Get the current fold status of the foldable device.
   *
   * @returns { FoldStatus } fold status of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Get the current fold status of the foldable device.
   *
   * @returns { FoldStatus } fold status of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Get the current fold status of the foldable device.
   *
   * @returns { FoldStatus } fold status of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getFoldStatus(): FoldStatus;

  /**
   * Register the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Register the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Register the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void;

  /**
   * Register the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldStatusChange(callback: Callback<FoldStatus>): void;

  /**
   * Unregister the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Unregister the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Unregister the callback for fold status changes.
   *
   * @param { 'foldStatusChange' } type the event of fold status changes
   * @param { Callback<FoldStatus> } [callback] Callback used to return the current fold status of device
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function off(type: 'foldStatusChange', callback?: Callback<FoldStatus>): void;

  /**
   * Unregister the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldStatusChange(callback?: Callback<FoldStatus>): void;

  /**
   * Register the callback for fold angle changes.
   *
   * @param { 'foldAngleChange' } type the event of fold angle changes.
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Register the callback for fold angle changes.
   *
   * @param { 'foldAngleChange' } type the event of fold angle changes.
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function on(type: 'foldAngleChange', callback: Callback<Array<double>>): void;

  /**
   * Register the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldAngleChange(callback: Callback<Array<double>>): void;

  /**
   * Unregister the callback for fold angle changes.
   *
   * @param { 'foldAngleChange' } type the event of fold angle changes.
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Unregister the callback for fold angle changes.
   *
   * @param { 'foldAngleChange' } type the event of fold angle changes.
   * @param { Callback<Array<double>> } [callback] Callback used to return the current fold angle of device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function off(type: 'foldAngleChange', callback?: Callback<Array<double>>): void;

  /**
   * Unregister the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldAngleChange(callback?: Callback<Array<double>>): void;

  /**
   * Register the callback for device capture status changes.
   *
   * @param { 'captureStatusChange' } type the event of capture status changes.
   * @param { Callback<boolean> } callback Callback used to return the device capture status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'captureStatusChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the device capture, casting, or recording status.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onCaptureStatusChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for device capture status changes.
   *
   * @param { 'captureStatusChange' } type the event of capture status changes.
   * @param { Callback<boolean> } callback Callback used to return the device capture status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'captureStatusChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offCaptureStatusChange(callback?: Callback<boolean>): void;

  /**
   * Check whether the device is captured, projected, or recorded.
   *
   * @returns { boolean } true means the device is captured, projected, or recorded.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isCaptured(): boolean;

  /**
   * Get the display mode of the foldable device.
   *
   * @returns { FoldDisplayMode } display mode of the foldable device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Get the display mode of the foldable device.
   *
   * @returns { FoldDisplayMode } display mode of the foldable device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Get the display mode of the foldable device.
   *
   * @returns { FoldDisplayMode } display mode of the foldable device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getFoldDisplayMode(): FoldDisplayMode;

  /**
   * Change the display mode of the foldable device.
   *
   * @param { FoldDisplayMode } mode target display mode to change.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode): void;

  /**
   * Change the display mode of the foldable device.
   *
   * @param { FoldDisplayMode } mode target display mode to change.
   * @param { string } reason set display mode reason.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode, reason: string): void;

  /**
   * Register the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Register the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Register the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>): void;

  /**
   * Register the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldDisplayModeChange(callback: Callback<FoldDisplayMode>): void;

  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { 'foldDisplayModeChange' } type the event of fold display mode changes
   * @param { Callback<FoldDisplayMode> } [callback] Callback used to return the current fold display mode
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function off(type: 'foldDisplayModeChange', callback?: Callback<FoldDisplayMode>): void;

  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } [callback] - Unregister the callback function.
   *		If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldDisplayModeChange(callback?: Callback<FoldDisplayMode>): void;

  /**
   * Get the fold crease region in the current display mode.
   *
   * @returns { FoldCreaseRegion } fold crease region in the current display mode.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Get the fold crease region in the current display mode.
   *
   * @returns { FoldCreaseRegion } fold crease region in the current display mode.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getCurrentFoldCreaseRegion(): FoldCreaseRegion;

  /**
   * set fold status locked or not.
   *
   * @param { boolean } locked - fold status is locked or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *      2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setFoldStatusLocked(locked: boolean): void;

    /**
   * Create virtual screen.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { VirtualScreenConfig } config Indicates the options of the virtual screen.
   * @returns { Promise<long> } Promise used to return the created virtual screen id
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *      2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function createVirtualScreen can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function createVirtualScreen(config: VirtualScreenConfig): Promise<long>;

  /**
   * Destroy virtual screen.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId Indicates the screen id of the virtual screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function destroyVirtualScreen can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function destroyVirtualScreen(screenId: long): Promise<void>;
  
  /**
   * Set surface for the virtual screen.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId Indicates the screen id of the virtual screen.
   * @param { string } surfaceId Indicates the surface id.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function setVirtualScreenSurface can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function setVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>;

  /**
   * Make screen as unique-screen
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId Indicates the unique screen id. It's type should be int.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.function makeUnique can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function makeUnique(screenId: long): Promise<void>;

  /**
   * Add the list of window ids to the block list which won't display on the virtual screen
   *
   * @param { Array<int> } windowIds - The list of window ids that do not want to display on the virtual screen
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function addVirtualScreenBlocklist can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function addVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * Remove the list of window ids from the block list which won't display on the virtual screen
   *
   * @param { Array<int> } windowIds - The list of window ids that want to display on the virtual screen
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function removeVirtualScreenBlocklist can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * Convert global coordinates to relative coordinates.
   *
   * @param { Position } position - The global coordinates to be converted.
   * @param { long } [displayId] - The optional display id indicate the display relative to. 
   * If not specified,use the display where the coodinates are located.
   * @returns { RelativePosition } The relative coordinates.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition;

  /**
   * Convert relative coordinates to global coordinates.
   *
   * @param { RelativePosition } relativePosition - The relative coordinates to be converted.
   * @returns { Position } The global coordinates.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertRelativeToGlobalCoordinate(relativePosition: RelativePosition): Position;

  /**
   * Obtain the display brightnessInfo.
   * 
   * @param { long } displayId Display id to query. This parameter should be greater than or equal to 0.
   * @returns { BrightnessInfo } The current brightnessInfo of the display.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getBrightnessInfo(displayId: long): BrightnessInfo;

  /**
   * Defines the brightness callback.
   *
   * @typedef {function}
   * @param { T1 } data1 - the data will be used in the callback.
   * @param { T2 } data2 - the data will be used in the callback.
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  type BrightnessCallback<T1, T2> = (data1: T1, data2: T2) => void;

  /**
   * Register the callback for brightness info changes.
   *
   * @param { 'brightnessInfoChange' } type - the event of display brightness info changes.
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - Callback used to return the display corresponding
   *     brightness info.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function on(type: 'brightnessInfoChange', callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Unregister the callback for brightness info changes.
   *
   * @param { 'brightnessInfoChange' } type - the event of display brightness info changes.
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - Callback used to return the display corresponding
   *     brightness info. If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function off(type: 'brightnessInfoChange', callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Register the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - Callback used to return the display if and
   *     corresponding brightness info.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onBrightnessInfoChange(callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Unregister the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - Callback used to return the display corresponding
   *     brightness info. If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offBrightnessInfoChange(callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * The parameter for creating virtual screen.
   *
   * @interface VirtualScreenConfig
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  interface VirtualScreenConfig {
    /**
     * Indicates the name of the virtual screen.
     *
     * @type { string }
     * @syscap  SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Indicates the width of the virtual screen.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Indicates the height of the virtual screen.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Indicates the density of the virtual screen.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * Indicates the surface id of the virtual screen.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * Indicates whether the virtual screen supports focus.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;
  }

  /**
   * Enumerates the fold status. For dual-fold axis devices, when oriented with the charging port at the bottom,
   * the hinges are identified from right to left as the first and second fold axes, respectively.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Enumerates the fold status. For dual-fold axis devices, when oriented with the charging port at the bottom,
   * the hinges are identified from right to left as the first and second fold axes, respectively.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Enumerates the fold status. For dual-fold axis devices, when oriented with the charging port at the bottom,
   * the hinges are identified from right to left as the first and second fold axes, respectively.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * Fold Status Unknown.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Fold Status Unknown.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Fold Status Unknown.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FOLD_STATUS_UNKNOWN = 0,
    /**
     * Fold Status Expanded. For dual-fold axis devices, the first fold axis is fully open,
     * and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Fold Status Expanded. For dual-fold axis devices, the first fold axis is fully open,
     * and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Fold Status Expanded. For dual-fold axis devices, the first fold axis is fully open,
     * and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED = 1,
    /**
     * Fold Status Folded. For dual-fold axis devices, the first fold axis is folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Fold Status Folded. For dual-fold axis devices, the first fold axis is folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED = 2,
    /**
     * Fold Status Half Folded. Somehow between fully open and completely closed.
     * For dual-fold axis devices, the first fold axis is half-folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Fold Status Half Folded. Somehow between fully open and completely closed.
     * For dual-fold axis devices, the first fold axis is half-folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Fold Status Half Folded. Somehow between fully open and completely closed.
     * For dual-fold axis devices, the first fold axis is half-folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED = 3,
    /**
     * Fold Status Expanded With Second Expanded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_EXPANDED = 11,
    /**
     * Fold Status Expanded With Second Half Folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_HALF_FOLDED = 21,
    /**
     * Fold Status Folded With Second Expanded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED = 12,
    /**
     * Fold Status Folded With Second Half Folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_HALF_FOLDED = 22,
    /**
     * Fold Status Half Folded With Second Expanded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_EXPANDED = 13,
    /**
     * Fold Status Half Folded With Second Half Folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_HALF_FOLDED = 23
  }

  /**
   * Enumerates the fold display mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Enumerates the fold display mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Enumerates the fold display mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum FoldDisplayMode {
    /**
     * Unknown Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Unknown Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_UNKNOWN = 0,
    /**
     * Full Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Full Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_FULL = 1,
    /**
     * Main Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Main Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_MAIN= 2,
    /**
     * Sub Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Sub Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_SUB= 3,
    /**
     * Coordination Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Coordination Display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_COORDINATION
  }

  /**
   * Enumerates the display states.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Enumerates the display states.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum DisplayState {
    /**
     * Unknown.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Unknown.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_UNKNOWN = 0,
    /**
     * Screen off.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Screen off.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,
    /**
     * Screen on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Screen on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * Doze, but it will update for some important system messages.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Doze, but it will update for some important system messages.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_DOZE = 3,
    /**
     * Doze and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Doze and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_DOZE_SUSPEND = 4,
    /**
     * VR node.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * VR node.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_VR = 5,
    /**
     * Screen on and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Screen on and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_ON_SUSPEND = 6
  }

  /**
   * Enumerates the display orientation.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Enumerates the display orientation.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * Indicate that the display content is in portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicate that the display content is in portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PORTRAIT = 0,

    /**
     * Indicate that the display content is in landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicate that the display content is in landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * Indicate that the display content is in the opposite direction of the portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicate that the display content is in the opposite direction of the portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 2,

    /**
     * Indicate that the display content is in the opposite direction of the landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicate that the display content is in the opposite direction of the landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 3
  }

  /**
   * Indicate the source mode of the display
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum DisplaySourceMode {
    /**
     * Indicate that the display is not in use.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,
 
    /**
     * Indicate that the display is the main display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MAIN = 1,

    /**
     * Indicate that the display is in mirror mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Indicate that the display is in extend mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    EXTEND = 3,

    /**
     * Indicate that the display stands alone.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    ALONE = 4
  }

  /**
   * Enumerates the type of round corner.
   *
   * @enum { int }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum CornerType {
    /**
     * The round corner in the top left.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_LEFT = 0,
 
    /**
     * The round corner in the top right.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 1,

    /**
     * The round corner in the bottom right.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT = 2,

    /**
     * The round corner in the bottom left.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT = 3
  }

  /**
   * Round corner information of display.
   *
   * @interface RoundedCorner
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface RoundedCorner {
    /**
     * The type of round corner.
     *
     * @type { CornerType }
     * @readonly
     * @syscap  SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly type: CornerType;

    /**
     * The center coordinates of round corner.
     *
     * @type { Position }
     * @readonly
     * @syscap  SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly position: Position;

    /**
     * The radius of round corner.
     *
     * @type { int }
     * @readonly
     * @syscap  SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly radius: int;
  }

  /**
   * Enumerates the screen shape.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  enum ScreenShape {
    /**
     *The screen shape is rectangle.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    RECTANGLE = 0,
    /**
     *The screen shape is round.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ROUND = 1
  }

  /**
   * Fold Crease Region
   *
   * @interface FoldCreaseRegion
   * @syscap SystemCapability.Window.SessionManager
   * @since 10
   */
  /**
   * Fold Crease Region
   *
   * @interface FoldCreaseRegion
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface FoldCreaseRegion {
    /**
     * The display ID is used to identify the screen where the crease is located.
     *
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * The display ID is used to identify the screen where the crease is located.
     *
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly displayId: long;

    /**
     * Crease Region.
     *
     * @type { Array<Rect> }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @since 10
     */
    /**
     * Crease Region.
     *
     * @type { Array<Rect> }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly creaseRects: Array<Rect>;
  }

  /**
   * Display Brightness Info.
   *
   * @interface BrightnessInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessInfo {
    /**
     * Standard Dynamic Range.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly sdrNits: double;
    /**
     * Current Brightness Dynamic Margin.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly currentHeadroom: double;
    /**
     * Current Maximum Brightness Margin.
     *
     * @type { double }
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly maxHeadroom: double;
  }

  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * The X-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * The X-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * The Y-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * The Y-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * Width of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Width of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Height of the rectangle, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * Curved area rects of the waterfall display.
   *
   * @interface WaterfallDisplayAreaRects
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Curved area rects of the waterfall display.
   *
   * @interface WaterfallDisplayAreaRects
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WaterfallDisplayAreaRects {
    /**
     * Indicates the size of left side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates the size of left side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly left: Rect;

    /**
     * Indicates the size of right side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates the size of right side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly right: Rect;

    /**
     * Indicates the size of top side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates the size of top side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly top: Rect;

    /**
     * Indicates the size of bottom side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates the size of bottom side curved area of the waterfall screen.
     *
     * @type { Rect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly bottom: Rect;
  }

  /**
   * Cutout information of the display.
   *
   * @interface CutoutInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Cutout information of the display.
   *
   * @interface CutoutInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CutoutInfo {
    /**
     * Bounding rectangles of the cutout areas of the display.
     *
     * @type { Array<Rect> }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Bounding rectangles of the cutout areas of the display.
     *
     * @type { Array<Rect> }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly boundingRects: Array<Rect>;

    /**
     * Rectangles of curved parts on each side of a waterfall display.
     *
     * @type { WaterfallDisplayAreaRects }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Rectangles of curved parts on each side of a waterfall display.
     *
     * @type { WaterfallDisplayAreaRects }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects;
  }

  /**
   * Define display physical resolution.
   *
   * @interface DisplayPhysicalResolution
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DisplayPhysicalResolution {
    /**
     * fold display mode.
     *
     * @type { FoldDisplayMode }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    foldDisplayMode: FoldDisplayMode;

    /**
     * Display physical width, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalWidth: long;

    /**
     * Display physical height, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalHeight: long;
  }

  /**
   * Define properties of the display. They cannot be updated automatically.
   *
   * @interface Display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Define properties of the display. They cannot be updated automatically.
   *
   * @interface Display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Define properties of the display. They cannot be updated automatically.
   *
   * @interface Display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Display {
    /**
     * Display ID.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display ID.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display ID.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Display name.
     *
     * @type { string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display name.
     *
     * @type { string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether the display is alive.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the display is alive.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    alive: boolean;

    /**
     * The state of display.
     *
     * @type { DisplayState }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The state of display.
     *
     * @type { DisplayState }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    state: DisplayState;

    /**
     * Refresh rate, in Hz.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Refresh rate, in Hz.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    refreshRate: int;

    /**
     * Rotation degrees of the display.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * An enumeration value for rotation degrees of the display.
     * The value 0 indicates that the screen of the display rotates clockwise by 0°.
     * The value 1 indicates that the screen of the display rotates clockwise by 90°.
     * The value 2 indicates that the screen of the display rotates clockwise by 180°.
     * The value 3 indicates that the screen of the display rotates clockwise by 270°.
     * 
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    rotation: int;

    /**
     * Display width, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display width, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display width, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Display height, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display height, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display height, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Display available width, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableWidth: long;

    /**
     * Display available height, in pixels.
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableHeight: long;

    /**
     * Display resolution, that is, the number of pixels per inch.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display resolution, that is, the number of pixels per inch.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Display resolution, that is, the number of pixels per inch.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    densityDPI: double;

    /**
     * Display orientation.
     *
     * @type { Orientation }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display orientation.
     *
     * @type { Orientation }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    orientation: Orientation;

    /**
     * Display density, in pixels. which is the scaling coefficient between physical pixels and logical pixels. The value for a low-resolution display is 1.0.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display density, in pixels. which is the scaling coefficient between physical pixels and logical pixels. The value for a low-resolution display is 1.0.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    densityPixels: double;

    /**
     * Text scale density of the display.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Text scale density of the display.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Text scale density of the display.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    scaledDensity: double;

    /**
     * DPI on the x-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * DPI on the x-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * DPI on the x-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    xDPI: double;

    /**
     * DPI on the y-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * DPI on the y-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * DPI on the y-axis.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    yDPI: double;

    /**
     * The shape of screen
     *
     * @type { ?ScreenShape }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    screenShape?: ScreenShape;

    /**
     * All supported color spaces.
     *
     * @type { Array<colorSpaceManager.ColorSpace> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    /**
     * All supported color spaces.
     *
     * @type { Array<colorSpaceManager.ColorSpace> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    colorSpaces: Array<colorSpaceManager.ColorSpace>;

    /**
     * All supported HDR formats.
     *
     * @type { Array<hdrCapability.HDRFormat> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    /**
     * All supported HDR formats.
     *
     * @type { Array<hdrCapability.HDRFormat> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hdrFormats: Array<hdrCapability.HDRFormat>;

    /**
     * The source mode of display
     *
     * @type { ?DisplaySourceMode }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sourceMode?: DisplaySourceMode;
 
    /**
     * The X-axis coordinate of the top-left corner of the display relative to the main display.
     *
     * @type { ?long }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    x?: long;
  
    /**
     * The Y-axis coordinate of the top-left corner of the display relative to the main display.
     *
     * @type { ?long }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    y?: long;

    /**
     * All supported refresh rates.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedRefreshRates?: Array<int>;

    /**
     * Get information about all the rounded corners.
     * 
     * @returns { Array<RoundedCorner> } The rounded corners.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    getRoundedCorner(): Array<RoundedCorner>;

    /**
     * Obtain the cutout info of the display.
     *
     * @param { AsyncCallback<CutoutInfo> } callback
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtain the cutout info of the display.
     *
     * @param { AsyncCallback<CutoutInfo> } callback
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *      1. This display is abnormal.
     *      2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCutoutInfo(callback: AsyncCallback<CutoutInfo>): void;

    /**
     * Obtain the cutout info of the display.
     *
     * @returns { Promise<CutoutInfo> }
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtain the cutout info of the display.
     *
     * @returns { Promise<CutoutInfo> }
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCutoutInfo(): Promise<CutoutInfo>;

    /**
     * Check if current display has immersive window.
     *
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(callback: AsyncCallback<boolean>): void;

    /**
     * Check if current display has immersive window.
     *
     * @returns { Promise<boolean> }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(): Promise<boolean>;

    /**
     * Obtain the available area of the display.
     *
     * @returns { Promise<Rect> }
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *      1. This display is abnormal.
     *      2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableArea(): Promise<Rect>;

    /**
     * Get the live crease region in the current display mode.
     *
     * @returns { FoldCreaseRegion } Fold crease region in the current display mode.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    getLiveCreaseRegion(): FoldCreaseRegion;

    /**
     * Register the callback for available area changes.
     *
     * @param { 'availableAreaChange' } type - the event of available area changes
     * @param { Callback<Rect> } callback - Callback used to return the available area
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'availableAreaChange', callback: Callback<Rect>): void;

    /**
     * Register the callback for available area changes.
     *
     * @param { Callback<Rect> } callback - Callback used to return the available area
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onAvailableAreaChange(callback: Callback<Rect>): void;

    /**
     * Unregister the callback for available area changes.
     *
     * @param { 'availableAreaChange' } type - the event of available area changes
     * @param { Callback<Rect> } [callback] - Callback used to return the available area
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'availableAreaChange', callback?: Callback<Rect>): void;

    /**
     * Unregister the callback for available area changes.
     *
     * @param { Callback<Rect> } [callback] - Unregister the callback function.
     *		If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offAvailableAreaChange(callback?: Callback<Rect>): void;

    /**
     * Get current display capability, including foldstatus, displaymode, rotation, and orientation information.
     *
     * @returns { string } Indicates the current foldstatus, displaymode, rotation, and orientation information.
     * @throws { BusinessError } 801 - Capability not supported.Function getDisplayCapability can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    getDisplayCapability(): string;
  }

  /**
   * Coordinates of a point.
   * 
   * @interface Position
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface Position {
    /**
     * Indicates the x-axis coordinates
     * 
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: long;

    /**
     * Indicates the y-axis coordinates
     * 
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: long;
  }

  /**
   * Coordinates of a point relative to specified display.
   * 
   * @interface RelativePosition
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface RelativePosition {
    /**
     * Indicates the display.
     * 
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * Indicates the coordinates relative to the display.
     * 
     * @type { Position }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    position: Position;
  }
}

export default display;
