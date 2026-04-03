'use static'
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

import { CommonMethod } from './common';
import { CustomBuilder } from './builder';
import { TextHeightAdaptivePolicy, TextOverflow, VerticalAlign } from './enums';
import { Dimension, Font, Length, LocalizedPadding, Padding, Resource, ResourceColor, ResourceStr, VoidCallback } from './units';
import { ComponentContentBase } from '../ComponentContent';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';

/**
 * Enum for the mode of the tab bar when selected.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SelectedMode {
  /**
   * Indicator mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  INDICATOR = 0,
  /**
   * Board mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOARD = 1
}
/**
 * Enum for the layout mode of the content in the tab bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LayoutMode {
  /**
   * The the content is laid vertically or horizontally, according to its width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  AUTO = 0,
  /**
   * The the content is laid vertically
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  VERTICAL = 1,
  /**
   * The the content is laid horizontally
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HORIZONTAL = 2
}
/**
 * Provide an interface for the style of an SubTabBar indicator including color, height, width, border radius
 * and margin top
 *
 * @interface SubTabBarIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SubTabBarIndicatorStyle {
  /**
   * Define the color of the indicator
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color?: ResourceColor;
  /**
   * Define the height of the indicator
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height?: Length;
  /**
   * Define the width of the indicator.
   * If it is 0, the width will be equal to the width of the content
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width?: Length;
  /**
   * Define the border radius of the indicator
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  borderRadius?: Length;
  /**
   * Define the margin top of the indicator
   *
   * @type { ?Length }
   * @default 8
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  marginTop?: Length;
}
/**
 * Provide an interface for the style of a drawable indicator including margin top.
 *
 * @interface DrawableTabBarIndicator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 23 static
 */
declare interface DrawableTabBarIndicator {
  /**
   * Define the drawable object for the indicator.
   *
   * @type { ?DrawableDescriptor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  drawable?: DrawableDescriptor;

  /**
   * Width of the indicator. It cannot be set in percentage.
   * If it is 0, the width will be equal to the width of the content
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  width?: Length;

  /**
   * Height of the indicator. It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 2vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  height?: Length;

  /**
   * Rounded corner radius of the indicator. It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  borderRadius?: Length;

  /**
   * Spacing between the indicator and text.It cannot be set in percentage.
   *
   * @type { ?Length }
   * @default 8vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  marginTop?: Length;
}
/**
 * Provide an interface for the style of an indicator including border radius
 *
 * @interface BoardStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface BoardStyle {
  /**
   * Define the border radius of the board
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  borderRadius?: Length;
}
/**
 * TabBarLabelStyle object.
 *
 * @interface TabBarLabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TabBarLabelStyle {
  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  overflow?: TextOverflow;
  /**
   * Label max lines.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxLines?: int;
  /**
   * Min font size for adapted height.
   *
   * @type { ?(double | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minFontSize?: double | ResourceStr;
  /**
   * Max font size for adapted height.
   *
   * @type { ?(double | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxFontSize?: double | ResourceStr;
  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;
  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  font?: Font;
  /**
   * The text color of the selected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedColor?: ResourceColor;
  /**
   * The text color of the unselected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  unselectedColor?: ResourceColor;
}
/**
 * TabBarIconStyle object.
 *
 * @interface TabBarIconStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TabBarIconStyle {
  /**
   * The icon color of the selected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedColor?: ResourceColor;
  /**
   * The icon color of the unselected tab bar.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  unselectedColor?: ResourceColor;
}
/**
 * TabBarSymbol object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TabBarSymbol {
  /**
   * Get symbol icon in the normal style.
   *
   * @returns { SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get normal(): SymbolGlyphModifier;

  /**
   * Set symbol icon in the normal style.
   *
   * @param { SymbolGlyphModifier } normal - Set symbol icon in the normal style.
   *     <br>@default fontColor: #66182431, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set normal(normal: SymbolGlyphModifier);

  /**
   * Get symbol icon in the selected style.
   *
   * @returns { SymbolGlyphModifier | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get selected(): SymbolGlyphModifier | undefined;

  /**
   * Set symbol icon in the selected style.
   *
   * @param { SymbolGlyphModifier | undefined } selected - Set symbol icon in the selected style.
   *     <br>@default fontColor: #ff007dff, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set selected(selected: SymbolGlyphModifier | undefined);
}
/**
 * Icon and text for TabBar.
 *
 * @typedef TabBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TabBarOptions {
  /**
   * TabBar icon.
   * Anonymous Object Rectification
   *
   * <p><strong>NOTE</strong>:
   * <br>If the icon uses an SVG image, the width and height attributes of the SVG image must be deleted.
   * Otherwise, the icon size will be determined by the width and height attributes of the SVG image.
   * </p>
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  icon?: string | Resource;
  /**
   * TabBar text.
   * Anonymous Object Rectification
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  text?: string | Resource;
}
/**
 * Define SubTabBarStyle, the style is text and underline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SubTabBarStyle {
  /**
   * constructor.
   *
   * @param { ResourceStr | ComponentContentBase } content - indicates the content of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(content: ResourceStr | ComponentContentBase);
  /**
   * Static constructor used to create a SubTabBarStyle instance. You can set custom content with ComponentContentBase.
   *
   * @param { ResourceStr | ComponentContentBase } content - indicates the content of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static of(content: ResourceStr | ComponentContentBase): SubTabBarStyle;
  /**
   * Set the style of the indicator when selected
   *
   * @param { SubTabBarIndicatorStyle } style - indicates the indicator style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  indicator(style: SubTabBarIndicatorStyle): SubTabBarStyle;
  /**
   * Sets the indicator style of the selected subtab. Use DrawableTabBarIndicator to set image for the indicator.
   *
   * @param { SubTabBarIndicatorStyle | DrawableTabBarIndicator } value - indicator style object for the selected subtab.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  indicator(value: SubTabBarIndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle;
  /**
   * Sets the display mode of the selected subtab.
   *
   * <p><strong>NOTE</strong>:
   * <br>It takes effect only in the horizontal layout.
   * </p>
   *
   * @param { SelectedMode } value - display mode of the selected subtab. Default value is SelectedMode.INDICATOR.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedMode(value: SelectedMode): SubTabBarStyle;
  /**
   * Sets the background style (board style) of the selected subtab.
   *
   * <p><strong>NOTE</strong>:
   * <br>It takes effect only in the horizontal layout.
   * </p>
   *
   * @param { BoardStyle } value - background style object for the selected subtab.
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  board(value: BoardStyle): SubTabBarStyle;
  /**
   * Set the label style of the sub tab bar
   *
   * @param { TabBarLabelStyle } style - indicates the label style of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  labelStyle(style: TabBarLabelStyle): SubTabBarStyle;
  /**
   * Set the padding of the sub tab bar
   *
   * <p><strong>NOTE</strong>:
   * <br>It cannot be set in percentage.
   * <br>When the parameter is of the Dimension type, the value applies to all sides.
   * </p>
   *
   * @param { Padding | Dimension } value - indicates the padding of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  padding(value: Padding | Dimension): SubTabBarStyle;
  /**
   * Set the padding of the sub tab bar
   *
   * <p><strong>NOTE</strong>:
   * <br>This API supports mirroring but does not support percentage-based settings.
   * </p>
   *
   * @param { LocalizedPadding } padding - indicates the padding of the sub tab bar
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  padding(padding: LocalizedPadding): SubTabBarStyle;
  /**
   * Set an id to the sub tab bar to identify it
   *
   * @param { string } value - id of the sub tab bar to identify it
   * @returns { SubTabBarStyle } the style of the sub tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  id(value: string): SubTabBarStyle;
}
/**
 * Define BottomTabBarStyle, the style is icon and text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BottomTabBarStyle {
  /**
   * constructor.
   *
   * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);
  /**
   * Static constructor used to create a BottomTabBarStyle instance.
   *
   * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
   * @param { ResourceStr } text - indicates the text of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;
  /**
   * Set the label style of the bottom tab bar
   *
   * @param { TabBarLabelStyle } style - indicates the label style of the bottom tab bar
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  labelStyle(style: TabBarLabelStyle): BottomTabBarStyle;
  /**
   * Set the padding of the bottom tab bar
   *
   * <p><strong>NOTE</strong>:
   * <br>It cannot be set in percentage.
   * <br>When the parameter is of the Dimension type, the value applies to all sides.
   * </p>
   *
   * @param { Padding | Dimension | LocalizedPadding } value - indicates the padding of the bottom tab bar
   * Default value is { left:4.0vp, right:4.0vp, top:0.0vp, bottom:0.0vp }.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;
  /**
   * Sets the layout mode of the images and texts on the bottom tab.
   *
   * @param { LayoutMode } value - layout mode of the images and text on the bottom tab.
   * Default value is LayoutMode.VERTICAL.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  layoutMode(value: LayoutMode): BottomTabBarStyle;
  /**
   * Sets the vertical alignment mode of the images and text on the bottom tab.
   *
   * @param { VerticalAlign } value - vertical alignment mode of the images and text on the bottom tab.
   * Default value is VerticalAlign.Center.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  verticalAlign(value: VerticalAlign): BottomTabBarStyle;
  /**
   * Sets whether the images and text on the bottom tab can be symmetrically extended by
   * the minimum value of the available space on the left and right bottom tabs.
   *
   * <p><strong>NOTE</strong>:
   * <br>This parameter is valid only between bottom tabs in fixed horizontal mode.
   * </p>
   *
   * @param { boolean } value - indicates whether the bottom tab bar is extensible. Default value is false.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  symmetricExtensible(value: boolean): BottomTabBarStyle;
  /**
   * Set an id to the bottom tab bar to identify it
   *
   * @param { string } value - id of the bottom tab bar to identify it
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  id(value: string): BottomTabBarStyle;
  /**
   * Sets the style of the label icon on the bottom tab.
   *
   * @param { TabBarIconStyle } style - style of the label icon on the bottom tab.
   * @returns { BottomTabBarStyle } the style of the bottom tab bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}

/**
 * Define the TabContentAttribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TabContentAttribute extends CommonMethod {
  /**
   * Sets the content displayed on the tab bar.
   * Anonymous Object Rectification
   *
   * <p><strong>NOTE</strong>:
   * <br>If BottomTabBarStyle or TabBarOptions is used and an icon is set,
   * a gray block will be displayed if the icon is invalid.
   * <br>If the content exceeds the space provided by the tab bar, it will be clipped.
   * </p>
   *
   * @param { ComponentContentBase | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions | undefined} content
   *     undefined means an empty tab bar.
   *     Content displayed on the tab bar.
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tabBar(content: ComponentContentBase | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions | undefined): this;
  /**
   * Called when the tab content is about to be displayed. The scenarios include the first-time display,
   * tab switching, page switching, and window switching between the foreground and background.
   *
   * @param { VoidCallback  } event
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onWillShow(event: VoidCallback | undefined): this;
  /**
   * Called when the tab content is about to be hidden. The scenarios include the tab switching,
   * page switching, and window switching between the foreground and background.
   *
   * @param { VoidCallback  } event
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onWillHide(event: VoidCallback | undefined): this;

  /**
   * Set the attribute modifier for TabContent.
   *
   * @param { AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines TabContent Component
 *
 * @param { CustomBuilder } [content_] - TabContent
 * @returns { TabContentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function TabContent(
    
    content_?: CustomBuilder,
): TabContentAttribute;
