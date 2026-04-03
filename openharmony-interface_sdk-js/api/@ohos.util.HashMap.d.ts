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
 * HashMap is a map implemented based on the array, linked list, and red-black tree. It provides efficient data query, insertion, 
 * and removal. The elements in a HashMap instance are mappings of key-value pairs. Each key must be unique and have only one value. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * HashMap is a map implemented based on the array, linked list, and red-black tree. It provides efficient data query, insertion, 
 * and removal. The elements in a HashMap instance are mappings of key-value pairs. Each key must be unique and have only one value. 
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * HashMap is a map implemented based on the array, linked list, and red-black tree. It provides efficient data query, insertion,
 * and removal. The elements in a HashMap instance are mappings of key-value pairs. Each key must be unique and have only one value.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare class HashMap<K, V> {
  /**
   * A constructor used to create a HashMap object.
   *
   * @throws { BusinessError } 10200012 - The HashMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A constructor used to create a HashMap object.
   *
   * @throws { BusinessError } 10200012 - The HashMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * A constructor used to create a HashMap instance.
   *
   * @throws { BusinessError } 10200012 - The HashMap's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Gets the element number of the hashmap.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Gets the element number of the hashmap.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Number of elements in a hash map.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length: number;
  /**
   * Gets the number of elements in a hash map.
   *
   * @type { int }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Returns whether the Map object contains elements
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns whether the Map object contains elements
   *
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this container is empty (contains no element).
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
   * Returns whether a key is contained in this map
   *
   * @param { K } key - key key need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns whether a key is contained in this map
   *
   * @param { K } key - key key need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this container contains the specified key.
   *
   * @param { K } key - Target key.
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasKey method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  hasKey(key: K): boolean;
  /**
   * Returns whether a value is contained in this map
   *
   * @param { V } value - value value need to determine whether to include the value
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns whether a value is contained in this map
   *
   * @param { V } value - value value need to determine whether to include the value
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this container contains the specified value.
   *
   * @param { V } value - Target value.
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The hasValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  hasValue(value: V): boolean;
  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - key key the index in HashMap
   * @returns { V } value or undefined
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a specified element in a Map object, or undefined if there is no corresponding element
   *
   * @param { K } key - key key the index in HashMap
   * @returns { V } value or undefined
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the value of the specified key in this container. If nothing is obtained, undefined is returned.
   *
   * @param { K } key - Target key.
   * @returns { V } value or undefined
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(key: K): V;

  /**
   * Obtains the value of the specified key in this container. If nothing is obtained, undefined is returned.
   *
   * @param { K } key - Target key.
   * @returns { V | undefined } value or undefined
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: K): V | undefined;

  /**
   * Adds all element groups in one map to another map
   *
   * @param { HashMap<K, V> } map - map map the Map object to add members
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @throws { BusinessError } 401 -  Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Adds all element groups in one map to another map
   *
   * @param { HashMap<K, V> } map - map map the Map object to add members
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @throws { BusinessError } 401 -  Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Adds all elements in a HashMap instance to this container.
   *
   * @param { HashMap<K, V> } map - HashMap instance whose elements are to be added to the current container.
   * @throws { BusinessError } 10200011 - The setAll method cannot be bound.
   * @throws { BusinessError } 401 -  Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  setAll(map: HashMap<K, V>): void;
  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - key key Added or updated targets
   * @param { V } value - value value Added or updated value
   * @returns { Object } the map object after set
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Adds or updates a(new) key-value pair with a key and value specified for the Map object
   *
   * @param { K } key - key key Added or updated targets
   * @param { V } value - value value Added or updated value
   * @returns { Object } the map object after set
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Adds or updates an element in this container.
   *
   * @param { K } key - Key of the target element.
   * @param { V } value - Value of the target element.
   * @returns { Object } the map object after set
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  set(key: K, value: V): Object;
  /**
   * Remove a specified element from a Map object
   *
   * @param { K } key - key key Target to be deleted
   * @returns { V } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Remove a specified element from a Map object
   *
   * @param { K } key - key key Target to be deleted
   * @returns { V } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Removes an element with the specified key from this container.
   *
   * @param { K } key - Key of the target element.
   * @returns { V } Target mapped value
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  remove(key: K): V;

  /**
   * Removes an element with the specified key from this container.
   *
   * @param { K } key - Key of the target element.
   * @returns { V | undefined } Tthe value associated with the key if it was removed, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: K): V | undefined;

  /**
   * Clear all element groups in the map
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Clear all element groups in the map
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Clears this container and sets its length to 0.
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
   * Returns a new Iterator object that contains the keys contained in this map
   *
   * @returns { IterableIterator<K> }
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a new Iterator object that contains the keys contained in this map
   *
   * @returns { IterableIterator<K> }
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains an iterator that contains all the keys in this container.
   *
   * @returns { IterableIterator<K> }
   * @throws { BusinessError } 10200011 - The keys method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  keys(): IterableIterator<K>;
  /**
   * Returns a new Iterator object that contains the values contained in this map
   *
   * @returns { IterableIterator<V> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a new Iterator object that contains the values contained in this map
   *
   * @returns { IterableIterator<V> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains an iterator that contains all the values in this container.
   *
   * @returns { IterableIterator<V> }
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  values(): IterableIterator<V>;
  /**
   * Replace the old value by new value corresponding to the specified key
   *
   * @param { K } key - key key Updated targets
   * @param { V } newValue - newValue newValue Updated the target mapped value
   * @returns { boolean } the boolean type(Is there a target pointed to by the key)
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Replace the old value by new value corresponding to the specified key
   *
   * @param { K } key - key key Updated targets
   * @param { V } newValue - newValue newValue Updated the target mapped value
   * @returns { boolean } the boolean type(Is there a target pointed to by the key)
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Replaces an element in this container.
   *
   * @param { K } key - Key of the target element.
   * @param { V } newValue - New value of the element.
   * @returns { boolean } the boolean type(Is there a target pointed to by the key)
   * @throws { BusinessError } 10200011 - The replace method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  replace(key: K, newValue: V): boolean;
  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys
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
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys
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
   * Uses a callback to traverse the elements in this container and obtain their position indexes.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the container.
   * @param { Object } [thisArg] - Value of this to use when callbackFn is invoked. The default value is this instance.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  forEach(callbackFn: (value?: V, key?: K, map?: HashMap<K, V>) => void, thisArg?: Object): void;

  /**
   * Uses a callback to traverse the elements in this container and obtain their position indexes.
   *
   * @param { HashMapCbFn<K, V> } callbackFn - Callback invoked to traverse the elements in the container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: HashMapCbFn<K, V>): void;

  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains an iterator that contains all the elements in this container.
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains an iterator, each item of which is a JavaScript object.
   *
   * @returns { IterableIterator<[K, V]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Obtains an iterator, each item of which is a JavaScript object.
   *
   * @returns { IterableIterator<[K, V]> } an iterator for the HashMap
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[K, V]>;
}

  /**
   * The type of HashMap callback function.
   *
   * @typedef { function } HashMapCbFn
   * @param { V } value - The value of the current entry
   * @param { K } key - The key of the current entry
   * @param { HashMap<K, V> } map - The HashMap instance being traversed
   * @returns { void } This callback does not return a value
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 23 static
   */
  export type HashMapCbFn<K, V> = (value: V, key: K, map: HashMap<K, V>) => void;

export default HashMap;
