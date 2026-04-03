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
import { CommonMethod } from './common';
import { Resource } from '../../global/resource';
import { ComponentBuilder, CustomBuilder } from "./builder";
import { AttributeModifier, CommonMethod } from "./common";
/**
 * Defines the RichText attribute functions.
 *
 * @extends CommonMethod<RichTextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface RichTextAttribute extends CommonMethod {
    /**
     * Triggered when the RichText loading starts.
     *
     * @param { function | undefined } callback
     * @returns { RichTextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onStart(callback: (() => void) | undefined): this;
    /**
     * Triggered when the RichText loading ends.
     *
     * @param { function | undefined } callback
     * @returns { RichTextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onComplete(callback: (() => void) | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<RichTextAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RichTextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RichTextAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines RichText Component.
 *
 * @param { string | Resource } content.
 * @param { CustomBuilder } [content_] - container
 * @returns { RichTextAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function RichText(
    content: string | Resource,
    content_?: CustomBuilder,
): RichTextAttribute
