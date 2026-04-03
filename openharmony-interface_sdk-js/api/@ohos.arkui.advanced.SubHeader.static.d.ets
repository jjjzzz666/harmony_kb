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
import { ResourceStr, Resource, ResourceColor, LocalizedMargin, LocalizedPadding } from '@ohos.arkui.component';
import { SelectOption } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component } from '@ohos.arkui.component';
import { FontWeight } from '@ohos.arkui.component';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * Control style of operation element
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum OperationType {
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
 * Declare type OperationOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperationOption {
    /**
     * The content of text or the address of icon.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public value: ResourceStr;
    /**
     * callback function when operate the text or icon.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public action?: () => void;
    /**
     * The accessibilityText of this text or icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public accessibilityText?: ResourceStr;
    /**
     * The accessibilityDescription of this text or icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public accessibilityDescription?: ResourceStr;
    /**
     * The accessibilityLevel of this text or icon.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public accessibilityLevel?: string;
    /**
     * Sets the default focus state of the text or icon.
     *
     * @type { ?boolean }
     * @default { false }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public defaultFocus?: boolean;
    /**
     * Set the id for operation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    public id?: string;
}
/**
 * Declare type SelectOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class SelectOptions {
    /**
     * SubOption array of the select.
     *
     * @type { Array<SelectOption> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public options: Array<SelectOption>;
    /**
     * The default selected index.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public selected?: int;
    /**
     * The default text value.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public value?: ResourceStr;
    /**
     * Callback when the select is selected.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public onSelect?: (index: int, value?: string) => void;
    /**
     * Sets the default focus state of select.
     *
     * @type { ?boolean }
     * @default { false }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public defaultFocus?: boolean;
    /**
     * Set the id for select.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    public id?: string;
}
/**
* Declare type SymbolOptions
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 23 static
* @noninterop
*/
export declare class SymbolOptions {
    /**
     * The size of symbol icon.
     *
     * @type { ?(double | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public fontSize?: double | string | Resource;
    /**
     * The color of symbol icon.
     *
     * @type { ?Array<ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public fontColor?: Array<ResourceColor>;
    /**
     * The fontWeight of symbol icon.
     *
     * @type { ?(int | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public fontWeight?: int | FontWeight | string;
    /**
     * The effect strategy of symbol icon.
     *
     * @type { ?SymbolEffectStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public effectStrategy?: SymbolEffectStrategy;
    /**
     * The rendering strategy of symbol icon.
     *
     * @type { ?SymbolRenderingStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    public renderingStrategy?: SymbolRenderingStrategy;
}
/**
 * Declare struct SubHeader
 * @struct { SubHeader }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct SubHeader {
    /**
     * Icon resource of content area.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    icon?: ResourceStr;
    /**
     * Attributes of Symbol icon.
     *
     * @type { ?SymbolOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iconSymbolOptions?: SymbolOptions;
    /**
     * The first line text of content area.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    primaryTitle?: ResourceStr;
    /**
     * The secondary line text of content area.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    secondaryTitle?: ResourceStr;
    /**
     * Select option of content area.
     *
     * @type { ?SelectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    select?: SelectOptions;
    /**
     * Operation style of SubHeader.
     *
     * @type { ?OperationType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    operationType?: OperationType;
    /**
     * operation item.
     *
     * @type { ?Array<OperationOption> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    operationItem?: Array<OperationOption>;
    /**
     * Attributes of Symbol icons in operation area.
     *
     * @type { ?Array<SymbolOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    operationSymbolOptions?: Array<SymbolOptions>;
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
     * Text modifier for secondary title.
     *
     * @type { ?TextModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryTitleModifier?: TextModifier;
    /**
     * Set the title content.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    titleBuilder?: () => void;
    /**
     * Set the content margin.
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
     * Set the content padding.
     *
     * @type { ?LocalizedPadding }
     * @default set different default values according to the width of the subHeader:
     *     <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
     *     <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    contentPadding?: LocalizedPadding;
    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
    /**
     * Set the ability to customize the broadcast of the title.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    titleAccessibilityText?: ResourceStr;
    /**
     * Set the id for the title.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    @PropRef
    titleId?: string;
}
