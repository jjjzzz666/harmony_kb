/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { TextModifier } from './@ohos.arkui.modifier';


/**
 * Control style of operation element
 * @enum { OperationStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Control style of operation element
 * @enum { OperationStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Control style of operation element
 * @enum { OperationStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum OperationType {
  /**
   * The TextArrow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The TextArrow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The TextArrow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ARROW = 0,

  /**
   * The Button style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The Button style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The Button style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  BUTTON = 1,

  /**
   * The IconGroup style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The IconGroup style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The IconGroup style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ICON_GROUP = 2,

  /**
   * The LoadingProgress style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The LoadingProgress style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The LoadingProgress style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING = 3
}

/**
 * Declare type OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare type OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Declare type OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class OperationOption {
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  value: ResourceStr;

  /**
   * callback function when operate the text or icon.
   * @type { ?function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * callback function when operate the text or icon.
   * @type { ?function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * callback function when operate the text or icon.
   * @type { ?function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: () => void;

  /**
   * Accessible label name for the icon on the right side of the subheader.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * The accessibilityDescription of this text or icon.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The accessibilityLevel of this text or icon.
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Sets the default focus state of the text or icon.
   * @type { ?boolean }.
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Set the id for the operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare type SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Declare type SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class SelectOptions {
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  options: Array<SelectOption>;

  /**
   * The default selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The default selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The default selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selected?: number;

  /**
   * The default text value.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The default text value.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The default text value.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  /**
   * The default text value.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  value?: ResourceStr;

 /**
  * Callback when the select is selected.
  * @type { (index: number, value?: string) => void }.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @since 10
  */
 /**
  * Callback when the select is selected.
  * @type { (index: number, value?: string) => void }.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @atomicservice
  * @since 11
  */
 /**
  * Callback when the select is selected.
  * @type { (index: number, value?: string) => void }.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 18 dynamic
  */
  onSelect?: (index: number, value?: string) => void;

  /**
   * Sets the default focus state of select.
   * @type { ?boolean }.
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Set the id for the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * Declare type SymbolOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 
 */
 /**
 * Declare type SymbolOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class SymbolOptions {
  /**
   * The size of symbol icon.
   * @type { ?(number | string | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * The size of symbol icon.
   * @type { ?(number | string | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * The color of symbol icon.
   * @type { ?(Array<ResourceColor>) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * The color of symbol icon.
   * @type { ?(Array<ResourceColor>) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fontColor?: Array<ResourceColor>;

  /**
   * The fontWeight of symbol icon.
   * @type { ?(number | FontWeight | string) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * The fontWeight of symbol icon.
   * @type { ?(number | FontWeight | string) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fontWeight?: number | FontWeight | string;

  /**
   * The effect strategy of symbol icon.
   * @type { ?(SymbolEffectStrategy) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * The effect strategy of symbol icon.
   * @type { ?(SymbolEffectStrategy) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectStrategy?: SymbolEffectStrategy;

  /**
   * The rendering strategy of symbol icon.
   * @type { ?(SymbolRenderingStrategy) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * The rendering strategy of symbol icon.
   * @type { ?(SymbolRenderingStrategy) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  renderingStrategy?: SymbolRenderingStrategy;
}

/**
 * Declare struct SubHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 10
 */
/**
 * Declare struct SubHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
/**
 * Declare struct SubHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@Component
export declare struct SubHeader {

  /**
   * Icon resource of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Icon resource of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * Icon resource of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop icon?: ResourceStr;

  /**
   * Attributes of Symbol icon.
   * @type { ?SymbolOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Attributes of Symbol icon.
   * @type { ?SymbolOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iconSymbolOptions?: SymbolOptions;

  /**
   * The first line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The first line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The first line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop primaryTitle?: ResourceStr;

  /**
   * The secondary line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * The secondary line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The secondary line text of content area.
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop secondaryTitle?: ResourceStr;

  /**
   * Select option of content area.
   * @type { ?SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Select option of content area.
   * @type { ?SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * Select option of content area.
   * @type { ?SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  select?: SelectOptions;

  /**
   * Operation style of SubHeader.
   * @type { ?OperationType }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * Operation style of SubHeader.
   * @type { ?OperationType }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * Operation style of SubHeader.
   * @type { ?OperationType }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop operationType?: OperationType;

  /**
   * operation item.
   * @type { ?Array<OperationOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * operation item.
   * @type { ?Array<OperationOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * operation item.
   * @type { ?Array<OperationOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  operationItem?: Array<OperationOption>;

  /**
   * Attributes of Symbol icons in operation area.
   * @type { ?Array<SymbolOptions> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Attributes of Symbol icons in operation area.
   * @type { ?Array<SymbolOptions> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  operationSymbolOptions?: Array<SymbolOptions>;

  /**
   * Text modifier for primary title.
   * @type { ?TextModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Text modifier for primary title.
   * @type { ?TextModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  primaryTitleModifier?: TextModifier;

  /**
   * Text modifier for secondary title.
   * @type { ?TextModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Text modifier for secondary title.
   * @type { ?TextModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryTitleModifier?: TextModifier;

  /**
   * Set the title content.
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Set the title content.
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam titleBuilder?: () => void;

  /**
   * Set the content margin.
   * @type { ?LocalizedMargin }
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   * <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Set the content margin.
   * @type { ?LocalizedMargin }
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   * <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop contentMargin?: LocalizedMargin;

  /**
   * Set the content padding.
   * @type { ?LocalizedPadding }
   * @default set different default values according to the width of the subHeader:
   * <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
   * <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Set the content padding.
   * @type { ?LocalizedPadding }
   * @default set different default values according to the width of the subHeader:
   * <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
   * <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop contentPadding?: LocalizedPadding;

  /**
   * Set the ability to customize the broadcast of the title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  @Prop titleAccessibilityText?: ResourceStr;

  /**
   * Set the titleId for title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  titleId?: string;
}