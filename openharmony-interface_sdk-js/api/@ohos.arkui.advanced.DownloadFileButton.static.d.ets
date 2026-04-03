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

import { Dimension, FontStyle, FontWeight, Resource, ResourceColor, Component, Builder } from '@ohos.arkui.component';

/**
 * Enum for DownloadIconStyle
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DownloadIconStyle {
  /**
   * FULL_FILLED type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_FILLED = 1,
  /**
   * LINES type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LINES = 2
}

/**
 * Enum for DownloadDescription
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DownloadDescription {

  /**
   * Description is DOWNLOAD.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD = 1,

  /**
   * Description is DOWNLOAD_FILE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_FILE = 2,

  /**
   * Description is SAVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE = 3,

  /**
   * Description is SAVE_IMAGE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_IMAGE = 4,

  /**
   * Description is SAVE_FILE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAVE_FILE = 5,

  /**
   * Description is DOWNLOAD_AND_SHARE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWNLOAD_AND_SHARE = 6,

  /**
   * Description is RECEIVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RECEIVE = 7,

  /**
   * Description is CONTINUE_TO_RECEIVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTINUE_TO_RECEIVE = 8
}

/**
 * Enum for DownloadLayoutDirection
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DownloadLayoutDirection {

  /**
   * Layout direction is HORIZONTAL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HORIZONTAL = 0,

  /**
   * Layout direction is VERTICAL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VERTICAL = 1
}

/**
 * Defines the download content options.
 *
 * @interface DownloadContentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DownloadContentOptions {
  /**
   * DownloadFileButton icon Style.
   *
   * @type { ?DownloadIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: DownloadIconStyle;

  /**
   * DownloadFileButton description.
   *
   * @type { ?DownloadDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: DownloadDescription;
}

/**
 * Defines the DownloadFileButton style option.
 *
 * @interface DownloadStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DownloadStyleOptions {

  /**
   * Icon size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSize?: Dimension;

  /**
   * Layout direction.
   *
   * @type { ?DownloadLayoutDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutDirection?: DownloadLayoutDirection;

  /**
   * Font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Dimension;

  /**
   * Font Style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontStyle?: FontStyle;

  /**
   * Font weight.
   *
   * @type { ?(int | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight?: int | FontWeight | string;

  /**
   * Font family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFamily?: string | Resource;

  /**
   * Font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;

  /**
   * Icon color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconColor?: ResourceColor;

  /**
   * Text and Icon space.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textIconSpace?: Dimension;
}

/**
 * Declare struct DownloadFileButton
 *
 * @struct { DownloadFileButton }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct DownloadFileButton {
  /**
   * Set DownloadFileButton Content.
   *
   * @type { DownloadContentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentOptions: DownloadContentOptions;
  /**
   * Set DownloadFileButton Style.
   *
   * @type { DownloadStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  styleOptions: DownloadStyleOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}