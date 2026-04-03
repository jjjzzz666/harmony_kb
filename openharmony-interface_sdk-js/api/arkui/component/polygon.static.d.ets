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
import { CommonShapeMethod, AttributeModifier, CommonMethod } from "./common";
import { ShapePoint } from "./line";
import { ComponentBuilder, CustomBuilder } from './builder';
import { Length } from './units';

/**
 * Define options used to construct a polygon.
 *
 * @interface PolygonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PolygonOptions {
    /**
     * Polygon width.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Polygon height.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
}

/**
 * Provides attribute for Polygon.
 *
 * @extends CommonShapeMethod
 * @interface PolygonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PolygonAttribute extends CommonShapeMethod {
    /**
     * Called when the vertex coordinate list of a polygon is set.
     *
     * @param { Array<ShapePoint> | undefined } value
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default points(value: Array<ShapePoint> | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Polygon is returned when the parameter is transferred.
 *
 * @param { PolygonOptions } [options] - The options to create a Polygon.
 * @returns { PolygonAttribute } The attribute of the Polygon.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Polygon(
    options?: PolygonOptions
): PolygonAttribute
