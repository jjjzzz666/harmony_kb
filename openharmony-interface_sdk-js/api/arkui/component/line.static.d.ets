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
import { CommonShapeMethod, CommonMethod, AttributeModifier } from "./common";
import { Length } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Defines the Shape Point, the first element is the x-axis offset and the second is the y-axis.
 *
 * @typedef { [Length, Length] } ShapePoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export type ShapePoint = [
    Length,
    Length
];

/**
 * Defines Line constructor options.
 *
 * @interface LineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface LineOptions {
    /**
     * Width of the rectangle where the line resides.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Height of the rectangle where the line resides.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
}

/**
 * Provides attribute for Line.
 *
 * @extends CommonShapeMethod
 * @interface LineAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LineAttribute extends CommonShapeMethod {
    /**
     * Coordinate of the start point of the line (relative coordinate).
     *
     * @param { ShapePoint | undefined } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default startPoint(value: ShapePoint | undefined): this;
    /**
     * Line end coordinates (relative coordinates).
     *
     * @param { ShapePoint | undefined } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default endPoint(value: ShapePoint | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Line is returned when the parameter is transferred.
 *
 * @param { LineOptions } [options] - The options to create a Line
 * @returns { LineAttribute } The attribute of the Line.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Line(
    options?: LineOptions
): LineAttribute
