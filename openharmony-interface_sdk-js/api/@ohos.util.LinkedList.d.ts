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
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has
 * references pointing to the previous element and the next element. When querying an element,
 * the system traverses the list from the beginning or end. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has
 * references pointing to the previous element and the next element. When querying an element,
 * the system traverses the list from the beginning or end. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has
 * references pointing to the previous element and the next element. When querying an element,
 * the system traverses the list from the beginning or end. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class LinkedList<T> {
  /**
   * A constructor used to create a LinkedList object.
   *
   * @throws { BusinessError } 10200012 - The LinkedList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a LinkedList object.
   *
   * @throws { BusinessError } 10200012 - The LinkedList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a LinkedList object.
   *
   * @throws { BusinessError } 10200012 - The LinkedList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Gets the element number of the LinkedList. This is a number one higher than the highest index in the linkedlist.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the LinkedList. This is a number one higher than the highest index in the linkedlist.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the LinkedList. This is a number one higher than the highest index in the linkedlist.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;

    /**
   * Gets the element number of the LinkedList.
   *
   * @type { int }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Appends the specified element to the end of this linkedlist.
   *
   * @param { T } element - element element to be appended to this linkedlist
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Appends the specified element to the end of this linkedlist.
   *
   * @param { T } element - element element to be appended to this linkedlist
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Appends the specified element to the end of this linkedlist.
   *
   * @param { T } element - element element to be appended to this linkedlist
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
   * Inserts the specified element at the specified position in this linkedlist.
   *
   * @param { number } index - index index index at which the specified element is to be inserted
   * @param { T } element - element element element to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserts the specified element at the specified position in this linkedlist.
   *
   * @param { number } index - index index index at which the specified element is to be inserted
   * @param { T } element - element element element to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserts the specified element at the specified position in this linkedlist.
   *
   * @param { int } index - index index index at which the specified element is to be inserted
   * @param { T } element - element element element to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  insert(index: int, element: T): void;
  /**
   * Returns the element at the specified position in this linkedlist,
   * or returns undefined if this linkedlist is empty
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
   * Returns the element at the specified position in this linkedlist,
   * or returns undefined if this linkedlist is empty
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
   * Returns the element at the specified position in this linkedlist,
   * or returns undefined if this linkedlist is empty
   *
   * @param { int } index - index index specified position
   * @returns { T } the T type
   * @throws { BusinessError } 10200001 - The value of index is out of range.[staticonly]
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T;

  /**
   * Inserts the specified element at the beginning of this LinkedList.
   *
   * @param { T } element - element element the element to add
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Inserts the specified element at the beginning of this LinkedList.
   *
   * @param { T } element - element element the element to add
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Inserts the specified element at the beginning of this LinkedList.
   *
   * @param { T } element - element element the element to add
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  addFirst(element: T): void;
  /**
   * Retrieves and removes the head (first element) of this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Retrieves and removes the head (first element) of this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Retrieves and removes the head (first element) of this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeFirst(): T;

  /**
   * Retrieves and removes the head (first element) of this linkedList.
   *
   * @returns { T | undefined } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeFirst(): T | undefined;

  /**
   * Removes and returns the last element from this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes and returns the last element from this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes and returns the last element from this linkedlist.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200011 - The removeLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeLast(): T;

  /**
   * Removes and returns the last element from this linkedList.
   *
   * @returns { T | undefined } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeLast(): T | undefined;

  /**
   * Check if linkedlist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if linkedList contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Check if linkedlist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if linkedList contains the specified element,return true,else return false
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Check if linkedlist contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type,if linkedList contains the specified element,return true,else return false
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
   * in this linkedlist, or -1 if this linkedlist does not contain the element.
   *
   * @param { T } element - element element element to be contained
   * @returns { number } the number type ,returns the lowest index such that or -1 if there is no such index.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the index of the first occurrence of the specified element
   * in this linkedlist, or -1 if this linkedlist does not contain the element.
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
   * in this linkedlist, or -1 if this linkedlist does not contain the element.
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
   * @param { number } index - index index the index in the linkedlist
   * @returns { T } the T type ,returns undefined if linkedlist is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - index index the index in the linkedlist
   * @returns { T } the T type ,returns undefined if linkedlist is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - index index the index in the linkedlist
   * @returns { T } the T type ,returns undefined if linkedlist is empty,If the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
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
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   *     Received value is: ${index}
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeByIndex(index: int): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
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
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
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
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeFirstFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeFirstFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes the first occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeFirstFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  removeFirstFound(element: T): boolean;
  /**
   * Removes the last occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeLastFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes the last occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeLastFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes the last occurrence of the specified element from this linkedlist,
   * if it is present.  If the linkedlist does not contain the element, it is
   * unchanged.  More formally, removes the element with the lowest index
   *
   * @param { T } element - element element element to remove
   * @returns { boolean } the boolean type ,If there is no such element, return false
   * @throws { BusinessError } 10200011 - The removeLastFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  removeLastFound(element: T): boolean;
  /**
   * Returns in the index of the last occurrence of the specified element in this linkedlist ,
   * or -1 if the linkedlist does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns in the index of the last occurrence of the specified element in this linkedlist ,
   * or -1 if the linkedlist does not contain the element.
   *
   * @param { T } element - element element element to find
   * @returns { number } the number type
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns in the index of the last occurrence of the specified element in this linkedlist ,
   * or -1 if the linkedlist does not contain the element.
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
   * Returns the first element (the item at index 0) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the first element (the item at index 0) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the first element (the item at index 0) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
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
   * Returns the Last element (the item at index length-1) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the Last element (the item at index length-1) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the Last element (the item at index length-1) of this linkedlist.
   * or returns undefined if linkedlist is empty
   *
   * @returns { T } the T type ,returns undefined if linkedList is empty
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
   * Replaces the element at the specified position in this Vector with the specified element
   *
   * @param { number } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Replaces the element at the specified position in this Vector with the specified element
   *
   * @param { number } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
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
   * Replaces the element at the specified position in this Vector with the specified element
   *
   * @param { int } index - index index index to find
   * @param { T } element - element element replaced element
   * @returns { T } the T type ,returns undefined if linkedList is empty
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
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
  set(index: int, element: T): T;

  /**
   * Replaces each element of this linkedlist with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * Value (required) current element
   * Index (Optional) The index value of the current element.
   * LinkedList (Optional) The linkedlist object to which the current element belongs.
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
   * Replaces each element of this linkedlist with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * Value (required) current element
   * Index (Optional) The index value of the current element.
   * LinkedList (Optional) The linkedlist object to which the current element belongs.
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
   * Replaces each element of this linkedlist with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * Value (required) current element
   * Index (Optional) The index value of the current element.
   * LinkedList (Optional) The linkedlist object to which the current element belongs.
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
  forEach(callbackFn: (value: T, index?: number, LinkedList?: LinkedList<T>) => void, thisArg?: Object): void;

  /**
   * Replaces each element of this linkedList with the result of applying the operator to that element.
   *
   * @param { LinkedListForEachCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackfn: LinkedListForEachCb<T>): void;

  /**
   * Removes all of the elements from this linkedlist.The linkedlist will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Removes all of the elements from this linkedlist.The linkedlist will
   * be empty after this call returns.length becomes 0
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes all of the elements from this linkedlist.The linkedlist will
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
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { LinkedList<T> } this linkedlist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { LinkedList<T> } this linkedlist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { LinkedList<T> } this linkedlist instance
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  clone(): LinkedList<T>;
  /**
   * convert linkedlist to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * convert linkedlist to array
   *
   * @returns { Array<T> } the Array type
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * convert linkedlist to array
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
 * The type of LinkedList callback function.
 *
 * @typedef { function } LinkedListForEachCb
 * @param { T } value - The value of current element
 * @param { int } index - The index of current element
 * @param { LinkedList<T> } linkedList - The LinkedList instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LinkedListForEachCb<T> = (value: T, index: int, linkedList: LinkedList<T>) => void

export default LinkedList;
