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

import { ICurve, TranslateOptions, ScaleOptions } from './common';
import { Curve } from './enums';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RouteType {
    /**
     * The page is not redirected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    None,
    /**
     * Go to the next page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Push,
    /**
     * Redirect to a specified page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Pop
}
/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SlideEffect {
    /**
     * Swipe left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Left,
    /**
     * Swipe right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Right,
    /**
     * Swipe top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Top,
    /**
     * Swipe bottom.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Bottom,
    /**
     * Swipe start.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    START = 5,
    /**
     * Swipe end.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    END = 6
}
/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CommonTransition {
    /**
     * Called when the slide in effect of the transition is set.
     *
     * @param { SlideEffect } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    slide(value: SlideEffect): this;
    /**
     * Called when the translation effect of page transition is set.
     *
     * @param { TranslateOptions } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    translate(value: TranslateOptions): this;
    /**
     * Called when setting the zoom effect of page transition.
     *
     * @param { ScaleOptions } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scale(value: ScaleOptions): this;
    /**
     * Called when the transparency value of the starting point of entry or the ending point of exit is set.
     *
     * @param { double } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    opacity(value: double): this;
}
/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PageTransitionOptions {
    /**
     * RouteType in which the pageTransition can work.
     * @type { ?RouteType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type?: RouteType;
    /**
     * PageTransition animation duration, in ms.
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    duration?: int;
    /**
     * PageTransition animation curve.
     * @type { ?(Curve | string | ICurve) }
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * PageTransition animation delay time, in ms.
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    delay?: int;
}
/**
 * Callback used to report page trasition events.
 *
 * @typedef { function } PageTransitionCallback
 * @param { RouteType } type - transition route type
 * @param { double } progress - transition progess
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type PageTransitionCallback = (type: RouteType, progress: double) => void;
/**
 * Provides an interface to set transition style when a page enters.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PageTransitionEnter extends CommonTransition {
    /**
     * Called when page Jump animation is used.
     *
     * @param { PageTransitionOptions } value - pageTransition options
     * @returns { PageTransitionEnter }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_invoke(value: PageTransitionOptions): PageTransitionEnter;
    /**
     * Called frame by frame to customize pageTransition animation when the page enters.
     * The incoming parameter is the normalized progress of the current incoming animation.
     *
     * @param { PageTransitionCallback } event - animation callback frame by frame
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onEnter(event: PageTransitionCallback): this;
}
/**
 * Provide an interface to set transition style when a page exits.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PageTransitionExit extends CommonTransition {
    /**
     * Called when page Jump animation is used.
     *
     * @param { PageTransitionOptions } value - pageTransition options
     * @returns { PageTransitionExit }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_invoke(value: PageTransitionOptions): PageTransitionExit;
    /**
     * Called frame by frame to customize pageTransition animation when the page exits.
     * The input parameter is the normalized progress of the current exit animation.
     *
     * @param { PageTransitionCallback } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onExit(event: PageTransitionCallback): this;
}
