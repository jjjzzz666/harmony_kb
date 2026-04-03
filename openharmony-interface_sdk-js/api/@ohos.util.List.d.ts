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

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element.
 * When querying an element, the system traverses the list from the beginning.
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element.
 * When querying an element, the system traverses the list from the beginning.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element.
 * When querying an element, the system traverses the list from the beginning.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class List<T> {
  /**
   * A constructor used to create a List object.
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a List object.
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a List object.
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Gets the element number of the List. This is a number one higher than the highest index in the list.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the List. This is a number one higher than the highest index in the list.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the List. This is a number one higher than the highest index in the list.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;

  /**
   * Gets the element number of the List.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Appends the specified element to the end of this list.
   *
   * @param { T } element - element element to be appended to this list
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Appends the specified element to the end of this list.
   *
   * @param { T } element - element element to be appended to this list
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Appends the specified element to the end of this list.
   *
   * @param { T } element - element element to be appended to this list
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * Inserts the specified element at the specified position in this list.
   *
   * @param { T } element - element element element to be inserted
   * @param { number } index - index index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserts the specified element at the specified position in this list.
   *
   * @param { T } element - element element element to be inserted
   * @param { number } index - index index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserts the specified element at the specified position in this list.
   *
   * @param { T } element - element element element to be inserted
   * @param { int } index - index index index at which the specified element is to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * Returns the element at the specified position in this list,
   * or returns undefined if this list is empty
   *
   * @param { number } index - index index specified position
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the element at the specified position in this list,
   * or returns undefined if this list is empty
   *
   * @param { number } index - index index specified position
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the element at the specified position in this list,
   * or returns undefined if this list is empty
   *
   * @param { int } index - index index specified position
   * @returns { T } the T type
   * @throws { BusinessError } 10200001 - The value of index is out of range.[staticonly]
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T;

  /**
   * Check if list contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if list contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Check if list contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if list contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Check if list contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if list contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * Returns the index of the first occurrence of the specified element
   * in this list, or -1 if this list does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the index of the first occurrence of the specified element
   * in this list, or -1 if this list does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the index of the first occurrence of the specified element
   * in this list, or -1 if this list does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { int } the int type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - index index the index in the list
   * @returns { T } the T type ,returns undefined if list is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - index index the index in the list
   * @returns { T } the T type ,returns undefined if list is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - index index the index in the list
   * @returns { T } the T type ,returns undefined if list is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeByIndex(index: number): T;

  /**
   * Find the corresponding element according to the index.
   *
   * @param { int } index - the index in the linkedList
   * @returns { T | undefined } the T type, if the index is
   *     out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   *     Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeByIndex(index: int): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this list,
   * if it is present.  If the list does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes the first occurrence of the specified element from this list,
   * if it is present.  If the list does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes the first occurrence of the specified element from this list,
   * if it is present.  If the list does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * Returns in the index of the last occurrence of the specified element in this list ,
   * or -1 if the list does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns in the index of the last occurrence of the specified element in this list ,
   * or -1 if the list does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns in the index of the last occurrence of the specified element in this list ,
   * or -1 if the list does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { int } the int type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getLastIndexOf(element: T): int;
  /**
   * Returns the first element (the item at index 0) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the first element (the item at index 0) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the first element (the item at index 0) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getFirst(): T;
  /**
   * Returns the Last element (the item at index length-1) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the Last element (the item at index length-1) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the Last element (the item at index length-1) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T } the T type ,returns undefined if list is empty
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getLast(): T;

  /**
   * Replaces the element at the specified position in this List with the specified element
   *
   * @param { number } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Replaces the element at the specified position in this List with the specified element
   *
   * @param { number } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Replaces the element at the specified position in this List with the specified element
   *
   * @param { int } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
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
  set(index: int, element: T): T;

  /**
   * Compares the specified object with this list for equality.if the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { Object } obj - obj obj Compare objects
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Compares the specified object with this list for equality.if the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { Object } obj - obj obj Compare objects
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Compares the specified object with this list for equality.if the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { Object } obj - obj obj Compare objects
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  equal(obj: Object): boolean;

  /**
   * Compares the specified object with this list for equality.if the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { RecordData } obj - obj obj Compare objects
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  equal(obj: RecordData): boolean;
  
  /**
   * Replaces each element of this list with the result of applying the operator to that element.
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
   * Replaces each element of this list with the result of applying the operator to that element.
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
   * Replaces each element of this list with the result of applying the operator to that element.
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
  forEach(callbackFn: (value: T, index?: number, List?: List<T>) => void, thisArg?: Object): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { ListForEachCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackfn: ListForEachCb<T>): void;

  /**
   * Sorts this list according to the order induced by the specified comparator
   *
   * @param { function } comparator - comparator
   *     comparator (required) A function that accepts up to two arguments.
   *     Specifies the sort order. Must be a function,return number type,If it returns firstValue
   *     minus secondValue, it returns an list sorted in ascending order;If it returns secondValue
   *     minus firstValue, it returns an list sorted in descending order;
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Sorts this list according to the order induced by the specified comparator
   *
   * @param { function } comparator - comparator
   *     comparator (required) A function that accepts up to two arguments.
   *     Specifies the sort order. Must be a function,return number type,If it returns firstValue
   *     minus secondValue, it returns an list sorted in ascending order;If it returns secondValue
   *     minus firstValue, it returns an list sorted in descending order;
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Sorts this list according to the order induced by the specified comparator
   *
   * @param { function } comparator - comparator
   *     comparator (required) A function that accepts up to two arguments.
   *     Specifies the sort order. Must be a function,return number type,If it returns firstValue
   *     minus secondValue, it returns an list sorted in ascending order;If it returns secondValue
   *     minus firstValue, it returns an list sorted in descending order;
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Sorts this list according to the order induced by the specified comparator
   *
   * Anonymous Object Rectification
   * @param { ListComparatorFn<T> } comparator - comparator
   *     comparator (required) A function that accepts up to two arguments.
   *     Specifies the sort order. Must be a function,return number type,If it returns firstValue
   *     minus secondValue, it returns an list sorted in ascending order;If it returns secondValue
   *     minus firstValue, it returns an list sorted in descending order;
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic&static
   */
  sort(comparator: ListComparatorFn<T>): void;
  /**
   * Removes all of the elements from this list.The list will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes all of the elements from this list.The list will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes all of the elements from this list.The list will
   * be empty after this call returns.length becomes 0
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
   * Returns a view of the portion of this list between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { List<T> }
   * @throws { BusinessError } 10200011 - The getSubList method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a view of the portion of this list between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { number } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { number } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { List<T> }
   * @throws { BusinessError } 10200011 - The getSubList method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns a view of the portion of this list between the specified fromIndex,inclusive,and toIndex,exclusive
   *
   * @param { int } fromIndex - fromIndex fromIndex The starting position of the index, containing the value at that index position
   * @param { int } toIndex - toIndex toIndex the end of the index, excluding the value at that index
   * @returns { List<T> }
   * @throws { BusinessError } 10200011 - The getSubList method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getSubList(fromIndex: int, toIndex: int): List<T>;
  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, list?: List<T>) => T, thisArg?: Object): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { ListReplaceCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackfn: ListReplaceCb<T>): void;

  /**
   * convert list to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * convert list to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * convert list to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
  /**
   * Determine whether list is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Determine whether list is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Determine whether list is empty and whether there is an element
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
     * Returns the item at that index.
     *
     * @param { int } index - The zero-based index of the desired code unit.
     *     Throws error if index < 0 or index >= list.length.
     * @returns { T } The element in the list matching the given index.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    [index: int]: T;
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

}
/**
 * This type specifies the comparator of sort in comparation.
 *
 * @typedef { function } ListComparatorFn
 * @param { T } firstValue - firstValue (required) previous element.
 * @param { T } secondValue - secondValue (required) next element.
 * @returns { double } the number type
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic&static
 */
export type ListComparatorFn<T> = (firstValue: T, secondValue: T) => double;
/**
 * The type of List callback function.
 *
 * @typedef { function } ListForEachCb
 * @param { T } value - The value of current element
 * @param { int } index - The index of current element
 * @param { List<T> } list - The List instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListForEachCb<T> = (value: T, index: int, list: List<T>) => void;

/**
 * The type of List callback function.
 *
 * @typedef { function } LinkedListForEachCb
 * @param { T } value - The old value of current element
 * @param { int } index - The index of current element
 * @param { List<T> } list - The List instance being traversed
 * @returns { T } - The new value of current element
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListReplaceCb<T> = (value: T, index: int, list: List<T>) => T;

export default List;
