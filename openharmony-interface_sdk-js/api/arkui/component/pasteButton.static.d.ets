
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { ButtonType } from './button';
import { ClickEvent, AttributeModifier, CommonMethod } from './common';
import { SecurityComponentMethod } from './securityComponent';
import { BusinessError } from '../../@ohos.base';
import { ComponentBuilder } from './builder';

/**
 * Enumerates the icon styles.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PasteIconStyle {
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LINES = 0
}

/**
 * Enumerates the text that can be displayed on the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PasteDescription {
  /**
   * Paste
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PASTE = 0
}

/**
 * Declares the interface for setting the paste button options.
 *
 * @interface PasteButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PasteButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?PasteIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  icon?: PasteIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?PasteDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  text?: PasteDescription;

  /**
   * Type of the button.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  buttonType?: ButtonType;
}

/**
 * Enumerates the click event results of the paste button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PasteButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SUCCESS = 0,
  /**
   * Failure because the application is not temporarily authorized for accessing the current pasteboard data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
}

/**
 * Callback function when the paste button is clicked.
 *
 * @typedef { function } PasteButtonCallback
 * @param { ClickEvent } event - The click event.
 * @param { PasteButtonOnClickResult } result - The result of click event.
 * @param { BusinessError<void> } [error] - The error code and message of click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type PasteButtonCallback 
  = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Declare interfaces for the attributes of the paste button.
 *
 * @extends SecurityComponentMethod
 * @interface PasteButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PasteButtonAttribute extends SecurityComponentMethod {
  /**
   * Called when the paste button is clicked.
   *
   * @param { PasteButtonCallback | undefined } event
   * @returns { PasteButtonAttribute } Returns the attribute of the paste button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onClick(event: PasteButtonCallback | undefined): this;
}

/**
 * Set a paste button.
 *
 * @param { PasteButtonOptions } [options] - Options of the paste button.
 * @returns { PasteButtonAttribute } Attributes of the paste button.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function PasteButton(
    options?: PasteButtonOptions
): PasteButtonAttribute;