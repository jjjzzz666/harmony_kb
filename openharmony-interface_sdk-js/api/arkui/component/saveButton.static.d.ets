
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
import { Resource, Dimension, BorderRadiuses, SizeOptions } from './units';
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
export declare enum SaveIconStyle {
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FULL_FILLED = 0,
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LINES = 1,
  /**
   * Icon rendered as picture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  PICTURE = 2
}
/**
 * Enumerates the text that can be displayed on the save button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SaveDescription {
  /**
   * Download
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DOWNLOAD = 0,
  /**
   * Download File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DOWNLOAD_FILE = 1,
  /**
   * Save
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SAVE = 2,
  /**
   * Save Image
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SAVE_IMAGE = 3,
  /**
   * Save File
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SAVE_FILE = 4,
  /**
   * Download and Share
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DOWNLOAD_AND_SHARE = 5,
  /**
   * Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RECEIVE = 6,
  /**
   * Continue to Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CONTINUE_TO_RECEIVE = 7,
  /**
   * Save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SAVE_TO_GALLERY = 8,
  /**
   * Export to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  EXPORT_TO_GALLERY = 9,
  /**
   * Quick save to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  QUICK_SAVE_TO_GALLERY = 10,
  /**
   * Resave to gallery
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESAVE_TO_GALLERY = 11,

  /**
   * Save all
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SAVE_ALL = 12
}
/**
 * Declares the interface for setting the save button options.
 *
 * @interface SaveButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SaveButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?SaveIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  icon?: SaveIconStyle;
  /**
   * Text to be displayed on the button.
   *
   * @type { ?SaveDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  text?: SaveDescription;
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
 * Enumerates the click event results of the save button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SaveButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SUCCESS = 0,
  /**
   * Failure because the application is not temporarily authorized for saving files.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1,
  /**
   * Canceled by user.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CANCELED_BY_USER = 2,
}
/**
 * Callback function when the save button is clicked.
 *
 * @typedef { function } SaveButtonCallback
 * @param { ClickEvent } event - The click event.
 * @param { SaveButtonOnClickResult } result - The result of click event.
 * @param { BusinessError<void> } [error] - The error code and message of click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type SaveButtonCallback 
  = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void;

/**
 * Declares interface for the attributes of the save button.
 *
 * @extends SecurityComponentMethod
 * @interface SaveButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SaveButtonAttribute extends SecurityComponentMethod {
  /**
   * Called when the save button is clicked.
   *
   * @param { SaveButtonCallback | undefined } event
   * @returns { SaveButtonAttribute } Returns the attribute of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onClick(event: SaveButtonCallback | undefined): this;

  /**
   * Sets the icon of the save button.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Resource | undefined } icon - Source of the icon.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setIcon(icon: Resource | undefined): this;

  /**
   * Sets the text of the save button.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { string | Resource | undefined } text - Content of text.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setText(text: string | Resource | undefined): this;

  /**
   * Sets the size of the icon.
   *
   * @param { Dimension | SizeOptions | undefined } size - Dimensions of the icon to set.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  iconSize(size: Dimension | SizeOptions | undefined): this;

  /**
   * Sets the border radius of the icon.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { Dimension | BorderRadiuses | undefined } radius - Border radius of the icon to set.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  iconBorderRadius(radius: Dimension | BorderRadiuses | undefined): this;

  /**
   * Enables the press effect of the button.
   *
   * @permission ohos.permission.CUSTOMIZE_SAVE_BUTTON
   * @param { boolean | undefined } enabled - Whether to enable the press effect. The value true means
   *     to enable the press effect; the value false means the opposite.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stateEffect(enabled: boolean | undefined): this;

  /**
   * Receives the event when the user clicks cancel.
   *
   * @param { boolean | undefined } enabled Whether to receive the event when the user clicks cancel.
   * @returns { SaveButtonAttribute } Returns the attributes of the save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  userCancelEvent(enabled: boolean | undefined): this;
}


/**
 * Set a save button.
 *
 * @param { SaveButtonOptions } [options] - Options of the save button.
 * @returns { SaveButtonAttribute } Attributes of the save button.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function SaveButton(
    options?: SaveButtonOptions 
): SaveButtonAttribute