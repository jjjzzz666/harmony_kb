'use static'
/**
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type StdArray<T> = T[];

/**
 * @file
 */
/**
 * A namespace providing ES standard collection types for JavaScript interoperability.
 *
 * @namespace es
 * @syscap SystemCapability.ArkTS.ArkTS
 * @since 24
 */
declare namespace es {
    /**
     * A collection of key-value pairs.
     *
     * @class Map
     * @template K
     * @template V
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    export class Map<K, V> {
        /**
         * Sets the value for the key in the Map.
         *
         * @param {K} key - The key to set.
         * @param {V} value - The value to set.
         * @returns {this} Returns the Map object.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        set(key: K, value: V): this;
        /**
         * Returns the value associated to the key, or undefined if there is none.
         *
         * @param {K} key - The key to look up.
         * @returns {V | undefined} Returns the value associated with the key, or undefined if the key does not exist.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        get(key: K): V | undefined;
        /**
         * Returns a boolean indicating whether a value has been associated with the key.
         *
         * @param {K} key - The key to check.
         * @returns {boolean} Returns true if an element in the Map existed and has been removed, or false if the element does not exist.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        has(key: K): boolean;
        /**
         * Removes the key-value pair from the Map.
         *
         * @param {K} key - The key to remove.
         * @returns {boolean} Returns true if an element in the Map existed and has been removed, or false if the element does not exist.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        delete(key: K): boolean;
        /**
         * Removes all key-value pairs from the Map.
         *
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        clear(): void;
        /**
         * Executes a provided function once for each key-value pair in the Map.
         *
         * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn - The function to execute for each element.
         * @param {Object} thisArg - Value to use as this when executing callbackfn.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: Object): void;
        /**
         * Returns the number of key-value pairs in the Map.
         *
         * @returns {number} Returns the number of key-value pairs in the Map.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        get size(): number;
        /**
         * Returns a string representing the Map.
         *
         * @returns {string} Returns a string representing the Map.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toString(): string;
    }

    /**
     * A collection of unique values.
     *
     * @class Set
     * @template T
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    export class Set<T> {
        /**
         * Appends a new element with a given value to the end of the Set.
         *
         * @param {T} value - The value to add to the Set.
         * @returns {this} Returns the Set object.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        add(value: T): this;
        /**
         * Removes all elements from the Set.
         *
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        clear(): void;
        /**
         * Removes the specified element from the Set.
         *
         * @param {T} value - The value to remove from the Set.
         * @returns {boolean} Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        delete(value: T): boolean;
        /**
         * Executes a provided function once for each value in the Set.
         *
         * @param {(value: T, value2: T, set: Set<T>) => void} callbackfn - The function to execute for each element.
         * @param {Object} thisArg - Value to use as this when executing callbackfn.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: Object): void;
        /**
         * Returns a boolean indicating whether a value exists in the Set.
         *
         * @param {T} value - The value to test for presence in the Set.
         * @returns {boolean} Returns true if the value exists in the Set, otherwise false.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        has(value: T): boolean;
        /**
         * Returns the number of values in the Set.
         *
         * @returns {number} Returns the number of values in the Set.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        get size(): number;
        /**
         * Returns a string representing the Set.
         *
         * @returns {string} Returns a string representing the Set.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toString(): string;
    }

    /**
     * A collection of elements with numeric indices.
     *
     * @class Array
     * @template T
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    export class Array<T> {
        /**
         * Removes the last element from an array and returns it.
         *
         * @returns {T | undefined} Returns the removed element, or undefined if the array is empty.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        pop(): T | undefined;
        /**
         * Appends one or more elements to the end of an array.
         *
         * @param {T} val - The element to add to the end of the array.
         * @returns {number} Returns the new length of the array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        push(val: T): number;
        /**
         * Returns the length of the array.
         *
         * @returns {number} Returns the length of the array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        get length(): number;
        /**
         * Gets the element at the specified index.
         *
         * @param {number} index - The index of the element to get.
         * @returns {T | undefined} Returns the element at the specified index, or undefined if the index is out of range.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        $_get(index: number): T | undefined;
        /**
         * Sets the element at the specified index.
         *
         * @param {number} index - The index of the element to set.
         * @param {T} val - The value to set.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        $_set(index: number, val: T): void;
        /**
         * Returns the element at the specified index.
         *
         * @param {number} index - The index of the element to get.
         * @returns {T | undefined} Returns the element at the specified index, or undefined if the index is out of range.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        at(index: number): T | undefined;
        /**
         * Returns a new array that is the concatenation of this array and the given value.
         *
         * @param {T} val - The value to concatenate.
         * @returns {Array<T>} Returns a new array containing the concatenated elements.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        concat(val: T): Array<T>;
        /**
         * Copies a sequence of array elements within the array.
         *
         * @param {number} target - The index to copy the sequence to.
         * @param {number} start - The start index of the sequence to copy.
         * @param {number} end - The end index of the sequence to copy.
         * @returns {Array<T>} Returns the modified array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        copyWithin(target: number, start?: number, end?: number): Array<T>;
        /**
         * Tests whether all elements in the array pass the test implemented by the provided function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {boolean} Returns true if the callback function returns a truthy value for every array element, otherwise false.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        every(predicate: (value: T, index: number, array: Array<T>) => boolean): boolean;
        /**
         * Changes all elements in an array to a static value, from a start index to an end index.
         *
         * @param {T} value - The value to fill the array with.
         * @param {number} start - The start index to begin filling.
         * @param {number} end - The end index to stop filling.
         * @returns {Array<T>} Returns the modified array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        fill(value: T, start?: number, end?: number): Array<T>;
        /**
         * Creates a new array with all elements that pass the test implemented by the provided function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {Array<T>} Returns a new array with the elements that pass the test.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        filter(predicate: (value: T, index: number, array: Array<T>) => boolean): Array<T>;
        /**
         * Returns the first element in the array that satisfies the provided testing function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {T | undefined} Returns the first element that satisfies the testing function, or undefined if no element passes the test.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        find(predicate: (value: T, index: number, array: Array<T>) => boolean): T | undefined;
        /**
         * Returns the index of the first element in the array that satisfies the provided testing function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {number} Returns the index of the first element that satisfies the testing function, or -1 if no element passes the test.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        findIndex(predicate: (value: T, index: number, array: Array<T>) => boolean): number;
        /**
         * Returns the last element in the array that satisfies the provided testing function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {T | undefined} Returns the last element that satisfies the testing function, or undefined if no element passes the test.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        findLast(predicate: (value: T, index: number, array: Array<T>) => boolean): T | undefined;
        /**
         * Returns the index of the last element in the array that satisfies the provided testing function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {number} Returns the index of the last element that satisfies the testing function, or -1 if no element passes the test.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        findLastIndex(predicate: (value: T, index: number, array: Array<T>) => boolean): number;
        /**
         * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
         *
         * @template U
         * @param {number} depth - The maximum recursion depth.
         * @returns {Array<U>} Returns a new array with the sub-array elements concatenated.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        flat<U>(depth?: number): Array<U>;
        /**
         * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
         *
         * @template U
         * @param {(v: T, k: number, arr: Array<T>) => U} fn - The function to produce an element of the new array.
         * @returns {Array<U>} Returns a new array with each element being the result of the callback function.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        flatMap<U>(fn: (v: T, k: number, arr: Array<T>) => U): Array<U>;
        /**
         * Executes a provided function once for each array element.
         *
         * @param {(value: T, index: number, array: Array<T>) => void} callbackfn - The function to execute for each element.
         * @param {Object} thisArg - Value to use as this when executing callbackfn.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        forEach(callbackfn: (value: T, index: number, array: Array<T>) => void, thisArg?: Object): void;
        /**
         * Determines whether an array includes a certain value among its entries.
         *
         * @param {T} val - The value to search for.
         * @param {number} fromIndex - The position in this array at which to begin searching.
         * @returns {boolean} Returns true if the value is found, otherwise false.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        includes(val: T, fromIndex?: number): boolean;
        /**
         * Returns the first index at which a given element can be found in the array.
         *
         * @param {T} val - The element to locate in the array.
         * @param {number} fromIndex - The index to start the search at.
         * @returns {number} Returns the first index of the element in the array, or -1 if it is not present.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        indexOf(val: T, fromIndex?: number): number;
        /**
         * Joins all elements of an array into a string.
         *
         * @param {String} sep - The separator string to use between elements.
         * @returns {string} Returns a string with the array elements joined by the separator.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        join(sep?: String): string;
        /**
         * Returns the last index at which a given element can be found in the array.
         *
         * @param {T} val - The element to locate in the array.
         * @param {number} fromIndex - The index to start the search backwards from.
         * @returns {number} Returns the last index of the element in the array, or -1 if it is not present.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        lastIndexOf(val: T, fromIndex?: number): number;
        /**
         * Creates a new array populated with the results of calling a provided function on every element in the calling array.
         *
         * @template U
         * @param {(value: T, index: number, array: Array<T>) => U} callbackfn - The function to produce an element of the new array.
         * @returns {Array<U>} Returns a new array with each element being the result of the callback function.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        map<U>(callbackfn: (value: T, index: number, array: Array<T>) => U): Array<U>;
        /**
         * Executes a reducer function on each element of the array, resulting in a single output value.
         *
         * @param {(accumulator: T, currentValue: T, index: number, array: Array<T>) => T} callbackfn - The function to execute on each element.
         * @returns {T} Returns the accumulated result.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        reduce(callbackfn: (accumulator: T, currentValue: T, index: number, array: Array<T>) => T): T;
        /**
         * Executes a reducer function on each element of the array, resulting in a single output value.
         *
         * @template U
         * @param {(accumulator: U, currentValue: T, index: number, array: Array<T>) => U} callbackfn - The function to execute on each element.
         * @param {U} initialValue - The initial value to use as the first argument to the first call of the callbackfn.
         * @returns {U} Returns the accumulated result.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        reduce<U>(callbackfn: (accumulator: U, currentValue: T, index: number, array: Array<T>) => U, initialValue: U): U;
        /**
         * Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
         *
         * @param {(accumulator: T, currentValue: T, index: number, array: Array<T>) => T} callbackfn - The function to execute on each element.
         * @returns {T} Returns the accumulated result.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        reduceRight(callbackfn: (accumulator: T, currentValue: T, index: number, array: Array<T>) => T): T;
        /**
         * Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
         *
         * @template U
         * @param {(accumulator: U, currentValue: T, index: number, array: Array<T>) => U} callbackfn - The function to execute on each element.
         * @param {U} initialValue - The initial value to use as the first argument to the first call of the callbackfn.
         * @returns {U} Returns the accumulated result.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        reduceRight<U>(
            callbackfn: (accumulator: U, currentValue: T, index: number, array: Array<T>) => U,
            initialValue: U
        ): U;
        /**
         * Reverses the elements of an array in place.
         *
         * @returns {Array<T>} Returns the reference to the original array, now reversed.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        reverse(): Array<T>;
        /**
         * Removes the first element from an array and returns it.
         *
         * @returns {T | undefined} Returns the removed element, or undefined if the array is empty.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        shift(): T | undefined;
        /**
         * Returns a shallow copy of a portion of an array.
         *
         * @param {number} start - The start index of the extraction.
         * @param {number} end - The end index of the extraction.
         * @returns {Array<T>} Returns a new array containing the extracted elements.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        slice(start?: number, end?: number): Array<T>;
        /**
         * Tests whether at least one element in the array passes the test implemented by the provided function.
         *
         * @param {(value: T, index: number, array: Array<T>) => boolean} predicate - The function to test each element.
         * @returns {boolean} Returns true if the callback function returns a truthy value for at least one element, otherwise false.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        some(predicate: (value: T, index: number, array: Array<T>) => boolean): boolean;
        /**
         * Sorts the elements of an array in place and returns the array.
         *
         * @param {(a: T, b: T) => number} comparator - The function to define the sort order.
         * @returns {Array<T>} Returns the reference to the original array, now sorted.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        sort(comparator?: (a: T, b: T) => number): Array<T>;
        /**
         * Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
         *
         * @param {number} start - The start index of the change.
         * @param {number} deleteCount - The number of elements to remove.
         * @param {...StdArray<T>} items - The elements to add to the array.
         * @returns {Array<T>} Returns an array containing the deleted elements.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        splice(start: number, deleteCount?: number, ...items: StdArray<T>): Array<T>;
        /**
         * Returns a string representing the array and its elements.
         *
         * @returns {string} Returns a string representing the array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toString(): string;
        /**
         * Returns a string representing the array and its elements, using the current locale.
         *
         * @returns {string} Returns a string representing the array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toLocaleString(): string;
        /**
         * Returns a new array with the elements in reverse order.
         *
         * @returns {Array<T>} Returns a new array with the elements in reverse order.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toReversed(): Array<T>;
        /**
         * Returns a new array with the elements sorted.
         *
         * @param {(a: T, b: T) => number} comparator - The function to define the sort order.
         * @returns {Array<T>} Returns a new array with the elements sorted.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toSorted(comparator?: (a: T, b: T) => number): Array<T>;
        /**
         * Returns a new array with some elements replaced and/or added.
         *
         * @param {number} start - The start index of the change.
         * @param {number} deleteCount - The number of elements to remove.
         * @param {...StdArray<T>} items - The elements to add to the array.
         * @returns {Array<T>} Returns a new array with the elements replaced and/or added.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        toSpliced(start: number, deleteCount?: number, ...items: StdArray<T>): Array<T>;
        /**
         * Adds one or more elements to the beginning of an array.
         *
         * @param {T} val - The element to add to the beginning of the array.
         * @returns {number} Returns the new length of the array.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        unshift(val: T): number;
        /**
         * Returns a new array with the element at the given index replaced with the given value.
         *
         * @param {number} index - The index of the element to replace.
         * @param {T} value - The value to replace the element with.
         * @returns {Array<T>} Returns a new array with the element replaced.
         * @syscap SystemCapability.ArkTS.ArkTS
         * @since 24
         */
        with(index: number, value: T): Array<T>;
    }
}

export default es;
