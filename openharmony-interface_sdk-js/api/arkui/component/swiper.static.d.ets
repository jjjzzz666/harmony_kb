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

import { IndicatorComponentController } from './indicatorcomponent';
import { CommonMethod, Callback, ICurve, Bindable, AttributeModifier } from './common';
import { EdgeEffect, Curve, PageFlipMode } from './enums';
import { Length, LengthMetrics, VoidCallback, ResourceColor, VP, Font, ItemFillPolicy } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { ScrollState } from "./list";

/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SwiperController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showNext(): void;

  /**
   * Called when the previous subcomponent is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showPrevious(): void;

  /**
   * Controlling Swiper to change to the specified subcomponent.
   *
   * @param { int | undefined } index - the index of item to be redirected, default value is 0,
   *     undefined means setting to default value.
   * @param { SwiperAnimationMode | boolean } [animationMode] - animation mode for changeIndex,
   *     true is equivalent to SwiperAnimationMode.DEFAULT_ANIMATION,
   *     false is equivalent to SwiperAnimationMode.NO_ANIMATION.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  changeIndex(index: int | undefined, animationMode?: SwiperAnimationMode | boolean): void;

  /**
   * Called when need to stop the swiper animation.
   *
   * @param { ?VoidCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  finishAnimation(callback?: VoidCallback): void;

  /**
   * Called when need to preload specified child.
   *
   * @param { Array<int> | undefined } indices - Indices of swiper child to be preloaded,
   *     default value is no swiper child to be preloaded, undefined means setting to default value.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   * <br> 1. The parameter type is not Array<int>.
   * <br> 2. The parameter is an empty array.
   * <br> 3. The parameter contains an invalid index.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  preloadItems(indices: Array<int> | undefined): Promise<void>;

  /**
   * Start a fake drag.
   * Call 'fakeDragBy' to simulate the drag motion. Call 'stopFakeDrag' to complete the fake drag.
   * A fake drag can be interrupted by a real drag. If you need to ignore touch events and other
   *     user input during a fake drag, use 'disableSwipe(true)'.
   *
   * @returns { boolean } If the fake drag started successfully, return true.
   *     If the Swiper is not ready to start the fake drag, or a real or fake drag is already in progress, return false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startFakeDrag(): boolean;

  /**
   * Fake drag by an offset.
   * The 'startFakeDrag' must be called first.
   *
   * @param { float } offset - Indicate the offset that needs to be scrolled. The unit is vp.
   * @returns { boolean } If not in a fake drag progress, or no offset is consumed, return false.
   *     If any offset is consumed, return true.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fakeDragBy(offset: float): boolean;

  /**
   * Stop a fake drag.
   *
   * @returns { boolean } If the fake drag stopped successfully, return true.
   *     If the Swiper is not ready to stop a fake drag, or no fake drag is in progress, return false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopFakeDrag(): boolean;

  /**
   * Get the fake drag state.
   *
   * @returns { boolean } If a fake drag is in progress return true, otherwise return false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isFakeDragging(): boolean;
}

/**
 * Defines the indicator class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Indicator {
  /**
   * Set the indicator to the left.
   *
   * @param { Length | undefined } value - the indicator to the left, default value is adaptive size layout,
   *     centered alignment in the spindle direction according to the size of the indicator itself and
   *     the size of the swiper, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left(value: Length | undefined): this;

  /**
   * Set the indicator to the top.
   *
   * @param { Length | undefined } value - the indicator to the top, default value is adaptive size layout,
   *     centered alignment in the spindle direction according to the size of the indicator itself and
   *     the size of the swiper, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top(value: Length | undefined): this;

  /**
   * Set the indicator to the right.
   *
   * @param { Length | undefined } value - the indicator to the right, default value is adaptive size layout,
   *     centered alignment in the spindle direction according to the size of the indicator itself and
   *     the size of the swiper, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right(value: Length | undefined): this;

  /**
   * Set the indicator to the bottom.
   *
   * @param { Length | undefined } value - the indicator to the bottom, default value is adaptive size layout,
   *     centered alignment in the spindle direction according to the size of the indicator itself and
   *     the size of the swiper, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom(value: Length | undefined): this;

  /**
   * Sets the position of the navigation indicator relative to the bottom edge of the Swiper component.
   * You can also choose to ignore the size of the navigation indicator using the ignoreSize property.
   *
   * @param { LengthMetrics | Length | undefined } bottom - the offset of indicator to the bottom,
   *     default value is adaptive size layout, centered alignment in the spindle direction according
   *     to the size of the indicator itself and the size of the swiper, undefined means setting to default value.
   * @param { boolean } ignoreSize - ignore the size of the indicator.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom(bottom: LengthMetrics | Length | undefined, ignoreSize: boolean): this;

  /**
   * Set the indicator to the left in LTR
   * Set the indicator to the right in RTL
   *
   * @param { LengthMetrics | undefined } value - the indicator to the right in LTR, indicator to the left in RTL,
   *     default value is 0.0_vp, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start(value: LengthMetrics | undefined): this;

  /**
   * Set the indicator to the left in RTL
   * Set the indicator to the right in LTR
   *
   * @param { LengthMetrics | undefined } value - the indicator to the left in RTL, Set the indicator
   *     to the right in LTR, default value is 0.0_vp, undefined means setting to default value.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  end(value: LengthMetrics | undefined): this;

  /**
   * DotIndicator class object.
   *
   * @returns { DotIndicator }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static dot(): DotIndicator;

  /**
   * DigitIndicator class object.
   *
   * @returns { DigitIndicator }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static digit(): DigitIndicator;
}

/**
 * Define DotIndicator, the indicator type is dot.
 *
 * @extends Indicator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DotIndicator extends Indicator {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();

  /**
   * Set the indicator item width.
   *
   * @param { Length | undefined } value - the indicator item width, default value is 6.0_vp,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  itemWidth(value: Length | undefined): this;

  /**
   * Set the indicator item height.
   *
   * @param { Length | undefined } value - the indicator item height, default value is 6.0_vp,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  itemHeight(value: Length | undefined): this;

  /**
   * Set the indicator item width when selected.
   *
   * @param { Length | undefined } value - the indicator item width when selected, default value is 6.0_vp,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedItemWidth(value: Length | undefined): this;

  /**
   * Set the indicator item height when selected.
   *
   * @param { Length | undefined } value - the indicator item height when selected, default value is 6.0_vp,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedItemHeight(value: Length | undefined): this;

  /**
   * Setting indicator style mask.
   *
   * @param { boolean | undefined } value - the indicator item mask, default value is false,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  mask(value: boolean | undefined): this;

  /**
   * Set the indicator color.
   *
   * @param { ResourceColor | undefined } value - the indicator item color, default value is { #18243119 },
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color(value: ResourceColor | undefined): this;

  /**
   * Set the navigation point color.
   *
   * @param { ResourceColor | undefined } value - the indicator item when selected, default value is { #007DFFFF },
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedColor(value: ResourceColor | undefined): this;

  /**
   * Set the Indicator maxDisplayCount when selected.
   *
   * @param { int | undefined } maxDisplayCount - the indicator item maxDisplayCount when selected,
   *     default value is 6, undefined means setting to default value.
   * @returns { DotIndicator } return the DotIndicator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maxDisplayCount(maxDisplayCount: int | undefined): this;

  /**
   * Set the space between dots.
   *
   * @param { LengthMetrics | undefined } space - the space between dots, default value is 8.0_vp,
   *     undefined means setting to default value.
   * @returns { DotIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  space(space: LengthMetrics | undefined): this;
}

/**
 * Set Swiper column count adaptation.
 *
 * @typedef SwiperAutoFill
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperAutoFill {
  /**
   * Set minSize size.
   *
   * @type { VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  minSize: VP;
}

/**
 * Define DigitIndicator, the indicator type is digit.
 *
 * @extends Indicator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DigitIndicator extends Indicator {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();

  /**
   * Set font color of the digital indicator.
   *
   * @param { ResourceColor | undefined } value - the indicator font color, default value is { #FF182431 },
   *     undefined means setting to default value.
   * @returns { DigitIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fontColor(value: ResourceColor | undefined): this;

  /**
   * Set font color of the digital indicator when selected.
   *
   * @param { ResourceColor | undefined } value - the indicator font color when selected,
   *     default value is { #FF182431 }, undefined means setting to default value.
   * @returns { DigitIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedFontColor(value: ResourceColor | undefined): this;

  /**
   * Set the digital indicator font (just support font size and weight).
   *
   * @param { Font | undefined } value - the indicator font size and weight,
   *     default value is { size: 14, weight: FontWeight.Normal }, undefined means setting to default value.
   * @returns { DigitIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  digitFont(value: Font | undefined): this;

  /**
   * Set the digital indicator font (just support font size and weight).
   *
   * @param { Font | undefined } value - the indicator font size and weight when selected,
   *     default value is { size: 14, weight: FontWeight.Normal }, undefined means setting to default value.
   * @returns { DigitIndicator }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedDigitFont(value: Font | undefined): this;
}

/**
 * Arrow object.
 *
 * @interface ArrowStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ArrowStyle {
  /**
   * Is show the arrow background or not.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showBackground?: boolean;

  /**
   * When the indicator show, set the arrow position is side of the indicator or in the middle of content area.
   * The arrow is displayed on side of the indicator, if the value is false.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isSidebarMiddle?: boolean;

  /**
   * The arrow background size.
   * The size of the arrow is three-quarters of the background size, when the background is displayed.
   *
   * @type { ?Length }
   * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundSize?: Length;

  /**
   * The arrow background background color.
   *
   * @type { ?ResourceColor }
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise, the default value is #19182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * The arrow size.
   * The arrow size can be set, when the background is not displayed.
   * The size of the arrow is three-quarters of the background size, when the background is displayed.
   *
   * @type { ?Length }
   * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  arrowSize?: Length;

  /**
   * The arrow color.
   *
   * @type { ?ResourceColor }
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  arrowColor?: ResourceColor;
}

/**
 * Declare the size of the swiper on the spindle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  STRETCH
}

/**
 * Provides an interface for swiper animation.
 *
 * @interface SwiperAnimationEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperAnimationEvent {
  /**
   * Offset of the current page to the start position of the swiper main axis. The unit is vp.
   *
   * @type { double }
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  currentOffset: double;

  /**
   * Offset of the target page to the start position of the swiper main axis. The unit is vp.
   *
   * @type { double }
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  targetOffset: double;

  /**
   * Start speed of the page-turning animation. The unit is vp/s.
   *
   * @type { double }
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  velocity: double;
}

/**
 * Define autoPlay related options.
 *
 * @interface AutoPlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface AutoPlayOptions {
  /**
   * Set whether to stop autoplay immediately on touch down event.
   *
   * @type { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stopWhenTouched: boolean;
}

/**
 * Defines the properties for controlling the cached count behavior.
 *
 * @interface CachedCountOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface CachedCountOptions {
  /**
   * Whether the cached nodes within the range rendered without being added to the render tree.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  isShown?: boolean;
  /**
   * Whether cachedCount is independent of group calculation.
   *
   * <p><strong>NOTE</strong>:
   * <br>When set to true, cachedCount is calculated by actual child component count,
   * independent of displayCount group calculation.
   * <br>When swipeByGroup is enabled and this is false, cachedCount is calculated by group.
   * </p>
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  independent?: boolean;
}

/**
 * Swiper nested scroll nested mode

 * @enum { number } SwiperNestedScrollMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwiperNestedScrollMode {
  /**
   * Only Self response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SELF_ONLY = 0,

  /**
   * Self priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SELF_FIRST = 1
}

/**
 * Declare the animation mode of SwiperController's changeIndex method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwiperAnimationMode {
  /**
   * Jump to target index without animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NO_ANIMATION = 0,

  /**
   * Scroll to target index with animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DEFAULT_ANIMATION = 1,

  /**
   * Jump to some index near the target index without animation,
   * then scroll to target index with animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FAST_ANIMATION = 2
}

/**
 * Defines a swiper callback when onAnimationStart.
 *
 * @typedef { function } OnSwiperAnimationStartCallback
 * @param { int } index - The index value of the swiper page that when animation start.
 * @param { int } targetIndex - The target index value of the swiper page that when animation start.
 * @param { SwiperAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnSwiperAnimationStartCallback = (index: int, targetIndex: int,
  extraInfo: SwiperAnimationEvent) => void;

/**
 * Defines a swiper callback when onAnimationEnd.
 *
 * @typedef { function } OnSwiperAnimationEndCallback
 * @param { int } index - The index value of the swiper page that when animation end.
 * @param { SwiperAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnSwiperAnimationEndCallback = (index: int, extraInfo: SwiperAnimationEvent) => void;

/**
 * Defines a swiper callback when onGestureSwipe.
 *
 * @typedef { function } OnSwiperGestureSwipeCallback
 * @param { int } index - The index value of the swiper page before gesture swipe.
 * @param { SwiperAnimationEvent } extraInfo - The extra callback info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnSwiperGestureSwipeCallback = (index: int, extraInfo: SwiperAnimationEvent) => void;

/**
 * Defines the swiper attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperAttribute extends CommonMethod {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   *
   * @param { int | Bindable<int> | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default index(value: int | Bindable<int> | undefined): this;

  /**
   * Sets whether to enable automatic playback for child component switching.
   * 
   * @param { boolean | undefined } value - Whether to enable automatic playback for child component switching,
   *     default value is false, undefined means setting to default value.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default autoPlay(value: boolean | undefined): this;

  /**
   * Set whether the subcomponent plays automatically.
   *
   * @param { boolean | undefined } autoPlay - whether the subcomponent plays automatically
   * @param { AutoPlayOptions | undefined } options - autoPlay related options
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default autoPlay(autoPlay: boolean | undefined, options: AutoPlayOptions | undefined): this;

  /**
   * Called when the time interval for automatic playback is set.
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default interval(value: int | undefined): this;

  /**
   * Use indicator component controller.
   *
   * @param { IndicatorComponentController | DotIndicator | DigitIndicator | boolean | undefined } indicator -
   * the style value or show indicator of the swiper indicator.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default indicator(indicator: IndicatorComponentController | DotIndicator | DigitIndicator | boolean | undefined): this;

  /**
   * Set arrow is enabled, or set the arrow style.
   *
   * @param { ArrowStyle | boolean | undefined } value - arrow is displayed or set the arrow style.
   * @param { boolean | undefined } [isHoverShow] - arrow is display when mouse hover in indicator hotspot.
   * @returns { SwiperAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default displayArrow(value: ArrowStyle | boolean | undefined, isHoverShow?: boolean | undefined): this;

  /**
   * Called when setting whether to turn on cyclic sliding.
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default loop(value: boolean | undefined): this;

  /**
   * Called when the animation duration of the switch is set.
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default duration(value: int | undefined): this;

  /**
   * Called when setting whether to slide vertically.
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default vertical(value: boolean | undefined): this;

  /**
   * Sets the space between child components.
   *
   * @param { double | string | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default itemSpace(value: double | string | undefined): this;

  /**
   * Called when setting the size of the swiper container on the spindle.
   *
   * @param { SwiperDisplayMode | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default displayMode(value: SwiperDisplayMode | undefined): this;

  /**
   * Sets the number of child components to be preloaded(cached).
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default cachedCount(value: int | undefined): this;

  /**
   * Sets the number of child components to be preloaded(cached).
   *
   * @param { int | undefined } count - Number of child components to be preloaded (cached).
   * @param { boolean | undefined } isShown - whether to show the nodes in the cache.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default cachedCount(count: int | undefined, isShown: boolean | undefined): this;

  /**
   * Sets the number of child components to be preloaded(cached).
   *
   * @param { int | undefined } count - Number of child components to be preloaded (cached).
   * @param { CachedCountOptions | undefined } options - Options for controlling cached count behavior.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default cachedCount(count: int | undefined, options: CachedCountOptions | undefined): this;

  /**
   * Sets the number of elements to display per page.
   *
   * If swipeByGroup is set to true:
   * 1、All sub-items are grouped from index 0.
   * 2、The number of sub-items in each group is the value of displayCount.
   * 3、If the number of sub-items in the last group is less than displayCount, placeholder items are added to supplement the number of last group.
   * 4、Placeholder items do not display any content and are only used as placeholders.
   * 5、When turning pages, turn pages by group.
   *
   * @param { int | string | SwiperAutoFill | undefined } value - the number of elements
   * @param { boolean | undefined } [swipeByGroup] - if swipe by group.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  /**
   * Sets the number of elements to display per page.
   *
   * If swipeByGroup is set to true:
   * 1、All sub-items are grouped from index 0.
   * 2、The number of sub-items in each group is the value of displayCount.
   * 3、If the number of sub-items in the last group is less than displayCount, placeholder items are added to supplement the number of last group.
   * 4、Placeholder items do not display any content and are only used as placeholders.
   * 5、When turning pages, turn pages by group.
   *
   * @param { int | string | SwiperAutoFill | ItemFillPolicy | undefined } value - the number of elements to display per page.
   * @param { boolean | undefined } [swipeByGroup] - if swipe by group.
   *    <br>Default value: false
   *    <br>true: the page is turned by group. The number of subelements in each group is the value of displayCount.
   *    <br>false: The default page turning behavior is used. That is, pages are turned based on subelements.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default displayCount(value: int | string | SwiperAutoFill | ItemFillPolicy | undefined, swipeByGroup?: boolean | undefined): this;

  /**
   * Invoked when setting the sliding effect
   *
   * @param { EdgeEffect | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default effectMode(value: EdgeEffect | undefined): this;

  /**
   * Sets whether to disable the swipe feature
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default disableSwipe(value: boolean | undefined): this;

  /**
   * Sets the animation curve
   * Curve is an enumeration type for common curves
   * ICurve is a curve object
   *
   * @param { Curve | string | ICurve | undefined } value
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default curve(value: Curve | string | ICurve | undefined): this;

  /**
   * Called when the index value changes.
   *
   * @param { Callback<int> | undefined } event
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onChange(event: Callback<int> | undefined): this;

  /**
   * Called when a new index becomes selected. Animation is not necessarily complete.
   *
   * @param { Callback<int> | undefined } event - callback to notify which index has been selected
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onSelected(event: Callback<int> | undefined): this;

  /**
   * The previous margin which can be used to expose a small portion of the previous item.
   * When the previous item is empty, do not display blank space.
   *
   * @param { Length | undefined } value - The length of previous margin.
   * @param { boolean | undefined } [ignoreBlank] - Whether to hide(ignore) the previous margin on the first page in non-loop scenarios.
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default prevMargin(value: Length | undefined, ignoreBlank?: boolean | undefined): this;

  /**
   * The next margin which can be used to expose a small portion of the latter item.
   * When the next item is empty, do not display blank space.
   *
   * @param { Length | undefined } value - The length of next margin.
   * @param { boolean | undefined } [ignoreBlank] - Whether to hide(ignore) the next margin on the last page in non-loop scenarios.
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default nextMargin(value: Length | undefined, ignoreBlank?: boolean | undefined): this;

  /**
   * Called when a new index becomes unselected. Animation is not necessarily complete.
   *
   * @param { Callback<int> | undefined } event - callback to notify which index has been unselected
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onUnselected(event: Callback<int> | undefined): this;

  /**
   * Called when the scroll state of the swiper changed.
   *
   * @param { Callback<ScrollState> | undefined } event - callback to notify the change of the scroll state.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onScrollStateChanged(event: Callback<ScrollState> | undefined): this;

  /**
   * Called when the swiper animation start.
   *
   * @param { OnSwiperAnimationStartCallback | undefined } event
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onAnimationStart(event: OnSwiperAnimationStartCallback | undefined): this;

  /**
   * Called when the swiper animation end.
   *
   * @param { OnSwiperAnimationEndCallback | undefined } event
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onAnimationEnd(event: OnSwiperAnimationEndCallback | undefined): this;

  /**
   * Called when the swiper swipe with the gesture.
   *
   * @param { OnSwiperGestureSwipeCallback | undefined } event
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onGestureSwipe(event: OnSwiperGestureSwipeCallback | undefined): this;

  /**
   * Called to setting the nested scroll mode.
   *
   * @param { SwiperNestedScrollMode | undefined } value - mode for nested scrolling.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default nestedScroll(value: SwiperNestedScrollMode | undefined): this;

  /**
   * Custom swiper content transition animation.
   *
   * @param { SwiperContentAnimatedTransition | undefined } transition - custom content transition animation.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default customContentTransition(transition: SwiperContentAnimatedTransition | undefined): this;

  /**
   * Called when the swiper content did scroll.
   *
   * @param { ContentDidScrollCallback | undefined } handler - callback of scroll,
   * selectedIndex is the index value of the swiper content selected before animation start.
   * index is the index value of the swiper content.
   * position is the moving ratio of the swiper content from the start position of the swiper main axis.
   * mainAxisLength is the swiper main axis length for calculating position.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onContentDidScroll(handler: ContentDidScrollCallback | undefined): this;

  /**
   * Setting whether the indicator is interactive.
   *
   * @param { boolean | undefined } value - Whether the indicator is interactive.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default indicatorInteractive(value: boolean | undefined): this;

  /**
   * Setting page flip mode on mouse wheel event.
   *
   * @param { PageFlipMode | undefined } mode - page flip mode on mouse wheel event. The default value is PageFlipMode.CONTINUOUS.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default pageFlipMode(mode: PageFlipMode | undefined): this;

  /**
   * Called when the swiper content will scroll.
   *
   * @param { ContentWillScrollCallback | undefined } handler - callback of will scroll.
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onContentWillScroll(handler: ContentWillScrollCallback | undefined): this;

  /**
   * Set whether to keep the position of the visible content unchanged
   * when data is inserted or deleted above or in front of the display area.
   *
   * @param { boolean | undefined } enabled - maintain visible content position.
   *    Default value is false.
   * @returns { SwiperAttribute } the attribute of swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default maintainVisibleContentPosition(enabled: boolean | undefined): this;

  /**
   * Set the attribute modifier of swiper.
   *
   * @param { AttributeModifier<SwiperAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of swiper.
   * @returns { SwiperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SwiperAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines the swiper content animated transition options.
 *
 * @interface SwiperContentAnimatedTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperContentAnimatedTransition {
  /**
   * Defines the timeout of custom content transition animation after the page is moved out of the swiper. The unit is ms.
   * If SwiperContentTransitionProxy.finishTransition() is not invoked, use the timeout as animation end time.
   *
   * @type { ?int }
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  timeout?: int;

  /**
   * Called when custom content transition animation start.
   *
   * @type { Callback<SwiperContentTransitionProxy> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
 * The proxy of SwiperContentAnimatedTransition.
 *
 * @interface SwiperContentTransitionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperContentTransitionProxy {
  /**
   * the index value of the swiper content selected before animation start.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedIndex: int;

  /**
   * The index value of the swiper content.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  index: int;

  /**
   * the moving ratio of the swiper content from the start position of the swiper main axis.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  position: double;

  /**
   * the swiper main axis length for calculating position.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  mainAxisLength: double;

  /**
   * Notifies Swiper page the custom content transition animation is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  finishTransition(): void;
}

/**
 * The result of swiper ContentWillScrollCallback.
 *
 * @interface SwiperContentWillScrollResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SwiperContentWillScrollResult {
  /**
   * the index value of the current child page.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  currentIndex: int;

  /**
   * the index value of the child page that will display.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  comingIndex: int;

  /**
   * the sliding offset of each frame. Positive numbers indicating slide backward(e.g. from index=1 to index=0),
   * negative numbers indicating slide forward(e.g. from index=0 to index=1).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offset: double;
}

/**
 * The callback of onContentDidScroll.
 *
 * @typedef { function } ContentDidScrollCallback
 * @param { int } selectedIndex - the index value of the swiper content selected before animation start.
 * @param { int } index - the index value of the swiper content.
 * @param { double } position - the moving ratio of the swiper content from the start position of the swiper main axis.
 * @param { double } mainAxisLength - the swiper main axis length for calculating position.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ContentDidScrollCallback = (selectedIndex: int, index: int, position: double,
  mainAxisLength: double) => void;

/**
 * The callback of onContentWillScroll.
 *
 * @typedef { function } ContentWillScrollCallback
 * @param { SwiperContentWillScrollResult } result - the result of swiper ContentWillScrollCallback.
 * @returns { boolean } whether to allow scroll, true indicating can scroll and false indicating can not scroll.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ContentWillScrollCallback = (result: SwiperContentWillScrollResult) => boolean;

/**
 * Defines Swiper Component
 *
 * @param { SwiperController } [controller] - Swiper constructor options
 * @param { CustomBuilder } [content_] - container
 * @returns { SwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Swiper(
  controller?: SwiperController,
  content_?: CustomBuilder
): SwiperAttribute
