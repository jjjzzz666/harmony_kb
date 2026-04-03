/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';
import type { KeyEvent as InputKeyEvent } from './@ohos.multimodalInput.keyEvent';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import BaseContext from './application/BaseContext';
import window from './@ohos.window';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
/*** endif */

import { InputMethodExtraConfig } from './@ohos.inputMethod.ExtraConfig';
/**
 * Input method engine
 *
 * @namespace inputMethodEngine
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputMethodEngine {
  /**
   * When "enter" key is pressed, there is no action
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_UNSPECIFIED: int;

  /**
   * When "enter" key is pressed, it means GO
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_GO: int;

  /**
   * When "enter" key is pressed, it means SEARCH
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEARCH: int;

  /**
   * When "enter" key is pressed, it means SEND
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEND: int;

  /**
   * When "enter" key is pressed, it means NEXT
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEXT: int;

  /**
   * When "enter" key is pressed, it means DONE
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_DONE: int;

  /**
   * When "enter" key is pressed, it means PREVIOUS
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_PREVIOUS: int;

  /**
   * When "enter" key is pressed, it means NEWLINE
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEWLINE: int;

  /**
   * Editor with no special function
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NULL: int;

  /**
   * Editor of type TEXT
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_TEXT: int;

  /**
   * Editor of type NUMBER
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER: int;

  /**
   * Editor of type PHONE NUMBER
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PHONE: int;

  /**
   * Editor of type DATETIME
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_DATETIME: int;

  /**
   * Editor of type EMAIL
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_EMAIL: int;

  /**
   * Editor of type URI
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_URI: int;

  /**
   * Editor of type PASSWORD
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD: int;

  /**
   * Editor of type SCREEN LOCK PASSWORD
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_SCREEN_LOCK: int;

  /**
   * Editor of type NUMBER PASSWORD
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_NUMBER: int;

  /**
   * Editor of type PATTERN_USER_NAME
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_USER_NAME: int = 10;

  /**
   * Editor of type PATTERN_NEW_PASSWORD
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NEW_PASSWORD: int = 11;

  /**
   * Editor of type PATTERN_NUMBER_DECIMAL
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER_DECIMAL: int = 12;

  /**
   * Editor of type PATTERN_ONE_TIME_CODE
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_ONE_TIME_CODE: int = 13;

  /**
   * Editor in SELECTING state
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SELECTING: int;

  /**
   * Editor in SINGLE_LINE state
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SINGLE_LINE: int;

  /**
   * The Editor displays in PART mode
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_PART: int;

  /**
   * The Editor displays in FULL mode
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_FULL: int;

  /**
   * Allows ASCII to be inputted
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_ASCII: int;

  /**
   * Do not specify Editor's input type
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NONE: int;

  /**
   * Allows CHARACTERS to be inputted
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_CHARACTERS: int;

  /**
   * Allows SENTENCES to be inputted
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_SENTENCES: int;

  /**
   * Allows WORDS to be inputted
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_WORDS: int;

  /**
   * Allows MULTI_LINE to be inputted
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_MULTI_LINE: int;

  /**
   * Half-screen mode
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NO_FULLSCREEN: int;

  /**
   * The move direction of cursor: UP
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_UP: int;

  /**
   * The move direction of cursor: DOWN
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_DOWN: int;

  /**
   * The move direction of cursor: LEFT
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_LEFT: int;

  /**
   * The move direction of cursor: RIGHT
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_RIGHT: int;

  /**
   * The window styles for input method ability.
   *
   * @type { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const WINDOW_TYPE_INPUT_METHOD_FLOAT: int;

  /**
   * Get InputMethodAbility object to subscribe events about IME.
   *
   * @returns { InputMethodAbility } the object of the InputMethodAbility.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getInputMethodAbility(): InputMethodAbility;

  /**
   * Get InputMethodAbility object to subscribe events about IME.
   *
   * @returns { InputMethodAbility | null } the object of the InputMethodAbility.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getInputMethodAbility(): InputMethodAbility | null;

  /**
   * @returns { InputMethodEngine }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine#getInputMethodAbility
   */
  function getInputMethodEngine(): InputMethodEngine;

  /**
   * Get KeyboardDelegate object to subscribe key event or events about editor.
   *
   * @returns { KeyboardDelegate } the object of KeyboardDelegate.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getKeyboardDelegate(): KeyboardDelegate;

  /**
   * Get KeyboardDelegate object to subscribe key event or events about editor.
   *
   * @returns { KeyboardDelegate | null } the object of KeyboardDelegate.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getKeyboardDelegate(): KeyboardDelegate | null;

  /**
   * @returns { KeyboardDelegate }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine#getKeyboardDelegate
   */
  function createKeyboardDelegate(): KeyboardDelegate;

  /**
   * Indicates the possible data types of the command.
   * @typedef { int | string | boolean }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  type CommandDataType = int | string | boolean;

  /**
   * The callback of 'inputStart' event.
   *
   * @typedef { function } IMAInputStartCallback.
   * @param { KeyboardController } kbController - keyboard controller.
   * @param { InputClient } inputClient - input client.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void;

  /**
   * The callback of 'keyDown' or 'keyUp' event.
   *
   * @typedef { function } KeyEventCallback.
   * @param { KeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type KeyEventCallback = (event: KeyEvent) => boolean;

  /**
   * The callback of 'keyEvent' event.
   *
   * @typedef { function } InputKeyEventCallback.
   * @param { InputKeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type InputKeyEventCallback = (event: InputKeyEvent) => boolean;

  /**
   * The callback of 'cursorContextChange' event.
   *
   * @typedef { function } CursorContextChangeCallback.
   * @param { double } x - the left point of the cursor.
   * @param { double } y - the top point of the cursor.
   * @param { double } height - the height of the cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type CursorContextChangeCallback = (x: double, y: double, height: double) => void;

  /**
   * The callback of 'selectionChange' event.
   *
   * @typedef { function } SelectionChangeCallback.
   * @param { int } oldBegin - the old begin of the selected text.
   * @param { int } oldEnd - the old end of the selected text.
   * @param { int } newBegin - the new begin of the selected text.
   * @param { int } newEnd - the new end of the selected text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type SelectionChangeCallback = (oldBegin: int, oldEnd: int, newBegin: int, newEnd: int) => void;

  /**
   * The callback of 'sizeUpdate' event.
   *
   * @typedef { function } SizeUpdateCallback.
   * @param { window.Size } size - panel size.
   * @param { KeyboardArea } keyboardArea - keyboard area.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void;

  /**
   * The callback of 'sizeChange' event.
   *
   * @typedef { function } SizeChangeCallback.
   * @param { window.Size } size - panel size.
   * @param { KeyboardArea } keyboardArea - keyboard area.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export type SizeChangeCallback = (size: window.Size, keyboardArea?: KeyboardArea) => void;

  /**
   * @interface KeyboardController
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardController {
    /**
     * Hide soft keyboard
     *
     * @param { AsyncCallback<void> } callback - indicates the callback function of hide.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hide soft keyboard
     *
     * @returns { Promise<void> } the promise returned by the function
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * @param { AsyncCallback<void> } callback - indicates the callback function of hideKeyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController#hide
     */
    hideKeyboard(callback: AsyncCallback<void>): void;

    /**
     * @returns { Promise<void> } the promise returned by the function
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController#hide
     */
    hideKeyboard(): Promise<void>;

    /**
     * Exit the current input type. This function can only be called by default input method configured by system.
     *
     * @param { AsyncCallback<void> } callback - the callback of exitCurrentInputType.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    exitCurrentInputType(callback: AsyncCallback<void>): void;

    /**
     * Exit the current input type. This function can only be called by default input method configured by system.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    exitCurrentInputType(): Promise<void>;
  }

  /**
   * @interface InputMethodEngine
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 23
   * @useinstead inputMethodEngine#InputMethodAbility
   */
  interface InputMethodEngine {
    /**
     * Subscribe 'inputStart'
     *
     * @param { 'inputStart' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback of on('inputStart').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead InputMethodAbility#on
     */
    on(
      type: 'inputStart',
      callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * Unsubscribe 'inputStart'
     *
     * @param { 'inputStart' } type - indicates the type of subscribe event.
     * @param { function } callback - optional, indicates the callback of off('inputStart').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead InputMethodAbility#off
     */
    off(
      type: 'inputStart',
      callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * Subscribe 'keyboardShow'|'keyboardHide'
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback of on('keyboardShow'|'keyboardHide').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead InputMethodAbility#on
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * Unsubscribe 'keyboardShow'|'keyboardHide'
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - indicates the type of subscribe event.
     * @param { function } [callback] - optional, indicates the callback of off('keyboardShow'|'keyboardHide').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead InputMethodAbility#off
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;
  }

  /**
   * <p>Control events about IME.</p>
   * <p>Events provided for IME to subscribe with callback function. When those events occur, the corresponding callback
   * will be invoked.</p>
   *
   * @interface InputMethodAbility
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputMethodAbility {
    /**
     * Subscribe 'inputStart' event.
     *
     * @param { 'inputStart' } type - the type of subscribe event.
     * @param { function } callback - the callback of on('inputStart').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * Unsubscribe 'inputStart' event.
     *
     * @param { 'inputStart' } type - the type of unsubscribe event.
     * @param { function } [callback] - optional, the callback of off('inputStart').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * Subscribe 'inputStop'.
     *
     * @param { 'inputStop' } type - the type of subscribe event.
     * @param { function } callback - the callback of on('inputStop').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStop', callback: () => void): void;

    /**
     * Unsubscribe 'inputStop'.
     *
     * @param { 'inputStop' } type - the type of unsubscribe event.
     * @param { function } callback - the callback of off('inputStop').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStop', callback: () => void): void;

    /**
     * Subscribe 'setCallingWindow'.
     *
     * @param { 'setCallingWindow' } type - the type of subscribe event.
     * @param { function } callback - the callback of on('setCallingWindow').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * Unsubscribe 'setCallingWindow'.
     *
     * @param { 'setCallingWindow' } type - the type of unsubscribe event.
     * @param { function } callback - the callback of off('setCallingWindow').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * Subscribe 'keyboardShow'|'keyboardHide'.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - the type of subscribe event.
     * @param { function } callback - the callback of on('keyboardShow'|'keyboardHide').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * Unsubscribe 'keyboardShow'|'keyboardHide'.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - the type of unsubscribe event.
     * @param { function } [callback] - the callback of off('keyboardShow'|'keyboardHide').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

    /**
     * Subscribe 'setSubtype'.
     *
     * @param { 'setSubtype' } type - the type of subscribe event.
     * @param { function } callback - the callback of on('setSubtype').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setSubtype', callback: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * Unsubscribe 'setSubtype'.
     *
     * @param { 'setSubtype' } type - the type of subscribe event.
     * @param { function } [callback] - the callback of off('setSubtype').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setSubtype', callback?: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * Subscribe 'securityModeChange' event.
     *
     * @param { 'securityModeChange' } type - the type of subscribe event.
     * @param { Callback<SecurityMode> } callback - the callback of on('securityModeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    on(type: 'securityModeChange', callback: Callback<SecurityMode>): void;

    /**
     * Unsubscribe 'securityModeChange' event.
     *
     * @param { 'securityModeChange' } type - the type of unsubscribe event.
     * @param { Callback<SecurityMode> } [callback] - optional, the callback of off('securityModeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    off(type: 'securityModeChange', callback?: Callback<SecurityMode>): void;

    /**
     * Subscribe 'privateCommand'.This function can only be called by default input method configured by system.
     *
     * @param { 'privateCommand' } type - indicates the type of subscribe event.
     * @param { Callback<Record<string, CommandDataType>> } callback - indicates the callback of on('privateCommand').
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    on(type: 'privateCommand', callback: Callback<Record<string, CommandDataType>>): void;

    /**
     * Unsubscribe 'privateCommand'.This function can only be called by default input method configured by system.
     *
     * @param { 'privateCommand' } type - indicates the type of subscribe event.
     * @param { Callback<Record<string, CommandDataType>> } [callback] - optional,
     * indicates the callback of off('privateCommand').
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    off(type: 'privateCommand', callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * Subscribe 'callingDisplayDidChange' event.
     *
     * @param { 'callingDisplayDidChange' } type - indicates the type of subscribe event.
     * @param { Callback<number> } callback - indicates the callback of on('callingDisplayDidChange').
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    on(type: 'callingDisplayDidChange', callback: Callback<number>): void;

    /**
     * Unsubscribe 'callingDisplayDidChange' event.
     *
     * @param { 'callingDisplayDidChange' } type - indicates the type of subscribe event.
     * @param { Callback<number> } [callback] - optional, indicates the callback of off('callingDisplayDidChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    off(type: 'callingDisplayDidChange', callback?: Callback<number>): void;

    /** 
     * Subscribe 'discardTypingText' event.
     *
     * @param { 'discardTypingText' } type - indicates the type of subscribe event.
     * @param { Callback<void> } callback - indicates the callback of on('discardTypingText').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    on(type: 'discardTypingText', callback: Callback<void>): void;

    /**
     * Unsubscribe 'discardTypingText' event.
     *
     * @param { 'discardTypingText' } type - indicates the type of unsubscribe event.
     * @param { Callback<void> } [callback] - optional, indicates the callback of off('discardTypingText').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    off(type: 'discardTypingText', callback?: Callback<void>): void;

    /**
     * Get input method's security mode.
     *
     * @returns { SecurityMode } return security mode.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getSecurityMode(): SecurityMode;

    /**
     * Creates a panel.
     * <p>The system only allows one soft keyboard and one status bar to be created.</p>
     *
     * @param { BaseContext } ctx - indicates the context on which the window depends.
     * @param { PanelInfo } info - the info of panel to be created.
     * @param { AsyncCallback<Panel> } callback - the callback of createPanel.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>): void;

    /**
     * Creates a panel.
     * <p>The system only allows one soft keyboard and one status bar to be created.</p>
     *
     * @param { BaseContext } ctx - indicates the context on which the window depends.
     * @param { PanelInfo } info - the info of panel to be created.
     * @returns { Promise<Panel> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo): Promise<Panel>;

    /**
     * Destroys a panel.
     *
     * @param { Panel } panel - to be destroyed.
     * @param { AsyncCallback<void> } callback - the callback of destroyPanel.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel, callback: AsyncCallback<void>): void;

    /**
     * Destroys a panel.
     *
     * @param { Panel } panel - to be destroyed.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel): Promise<void>;

    /**
     * Subscribe 'inputStart' event.
     *
     * @param { IMAInputStartCallback } callback - the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStart(callback: IMAInputStartCallback): void;
    /**
     * Unsubscribe 'inputStart' event.
     *
     * @param { IMAInputStartCallback } [callback] - optional, the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStart(callback?: IMAInputStartCallback): void;

    /**
     * Subscribe 'inputStop'.
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStop(callback: Callback<void>): void;
    /**
     * Unsubscribe 'inputStop'.
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStop(callback: Callback<void>): void;

    /**
     * Subscribe 'setCallingWindow'.
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetCallingWindow(callback: Callback<int>): void;
    /**
     * Unsubscribe 'setCallingWindow'.
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetCallingWindow(callback: Callback<int>): void;

    /**
     * Subscribe 'keyboardShow'.
     *
     * @param { Callback<void> } callback - the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardShow(callback: Callback<void>): void;
    /**
     * Unsubscribe 'keyboardShow'.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardShow(callback?: Callback<void>): void;

    /**
     * Subscribe 'keyboardHide'.
     *
     * @param { Callback<void> } callback - the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardHide(callback: Callback<void>): void;
    /**
     * Unsubscribe 'keyboardHide'.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardHide(callback?: Callback<void>): void;

    /**
     * Subscribe 'setSubtype'.
     *
     * @param { Callback<InputMethodSubtype> } callback - the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetSubtype(callback: Callback<InputMethodSubtype>): void;
    /**
     * Unsubscribe 'setSubtype'.
     *
     * @param { Callback<InputMethodSubtype> } [callback] - optional, the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetSubtype(callback?: Callback<InputMethodSubtype>): void;

    /**
     * Subscribe 'securityModeChange' event.
     *
     * @param { Callback<SecurityMode> } callback - the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSecurityModeChange(callback: Callback<SecurityMode>): void;
    /**
     * Unsubscribe 'securityModeChange' event.
     *
     * @param { Callback<SecurityMode> } [callback] - optional, the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSecurityModeChange(callback?: Callback<SecurityMode>): void;

    /**
     * Subscribe 'privateCommand'. This function can only be called by default input method configured by system.
     *
     * @param { Callback<Record<string, CommandDataType>> } callback - the callback called when receiving
     *     private command.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;
    /**
     * Unsubscribe 'privateCommand'. This function can only be called by default input method configured by system.
     *
     * @param { Callback<Record<string, CommandDataType>> } [callback] - optional,
     *     the callback called when receiving private command.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * Subscribe 'callingDisplayDidChange' event.
     *
     * @param { Callback<int> } callback - the callback called when calling display id changed.
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCallingDisplayDidChange(callback: Callback<int>): void;
    /**
     * Unsubscribe 'callingDisplayDidChange' event.
     *
     * @param { Callback<int> } [callback] - optional, the callback called when calling display id changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCallingDisplayDidChange(callback?: Callback<int>): void;

    /**
     * Subscribe 'discardTypingText' event.
     *
     * @param { Callback<void> } callback - the callback called when the edit box requests to discard typing text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDiscardTypingText(callback: Callback<void>): void;
    /**
     * Unsubscribe 'discardTypingText' event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the edit box requests to
     *     discard typing text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDiscardTypingText(callback?: Callback<void>): void;
  }

  /**
   * @interface TextInputClient
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine#InputClient
   */
  interface TextInputClient {
    /**
     * @param { number } action - action indicates the function of "enter" key.
     * @param { AsyncCallback<boolean> } callback - the callback of sendKeyFunction.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#sendKeyFunction
     */
    sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void;

    /**
     * @param { number } action - action indicates the function of "enter" key.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#sendKeyFunction
     */
    sendKeyFunction(action: number): Promise<boolean>;

    /**
     * @param { number } length - length of text which will be deleted forward.
     * @param { AsyncCallback<boolean> } callback - the callback of deleteForward.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#deleteForward
     */
    deleteForward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * @param { number } length - length of text which will be deleted forward.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#deleteForward
     */
    deleteForward(length: number): Promise<boolean>;

    /**
     * @param { number } length - length of text which will be deleted backward.
     * @param { AsyncCallback<boolean> } callback - the callback of deleteBackward.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#deleteBackward
     */
    deleteBackward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * @param { number } length - length of text which will be deleted backward.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#deleteBackward
     */
    deleteBackward(length: number): Promise<boolean>;

    /**
     * @param { string } text - text which will be inserted.
     * @param { AsyncCallback<boolean> } callback - the callback of insertText.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#insertText
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * @param { string } text - text which will be inserted.
     * @returns { Promise<boolean> } the promise returned by the function
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#insertText
     */
    insertText(text: string): Promise<boolean>;

    /**
     * @param { number } length - the length of text which will be got.
     * @param { AsyncCallback<string> } callback - the callback of getForward.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getForward
     */
    getForward(length: number, callback: AsyncCallback<string>): void;

    /**
     * @param { number } length - the length of text which will be got.
     * @returns { Promise<string> } the promise returned by the function
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getForward
     */
    getForward(length: number): Promise<string>;

    /**
     * @param { number } length - the length of text which will be got.
     * @param { AsyncCallback<string> } callback - the callback of getBackward.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getBackward
     */
    getBackward(length: number, callback: AsyncCallback<string>): void;

    /**
     * @param { number } length - the length of text which will be got.
     * @returns { Promise<string> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getBackward
     */
    getBackward(length: number): Promise<string>;

    /**
     * @param { AsyncCallback<EditorAttribute> } callback - the callback of getEditorAttribute.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getEditorAttribute
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * @returns { Promise<EditorAttribute> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient#getEditorAttribute
     */
    getEditorAttribute(): Promise<EditorAttribute>;
  }

  /**
   * Control events about Editor.
   *
   * @interface InputClient
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputClient {
    /**
     * Send the function of the key.
     *
     * @param { int } action - action indicates the function of "enter" key.
     * @param { AsyncCallback<boolean> } callback - the callback of sendKeyFunction.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int, callback: AsyncCallback<boolean>): void;

    /**
     * Send the function of the key.
     *
     * @param { number } action - action indicates the function of "enter" key.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int): Promise<boolean>;

    /**
     * Delete text forward.
     *
     * @param { int } length - length of text which will be deleted forward. It can't be less than 0.
     * @param { AsyncCallback<boolean> } callback - the callback of deleteForward.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * Delete text forward.
     *
     * @param { int } length - length of text which will be deleted forward. It can't be less than 0.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int): Promise<boolean>;

    /**
     * Delete text forward.
     *
     * @param { int } length - length of text which will be deleted forward. It can't be less than 0.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteForwardSync(length: int): void;

    /**
     * Delete text backward.
     *
     * @param { int } length - length of text which will be deleted backward. It can't be less than 0.
     * @param { AsyncCallback<boolean> } callback - the callback of deleteBackward.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * Delete text backward.
     *
     * @param { int } length - length of text which will be deleted backward. It can't be less than 0.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int): Promise<boolean>;

    /**
     * Delete text backward.
     *
     * @param { int } length - length of text which will be deleted backward. It can't be less than 0.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteBackwardSync(length: int): void;

    /**
     * Insert text into Editor.
     *
     * @param { string } text - text which will be inserted.
     * @param { AsyncCallback<boolean> } callback - the callback of insertText.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * Insert text into Editor.
     *
     * @param { string } text - text which will be inserted.
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string): Promise<boolean>;

    /**
     * Insert text into Editor.
     *
     * @param { string } text - text which will be inserted.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    insertTextSync(text: string): void;

    /**
     * Get the text before cursor.
     *
     * @param { int } length - the length of text which will be got. It can't be less than 0.
     * @param { AsyncCallback<string> } callback - the callback of getForward.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getForward(length: int, callback: AsyncCallback<string>): void;

    /**
     * Get the text before cursor.
     *
     * @param { int } length - the length of text which will be got. It can't be less than 0.
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getForward(length: int): Promise<string>;

    /**
     * Get the text before cursor.
     *
     * @param { int } length - the length of text which will be got. It can't be less than 0.
     * @returns { string } the text string before cursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getForwardSync(length: int): string;

    /**
     * Get the text after cursor.
     *
     * @param { int } length - the length of text which will be got.It can't be less than 0.
     * @param { AsyncCallback<string> } callback - the callback of getBackward.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getBackward(length: int, callback: AsyncCallback<string>): void;

    /**
     * Get the text after cursor.
     *
     * @param { int } length - the length of text which will be got.It can't be less than 0.
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getBackward(length: int): Promise<string>;

    /**
     * Get the text after cursor.
     *
     * @param { int } length - the length of text which will be got. It can't be less than 0.
     * @returns { string } the text string after cursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getBackwardSync(length: int): string;

    /**
     * Get attribute about editor.
     *
     * @param { AsyncCallback<EditorAttribute> } callback - the callback of getEditorAttribute.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * Get attribute about editor.
     *
     * @param { AsyncCallback<EditorAttribute | null> } callback - the callback of getEditorAttribute.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute | null>): void;

    /**
     * Get attribute about editor.
     *
     * @returns { Promise<EditorAttribute> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(): Promise<EditorAttribute>;

    /**
     * Get attribute about editor.
     *
     * @returns { Promise<EditorAttribute | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(): Promise<EditorAttribute | null>;

    /**
     * Get attribute about editor.
     *
     * @returns { EditorAttribute } the attribute of editor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    getEditorAttributeSync(): EditorAttribute;

    /**
     * Get attribute about editor.
     *
     * @returns { EditorAttribute | null } the attribute of editor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttributeSync(): EditorAttribute | null;

    /**
     * Move cursor from input method.
     *
     * @param { int } direction - Indicates the distance of cursor to be moved. It can't be less than 0.
     * @param { AsyncCallback<void> } callback - the callback of moveCursor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    moveCursor(direction: int, callback: AsyncCallback<void>): void;

    /**
     * Move cursor from input method.
     *
     * @param { int } direction - Indicates the distance of cursor to be moved. It can't be less than 0.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    moveCursor(direction: int): Promise<void>;

    /**
     * Move cursor from input method.
     *
     * @param { int } direction - Indicates the distance of cursor to be moved. It can't be less than 0.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *    1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveCursorSync(direction: int): void;

    /**
     * Select text in editor by range.
     *
     * @param { Range } range - indicates the range of selected text in editor.
     * @param { AsyncCallback<void> } callback - the callback of selectByRange.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range, callback: AsyncCallback<void>): void;

    /**
     * Select text in editor by range.
     *
     * @param { Range } range - indicates the range of selected text in editor.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *    1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range): Promise<void>;

    /**
     * Select text in editor by range.
     *
     * @param { Range } range - indicates the range of selected text in editor.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRangeSync(range: Range): void;

    /**
     * Select text in editor by cursor movement.
     *
     * @param { Movement } movement - indicates the movement of cursor when selecting.
     * @param { AsyncCallback<void> } callback - the callback of selectByMovement.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement, callback: AsyncCallback<void>): void;

    /**
     * Select text in editor by cursor movement.
     *
     * @param { Movement } movement - indicates the movement of cursor when selecting.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement): Promise<void>;

    /**
     * Select text in editor by cursor movement.
     *
     * @param { Movement } movement - indicates the movement of cursor when selecting.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovementSync(movement: Movement): void;

    /**
     * Get the index number of text at cursor.
     *
     * @param { AsyncCallback<int> } callback - the callback of getTextIndexAtCursor, number represents the index
     *        number of text at cursor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(callback: AsyncCallback<int>): void;

    /**
     * Get the index number of text at cursor.
     *
     * @returns { Promise<int> } the promise returned by the function, number represents the index number of text
     *          at cursor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(): Promise<int>;

    /**
     * Get the index number of text at cursor.
     *
     * @returns { int } the index number of text at cursor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursorSync(): int;

    /**
     * Send extend action code.
     *
     * @param { ExtendAction } action - action code which will be send.
     * @param { AsyncCallback<void> } callback - the callback of sendExtendAction.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    sendExtendAction(action: ExtendAction, callback: AsyncCallback<void>): void;

    /**
     * Send extend action code.
     *
     * @param { ExtendAction } action - action code which will be send.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    sendExtendAction(action: ExtendAction): Promise<void>;

    /**
     * Send private command.This function can only be called by default input method configured by system.
     *
     * @param { Record<string, CommandDataType> } commandData - command data which will be send.Max size 32KB.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>;

    /**
     * Get info of the calling window.
     *
     * @returns { Promise<WindowInfo> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800012 - the input method panel does not exist.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    getCallingWindowInfo(): Promise<WindowInfo>;

    /**
     * Get info of the calling window.
     *
     * @returns { Promise<WindowInfo | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800012 - the input method panel does not exist.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getCallingWindowInfo(): Promise<WindowInfo | null>;

    /**
     * Insert the provided text as preview text.
     *
     * @param { string } text - the text to be previewed.
     * @param { Range } range - the range of the text to be replaced by the preview text.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *    1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewText(text: string, range: Range): Promise<void>;

    /**
     * Insert the provided text as preview text.
     *
     * @param { string } text - the text to be previewed.
     * @param { Range } range - the range of the text to be replaced by the preview text.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewTextSync(text: string, range: Range): void;

    /**
     * Finish the text preview.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    finishTextPreview(): Promise<void>;

    /**
     * Finish the text preview.
     *
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    finishTextPreviewSync(): void;

    /**
     * Send message to edit box.
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
     * Start receiving message from edit box.
     *
     * @param { ?MessageHandler } [msgHandler] - optional, the handler of the custom message.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;
    /**
     * Get input attachOptions.
     *
     * @returns { AttachOptions } return attach options.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19
     */
    /**
     * Get input attachOptions.
     *
     * @returns { AttachOptions } return attach options.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    getAttachOptions(): AttachOptions;

    /**
     * Get input attachOptions.
     *
     * @returns { AttachOptions | null } return attach options.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getAttachOptions(): AttachOptions | null;

    /**
     * Subscribe 'attachOptionsDidChange' event.
     *
     * @param { 'attachOptionsDidChange' } type - the type of subscribe event.
     * @param { Callback<AttachOptions> } callback - the callback of on('attachOptionsDidChange').
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19
     */
    /**
     * Subscribe 'attachOptionsDidChange' event.
     *
     * @param { 'attachOptionsDidChange' } type - the type of subscribe event.
     * @param { Callback<AttachOptions> } callback - the callback of on('attachOptionsDidChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    on(type: 'attachOptionsDidChange', callback: Callback<AttachOptions>): void;
    /**
     * Unsubscribe 'attachOptionsDidChange' event.
     *
     * @param { 'attachOptionsDidChange' } type - the type of unsubscribe event.
     * @param { Callback<AttachOptions> } [callback] - optional, the callback of off('attachOptionsDidChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    off(type: 'attachOptionsDidChange', callback?: Callback<AttachOptions>): void;

    /**
     * Subscribe 'attachOptionsDidChange' event.
     *
     * @param { Callback<AttachOptions> } callback - the callback called when the attach options changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onAttachOptionsDidChange(callback: Callback<AttachOptions>): void;
    /**
     * Unsubscribe 'attachOptionsDidChange' event.
     *
     * @param { Callback<AttachOptions> } [callback] - optional, the callback called when the attach options changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offAttachOptionsDidChange(callback?: Callback<AttachOptions>): void;
  }

  /**
   * @interface KeyboardDelegate
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardDelegate {
    /**
     * Subscribe key up or down event
     *
     * @param { 'keyDown' | 'keyUp' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function of on('keyDown'|'keyUp').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'keyDown' | 'keyUp', callback: (event: KeyEvent) => boolean): void;

    /**
     * Unsubscribe key up or down event
     *
     * @param { 'keyDown' | 'keyUp' } type - indicates the type of unsubscribe event.
     * @param { function } [callback] - optional, indicates the callback function of off('keyDown'|'keyUp').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'keyDown' | 'keyUp', callback?: (event: KeyEvent) => boolean): void;

    /**
     * Subscribe key event.
     *
     * @param { 'keyEvent' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function of on('keyEvent').
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'keyEvent', callback: (event: InputKeyEvent) => boolean): void;

    /**
     * Unsubscribe key event.
     *
     * @param { 'keyEvent' } type - indicates the type of unsubscribe event.
     * @param { function } [callback] - optional, indicates the callback function of off('keyEvent').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'keyEvent', callback?: (event: InputKeyEvent) => boolean): void;

    /**
     * Subscribe cursor context change
     *
     * @param { 'cursorContextChange' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function of on('cursorContextChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'cursorContextChange', callback: (x: number, y: number, height: number) => void): void;

    /**
     * Unsubscribe cursor context change
     *
     * @param { 'cursorContextChange' } type - indicates the type of unsubscribe event.
     * @param { function } [callback] - optional, indicates the callback function of off('cursorContextChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'cursorContextChange', callback?: (x: number, y: number, height: number) => void): void;

    /**
     * Subscribe selection change
     *
     * @param { 'selectionChange' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function
     * of on('selectionChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(
      type: 'selectionChange',
      callback: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * Unsubscribe selection change
     *
     * @param { 'selectionChange' } type - indicates the type of unsubscribe event.
     * @param { function } [callback] - optional,
     * indicates the callback function of off('selectionChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(
      type: 'selectionChange',
      callback?: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * Subscribe text change
     *
     * @param { 'textChange' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function of on('textChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'textChange', callback: (text: string) => void): void;

    /**
     * Unsubscribe text change
     *
     * @param { 'textChange' } type - indicates the type of unsubscribe event.
     * @param { function } [callback] - optional, indicates the callback function of off('textChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'textChange', callback?: (text: string) => void): void;

    /**
     * Subscribe input text attribute change
     *
     * @param { 'editorAttributeChanged' } type - indicates the type of subscribe event.
     * @param { function } callback - indicates the callback function of on('editorAttributeChanged').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'editorAttributeChanged', callback: (attr: EditorAttribute) => void): void;

    /**
     * Unsubscribe input text attribute change
     *
     * @param { 'editorAttributeChanged' } type - indicates the type of subscribe event.
     * @param { function } [callback] - indicates the callback function of off('editorAttributeChanged').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'editorAttributeChanged', callback?: (attr: EditorAttribute) => void): void;

    /**
     * Subscribe key down event
     *
     * @param { KeyEventCallback } callback - the callback called when a key down event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyDown(callback: KeyEventCallback): void;
    /**
     * Unsubscribe key down event
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key down event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyDown(callback?: KeyEventCallback): void;

    /**
     * Subscribe key up event
     *
     * @param { KeyEventCallback } callback - the callback called when a key up event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyUp(callback: KeyEventCallback): void;
    /**
     * Unsubscribe key up event
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key up event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyUp(callback?: KeyEventCallback): void;

    /**
     * Subscribe key event.
     *
     * @param { InputKeyEventCallback } callback - the callback called when a key event event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyEvent(callback: InputKeyEventCallback): void;
    /**
     * Unsubscribe key event.
     *
     * @param { InputKeyEventCallback } [callback] - optional, the callback called when a key event event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyEvent(callback?: InputKeyEventCallback): void;

    /**
     * Subscribe cursor context change.
     *
     * @param { CursorContextChangeCallback } callback - the callback called when cursor information changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCursorContextChange(callback: CursorContextChangeCallback): void;
    /**
     * Unsubscribe cursor context change.
     *
     * @param { CursorContextChangeCallback } [callback] - optional, the callback called when cursor information changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCursorContextChange(callback?: CursorContextChangeCallback): void;

    /**
     * Subscribe selection change.
     *
     * @param { SelectionChangeCallback } callback - the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectionChange(callback: SelectionChangeCallback): void;
    /**
     * Unsubscribe selection change.
     *
     * @param { SelectionChangeCallback } [callback] - optional, the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectionChange(callback?: SelectionChangeCallback): void;

    /**
     * Subscribe text change.
     *
     * @param { Callback<string> } callback - the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTextChange(callback: Callback<string>): void;
    /**
     * Unsubscribe text change.
     *
     * @param { Callback<string> } [callback] - optional, the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offTextChange(callback?: Callback<string>): void;

    /**
     * Subscribe input text attribute change.
     *
     * @param { Callback<EditorAttribute> } callback - the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onEditorAttributeChanged(callback: Callback<EditorAttribute>): void;
    /**
     * Unsubscribe input text attribute change.
     *
     * @param { Callback<EditorAttribute> } [callback] - optional, the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offEditorAttributeChanged(callback?: Callback<EditorAttribute>): void;
  }

  /**
   * Defines the immersive mode.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ImmersiveMode {
    /**
     * Default immersive mode, the panel is not in immersive mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,

    /**
     * Immersive mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    IMMERSIVE,

    /**
     * Light immersive mode.
     * 
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    LIGHT_IMMERSIVE,

    /**
     * Dark immersive mode.
     * 
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DARK_IMMERSIVE
  }

  /**
   *  Gradient mode.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum GradientMode {
    /**
     * Disable gradient mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Linear gradient mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR_GRADIENT = 1,
  }

  /**
   *  Fluid light mode.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum FluidLightMode {
    /**
     * Disable fluid light mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * When the background fluid light mode is enabled, the system panel turns transparent. The fluid light effect must be implemented by the application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    BACKGROUND_FLUID_LIGHT = 1,
  }

  /**
   * Defines the immersive effect.
   *
   * @interface ImmersiveEffect
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ImmersiveEffect {

    /**
     * The height of the gradient effect.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientHeight: int;

    /**
     * Gradient mode.
     *
     * @type { GradientMode }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientMode: GradientMode;

    /**
     * Fluid light mode.
     *
     * @type { ?FluidLightMode }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fluidLightMode?: FluidLightMode;
  }

  /**
   *  RequestKeyboardReason of input click. 
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
      * The request keyboard reason is NONE.
      * @syscap SystemCapability.MiscServices.InputMethodFramework
      * @since 19 dynamic
      * @since 23 static
      */
    NONE = 0,
    /**
     * The request keyboard reason is MOUSE.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * The request keyboard reason is TOUCH.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * The request keyboard reason is OTHER.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * A panel is a container used to hold soft keyboard, candidate list, or status bar.
   *
   * @interface Panel
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface Panel {
    /**
     * Sets ui content.
     * <p>When this method is executed successfully, the content of panel will be replaced.</p>
     *
     * @param { string } path - the path of ui content.
     * @param { AsyncCallback<void> } callback - the callback of setUiContent.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Sets ui content.
     * <p>When this method is executed successfully, the content of panel will be replaced.</p>
     *
     * @param { string } path - the path of ui content.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string): Promise<void>;

    /**
     * Sets ui content.
     * <p>When this method is executed successfully, the content of panel will be replaced.</p>
     *
     * @param { string } path - the path of ui content.
     * @param { LocalStorage } storage - the data object shared within the content instance loaded by the panel.
     * @param { AsyncCallback<void> } callback - the callback of setUiContent.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Sets ui content.
     * <p>When this method is executed successfully, the content of panel will be replaced.</p>
     *
     * @param { string } path - the path of ui content.
     * @param { LocalStorage } storage - the data object shared within the content instance loaded by the panel.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * Resizes a panel.
     *
     * @param { long } width - the new width of the panel.
     * @param { long } height - the new height of the panel.
     * @param { AsyncCallback<void> } callback - the callback of resize.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long, callback: AsyncCallback<void>): void;

    /**
     * Resizes a panel.
     *
     * @param { long } width - the new width of the panel.
     * @param { long } height - the new height of the panel.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long): Promise<void>;

    /**
     * Moves a panel.
     * <p>It's unusable for SOFT_KEYBOARD panel with FLG_FIXED.</p>
     *
     * @param { int } x - the x-coordinate of the new position.
     * @param { int } y - the y-coordinate of the new position.
     * @param { AsyncCallback<void> } callback - the callback of moveTo.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * Moves a panel.
     * <p>It's unusable for SOFT_KEYBOARD panel with FLG_FIXED.</p>
     *
     * @param { int } x - the x-coordinate of the new position.
     * @param { int } y - the y-coordinate of the new position.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * Starts moving a panel. The panel starts moving when pressed with finger or mouse and stops moving when released.
     * <p>It's Only used for STATUS_BAR panel.</p>
     *
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15
     */
    /**
     * Starts moving a panel. The panel starts moving when pressed with finger or mouse and stops moving when released.
     * <p>It's Only used for STATUS_BAR panel.</p>
     *
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18
     */
    /**
     * Starts moving a panel. The panel starts moving when pressed with finger or mouse and stops moving when released.
     * <p>It's only used for STATUS_BAR panel or SOFT_KEYBOARD panel with FLG_FLOATING or FLAG_CANDIDATE.</p>
     *
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    startMoving(): void;

    /**
     * Get the ID of the display where the input method panel is located.
     *
     * @returns { Promise<long> } the promise returned by the function.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getDisplayId(): Promise<long>;

    /**
     * Shows panel.
     *
     * @param { AsyncCallback<void> } callback - the callback of show.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * Shows panel.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(): Promise<void>;

    /**
     * Hides panel.
     *
     * @param { AsyncCallback<void> } callback - the callback of hide.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hides panel.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * Registers panel show event.
     * <p>The "show" events are triggered when the panel is shown.</p>
     *
     * @param { 'show' } type - events type.
     * @param { function } callback - the callback will be called when events are triggered.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'show', callback: () => void): void;

    /**
     * Unregisters panel show event.
     *
     * @param { 'show' } type - events type.
     * @param { function } [callback] - the callback to Unregister.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'show', callback?: () => void): void;

    /**
     * Registers panel hide event.
     * <p>The "hide" events are triggered when the panel is hidden.</p>
     *
     * @param { 'hide' } type - events type.
     * @param { function } callback - the callback will be called when events are triggered.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'hide', callback: () => void): void;

    /**
     * Unregisters panel hide event.
     *
     * @param { 'hide' } type - events type.
     * @param { function } [callback] - the callback to Unregister.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'hide', callback?: () => void): void;

    /**
     * Changes panel flag.
     * <p>Before flag is changed, Developers should hide the panel.After that, developers can change the content, size, point of the panel
     *    and show it again at appropriate opportunity.</p>
     *
     * @param { PanelFlag } flag - the callback of changeFlag.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeFlag(flag: PanelFlag): void;

    /**
     * Sets ime panel private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode - if the value is true, the privacy mode will be set,
     * otherwise the non-privacy mode will be set.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    setPrivacyMode(isPrivacyMode: boolean): void;

    /**
     * Adjust the rect of soft keyboard panel for landscape and portrait orientations.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { PanelFlag } flag - panel flag.
     * @param { PanelRect } rect - panel rect.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: PanelRect): void;

    /**
     * Adjust the rect of soft keyboard panel for landscape and portrait orientations.
     * <p>It's only used for SOFT_KEYBOARD panel with fixed or floating flag.</p>
     *
     * @param { PanelFlag } flag - panel flag.
     * @param { EnhancedPanelRect } rect - panel rect.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * <p>Update the region in the panel which accepts input events.</p>
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag.</p>
     *
     * @param { Array<window.Rect> } inputRegion - region in the panel which accepts input event. The size of the array must range from 1 to 4.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    updateRegion(inputRegion: Array<window.Rect>): void;

    /**
     * Subscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeChange' } type - the type of subscribe event.
     * @param { Callback<window.Size> } callback - the callback of on('sizeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12
     */
    /**
     * Subscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeChange' } type - the type of subscribe event.
     * @param { SizeChangeCallback } callback - the callback of on('sizeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    on(type: 'sizeChange', callback: SizeChangeCallback): void;

    /**
     * Unsubscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeChange' } type - the type of unsubscribe event.
     * @param { ?Callback<window.Size> } [callback] - optional, the callback of off('sizeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12
     */
    /**
     * Unsubscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeChange' } type - the type of unsubscribe event.
     * @param { ?SizeChangeCallback } [callback] - optional, the callback of off('sizeChange').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    off(type: 'sizeChange', callback?: SizeChangeCallback): void;

    /**
     * Subscribe 'sizeUpdate' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeUpdate' } type - the type of subscribe event.
     * @param { SizeUpdateCallback } callback - the callback of on('sizeUpdate').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    on(type: 'sizeUpdate', callback: SizeUpdateCallback): void;

    /**
     * Unsubscribe 'sizeUpdate' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { 'sizeUpdate' } type - the type of unsubscribe event.
     * @param { ?SizeUpdateCallback } [callback] - optional, the callback of off('sizeUpdate').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    off(type: 'sizeUpdate', callback?: SizeUpdateCallback): void;

    /**
     * Set immersive mode.
     * 
     * @param { ImmersiveMode } mode - Immersive mode.
     * @throws { BusinessError } 401 - parameter error. Possible causes:
     *     1.Incorrect parameter types; 2.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    setImmersiveMode(mode: ImmersiveMode): void;

    /**
     * Get immersive mode.
     * 
     * @returns { ImmersiveMode } Immersive mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getImmersiveMode(): ImmersiveMode;

    /**
     * Set immersive effect.
     * If a normal application uses the fluidLightMode property and sets it to a value other than NONE,
     * the interface will throw 202.
     * 
     * @param { ImmersiveEffect } effect - immersive effect.
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1. input method panel not created. 2. the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800020 - invalid immersive effect.
     *    1. The gradient mode and the fluid light mode can only be used when the immersive mode is enabled.
     *    2. The fluid light mode can only be used when the gradient mode is enabled.
     *    3. When the gradient mode is not enabled, the gradient height can only be 0.
     * @throws { BusinessError } 12800021 - this operation is allowed only after adjustPanelRect or resize is called.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setImmersiveEffect(effect: ImmersiveEffect): void;
    /**
     * Set keep screen on.
     * This setting takes effect when the panel is showing and becomes invalid when the panel is hidden.
     * 
     * @param { boolean } isKeepScreenOn - is keep screen on.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Get the current insets of the system panel of a specified display.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED or FLG_FLOATING.</p>
     * <p>This interface only supports obtaining the current insets values of a display.
     * When the display undergoes orientation changes, or is folded or unfolded, it is necessary to
     * reinvoke this interface to get the latest values.</p>
     * 
     * @param { number } displayId - specify which display's system panel insets.
     * @returns { Promise<SystemPanelInsets> } the promise returned by the function.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING. 
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     */
    getSystemPanelCurrentInsets(displayId: number): Promise<SystemPanelInsets>;

    /**
     * Get the current insets of the system panel of a specified display.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED or FLG_FLOATING.</p>
     * <p>This interface only supports obtaining the current insets values of a display.
     * When the display undergoes orientation changes, or is folded or unfolded, it is necessary to
     * reinvoke this interface to get the latest values.</p>
     *
     * @param { long } displayId - specify which display's system panel insets.
     * @returns { Promise<SystemPanelInsets | null> } the promise returned by the function.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getSystemPanelCurrentInsets(displayId: long): Promise<SystemPanelInsets | null>;

    /**
     * Set current panel's shadow.
     * It cannot be used for SOFT_KEYBOARD panel with FLG_FIXED.
     *
     * @param { double } radius - the radius of the shadow, unit is px.
     * @param { string } color - the color of the shadow,
     *     the value range is [#00000000, #FFFFFFFF] or [#000000, #FFFFFF].
     * @param { double } offsetX - the offset of the shadow on the x-axis, unit is px.
     * @param { double } offsetY - the offset of the shadow on the y-axis, unit is px.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     *     Possible causes: Panel's flag is FLG_FIXED.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setShadow(radius: double, color: string, offsetX: double, offsetY: double): void;

    /**
     * Set current panel function key color and background color.
     * It is only used for function key with raised areas of the panel.
     *
     * @param { string | undefined } fillColor - the color of the function key,
     *     the value range is [#01000000, #FFFFFFFF] or [#000000, #FFFFFF].
     *     Note: Values with fully transparent alpha channel (#00xxxxxx) are not supported.
     * @param { string | undefined } backgroundColor - the background color of the function key,
     *     the value range is [#01000000, #FFFFFFFF] or [#000000, #FFFFFF].
     *     Note: Values with fully transparent alpha channel (#00xxxxxx) are not supported.
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    setSystemPanelButtonColor(fillColor: string | undefined, backgroundColor: string | undefined): Promise<void>;

    /**
     * Registers panel show event.
     * <p>The "show" events are triggered when the panel is shown.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onShow(callback: Callback<void>): void;
    /**
     * Unregisters panel show event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offShow(callback?: Callback<void>): void;

    /**
     * Registers panel hide event.
     * <p>The "hide" events are triggered when the panel is hidden.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel hides.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHide(callback: Callback<void>): void;
    /**
     * Unregisters panel hide event.
     *
     * @param { Callback<void> } [callback] - the callback to Unregister.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHide(callback?: Callback<void>): void;

    /**
     * Subscribe 'sizeUpdate' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeUpdateCallback } callback - the callback called when the panel size updates.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onSizeUpdate(callback: SizeUpdateCallback): void;
    /**
     * Unsubscribe 'sizeUpdate' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeUpdateCallback } [callback] - optional, the callback called when the panel size updates.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offSizeUpdate(callback?: SizeUpdateCallback): void;

    /**
     * Subscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeChangeCallback } callback - the callback called when the panel size changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSizeChange(callback: SizeChangeCallback): void;
    /**
     * Unsubscribe 'sizeChange' event.
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeChangeCallback } [callback] - optional, the callback called when the panel size changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSizeChange(callback?: SizeChangeCallback): void;
  }

  /** 
   * <p>Input method system panel's insets.</p>
   * <p>It is used to indicate the distance between the input method panel and the system panel.</p>
   * <p>The distance unit is px.</p>
   * 
   * @interface SystemPanelInsets
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 21 dynamic
   * @since 23 static
   */
  interface SystemPanelInsets {
    /**
     * Distance on the left.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly left: int;
    /**
     * Distance on the right.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly right: int;
    /**
     * Distance on the bottom.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly bottom: int;
  }

  /**
   * @interface EditorAttribute
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface EditorAttribute {
    /**
     * Editor's pattern
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly inputPattern: int;

    /**
     * Editor's key type
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly enterKeyType: int;

    /**
     * Indicates whether the editor supports the text preview.
     *
     * @type { boolean }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    isTextPreviewSupported: boolean;

    /**
     * Editor's bundle name.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 14 dynamic
     * @since 23 static
     */
    readonly bundleName?: string;

    /**
     * Immersive mode.
     *
     * @type { ?ImmersiveMode }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    readonly immersiveMode?: ImmersiveMode;

    /**
     * Indicates the ID of the window where the edit box is located.
     *
     * @type { ?int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly windowId?: int;

    /**
     * Indicates the ID of the display where the edit box is located.
     *
     * @type { ?long }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly displayId?: long;

    /**
     * Placeholder text in the edit box.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly placeholder?: string;

    /**
     * The name of the ability where the edit box is located.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName?: string;

    /**
     * Editor's capitalization mode.
     *
     * @type { ?CapitalizeMode }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly capitalizeMode?: CapitalizeMode;

    /**
     * Gradient mode.
     *
     * @type { ?GradientMode }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly gradientMode?: GradientMode;

    /**
     * Fluid light mode.
     *
     * @type { ?FluidLightMode }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fluidLightMode?: FluidLightMode;

    /**
     * Extra config of edit box.
     *
     * @type { ?InputMethodExtraConfig }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    readonly extraConfig?: InputMethodExtraConfig;
  }

  /**
   * @interface KeyEvent
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyEvent {
    /**
     * Key code
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyCode: int;

    /**
     * Key action
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyAction: int;
  }

  /**
   * Enumerates the flags of panel
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelFlag {
    /**
     * Fixed style.
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is fixed at the bottom of the screen.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FIXED = 0,

    /**
     * Floating style.
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is floating.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FLOATING,

    /**
     * Candidate style.
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is a candidate window which will show the possible characters when user types a input code.
     * Panel with candidate style will not be automatically shown or hidden by input method service.
     * Input method application developers are supposed to control the panel status on their own.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_CANDIDATE
  }

  /**
   * <p>Panel types provided for input method applications.</p>
   * <p>Input method application developers should select the appropriate panel type according to the user scenario.</p>
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelType {
    /**
     * Panel for displaying a virtual software keyboard.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SOFT_KEYBOARD = 0,

    /**
     * Panel for displaying status bar.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    STATUS_BAR
  }

  /**
   * Panel information.
   *
   * @typedef PanelInfo
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface PanelInfo {
    /**
     * Panel type.
     *
     * @type { PanelType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    type: PanelType;

    /**
     * <p>Flag of Panel.</p>
     * <p>Currently only using for SOFT_KEYBOARD panel.</p>
     *
     * @type { ?PanelFlag }
     * @default FLG_FIXED
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    flag?: PanelFlag;
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
   * Enumerates the security mode.
   *
   * @enum { int }
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum SecurityMode {
    /**
     * Basic security mode
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    BASIC = 0,
    /**
     * Full security mode
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FULL
  }

  /**
   * Range of selected text.
   *
   * @interface Range
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
   * @interface Movement
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
   * Window info.
   *
   * @interface WindowInfo
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface WindowInfo {
    /**
     * Rectangle.
     *
     * @type { window.Rect }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * Window status.
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    status: window.WindowStatusType;
  }

  /**
   * Panel Rect.
   *
   * @interface PanelRect
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PanelRect {
    /**
     * Panel rect in landscape orientation.
     *
     * @type { window.Rect }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    landscapeRect: window.Rect;

    /**
     * Panel rect in portrait orientation.
     *
     * @type { window.Rect }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    portraitRect: window.Rect;
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
   * Enhanced panel rect information.
   *
   * @interface EnhancedPanelRect
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface EnhancedPanelRect {
    /**
     * <p>Panel rect in landscape orientation.</p>
     * <p>It must be filled when fullScreenMode is flase or not specified.</p>
     *
     * @type { ?window.Rect }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeRect?: window.Rect;
    /**
     * <p>Panel rect in portrait orientation.</P>
     * <p>It must be filled when fullScreenMode is flase or not specified.</p>
     *
     * @type { ?window.Rect }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitRect?: window.Rect;
    /**
     * The distance between the top of the panel and the top of the avoidance area in landscape orientation.
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag.</p>
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeAvoidY?: int;
    /**
     * <p>Region in the panel that accepts input events in landsacpe mode.</p>
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag. Max array size is 4.</p>
     * <p>Defaults to entire panel area if not specifed.</p>
     *
     * @type { ?Array<window.Rect> }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeInputRegion?: Array<window.Rect>;
    /**
     * The distance between the top of the panel and the top of the avoidance area in portrait orientation.
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag.</p>
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitAvoidY?: int;
    /**
     * <p>Region in the panel that accepts input events in portrait mode.</p>
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag. Max array size is 4.</p>
     * <p>Defaults to entire panel area if not specifed.</p>
     *
     * @type { ?Array<window.Rect> }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitInputRegion?: Array<window.Rect>;
    /**
     * <p>Enter the full screen mode.</p>
     * <p>It's only used for SOFT_KEYBOARD panel with fixed flag or floating flag.</p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    fullScreenMode?: boolean;
  }

  /**
   * Keyboard area.
   *
   * @interface KeyboardArea
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface KeyboardArea {
    /**
     * Top of the keyboard area in the panel.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * Bottom of the keyboard area in the panel.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    bottom: int;
    /**
     * Left of the keyboard area in the panel.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    left: int;
    /**
     * Right of the keyboard area in the panel.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    right: int;
  }
  /**
   * Attach options.
   *
   * @interface AttachOptions
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export interface AttachOptions {
    /**
     * The reason for request keyboard.
     *
     * @type { ?RequestKeyboardReason }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    requestKeyboardReason?: RequestKeyboardReason;

    /**
     * Is simple keyboard enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    isSimpleKeyboardEnabled?: boolean;
  }

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
}

export default inputMethodEngine;
