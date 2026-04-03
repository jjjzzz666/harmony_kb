/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * Defines the options of ShowToast.
 *
 * @interface ShowToastOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.promptAction/promptAction.ShowToastOptions
 */
export interface ShowToastOptions {
  /**
   * Text to display.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#message
   */
  message: string;

  /**
   * Duration of toast dialog box. The default value is 1500.
   * The recommended value ranges from 1500 ms to 10000ms.
   * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#duration
   */
  duration?: number;

  /**
   * The distance between toast dialog box and the bottom of screen.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 5 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#bottom
   */
  bottom?: string | number;
}

/**
 * Defines the prompt info of button.
 *
 * @interface Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the prompt info of button.
 *
 * @interface Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export interface Button {
  /**
   * Defines the button info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the button info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  text: string;

  /**
   * Defines the color of button.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the color of button.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  color: string;
}

/**
 * Defines the response of ShowDialog.
 *
 * @interface ShowDialogSuccessResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the response of ShowDialog.
 *
 * @interface ShowDialogSuccessResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export interface ShowDialogSuccessResponse {
  /**
   * Defines the index of data.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the index of data.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  index: number;
}

/**
 * Defines the option of show dialog.
 *
 * @interface ShowDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the option of show dialog.
 *
 * @interface ShowDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  title?: string;

  /**
   * Text body.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Text body.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  message?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   *
   * @type { ?[Button, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   *
   * @type { ?[Button, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  success?: (data: ShowDialogSuccessResponse) => void;

  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  complete?: (data: string) => void;
}

/**
 * Defines the option of ShowActionMenu.
 *
 * @interface ShowActionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6
 */
/**
 * Defines the option of ShowActionMenu.
 *
 * @interface ShowActionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export interface ShowActionMenuOptions {
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  title?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   *
   * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   *
   * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  fail?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  complete?: () => void;
}

/**
 * Defines the prompt interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the prompt interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export default class Prompt {
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showToast(options: ShowToastOptions): void;

  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showDialog(options: ShowDialogOptions): void;

  /**
   * Displays the menu.
   *
   * @param { ShowActionMenuOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Displays the menu.
   *
   * @param { ShowActionMenuOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}
