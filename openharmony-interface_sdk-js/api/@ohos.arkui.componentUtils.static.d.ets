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
 * @since 23 static
 */
declare namespace componentUtils {
    
    
    /**
    * Component information.
    * @typedef ComponentInfo
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface ComponentInfo {
        
        
        /**
        * component size.
        * @type {Size}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        size: Size;
        
        
        /**
        * Obtain attribute information relative to the local.
        * @type {Offset}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        localOffset: Offset;
        
        
        /**
        * Obtain attribute information relative to the window.
        * @type {Offset}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        windowOffset: Offset;
        
        
        /**
        * Obtain attribute information relative to the screen.
        * @type {Offset}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        screenOffset: Offset;
        
        
        /**
        * Obtain attribute information for translation.
        * @type {TranslateResult}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        translate: TranslateResult;
        
        
        /**
        * Obtain attribute information for scale.
        * @type {ScaleResult}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        scale: ScaleResult;
        
        
        /**
        * Obtain attribute information for rotate.
        * @type {RotateResult}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        rotate: RotateResult;
        
        
        /**
        * Obtain attribute information of the transformation matrix.
        * @type {Matrix4Result}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        transform: Matrix4Result;
    }
    
    
    /**
    * Defines the size property.
    * @typedef Size
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface Size {
        
        
        /**
        * Defines the width property.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        width: double;
        
        
        /**
        * Defines the height property.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        height: double;
    }
    
    
    /**
    * Defines the offset property.
    * @typedef Offset
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface Offset {
        
        
        /**
        * Coordinate x of the Position.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        x: double;
        
        
        /**
        * Coordinate y of the Position.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        y: double;
    }
    
    
    /**
    * Translation Result
    * @typedef TranslateResult
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface TranslateResult {
        
        
        /**
        * Indicates the translation distance of the x-axis, in vp.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        x: double;
        
        
        /**
        * Indicates the translation distance of the y-axis, in vp.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        y: double;
        
        
        /**
        * Indicates the translation distance of the z-axis, in vp.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        z: double;
    }
    
    
    /**
    * Scale Result
    * @typedef ScaleResult
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface ScaleResult {
        
        
        /**
        * Zoom factor of the x-axis.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        x: double;
        
        
        /**
        * Zoom factor of the y-axis.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        y: double;
        
        
        /**
        * Zoom factor of the z-axis.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        z: double;
        
        
        /**
        * Transform the x-axis coordinate of the center point.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        centerX: double;
        
        
        /**
        * Transform the y-axis coordinate of the center point.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        centerY: double;
    }
    
    
    /**
    * Rotation Result.
    * @typedef RotateResult
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export interface RotateResult {
        
        
        /**
        * Axis of rotation vector x coordinate.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        x: double;
        
        
        /**
        * Axis of rotation vector y coordinate.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        y: double;
        
        
        /**
        * Axis of rotation vector z coordinate.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        z: double;
        
        
        /**
        * Transform the x-axis coordinate of the center point.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        centerX: double;
        
        
        /**
        * Transform the y-axis coordinate of the center point.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        centerY: double;
        
        
        /**
        * Rotation angle.
        * @type {double}
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 23 static
        */
        angle: double;
    }
    
    
    /**
    * The matrix is column-first fourth-order matrix.
    * @typedef { [double, double, double, double, double, double, double, double, double, double, double, double,
    * double, double, double, double] } Matrix4Result
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    export type Matrix4Result = [
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double
    ];

    /**
     * Describes a rotation in 2D, which can be defined by rotation angle and rotation center.
     * @typedef Rotation2D
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    interface Rotation2D {
        /**
         * Rotation angle Information.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        angle: double;
        /**
         * Rotation centerX Information.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        centerX: double;
        /**
         * Rotation centerY Information.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
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
      * @since 23 static
      */
    interface ImageItem {
        /**
         * Image Decoding Information.
         *
         * @type { image.PixelMap }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        image: image.PixelMap;

        /**
         * Information about the position and size of the box which displays the image.
         *
         * @type { common2D.Rect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        rect: common2D.Rect;

        /**
         * Information about the rotation of the box which displays the image.
         *
         * @type { ?Rotation2D }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        rotation?: Rotation2D;

        /**
         * Information about image rendering hierarchy.
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
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
     * @since 23 static
     */
    interface GetItemsInShapePathParams {
        /**
         * image information.
         *
         * @type { Array<ImageItem> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        images: Array<ImageItem>;

        /**
         * Indicates the path points information.
         *
         * @type { Array<common2D.Point> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
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
         * @since 23 static
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
     * @since 23 static
     */
    function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;
}
export default componentUtils;
