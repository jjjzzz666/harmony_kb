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
import { CommonConfiguration, CommonMethod, ShadowOptions, ContentModifier } from './common';
import { ResourceColor, Length, ResourceStr } from "./units";
import { FontStyle, FontWeight } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Provides a way to control the process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextTimerController {
    /**
     * constructor.
     * A constructor used to create a TextTimerController object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor();
    /**
     * Provides a start event for timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start(): void;
    /**
     * Provides a pause event for timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    pause(): void;
    /**
     * Provides an event to reset timer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    reset(): void;
}
/**
 * TextTimerConfiguration used by content modifier.
 *
 * @extends CommonConfiguration<TextTimerConfiguration>
 * @interface TextTimerConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
    /**
     * Timer duration, in milliseconds.
     * It is effective only when isCountDown is true.
     * The maximum value is 86400000 ms (24 hours).
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is between 0 and 86,400,000, it is used as the initial countdown time.
     * <br>Otherwise, the default value is used as the initial countdown time.
     * </p>
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count: long;
    /**
     * Whether the timer is a countdown.
     * The value true means that the timer counts down,
     * and false means that the timer counts up.
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isCountDown: boolean;
    /**
     * Whether the timer has already started.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    started: boolean;
    /**
     * Elapsed time of the timer, in the minimum unit of the format.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    elapsedTime: long;
}
/**
 * Parameters of the TextTimer component.
 *
 * @interface TextTimerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface TextTimerOptions {
    /**
     * Whether the timer is a countdown.
     * The value true means that the timer counts down,
     * and false means that the timer counts up.
     *
     * @type { ?boolean } - Default value: false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    isCountDown?: boolean;
    /**
     * Timer duration, in milliseconds.
     * It is effective only when isCountDown is true.
     * The maximum value is 86400000 ms (24 hours).
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is between 0 and 86,400,000, it is used as the initial countdown time.
     * <br>Otherwise, the default value is used as the initial countdown time.
     * </p>
     *
     * @type { ?long } - Default value: 60000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count?: long;
    /**
     * TextTimer controller.
     *
     * @type { ?TextTimerController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    controller?: TextTimerController;
}
/**
 * TimerCallback
 *
 * @typedef { function } TimerCallback
 * @param { long } utc
 * @param { long } elapsedTime
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type TimerCallback = (utc: long, elapsedTime: long) => void;
/**
 * Defines the TextTimer component attributes.
 *
 * @extends CommonMethod
 * @interface TextTimerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface TextTimerAttribute extends CommonMethod {
    /**
     * Sets the custom format.
     * The value must contain at least one of the following keywords: HH, mm, ss, and SS.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the specified date format is yy, MM, or dd, the default value is used instead.
     * </p>
     *
     * @param { string | undefined } value - Custom format.Default value: 'HH:mm:ss.SS'
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default format(value: string | undefined): this;
    /**
     * Sets the font color.
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * Sets the font size.
     *
     * @param { Length | undefined } value - Font size.The default font size is 16 fp.
     * <br>If fontSize is of the number type, the unit fp is used.
     * <br>The value cannot be a percentage.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * Sets the font style.
     *
     * @param { FontStyle | undefined } value - Font style.Default value: FontStyle.Normal
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * Sets the font weight.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is too large, the text may be clipped depending on the font.
     * </p>
     *
     * @param { int | FontWeight | ResourceStr | undefined } value - Font weight.
     * <br>For the number type, Value range: [100, 900], at an interval of 100.The default value is 400.
     * <br>A larger value indicates a heavier font weight.
     * <br>For the string type, only strings that represent a number.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
    /**
     * Sets the font family.
     *
     * @param { ResourceStr | undefined } value - Font family. Default font: 'HarmonyOS Sans'
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontFamily(value: ResourceStr | undefined): this;
    /**
     * Triggered when the time text changes.
     * This event is not triggered when the screen is locked or the application is running in the background.
     * When high-precision formats (such as SSS or SS) are used, the callback interval may vary.
     *
     * @param { TimerCallback | undefined } event
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onTimer(event: TimerCallback | undefined): this;
    /**
     * Sets the text shadow.
     * It supports input parameters in an array to implement multiple text shadows.
     * This API does not work with the fill attribute or coloring strategy.
     *
     * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - The shadow options.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Creates a content modifier.
     *
     * @param { ContentModifier<TextTimerConfiguration> | undefined } modifier - The content modifier of texttimer.
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<TextTimerConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the TextTimer component.
 *
 * @param { TextTimerOptions } [options] - text timer options.
 * @returns { TextTimerAttribute } The attribute of the TextTimer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextTimer(
    options?: TextTimerOptions
): TextTimerAttribute;
