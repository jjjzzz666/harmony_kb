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
import { ShadowOptions, ClickEvent, SelectionOptions, CommonMethod, Callback, HapticFeedbackMode, RectResult, HoverEvent, PixelMap } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor, Length, ResourceStr, Dimension, Margin, BorderRadiuses, Font, VoidCallback } from './units';
import { FontStyle, FontWeight, TextAlign, WordBreak, LineBreakStrategy, ImageSpanAlignment, ImageFit, ResponseType, CopyOptions, BarState } from './enums';
import { DecorationStyleInterface, StyledString, MutableStyledString } from './styledString';
import { Resource } from './../../../api/global/resource';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from './symbolglyph';
import { DecorationStyleResult, TextRange, MenuType, TextEditControllerEx, LayoutManager, PreviewText, StyledStringController, StyledStringChangedListener, TextDataDetectorConfig, OnDidChangeCallback, EditMenuOptions, KeyboardAppearance, AccessibilitySpanOptions, TextDirection, SelectedDragPreviewStyle, TextVerticalAlign, TextChangeReason, IMEClient } from './textCommon';
import { GestureEvent } from './gesture';
import { EnterKeyType, SubmitEvent } from './textInput';
import { LengthMetrics, ColorMetrics } from '../Graphics';
import { TextBackgroundStyle } from './span';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { ComponentContentBase } from '../ComponentContent';
/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RichEditorDeleteDirection {
    /**
     * Delete backward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BACKWARD,
    /**
     * Delete forward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    FORWARD
}
/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RichEditorSpanType {
    /**
     * Text,corresponding textSpan type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TEXT = 0,
    /**
     * Image,corresponding imageSpan type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IMAGE = 1,
    /**
     * Mixed,corresponding mixed span type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    MIXED = 2,
    /**
     * Builder,corresponding builderSpan type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BUILDER = 3,
    /**
     * When no other types are explicitly specified, this type will be matched.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 4
}
/**
 * Defines undo style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare enum UndoStyle {
    /**
     * Undo without style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    CLEAR_STYLE = 0,
    /**
     * Undo keep style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    KEEP_STYLE = 1
}
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum RichEditorResponseType {
    /**
     * Right click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RIGHT_CLICK = 0,
    /**
     * Long press.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LONG_PRESS = 1,
    /**
     * Selected by mouse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SELECT = 2,
    /**
     * When no other types are explicitly specified, this type will be matched.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 3
}
/**
 * Defines the span position.
 *
 * @interface RichEditorSpanPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSpanPosition {
    /**
     * Define the index of span.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanIndex: int;
    /**
     * The range of span.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanRange: [
        int,
        int
    ];
}
/**
 * Defines the span text style.
 *
 * @interface RichEditorTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorTextStyle {
    /**
     * font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * font size.
     *
     * @type { ?(Length | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize?: Length | double;
    /**
     * font style.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontStyle?: FontStyle;
    /**
     * font weight.
     *
     * @type { ?(int | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight?: int | FontWeight | string;
    /**
     * font family.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontFamily?: ResourceStr;
    /**
     * Font decoration.
     *
     * @type { ?DecorationStyleInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    decoration?: DecorationStyleInterface;
    /**
     * Text shadow
     *
     * @type { ?(ShadowOptions | Array<ShadowOptions>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textShadow?: ShadowOptions | Array<ShadowOptions>;
    /**
     * letter spacing.
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    letterSpacing?: double | string;
    /**
     * line height.
     *
     * @type { ? (double | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lineHeight?: double | string | Resource;
    /**
     * Set the text with half leading.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    halfLeading?: boolean;
    /**
     * Set font feature, advanced text styles and effects as designed by the font author.
     * The format is the like the CSS font-feature-settings attribute.
     *
     * @type { ?string }
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of RichEditor component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontFeature?: string;
    /**
     * Text background style.
     *
     * @type { ?TextBackgroundStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textBackgroundStyle?: TextBackgroundStyle;
    /**
     * The stroke width of the text.
     *
     * @type { ?(LengthMetrics | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: LengthMetrics | double;
    /**
     * The stroke color of the text.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeColor?: ResourceColor;
}
/**
 * Defines the leading margin placeholder of a paragraph.
 *
 * @interface LeadingMarginPlaceholder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LeadingMarginPlaceholder {
    /**
     * Placeholder pixelMap.
     *
     * @type { PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pixelMap: PixelMap;
    /**
     * Placeholder size.
     *
     * @type { [Dimension, Dimension] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size: [
        Dimension,
        Dimension
    ];
}
/**
 * Defines the paragraph style.
 *
 * @interface RichEditorParagraphStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorParagraphStyle {
    /**
     * Text alignment.
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
     * Leading margin.
     *
     * @type { ?(Dimension | LeadingMarginPlaceholder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    leadingMargin?: Dimension | LeadingMarginPlaceholder;
    /**
     * Set word break type.
     *
     * @type { ?WordBreak }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    wordBreak?: WordBreak;
    /**
     * Set line break strategy type.
     *
     * @type { ?LineBreakStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lineBreakStrategy?: LineBreakStrategy;
    /**
     * Set paragraph spacing.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    paragraphSpacing?: double;
    /**
     * Text direction, the default value is TextDirection.DEFAULT.
     *
     * @type { ?TextDirection } - the text direction of the paragraph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textDirection?: TextDirection;
}
/**
 * Defines the paste event.
 *
 * @interface PasteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PasteEvent {
    /**
     * Override system paste event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * Defines the text span.
 *
 * @interface RichEditorTextSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorTextSpan {
    /**
     * The position of the text span.
     *
     * @type { RichEditorSpanPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * The content of the text span.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: string;
    /**
     * text style.
     *
     * @type { ?RichEditorTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textStyle?: RichEditorTextStyle;
}
/**
 * Defines the richEditor Image Layout Style.
 *
 * @interface RichEditorLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RichEditorLayoutStyle {
    /**
     * Outer Margin.
     *
     * @type { ?(Dimension | Margin) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    margin?: Dimension | Margin;
    /**
     * Border radius.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderRadius?: Dimension | BorderRadiuses;
}
/**
 * Defines the span image style.
 *
 * @interface RichEditorImageSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorImageSpanStyle {
    /**
     * image size.
     *
     * @type { ?[Dimension, Dimension] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size?: [
        Dimension,
        Dimension
    ];
    /**
     * image vertical align.
     *
     * @type { ?ImageSpanAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalAlign?: ImageSpanAlignment;
    /**
     * image fit.
     *
     * @type { ?ImageFit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    objectFit?: ImageFit;
    /**
     * RichEditor ImageSpan Layout Style.
     *
     * @type { ?RichEditorLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    layoutStyle?: RichEditorLayoutStyle;
}
/**
 * Defines the symbol span style.
 *
 * @interface RichEditorSymbolSpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanStyle {
    /**
     * The font size.
     *
     * @type { ?(double | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize?: double | string | Resource;
    /**
     * The font color.
     *
     * @type { ?Array<ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor?: Array<ResourceColor>;
    /**
     * The font weight.
     *
     * @type { ?(int | FontWeight | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight?: int | FontWeight | string;
    /**
     * The symbol span effect strategy.
     *
     * @type { ?SymbolEffectStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    effectStrategy?: SymbolEffectStrategy;
    /**
     * The symbol span rendering strategy.
     *
     * @type { ?SymbolRenderingStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    renderingStrategy?: SymbolRenderingStrategy;
}
/**
 * Defines the text style result.
 *
 * @interface RichEditorTextStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorTextStyleResult {
    /**
     * font color.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor: ResourceColor;
    /**
     * font size.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize: double;
    /**
     * font style.
     *
     * @type { FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontStyle: FontStyle;
    /**
     * font weight.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight: int;
    /**
     * font family.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontFamily: string;
    /**
     * Font decoration.
     *
     * @type { DecorationStyleResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    decoration: DecorationStyleResult;
    /**
     * Text shadow
     *
     * @type { ?Array<ShadowOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textShadow?: Array<ShadowOptions>;
    /**
     * letter spacing.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    letterSpacing?: double;
    /**
     * line height.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lineHeight?: double;
    /**
     * Set the text with half leading.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    halfLeading?: boolean;
    /**
     * Set font feature, advanced text styles and effects as designed by the font author.
     * The format is the like the CSS font-feature-settings attribute.
     *
     * @type { ?string }
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of RichEditor component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontFeature?: string;
    /**
     * Text background style.
     *
     * @type { ?TextBackgroundStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textBackgroundStyle?: TextBackgroundStyle;
    /**
     * Get the stroke width of the text.
     * The unit is vp.
     *
     * @type { ?double } - the stroke width of the text or undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: double;
    /**
     * Get the stroke color of the text.
     *
     * @type { ?ResourceColor } - the stroke color of the text or undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeColor?: ResourceColor;
}
/**
 * Defines the paragraph result.
 *
 * @interface RichEditorParagraphResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorParagraphResult {
    /**
     * The paragraph style.
     *
     * @type { RichEditorParagraphStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style: RichEditorParagraphStyle;
    /**
     * The range of paragraph based on character indices.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    range: [
        int,
        int
    ];
}
/**
 * Defines the symbol span style result.
 *
 * @interface RichEditorSymbolSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanStyleResult {
    /**
     * The font size.
     *
     * @type { double | string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize: double | string | Resource;
    /**
     * The font color.
     *
     * @type { Array<ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor: Array<ResourceColor>;
    /**
     * The font weight.
     *
     * @type { int | FontWeight | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight: int | FontWeight | string;
    /**
     * The symbol span effect strategy.
     *
     * @type { SymbolEffectStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    effectStrategy: SymbolEffectStrategy;
    /**
     * The symbol span rendering strategy.
     *
     * @type { SymbolRenderingStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    renderingStrategy: SymbolRenderingStrategy;
}
/**
 * Defines the text span result.
 *
 * @interface RichEditorTextSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorTextSpanResult {
    /**
     * The position of the text span.
     *
     * @type { RichEditorSpanPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * The content of the text span.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: string;
    /**
     * text style.
     *
     * @type { RichEditorTextStyleResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textStyle: RichEditorTextStyleResult;
    /**
     * get offset in span.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetInSpan: [
        int,
        int
    ];
    /**
     * Symbol span style.
     *
     * @type { ?RichEditorSymbolSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    symbolSpanStyle?: RichEditorSymbolSpanStyle;
    /**
     * The resource string of the symbol span.
     *
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    valueResource?: Resource;
    /**
     * The Style of paragraph.
     *
     * @type { ?RichEditorParagraphStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    paragraphStyle?: RichEditorParagraphStyle;
    /**
     * The preview text.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    previewText?: string;
    /**
     * RichEditor url style.
     *
     * @type { ?RichEditorUrlStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * Defines the span image style result.
 *
 * @interface RichEditorImageSpanStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorImageSpanStyleResult {
    /**
     * image size.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    size: [
        int,
        int
    ];
    /**
     * image vertical align.
     *
     * @type { ImageSpanAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    verticalAlign: ImageSpanAlignment;
    /**
     * image fit.
     *
     * @type { ImageFit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    objectFit: ImageFit;
    /**
     * RichEditor ImageSpan Layout Style.
     *
     * @type { ?RichEditorLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    layoutStyle?: RichEditorLayoutStyle;
}
/**
 * Defines the image span result.
 *
 * @interface RichEditorImageSpanResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorImageSpanResult {
    /**
     * The position of the image span.
     *
     * @type { RichEditorSpanPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * The pixel map of the image span.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    valuePixelMap?: PixelMap;
    /**
     * The resource string of the image span.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    valueResourceStr?: ResourceStr;
    /**
     * image attribute.
     *
     * @type { RichEditorImageSpanStyleResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    imageStyle: RichEditorImageSpanStyleResult;
    /**
     * get offset in span.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offsetInSpan: [
        int,
        int
    ];
}
/**
 * Defines the image span.
 *
 * @interface RichEditorImageSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorImageSpan {
    /**
     * The position of the image span.
     *
     * @type { RichEditorSpanPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spanPosition: RichEditorSpanPosition;
    /**
     * The content of the image span.
     *
     * @type { PixelMap | ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: PixelMap | ResourceStr;
    /**
     * image style.
     *
     * @type { ?RichEditorImageSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    imageStyle?: RichEditorImageSpanStyle;
}
/**
 * Defines range of RichEditor.
 *
 * @interface RichEditorRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorRange {
    /**
     * start offset.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: int;
    /**
     * end offset.
     *
     * @type { ?int }
     * @default text length
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: int;
}
/**
 * Defines the richEditor Gestures.
 *
 * @interface RichEditorGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorGesture {
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
     * Trigger a gesture event when a double click event is complete.
     *
     * @type { ?Callback<GestureEvent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onDoubleClick?: Callback<GestureEvent>;
}
/**
 * Defines the span options of RichEditor.
 *
 * @interface RichEditorTextSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorTextSpanOptions {
    /**
     * the offset that add a text span at.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: int;
    /**
     * text style.
     *
     * @type { ?RichEditorTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: RichEditorTextStyle;
    /**
     * Paragraph style.
     *
     * @type { ?RichEditorParagraphStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    paragraphStyle?: RichEditorParagraphStyle;
    /**
     * RichEditor gesture.
     *
     * @type { ?RichEditorGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    gesture?: RichEditorGesture;
    /**
     * RichEditor url style.
     *
     * @type { ?RichEditorUrlStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * Defines the custom keyboard options of RichEditor.
 *
 * @interface KeyboardOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface KeyboardOptions {
    /**
     * Indicates whether to support custom keyboard avoidance.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    supportAvoidance?: boolean;
}
/**
 * Defines the image span options of RichEditor.
 *
 * @interface RichEditorImageSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorImageSpanOptions {
    /**
     * the offset that add image span at.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: int;
    /**
     * image style.
     *
     * @type { ?RichEditorImageSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    imageStyle?: RichEditorImageSpanStyle;
    /**
     * RichEditor gesture.
     *
     * @type { ?RichEditorGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    gesture?: RichEditorGesture;
    /**
     * RichEditor onHover.
     *
     * @type { ?OnHoverCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onHover?: OnHoverCallback;
}
/**
 * Defines the builder span options of RichEditor.
 *
 * @interface RichEditorBuilderSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorBuilderSpanOptions {
    /**
     * The offset that add custom builder span at.
     *
     * @type { ?int } Indicates the index where the builder will be inserted
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: int;
    /**
     * builder span drag background color
     *
     * @type { ?ColorMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    dragBackgroundColor?: ColorMetrics;
    /**
     * builder span drag shadow configuration
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    isDragShadowNeeded?: boolean;

    /**
     * Set accessibility options for builder span.
     *
     * @type { ?AccessibilitySpanOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    accessibilitySpanOptions?: AccessibilitySpanOptions;
}
/**
 * Defines the placeholder style.
 *
 * @interface PlaceholderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PlaceholderStyle {
    /**
     * font.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    font?: Font;
    /**
     * fontColor.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor?: ResourceColor;
}
/**
 * Defines span style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSpanStyleOptions extends RichEditorRange {
}
/**
 * Defines paragraph style option of RichEditor.
 *
 * @extends RichEditorRange
 * @interface RichEditorParagraphStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorParagraphStyleOptions extends RichEditorRange {
    /**
     * Paragraph style.
     *
     * @type { RichEditorParagraphStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style: RichEditorParagraphStyle;
}
/**
 * Defines text span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateTextSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * text style.
     *
     * @type { RichEditorTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textStyle: RichEditorTextStyle;
    /**
     * RichEditor url style.
     *
     * @type { ?RichEditorUrlStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    urlStyle?: RichEditorUrlStyle;
}
/**
 * Defines image span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateImageSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * image style.
     *
     * @type { RichEditorImageSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    imageStyle: RichEditorImageSpanStyle;
}
/**
 * Defines symbol span style option of RichEditor.
 *
 * @extends RichEditorSpanStyleOptions
 * @interface RichEditorUpdateSymbolSpanStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorUpdateSymbolSpanStyleOptions extends RichEditorSpanStyleOptions {
    /**
     * Update the symbol span style.
     *
     * @type { RichEditorSymbolSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    symbolStyle: RichEditorSymbolSpanStyle;
}
/**
 * Defines the symbol span options of RichEditor.
 *
 * @interface RichEditorSymbolSpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSymbolSpanOptions {
    /**
     * The offset that add custom symbol span at.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: int;
    /**
     * The style that add custom symbol span at.
     *
     * @type { ?RichEditorSymbolSpanStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: RichEditorSymbolSpanStyle;
}
/**
 * Defines the text information for editing.
 *
 * @interface RichEditorSelection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorSelection {
    /**
     * The location info.
     *
     * @type { [int, int] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selection: [
        int,
        int
    ];
    /**
     * The selected text content.
     *
     * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * Defines the inserted text value info.
 *
 * @interface RichEditorInsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorInsertValue {
    /**
     * The location info where the value will be inserted.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    insertOffset: int;
    /**
     * The inserted value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    insertValue: string;
    /**
     * The preview text.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    previewText?: string;
}
/**
 * Provides an interface for deleting value from text.
 *
 * @interface RichEditorDeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorDeleteValue {
    /**
     * The offset of deleting.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset: int;
    /**
     * The deleted direction.
     *
     * @type { RichEditorDeleteDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction: RichEditorDeleteDirection;
    /**
     * The deleted text length.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    length: int;
    /**
     * The deleted span object.
     *
     * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * Provides an interface for changes in the text.
 *
 * @interface RichEditorChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorChangeValue {
    /**
     * Range of content that will be replaced.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rangeBefore: TextRange;
    /**
     * Text spans to replace.
     *
     * @type { Array<RichEditorTextSpanResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replacedSpans: Array<RichEditorTextSpanResult>;
    /**
     * Image spans to replace.
     *
     * @type { Array<RichEditorImageSpanResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replacedImageSpans: Array<RichEditorImageSpanResult>;
    /**
     * Symbol spans to replace.
     *
     * @type { Array<RichEditorTextSpanResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replacedSymbolSpans: Array<RichEditorTextSpanResult>;
    /**
     * The reason for text changes.
     *
     * @type { ?TextChangeReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    changeReason?: TextChangeReason;
}
/**
 * Defines the options of RichEditor.
 *
 * @interface RichEditorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorOptions {
    /**
     * RichEditor controller.
     *
     * @type { RichEditorController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    controller: RichEditorController;
}
/**
 * Defines the options of RichEditor with StyledString.
 *
 * @interface RichEditorStyledStringOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorStyledStringOptions {
    /**
     * RichEditor controller.
     *
     * @type { RichEditorStyledStringController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    controller: RichEditorStyledStringController;
}
/**
 * Defines the selection menu options.
 *
 * @interface SelectionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SelectionMenuOptions {
    /**
     * Callback function when the selection menu appears.
     *
     * @type { ?MenuOnAppearCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAppear?: MenuOnAppearCallback;
    /**
     * Callback function when the selection menu disappears.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDisappear?: VoidCallback;
    /**
     * Menu type, default value is MenuType.SELECTION_MENU.
     *
     * @type { ?MenuType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    menuType?: MenuType;
    /**
     * Callback function when the selection menu is displayed.
     *
     * @type { ?MenuCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onMenuShow?: MenuCallback;
    /**
     * Callback function when the selection menu is hidden.
     *
     * @type { ?MenuCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onMenuHide?: MenuCallback;
    /**
     * Defines the preview menu options.
     *
     * @type { ?PreviewMenuOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    previewMenuOptions?: PreviewMenuOptions;
}
/**
 * Defines the preview menu options.
 *
 * @interface PreviewMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface PreviewMenuOptions {
    /**
     * Defines the haptic feedback mode of preview menu.
     *
     * @type { ?HapticFeedbackMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    hapticFeedbackMode?: HapticFeedbackMode;
}
/**
 * Provides Base Controller for RichEditor.
 *
 * @implements TextEditControllerEx
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RichEditorBaseController implements TextEditControllerEx {
    /**
     * Get caret offset from controller.
     *
     * @returns { int | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getCaretOffset(): int | undefined;
    /**
     * Set caret offset.
     *
     * @param { int } offset - caret offset.
     * @returns { boolean | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setCaretOffset(offset: int): boolean | undefined;
    /**
     * close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    closeSelectionMenu(): void;
    /**
     * Get the typing text style.
     *
     * @returns { RichEditorTextStyle | undefined; }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getTypingStyle(): RichEditorTextStyle | undefined;
    /**
     * Set the typing text style.
     *
     * @param { RichEditorTextStyle } value - set the typing text style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setTypingStyle(value: RichEditorTextStyle): void;
    /**
     * Set the typing paragraph style.
     *
     * @param { RichEditorParagraphStyle | undefined } style - set the typing paragraph style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    setTypingParagraphStyle(style: RichEditorParagraphStyle | undefined): void;
    /**
     * Specify the start and end positions to select a range of content.
     *
     * @param { int } selectionStart - The start position of the selected text.
     * @param { int } selectionEnd - The end position of the selected text.
     * @param { SelectionOptions } [options] - Indicates the options of selection.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
    /**
     * Judge whether is in editing state
     *
     * @returns { boolean | undefined } - true is editing state, false is non editing status
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isEditing(): boolean | undefined;
    /**
     * Stop editing state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    stopEditing(): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager | undefined } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getLayoutManager(): LayoutManager | undefined;
    /**
     * Get PreviewText.
     *
     * @returns { PreviewText | undefined } - Return the PreviewText.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getPreviewText(): PreviewText | undefined;
    /**
     * Get CaretRect.
     *
     * @returns { RectResult | undefined } - Return the caret rect or undefined value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getCaretRect(): RectResult | undefined;

    /**
    * Delete the character before the caret of the input field component in editing state.
    * Otherwise, delete the last character of the input field component.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    deleteBackward(): void;

    /**
    * Set the styledString placeholder.
    *
    * @param { StyledString } styledString - The styledString for placeholder.
    *     If the parameter is invalid, this method will have no effect.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 24 static
    */
    setStyledPlaceholder(styledString: StyledString): void;
}
/**
 * Provides Controller for RichEditor.
 *
 * @extends RichEditorBaseController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RichEditorController extends RichEditorBaseController {
    /**
     * Add a text span.
     *
     * @param { ResourceStr } content - text value.
     * @param { RichEditorTextSpanOptions } [options] - span info.
     * @returns { int | undefined } span index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): int | undefined;
    /**
     * Add a image span.
     *
     * @param { PixelMap | ResourceStr } value - image value.
     * @param { RichEditorImageSpanOptions } [options] - image span info.
     * @returns { int | undefined } span index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): int | undefined;
    /**
     * Add a builder span.
     *
     * @param { CustomBuilder } value - Indicates the custom builder node
     * @param { RichEditorBuilderSpanOptions } [options] - span option.
     * @returns { int | undefined } span index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): int | undefined;
    /**
     * Add a symbol span.
     *
     * @param { Resource } value - symbol span value
     * @param { RichEditorSymbolSpanOptions } [options] - symbol span option.
     * @returns { int | undefined } symbol span index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions): int | undefined;
    /**
     * Modify span style.
     *
     * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
     *    RichEditorUpdateSymbolSpanStyleOptions } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions |
        RichEditorUpdateSymbolSpanStyleOptions): void;
    /**
     * Modify span style.
     *
     * @param { RichEditorParagraphStyleOptions } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    updateParagraphStyle(value: RichEditorParagraphStyleOptions): void;
    /**
     * Delete span.
     *
     * @param { RichEditorRange } [value] - range for deleting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    deleteSpans(value?: RichEditorRange): void;
    /**
     * Get span content.
     *
     * @param { RichEditorRange } [value] - range for getting span info.
     * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult> | undefined;
    /**
     * Get span content.
     *
     * @param { RichEditorRange } [value] - range for getting span info.
     * @returns { Array<RichEditorParagraphResult> | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult> | undefined;
    /**
     * Called when the content is selected.
     *
     * @returns { RichEditorSelection | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getSelection(): RichEditorSelection | undefined;
    /**
     * Convert StyledString to spans in rich editor.
     * return a empty Array<RichEditorSpan> if convert failed
     *
     * @param { StyledString } value - StyledString.
     * @returns { Array<RichEditorSpan> | undefined }
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fromStyledString(value: StyledString): Array<RichEditorSpan> | undefined;
    /**
     * Convert spans to StyledString in rich editor.
     * return a empty StyledString if convert failed
     *
     * @param { RichEditorRange } value - range of spans in rich editor
     * @returns { StyledString | undefined }
     * @throws { BusinessError } 401 - The parameter check failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    toStyledString(value: RichEditorRange): StyledString | undefined;
}
/**
 * Defines the types of spans in rich editor.
 *
 * @typedef { RichEditorImageSpanResult | RichEditorTextSpanResult } RichEditorSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type RichEditorSpan = RichEditorImageSpanResult | RichEditorTextSpanResult;
/**
 * Provides Controller for RichEditor with StyledString.
 *
 * @extends RichEditorBaseController
 * @implements StyledStringController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class RichEditorStyledStringController extends RichEditorBaseController
    implements StyledStringController {
    /**
     * Set the StyledString of the RichEditor.
     *
     * @param { StyledString } styledString - StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setStyledString(styledString: StyledString): void;
    /**
     * Get the StyledString of the RichEditor.
     *
     * @returns { MutableStyledString | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getStyledString(): MutableStyledString | undefined;
    /**
     * Get the selection in the StyledString of the RichEditor.
     *
     * @returns { RichEditorRange | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getSelection(): RichEditorRange | undefined;
    /**
     * Register content changed listener
     *
     * @param { StyledStringChangedListener } listener - content changed listener.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onContentChanged(listener: StyledStringChangedListener): void;
}
/**
 * Provides attribute for RichEditor.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface RichEditorAttribute extends CommonMethod {
    /**
     * Called when on ready.
     *
     * @param { VoidCallback | undefined } callback - The triggered function when rich editor is ready.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onReady(callback: VoidCallback | undefined): this;
    /**
     * Called when the content is selected.
     *
     * @param { Callback<RichEditorSelection> | undefined } callback - The triggered function when select text.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSelect(callback: Callback<RichEditorSelection> | undefined): this;
    /**
     * Called when selection range or caret position is changed.
     *
     * @param { Callback<RichEditorRange> | undefined } callback - The triggered function when change selection range or
     *     caret position.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSelectionChange(callback: Callback<RichEditorRange> | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * @param { Callback<RichEditorInsertValue, boolean> | undefined } callback - The triggered function when text
     *     content is about to insert.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean> | undefined): this;
    /**
     * Get text value information when completed input.
     *
     * @param { Callback<RichEditorTextSpanResult> | undefined } callback - The triggered function when text content
     *     has been inserted.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onIMEInputComplete(callback: Callback<RichEditorTextSpanResult> | undefined): this;
    /**
     * Called when ime input complete.
     *
     * @param { Callback<TextRange> | undefined } callback - The triggered function when text content has been inserted.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidIMEInput(callback: Callback<TextRange> | undefined): this;
    /**
     * Get text value information when about to delete.
     *
     * @param { Callback<RichEditorDeleteValue, boolean> | undefined } callback - The triggered function when text
     *     content is about to delete.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean> | undefined): this;
    /**
     * Notify that the deletion has been completed
     *
     * @param { VoidCallback | undefined } callback - The triggered function when text content has been deleted.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDeleteComplete(callback: VoidCallback | undefined): this;
    /**
     * Allow replication.
     *
     * @param { CopyOptions | undefined } value - Indicates the type of copy option.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default copyOptions(value: CopyOptions | undefined): this;
    /**
     * Bind to the selection menu.
     *
     * @param { RichEditorSpanType | undefined } spanType - Indicates the type of selection menu.
     * @param { CustomBuilder | undefined } content - Indicates the content of selection menu.
     * @param { ResponseType | RichEditorResponseType | undefined } responseType - Indicates response type of
     *     selection menu.
     * @param { SelectionMenuOptions | undefined } [options] - Indicates the options of selection menu.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default bindSelectionMenu(spanType: RichEditorSpanType | undefined, content: CustomBuilder | undefined,
        responseType: ResponseType | RichEditorResponseType | undefined,
        options?: SelectionMenuOptions | undefined): this;
    /**
     * Set custom keyboard of the rich editor.
     *
     * @param { CustomBuilder | ComponentContentBase | undefined } value - The custom keyboard of RichEditor
     *     If undefined is set, current custom keyboard will be unbound from rich editor.
     * @param { KeyboardOptions | undefined } [options] - Indicates the custom keyboard options of RichEditor
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined,
                           options?: KeyboardOptions | undefined): this;
    /**
     * Defines onPaste callback.
     *
     * @param { PasteEventCallback | undefined } callback Executed when a paste operation is performed.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onPaste(callback: PasteEventCallback | undefined): this;
    /**
     * Enable data detector.
     *
     * @param { boolean | undefined } enable - Enable data detector.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableDataDetector(enable: boolean | undefined): this;
    /**
     * Enable preview text.
     *
     * @param { boolean | undefined } enable - Enable preview text.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enablePreviewText(enable: boolean | undefined): this;
    /**
     * Data detector with config.
     *
     * @param { TextDataDetectorConfig | undefined } config - The config of text data detector.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default dataDetectorConfig(config: TextDataDetectorConfig | undefined): this;
    /**
     * Enable selected data detector.
     *
     * @param { boolean | undefined } enable - whether to enable the selected data detector.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default enableSelectedDataDetector(enable: boolean | undefined): this;
    /**
     * Set richEditor placeholder.
     *
     * @param { ResourceStr | undefined } value - The value of placeholder.
     * @param { PlaceholderStyle | undefined } [style] - The style of placeholder.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default placeholder(value: ResourceStr | undefined, style?: PlaceholderStyle | undefined): this;
    /**
     * Set caret color of rich editor.
     *
     * @param { ResourceColor | undefined } value - Custom color types.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default caretColor(value: ResourceColor | undefined): this;
    /**
     * Set background color of selected text in rich editor.
     *
     * @param { ResourceColor | undefined } value - Custom color types.
     * @returns { RichEditorAttribute } The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Called when edit status is changed
     *
     * @param { Callback<boolean> | undefined } callback - when edit status is changed
     * @returns { RichEditorAttribute } returns The attribute of the rich editor.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onEditingChange(callback: Callback<boolean> | undefined): this;
    /**
     * Set enter key type of soft keyboard.
     *
     * @param { EnterKeyType | undefined } value - the enter key type of soft keyboard
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { SubmitCallback | undefined } callback - callback of the listened event.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSubmit(callback: SubmitCallback | undefined): this;
    /**
     * Called before text changed.
     *
     * @param { Callback<RichEditorChangeValue, boolean> | undefined } callback - The triggered function before text
     *     content is about to change.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onWillChange(callback: Callback<RichEditorChangeValue, boolean> | undefined): this;
    /**
     * Called after text changed.
     *
     * @param { OnDidChangeCallback | undefined } callback - The triggered function after content changed.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidChange(callback: OnDidChangeCallback | undefined): this;
    /**
     * Called before the cut event.
     *
     * @param { Callback<CutEvent> | undefined } callback - Called before the cut event.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onCut(callback: Callback<CutEvent> | undefined): this;
    /**
     * Called before the copy event.
     *
     * @param { Callback<CopyEvent> | undefined } callback - Called before the copy event.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onCopy(callback: Callback<CopyEvent> | undefined): this;
    /**
     * Called before the RichEditor component attach the InputMethod.
     *
     * @param { Callback<IMEClient> | undefined } callback - The triggered function before attach the InputMethod.
     *     If `undefined` is passed, the existing registered event will be removed.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions | undefined } editMenu - Customize text menu options.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean | undefined } isEnabled - Whether enable request keyboard when on focus.
     * @returns { RichEditorAttribute } Returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableKeyboardOnFocus(isEnabled: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean | undefined } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableHapticFeedback(isEnabled: boolean | undefined): this;
    /**
     * Define bar state of the RichEditor.
     *
     * @param { BarState | undefined } state - bar state.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default barState(state: BarState | undefined): this;
    /**
     * Define the max length content of the richEditor.
     *
     * @param { Optional<int> } maxLength - The maximun length content of the richEditor.
     * @returns { RichEditorAttribute }  returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxLength(maxLength: int | undefined): this;
    /**
     * Define max lines of the richEditor.
     *
     * @param { Optional<int> } maxLines - The maximun Lines of the richEditor.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxLines(maxLines: int | undefined): this;
    /**
     * Whether to enable automatic spacing between Chinese and Latin characters.
     *
     * @param { boolean | undefined } enable - The default value is false, indicates the flag whether to enable automatic spacing.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default enableAutoSpacing(enable: boolean | undefined): this;
    /**
     * Set the keyboard appearance.
     *
     * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    /**
     * Set undo style.
     *
     * @param { UndoStyle | undefined } style - Default value is UndoStyle.CLEAR_STYLE.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default undoStyle(style: UndoStyle | undefined): this;
    /**
     * Set scrollbar color of rich editor.
     *
     * @param { ColorMetrics | undefined } color  - Color of the rich editor scrollbar.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default scrollBarColor(color: ColorMetrics | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stopBackPress(isStopped: boolean | undefined): this;

    /**
     * Determines whether the layout adds extra padding at the top and bottom to make space for characters.
     *
     * @param { boolean | undefined } include - Whether enable the feature, the default value is false.
     *     Passing `undefined` resets it to the default value.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default includeFontPadding(include: boolean | undefined): this;

    /**
     * Whether to include ascent/descent from fallback fonts to prevent overlapping lines.
     *
     * @param { boolean | undefined } enabled - Whether enable the feature, the default value is false.
     *     Passing `undefined` resets it to the default value.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fallbackLineSpacing(enabled: boolean | undefined): this;
    /**
     * Whether to enable single line mode.
     *
     * @param { boolean | undefined } isEnable - Whether to enable single line mode, default is false.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default singleLine(isEnable: boolean | undefined): this;
    /**
    * Whether to compress punctuation at the beginning of line.
    *
    * @param { boolean | undefined } enabled - Whether to enable the feature, the default value is false.
    *     Passing `undefined` resets it to the default value.
    * @returns { RichEditorAttribute } - returns the instance of the RichEditorAttribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    default compressLeadingPunctuation(enabled: boolean | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<RichEditorAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
     * @returns { RichEditorAttribute } returns the instance of the RichEditorAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */    
    default attributeModifier(modifier: AttributeModifier<RichEditorAttribute> | AttributeModifier<CommonMethod> |
        undefined): this;
    /**
     * Used to set the selected drag preview style.
     *
     * @param { SelectedDragPreviewStyle | undefined } value - Selected drag preview style.
     *     If set undefined will reset the style.
     * @returns { RichEditorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;
}
/**
 * the callback of cut event.
 * @interface CutEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CutEvent {
    /**
     * Prevent system cut event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * the callback of copy event.
 * @interface CopyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CopyEvent {
    /**
     * Prevent system cut event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    preventDefault(): void;
}
/**
 * RichEditor url style.
 * @interface RichEditorUrlStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RichEditorUrlStyle {
    /**
     * uniform resoure locator.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    url?: ResourceStr;
}
/**
 * callback of the listened enter key event.
 *
 * @typedef { function } SubmitCallback
 * @param { EnterKeyType } enterKey - the enter key type of soft keyboard.
 * @param { SubmitEvent } event - Provides the method of keeping RichEditor editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
/**
 * Callback function when the selection menu appears.
 *
 * @typedef { function } MenuOnAppearCallback
 * @param { int } start - Start offset of the selected content in rich editor.
 * @param { int } end - End offset of the selected content in rich editor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type MenuOnAppearCallback = (start: int, end: int) => void;
/**
 * Callback function when the selection menu show or hide.
 *
 * @typedef { function } MenuCallback
 * @param { int } start - Start offset of the selected content in rich editor.
 * @param { int } end - End offset of the selected content in rich editor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type MenuCallback = (start: int, end: int) => void;
/**
 * Callback function when a paste operation is performed.
 *
 * @typedef { function } PasteEventCallback
 * @param { PasteEvent } [event] - The paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type PasteEventCallback = (event?: PasteEvent) => void;
/**
 * callback of the on hover event.
 *
 * @typedef { function } OnHoverCallback
 * @param { boolean } status - The hover status
 * @param { HoverEvent } event - The event info for hover.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnHoverCallback = (status: boolean, event: HoverEvent) => void;

/**
 * Defines RichEditor Component.
 *
 * @param { RichEditorOptions | RichEditorStyledStringOptions } options
 * @returns { RichEditorAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RichEditor(
    options: RichEditorOptions | RichEditorStyledStringOptions, 
): RichEditorAttribute