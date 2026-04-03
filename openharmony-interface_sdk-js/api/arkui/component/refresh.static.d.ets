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
import { Callback, CommonMethod, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceStr } from './units';
import { ComponentContentBase } from '../ComponentContent';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * The refresh status of the drop-down refresh.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RefreshStatus {
    /**
     * The refresh status of the drop-down refresh.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Inactive,
    /**
     * Drop down, but the drop-down distance is less than the refresh distance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Drag,
    /**
     * The pull-down exceeds the refresh distance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    OverDrag,
    /**
     * After the pull-down, it rebounds to the refresh distance and enters the refresh state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Refresh,
    /**
     * After refresh, return to the initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Done
}
/**
 * Defines the options of refresh component.
 *
 * @interface RefreshOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RefreshOptions {
    /**
     * Whether the current component is being refreshed.
     * This parameter supports $ for two-way binding of variables.
     *
     * @type { boolean | Bindable<boolean> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    refreshing: boolean | Bindable<boolean>;
    /**
     * The text displayed during refreshing
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    promptText?: ResourceStr;
    /**
     * Custom component to display during dragging.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    builder?: CustomBuilder;
    /**
     * Custom component to display during dragging.
     *
     * @type { ?ComponentContentBase }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    refreshingContent?: ComponentContentBase;
}
/**
 * The RefreshAttribute.
 * 
 * @extends CommonMethod
 * @interface RefreshAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RefreshAttribute extends CommonMethod {
    /**
     * Called when the refresh state changes.
     *
     * @param { function | undefined } callback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onStateChange(callback: ((state: RefreshStatus) => void) | undefined): this;
    /**
     * Called when the refresh state is entered.
     *
     * @param { function | undefined } callback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onRefreshing(callback: (() => void) | undefined): this;
    /**
     * The pull-down offset to trigger refresh.
     *
     * @param { double | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default refreshOffset(value: double | undefined): this;
    /**
     * Sets whether to trigger refresh when the pull-down distance exceeds the refreshOffset.
     *
     * @param { boolean | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default pullToRefresh(value: boolean | undefined): this;
    /**
     * Sets whether to cancel refresh when the pull-up.
     *
     * @param { boolean | undefined } enabled - enable pull up to cancel refresh. <br>Default value: true.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default pullUpToCancelRefresh(enabled: boolean | undefined): this;
    /**
     * Called when the refresh offset changed.
     * The unit is vp.
     *
     * @param { Callback<double> | undefined } callback
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onOffsetChange(callback: Callback<double> | undefined): this;
    /**
     * Pull-down follow ratio for Refresh.
     *
     * @param { double | undefined } ratio - Pull-down follow ratio for Refresh.
     * @returns { this } The attribute of the Refresh.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default pullDownRatio(ratio: double | undefined): this;
    /**
     * The max pull down distance for Refresh.
     *
     * @param { double | undefined } distance - The max pull down distance for Refresh,
     *     value range is [0, +∞), default value is { undefined }, Unlimited maximum pull-down distance.
     * @returns { this } The attribute of the Refresh.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default maxPullDownDistance(distance: double | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<RefreshAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RefreshAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Refresh Component.
 *
 * @param { RefreshOptions } value - value
 * @param { CustomBuilder } [content_] - container
 * @returns { RefreshAttribute } The attribute of the grid
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Refresh(
    value: RefreshOptions, 
    content_?: CustomBuilder,
): RefreshAttribute