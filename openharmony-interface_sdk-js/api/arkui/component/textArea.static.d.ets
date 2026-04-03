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
import { KeyboardOptions, PasteEvent } from "./richEditor";
import { CaretStyle, DeleteValue, EditMenuOptions, EditableTextOnChangeCallback, InsertValue, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance, SelectedDragPreviewStyle, VoiceButtonOptions, TextDirection, LineSpacingOptions, MaxLinesOptions, IMEClient } from "./textCommon";
import { BarState, CopyOptions, FontStyle, FontWeight, LineBreakStrategy, TextContentStyle, TextAlign, TextOverflow, TextHeightAdaptivePolicy, WordBreak, EllipsisMode } from "./enums";
import { EnterKeyType, SubmitEvent, ContentType } from "./textInput";
import { Dimension, Font, Length, LengthMetrics, ResourceColor, ResourceStr, ColorMetrics } from "./units";
import { InputCounterOptions, TextContentControllerBase, SelectionOptions, TextDecorationOptions, CommonMethod, Callback, Bindable, AttributeModifier } from "./common";
import { CustomBuilder } from './builder';
import { Resource } from '../../global/resource';
import { ComponentBuilder } from './builder';
import { ComponentContentBase } from '../ComponentContent';
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextAreaController extends TextContentControllerBase {
    /**
     * constructor.
     * A constructor used to create a TextAreaController object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor();
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @param { int } value - Length from the start of the string to the position where the caret is located.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    caretPosition(value: int): void;
    /**
     * Text selection is achieved by specifying the start and end positions of the text.
     *
     * <p><strong>NOTE</strong>:
     * <br>If <em>selectionMenuHidden</em> is set to <em>true</em> or a 2-in-1 device is used,
     * calling setTextSelection does not display the context menu even when options is set to <em>MenuPolicy.SHOW</em>.
     * <br>If the selected text contains an emoji,
     * the emoji is selected when its start position is within the text selection range.
     * </p>
     *
     * @param { int } selectionStart - The start position of the selected text.
     * The start position of text in the text box is 0.
     * A value less than 0 is handled as 0.
     * A value greater than the maximum text length is handled as the maximum text length.
     * @param { int } selectionEnd - The end position of the selected text.
     * A value less than 0 is handled as the value 0.
     * A value greater than the maximum text length is handled as the maximum text length.
     * @param { SelectionOptions } [options] - Indicates the options of the text selection.Default value is MenuPolicy.DEFAULT.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    setTextSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
    /**
     * Exit edit state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    stopEditing(): void;
}
/**
 * Defines the options of TextArea.
 *
 * @interface TextAreaOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextAreaOptions {
    /**
     * The place holder text string.
     * Text displayed when there is no input.
     *
     * <p><strong>NOTE</strong>:
     * <br>When only the placeholder attribute is set, the text selection handle is still available.
     * <br>The caret stays at the beginning of the placeholder text when the handle is released.
     * </p>
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    placeholder?: ResourceStr;
    /**
     * Sets the current value of TextArea.
     *
     * @type { ?(ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @type { ?TextAreaController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    controller?: TextAreaController;
}
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TextAreaType {
    /**
     * Basic input mode.
     * The value can contain digits, letters, underscores (_), spaces, and special characters.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * Pure digital input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NUMBER = 2,
    /**
     * Phone number entry mode.
     * In this mode, the following are allowed: digits, spaces, plus signs (+), hyphens (-), asterisks (*), and number signs (#).
     * the length is not limited.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PHONE_NUMBER = 3,
    /**
     * E-mail address input mode.
     * This mode accepts only digits, letters, underscores (_), dots (.),
     * and the following special characters: ! # $ % & ' * + - / = ? ^ ` { | } ~ @ (which can only appear once).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EMAIL = 5,
    /**
     * Number decimal entry mode.
     * The value can contain digits and one decimal point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NUMBER_DECIMAL = 12,
    /**
     * URL entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    URL = 13,
    /**
     * One time code mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    ONE_TIME_CODE = 14
}
/**
 * Declare the event listener callback of the enter key.
 *
 * @typedef { function } TextAreaSubmitCallback
 * @param { EnterKeyType } enterKeyType - The enter key type of soft keyboard.
 * If the type is EnterKeyType.NEW_LINE, onSubmit is not triggered.
 * @param { SubmitEvent } [event] - Provides the method of keeping textArea editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;
/**
 * Defines the attribute functions of TextArea.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface TextAreaAttribute extends CommonMethod {
    /**
     * Called when the color of the placeholder is set.
     *
     * @param { ResourceColor | undefined } value - Default value follows the theme.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font property of the placeholder is set.
     * The 'HarmonyOS Sans' font and registered custom fonts are supported.
     *
     * @param { Font | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default placeholderFont(value: Font | undefined): this;
    /**
     * Called when the type of soft keyboard input button is set.
     *
     * @param { EnterKeyType | undefined } value the type of soft keyboard - Default value is EnterKeyType.NEW_LINE.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when the alignment of the contents of a multiline text box is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>To set vertical alignment for the text, use the align attribute.
     * <br>The align attribute alone does not control the horizontal position of the text.
     * <br>In other words, Alignment.TopStart, Alignment.Top, and Alignment.TopEnd produce the same effect,
     * top-aligning the text; Alignment.Start, Alignment.Center, and Alignment.End produce the same effect,
     * centered-aligning the text vertically; Alignment.BottomStart, Alignment.Bottom,
     * and Alignment.BottomEnd produce the same effect, bottom-aligning the text.
     * <br>When textAlign is set to TextAlign.JUSTIFY, the text in the last line is horizontally aligned with the start edge.
     * <br>Since API version 11, textAlign can be set to TextAlign.JUSTIFY.
     * </p>
     *
     * @param { TextAlign | undefined } value - Default value is TextAlign.Start.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textAlign(value: TextAlign | undefined): this;
    /**
     * Called when the insertion cursor color is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>Since API version 12, this API can be used to set the text handle color, which is the same as the caret color.
     * </p>
     *
     * @param { ResourceColor | undefined } value - Default value is '#007DFF'.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default caretColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { Length | undefined } value - Default value is 16fp.The default value on wearable devices is 18fp.
     * If fontSize is of the number type, the unit fp is used.
     * This parameter cannot be set in percentage.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle | undefined } value - Default value is FontStyle.Normal.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { int | FontWeight | ResourceStr | undefined } value - The default value is FontWeight.Normal.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>The 'HarmonyOS Sans' font and registered custom fonts are supported for applications.
     * <br>Only the 'HarmonyOS Sans' font is supported for widgets.
     * </p>
     *
     * @param { ResourceStr | undefined } value - Default value is 'HarmonyOS Sans'.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>In inline style, the effect of truncating text according to maxLines only applies when textOverflow is set.
     * <br>Text is clipped at the transition between words.
     * <br>To clip text in the middle of a word, set wordBreak to WordBreak.BREAK_ALL.
     * <br>If overflow is set to TextOverflow.None, TextOverflow.Clip, or TextOverflow.Ellipsis,
     * this attribute must be used with maxLines for the settings to take effect.
     * <br>TextOverflow.None produces the same effect as TextOverflow.Clip.
     * </p>
     *
     * @param { TextOverflow | undefined } value - Default value is TextOverflow.Clip.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textOverflow(value: TextOverflow | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Dimension | undefined } value - The length of text indent.Default value is 0.
     * @returns { TextAreaAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textIndent(value: Dimension | undefined): this;
    /**
     * Called when the inputFilter of text is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>Only inputs that comply with the regular expression can be displayed.
     * <br>Other inputs are filtered out.
     * <br>The specified regular expression can match single characters, but not strings.
     * </p>
     *
     * @param { ResourceStr | undefined } value
     * @param { function | undefined } error
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default inputFilter(value: ResourceStr | undefined, error?: ((value: string) => void) | undefined): this;
    /**
     * Define the caret style of the text input.
     *
     * @param { CaretStyle | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default caretStyle(value: CaretStyle | undefined): this;
    /**
     * Define the text selected background color of the text input.
     * If the opacity is not set, a 20% opacity will be used.
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { TextAreaSubmitCallback | undefined } callback - callback of the listened event.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSubmit(callback: TextAreaSubmitCallback | undefined): this;
    /**
     * Called when the input changes.
     *
     * <p><strong>NOTE</strong>:
     * <br>In this callback, if cursor operations are performed,
     * you need to adjust the cursor logic based on the previewText parameter
     * to make sure it works seamlessly under the preview display scenario.
     * </p>
     *
     * @param { EditableTextOnChangeCallback | undefined } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: EditableTextOnChangeCallback | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { function | undefined } callback - callback of the listened event.
     * { int } selectionStart - The start position of text is 0.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onTextSelectionChange(callback: ((selectionStart: int, selectionEnd: int) => void) | undefined): this;
    /**
     * Called when the content scrolls.
     *
     * @param { function | undefined } callback - callback of the listened event.
     * { double } totalOffsetX - The unit is px.
     * { double } totalOffsetY - The unit is px.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onContentScroll(callback: ((totalOffsetX: double, totalOffsetY: double) => void) | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     * The text box is in the editing state when it has the caret placed in it, and is in the non-editing state otherwise.
     *
     * @param { function | undefined } callback - Triggered when the text area status changes.
     * If the value of isEditing is true, text area is in progress.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onEditChange(callback: ((isEditing: boolean) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function | undefined } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onCopy(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function | undefined } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onCut(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function | undefined } callback
     *          Executed when a paste operation is performed.
     *          { string } value - The text content to be pasted.
     *          { PasteEvent } event - The user-defined paste event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onPaste(callback: ((value: string, event: PasteEvent) => void) | undefined): this;
    /**
     * Called when the copy option is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this attribute is set to CopyOptions.None, the text can only be pasted;
     * all other actions, such as copying, cutting, and sharing, are disabled.
     * <br>Dragging is not allowed when CopyOptions.None is set.
     * </p>
     *
     * @param { CopyOptions | undefined } value - Default value is CopyOptions.LocalDevice.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default copyOption(value: CopyOptions | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean | undefined } value - Default value is true.
     * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Define the max length content of the text area.
     *
     * <p><strong>NOTE</strong>:
     * <br>By default, there is no maximum number of characters.
     * <br>When the maximum number of characters is reached,
     * no more characters can be entered, and the border turns red.
     * </p>
     *
     * @param { int | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxLength(value: int | undefined): this;
    /**
     * Define show counter of the text area.
     *
     * <p><strong>NOTE</strong>:
     * <br>options can be set only when value is set to true,
     * in which case a character counter is displayed below the text box.
     * <br>This attribute must be used together with maxlength.
     * <br>The character counter is displayed in this format: Number of characters entered/Character limit.
     * <br>It is visible when the number of characters entered is greater than
     * the character limit multiplied by the threshold percentage value.
     * <br>If options is not set, the text box border and character counter subscript turn red
     * when the number of characters entered reaches the limit.
     * <br>If value is set to true and options is set,
     * the text box border and character counter subscript turn red
     * and the text box shakes when the number of characters entered reaches the limit,
     * provided that the value of thresholdPercentage is valid.
     * <br>If highlightBorder is set to false, the text box border does not turn red.
     * <br>By default, highlightBorder is set to true.
     * <br>The character counter is not displayed for text boxes in inline input style.
     * </p>
     *
     * @param { boolean | undefined } value - Set showcounter of the text area.
     *     Passing `undefined` resets it to the default value.
     * @param { InputCounterOptions } [options] - Set the percentage of counter.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default showCounter(value: boolean | undefined, options?: InputCounterOptions): this;
    /**
     * Define style of the text area.
     *
     * <p><strong>NOTE</strong>:
     * <br>The inline input style is only available for the TextAreaType.Normal type.
     * </p>
     *
     * @param { TextContentStyle | undefined } value - Default value is TextContentStyle.DEFAULT.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default style(value: TextContentStyle | undefined): this;
    /**
     * Define bar state of the text area.
     *
     * @param { BarState | undefined } value - Default value is BarState.Auto.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default barState(value: BarState | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>true</em>:
     * <br>The system text selection menu does not appear under the following circumstances: clicking the text box cursor,
     * long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.
     * <br><em>false</em>:
     * <br>The system text selection menu appears under the following circumstances: clicking the text box cursor,
     * long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.
     * </p>
     *
     * @param { boolean | undefined } value - Default value is false.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectionMenuHidden(value: boolean | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
     * <br>For the setting to take effect, this attribute must be used together with maxFontSize and maxLines,or layout constraint settings.
     * <br>When the adaptive font size is used, the fontSize settings do not take effect.
     * </p>
     *
     * @param { double | string | Resource | undefined } value - The unit is fp.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default minFontSize(value: double | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
     * <br>For the setting to take effect, this attribute must be used together with minFontSize and maxLines, or layout constraint settings.
     * <br>When the adaptive font size is used, the fontSize settings do not take effect.
     * </p>
     *
     * @param { double | string | Resource | undefined } value - The unit is fp.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxFontSize(value: double | string | Resource | undefined): this;
    /**
     * Called when the minimum font scale of the font is set.
     * Value range: [0, 1]
     *
     * <p><strong>NOTE</strong>:
     * <br>The undefined type is supported.
     * <br>A value less than 0 is handled as 0.
     * <br>A value greater than 1 is handled as 1.
     * <br>Abnormal values are ineffective by default.
     * </p>
     *
     * @param { double | Resource | undefined } scale
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default minFontScale(scale: double | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     * Value range: [1, +∞)
     *
     * <p><strong>NOTE</strong>:
     * <br>A value less than 1 is handled as 1.
     * <br>Abnormal values are ineffective by default.
     * </p>
     *
     * @param { double | Resource | undefined } scale
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxFontScale(scale: double | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * <p><strong>NOTE</strong>:
     * <ul>
     * <li>When this attribute is set to TextHeightAdaptivePolicy.MAX_LINES_FIRST,
     * the maxLines attribute takes precedence for adjusting the text height.
     * <br>If the maxLines setting results in a layout beyond the layout constraints,
     * the text will shrink to a font size between minFontSize and maxFontSize to allow for more content to be shown.
     * <br>If the text box is in inline input style,
     * the font size in the editing state is different from that in the non-editing state.</li>
     * <li>If this attribute is set to TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST,
     * the minFontSize attribute takes precedence for adjusting the text height.
     * <br>If the text can fit in one line with the minFontSize setting,
     * the text will enlarge to the largest possible font size between minFontSize and maxFontSize.</li>
     * <li>If this attribute is set to TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST,
     * the layout constraints take precedence for adjusting the text height.
     * <br>If the resultant layout is beyond the layout constraints,
     * the text will shrink to a font size between minFontSize and maxFontSize to respect the layout constraints.</li>
     * </ul>
     * </p>
     *
     * @param { TextHeightAdaptivePolicy | undefined } value - The height adaptive policy.Default value is TextHeightAdaptivePolicy.MAX_LINES_FIRST.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Define max lines of the text area.
     * Value range: (0, +∞)
     *
     * <p><strong>NOTE</strong>:
     * <br>Sets the maximum number of lines that can be displayed.
     * <br>When textOverflow is set, text is truncated if the content exceeds this limit.
     * <br>When textOverflow is not set, in inline style,
     * the text is scrollable if the content exceeds the limit while the text box is focused;
     * maxLines does not apply when the text box is not focused.
     * <br>In non-inline style, the text is truncated according to the number of lines.
     * <br>Default value: 3 with the inline style; +∞ with the non-inline style,
     * indicating that there is no maximum number of lines.
     * </p>
     *
     * @param { int | undefined } value - Max lines of the node
     * @param { MaxLinesOptions } [options] - max lines of setting options.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxLines(value: int | undefined, options?: MaxLinesOptions): this;
    /**
     * Set the word break type.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect for the placeholder text.
     * <br>The component does not support the clip attribute.
     * <br>Therefore, setting this attribute does not affect text clipping.
     * </p>
     *
     * @param { WordBreak | undefined } value - The word break type.Default value is WordBreak.BREAK_WORD.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default wordBreak(value: WordBreak | undefined): this;
    /**
     * Set the text line break strategy type.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute takes effect when wordBreak is not set to breakAll. Hyphens are not supported.
     * </p>
     *
     * @param { LineBreakStrategy | undefined } strategy - The text line break strategy type.Default value is LineBreakStrategy.GREEDY.
     * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Define custom keyboard of the text area.
     *
     * <p><strong>NOTE</strong>:
     * <br>When a custom keyboard is set, activating the text box opens the specified custom component,
     * instead of the system input method.
     * <br>The custom keyboard's height can be set through the height attribute of the custom component's root node,
     * and its width is fixed at the default value.
     * <br>The custom keyboard is presented by overlaying the original screen,
     * which is not compressed or lifted if avoid mode is not enabled or avoidance is not needed for the text box.
     * <br>The custom keyboard cannot obtain the focus, but it blocks gesture events.
     * <br>By default, the custom keyboard is closed when the input component loses the focus.
     * <br>You can also use the TextAreaController.stopEditing API to close the keyboard.
     * <br>When a custom keyboard is set, the text box does not support camera input, even when the device supports.
     * <br>When setting a custom keyboard,
     * you can bind the onKeyPrelme event to prevent input from the physical keyboard.
     * </p>
     *
     * @param { CustomBuilder | ComponentContentBase | undefined } value - Set up a custom keyboard of TextArea.
     *     Passing `undefined` resets it to the default keyboard.
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextArea
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined, options?: KeyboardOptions): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { TextDecorationOptions | undefined } value - Default value is { type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID }.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default decoration(value: TextDecorationOptions | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value specified is a percentage or 0, the default value is used.
     * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
     * <br>If the value specified is a negative value, the text is compressed.
     * <br>A negative value too small may result in the text being compressed to 0 and no content being displayed.
     * </p>
     *
     * @param { double | string | Resource | undefined } value - The unit is fp.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default letterSpacing(value: double | string | Resource | undefined): this;
    /**
     * Set font line spacing.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value specified is less than or equal to 0, the default value 0 is used.
     * </p>
     *
     * @param { LengthMetrics | undefined } value - The default value is 0.
     *     Passing `undefined` resets it to the default value.
     * @param { LineSpacingOptions } [options]
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default lineSpacing(value: LengthMetrics | undefined, options?: LineSpacingOptions): this;
    /**
     * Called when the line height of the font is set.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is less than or equal to 0, the line height is not limited and the font size is adaptive.
     * <br>If the value is of the number type, the unit fp is used.
     * </p>
     *
     * @param { double | string | Resource | undefined } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default lineHeight(value: double | string | Resource | undefined): this;
    /**
     * Called when the input type is set.
     *
     * @param { TextAreaType | undefined } value - Default value is TextAreaType.Normal.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default type(value: TextAreaType | undefined): this;
    /**
     * Sets whether enable auto fill or not.
     *
     * @param { boolean | undefined } value - Indicates the flag whether autofill is enabled.Default value is true.True: enable, false: disable.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableAutoFill(value: boolean | undefined): this;
    /**
     * Called when the auto fill type is set.
     *
     * @param { ContentType | undefined } contentType - Indicates autofill type.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentType(contentType: ContentType | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string | undefined } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of TextArea component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFeature(value: string | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * <p><strong>NOTE</strong>:
     * <br>It returns true if the text is inserted; returns false otherwise.
     * <br>This callback is not triggered for pre-edit or candidate word operations.
     * <br>It is available only for system input methods.
     * </p>
     *
     * @param { Callback<InsertValue, boolean> | undefined } callback - The triggered function when text content is about to insert.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
    /**
     * Get text value information when completed input.
     *
     * <p><strong>NOTE</strong>:
     * <br>It is available only for system input methods.
     * </p>
     *
     * @param { Callback<InsertValue> | undefined } callback - The triggered function when text content has been inserted.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidInsert(callback: Callback<InsertValue> | undefined): this;
    /**
     * Get text value information when about to delete.
     *
     * <p><strong>NOTE</strong>:
     * <br>It returns true if the text is deleted; returns false otherwise.
     * <br>This callback is not called for text preview.
     * <br>It is available only for system input methods.
     * </p>
     *
     * @param { Callback<DeleteValue, boolean> | undefined } callback - The triggered function when text content is about to delete.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
    /**
     * Get text value information when the deletion has been completed
     *
     * <p><strong>NOTE</strong>:
     * <br>It is available only for system input methods.
     * </p>
     *
     * @param { Callback<DeleteValue> | undefined } callback - The triggered function when text content has been deleted.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidDelete(callback: Callback<DeleteValue> | undefined): this;
    /**
     * Set the custom text menu.
     * Sets the extended options of the custom context menu on selection,
     * including the text content, icon, and callback.
     *
     * @param { EditMenuOptions | undefined } editMenu - Customize text menu options.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Define the preview text mode of the text input.
     *
     * <p><strong>NOTE</strong>:
     * <br>Preview text is in a temporary state and does not support text interception.
     * <br>As such, it does not trigger onWillInsert, onDidInsert, onWillDelete, or onDidDelete callbacks.
     * </p>
     *
     * @param { boolean | undefined } enable - Indicates the preview text mode.Default value is true.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enablePreviewText(enable: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * <p><strong>NOTE</strong>:
     * <br>To enable haptic feedback,
     * <br>you must declare the ohos.permission.VIBRATE permission under requestPermissions in the module.json5 file of the project.
     * <code>
     * "requestPermissions": [
     *   {
     *      "name": "ohos.permission.VIBRATE",
     *   }
     * ]
     * </code>
     * </p>
     *
     * @param { boolean | undefined } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableHapticFeedback(isEnabled: boolean | undefined): this;
    /**
     * Set text mode of automatic case mode switching.
     *
     * @param { AutoCapitalizationMode | undefined } mode - Automatic case mode values.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
    /**
     * Set the text with half leading.
     *
     * @param { Optional<boolean> | undefined } halfLeading - Default value is false.The value true means that half leading is enabled, and false means the opposite.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Set the ellipsis mode.
     *
     * <p><strong>NOTE</strong>:
     * <br>For the settings to work, overflow must be set to TextOverflow.Ellipsis and maxLines must be specified.
     * <br>Setting ellipsisMode alone does not take effect.
     * <br>EllipsisMode.START and EllipsisMode.CENTER take effect only when maxLines is set to 1.
     * </p>
     *
     * @param { EllipsisMode | undefined } mode - The ellipsis mode.Default value is EllipsisMode.END.
     * @returns { TextAreaAttribute } The attribute of TextArea.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default ellipsisMode(mode: EllipsisMode | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { boolean | undefined } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stopBackPress(isStopped: boolean | undefined): this;
    /**
     * Get text value information when about to change.
     *
     * <p><strong>NOTE</strong>:
     * <br>This callback is triggered after onWillInsert and onWillDelete, but before onDidInsert and onDidDelete.
     * </p>
     *
     * @param { Callback<EditableTextChangeValue, boolean> | undefined } callback - The triggered function when text content is about to change.
     * Returning true allows the change to proceed, while returning false cancels the change.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
    /**
     * Set the keyboard appearance.
     *
     * @param { Optional<KeyboardAppearance> | undefined } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    /**
     * Determines whether the layout adds extra padding at the top and bottom to make space for characters.
     *
     * @param { boolean | undefined } include - Whether enable the feature, the default value is false.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default includeFontPadding(include: boolean | undefined): this;
    /**
     * Whether to include ascent/descent from fallback fonts to prevent overlapping lines.
     *
     * @param { boolean | undefined } enabled - Whether enable the feature, the default value is false.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fallbackLineSpacing(enabled: boolean | undefined): this;
    /**
     * Define min lines of the text area.
     *
     * @param { int | undefined } lines - Min lines of the node
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default minLines(lines: int | undefined): this;

    /**
     * Whether to enable automatic spacing between Chinese and Latin characters.
     *
     * @param { boolean | undefined } enabled - The default value is false,
     *     indicates the flag whether to enable automatic spacing.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default enableAutoSpacing(enabled: boolean | undefined): this;

    /**
     * Set the stroke width.
     *
     * @param { LengthMetrics | undefined } width - indicates the stroke width.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default strokeWidth(width: LengthMetrics | undefined): this;

    /**
     * Set the stroke color.
     *
     * @param { ResourceColor | undefined } color - indicates the stroke color.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default strokeColor(color: ResourceColor | undefined): this;

    /**
     * Called before the text area component attach the InputMethod.
     *
     * @param { Callback<IMEClient> | undefined } callback - The triggered function before attach the InputMethod.
     *     If `undefined` is passed, the existing registered event will be removed.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;

    /**
     * Color of the scrollbar.
     *
     * @param { ColorMetrics | undefined } thumbColor - scroll bar thumb Color of the TextArea.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default scrollBarColor(thumbColor: ColorMetrics | undefined): this;

    /**
     * Enable selected data detector.
     *
     * @param { boolean | undefined } enable - whether to enable the selected data detector.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    default enableSelectedDataDetector(enable: boolean | undefined): this;

    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
     * @returns { TextAreaAttribute } the attribute of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Whether to compress punctuation at the beginning of line.
     *
     * @param { boolean | undefined } enabled - Whether to enable the feature, the default value is false.
     *     Passing `undefined` resets it to the default value.
     * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default compressLeadingPunctuation(enabled: boolean | undefined): this;
    /**
     * Used to set the selected drag preview style.
     *
     * @param { SelectedDragPreviewStyle | undefined } value - Selected drag preview style.
     *     If set undefined will reset the style.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;

    /**
     * Set the text direction.
     *
     * @param { TextDirection | undefined } direction - Indicates the text direction.
     *     When undefined is set, this property will be reset to TextDirection.DEFAULT.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textDirection(direction: TextDirection | undefined): this;

    /**
     * Set voice button options.
     *
     * @param { VoiceButtonOptions | undefined } options - Indicates the options of the voice button.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default voiceButton(options: VoiceButtonOptions | undefined): this;

    /**
     * Whether to enable horizontal scrolling when text is wider than the view.
     * The default value is false, and text will be wrapped by the view.
     *
     * @param { boolean | undefined } enabled - whether to enable horizontal scrolling.
     * True means enable this feature, false means disable this feature.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default horizontalScrolling(enabled: boolean | undefined): this;

    /**
     * Whether to avoid an orphan word on the last line of the paragraph.
     *
     * @param { boolean | undefined } enabled - The default value is false,
     *     indicates the flag whether to enable this feature.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 26.0.0 static
     */
    default orphanCharOptimization(enabled: boolean | undefined): this;
}

/**
 * Defines TextArea Component.
 *
 * @param { TextAreaOptions } [value]
 * @returns { TextAreaAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function TextArea(
    value?: TextAreaOptions
): TextAreaAttribute
