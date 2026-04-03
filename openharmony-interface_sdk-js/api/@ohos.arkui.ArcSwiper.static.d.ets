'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { SwiperAnimationEvent } from '@ohos.arkui.component';
import { CrownSensitivity, EdgeEffect } from '@ohos.arkui.component';
import { LinearGradient } from '@ohos.arkui.component';
import { ResourceColor } from '@ohos.arkui.component';
import { CommonMethod, Callback } from '@ohos.arkui.component';
import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';
/**
 * Handler of swiper controller, used in finishAnimation.
 *
 * @typedef { function } FinishAnimationHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export type FinishAnimationHandler = () => void;

/**
 * Provide methods for controlling ArcSwiper component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare class ArcSwiperController {
  /**
   * A constructor used to create a ArcSwiperController object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  constructor();

  /**
   * Show next subcomponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  showNext(): void;

  /**
   * Show previous subcomponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  showPrevious(): void;

  /**
   * Finish the swiper animation.
   *
   * @param { FinishAnimationHandler } [handler] - The handler is used to listen for the end of the animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  finishAnimation(handler?: FinishAnimationHandler): void;
}

/**
 * Declare the direction of arc indicator.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare enum ArcDirection {
  /**
   * 3 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  THREE_CLOCK_DIRECTION = 0,

  /**
   * 6 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  SIX_CLOCK_DIRECTION = 1,

  /**
   * 9 o'clock direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  NINE_CLOCK_DIRECTION = 2,
}

/**
 * Define ArcDotIndicator, the indicator type is arc dot.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare class ArcDotIndicator {
  /**
   * A constructor used to create a ArcDotIndicator object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  constructor();

  /**
   * Set the direction of arc indicator.
   *
   * @param { ArcDirection | undefined } direction - the direction of arc indicator,
   *     default value is { ArcDirection.SIX_CLOCK_DIRECTION },
   *     undefined means setting to default value.
   * @returns { ArcDotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  arcDirection(direction: ArcDirection | undefined): ArcDotIndicator;

  /**
   * Set the navigation point color.
   *
   * @param { ResourceColor | undefined } color - the indicator item color,
   *     default value is { #A9FFFFFF }, undefined means setting to default value.
   * @returns { ArcDotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  itemColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * Set the selected navigation point color.
   *
   * @param { ResourceColor | undefined } color - the indicator item when selected,
   *     default value is { #FF5EA1FF }, undefined means setting to default value.
   * @returns { ArcDotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selectedItemColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * Set the background color.
   *
   * @param { ResourceColor | undefined } color - the background color, default value is { #FF404040 },
   *     undefined means setting to default value.
   * @returns { ArcDotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  backgroundColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * Set the gradient color for the mask.
   *
   * @param { LinearGradient | undefined } color - the gradient color, default start color is { #00000000 },
   *     default end color is { #FF000000 }, undefined means setting to default value.
   * @returns { ArcDotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  maskColor(color: LinearGradient | undefined): ArcDotIndicator;
}

/**
 * Handler of swiper, used in OnChange.
 *
 * @typedef { function } IndexChangedHandler
 * @param { int } index - The index of the current swiper.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export type IndexChangedHandler = (index: int) => void;

/**
 * Handler of swiper, used in OnAnimationStart.
 *
 * @typedef { function } AnimationStartHandler
 * @param { int } index - The index of the current swiper.
 * @param { int } targetIndex - The index of the target swiper.
 * @param { SwiperAnimationEvent } event - The extra information of the animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export type AnimationStartHandler = (index: int, targetIndex: int, event: SwiperAnimationEvent) => void;

/**
 * Handler of swiper, used in OnAnimationEnd.
 *
 * @typedef { function } AnimationEndHandler
 * @param { int } index - The index of the current swiper.
 * @param { SwiperAnimationEvent } event - The extra information of the animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export type AnimationEndHandler = (index: int, event: SwiperAnimationEvent) => void;

/**
 * Handler of swiper, used in OnGestureSwipe.
 *
 * @typedef { function } GestureSwipeHandler
 * @param { int } index - The index of the current swiper.
 * @param { SwiperAnimationEvent } event - The extra information of the animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export type GestureSwipeHandler = (index: int, event: SwiperAnimationEvent) => void;


/**
 * Defines the swiper content animated transition options.
 *
 * @interface ArcSwiperContentAnimatedTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare interface ArcSwiperContentAnimatedTransition {
  /**
   * Defines the timeout of custom content transition animation after the page is moved out of the swiper.
   * The unit is ms.
   * If ArcSwiperContentTransitionProxy.finishTransition() is not invoked, use the timeout as animation end time.
   *
   * @type { ?int }
   * @default 0ms
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  timeout?: int;

  /**
   * Called when custom content transition animation start.
   *
   * @type { Callback<ArcSwiperContentTransitionProxy> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  transition: Callback<ArcSwiperContentTransitionProxy>;
}

/**
 * The proxy object returned to the developer during the execution of the Swiper custom content transition animation.
 *
 * @interface ArcSwiperContentTransitionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare interface ArcSwiperContentTransitionProxy {
  /**
   * the index value of the swiper content selected before animation start.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  selectedIndex: int;

  /**
   * The index value of the swiper content.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  index: int;

  /**
   * the moving ratio of the swiper content from the start position of the swiper main axis.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  position: double;

  /**
   * the swiper main axis length for calculating position.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  mainAxisLength: double;

  /**
   * Notifies Swiper page the custom content transition animation is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  finishTransition(): void;
}

/**
 * Defines the Arc swiper attribute functions.
 *
 * @extends CommonMethod
 * @typedef ArcSwiperAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 */
export declare interface ArcSwiperAttribute extends CommonMethod {
  /**
   * Set the index value of the displayed subcomponent.
   *
   * @param { int | undefined } index - The index value of the subcomponents to be displayed,
   *     default value is { 0 }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default index(index: int | undefined): this;

  /**
   * Set whether the indicator is available or set the indicator style.
   *
   * @param { ArcDotIndicator | boolean | undefined } style - The style information of the indicator or whether to
   *     display the indicator, default value is { true }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default indicator(style: ArcDotIndicator | boolean | undefined): this;

  /**
   * Set the animation duration of the switch in ms.
   *
   * @param { int | undefined } duration - Duration of animation, default value is { 400ms },
   *     undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default duration(duration: int | undefined): this;

  /**
   * Set whether to slide vertically.
   *
   * @param { boolean | undefined } isVertical - The value indicates whether to slide vertically,
   *     default value is { false }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default vertical(isVertical: boolean | undefined): this;

  /**
   * Set whether to disable sliding function.
   *
   * @param { boolean | undefined } disabled - The value indicates whether the sliding function is enabled,
   *     default value is { false }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default disableSwipe(disabled: boolean | undefined): this;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @param { CrownSensitivity | undefined } sensitivity - The sensitivity of rotating crown,
   *     default value is { MEDIUM }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;

  /**
   * Called when the index value has changed.
   *
   * @param { IndexChangedHandler | undefined } handler - The handler is used to listen for index
   *     values that have changed, undefined means clear handler.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default onChange(handler: IndexChangedHandler | undefined): this;

  /**
   * Called when the swiper animation has started.
   *
   * @param { AnimationStartHandler | undefined } handler - The handler is used to listen for
   *     the animation has started, undefined means clear handler.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default onAnimationStart(handler: AnimationStartHandler | undefined): this;

  /**
   * Called when the swiper animation has ended.
   *
   * @param { AnimationEndHandler | undefined } handler - The handler is used to listen for the animation has ended,
   *     undefined means clear handler.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default onAnimationEnd(handler: AnimationEndHandler | undefined): this;

  /**
   * Called when swiping the switch using gestures.
   *
   * @param { GestureSwipeHandler | undefined } handler - The handler is used to listen for swiping through gestures,
   *     undefined means clear handler.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default onGestureSwipe(handler: GestureSwipeHandler | undefined): this;

  /**
   * Set effect when scrolling over edge.
   *
   * @param { EdgeEffect | undefined } edgeEffect - scrolling effect over edge,
   *     default value is { EdgeEffect.Spring }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default effectMode(edgeEffect: EdgeEffect | undefined): this;

  /**
   * Custom swiper content transition animation.
   *
   * @param { ArcSwiperContentAnimatedTransition | undefined } transition - custom content transition animation,
   *     undefined means clear transition.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default customContentTransition(transition: ArcSwiperContentAnimatedTransition | undefined): this;

  /**
   * Custom swiper content transition animation.
   *
   * @param { boolean | undefined } disabled - the value indicates whether to disable the transition animation,
   *     default value is { false }, undefined means setting to default value.
   * @returns { ArcSwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 24 static
   */
  default disableTransitionAnimation(disabled: boolean | undefined): this;
}

/**
 * Defines ArcSwiper Component
 *
 * @param { ArcSwiperController } [controller] - ArcSwiper constructor options
 * @param { CustomBuilder } [content_] - container
 * @returns { ArcSwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcSwiper(
    controller?: ArcSwiperController, 
    content_?: CustomBuilder
): ArcSwiperAttribute