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

import { Callback, ShadowOptions, ClickEvent, TouchEvent, PixelMap, AttributeModifier, CommonMethod } from './common';
import { TextAlign, FontStyle, FontWeight, TextDecorationType, TextDecorationStyle, WordBreak, TextOverflow, ImageFit, ImageSpanAlignment } from './enums';
import { ResourceStr, ResourceColor, LengthMetrics, SizeOptions, Margin, Padding, BorderRadiuses, ColorFilter } from './units';
import { TextBackgroundStyle } from './span';
import { GestureEvent } from './gesture';
import { DrawingColorFilter } from './image';
import { LeadingMarginPlaceholder } from './richEditor';
import image from '../../@ohos.multimedia.image';
import drawing from '../../@ohos.graphics.drawing';
import { DrawContext } from '../../arkui/Graphics';
import { TextDirection, SuperscriptStyle, TextVerticalAlign, FontConfigs } from './textCommon';

/**
 * Defines the StyledStringMarshallingValue Type.
 *
 * @typedef { UserDataSpan } StyledStringMarshallingValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type StyledStringMarshallingValue = UserDataSpan;
/**
 * Defines the callback type used in marshalling.
 *
 * @typedef { function } StyledStringMarshallCallback
 * @param { StyledStringMarshallingValue } marshallableVal - value that will be serialized to array buffer
 * @returns { ArrayBuffer } Array buffer from the serialized marshalling value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type StyledStringMarshallCallback = (marshallableVal: StyledStringMarshallingValue) => ArrayBuffer;
/**
 * Defines the callback type used in unmarshalling.
 *
 * @typedef { function } StyledStringUnmarshallCallback
 * @param { ArrayBuffer } buf - The buffer that will be deserialized to a StyledStringMarshallingValue.
 * @returns { StyledStringMarshallingValue } Marshalling value from the deserialized ArrayBuffer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type StyledStringUnmarshallCallback = (buf: ArrayBuffer) => StyledStringMarshallingValue;
/**
 * StyledString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class StyledString {
    /**
     * constructor.
     *
     * @param { string | ImageAttachment | CustomSpan } value - indicates the current object value of the StyledString.
     * @param { Array<StyleOptions> } [styles] - indicates the SpanStyle objects.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>);
    /**
     * Get the length of the StyledString's characters.
     *
     * @returns { int } - the length of the StyledString's characters.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get length(): int;
    /**
    * Get the literal content of the StyledString.
    *
    * @returns { string } - the literal content of the StyledString
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    getString(): string;
    /**
     * Get the attribute objects of the subStyledString.
     *
     * @param { int } start - the start position of the subStyledString.
     * @param { int } length - the length of the subStyledString's characters.
     * @param { StyledStringKey } [styledKey] - the specified type.
     * @returns { Array<SpanStyle> | undefined }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getStyles(start: int, length: int, styledKey?: StyledStringKey): Array<SpanStyle> | undefined;
    /**
     * Judge if two attribute strings are equal.
     *
     * @param { StyledString } other - another StyledString.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    equals(other: StyledString): boolean;
    /**
     * Get the substring of the StyledString.
     *
     * @param { int } start - the start position of the subStyledString.
     * @param { int } [length] - the length of the subStyledString's characters.
     * @returns { StyledString | undefined }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    subStyledString(start: int, length?: int): StyledString | undefined;
    /**
     * Returns StyledString from the provided HTML string.
     *
     * @param { string } html - the html text will be converted to a StyledString.
     * @returns { Promise<StyledString | undefined> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 170001 - Convert Error.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static fromHtml(html: string): Promise<StyledString | undefined>;
    /**
     * Returns HTML string from the provided StyledString.
     *
     * @param { StyledString } styledString - the StyledString will be converted to a HTML string.
     * @returns { string } Returns the HTML string converted from the provided StyledString.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static toHtml(styledString: StyledString): string;
    /**
     * Returns ArrayBuffer from the serialized styled string.
     *
     * @param { StyledString } styledString - StyledString parameter.
     * @param { StyledStringMarshallCallback } callback - When marshalling StyledStringMarshingValue, will trigger
     *    this callback to get ArrayBuffer
     * @returns { ArrayBuffer | undefined }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    static marshalling(styledString: StyledString, callback: StyledStringMarshallCallback): ArrayBuffer | undefined;
    /**
     * Returns StyledString from the deserialized ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - The buffer will be deserialized to a StyledString.
     * @param { StyledStringUnmarshallCallback } callback - When unmarshalling ArrayBuffer, will trigger this callback
     *    to get StyledStringMarshingValue
     * @returns { Promise<StyledString | undefined> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 170002 - Styled string decode error.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    static unmarshalling(buffer: ArrayBuffer, callback: StyledStringUnmarshallCallback): Promise<StyledString | undefined>;
    /**
     * Returns ArrayBuffer from the serialized styled string.
     *
     * @param { StyledString } styledString - StyledString parameter.
     * @returns { ArrayBuffer | undefined }
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    static marshalling(styledString: StyledString): ArrayBuffer | undefined;
    /**
     * Returns StyledString from the deserialized ArrayBuffer.
     *
     * @param { ArrayBuffer } buffer - The buffer will be deserialized to a StyledString.
     * @returns { Promise<StyledString | undefined> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 170002 - Styled string decode error.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    static unmarshalling(buffer: ArrayBuffer): Promise<StyledString | undefined>;
}
/**
 * StyleOptions
 *
 * @interface StyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StyleOptions {
    /**
     * The start position of the StyleOptions.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: int;
    /**
     * The length of the modifiedStyledString's characters.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    length?: int;
    /**
     * The attribute key of the StyleOptions.
     *
     * @type { StyledStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    styledKey: StyledStringKey;
    /**
     * The attribute value of the StyleOptions.
     *
     * @type { StyledStringValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    styledValue: StyledStringValue;
}
/**
 * SpanStyle
 *
 * @interface SpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SpanStyle {
    /**
     * The start position of the SpanStyle.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start: int;
    /**
     * The length of the modifiedStyledString's characters.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    length: int;
    /**
     * The attribute key of the SpanStyle.
     *
     * @type { StyledStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    styledKey: StyledStringKey;
    /**
     * The attribute value of the SpanStyle.
     *
     * @type { StyledStringValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    styledValue: StyledStringValue;
}
/**
 * Defines TextStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextStyle {
    /**
     * constructor.
     *
     * @param { TextStyleInterface } [value] - font property object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value?: TextStyleInterface);
    /**
     * Get the fontColor of the StyledString.
     *
     * @type { ?ResourceColor } - the set fontColor of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly fontColor?: ResourceColor;
    /**
     * Get the fontFamily of the StyledString.
     *
     * @type { ?string } - the fontFamily of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly fontFamily?: string;
    /**
     * Get the fontSize of the StyledString.
     * If not undefined, the unit is vp.
     *
     * @type { ?double } - the fontSize of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly fontSize?: double;
    /**
     * Get the fontWeight of the StyledString.
     *
     * @type { ?int } - the fontWeight of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly fontWeight?: int;
    /**
     * Get the fontStyle of the StyledString.
     *
     * @type { ?FontStyle  } - the fontStyle of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly fontStyle?: FontStyle;
    /**
     * Get the fontConfigs of the StyledString.
     *
     * @type { ?FontConfigs } - the set fontConfigs of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    readonly fontConfigs?: FontConfigs;
    /**
 	 * Get the superscript style of the StyledString.
 	 *
 	 * @type { ?SuperscriptStyle } - the set superscriptStyle of the StyledString
 	 * @readonly
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	readonly superscript?: SuperscriptStyle;
 	/**
 	 * Get the stroke width of the StyledString with the unit 'vp'.
 	 *
 	 * @readonly
 	 * @type { ?double } - the stroke width of the StyledString or undefined
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	readonly strokeWidth?: double;
 	/**
 	 * Get the stroke color of the StyledString.
 	 *
 	 * @type { ?ResourceColor } - the stroke color of the StyledString or undefined
 	 * @readonly
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	readonly strokeColor?: ResourceColor;
}
/**
 * TextStyleInterface
 *
 * @interface TextStyleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextStyleInterface {
    /**
     * The fontColor value of the font property object.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * The fontFamily value of the font property object.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontFamily?: ResourceStr;
    /**
     * The fontSize value of the font property object.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize?: LengthMetrics;
    /**
     * The fontWeight value of the font property object.
     *
     * @type { ?(int | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight?: int | FontWeight | string;
    /**
     * The fontStyle value of the font property object.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * The fontConfigs value of the font property object.
     *
     * @type { ?FontConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    fontConfigs?: FontConfigs;
    /**
 	 * The superscript value of the font property object.
 	 *
 	 * @type { ?SuperscriptStyle }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	superscript?: SuperscriptStyle;
 	/**
 	 * The stroke width of the text.
 	 *
 	 * @type { ?LengthMetrics }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	strokeWidth?: LengthMetrics;
 	/**
 	 * The stroke color of the text.
 	 *
 	 * @type { ?ResourceColor }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 24 static
 	 */
 	strokeColor?: ResourceColor;
}
/**
 * Defines DecorationStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DecorationStyle {
    /**
     * constructor.
     *
     * @param { DecorationStyleInterface } value - text decoration value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: DecorationStyleInterface);
    /**
     * Get the text decoration type of the StyledString.
     *
     * @type { TextDecorationType } - the decoration type of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly type: TextDecorationType;
    /**
     * Get the decorationColor of the StyledString.
     *
     * @type { ?ResourceColor } - the decorationColor of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly color?: ResourceColor;
    /**
     * Get the decorationStyle of the StyledString.
     *
     * @type { ?TextDecorationStyle } - the decorationStyle of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly style?: TextDecorationStyle;
}
/**
 * DecorationStyleInterface
 *
 * @interface DecorationStyleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DecorationStyleInterface {
    /**
     * The type value of the decoration property object.
     *
     * @type { TextDecorationType | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: TextDecorationType | undefined ;
    /**
     * The color value of the decoration property object.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * The style value of the decoration property object.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: TextDecorationStyle;
}
/**
 * Defines BaselineOffsetStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BaselineOffsetStyle {
    /**
     * constructor.
     *
     * @param { LengthMetrics } value - baseline offset value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: LengthMetrics);
    /**
     * Get the baselineOffset value of the StyledString.
     * The unit is vp.
     *
     * @type { double } - the baselineOffset value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly baselineOffset: double;
}
/**
 * Defines LetterSpacingStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LetterSpacingStyle {
    /**
     * constructor.
     *
     * @param { LengthMetrics } value - letter space value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: LengthMetrics);
    /**
     * Get the letterSpacing value of the StyledString.
     * The unit is vp.
     *
     * @type { double } - the letterSpacing value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly letterSpacing: double;
}
/**
 * Defines TextShadowStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextShadowStyle {
    /**
     * constructor.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - text shadow value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: ShadowOptions | Array<ShadowOptions>);
    /**
     * Get the textShadow value of the StyledString.
     *
     * @type { Array<ShadowOptions> } - the textShadow value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly textShadow: Array<ShadowOptions>;
}
/**
 * Defines Sets the property string background color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BackgroundColorStyle {
    /**
     * constructor.
     *
     * @param { TextBackgroundStyle } textBackgroundStyle - textBackgroundStyle value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(textBackgroundStyle: TextBackgroundStyle);
    /**
     * Get the textBackgroundStyle value of the StyledString.
     *
     * @type { TextBackgroundStyle } - the textBackgroundStyle value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly textBackgroundStyle: TextBackgroundStyle;
}
/**
 * Defines GestureStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class GestureStyle {
    /**
     * constructor.
     *
     * @param { GestureStyleInterface } [value] - gesture event object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value?: GestureStyleInterface);
}
/**
 * Defines the Gesture Events.
 *
 * @interface GestureStyleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GestureStyleInterface {
    /**
     * Trigger a click event when a click is clicked.
     *
     * @type { ?Callback<ClickEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onClick?: Callback<ClickEvent>;
    /**
     * Trigger a gesture event when long press event is complete.
     *
     * @type { ?Callback<GestureEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onLongPress?: Callback<GestureEvent>;
    /**
     * Trigger a touch event when touched.
     *
     * @type { ?Callback<TouchEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    onTouch?: Callback<TouchEvent>;
}
/**
 * Defines ParagraphStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ParagraphStyle {
    /**
     * constructor.
     *
     * @param { ParagraphStyleInterface } [value] - paragraph property object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value?: ParagraphStyleInterface);
    /**
     * Get the text alignment of the StyledString.
     *
     * @type { ?TextAlign } - the text alignment of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly textAlign?: TextAlign;
    /**
     * Get the text vertical alignment of the StyledString.
     *
     * @type { ?TextVerticalAlign } - the text vertical alignment of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    readonly textVerticalAlign?: TextVerticalAlign;
    /**
     * Get the first line indentation of the StyledString.
     * The unit is vp.
     *
     * @type { ?double } - the first line indentation of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly textIndent?: double;
    /**
     * Get the maximum number of lines of the StyledString.
     *
     * @type { ?int } - the maximum number of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly maxLines?: int;
    /**
     * Get the overflow mode of the StyledString.
     *
     * @type { ?TextOverflow } - the overflow mode of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly overflow?: TextOverflow;
    /**
     * Get the wordBreak mode of the StyledString.
     *
     * @type { ?WordBreak } - the wordBreak mode of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly wordBreak?: WordBreak;
    /**
     * Get the leading margin of the StyledString.
     *
     * @type { ?(double | LeadingMarginPlaceholder) } - the leading margin of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly leadingMargin?: double | LeadingMarginPlaceholder;
    /**
     * Get the paragraph spacing of the StyledString.
     * The unit is vp.
     *
     * @type { ?double }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly paragraphSpacing?: double;
    /**
     * Get the text direction of the StyledString.
     *
     * @type { ?TextDirection } - the text direction of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly textDirection?: TextDirection;
    /**
     * Get the leading margin span of the StyledString.
     *
     * @type { ?LeadingMarginSpan } - the leading margin span of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    readonly leadingMarginSpan?: LeadingMarginSpan;
}
/**
 * ParagraphStyleInterface
 *
 * @interface ParagraphStyleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ParagraphStyleInterface {
    /**
     * Alignment of text.
     *
     * @type { ?TextAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textAlign?: TextAlign;
    /**
     * Vertical alignment of text.
     *
     * @type { ?TextVerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    textVerticalAlign?: TextVerticalAlign;
    /**
     * Set the first line indentation.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textIndent?: LengthMetrics;
    /**
     * The maximum number of lines of content.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    maxLines?: int;
    /**
     * The overflow mode of the content.
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    overflow?: TextOverflow;
    /**
     * Set word break type.
     *
     * @type { ?WordBreak }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    wordBreak?: WordBreak;
    /**
     * Leading margin.
     *
     * @type { ?(LengthMetrics | LeadingMarginPlaceholder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    leadingMargin?: LengthMetrics | LeadingMarginPlaceholder;
    /**
     * Set the paragraph spacing of the StyledString.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    paragraphSpacing?: LengthMetrics;
    /**
     * Set the text direction of the StyledString.
     *
     * @type { ?TextDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textDirection?: TextDirection;
    /**
     * Leading margin span.
     *
     * @type { ?LeadingMarginSpan }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    leadingMarginSpan?: LeadingMarginSpan;
}
/**
 * Defines LineHeightStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LineHeightStyle {
    /**
     * constructor.
     *
     * @param { LengthMetrics } lineHeight - line height value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(lineHeight: LengthMetrics);
    /**
     * Get the lineHeight value of the StyledString.
     * The unit is vp.
     *
     * @type { double } - the lineHeight value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly lineHeight: double;
}
/**
 * Defines the URLStyle hyperlink that allows setting a URL string. When clicking on the text to
 * which the span is attached, the URLStyle will try to open the URL.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class UrlStyle {
    /**
     * Constructor.
     *
     * @param { string } url - URL value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(url: string);
    /**
     * Get the URL value of the StyledString.
     *
     * @type { string } - the URL value of the StyledString
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly url: string;
}
/**
 * Defines the Span Type.
 *
 * @typedef { TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle | TextShadowStyle |
 * GestureStyle | ImageAttachment | ParagraphStyle | LineHeightStyle | UrlStyle | CustomSpan |
 * UserDataSpan | BackgroundColorStyle } StyledStringValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type StyledStringValue = TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle |
                            TextShadowStyle | GestureStyle | ImageAttachment | ParagraphStyle | LineHeightStyle |
                            UrlStyle |CustomSpan | UserDataSpan | BackgroundColorStyle;
/**
 * MutableStyledString
 *
 * @extends StyledString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class MutableStyledString extends StyledString {
    /**
     * constructor.
     *
     * @param { string | ImageAttachment | CustomSpan } value - indicates the current object value of
     *    the MutableStyledString.
     * @param { Array<StyleOptions> } [styles] - indicates the SpanStyle objects.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>);
    /**
     * Replace the string of the specified range.
     *
     * @param { int } start - the start position of the replacedString.
     * @param { int } length - the length of the replacedString's characters.
     * @param { string } other - must be unicode string.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replaceString(start: int, length: int, other: string): void;
    /**
    * Insert the string at the specified location.
    *
    * @param { int } start - the start position of the insertedString.
    * @param { string } other - must be unicode string.
    * @throws { BusinessError } 401 - Parameter error. Possible causes:
    *     <br> 1. Mandatory parameters are left unspecified.
    *     <br> 2. Incorrect parameters types.
    *     <br> 3. Parameter verification failed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    insertString(start: int, other: string): void;
    /**
    * Remove the string of the specified range.
    *
    * @param { int } start - the start position of the removedString.
    * @param { int } length - the length of the removedString's characters.
    * @throws { BusinessError } 401 - Parameter error. Possible causes:
    *     <br> 1. Mandatory parameters are left unspecified.
    *     <br> 2. Incorrect parameters types.
    *     <br> 3. Parameter verification failed.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    removeString(start: int, length: int): void;
    /**
     * Replace the specified range string attribute.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replaceStyle(spanStyle: SpanStyle): void;
    /**
     * Add attributes to the specified range string.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setStyle(spanStyle: SpanStyle): void;
    /**
     * Delete the specified type attributes for the specified range string.
     *
     * @param { int } start - the start position of the removedAttributeStyledString.
     * @param { int } length - the length of the removedAttributeStyledString's characters.
     * @param { StyledStringKey } styledKey - the specified attribute type's key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    removeStyle(start: int, length: int, styledKey: StyledStringKey): void;
    /**
     * Delete all attributes for the specified range styledString.
     *
     * @param { int } start - the start position of the attributeRemovedStyledString's characters.
     * @param { int } length - the length of the attributeRemovedStyledString's characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    removeStyles(start: int, length: int): void;
    /**
     * Delete all attributes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    clearStyles(): void;
    /**
     * Replace the StyledString of the specified range.
     *
     * @param { int } start - the start position of the replacedStyledString.
     * @param { int } length - the length of the replacedStyledString's characters.
     * @param { StyledString } other - new StyledString.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replaceStyledString(start: int, length: int, other: StyledString): void;
    /**
     * Insert new StyledString at the specified location.
     *
     * @param { int } start - the start position of the insertedStyledString.
     * @param { StyledString } other - new StyledString.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    insertStyledString(start: int, other: StyledString): void;
    /**
     * Append new StyledString at the end.
     *
     * @param { StyledString } other - new StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    appendStyledString(other: StyledString): void;
}
/**
 * the attribute type of the StyledString
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum StyledStringKey {
    /**
     * The key of TextStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    FONT = 0,
    /**
     * The key of DecorationStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DECORATION = 1,
    /**
     * The key of BaselineOffsetStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BASELINE_OFFSET = 2,
    /**
     * The key of LetterSpacingStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LETTER_SPACING = 3,
    /**
     * The key of TextShadowStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TEXT_SHADOW = 4,
    /**
     * The key of LineHeightStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LINE_HEIGHT = 5,
    /**
     * The key of BackgroundColorStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BACKGROUND_COLOR = 6,
    /**
     * The key of UrlStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    URL = 7,
    /**
     * The key of GestureStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    GESTURE = 100,
    /**
     * The key of ParagraphStyle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PARAGRAPH_STYLE = 200,
    /**
     * The key of ImageAttachment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IMAGE = 300,
    /**
     * The key of CustomSpan.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CUSTOM_SPAN = 400,
    /**
     * The key of UserDataSpan.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    USER_DATA = 500
}
/**
 * Defines ImageAttachment.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ImageAttachment {
    /**
     * constructor supported by AttachmentType.
     *
     * @param { AttachmentType | undefined } value - image attachment object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(value: AttachmentType | undefined);
    /**
     * Get the image content of the StyledString.
     *
     * @type { PixelMap } - the image content of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly value: PixelMap;
    /**
     * Get the resource value of the ImageAttachment.
     *
     * @type { ?string } - the resource value of the ImageAttachment or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    readonly resourceValue?: string;
    /**
     * Get the imageSize of the StyledString.
     *
     * @type { ?SizeOptions } - the imageSize of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly size?: SizeOptions;
    /**
     * Get the ImageSpanAlignment of the StyledString.
     *
     * @type { ?ImageSpanAlignment } - the ImageSpanAlignment of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly verticalAlign?: ImageSpanAlignment;
    /**
     * Get the imageFit of the StyledString.
     *
     * @type { ?ImageFit } - the imageFit of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly objectFit?: ImageFit;
    /**
     * Get the imageAttachmentLayoutStyle of the StyledString.
     *
     * @type { ?ImageAttachmentLayoutStyle } - the imageAttachmentLayoutStyle of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly layoutStyle?: ImageAttachmentLayoutStyle;
    /**
     * Get the imageAttachment colorFilter of the StyledString.
     *
     * @type { ?ColorFilterType } - the imageAttachment colorFilter of the StyledString or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly colorFilter?: ColorFilterType;
    /**
     * Gets the svg support state.
     *
     * @type { ?boolean } - Whether color filter support svg.
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    readonly supportSvg2?: boolean;
    /**
     * Get the imageSize of the StyledString in vp unit.
     *
     * @type { ?SizeOptions } - the imageSize of the StyledString in vp unit or undefined
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    readonly sizeInVp?: SizeOptions;
}
/**
 * Defines the ResourceImageAttachmentOptions.
 *
 * @interface ResourceImageAttachmentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ResourceImageAttachmentOptions {
    /**
     * The content of the ResourceImageAttachment.
     *
     * @type { ResourceStr | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    resourceValue: ResourceStr | undefined;
    /**
     * size of the ResourceImage.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: SizeOptions;
    /**
     * Image vertical align.
     *
     * @type { ?ImageSpanAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalAlign?: ImageSpanAlignment;
    /**
     * Sets the zoom type of the ImageAttachment.
     *
     * @type { ?ImageFit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    objectFit?: ImageFit;
    /**
     * The Image Layout Style of the Resource Image.
     *
     * @type { ?ImageAttachmentLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    layoutStyle?: ImageAttachmentLayoutStyle;
    /**
     * Sets the color filter effect on the image attachment.
     *
     * @type { ?ColorFilterType } filter ColorFilter object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    colorFilter?: ColorFilterType;
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    syncLoad?: boolean;
    /**
     * Set the range of SVG parsing capabilities supported through enable switch.
     * The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    supportSvg2?: boolean;
}
/**
 * Defines the ImageAttachmentInterface.
 *
 * @interface ImageAttachmentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ImageAttachmentInterface {
    /**
     * The content of the ImageAttachment.
     *
     * @type { PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: PixelMap;
    /**
     * Image size.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: SizeOptions;
    /**
     * Image vertical align.
     *
     * @type { ?ImageSpanAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalAlign?: ImageSpanAlignment;
    /**
     * Image fit.
     *
     * @type { ?ImageFit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    objectFit?: ImageFit;
    /**
     * The Image Layout Style.
     *
     * @type { ?ImageAttachmentLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    layoutStyle?: ImageAttachmentLayoutStyle;
    /**
     * Sets the color filter effect on the image attachment.
     *
     * @type { ?ColorFilterType } filter ColorFilter object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    colorFilter?: ColorFilterType;
}
/**
 * Defines the LeadingMarginSpanDrawInfo interface.
 *
 * @interface LeadingMarginSpanDrawInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface LeadingMarginSpanDrawInfo {
  /**
   * The x offset of the line.
   * The unit is px.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	x: double;

  /**
   * The top position of the line.
   * The unit is px.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	top: double;

  /**
   * The bottom position of the line.
   * The unit is px.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	bottom: double;

  /**
   * The baseline offset of the line.
   * The unit is px.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	baseline: double;

  /**
   * The direction of text.
   *
   * @type { TextDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	direction: TextDirection;

  /**
   * The start index of the first character in the current line relative to the component text content.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	start: int;

  /**
   * The end index of the first character in the current line relative to the component text content.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	end: int;

  /**
   * Whether current line is first line of a paragraph.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
	first: boolean;
}

/**
 * Defines the Attachment Type.
 *
 * @typedef { ImageAttachmentInterface | ResourceImageAttachmentOptions } AttachmentType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type AttachmentType = ImageAttachmentInterface | ResourceImageAttachmentOptions;
/**
 * Defines the ColorFilter Type.
 *
 * @typedef { ColorFilter | DrawingColorFilter } ColorFilterType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ColorFilterType = ColorFilter | DrawingColorFilter;
/**
 * Defines the  ImageAttachment Layout Style.
 *
 * @interface ImageAttachmentLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ImageAttachmentLayoutStyle {
    /**
     * Outer Margin.
     *
     * @type { ?(LengthMetrics | Margin) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    margin?: LengthMetrics | Margin;
    /**
     * Inner margin.
     *
     * @type { ?(LengthMetrics | Padding) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    padding?: LengthMetrics | Padding;
    /**
     * Border radius.
     *
     * @type { ?(LengthMetrics | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderRadius?: LengthMetrics | BorderRadiuses;
}
/**
 * Defines the CustomSpanMetrics interface.
 *
 * @interface CustomSpanMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CustomSpanMetrics {
    /**
     * CustomSpan Width.
     * The unit is vp.
     *
     * @type { double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width: double;
    /**
     * CustomSpan Height.
     * The unit is vp.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: double;
}
/**
 * Defines the CustomSpanDrawInfo interface.
 *
 * @interface CustomSpanDrawInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CustomSpanDrawInfo {
    /**
     * CustomSpan's offset relative to the parent component.
     * The unit is px.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    x: double;
    /**
     * The top position of the line where customSpan is located.
     * The unit is px.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lineTop: double;
    /**
     * The bottom position of the line where customSpan is located.
     * The unit is px.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lineBottom: double;
    /**
     * The baseline offset of the line where customSpan is located.
     * The unit is px.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    baseline: double;
}
/**
 * Defines the CustomSpanMeasureInfo interface.
 *
 * @interface CustomSpanMeasureInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CustomSpanMeasureInfo {
    /**
     * Current component's fontSize value.
     * The unit is fp.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize: double;
}
/**
 * Defines CustomSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class CustomSpan {
    /**
     * Measure the size of custom span.
     *
     * @param { CustomSpanMeasureInfo } measureInfo
     * @returns { CustomSpanMetrics } - CustomSpan Size
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    abstract onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics;
    /**
     * Draw the custom span.
     *
     * @param { DrawContext } context
     * @param { CustomSpanDrawInfo } drawInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    abstract onDraw(context: DrawContext, drawInfo: CustomSpanDrawInfo): void;
    /**
     * Invalidate all components that use the object, which will cause a re-render of all components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    invalidate(): void;
}
/**
 * Defines UserDataSpan. Used to store and obtain user data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class UserDataSpan {
}
/**
 * Defines LeadingMarginSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare abstract class LeadingMarginSpan {
    /**
     * Draw the leading margin span.
     *
     * @param { DrawContext } context
     * @param { LeadingMarginSpanDrawInfo } drawInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    abstract onDraw(context: DrawContext, drawInfo: LeadingMarginSpanDrawInfo): void;
    /**
     * Get the amount by which to adjust the leading margin.
     *
     * @returns { LengthMetrics } - the literal content of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    abstract getLeadingMargin(): LengthMetrics;
}
