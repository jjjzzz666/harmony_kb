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
import { CommonConfiguration, CommonMethod, ShadowOptions, ContentModifier, DateTimeOptions } from './common';
import { ResourceColor, Length, ResourceStr } from "./units";
import { FontStyle, FontWeight } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, Callback } from "./common";

/**
 * Provides a way to control the textclock status.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextClockController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor();
    /**
     * Provides a start event for textclock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start(): void;
    /**
     * Provides a stop event for textclock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    stop(): void;
}
/**
 * TextClockConfiguration used by text clock content modifier
 *
 * @extends CommonConfiguration<TextClockConfiguration>
 * @interface TextClockConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextClockConfiguration extends CommonConfiguration<TextClockConfiguration> {
    /**
     * Specifies the current time zone.
     * The valid value is an integer ranging from - 14 to 12,
     * Where a negative value indicates the eastern time zone, for example, -8.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    timeZoneOffset: double;
    /**
     * TextClock is started or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    started: boolean;
    /**
     * The time of the TextClock.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    timeValue: long;
}
/**
 * Options to construct TextClock component.
 *
 * @interface TextClockOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextClockOptions {
    /**
     * Time zone offset.
     * Anonymous Object Rectification.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    timeZoneOffset?: double;
    /**
     * TextClock controller.
     * Anonymous Object Rectification.
     *
     * @type { ?TextClockController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    controller?: TextClockController;
}
/**
 * Defines the TextClock component attributes.
 *
 * @extends CommonMethod
 * @interface TextClockAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextClockAttribute extends CommonMethod {
    /**
     * set display time format,such as "yyyy/mm/dd","yyyy-mm-dd".
     * support time format：yyyy,mm,mmm(English month abbreviation),mmmm(Full name of the month in English),
     * dd,ddd(English Week abbreviation),dddd(Full name of the week in English),
     * HH/hh(24-hour clock/12-hour clock),MM/mm(minute),SS/ss(second).
     * The default value is "hh:mm:ss" when TextClock is not in a form.
     * The default value is "hh:mm" when TextClock is in a form.
     * If the value has second or millisecond, the value will be set to the default value.
     *
     * @param { ResourceStr | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default format(value: ResourceStr | undefined): this;
    /**
     * Provides a date change callback.
     * The callback parameter is Unix Time Stamp,
     * The number of milliseconds that have elapsed since January 1, 1970 (UTC).
     * The minimum callback interval for this event default is seconds when TextClock is not in a form.
     * The minimum callback interval for this event is minutes when TextClock is in a form.
     * If visibility is Hidden the callback be disabled when TextClock is in a form.
     * You can listen to this callback,
     * Use the format attribute method to customize data display in the callback.
     *
     * @param { Callback<long> | undefined } event - Listening date event callback.
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDateChange(event: Callback<long> | undefined): this;
    /**
     * Called when the value of TextClock fontColor is set
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the value of TextClock fontSize is set
     *
     * @param { Length | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * Called when the value of TextClock fontStyle is set
     *
     * @param { FontStyle | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the value of TextClock fontWeight is set
     *
     * @param { int | FontWeight | string | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * Called when the value of TextClock fontFamily is set
     *
     * @param { ResourceStr | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - The shadow options.
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Called when the text fontFeature is set.
     *
     * @param { string | undefined } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFeature(value: string | undefined): this;
    /**
     * Set the content modifier of textclock.
     *
     * @param { ContentModifier<TextClockConfiguration> | undefined } modifier - The content modifier of textclock.
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<TextClockConfiguration> | undefined): this;
    /**
     * Set hour format
     *
     * @param { DateTimeOptions | undefined } dateTimeOptions - Indicates whether a leading 0 is required for the hour.
     * @returns { TextClockAttribute } the attribute of the text clock
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default dateTimeOptions(dateTimeOptions: DateTimeOptions | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<TextClockAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextClockAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the TextClock component.
 *
 * @param { TextClockOptions } [options] - text clock options.
 * @returns { TextClockAttribute } The attribute of the TextClock.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function TextClock(
    options?: TextClockOptions
): TextClockAttribute;
