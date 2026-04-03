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
import { ChildrenMainSize, CommonMethod } from './common';
import { CustomBuilder } from './builder';
import { ComponentContentBase } from '../ComponentContent';
import { ListDividerOptions } from "./list";
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * Defines the list item group style.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ListItemGroupStyle {
    /**
     * Show custom style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 0,
    /**
     * Show default style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CARD = 1
}
/**
 * Defines the list item group options.
 *
 * @interface ListItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ListItemGroupOptions {
    /**
     * Describes the ListItemGroup header.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    header?: CustomBuilder;
    /**
      * Describes the ListItemGroup headerComponent.
      *
      * @type { ?ComponentContentBase }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 23 static
      */
    headerComponent?: ComponentContentBase;
    /**
     * Describes the ListItemGroup footer.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    footer?: CustomBuilder;
    /**
      * Describes the ListItemGroup footerComponent.
      *
      * @type { ?ComponentContentBase }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 23 static
      */
    footerComponent?: ComponentContentBase;
    /**
     * Describes the ListItemGroup space.
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: double | string;
    /**
     * Describes the ListItemGroup style.
     *
     * @type { ?ListItemGroupStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: ListItemGroupStyle;
}

/**
 * The ListItemGroupAttribute.
 * 
 * @extends CommonMethod
 * @interface ListItemGroupAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ListItemGroupAttribute extends CommonMethod {
    /**
     * Called when the ListItemGroup split line style is set.
     * Anonymous Object Rectification.
     *
     * @param { ListDividerOptions | null | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default divider(value: ListDividerOptions | null | undefined): this;
    /**
     * Set children main size for ListItemGroup.
     *
     * @param { ChildrenMainSize | undefined } value - children main size for ListItemGroup
     * @returns { this } the attribute of the ListItemGroup.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default childrenMainSize(value: ChildrenMainSize | undefined): this;
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<ListItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ListItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ListItemGroup Component.
 *
 * @param { ListItemGroupOptions } [options] - options
 * @param { CustomBuilder } [content_] - container
 * @returns { ListItemGroupAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function ListItemGroup(
    options?: ListItemGroupOptions, 
    content_?: CustomBuilder,
): ListItemGroupAttribute