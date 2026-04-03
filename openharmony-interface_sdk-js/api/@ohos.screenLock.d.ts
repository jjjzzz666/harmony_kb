/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';

/**
 * systemScreenLock
 *
 * @namespace screenLock
 * @syscap SystemCapability.MiscServices.ScreenLock
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace screenLock {
  /**
   * Checks whether the screen is currently locked.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of isScreenLocked.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamic
   * @since 23 static
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function isScreenLocked(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the screen is currently locked.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamic
   * @since 23 static
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function isScreenLocked(): Promise<boolean>;

  /**
   * Checks whether the screen is currently locked.
   *
   * @returns { boolean } returns true if the screen is currently locked, returns false otherwise.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isLocked(): boolean;

  /**
   * Checks whether the screen lock of the current device is secure.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of isSecureMode.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamic
   * @since 23 static
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function isSecureMode(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the screen lock of the current device is secure.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamic
   * @since 23 static
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function isSecureMode(): Promise<boolean>;

  /**
   * Unlock the screen.
   *
   * @param { AsyncCallback<void> } callback - the callback of unlockScreen.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function unlockScreen(callback: AsyncCallback<void>): void;

  /**
   * Unlock the screen.
   *
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @since 7 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  function unlockScreen(): Promise<void>;

  /**
   * Unlock the screen.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of unlock.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Unlock the screen.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of unlock.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @throws { BusinessError } 13200003 - Invalid use.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function unlock(callback: AsyncCallback<boolean>): void;

  /**
   * Unlock the screen.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Unlock the screen.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @throws { BusinessError } 13200003 - Invalid use.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function unlock(): Promise<boolean>;

  /**
   * Lock the screen.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @param { AsyncCallback<boolean> } callback - the callback of lock.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function lock(callback: AsyncCallback<boolean>): void;

  /**
   * Lock the screen.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function lock(): Promise<boolean>;

  /**
   * Indicates the system event type related to the screenlock management service.
   *
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Indicates the system event type related to the screenlock management service. Adding strongAuthChanged and screenLockDisabledChanged.
   *
   * @typedef {('beginWakeUp' | 'endWakeUp' | 'beginScreenOn' | 'endScreenOn' | 'beginScreenOff' | 'endScreenOff' | 'unlockScreen'
   * | 'lockScreen' | 'beginExitAnimation' | 'beginSleep' | 'endSleep' | 'changeUser' | 'screenlockEnabled' | 'serviceRestart'
   * | 'strongAuthChanged' | 'screenLockDisabledChanged')}
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  type EventType =
    'beginWakeUp'
    | 'endWakeUp'
    | 'beginScreenOn'
    | 'endScreenOn'
    | 'beginScreenOff'
    | 'endScreenOff'
    | 'unlockScreen'
    | 'lockScreen'
    | 'beginExitAnimation'
    | 'beginSleep'
    | 'endSleep'
    | 'changeUser'
    | 'screenlockEnabled'
    | 'serviceRestart'
    | 'strongAuthChanged'
    | 'screenLockDisabledChanged';

  /**
   * Indicates the strong authentication reason flags used to request.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum StrongAuthReasonFlags {
    /**
     * Indicates that there are no strong authentication reason flags.
     *
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0x00000000,

    /**
     * Indicates the strong authentication reason requested after boot.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    AFTER_BOOT = 0x00000001,

    /**
     * Indicates the strong authentication reason requested after timeout.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    AFTER_TIMEOUT = 0x00000002,
 
    /**
     * Indicates the strong authentication reason requested by active request.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVE_REQUEST = 0x00000004,

    /**
     * Indicates the strong authentication reason requested by policy restriction.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    POLICY_RESTRICTION = 0x00000008
  }

  /**
   * Indicates the screen lock authentication state.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthState {
    /**
     * Indicates the screen lock is not authenticated.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    NOT_AUTHED = 0,

    /**
     * Indicates the screen lock is pre authenticated by credential.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PRE_AUTHED_BY_CREDENTIAL = 1,

    /**
     * Indicates the screen lock is pre authenticated by fingerprint.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PRE_AUTHED_BY_FINGERPRINT = 2,

    /**
     * Indicates the screen lock is pre authenticated by face.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PRE_AUTHED_BY_FACE = 3,

    /**
     * Indicates the screen lock is authenticated by credential.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    AUTHED_BY_CREDENTIAL = 4,

    /**
     * Indicates the screen lock is authenticated by fingerprint.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    AUTHED_BY_FINGERPRINT = 5,

    /**
     * Indicates the screen lock is authenticated by face.
     * 
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    AUTHED_BY_FACE = 6,
  }

  /**
   * Indicates the system event type and parameter related to the screenlock management service.
   *
   * @typedef SystemEvent
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface SystemEvent {
    /**
     * Indicates the system event type related to the screenlock management service.
     *
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: EventType;
    /**
     * Identifies the customized extended parameter of an event.
     *
     * @syscap SystemCapability.MiscServices.ScreenLock
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    params: string;
  }

  /**
   * Register system event related to screen lock service.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @param { Callback<SystemEvent> } callback - the callback of onSystemEvent.
   * @returns { boolean } returns true if register system event is success, returns false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function onSystemEvent(callback: Callback<SystemEvent>): boolean;

  /**
   * The screen lock app sends the event to the screen lock service.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @param { String } event - event type.
   * @param { int } parameter - operation result of the event.
   * @param { AsyncCallback<boolean> } callback - the callback of sendScreenLockEvent.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function sendScreenLockEvent(event: String, parameter: int, callback: AsyncCallback<boolean>): void;

  /**
   * The screen lock app sends the event to the screen lock service.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @param { String } event - event type.
   * @param { int } parameter - operation result of the event.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function sendScreenLockEvent(event: String, parameter: int): Promise<boolean>;

  /**
   * Request strong authentication for os account local userId.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK
   * @param { StrongAuthReasonFlags } reasonFlag - The strong authentication reason flag.
   * @param { int } userId - Os account local userId.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function requestStrongAuth(reasonFlag: StrongAuthReasonFlags, userId: int): Promise<void>;

  /**
   * Obtain strong authentication reason flags for os account local userId.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK
   * @param { int } userId - Os account local userId.
   * @returns { int } the strong authentication reason flags.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getStrongAuth(userId: int): int;

  /**
   * Disable screen lock showing for os account local userId. This only becomes effective when there is no password.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK
   * @param { boolean } disable - disable or enable screen lock showing.
   * @param { int } userId - Os account local userId.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function setScreenLockDisabled(disable: boolean, userId: int): Promise<boolean>;

  /**
   * Check whether screen lock is disabled for os account local userId.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK
   * @param { int } userId - Os account local userId.
   * @returns { boolean } whether screen lock is disabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function isScreenLockDisabled(userId: int): boolean;

  /**
   * Set the screen lock authentication state for os account local userId.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_INNER
   * @param { AuthState } state - the screen lock authentication state.
   * @param { int } userId - Os account local userId.
   * @param { Uint8Array } authToken - the authentication token for this state
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function setScreenLockAuthState(state: AuthState, userId: int, authToken: Uint8Array): Promise<boolean>;

  /**
   * Obtain the screen lock authentication state for os account local userId.
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK
   * @param { int } userId - Os account local userId.
   * @returns { AuthState } the screen lock authentication state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - the screenlock management service is abnormal.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getScreenLockAuthState(userId: int): AuthState;

  /**
   * Check whether the device is currently locked and the screenlock requires an identity to authenticate and unlock.
   *
   * @param { int } userId - Os account local userId.
   * @returns { boolean } Whether the device is currently locked.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13200002 - The screenlock management service is abnormal.
   * @throws { BusinessError } 13200004 - The userId is not same as the caller, and is not allowed for the caller.
   * @syscap SystemCapability.MiscServices.ScreenLock
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function isDeviceLocked(userId: int): boolean;
}

export default screenLock;