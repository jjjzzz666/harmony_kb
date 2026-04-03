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
 * @kit IMEKit
 */
import type { Callback, AsyncCallback } from './@ohos.base';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import { UIContext } from "./@ohos.arkui.UIContext";
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
import type { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
import { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */

/**
 * Input method
 *
 * @namespace inputMethod
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace inputMethod {
  /**
   * Keyboard max number
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const MAX_TYPE_NUM: int;

  /**
   * Input method setting
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * Input method controller
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * Input method setting
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting.
   * @throws { BusinessError } 12800007 - input method setter error. Possible cause:
   *     create InputMethodSetting object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getSetting(): InputMethodSetting;

  /**
   * Input method controller
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
   *     create InputMethodController object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getController(): InputMethodController;

  /**
   * Get default input method
   *
   * @returns { InputMethodProperty } property of the default input method.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultInputMethod(): InputMethodProperty;

  /**
   * Get system input method config ability
   *
   * @returns { ElementName } the information of system input method config ability.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getSystemInputMethodConfigAbility(): ElementName;

  /**
   * Switch input method
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } target - indicates the input method which will replace the current one.
   * @param { AsyncCallback<boolean> } callback - the callback of switchInputMethod.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch input method. The caller must be the current inputmethod.
   *
   * @param { InputMethodProperty } target - indicates the target input method.
   * @param { AsyncCallback<boolean> } callback - the callback of switchInputMethod.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

  /**
   * Switch input method
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } target - Indicates the input method which will replace the current one.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch input method. The caller must be the current inputmethod.
   *
   * @param { InputMethodProperty } target - indicates the target input method.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

  /**
   * Get current input method
   *
   * @returns { InputMethodProperty } the property of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * Switch current input method subtype
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodSubtype.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch current input method subtype, if this interface is invoked by the current IME, this permission is ignored.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodSubtype.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10
   */
  /**
   * Switch current input method subtype. The caller must be the current inputmethod.
   *
   * @param { InputMethodSubtype } target - indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodSubtype.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

  /**
   * Switch current input method subtype
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch current input method subtype, if this interface is invoked by the current IME, this permission is ignored.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10
   */
  /**
   * Switch current input method subtype. The caller must be the current inputmethod.
   *
   * @param { InputMethodSubtype } target - indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

  /**
   * Get the current input method subtype
   *
   * @returns { InputMethodSubtype } the subtype of the current input method.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * Switch input method and subtype. If the caller is an input method, it must be the current inputmethod.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } inputMethodProperty - Indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodAndSubtype.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch input method and subtype. The caller must be the current inputmethod.
   *
   * @param { InputMethodProperty } inputMethodProperty - indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodAndSubtype.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype,
    callback: AsyncCallback<boolean>
  ): void;

  /**
   * Switch input method and subtype. If the caller is an input method, it must be the current inputmethod.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } inputMethodProperty - Indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  /**
   * Switch input method and subtype. The caller must be the current inputmethod.
   *
   * @param { InputMethodProperty } inputMethodProperty - indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype
  ): Promise<boolean>;

  /**
   * Switch input method and subtype
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - indicates the bundleName of target input method.
   * @param { string } [subtypeId] - indicates the id of the input method subtype. 
   *     If the param is not set, switch to the target input method with a default subtype.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function switchInputMethod(bundleName: string, subtypeId?: string): Promise<void>;

  /**
   * Set simple keyboard mode.
   *
   * @param { boolean } enable - indicates enable simple keyboard or not.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setSimpleKeyboardEnabled(enable: boolean): void;
  
  /**
   * Subscribe the attachment failure event.
   * 
   * @param { Callback<AttachFailureReason> } callback - the callback is invoked only when the attachment
   *     triggered by the registrant's process fails.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void;

  /**
   * Unsubscribe the attachment failure event.
   *
   * @param { Callback<AttachFailureReason> } [callback] - the callback is invoked only when the attachment
   *     triggered by the registrant's process fails. When subscriber unsubscribes all callback, this parameter
   *     can be left blank.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void;

  /**
   * The callback of 'imeChange' event.
   *
   * @typedef { function } ImeChangeCallback.
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodsubtype - the subtype of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void;

  /**
   * The callback of 'getLeftTextOfCursor' or 'getRightTextOfCursor' event.
   *
   * @typedef { function } GetTextCallback.
   * @param { int } length - the length of text.
   * @returns { string } represents the text in edit box.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextCallback = (length: int) => string;

  /**
    * The callback of 'getTextIndexAtCursor' event.
    *
    * @typedef { function } GetTextIndexAtCursorCallback.
    * @returns { int } represents theindex number of text at cursor.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
  export type GetTextIndexAtCursorCallback = () => int;

  /**
   * @interface InputMethodSetting
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodSetting {
    /**
     * Subscribe input method or subtype change.
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { function } callback - the callback of 'imeChange'
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * Unsubscribe input method or subtype change.
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { function } [callback] - the callback of 'imeChange',
     *        when subscriber unsubscribes all callback functions of event 'imeChange', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * Subscribes to input window show events.
     *
     * @param { 'imeShow' } type - Indicates the event type.
     * @param { function } callback - the callback of 'imeShow'.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeShow', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Unsubscribe input window show event.
     *
     * @param { 'imeShow' } type - Indicates the event type.
     * @param { function } [callback] - the callback of 'imeShow',
     *        when subscriber unsubscribes all callback functions of event 'imeShow', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Subscribes to input window hidden events.
     *
     * @param { 'imeHide' } type - Indicates the event type.
     * @param { function } callback - the callback of 'imeHide'.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeHide', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Unsubscribe input window hide event.
     *
     * @param { 'imeHide' } type - Indicates the event type.
     * @param { function } [callback] - the callback of 'imeHide',
     *        when subscriber unsubscribes all callback functions of event 'imeHide', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * Query whether a panel with specified information is shown.
     *
     * @param { PanelInfo } panelInfo - the information of panel which is queried.
     * @returns { boolean }
     *     If true, the panel being queried is shown.
     *     If false, the panel being queried is hidden.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isPanelShown(panelInfo: PanelInfo): boolean;

    /**
     * Query whether the panel with specified information is shown on the target display.
     *
     * @param { PanelInfo } panelInfo - the information of panel which is queried.
     * @param { long } displayId - the id of the target display.
     * @returns { boolean }
     *     If true, the panel being queried is shown.
     *     If false, the panel being queried is hidden.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isPanelShown(panelInfo: PanelInfo, displayId: long): boolean;

    /**
     * List subtype of the specified input method.
     *
     * @param { InputMethodProperty } inputMethodProperty - the property of the specified inputmethod.
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listInputMethodSubtype.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(
      inputMethodProperty: InputMethodProperty,
      callback: AsyncCallback<Array<InputMethodSubtype>>
    ): void;

    /**
     * List subtype of the specified input method.
     *
     * @param { InputMethodProperty } inputMethodProperty - Indicates the specified input method.
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

    /**
     * List subtype of current input method
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listCurrentInputMethodSubtype.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * List subtype of current input method
     *
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * List input methods
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of getInputMethods.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * List input methods
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *      1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

    /**
     * List enabled or disabled input methods sync
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @returns { Array<InputMethodProperty> } the list of inputmethod.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getInputMethodsSync(enable: boolean): Array<InputMethodProperty>;

    /**
     * List all input methods
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of getInputMethods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * List all input methods
     *
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(): Promise<Array<InputMethodProperty>>;

    /**
     * List all input methods sync
     *
     * @returns { Array<InputMethodProperty> } the list of all inputmethod.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethodsSync(): Array<InputMethodProperty>;

    /**
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of listInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * Show input method setting extension dialog
     *
     * @param { AsyncCallback<boolean> } callback - the callback of showOptionalInputMethods.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * Show input method setting extension dialog
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     * @param { AsyncCallback<void> } callback - the callback of displayOptionalInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(): Promise<void>;

    /**
     * The input method application calls this interface to obtain its own enabled state.
     *
     * @returns { Promise<EnabledState> } the promise returned by the function.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getInputMethodState(): Promise<EnabledState>;

    /**
     * 
     * Change inputmethod enabled status.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - Indicates the bundleName of the inputmethod.
     * @param { string } extensionName - Indicates the extensionName of the inputmethod.
     * @param { EnabledState } enabledState - Indicates the enabledState to be changed.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800018 - input method is not found.
     * @throws { BusinessError } 12800019 - current operation cannot be applied to the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableInputMethod(bundleName: string, extensionName: string, enabledState: EnabledState): Promise<void>;

    /**
     * Subscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } callback - the callback called when the current input method changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onImeChange(callback: ImeChangeCallback): void;

    /**
     * Unsubscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } [callback] - the callback called when the current input method changes,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offImeChange(callback?: ImeChangeCallback): void;

    /**
     * Subscribes to input window show events.
     *
     * @param { Callback<Array<InputWindowInfo>> } callback - the callback called when input method shows.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeShow(callback: Callback<Array<InputWindowInfo>>):void;

    /**
     * Unsubscribe input window show event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method shows,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeShow(callback?: Callback<Array<InputWindowInfo>>):void;

    /**
     * Subscribes to input window hidden events.
     *
     * @param { Callback<Array<InputWindowInfo>>} callback - the callback called when input method hides.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeHide(callback: Callback<Array<InputWindowInfo>>): void;

    /**
     * Unsubscribe input window hide event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method hides,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeHide(callback?: Callback<Array<InputWindowInfo>>): void;
  }

  /**
   * @interface InputMethodController
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamic
   * @since 23 static
   */
  interface InputMethodController {
    /**
     * Attach application to the input method service.
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { AsyncCallback<void> } callback - the callback of attach.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>): void;
    /**
     * Attach application to the input method service.
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig): Promise<void>;
    /**
     * Attach application to the input method service.
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { RequestKeyboardReason } requestKeyboardReason - requestKeyboardReason of show the keyboard .
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * Attach application to the input method service with UI context.
     *
     * @param { UIContext } uiContext - indicates the ui context where the attachment will be performed.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { AttachOptions } [attachOptions] - indicates the attach options.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>;

    /**
     * Discard the typing text
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    discardTypingText(): Promise<void>;

    /**
     * Show the text input and start typing.
     *
     * @param { AsyncCallback<void> } callback - the callback of showTextInput.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(callback: AsyncCallback<void>): void;
    /**
     * Show the text input and start typing.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(): Promise<void>;
    /**
     * Show the text input and start typing.
     *
     * @param { RequestKeyboardReason } requestKeyboardReason - requestKeyboardReason of show the keyboard .
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    showTextInput(requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * Hide the text input and stop typing.
     *
     * @param { AsyncCallback<void> } callback - the callback of hideTextInput.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(callback: AsyncCallback<void>): void;

    /**
     * Hide the text input and stop typing.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(): Promise<void>;

    /**
     * Detach the applications from the input method manager service.
     *
     * @param { AsyncCallback<void> } callback - the callback of detach.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(callback: AsyncCallback<void>): void;

    /**
     * Detach the applications from the input method manager service.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(): Promise<void>;

    /**
     * Inform the system of the window ID of the application currently bound to the input method.
     * After the correct setting, the window where the client is located can avoid the input method window.
     *
     * @param { int } windowId - the window ID of the application currently bound to the input method.
     * @param { AsyncCallback<void> } callback - the callback of setCallingWindow.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * Inform the system of the window ID of the application currently bound to the input method.
     * After the correct setting, the window where the client is located can avoid the input method window.
     *
     * @param { int } windowId - the window ID of the application currently bound to the input method.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int): Promise<void>;

    /**
     * Update Cursor and notify the input method that the current application cursor has changed.
     *
     * @param { CursorInfo } cursorInfo - the CursorInfo object.
     * @param { AsyncCallback<void> } callback - the callback of updateCursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>): void;

    /**
     * Update Cursor and notify the input method that the current application cursor has changed.
     *
     * @param { CursorInfo } cursorInfo - the CursorInfo object.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo): Promise<void>;

    /**
     * Notify the input method the selected text and the selection range of the current application text has changed.
     *
     * @param { string } text - the whole input text.
     * @param { int } start - start position of selected text.
     * @param { int } end - end position of selected text.
     * @param { AsyncCallback<void> } callback - the callback of changeSelection.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>): void;

    /**
     * Notify the input method the selected text and the selection range of the current application text has changed.
     *
     * @param { string } text - the selected text.
     * @param { int } start - start position of selected text.
     * @param { int } end - end position of selected text.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int): Promise<void>;

    /**
     * Update InputAttribute information of input text.
     *
     * @param { InputAttribute } attribute - the InputAttribute object.
     * @param { AsyncCallback<void> } callback - the callback of updateAttribute.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>): void;

    /**
     * Update InputAttribute information of input text.
     *
     * @param { InputAttribute } attribute - the InputAttribute object.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute): Promise<void>;
    /**
     * Stop input session
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInputSession.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(callback: AsyncCallback<boolean>): void;

    /**
     * Stop input session
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(): Promise<boolean>;

    /**
     * Stop input
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInput.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * Stop input
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * Show soft keyboard.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of showSoftKeyboard.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Show soft keyboard.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(): Promise<void>;

    /**
     * Show the soft keyboard on the specific display.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - the id of the target display.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showSoftKeyboard(displayId: long): Promise<void>;

    /**
     * Hide soft keyboard.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of hideSoftKeyboard.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Hide soft keyboard.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(): Promise<void>;

    /**
     * Hide the soft keyboard on the specific display.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - the id of the target display.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hideSoftKeyboard(displayId: long): Promise<void>;

    /**
     * Send message to input method.
     *
     * @param { string } msgId - the identifier of the message. Max size is 256B.
     * @param { ?ArrayBuffer } [msgParam] - the param of the custom message. Max size is 128KB.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1. Incorrect parameter types. 2. Incorrect parameter length.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800014 - the input method is in basic mode.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @throws { BusinessError } 12800016 - input method client is not editable.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>;

    /**
     * Start receiving message from input method.
     *
     * @param { ?MessageHandler } [msgHandler] - optional, the handler of the custom message.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;

    /**
     * Register a callback and when IME sends select event with range of selection,
     * the callback will be invoked.
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @param { Callback<Range> } callback - processes selectByRange command. The range of selection is provided for
     *        this callback, and subscribers are expected to select corresponding text in callback according to
     *        the range.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * Unregister the callback of selectedByRange.
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @param { Callback<Range> } [callback] - the callback of 'selectByRange',
     *        when subscriber unsubscribes all callback functions of event 'selectByRange', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByRange', callback?: Callback<Range>): void;

    /**
     * Register a callback and when IME sends select event witch movement of cursor,
     * the callback will be invoked.
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @param { Callback<Movement> } callback - processes selectByMovement command. The movement of cursor is provided
     *        for this callback, and subscribers are expected to select corresponding text in callback according to
     *        the movement.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * Unregister the callback of selectedByMovement.
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @param { Callback<Movement> } [callback] - the callback of 'selectByMovement',
     *        when subscriber unsubscribes all callback functions of event 'selectByMovement', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByMovement', callback?: Callback<Movement>): void;

    /**
     * Register a callback and when IME sends insert text event, the callback will be invoked.
     *
     * @param { 'insertText' } type - event type, fixed as 'insertText'.
     * @param { function } callback - processes insertText command. The text of insert is provided for this callback.
     *        Subscribers are expected to process the inserted text and update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'insertText', callback: (text: string) => void): void;

    /**
     * Unregister the callback of insertText.
     *
     * @param { 'insertText' } type - event type, fixed as 'insertText'.
     * @param { function } [callback] - the callback of 'insertText',
     *        when subscriber unsubscribes all callback functions of event 'insertText', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'insertText', callback?: (text: string) => void): void;

    /**
     * Register a callback and when IME sends delete left event with length,
     * the callback will be invoked.
     *
     * @param { 'deleteLeft' } type - event type, fixed as 'deleteLeft'.
     * @param { function } callback - processes deleteLeft command. The length of
     *     delete is provided for this callback. Subscribers are expected to delete specified length of text
     *     to the left of the cursor and update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteLeft', callback: (length: number) => void): void;

    /**
     * Unregister the callback of deleteLeft.
     *
     * @param { 'deleteLeft' } type - event type, fixed as 'deleteLeft'.
     * @param { function } [callback] - the callback of 'deleteLeft',
     *        when subscriber unsubscribes all callback functions of event 'deleteLeft', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteLeft', callback?: (length: number) => void): void;

    /**
     * Register a callback and when IME sends delete right event with length,
     * the callback will be invoked.
     *
     * @param { 'deleteRight' } type - event type, fixed as 'deleteRight'.
     * @param { function } callback - processes deleteRight command. The length of
     *     delete is provided for this callback. Subscribers are expected to delete specified length of text
     *     to the right of the cursor and update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteRight', callback: (length: number) => void): void;

    /**
     * Unregister the callback of deleteRight.
     *
     * @param { 'deleteRight' } type - event type, fixed as 'deleteRight'.
     * @param { function } [callback] - the callback of 'deleteRight',
     *        when subscriber unsubscribes all callback functions of event 'deleteRight', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteRight', callback?: (length: number) => void): void;

    /**
     * Register a callback and when IME sends keyboard status, the callback will be invoked.
     *
     * @param { 'sendKeyboardStatus' } type - event type, fixed as 'sendKeyboardStatus'.
     * @param { function } callback - processes sendKeyboardStatus command.
     *     The keyboardStatus is provided for this callback.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * Unregister the callback of sendKeyboardStatus.
     *
     * @param { 'sendKeyboardStatus' } type - event type, fixed as 'sendKeyboardStatus'.
     * @param { function } [callback] - the callback of 'sendKeyboardStatus',
     *        when subscriber unsubscribes all callback functions of event 'sendKeyboardStatus', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * Register a callback and when IME sends functionKey, the callback will be invoked.
     *
     * @param { 'sendFunctionKey' } type - event type, fixed as 'sendFunctionKey'.
     * @param { function } callback - processes sendFunctionKey command.
     *     The functionKey is provided for this callback.Subscribers are expected to complete the
     *     corresponding task based on the value of functionKey.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

    /**
     * Unregister the callback of sendFunctionKey.
     *
     * @param { 'sendFunctionKey' } type - event type, fixed as 'sendFunctionKey'.
     * @param { function } [callback] - the callback of 'sendFunctionKey',
     *        when subscriber unsubscribes all callback functions of event 'sendFunctionKey', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void;

    /**
     * Register a callback and when IME sends move cursor, the callback will be invoked.
     *
     * @param { 'moveCursor' } type - event type, fixed as 'moveCursor'.
     * @param { function } callback - processes moveCursor command. The direction of
     *     cursor is provided for this callback. Subscribers are expected to move the cursor and update changes
     *     in editor by changeSelection and updateCursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'moveCursor', callback: (direction: Direction) => void): void;

    /**
     * Unregister the callback of moveCursor.
     *
     * @param { 'moveCursor' } type - event type, fixed as 'moveCursor'.
     * @param { function } [callback] - the callback of 'moveCursor',
     *        when subscriber unsubscribes all callback functions of event 'moveCursor', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'moveCursor', callback?: (direction: Direction) => void): void;

    /**
     * Register a callback and when IME sends extend action code, the callback will be invoked.
     *
     * @param { 'handleExtendAction' } type - event type, fixed as 'handleExtendAction'.
     * @param { function } callback - processes handleExtendAction command. The action code
     *     is provided for this callback.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

    /**
     * Unregister the callback of handleExtendAction.
     *
     * @param { 'handleExtendAction' } type - event type, fixed as 'handleExtendAction'.
     * @param { function } [callback] - the callback of 'handleExtendAction',
     *        when subscriber unsubscribes all callback functions of event 'handleExtendAction', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void;

    /**
     * Register a callback and when input method ability gets left text of cursor, the callback will be invoked.
     *
     * @param { 'getLeftTextOfCursor' } type - event type, fixed as 'getLeftTextOfCursor'.
     * @param { function } callback - processes getLeftTextOfCursor command. The callback
     *     must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void;

    /**
     * Unregister the callback of getLeftTextOfCursor event.
     *
     * @param { 'getLeftTextOfCursor' } type - event type, fixed as 'getLeftTextOfCursor'.
     * @param { function } [callback] - the callback of 'getLeftTextOfCursor',
     *     when subscriber unsubscribes all callback functions of event 'getLeftTextOfCursor', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void;

    /**
     * Register a callback and when input method ability gets right text of cursor, the callback will be invoked.
     *
     * @param { 'getRightTextOfCursor' } type - event type, fixed as 'getRightTextOfCursor'.
     * @param { function } callback - processes getRightTextOfCursor command. The callback
     *     must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getRightTextOfCursor', callback: (length: number) => string): void;

    /**
     * Unregister the callback of getRightTextOfCursor event.
     *
     * @param { 'getRightTextOfCursor' } type - event type, fixed as 'getRightTextOfCursor'.
     * @param { function } [callback] - the callback of 'getRightTextOfCursor',
     *     when subscriber unsubscribes all callback functions of event 'getRightTextOfCursor', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void;

    /**
     * Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.
     *
     * @param { 'getTextIndexAtCursor' } type - event type, fixed as 'getTextIndexAtCursor'.
     * @param { function } callback - processes getTextIndexAtCursor command. The callback
     *     must be a synchronization method, and should return the text index at the cursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getTextIndexAtCursor', callback: () => number): void;

    /**
     * Unregister the callback of getTextIndexAtCursor.
     *
     * @param { 'getTextIndexAtCursor' } type - event type, fixed as 'getTextIndexAtCursor'.
     * @param { function } [callback] - the callback of 'getTextIndexAtCursor',
     *     when subscriber unsubscribes all callback functions of event 'getTextIndexAtCursor', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getTextIndexAtCursor', callback?: () => number): void;

    /**
     * <p>Subscribe 'setPreviewText' event.</p>
     * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { 'setPreviewText' } type - the type of subscribe event.
     * @param { SetPreviewTextCallback } callback - the callback of on('setPreviewText').
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'setPreviewText', callback: SetPreviewTextCallback): void;

    /**
     * Unsubscribe 'setPreviewText' event.
     *
     * @param { 'setPreviewText' } type - the type of unsubscribe event.
     * @param { SetPreviewTextCallback } [callback] - optional, the callback of off('setPreviewText').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void;

    /**
     * <p>Subscribe 'finishTextPreview' event.</p>
     * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { 'finishTextPreview' } type - the type of subscribe event.
     * @param { Callback<void> } callback - the callback of on('finishTextPreview').
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'finishTextPreview', callback: Callback<void>): void;

    /**
     * Unsubscribe 'finishTextPreview' event.
     *
     * @param { 'finishTextPreview' } type - the type of unsubscribe event.
     * @param { Callback<void> } [callback] - optional, the callback of off('finishTextPreview').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'finishTextPreview', callback?: Callback<void>): void;

    /**
     * Register a callback and when IME sends select event with range of selection,
     * the callback will be invoked.
     *
     * @param { Callback<Range> } callback - the callback called when the input method selects text by range.
     *     The range of selection is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to the range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByRange(callback: Callback<Range>): void;
    /**
     * Unregister the callback of selectedByRange.
     *
     * @param { Callback<Range> } [callback] - the callback called when the input method selects text by range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByRange(callback?: Callback<Range>): void;

    /**
     * Register a callback and when IME sends select event witch movement of cursor,
     * the callback will be invoked.
     *
     * @param { Callback<Movement> } callback - the callback called when the input method selects text by movement.
     *     The movement of the cursor is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to themovement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByMovement(callback: Callback<Movement>): void;
    /**
     * Unregister the callback of selectedByMovement.
     *
     * @param { Callback<Movement> } [callback] - the callback called when the input method selects text by movement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByMovement(callback?: Callback<Movement>): void;

   /**
    * Register a callback and when IME sends insert text event, the callback will be invoked.
    *
    * @param { Callback<string> } callback - the callback called when the input method inserts text.
    *     Subscribers are expected to process the inserted text and update changes in editor by
    *     changeSelection and updateCursor as needed.
    * @throws  { BusinessError } 12800009 - input method client detached.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onInsertText(callback: Callback<string>): void;
  /**
   * Unregister the callback of insertText.
   *
   * @param { Callback<string> } [callback] - the callback called when the input method inserts text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    offInsertText(callback?: Callback<string>): void;

   /**
    * Register a callback and when IME sends delete left event with length,
    * the callback will be invoked.
    *
    * @param { Callback<int> } callback - the callback called when the input method deletes text
    *     to the left of the cursor. The length of delete is provided for this callback.
    *     Subscribers are expected to delete specified length of text to the left of the cursor and
    *     update changes in editor by changeSelection and updateCursor as needed.
    * @throws { BusinessError } 12800009 - input method client detached.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onDeleteLeft(callback: Callback<int>): void;
   /**
    * Unregister the callback of deleteLeft.
    *
    * @param { Callback<int> } [callback] - the callback called when the input method deletes text
    *     to the left of the cursor.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offDeleteLeft(callback?: Callback<int>): void;

    /**
     * Register a callback and when IME sends delete right event with length,
     * the callback will beinvoked.
     *
     * @param { Callback<int> } callback - the callback called whenthe input method deletes text
     *     to theright of the cursor. The length of delete is provided for this callback.
     *     Subscribers are expected to delete specified length of text to the right of the cursor and
     *     update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteRight(callback: Callback<int>): void;
  /**
   * Unregister the callback of deleteRight.
   *
   * @param { Callback<int> } [callback] - the callback called when the input method deletes text
   *     to the right of the cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    offDeleteRight(callback?: Callback<int>): void;

    /**
     * Register a callback and when IME sends keyboard status, the callback will be invoked.
     *
     * @param { Callback<KeyboardStatus> } callback - the callback called when the input method send keyboard's status.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void;
   /**
    * Unregister the callback of sendKeyboardStatus.
    *
    * @param { Callback<Keyboardstatus> } [callback] - the callback called when the inputmethod send
    *     keyboard's status.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void;

   /**
    * Register a callback and whenIME sends functionKey, the callback will be invoked.
    *
    * @param { Callback<FunctionKey> } callback - the callback called when the input method send function key.
    *     The functionKey is provided for this callback. Subscribers are expected to complete the
    *     corresponding task based on the value of functionKey.
    * @throws { BusinessError } 12800009 - input method client detached.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onSendFunctionKey(callback: Callback<FunctionKey>): void;
    /**
     * Unregister the callback of sendFunctionKey.
     *
     * @param { Callback<FunctionKey> } [callback] - the callback called when the input method send function key.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendFunctionKey(callback?: Callback<FunctionKey>): void;

    /**
     * Register a callback and when IME sends move cursor, the callback will be invoked.
     *
     * @param { Callback<Direction> } callback - the callback called when the input method moves cursor.
     *     The direction of cursor is provided for this callback. Subscribers are expected to move the cursor and
     *     update changes in editor by changeSelection and updateCursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMoveCursor(callback: Callback<Direction>): void;
  /**
   * Unregister the callback of moveCursor.
   *
   * @param { Callback<Direction> } [callback] - the callback called when the input method moves cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    offMoveCursor(callback?: Callback<Direction>): void;

  /**
   * Register a callback and when IME sends extend action code, the callback will be invoked.
   *
   * @param { Callback<ExtendAction> } callback - the callback called when the input method sends extend action.
   * @throws { BusinessError } 12800009 - input method client detached.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    onHandleExtendAction(callback: Callback<ExtendAction>): void;
  /**
   * Unregister the callback of handleExtendAction.
   *
   * @param { Callback<ExtendAction> } [callback] - the callback called when the input method sends extend action.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    offHandleExtendAction(callback?: Callback<ExtendAction>): void;

  /**
   * Register a callback and when input method ability gets left text of cursor, the callback will be invoked.
   *
   * @param { GetTextCallback } callback - the callback called when the input method gets text to the left
   *     of the cursor. The callback must be a synchronization method and will block the input method application.
   * @throws { BusinessError } 12800009 - input method client detached.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
    onGetLeftTextOfCursor(callback: GetTextCallback): void;
   /**
    * Unregister the callback of getLeftTextofCursor event.
    * 
    * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the left
    *     of the cursor. The callback must be a synchronization method and will block the input method application.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offGetLeftTextOfCursor(callback?: GetTextCallback): void;

   /**
    * Register a callback and when input method ability gets right text of cursor, the callback will be invoked.
    * 
    * @param { GetTextCallback } callback - the callback called when the input method gets text to the right
    *     of the cursor. The callback must be a synchronization method and will block the input method application.
    * @throws { BusinessError } 12800009 - input method client detached.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onGetRightTextOfCursor(callback: GetTextCallback): void;
   /**
    * Unregister the callback of getRightTextOfCursor event.
    * 
    * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the right
    *     of the cursor. The callback must be a synchronization method and will block the input method application.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offGetRightTextOfCursor(callback?: GetTextCallback): void;

   /**
    * Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.
    * 
    * @param { GetTextIndexAtCursorCallback } callback - the callback called when input method the gets cursor index.
    *     The callback must be a synchronization method, and should return the text index at the cursor.
    * @throws { BusinessError } 12800009 - input method client detached.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void;
   /**
    * Unregister the callback of getTextIndexAtCursor.
    * 
    * @param { GetTextIndexAtCursorCallback } [callback] - the callback called when the input method gets cursor index.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void;

   /**
    * <p>Subscribe 'setPreviewText' event.</p>
    * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
    * 
    * @param { SetPreviewTextCallback } callback - the callback called when the input method setspreview text.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onSetPreviewText(callback: SetPreviewTextCallback): void;
   /**
    * Unsubscribe 'setPreviewText' event.
    * 
    * @param { SetPreviewTextCallback } [callback] - optional, the callback called when the input method
    *     sets preview text.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    offSetPreviewText(callback?:SetPreviewTextCallback): void;

   /**
    * <p>Subscribe 'finishTextPreview' event.</p>
    * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
    * 
    * @param { Callback<void> } callback - the callback called when the input method finishes text preview.
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @since 23 static
    */
    onFinishTextPreview(callback: Callback<void>): void;
    /**
     * Unsubscribe 'finishTextPreview' event.
     * 
     * @param { Callback<void> } [callback] - optional, the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offFinishTextPreview(callback?: Callback<void>): void;
  }

  /**
   * input method property
   *
   * @interface InputMethodProperty
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodProperty {
    /**
     * The name of input method
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * The id of input method
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * The name of input method
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * The id of input method
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * The label of input method
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly label?: string;

    /**
     * The label id of input method
     *
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    readonly labelId?: long;

    /**
     * The icon of input method
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly icon?: string;

    /**
     * The icon id of input method
     *
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly iconId?: long;

    /**
     * The enabledState of input method
     *
     * @type { ?EnabledState }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly enabledState?: EnabledState;

    /**
     * The extra info of input method
     *
     * @type { object }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    /**
     * The extra info of input method
     *
     * @type { ?object }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    extra?: object;
  }

  /**
   * Enumerates the moving direction of cursor
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * Cursor moves up
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * Cursor moves down
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * Cursor moves left
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * Cursor moves right
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * Range of selected text.
   *
   * @typedef Range
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * Indicates the index of the first character of the selected text.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * Indicates the index of the last character of the selected text.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Movement of cursor.
   *
   * @typedef Movement
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * Indicates the direction of cursor movement
     *
     * @type { Direction }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * Enumerates the text input type.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum TextInputType {
    /**
     * The text input type is NONE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = -1,

    /**
     * The text input type is TEXT.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 0,

    /**
     * The text input type is MULTILINE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    MULTILINE,

    /**
     * The text input type is NUMBER.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NUMBER,

    /**
     * The text input type is PHONE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE,

    /**
     * The text input type is DATETIME.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DATETIME,

    /**
     * The text input type is EMAIL_ADDRESS.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS,

    /**
     * The text input type is URL.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    URL,

    /**
     * The text input type is VISIBLE_PASSWORD.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    VISIBLE_PASSWORD,

    /**
     * The text input type is NUMBER_PASSWORD.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER_PASSWORD,

    /**
     * The text input type is SCREEN_LOCK_PASSWORD.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK_PASSWORD,

    /**
     * The text input type is USER_NAME.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USER_NAME,

    /**
     * The text input type is NEW_PASSWORD.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NEW_PASSWORD,

    /**
     * The text input type is NUMBER_DECIMAL.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NUMBER_DECIMAL,

    /**
     * The text input type is ONE_TIME_CODE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    ONE_TIME_CODE
  }

  /**
   * Enumerates the enter key type.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum EnterKeyType {
    /**
     * The enter key type is UNSPECIFIED.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * The enter key type is NONE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * The enter key type is GO.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    GO,

    /**
     * The enter key type is SEARCH.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEARCH,

    /**
     * The enter key type is SEND.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEND,

    /**
     * The enter key type is NEXT.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NEXT,

    /**
     * The enter key type is DONE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DONE,

    /**
     * The enter key type is PREVIOUS.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PREVIOUS,

    /**
     * The enter key type is NEWLINE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    NEWLINE
  }

  /**
   * Enumerates the keyboard status.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum KeyboardStatus {
    /**
     * The keyboard status is none.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * The keyboard status is hide.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    HIDE = 1,

    /**
     * The keyboard status is show.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SHOW = 2
  }

  /**
   * Attribute of Input.
   *
   * @typedef InputAttribute
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputAttribute {
    /**
     * Indicates the text input type of the input method.
     *
     * @type { TextInputType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    textInputType: TextInputType;

    /**
     * Indicates the enter key type of the input method.
     *
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;

    /**
     * Placeholder text in the edit box.
     *
     * @type { ?string }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    placeholder?: string;

    /**
     * The name of the ability where the edit box is located.
     *
     * @type { ?string }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;
  }

  /**
   * FunctionKey of Input.
   *
   * @typedef FunctionKey
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface FunctionKey {
    /**
     * Indicates the enter key type of the input method.
     *
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;
  }

  /**
   * Information of Cursor.
   *
   * @typedef CursorInfo
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface CursorInfo {
    /**
     * Indicates the left point of the cursor info and must be absolute coordinate of the physical screen.
     *
     * @type { double }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * Indicates the top point of the cursor info and must be absolute coordinate of the physical screen.
     *
     * @type { double }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * Indicates the width point of the cursor info.
     *
     * @type { double }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * Indicates the height point of the cursor info.
     *
     * @type { double }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;
  }

  /**
   * Config of editor.
   *
   * @typedef TextConfig
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TextConfig {
    /**
     * Attribute of Input.
     *
     * @type { InputAttribute }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    inputAttribute: InputAttribute;

    /**
     * Cursor information.
     *
     * @type { ?CursorInfo }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    cursorInfo?: CursorInfo;

    /**
     * Selection information.
     *
     * @type { ?Range }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selection?: Range;

    /**
     * The window ID of the application currently bound to the input method.
     *
     * @type { ?int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    windowId?: int;

    /**
     *Indicates that this is a new edit box.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    newEditBox?: boolean;

    /**
     * Indicates the capitalize mode of the edit box.
     *
     * @type { ?CapitalizeMode }
     * @default CapitalizeMode.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    capitalizeMode?: CapitalizeMode;
  }

  /**
   * Enumerates the extend action.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * Select all text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * Cut selecting text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * Copy selecting text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * Paste from paste board.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * Information of input window.
   *
   * @typedef InputWindowInfo
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputWindowInfo {
    /**
     * Indicates name of the input window.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Indicates the abscissa of the upper-left vertex of input window.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * Indicates the ordinate of the upper-left vertex of input window.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * Indicates the width of the input window.
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Indicates the height of the input window.
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Indicates the id of the display where the input window is shown.
     *
     * @type { ?long }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;
  }

  /**
   * Callback function on receiving a custom message.
   * 
   * @typedef { function } OnMessageCallback.
   * @param { string } msgId - the identifier of the message.
   * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * <p>Custom message handler.</p>
   * <p>Implement this interface to respond to custom messages.</p>
   * 
   * @interface MessageHandler
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * This method is called when a custom message is received.
     * 
     * @type { OnMessageCallback }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;

    /**
     * This method is called when a new message handler is set.
     * 
     * @type { Callback<void> }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**	
     * This method is called when a custom message is received.	
     * 	
     * @param { string } msgId - the identifier of the message.	
     * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
     * @syscap SystemCapability.MiscServices.InputMethodFramework	
     * @since 15 dynamic
     */	
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;	

    /**	
     * This method is called when a new message handler is set.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * Enumerates the enabled state.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum EnabledState {
    /**
     * Disabled state.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * Enabled state with basic mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODE,

    /**
     * Enabled state with full experience mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FULL_EXPERIENCE_MODE
  }

  /**
   *  requestKeyboardReason of input click 
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
      * The request keyboard reason is NONE.
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 15 dynamic
      * @since 23 static
      */
    NONE = 0,
    /**
     * The request keyboard reason is MOUSE.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * The request keyboard reason is TOUCH.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * The request keyboard reason is OTHER.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * The callback of 'setPreviewText' event.
   *
   * @typedef { function } SetPreviewTextCallback.
   * @param { text } string - text to be previewed.
   * @param { range } Range - the range of the text to be replaced by the preview text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 17 dynamic
   * @since 23 static
   */
  export type SetPreviewTextCallback = (text: string, range: Range) => void;

 /**
  * Enumerates the capitalization mode.
  *
  * @enum { int }
  * @syscap SystemCapability.MiscServices.InputMethodFramework
  * @since 20 dynamic
  * @since 23 static
  */
  export enum CapitalizeMode {
    /**
      * Capitalize nothing.
      *
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 20 dynamic
      * @since 23 static
      */
    NONE = 0,

    /**
      * Capitalize the first letter of each sentence.
      *
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 20 dynamic
      * @since 23 static
      */
    SENTENCES,

    /**
      * Capitalize the first letter of each word.
      *
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 20 dynamic
      * @since 23 static
      */
    WORDS,

    /**
      * Capitalize each letter.
      *
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 20 dynamic
      * @since 23 static
      */
    CHARACTERS
  }
  
  /**
   * Enumerates the specific reasons for attachment failure
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AttachFailureReason {
    /**
     * The attachment failure reason is CALLER_NOT_FOCUSED.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    CALLER_NOT_FOCUSED = 0,

    /**
     * The attachment failure reason is IME_ABNORMAL.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    IME_ABNORMAL,

    /**
     * The attachment failure reason is SERVICE_ABNORMAL.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    SERVICE_ABNORMAL
  }
  /**
   * Attach options.
   *
   * @interface AttachOptions
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AttachOptions {
    /**
     * Whether to show the keyboard when attaching.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showKeyboard?: boolean;
    /**
     * The reason for request keyboard.
     *
     * @type { ?RequestKeyboardReason }
     * @default RequestKeyboardReason.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestKeyboardReason?: RequestKeyboardReason;
  }
}

export default inputMethod;