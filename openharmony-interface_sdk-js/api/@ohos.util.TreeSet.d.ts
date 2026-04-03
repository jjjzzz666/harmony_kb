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
 * TreeSet is implemented based on TreeMap. In TreeSet, only value objects are processed. 
 * TreeSet can be used to store values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * TreeSet is implemented based on TreeMap. In TreeSet, only value objects are processed. 
 * TreeSet can be used to store values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * TreeSet is implemented based on TreeMap. In TreeSet, only value objects are processed. 
 * TreeSet can be used to store values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class TreeSet<T> {
  /**
   * A constructor used to create a TreeSet object.
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions.
   * firstValue (required) previous element.
   * secondValue (required) next element.
   * @throws { BusinessError } 10200012 - The TreeSet's constructor cannot be directly invoked.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a TreeSet object.
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions.
   * firstValue (required) previous element.
   * secondValue (required) next element.
   * @throws { BusinessError } 10200012 - The TreeSet's constructor cannot be directly invoked.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a TreeSet object.
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions.
   * firstValue (required) previous element.
   * secondValue (required) next element.
   * @throws { BusinessError } 10200012 - The TreeSet's constructor cannot be directly invoked.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Incorrect parameter types;
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(comparator?: (firstValue: T, secondValue: T) => boolean);

  /**
   * A constructor used to create a TreeSet object.
   *
   * @param { TreeSetComparator<T> } [comparator] - comparator
   * comparator (Optional) User-defined comparison functions.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  constructor(comparator?: TreeSetComparator<T>);

  /**
   * Gets the element number of the TreeSet.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the TreeSet.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the element number of the TreeSet.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;

  /**
   * Gets the element number of the TreeSet.
   *
   * @type { int }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Returns whether the Set object contains elements
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns whether the Set object contains elements
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns whether the Set object contains elements
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
   * Returns whether the Set object contains the elements
   *
   * @param { T } value - value value need to determine whether to include the element
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns whether the Set object contains the elements
   *
   * @param { T } value - value value need to determine whether to include the element
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns whether the Set object contains the elements
   *
   * @param { T } value - value value need to determine whether to include the element
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  has(value: T): boolean;
  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param { T } value - value value Added element
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param { T } value - value value Added element
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * If the set does not contain the element, the specified element is added
   *
   * @param { T } value - value value Added element
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  add(value: T): boolean;
  /**
   * Remove a specified element from a Set object
   *
   * @param { T } value - value value Target to be deleted
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Remove a specified element from a Set object
   *
   * @param { T } value - value value Target to be deleted
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Remove a specified element from a Set object
   *
   * @param { T } value - value value Target to be deleted
   * @returns { boolean } the boolean type(Is there contain this element)
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  remove(value: T): boolean;
  /**
   * Clears all element groups in a set
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Clears all element groups in a set
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Clears all element groups in a set
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
   * Gets the first elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200011 - The getFirstValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the first elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200011 - The getFirstValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the first elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The getFirstValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getFirstValue(): T;
  /**
   * Gets the last elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200011 - The getLastValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the last elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200011 - The getLastValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the last elements in a set
   *
   * @returns { T } value or undefined
   * @throws { BusinessError } 10200010 - Container is empty.[staticonly]
   * @throws { BusinessError } 10200011 - The getLastValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getLastValue(): T;
  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getLowerValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getLowerValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getLowerValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLowerValue(key: T): T;
  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getHigherValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getHigherValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T } key or undefined
   * @throws { BusinessError } 10200011 - The getHigherValue method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getHigherValue(key: T): T;
  /**
   * Return and delete the first element, returns undefined if tree set is empty
   *
   * @returns { T } first value or undefined
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Return and delete the first element, returns undefined if tree set is empty
   *
   * @returns { T } first value or undefined
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Return and delete the first element, returns undefined if tree set is empty
   *
   * @returns { T } first value or undefined
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
   * Return and delete the last element, returns undefined if tree set is empty
   *
   * @returns { T } last value or undefined
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Return and delete the last element, returns undefined if tree set is empty
   *
   * @returns { T } last value or undefined
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Return and delete the last element, returns undefined if tree set is empty
   *
   * @returns { T } last value or undefined
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
   * Returns the greatest element smaller than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T | undefined } the lower value of the given key's element if exists, undefined otherwise
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getLowerValue(key: T): T | undefined;

  /**
   * Returns the least element greater than or equal to the specified key
   * if the key does not exist, undefined is returned
   *
   * @param { T } key - key key Objective of comparison
   * @returns { T | undefined } the higher value of the given key's element if exists, undefined otherwise
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getHigherValue(key: T): T | undefined;

  /**
   * Executes a provided function once for each value in the Set object.
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
   * Executes a provided function once for each value in the Set object.
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
   * Executes a provided function once for each value in the Set object.
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
  forEach(callbackFn: (value?: T, key?: T, set?: TreeSet<T>) => void, thisArg?: Object): void;

  /**
   * Executes a provided function once for each value in the Set object.
   *
   * @param { TreeSetForEachCb<T> } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: TreeSetForEachCb<T>): void;

  /**
   * Returns a new Iterator object that contains the values contained in this set
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a new Iterator object that contains the values contained in this set
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns a new Iterator object that contains the values contained in this set
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Set object in insertion order
   *
   * @returns { IterableIterator<[T, T]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
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
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> } an iterator for the TreeSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

}

/**
 * The type of TreeSet callback function.
 *
 * @typedef { function } TreeSetForEachCb
 * @param { T } value - The value of current element
 * @param { T } key - The key of current element(same as value)
 * @param { TreeSet<T> } set - The TreeSet instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeSetForEachCb<T> = (value: T, key: T, set: TreeSet<T>) => void

/**
 * The type of TreeSet comparator.
 *
 * @typedef { function } TreeSetComparator
 * @param { T } firstValue - The first value compared
 * @param { T } secondValue - The second value compared
 * @returns { double } - Comparison results
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type TreeSetComparator<T> = (firstValue: T, secondValue: T) => double

export default TreeSet;
