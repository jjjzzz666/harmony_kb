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
import { ResourceColor } from './units';
import { LineCapStyle } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The DividerAttribute.
 * 
 * @extends CommonMethod
 * @interface DividerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface DividerAttribute extends CommonMethod {
    /**
     * Indicates whether to use a horizontal splitter or a vertical splitter.
     * The options are as follows: false: horizontal splitter; true: vertical splitter.
     *
     * @param { boolean | undefined } value
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default vertical(value: boolean | undefined): this;
    /**
     * Sets the color of the divider line.
     *
     * @param { ResourceColor | undefined } value
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * Sets the width of the dividing line.
     *
     * @param { double | string | undefined } value
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeWidth(value: double | string | undefined): this;
    /**
     * Sets the end style of the split line. The default value is Butt.
     *
     * @param { LineCapStyle | undefined } value
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default lineCap(value: LineCapStyle | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<DividerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<DividerAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Divider Component.
 *
 * @returns { DividerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function Divider(): DividerAttribute;
