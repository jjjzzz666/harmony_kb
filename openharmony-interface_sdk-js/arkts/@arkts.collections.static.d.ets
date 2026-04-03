'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Defines the collections for ArkTS
 * @kit ArkTS
 */

/**
 * ArkTS collections.
 *
 * @namespace collections
 * @syscap SystemCapability.Utils.Lang
 * @since 23 static
 */
declare namespace collections {
 /**
   * An ordered collections of bit values, which are either 0 or 1.
   * If multiple threads access a BitVector instance concurrently, 
   * and at least one of the threads modifies the array structurally,
   * it must be synchronized externally. 
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 23 static
   */
  class BitVector {
    /**
     * A constructor used to create a BitVector object.
     *
     * @param { int } length - The length of BitVector object.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    constructor(length: int);
    /**
     * Gets the element number of the BitVector. This is a number one higher than the highest index in the bit vector.
     * It can be changed by resize().
     *
     * @returns { int } The int type, returns The length of BitVector
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get length(): int;
    /**
     * Appends the bit element to the end of this bit vector.
     *
     * @param { int } element - Element to be appended to this bit vector (0 means 0, else means 1).
     * @returns { boolean } The boolean type, returns true if the addition is successful, and returns false if it fails.
     * @throws { BusinessError } 10200011 - The push method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    push(element: int): boolean;
    /**
     * Retrieves and removes the bit element to the end of this bit vector.
     *
     * @returns { int | undefined } The boolean type, if the bit push successfully, return true, else return false.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    pop(): int | undefined;
    /**
     * Check if bit vector contains a particular bit element.
     *
     * @param { int } element - Element to be contained (0 means 0, else means 1).
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, containing the value at that index.
     * @returns { boolean } The boolean type, if bit vector contains the specified element, return true,
                            else return false.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The has method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    has(element: int, fromIndex: int, toIndex: int): boolean;
    /**
     * Sets a range of bits in a bit vector to a particular element.
     *
     * @param { int } element - Element to be set (0 means 0, else means 1).
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The setBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    setBitsByRange(element: int, fromIndex: int, toIndex: int): void;
    /**
     * Sets all of bits in a bit vector to a particular element.
     *
     * @param { int } element - Element to be set (0 means 0, else means 1).
     * @throws { BusinessError } 10200011 - The setAllBits method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    setAllBits(element: int): void;
    /**
     * Returns the bit values in a range of indices in a bit vector.
     *
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @returns { BitVector } The BitVector type, returns the bit values in a range of indices in a bit vector.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getBitsByRange(fromIndex: int, toIndex: int): BitVector;
    /**
     * Resize the bitVector's length.
     *
     * @param { int } size - The new size for bitVector. If count is greater than the current size of bitVector,
     * the additional bit elements are set to 0.
     * @throws { BusinessError } 10200011 - The resize method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    resize(size: int): void;
    /**
     * Counts the number of times a certain bit element occurs within a range of bits in a bit vector.
     *
     * @param { int } element - Element to be counted (0 means 0, else means 1).
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @returns { int } The number type, return the number of times a certain bit element
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getBitCountByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getBitCountByRange(element: int, fromIndex: int, toIndex: int): int;
    /**
     * Locates the first occurrence of a certain bit value within a range of bits in a bit vector.
     *
     * @param { int } element - Element to be Located (0 means 0, else means 1).
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @returns { int } The number type, return the first index of specified bit within a range,
     * or -1 if this range of the bitVector does not contain the element.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getIndexOf(element: int, fromIndex: int, toIndex: int): int;
    /**
     * Locates the last occurrence of a certain bit value within a range of bits in a bit vector.
     *
     * @param { int } element - Element to be Located (0 means 0, else means 1).
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @returns { int } The number type, return the last index of specified bit within a range,
     * or -1 if this range of the bitVector does not contain the element.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    getLastIndexOf(element: int, fromIndex: int, toIndex: int): int;
    /**
     * Flips the bit value by index in a bit vector.(Flip 0 to 1, flip 1 to 0)
     *
     * @param { int } index - The index in the bit vector.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @throws { BusinessError } 10200011 - The flipBitByIndex method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    flipBitByIndex(index: int): void;
    /**
     * Flips a range of bit values in a bit vector.(Flip 0 to 1, flip 1 to 0).
     *
     * @param { int } fromIndex - The starting position of the index, containing the value at that index position.
     * @param { int } toIndex - The end of the index, excluding the value at that index.
     * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
     * @throws { BusinessError } 10200011 - The flipBitsByRange method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    flipBitsByRange(fromIndex: int, toIndex: int): void;
    /**
     * Returns an iterator that iterates over bit vector.
     *
     * @returns { IterableIterator<int> } A new iterable iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    $_iterator(): IterableIterator<int>;
    /**
     * Returns an iterable of values in the bit vector
     *
     * @returns { IterableIterator<int> }  A new iterable iterator object.
     * @throws { BusinessError } 10200011 - The values method cannot be bound.
     * @throws { BusinessError } 10200201 - Concurrent modification error.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    values(): IterableIterator<int>;
    /**
     * Accesses or sets the element at the specified index in the BitVector.
     *
     * @param { int } index - The index of the element to access or set.
     *     Throws an error if index < 0 or index >= bitVector.length.
     * @returns { int } The element in the BitVector at the given index.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    [index: int]: int;
  }
}

export default collections;
