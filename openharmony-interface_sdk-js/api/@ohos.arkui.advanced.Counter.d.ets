/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/**
 * Enum for the counter type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Enum for the counter type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum CounterType {
    /**
     * List counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * List counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    LIST = 0,

    /**
     * Compact counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Compact counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    COMPACT = 1,

    /**
     * Inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    INLINE = 2,

    /**
     * Date inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Date inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    INLINE_DATE = 3
}

/**
 * Defines the common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class CommonOptions {
    /**
     * Set the focusable of the counter component.
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the focusable of the counter component.
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    focusable?: boolean;

    /**
     * Set the step of the couter component, ranges greater than or equal to 1
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the step of the couter component, ranges greater than or equal to 1
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    step?: number;

    /**
     * Trigger a mouse hover event at the increased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a mouse hover event at the increased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onHoverIncrease?: (isHover: boolean) => void;

    /**
     * Trigger a mouse hover event at the decreased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a mouse hover event at the decreased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onHoverDecrease?: (isHover: boolean) => void;
}

/**
 * Defines the inline style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the inline style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class InlineStyleOptions extends CommonOptions {
    /**
     * Set initial value of the counter component, ranges from min to max.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set initial value of the counter component, ranges from min to max.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    value?: number;

    /**
     * Set minimum value of the counter component
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set minimum value of the counter component
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    min?: number;

    /**
     * Set maximum value of the counter component
     *
     * @type { ?number }
     * @default 999
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set maximum value of the counter component
     *
     * @type { ?number }
     * @default 999
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    max?: number;

    /**
     * Set text width  of the counter component,  ranges greater than or equal to 0
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set text width  of the counter component,  ranges greater than or equal to 0
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    textWidth?: number;

    /**
     * Trigger a event when the value of the counter has been changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the value of the counter has been changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onChange?: (value: number) => void;
}

/**
 * Defines the number style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the number style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class NumberStyleOptions extends InlineStyleOptions {
    /**
     * Set the label of the counter component.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the label of the counter component.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    label?: ResourceStr;

    /**
     * Trigger a event when the increased button got focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the increased button got focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onFocusIncrease?: () => void;

    /**
     * Trigger a event when the decreased button got focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the decreased button got focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onFocusDecrease?: () => void;

    /**
     * Trigger a event when the increased button lose focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the increased button lose focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onBlurIncrease?: () => void;

    /**
     * Trigger a event when the decreased button lose focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the decreased button lose focus.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onBlurDecrease?: () => void;
}

/**
 * Defines the date data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the date data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DateData {
    /**
     * The year of the DateData, ranges from 1 to 5000.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * The year of the DateData, ranges from 1 to 5000.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    year: number;

    /**
     * The month of the DateData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * The month of the DateData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    month: number;

    /**
     * The day of the DateData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * The day of the DateData.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    day: number;

    /**
     * Constructor of the DateData.
     *
     * @param { number } year - set the year of the DateData.
     * @param { number } month - set the month of the DateData.
     * @param { number } day - set the day of the DateData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Constructor of the DateData.
     *
     * @param { number } year - set the year of the DateData.
     * @param { number } month - set the month of the DateData.
     * @param { number } day - set the day of the DateData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    constructor(year: number, month: number, day: number);

    /**
     * Convert the date data to string.
     *
     * @returns { string } date data in string form.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Convert the date data to string.
     *
     * @returns { string } date data in string form.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    toString(): string;
}

/**
 * Defines the date style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the date style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DateStyleOptions extends CommonOptions {
    /**
     * Set the year of the counter component, ranges from 1 to 5000.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the year of the counter component, ranges from 1 to 5000.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    year?: number;

    /**
     * Set the month of the counter component.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the month of the counter component.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    month?: number;

    /**
     * Set the day of the counter component.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the day of the counter component.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    day?: number;

    /**
     * Trigger a event when the date of the counter has been changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Trigger a event when the date of the counter has been changed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onDateChange?: (date: DateData) => void;
}


/**
 * Defines the counter options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines the counter options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class CounterOptions {
    /**
     * Set the type of the counter component.
     *
     * @type { CounterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the type of the counter component.
     *
     * @type { CounterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    type: CounterType;

    /**
     * Set the counter attribute of the LIST or COMPACT counter component.
     *
     * @type { ?NumberStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the counter attribute of the LIST or COMPACT counter component.
     *
     * @type { ?NumberStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    numberOptions?: NumberStyleOptions;

    /**
     * Set the counter attribute of the INLINE counter component.
     *
     * @type { ?InlineStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the counter attribute of the INLINE counter component.
     *
     * @type { ?InlineStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    inlineOptions?: InlineStyleOptions;

    /**
     * Set the counter attribute of the INLINE_DATE counter component.
     *
     * @type { ?DateStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * Set the counter attribute of the INLINE_DATE counter component.
     *
     * @type { ?DateStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dateOptions?: DateStyleOptions;

    /**
     * Indicates the attribute of the current counter direction.
     *
     * @type { ?Direction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    direction?: Direction;
}

/**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 /**
 * Defines Counter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@Component
declare struct CounterComponent {
    /**
     * The options of a counter component.
     *
     * @type { CounterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
     /**
     * The options of a counter component.
     *
     * @type { CounterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    @Prop
    options: CounterOptions;
}

export {CounterComponent, CounterOptions, DateData, CounterType}
