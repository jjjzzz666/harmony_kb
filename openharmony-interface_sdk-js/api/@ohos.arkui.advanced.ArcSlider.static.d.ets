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

import { ComponentV2, Builder, TouchEvent, CrownSensitivity } from '@ohos.arkui.component';
import { ObservedV2, Trace, Param } from '@ohos.arkui.stateManagement';

/**
 * Construct parameter types for ArcSliderValueOptions.
 *
 * @typedef ArcSliderValueOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderValueOptionsConstructorOptions {
  /**
   * Set current progress value. The default value is consistent with the value of the parameter min.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  progress?: double;

  /**
   * Set the minimum progress value.
   *
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  min?: double;

  /**
   * Set the maximum progress value.
   *
   * @type { ?double }
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  max?: double;
}

/**
 * The options for ArcSlider progress value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderValueOptions {
  /**
   * Set current progress value. The default value is consistent with the value of the parameter min.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  progress?: double;

  /**
   * Set the minimum progress value.
   *
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  min?: double;

  /**
   * Set the maximum progress value.
   *
   * @type { ?double }
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  max?: double;

  /**
   * The constructor used to create a ArcSliderValueOptions object.
   *
   * @param { ArcSliderValueOptionsConstructorOptions } [options]
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * Construct parameter types for ArcSliderLayoutOptions.
 *
 * @typedef ArcSliderLayoutOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * Set whether the component's arc direction is counterclockwise.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  reverse?: boolean;

  /**
   * Set the component's position on the screen.
   *
   * @type { ?ArcSliderPosition }
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  position?: ArcSliderPosition;
}

/**
 * The options for ArcSlider layout.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderLayoutOptions {
  /**
   * Set whether the component's arc direction is counterclockwise.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  reverse?: boolean;

  /**
   * The constructor used to create a ArcSliderLayoutOptions object.
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } [options]
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderLayoutOptionsConstructorOptions);

  /**
   * Set the component's position on the screen.
   *
   * @type { ?ArcSliderPosition }
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  position?: ArcSliderPosition;
}

/**
 * Construct parameter types for ArcSliderStyleOptions.
 *
 * @typedef ArcSliderStyleOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderStyleOptionsConstructorOptions {
  /**
   * Set the track thickness of the component under normal status, unit is vp.
   *
   * Value range: [5, 16]
   * 
   * @type { ?double }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackThickness?: double;

  /**
   * Set the track thickness of the component under active status, unit is vp.
   *
   * Value range: [24, 36]
   * 
   * @type { ?double }
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  activeTrackThickness?: double;

  /**
   * Set the track color of the component.
   *
   * @type { ?string }
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackColor?: string;

  /**
   * Set the selected color of the component.
   *
   * @type { ?string }
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  selectedColor?: string;

  /**
   * Set the track blur of the component, unit is vp.
   *
   * @type { ?double }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackBlur?: double;
}

/**
 * The options for ArcSlider style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderStyleOptions {
  /**
   * Set the track thickness of the component under normal status, unit is vp.
   *
   * Value range: [5, 16]
   * 
   * @type { ?double }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackThickness?: double;

  /**
   * Set the track thickness of the component under active status, unit is vp.
   *
   * Value range: [24, 36]
   * 
   * @type { ?double }
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  activeTrackThickness?: double;

  /**
   * Set the track color of the component.
   *
   * @type { ?string }
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackColor?: string;

  /**
   * Set the selected color of the component.
   *
   * @type { ?string }
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  selectedColor?: string;

  /**
   * Set the track blur of the component, unit is vp.
   *
   * @type { ?double }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackBlur?: double;

  /**
   * The constructor used to create a ArcSliderStyleOptions object.
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } [options]
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * Handler of ArcSlider, used in onTouch.
 *
 * @typedef { function } ArcSliderTouchHandler
 * @param { TouchEvent } event - the TouchEvent when ArcSlider is touched.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * Handler of ArcSlider, used in OnChange.
 *
 * @typedef { function } ArcSliderChangeHandler
 * @param { double } progress - the progress value of the ArcSlider.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare type ArcSliderChangeHandler = (progress: double) => void;

/**
 * Handler of ArcSlider, used in OnEnlarge.
 *
 * @typedef { function } ArcSliderEnlargeHandler
 * @param { boolean } isEnlarged - the enlarged type of the ArcSlider. True means enlarge, false means shrink.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 23 static
 */
export declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void;

/**
 * Construct parameter types for ArcSliderOptions.
 *
 * @typedef ArcSliderOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderOptionsConstructorOptions {
  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderValueOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  valueOptions?: ArcSliderValueOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderLayoutOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @type { ?CrownSensitivity }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Touching triggers the callback.
   *
   * @type { ?ArcSliderTouchHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onTouch?: ArcSliderTouchHandler;

  /**
   * Value changing triggers the callback.
   *
   * @type { ?ArcSliderChangeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onChange?: ArcSliderChangeHandler;

  /**
   * Enlarged type changging triggers the callback.
   *
   * @type { ?ArcSliderEnlargeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onEnlarge?: ArcSliderEnlargeHandler;
}

/**
 * The options for ArcSlider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderOptions {
  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderValueOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  valueOptions?: ArcSliderValueOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderLayoutOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @type { ?CrownSensitivity }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Touching triggers the callback.
   *
   * @type { ?ArcSliderTouchHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onTouch?: ArcSliderTouchHandler;

  /**
   * Value changing triggers the callback.
   *
   * @type { ?ArcSliderChangeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onChange?: ArcSliderChangeHandler;

  /**
   * Enlarged type changging triggers the callback.
   *
   * @type { ?ArcSliderEnlargeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onEnlarge?: ArcSliderEnlargeHandler;

  /**
   * The constructor used to create a ArcSliderOptions object.
   *
   * @param { ArcSliderOptionsConstructorOptions } [options]
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderOptionsConstructorOptions);
}

/**
 * Defines ArcSlider Component.
 *
 * @struct { ArcSlider }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct ArcSlider {
  /**
   * The options of a ArcSlider component.
   *
   * @type { ArcSliderOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Param
  options: ArcSliderOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle 
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
 * Enum for ArcSliderPosition
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare enum ArcSliderPosition {
  /**
   * The position is on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  LEFT = 0,
  /**
   * The position is on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  RIGHT = 1
}
