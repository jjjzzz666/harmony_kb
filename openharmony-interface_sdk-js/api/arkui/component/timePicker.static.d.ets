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
import { ResourceColor, Offset, VoidCallback } from "./units";
import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, Callback, DateTimeOptions, Bindable } from './common';
import { DialogAlignment } from "./alertDialog";
import { CrownSensitivity } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the struct of TimePickerResult.
 *
 * @interface TimePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TimePickerResult {
    /**
     * Hour portion of the selected time.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    hour: int;
    /**
     * Minute portion of the selected time.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    minute: int;
    /**
     * Second portion of the selected time.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    second: int;
}
/**
 * Type of the TimePicker that need to be displayed.
 * @enum {int}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum TimePickerFormat {
    /**
     * Hour and minute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    HOUR_MINUTE,
    /**
     * Hour and minute and second
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    HOUR_MINUTE_SECOND
}
/**
 * Defines the options of TimePicker.
 *
 * @interface TimePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TimePickerOptions {
    /**
     * Specifies the time selector check time.
     *
     * @type { ?(Date | Bindable<Date>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selected?: Date | Bindable<Date>;
    /**
     * Specifies the format of the TimePicker that need to be displayed.
     *
     * @type { ?TimePickerFormat }
     * @default HOUR_MINUTE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    format?: TimePickerFormat;
    /**
     * Defines the start time of the time picker.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: Date;
    /**
     * Defines the end time of the time picker.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: Date;
}
/**
 * Callback of the timePicker time is selected event.
 * 
 * @typedef {function} OnTimePickerChangeCallback
 * @param { TimePickerResult } result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnTimePickerChangeCallback = (result: TimePickerResult) => void;
/**
 * Defines the TimePicker component attributes.
 *
 * @extends CommonMethod
 * @interface TimePickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface TimePickerAttribute extends CommonMethod {
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @param { boolean | undefined } value
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default useMilitaryTime(value: boolean | undefined): this;
    /**
     * Sets whether to enable the wheel mode.
     * @param { boolean | undefined } value - indicates whether to enable the wheel mode.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default loop(value: boolean | undefined): this;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle | undefined } value - indicates the text style of disappearing items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default disappearTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle | undefined } value - indicates the text style of normal items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle | undefined } value - indicates the text style of selected items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Set time format
     *
     * @param { DateTimeOptions | undefined } value - indicates the format of the time display.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default dateTimeOptions(value: DateTimeOptions | undefined): this;
    /**
     * This event is triggered when a TimePicker time is selected.
     *
     * @param { OnTimePickerChangeCallback | undefined } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: OnTimePickerChangeCallback | undefined): this;
    /**
     * This event is triggered when an item enters the selected area.
     *
     * @param { Callback<TimePickerResult> | undefined } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onEnterSelectedArea(callback: Callback<TimePickerResult> | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean | undefined } enable - Default value is true, set false to disable haptic feedback.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * If the attribute is set, the crown rotation sensitivity can be changed.
     *
     * @param { CrownSensitivity | undefined } sensitivity
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Defines whether the AM/PM option is cascaded with the time in 12-hour mode.
     *
     * @param { boolean | undefined } enabled - Default value is false, set true to enable.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableCascade(enabled: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<TimePickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TimePickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the TimePickerDialogOptions for Data Picker Dialog.
 *
 * @extends TimePickerOptions
 * @interface TimePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TimePickerDialogOptions extends TimePickerOptions {
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    useMilitaryTime?: boolean;
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Text style of normal items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    textStyle?: PickerTextStyle;
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
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selectedTextStyle?: PickerTextStyle;
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
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAccept?: (value: TimePickerResult) => void;
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel?: VoidCallback;
    /**
     * This event is triggered when a TimePicker Time or time is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onChange?: (value: TimePickerResult) => void;
    /**
     * This event is triggered when an item enters the selected area in dialog.
     *
     * @type { ?Callback<TimePickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onEnterSelectedArea?: Callback<TimePickerResult>;
    /**
     * Defines the timePickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines the timePickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the timePickerDialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the timePickerDialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Defines whether the AM/PM option is cascaded with the time in 12-hour mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableCascade?: boolean;
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
     * Set time format
     *
     * @type { ?DateTimeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    dateTimeOptions?: DateTimeOptions;
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
}

/**
 * Defines the TimePicker component.
 *
 * @param { TimePickerOptions } [options] - timer picker options.
 * @returns { TimePickerAttribute } The attribute of the TimePicker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TimePicker(
    options?: TimePickerOptions
): TimePickerAttribute;
