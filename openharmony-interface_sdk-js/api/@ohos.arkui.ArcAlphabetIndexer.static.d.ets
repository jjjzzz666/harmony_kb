'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { ComponentBuilder, CommonMethod, Optional, ColorMetrics, Font, BlurStyle, LengthMetrics, Bindable } from '@ohos.arkui.component'; 

/**
 * Define the initialization parameters of the arc alphabet index bar
 *
 * @interface ArcAlphabetIndexerInitInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare interface ArcAlphabetIndexerInitInfo {
  /**
   * Array of alphabetic indexed strings, cannot be set to empty.
   *
   * @type { string[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  arrayValue: string[];
  /**
   * The index value of the initial selected item.If it is out of the index range, the default value is 0
   *
   * @type { int | Bindable<int> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selected: int | Bindable<int>;
}

/**
 * Callback when index bar is selected.
 *
 * @typedef { function } OnSelectCallback
 * @param { int } index - the selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare type OnSelectCallback = (index: int) => void;

/**
 * Defines the arc alphabet index bar attribute functions.
 *
 * @extends CommonMethod
 * @interface ArcAlphabetIndexerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
export declare interface ArcAlphabetIndexerAttribute extends CommonMethod {
  /**
   * Definitions text color.
   *
   * @param { Optional<ColorMetrics> } color - Text color.
   *     Default value: 0xFFFFFF.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  color(color: Optional<ColorMetrics>): this;

  /**
   * Selected text color.
   *
   * @param { Optional<ColorMetrics> } color - Text color of the selected item.
   *     Default value: 0xFFFFFF.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selectedColor(color: Optional<ColorMetrics>): this;

  /**
   * Font color of the pop-up prompt text.
   *
   * @param { Optional<ColorMetrics> } color - Text color of the pop-up prompt.
   *     Default value: 0xFFFFFF.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  popupColor(color: Optional<ColorMetrics>): this;

  /**
   * Select the text background color.
   *
   * @param { Optional<ColorMetrics> } color - Background color of the selected item.
   *     Default value: 0x1F71FF.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selectedBackgroundColor(color: Optional<ColorMetrics>): this;

  /**
   * Background color of the pop-up window.
   *
   * @param { Optional<ColorMetrics> } color - Background color of the pop-up.
   *     Default value: 0xD8404040.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  popupBackground(color: Optional<ColorMetrics>): this;

  /**
   * Whether to use pop-up index hints.
   *
   * @param { Optional<boolean> } enabled - Indicates whether to use the pop-up.
   *     The value true indicates that the pop-up is used. The value false indicates that the pop-up is not used.
   *     Default value: false
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  usePopup(enabled: Optional<boolean>): this;

  /**
   * Selected text style.
   *
   * @param { Optional<Font> } font - Text style of the selected item.
   *     Default value: {
   *     size: '13.0fp',
   *     style:FontStyle.Normal,
   *     weight:500,
   *     family:'HarmonyOS Sans'
   *     }
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selectedFont(font: Optional<Font>): this;

  /**
   * Popup text style.
   *
   * @param { Optional<Font> } font - Font style of the prompt pop-up.
   *     Default value:
   *     {
   *     size: '19.0fp',
   *     style:FontStyle.Normal,
   *     weight:500,
   *     family:'HarmonyOS Sans'
   *     }
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  popupFont(font: Optional<Font>): this;

  /**
   * Definitions fonts.
   *
   * @param { Optional<Font> } font - Default font style of the letter index bar.
   *     Default value:
   *     {
   *     size: '13.0fp',
   *     style:FontStyle.Normal,
   *     weight:500,
   *     family:'HarmonyOS Sans'
   *     }
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  font(font: Optional<Font>): this;

  /**
   * Sets the size of the letter area of the letter index bar.
   *
   * @param { Optional<LengthMetrics> } size - Letter index bar letter area size, letter area is circular, i.e.
   *     circular diameter. The value cannot be set to a percentage.
   *     Default value: 24.0 Unit: vp
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  itemSize(size: Optional<LengthMetrics>): this;

  /**
   * Sets the selected index.
   *
   * @param { Optional<int> | Bindable<int> } index - Index value of the selected item.
   *     Default value: 0
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selected(index: Optional<int> | Bindable<int>): this;

  /**
   * Automatically collapses the characters when the indexer bar not enough to display all characters.
   *
   * @param { Optional<boolean> } enable - Indicates whether to use the adaptive folding mode.
   *     Default value: true
   *     true: The adaptive folding mode is used.
   *     false: The adaptive folding mode is not used.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  autoCollapse(enable: Optional<boolean>): this;

  /**
   * Index bar selection callback.
   *
   * @param { Optional<OnSelectCallback> } handler - Callback function type.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  onSelect(handler: Optional<OnSelectCallback>): this;

  /**
   * Set the background blurStyle of the pop-up window.
   *
   * @param { Optional<BlurStyle> } style - Set the background blur material of the pop-up prompt.
   *     If this parameter is not set, the blur is disabled by default,
   *     and the corresponding value is NONE in BlurStyle.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  popupBackgroundBlurStyle(style: Optional<BlurStyle>): this;
}

/**
 * Defines ArcAlphabetIndexer Component.
 *
 * @param { ArcAlphabetIndexerInitInfo } info - The initialization parameters of the arc alphabet index bar
 * @returns { ArcAlphabetIndexerAttribute } -The attribute of the ArcAlphabetIndexer.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcAlphabetIndexer(
    info: ArcAlphabetIndexerInitInfo
): ArcAlphabetIndexerAttribute;