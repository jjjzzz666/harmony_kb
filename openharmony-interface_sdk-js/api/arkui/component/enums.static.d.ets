'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import curves from '../../@ohos.curves';
import { AttributeModifier, CommonMethod } from './common';

/**
 * common enum of the checkbox shape
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum CheckBoxShape {
  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CIRCLE = 0,

  /**
   * Rounded Square.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROUNDED_SQUARE = 1
}

/**
 * common enum of color
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Color {
  /**
   * White.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  White = '#FFFFFFFF',

  /**
   * Black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Black = '#FF000000',

  /**
   * Blue.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Blue = '#FF0000FF',

  /**
   * Brown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Brown = '#FFA52A2A',

  /**
   * Gray.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Gray = '#FF808080',

  /**
   * Green.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Green = '#FF008000',

  /**
   * Grey.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Grey = '#FF808080',

  /**
   * Orange.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Orange = '#FFFFA500',

  /**
   * color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Pink = '#FFFFC0CB',

  /**
   * Red.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Red = '#FFFF0000',

  /**
   * Yellow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Yellow = '#FFFFFF00',

  /**
   * Transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Transparent = '#00000000',
}

/**
 * Common enum of color strategy
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ColoringStrategy {
  /**
   * Use the inverse color strategy. Gets the inverse of the background color. Only applies to foregroundColor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  INVERT = 'invert',

  /**
   * Use the average color strategy. Get the average color of the background. Only applies to shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  AVERAGE = 'average',

  /**
   * Use the primary color strategy. Get the color that dominate the background color. Only applies to shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PRIMARY = 'primary'
}

/**
 * Image display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageFit {
  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Fill = 0,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Contain = 1,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Cover = 2,

  /**
   * Adaptive display
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Auto = 3,

  /**
   * Keep the original size and display it in the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 5,

  /**
   * Keep the aspect ratio displayed, and the image zooms out or remains unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ScaleDown = 6,

  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_START = 7,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP = 8,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_END = 9,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  START = 10,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 11,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 12,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_START = 13,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM = 14,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_END = 15,

  /**
   * Matrix of Image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MATRIX = 16
}

/**
 * Border Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum BorderStyle {
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Dotted = 2,

  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Dashed = 1,

  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Solid = 0
}

/**
 * Enum for RenderStrategy.
 * Define Graphics Rendering Strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RenderStrategy {
  /**
   * The current component and its child components will be drawn directly onto the screen canvas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FAST = 0,

  /**
   * The current component and its child components will first be drawn onto an off-screen canvas,
   *     then undergo some graphic rendering operations, and finally be drawn onto the main canvas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  OFFSCREEN = 1
}

/**
 * Line Join Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LineJoinStyle {
  /**
   * Connect path segments using bevels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Miter = 0,

  /**
   * Connect path segments using sharp corners.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Round = 1,

  /**
   * Connect path segments using fillets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bevel = 2
}

/**
 * Function Called by Touch
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TouchType {
  /**
   * Triggered when the finger is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Down = 0,

  /**
   * Triggered when the finger is raised.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Up = 1,

  /**
   * Triggered when the finger presses on the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Move = 2,

  /**
   * Triggers when the touch event cancels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Cancel = 3,

  /**
   * Triggers when the touch event turns to hover enter in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_ENTER = 9,

  /**
   * Triggers when the touch event turns to hover move in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_MOVE = 10,

  /**
   * Triggers when the touch event turns to hover exit in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_EXIT = 11,

  /**
   * Triggers when the touch event turns to hover cancel in accessibility processing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_CANCEL = 12,
}

/**
 * Function Called by Touch or Gesture.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum InteractionHand {
  /**
   * Unknown hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NONE = 0,

  /**
   * Left hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LEFT = 1,

  /**
   * Right hand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RIGHT = 2
}

/**
 * Define the button types of the mouse device.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum MouseButton {
  /**
   * Mouse Left Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Left = 1,

  /**
   * Mouse Right Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Right = 2,

  /**
   * Mouse Middle Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Middle = 4,

  /**
   * Mouse Back Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Back = 8,

  /**
   * Mouse Forward Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Forward = 16,

  /**
   * Mouse None Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 0
}

/**
 * Function Called by Mouse
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum MouseAction {
  /**
   * Triggered when the mouse is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Press = 1,

  /**
   * Triggered when the mouse is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Release = 2,

  /**
   * Triggered when the mouse is Moved.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Move = 3,

  /**
   * Triggered when the mouse is Hovered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Hover = 4,

  /**
   * Triggered when mouse enters the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ENTER_WINDOW = 4,

  /**
   * Triggered when mouse leaves the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LEAVE_WINDOW = 5,

  /**
   * Triggered when the mouse event is canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CANCEL = 13
}

/**
 * Animation status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AnimationStatus {
  /**
   * Initial state of the animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Initial = 0,

  /**
   * The animation is playing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Running = 1,

  /**
   * The animation is paused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Paused = 2,

  /**
   * The animation is stopped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Stopped = 3
}

/**
 * enum Curve.
 *
 * @typedef { curves.Curve } Curve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Curve = curves.Curve;

/**
 * Sets the state before and after the animation starts.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FillMode {
  /**
   * Restores to the initial state after the playback is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 0,

  /**
   * Retains the state at the end of the animation when the playback is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Forwards = 1,

  /**
   * Applies the start attribute value for the period specified by animation-delay before the animation is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Backwards = 2,

  /**
   * Both forward and backward fill modes are applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Both = 3
}

/**
 * Play Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PlayMode {
  /**
   * The animation plays normally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Normal = 0,

  /**
   * The animation plays backwards.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Reverse = 1,

  /**
   * The animation plays forward on odd numbers (1, 3, 7...) and backward on even numbers (2, 4, 6...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Alternate = 2,

  /**
   * The animation plays backwards on odd numbers (1, 3, 7...) and forwards on even numbers (2, 4, 6...)..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  AlternateReverse = 3
}

/**
 * Type of a key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum KeyType {
  /**
   * Press the key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Down = 0,

  /**
   * The key is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Up = 1
}

/**
 * Type of the input device that triggers the current key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum KeySource {
  /**
   * The input device type is unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Unknown = 0,

  /**
   * Set Device Type to Keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Keyboard = 4,

  /**
   * Set Device Type to Joystic.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  JOYSTICK = 5
}

/**
 * Edge.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Edge {
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Top = 0,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bottom = 2,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 4,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 6
}

/**
 * Set Weekend
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Week {
  /**
   * Monday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Mon = 0,

  /**
   * Tuesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Tue = 1,

  /**
   * Wednesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Wed = 2,

  /**
   * Thursday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Thur = 3,

  /**
   * Friday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Fri = 4,

  /**
   * Saturday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Sat = 5,

  /**
   * Sunday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Sun = 6
}

/**
 * Sets the horizontal layout of elements.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Direction {
  /**
   * Elements are laid out from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Ltr = 0,

  /**
   * Elements are laid out from right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Rtl = 1,

  /**
   * Use the default layout direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Auto = 2
}

/**
 * Used to set the status of the scroll bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum BarState {
  /**
   * Not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Off = 0,

  /**
   * On-demand display (displayed when you touch it and disappears after 2 seconds).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Auto = 1,

  /**
   * Resident display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  On = 2
}

/**
 * Sliding effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or
   * touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Spring = 0,

  /**
   * Fade.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Fade = 1,

  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 2
}

/**
 * Alignment enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Alignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TopStart = 0,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Top = 1,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TopEnd = 2,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 3,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 4,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 5,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BottomStart = 6,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bottom = 7,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BottomEnd = 8
}

/**
 * Alignment enumeration description.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LocalizedAlignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_START = 'top_start',
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP = 'top',
  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_END = 'top_end',
  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  START = 'start',
  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 'center',
  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 'end',
  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_START = 'bottom_start',
  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM = 'bottom',
  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_END = 'bottom_end'
}

/**
 * TransitionType enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TransitionType {
  /**
   * Specifies that the current transition action takes effect in all change scenarios of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  All = 0,

  /**
   * Specifies the insertion scenario in which the current transition action takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Insert = 1,

  /**
   * Specifies the deletion scenario in which the current transition action takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Delete = 2
}

/**
 * RelateType enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RelateType {
  /**
   * Scales the current component to fill the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FILL = 0,

  /**
   * Scales the current component to fit the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FIT = 1
}

/**
 * Controls the display or hide of the current component
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Visibility {
  /**
   * Show
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Visible = 0,

  /**
   * Hide, but participate in layout for placeholder.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Hidden = 1,

  /**
   * Hides but does not participate in layout and does not take place.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 2
}

/**
 * LineCapStyle enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LineCapStyle {
  /**
   * The two ends of the dividing line are parallel lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Butt = 0,

  /**
   * The two ends of the dividing line are semicircles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Round = 1,

  /**
   * Extends half a circle at the end of the path with a width equal to half the line width and a height equal to the
   * line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Square = 2
}

/**
 * Axis enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Axis {
  /**
   * Longitudinal arrangement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Vertical = 0,

  /**
   * Horizontal arrangement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Horizontal = 1
}



/**
 * HorizontalAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum HorizontalAlign {
  /**
   * Aligns the start end in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 1,

  /**
   * Aligns the ends in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 2
}

/**
 * FlexAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FlexAlign {
  /**
   * The element is aligned at the head of the principal axis,
   * the first element is aligned with the head of the row, and subsequent elements are aligned with the previous one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 0,

  /**
   * The elements are centered in the direction of the principal axis,
   * and the first element is the same distance from the beginning of the row as the last element is from the end of
   * the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 1,

  /**
   * The element is aligned at the tail of the principal axis,
   * the last element is aligned at the end of the row, and the other elements are aligned with the next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 2,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   * with the same distance between adjacent elements.
   * The first element aligns with the beginning of the line, and the last element aligns with the end of the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SpaceBetween = 3,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   *  with the same distance between adjacent elements. Half the distance between adjacent elements as the distance
   * between
   * the first element and the distance between the last element and the end of the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SpaceAround = 4,

  /**
   * Elements in the Flex axis direction are evenly spaced.
   * The spacing between adjacent elements, the spacing between the first element and the beginning of the row,
   * and the spacing between the last element and the end of the row are the same.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SpaceEvenly = 5
}

/**
 * ItemAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ItemAlign {
  /**
   * Use the default configuration in the Flex container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Auto = 0,

  /**
   * The element is in the Flex container with the cross-axis direction head aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 1,

  /**
   * The element is centered in the Flex container with the cross axis direction aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 2,

  /**
   * The element is bottom aligned in the Flex container with the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 3,

  /**
   * Element In the Flex container, the cross-axis direction text baseline is aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Baseline = 4,

  /**
   * Element In a Flex container, the fill is stretched across the axis and, when no dimension is set, to the container
   * size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Stretch = 5
}

/**
 * FlexDirection enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FlexDirection {
  /**
   * The main axis is consistent with the row direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Row = 0,

  /**
   * The main axis is consistent with the column direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Column = 1,

  /**
   * The layout is in the opposite direction to the Row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RowReverse = 2,

  /**
   * Layout in the opposite direction to the column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ColumnReverse = 3
}

/**
 * Pixel Round Direction
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PixelRoundCalcPolicy {
  /**
   * No Force round the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NO_FORCE_ROUND = 0,
  /**
   * Force ceil the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FORCE_CEIL = 1,
  /**
   * Force floor the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FORCE_FLOOR = 2
}

/**
 * Pixel Round Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PixelRoundMode {
  /**
   * Do pixel round on layout finish.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PIXEL_ROUND_ON_LAYOUT_FINISH = 0,
  /**
   * Do pixel round after measure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PIXEL_ROUND_AFTER_MEASURE = 1
}

/**
 * FlexWrap enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FlexWrap {
  /**
   * The Flex container has a single row/column layout of elements, and children are allowed to go beyond the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NoWrap = 0,

  /**
   * The elements of the Flex container are arranged in multiple rows or columns, and the sub-items are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Wrap = 1,

  /**
   * The elements of the Flex container are arranged in reverse multiple rows/columns, and children are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WrapReverse = 2
}

/**
 * VerticalAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum VerticalAlign {
  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Top = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 1,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bottom = 2
}

/**
 * ImageRepeat enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageRepeat {
  /**
   * Do not draw the picture again.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NoRepeat = 0,

  /**
   * Repeat the drawing only on the horizontal axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  X = 1,

  /**
   * Repeat the drawing only on the vertical axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Y = 2,

  /**
   * Draw the picture repeatedly on both axes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  XY = 3
}

/**
 * ImageSize enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageSize {
  /**
   * Keep the scale of the original image unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Auto = 2,

  /**
   * Keep the aspect ratio to zoom in or out the image so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Cover = 1,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Contain = 0,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FILL = 3
}

/**
 * GradientDirection enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GradientDirection {
  /**
   * Right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Left = 0,

  /**
   * From the bottom up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Top = 1,

  /**
   * From left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Right = 2,

  /**
   * From the top down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bottom = 3,

  /**
   * Top Left
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LeftTop = 4,

  /**
   * Left Bottom
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LeftBottom = 5,

  /**
   * Right Top
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RightTop = 6,

  /**
   * Right Bottom
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RightBottom = 7,

  /**
   * None
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 8
}

/**
 * SharedTransitionEffectType enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SharedTransitionEffectType {
  /**
   * The location of the destination page element remains unchanged, and you can configure the transparency animation.
   * Currently,
   * only the static effect configured for redirecting to the target page takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Static = 0,

  /**
   * Move the source page element to the destination page element location and scale it appropriately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Exchange = 1
}

/**
 * Text style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FontStyle {
  /**
   * Default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Normal = 0,

  /**
   * Italic style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Italic = 1
}

/**
 * The font weight of the text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FontWeight {
  /**
   * Defines a lighter value than [Inherited Value]..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Lighter = 0,

  /**
   * Normal font. Equivalent to a digital value of 400.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Normal = 1,

  /**
   * Defines a more general value than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Regular = 2,

  /**
   * Defines a value that is more centered than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Medium = 3,

  /**
   * Bold. Equivalent to a numeric value of 700.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bold = 4,

  /**
   * Defines a value that is heavier than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bolder = 5
}

/**
 * Alignment of text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextAlign {
  /**
   * Center the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Center = 1,

  /**
   * The text is aligned in the same direction as the writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Start = 0,

  /**
   * The text is aligned in the opposite direction of writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  End = 2,

  /**
   * Justify the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  JUSTIFY = 3,

  /**
   * The text is aligned in the left direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LEFT = 4,

  /**
   * The text is aligned in the right direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RIGHT = 5
}

/**
 * Declare how text overflows.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextOverflow {
  /**
   * When the text overflows its dimensions, the text will not be cropped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 0,

  /**
   * When the text overflows its dimensions, the text will be cropped and displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Clip = 1,

  /**
   * If the text overflows its dimensions, the text that cannot be displayed shall be replaced by ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Ellipsis = 2,

  /**
   * When the text overflows its dimensions, the text will scroll for displaying.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MARQUEE = 3
}

/**
 * Type of text modifier.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextDecorationType {
  /**
   * Do not use text decorative lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 0,

  /**
   * Underline the words.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Underline = 1,

  /**
   * Text is in all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Overline = 2,

  /**
   * A modifier line that passes through the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LineThrough = 3
}

/**
 * Letter type in text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextCase {
  /**
   * The default is normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Normal = 0,

  /**
   * The text is all lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LowerCase = 1,

  /**
   * The text is all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  UpperCase = 2
}

/**
 * Enum of text height adaptation
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextHeightAdaptivePolicy {
  /**
   * Priority is given to using the maxLines attribute to adapt the text height.
   * If the layout size using the maxLines attribute exceeds the layout constraint, try reducing the font size to
   * display more text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MAX_LINES_FIRST = 0,

  /**
   * Priority is given to using the minFontSize attribute to adapt the text height.
   * If the text can be layout in a single line using the minFontSize property, try increasing the font size and using
   * the maximum possible font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MIN_FONT_SIZE_FIRST = 1,

  /**
   * Priority is given to using the layout constraint to adapt the text height.
   * If the layout size exceeds the layout constraint, try reducing the font size. If the layout size still exceeds
   * the layout constraint after reducing the font size to minFontSize, remove the lines that exceed the layout
   * constraint.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LAYOUT_CONSTRAINT_FIRST = 2
}

/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ResponseType {
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RightClick = 0,

  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LongPress = 1
}

/**
 * HoverEffect enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HoverEffect {
  /**
   * None effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * Zoom in and out effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Scale = 2,

  /**
   * Highlight effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Highlight = 3,

  /**
   * Default effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 4
}

/**
 * Placement enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum Placement {
  /**
   * Left placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Left = 0,

  /**
   * Right placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Right = 1,

  /**
   * Top placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Top = 2,

  /**
   * Bottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Bottom = 3,

  /**
   * TopLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TopLeft = 4,

  /**
   * TopRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TopRight = 5,

  /**
   * BottomLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BottomLeft = 6,

  /**
   * BottomRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BottomRight = 7,

  /**
   * LeftTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LeftTop = 8,

  /**
   * LeftBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LeftBottom = 9,

  /**
   * RightTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RightTop = 10,

  /**
   * RightBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RightBottom = 11
}

/**
 * ArrowPointPosition enumeration description
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ArrowPointPosition {
  /**
   * Target start position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  START = 'Start',

  /**
   * Target center position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 'Center',

  /**
   * Target end position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 'End'
}

/**
 * Indicates the share option.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum CopyOptions {
  /**
   * Not allow share.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 0,

  /**
   * Share in app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  InApp = 1,

  /**
   * Share in local device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LocalDevice = 2,
}

/**
 * Defines the event tool type that support response region settings.
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ResponseRegionSupportedTool {
  /**
   * All source tool type.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ALL = 0,

  /**
   * The finger type.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FINGER = 1,

  /**
   * The pen type.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PEN = 2,

  /**
   * The mouse type.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MOUSE = 3
}

/**
 * Defines the hit test mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum HitTestMode {
  /**
   * Both self and children nodes respond to the hit test for touch events,
   * but block hit test of the other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Default = 0,

  /**
   * Self respond to the hit test for touch events,
   * but block hit test of children and other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Block = 1,

  /**
   * Self and children respond to the hit test for touch events,
   * and allow hit test of other nodes which is masked by this node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Transparent = 2,

  /**
   * Self not respond to the hit test for touch events,
   * but children respond to the hit test for touch events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  None = 3,
  /**
   * Blocks all lower-priority siblings and parent nodes from receiving the event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BLOCK_HIERARCHY = 4,
  /**
   * Self not respond to the hit test for touch events,
   * and all descendants (children, grandchildren, etc.) not respond to the hit test for touch events too.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BLOCK_DESCENDANTS = 5
}

/**
 * Title height.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TitleHeight {
  /**
   * Title height when only main title is available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MainOnly = 0,

  /**
   * Title height when main title and subtitle are both available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MainWithSub = 1
}

/**
 * Modifier key for hot key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ModifierKey {
  /**
   * ctrl.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CTRL = 0,

  /**
   * shift.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SHIFT = 1,

  /**
   * alt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ALT = 2
}

/**
 * Function key for hot key.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FunctionKey {
  /**
   * Escape key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ESC = 0,

  /**
   * F1 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F1 = 1,

  /**
   * F2 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F2 = 2,

  /**
   * F3 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F3 = 3,

  /**
   * F4 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F4 = 4,

  /**
   * F5 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F5 = 5,

  /**
   * F6 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F6 = 6,

  /**
   * F7 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F7 = 7,

  /**
   * F8 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F8 = 8,

  /**
   * F9 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F9 = 9,

  /**
   * F10 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F10 = 10,

  /**
   * F11 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F11 = 11,

  /**
   * F12 key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  F12 = 12,

  /**
   * Tab key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TAB = 13,

  /**
   * Up arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DPAD_UP = 14,

  /**
   * Down arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DPAD_DOWN = 15,

  /**
   * Left arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DPAD_LEFT = 16,

  /**
   * Right arrow key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DPAD_RIGHT = 17
}

/**
 * The alignment of ImageSpan
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageSpanAlignment {
  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the baseline of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BASELINE = 4,

  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the bottom of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM = 3,

  /**
   * Indicating that the center of the ImageSpan should be aligned with the center of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 2,

  /**
   * Indicating that the top of the ImageSpan should be aligned with the top of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP = 1,

  /**
   * Indicating that the ImageSpan should be aligned by the paragraph's textVerticalAlign.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FOLLOW_PARAGRAPH = 5
}

/**
 * ObscuredReasons.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ObscuredReasons {
  /**
   * Displayed data should appear as generic placeholders.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PLACEHOLDER = 0
}

/**
 * Text content style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextContentStyle {
  /**
   * Text content default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Text content inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  INLINE = 1
}

/**
 * Enum of click effect level.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ClickEffectLevel {
  /**
   * Click effect level1.
   * The default scale number of this click effect level1 is 0.90.
   * The animation type is interpolatingSpring, velocity:10, mass:1, stiffness:410, damping:38.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LIGHT = 0,

  /**
   * Click effect level2.
   * The default scale number of this click effect level2 is 0.95.
   * The animation type is interpolatingSpring, velocity:10, mass:1, stiffness:350, damping:35.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MIDDLE = 1,

  /**
   * Click effect level3.
   * The default scale number of this click effect level3 is 0.95.
   * The animation type is interpolatingSpring, velocity:0, mass:1, stiffness:240, damping:28.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HEAVY = 2
}

/**
 * The type of XComponent
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum XComponentType {
  /**
   * Surface type. The default type is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SURFACE = 0,

  /**
   * Texture type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TEXTURE = 2,
}

/**
 * Nested scroll nested mode

 * @enum { number } NestedScrollMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum NestedScrollMode {
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
  SELF_FIRST = 1,

  /**
   * Parent scrollable component priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PARENT_FIRST = 2,

  /**
   * Both self and parent scrollable component response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PARALLEL = 3
}

/**
 * The possible source of scroll event
 * @enum { number } ScrollSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ScrollSource {
  /**
   * Drag events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DRAG = 0,

  /**
   * Fling after the drag has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FLING = 1,

  /**
   * Over scroll with EdgeEffect.Spring.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  EDGE_EFFECT = 2,

  /**
   * Other user input except drag, such as mouse wheel, key event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  OTHER_USER_INPUT = 3,

  /**
   * Drag events of scroll bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SCROLL_BAR = 4,

  /**
   * Fling after the drag on scroll bar has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SCROLL_BAR_FLING = 5,

  /**
   * Member methods of Scroller without animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SCROLLER = 6,

  /**
   * Member methods of Scroller with animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SCROLLER_ANIMATION = 7
}

/**
 * Enum of RenderFit
 *
 * @enum { number } RenderFit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RenderFit {
  /**
   * Without scaling the content area, the content area is drawn in the center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 0,
  /**
   * Without scaling the content area, the content area is drawn in the top center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP = 1,
  /**
   * Without scaling the content area, the content area is drawn in the bottom center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM = 2,
  /**
   * Without scaling the content area, the content area is drawn in the left center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LEFT = 3,
  /**
   * Without scaling the content area, the content area is drawn in the right center of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RIGHT = 4,
  /**
   * Without scaling the content area, the content area is drawn in the top left of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_LEFT = 5,
  /**
   * Without scaling the content area, the content area is drawn in the top right of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP_RIGHT = 6,
  /**
   * Without scaling the content area, the content area is drawn in the bottom left of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_LEFT = 7,
  /**
   * Without scaling the content area, the content area is drawn in the bottom right of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BOTTOM_RIGHT = 8,
  /**
   * Scale the length and width of the content area to the node size to fill the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_FILL = 9,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node, and the content after scaling
   * is centered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_CONTAIN = 10,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node. If the height of the scaled content
   * is less than or equal to the height of the node, the scaled content area is displayed at the top; otherwise,
   * the width of the scaled content is less than or equal to the width of the node, the scaled content area is
   * displayed at the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_CONTAIN_TOP_LEFT = 11,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is less than or equal to the corresponding side of the node. If the height of the scaled content
   * is less than or equal to the height of the node, the scaled content area is displayed at the bottom; otherwise,
   * the width of the scaled content is less than or equal to the width of the node, the scaled content area is
   * displayed at the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_CONTAIN_BOTTOM_RIGHT = 12,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node, and the content after scaling
   * displays the center area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_COVER = 13,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node. If the height of the scaled content
   * is greater than or equal to the height of the node, the scaled content area displays the top area; otherwise,
   * the width of the scaled content is greater than or equal to the width of the node, the scaled content area
   * displays the left area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_COVER_TOP_LEFT = 14,
  /**
   * Scale the length or width of the content to the length or width of the node, ensuring that one side is equal,
   * the other side is greater than or equal to the corresponding side of the node. If the height of the scaled content
   * is greater than or equal to the height of the node, the scaled content area displays the bottom area; otherwise,
   * the width of the scaled content is greater than or equal to the width of the node, the scaled content area
   * displays the right area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_COVER_BOTTOM_RIGHT = 15
}

/**
 * The Button Style of dialog,
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DialogButtonStyle {
  /**
   * Default Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Highlight Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HIGHLIGHT = 1
}

/**
 * Enum of word break
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum WordBreak {
  /**
   * By default, CJK text can be wrapped between any 2 characters, and non-CJK text can only be wrapped in spaces.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NORMAL = 0,

  /**
   * Non-CJK text be wrapped at any character
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BREAK_ALL = 1,

  /**
   * Non-CJK text can be wrapped at any character
   * and if a complete word can be preserved in space breaks, the word must be kept on the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BREAK_WORD = 2,

  /**
   * For supported languages, line breaks can be performed by syllables.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HYPHENATION = 3
}

/**
 * Enum of line break strategy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LineBreakStrategy {
  /**
   * By default. Display as many characters as possible on each line until no more characters
   * can be displayed on that line, and do not automatically add hyphens under this strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  GREEDY = 0,

  /**
   * High quality folding. Optimize the layout of the entire text's line breaks and automatically
   * add hyphens if necessary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HIGH_QUALITY = 1,

  /**
   * Balanced folding. We will try our best to ensure that the width of each line in a paragraph
   * is the same, and if necessary, we will add conjunction
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BALANCED = 2
}

/**
 * Enum of Illuminated type
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum IlluminatedType {
  /**
   * Component is not illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  NONE = 0,
  /**
   * Border is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  BORDER = 1,
  /**
   * Content is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  CONTENT = 2,
  /**
   * Border and Content is illuminated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  BORDER_CONTENT = 3,
  /**
   * Border is illuminated, and the border have a bloom effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  BLOOM_BORDER = 4,
  /**
   * Border and Content is illuminated, and the border have a bloom effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  BLOOM_BORDER_CONTENT = 5,
}

/**
 * Enum of ellipsisMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EllipsisMode {
  /**
   * The ellipsis is in the head.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  START = 0,

  /**
   * The ellipsis is in the middle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CENTER = 1,

  /**
   * The ellipsis is at the end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 2,

  /**
   * The ellipsis is in the head. It is valid for multiline and single line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  MULTILINE_START = 3,

  /**
   * The ellipsis is in the middle. It is valid for multiline and single line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  MULTILINE_CENTER = 4,
}

/**
 * A type which can be undefined
 *
 * @typedef { T | undefined } Nullable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Nullable<T> = T | undefined;

/**
 * Decide whether the width of select menu fit the trigger or content
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum OptionWidthMode {
  /**
   * The menu width fit the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FIT_CONTENT = 'fit_content',

  /**
   * The menu width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FIT_TRIGGER = 'fit_trigger'
}

/**
 * Enumerates the fold status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FoldStatus {
  /**
   * Fold Status Unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FOLD_STATUS_UNKNOWN = 0,
  /**
   * Fold Status Expanded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FOLD_STATUS_EXPANDED = 1,
  /**
   * Fold Status Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FOLD_STATUS_FOLDED = 2,
  /**
   * Fold Status Half Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FOLD_STATUS_HALF_FOLDED = 3
}

/**
 * Enumerates the app rotation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AppRotation {

  /**
   * App does not rotate to display vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROTATION_0 = 0,

  /**
   * App rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROTATION_90 = 1,

  /**
   * App rotates 180 degrees clockwise to display vertically in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROTATION_180 = 2,

  /**
   * App rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROTATION_270 = 3
}

/**
 * Enum of EmbeddedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EmbeddedType {
  /**
   * The EmbeddedComponent show the UI in EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  EMBEDDED_UI_EXTENSION = 0
}

/**
 * Marquee scrolling strategy after text update
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum MarqueeUpdateStrategy {
  /**
   * Reset scroll position and restart scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Preserve scroll position, just change to new text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PRESERVE_POSITION = 1
}

/**
 * Type of text decoration line style.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextDecorationStyle {
  /**
   * Solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SOLID = 0,

  /**
   * Double lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DOUBLE = 1,

  /**
   * Dotted line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DOTTED = 2,

  /**
   * Dashed line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DASHED = 3,

  /**
   * Wavy line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WAVY = 4
}

/**
 * Type of text selectable.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextSelectableMode {
  /**
   * set text selectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SELECTABLE_UNFOCUSABLE = 0,

  /**
   * set text selectable and focusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SELECTABLE_FOCUSABLE = 1,

  /**
   * set text unselectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  UNSELECTABLE = 2
}

/**
 * Type of accessibility hover event.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AccessibilityHoverType {
  /**
   * Hover enter type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_ENTER = 0,

  /**
   * Hover move type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_MOVE = 1,

  /**
   * Hover exit type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_EXIT = 2,

  /**
   * Hover cancel type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOVER_CANCEL = 3
}

/**
 * Type of window width breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum WidthBreakpoint {
  /**
   * Window width < 320vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WIDTH_XS = 0,

  /**
   * Window width >= 320vp and < 600vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WIDTH_SM = 1,

  /**
   * Window width >= 600vp and < 840vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WIDTH_MD = 2,

  /**
   * Window width >= 840vp and < 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WIDTH_LG = 3,

  /**
   * Window width >= 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  WIDTH_XL = 4
}

/**
 * Type of window height breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum HeightBreakpoint {
  /**
   * Window aspectRatio < 0.8 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HEIGHT_SM = 0,

  /**
   * Window aspectRatio >= 0.8 and < 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HEIGHT_MD = 1,

  /**
   * Window aspectRatio >= 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HEIGHT_LG = 2
}

/**
 * Type of axis.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AxisModel {
  /**
   * ABS_X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_X = 0,

  /**
   * ABS_Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_Y = 1,

  /**
   * ABS_Z axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_Z = 2,

  /**
   * ABS_RZ axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_RZ = 3,

  /**
   * ABS_GAS axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_GAS = 4,

  /**
   * ABS_BRAKE axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_BRAKE = 5,

  /**
   * ABS_HAT0X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT0X = 6,

  /**
   * ABS_HAT0Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT0Y = 7,

  /**
   * ABS_RX axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_RX = 8,

  /**
   * ABS_RY axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_RY = 9,

  /**
   * ABS_THROTTLE axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_THROTTLE = 10,

  /**
   * ABS_RUDDER axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_RUDDER = 11,

  /**
   * ABS_WHEEL axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_WHEEL = 12,

  /**
   * ABS_HAT1X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT1X = 13,

  /**
   * ABS_HAT1Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT1Y = 14,

  /**
   * ABS_HAT2X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT2X = 15,

  /**
   * ABS_HAT2Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT2Y = 16,

  /**
   * ABS_HAT3X axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT3X = 17,

  /**
   * ABS_HAT3Y axis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ABS_HAT3Y = 18
}

/**
 * Page flip mode of Swiper and Tabs on mouse wheel event.

 * @enum { number } PageFlipMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PageFlipMode {
  /**
   * Turn pages continuously according to the number of mouse wheel events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CONTINUOUS = 0,

  /**
   * The page-turning animation remains unresponsive to other mouse wheel events until it completes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SINGLE = 1
}

/**
 * Rotating crown event behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum CrownAction {
  /**
   * Rotation crown behavior begins.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   * @deprecated since 24 static
   */
  BEGIN = 0,

  /**
   * Rotation crown behavior update.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  UPDATE = 1,

  /**
   * The rotation crown behavior ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 2
}

/**
 * Sensitivity of rotating crown.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum CrownSensitivity {
  /**
   * Low sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LOW = 0,

  /**
   * Medium sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  MEDIUM = 1,

  /**
   * High sensitivity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HIGH = 2
}

/**
 * Type of axis action.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AxisAction {
  /**
   * None action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NONE = 0,

  /**
   * Triggered when an axis event starts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BEGIN = 1,

  /**
   * Triggered when the axis event is updated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  UPDATE = 2,

  /**
   * Triggered when the axis event ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  END = 3,

  /**
   * Triggered when the axis event is cancelled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  CANCEL = 4
}

/**
 * Type of focus draw level.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum FocusDrawLevel {
  /**
   * Draw focus on node self level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SELF = 0,

  /**
   * Draw focus on top level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TOP = 1
}

/**
 * Menu divider mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DividerMode {
  /**
   * Menu divider mode floating above menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FLOATING_ABOVE_MENU = 0,

  /**
   * Menu divider mode embedded in menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  EMBEDDED_IN_MENU = 1
}

/**
 * Event query type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum EventQueryType {
  /**
   * Type of onClick event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ON_CLICK = 0
}

/**
 * Tips show position type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TipsAnchorType {
  /**
   * Tips display position based on bound component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TARGET = 0,

  /**
   * Tips display position based on cursor position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CURSOR = 1
}

/**
 * Dialog display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
declare enum DialogDisplayMode {
  /**
   * The dialog displayed based on screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SCREEN_BASED = 0,
  /**
   * The dialog displayed based on application window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_BASED = 1
}

/**
 * Focus wrap mode of a list or grid when moving focus using the arrow keys.
 *
 * @enum { number } FocusWrapMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum FocusWrapMode {
  /**
   * No wrap when moving focus using the arrow keys.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  DEFAULT = 0,

  /**
   * Auto wrap when moving focus using the arrow keys.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  WRAP_WITH_ARROW = 1
}

/**
 * Define the property type enumeration used in animation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AnimationPropertyType {
  /**
   * Rotation angle in the x, y, z direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ROTATION = 0,

  /**
   * Tranlation in the x and y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  TRANSLATION = 1,

  /**
   * Scale in the x and y direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SCALE = 2,

  /**
   * Opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  OPACITY = 3
}

/**
 * Define ColorSpace enumeration.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ColorSpace {
  /**
   * SRGB ColorSpace.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  SRGB = 0,
  /**
   * Display-P3 ColorSpace.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DISPLAY_P3 = 1,
}

/**
 * Define the axis type of axis event.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AxisType {
  /**
   * Indicates the vertical scoll axis. When you scroll the mouse wheel or make certain gestures on the touchpad,
   * the status of the vertical scoll axis changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  VERTICAL_AXIS = 0,

  /**
   * Indicates the horizontal scoll axis. When you make certain gestures on the touchpad,
   * the status of the horizontal scroll axis changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HORIZONTAL_AXIS = 1,

  /**
   * Indicates the pinch axis, which is used to describe a pinch gesture on the touchpad.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PINCH_AXIS = 2,
}

/**
 * Defines whether a competition for gesture recognition results should occur between the event injector and the
 * gesture recognizers of the target component.
 * This strategy determines how the injected input event interacts with the target component's own gesture
 * handling logic.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum CompetitionStrategy {
  /**
   * No competition strategy.
   * The injected event does not compete with any existing gestures.
   * Both the injected event and existing gestures can be processed independently and in parallel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DEFAULT = 0,

  /**
   * Competition strategy.
   * The gesture recognition result from the event injector will compete with those from the target component's own
   * recognizers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  COMPETITION = 1,
}

/**
 * Defines the state types that can be monitored by AttributeModifiers.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 23 staticonly
 */
export enum AttributeModifierState {

  /**
   * Normal state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  NORMAL = 0,

  /**
   * Pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  PRESSED = 1,

  /**
   * Focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  FOCUSED = 1 << 1,

  /**
   * Disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  DISABLED = 1 << 2,

  /**
   * Selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 23 staticonly
   */
  SELECTED = 1 << 3
}

/**
 * Specify the number of columns for different responsive breakpoints.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PresetFillType {
    /**
     * For Lists and Swipers: One column is displayed on SM (and smaller), two on MD, and three on LG (and larger)
     * devices. For Grid and WaterFlow: two column is displayed on SM (and smaller), three on MD, and five on LG
     * (and larger) devices.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BREAKPOINT_DEFAULT = 0,
    /**
     * For SM (and smaller), MD, and LG (and larger) devices, one, two, and three columns are displayed respectively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BREAKPOINT_SM1MD2LG3 = 1,
    /**
     * For SM (and smaller), MD, and LG (and larger) devices, two, three, and five columns are displayed respectively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BREAKPOINT_SM2MD3LG5 = 2
}

/**
 * Defining Environment variable enumeration value.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum SystemProperties {
  /**
   * System environment breakpoint key that is used to obtain the width and height breakpoint value of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BREAK_POINT = 'system.arkui.breakpoint',
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_AVOID_AREA = 'system.window.avoidarea',
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_AVOID_AREA_PX = 'system.window.avoidarea.px',
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_SIZE = 'system.window.size',
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_SIZE_PX = 'system.window.size.px'
}