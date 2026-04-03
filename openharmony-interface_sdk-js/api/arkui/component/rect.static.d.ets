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
import { Length } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Defines the RadiusItem.
 * The first element is the width of the rounded corner, the second is the height of the rounded corner.
 *
 * @typedef { [Length, Length] } RadiusItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export type RadiusItem = [
    Length,
    Length
];

/**
 * Define options used to construct a rectangle.
 *
 * @interface RectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RectOptions {
    /**
     * Rectangle width.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Rectangle height.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
    /**
     * Corner radius of the rectangle.
     *
     * @type { ?(Length | Array<RadiusItem>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radius?: Length | Array<RadiusItem>;
}

/**
 * Define options used to construct a rectangle with rounded corners.
 *
 * @interface RoundedRectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RoundedRectOptions {
    /**
     * Rectangle width.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Rectangle height.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
    /**
     * Width of the corner radius.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusWidth?: Length;
    /**
     * Height of the corner radius.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radiusHeight?: Length;
}

/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod
 * @interface RectAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RectAttribute extends CommonShapeMethod {
    /**
     * Called when the fillet width is set.
     *
     * @param { Length | undefined } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default radiusWidth(value: Length | undefined): this;
    /**
     * Called when the fillet height is set.
     *
     * @param { Length | undefined } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default radiusHeight(value: Length | undefined): this;
    /**
     * Called when the fillet size is set.
     *
     * @param { Length | Array<RadiusItem> | undefined } value
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default radius(value: Length | Array<RadiusItem> | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<RectAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RectAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Rect is returned when the parameter is transferred.
 *
 * @param { RectOptions | RoundedRectOptions } [options] - The options to create a Rect
 * @returns { RectAttribute } The attribute of the Rect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Rect(
    options?: RectOptions | RoundedRectOptions
): RectAttribute;
