/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';

/**
 * This module provides functionality for component coordinates and sizes.
 * @namespace componentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * This module provides functionality for component coordinates and sizes.
 * @namespace componentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * This module provides functionality for component coordinates and sizes.
 * @namespace componentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace componentUtils {

  /**
  * Component information.
  * @typedef ComponentInfo
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Component information.
  * @typedef ComponentInfo
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Component information.
  * @typedef ComponentInfo
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface ComponentInfo {

    /**
    * component size.
    * @type {Size}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * component size.
    * @type {Size}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * component size.
    * @type {Size}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    size: Size

    /**
    * Obtain attribute information relative to the local.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information relative to the local.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information relative to the local.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    localOffset: Offset

    /**
    * Obtain attribute information relative to the window.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information relative to the window.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information relative to the window.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    windowOffset: Offset

    /**
    * Obtain attribute information relative to the screen.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information relative to the screen.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information relative to the screen.
    * @type {Offset}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    screenOffset: Offset

    /**
    * Obtain attribute information for translation.
    * @type {TranslateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information for translation.
    * @type {TranslateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information for translation.
    * @type {TranslateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    translate: TranslateResult

    /**
    * Obtain attribute information for scale.
    * @type {ScaleResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information for scale.
    * @type {ScaleResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information for scale.
    * @type {ScaleResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    scale: ScaleResult

    /**
    * Obtain attribute information for rotate.
    * @type {RotateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information for rotate.
    * @type {RotateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information for rotate.
    * @type {RotateResult}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    rotate: RotateResult

    /**
    * Obtain attribute information of the transformation matrix.
    * @type {Matrix4Result}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Obtain attribute information of the transformation matrix.
    * @type {Matrix4Result}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Obtain attribute information of the transformation matrix.
    * @type {Matrix4Result}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    transform: Matrix4Result
  }

  /**
  * Defines the size property.
  * @typedef Size
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Defines the size property.
  * @typedef Size
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Defines the size property.
  * @typedef Size
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface Size {

    /**
    * Defines the width property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Defines the width property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Defines the width property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    width: number

    /**
    * Defines the height property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Defines the height property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Defines the height property.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    height: number
  }

  /**
  * Defines the offset property.
  * @typedef Offset
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Defines the offset property.
  * @typedef Offset
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Defines the offset property.
  * @typedef Offset
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface Offset {

    /**
    * Coordinate x of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Coordinate x of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Coordinate x of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    x: number

    /**
    * Coordinate y of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Coordinate y of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Coordinate y of the Position.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    y: number
  }

  /**
  * Translation Result
  * @typedef TranslateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Translation Result
  * @typedef TranslateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Translation Result
  * @typedef TranslateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface TranslateResult {

    /**
    * Indicates the translation distance of the x-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Indicates the translation distance of the x-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Indicates the translation distance of the x-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    x: number

    /**
    * Indicates the translation distance of the y-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Indicates the translation distance of the y-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Indicates the translation distance of the y-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    y: number

    /**
    * Indicates the translation distance of the z-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Indicates the translation distance of the z-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Indicates the translation distance of the z-axis, in vp.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    z: number
  }

  /**
  * Scale Result
  * @typedef ScaleResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Scale Result
  * @typedef ScaleResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Scale Result
  * @typedef ScaleResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface ScaleResult {

    /**
    * Zoom factor of the x-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Zoom factor of the x-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Zoom factor of the x-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    x: number

    /**
    * Zoom factor of the y-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Zoom factor of the y-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Zoom factor of the y-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    y: number

    /**
    * Zoom factor of the z-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Zoom factor of the z-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Zoom factor of the z-axis.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    z: number

    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    centerX: number

    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    centerY: number
  }

  /**
  * Rotation Result.
  * @typedef RotateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * Rotation Result.
  * @typedef RotateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * Rotation Result.
  * @typedef RotateResult
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  interface RotateResult {

    /**
    * Axis of rotation vector x coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Axis of rotation vector x coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Axis of rotation vector x coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    x: number

    /**
    * Axis of rotation vector y coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Axis of rotation vector y coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Axis of rotation vector y coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    y: number

    /**
    * Axis of rotation vector z coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Axis of rotation vector z coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Axis of rotation vector z coordinate.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    z: number

    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Transform the x-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    centerX: number

    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Transform the y-axis coordinate of the center point.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    centerY: number

    /**
    * Rotation angle.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * Rotation angle.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * Rotation angle.
    * @type {number}
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    angle: number
  }

  /**
  * The matrix is column-first fourth-order matrix.
  * @typedef { [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number,] } Matrix4Result
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * The matrix is column-first fourth-order matrix.
  * @typedef { [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number,] } Matrix4Result
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * The matrix is column-first fourth-order matrix.
  * @typedef { [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number,] } Matrix4Result
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
  type Matrix4Result = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];

  /**
   * Describes a rotation in 2D, which can be defined by rotation angle and rotation center.
   *
   * @typedef Rotation2D
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface Rotation2D {
    /**
     * Rotation angle Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    angle: double;
    /**
     * Rotation centerX Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerX: double;
    /**
     * Rotation centerY Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerY: double;
  }

  /**
   * Image object with layout information.
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageItem {
    /**
     * Image Decoding Information.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image: image.PixelMap;

    /**
     * Information about the position and size of the box which displays the image.
     *
     * @type { common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rect: common2D.Rect;

    /**
     * Information about the rotation of the box which displays the image.
     *
     * @type { ?Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rotation?: Rotation2D;

    /**
     * Information about image rendering hierarchy.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    zIndex: int;
  }

  /**
   * Image options setted when need to get the image objects.
   *
   * @interface GetItemsInShapePathParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GetItemsInShapePathParams {
    /**
     * image information.
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    images: Array<ImageItem>;

    /**
     * Indicates the path points information.
     *
     * @type { Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    shapePath: Array<common2D.Point>;

    /**
     * The proportion of non-transparent blank pixels in the selected area
     * relative to the total pixels of the image. Default value is 0.15.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    ratio?: double;
   }

  /**
   * Get the image objects located within the selected area.
   *
   * @param { GetItemsInShapePathParams } value - options to get images in shapePath.
   * @returns { Array<ImageItem> } Returns the image objects located within the selected area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;

  /**
  * Provide the ability to obtain the coordinates and size of component drawing areas.
  * @param {string} id - component id.
  * @returns {ComponentInfo} the object of ComponentInfo.
  * @throws { BusinessError } 100001 - UI execution context not found.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 10
  */
  /**
  * Provide the ability to obtain the coordinates and size of component drawing areas.
  * @param {string} id - component id.
  * @returns {ComponentInfo} the object of ComponentInfo.
  * @throws { BusinessError } 100001 - UI execution context not found.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 11 dynamiconly
  * @deprecated since 18
  * @useinstead ohos.arkui.UIContext.ComponentUtils#getRectangleById
  */
  function getRectangleById(id: string): ComponentInfo;
}

export default componentUtils;