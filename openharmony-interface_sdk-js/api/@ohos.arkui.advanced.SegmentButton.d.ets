/*
  * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import uiMaterial from './@ohos.arkui.uiMaterial';



/**
 * Defines text only item of SegmentButton.
 *
 * @interface SegmentButtonTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines text only item of SegmentButton.
 *
 * @interface SegmentButtonTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */

interface SegmentButtonTextItem {
  /**
   * The text of text only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The text of text only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon only item of SegmentButton.
 *
 * @interface SegmentButtonIconItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines icon only item of SegmentButton.
 *
 * @interface SegmentButtonIconItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface SegmentButtonIconItem {
  /**
   * The icon of icon only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon only item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon only item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon and text item of SegmentButton.
 *
 * @interface SegmentButtonIconTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines icon and text item of SegmentButton.
 *
 * @interface SegmentButtonIconTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface SegmentButtonIconTextItem {
  /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The text of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines the DimensionNoPercentage type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the DimensionNoPercentage type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
 * Defines the BorderRadiusMode type.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum BorderRadiusMode {
 /**
  * Default mode, radius is auto calculated by framework.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20 dynamic
  */
  DEFAULT = 0,

 /**
  * Custom mode, radius can be set by developers.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20 dynamic
  */
  CUSTOM = 1
}

/**
 * Defines SegmentButton common options.
 *
 * @interface CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines SegmentButton common options.
 *
 * @interface CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface CommonSegmentButtonOptions {
  /**
   * The font color of buttons.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font color of buttons.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * The font color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font size of buttons.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize?: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font size of selected button.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font weight of buttons.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight?: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font weight of selected button.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontWeight?: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The background color of SegmentButton.
   *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The background color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @type { ?SizeOptions }
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The image size of buttons.
   *
   * @type { ?SizeOptions }
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageSize?: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @type { ?Padding | Dimension }
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *          For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The padding of buttons.
   *
   * @type { ?Padding | Dimension }
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *          For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttonPadding?: Padding | Dimension;

   /**
   * The localized padding of buttons.
   *
   * @type { ?LocalizedPadding }
   * @default For text only / icon only buttons LocalizedPadding
   * { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }.
   * For text & icon buttons LocalizedPadding
   * {{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @type { ?Padding | Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The padding of text in button.
   *
   * @type { ?Padding | Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textPadding?: Padding | Dimension;

   /**
   * The localized padding of text in button.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @type { ?BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The blurStyle of background.
   *
   * @type { ?BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * The border radius mode of SegmentButton.
   *
   * @type { ?BorderRadiusMode }
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * The background border radius of SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * The border radius of selected item in SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * Device Behavior Differences:The effect of the same material may vary across different devices depending on
   * their computing power.
   *
   * @type { ?uiMaterial.Material } material - System-styled material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines the ItemRestriction type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the ItemRestriction type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ItemRestriction<T> = [T, T, T?, T?, T?];

/**
 * Defines the SegmentButtonItemTuple type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the SegmentButtonItemTuple type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SegmentButtonItemTuple = ItemRestriction<SegmentButtonTextItem> | ItemRestriction<SegmentButtonIconItem> | ItemRestriction<SegmentButtonIconTextItem>;

/**
 * Defines the SegmentButtonItemArray type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the SegmentButtonItemArray type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 * @noninterop
 */
declare type SegmentButtonItemArray = Array<SegmentButtonTextItem> | Array<SegmentButtonIconItem> | Array<SegmentButtonIconTextItem>;

/**
 * Defines SegmentButton tab options.
 *
 * @interface TabSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines SegmentButton tab options.
 *
 * @interface TabSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {
  /**
   * The items of tab type of SegmentButton.
   *
   * @type { ItemRestriction<SegmentButtonTextItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The items of tab type of SegmentButton.
   *
   * @type { ItemRestriction<SegmentButtonTextItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttons: ItemRestriction<SegmentButtonTextItem>;
}

/**
 * Defines SegmentButton capsule options.
 *
 * @interface CapsuleSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines SegmentButton capsule options.
 *
 * @interface CapsuleSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {
  /**
   * The items of capsule type of SegmentButton.
   *
   * @type { SegmentButtonItemTuple }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The items of capsule type of SegmentButton.
   *
   * @type { SegmentButtonItemTuple }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttons: SegmentButtonItemTuple;

  /**
   * Support multiple selections flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Support multiple selections flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  multiply?: boolean;
}

/**
 * Defines the type of SegmentButton options of tab type.
 *
 * @interface TabSegmentButtonOptions
 * @extends TabSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the type of SegmentButton options of tab type.
 *
 * @interface TabSegmentButtonOptions
 * @extends TabSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface TabSegmentButtonOptions extends TabSegmentButtonConstructionOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "tab" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "tab" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: "tab";
}

/**
 * Defines the type of SegmentButton options of capsule type.
 *
 * @interface CapsuleSegmentButtonOptions
 * @extends CapsuleSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the type of SegmentButton options of capsule type.
 *
 * @interface CapsuleSegmentButtonOptions
 * @extends CapsuleSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface CapsuleSegmentButtonOptions extends CapsuleSegmentButtonConstructionOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: "capsule";
}

/**
 * Construct parameter types for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Construct parameter types for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface SegmentButtonItemOptionsConstructorOptions {
  /**
   * The icon of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The text of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * The options for SegmentButton items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * The options for SegmentButton items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
declare class SegmentButtonItemOptions {
  /**
   * The icon of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of selected item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The icon of selected item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The text of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The constructor used to create a SegmentButtonOptionsArray object.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The constructor used to create a SegmentButtonOptionsArray object.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options: SegmentButtonItemOptionsConstructorOptions);
}

/**
 * The class for SegmentButton item options array.
 *
 * @extends Array<SegmentButtonItemOptions>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * The class for SegmentButton item options array.
 *
 * @extends Array<SegmentButtonItemOptions>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
declare class SegmentButtonItemOptionsArray extends Array<SegmentButtonItemOptions> {
  /**
   * The constructor used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The constructor used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  push(...items: SegmentButtonItemArray): number;

  /**
   * Removes the last element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Removes the last element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * Removes the first element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Removes the first element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  unshift(...items: SegmentButtonItemArray): number;

  /**
   * Changes the elements of SegmentButtonItemOptionsArray by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - The zero-based location in the array from which to start removing elements.
   * @param { number } deleteCount - The number of elements to remove.
   * @param { SegmentButtonItemOptions[] } items - Elements to insert into the array in place of the deleted elements.
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Changes the elements of SegmentButtonItemOptionsArray by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - The zero-based location in the array from which to start removing elements.
   * @param { number } deleteCount - The number of elements to remove.
   * @param { SegmentButtonItemOptions[] } items - Elements to insert into the array in place of the deleted elements.
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * The function used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @returns { SegmentButtonItemOptionsArray } Returns the a new SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The function used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @returns { SegmentButtonItemOptionsArray } Returns the a new SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray;
}

/**
 * The class for SegmentButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * The class for SegmentButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
declare class SegmentButtonOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "tab" | "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "tab" | "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: "tab" | "capsule";

  /**
   * The support multiple selections flag of SegmentButton.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The support multiple selections flag of SegmentButton.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  multiply: boolean;

  /**
   * The buttons information of SegmentButton.
   *
   * @type { SegmentButtonOptionsArray }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The buttons information of SegmentButton.
   *
   * @type { SegmentButtonOptionsArray }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * The font color of buttons.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font color of buttons.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor: ResourceColor;

  /**
   * The font color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontColor: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font size of buttons.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSize: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font size of selected button.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font weight of buttons.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The font weight of selected button.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontWeight: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The background color of SegmentButton.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The background color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @type { SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The image size of buttons.
   *
   * @type { SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageSize: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The padding of buttons.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttonPadding: Padding | Dimension;

   /**
   * The localized padding of buttons.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The padding of text in button.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textPadding: Padding | Dimension;

   /**
   * The localized padding of text in button.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @type { BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The blurStyle of background.
   *
   * @type { BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * Device Behavior Differences:The effect of the same material may vary across different devices depending on
   * their computing power.
   *
   * @type { ?uiMaterial.Material } material - System-styled material.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * The constructor used to create a SegmentButtonOptions object.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - The options of SegmentButton.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The constructor used to create a SegmentButtonOptions object.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - The options of SegmentButton.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * The function used to create a SegmentButtonOptions of tab type.
   *
   * @param { TabSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of tab type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The function used to create a SegmentButtonOptions of tab type.
   *
   * @param { TabSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of tab type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * The function used to create a SegmentButtonOptions of capsule type.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of capsule type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The function used to create a SegmentButtonOptions of capsule type.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of capsule type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * The border radius mode of SegmentButton.
   *
   * @type { ?BorderRadiusMode }
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * The background border radius of SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * The border radius of selected item in SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;
}

/**
 * Declare Component SegmentButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Declare Component SegmentButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Component
declare struct SegmentButton {
  /**
   * The options of SegmentButton.
   *
   * @type { SegmentButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The options of SegmentButton.
   *
   * @type { SegmentButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @ObjectLink
  options: SegmentButtonOptions;

  /**
   * The selectedIndex.
   *
   * @type { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * The selectedIndex.
   *
   * @type { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Link
  selectedIndexes: number[];

  /**
   * The max font scale of the segmented button option text.
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Prop
  maxFontScale: number | Resource;

  /**
   * The click event callback will be triggered when a option button of SegmentButton is clicked.
   * 
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onItemClicked?: Callback<number>;

  /**
   * Enable animation when selectedIndexes change.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  enableStateAnimation: boolean;
}

export {
  SegmentButton,
  SegmentButtonOptions,
  SegmentButtonItemOptionsArray,
  TabSegmentButtonOptions,
  TabSegmentButtonConstructionOptions,
  CapsuleSegmentButtonOptions,
  CapsuleSegmentButtonConstructionOptions,
  SegmentButtonTextItem,
  SegmentButtonIconItem,
  SegmentButtonIconTextItem,
  DimensionNoPercentage,
  CommonSegmentButtonOptions,
  ItemRestriction,
  SegmentButtonItemTuple,
  SegmentButtonItemArray,
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions,
  BorderRadiusMode
};
