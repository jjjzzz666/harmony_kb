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

import { ChildrenMainSize, OnWillScrollCallback, OnScrollCallback } from '@ohos.arkui.component';
import { Axis, CrownSensitivity, BarState } from '@ohos.arkui.component';
import { Scroller } from '@ohos.arkui.component';
import { VoidCallback } from '@ohos.arkui.component';
import { LengthMetrics, ColorMetrics } from './arkui/Graphics';
import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';
import { ComponentContentBase } from './arkui/ComponentContent';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';
import { SwipeActionOptions } from '@ohos.arkui.component';
/**
 * Called when the start, end and center positions of the display change.
 *
 * @typedef { function } ArcScrollIndexHandler
 * @param { int } start - the start index of the display area.
 * @param { int } end - the end index of the display area.
 * @param { int } center - the center index of the display area.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export type ArcScrollIndexHandler = (start: int, end: int, center: int) => void;
/**
 * Defines the arc list options.
 *
 * @interface ArkListOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare interface ArkListOptions {
    /**
     * Describes the index of initial item, the default value is 0.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    initialIndex?: int;
    /**
     * Describes the controller for scrollable container.
     *
     * @type { ?Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    scroller?: Scroller;
    /**
     * Describes the header.
     *
     * @type { ?ComponentContentBase }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    header?: ComponentContentBase;
}
/**
 * The ArcListAttribute
 * 
 * @extends CommonMethod
 * @interface ArcListAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare interface ArcListAttribute extends CommonMethod {
    /**
     * Set the digital crown sensitivity.
     *
     * @param { CrownSensitivity | undefined } sensitivity
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Set the space between items.
     *
     * @param { LengthMetrics | undefined } space - The space between items.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default space(space: LengthMetrics | undefined): this;
    /**
     * Set the display mode of the side slider.
     *
     * @param { BarState | undefined } status
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default scrollBar(status: BarState | undefined): this;
    /**
     * Color of the scrollbar.
     *
     * @param { ColorMetrics | undefined } color  - Color of the scrollbar.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default scrollBarColor(color: ColorMetrics | undefined): this;
    /**
     * Width of the scrollbar.
     *
     * @param { LengthMetrics | undefined } width  - Width of the scrollbar.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default scrollBarWidth(width: LengthMetrics | undefined): this;
    /**
     * Set the minimum number of list item caches for long list deferred loading.
     *
     * @param { int | undefined } count
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default cachedCount(count: int | undefined): this;
    /**
     * Whether to enable chain linkage dynamic effect.
     *
     * @param { boolean | undefined } enable
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default chainAnimation(enable: boolean | undefined): this;
    /**
     * Set the children main size for arc list.
     *
     * @param { ChildrenMainSize | undefined } size - children main size for arc list
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default childrenMainSize(size: ChildrenMainSize | undefined): this;
    /**
     * Whether to enable scroll by gesture or mouse.
     *
     * @param { boolean | undefined } enable
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default enableScrollInteraction(enable: boolean | undefined): this;
    /**
     * Whether to enable fading Edge effect.
     *
     * @param { boolean | undefined } enable
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default fadingEdge(enable: boolean | undefined): this;
    /**
     * Friction coefficient.
     *
     * @param { double | undefined } friction - friction coefficient.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default friction(friction: double | undefined): this;
    /**
     * Limit the max speed when fling.
     *
     * @param { double | undefined } speed - Max fling speed, the value needs to be a positive number,
     *     the maximum value is not limited. The unit is vp/s.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default flingSpeedLimit(speed: double | undefined): this;
    /**
     * Called when the start, end and center positions of the display change.
     *
     * @param { ArcScrollIndexHandler | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onScrollIndex(handler: ArcScrollIndexHandler | undefined): this;
    /**
     * Called when the list begins to arrive.
     *
     * @param { VoidCallback | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onReachStart(handler: VoidCallback | undefined): this;
    /**
     * Called when the list reaches the end.
     *
     * @param { VoidCallback | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onReachEnd(handler: VoidCallback | undefined): this;
    /**
     * Called when the slider start.
     *
     * @param { VoidCallback | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onScrollStart(handler: VoidCallback | undefined): this;
    /**
     * Called when the slider stops.
     *
     * @param { VoidCallback | undefined } handler
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onScrollStop(handler: VoidCallback | undefined): this;
    /**
     * Called when the scrollable will scroll.
     *
     * @param { OnWillScrollCallback | undefined } handler - callback of scrollable.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onWillScroll(handler: OnWillScrollCallback | undefined): this;
    /**
     * Called when the scrollable did scroll.
     *
     * @param { OnScrollCallback | undefined } handler - callback of scrollable,
     *     scrollOffset is offset this frame did scroll, scrollState is current scroll state.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default onDidScroll(handler: OnScrollCallback | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<ArcListAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ArcListAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * The ArcListItemAttribute
 * 
 * @extends CommonMethod
 * @interface ArcListItemAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare interface ArcListItemAttribute extends CommonMethod {
    /**
     * Whether to enable auto scale when layout.
     *
     * @param { boolean | undefined } enable
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default autoScale(enable: boolean | undefined): this;
    /**
     * Sets the action item that appears when the list item slides in the cross axis direction of the list.
     *
     * @param { SwipeActionOptions | undefined } options - items defines in the SwipeActionOption.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default swipeAction(options: SwipeActionOptions | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<ArcListItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ArcListItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ArcList Component.
 *
 * @param { ArkListOptions } [options]
 * @param { CustomBuilder } [content_]
 * @returns { ArcListAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcList(
    options?: ArkListOptions, 
    content_?: CustomBuilder,
): ArcListAttribute

/**
 * Defines ArcListItem Component.
 *
 * @param { CustomBuilder } [content_]
 * @returns { ArcListItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcListItem(
    content_?: CustomBuilder,
): ArcListItemAttribute
