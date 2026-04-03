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

import { CommonMethod, Callback } from './common';
import { DotIndicator, DigitIndicator } from './swiper';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class IndicatorComponentController {
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
   * Controlling IndicatorComponent to change to the specified subcomponent.
   *
   * @param { int | undefined } index - The index of item to be redirected, default value is 0.
   *      undefined means set to default value.
   * @param { boolean } [useAnimation] - If true, swipe to index item with animation. If false, swipe to index item without animation.
   *      The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  changeIndex(index: int | undefined, useAnimation?: boolean): void;
}

/**
 * Defines the IndicatorComponent attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface IndicatorComponentAttribute extends CommonMethod {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   *
   * @param { int | undefined } index
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  initialIndex(index: int | undefined): this;

  /**
   * Sets the total number of indicator.
   *
   * @param { int | undefined } totalCount
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  count(totalCount: int | undefined): this;

  /**
   * Sets the indicator style.
   *
   * @param { DotIndicator | DigitIndicator | undefined } indicatorStyle - the style value
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  style(indicatorStyle: DotIndicator | DigitIndicator | undefined): this;

  /**
   * Called when setting whether to turn on cyclic sliding.
   *
   * @param { boolean | undefined } isLoop
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  loop(isLoop: boolean | undefined): this;

  /**
   * Called when setting whether to slide vertically.
   *
   * @param { boolean | undefined } isVertical
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  vertical(isVertical: boolean | undefined): this;

  /**
   * Called when the index value changes.
   *
   * @param { Callback<int> | undefined } event
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onChange(event: Callback<int> | undefined): this;
}

/**
 * Defines IndicatorComponent Component
 *
 * @param { IndicatorComponentController } [controller] - IndicatorComponent constructor options
 * @returns { IndicatorComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function IndicatorComponent(
  controller?: IndicatorComponentController
): IndicatorComponentAttribute
