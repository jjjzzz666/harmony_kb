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
import { TextModifier } from './arkui/TextModifier';
import { ResourceStr } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { SelectOption } from '@ohos.arkui.component';
import { ObservedV2, Trace, Param } from '@ohos.arkui.stateManagement';
import { ComponentV2 } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * SubHeaderV2IconType
 *
 * @typedef { ResourceStr | SymbolGlyphModifier } SubHeaderV2IconType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2IconType = ResourceStr | SymbolGlyphModifier;
/**
 * Defines the SubHeaderV2TitleOptions.
 *
 * @interface SubHeaderV2TitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2TitleOptions {
  /**
   * The first line text of content area.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * Text modifier for primary title.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitleModifier?: TextModifier;
  /**
   * The secondary line text of content area.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * Text modifier for secondary title.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitleModifier?: TextModifier;
  /**
   * Set the ability to customize the broadcast of the title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  titleAccessibilityText?: ResourceStr;
  /**
   * Set the id for the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Declare the SubHeaderV2Title
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Title {
  /**
   * The first line text of content area.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitle?: ResourceStr;
  /**
   * Text modifier for primary title.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitleModifier?: TextModifier;
  /**
   * The secondary line text of content area.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitle?: ResourceStr;
  /**
   * Text modifier for secondary title.
   *
   * @type { ?TextModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitleModifier?: TextModifier;
  /**
   * The constructor of SubHeaderV2Title
   *
   * @param { SubHeaderV2TitleOptions } options - the options of the SubHeaderV2Title
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2TitleOptions);
  /**
   * Set the ability to customize the broadcast of the title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public titleAccessibilityText?: ResourceStr;
  /**
   * Set the id for the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
}
/**
 * The callback function that will be invoked when the selectedIndex of the SubHeaderV2Select is selected.
 *
 * @typedef { function } SubHeaderV2SelectOnSelect
 * @param { int } selectedIndex - the index of selected item
 * @param { string } [selectedContent] - the content of selected item
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2SelectOnSelect = (selectedIndex: int, selectedContent?: string) => void;
/**
 * Defines the SubHeaderV2SelectOptions.
 *
 * @interface SubHeaderV2SelectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2SelectOptions {
  /**
   * Sets the options of the SubHeaderV2SelectOptions.
   *
   * @type { SelectOption[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  options: SelectOption[];
  /**
   * Sets the selected index of the SubHeaderV2SelectOptions.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIndex?: int;
  /**
   * Sets the selected content of the SubHeaderV2SelectOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedContent?: ResourceStr;
  /**
   * Sets the onSelect of the SubHeaderV2SelectOptions.
   *
   * @type { ?SubHeaderV2SelectOnSelect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * Sets the default focus state of SubHeaderV2SelectOptions.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * Set the id for the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Declare the SubHeaderV2Select
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Select {
  /**
   * Sets the options of the SubHeaderV2SelectOptions.
   *
   * @type { SelectOption[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public options: SelectOption[];
  /**
   * Sets the selected index of the SubHeaderV2SelectOptions.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public selectedIndex?: int;
  /**
   * Sets the selected content of the SubHeaderV2SelectOptions.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public selectedContent?: ResourceStr;
  /**
   * Sets the onSelect of the SubHeaderV2SelectOptions.
   *
   * @type { ?SubHeaderV2SelectOnSelect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * Sets the default focus state of SubHeaderV2SelectOptions.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * Sets the id for SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
  /**
   * The constructor of SubHeaderV2Select
   *
   * @param { SubHeaderV2SelectOptions } options - the options of the SubHeaderV2Select
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2SelectOptions);
}
/**
 * Control style of operation element
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum SubHeaderV2OperationType {
  /**
   * The TextArrow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT_ARROW = 0,
  /**
   * The Button style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BUTTON = 1,
  /**
   * The IconGroup style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ICON_GROUP = 2,
  /**
   * The LoadingProgress style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LOADING = 3
}
/**
 * Defines the action callback of the SubHeaderV2OperationItem.
 *
 * @typedef { function } OnClicked
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2OperationItemAction = () => void;
/**
 * SubHeaderV2OperationItemType
 *
 * @typedef { ResourceStr | SymbolGlyphModifier } SubHeaderV2OperationItemType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2OperationItemType = ResourceStr | SymbolGlyphModifier;
/**
 * Defines the SubHeaderV2OperationItemOptions.
 *
 * @interface SubHeaderV2OperationItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2OperationItemOptions {
  /**
   * The content of text or the address of icon.
   *
   * @type { SubHeaderV2OperationItemType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: SubHeaderV2OperationItemType;
  /**
   * callback function when operate the text or icon.
   *
   * @type { ?SubHeaderV2OperationItemAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: SubHeaderV2OperationItemAction;
  /**
   * The accessibilityText of this text or icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this text or icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this text or icon.
   *
   * @type { ?string }
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityLevel?: string;
  /**
   * Sets the default focus state of the text or icon.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * Sets the id for operation item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * Declare the SubHeaderV2OperationItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2OperationItem {
  /**
   * The content of text or the address of icon.
   *
   * @type { SubHeaderV2OperationItemType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public content: SubHeaderV2OperationItemType;
  /**
   * callback function when operate the text or icon.
   *
   * @type { ?SubHeaderV2OperationItemAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public action?: SubHeaderV2OperationItemAction;
  /**
   * The constructor of SubHeaderV2OperationItem
   *
   * @param { SubHeaderV2OperationItemOptions } options - the options of the SubHeaderV2OperationItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: SubHeaderV2OperationItemOptions);
  /**
   * The accessibilityText of this text or icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this text or icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this text or icon.
   *
   * @type { ?string }
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityLevel?: string;
  /**
   * Sets the default focus state of the text or icon.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * Sets the id for operation item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
}
/**
 * The callback function that will be invoked when the title build.
 *
 * @typedef { function } SubHeaderV2TitleBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
export type SubHeaderV2TitleBuilder = () => void;
/**
 * Defines struct SubHeaderV2.
 *
 * @struct { SubHeaderV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct SubHeaderV2 {
  /**
   * Sets the icon of the SubHeaderV2.
   *
   * @type { ?SubHeaderV2IconType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly icon?: SubHeaderV2IconType;
  /**
   * Sets the title of the SubHeaderV2.
   *
   * @type { ?SubHeaderV2Title }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly title?: SubHeaderV2Title;
  /**
   * Sets the select of the SubHeaderV2.
   *
   * @type { ?SubHeaderV2Select }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly select?: SubHeaderV2Select;
  /**
   * Sets the operationType of the SubHeaderV2.
   *
   * @type { ?SubHeaderV2OperationType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly operationType?: SubHeaderV2OperationType;
  /**
   * Sets the operationItems of the SubHeaderV2.
   *
   * @type { ?SubHeaderV2OperationItem[] }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly operationItems?: SubHeaderV2OperationItem[];
  /**
   * Set the title content.
   *
   * @type { ?SubHeaderV2TitleBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  titleBuilder?: SubHeaderV2TitleBuilder;
  
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

