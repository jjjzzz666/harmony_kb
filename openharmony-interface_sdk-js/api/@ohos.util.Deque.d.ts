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
 * Double-ended queue (deque) is a sequence container implemented based on the queue data structure that 
 * follows the principles of First In First Out (FIFO) and Last In First Out (LIFO). 
 * It allows insertion and removal of elements at both the ends. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * Double-ended queue (deque) is a sequence container implemented based on the queue data structure that 
 * follows the principles of First In First Out (FIFO) and Last In First Out (LIFO). 
 * It allows insertion and removal of elements at both the ends. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Double-ended queue (deque) is a sequence container implemented based on the queue data structure that 
 * follows the principles of First In First Out (FIFO) and Last In First Out (LIFO). 
 * It allows insertion and removal of elements at both the ends. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class Deque<T> {
  /**
   * A constructor used to create a Deque object.
   *
   * @throws { BusinessError } 10200012 - The Deque's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a Deque object.
   *
   * @throws { BusinessError } 10200012 - The Deque's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a Deque object.
   *
   * @throws { BusinessError } 10200012 - The Deque's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Gets the element number of the Deque.This is a number one higher than the highest index in the deque.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the Deque.This is a number one higher than the highest index in the deque.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the Deque.This is a number one higher than the highest index in the deque.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;
    /**
   * Gets the element number of the Deque.
   *
   * @type { int }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Inserts an element into the deque header.
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserts an element into the deque header.
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserts an element into the deque header.
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  insertFront(element: T): void;
  /**
   * Inserting an element at the end of a deque
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertEnd method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserting an element at the end of a deque
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertEnd method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserting an element at the end of a deque
   *
   * @param { T } element - element element to be appended to this deque
   * @throws { BusinessError } 10200011 - The insertEnd method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  insertEnd(element: T): void;
  /**
   * Check if deque contains the specified element
   *
   * @param { T } element - element element to be contained
   * @returns { boolean } the boolean type,if deque contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Check if deque contains the specified element
   *
   * @param { T } element - element element to be contained
   * @returns { boolean } the boolean type,if deque contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Check if deque contains the specified element
   *
   * @param { T } element - element element to be contained
   * @returns { boolean } the boolean type,if deque contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * Obtains the header element of a deque.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the header element of a deque.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the header element of a deque.
   *
   * @returns { T } the T type
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
   * Obtains the end element of a deque.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the end element of a deque.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the end element of a deque.
   *
   * @returns { T } the T type
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
   * Obtains the header element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the header element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the header element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  popFirst(): T;

  /**
   * Obtains the end element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Obtains the end element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the end element of a deque and delete the element.
   *
   * @returns { T } the T type
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  popLast(): T;

  /**
   * Executes a provided function once for each value in the deque object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Executes a provided function once for each value in the deque object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Executes a provided function once for each value in the deque object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object): void;

  /**
   * Iterates over elements in a generic Deque (double-ended queue) and executes a callback function for each element.
   *
   * @param { DequeForEachCb<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: DequeForEachCb<T>): void;

   /**
   * Returns the item at that index.
   * 
   * @param { int } index - The zero-based index of the desired code unit.
   *     Throws error if index < 0 or index >= deque.length.
   * @returns { T } The element in the deque matching the given index. 
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
   * Returns an iterator. Each item of the iterator is a ArkTS Object
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
 * The type of Deque forEach callback function.
 *
 * @typedef { function } DequeForEachCb
 * @param { T } value - The current element being processed
 * @param { int } index - The index of the current element
 * @param { Deque<T> } deque - The Deque instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type DequeForEachCb<T> = (value: T, index: int, deque: Deque<T>) => void;

export default Deque;
