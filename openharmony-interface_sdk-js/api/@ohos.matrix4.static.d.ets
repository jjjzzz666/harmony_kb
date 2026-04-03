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

/**
 * Used to do matrix operations
 *
 * @namespace matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace matrix4 {

    /**
     * Set translation parameters
     *
     * @interface TranslateOption
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface TranslateOption {

        /**
         * Indicates the translation distance of the x-axis, in px.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        x?: double;

        /**
         * Indicates the translation distance of the y-axis, in px.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        y?: double;

        /**
         * Indicates the translation distance of the z-axis, in px.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        z?: double;
    }

    /**
     * Set scaling parameters
     *
     * @interface ScaleOption
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface ScaleOption {

        /**
         * Zoom factor of the x-axis.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        x?: double;
        
        
        /**
         * Zoom factor of the y-axis.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        y?: double;

        /**
         * Zoom factor of the z-axis.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        z?: double;
        
        
        /**
         * Transform the x-axis coordinate of the center point.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        centerX?: double;

        /**
         * Transform the y-axis coordinate of the center point.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        centerY?: double;
    }

    /**
     * Set Rotation Parameters.
     *
     * @interface RotateOption
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface RotateOption {

        /**
         * Axis of rotation vector x coordinate.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        x?: double;

        /**
         * Axis of rotation vector y coordinate.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        y?: double;

        /**
         * Axis of rotation vector z coordinate.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        z?: double;

        /**
         * Transform the x-axis coordinate of the center point.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        centerX?: double;

        /**
         * Transform the y-axis coordinate of the center point.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        centerY?: double;

        /**
         * Rotation angle.
         *
         * @type { ?double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        angle?: double;
    }
    /**
     * Set poly to poly point.
     *
     * @interface Point
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface Point {
        /**
         * Point x.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        x: double;
        /**
         * Point y.
         *
         * @type { double }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        y: double;
    }
    /**
     * Set poly to poly point options.
     *
     * @interface PolyToPolyOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface PolyToPolyOptions {
        /**
         * Array of point coordinates for the source polygon.
         *
         * @type { Array<Point> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        src: Array<Point>;
        /**
         * Start point index of the source polygon, which defaults to 0.
         * @type { ?int }
         * @default 0
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        srcIndex?: int;
        /**
         * Array of point coordinates for the target polygon.
         *
         * @type { Array<Point> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        dst: Array<Point>;
        /**
         * Start index of the target polygon, which defaults to 0.
         *
         * @type { ?int }
         * @default src.Length/2
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        dstIndex?: int;
        /**
         * The number of points to be used.
         * If it is 0, it returns the identity matrix.
         * If it is 1, it returns a translation matrix that changed before two points.
         * If it is 2-4, it returns a transformation matrix.
         * @type { ?int }
         * @default 0
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        pointCount?: int;
    }
    
    
    /**
     * Matrix4Transit.
     *
     * @interface Matrix4Transit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    export interface Matrix4Transit {
        
        
        /**
         * Copy function of Matrix, which can copy a copy of the current matrix object.
         *
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        copy(): Matrix4Transit;
        
        
        /**
         * The inverse function of Matrix returns an inverse matrix of the current matrix object
         * That is, the effect is exactly the opposite.
         *
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        invert(): Matrix4Transit;
        
        
        /**
         * Matrix superposition function
         * Which can superpose the effects of two matrices to generate a new matrix object.
         *
         * @param { Matrix4Transit } options
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        combine(options: Matrix4Transit): Matrix4Transit;
        
        
        /**
         * Matrix translation function
         * Which can add the x-axis, Y-axis, or Z-axis translation effect to the current matrix.
         *
         * @param { TranslateOption } options
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        translate(options: TranslateOption): Matrix4Transit;
        
        
        /**
         * Scaling function of the Matrix
         * Which can add the x-axis, Y-axis, or Z-axis scaling effect to the current matrix.
         *
         * @param { ScaleOption } options
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        scale(options: ScaleOption): Matrix4Transit;
        /**
         * Skew function of the Matrix, which can add the x-axis, y-axis skew effect to the current matrix.
         * Skew function takes a generic point with coordinates (x0, y0, z0) to the point (x0 + x*y0, y0 + y*x0, z0),
         * where x, y are fixed parameters, called the shear factors.
         *
         * @param { double } x - the shear factor of x-axis.
         * @param { double } y - the shear factor of y-axis.
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        skew(x: double, y: double): Matrix4Transit;
        
        
        /**
         * Rotation function of the Matrix.
         * You can add the x-axis, Y-axis, or Z-axis rotation effect to the current matrix.
         *
         * @param { RotateOption } options
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        rotate(options: RotateOption): Matrix4Transit;
        
        
        /**
         * Matrix coordinate point conversion function
         * Which can apply the current transformation effect to a coordinate point.
         *
         * @param { [double, double] } options
         * @returns { [double, double] } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        transformPoint(options: [
            double,
            double
        ]): [
            double,
            double
        ];
        /**
         * Sets matrix to map src to dst.
         *
         * @param { PolyToPolyOptions } options - polyToPoly options
         * @returns { Matrix4Transit } Return to Matrix4Transit
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit;
    }
    
    
    
    /**
     * Constructor of Matrix, which can create a fourth-order matrix based on the input parameters.
     * The matrix is column-first.
     *
     * @param { [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number,number] } options
     * options indicates a fourth-order matrix
     * The default value：
     * [1, 0, 0, 0,
     * 0, 1, 0, 0,
     * 0, 0, 1, 0,
     * 0, 0, 0, 1]
     * Fourth-order matrix notes:
     * m00 { double } -The x-axis scale value, the identity matrix defaults to 1.
     * m01 { double } -The second value, the rotation and skew of the xyz axis affects this value.
     * m02 { double } -The third value, the rotation of the xyz axis affects this value.
     * m03 { double } -The fourth value, the perspective projection affects this value.
     * m10 { double } -The fifth value, the rotation and skew of the xyz axis affects this value.
     * m11 { double } -The y-axis scales the value, and the identity matrix defaults to 1.
     * m12 { double } -The 7th value, the rotation of the xyz axis affects this value.
     * m13 { double } -The 8th value, the perspective projection affects this value.
     * m20 { double } -The 9th value, the rotation of the xyz axis affects this value.
     * m21 { double } -The 10th value, xyz axis rotation affects this value.
     * m22 { double } -The z-axis scale value, the identity matrix defaults to 1.
     * m23 { double } -The 12th value, the perspective projection affects this value.
     * m30 { double } -The x-axis translation value in px, the identity matrix defaults to 0.
     * m31 { double } -Y-axis translation value, in px, the identity matrix defaults to 0.
     * m32 { double } -The z-axis translation value in px, the identity matrix defaults to 0.
     * m33 { double } -It takes effect in homogeneous coordinates to produce a perspective projection effect.
     * @returns { Matrix4Transit } Return to Matrix4Transit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    function init(options: [
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
    ]): Matrix4Transit;
    
    
    /**
     * Matrix initialization function, which can return an identity matrix object.
     *
     * @returns { Matrix4Transit } Return to Matrix4Transit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    function identity(): Matrix4Transit;
}
export default matrix4;
