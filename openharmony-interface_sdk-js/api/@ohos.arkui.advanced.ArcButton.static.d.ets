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
 * @file Defines the arc button component
 * @kit ArkUI
 */

import { LengthMetrics, ColorMetrics } from '@ohos.arkui.node';
import { ResourceStr, BlurStyle, FontStyle, Resource, LocalizedMargin, TouchEvent,
  ClickEvent, ComponentV2, Builder, ResourceColor } from '@ohos.arkui.component';
import { Callback } from '@ohos.base';
import { Require, Param, ObservedV2, Trace } from '@ohos.arkui.stateManagement';

/**
 * Describes the Position of arc button.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonPosition {
  /**
   * The top edge button is located above the circular screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  TOP_EDGE = 0,
  /**
   * The bottom edge button is located below the circular screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  BOTTOM_EDGE = 1
}

/**
 * Provides an arc button style.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonStyleMode {
  /**
   * Emphasis status, light style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  EMPHASIZED_LIGHT = 0,
  /**
   * Emphasis status, dark style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  EMPHASIZED_DARK = 1,
  /**
   * Normal status, light style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL_LIGHT = 2,
  /**
   * Normal status, dark style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL_DARK = 3,

  /**
   * Custom status, custom style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  CUSTOM = 4
}

/**
 * Defines an arc button status.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonStatus {
  /**
   * Normal state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL = 0,
  /**
   * Pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  PRESSED = 1,
  /**
   * Disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  DISABLED = 2
}

/**
 * The class used for configuring ArcButton to support progress bar display.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 23 static
 */
@ObservedV2
export declare class ArcButtonProgressConfig {
  /**
   * Sets the value of Progress.
   *
   * Range value: [0, total].
   * 
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public value: double;
  /**
   * Sets the total of Progress.
   *
   * Range value: [0, 2147483647].
   * 
   * @type { ?double }
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public total?: double;
  /**
   * Sets the foreground color of Progress.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ResourceColor;
 
  /**
   * Constructor of the ArcButtonProgressConfig.
   *
   * @param { double } value - sets the value of progress.
   *     <br>Value range:[0, total]
   *     <br>When setting a value less than 0, it is set to 0; when setting a value greater than total, it is set to total.
   * @param { double } [total] - sets the total of progress.
   * @param { ResourceColor } [color] - sets the foreground color of progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: double, total?: double, color?: ResourceColor);
}

/**
 * Defines the arc button options.
 *
 * @interface CommonArcButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare interface CommonArcButtonOptions {
  /**
   * Describes the arc button position.
   *
   * @type { ? ArcButtonPosition}
   * @default ArcButtonPosition.BOTTOM_EDGE
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  position?: ArcButtonPosition;
  /**
   * Describes the arc button style mode.
   *
   * @type { ?ArcButtonStyleMode }
   * @default ArcButtonStyleMode.EMPHASIZED_LIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  styleMode?: ArcButtonStyleMode;
  /**
   * Describes the arc button status.
   *
   * @type { ?ArcButtonStatus }
   * @default ArcButtonStatus.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  status?: ArcButtonStatus;
  /**
   * Describes the arc button displays text.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  label?: ResourceStr;
  /**
   * Describe the blurred background style of the arc-shaped button.
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * Describes the arc button background color.
   *
   * @type { ?ColorMetrics }
   * @default Color.Black
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  backgroundColor?: ColorMetrics;
  /**
   * Describes the arc button shadow color.
   *
   * @type { ?ColorMetrics }
   * @default Color.Black
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  shadowColor?: ColorMetrics;
  /**
   * Describes the arc button shadow switch.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  shadowEnabled?: boolean;
  /**
   * Describes the arc button text size.
   *
   * @type { ?LengthMetrics }
   * @default 19.0_fp
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontSize?: LengthMetrics;
  /**
   * Describes the arc button text color.
   *
   * @type { ?ColorMetrics }
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontColor?: ColorMetrics;
  /**
   * Describes the arc button pressed text color.
   *
   * @type { ?ColorMetrics }
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  pressedFontColor?: ColorMetrics;
  /**
   * Describes the arc button text style.
   *
   * @type { ?FontStyle }
   * @default FontStyle.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontStyle?: FontStyle;
  /**
   * Describes the arc button text family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontFamily?: string | Resource;
  /**
   * Describes the arc button text margin.
   *
   * @type { ?LocalizedMargin }
   * @default { start: 24.0_vp, top: 10.0_vp, end: 24.0_vp, bottom: 16.0_vp }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontMargin?: LocalizedMargin;
  
  /**
   * Sets the ArcButton progress bar parameters.
   * When not set, the button style is used.
   * When set, the progress style is used.
   * 
   * @type { ?ArcButtonProgressConfig }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  progressConfig?: ArcButtonProgressConfig;
  
  /**
   * Describes the arc button touch event.
   *
   * @type { ?Callback<TouchEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onTouch?: Callback<TouchEvent>;

  /**
   * Describes the arc button click event.
   *
   * @type { ?Callback<ClickEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onClick?: Callback<ClickEvent>;
}
/**
 * The class for ArcButtonOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
@ObservedV2
export declare class ArcButtonOptions {
  /**
   * Describes the position of button on screen.
   *
   * @type { ArcButtonPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public position: ArcButtonPosition;
  /**
   * Describes the controller for scrollable container.
   *
   * @type { ArcButtonStyleMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public styleMode: ArcButtonStyleMode;
  /**
   * Describes the arc button status.
   *
   * @type { ArcButtonStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public status: ArcButtonStatus;
  /**
   * Describes the arc button displays text.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public label: ResourceStr;
  /**
   * Describe the blurred background style of the arc-shaped button.
   *
   * @type { BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public backgroundBlurStyle: BlurStyle;
  /**
   * Describes the arc button background color.
   *
   * @type { ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public backgroundColor: ColorMetrics;
  /**
   * Describes the arc button shadow color.
   *
   * @type { ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public shadowColor: ColorMetrics;
  /**
   * Describes the arc button shadow switch.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public shadowEnabled: boolean;
  /**
   * Describes the arc button text size.
   *
   * @type { LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontSize: LengthMetrics;
  /**
   * Describes the arc button text color.
   *
   * @type { ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontColor: ColorMetrics;
  /**
   * Describes the arc button pressed text color.
   *
   * @type { ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public pressedFontColor: ColorMetrics;
  /**
   * Describes the arc button text style.
   *
   * @type { FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontStyle: FontStyle;
  /**
   * Describes the arc button text family.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontFamily: string | Resource;
  /**
   * Describes the arc button text margin.
   *
   * @type { LocalizedMargin }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontMargin: LocalizedMargin;

  /**
   * Sets the ArcButton progress bar parameters.
   * When not set, the button style is used.
   * When set, the progress style is used.
   * 
   * @type { ?ArcButtonProgressConfig }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public progressConfig?: ArcButtonProgressConfig;

  /**
   * Describes the arc button touch event.
   *
   * @type { ?Callback<TouchEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public onTouch?: Callback<TouchEvent>;

  /**
   * Describes the arc button click event.
   *
   * @type { ?Callback<ClickEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public onClick?: Callback<ClickEvent>;

  /**
   * Constructor of the CommonArcButtonOptions.
   *
   * @param { CommonArcButtonOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options: CommonArcButtonOptions);
}
/**
 * Declare Component ArcButton
 *
 * @struct { ArcButton }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
@ComponentV2
export declare struct ArcButton {
  /**
   * Describes the arc button options.
   *
   * @type { ArcButtonOptions }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Require
  @Param
  readonly options: ArcButtonOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
