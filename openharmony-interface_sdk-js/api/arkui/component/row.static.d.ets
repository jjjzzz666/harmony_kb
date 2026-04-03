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
import { VerticalAlign, FlexAlign } from './enums';
import { SpaceType } from './column';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Define options used to construct a row.
 *
 * @interface RowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RowOptions {
    /**
     * Row spacing.
     *
     * Anonymous Object Rectification
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: string | double;
}
/**
 * Define options used to construct a row.
 *
 * @interface RowOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RowOptionsV2 {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?SpaceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: SpaceType;
}

/**
 * The RowAttribute.
 * 
 * @extends CommonMethod
 * @interface RowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface RowAttribute extends CommonMethod {
    /**
     * Called when the vertical alignment is set.
     *
     * @param { VerticalAlign | undefined } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default alignItems(value: VerticalAlign | undefined): this;
    /**
     * Called when the horizontal alignment is set.
     *
     * @param { FlexAlign | undefined } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default justifyContent(value: FlexAlign | undefined): this;
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { RowAttribute } The attribute of the row.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): RowAttribute;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { boolean | undefined } isReversed - If the main axis is reversed.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default reverse(isReversed: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines Row Component.
 *
 * @param { RowOptions | RowOptions | RowOptionsV2 } [options] - Row options.
 * @param { CustomBuilder } [content_] - container
 * @returns { RowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Row(
    options?: RowOptions | RowOptions | RowOptionsV2,
    content_?: CustomBuilder,
): RowAttribute
