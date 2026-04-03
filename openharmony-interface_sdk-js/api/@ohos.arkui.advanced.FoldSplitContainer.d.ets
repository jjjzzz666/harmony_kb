/*
* Copyright (C) 2024-2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @file Defines FoldSplitContainer component.
 * @kit ArkUI
 */

import display from '@ohos.display';
import window from '@ohos.window';
import { Position, Size } from '@ohos.arkui.node';
import { Callback } from '@ohos.base';

/**
 * Position enum of the extra region
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Position enum of the extra region
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare enum ExtraRegionPosition {
    /**
     * The extra region position is in the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The extra region position is in the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    TOP = 1,
    /**
     * The extra region position is in the bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The extra region position is in the bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    BOTTOM = 2
}
/**
 * The layout options for the container when the foldable screen is expanded.
 *
 * @interface ExpandedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * The layout options for the container when the foldable screen is expanded.
 *
 * @interface ExpandedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface ExpandedRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    verticalSplitRatio?: number;
    /**
     * Does the extended area span from top to bottom within the container?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Does the extended area span from top to bottom within the container?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    isExtraRegionPerpendicular?: boolean;
    /**
     * Specify the position of the extra area when the extra area does not vertically span the container.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Specify the position of the extra area when the extra area does not vertically span the container.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is in hover mode.
 *
 * @typedef HoverModeRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * The layout options for the container when the foldable screen is in hover mode.
 *
 * @typedef HoverModeRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface HoverModeRegionLayoutOptions {
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The ratio of the widths of two areas in the horizontal direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    horizontalSplitRatio?: number;
    /**
     * Does the foldable screen display an extra area when it's in the half-folded state?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Does the foldable screen display an extra area when it's in the half-folded state?
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    showExtraRegion?: boolean;
    /**
     * Specify the position of the extra area when the foldable screen is in the half-folded state.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Specify the position of the extra area when the foldable screen is in the half-folded state.
     *
     * @type { ?ExtraRegionPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    extraRegionPosition?: ExtraRegionPosition;
}
/**
 * The layout options for the container when the foldable screen is folded.
 *
 * @interface FoldedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * The layout options for the container when the foldable screen is folded.
 *
 * @interface FoldedRegionLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface FoldedRegionLayoutOptions {
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The ratio of the heights of two areas in the vertical direction.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    verticalSplitRatio?: number;
}
/**
 * Preset split ratio.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Preset split ratio.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export declare enum PresetSplitRatio {
    /**
     * 1:1
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * 1:1
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    LAYOUT_1V1 = 1,
    /**
     * 2:3
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * 2:3
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    LAYOUT_2V3 = 0.6666666666666666,
    /**
     * 3:2
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * 3:2
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    LAYOUT_3V2 = 1.5
}
/**
 * The status of hover mode.
 *
 * @interface HoverStatus
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * The status of hover mode.
 *
 * @interface HoverStatus
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface HoverModeStatus {
    /**
     * The fold status of devices.
     *
     * @type { display.FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The fold status of devices.
     *
     * @type { display.FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    foldStatus: display.FoldStatus;
    /**
     * Is the app currently in hover mode?
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Is the app currently in hover mode?
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    isHoverMode: boolean;
    /**
     * The angle of rotation applied.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The angle of rotation applied.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    appRotation: number;
    /**
     * The status of window.
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The status of window.
     *
     * @type { window.WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    windowStatusType: window.WindowStatusType;
}
/**
 * The handler of onHoverStatusChange event
 *
 * @typedef { function } OnHoverStatusChangeHandler
 * @param { HoverModeStatus } status - The status of hover mode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * The handler of onHoverStatusChange event
 *
 * @typedef { function } OnHoverStatusChangeHandler
 * @param { HoverModeStatus } status - The status of hover mode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void;
/**
 * Defines FoldSplitContainer container.
 *
 * @struct { FoldSplitContainer }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * Defines FoldSplitContainer container.
 *
 * @struct { FoldSplitContainer }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
@Component
export declare struct FoldSplitContainer {
    /**
     * The builder function which will be rendered in the major region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The builder function which will be rendered in the major region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @BuilderParam
    primary: Callback<void>;
    /**
     * The builder function which will be rendered in the minor region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The builder function which will be rendered in the minor region of container.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @BuilderParam
    secondary: Callback<void>;
    /**
     * The builder function which will be rendered in the extra region of container.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The builder function which will be rendered in the extra region of container.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @BuilderParam
    extra?: Callback<void>;
    /**
     * The layout options for the container when the foldable screen is expanded.
     *
     * @type { ExpandedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The layout options for the container when the foldable screen is expanded.
     *
     * @type { ExpandedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @Prop
    expandedLayoutOptions: ExpandedRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is in hover mode.
     *
     * @type { HoverModeRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The layout options for the container when the foldable screen is in hover mode.
     *
     * @type { HoverModeRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @Prop
    hoverModeLayoutOptions: HoverModeRegionLayoutOptions;
    /**
     * The layout options for the container when the foldable screen is folded.
     *
     * @type { FoldedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The layout options for the container when the foldable screen is folded.
     *
     * @type { FoldedRegionLayoutOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @Prop
    foldedLayoutOptions: FoldedRegionLayoutOptions;
    /**
     * The animation options of layout
     *
     * @type { ?(AnimateParam | null) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The animation options of layout
     *
     * @type { ?(AnimateParam | null) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    @Prop
    animationOptions?: AnimateParam | null;
    /**
     * The callback function that is triggered when the foldable screen enters or exits hover mode.
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { ?OnHoverStatusChangeHandler }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * The callback function that is triggered when the foldable screen enters or exits hover mode.
     * In hover mode, the upper half of the screen is used for display, and the lower half is used for operation.
     *
     * @type { ?OnHoverStatusChangeHandler }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    onHoverStatusChange?: OnHoverStatusChangeHandler;
}
