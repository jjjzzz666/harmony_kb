'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * Define the ReadableState interface to observed data changes.
 *
 * @interface ReadableState<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ReadableState<T> {
    /**
     * Get state variable value.
     *
     * @type { T }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    readonly value: T;
}

/**
 * Determine whether two values are equal.
 * @typedef {function} Equivalent<T>
 * @param { T } oldV - the old value
 * @param { T } newV - the new value
 * @returns { boolean } - Returns the comparison result between old value and new value,
 * if they are equal, ther true; otherwise, return false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Equivalent<T> = (oldV: T, newV: T) => boolean;

/**
 * Define the InternalScope interface to manage state management.
 *
 * @interface IncrementalScope<Value>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface IncrementalScope<Value> {
    /**
     * Get the flag whether the state variable is changed, true if internal value can be returned as is.
     * 
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get unchanged(): boolean;

    /**
     * State variable cache, internal value if it is already computed.
     *
     * @returns { Value }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    get cached(): Value;
    /**
     * Internal value updated after the computation.
     *
     * @param  { Value } [newValue] - new value
     * @returns { Value } return the Value from cached
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    recache(newValue?: Value): Value;
    /**
     * Internal state for parameter
     *
     * @param {int} index - index
     * @param {T} value - then value to be updated
     * @returns {ReadableState<T>} return state variable Value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    param<T>(index: int, value: T): ReadableState<T>;
}

/**
 * Context of a state, keeping track of changes in the given scope.
 *
 * @interface StateContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StateContext {
    /**
     * The scope which is used to track the changes of state context.
     *
     * @param { int } id - state context id
     * @param { int } paramCount - the count of param
     * @returns {InternalScope<T>} return state scope
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope<T>(id: int, paramCount: int): IncrementalScope<T>;
}

/**
 * Define StateContext alias.
 *
 * @typedef { StateContext } __memo_context_type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type __memo_context_type = StateContext;

/**
 * Define int alias
 *
 * @typedef { int } __memo_id_type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type __memo_id_type = int;
