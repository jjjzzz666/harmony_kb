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
import { TextBackgroundStyle } from "./span";
import { AttributeModifier, CommonMethod } from "./common";
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Define the ContainerSpan attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ContainerSpanAttribute {
    /**
     * Span background style.
     *
     * @param { TextBackgroundStyle | undefined } style - The background style of span.
     * @returns { ContainerSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<ContainerSpanAttribute> | undefined } modifier.
     * @returns { ContainerSpanAttribute } the attribute of the ContainerSpanAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute> | undefined): this;
    /**
     * Set the component's source code redirection information. 
     * @param { string } sourceLine - the source code line.
     * @param { string } [moduleName] - module to which the component belongs.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 staticonly
     */
    default debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * Defines ContainerSpan Component.
 *
 * @param { CustomBuilder } [content_]
 * @returns { ContainerSpanAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function ContainerSpan(
    content_?: CustomBuilder,
): ContainerSpanAttribute
