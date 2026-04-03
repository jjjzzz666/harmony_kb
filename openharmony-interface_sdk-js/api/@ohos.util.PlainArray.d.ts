/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class PlainArray<T> {
  /**
   * A constructor used to create a PlainArray object.
   *
   * @throws { BusinessError } 10200012 - The PlainArray's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a PlainArray object.
   *
   * @throws { BusinessError } 10200012 - The PlainArray's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a PlainArray object.
   *
   * @throws { BusinessError } 10200012 - The PlainArray's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Gets the element number of the PlainArray.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the PlainArray.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the PlainArray.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;

  /**
   * Gets the element number of the PlainArray.
   *
   * @type { int }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Appends a key-value pair to PlainArray
   *
   * @param { number } key - key key Added the key of key-value
   * @param { T } value - value value Added the value of key-value
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Appends a key-value pair to PlainArray
   *
   * @param { number } key - key key Added the key of key-value
   * @param { T } value - value value Added the value of key-value
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Appends a key-value pair to PlainArray
   *
   * @param { int } key - key key Added the key of key-value
   * @param { T } value - value value Added the value of key-value
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  add(key: int, value: T): void;
  /**
   * Clears the current PlainArray object
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Clears the current PlainArray object
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Clears the current PlainArray object
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  clear(): void;
  /**
   * Obtains a clone of the current PlainArray object
   *
   * @returns { PlainArray<T> }
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains a clone of the current PlainArray object
   *
   * @returns { PlainArray<T> }
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains a clone of the current PlainArray object
   *
   * @returns { PlainArray<T> }
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  clone(): PlainArray<T>;
  /**
   * Checks whether the current PlainArray object contains the specified key
   *
   * @param { number } key - key key need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Checks whether the current PlainArray object contains the specified key
   *
   * @param { number } key - key key need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether the current PlainArray object contains the specified key
   *
   * @param { int } key - key key need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  has(key: int): boolean;
  /**
   * Queries the value associated with the specified key
   *
   * @param { number } key - key key Looking for goals
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Queries the value associated with the specified key
   *
   * @param { number } key - key key Looking for goals
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Queries the value associated with the specified key
   *
   * @param { number } key - key key Looking for goals
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(key: number): T;

  /**
   * Queries the value associated with the specified key
   *
   * @param { int } key - looking for goals
   * @returns { T | undefined } the value of key-value pairs
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: int): T | undefined;

  /**
   * Queries the index for a specified key
   *
   * @param { number } key - key key Looking for goals
   * @returns { number } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Queries the index for a specified key
   *
   * @param { number } key - key key Looking for goals
   * @returns { number } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Queries the index for a specified key
   *
   * @param { int } key - key key Looking for goals
   * @returns { int } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getIndexOfKey(key: int): int;
  /**
   * Queries the index for a specified value
   *
   * @param { T } value - value value Looking for goals
   * @returns { number } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Queries the index for a specified value
   *
   * @param { T } value - value value Looking for goals
   * @returns { number } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Queries the index for a specified value
   *
   * @param { T } value - value value Looking for goals
   * @returns { int } Subscript corresponding to target
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: T): int;
  /**
   * Checks whether the current PlainArray object is empty
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Checks whether the current PlainArray object is empty
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether the current PlainArray object is empty
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * Queries the key at a specified index
   *
   * @param { number } index - index index Target subscript for search
   * @returns { number } the key of key-value pairs
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Queries the key at a specified index
   *
   * @param { number } index - index index Target subscript for search
   * @returns { number } the key of key-value pairs
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Queries the key at a specified index
   *
   * @param { int } index - index index Target subscript for search
   * @returns { int } the key of key-value pairs
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getKeyAt(index: int): int;
  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { number } key - key key Target to be deleted
   * @returns { T } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { number } key - key key Target to be deleted
   * @returns { T } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { number } key - key key Target to be deleted
   * @returns { T } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  remove(key: number): T;

  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { int } key - target to be deleted
   * @returns { T | undefined } target mapped value, or undefined if key is not exist
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: int): T | undefined;

  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeAt(index: number): T;

  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { int } index - target subscript for search
   * @returns { T | undefined } the T type, or undefined if container is empty
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeAt(index: int): T | undefined;

  /**
   * Remove a group of key-value pairs from a specified index
   *
   * @param { number } index - index index remove start index
   * @param { number } size - size size Expected deletion quantity
   * @returns { number } Actual deleted quantity
   * @throws { BusinessError } 10200011 - The removeRangeFrom method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Remove a group of key-value pairs from a specified index
   *
   * @param { number } index - index index remove start index
   * @param { number } size - size size Expected deletion quantity
   * @returns { number } Actual deleted quantity
   * @throws { BusinessError } 10200011 - The removeRangeFrom method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Remove a group of key-value pairs from a specified index
   *
   * @param { int } index - index index remove start index
   * @param { int } size - size size Expected deletion quantity
   * @returns { int } Actual deleted quantity
   * @throws { BusinessError } 10200011 - The removeRangeFrom method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  removeRangeFrom(index: int, size: int): int;
  /**
   * Update value on specified index
   *
   * @param { number } index - index index Target subscript for search
   * @param { T } value - value value Updated the target mapped value
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Update value on specified index
   *
   * @param { number } index - index index Target subscript for search
   * @param { T } value - value value Updated the target mapped value
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Update value on specified index
   *
   * @param { int } index - index index Target subscript for search
   * @param { T } value - value value Updated the target mapped value
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  setValueAt(index: int, value: T): void;
  /**
   * Obtains the string representation of the PlainArray object
   *
   * @returns { String }
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the string representation of the PlainArray object
   *
   * @returns { String }
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the string representation of the PlainArray object
   *
   * @returns { String }
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * Queries the value at a specified index
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Queries the value at a specified index
   *
   * @param { number } index - index index Target subscript for search
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Queries the value at a specified index
   *
   * @param { int } index - index index Target subscript for search
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getValueAt(index: int): T;
  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object): void;

  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { PlainArrayForEachCb<T> } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: PlainArrayForEachCb<T>): void;

  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[number, T]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[number, T]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[number, T]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  [Symbol.iterator](): IterableIterator<[number, T]>;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<[int, T]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[int, T]>;

}

/**
 * The type of PlainArray callback function.
 *
 * @typedef { function } PlainArrayForEachCb
 * @param { T } value - The value of current element
 * @param { int } key - The key of current element
 * @param { PlainArray<T> } PlainArray - The PlainArray instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type PlainArrayForEachCb<T> = (value: T, key: int, PlainArray: PlainArray<T>) => void

export default PlainArray;
