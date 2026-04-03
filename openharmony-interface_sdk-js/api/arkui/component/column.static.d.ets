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
import { HorizontalAlign, FlexAlign } from './enums';
import { Resource } from './../../global/resource';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Defines the space property with string, double and resource unit.
 *
 * @typedef { string | double | Resource } SpaceType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type SpaceType = string | double | Resource;
/**
 * Column constructor options.
 *
 * @interface ColumnOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ColumnOptions {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: string | double;
}
/**
 * Column constructor options.
 *
 * @interface ColumnOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ColumnOptionsV2 {
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
 * The ColumnAttribute.
 * 
 * @extends CommonMethod
 * @interface ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface ColumnAttribute extends CommonMethod {
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign | undefined } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default alignItems(value: HorizontalAlign | undefined): this;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign | undefined } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default justifyContent(value: FlexAlign | undefined): this;
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { ColumnAttribute } The attribute of the column.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): ColumnAttribute;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { boolean | undefined } isReversed - If the main axis is reversed.
     * @returns { ColumnAttribute } The attribute of the column.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default reverse(isReversed: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Column Component.
 *
 * @param { ColumnOptions | ColumnOptions | ColumnOptionsV2 } [options] - Column options.
 * @param { CustomBuilder } [content_] - container
 * @returns { ColumnAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Column(
    options?: ColumnOptions | ColumnOptions | ColumnOptionsV2,
    content_?: CustomBuilder,
): ColumnAttribute
