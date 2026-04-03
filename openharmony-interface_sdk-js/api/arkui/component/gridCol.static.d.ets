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
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Defines the option in int unit of grid-container child component.
 *
 * @interface GridColColumnOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridColColumnOption {
    /**
     * Grid Col Column Option xs
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    xs?: int;
    /**
     * Grid Col Column Option sm
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    sm?: int;
    /**
     * Grid Col Column Option md
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    md?: int;
    /**
     * Grid Col Column Option lg
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lg?: int;
    /**
     * Grid Col Column Option xl
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    xl?: int;
    /**
     * Grid Col Column Option xxl
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    xxl?: int;
}
/**
 * Defines the options of grid-container child component.
 *
 * @interface GridColOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridColOptions {
    /**
     * Sets the span of current gird-container item.
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    span?: int | GridColColumnOption;
    /**
     * Sets the offset of current gird-container item.
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: int | GridColColumnOption;
    /**
     * Sets the order of current gird-container item.
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    order?: int | GridColColumnOption;
}

/**
 * The GridColAttribute.
 * 
 * @extends CommonMethod
 * @interface GridColAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface GridColAttribute extends CommonMethod {
    /**
     * Sets the span of current gird-container item.
     *
     * @param { int | GridColColumnOption } value
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default span(value: int | GridColColumnOption | undefined): this;
    /**
     * Sets the offset of current gird-container item.
     *
     * @param { int | GridColColumnOption } value
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default gridColOffset(value: int | GridColColumnOption | undefined): this;
    /**
     * Sets the order of current gird-container item.
     *
     * @param { int | GridColColumnOption } value
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default order(value: int | GridColColumnOption | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<GridColAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GridColAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines GridCol Component.
 *
 * @param { GridColOptions } [option] - GridCol options.
 * @param { CustomBuilder } [content_] - container
 * @returns { GridColAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function GridCol(
    option?: GridColOptions, 
    content_?: CustomBuilder,
): GridColAttribute
