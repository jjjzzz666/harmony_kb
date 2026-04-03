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
import { Resource } from '../../global/resource';
import { CommonMethod, PickerTextStyle, Callback, BlurStyle, PickerDialogButtonStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, DateRange, BackgroundBlurStyleOptions, BackgroundEffectOptions } from './common';
import { Offset, ResourceColor, VoidCallback } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * The type of alignment between entry and calendar.
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum CalendarAlign {
    /**
     * The value of calendar align type start.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    START = 0,
    /**
     * The value of calendar align type center.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CENTER = 1,
    /**
     * The value of calendar align type end.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    END = 2
}
/**
 * Defines the options of CalendarPicker.
 * @interface CalendarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CalendarOptions {
    /**
     * Specifies the radius of the background of the day in calendar.
     * @type { ?(double | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    hintRadius?: double | Resource;
    /**
     * Specifies the date selector check date.
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selected?: Date;
    /**
     * Defines the start date of the calendar date.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: Date;
    /**
     * Defines the end date of the calendar date.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: Date;
    /**
     * Defines the disabled date range for the calendar picker.
     *
     * @type { ?DateRange[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    disabledDateRange?: DateRange[];
}
/**
 * Defines the CalendarPicker component attribute functions.
 *
 * @extends CommonMethod
 * @interface CalendarPickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface CalendarPickerAttribute extends CommonMethod {
    /**
     * Set the alignment between entry and calendar dialog.
     * @param { CalendarAlign | undefined } alignType - The type of alignment between entry and calendar dialog.
     * @param { Offset } [offset] - The offset between entry and calendar dialog.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default edgeAlign(alignType: CalendarAlign | undefined, offset?: Offset): this;
    /**
     * Sets the text style of entry
     * @param { PickerTextStyle | undefined } value - indicates the text style of entry.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textStyle(value: PickerTextStyle | undefined): this;
    /**
     * Callback for selected date changed.
     * Anonymous Object Rectification.
     * @param { Callback<Date> | undefined } callback - callback for selected date changed.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: Callback<Date> | undefined): this;
    /**
     * Defines whether the calendar picker marks today.
     *
     * @param { boolean | undefined } enabled - whether the calendar picker marks today.
     * @returns { CalendarPickerAttribute } the attribute of the calendar picker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default markToday(enabled: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<CalendarPickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { CalendarPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<CalendarPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the DatePickerDialogOptions for Calendar Picker Dialog.
 * @extends CalendarOptions
 * @interface CalendarDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CalendarDialogOptions extends CalendarOptions {
    /**
     * Called when the OK button in the dialog is clicked.
     * Anonymous Object Rectification.
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onAccept?: Callback<Date>;
    /**
     * Called when the Cancel button in the dialog is clicked.
     * Anonymous Object Rectification.
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel?: VoidCallback;
    /**
     * This event is triggered when a date is selected in dialog.
     * Anonymous Object Rectification.
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onChange?: Callback<Date>;
    /**
     * Defines the calendarPickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines the calendarPickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the calendarPickerDialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the calendarPickerDialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
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
     * Callback function when the dialog appears.
     * Anonymous Object Rectification.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * Callback function when the dialog disappears.
     * Anonymous Object Rectification.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * Callback function before the dialog openAnimation starts.
     * Anonymous Object Rectification.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * Callback function before the dialog closeAnimation starts.
     * Anonymous Object Rectification.
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
     * Defines the calendar picker marks today.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    markToday?: boolean;
}
/**
 * Defines CalendarPickerDialog which uses show method to show CalendarPicker dialog.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CalendarPickerDialog {
    /**
     * Invoking method display.
     * @param { CalendarDialogOptions } [options] - the option of th calendarPicker.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static show(options?: CalendarDialogOptions): void;
}
/**
 * Defines CalendarPicker Component.
 *
 * @param { CalendarOptions } [options] - calendar options.
 * @returns { CalendarPickerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function CalendarPicker(
    options?: CalendarOptions
): CalendarPickerAttribute;
