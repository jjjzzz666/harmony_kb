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
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The BlankAttribute.
 * 
 * @extends CommonMethod
 * @interface BlankAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface BlankAttribute extends CommonMethod {
    /**
     * Sets the color to fill the blank.<br>
     * Default value: **Color.Transparent**.
     *
     * @param { ResourceColor | undefined } value
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Blank Component.
 *
 * @param { double | string } [min] - Blank options.
 * @returns { BlankAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function Blank(
    min?: double | string,
): BlankAttribute;
