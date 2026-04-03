/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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




import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

/**
 * Enum for ChipSize
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Enum for ChipSize
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */

export declare enum ChipSize {

  /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NORMAL = "NORMAL",

  /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SMALL = "SMALL"
}

/**
 * Enum for AccessibilitySelectedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
export declare enum AccessibilitySelectedType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CLICKED = 0,

  /**
   * Checked type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CHECKED = 1,

  /**
   * Selected type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  SELECTED = 2
}

/**
 * Defines the icon common option.
 *
 * @interface IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the icon common option.
 *
 * @interface IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IconCommonOptions {

  /**
   * Image resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Image resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  src: ResourceStr;

  /**
   * Image size option.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Image size option.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeOptions;

  /**
   * Image filled color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Image filled color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fillColor?: ResourceColor;

  /**
   * Image filled color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFillColor?: ResourceColor;
}

/**
 * Defines the suffix icon option.
 *
 * @interface SuffixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the suffix icon option.
 *
 * @interface SuffixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface SuffixIconOptions extends IconCommonOptions {

  /**
   * Called when the suffix icon is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Called when the suffix icon is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  action?: () => void;

  /**
   * Set accessibility text for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the prefix icon option.
 *
 * @interface PrefixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the prefix icon option.
 *
 * @interface PrefixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
 * Defines accessibility icon options.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
export interface AccessibilityOptions {
  /**
   * Set accessibility level for accessibility icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility text for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines accessibility options of default close icon.
 *
 * @interface CloseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
export interface CloseOptions extends AccessibilityOptions {
  /**
   * Set font size for the close icon.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;
}

/**
 * Defines chip symbolglyph options.
 *
 * @interface ChipSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defines chip symbolglyph options.
 *
 * @interface ChipSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface ChipSymbolGlyphOptions {

  /**
   * Symbol normal.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Symbol normal.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Symbol activated.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Symbol activated.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines accessibility options of suffix symbol.
 *
 * @interface ChipSuffixSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
export interface ChipSuffixSymbolGlyphOptions {
  /**
   * Set normal accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * Set activated accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * Called when the suffix symbol is clicked.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;
}

/**
 * Defines label margin.
 *
 * @interface LabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines label margin.
 *
 * @interface LabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface LabelMarginOptions {

  /**
   * Left label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Left label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  left?: Dimension;

  /**
   * Right label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Right label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  right?: Dimension;
}

/**
 * Defines localized label margin.
 *
 * @interface LocalizedLabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface LocalizedLabelMarginOptions {

   /**
   * start localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
   start?: LengthMetrics;

   /**
   * end localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;
}

/**
 * Defines label option.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines label option.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface LabelOptions {

  /**
   * Text content.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Text content.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: string;

  /**
   * Text font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Text font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: Dimension;

  /**
   * Text font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Text font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text font color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFontColor?: ResourceColor;

  /**
   * Text font family.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Text font family.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFamily?: string;

  /**
   * Label margin.
   *
   * @type { ?LabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Label margin.
   *
   * @type { ?LabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  labelMargin?: LabelMarginOptions;

   /**
   * Localized label margin.
   *
   * @type { ?LocalizedLabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

/**
 * Defines chip options.
 *
 * @interface ChipOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines chip options.
 *
 * @interface ChipOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface ChipOptions {
  /**
   * Chip prefix icon.
   *
   * @type { ?PrefixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip prefix icon.
   *
   * @type { ?PrefixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * Chip prefix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Chip prefix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Chip label.
   *
   * @type { LabelOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip label.
   *
   * @type { LabelOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  label: LabelOptions;

  /**
   * Chip suffix icon.
   *
   * @type { ?SuffixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip suffix icon.
   *
   * @type { ?SuffixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * Chip suffix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Chip suffix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Set options for suffix symbol.
   *
   * @type { ?ChipSuffixSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

  /**
   * Show close icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Show close icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  allowClose?: boolean;

  /**
   * Set options for default close icon when 'allowaClose' is true.
   *
   * @type { ?CloseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  closeOptions?: CloseOptions;

  /**
   * Enable chip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Enable chip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled?: boolean;

  /**
   * Set whether chip is active or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: boolean;

  /**
   * Chip background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip background color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   * Chip radius.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip radius.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  borderRadius?: Dimension;

  /**
   * Chip size.
   *
   * @type { ?ChipSize | SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Chip size.
   *
   * @type { ?ChipSize | SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * On close action.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * On close action.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClose?: () => void;

  /**
   * On clicked action.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClicked?: Callback<void>;

  /**
   * Indicates the attribute of the current chip direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
   direction?: Direction;

  /**
   * Set accessibility description for Chip.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for Chip.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility selected type for Chip.
   *
   * @type { ?AccessibilitySelectedType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilitySelectedType?: AccessibilitySelectedType;

  /**
   * Maximum font scale for Chip.
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * Minimum font scale for Chip.
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * Chip padding.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  padding?: LocalizedPadding;

  /**
   * Set font size for the label text and the close icon.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;
}

/**
 * Build function of Chip.
 *
 * @param { ChipOptions } options - chip option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Build function of Chip.
 *
 * @param { ChipOptions } options - chip option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Builder
export declare function Chip(options: ChipOptions): void;