/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { BaseEvent, SourceTool, Callback } from './common';
import { InteractionHand } from './enums';
import { VoidCallback } from "./units";
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PanDirection {
    /**
     * Default.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    None = 0,
    /**
     * Sliding left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Left = 1,
    /**
     * Sliding right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Right = 2,
    /**
     * Sliding horizontally.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Horizontal = 3,
    /**
     * Sliding up.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Up = 4,
    /**
     * Sliding up or left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP_LEFT = 5,
    /**
     * Sliding up or right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP_RIGHT = 6,
    /**
     * Sliding up or horizontally.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP_HORIZONTAL = 7,
    /**
     * Sliding down.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Down = 8,
    /**
     * Sliding down or left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN_LEFT = 9,
    /**
     * Sliding down or right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN_RIGHT = 10,
    /**
     * Sliding down or horizontally.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN_HORIZONTAL = 11,
    /**
     * Sliding vertical.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Vertical = 12,
    /**
     * Sliding vertical or left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    VERTICAL_LEFT = 13,
    /**
     * Sliding vertical or right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    VERTICAL_RIGHT = 14,
    /**
     * Sliding in all directions.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    All = 15
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SwipeDirection {
    /**
     * Default.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    None,
    /**
     * Sliding horizontally.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Horizontal,
    /**
     * Sliding Vertical
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Vertical,
    /**
     * Sliding in all directions.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    All
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GestureMode {
    /**
     * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Sequence,
    /**
     * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Parallel,
    /**
     * Mutually exclusive recognition. Only one gesture is successfully recognized.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Exclusive
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GestureMask {
    /**
     * High-priority response to the current gesture.When the current gesture fails to be recognized,
     * other gesture responses are triggered.For gestures with the same priority,
     * responses are performed based on the recognition sequence.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Normal,
    /**
     * Ignore internal gestures and recognize the current gesture first.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IgnoreInternal
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GestureJudgeResult {
    /**
     * The system gesture determination is not affected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CONTINUE = 0,
    /**
     * The user-defined gesture determination result of the current component is fail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    REJECT = 1
}
/**
 * Creating an Object
 *
 * @namespace GestureControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace GestureControl {
    /**
     * Creating an Object
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enum GestureType {
        /**
         * TapGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        TAP_GESTURE = 0,
        /**
         * LongPressGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        LONG_PRESS_GESTURE = 1,
        /**
         * PanGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        PAN_GESTURE = 2,
        /**
         * PinchGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        PINCH_GESTURE = 3,
        /**
         * SwipeGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        SWIPE_GESTURE = 4,
        /**
         * RotationGesture.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        ROTATION_GESTURE = 5,
        /**
         * Drag.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        DRAG = 6,
        /**
         * Click.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        CLICK = 7,
        /**
         * Box selection gesture. A specialized Pan gesture used for rectangular area selection in scrollable
         * components.
         * When the mouse is moved with the primary button pressed, it creates a selection rectangle to select multiple
         * items within scrollable components.
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        BOX_SELECT_GESTURE = 8,
        /**
         * Web scroll gesture. A specialized Pan gesture designed for scrolling control in web components.
         * This gesture enables scrolling behavior when panning within the web component.
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        WEB_SCROLL_GESTURE = 9,
        /**
         * Text field selection gesture. A specialized Pan gesture used for selecting text content within TextField
         * components. This gesture allows users to drag across text to create or extend text selections,
         * providing precise text selection control in input fields and text editors.
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        TEXT_FIELD_SELECT_GESTURE = 10,
        /**
         * Context menu hover gesture. A specialized Long Press gesture that triggers hoverScale animation for context
         * menus. This gesture is only available when hoverScaleInterruption is set to true, enabling a visual feedback
         * effect while preparing to show context menus.
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        CONTEXT_MENU_HOVER_GESTURE = 11
    }
}
/**
 * The description of gesture information.
 *
 * @interface GestureInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GestureInfo {
    /**
     * The tag of gesture.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    tag?: string;
    /**
     * The type of gesture.
     *
     * @type { GestureControl.GestureType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: GestureControl.GestureType;
    /**
     * The flag whether it is a system gesture.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isSystemGesture: boolean;
}
/**
 * The location info used in gesture event.
 *
 * @interface EventLocationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EventLocationInfo {
    /**
     * X-axis coordinates relative to the upper left corner of the component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    x: double;
    /**
     * Y-axis coordinates relative to the upper left corner of the component.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    y: double;
    /**
     * X-axis coordinates relative to the upper left corner of the window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    windowX: double;
    /**
     * Y-axis coordinates relative to the upper left corner of the window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    windowY: double;
    /**
     * X-axis coordinates relative to the upper left corner of the screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    displayX: double;
    /**
     * Y-axis coordinates relative to the upper left corner of the screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    displayY: double;
    /**
     * X position of the point relative to the global display coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    globalDisplayX?: double;
    /**
     * Y position of the point relative to the global display coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    globalDisplayY?: double;
}
/**
 * Type of the finger information.
 *
 * @interface FingerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface FingerInfo {
    /**
     * Finger unique identifier.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    id: int;
    /**
     * X position of the click point relative to the global display coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    globalDisplayX?: double;

    /**
     * Y position of the click point relative to the global display coordinate.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    globalDisplayY?: double;
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    globalX: double;
    /**
     * The Y coordinate of the touch point relative to the upper edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    globalY: double;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    localX: double;
    /**
     * Y coordinate of the touch point relative to the upper edge of the touched element.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    localY: double;
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    displayX: double;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    displayY: double;
    /**
     * Type of the touch hand.
     *
     * @type { ?InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    hand?: InteractionHand;
}
/**
 * Defines the Gesture Type.
 *
 * @typedef { Gesture | GestureGroup } GestureType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type GestureType = Gesture | GestureGroup;
/**
 * Defines the gesture base event.
 *
 * @extends BaseEvent
 * @interface BaseGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface BaseGestureEvent extends BaseEvent {
    /**
     * All finger information.
     *
     * @type { FingerInfo[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingerList: FingerInfo[];
    /**
     * All finger information when the gesture event is triggered, the return value
     * is one array, and the array length is just the total fingers count. 
     * 
     * @type { ?FingerInfo[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingerInfos?: FingerInfo[];
}
/**
 * Defines event info for tap gesture.
 *
 * @extends BaseGestureEvent
 * @interface TapGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface TapGestureEvent extends BaseGestureEvent {
    /**
     * The tap location info used in tap gesture.
     * 
     * @type {?EventLocationInfo}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    tapLocation?: EventLocationInfo;
}
/**
 * Defines event info for long press gesture.
 *
 * @extends BaseGestureEvent
 * @interface LongPressGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface LongPressGestureEvent extends BaseGestureEvent {
    /**
     * Indicates whether an event is triggered repeatedly.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    repeat: boolean;
}
/**
 * Defines event info for pan gesture.
 *
 * @extends BaseGestureEvent
 * @interface PanGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PanGestureEvent extends BaseGestureEvent {
    /**
     * Gesture event offset X.
     * The unit is vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetX: double;
    /**
     * Gesture event offset Y.
     * The unit is vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetY: double;
    /**
     * X-axis velocity of the gesture.
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocityX: double;
    /**
     * Y-axis velocity of the gesture.
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocityY: double;
    /**
     * velocity of the gesture.
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocity: double;
}
/**
 * Defines event info for pinch gesture.
 *
 * @extends BaseGestureEvent
 * @interface PinchGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PinchGestureEvent extends BaseGestureEvent {
    /**
     * Scaling ratio.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scale: double;
    /**
     * X-axis coordinate of the kneading center point.
     * The unit is vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pinchCenterX: double;
    /**
     * Y-axis coordinate of the kneading center point.
     * The unit is vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pinchCenterY: double;
}
/**
 * Defines event info for rotation gesture.
 *
 * @extends BaseGestureEvent
 * @interface RotationGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RotationGestureEvent extends BaseGestureEvent {
    /**
     * Gesture event direction angle.
     * The unit is deg.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle: double;
}
/**
 * Defines event info for swipe gesture.
 *
 * @extends BaseGestureEvent
 * @interface SwipeGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface SwipeGestureEvent extends BaseGestureEvent {
    /**
     * Gesture event direction angle.
     * The unit is deg.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle: double;
    /**
     * Gesture event slide speed.
     * The unit is vp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    speed: double;
}
/**
 * Defines event info for gesture.
 *
 * @extends BaseEvent
 * @interface GestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface GestureEvent extends BaseEvent {
    /**
     * Indicates whether an event is triggered repeatedly.
     * Used in LongPressGesture.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    repeat: boolean;
    /**
     * All finger information.
     * Used in LongPressGesture and TapGesture.
     *
     * @type { FingerInfo[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingerList: FingerInfo[];
    /**
     * All finger information when the gesture event is triggered, the return value
     * is one array, and the array length is just the total fingers count. 
     * 
     * @type { ?FingerInfo[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingerInfos?: FingerInfo[];
    /**
     * Gesture event offset X.
     * The unit is vp.
     * Used in PanGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetX: double;
    /**
     * Gesture event offset Y.
     * The unit is vp.
     * Used in PanGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetY: double;
    /**
     * Gesture event direction angle.
     * The unit is deg.
     * Used in RotationGesture and SwipeGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle: double;
    /**
     * Gesture event slide speed.
     * The unit is vp.
     * Used in SwipeGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    speed: double;
    /**
     * Scaling ratio.
     * Used in PinchGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scale: double;
    /**
     * X-axis coordinate of the kneading center point.
     * The unit is vp.
     * Used in PinchGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pinchCenterX: double;
    /**
     * Y-axis coordinate of the kneading center point.
     * The unit is vp.
     * Used in PinchGesture.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pinchCenterY: double;
    /**
     * X-axis velocity of the gesture.
     * @type {double}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocityX: double;
    /**
     * Y-axis velocity of the gesture.
     * @type {double}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocityY: double;
    /**
     * velocity of the gesture.
     * @type {double}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    velocity: double;
    /**
     * The tap location info used in tap gesture.
     * 
     * @type {?EventLocationInfo}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    tapLocation?: EventLocationInfo;
}
/**
 * Defines the BaseHandlerOptions options.
 * @interface BaseHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface BaseHandlerOptions {
    /**
     * The flag to strict verification fingers, if touch finger size is over or less than fingers, gesture can not be
     * accepted.
     * The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isFingerCountLimited?: boolean;
}
/**
 * Defines Gesture interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Gesture {
    /**
     * Set gesture's tag.
     *
     * @param { string } tag
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    tag(tag: string): this;
    /**
     * Input source type for gesture response.
     *
     * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    allowedTypes(types: Array<SourceTool>): this;
}
/**
 * Defines TapGesture parameters.
 *
 * @extends BaseHandlerOptions
 * @interface TapGestureParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TapGestureParameters extends BaseHandlerOptions {
    /**
     * Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count?: int;
    /**
     * The hand index that triggers the click. If the value is less than 1, the default value is used.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * The limited move distance of click. If the value is less than 0, the default value is used.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    distanceThreshold?: double;
}
/**
 * Defines TapGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TapGesture extends Gesture {
    /**
     * Set the value.
     * TapGestureParameters: The parameters of the tapGesture.
     *
     * @param { function } factory
     * @param { TapGestureParameters } [value]
     * @returns { TapGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => TapGesture, value?: TapGestureParameters): TapGesture;
    /**
     * Tap gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * Defines LongPressGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LongPressGesture extends Gesture {
    /**
     * Set the value.
     * fingers: Indicates the hand index that triggers the long press.
     * repeat: Indicates whether to trigger event callback continuously.
     * duration: Minimum press and hold time, in milliseconds.
     *
     * @param { function } factory
     * @param { LongPressGestureHandlerOptions } [value]
     * @returns { LongPressGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => LongPressGesture, value?: LongPressGestureHandlerOptions): LongPressGesture;
    /**
     * LongPress gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
    /**
     * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is
     * received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the PanGesture options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PanGestureOptions {
    /**
     * Constructor parameters.
     *
     * @param { PanGestureHandlerOptions } [value]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value?: PanGestureHandlerOptions);
    /**
     * Sets the direction attribute.
     *
     * @param { PanDirection } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setDirection(value: PanDirection): void;
    /**
     * Sets the setDistance attribute.
     *
     * @param { double } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setDistance(value: double): void;
    /**
     * Sets the setFingers attribute.
     *
     * @param { int } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setFingers(value: int): void;
    /**
     * Get the pan direction attribute.
     *
     * @returns { PanDirection } - Pan gesture direction
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDirection(): PanDirection;
    /**
     * Returns the pan gesture's distance.
     * The unit is vp.
     *
     * @returns { double } - the distance of the pan gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDistance(): double;
}
/**
 * Defines PanGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PanGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { PanGestureHandlerOptions | PanGestureOptions } [value]
     * @returns { PanGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => PanGesture, value?: PanGestureHandlerOptions | PanGestureOptions): PanGesture;
    /**
     * Pan gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Pan gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines SwipeGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SwipeGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { SwipeGestureHandlerOptions } [value]
     * @returns { SwipeGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => SwipeGesture, value?: SwipeGestureHandlerOptions): SwipeGesture;
    /**
     * Slide gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * Defines PinchGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PinchGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { PinchGestureHandlerOptions } [value]
     * @returns { PinchGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => PinchGesture, value?: PinchGestureHandlerOptions): PinchGesture;
    /**
     * Pinch gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Pinch gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines RotationGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RotationGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { RotationGestureHandlerOptions } [value]
     * @returns { RotationGesture }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => RotationGesture, value?: RotationGestureHandlerOptions): RotationGesture;
    /**
     * Rotation gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Rotation gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is
     * received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the GestureGroup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class GestureGroup {
    /**
     * Return to Obtain GestureGroup.
     *
     * @param { function } factory
     * @param { GestureMode } mode
     * @param { GestureType[] } gesture
     * @returns { GestureGroup }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static $_instantiate(factory: () => GestureGroup, mode: GestureMode, ...gesture: GestureType[]): GestureGroup;
    /**
     * The Gesture group is successfully recognized and a callback is triggered when the touch cancel event is received.
     *
     * @param { VoidCallback } event
     * @returns { GestureGroup }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel(event: VoidCallback): GestureGroup;
}
/**
 * Defines the gesture handler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class GestureHandler {
    /**
     * Set the GestureHandler's tag.
     *
     * @param { string } tag
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    tag(tag: string): this;
    /**
     * Input source type for gesture response.
     *
     * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    allowedTypes(types: Array<SourceTool>): this;
}
/**
 * Defines the TapGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface TapGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface TapGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the number of consecutive clicks recognized. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count?: int;
    /**
     * Indicates the hand index that triggers the click. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * The limited move distance of click. If the value is less than 0, the default value is used.
     *
     * @type { ?double }
     * @default Infinity
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    distanceThreshold?: double;
}
/**
 * Defines the TapGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TapGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { TapGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: TapGestureHandlerOptions);
    /**
     * Tap gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * Defines the LongPressGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface LongPressGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface LongPressGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the hand index that triggers the long press. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * Indicates whether an event is triggered repeatedly.
     * The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    repeat?: boolean;
    /**
     * Indicates minimum press and hold time, in milliseconds.
     * The default value is 500ms.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    duration?: int;
    /**
     * Indicates maximum moving distance, in px.
     * The default value is 15px.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    allowableMovement?: double;
}
/**
 * Defines the LongPressGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LongPressGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { LongPressGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: LongPressGestureHandlerOptions);
    /**
     * LongPress gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
    /**
     * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is
     * received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the PanGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface PanGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PanGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the hand index that triggers the pan. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * Indicates the move direction of the pan gesture.
     * The default value is PanDirection.All.
     *
     * @type { ?PanDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: PanDirection;
    /**
     * Indicates minimum move distance.
     * The default value is 5vp.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    distance?: double;
    /**
     * Indicates minimum move distance map.
     *
     * @type { ?Map<SourceTool, double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    distanceMap?: Map<SourceTool, double>;
}
/**
 * Defines the PanGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PanGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { PanGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: PanGestureHandlerOptions);
    /**
     * Pan gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Pan gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the SwipeGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface SwipeGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface SwipeGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the hand index that triggers the swipe. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * Indicates the move direction of the swipe gesture.
     * The default value is SwipeDirection.All.
     *
     * @type { ?SwipeDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: SwipeDirection;
    /**
     * Indicates minimum move speed.
     * The default value is 100vp/s.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    speed?: double;
}
/**
 * Defines the SwipeGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SwipeGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { SwipeGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: SwipeGestureHandlerOptions);
    /**
     * Swipe gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * Defines the PinchGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface PinchGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PinchGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the hand index that triggers the pinch. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * Indicates minimum pinch move distance.
     * The default value is 5vp.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    distance?: double;
}
/**
 * Defines the PinchGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PinchGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { PinchGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: PinchGestureHandlerOptions);
    /**
     * Pinch gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Pinch gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the RotationGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface RotationGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RotationGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * Indicates the hand index that triggers the rotation. If the value is less than 1, the default value is used.
     * The default value is 1.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fingers?: int;
    /**
     * Indicates minimum rotate angle.
     * The default value is 1deg.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    angle?: double;
}
/**
 * Defines the RotationGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RotationGestureHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { RotationGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: RotationGestureHandlerOptions);
    /**
     * Rotation gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Callback when the Rotation gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is
     * received.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * Defines the GestureGroupGestureHandler options.
 *
 * @interface GestureGroupGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface GestureGroupGestureHandlerOptions {
    /**
     * Indicates the mode of gesture group.
     *
     * @type { GestureMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    mode: GestureMode;
    /**
     * Indicates the gestures included in the gesture group.
     *
     * @type { GestureHandler[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    gestures: GestureHandler[];
}
/**
 * Defines the GestureGroup handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class GestureGroupHandler extends GestureHandler {
    /**
     * Constructor parameters.
     *
     * @param { GestureGroupGestureHandlerOptions } [options]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(options?: GestureGroupGestureHandlerOptions);
    /**
     * The GestureGroup gesture is successfully recognized and a callback is triggered when the touch cancel event is
     * received.
     *
     * @param { VoidCallback } event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel(event: VoidCallback): this;
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GesturePriority {
    /**
     * The normal gesture priority.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * The high gesture priority.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PRIORITY = 1
}
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GestureRecognizerState {
    /**
     * Ready state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    READY = 0,
    /**
     * Detecting state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DETECTING = 1,
    /**
     * Pending state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PENDING = 2,
    /**
     * Blocked state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BLOCKED = 3,
    /**
     * Successful state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SUCCESSFUL = 4,
    /**
     * Failed state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    FAILED = 5
}
/**
 * Defines the scrollable target information.
 *
 * @extends EventTargetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ScrollableTargetInfo extends EventTargetInfo {
    /**
     * Returns whether the scrollable component is at begin.
     *
     * @returns { boolean } - true is at begin, false is not at begin
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isBegin(): boolean;
    /**
     * Returns whether the scrollable component is at end.
     *
     * @returns { boolean } - true is at end, false is not at end
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isEnd(): boolean;
}
/**
 * Defines the event target information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class EventTargetInfo {
    /**
     * Returns the component's inspector id.
     *
     * @returns { string } - the inspector id of the component
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getId(): string;
}
/**
 * Defines the touch recognizer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class TouchRecognizer {
    /**
     * Returns the event target information of the component.
     *
     * @returns { EventTargetInfo } - the event target information of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * Dispatch touch cancel to the touch recognizer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    cancelTouch(): void;
}
/**
 * Defines the gesture recognizer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class GestureRecognizer {
    /**
     * Returns the gesture's tag.
     *
     * @returns { string } - the gesture's tag
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getTag(): string;
    /**
     * Returns the gesture's type.
     *
     * @returns { GestureControl.GestureType } - the gesture's type
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getType(): GestureControl.GestureType;
    /**
     * Returns whether the gesture recognizer is built in recognizer.
     *
     * @returns { boolean } - true is built in recognizer, false is not built in recognizer
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isBuiltIn(): boolean;
    /**
     * set the enabled state of the gesture recognizer.
     *
     * @param { boolean } isEnabled - Indicates the enabled state.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setEnabled(isEnabled: boolean): void;
    /**
     * Returns whether the gesture recognizer is enabled.
     *
     * @returns { boolean } - true is enabled, false is not enabled
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isEnabled(): boolean;
    /**
     * Returns the gesture recognizer's state.
     *
     * @returns { GestureRecognizerState } - the gesture recognizer's state
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getState(): GestureRecognizerState;
    /**
     * Returns the event target information of the component.
     *
     * @returns { EventTargetInfo } - the event target information of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * Returns whether the gesture recognizer is valid.
     *
     * @returns { boolean } - true is valid, false is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isValid(): boolean;
    /**
     * Returns the tap gesture's finger count.
     *
     * @returns { int } - the finger count of the tap gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getFingerCount(): int;
    /**
     * Returns the tap gesture's limitFingerCount.
     *
     * @returns { boolean } - the limitFingerCount of the tap gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isFingerCountLimit(): boolean;
    /**
     * Prevent the gesture recognizer from participating in this gesture recognition until all fingers are lifted.
     * If the system has already made out the result of this gesture recognizer (success and failure), calling this
     * function will have no any effect.
     *
     * [Note]: This method is different from GestureRecognizer.setEnabled(isEnabled: boolean), setEnabled does not
     * prevent a gesture recognizer object from participating in the gesture recognition process, but only affects
     * whether the gesture's corresponding callback function is executed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    preventBegin(): void;
}
/**
 * Defines the tap gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TapRecognizer extends GestureRecognizer {
    /**
     * Returns the tap gesture's count.
     *
     * @returns { int } - the count of the tap gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getTapCount(): int;
}
/**
 * Defines the long press gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LongPressRecognizer extends GestureRecognizer {
    /**
     * Returns the long press gesture's repeat state.
     *
     * @returns { boolean } - the repeat state of the long press gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isRepeat(): boolean;
    /**
     * Returns the long press gesture's duration.
     * The unit is ms.
     *
     * @returns { int } - the duration of the long press gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDuration(): int;
    /**
     * Returns the long press gesture's maximum moving distance.
     * The unit is px.
     *
     * @returns { double } - the maximum moving distance of the long press gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getAllowableMovement(): double;
}
/**
 * Defines the swipe gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SwipeRecognizer extends GestureRecognizer {
    /**
     * Returns the swipe gesture's speed.
     * The unit is vp/s.
     *
     * @returns { double } - the velocity threshold of the swipe gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getVelocityThreshold(): double;
    /**
     * Returns the swipe gesture's direction.
     *
     * @returns { SwipeDirection } - the direction of the swipe gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDirection(): SwipeDirection;
}
/**
 * Defines the pinch gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PinchRecognizer extends GestureRecognizer {
    /**
     * Returns the pinch gesture's distance.
     * The unit is vp.
     *
     * @returns { double } - the distance of the pinch gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDistance(): double;
}
/**
 * Defines the rotation gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RotationRecognizer extends GestureRecognizer {
    /**
     * Returns the rotation gesture's angle.
     *
     * @returns { double } - the angle of the rotation gesture.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getAngle(): double;
}
/**
 * Defines the gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PanRecognizer extends GestureRecognizer {
    /**
     * Returns the the pan gesture options of the recognizer.
     *
     * @returns { PanGestureOptions } - Pan gesture options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getPanGestureOptions(): PanGestureOptions;
    /**
     * Returns the pan recognizer's direction attribute.
     *
     * @returns { PanDirection } - Pan recognizer direction
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getDirection(): PanDirection;
    /**
     * Returns the pan recognizer's distance.
     * The unit is vp.
     *
     * @returns { double } - the distance of the pan recognizer.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getDistance(): double;
    /**
     * Returns the pan recognizer's distance map.
     * The unit is vp.
     *
     * @returns { Map<SourceTool, double> } - the distance map of the pan recognizer.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getDistanceMap(): Map<SourceTool, double>;
}
