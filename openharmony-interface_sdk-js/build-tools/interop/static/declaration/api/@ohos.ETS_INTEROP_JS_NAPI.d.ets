/**
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * Type enumeration for STValue operations.
 *
 * @enum SType
 * @syscap SystemCapability.ArkTS.ArkTS
 * @since 24
 */
export declare enum SType {
    BOOLEAN,
    BYTE,
    CHAR,
    SHORT,
    INT,
    LONG,
    FLOAT,
    DOUBLE,
    REFERENCE,
    VOID,
}

/**
 * A wrapper class that provides interfaces enabling ArkTS-Dyn to call and manipulate data from statically-typed ArkTS-Sta modules.
 *
 * @class STValue
 * @syscap SystemCapability.ArkTS.ArkTS
 * @since 24
 */
export declare class STValue {
    /**
     * Finds class definitions based on ArkTS-Sta class names.
     *
     * @param {string} desc - The fully qualified path of the class.
     * @returns {STValue} The STValue object that encapsulates the class.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static findClass(desc: string): STValue

    /**
     * Finds a namespace based on its name.
     *
     * @param {string} desc - The fully qualified path to the a namespace.
     * @returns {STValue} The STValue object representing the namespace.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static findNamespace(desc: string): STValue

    /**
     * Finds enumeration type definitions by name.
     *
     * @param {string} desc - The fully qualified path of the enumeration.
     * @returns {STValue} The STValue object representing the enumeration.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static findEnum(desc: string): STValue

    /**
     * Wraps a number into a byte type (8-bit signed integer).
     *
     * @param {number} b - The number value to wrap.
     * @returns {STValue} The wrapped byte type STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapByte(b: number): STValue

    /**
     * Wraps a string as a character type (16-bit Unicode character).
     *
     * @param {string} b - The character code to wrap.
     * @returns {STValue} The wrapped character type STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapChar(b: string): STValue

    /**
     * Wraps a number into a short integer type (16-bit signed integer).
     *
     * @param {number} b - The number value to wrap.
     * @returns {STValue} The wrapped short STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapShort(b: number): STValue

    /**
     * Wraps a number into an integer type (32-bit signed integer).
     *
     * @param {number} b - The number value to wrap.
     * @returns {STValue} The wrapped integer STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapInt(b: number): STValue

    /**
     * Wraps a number into a long integer type (64-bit signed integer).
     * May lose precision if abs value > 2^53.
     *
     * @param {number} l - The number value to wrap.
     * @returns {STValue} The wrapped long STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapLong(l: number): STValue

    /**
     * Wraps a bigint into a long integer type (64-bit signed integer).
     *
     * @param {bigint} b - The bigint value to wrap.
     * @returns {STValue} The wrapped long STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapLong(b: bigint): STValue

    /**
     * Wraps a boolean value into a boolean type STValue object.
     *
     * @param {boolean} b - The boolean value to wrap.
     * @returns {STValue} The wrapped boolean STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapBoolean(b: boolean): STValue

    /**
     * Wraps a number as a single-precision floating-point type (32-bit).
     *
     * @param {number} b - The number value to wrap.
     * @returns {STValue} The wrapped single-precision floating-point STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapFloat(b: number): STValue

    /**
     * Wraps a number into a double-precision floating-point type (64-bit).
     *
     * @param {number} b - The number value to wrap.
     * @returns {STValue} The wrapped double-precision floating-point STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapNumber(b: number): STValue

    /**
     * Wraps a bigint into a BigInt type STValue object.
     *
     * @param {bigint} b - The bigint value to wrap.
     * @returns {STValue} The wrapped BigInt type STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapBigInt(b: bigint): STValue

    /**
     * Wraps a string into a string type STValue object.
     *
     * @param {string} b - The string value to wrap.
     * @returns {STValue} The wrapped string type STValue object.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static wrapString(b: string): STValue

    /**
     * Gets an STValue object representing ArkTS-Sta null.
     *
     * @returns {STValue} The STValue object representing null.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static getNull(): STValue

    /**
     * Gets an STValue object representing ArkTS-Sta undefined.
     *
     * @returns {STValue} The STValue object representing undefined.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static getUndefined(): STValue

    /**
     * Creates a base type array of fixed length in preallocated memory.
     *
     * @param {number} len - The array length.
     * @param {SType} elementType - The array element type.
     * @returns {STValue} The STValue object of the newly created fixed-length array.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static newFixedArrayPrimitive(len: number, elementType: SType): STValue

    /**
     * Creates an array of reference types of fixed length in preallocated memory.
     *
     * @param {number} len - The array length.
     * @param {STValue} elementType - The array element type.
     * @param {STValue} initialElement - The initial value of the array element.
     * @returns {STValue} The STValue object of the newly created fixed-length reference array.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static newFixedArrayReference(len: number, elementType: STValue, initialElement: STValue): STValue

    /**
     * Creates a new dynamic array of the specified length.
     *
     * @param {number} len - The initial length of the array.
     * @param {STValue} initialElement - The initial element used to populate each position of the array.
     * @returns {STValue} The STValue object encapsulating the newly created array.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static newArray(len: number, initialElement: STValue): STValue

    /**
     * Checks assignment compatibility between types.
     *
     * @param {STValue} from_type - The source type (the type being assigned).
     * @param {STValue} to_type - The target type (assigned target type).
     * @returns {boolean} Returns true if from_type can be assigned to to_type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    static typeIsAssignableFrom(from_type: STValue, to_type: STValue): boolean

    /**
     * Instantiates an object through the class's constructor.
     *
     * @param {string} ctorSignature - The constructor signature (parameter type: return type).
     * @param {Array<STValue>} args - The constructor parameter array.
     * @returns {STValue} The newly created object instance.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    classInstantiate(ctorSignature: string, args: Array<STValue>): STValue

    /**
     * Gets the variable value in the namespace.
     *
     * @param {string} name - The variable name.
     * @param {SType} variableType - The variable type enumeration value.
     * @returns {STValue} The STValue object of variable value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    namespaceGetVariable(name: string, variableType: SType): STValue

    /**
     * Sets the value of a variable in a namespace.
     *
     * @param {string} name - The variable name.
     * @param {STValue} val - The value to set.
     * @param {SType} variableType - The variable type enumeration value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    namespaceSetVariable(name: string, val: STValue, variableType: SType): void

    /**
     * Gets the parent class definition of a class.
     *
     * @returns {STValue} The STValue object representing the parent class.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    classGetSuperClass(): STValue

    /**
     * Gets the static field value of a class.
     *
     * @param {string} name - The field name.
     * @param {SType} fieldType - The field type.
     * @returns {STValue} The STValue object of field value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    classGetStaticField(name: string, fieldType: SType): STValue

    /**
     * Sets the static field value of a class.
     *
     * @param {string} name - The field name.
     * @param {STValue} val - The value to set.
     * @param {SType} fieldType - The field type.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    classSetStaticField(name: string, val: STValue, fieldType: SType): void

    /**
     * Gets the property value of an object instance.
     *
     * @param {string} name - The property name.
     * @param {SType} propType - The property type.
     * @returns {STValue} The STValue object of property value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    objectGetProperty(name: string, propType: SType): STValue

    /**
     * Sets the property value of an object instance.
     *
     * @param {string} name - The property name.
     * @param {STValue} val - The value to set.
     * @param {SType} propType - The property type.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    objectSetProperty(name: string, val: STValue, propType: SType): void

    /**
     * Gets the element value of a specified index in a fixed-length array.
     *
     * @param {number} idx - The array index.
     * @param {SType} elementType - The array element type.
     * @returns {STValue} The STValue object of an element.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    fixedArrayGet(idx: number, elementType: SType): STValue

    /**
     * Sets the value of an element at a specified index in a fixed-length array.
     *
     * @param {number} idx - The array index.
     * @param {STValue} val - The value to set.
     * @param {SType} elementType - The array element type.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    fixedArraySet(idx: number, val: STValue, elementType: SType): void

    /**
     * Gets the number of elements of a fixed-length array.
     *
     * @returns {number} The array length.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    fixedArrayGetLength(): number

    /**
     * Retrieves the element at the specified index of a dynamic array.
     *
     * @param {number} idx - The index of the array element.
     * @returns {STValue} The STValue object encapsulating the element at the specified position.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    arrayGet(idx: number): STValue

    /**
     * Sets the value of the element at the specified index of a dynamic array.
     *
     * @param {number} idx - The index of the array element to set.
     * @param {STValue} initialElement - The STValue encapsulated object to store.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    arraySet(idx: number, initialElement: STValue): void

    /**
     * Adds a new element to the end of a dynamic array.
     *
     * @param {STValue} initialElement - The STValue encapsulated object to add.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    arrayPush(initialElement: STValue): void

    /**
     * Removes and returns the last element of a dynamic array.
     *
     * @returns {STValue} The STValue object of the removed last element.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    arrayPop(): STValue

    /**
     * Retrieves the length of a dynamic array.
     *
     * @returns {number} The current number of elements in the dynamic array.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    arrayGetLength(): number

    /**
     * Queries its index position in an enumeration based on its member name.
     *
     * @param {string} name - The enumeration member name.
     * @returns {number} The enumeration index.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    enumGetIndexByName(name: string): number

    /**
     * Gets the value of an enumeration member based on its name.
     *
     * @param {string} name - The enumeration member name.
     * @param {SType} valueType - The enumeration value type.
     * @returns {STValue} The STValue object of enumeration value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    enumGetValueByName(name: string, valueType: SType): STValue

    /**
     * Calls functional objects (such as lambda expressions or function objects).
     *
     * @param {Array<STValue>} args - The function parameter array (must be reference type).
     * * @returns {STValue} The STValue object (reference type) of function call result.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    functionalObjectInvoke(args: Array<STValue>): STValue

    /**
     * Calls a specified function in a namespace.
     *
     * @param {string} name - The function name.
     * @param {string} signature - The function signature (parameter type: return type).
     * @param {STValue[]} args - The function parameter array.
     * @returns {STValue} The STValue object of function call result.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    namespaceInvokeFunction(name: string, signature: string, args: STValue[]): STValue

    /**
     * Dynamically calls a method of an object.
     *
     * @param {string} name - The method name.
     * @param {string} signature - The method signature (parameter type: return type).
     * @param {Array<STValue>} args - The method parameter array.
     * @returns {STValue} The STValue object of method call result.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    objectInvokeMethod(name: string, signature: string, args: Array<STValue>): STValue

    /**
     * Calls a static method of a class.
     *
     * @param {string} name - The method name.
     * @param {string} signature - The method signature (parameter type: return type).
     * @param {Array<STValue>} args - The method parameter array.
     * @returns {STValue} The STValue object of method call result.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    classInvokeStaticMethod(name: string, signature: string, args: Array<STValue>): STValue

    /**
     * Checks whether an object is an instance of a specified type.
     *
     * @param {STValue} typeArg - The type to check (class or interface).
     * @returns {boolean} Returns true if an instance of this type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    objectInstanceOf(typeArg: STValue): boolean

    /**
     * Gets the type information of the reference type object.
     *
     * @returns {STValue} The STValue object of type information.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    objectGetType(): STValue

    /**
     * Checks whether the STValue object is wrapped with null of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if null, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isNull(): boolean

    /**
     * Checks whether the STValue object is wrapped with undefined of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if undefined, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isUndefined(): boolean

    /**
     * Compares whether the ArkTS-Sta object references wrapped with this and other are equal.
     *
     * @param {STValue} other - Another STValue object to compare.
     * @returns {boolean} If two references are equal true, otherwise return false.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isEqualTo(other: STValue): boolean

    /**
     * Compares whether the ArkTS-Sta object references wrapped with this and other are strictly equal.
     *
     * @param {STValue} other - Another STValue object to compare.
     * @returns {boolean} Returns true if two objects are strictly equal, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isStrictlyEqualTo(other: STValue): boolean

    /**
     * Checks whether the STValue object is wrapped with the number/double value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if double-precision floating-point type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isNumber(): boolean

    /**
     * Checks whether the STValue object is wrapped with the float value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is a single-precision floating-point type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isFloat(): boolean

    /**
     * Checks whether the STValue object is wrapped with the long value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is a long integer type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isLong(): boolean

    /**
     * Checks whether the STValue object is wrapped with an int value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is an integer type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isInt(): boolean

    /**
     * Checks whether the STValue object is wrapped with a short value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is a short integer type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isShort(): boolean

    /**
     * Checks whether the STValue object is wrapped with the char value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is a character type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isChar(): boolean

    /**
     * Checks whether the STValue object is wrapped with the byte value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if it is a byte type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isByte(): boolean

    /**
     * Checks whether the STValue object is wrapped with the boolean value of ArkTS-Sta.
     *
     * @returns {boolean} Returns true if boolean, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isBoolean(): boolean

    /**
     * Checks whether the STValue object is wrapped is an ArkTS-Sta BigInt object.
     *
     * @returns {boolean} Returns true if it is a large integer type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isBigInt(): boolean

    /**
     * Checks whether the STValue object is wrapped with an ArkTS-Sta string.
     *
     * @returns {boolean} Returns true if it is a string type, false otherwise.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    isString(): boolean

    /**
     * Unwraps STValue objects into numbers.
     *
     * @returns {number} The unpacked number value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    unwrapToNumber(): number

    /**
     * Unwraps STValue object into a string.
     *
     * @returns {string} The unwrapped string value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    unwrapToString(): string

    /**
     * Unwraps large integer objects in STValue into BigInt type.
     *
     * @returns {bigint} The large integer value after unpacking.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    unwrapToBigInt(): bigint

    /**
     * Unwraps STValue object into a Boolean value.
     *
     * @returns {boolean} The unwrapped boolean value.
     * @syscap SystemCapability.ArkTS.ArkTS
     * @since 24
     */
    unwrapToBoolean(): boolean
}