'use static'
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

import { Resource } from '../../global/resource';
import { Length, ResourceColor, Dimension } from './units';
import { CommonMethod, PixelMap, Bindable, AttributeModifier, DividerStyle } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Sets the sidebar style of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SideBarContainerType {
  /**
   * The sidebar invisible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Embed,

  /**
   * The sidebar visible
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Overlay,

  /**
   * The sidebar AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  AUTO
}

/**
 * Sets the sidebar position of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SideBarPosition {
  /**
   * The sidebar is on the Start of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start,

  /**
   * The sidebar is on the End of the container
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End
}

/**
 * ButtonStyle icons.
 *
 * @typedef ButtonIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ButtonIconOptions {
  /**
   * Defines whether an icon is shown.
   *
   * Anonymous Object Rectification.
   * @type { string | PixelMap | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  shown: string | PixelMap | Resource;

  /**
   * Defines whether an icon is hidden.
   *
   * Anonymous Object Rectification.
   * @type { string | PixelMap | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  hidden: string | PixelMap | Resource;

  /**
   * Defines whether an icon is switching.
   *
   * Anonymous Object Rectification.
   * @type { ?(string | PixelMap | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  switching?: string | PixelMap | Resource;
}

/**
 * Sets the control button style
 *
 * @interface ButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ButtonStyle {
  /**
   * Set the left of control button
   * default value is 16vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left?: double;

  /**
   * Set the top of control button
   * default value is 48vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top?: double;

  /**
   * Set the width of control button
   * default value is 24vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width?: double;

  /**
   * Set the height of control button
   * default value is 24vp.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height?: double;

  /**
   * Set the button icon when sidebar status has changed
   *
   * @type { ?ButtonIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  icons?: ButtonIconOptions;
}

/**
 * The attribute function of sidebar
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SideBarContainerAttribute extends CommonMethod {
  /**
   * Callback showControlButton function when setting the status of sidebar
   *
   * @param { boolean | Bindable<boolean> | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default showSideBar(value: boolean | Bindable<boolean> | undefined): this;

  /**
   * Callback controlButton function when setting the style of button
   *
   * @param { ButtonStyle | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default controlButton(value: ButtonStyle | undefined): this;

  /**
   * Callback showControlButton function when setting the status of button
   *
   * @param { boolean | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default showControlButton(value: boolean | undefined): this;

  /**
   * Trigger callback when sidebar style of showing change finished.
   *
   * @param { function | undefined } callback
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onChange(callback: ((value: boolean) => void) | undefined): this;

  /**
   * Sets the length of sidebar.
   * default value is 240vp.
   *
   * @param { Length | Bindable<Length> | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default sideBarWidth(value: Length | Bindable<Length> | undefined): this;

  /**
   * Sets the min length of sidebar.
   * default value is 200vp.
   *
   * @param { Length | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default minSideBarWidth(value: Length | undefined): this;

  /**
   * Sets the max length of sidebar.
   * default value is 280vp.
   *
   * @param { Length | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default maxSideBarWidth(value: Length | undefined): this;

  /**
   * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
   * default value is true.
   *
   * @param { boolean | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default autoHide(value: boolean | undefined): this;

  /**
   * Called when determining the location of the sidebar.
   * default value is SideBarPosition.Start.
   *
   * @param { SideBarPosition | undefined } value
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default sideBarPosition(value: SideBarPosition | undefined): this;

  /**
   * Set divider style for sideBarContainer
   *
   * @param { DividerStyle | null | undefined } value - indicates the style of the divider or whether to show the divider.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default divider(value: DividerStyle | null | undefined): this;

  /**
   * Sets the min length of content.
   * default value is 360vp.
   *
   * @param { Dimension | undefined } value - min length of content.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default minContentWidth(value: Dimension | undefined): this;

  /**
   * Set the attribute modifier of sidebar.
   *
   * @param { AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of sidebar.
   * @returns { SideBarContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines sidebar Component
 *
 * @param { SideBarContainerType } [type] - sidebar constructor options
 * @param { CustomBuilder } [content_] - container
 * @returns { SideBarContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function SideBarContainer(
  type?: SideBarContainerType,
  content_?: CustomBuilder
): SideBarContainerAttribute
