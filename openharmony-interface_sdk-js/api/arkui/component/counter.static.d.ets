'use static';
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
import { CommonMethod } from './common';
import { VoidCallback } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the Counter component attributes.
 *
 * @extends CommonMethod
 * @interface CounterAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface CounterAttribute extends CommonMethod {
    /**
     * Listen to the event that the value increases.
     * Anonymous Object Rectification.
     *
     * @param { VoidCallback | undefined } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onInc(event: VoidCallback | undefined): this;
    /**
     * Listens to the number decrease event.
     * Anonymous Object Rectification.
     *
     * @param { VoidCallback | undefined } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDec(event: VoidCallback | undefined): this;
    /**
     * Indicates whether the decrease button of counter component is available or not.
     *
     * @param { boolean | undefined } value - If true, the decrease button is available and can respond to
     *     operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableDec(value: boolean | undefined): this;
    /**
     * Indicates whether the increase button of counter component is available or not.
     *
     * @param { boolean | undefined } value - If true, the increase button is available and can respond to
     *     operations such as clicking. If false, click operations are not responded.
     * @returns { CounterAttribute } The attribute of the counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableInc(value: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<CounterAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the Counter component.
 *
 * @param { CustomBuilder } [content_]
 * @returns { CounterAttribute } The attribute of the Counter.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Counter(
    content_?: CustomBuilder
): CounterAttribute;
