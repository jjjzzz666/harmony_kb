/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { ResourceColor, Dimension, BorderRadiuses, Length, Font, ResourceStr } from "./units";
import { CommonMethod, ShadowOptions, AttributeModifier, ClickEvent, Callback, HoverCallback } from "./common";
import { LengthMetrics } from './../Graphics';
import { Resource } from './../../../api/global/resource';
import { FontStyle, FontWeight, TextCase } from "./enums";
import { DecorationStyleInterface } from "./styledString";
import { ComponentBuilder, CustomBuilder } from './builder';
import { FontConfigs, FontWeightConfigs } from "./textCommon"
/**
 * Define the background style of span.
 *
 * @interface TextBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextBackgroundStyle {
    /**
     * Background color of span.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Background radius of span.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    radius?: Dimension | BorderRadiuses;
}
/**
 * Define the BaseSpan interface, contains the common methods of span.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface BaseSpan extends CommonMethod {
    /**
     * Span background style.
     *
     * @param { TextBackgroundStyle | undefined } style - The background style of span.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
    /**
     * Base line offset of the Span.
     *
     * @param { LengthMetrics | undefined } value - The base line offset of the Span.
     * @returns { T } The attribute of the Span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default baselineOffset(value: LengthMetrics | undefined): this;
}
/**
 * Define the Span attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface SpanAttribute {
    /**
     * Called when the font is set.
     *
     * @param { Font | undefined } value - the span font size and weight and family and style.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    /**
     * Used to set the font of span.
     *
     * @param { Font | undefined } value - the span font size, font weight, font family and font style.
     * @param { FontConfigs } [fontConfigs] - the configuration of font.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default font(value: Font | undefined, fontConfigs?: FontConfigs): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { double | string | Resource | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: double | string | Resource | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { int | FontWeight | ResourceStr | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    /**
     * Used to set the font weight of span.
     *
     * @param { int | FontWeight | ResourceStr | undefined } weight - the span font weight.
     * @param { FontWeightConfigs } [fontWeightConfigs] - the configuration of font weight.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default fontWeight(weight: int | FontWeight | ResourceStr | undefined, fontWeightConfigs?: FontWeightConfigs): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFamily(value: string | Resource | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default decoration(value: DecorationStyleInterface | undefined): this;
    /**
    * Called when the distance between text fonts is set.
    *
    * @param { double | string | undefined } value
    * @returns { SpanAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    default letterSpacing(value: double | string | undefined): this;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase | undefined } value
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textCase(value: TextCase | undefined): this;
    /**
     * Called when the line height of the span is set.
     *
     * @param { Length | undefined } value - The line height of the span.
     * @returns { SpanAttribute } The attribute of the span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default lineHeight(value: Length | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - The shadow options.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Span background style.
     *
     * @param { TextBackgroundStyle | undefined } style - The background style of span.
     *     Passing `undefined` resets it to the default value.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
    /**
     * Base line offset of the Span.
     *
     * @param { LengthMetrics | undefined } value - The base line offset of the Span. The default value is 0.
     *     Passing `undefined` resets it to the default value.
     * @returns { SpanAttribute } The attribute of the Span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default baselineOffset(value: LengthMetrics | undefined): this;
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
     * Called when a click event occurs.
     *
     * <p><strong>NOTE</strong>:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { Callback<ClickEvent> | undefined } event - The click event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onClick(event: Callback<ClickEvent> | undefined): this;
    /**
     * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
     *
     * <p><strong>NOTE</strong>:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { Callback<ClickEvent> | undefined } event - The click event
     * @param { double | undefined } distanceThreshold
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onClick(event: Callback<ClickEvent> | undefined, distanceThreshold: double | undefined): this;
    /**
     * Trigger a hover event.
     *
     * @param { HoverCallback | undefined } event - The hover event
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onHover(event: HoverCallback | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<SpanAttribute> | undefined } modifier - The instance of span modifier.
     *     Passing `undefined` will do nothing.
     * @returns { SpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<SpanAttribute> | undefined): this;
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
 * Defines Span Component.
 *
 * @param { string | Resource } value
 * @returns { SpanAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Span(
    value: string | Resource
): SpanAttribute
