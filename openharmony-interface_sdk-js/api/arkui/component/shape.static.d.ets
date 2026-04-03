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
import { CommonMethod, PixelMap, AttributeModifier } from "./common";
import { ResourceColor, Length } from "./units";
import { Resource } from '../../global/resource';
import { LineCapStyle, LineJoinStyle } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Viewport bounding box.
 *
 * @interface ViewportRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ViewportRect {
    /**
     * Viewport X coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    x?: Length;
    /**
     * Viewport Y coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    y?: Length;
    /**
     * Viewport width.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Viewport height.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
}

/**
 * Provides attribute for Shape.
 * @extends CommonMethod
 * @interface ShapeAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ShapeAttribute extends CommonMethod {
    /**
     * Viewport of shape
     *
     * @param { ViewportRect | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default viewPort(value: ViewportRect | undefined): this;
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stroke(value: ResourceColor | undefined): this;
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fill(value: ResourceColor | undefined): this;
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { Length | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeDashOffset(value: Length | undefined): this;
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<Length> | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeDashArray(value: Array<Length> | undefined): this;
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { Length | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeMiterLimit(value: Length | undefined): this;
    /**
     * Called when the opacity of the border is set.
     *
     * @param { double | string | Resource | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeOpacity(value: double | string | Resource | undefined): this;
    /**
     * Called when the transparency of the border is set.
     *
     * @param { double | string | Resource | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fillOpacity(value: double | string | Resource | undefined): this;
    /**
     * Called when the width of the border is set.
     *
     * @param { Length | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean | undefined } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default antiAlias(value: boolean | undefined): this;
    /**
     * Called when shape mesh.
     *
     * @param { Array<double> | undefined } value
     * @param { int | undefined } column
     * @param { int | undefined } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default mesh(value: Array<double> | undefined, column: int | undefined, row: int | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<ShapeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ShapeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Shape is returned when the parameter is transferred.
 *
 * @param { PixelMap } [value] - A pixelMap can be drawn in the area of shape.
 * @param { CustomBuilder } [content_]
 * @returns { ShapeAttribute } The attribute of the Shape.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Shape(
    value?: PixelMap, 
    content_?: CustomBuilder,
): ShapeAttribute
