/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */
/**
 * The date structure that provides the basis for graphics.
 *
 * @namespace common2D
 * @syscap SystemCapability.Graphics.Drawing
 * @since 11
 */
/**
 * The date structure that provides the basis for graphics.
 *
 * @namespace common2D
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform
 * @since 20 dynamic
 */

/**
 * The date structure that provides the basis for graphics.
 *
 * @namespace common2D
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare namespace common2D {
  /**
   * Describes a color in ARGB format.
   * @typedef Color
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Describes a color in ARGB format.
   * @typedef Color
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Describes a color in ARGB format.
   * @typedef Color
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface Color {
    /**
     * Alpha component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Alpha component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Alpha component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    alpha: int;
    /**
     * Red component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Red component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Red component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    red: int;
    /**
     * Green component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Green component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Green component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    green: int;
    /**
     * Blue component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Blue component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Blue component of the color. The value is an integer ranging from 0 to 255.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    blue: int;
  }

  /**
   * Describes a rectangle, which can be defined by two coordinate points: upper left corner point and lower right corner point.
   * @typedef Rect
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Describes a rectangle, which can be defined by two coordinate points: upper left corner point and lower right corner point.
   * @typedef Rect
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Describes a rectangle, which can be defined by two coordinate points: upper left corner point and lower right corner point.
   * @typedef Rect
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * X coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * X coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * X coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    left: double;
    /**
     * Y coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Y coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Y coordinate of the upper left corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * X coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * X coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * X coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    right: double;
    /**
     * Y coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Y coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Y coordinate of the lower right corner of the rectangle. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    bottom: double;
  }

  /**
   * Describes a coordinate point.
   * @typedef Point
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Describes a coordinate point.
   * @typedef Point
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Describes a coordinate point.
   * @typedef Point
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * Horizontal coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Horizontal coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Horizontal coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Vertical coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Vertical coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    /**
     * Vertical coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    y: double;
  }

  /**
   * Describes a 3D coordinate point.
   *
   * @typedef Point3d
   * @extends Point
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Describes a 3D coordinate point.
   *
   * @typedef Point3d
   * @extends Point
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface Point3d extends Point {
    /**
     * Z-axis coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Z-axis coordinate. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    z: double;
  }
  
  /**
   * Provide a color with an ARGB structure described by floating point numbers.
   * @typedef Color4f
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color4f {
    /**
     * Alpha component of color, represented as a floating point number between 0 and 1.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
    /**
     * Red component of color, represented as a floating point number between 0 and 1.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;
    /**
     * Green component of color, represented as a floating point number between 0 and 1.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;
    /**
     * Blue component of color, represented as a floating point number between 0 and 1.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;
  }
}

export default common2D;