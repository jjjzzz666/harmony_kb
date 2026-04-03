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
import { PropRef } from '@ohos.arkui.stateManagement';
import {
  ResourceStr,
  Resource,
  Direction,
  Component,
  Builder,
  VoidCallback
} from '@ohos.arkui.component';

/**
 * Enum for the counter type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare enum CounterType {
    /**
     * List counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    LIST = 0,

    /**
     * Compact counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    COMPACT = 1,

    /**
     * Inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    INLINE = 2,

    /**
     * Date inline counter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    INLINE_DATE = 3
}

/**
 * The hover callback of Counter.
 *
 * @typedef { function } OnCounterHoverCallback
 * @param { boolean } isHover - isHover
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type OnCounterHoverCallback = (isHover: boolean) => void;

/**
 * Defines the common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare class CommonOptions {
    /**
     * Set the focusable of the counter component.
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    focusable?: boolean;

    /**
     * Set the step of the couter component, ranges greater than or equal to 1
     *
     * @type { ?int }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    step?: int;

    /**
     * Trigger a mouse hover event at the increased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onHoverIncrease?: OnCounterHoverCallback;

    /**
     * Trigger a mouse hover event at the decreased button.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onHoverDecrease?: OnCounterHoverCallback;
}

/**
 * Defines the inline style options.
 *
 * @extends CommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class InlineStyleOptions extends CommonOptions {
    /**
     * Set initial value of the counter component, ranges from min to max.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @noninterop
     */
    value?: int;

    /**
     * Set minimum value of the counter component, ranges greater than equal to 0.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @noninterop
     */
    min?: int;

    /**
     * Set maximum value of the counter component, ranges greater than equal to 0.
     *
     * @type { ?int }
     * @default 999
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @noninterop
     */
    max?: int;

    /**
     * Set text width  of the counter component,  ranges greater than or equal to 0
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    textWidth?: double;

    /**
     * Trigger a event when the value of the counter has been changed.
     *
     * @type { ?OnInlineCounterChange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onChange?: OnInlineCounterChange;
}

/**
 * Defines the number style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare class NumberStyleOptions extends InlineStyleOptions {
    /**
     * Set the label of the counter component.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    label?: ResourceStr;

    /**
     * Trigger a event when the increased button got focus.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onFocusIncrease?: VoidCallback;

    /**
     * Trigger a event when the decreased button got focus.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onFocusDecrease?: VoidCallback;

    /**
     * Trigger a event when the increased button lose focus.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onBlurIncrease?: VoidCallback;

    /**
     * Trigger a event when the decreased button lose focus.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onBlurDecrease?: VoidCallback;
}

/**
 * The change callback of the inline counter.
 *
 * @typedef { function } OnInlineCounterChange
 * @param { int } value - value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnInlineCounterChange = (value: int) => void;

/**
 * Defines the date data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare class DateData {
    /**
     * The year of the DateData, ranges from 1 to 5000.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    year: int;

    /**
     * The month of the DateData.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    month: int;

    /**
     * The day of the DateData.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    day: int;

    /**
     * Constructor of the DateData.
     *
     * @param { int } year - set the year of the DateData.
     * @param { int } month - set the month of the DateData.
     * @param { int } day - set the day of the DateData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    constructor(year: int, month: int, day: int);

    /**
     * Convert the date data to string.
     *
     * @returns { string } date data in string form.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    toString(): string;
}

/**
 * The change callback of the date style counter.
 *
 * @typedef { function } OnDateCounterChangeCallback
 * @param { DateData } date - date
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type OnDateCounterChangeCallback = (date: DateData) => void;


/**
 * Defines the date style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare class DateStyleOptions extends CommonOptions {
    /**
     * Set the year of the counter component, ranges from 1 to 5000.
     *
     * @type { ?int }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    year?: int;

    /**
     * Set the month of the counter component.
     *
     * @type { ?int }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    month?: int;

    /**
     * Set the day of the counter component.
     *
     * @type { ?int }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    day?: int;

    /**
     * Trigger a event when the date of the counter has been changed.
     *
     * @type { ?OnDateCounterChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onDateChange?: OnDateCounterChangeCallback;
}


/**
 * Defines the counter options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare class CounterOptions {
    /**
     * Set the type of the counter component.
     *
     * @type { CounterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    type: CounterType;

    /**
     * Set the counter attribute of the LIST or COMPACT counter component.
     *
     * @type { ?NumberStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    numberOptions?: NumberStyleOptions;

    /**
     * Set the counter attribute of the INLINE counter component.
     *
     * @type { ?InlineStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    inlineOptions?: InlineStyleOptions;

    /**
     * Set the counter attribute of the INLINE_DATE counter component.
     *
     * @type { ?DateStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    dateOptions?: DateStyleOptions;

    /**
     * Indicates the attribute of the current counter direction.
     *
     * @type { ?Direction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    direction?: Direction;
}

/**
 * Defines Counter Component.
 *
 * @struct { CounterComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Component
declare struct CounterComponent {
    /**
     * The options of a counter component.
     *
     * @type { CounterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    options: CounterOptions;

    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     * @noninterop
     */
    @Builder
    build(): void;
}

export { CounterComponent, CounterOptions, DateData, CounterType, InlineStyleOptions, NumberStyleOptions, DateStyleOptions };
