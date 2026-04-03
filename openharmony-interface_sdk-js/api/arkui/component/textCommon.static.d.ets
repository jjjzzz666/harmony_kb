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
import { ResourceColor, ResourceStr, Length, LengthMetrics } from './units';
import { DecorationStyleInterface, MutableStyledString, StyledString } from './styledString';
import { SelectionOptions, Callback } from './common';
import { TextDecorationType, TextDecorationStyle } from './enums';
import { AttributeModifier, CommonMethod, LinearGradientOptions, RadialGradientOptions } from './common';
import text from '../../@ohos.graphics.text';
import { InputMethodExtraConfig } from '../../@ohos.inputMethod.ExtraConfig'

/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextDataDetectorType {
    /**
     * Detector type phone number.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PHONE_NUMBER = 0,
    /**
     * Detector type URL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    URL = 1,
    /**
     * Detector type email.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EMAIL = 2,
    /**
     * Detector type address.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ADDRESS = 3,
    /**
     * Detector type datetime.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DATE_TIME = 4
}
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextDataDetectorConfig {
    /**
     * Text data detector types. The default value is an empty array.
     * Set to `undefined` or `null` will restore it to the default value.
     *
     * @type { TextDataDetectorType[] | undefined | null }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    types: TextDataDetectorType[] | undefined | null;
    /**
     * Text data detect result callback.
     *
     * @type { ?Callback<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDetectResultUpdate?: Callback<string>;
    /**
     * The color of AI entity.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * The decoration of AI entity.
     *
     * @type { ?DecorationStyleInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    decoration?: DecorationStyleInterface;
    /**
     * Used to set whether the preview window will be displayed when long-presses and selects a word.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    enablePreviewMenu?: boolean;
}
/**
 * Defines range of text type component.
 *
 * @interface TextRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextRange {
    /**
     * Start offset.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: int;
    /**
     * End offset.
     *
     * @type { ?int }
     * @default text length
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: int;
}
/**
 * Defines the inserted text value info.
 *
 * @interface InsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface InsertValue {
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
}
/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextDeleteDirection {
    /**
     * Delete backward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BACKWARD = 0,
    /**
     * Delete forward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    FORWARD = 1
}
/**
 * Defines menu type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum MenuType {
    /**
     * Selection menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SELECTION_MENU = 0,
    /**
     * Preview menu, only for image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PREVIEW_MENU = 1
}
/**
 * Declare the type of automatic case mode switching.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AutoCapitalizationMode {
    /**
     * The default status is invalid.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 0,
    /**
     * Automatic case by words.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    WORDS = 1,
    /**
     * Automatic case by sentences.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SENTENCES = 2,
    /**
     * Automatic case by full characters.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ALL_CHARACTERS = 3
}
/**
 * Provides an interface for deleting value from text.
 *
 * @interface DeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DeleteValue {
    /**
     * The location info where the value will be deleted.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    deleteOffset: int;
    /**
     * The deleted direction.
     *
     * @type { TextDeleteDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction: TextDeleteDirection;
    /**
     * The deleted value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    deleteValue: string;
}
/**
 * Callback after content changed.
 *
 * @typedef { function } OnDidChangeCallback
 * @param { TextRange } rangeBefore - Range of content that had been replaced.
 * @param { TextRange } rangeAfter - Range of content that newly added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
/**
 * Callback when input sometimes has info of previewText.
 *
 * @typedef { function } EditableTextOnChangeCallback
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @param { TextChangeOptions } [options] - contains the selection range before and after the change, as well as
 *    the old content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type EditableTextOnChangeCallback =
                                      (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;
/**
 * Define the text selection controller.
 *
 * @interface TextBaseController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextBaseController {
    /**
     * Set selection to select a range of content.
     *
     * @param { int } selectionStart - The start position of the selected text.
     * @param { int } selectionEnd - The end position of the selected text.
     * @param { SelectionOptions } [options] - Indicates the options of selection.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    closeSelectionMenu(): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager | undefined } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getLayoutManager(): LayoutManager | undefined;
}
/**
 * Define the text extended editing controller.
 *
 * @extends TextBaseController
 * @interface TextEditControllerEx
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextEditControllerEx extends TextBaseController {
    /**
     * Judge whether is in editing state
     *
     * @returns { boolean | undefined } - true means that the component is in editing state, false means is non in editing status
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
     * Set caret offset.
     *
     * @param { int } offset - caret offset.
     * @returns { boolean | undefined } - Return true if the caret offset was successfully set, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setCaretOffset(offset: int): boolean | undefined;
    /**
     * Get caret offset from controller.
     *
     * @returns { int | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getCaretOffset(): int | undefined;
    /**
     * Get PreviewText.
     *
     * @returns { PreviewText | undefined } - Return the PreviewText.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getPreviewText(): PreviewText | undefined;
}
/**
 * The previewText.
 * @interface PreviewText
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PreviewText {
    /**
     * Start offset of the previewText
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset: int;
    /**
     * Value of the previewText.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: string;
}
/**
 * Define the StyledString controller.
 *
 * @interface StyledStringController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StyledStringController {
    /**
     * Set the StyledString of the component.
     *
     * @param { StyledString } styledString - StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setStyledString(styledString: StyledString): void;
    /**
     * Get the StyledString of the component.
     *
     * @returns { MutableStyledString | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getStyledString(): MutableStyledString | undefined;
}
/**
 * Define the StyledString changed listener.
 *
 * @interface StyledStringChangedListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StyledStringChangedListener {
    /**
     * Called before text changed.
     *
     * @type { ?Callback<StyledStringChangeValue, boolean> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillChange?: Callback<StyledStringChangeValue, boolean>;
    /**
     * Called after text changed.
     *
     * @type { ?OnDidChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidChange?: OnDidChangeCallback;
}
/**
 * Define the StyledString changed value.
 *
 * @interface StyledStringChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface StyledStringChangeValue {
    /**
     * Range of the content to be replaced.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    range: TextRange;
    /**
     * StyledString to replace.
     *
     * @type { StyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    replacementString: StyledString;
    /**
     * Preview StyledString
     *
     * @type { ?StyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    previewText?: StyledString;
}
/**
 * Define the LayoutManager for querying layout information.
 *
 * @interface LayoutManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LayoutManager {
    /**
     * Get the line count.
     *
     * @returns { int | undefined } The line count value returned to the caller.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getLineCount(): int | undefined;
    /**
     * Get the glyph position at coordinate.
     *
     * @param { double } x - the positionX of typography.
     * @param { double } y - the positionY of typography.
     * @returns { PositionWithAffinity | undefined } TextBlob object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

    /**
     * Get the character position at coordinate.
     *
     * @param { double } x - the positionX of typography.
     * @param { double } y - the positionY of typography.
     * @returns { PositionWithAffinity | undefined } Position and Affinity.
     *     Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getCharacterPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

    /**
     * Get the glyph range produced by the specified range of characters.
     *
     * @param { TextRange } charRange - The character range.
     * @returns { Array<TextRange> | undefined } The range infos, first item is the range of glyphs generated
     *     by charRange. The second item, if present, specifies the actual character range that fully defines
     *     glyph range, which may match or slightly exceed the requested range.
     *     the returned Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined;

    /**
     * Get the character range that maps to the glyphs in the given glyph range.
     * 
     * @param { TextRange } glyphRange - The glyph range.
     * @returns { Array<TextRange> | undefined } The range infos, first item is the range of characters generated
     *     by glyphRange. The second item, if present, specifies the full glyph range generated by the returned
     *     which may match or slightly exceed the requested glyph range.
     *     character range, Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined;

    /**
     * Get LineMetrics.
     * 
     * @param { int } lineNumber - the number of line.
     * @returns { LineMetrics | undefined } The line Metrics.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getLineMetrics(lineNumber: int): LineMetrics | undefined;

    /**
     * Get the rects for range.
     * @param { TextRange } range - The range to set.
     * @param { RectWidthStyle } widthStyle - Width style to set.
     * @param { RectHeightStyle } heightStyle - Height style to set.
     * @returns { Array<TextBox> | undefined } The rects for range.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox> | undefined;
}
/**
 * Position and affinity.
 *
 * @typedef PositionWithAffinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PositionWithAffinity {
    /**
     * Position of text.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position: int;

    /**
     * Affinity of the position.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    affinity: Affinity;
}
/**
 * Define the Affinity type.
 *
 * @typedef { text.Affinity } Affinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type Affinity = text.Affinity;

/**
 * Define the LineMetrics type.
 *
 * @typedef { text.LineMetrics } LineMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type LineMetrics = text.LineMetrics;

/**
 * Define the RectWidthStyle type.
 *
 * @typedef { text.RectWidthStyle } RectWidthStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type RectWidthStyle = text.RectWidthStyle;

/**
 * Define the RectHeightStyle type.
 *
 * @typedef { text.RectHeightStyle } RectHeightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type RectHeightStyle = text.RectHeightStyle;

/**
 * Define the TextBox type.
 *
 * @typedef { text.TextBox } TextBox
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type TextBox = text.TextBox;
/**
 * The Paragraph type provides detailed information about a paragraph,
 * including properties such as line count, line height, and other relevant metrics.
 *
 * @typedef { text.Paragraph } Paragraph
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type Paragraph = text.Paragraph;

/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface CaretStyle {
    /**
     * Set the cursor width
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Set the cursor color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
}
/**
 * Defines the TextMenuItemId.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextMenuItemId {
    /**
     * Init a TextMenuItemId with id.
     *
     * @param { ResourceStr } id - The id of the TextMenuItemId.
     * @returns { TextMenuItemId } - Returns the TextMenuItemId object.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static of(id: ResourceStr): TextMenuItemId;
    /**
     * Judge if two TextMenuItemId are equal.
     *
     * @param { TextMenuItemId } id - id TextMenuItemId.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    equals(id: TextMenuItemId): boolean;
    /**
     * Indicates the TextMenuItemId to copy and delete the currently selected text.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly CUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the currently selected text to the clipboard.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly COPY: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the current contents of the clipboard into the text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly PASTE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to select all text in a text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly SELECT_ALL: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId for collaboration service menu items.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly COLLABORATION_SERVICE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to recognize the text in the picture and input it into the text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly CAMERA_INPUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to help with text creation by invoking large models.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly AI_WRITER: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to translate the selected content.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly TRANSLATE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to search the selected content.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly SEARCH: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to share the selected content.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly SHARE: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId for auto fill.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly autoFill: TextMenuItemId;
 
    /**
     * Indicates the TextMenuItemId for password vault.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly passwordVault: TextMenuItemId;
}
/**
 * TextMenuItem
 *
 * @interface TextMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextMenuItem {
    /**
     * Customize what the menu displays.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    content: ResourceStr;
    /**
     * Customize the icon before the menu displays content.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Distinguish clicked menu content by Id.
     *
     * @type { TextMenuItemId }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    id: TextMenuItemId;
    /**
     * Customize what the menu item shortcut displays.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    labelInfo?: ResourceStr;
}
/**
 * Callback function when the selection menu create.
 *
 * @typedef { function } OnCreateMenuCallback
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
 *
 * @typedef { function } OnMenuItemClickCallback
 * @param { TextMenuItem } menuItem - current default menu.
 * @param { TextRange } range - current selected range.
 * @returns { boolean } - Return True, the event is consumed, false otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnMenuItemClickCallback = (menuItem: TextMenuItem, range: TextRange) => boolean;
/**
 * Callback before displaying the menu when the selection range changes.
 *
 * @typedef { function } OnPrepareMenuCallback
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * EditMenuOptions
 *
 * @interface EditMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EditMenuOptions {
    /**
     * Passes the default menu, invokes before every display to generate a menu for triggering click events.
     * If `undefined` is passed, the existing registered event will be removed.
     *
     * @type { OnCreateMenuCallback | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCreateMenu: OnCreateMenuCallback | undefined;
    /**
     * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
     * If `undefined` is passed, the existing registered event will be removed.
     *
     * @type { OnMenuItemClickCallback | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onMenuItemClick: OnMenuItemClickCallback | undefined;
    /**
     * Callback before displaying the menu when the selection range changes.
     *
     * @type { ?OnPrepareMenuCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    onPrepareMenu?: OnPrepareMenuCallback;
}
/**
 * Defines the font decoration result.
 *
 * @interface DecorationStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface DecorationStyleResult {
    /**
     * Font decoration type.
     *
     * @type { TextDecorationType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type: TextDecorationType;
    /**
     * Font decoration color.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color: ResourceColor;
    /**
     * The style value of the decoration property object.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style?: TextDecorationStyle;
    /**
     * The thicknessScale value of the decoration property object.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    thicknessScale?: double;
}
/**
 * Defines the options of font.
 *
 * @interface FontSettingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface FontSettingOptions {
    /**
      * Define whether VariableFontWeight is supported.
      *
      * @type { ?boolean }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 23 static
      */
    enableVariableFontWeight?: boolean;
}
/**
* The TextChangeOptions.
* @interface TextChangeOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @since 23 static
*/
export declare interface TextChangeOptions {
    /**
     * The selected area before the change.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rangeBefore: TextRange;
    /**
     * The selected area after the change.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rangeAfter: TextRange;
    /**
     * The content before the change.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    oldContent: string;
    /**
     * The info of PreviewText before the change.
     *
     * @type { PreviewText }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    oldPreviewText: PreviewText;
}
/**
 * Define the editableText Component changed value.
 *
 * @interface EditableTextChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface EditableTextChangeValue {
    /**
     * Value of body text, without previewText value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    content: string;
    /**
     * Info of previewText, contains previewText value and start index.
     *
     * @type { ?PreviewText }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    previewText?: PreviewText;
    /**
     * The TextChangeOptions.
     *
     * @type { ?TextChangeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    options?: TextChangeOptions;
}
/**
 * Defines text menu show mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextMenuShowMode {
    /**
     * Display the text selection menu in the current window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Prefer to display the text selection menu in a separate window
     * and continue to display it within the current window if a separate window is not supported
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PREFER_WINDOW = 1
}
/**
 * Defines text menu options.
 *
 * @interface TextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextMenuOptions {
    /**
     * Text menu show mode.
     *
     * @type { ?TextMenuShowMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    showMode?: TextMenuShowMode;
}
/**
 * Defines keyboard appearance.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum KeyboardAppearance {
    /**
     * Default appearance mode, don't adopt immersive styles
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,
    /**
     * Immersive mode
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    IMMERSIVE = 1,
    /**
     * Light immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LIGHT_IMMERSIVE = 2,
    /**
     * Dark immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DARK_IMMERSIVE = 3
}

/**
 * Configuration for Accessibility .
 *
 * @interface AccessibilitySpanOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilitySpanOptions {
    /**
     * Indicates the accessibility text of component.
     *
     * @type { ?ResourceStr } - accessibility text, Default value is "".
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
  accessibilityText?: ResourceStr;
    /**
     * Indicates more detailed description text of component,
     *     which is used to further describe the component.
     *
     * @type { ?ResourceStr } - accessibility description, Default value is "".
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
  accessibilityDescription?: ResourceStr;
    /**
     * Set accessibility level.
     *
     * @type { ?string } - The accessibility level for component. The options are as follows:<br/>
     *     "auto":The value is converted to "yes" or "no" based on the component.
     *     "yes": the current component is selectable for the accessibility service.
     *     "no": The current component is not selectable for the accessibility service.
     * @default "auto".
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
  accessibilityLevel?:string;
}

/**
 * Selected drag preview style configuration.
 *
 * @interface SelectedDragPreviewStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SelectedDragPreviewStyle {
    /**
     * The color of background.
     *
     * @type { ?ResourceColor } - Default value is '#ffffff' (100% opacity).
     *                            Default value in dark mode is '#202224' (95% opacity).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
  color?: ResourceColor;
}

/**
 * Defines text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextDirection {
    /**
     * Left to right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LTR = 0,
    /**
     * Right to left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RTL = 1,
    /**
     * The text direction follows the component layout.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DEFAULT = 2,
    /**
     * The text direction follows the actual text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    AUTO = 3
}

/**
 * Alignment of text content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextContentAlign {
    /**
     * Top the text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    TOP = 0,
    /**
     * Center alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    CENTER = 1,
    /**
     * Bottom alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    BOTTOM = 2
}

/**
 * Keyboard Gradient mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardGradientMode {
  /**
   * Disable gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * Linear gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  LINEAR_GRADIENT = 1
}

/**
 * Defines the flip direction of numeric text transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare enum FlipDirection {
  /**
   * The flip direction is down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  DOWN = 0,

  /**
   * The flip direction is up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  UP = 1
}

/**
 * Defines the superscript style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum SuperscriptStyle {
    /**
     * normal font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    NORMAL = 0,
    /**
     * Superscript font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    SUPERSCRIPT = 1,
    /**
     * Subscript font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    SUBSCRIPT = 2
}

/**
 * Defines maxlines mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MaxLinesMode {
  /**
   * Clip mode of max lines
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CLIP = 0,

  /**
   * Scroll mode of max lines
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLL = 1
}

/**
 * Keyboard fluid light mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardFluidLightMode {
  /**
   * Disable fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * Background fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  BACKGROUND_FLUID_LIGHT = 1
}

/**
 * Defines the reason for text changes.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextChangeReason {
    /**
     * Default value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    UNKNOWN = 0,
    /**
     * Reason for input from input method.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    INPUT = 1,
    /**
     * Reason for paste.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    PASTE = 2,
    /**
     * Reason for cut.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    CUT = 3,
    /**
     * Reason for drag.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    DRAG = 4,
    /**
     * Reason for auto fill.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    AUTO_FILL = 5,
    /**
     * Reason for ai write.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    AI_WRITE = 6,
    /**
     * Reason for redo.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    REDO = 7,
    /**
     * Reason for undo.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    UNDO = 8,
    /**
     * Reason for controller methods.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    CONTROLLER = 9,
    /**
     * Reason for accessibilty methods.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    ACCESSIBILITY = 10,
    /**
     * Reason for collarboration input.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    COLLABORATION = 11,
    /**
     * Reason for stylus input.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 24 static
     */
    STYLUS = 12
}

/**
 * Vertical Alignment of text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextVerticalAlign {
  /**
   * Baseline alignment, the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  BASELINE = 0,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  BOTTOM = 1,

  /**
   * Center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  CENTER = 2,

  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  TOP = 3
}

/**
 * Defines shader style class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ShaderStyle {}

/**
 * Defines the text content transition class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare class ContentTransition {}

/**
 * Defines linear gradient class.
 *
 * @extends ShaderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class LinearGradientStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { LinearGradientOptions } options - The options of the gradient.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(options: LinearGradientOptions);
    /**
     * The options of the gradient.
     * angle: Angle of linear gradient.
     * direction: Direction of linear gradient.
     * colors: Color description for gradients
     * repeating: if the gradient colors with repeated coloring.
     *
     * @type { LinearGradientOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    options: LinearGradientOptions;
}

/**
 * Defines the numeric text content transition class.
 *
 * @extends ContentTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare class NumericTextTransition extends ContentTransition {
  /**
   * constructor.
   *
   * @param { NumericTextTransitionOptions } [options] - The options of numeric text transition.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  constructor(options?: NumericTextTransitionOptions);

  /**
   * The flip direction of numeric text transition.
   *
   * @type { ?FlipDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * Defines radial gradient class.
 *
 * @extends ShaderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class RadialGradientStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { RadialGradientOptions } options - The options of the gradient.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(options: RadialGradientOptions);
    /**
     * The options of the gradient.
     * center:Center point of radial gradient
     * radius:Radius of Radial Gradient. value range [0, +∞)
     * colors:Color description for gradients
     * repeating: Refill. The default value is false
     *
     * @type { RadialGradientOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    options: RadialGradientOptions;
}

/**
 * Defines the options of max lines.
 *
 * @interface MaxLinesOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MaxLinesOptions {
  /**
   * The mode of max lines.
   *
   * @type { ?MaxLinesMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflowMode?: MaxLinesMode;
}

/**
 * Defines the input method client.
 *
 * @interface IMEClient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare interface IMEClient {
  /**
   * The unique ID of this input component node.
   *
   * @type { long }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  nodeId: long;

  /**
   * Used to set extra config to the input component.
   *
   * @param { InputMethodExtraConfig } config - The extra config object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  setExtraConfig(config: InputMethodExtraConfig): void;
}

/**
 * Defines the line spacing options.
 *
 * @interface LineSpacingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LineSpacingOptions {
    /**
     * Used to set whether it will only take effect between lines.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onlyBetweenLines?: boolean;
}

/**
 * The options of numeric text transition.
 *
 * @interface NumericTextTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare interface NumericTextTransitionOptions {
  /**
   * Define the flip direction of numeric text transition.
   *
   * @type { ?FlipDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * Defines text layout options. Use this to set constraints for measure text.
 *
 * @interface TextLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface TextLayoutOptions {
  /**
   * Text display area of width.
   *
   * @type { ?LengthMetrics } constraintWidth
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constraintWidth?: LengthMetrics;
}

/**
 * Defines the keyboard appearance config.
 *
 * @interface KeyboardAppearanceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare interface KeyboardAppearanceConfig {
  /**
   * Used to set keyboard gradient mode.
   *
   * @type { ?KeyboardGradientMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  gradientMode?: KeyboardGradientMode;

  /**
   * Used to set keyboard fluid light mode.
   *
   * @type { ?KeyboardFluidLightMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  fluidLightMode?: KeyboardFluidLightMode;
}
/**
 * Defines a shader with single color.
 *
 * @extends ShaderStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ColorShaderStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { ResourceColor } color - The color used by shader.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(color: ResourceColor);
    /**
     * The color of the shader.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    color: ResourceColor;
}

/**
 * Defines the voice button options.
 *
 * @interface VoiceButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface VoiceButtonOptions {
    /**
     * Enable or disable voice button.
     * True means enable voice button, false means disable voice button.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
}

/**
 * Defines the configuration of font.
 *
 * @interface FontConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface FontConfigs {
    /**
     * Defines font weight configurations.
     *
     * @type { ?FontWeightConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    fontWeightConfigs?: FontWeightConfigs;
}

/**
 * Defines the configuration of font weight.
 *
 * @interface FontWeightConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface FontWeightConfigs {
    /**
     * Defines whether VariableFontWeight is supported. The default value is false.
     * True means enable VariableFontWeight, false means disable VariableFontWeight.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    enableVariableFontWeight?: boolean;
    /**
     * Defines whether font weight will be automatically updated when the device's font weight category changes.
     * The default value is true.
     * True means font weight will be automatically updated when the device's font weight category changes.
     * False means font weight will not be automatically updated when the device's font weight category changes.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    enableDeviceFontWeightCategory?: boolean;
}
