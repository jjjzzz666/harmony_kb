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
import { Resource } from './../../../api/global/resource';
import { CommonMethod, AttributeModifier } from "./common";
import { ResourceColor } from "./units";
import { FontWeight } from "./enums";
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Provides attribute for SymbolSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface SymbolSpanAttribute {
    /**
     * Called when the SymbolSpan size is set.
     *
     * @param { double | string | Resource | undefined } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: double | string | Resource | undefined): this;
    /**
     * Called when the SymbolSpan color is set.
     *
     * @param { Array<ResourceColor> | undefined } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: Array<ResourceColor> | undefined): this;
    /**
     * Called when the font SymbolSpan weight is set.
     *
     * @param { int | FontWeight | string | undefined } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * Called when the SymbolSpan effect is set.
     *
     * @param { SymbolEffectStrategy | undefined } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default effectStrategy(value: SymbolEffectStrategy | undefined): this;
    /**
     * Called when the SymbolSpan rendering strategy is set.
     *
     * @param { SymbolRenderingStrategy | undefined } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @test
     */
    default key(value: string | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string | undefined } value
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default id(value: string | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<SymbolSpanAttribute> | undefined } modifier - The instance of symbol span modifier.
     *     Passing `undefined` will do nothing.
     * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | undefined): this;
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
 * Defines SymbolSpan Component.
 *
 * @param { Resource } value
 * @returns { SymbolSpanAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SymbolSpan(
    value: Resource
): SymbolSpanAttribute
