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
import { LengthMetricsUnit } from '../Graphics';
import { AttributeModifier, CommonMethod } from './common';

/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Matrix2D {
    /**
     * Get the horizontal zoom.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get scaleX(): double | undefined;
    /**
     * Set the horizontal zoom.
     *
     * @param { double | undefined } scaleX - The horizontal zoom.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set scaleX(scaleX: double | undefined);
    /**
     * Get the vertical zoom.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get scaleY(): double | undefined;
    /**
     * Set the vertical zoom.
     *
     * @param { double | undefined } scaleY - The vertical zoom.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set scaleY(scaleY: double | undefined);
    /**
     * Get the horizontal tilt.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get rotateX(): double | undefined;
    /**
     * Set the horizontal tilt.
     *
     * @param { double | undefined } rotateX - The horizontal tilt.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set rotateX(rotateX: double | undefined);
    /**
     * Get the vertical tilt.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get rotateY(): double | undefined;
    /**
     * Set the vertical tilt.
     *
     * @param { double | undefined } rotateY - The vertical tilt.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set rotateY(rotateY: double | undefined);
    /**
     * Get the horizontal movement.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get translateX(): double | undefined;
    /**
     * Set the horizontal movement.
     *
     * @param { double | undefined } translateX - The horizontal movement.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set translateX(translateX: double | undefined);
    /**
     * Get the vertical movement.
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get translateY(): double | undefined;
    /**
     * Set the vertical movement.
     *
     * @param { double | undefined } translateY - The vertical movement.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    set translateY(translateY: double | undefined);
    /**
     * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
     * translation scaling effect)
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    identity(): Matrix2D;
    /**
     * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
     * is the opposite effect of the original)
     *
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    invert(): Matrix2D;
    /**
     * Adds the rotation effect of the X and Y axes to the current matrix.
     *
     * @param { double } degree - The rotation angle, clockwise in radians.
     * @param { double } [rx] - Rotation effect of the X-axis
     * @param { double } [ry] - Rotation effect of the Y-axis
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rotate(degree: double, rx?: double, ry?: double): Matrix2D;
    /**
     * Adds the translation effect of the X and Y axes to the current matrix.
     *
     * @param { double } [tx] - X-axis translation effect
     * @param { double } [ty] - Y-axis translation effect
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    translate(tx?: double, ty?: double): Matrix2D;
    /**
     * Adds the scaling effect of the X and Y axes to the current matrix.
     *
     * @param { double } [sx] - X-axis scaling effect
     * @param { double } [sy] - Y-axis scaling effect
     * @returns { Matrix2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scale(sx?: double, sy?: double): Matrix2D;
    /**
     * Constructs a 2D change matrix object. The default value is the unit matrix.
     *
     * @param { LengthMetricsUnit } [unit] - the unit mode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(unit?: LengthMetricsUnit);
}
