/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit TelephonyKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import type image from './@ohos.multimedia.image';

/**
 * Provides methods related to call management.
 *
 * @namespace call
 * @syscap SystemCapability.Telephony.CallManager
 * @since 6
 */
/**
 * Provides methods related to call management.
 *
 * @namespace call
 * @syscap SystemCapability.Telephony.CallManager
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace call {
  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialOptions } options - Indicates additional information carried in the call.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for getting the result of the call.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialOptions } options - Indicates additional information carried in the call.
   * @returns { Promise<boolean> } Returns the result of the call.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>;

  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for getting the result of the call.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialCallOptions } options - Indicates additional information carried in the call.
   * @param { AsyncCallback<void> } callback - The callback of dialCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, options: DialCallOptions, callback: AsyncCallback<void>): void;

  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialCallOptions } options - Indicates additional information carried in the call.
   * @returns { Promise<void> } The promise returned by the dialCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, options?: DialCallOptions): Promise<void>;

  /**
   * Makes a call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<void> } callback - The callback of dialCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<void> } callback - The callback of makeCall.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   */
  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<void> } callback - The callback of makeCall.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @returns { Promise<void> } The promise returned by the makeCall.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   */
  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @returns { Promise<void> } The promise returned by the makeCall.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function makeCall(phoneNumber: string): Promise<void>;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { Context } context - Indicates the context.
   * @param { string } phoneNumber - Indicates the called number.
   * @returns { Promise<void> } The promise returned by the makeCall.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function makeCall(context: Context, phoneNumber: string): Promise<void>;

  /**
   * Checks whether a call is ongoing.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of hasCall. Returns {@code true} if at least one call is
   * not in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a call is ongoing.
   *
   * @returns { Promise<boolean> } Returns {@code true} if at least one call is not
   * in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(): Promise<boolean>;

  /**
   * Checks whether a call is ongoing.
   *
   * @returns { boolean } Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE}
   * state; returns {@code false} otherwise.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function hasCallSync(): boolean;

  /**
   * Obtains the call state.
   *
   * If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}.
   * In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @param { AsyncCallback<CallState> } callback - Indicates the callback for getting the call state.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(callback: AsyncCallback<CallState>): void;

  /**
   * Obtains the call state.
   *
   * If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}.
   * In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @returns { Promise<CallState> } Returns the call state.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(): Promise<CallState>;

  /**
   * Obtains the call state.
   *
   * If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}. In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @returns { CallState } Returns the call state.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function getCallStateSync(): CallState;

  /**
   * Stops the ringtone.
   *
   * If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of muteRinger.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function muteRinger(callback: AsyncCallback<void>): void;

  /**
   * Stops the ringtone.
   *
   * If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } The promise returned by the muteRinger.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function muteRinger(): Promise<void>;

  /**
   * Checks whether a device supports voice calls.
   *
   * The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia
   * subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching
   * (even if the device supports OTT calls), {@code false} is returned.
   *
   * @returns { boolean } Returns {@code true} if the device supports voice calls; returns {@code false} otherwise.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function hasVoiceCapability(): boolean;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { EmergencyNumberOptions } options - Indicates the additional information for emergency numbers.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for isEmergencyPhoneNumber.
   * Returns {@code true} if the phone number is on the emergency number list. Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options: EmergencyNumberOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { EmergencyNumberOptions } options - Indicates the additional information for emergency numbers.
   * @returns { Promise<boolean> } Returns {@code true} if the phone number is on the emergency number list.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options?: EmergencyNumberOptions): Promise<boolean>;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for isEmergencyPhoneNumber.
   * Returns {@code true} if the phone number is on the emergency number list. Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { NumberFormatOptions } options - Indicates the country code option.
   * @param { AsyncCallback<string> } callback - Indicates the callback to obtain a formatted phone number.
   * Returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { NumberFormatOptions } options - Indicates the country code option.
   * @returns { Promise<string> } Returns the phone number after being formatted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { AsyncCallback<string> } callback - Indicates the callback to obtain a formatted phone number.
   * Returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number into an E.164 representation.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { string } countryCode - Indicates a two-digit country code defined in ISO 3166-1.
   * @param { AsyncCallback<string> } callback - Returns an E.164 number.
   * Returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number into an E.164 representation.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { string } countryCode - Indicates a two-digit country code defined in ISO 3166-1.
   * @returns { Promise<string> } Returns an E.164 number.
   * Returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>;

  /**
   * Answers the incoming call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call to answer.
   * @param { AsyncCallback<void> } callback - The callback of answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function answerCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Answers the incoming call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call to answer.
   * @returns { Promise<void> } The promise returned by the answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function answerCall(callId?: int): Promise<void>;

  /**
   * Answers the incoming call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { AsyncCallback<void> } callback - The callback of answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  /**
   * Answers the incoming call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - The callback of answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  function answerCall(callback: AsyncCallback<void>): void;

  /**
   * Answers the incoming video call
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { VideoStateType } videoState - Indicates the answer the call with video or voice.
   * @param { int } callId - Indicates the identifier of the call to answer.
   * @returns { Promise<void> } The promise returned by the answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function answerCall(videoState: VideoStateType, callId: int): Promise<void>;

  /**
   * Answers the incoming rtt
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { VideoStateType } videoState - Indicates the answer the call with video or voice.
   * @param { int } callId - Indicates the identifier of the call to answer.
   * @param { boolean } isRtt - Indicates the call is rtt or not.
   * @returns { Promise<void> } The promise returned by the answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function answerCall(videoState: VideoStateType, callId: int, isRtt: boolean): Promise<void>;

  /**
   * Hang up the foreground call.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call to hangup.
   * @param { AsyncCallback<void> } callback - The callback of hangUpCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hangUpCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Hang up the foreground call.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call to hangup.
   * @returns { Promise<void> } The promise returned by the hangUpCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hangUpCall(callId?: int): Promise<void>;

  /**
   * Hang up the foreground call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of hangUpCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  /**
   * Hang up the foreground call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE or
   * ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - The callback of hangUpCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  function hangUpCall(callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call to reject.
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId: int, options: RejectMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call to reject.
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @returns { Promise<void> } The promise returned by the rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId?: int, options?: RejectMessageOptions): Promise<void>;

  /**
   * Reject the incoming call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  /**
   * Reject the incoming call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  function rejectCall(callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call without callId.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(options: RejectMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of holdCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function holdCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the holdCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function holdCall(callId: int): Promise<void>;

  /**
   * Cancel call hold status.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of unHoldCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unHoldCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the unHoldCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unHoldCall(callId: int): Promise<void>;

  /**
   * Switch call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of switchCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function switchCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Switch call.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the switchCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function switchCall(callId: int): Promise<void>;

  /**
   * Merge calls, merge two calls into conference calls.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of combineConference.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300007 - The number of conference calls exceeds the limit.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function combineConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Merge calls, merge two calls into conference calls.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the combineConference.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300007 - The number of conference calls exceeds the limit.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function combineConference(callId: int): Promise<void>;

  /**
   * Get the main call Id.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<int> } callback - Indicates the callback for getting the main call id.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getMainCallId(callId: int, callback: AsyncCallback<int>): void;

  /**
   * Get the main call Id.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<int> } Returns the main call id.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getMainCallId(callId: int): Promise<int>;

  /**
   * Get the list of sub-call Ids.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<Array<string>> } callback - Indicates the callback for getting the list of sub call ids.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSubCallIdList(callId: int, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the list of sub-call Ids.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<Array<string>> } Returns the list of sub call ids.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSubCallIdList(callId: int): Promise<Array<string>>;

  /**
   * Get the call Id list of the conference.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<Array<string>> } callback - Indicates the callback for getting
   * the call id list of conference calls.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallIdListForConference(callId: int, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the call Id list of the conference.
   *
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<Array<string>> } Returns the call id list of conference calls.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallIdListForConference(callId: int): Promise<Array<string>>;

  /**
   * Get call waiting status.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<CallWaitingStatus> } callback - Indicates the callback for getting the call waiting status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallWaitingStatus(slotId: int, callback: AsyncCallback<CallWaitingStatus>): void;

  /**
   * Get call waiting status.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<CallWaitingStatus> } Returns the callback for getting the call waiting status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallWaitingStatus(slotId: int): Promise<CallWaitingStatus>;

  /**
   * Set call waiting.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { boolean } activate - Indicates whether to activate or call wait.
   * @param { AsyncCallback<void> } callback - The callback of setCallWaiting.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCallWaiting(slotId: int, activate: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set call waiting.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { boolean } activate - Indicates whether to activate or call wait.
   * @returns { Promise<void> } The promise returned by the setCallWaiting.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCallWaiting(slotId: int, activate: boolean): Promise<void>;

  /**
   * Start DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } character - Indicates the characters sent.
   * @param { AsyncCallback<void> } callback - The callback of startDTMF.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startDTMF(callId: int, character: string, callback: AsyncCallback<void>): void;

  /**
   * Start DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } character - Indicates the characters sent.
   * @returns { Promise<void> } The promise returned by the startDTMF.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startDTMF(callId: int, character: string): Promise<void>;

  /**
   * Stop DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of stopDTMF.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopDTMF(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Stop DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the stopDTMF.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopDTMF(callId: int): Promise<void>;

  /**
   * Continue post-dial DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { boolean } proceed - Indicates whether to continue the post-dial DTMF.
   * @param { AsyncCallback<void> } callback - The callback of postDialProceed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function postDialProceed(callId: int, proceed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Continue post-dial DTMF(Dual Tone Multi Frequency).
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { boolean } proceed - Indicates whether to continue the post-dial DTMF.
   * @returns { Promise<void> } The promise returned by the postDialProceed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function postDialProceed(callId: int, proceed: boolean): Promise<void>;

  /**
   * Judge whether the emergency call is in progress.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - The callback of isInEmergencyCall.
   * Returns {@code true} if the call is in emergency; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function isInEmergencyCall(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether the emergency call is in progress.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } Returns {@code true} if the call is in emergency; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function isInEmergencyCall(): Promise<boolean>;

  /**
   * Subscribe to the callDetailsChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - Event type. Indicates the callDetailsChange event to be subscribed to.
   * @param { Callback<CallAttributeOptions> } callback - Indicates the callback for getting the result of call details.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   */
  function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void;

  /**
   * Unsubscribe from the callDetailsChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - Event type. Indicates the callDetailsChange event to unsubscribe from.
   * @param { Callback<CallAttributeOptions> } callback - Indicates the callback to unsubscribe from
   * the callDetailsChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   */
  function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void;

  /**
   * Subscribe to the callEventChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - Event type. Indicates the callEventChange event to be subscribed to.
   * @param { Callback<CallEventOptions> } callback - Indicates the callback for getting the call event id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void;

  /**
   * Unsubscribe from the callEventChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - Event type. Indicates the callEventChange event to unsubscribe from.
   * @param { Callback<CallEventOptions> } callback - Indicates the callback to unsubscribe from the callEventChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void;

  /**
   * Subscribe to the callDisconnectedCause event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - Event type. Indicates the callDisconnectedCause event to be subscribed to.
   * @param { Callback<DisconnectedDetails> } callback - Indicates the callback for getting the call disconnection reason.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void;

  /**
   * Unsubscribe from the callDisconnectedCause event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - Event type. Indicates the callDisconnectedCause event to unsubscribe from.
   * @param { Callback<DisconnectedDetails> } callback - Indicates the callback used to cancel
   * the registration monitoring for obtaining the call end reason.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void;

  /**
   * Subscribe to the mmiCodeResult event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - Event type. Indicates the mmiCodeResult event to be subscribed to.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback for getting the result of MMI code.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void;

  /**
   * Unsubscribe from the mmiCodeResult event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - Event type. Indicates the mmiCodeResult event to unsubscribe from.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback used to cancel getting mmicode registered listening.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void;

  /**
   * Subscribe to the audioDeviceChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - Event type. Indicates the audioDeviceChange event to be subscribed to.
   * @param { Callback<AudioDeviceCallbackInfo> } callback - Indicates the callback for getting the result of Current AudioDevice.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'audioDeviceChange', callback: Callback<AudioDeviceCallbackInfo>): void;

  /**
   * Unsubscribe from the audioDeviceChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - Event type. Indicates the audioDeviceChange event to unsubscribe from.
   * @param { Callback<AudioDeviceCallbackInfo> } callback - Indicates the callback for getting the result of Current AudioDevice.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void;

  /**
   * Subscribe to the postDialDelay event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - Event type. Indicates the postDialDelay event to be subscribed to.
   * @param { Callback<string> } callback - Indicates the callback for getting the result of post-dial string.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'postDialDelay', callback: Callback<string>): void;

  /**
   * Unsubscribe from the postDialDelay event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - Event type. Indicates the postDialDelay event to unsubscribe from.
   * @param { Callback<string> } callback - Indicates the callback for getting the result of post-dial string.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'postDialDelay', callback?: Callback<string>): void;

  /**
   * Subscribe to the rtt message event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttMessageInfo> } callback - Indicates the callback for getting the rtt message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onReceiveRttMessage(callback: Callback<RttMessageInfo>): void;

  /**
   * Unsubscribe from the  rtt message event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttMessageInfo> } [callback] - Indicates the callback for getting the rtt message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offReceiveRttMessage(callback?: Callback<RttMessageInfo>): void;

  /**
   * Subscribe to the rtt modify indication.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttEventInfo> } callback - Indicates the callback for getting the rtt event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onRttModifyInd(callback: Callback<RttEventInfo>): void;

  /**
   * Unsubscribe from the rtt modify indication.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttEventInfo> } [callback] - Indicates the callback for getting the rtt event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offRttModifyInd(callback?: Callback<RttEventInfo>): void;

  /**
   * Subscribe to the rtt error event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttErrorInfo> } callback - Indicates the callback for getting the rtt error report.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onRttErrCause(callback: Callback<RttErrorInfo>): void;

  /**
   * Unsubscribe from the rtt error report event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttErrorInfo> } [callback] - Indicates the callback for getting the rtt error report.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offRttErrCause(callback?: Callback<RttErrorInfo>): void;

  /**
   * Judge whether to allow another new call.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isNewCallAllowed. Returns {@code true} if
   * the device currently allows new calls; returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isNewCallAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether to allow another new call.
   *
   * @returns { Promise<boolean> } Returns {@code true} If the device currently allows new calls.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isNewCallAllowed(): Promise<boolean>;

  /**
   * Split conference call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of separateConference.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300008 - Conference call is not active.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function separateConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Split conference call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the separateConference.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300008 - Conference call is not active.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function separateConference(callId: int): Promise<void>;

  /**
   * Get call barring status.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionType } type - Indicates which type of call restriction to obtain.
   * @param { AsyncCallback<RestrictionStatus> } callback - Indicates the callback for getting the call restriction status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallRestrictionStatus(slotId: int, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void;

  /**
   * Get call barring status.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionType } type - Indicates which type of call restriction to obtain.
   * @returns { Promise<RestrictionStatus> } Returns the call restriction status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallRestrictionStatus(slotId: int, type: CallRestrictionType): Promise<RestrictionStatus>;

  /**
   * Set call barring status.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionInfo } info - Indicates the set call restriction information.
   * @param { AsyncCallback<void> } callback - The callback of setCallRestriction.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallRestriction(slotId: int, info: CallRestrictionInfo, callback: AsyncCallback<void>): void;

  /**
   * Set call barring status.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionInfo } info - Indicates the set call restriction information.
   * @returns { Promise<void> } The promise returned by the setCallRestriction.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallRestriction(slotId: int, info: CallRestrictionInfo): Promise<void>;

  /**
   * Set call barring password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } oldPassword - Indicates the call restriction old password.
   * @param { string } newPassword - Indicates the call restriction new password.
   * @param { AsyncCallback<void> } callback - The callback of setCallRestrictionPassword.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string, callback: AsyncCallback<void>): void;

  /**
   * Set call barring password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } oldPassword - Indicates the call restriction old password.
   * @param { string } newPassword - Indicates the call restriction new password.
   * @returns { Promise<void> } The promise returned by the setCallRestrictionPassword.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string): Promise<void>;

  /**
   * Get call forwarding information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferType } type - Indicates which type of call forwarding to obtain.
   * @param { AsyncCallback<CallTransferResult> } callback - Indicates the callback for getting
   * the call forwarding status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallTransferInfo(slotId: int, type: CallTransferType, callback: AsyncCallback<CallTransferResult>): void;

  /**
   * Get call forwarding information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferType } type - Indicates which type of call forwarding to obtain.
   * @returns { Promise<CallTransferResult> } Returns the call forwarding status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallTransferInfo(slotId: int, type: CallTransferType): Promise<CallTransferResult>;

  /**
   * Set call forwarding information.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferInfo } info - Indicates the set call forwarding information.
   * @param { AsyncCallback<void> } callback - The callback of setCallTransfer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallTransfer(slotId: int, info: CallTransferInfo, callback: AsyncCallback<void>): void;

  /**
   * Set call forwarding information.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferInfo } info - Indicates the set call forwarding information.
   * @returns { Promise<void> } The promise returned by the setCallTransfer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallTransfer(slotId: int, info: CallTransferInfo): Promise<void>;

  /**
   * Judge whether there is a ringing call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - The callback of isRinging.
   * Returns {@code true} if the device is ringing; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isRinging(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether there is a ringing call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } Returns {@code true} if the device is ringing; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isRinging(): Promise<boolean>;

  /**
   * Set mute during a call.
   *
   * @param { AsyncCallback<void> } callback - The callback of setMuted.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setMuted(callback: AsyncCallback<void>): void;

  /**
   * Set mute during a call.
   *
   * @returns { Promise<void> } The promise returned by the setMuted.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setMuted(): Promise<void>;

  /**
   * Unmute during a call.
   *
   * @param { AsyncCallback<void> } callback - The callback of cancelMuted.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function cancelMuted(callback: AsyncCallback<void>): void;

  /**
   * Unmute during a call.
   *
   * @returns { Promise<void> } The promise returned by the cancelMuted.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function cancelMuted(): Promise<void>;

  /**
   * Set the audio device.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - Indicates the device of audio.
   * @param { AsyncCallback<void> } callback - The callback of setAudioDevice.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setAudioDevice(device: AudioDevice, callback: AsyncCallback<void>): void;

  /**
   * Set the audio device.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - Indicates the device of audio.
   * @returns { Promise<void> } The promise returned by the setAudioDevice.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setAudioDevice(device: AudioDevice): Promise<void>;

  /**
   * Join the conference call.
   *
   * @param { int } mainCallId - Indicates the identifier of the main call.
   * @param { Array<string> } callNumberList - Indicates a call list.
   * @param { AsyncCallback<void> } callback - The callback of joinConference.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function joinConference(mainCallId: int, callNumberList: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Join the conference call.
   *
   * @param { int } mainCallId - Indicates the identifier of the main call.
   * @param { Array<string> } callNumberList - Indicates a call list.
   * @returns { Promise<void> } The promise returned by the joinConference.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function joinConference(mainCallId: int, callNumberList: Array<string>): Promise<void>;

  /**
   * Kick out call from the conference call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call which kick out.
   * @param { AsyncCallback<void> } callback - The callback of kickOutFromConference.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function kickOutFromConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Kick out call from the conference call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call which kick out.
   * @returns { Promise<void> } The promise returned by the kickOutFromConference.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function kickOutFromConference(callId: int): Promise<void>;

  /**
   * Update Ims call mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsCallMode } mode - Indicates the mode of the ims call.
   * @param { AsyncCallback<void> } callback - The callback of updateImsCallMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateImsCallMode(callId: int, mode: ImsCallMode, callback: AsyncCallback<void>): void;

  /**
   * Update Ims call mode.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsCallMode } mode - Indicates the mode of the ims call.
   * @returns { Promise<void> } The promise returned by the updateImsCallMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateImsCallMode(callId: int, mode: ImsCallMode): Promise<void>;

  /**
   * Cancel call upgrade when voice call upgrade to video call.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the cancelCallUpgrade.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelCallUpgrade(callId: int): Promise<void>;

  /**
   * Control camera to open/close/switch camera by cameraId when video call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } cameraId - Indicates the identifier of the camera id.
   * @returns { Promise<void> } The promise returned by the controlCamera.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function controlCamera(callId: int, cameraId: string): Promise<void>;

  /**
   * Set preview surface when video call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } surfaceId - Indicates the identifier of the preview surface id.
   * @returns { Promise<void> } The promise returned by the setPreviewWindow.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setPreviewSurface(callId: int, surfaceId: string): Promise<void>;

  /**
   * Set display surface when video call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } surfaceId - Indicates the identifier of the display surface id.
   * @returns { Promise<void> } The promise returned by the setDisplayWindow.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setDisplaySurface(callId: int, surfaceId: string): Promise<void>;

  /**
   * Set device direction when video call.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { DeviceDirection } deviceDirection - Indicates the identifier of the direction for the display.
   * @returns { Promise<void> } The promise returned by the setDeviceDirection.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setDeviceDirection(callId: int, deviceDirection: DeviceDirection): Promise<void>;

  /**
   * Subscribe to the imsCallModeChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - Event type. Indicates the imsCallModeChange event to be subscribed to.
   * @param { Callback<ImsCallModeInfo> } callback - Indicates the callback for
   * getting the result of ImsCallModeInfo details.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'imsCallModeChange', callback: Callback<ImsCallModeInfo>): void;

  /**
   * Unsubscribe from the imsCallModeChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - Event type. Indicates the imsCallModeChange event to unsubscribe from.
   * @param { Callback<ImsCallModeInfo> } callback - Indicates the callback to unsubscribe from
   * the imsCallModeChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void;

  /**
   * Subscribe to the callSessionEvent.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - Event type. Indicates the callSessionEvent
   * event to be subscribed to.
   * @param { Callback<CallSessionEvent> } callback - Indicates the callback for
   * getting the result of CallSessionEvent.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'callSessionEvent', callback: Callback<CallSessionEvent>): void;

  /**
   * Unsubscribe from the callSessionEvent.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - Event type. Indicates the callSessionEventChange event to
   * unsubscribe from.
   * @param { Callback<CallSessionEvent> } callback - Indicates the callback to unsubscribe from
   * the CallSessionEvent event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void;

  /**
   * Subscribe to the peerDimensionsChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - Event type. Indicates the peerDimensionsChange event
   * to be subscribed to.
   * @param { Callback<PeerDimensionsDetail> } callback - Indicates the callback for
   * getting the result of PeerDimensionsDetail details.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'peerDimensionsChange', callback: Callback<PeerDimensionsDetail>): void;

  /**
   * Unsubscribe from the peerDimensionsChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - Event type. Indicates the peerDimensionsChange event to
   * unsubscribe from.
   * @param { Callback<PeerDimensionsDetail> } callback - Indicates the callback to unsubscribe from
   * peerDimensionsChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void;

  /**
   * Subscribe to the cameraCapabilitiesChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - Event type. Indicates the cameraCapabilitiesChange event
   * to be subscribed to.
   * @param { Callback<CameraCapabilities> } callback - Indicates the callback for
   * getting the result of CameraCapabilities details.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'cameraCapabilitiesChange', callback: Callback<CameraCapabilities>): void;

  /**
   * Unsubscribe from the cameraCapabilitiesChange event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - Event type. Indicates the cameraCapabilitiesChange event
   * to unsubscribe from.
   * @param { Callback<CameraCapabilities> } callback - Indicates the callback to unsubscribe from
   * cameraCapabilitiesChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void;

  /**
   * Turn on Ims switch.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of enableImsSwitch.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableImsSwitch(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Turn on Ims switch.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the enableImsSwitch.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableImsSwitch(slotId: int): Promise<void>;

  /**
   * Turn off Ims switch.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of disableImsSwitch.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableImsSwitch(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Turn off Ims switch.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the disableImsSwitch.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableImsSwitch(slotId: int): Promise<void>;

  /**
   * Judge whether the Ims switch is enabled.
   *
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<boolean> } callback - The callback of isImsSwitchEnabled.
   * Returns {@code true} If the ims switch is on; returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabled(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether the Ims switch is enabled.
   *
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<boolean> } Returns {@code true} If the ims switch is on; returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabled(slotId: int): Promise<boolean>;

  /**
   * Judge whether the Ims switch is enabled.
   *
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { boolean } Returns {@code true} If the ims switch is on; returns {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabledSync(slotId: int): boolean;

  /**
   * Close unfinished ussd.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of closeUnfinishedUssd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function closeUnfinishedUssd(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Close unfinished ussd.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the closeUnfinishedUssd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function closeUnfinishedUssd(slotId: int): Promise<void>;

  /**
   * Set switch state for voice over NR.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { VoNRState } state - Indicates the VoNR state.
   * @param { AsyncCallback<void> } callback - The callback of setVoNRState.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVoNRState(slotId: int, state: VoNRState, callback: AsyncCallback<void>): void;

  /**
   * Set switch state for voice over NR.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { VoNRState } state - Indicates the VoNR state.
   * @returns { Promise<void> } The promise returned by the setVoNRState.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVoNRState(slotId: int, state: VoNRState): Promise<void>;

  /**
   * Get switch state for voice over NR.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<VoNRState> } callback - Indicates the callback for getVoNRState.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getVoNRState(slotId: int, callback: AsyncCallback<VoNRState>): void;

  /**
   * Get switch state for voice over NR.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<VoNRState> } Returns the VoNR state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getVoNRState(slotId: int): Promise<VoNRState>;

  /**
   * Checks whether can set call transfer time.
   *
   * The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<boolean> } callback - Returns {@code true} if the device can set call transfer time;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function canSetCallTransferTime(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether can set call transfer time.
   *
   * The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<boolean> } Returns {@code true} if the device can set call transfer time;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function canSetCallTransferTime(slotId: int): Promise<boolean>;

  /**
   * Enters the special code on the keypad.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - Indicates the special code to enter.
   * @param { AsyncCallback<void> } callback - The callback of inputDialerSpecialCode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function inputDialerSpecialCode(inputCode: string, callback: AsyncCallback<void>): void;

  /**
   * Enters the special code on the keypad.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - Indicates the special code to enter.
   * @returns { Promise<void> } The promise returned by the inputDialerSpecialCode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function inputDialerSpecialCode(inputCode: string): Promise<void>;

  /**
   * Remove missed incoming call notification.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   * ohos.permission.WRITE_CALL_LOG
   * @param { AsyncCallback<void> } callback - The callback of removeMissedIncomingCallNotification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void;

  /**
   * Remove missed incoming call notification.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   * ohos.permission.WRITE_CALL_LOG
   * @returns { Promise<void> } The promise returned by the removeMissedIncomingCallNotification.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removeMissedIncomingCallNotification(): Promise<void>;

  /**
   * Send call ui event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } eventName - Indicates the event name.
   * @returns { Promise<void> } The promise returned by the sendCallUiEvent.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function sendCallUiEvent(callId: int, eventName: string): Promise<void>;

  /**
   * Set rtt capability.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } accountId - Indicates the identifier of the account to set rtt capability.
   * @param { boolean } isEnable - Indicates whether Rtt capability is enabled.
   * @returns { Promise<void> } The promise returned by the setRttCapability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function setRttCapability(accountId: int, isEnable: boolean): Promise<void>;

  /**
   * Send rtt message.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } rttMessage - Indicates the message of rtt.
   * @returns { Promise<void> } The promise returned by the sendRttMessage.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function sendRttMessage(callId: int, rttMessage: string): Promise<void>;

  /**
   * Start rtt.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsRttMode } type - Indicates the type of operation.
   * @returns { Promise<void> } The promise returned by the startRtt.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function startRtt(callId: int, type: ImsRttMode): Promise<void>;

  /**
   * Stop rtt.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsRttMode } type - Indicates the type of operation.
   * @returns { Promise<void> } The promise returned by the stopRtt.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function stopRtt(callId: int, type: ImsRttMode): Promise<void>;

  /**
   * Indicates the mode of the ims call.
   *
   * @enum { number }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ImsCallMode {
    /**
     * Indicates audio only calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_AUDIO_ONLY = 0,

    /**
     * Indicates that only calls are sent.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_ONLY = 1,

    /**
     * Indicates receiving only calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_RECEIVE_ONLY = 2,

    /**
     * Indicates permission to send and receive calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_RECEIVE = 3,

    /**
     * Indicates a pause in video calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_VIDEO_PAUSED = 4
  }

  /**
   * Indicates the VoNR state.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum VoNRState {
    /**
     * Indicates the VoNR switch is off.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_OFF = 0,

    /**
     * Indicates the VoNR switch is on.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_ON = 1
  }

  /**
   * Indicates the device type of the audio device.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum AudioDeviceType {
    /**
     * Indicates the audio device is earpiece.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_EARPIECE = 0,

    /**
     * Indicates the audio device is speaker.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_SPEAKER = 1,

    /**
     * Indicates the audio device is wired headset.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_WIRED_HEADSET = 2,

    /**
     * Indicates the audio device is bluetooth headset.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_BLUETOOTH_SCO = 3,

    /**
     * Indicates the audio device is distributed automotive device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DISTRIBUTED_AUTOMOTIVE = 4
  }

  /**
   * Indicates the audio device.
   *
   * @interface AudioDevice
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDevice {
    /**
     * Indicates the device type of the audio device.
     *
     * @type { AudioDeviceType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: AudioDeviceType;

    /**
     * Indicates the address of the audio device.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    address?: string;

    /**
     * Indicates the name of the audio device.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    deviceName?: string;
  }

  /**
   * Indicates the information of the audio device.
   *
   * @interface AudioDeviceCallbackInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDeviceCallbackInfo {
    /**
     * Indicates the list of support audio device.
     *
     * @type { Array<AudioDevice> }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    audioDeviceList: Array<AudioDevice>;

    /**
     * Indicates the type of current audio device.
     *
     * @type { AudioDevice }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    currentAudioDevice: AudioDevice;

    /**
     * Indicates the status of mute.
     *
     * @type { boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    isMuted: boolean;
  }

  /**
   * Indicates the type of call restriction.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionType {
    /**
     * Indicates restrict all incoming calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_INCOMING = 0,

    /**
     * Indicates restrict all outgoing calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_OUTGOING = 1,

    /**
     * Indicates restrict international calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL = 2,

    /**
     * Indicates restrict international roaming calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL_EXCLUDING_HOME = 3,

    /**
     * Indicates restrict roaming calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ROAMING_INCOMING = 4,

    /**
     * Indicates restrict all calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_CALLS = 5,

    /**
     * Indicates restrict all outgoing services.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_OUTGOING_SERVICES = 6,

    /**
     * Indicates restrict all incoming services.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INCOMING_SERVICES = 7
  }

  /**
   * Indicates the information of call transfer.
   *
   * @interface CallTransferInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferInfo {
    /**
     * Phone number.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transferNum: string;

    /**
     * Call forwarding type.
     *
     * @type { CallTransferType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallTransferType;

    /**
     * Call forwarding setting type.
     *
     * @type { CallTransferSettingType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    settingType: CallTransferSettingType;

    /**
     * Start time hours.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startHour?: int;

    /**
     * Start time minutes.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute?: int;

    /**
     * End time hours.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endHour?: int;

    /**
     * End time minutes.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endMinute?: int;
  }

  /**
   * Indicates the type of call transfer.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferType {
    /**
     * Indicates unconditional transfer of a call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_UNCONDITIONAL = 0,

    /**
     * Indicates transfer the call when busy.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BUSY = 1,

    /**
     * Indicates transfer the call when no reply.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_NO_REPLY = 2,

    /**
     * Indicates transfer the call when unreachable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_NOT_REACHABLE = 3
  }

  /**
   * Indicates the type of call transfer setting.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferSettingType {
    /**
     * Indicates disable the call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_DISABLE = 0,

    /**
     * Indicates enable the call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ENABLE = 1,

    /**
     * Indicates register the call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_REGISTRATION = 3,

    /**
     * Indicates erasure the call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ERASURE = 4
  }

  /**
   * Indicates the options of call attribute.
   *
   * @interface CallAttributeOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface CallAttributeOptions {
    /**
     * Indicates the number of account.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountNumber: string;

    /**
     * Indicates if the call is start with speaker.
     *
     * @type { boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    speakerphoneOn: boolean;

    /**
     * Indicates the id of account.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountId: int;

    /**
     * Indicates the type of video state.
     *
     * @type { VideoStateType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    videoState: VideoStateType;

    /**
     * Indicates the start time.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    startTime: int;

    /**
     * Indicates if this is an emergency call.
     *
     * @type { boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    isEcc: boolean;

    /**
     * Indicates the type of call.
     *
     * @type { CallType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callType: CallType;

    /**
     * Indicates the id of call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the detailed state of call.
     *
     * @type { DetailedCallState }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callState: DetailedCallState;

    /**
     * Indicates the state of conference.
     *
     * @type { ConferenceState }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    conferenceState: ConferenceState;

    /**
     * Indicates the detail information of voip call.
     *
     * @type { ?VoipCallAttribute }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallAttribute?: VoipCallAttribute;

    /**
     * Indicates the color tone type.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    crsType: int;

    /**
     * Indicates the initial type of this call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    originalCallType: int;

    /**
     * Indicates the location of the phone number.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    numberLocation?: string;

    /**
     * Indicates the mark information of the phone number.
     *
     * @type { ?NumberMarkInfo }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    numberMarkInfo?: NumberMarkInfo;

    /**
     * Indicates the extra call parameters.
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    extraParams?: Record<string, Object>;

    /**
     * Indicates the rtt state.
     *
     * @type { ?RttState }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    rttState?: RttState;
  }

  /**
   * Indicates the voip call detail information.
   *
   * @interface VoipCallAttribute
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface VoipCallAttribute {
    /**
     * Indicates the identifier of the voip call.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallId: string;

    /**
     * Indicates the user name of the VoIP call.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userName: string;

    /**
     * Indicates the user profile photo of the VoIP call.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userProfile: image.PixelMap;

    /**
     * Indicates the third-party application process specific identifier.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * Indicates the third-party application UI extension ability name.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Indicates the third-party application bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipBundleName: string;

    /**
     * Indicates whether the VoIP incoming call default show live call banner. Default value is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    showBannerForIncomingCall?: boolean;

    /**
     * Indicates whether the VoIP call is a conference call. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isConferenceCall?: boolean;

    /**
     * Indicates whether the VoIP incoming video call is support voice answer. Default value is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isVoiceAnswerSupported?: boolean;
  }

  /**
   * Indicates the state of conference call.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum ConferenceState {
    /**
     * Indicates the state is idle.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_IDLE = 0,

    /**
     * Indicates the state is active.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_ACTIVE = 1,

    /**
     * Indicates the state is disconnecting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTING = 2,

    /**
     * Indicates the state is disconnected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTED = 3
  }

  /**
   * Indicates the type of call.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallType {
    /**
     * Indicates the call type is CS.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CS = 0,

    /**
     * Indicates the call type is IMS.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_IMS = 1,

    /**
     * Indicates the call type is OTT.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_OTT = 2,

    /**
     * Indicates the call type is OTHER.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_ERR_CALL = 3,

    /**
     * Indicates the call type is VoIP.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VOIP = 4
  }

  /**
   * Indicates the type of video state.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum VideoStateType {
    /**
     * Indicates the call is in voice state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_VOICE = 0,
    /**
     * Indicates the call is in video state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead telephony.call#TYPE_VIDEO_BIDIRECTIONAL
     */
    TYPE_VIDEO = 1,
    /**
     * Indicates the call is in send only video state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_SEND_ONLY = 1,
    /**
     * Indicates the call is in receive only video state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_RECEIVE_ONLY = 2,
    /**
     * Indicates the call is in send and receive video state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_BIDIRECTIONAL = 3
  }

  /**
   * Indicates the type of video request result.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum VideoRequestResultType {
    /**
     * Indicates the request was successful.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_SUCCESS = 0,
    /**
     * Indicates the request failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_FAILURE = 1,
    /**
     * Indicates the request ignored due to invalid parameters.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_INVALID = 2,
    /**
     * Indicates the request timed out.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_TIMED_OUT = 3,
    /**
     * Indicates the request rejected by remote.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_REJECTED_BY_REMOTE = 4,
    /**
     * Indicates the upgrade request canceled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_UPGRADE_CANCELED = 5,
    /**
     * Indicates the ImsCall Mode downgrade RTP time out.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_OR_RTCP_TIMEOUT = 100,
    /**
     * Indicates the ImsCall Mode downgrade RTP and RTCP time out.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_AND_RTCP_TIMEOUT = 101
  }

  /**
   * Indicates the type of device direction.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DeviceDirection {
    /**
     * Indicates the device direction is 0 degree.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_0 = 0,
    /**
     * Indicates the device direction is 90 degree.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_90 = 90,
    /**
     * Indicates the device direction is 180 degree.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_180 = 180,
    /**
     * Indicates the device direction is 270 degree.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_270 = 270
  }

  /**
   * Indicates the type of video call event.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CallSessionEventId {
    /**
     * Indicates set camera fail event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_FAILURE = 0,
    /**
     * Indicates set camera successful event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_READY = 1,
    /**
     * Indicates release display surface event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_DISPLAY_SURFACE_RELEASED = 100,
    /**
     * Indicates release preview surface event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_PREVIEW_SURFACE_RELEASED = 101
  }

  /**
   * Indicates the detailed state of call.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DetailedCallState {
    /**
     * Indicates the call is active.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ACTIVE = 0,

    /**
     * Indicates the call is holding.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_HOLDING = 1,

    /**
     * Indicates the call is dialing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DIALING = 2,

    /**
     * Indicates the call is alerting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ALERTING = 3,

    /**
     * Indicates the call is incoming.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_INCOMING = 4,

    /**
     * Indicates the call is waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_WAITING = 5,

    /**
     * Indicates the call is disconnected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTED = 6,

    /**
     * Indicates the call is disconnecting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTING = 7,

    /**
     * Indicates the call is idle.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_IDLE = 8
  }

  /**
   * Indicates the information of call restriction.
   *
   * @interface CallRestrictionInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallRestrictionInfo {
    /**
     * Indicates the type of call restriction.
     *
     * @type { CallRestrictionType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallRestrictionType;

    /**
     * Indicates the password required to set call restrictions.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Indicates the mode of call restriction.
     *
     * @type { CallRestrictionMode }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mode: CallRestrictionMode;
  }

  /**
   * Indicates the mode of call restriction.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionMode {
    /**
     * Indicates call restriction is deactivated.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_DEACTIVATION = 0,

    /**
     * Indicates call restriction is activated.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_ACTIVATION = 1
  }

  /**
   * Indicates the options of call event.
   *
   * @interface CallEventOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallEventOptions {
    /**
     * Indicates the event ID of call ability.
     *
     * @type { CallAbilityEventId }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    eventId: CallAbilityEventId,
  }

  /**
   * Indicates the event ID of call ability.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallAbilityEventId {
    /**
     * Indicates there is no available carrier during dialing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_DIAL_NO_CARRIER = 1,

    /**
     * Indicates invalid FDN.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_INVALID_FDN_NUMBER = 2,

    /**
     * Indicates hold call fail.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_HOLD_CALL_FAILED = 3,

    /**
     * Indicates swap call fail.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SWAP_CALL_FAILED = 4,

    /**
     * Indicates combine call failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_COMBINE_CALL_FAILED = 5,

    /**
     * Indicates split call failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SPLIT_CALL_FAILED = 6,

    /**
     * Indicates show full screen.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FULL_SCREEN = 7,

    /**
     * Indicates show float window.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FLOAT_WINDOW = 8
  }

  /**
   * Indicates the states of call.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export enum CallState {
    /**
     * Indicates an invalid state, which is used when the call state fails to be obtained.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_UNKNOWN = -1,

    /**
     * Indicates that there is no ongoing call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_IDLE = 0,

    /**
     * Indicates that an incoming call is ringing or waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_RINGING = 1,

    /**
     * Indicates that a least one call is in the dialing, active, or hold state, and there is no new
     * incoming call ringing or waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_OFFHOOK = 2,

    /**
     * Indicates that call is answered
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_ANSWERED = 3
  }

  /**
   * Indicates the states of telCall.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @since 21 dynamic
   * @since 23 static
   */
  export enum TelCallState {
    /**
     * Indicates an invalid state, which is used when the call state fails to be obtained.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_UNKNOWN = -1,

    /**
     * Indicates that there is no ongoing call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_IDLE = 0,

    /**
     * Indicates that an incoming call is ringing or waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_RINGING = 1,

    /**
     * Indicates that a least one call is in the dialing, and there is no new
     * incoming call ringing or waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_OFFHOOK = 2,

    /**
     * Indicates that call is answered
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_ANSWERED = 3,

    /**
     * Indicates that call is connected
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_CONNECTED = 4
  }

  /**
   * Indicates the states of Carrier Call.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  export enum CCallState {
    /**
     * Indicates the call is unknown.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_UNKNOWN = -1,

    /**
     * Indicates the call is active.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ACTIVE = 0,

    /**
     * Indicates the call is holding.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_HOLDING = 1,

    /**
     * Indicates the call is dialing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DIALING = 2,

    /**
     * Indicates the call is alerting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ALERTING = 3,

    /**
     * Indicates the call is incoming.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_INCOMING = 4,

    /**
     * Indicates the call is waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_WAITING = 5,

    /**
     * Indicates the call is disconnected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTED = 6,

    /**
     * Indicates the call is disconnecting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTING = 7,

    /**
     * Indicates the call is idle.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_IDLE = 8,

    /**
     * Indicates the call is answered.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ANSWERED = 9
  }

  /**
   * Indicates the options of placing a call.
   *
   * @interface DialOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export interface DialOptions {
    /**
     * Indicates whether the call to be made is a video call. The value {@code false} indicates
     * a voice call.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    extras?: boolean;

    /**
     * Indicates the card slot index number, ranging from 0 to the maximum card slot index number
     * supported by the device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * Indicates the type of Video state.
     *
     * @type { ?VideoStateType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;

    /**
     * Indicates the scenario of the call to be made.
     *
     * @type { ?DialScene }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;

    /**
     * Indicates the type of the call to be made.
     *
     * @type { ?DialType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialType?: DialType;
  }

  /**
   * Indicates the options for initiating a call.
   *
   * @interface DialCallOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DialCallOptions {
    /**
     * Indicates the card slot index number, ranging from 0 to the maximum card slot index number
     * supported by the device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    accountId?: int;
    /**
     * Indicates the type of Video state.
     *
     * @type { ?VideoStateType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;
    /**
     * Indicates the scenario of the call.
     *
     * @type { ?DialScene }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;
    /**
     * Indicates the type of the call.
     *
     * @type { ?DialType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dialType?: DialType;
    /**
     * Indicates the extra call parameters.
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    extraParams?: Record<string, Object>;
  }

  /**
   * Indicates the scenarios of the call to be made.
   *
   * @enum {int}
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialScene {
    /**
     * Indicates this is a common call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NORMAL = 0,

    /**
     * Indicates this is a privileged call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_PRIVILEGED = 1,

    /**
     * Indicates this is an emergency call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_EMERGENCY = 2
  }

  /**
   * Indicates the types of the call to be made.
   *
   * @enum {int}
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialType {
    /**
     * Indicates this is a carrier call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_CARRIER_TYPE = 0,

    /**
     * Indicates this is a call to play voice mail.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_VOICE_MAIL_TYPE = 1,

    /**
     * Indicates this is an OTT call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_OTT_TYPE = 2
  }

  /**
   * Indicates the options for call rejection message.
   *
   * @interface RejectMessageOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface RejectMessageOptions {
    /**
     * Indicates the content of call rejection message.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    messageContent: string;
  }

  /**
   * Indicates the result of call transfer.
   *
   * @interface CallTransferResult
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferResult {
    /**
     * Indicates the status of call forwarding.
     *
     * @type { TransferStatus }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    status: TransferStatus;

    /**
     * Indicates the phone number of call forwarding.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     */
    number: string;

    /**
     * Indicates the phone number of call forwarding.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    teleNumber: string;

    /**
     * Indicates the start time hours of call forwarding.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startHour: int;

    /**
     * Indicates the start time minutes of call forwarding.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute: int;

    /**
     * Indicates the end time hours of call forwarding.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endHour: int;

    /**
     * Indicates the end time minutes of call forwarding.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endMinute: int;
  }

  /**
   * Indicates the status of call waiting.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallWaitingStatus {
    /**
     * Indicates that call waiting is not enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_DISABLE = 0,

    /**
     * Indicates that call waiting is enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_ENABLE = 1
  }

  /**
   * Indicates the status of call restriction.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum RestrictionStatus {
    /**
     * Indicates that call barring is not enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_DISABLE = 0,

    /**
     * Indicates that call barring is enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_ENABLE = 1
  }

  /**
   * Indicates the status of call transfer.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum TransferStatus {
    /**
     * Indicates that call forwarding is not enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_DISABLE = 0,

    /**
     * Indicates that call forwarding is enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_ENABLE = 1
  }

  /**
   * Indicates the option for determining if a number is an emergency number for specified slot.
   *
   * @interface EmergencyNumberOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface EmergencyNumberOptions {
    /**
     * Indicates the card slot index number, ranging from 0 to the
     * maximum card slot index number supported by the device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    slotId?: int;
  }

  /**
   * Indicates the option for number formatting.
   *
   * @interface NumberFormatOptions
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface NumberFormatOptions {
    /**
     * Indicates the country code.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    countryCode?: string;
  }

  /**
   * Indicates the MMI code result.
   *
   * @interface MmiCodeResults
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface MmiCodeResults {
    /**
     * Indicates the result of MMI code.
     *
     * @type { MmiCodeResult }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    result: MmiCodeResult;

    /**
     * Indicates the message of MMI code.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * Indicates the MMI code result.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum MmiCodeResult {
    /**
     * Indicates the result of MMI code with successfully.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_SUCCESS = 0,

    /**
     * Indicates the result of MMI code with failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_FAILED = 1
  }

  /**
   * Indicates the causes of call disconnection.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DisconnectedReason {
    /**
     * Indicates the call disconnect due to unassigned number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNASSIGNED_NUMBER = 1,

    /**
     * Indicates the call disconnect due to no route to destination.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_ROUTE_TO_DESTINATION = 3,

    /**
     * Indicates the call disconnect due to channel unacceptable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_UNACCEPTABLE = 6,

    /**
     * Indicates the call disconnect due to operator determined barring.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    OPERATOR_DETERMINED_BARRING = 8,

    /**
     * Indicates the call disconnect due to call completed elsewhere.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_COMPLETED_ELSEWHERE = 13,

    /**
     * Indicates the call disconnect due to normal call clearing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NORMAL_CALL_CLEARING = 16,

    /**
     * Indicates the call disconnect due to user busy.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_BUSY = 17,

    /**
     * Indicates the call disconnect due to no user responding.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_USER_RESPONDING = 18,

    /**
     * Indicates the call disconnect due to user alerting, no answer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_ALERTING_NO_ANSWER = 19,

    /**
     * Indicates the call disconnect due to call rejected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_REJECTED = 21,

    /**
     * Indicates the call disconnect due to number changed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NUMBER_CHANGED = 22,

    /**
     * Indicates the call rejected due to feature at the destination.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION = 24,

    /**
     * Indicates the call disconnect due to pre-emption.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED_PRE_EMPTION = 25,

    /**
     * Indicates the call disconnect due to non selected user clearing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NON_SELECTED_USER_CLEARING = 26,

    /**
     * Indicates the call disconnect due to destination out of order.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DESTINATION_OUT_OF_ORDER = 27,

    /**
     * Indicates the call disconnect due to invalid number format.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_NUMBER_FORMAT = 28,

    /**
     * Indicates the call disconnect due to facility rejected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FACILITY_REJECTED = 29,

    /**
     * Indicates the call disconnect due to response to status enquiry.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESPONSE_TO_STATUS_ENQUIRY = 30,

    /**
     * Indicates the call disconnected normally, no specified cause.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NORMAL_UNSPECIFIED = 31,

    /**
     * Indicates the call disconnect due to no circuit/channel available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_CIRCUIT_CHANNEL_AVAILABLE = 34,

    /**
     * Indicates the call disconnect due to network out of order.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NETWORK_OUT_OF_ORDER = 38,

    /**
     * Indicates the call disconnect due to temporary failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TEMPORARY_FAILURE = 41,

    /**
     * Indicates the call disconnect due to switching equipment congestion.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SWITCHING_EQUIPMENT_CONGESTION = 42,

    /**
     * Indicates the call disconnect due to access information discarded.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_INFORMATION_DISCARDED = 43,

    /**
     * Indicates the call disconnect due to requested circuit/channel not available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE = 44,

    /**
     * Indicates the call disconnect due to resources unavailable unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESOURCES_UNAVAILABLE_UNSPECIFIED = 47,

    /**
     * Indicates the call disconnect due to quality of service unavailable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    QUALITY_OF_SERVICE_UNAVAILABLE = 49,

    /**
     * Indicates the call disconnect due to requested facility not subscribed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_SUBSCRIBED = 50,

    /**
     * Indicates the call disconnect due to incoming calls barred within the CUG.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMING_CALLS_BARRED_WITHIN_THE_CUG = 55,

    /**
     * Indicates the call disconnect due to bearer capability not authorized.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_AUTHORIZED = 57,

    /**
     * Indicates the call disconnect due to bearer capability not presently available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE = 58,

    /**
     * Indicates the call disconnect due to service or option not available, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED = 63,

    /**
     * Indicates the call disconnect due to bearer service not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_SERVICE_NOT_IMPLEMENTED = 65,

    /**
     * Indicates the call disconnect due to ACM equal to or greater than the maximum value.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE = 68,

    /**
     * Indicates the call disconnect due to requested facility not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_IMPLEMENTED = 69,

    /**
     * Indicates the call disconnect due to only restricted digital info BC available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE = 70,

    /**
     * Indicates the call disconnect due to service or option not implemented, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED = 79,

    /**
     * Indicates the call disconnect due to invalid transaction identifier value.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSACTION_IDENTIFIER_VALUE = 81,

    /**
     * Indicates the call disconnect due to user not member of CUG.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    USER_NOT_MEMBER_OF_CUG = 87,

    /**
     * Indicates the call disconnect due to incompatible destination.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMPATIBLE_DESTINATION = 88,

    /**
     * Indicates the call disconnect due to invalid transit network selection.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSIT_NETWORK_SELECTION = 91,

    /**
     * Indicates the call disconnect due to semantically incorrect message.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SEMANTICALLY_INCORRECT_MESSAGE = 95,

    /**
     * Indicates the call disconnect due to invalid mandatory information.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_MANDATORY_INFORMATION = 96,

    /**
     * Indicates the call disconnect due to msg type non-existent or not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97,

    /**
     * Indicates the call disconnect due to msg type not compatible with protocol state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98,

    /**
     * Indicates the call disconnect due to IE non-existent or not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99,

    /**
     * Indicates the call disconnect due to conditional IE error.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONDITIONAL_IE_ERROR = 100,

    /**
     * Indicates the call disconnect due to message not compatible with protocol state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101,

    /**
     * Indicates the call disconnect due to recovery on timer expiry timer number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_ON_TIMER_EXPIRED = 102,

    /**
     * Indicates the call disconnect due to protocol error, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    PROTOCOL_ERROR_UNSPECIFIED = 111,

    /**
     * Indicates the call disconnect due to interworking, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERWORKING_UNSPECIFIED = 127,

    /**
     * Indicates the call disconnect due to call barred.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_BARRED = 240,

    /**
     * Indicates the call disconnect due to FDN blocked.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FDN_BLOCKED = 241,

    /**
     * Indicates the call disconnect due to IMSI in VLR is unknown.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMSI_UNKNOWN_IN_VLR = 242,

    /**
     * Indicates the call disconnect due to IMEI not accepted.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMEI_NOT_ACCEPTED = 243,

    /**
     * Indicates the call disconnect due to dial modified to USSD.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_USSD = 244,

    /**
     * Indicates the call disconnect due to dial modified to SS.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_SS = 245,

    /**
     * Indicates the call disconnect due to dial modified to dial.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_DIAL = 246,

    /**
     * Indicates the call disconnect due to Radio off.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_OFF = 247,

    /**
     * Indicates the call disconnect due to out of service.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OUT_OF_SERVICE = 248,

    /**
     * Indicates the call disconnect due to invalid SIM.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_VALID_SIM = 249,

    /**
     * Indicates the call disconnect due to radio internal error.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_INTERNAL_ERROR = 250,

    /**
     * Indicates the call disconnect due to network response timeout.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_RESP_TIMEOUT = 251,

    /**
     * Indicates the call disconnect due to network reject.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_REJECT = 252,

    /**
     * Indicates the call disconnect due to radio access failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_ACCESS_FAILURE = 253,

    /**
     * Indicates the call disconnect due to radio link failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_FAILURE = 254,

    /**
     * Indicates the call disconnect due to radio link lost.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_LOST = 255,

    /**
     * Indicates the call disconnect due to radio uplink failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_UPLINK_FAILURE = 256,

    /**
     * Indicates the call disconnect due to radio setup failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_SETUP_FAILURE = 257,

    /**
     * Indicates the call disconnect due to radio release normal.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_NORMAL = 258,

    /**
     * Indicates the call disconnect due to radio release abnormal.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_ABNORMAL = 259,

    /**
     * Indicates the call disconnect due to access class blocked.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_CLASS_BLOCKED = 260,

    /**
     * Indicates the call disconnect due to network detach.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_DETACH = 261,

    /**
     * Indicates the call disconnect due to invalid parameter.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_PARAMETER = 1025,

    /**
     * Indicates the call disconnect due to sim not exit.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NOT_EXIT = 1026,

    /**
     * Indicates the call disconnect due to sim pin need.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN_NEED = 1027,

    /**
     * Indicates the call disconnect due to call not allow.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NOT_ALLOW = 1029,

    /**
     * Indicates the call disconnect due to sim invalid.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_INVALID = 1045,

    /**
     * Indicates the call disconnect due to unknown error.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNKNOWN = 1279
  }

  /**
   * Indicates the cause of a call disconnection.
   *
   * @interface DisconnectedDetails
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DisconnectedDetails {
    /**
     * Indicates the reason for ending the call.
     *
     * @type { DisconnectedReason }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: DisconnectedReason;
    /**
     * Indicates the message for ending the call.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * Indicates the ims call mode info of a video call.
   *
   * @interface ImsCallModeInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ImsCallModeInfo {
    /**
     * Indicates the id of call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Indicates the request result.
     *
     * @type { VideoRequestResultType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    result: VideoRequestResultType;
    /**
     * Indicates if this is a request which received from remote,
     *
     * @type { boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isRequestInfo: boolean;
    /**
     * Indicates the ImsCallMode of call.
     *
     * @type { ImsCallMode }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    imsCallMode: ImsCallMode;
  }

  /**
   * Indicates the call session event of a video call.
   *
   * @interface CallSessionEvent
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallSessionEvent {
    /**
     * Indicates the id of call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Indicates the event id of video call.
     *
     * @type { CallSessionEventId }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: CallSessionEventId;
  }

  /**
   * Indicates the peer dimension.
   *
   * @interface PeerDimensionsDetail
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PeerDimensionsDetail {
    /**
     * Indicates the id of call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Indicates the peer dimensions width.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Indicates the the peer dimensions height.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Indicates the camera capabilities.
   *
   * @interface CameraCapabilities
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CameraCapabilities {
    /**
     * Indicates the id of call.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Indicates the camera width.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Indicates the the camera height.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Indicates the mark information of the phone number.
   *
   * @interface NumberMarkInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export interface NumberMarkInfo {
    /**
     * Indicates the type of number mark.
     *
     * @type { MarkType }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markType: MarkType;

    /**
     * Indicates the content of number mark.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markContent?: string;

    /**
     * Indicates the count of number mark.
     *
     * @type { ?int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markCount?: int;

    /**
     * Indicates the source of number mark.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markSource?: string;

    /**
     * Indicates if this is a number mark from cloud.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isCloud?: boolean;

    /**
     * Indicates the details of number mark.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    markDetails?: string;
  }

  /**
   * Indicates the info of the rtt error.
   *
   * @interface RttErrorInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttErrorInfo {
    /**
     * Indicates the id of rtt.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the type of rtt operation.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    operationType: int;

    /**
     * Indicates the code of rtt cause.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    causeCode: int;

    /**
     * Indicates the text of rtt fail reason.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    reasonText: string;
  }

  /**
   * Indicates the info of the rtt event.
   *
   * @interface RttEventInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttEventInfo {
    /**
     * Indicates the id of rtt.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the type of rtt event.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    eventType: int;

    /**
     * Indicates the reason of rtt event.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    reason: int;
  }

  /**
   * Indicates the info of the rtt message.
   *
   * @interface RttMessageInfo
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttMessageInfo {
    /**
     * Indicates the id of rtt.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the rtt messgae.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    rttMessage: string;
  }

  /**
   * Indicates the type of the number mark.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export enum MarkType {
    /**
     * Indicates the mark is none.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_NONE = 0,

    /**
     * Indicates the mark is crank.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CRANK = 1,

    /**
     * Indicates the mark is fraud.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_FRAUD = 2,

    /**
     * Indicates the mark is express.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_EXPRESS = 3,

    /**
     * Indicates the mark is promote sales.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_PROMOTE_SALES = 4,

    /**
     * Indicates the mark is house agent.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_HOUSE_AGENT = 5,

    /**
     * Indicates the mark is insurance.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_INSURANCE = 6,

    /**
     * Indicates the mark is taxi.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_TAXI = 7,

    /**
     * Indicates the mark is custom.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CUSTOM = 8,

    /**
     * Indicates the mark is others.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_OTHERS = 9,

    /**
     * Indicates the mark is yellow page.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_YELLOW_PAGE = 10,

    /**
     * Indicates the mark is enterprise.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    MARK_TYPE_ENTERPRISE = 11
  }

  /**
   * Indicates the state of the rtt.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum RttState {
    /**
     * Indicates the rtt is disable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_NO = 0,
    /**
     * Indicates the rtt is enable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_YES = 1,
    /**
     * Indicates the rtt is tty state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_REMOTE_TTY = 2,
    /**
     * Indicates the rtt is not support.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_REMOTE_NOT_SUPPORT = 3
    }
  /**
   * Indicates the mode of the ims rtt.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum ImsRttMode {
    /**
     * Indicates the rtt is local request update.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_UPGRADE = 0,
    /**
     * Indicates the rtt is local request downgrade.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_DOWNGRADE = 1,
    /**
     * Indicates the rtt is remote request local accept.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    REMOTE_REQUEST_UPGRADE_LOCAL_ACCEPT = 2,
    /**
     * Indicates the rtt is remote request update local reject.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    REMOTE_REQUEST_UPGRADE_LOCAL_REJECT = 3
     }
}

export default call;