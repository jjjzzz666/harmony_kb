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

import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, Callback, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, DateTimeOptions, Bindable } from './common';
import { ResourceColor, Offset, VoidCallback } from "./units";
import { DialogAlignment } from "./alertDialog";
import { CrownSensitivity } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the struct of DatePickerResult.
 *
 * @interface DatePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DatePickerResult {
    /**
     * Year of the selected date.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end.
     * If start and end are not set, the default range is [1970, 2100].
     * </p>
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    year?: int;
    /**
     * Month index of the selected date.
     * The index is zero-based. 0 indicates January, and 11 indicates December.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end. If start and end are not set, the default range is [0, 11].
     * </p>
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    month?: int;
    /**
     * Day of the selected date.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end. If start and end are not set, the default range is [1, 31].
     * </p>
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full    
     * @since 23 static
     */
    day?: int;
}
/**
 * Defines the mode of the date picker.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DatePickerMode {
    /**
     * The date displays three columns: year, month, and day.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    DATE = 0,
    /**
     * The date displays two columns: year and month.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    YEAR_AND_MONTH = 1,
    /**
     * Defines a mode that displays the date in months and days of the month.
     * In this mode, if the month changes from December to January,
     * the year does not increment by one; if the month changes from January to December,
     * the year does not decrement by one. The year remains fixed at the currently set value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    MONTH_AND_DAY = 2
}
/**
 * Parameters of the date picker.
 *
 * @interface DatePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DatePickerOptions {
    /**
     * Start date of the picker.
     *
     * @type { ?Date }
     * @default Date('1970-1-1')
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    start?: Date;
    /**
     * End date of the picker.
     *
     * @type { ?Date }
     * @default Date('2100-12-31')
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    end?: Date;
    /**
     * Specifies the date selector check date or time selector check time.
     *
     * @type { ?(Date | Bindable<Date>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    selected?: Date | Bindable<Date>;
    /**
     * Date columns to be displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>In DatePickerDialog, with showTime=true, this parameter has no effect and the default three columns for year,
     * <br>month, and day are displayed.
     * </p>
     *
     * @type { ?DatePickerMode }
     * @default DatePickerMode.DATE - which means to display three columns: year, month, and day.
     * <br>Decimal values are rounded off.
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    mode?: DatePickerMode;
}
/**
 * Defines the DatePicker component attributes.
 *
 * @extends CommonMethod
 * @interface DatePickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface DatePickerAttribute extends CommonMethod {
    /**
     * Specifies whether to display the lunar calendar.
     *
     * @param { boolean | undefined } value - Whether to display the lunar calendar.
     *     <br>- <em>true</em>: Display the lunar calendar.
     *     <br>- <em>false</em>: Do not display the lunar.
     * @default false
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default lunar(value: boolean | undefined): this;
    /**
     * Sets the text style for the top and bottom items.
     *
     * @param { PickerTextStyle | undefined } value - Font color, font size, and font weight of the top and bottom items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default disappearTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style for all items except the top, bottom, and selected items.
     *
     * @param { PickerTextStyle | undefined } value - Font color, font size, and font weight of all items except the top,
     *     <br>bottom, and selected items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default textStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style for the selected item.
     *
     * @param { PickerTextStyle | undefined } value - Font color, font size, and font weight of the selected item.
     * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default selectedTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Triggered when a date is selected.
     * Anonymous Object Rectification.
     *
     * @param { Callback<Date> | undefined } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default onDateChange(callback: Callback<Date> | undefined): this;
    /**
     * Sets the sensitivity to the digital crown rotation.
     *
     * @param { CrownSensitivity | undefined } sensitivity - Sensitivity to the digital crown rotation.
     * @default CrownSensitivity.MEDIUM
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Sets whether to enable haptic feedback.
     *
     * @param { boolean | undefined } enable - Whether to enable haptic feedback.
     *     <br>true (default): Haptic feedback is enabled.
     *     <br>false: Haptic feedback is disabled.
     * @default true
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full   
     * @since 23 static
     */
    default enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @param { boolean | undefined } isLoop
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */  
    default canLoop(isLoop: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<DatePickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<DatePickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the style of the lunar calendar switch in the DatePickerDialog component.
 *
 * @interface LunarSwitchStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LunarSwitchStyle {
    /**
     * Background color of the switch when it is on.
     *
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_text_primary_actived')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selectedColor?: ResourceColor;
    /**
     * Border color of the switch when it is off.
     *
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_switch_outline_off')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    unselectedColor?: ResourceColor;
    /**
     * Color of the icon inside the switch.
     *
     * @type { ?ResourceColor }
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeColor?: ResourceColor;
}
/**
 * Parameters of the date picker dialog box.
 *
 * @extends DatePickerOptions
 * @interface DatePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface DatePickerDialogOptions extends DatePickerOptions {
    /**
     * Whether to display the lunar calendar.
     *     The value true means to display the lunar calendar, and false means the opposite.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full    
     * @since 23 static
     */
    lunar?: boolean;
    /**
     * Whether to display the lunar calendar switch.
     *     The value true means to display the lunar calendar switch, and false means the opposite.
     *
     * @type { ?boolean } value - indicates whether to show the switch to display the lunar.
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full    
     * @since 23 static
     */
    lunarSwitch?: boolean;
    /**
     * Style of the lunar calendar switch.
     *
     * @type { ?LunarSwitchStyle }
     * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
     * <br>unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'), strokeColor: Color.White }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    lunarSwitchStyle?: LunarSwitchStyle;
    /**
     * Whether to display the time item.
     *     The value true means to display the time item, and false means the opposite.
     *
     * <p><strong>NOTE</strong>:
     * <br>With showTime=true, the mode parameter has no effect and the default three columns for year,
     * <br>month, and day are displayed.
     * </p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    showTime?: boolean;
    /**
     * Whether to display time in 24-hour format.
     *     The value true means to display time in 24-hour format, and false means the opposite.
     *
     * <p><strong>NOTE</strong>:
     * <br>When the display time is in 12-hour format, the AM/PM zone does not change depending on the hour portion.
     * </p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    useMilitaryTime?: boolean;
    /**
     * Font color, font size, and font width for the top and bottom items.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Font color, font size, and font width of all items except the top, bottom, and selected items.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
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
     * Font color, font size, and font width of the selected item.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selectedTextStyle?: PickerTextStyle;
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
     * Callback invoked when the Cancel button in the dialog box is clicked.
     * Anonymous Object Rectification.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onCancel?: VoidCallback;
    /**
     * Callback invoked when the OK button in the dialog box is clicked.
     *
     * <p><strong>NOTE</strong>:
     * <br>When showTime is set to true, the hour and minute in the value returned by
     * <br>the callback are the hour and minute selected in the picker. Otherwise,
     * <br>the hour and minute are the hour and minute of the system time.
     * </p>
     *
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDateAccept?: Callback<Date>;
    /**
     * Callback invoked when the selected item in the picker changes.
     * Anonymous Object Rectification.
     *
     * <p><strong>NOTE</strong>:
     * <br>When showTime is set to true, the hour and minute in the value returned by
     * <br>the callback are the hour and minute selected in the picker. Otherwise,
     * <br>the hour and minute are the hour and minute of the system time.
     * </p>
     *
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDateChange?: Callback<Date>;
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
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onDidAppear.
     * The settings take effect next time the dialog box appears.
     * <br>3. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * <br>4. If the dialog box is closed before its entrance animation is finished,
     * this callback is not invoked.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * Event callback when the dialog box disappears.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * <br>(onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * Event callback when the dialog box is about to appear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onWillAppear.
     * The settings take effect next time the dialog box appears.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * Event callback when the dialog box is about to disappear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
    /**
     * Shadow of the dialog box.
     * Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD
     * when the dialog box is focused and ShadowStyle.OUTER_FLOATING_SM
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Whether to display a leading zero for the hours and minutes.
     *
     * <p><strong>NOTE</strong>:
     * <br>Currently only the configuration of the hour and minute parameters is supported.
     * </p>
     *
     * @type { ?DateTimeOptions }
     * @default hour: In the 24-hour format, it defaults to 2-digit, which means a leading zero is used;
     * <br>In the 12-hour format, it defaults to numeric, which means no leading zero is used.
     * <br>minute: defaults to 2-digit, which means a leading zero is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    dateTimeOptions?: DateTimeOptions;
    /**
     * Whether to enable the hover mode.
     *
     * @type { ?boolean }
     * @default false
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
     * The value true means to enable haptic feedback, and false means the opposite
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    enableHapticFeedback?: boolean;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    canLoop?: boolean;
}

/**
 * Defines the DatePicker component.
 * 
 * @param { DatePickerOptions } [options] - date picker options.
 * @returns { DatePickerAttribute } The attribute of the DatePicker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function DatePicker(
    options?: DatePickerOptions
): DatePickerAttribute;
