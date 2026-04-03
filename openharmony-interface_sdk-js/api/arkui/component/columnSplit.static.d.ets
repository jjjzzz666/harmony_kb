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
import { Dimension } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Provides an interface for the style of a divider including start margin and end margin
 *
 * @interface ColumnSplitDividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ColumnSplitDividerStyle {
    /**
     * Define the start margin of the divider
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    startMargin?: Dimension;
    /**
     * Define the end margin of the divider
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    endMargin?: Dimension;
}

/**
 * The ColumnSplitAttribute.
 * 
 * @extends CommonMethod
 * @interface ColumnSplitAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface ColumnSplitAttribute extends CommonMethod {
    /**
     * Indicates whether the split line can be dragged. The default value is false.
     *
     * @param { boolean | undefined } value
     * @returns { ColumnSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default resizeable(value: boolean | undefined): this;
    /**
     * Called when the ColumnSplit split line style is set.
     * @param { ColumnSplitDividerStyle | null | undefined } value - indicates the style of the indicator.
     * if value is set to null, the value of startMargin and endMargin is set to 0.0 by default.
     * @returns { ColumnSplitAttribute } the attribute of the ColumnSplit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default divider(value: ColumnSplitDividerStyle | null | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ColumnSplitAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ColumnSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ColumnSplitAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ColumnSplit Component.
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { ColumnSplitAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ColumnSplit(
    
    content_?: CustomBuilder,
): ColumnSplitAttribute
