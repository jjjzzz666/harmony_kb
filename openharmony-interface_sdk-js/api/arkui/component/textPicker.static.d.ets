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
import { VoidCallback, Resource, ResourceColor, Offset, Dimension, ResourceStr, BorderRadiuses, LocalizedBorderRadiuses } from "./units";
import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, Callback, Bindable, BindableResourceStr, BindableResourceStrArray } from './common';
import { DialogAlignment } from "./alertDialog";
import { CrownSensitivity, TextOverflow } from "./enums";
import { LengthMetrics } from './../Graphics';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerRangeContent {
    /**
     * Image resource.
     * If the value is a string, such as **"/common/hello.png"**, it represents the path to the image.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    icon: string | Resource;
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { ?(string | Resource) }
     * @default ""
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    text?: string | Resource;
}
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextCascadePickerRangeContent {
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    text: string | Resource;
    /**
     * Linkage data.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    children?: TextCascadePickerRangeContent[];
}
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerOptions {
    /**
     * Data selection range of the picker.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    /**
     * Value of the current selection.
     * Only valid when only text is displayed.
     *
     * @type { ?(BindableResourceStr | BindableResourceStrArray) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value?: BindableResourceStr | BindableResourceStrArray;
    /**
     * Current selected subscript.
     *
     * @type { ?(int | int[] | Bindable<int> | Bindable<int[]>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selected?: int | int[] | Bindable<int> | Bindable<int[]>;
    /**
     * Width of each column in the picker.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { ?LengthMetrics[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    columnWidths?: LengthMetrics[];
}
/**
 * Defines the struct of DividerOptions.
 *
 * @interface DividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DividerOptions {
    /**
     * Stroke width of the divider.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is less than 0, the default value is used.
     * <br>The maximum value allowed is half the height of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 2.0px
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: Dimension;
    /**
     * Color of the divider.
     *
     * @type { ?ResourceColor }
     * @default "#33000000"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Distance between the divider and the start edge of the picker.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * Values less than 0 are invalid. The maximum value allowed is the width of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    startMargin?: Dimension;
    /**
     * Distance between the divider and the end edge of the picker.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * <br>Values less than 0 are invalid. The maximum value allowed is the width of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    endMargin?: Dimension;
}
/**
 * Defines the text style options.
 *
 * @extends PickerTextStyle
 * @interface TextPickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerTextStyle extends PickerTextStyle {
    /**
     * Minimum font size, used in conjunction with maxFontSize.
     * When minFontSize and maxFontSize are set,
     * the size setting in font is ineffective.
     * The default maximum number of lines is 1,
     * and the default height adaptation mode is MIN_FONT_SIZE_FIRST.
     *
     * @type { ?(double | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    minFontSize?: double | string | Resource;
    /**
     * Maximum font size.
     *
     * @type { ?(double | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    maxFontSize?: double | string | Resource;
    /**
     * Display mode when the text is too long.
     *
     * <p><strong>NOTE</strong>:
     * Ineffective when set to MARQUEE.
     * </p>
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    overflow?: TextOverflow;
}
/**
 * Provide an interface to set the background style of selected items.
 *
 * @interface PickerBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PickerBackgroundStyle {
  /**
   * Define the background color of selected item.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * Defines the border radius of selected items.
   *
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * Callback of the listened scroll stop event.
 *
 * @typedef {function} TextPickerScrollStopCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { int | int[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type TextPickerScrollStopCallback = (value: string | string[], index: int | int[]) => void;
/**
 * Callback of TextPicker item is selected event.
 *
 * @typedef {function} OnTextPickerChangeCallback
 * @param { string | string[] } selectItem - Value of the selected item.
 * @param { int | int[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnTextPickerChangeCallback = (selectItem: string | string[], index: int | int[]) => void;
/**
 * Callback of the listened onEnterSelectedArea event.
 *
 * @typedef {function} TextPickerEnterSelectedAreaCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { int | int[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: int | int[]) => void;
/**
 * Defines the TextPicker component attributes.
 *
 * @extends CommonMethod
 * @interface TextPickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface TextPickerAttribute extends CommonMethod {
    /**
     * Sets the height of each item in the picker.
     *
     * @param { double | string | undefined } value - Height of each item in the picker.
     * <br>For the double type, the value range is [0, +∞]. For the string type,
     * <br>only numeric string values, for example, "56", are supported.
     * @returns { TextPickerAttribute }
     * @default 56 vp (selected) and 36 vp (unselected).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default defaultPickerItemHeight(value: double | string | undefined): this;
    /**
     * Sets whether scrolling is loopable.
     *
     * @param { boolean | undefined } value - Whether scrolling is loopable. true: loopable; false: not loopable.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default canLoop(value: boolean | undefined): this;
    /**
     * Sets the font color, font size, and font weight for the top and bottom items.
     *
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - Font color, font size, and font weight
     *     of the top and bottom items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default disappearTextStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * Sets the font color, font size, and font weight for all items except the top, bottom, and selected items.
     *
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * Sets the font color, font size, and font weight for the selected item.
     *
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - Font color, font size, and font weight
     *     of the selected item.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedTextStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * Sets whether to enable the text style change animation during the scrolling process.
     *
     * @param { boolean | undefined } disabled
     * @default false
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default disableTextStyleAnimation(disabled: boolean | undefined): this;
    /**
     * Sets the style of the text items when the text style change animation during the scrolling process is disabled.
     *
     * @param { TextPickerTextStyle | undefined } style
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default defaultTextStyle(style: TextPickerTextStyle | undefined): this;
    /**
     * Triggered when the text picker snaps to the selected item.
     * Compared to onChange, this API supports the undefined type for the callback parameter.
     *
     * @param { OnTextPickerChangeCallback | undefined } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: OnTextPickerChangeCallback | undefined): this;
    /**
     * Triggered when the scrolling in the text picker stops.
     * If the scrolling is initiated by a gesture,
     * this event is triggered when the finger is lifted from the screen and the scrolling stops.
     *
     * @param { TextPickerScrollStopCallback | undefined } callback - Triggered when the scrolling
     * <br>in the text picker stops.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onScrollStop(callback: TextPickerScrollStopCallback | undefined): this;
    /**
     * Triggered during the scrolling of the text picker when an item enters the divider area.
     * When the picker contains text only or a combination of images and text,
     * value indicates the text of the selected item. When the picker contains images only, value is empty.
     *
     * @param { TextPickerEnterSelectedAreaCallback | undefined } callback - Triggered during the scrolling of
     * <br>the text picker when an item enters the divider area.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback | undefined): this;
    /**
     * Sets the index of the default selected item in the array.
     * Its priority is higher than that of the selected value in options.
     * For a single-column picker, use a value of the int type.
     * For a multi-column (linked) picker, use a value of the int[] type.
     *
     * @param { int | int[] | undefined } value - Index of the default selected item in the array.
     * @default 0
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedIndex(value: int | int[] | undefined): this;
    /**
     * Sets the divider style.
     *
     * @param { DividerOptions | null | undefined } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default divider(value: DividerOptions | null | undefined): this;
    /**
     * Sets the height for the fade effect.
     * If this attribute is not set, the default fade effect is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Avoid changing the attribute data during the animation process of this component.
     * </p>
     *
     * @param { Dimension | undefined } value - Height of the fade effect at the top and bottom edges of the content area.
     * @default 36vp
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default gradientHeight(value: Dimension | undefined): this;
    /**
     * Specifies whether to enable haptic feedback.
     *
     * @param { boolean | undefined } enable - Whether to enable haptic feedback.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * Sets the sensitivity to the digital crown rotation.
     *
     * @param { CrownSensitivity | undefined } sensitivity - Sensitivity to the digital crown rotation.
     * @default CrownSensitivity.MEDIUM
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Sets the background style of selected items.
     *
     * @param { PickerBackgroundStyle | undefined } style - the background style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedBackgroundStyle(style: PickerBackgroundStyle | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerResult {
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: string | string[];
    /**
     * The subscript of the current selection.
     *
     * @type { int | int[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    index: int | int[];
}
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerDialogOptions extends TextPickerOptions {
    /**
     * Height of the picker item.
     *
     * @type { ?(double | string) }
     * @default 56 vp (selected) and 36 vp (unselected)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    defaultPickerItemHeight?: double | string;
    /**
     * Whether to support scroll looping.
     * The value true means to support scroll looping, and false means the opposite.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    canLoop?: boolean;
    /**
     * Font color, font size, and font weight of the top and bottom items.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Font color, font size, and font weight of all items except the top, bottom, and selected items.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textStyle?: PickerTextStyle;
    /**
     * Style of accept button.
     *
     * <p><strong>NOTE</strong>:
     * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
     * <br>only one primary field can be set to true at most.
     * <br>If both the primary fields are set to true, neither will take effect.
     * </p>
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    acceptButtonStyle?: PickerDialogButtonStyle;
    /**
     * Style of cancel button.
     *
     * <p><strong>NOTE</strong>:
     * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
     * <br>only one primary field can be set to true at most.
     * <br>If both the primary fields are set to true, neither will take effect.
     * </p>
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    cancelButtonStyle?: PickerDialogButtonStyle;
    /**
     * Font color, font size, and font weight of the selected item.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * Sets whether to enable the text style change animation during the scrolling process.
     * true: Disable the text style change animation.
     * false: Enable the text style change animation.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    disableTextStyleAnimation?: boolean;
    /**
     * Style of the text items when the text style change animation during the scrolling process is disabled.
     *
     * <p><strong>NOTE</strong>:
     * <br>It is effective only when disableTextStyleAnimation is true.
     * </p>
     *
     * @type { ?TextPickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    defaultTextStyle?: TextPickerTextStyle;
    /**
     * Callback invoked when the OK button in the dialog box is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAccept?: (value: TextPickerResult) => void;
    /**
     * Callback invoked when the Cancel button in the dialog box is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel?: () => void;
    /**
     * Callback invoked when the text picker in the dialog box snaps to the selected item.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onChange?: (value: TextPickerResult) => void;
    /**
     * Callback invoked when the scrolling in the text picker of the dialog box stops.
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onScrollStop?: Callback<TextPickerResult>;
    /**
     * Represents the callback triggered during the scrolling of the text picker when an item enters the divider area.
     * Compared to the onChange event, this event is triggered earlier,
     * specifically when the scroll distance of the current column exceeds half the height of the selected item,
     * which indicates that the item has entered the divider area.
     *
     * <p><strong>NOTE</strong>:
     * <br>In scenarios where the picker contains linked columns,
     * <br>the use of this callback is not recommended.
     * <br>The reason is that it identifies nodes where items enter the divider area during scrolling.
     * <br>However, items that change in response to the scrolling do not themselves scroll. As a result,
     * <br>he callback's return values will only reflect changes for the currently scrolling column,
     * <br>while other non-scrolling columns will remain unchanged.
     * </p>
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onEnterSelectedArea?: Callback<TextPickerResult>;
    /**
     * Mask area of the dialog box.
     * Events outside the mask area are transparently transmitted, and events within the mask area are not.
     *
     * @type { ?Rectangle }
     * @default { x: 0, y: 0, width: '100%', height: '100%' }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    maskRect?: Rectangle;
    /**
     * Alignment mode of the dialog box in the vertical direction.
     *
     * @type { ?DialogAlignment }
     * @default DialogAlignment.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    alignment?: DialogAlignment;
    /**
     * Offset of the dialog box based on the alignment settings.
     *
     * @type { ?Offset }
     * @default { dx: 0 , dy: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offset?: Offset;
    /**
     * Backplane color of the dialog box.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Background blur style of the dialog box.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Options for customizing the background blur style.
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Options for customizing the background effect.
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Event callback when the dialog box appears.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onDidAppear.
     * The settings take effect next time the dialog box appears.
     * <br>3. If the user closes the dialog box immediately after it appears,
     * onWillDisappearis invoked before onDidAppear.
     * <br>4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidAppear?: () => void;
    /**
     * Event callback when the dialog box disappears.
     *
     * <p><strong>NOTE</strong>:
     * <br>The normal timing sequence is as follows:
     * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidDisappear?: () => void;
    /**
     * Event callback when the dialog box is about to appear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onWillAppear.
     * <br>the settings take effect next time the dialog box appears.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillAppear?: () => void;
    /**
     * Event callback when the dialog box is about to disappear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillDisappear?: () => void;
    /**
     * Shadow of the dialog box.
     * Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD when the dialog box is focused
     * and ShadowStyle.OUTER_FLOATING_SM otherwise.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Whether to enable the hover mode.
     *
     * @type { ?boolean }
     * @default false - meaning not to enable the hover mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * Display area of the dialog box in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * Whether to enable haptic feedback.
     * true (default): Haptic feedback is enabled.
     * false: Haptic feedback is disabled.
     *
     * <p><strong>NOTE</strong>:
     * <br>To enable haptic feedback, you must declare the ohos.permission.VIBRATE permission
     * <br>under requestPermissions in the module.json5 file of the project.
     * <br>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}].
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableHapticFeedback?: boolean;
}
/**
 * Defines the TextPickerDialogOptionsExt for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptionsExt
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextPickerDialogOptionsExt extends TextPickerOptions {
  /**
   * Called when the default height of the selected element is set.
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  defaultPickerItemHeight?: double | string;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  canLoop?: boolean;

  /**
   * Text style of disappearing items.
   *
   * @type { ?TextPickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  disappearTextStyle?: TextPickerTextStyle;

  /**
   * Text style of normal items
   *
   * @type { ?TextPickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  textStyle?: TextPickerTextStyle;

  /**
   * Style of accept button.
   *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of cancel button.
   *
   * @type { ?PickerDialogButtonStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Text style of selected items
   *
   * @type { ?TextPickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedTextStyle?: TextPickerTextStyle;

  /**
   * Defines whether to disable the text style animation.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  disableTextStyleAnimation?: boolean;

  /**
   * Defines to set the default text style for options.
   *
   * @type { ?TextPickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   *
   * @type { ?Callback<TextPickerResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onAccept?: Callback<TextPickerResult>;
/**
   * Called when the Cancel button in the dialog is clicked.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onCancel?: VoidCallback;

  /**
   * This event is triggered when a TextPicker text is selected in dialog.
   *
   * @type { ?Callback<TextPickerResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onChange?: Callback<TextPickerResult>;

  /**
   * This event is triggered when a TextPicker text is selected and scrolling has stopped in dialog.
   *
   * @type { ?Callback<TextPickerResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * This event is triggered when an item enters the selected area in dialog.
   *
   * @type { ?Callback<TextPickerResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @type { ?Rectangle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  maskRect?: Rectangle;

  /**
   * Defines the dialog alignment of the screen.
   *
   * @type { ?DialogAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  alignment?: DialogAlignment;

  /**
   * Defines the dialog offset.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offset?: Offset;

  /**
   * Defines the textPickerDialog's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the textPickerDialog's background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the textPickerDialog's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the textPickerDialog's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;
  /**
   * Callback function when the dialog appears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * Callback function when the dialog disappears.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * Callback function before the dialog openAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * Callback function before the dialog closeAnimation starts.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * Defines the dialog's shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  shadow?: ShadowOptions | ShadowStyle; 

  /**
   * Defines whether to respond to the hover mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  enableHoverMode?: boolean;

  /**
   * Defines the dialog's display area in hover mode.
   *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Enable or disable haptic feedback.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  enableHapticFeedback?: boolean;

  /**
   * Background style of selected items.
   *
   * @type { ?PickerBackgroundStyle }
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;
}

/**
 * Defines the TextPicker component.
 *
 * @param { TextPickerOptions } [options] - text picker options.
 * @returns { TextPickerAttribute } The attribute of the TextPicker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextPicker(
    options?: TextPickerOptions
): TextPickerAttribute;
