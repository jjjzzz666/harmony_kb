/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';
import type image from './@ohos.multimedia.image';

/**
 * The pointer module provides APIs related to pointer attribute management, such as querying and setting pointer attributes.
 *
 * @namespace pointer
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @since 9
 */
/**
 * The pointer module provides APIs related to pointer attribute management, such as querying and setting pointer attributes.
 *
 * @namespace pointer
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace pointer {
  /**
   * Enumerates mouse pointer styles.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Enumerates mouse pointer styles.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum PointerStyle {
    /**
     * Default
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    DEFAULT,

    /**
     * East arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    EAST,

    /**
     * West arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    WEST,

    /**
     * South arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH,

    /**
     * North arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH,

    /**
     * East-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    WEST_EAST,

    /**
     * North-south arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_SOUTH,

    /**
     * North-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_EAST,

    /**
     * North-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_WEST,

    /**
     * South-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH_EAST,

    /**
     * South-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SOUTH_WEST,

    /**
     * Northeast and southwest adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_EAST_SOUTH_WEST,

    /**
     * Northwest and southeast adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    NORTH_WEST_SOUTH_EAST,

    /**
     * Cross (accurate selection)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CROSS,

    /**
     * Copy
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CURSOR_COPY,

    /**
     * Forbid
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    CURSOR_FORBID,

    /**
     * Sucker
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    COLOR_SUCKER,

    /**
     * Grabbing hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_GRABBING,

    /**
     * Opening hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_OPEN,

    /**
     * Hand-shaped pointer
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HAND_POINTING,

    /**
     * Help
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    HELP,

    /**
     * Move
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MOVE,

    /**
     * Left and right resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    RESIZE_LEFT_RIGHT,

    /**
     * Up and down resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    RESIZE_UP_DOWN,

    /**
     * Screenshot crosshair
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SCREENSHOT_CHOOSE,

    /**
     * Screenshot
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    SCREENSHOT_CURSOR,

    /**
     * Text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    TEXT_CURSOR,

    /**
     * Zoom in
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    ZOOM_IN,

    /**
     * Zoom out
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    ZOOM_OUT,

    /**
     * Scrolling east
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_EAST,

    /**
     * Scrolling west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_WEST,

    /**
     * Scrolling south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH,

    /**
     * Scrolling north
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH,

    /**
     * Scrolling north and south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_SOUTH,

    /**
     * Scrolling northeast
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_EAST,

    /**
     * Scrolling northwest
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_WEST,

    /**
     * Scrolling southeast
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH_EAST,

    /**
     * Scrolling southwest
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_SOUTH_WEST,

    /**
     * Moving as a cone in four directions
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_NORTH_SOUTH_WEST_EAST,

    /**
     * Horizontal text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    HORIZONTAL_TEXT_CURSOR,

    /**
     * Precise selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_CROSS,

    /**
     * Cursor with circle style
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_CIRCLE,

    /**
     * Loading state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    /**
     * Loading state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOADING,

    /**
     * Running state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    /**
     * Running state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RUNNING,

    /**
     * Scrolling east and west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 18 dynamic
     * @since 23 static
     */
    MIDDLE_BTN_EAST_WEST,

    /**
    * Left part of running state with dynamic cursor
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    RUNNING_LEFT = 45,

    /**
    * Right part of running state with dynamic cursor
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    RUNNING_RIGHT = 46,

    /**
    * Circular cursor
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    AECH_DEVELOPER_DEFINED_ICON = 47,

    /**
     * Screen recorder cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    SCREENRECORDER_CURSOR = 48,

    /**
    * Laser
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    LASER_CURSOR = 49,

    /**
    * Dot laser
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    LASER_CURSOR_DOT = 50,

    /**
    * Red dot laser
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    LASER_CURSOR_DOT_RED = 51,

    /**
    * Developer defined
    *
    * @syscap SystemCapability.MultimodalInput.Input.Pointer
    * @since 22 dynamic
    * @since 23 static
    */
    DEVELOPER_DEFINED_ICON = -100
  }

  /**
   * Mouse button.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum PrimaryButton {
    /**
     * Left mouse button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    LEFT = 0,
    /**
     * Right mouse button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    RIGHT = 1
  }

  /**
   * Enumerates shortcut menu triggering modes.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  enum RightClickType {
    /**
     * Tapping the right-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_RIGHT_BUTTON = 1,
    /**
     * Tapping the left-button area of the touchpad.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_LEFT_BUTTON = 2,
    /**
     * Tapping or pressing the touchpad with two fingers.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP = 3,
    /**
     * Touchpad two fingers tap or right button.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON = 4,

      /**
     * Touchpad two fingers tap or left button.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 20 dynamic
     * @since 23 static
     */
    TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON = 5,
  }

  /**
   * Pixel map resource.
   *
   * @interface CustomCursor
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CustomCursor {
    /**
     * Defines a custom cursor. The minimum size is subject to the minimum limit of the image. The maximum size is 256 x 256 px.
     * 
     * @type { image.PixelMap }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
    /**
     * Horizontal coordinate of the cursor focus. The coordinates are restricted by the size of the custom cursor. 
     * The minimum value is 0, and the maximum value is the maximum width of the image. The default value is 0 if the parameter is left empty.
     * 
     * @type { ?int }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusX?: int;
    /**
     * Vertical coordinate of the cursor focus. The coordinates are restricted by the size of the custom cursor. 
     * The minimum value is 0, and the maximum value is the maximum height of the image. The default value is 0 if the parameter is left empty.
     * 
     * @type { ?int }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    focusY?: int;
  }
  
  /**
   * Defines the custom cursor configuration.
   *
   * @interface CursorConfig
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  interface CursorConfig {
    /**
     * Whether to adjust the cursor size based on system settings. 
     * The value true means to adjust the cursor size based on system settings, and the value false means to use the custom cursor size. 
     * The adjustment range is [size of the cursor image, 256 x 256].
     * 
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15 dynamic
     * @since 23 static
     */
    followSystem : boolean;
  }

  /**
   * Sets the moving speed of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { number } speed - Moving speed of the mouse pointer. The value ranges from 1 to 20. The default value is 10.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Sets the moving speed of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { int } speed - Moving speed of the mouse pointer. The value ranges from 1 to 20. The default value is 10.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  function setPointerSpeed(speed: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the moving speed of the mouse pointer. This API uses a promise to return the result.
   *
   * @param { number } speed - Moving speed of the mouse pointer. The value ranges from 1 to 20. The default value is 10.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Sets the moving speed of the mouse pointer. This API uses a promise to return the result.
   *
   * @param { int } speed - Moving speed of the mouse pointer. The value ranges from 1 to 20. The default value is 10.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  function setPointerSpeed(speed: int): Promise<void>;

  /**
   * Sets the moving speed of the mouse pointer. This API returns the result synchronously.
   *
   * @param { int } speed - Moving speed of the mouse pointer. The value ranges from 1 to 20. The default value is 10.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSpeedSync(speed: int): void;

  /**
   * Obtains the moving speed of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Obtains the moving speed of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  function getPointerSpeed(callback: AsyncCallback<int>): void;

  /**
   * Obtains the moving speed of the mouse pointer. This API uses a promise to return the result.
   *
   * @returns { Promise<number> } Promise used to return the result.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Obtains the moving speed of the mouse pointer. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 23 static
   */
  function getPointerSpeed(): Promise<int>;

  /**
   * Obtains the moving speed of the mouse pointer. This API returns the result synchronously.
   * 
   * @returns { int } Returns the pointer speed through sync mode.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSpeedSync(): int;

  /**
   * Sets the mouse pointer style. This API uses an asynchronous callback to return the result.
   *
   * @param { int } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   * <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerStyle(windowId: int, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;

  /**
   * Sets the mouse pointer style. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   * <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function setPointerStyle(windowId: int, pointerStyle: PointerStyle): Promise<void>;

  /**
   * Sets the mouse pointer style. This API returns the result synchronously.
   *
   * @param { int } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [staticonly]
   * <br> When the windowId value is -1, the system permission is required to set the global style. [staticonly]
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerStyleSync(windowId: int, pointerStyle: PointerStyle): void;

  /**
   * Obtains the mouse pointer style. This API uses an asynchronous callback to return the result.
   *
   * @param { int } windowId - Window ID.
   * @param { AsyncCallback<PointerStyle> } callback - Callback used to return the mouse pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int, callback: AsyncCallback<PointerStyle>): void;

  /**
   * Obtains the mouse pointer style. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID. The value is an integer greater than or equal to -1. 
   * The value -1 indicates the global window.
   * @returns { Promise<PointerStyle> } Promise used to return the mouse pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function getPointerStyle(windowId: int): Promise<PointerStyle>;

  /**
   * Obtains the mouse pointer style, such as the east arrow, west arrow, south arrow, and north arrow. 
   * This API returns the result synchronously.
   *
   * @param { int } windowId - Window ID. The default value is -1, indicating the global mouse pointer style.
   * @returns { PointerStyle } Returns the pointerStyle.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerStyleSync(windowId: int): PointerStyle;

  /**
   * Sets the visible status of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } visible Whether the mouse pointer is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Sets the visible status of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } visible Whether the mouse pointer is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported;
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 18 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the visible status of the mouse pointer. This API uses a promise to return the result.
   *
   * @param { boolean } visible Whether the mouse pointer is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Sets the visible status of the mouse pointer. This API uses a promise to return the result.
   *
   * @param { boolean } visible Whether the mouse pointer is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported;
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 18 dynamic
   * @since 23 static
   */
  function setPointerVisible(visible: boolean): Promise<void>;

  /**
   * Sets the visible status of the mouse pointer. This API returns the result synchronously.
   *
   * @param { boolean } visible Whether the mouse pointer is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerVisibleSync(visible: boolean): void;

  /**
   * Checks the visible status of the mouse pointer. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the mouse pointer is visible, and the value false indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the visible status of the mouse pointer. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the visible status of the mouse pointer. 
   * The value true indicates that the mouse pointer is visible, and the value false indicates the opposite.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9 dynamic
   * @since 23 static
   */
  function isPointerVisible(): Promise<boolean>;

  /**
   * Obtains the visible status of the mouse pointer. This API returns the result synchronously.
   *
   * @returns { boolean } Visible status of the mouse pointer. 
   * The value true indicates that the mouse pointer is visible, and the value false indicates the opposite.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10 dynamic
   * @since 23 static
   */
  function isPointerVisibleSync(): boolean;

  /**
   * Sets the pointer color. This API uses an asynchronous callback to return the result.
   *
   * @param { int } color - Pointer color. The default value is black (0x000000).
   * @param { AsyncCallback<void> } callback - Callback used to return the result. 
   * If the operation is successful, err is undefined. Otherwise, err is an error object.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColor(color: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer color. This API uses a promise to return the result.
   *
   * @param { int } color - Pointer color. The default value is black (0x000000).
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColor(color: int): Promise<void>;

  /**
   * Sets the pointer color. This API returns the result synchronously.
   *
   * @param { int } color - Pointer color. The default value is black (0x000000).
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerColorSync(color: int): void;

  /**
   * Obtains the pointer color. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColor(callback: AsyncCallback<int>): void;

  /**
   * Obtains the pointer color. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColor(): Promise<int>;

  /**
   * Obtains the pointer color. This API returns the result synchronously.
   *
   * @returns { int } Pointer color.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerColorSync(): int;

  /**
   * Sets the pointer size. This API uses an asynchronous callback to return the result.
   *
   * @param { int } size - Pointer size. The value ranges from 1 to 7. The default value is 1.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. 
   * If the operation is successful, err is undefined. Otherwise, err is an error object.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSize(size: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer size. This API uses a promise to return the result.
   *
   * @param { int } size - Pointer size. The value ranges from 1 to 7. The default value is 1.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSize(size: int): Promise<void>;

  /**
   * Sets the pointer size. This API returns the result synchronously.
   *
   * @param { int } size - Pointer size. The value ranges from 1 to 7. The default value is 1.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setPointerSizeSync(size: int): void;

  /**
   * Obtains the pointer size. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSize(callback: AsyncCallback<int>): void;

  /**
   * Obtains the pointer size. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSize(): Promise<int>;

  /**
   * Obtains the pointer size. This API returns the result synchronously.
   *
   * @returns { int } Pointer size.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getPointerSizeSync(): int;

  /**
   * Sets the primary button of the mouse. This API uses an asynchronous callback to return the result.
   *
   * @param { PrimaryButton } primary - ID of the primary mouse button.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMousePrimaryButton(primary: PrimaryButton, callback: AsyncCallback<void>): void;

  /**
   * Sets the primary button of the mouse. This API uses a promise to return the result.
   *
   * @param { PrimaryButton } primary - ID of the primary mouse button.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMousePrimaryButton(primary: PrimaryButton): Promise<void>;

  /**
   * Obtains the primary button of the mouse. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<PrimaryButton> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMousePrimaryButton(callback: AsyncCallback<PrimaryButton>): void;

  /**
   * Obtains the primary button of the mouse. This API uses a promise to return the result.
   *
   * @returns { Promise<PrimaryButton> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMousePrimaryButton(): Promise<PrimaryButton>;

  /**
   * Sets the status of the mouse hover scroll switch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Status of the mouse hover scroll switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setHoverScrollState(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the status of the mouse hover scroll switch. This API uses a promise to return the result.
   *
   * @param { boolean } state - Status of the mouse hover scroll switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setHoverScrollState(state: boolean): Promise<void>;

  /**
   * Obtains the status of the mouse hover scroll switch. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Obtains the status of the mouse hover scroll switch. 
   * This API uses an asynchronous callback to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getHoverScrollState(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the status of the mouse hover scroll switch. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getHoverScrollState(): Promise<boolean>;

  /**
   * Sets the number of mouse scroll rows. This API uses an asynchronous callback to return the result.
   *
   * @param { int } rows - Number of mouse scroll rows. The value ranges from 1 to 100. The default value is 3.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMouseScrollRows(rows: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the number of mouse scroll rows. This API uses a promise to return the result.
   *
   * @param { int } rows - Number of mouse scroll rows. The value ranges from 1 to 100. The default value is 3.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setMouseScrollRows(rows: int): Promise<void>;

  /**
   * Obtains the number of mouse scroll rows. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMouseScrollRows(callback: AsyncCallback<int>): void;

  /**
   * Obtains the moving speed of the mouse pointer. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getMouseScrollRows(): Promise<int>;

  /**
   * Sets the scroll switch of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Scroll switch status. The value true indicates that the switch is enabled, 
   * and the value false indicates the opposite. The default value is true.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the scroll switch of the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } state - Scroll switch status. The value true indicates that the switch is enabled, 
   * and the value false indicates the opposite. The default value is true.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollSwitch(state: boolean): Promise<void>;

  /**
   * Obtains the scroll switch status of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the scroll switch status of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollSwitch(): Promise<boolean>;

  /**
   * Sets the scroll direction of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Scroll direction of the touchpad. 
   * The value true indicates that the scroll direction is the same as the finger moving direction, and the value false indicates the opposite.
   * The default value is true.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollDirection(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the scroll direction of the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } state - Scroll direction of the touchpad. 
   * The value true indicates that the scroll direction is the same as the finger moving direction, and the value false indicates the opposite.
   * The default value is true.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadScrollDirection(state: boolean): Promise<void>;

  /**
   * Obtains the scroll direction of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the scroll direction is the same as the finger moving direction, and the value false indicates the opposite. 
   * The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollDirection(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the scroll direction of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the scroll direction is the same as the finger moving direction, and the value false indicates the opposite. 
   * The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadScrollDirection(): Promise<boolean>;

  /**
   * Sets the tap switch of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Tap switch status of the touchpad The value true indicates that the switch is enabled, 
   * and the value false indicates the opposite. The default value is true.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadTapSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the tap switch of the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } state - Tap switch status of the touchpad. The value true indicates that the switch is enabled, 
   * and the value false indicates the opposite. The default value is true.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadTapSwitch(state: boolean): Promise<void>;

  /**
   * Obtains the tap switch status of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadTapSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the tap switch status of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadTapSwitch(): Promise<boolean>;

  /**
   * Sets the mouse pointer moving speed of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { int } speed - Mouse pointer moving speed of the touchpad. The value range is [1,11]. The default value is 6.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPointerSpeed(speed: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the mouse pointer moving speed of the touchpad. This API uses a promise to return the result.
   *
   * @param { int } speed - Mouse pointer moving speed of the touchpad. The value range is [1,11]. The default value is 6.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPointerSpeed(speed: int): Promise<void>;

  /**
   * Obtains the mouse pointer moving speed of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPointerSpeed(callback: AsyncCallback<int>): void;

  /**
   * Obtains the mouse pointer moving speed of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPointerSpeed(): Promise<int>;

  /**
   * Sets the pinch switch of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Pinch switch status of the touchpad. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPinchSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the pinch switch of the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } state - Pinch switch status of the touchpad. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadPinchSwitch(state: boolean): Promise<void>;

  /**
   * Obtains the pinch switch status of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
  */
  function getTouchpadPinchSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the pinch switch status of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadPinchSwitch(): Promise<boolean>;

  /**
   * Sets the multi-finger swipe switch of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } state - Swipe switch status of the touchpad. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadSwipeSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the swipe switch of the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } state - Swipe switch status of the touchpad. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadSwipeSwitch(state: boolean): Promise<void>;
 
  /**
   * Obtains the multi-finger swipe switch status of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadSwipeSwitch(callback: AsyncCallback<boolean>): void;
 
  /**
   * Obtains the multi-finger swipe switch status of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite. The default value is true.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadSwipeSwitch(): Promise<boolean>;

  /**
   * Sets the shortcut menu type of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { RightClickType } type - Shortcut menu type of the touchpad.
    - TOUCHPAD_RIGHT_BUTTON: Tapping the right-button area of the touchpad.
    - TOUCHPAD_LEFT_BUTTON: Tapping the left-button area of the touchpad.
    - TOUCHPAD_TWO_FINGER_TAP: Tapping or pressing the touchpad with two fingers.
    - TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON: Tapping or pressing the touchpad with two fingers, or tapping the right-button area of the touchpad.
    - TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON: Tapping or pressing the touchpad with two fingers, or tapping the left-button area of the touchpad.
   * The default value is TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadRightClickType(type: RightClickType, callback: AsyncCallback<void>): void;

  /**
   * Sets the shortcut menu type of the touchpad. This API uses a promise to return the result.
   *
   * @param { RightClickType } type - Shortcut menu type of the touchpad.
    - TOUCHPAD_RIGHT_BUTTON: Tapping the right-button area of the touchpad.
    - TOUCHPAD_LEFT_BUTTON: Tapping the left-button area of the touchpad.
    - TOUCHPAD_TWO_FINGER_TAP: Tapping or pressing the touchpad with two fingers.
    - TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON: Tapping or pressing the touchpad with two fingers, or tapping the right-button area of the touchpad.
    - TOUCHPAD_TWO_FINGER_TAP_OR_LEFT_BUTTON: Tapping or pressing the touchpad with two fingers, or tapping the left-button area of the touchpad.
   * The default value is TOUCHPAD_TWO_FINGER_TAP_OR_RIGHT_BUTTON.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setTouchpadRightClickType(type: RightClickType): Promise<void>;

  /**
   * Obtains the shortcut menu type of the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<RightClickType> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadRightClickType(callback: AsyncCallback<RightClickType>): void;

  /**
   * Obtains the shortcut menu type of the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<RightClickType> } Promise used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getTouchpadRightClickType(): Promise<RightClickType>;

  /**
   * Sets the custom cursor style. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID.
   * @param { image.PixelMap } pixelMap - Pixel map resource.
   * @param { int } focusX - Focus x of the custom cursor. The value is greater than or equal to 0. The default value is 0.
   * @param { int } focusY - Focus y of the custom cursor. The value is greater than or equal to 0. The default value is 0.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursor(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): Promise<void>;

  /**
   * Sets a custom cursor. This API returns the result synchronously.
   *
   * @param { int } windowId - Window ID. The value must be an integer greater than 0.
   * @param { image.PixelMap } pixelMap - Pixel map resource.
   * @param { int } focusX - Focus x of the custom cursor. The value is greater than or equal to 0. The default value is 0.
   * @param { int } focusY - Focus y of the custom cursor. The value is greater than or equal to 0. The default value is 0.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11 dynamic
   * @since 23 static
   */
  function setCustomCursorSync(windowId: int, pixelMap: image.PixelMap, focusX?: int, focusY?: int): void;

  /**
   * Sets the custom cursor style. This API uses a promise to return the result. 
   * The cursor may be switched back to the system style in the following cases: application window layout change, hot zone switching, 
   * page redirection, moving of the cursor out of the window and then back to the window, or moving of the cursor in different areas of the window. 
   * In this case, you need to reset the cursor style.
   *
   * @param { int } windowId - Window ID.
   * @param { CustomCursor } cursor - Pixel map resource.
   * @param { CursorConfig } config - Custom cursor configuration, which specifies whether to adjust the cursor size based on system settings. 
   * If followSystem in CursorConfig is set to true, the supported adjustment range is [size of the cursor image, 256 x 256].
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Abnormal windowId parameter passed in;
   * <br>2. Abnormal pixelMap parameter passed in; 3. Abnormal focusX parameter passed in;
   * <br>4. Abnormal focusY parameter passed in.
   * @throws { BusinessError } 26500001 - Invalid windowId. Possible causes: The window id does not belong to the current process.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15 dynamic
   * @since 23 static
   */
  function setCustomCursor(windowId: int, cursor: CustomCursor, config: CursorConfig): Promise<void>;

  /**
   * Sets the double-tap and drag switch for the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isOpen - Status of the double-tap and drag switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the double-tap and drag switch for the touchpad. This API uses a promise to return the result.
   *
   * @param { boolean } isOpen - Status of the double-tap and drag switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean): Promise<void>;

  /**
   * Obtains the status of the double-tap and drag switch for the touchpad. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the status of the double-tap drag switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getTouchpadDoubleTapAndDragState(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the status of the double-tap and drag switch for the touchpad. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the status of the touchpad double-tap drag switch. 
   * The value true indicates that the switch is enabled, and the value false indicates the opposite.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getTouchpadDoubleTapAndDragState(): Promise<boolean>;

  /**
   * Set whether to invert the scroll value of the events reported during mouse wheel scrolling.
   *     {@code true} means consistent with the value reported by the mouse device, {@code false} means inverted.
   * 
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @param { boolean } inverted - Indicates whether to invert. 
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 24 dynamic&static
   */
  function setMouseScrollDirection(inverted: boolean): Promise<void>;

  /**
   * Query whether to invert the scroll value of the events reported during mouse wheel scrolling.
   * 
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER 
   * @returns { Promise<boolean> } Promise used to return the result.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 24 dynamic&static
   */
  function getMouseScrollDirection(): Promise<boolean>;
}
export default pointer;