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
import { ResourceStr, ResourceColor, LocalizedMargin } from '@ohos.arkui.component';
import { SafeAreaType, SafeAreaEdge, BlurStyle } from '@ohos.arkui.component';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Builder } from '@ohos.arkui.component';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class EditableTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Symbol style for this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * Icon label for this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public label?: ResourceStr;
  /**
   * Whether to enable this menu item.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public isEnabled?: boolean;
  /**
   * Callback function when click on this menu item.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * The accessibilityText of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this menu item.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
  /**
   * Set the default focus state of this menu item.
   *
   * @type { ?boolean }
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public defaultFocus?: boolean;
}
/**
 * Declaration of the image item .
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type EditableTitleBarItem = EditableTitleBarMenuItem;
/**
 * Declaration of the left icon type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum EditableLeftIconType {
  /**
   * The back type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Back = 0,
  /**
   * The cancel type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Cancel = 1
}
/**
 * Indicates the options of the editable title bar.
 *
 * @interface EditableTitleBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface EditableTitleBarOptions {
  /**
   * Background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;
  /**
   * Background blur style.
   *
   * @type { ?BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * Indicates the types of the safe area.
   *
   * @type { ?Array<SafeAreaType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  safeAreaTypes?: Array<SafeAreaType>;
  /**
   * Indicates the edges of the safe area.
   *
   * @type { ?Array<SafeAreaEdge> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  safeAreaEdges?: Array<SafeAreaEdge>;
}
/**
 * Declaration of the editable title bar.
 * @struct { EditableTitleBar }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct EditableTitleBar {
  /**
   * Style of the left icon.
   *
   * @type { EditableLeftIconType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  leftIconStyle: EditableLeftIconType;
  /**
   * Image item between the left icon and the title.
   *
   * @type { ?EditableTitleBarItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageItem?: EditableTitleBarItem;
  /**
   * Title of this title bar.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * Sub-Title of this title bar.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  subtitle?: ResourceStr;
  /**
   * Whether to required the save icon.
   *
   * @type { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isSaveIconRequired: boolean;
  /**
   * Menu items on the right side.
   *
   * @type { ?Array<EditableTitleBarMenuItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  menuItems?: Array<EditableTitleBarMenuItem>;
  /**
   * Callback function when click on the save icon at the right side.
   *
   * @type { ?function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSave?: () => void;
  /**
   * Callback function when click on the cancel icon at the left side.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCancel?: () => void;
  /**
   * Indicates the options of titlebar.
   *
   * @type { EditableTitleBarOptions }
   * @default {expandSafeAreaTypes: SafeAreaType.SYSTEM, expandSafeAreaEdges: SafeAreaEdge.TOP}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  options: EditableTitleBarOptions;
  /**
   * Sets the content margin.
   *
   * @type { ?LocalizedMargin }
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   * <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  contentMargin?: LocalizedMargin;
  /**
   * Sets the default focus state of left icon.
   *
   * @type { ?boolean }
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  leftIconDefaultFocus?: boolean;
  /**
   * Sets the default focus state of save icon.
   *
   * @type { ?boolean }
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  saveIconDefaultFocus?: boolean;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}