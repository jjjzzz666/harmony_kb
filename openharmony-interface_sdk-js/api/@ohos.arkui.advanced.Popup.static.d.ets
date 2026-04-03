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

import { ResourceStr, Builder, Resource, ResourceColor, FontWeight,
  VoidCallback, Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';

/**
 * Defines the popup text options
 * @interface PopupTextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupTextOptions {
  /**
   * Set the text display content.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr;

  /**
   * Set the text font size.
   * @type { ?(number | string | Resource) }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: number | string | Resource;

  /**
   * Set the text font color.
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_text_secondary')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;

  /**
   * Set the text font weight.
   * @type { ?(number | FontWeight | string) }
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight?: number | FontWeight | string;
}

/**
 * Defines the popup button options
 * @interface PopupButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupButtonOptions {
  /**
   * Set the button display content.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr;

  /**
   * Set the button callback.
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: VoidCallback;

  /**
   * Set the button font size.
   * @type { ?(number | string | Resource) }
   * @default $r('sys.float.ohos_id_text_size_button2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: number | string | Resource;

  /**
   * Set the button font color.
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_text_primary_activated')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;
}

/**
 * Defines the popup icon options
 * @interface PopupIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupIconOptions {
  /**
   * Set the icon image.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  image?: ResourceStr;

  /**
   * Set the icon width.
   * @type { ?Dimension }
   * @default 32.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: Dimension;

  /**
   * Set the icon height.
   * @type { ?Dimension }
   * @default 32.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: Dimension;

  /**
   * Set the icon fill color.
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillColor?: ResourceColor;

  /**
   * Set the icon border radius.
   * @type { ?(Length | BorderRadiuses) }
   * @default $r('sys.float.ohos_id_corner_radius_default_s')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: Length | BorderRadiuses;
}

/**
 * Defines the popup options.
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupOptions {
  /**
   * The icon of Popup.
   *
   * @type { ?PopupIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: PopupIconOptions;

  /**
   * The title of Popup.
   *
   * @type { ?PopupTextOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title?: PopupTextOptions;

  /**
   * The message of Popup.
   *
   * @type { ?PopupTextOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  message?: PopupTextOptions;

  /**
   * The show close of Popup.
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showClose?: boolean | Resource;

  /**
   * The close button callback of Popup.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClose?: VoidCallback;

  /**
   * The buttons of Popup. Setting undefined means that the button will not be displayed.
   * 
   * @type { ?([PopupButtonOptions | undefined, PopupButtonOptions | undefined]) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttons?: [
    PopupButtonOptions | undefined,
    PopupButtonOptions | undefined
  ];

  /**
   * Indicates the attribute of the current popup direction.
   *
   * @type { ?Direction }
   * @default Direction.Auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: Direction;

  /**
   * Set the max width of the popup.
   *
   * @type { ?Dimension }
   * @default 400.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxWidth?: Dimension;
}

/**
 * Build function of popup. This component is implemented based on state management V1.
 *
 * @param { PopupOptions } options - popup option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function Popup(options: PopupOptions): void;
