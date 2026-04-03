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
import { ResourceStr } from '@ohos.arkui.component';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { SelectOption } from '@ohos.arkui.component';
import { Builder } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class SelectTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Symbol resource for this menu item.
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
}
/**
 * Callback method when an option is selected.
 * @typedef { function } OnSelectedCallback
 * @param { int } index -the result of option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type OnSelectedCallback = (index: int) => void;
/**
 * Declaration of the selectable title bar.
 * @struct { SelectTitleBar }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct SelectTitleBar {
  /**
   * Selected index of the initial options in the drop-down menu. The index of the first item is 0.
   * If this attribute is not set, the default value is -1. Which means, no menu item is selected.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  selected: int;
  /**
   * Options inside the drop-down list.
   *
   * @type { Array<SelectOption> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  options: Array<SelectOption>;
  /**
   * Menu items on the right side.
   *
   * @type { ?Array<SelectTitleBarMenuItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  menuItems?: Array<SelectTitleBarMenuItem>;
  /**
   * Sub-title of this title bar.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  subtitle?: ResourceStr;
  /**
   * The interger displayed in a badge.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  badgeValue?: int;
  /**
   * Whether to hide the back arrow at the left side.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hidesBackButton?: boolean;
  /**
   * Callback function when an option is selected
   *
   * @type { ?OnSelectedCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSelected?: OnSelectedCallback;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
