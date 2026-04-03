'use static'
/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { 
  Builder, 
  ResourceStr, 
  SizeOptions, 
  ResourceColor, 
  VoidCallback, 
  Dimension, 
  LengthMetrics, 
  Direction, 
  Component,
  Resource,
  LocalizedPadding,
} from './@ohos.arkui.component';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import { PropRef, Require } from './arkui/stateManagement/decorator';

/**
 * Enum for ChipSize
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare enum ChipSize {

   /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  NORMAL = 'NORMAL',

   /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  SMALL = 'SMALL'
}

/**
 * Enum for AccessibilitySelectedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare enum AccessibilitySelectedType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  CLICKED = 0,

  /**
   * Checked type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  CHECKED = 1,

  /**
   * Selected type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  SELECTED = 2
}

 /**
 * Defines the icon common option.
 *
 * @interface IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface IconCommonOptions {

   /**
   * Image resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  src: ResourceStr;

   /**
   * Image size option.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  size?: SizeOptions;

   /**
   * Image filled color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  fillColor?: ResourceColor;

  /**
   * Image filled color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activatedFillColor?: ResourceColor;
}

 /**
 * Defines the suffix icon option.
 *
 * @extends IconCommonOptions
 * @interface SuffixIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface SuffixIconOptions extends IconCommonOptions {

   /**
   * Called when the suffix icon is clicked.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  action?: VoidCallback;

  /**
   * Set accessibility text for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

 /**
 * Defines the prefix icon option.
 *
 * @extends IconCommonOptions
 * @interface PrefixIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
 * Defines accessibility icon options.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface AccessibilityOptions {
  /**
   * Set accessibility level for accessibility icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility text for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines accessibility options of default close icon.
 *
 * @extends AccessibilityOptions
 * @interface CloseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface CloseOptions extends AccessibilityOptions {
  /**
   * Set font size for the close icon.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Dimension;
}

/**
 * Defines chip symbolglyph options.
 *
 * @interface ChipSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipSymbolGlyphOptions {

  /**
   * Symbol normal.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  normal?: SymbolGlyphModifier;

  /**
   * Symbol activated.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines accessibility options of suffix symbol.
 *
 * @interface ChipSuffixSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipSuffixSymbolGlyphOptions {
  /**
   * Set normal accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * Set activated accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * Called when the suffix symbol is clicked.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  action?: VoidCallback;
}

 /**
 * Defines label margin.
 *
 * @interface LabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface LabelMarginOptions {

   /**
   * Left label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  left?: Dimension;

   /**
   * Right label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  right?: Dimension;
}

/**
 * Defines localized label margin.
 *
 * @interface LocalizedLabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface LocalizedLabelMarginOptions {

   /**
   * start localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
   start?: LengthMetrics;

   /**
   * end localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  end?: LengthMetrics;
}

 /**
 * Defines label option.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface LabelOptions {

   /**
   * Text content.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  text: string;

   /**
   * Text font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  fontSize?: Dimension;

   /**
   * Text font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  fontColor?: ResourceColor;

  /**
   * Text font color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activatedFontColor?: ResourceColor;

   /**
   * Text font family.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  fontFamily?: string;

   /**
   * Label margin.
   *
   * @type { ?LabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  labelMargin?: LabelMarginOptions;

   /**
   * Localized label margin.
   *
   * @type { ?LocalizedLabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

 /**
 * Defines chip options.
 *
 * @interface ChipOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipOptions {
   /**
   * Chip prefix icon.
   *
   * @type { ?PrefixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * Chip prefix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

   /**
   * Chip label.
   *
   * @type { LabelOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  label: LabelOptions;

   /**
   * Chip suffix icon.
   *
   * @type { ?SuffixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * Chip suffix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Set options for suffix symbol.
   *
   * @type { ?ChipSuffixSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

   /**
   * Show close icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  allowClose?: boolean;

  /**
   * Set options for default close icon when 'allowaClose' is true.
   *
   * @type { ?CloseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  closeOptions?: CloseOptions;

   /**
   * Enable chip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * Set whether chip is active or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activated?: boolean;

   /**
   * Chip background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip background color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  activatedBackgroundColor?: ResourceColor;

   /**
   * Chip radius.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  borderRadius?: Dimension;

   /**
   * Chip size.
   *
   * @type { ?(ChipSize | SizeOptions) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  size?: ChipSize | SizeOptions;

   /**
   * On close action.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  onClose?: VoidCallback;

  /**
   * On clicked action.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  onClicked?: VoidCallback;

  /**
   * Indicates the attribute of the current chip direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
   direction?: Direction;

  /**
   * Set accessibility description for Chip.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for Chip.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility selected type for Chip.
   *
   * @type { ?AccessibilitySelectedType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @noninterop
   */
  accessibilitySelectedType?: AccessibilitySelectedType;

  /**
   * Maximum font scale for Chip.
   *
   * @type { ?(double | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxFontScale?: double | Resource;

  /**
   * Minimum font scale for Chip.
   *
   * @type { ?(double | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minFontScale?: double | Resource;

  /**
   * Chip padding.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  padding?: LocalizedPadding;

  /**
   * Set font size for the label text and the close icon.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Dimension;
}

 /**
 * Build function of Chip.
 *
 * @param { ChipOptions } options - chip option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Builder
export declare function Chip(options: ChipOptions): void;