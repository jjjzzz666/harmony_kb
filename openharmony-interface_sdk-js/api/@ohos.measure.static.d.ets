/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { FontStyle, FontWeight, TextAlign, TextOverflow, TextCase, WordBreak } from '@ohos.arkui.component'
import { SizeOptions } from '@ohos.arkui.component';
import { Resource } from './global/resource'

/**
 * Defines the options of MeasureText.
 *
 * @interface MeasureOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface MeasureOptions {
  /**
   * Text to display.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  textContent: string | Resource;

  /**
   * Text display area of width.
   *
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constraintWidth?: double | string | Resource;

  /**
   * Font Size.
   *
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fontSize?: double | string | Resource;

  /**
   * Font style.
   *
   * @type { ?(int | FontStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fontStyle?: int | FontStyle;

  /**
   * Font weight.
   *
   * @type { ?(int | string | FontWeight) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fontWeight?: int | string | FontWeight;

  /**
   * Font list of text.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fontFamily?: string | Resource;

  /**
   * Distance between text fonts.
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  letterSpacing?: double | string;

  /**
   * Alignment of text.
   *
   * @type { ?(int | TextAlign) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  textAlign?: int | TextAlign;

  /**
   * Overflow mode of the font.
   *
   * @type { ?(int | TextOverflow) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  overflow?: int | TextOverflow;

  /**
   * Maximum int of lines of text.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxLines?: int;

  /**
   * Vertical center mode of the font.
   *
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  lineHeight?: double | string | Resource;

  /**
   * Baseline offset.
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  baselineOffset?: double | string;

  /**
   * Type of letter in the text font
   *
   * @type { ?(int | TextCase) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  textCase?: int | TextCase;

  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  textIndent?: double | string;

  /**
   * Set the word break type.
   *
   * @type { ?WordBreak }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  wordBreak?: WordBreak;
}

/**
 * Defines the Measure interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare class MeasureText {
  /**
   * Displays the textWidth.
   *
   * @param { MeasureOptions } options - Options.
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static measureText(options: MeasureOptions): double;

  /**
   * Displays the text width and height.
   *
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display \
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}
export default MeasureText;
