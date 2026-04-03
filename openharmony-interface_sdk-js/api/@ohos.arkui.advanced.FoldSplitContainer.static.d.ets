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

import display from '@ohos.display';
import window from '@ohos.window';
import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { BuilderParam, Builder } from './arkui/component/builder';
import { AnimateParam } from './arkui/component/common';

/**
 * RegionBuilder
 *
 * @typedef  { function } RegionBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 staticonly
 */
@Builder
type RegionBuilder = () => void;

/**
 * Position enum of the extra region
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare enum ExtraRegionPosition {
    /**
     * The extra region position is in the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TOP = 1,
    /**
     * The extra region position is in the bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BOTTOM = 2
}
/**
 * The layout options for the container when the foldable screen is expanded.
 *
 * @interface ExpandedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    horizontalSplitRatio?: PresetSplitRatio;
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalSplitRatio?: PresetSplitRatio;
    /**
     * Does the extended area span from top to bottom within the container?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * Specify the position of the extra area when the extra area does not vertically span the container.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is in hover mode.
 *
 * @typedef HoverModeRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    horizontalSplitRatio?: PresetSplitRatio;
    /**
     * Does the foldable screen display an extra area when it's in the half-folded state?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    showExtraRegion?: boolean;
    /**
     * Specify the position of the extra area when the foldable screen is in the half-folded state.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is folded.
 *
 * @interface FoldedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface FoldedRegionLayoutOptions {
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?PresetSplitRatio }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalSplitRatio?: PresetSplitRatio;
}
/**
 * Preset split ratio.
 *
 * @enum { double }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PresetSplitRatio {
  /**
   * 1:1
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LAYOUT_1V1 = 1.0,
  /**
   * 2:3
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LAYOUT_2V3 = 0.6666666666666666,
  /**
   * 3:2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LAYOUT_3V2 = 1.5,
}
/**
 * The status of hover mode.
 *
 * @interface HoverStatus
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface HoverModeStatus {
    /**
     * The fold status of devices.
     *
     * @type { display.FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    foldStatus: display.FoldStatus;
    /**
     * Is the app currently in hover mode?
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isHoverMode: boolean;
    /**
     * The angle of rotation applied.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    appRotation: double;
    /**
     * The status of window.
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    windowStatusType: window.WindowStatusType;
}
/**
 * The handler of onHoverStatusChange event
 *
 * @typedef { function } OnHoverStatusChangeHandler
 * @param { HoverModeStatus } status - The status of hover mode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * Defines FoldSplitContainer container.
 *
 * @interface FoldSplitContainer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct FoldSplitContainer {
    /**
     * The builder function which will be rendered in the major region of container.
     *
     * @type { RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @BuilderParam
    primary: RegionBuilder;
    /**
     * The builder function which will be rendered in the minor region of container.
     *
     * @type { RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @BuilderParam
    secondary: RegionBuilder;
    /**
     * The builder function which will be rendered in the extra region of container.
     *
     * @type { ?RegionBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @BuilderParam
    extra?: RegionBuilder;
    /**
     * The layout options for the container when the foldable screen is expanded.
     *
     * @type { ExpandedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @PropRef
    expandedLayoutOptions: ExpandedRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is in hover mode.
     *
     * @type { HoverModeRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @PropRef
    hoverModeLayoutOptions: HoverModeRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is folded.
     *
     * @type { FoldedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @PropRef
    foldedLayoutOptions: FoldedRegionLayoutOptions;
    /**
     * The animation options of layout
     *
     * @type { ?AnimateParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @PropRef
    animationOptions?: AnimateParam;
    /**
     * The callback function that is triggered when the foldable screen enters or exits hover mode.
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { ?OnHoverStatusChangeHandler }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
	/**
     * The method to build component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}
