'use static'
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
import { CommonMethod, Bindable } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * Defines the grid item style.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum GridItemStyle {
    /**
     * Show none style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 0,
    /**
     * Show plain style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PLAIN = 1
}
/**
 * Defines the grid item options.
 *
 * @interface GridItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridItemOptions {
    /**
     * Describes the GridItem style.
     *
     * @type { ?GridItemStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: GridItemStyle;
}
/**
 * The GridItemAttribute.
 * 
 * @extends CommonMethod
 * @interface GridItemAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GridItemAttribute extends CommonMethod {
    /**
     * This parameter specifies the start line number of the current element.
     *
     * @param { int | undefined } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default rowStart(value: int | undefined): this;
    /**
     * Specifies the end line number of the current element.
     *
     * @param { int | undefined } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default rowEnd(value: int | undefined): this;
    /**
     * This parameter specifies the start column number of the current element.
     *
     * @param { int | undefined } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default columnStart(value: int | undefined): this;
    /**
     * This parameter specifies the end column number of the current element.
     *
     * @param { int | undefined } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default columnEnd(value: int | undefined): this;
    /**
     * Called when judging whether it is selectable.
     *
     * @param { boolean | undefined } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectable(value: boolean | undefined): this;
    /**
     * Called when judging whether it is selected.
     * This parameter supports $ for two-way binding of variables.
     *
     * @param { boolean | Bindable<boolean> | undefined } value
     * @returns { GridItemAttribute } the attribute of the gridItem.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selected(value: boolean | Bindable<boolean> | undefined): this;
    /**
     * Called when the gridItem is selected.
     *
     * @param { function | undefined } event
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSelect(event: ((isSelected: boolean) => void) | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines GridItem Component.
 *
 * @param { GridItemOptions } [value] - options
 * @param { CustomBuilder } [content_] - container
 * @returns { GridItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function GridItem(
    value?: GridItemOptions, 
    content_?: CustomBuilder,
): GridItemAttribute
