/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit IPCKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * This module provides inter process communication capability.
 *
 * @namespace rpc
 * @syscap SystemCapability.Communication.IPC.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace rpc {
  /**
   * The error code of rpc.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum ErrorCode {
    /**
     * Parameter error.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CHECK_PARAM_ERROR = 401,

    /**
     * Failed to call mmap.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_MMAP_ERROR = 1900001,

    /**
     * Failed to call ioctl.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_IOCTL_ERROR = 1900002,

    /**
     * Failed to write data to the shared memory.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_TO_ASHMEM_ERROR = 1900003,

    /**
     * Failed to read data from the shared memory.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_FROM_ASHMEM_ERROR = 1900004,

    /**
     * Operation allowed only for the proxy object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_PROXY_OBJECT_PERMITTED_ERROR = 1900005,

    /**
     * Operation allowed only for the remote object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_REMOTE_OBJECT_PERMITTED_ERROR = 1900006,

    /**
     * Communication failed.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    COMMUNICATION_ERROR = 1900007,

    /**
     * The proxy or remote object is invalid.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PROXY_OR_REMOTE_OBJECT_INVALID_ERROR = 1900008,

    /**
     * Failed to write data to the message sequence. 
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR = 1900009,

    /**
     * Failed to read data from the message sequence.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR = 1900010,

    /**
     * Memory allocation failed.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PARCEL_MEMORY_ALLOC_ERROR = 1900011,

    /**
     * Call js method failed
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_JS_METHOD_ERROR = 1900012,

    /**
     * Os dup function failed
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_DUP_ERROR = 1900013
  }

  /**
   * Enumerates the types of the TypedArray object converted from an ArrayBuffer object.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum TypeCode {
    /**
     * The TypedArray type is Int8Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT8_ARRAY = 0,

    /**
     * The TypedArray type is Uint8Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT8_ARRAY = 1,

    /**
     * The TypedArray type is Int16Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT16_ARRAY = 2,

    /**
     * The TypedArray type is Uint16Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT16_ARRAY = 3,

    /**
     * The TypedArray type is Int32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT32_ARRAY = 4,

    /**
     * The TypedArray type is Uint32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT32_ARRAY = 5,

    /**
     * The TypedArray type is Float32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT32_ARRAY = 6,

    /**
     * The TypedArray type is Float64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT64_ARRAY = 7,

    /**
     * The TypedArray type is BigInt64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGINT64_ARRAY = 8,

    /**
     * The TypedArray type is BigUint64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGUINT64_ARRAY = 9
  }

  /**
   * A data object used for remote procedure call (RPC).
   * <p>
   * During RPC, the sender can use the write methods provided by {@link MessageParcel} to
   * write the to-be-sent data into a {@link MessageParcel} object in a specific format, and the receiver can use the
   * read methods provided by {@link MessageParcel} to read data of the specific format from the
   * {@link MessageParcel} object.
   * <p>
   * <p>
   * The default capacity of a {@link MessageParcel} instance is 200KB. If you want more or less,
   * use {@link #setCapacity(int)} to change it.
   * </p>
   * <b>Note</b>: Only data of the following data types can be written into or read from a {@link MessageParcel}: byte,
   * byteArray, short, shortArray, int, intArray, long, longArray, float, floatArray, double, doubleArray, boolean,
   * booleanArray, char, charArray, String, StringArray, {@link IRemoteObject}, IRemoteObjectArray,
   * {@link Sequenceable}, and SequenceableArray.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.rpc.MessageSequence
   */
  class MessageParcel {
    /**
     * Creates an empty {@link MessageParcel} object.
     *
     * @returns { MessageParcel } Return the object created.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#create
     */
    static create(): MessageParcel;

    /**
     * Reclaim the {@link MessageParcel} object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#reclaim	 
     */
    reclaim(): void;

    /**
     * Serialize a remote object and writes it to the {@link MessageParcel} object.
     *
     * @param { IRemoteObject } object - Remote object to serialize.
     * @returns { boolean } Return {@code true} if it is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeRemoteObject	
     */
    writeRemoteObject(object: IRemoteObject): boolean;

    /**
     * Reads a remote object from {@link MessageParcel} object.
     *
     * @returns { IRemoteObject } Return the remote object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readRemoteObject
     */
    readRemoteObject(): IRemoteObject;

    /**
     * Writes an interface token into the {@link MessageParcel} object.
     *
     * @param { string } token - Interface descriptor to write.
     * @returns { boolean } Return {@code true} if the interface token has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeInterfaceToken
     */
    writeInterfaceToken(token: string): boolean;

    /**
     * Reads an interface token from the {@link MessageParcel} object.
     *
     * @returns { string } Return a string value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readInterfaceToken
     */
    readInterfaceToken(): string;

    /**
     * Obtains the size of data (in bytes) contained in the {@link MessageParcel} object.
     *
     * @returns { number } Return the size of data contained in the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getSize
     */
    getSize(): number;

    /**
     * Obtains the storage capacity (in bytes) of the {@link MessageParcel} object.
     *
     * @returns { number } Return the storage capacity of the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getCapacity
     */
    getCapacity(): number;

    /**
     * Sets the size of data (in bytes) contained in the {@link MessageParcel} object.
     * <p>{@code false} is returned if the data size set in this method is greater
     * than the storage capacity of the {@link MessageParcel}.
     *
     * @param { number } size - Indicates the data size of the {@link MessageParcel} object.
     * @returns { boolean } Return {@code true} if the setting is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#setSize
     */
    setSize(size: number): boolean;

    /**
     * Sets the storage capacity (in bytes) of the {@link MessageParcel} object.
     * <p>{@code false} is returned if the capacity set in this method is less than
     * the size of data contained in the {@link MessageParcel}.
     *
     * @param { number } size - Indicates the storage capacity of the {@link MessageParcel} object.
     * @returns { boolean } Return {@code true} if the setting is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#setCapacity
     */
    setCapacity(size: number): boolean;

    /**
     * Obtains the writable data space (in bytes) in the {@link MessageParcel} object.
     * <p>Writable data space = Storage capacity of the {@link MessageParcel} – Size of data contained
     * in the {@link MessageParcel}.
     *
     * @returns { number } Return the writable data space of the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getWritableBytes
     */
    getWritableBytes(): number;

    /**
     * Obtains the readable data space (in bytes) in the {@link MessageParcel} object.
     * <p>Readable data space = Size of data contained in the {@link MessageParcel} – Size of data that has been read.
     *
     * @returns { number } Return the readable data space of the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getReadableBytes
     */
    getReadableBytes(): number;

    /**
     * Obtains the current read position in the {@link MessageParcel} object.
     *
     * @returns { number } Return the current read position in the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getReadPosition
     */
    getReadPosition(): number;

    /**
     * Obtains the current write position in the {@link MessageParcel} object.
     *
     * @returns { number } Return the current write position in the {@link MessageParcel} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getWritePosition
     */
    getWritePosition(): number;

    /**
     * Changes the current read position in the {@link MessageParcel} object.
     * <p>Generally, you are advised not to change the current read position. If you must
     * change it, change it to an accurate position. Otherwise, the read data may be incorrect.
     *
     * @param { number } pos - Indicates the target position to start data reading.
     * @returns { boolean } Return {@code true} if the read position is changed; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#rewindRead
     */
    rewindRead(pos: number): boolean;

    /**
     * Changes the current write position in the {@link MessageParcel} object.
     * <p>Generally, you are advised not to change the current write position. If you must
     * change it, change it to an accurate position. Otherwise, the data to be read may be incorrect.
     *
     * @param { number } pos - Indicates the target position to start data writing.
     * @returns { boolean } Return {@code true} if the write position is changed; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#rewindWrite
     */
    rewindWrite(pos: number): boolean;

    /**
     * Writes information to this MessageParcel object indicating that no exception occurred.
     * <p>After handling requests, you should call this method before writing any data to reply {@link MessageParcel}.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeNoException
     */
    writeNoException(): void;

    /**
     * Reads the exception information from this MessageParcel object.
     * <p>If exception was thrown in server side, it will be thrown here.
     * This method should be called before reading any data from reply {@link MessageParcel}
     * if {@link writeNoException} was invoked in server side.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readException
     */
    readException(): void;

    /**
     * Writes a byte value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the byte value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeByte
     */
    writeByte(val: number): boolean;

    /**
     * Writes a short integer value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the short integer value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeShort
     */
    writeShort(val: number): boolean;

    /**
     * Writes an integer value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the integer value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeInt
     */
    writeInt(val: number): boolean;

    /**
     * Writes a long integer value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the long integer value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeLong
     */
    writeLong(val: number): boolean;

    /**
     * Writes a double-precision floating point value into the {@link MessageParcel} object.
     * Note: This API writes a double-precision floating value since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @param { number } val - Indicates the double-precision floating point value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeFloat
     */
    writeFloat(val: number): boolean;

    /**
     * Writes a double-precision floating point value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the double-precision floating point value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeDouble
     */
    writeDouble(val: number): boolean;

    /**
     * Writes a boolean value into the {@link MessageParcel} object.
     *
     * @param { boolean } val - Indicates the boolean value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeBoolean
     */
    writeBoolean(val: boolean): boolean;

    /**
     * Writes a single character value into the {@link MessageParcel} object.
     *
     * @param { number } val - Indicates the single character value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeChar
     */
    writeChar(val: number): boolean;

    /**
     * Writes a string value into the {@link MessageParcel} object.
     *
     * @param { string } val - Indicates the string value to write.
     * @returns { boolean } Return {@code true} if the value has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeString
     */
    writeString(val: string): boolean;

    /**
     * Writes a {@link Sequenceable} object into the {@link MessageParcel} object.
     *
     * @param { Sequenceable } val - Indicates the {@link Sequenceable} object to write.
     * @returns { boolean } Return {@code true} if the {@link Sequenceable} object has been written into
     *                      the {@link MessageParcel}; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeParcelable
     */
    writeSequenceable(val: Sequenceable): boolean;

    /**
     * Writes a byte array into the {@link MessageParcel} object.
     *
     * @param { number[] } byteArray - Indicates the byte array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeByteArray
     */
    writeByteArray(byteArray: number[]): boolean;

    /**
     * Writes a short integer array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { number[] } shortArray - Indicates the short integer array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeShortArray
     */
    writeShortArray(shortArray: number[]): boolean;

    /**
     * Writes an integer array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { number[] } intArray - Indicates the integer array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeIntArray
     */
    writeIntArray(intArray: number[]): boolean;

    /**
     * Writes a long integer array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { number[] } longArray - Indicates the long integer array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeLongArray
     */
    writeLongArray(longArray: number[]): boolean;

    /**
     * Writes a double-precision floating point array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     * Note: This API writes a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @param { number[] } floatArray - Indicates the double-precision floating point array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeFloatArray
     */
    writeFloatArray(floatArray: number[]): boolean;

    /**
     * Writes a double-precision floating point array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { number[] } doubleArray - Indicates the double-precision floating point array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeDoubleArray
     */
    writeDoubleArray(doubleArray: number[]): boolean;

    /**
     * Writes a boolean array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { boolean[] } booleanArray - Indicates the boolean array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeBooleanArray
     */
    writeBooleanArray(booleanArray: boolean[]): boolean;

    /**
     * Writes a single character array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { number[] } charArray - Indicates the single character array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeCharArray
     */
    writeCharArray(charArray: number[]): boolean;

    /**
     * Writes a string array into the {@link MessageParcel} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { string[] } stringArray - Indicates the string array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeStringArray
     */
    writeStringArray(stringArray: string[]): boolean;

    /**
     * Writes a {@link Sequenceable} object array into the {@link MessageParcel} object.
     *
     * @param { Sequenceable[] } sequenceableArray - Indicates the {@link Sequenceable} object array to write.
     * @returns { boolean } Return {@code true} if the array has been written into the {@link MessageParcel};
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeParcelableArray
     */
    writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean;

    /**
     * Writes an array of {@link IRemoteObject} objects to this {@link MessageParcel} object.
     *
     * @param { IRemoteObject[] } objectArray - Array of {@link IRemoteObject} objects to write.
     * @returns { boolean } Return {@code true} if the {@link IRemoteObject} array is successfully written
     *                      to the {@link MessageParcel};
     *                      return {@code false} if the {@link IRemoteObject} array is null or fails to be written
     *                      to the {@link MessageParcel}.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeRemoteObjectArray
     */
    writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean;

    /**
     * Reads a byte value from the {@link MessageParcel} object.
     *
     * @returns { number } Return a byte value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readByte
     */
    readByte(): number;

    /**
     * Reads a short integer value from the {@link MessageParcel} object.
     *
     * @returns { number } Return a short integer value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readShort
     */
    readShort(): number;

    /**
     * Reads an integer value from the {@link MessageParcel} object.
     *
     * @returns { number } Return an integer value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readInt
     */
    readInt(): number;

    /**
     * Reads a long integer value from the {@link MessageParcel} object.
     *
     * @returns { number } Return a long integer value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readLong
     */
    readLong(): number;

    /**
     * Reads a double-precision floating point value from the {@link MessageParcel} object.
     * Note: This API reads a double-precision floating value since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @returns { number } Return a double-precision floating point value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readFloat
     */
    readFloat(): number;

    /**
     * Reads a double-precision floating point value from the {@link MessageParcel} object.
     *
     * @returns { number } Return a double-precision floating point value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readDouble
     */
    readDouble(): number;

    /**
     * Reads a boolean value from the {@link MessageParcel} object.
     *
     * @returns { boolean } Return a boolean value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readBoolean
     */
    readBoolean(): boolean;

    /**
     * Reads a single character value from the {@link MessageParcel} object.
     *
     * @returns { number } Return a single character value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readChar
     */
    readChar(): number;

    /**
     * Reads a string value from the {@link MessageParcel} object.
     *
     * @returns { string } Return a string value.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readString
     */
    readString(): string;

    /**
     * Reads a {@link Sequenceable} object from the {@link MessageParcel} instance.
     *
     * @param { Sequenceable } dataIn - Indicates the {@link Sequenceable} object that needs to perform
     *                         the {@code unmarshalling} operation using the {@link MessageParcel}.
     * @returns { boolean } Return {@code true} if the unmarshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readParcelable
     */
    readSequenceable(dataIn: Sequenceable): boolean;

    /**
     * Writes a byte array into the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the byte array read from MessageParcel.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readByteArray
     */
    readByteArray(dataIn: number[]): void;

    /**
     * Reads a byte array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return a byte array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readByteArray
     */
    readByteArray(): number[];

    /**
     * Reads a short integer array from the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the short integer array read from MessageParcel.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readShortArray
     */
    readShortArray(dataIn: number[]): void;

    /**
     * Reads a short integer array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return a short integer array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readShortArray
     */
    readShortArray(): number[];

    /**
     * Reads an integer array from the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the integer array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readIntArray
     */
    readIntArray(dataIn: number[]): void;

    /**
     * Reads an integer array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return an integer array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readIntArray
     */
    readIntArray(): number[];

    /**
     * Reads a long integer array from the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the long integer array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readLongArray
     */
    readLongArray(dataIn: number[]): void;

    /**
     * Reads a long integer array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return a long integer array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readLongArray
     */
    readLongArray(): number[];

    /**
     * Reads a double-precision floating point array from the {@link MessageParcel} object.
     * Note: This API reads a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     * 
     * @param { number[] } dataIn - Indicates the double-precision floating point array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readFloatArray
     */
    readFloatArray(dataIn: number[]): void;

    /**
     * Reads a double-precision floating point array from the {@link MessageParcel} object.
     * Note: This API reads a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @returns { number[] } Return a double-precision floating point array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readFloatArray
     */
    readFloatArray(): number[];

    /**
     * Reads a double-precision floating point array from the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the double-precision floating point array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readDoubleArray
     */
    readDoubleArray(dataIn: number[]): void;

    /**
     * Reads a double-precision floating point array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return a double-precision floating point array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readDoubleArray
     */
    readDoubleArray(): number[];

    /**
     * Reads a boolean array from the {@link MessageParcel} object.
     *
     * @param { boolean[] } dataIn - Indicates the boolean array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readBooleanArray
     */
    readBooleanArray(dataIn: boolean[]): void;

    /**
     * Reads a boolean array from the {@link MessageParcel} object.
     *
     * @returns { boolean[] } Return a boolean array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readBooleanArray
     */
    readBooleanArray(): boolean[];

    /**
     * Reads a single character array from the {@link MessageParcel} object.
     *
     * @param { number[] } dataIn - Indicates the single character array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readCharArray
     */
    readCharArray(dataIn: number[]): void;

    /**
     * Reads a single character array from the {@link MessageParcel} object.
     *
     * @returns { number[] } Return a single character array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readCharArray
     */
    readCharArray(): number[];

    /**
     * Reads a string array from the {@link MessageParcel} object.
     *
     * @param { string[] } dataIn - Indicates the string array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readStringArray
     */
    readStringArray(dataIn: string[]): void;

    /**
     * Reads a string array from the {@link MessageParcel} object.
     *
     * @returns { string[] } Return a string array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readStringArray
     */
    readStringArray(): string[];

    /**
     * Reads the specified {@link Sequenceable} array from this {@link MessageParcel} object.
     *
     * @param { Sequenceable[] } sequenceableArray - Sequenceable array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readParcelableArray
     */
    readSequenceableArray(sequenceableArray: Sequenceable[]): void;

    /**
     * Reads the specified {@link IRemoteObject} array from this {@link MessageParcel} object.
     *
     * @param { IRemoteObject[] } objects - Reads data from this {@link MessageParcel} object to the specified
     *                            {@link IRemoteObject} array.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readRemoteObjectArray
     */
    readRemoteObjectArray(objects: IRemoteObject[]): void;

    /**
     * Reads {@link IRemoteObject} objects from this {@link MessageParcel} object.
     *
     * @returns { IRemoteObject[] } An array of {@link IRemoteObject} objects obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readRemoteObjectArray
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * Closes the specified file descriptor.
     *
     * @param { number } fd - File descriptor to be closed.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#closeFileDescriptor
     */
    static closeFileDescriptor(fd: number): void;

    /**
     * Duplicates the specified file descriptor.
     *
     * @param { number } fd - File descriptor to be duplicated.
     * @returns { number } Return a duplicated file descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#dupFileDescriptor
     */
    static dupFileDescriptor(fd: number): number;

    /**
     * Checks whether this {@link MessageParcel} object contains a file descriptor.
     *
     * @returns { boolean } Return {@code true} if the {@link MessageParcel} object contains a file descriptor;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#containFileDescriptors
     */
    containFileDescriptors(): boolean;

    /**
     * Writes a file descriptor to this {@link MessageParcel} object.
     *
     * @param { number } fd - File descriptor to wrote.
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeFileDescriptor
     */
    writeFileDescriptor(fd: number): boolean;

    /**
     * Reads a file descriptor from this {@link MessageParcel} object.
     *
     * @returns { number } Return a file descriptor obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readFileDescriptor
     */
    readFileDescriptor(): number;

    /**
     * Writes an anonymous shared memory object to this {@link MessageParcel} object.
     *
     * @param { Ashmem } ashmem - Anonymous shared memory object to wrote.
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeAshmem
     */
    writeAshmem(ashmem: Ashmem): boolean;

    /**
     * Reads the anonymous shared memory object from this {@link MessageParcel} object.
     *
     * @returns { Ashmem } Anonymous share object obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readAshmem
     */
    readAshmem(): Ashmem;

    /**
     * Obtains the maximum amount of raw data that can be sent in a time.
     *
     * @returns { number } 128 MB.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#getRawDataCapacity
     */
    getRawDataCapacity(): number;

    /**
     * Writes raw data to this {@link MessageParcel} object.
     *
     * @param { number[] } rawData - Raw data to wrote.
     * @param { number } size - Size of the raw data, in bytes.
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#writeRawData
     */
    writeRawData(rawData: number[], size: number): boolean;

    /**
     * Reads raw data from this {@link MessageParcel} object.
     *
     * @param { number } size - Size of the raw data to read.
     * @returns { number[] } Return the raw data obtained, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
	 * @useinstead ohos.rpc.MessageSequence#readRawData
     */
    readRawData(size: number): number[];
  }

  /**
   * A data object used for remote procedure call (RPC).
   * <p>
   * During RPC, the sender can use the write methods provided by {@link MessageSequence} to
   * write the to-be-sent data into a {@link MessageSequence} object in a specific format, and the receiver can use the
   * read methods provided by {@link MessageSequence} to read data of the specific format from
   * the {@link MessageSequence} object.
   * <p>
   * <p>
   * The default capacity of a {@link MessageSequence} instance is 200KB. If you want more or less,
   * use {@link #setCapacity(int)} to change it.
   * </p>
   * <b>Note</b>: Only data of the following data types can be written into or read from a {@link MessageSequence}:
   * byte, byteArray, short, shortArray, int, intArray, long, longArray, float, floatArray, double, doubleArray,
   * boolean, booleanArray, char, charArray, String, StringArray, {@link IRemoteObject}, IRemoteObjectArray,
   * {@link Parcelable}, and ParcelableArray.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  class MessageSequence {
    /**
     * Creates an empty {@link MessageSequence} object.
     *
     * @returns { MessageSequence } Return the object created.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(): MessageSequence;

    /**
     * Reclaim the {@link MessageSequence} object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reclaim(): void;

    /**
     * Serialize a remote object and writes it to the {@link MessageSequence} object.
     *
     * @param { IRemoteObject } obj - Remote object to serialize.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeRemoteObject(obj: IRemoteObject): void;

    /**
     * Reads a remote object from {@link MessageSequence} object.
     *
     * @returns { IRemoteObject } Return the remote object.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObject(): IRemoteObject;

    /**
     * Writes an interface token into the {@link MessageSequence} object.
     *
     * @param { string } token - Interface descriptor to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeInterfaceToken(token: string): void;

    /**
     * Reads an interface token from the {@link MessageSequence} object.
     *
     * @returns { string } Return a string value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readInterfaceToken(): string;

    /**
     * Obtains the size of data (in bytes) contained in the {@link MessageSequence} object.
     *
     * @returns { int } Return the size of data contained in the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getSize(): int;

    /**
     * Obtains the storage capacity (in bytes) of the {@link MessageSequence} object.
     *
     * @returns { int } Return the storage capacity of the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getCapacity(): int;

    /**
     * Sets the size of data (in bytes) contained in the {@link MessageSequence} object.
     * <p>{@code false} is returned if the data size set in this method is greater
     * than the storage capacity of the {@link MessageSequence}.
     *
     * @param { int } size - Indicates the data size of the {@link MessageSequence} object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setSize(size: int): void;

    /**
     * Sets the storage capacity (in bytes) of the {@link MessageSequence} object.
     * <p>{@code false} is returned if the capacity set in this method is less than
     * the size of data contained in the {@link MessageSequence}.
     *
     * @param { int } size - Indicates the storage capacity of the {@link MessageSequence} object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @throws { BusinessError } 1900011 - Memory allocation failed.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setCapacity(size: int): void;

    /**
     * Obtains the writable data space (in bytes) in the {@link MessageSequence} object.
     * <p>Writable data space = Storage capacity of the {@link MessageSequence} – Size of data contained in
     * the {@link MessageSequence}.
     *
     * @returns { int } Return the writable data space of the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritableBytes(): int;

    /**
     * Obtains the readable data space (in bytes) in the {@link MessageSequence} object.
     * <p>Readable data space = Size of data contained in the {@link MessageSequence} – Size of data that has been read.
     *
     * @returns { int } Return the readable data space of the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadableBytes(): int;

    /**
     * Obtains the current read position in the {@link MessageSequence} object.
     *
     * @returns { int } Return the current read position in the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadPosition(): int;

    /**
     * Obtains the current write position in the {@link MessageSequence} object.
     *
     * @returns { int } Return the current write position in the {@link MessageSequence} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritePosition(): int;

    /**
     * Changes the current read position in the {@link MessageSequence} object.
     * <p>Generally, you are advised not to change the current read position. If you must
     * change it, change it to an accurate position. Otherwise, the read data may be incorrect.
     *
     * @param { int } pos - Indicates the target position to start data reading.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    rewindRead(pos: int): void;

    /**
     * Changes the current write position in the {@link MessageSequence} object.
     * <p>Generally, you are advised not to change the current write position. If you must
     * change it, change it to an accurate position. Otherwise, the data to be read may be incorrect.
     *
     * @param { int } pos - Indicates the target position to start data writing.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    rewindWrite(pos: int): void;

    /**
     * Writes information to this MessageSequence object indicating that no exception occurred.
     * <p>After handling requests, you should call this method before writing any data to reply
     * {@link MessageSequence}.
     *
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeNoException(): void;

    /**
     * Reads the exception information from this MessageSequence object.
     * <p>If exception was thrown in server side, it will be thrown here.
     * This method should be called before reading any data from reply {@link MessageSequence}
     * if {@link writeNoException} was invoked in server side.
     *
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readException(): void;

    /**
     * Writes a byte value into the {@link MessageSequence} object.
     *
     * @param { int } val - Indicates the byte value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeByte(val: int): void;

    /**
     * Writes a short integer value into the {@link MessageSequence} object.
     *
     * @param { int } val - Indicates the short integer value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeShort(val: int): void;

    /**
     * Writes an integer value into the {@link MessageSequence} object.
     *
     * @param { int } val - Indicates the integer value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt(val: int): void;

    /**
     * Writes a long integer value into the {@link MessageSequence} object.
     *
     * @param { long } val - Indicates the long integer value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeLong(val: long): void;

    /**
     * Writes a double-precision floating point value into the {@link MessageSequence} object.
     * Note: This API writes a double-precision floating value since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @param { double } val - Indicates the double-precision floating point value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloat(val: double): void;

    /**
     * Writes a double-precision floating point value into the {@link MessageSequence} object.
     *
     * @param { double } val - Indicates the double-precision floating point value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeDouble(val: double): void;

    /**
     * Writes a boolean value into the {@link MessageSequence} object.
     *
     * @param { boolean } val - Indicates the boolean value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeBoolean(val: boolean): void;

    /**
     * Writes a single character value into the {@link MessageSequence} object.
     *
     * @param { int } val - Indicates the single character value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeChar(val: int): void;

    /**
     * Writes a string value into the {@link MessageSequence} object.
     *
     * @param { string } val - Indicates the string value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeString(val: string): void;

    /**
     * Writes a {@link Parcelable} object into the {@link MessageSequence} object.
     *
     * @param { Parcelable } val - Indicates the {@link Parcelable} object to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeParcelable(val: Parcelable): void;

    /**
     * Writes a byte array into the {@link MessageSequence} object.
     *
     * @param { int[] } byteArray - Indicates the byte array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeByteArray(byteArray: int[]): void;

    /**
     * Writes a short integer array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { int[] } shortArray - Indicates the short integer array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeShortArray(shortArray: int[]): void;

    /**
     * Writes an integer array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { int[] } intArray - Indicates the integer array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeIntArray(intArray: int[]): void;

    /**
     * Writes a long integer array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { long[] } longArray - Indicates the long integer array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeLongArray(longArray: long[]): void;

    /**
     * Writes a double-precision floating point array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     * Note: This API writes a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @param { double[] } floatArray - Indicates the double-precision floating point array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloatArray(floatArray: double[]): void;

    /**
     * Writes a double-precision floating point array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { double[] } doubleArray - Indicates the double-precision floating point array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeDoubleArray(doubleArray: double[]): void;

    /**
     * Writes a boolean array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { boolean[] } booleanArray - Indicates the boolean array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeBooleanArray(booleanArray: boolean[]): void;

    /**
     * Writes a single character array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { int[] } charArray - Indicates the single character array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeCharArray(charArray: int[]): void;

    /**
     * Writes a string array into the {@link MessageSequence} object.
     * Ensure that the data type and size comply with the interface definition.
     * Otherwise,data may be truncated.
     *
     * @param { string[] } stringArray - Indicates the string array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The string length is greater than or equal to 40960 bytes;
     *     5.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeStringArray(stringArray: string[]): void;

    /**
     * Writes a {@link Parcelable} object array into the {@link MessageSequence} object.
     *
     * @param { Parcelable[] } parcelableArray - Indicates the {@link Parcelable} object array to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeParcelableArray(parcelableArray: Parcelable[]): void;

    /**
     * Writes an array of {@link IRemoteObject} objects to this {@link MessageSequence} object.
     *
     * @param { IRemoteObject[] } objectArray - Array of {@link IRemoteObject} objects to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The obtained remoteObject is null.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeRemoteObjectArray(objectArray: IRemoteObject[]): void;

    /**
     * Reads a byte value from the {@link MessageSequence} object.
     *
     * @returns { int } Return a byte value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByte(): int;

    /**
     * Reads a short integer value from the {@link MessageSequence} object.
     *
     * @returns { int } Return a short integer value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShort(): int;

    /**
     * Reads an integer value from the {@link MessageSequence} object.
     *
     * @returns { int } Return an integer value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readInt(): int;

    /**
     * Reads a long integer value from the {@link MessageSequence} object.
     *
     * @returns { long } Return a long integer value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLong(): long;

    /**
     * Reads a double-precision floating point value from the {@link MessageSequence} object.
     * Note: This API reads a double-precision floating value since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @returns { double } Return a double-precision floating point value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloat(): double;

    /**
     * Reads a double-precision floating point value from the {@link MessageSequence} object.
     *
     * @returns { double } Return a double-precision floating point value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDouble(): double;

    /**
     * Reads a boolean value from the {@link MessageSequence} object.
     *
     * @returns { boolean } Return a boolean value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBoolean(): boolean;

    /**
     * Reads a single character value from the {@link MessageSequence} object.
     *
     * @returns { int } Return a single character value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readChar(): int;

    /**
     * Reads a string value from the {@link MessageSequence} object.
     *
     * @returns { string } Return a string value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readString(): string;

    /**
     * Reads a {@link Parcelable} object from the {@link MessageSequence} instance.
     *
     * @param { Parcelable } dataIn - Indicates the {@link Parcelable} object that needs to perform
     *                       the {@code unmarshalling} operation using the {@link MessageSequence}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @throws { BusinessError } 1900012 - Failed to call the JS callback function.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readParcelable(dataIn: Parcelable): void;

    /**
     * Writes a byte array into the {@link MessageSequence} object.
     *
     * @param { int[] } dataIn - Indicates the byte array read from MessageSequence.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByteArray(dataIn: int[]): void;

    /**
     * Reads a byte array from the {@link MessageSequence} object.
     *
     * @returns { int[] } Return a byte array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByteArray(): int[];

    /**
     * Reads a short integer array from the {@link MessageSequence} object.
     *
     * @param { int[] } dataIn - Indicates the short integer array read from MessageSequence.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShortArray(dataIn: int[]): void;

    /**
     * Reads a short integer array from the {@link MessageSequence} object.
     *
     * @returns { int[] } Return a short integer array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShortArray(): int[];

    /**
     * Reads an integer array from the {@link MessageSequence} object.
     *
     * @param { int[] } dataIn - Indicates the integer array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readIntArray(dataIn: int[]): void;

    /**
     * Reads an integer array from the {@link MessageSequence} object.
     *
     * @returns { int[] } Return an integer array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readIntArray(): int[];

    /**
     * Reads a long integer array from the {@link MessageSequence} object.
     *
     * @param { long[] } dataIn - Indicates the long integer array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLongArray(dataIn: long[]): void;

    /**
     * Reads a long integer array from the {@link MessageSequence} object.
     *
     * @returns { long[] } Return a long integer array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLongArray(): long[];

    /**
     * Reads a double-precision floating point array from the {@link MessageSequence} object.
     * Note: This API reads a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @param { double[] } dataIn - Indicates the double-precision floating point array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatArray(dataIn: double[]): void;

    /**
     * Reads a double-precision floating point array from the {@link MessageSequence} object.
     * Note: This API reads a double-precision floating point array since ArkTS only supports double-precision
     * floating point numbers.
     *
     * @returns { double[] } Return a double-precision floating point array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatArray(): double[];

    /**
     * Reads a double-precision floating point array from the {@link MessageSequence} object.
     *
     * @param { double[] } dataIn - Indicates the double-precision floating point array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleArray(dataIn: double[]): void;

    /**
     * Reads a double-precision floating point array from the {@link MessageSequence} object.
     *
     * @returns { double[] } Return a double-precision floating point array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleArray(): double[];

    /**
     * Reads a boolean array from the {@link MessageSequence} object.
     *
     * @param { boolean[] } dataIn - Indicates the boolean array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBooleanArray(dataIn: boolean[]): void;

    /**
     * Reads a boolean array from the {@link MessageSequence} object.
     *
     * @returns { boolean[] } Return a boolean array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBooleanArray(): boolean[];

    /**
     * Reads a single character array from the {@link MessageSequence} object.
     *
     * @param { int[] } dataIn - Indicates the single character array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readCharArray(dataIn: int[]): void;

    /**
     * Reads a single character array from the {@link MessageSequence} object.
     *
     * @returns { int[] } Return a single character array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readCharArray(): int[];

    /**
     * Reads a string array from the {@link MessageSequence} object.
     *
     * @param { string[] } dataIn - Indicates the string array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readStringArray(dataIn: string[]): void;

    /**
     * Reads a string array from the {@link MessageSequence} object.
     *
     * @returns { string[] } Return a string array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readStringArray(): string[];

    /**
     * Reads the specified {@link Parcelable} array from this {@link MessageSequence} object.
     *
     * @param { Parcelable[] } parcelableArray - Parcelable array to read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The length of the array passed when reading is not equal to the length passed when writing to the array;
     *     5.The element does not exist in the array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @throws { BusinessError } 1900012 - Failed to call the JS callback function.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readParcelableArray(parcelableArray: Parcelable[]): void;

    /**
     * Reads the specified {@link IRemoteObject} array from this {@link MessageSequence} object.
     *
     * @param { IRemoteObject[] } objects - Reads data from this {@link MessageSequence} object to
     *                            the specified {@link IRemoteObject} array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The length of the array passed when reading is not equal to the length passed when writing to the array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObjectArray(objects: IRemoteObject[]): void;

    /**
     * Reads {@link IRemoteObject} objects from this {@link MessageSequence} object.
     *
     * @returns { IRemoteObject[] } Return an array of {@link IRemoteObject} objects obtained.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * Closes the specified file descriptor.
     *
     * @param { int } fd - File descriptor to be closed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static closeFileDescriptor(fd: int): void;

    /**
     * Duplicates the specified file descriptor.
     *
     * @param { int } fd - File descriptor to be duplicated.
     * @returns { int } Return a duplicated file descriptor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900013 - Failed to call dup.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static dupFileDescriptor(fd: int): int;

    /**
     * Checks whether this {@link MessageSequence} object contains a file descriptor.
     *
     * @returns { boolean } Return {@code true} if the {@link MessageSequence} object contains a file descriptor;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    containFileDescriptors(): boolean;

    /**
     * Writes a file descriptor to this {@link MessageSequence} object.
     *
     * @param { int } fd - File descriptor to wrote.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFileDescriptor(fd: int): void;

    /**
     * Reads a file descriptor from this {@link MessageSequence} object.
     *
     * @returns { int } Return a file descriptor obtained.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFileDescriptor(): int;

    /**
     * Writes an anonymous shared memory object to this {@link MessageSequence} object.
     *
     * @param { Ashmem } ashmem - Anonymous shared memory object to wrote.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter is not an instance of the Ashmem object.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeAshmem(ashmem: Ashmem): void;

    /**
     * Reads the anonymous shared memory object from this {@link MessageSequence} object.
     *
     * @returns { Ashmem } Return the anonymous share object obtained.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readAshmem(): Ashmem;

    /**
     * Obtains the maximum amount of raw data that can be sent in a time.
     *
     * @returns { int } 128 MB.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getRawDataCapacity(): int;

    /**
     * Writes raw data to this {@link MessageSequence} object.
     *
     * @param { number[] } rawData - Raw data to wrote.
     * @param { number } size - Size of the raw data, in bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The transferred size cannot be obtained;
     *     5.The transferred size is less than or equal to 0;
     *     6.The element does not exist in the array;
     *     7.Failed to obtain typedArray information;
     *     8.The array is not of type int32;
     *     9.The length of typedarray is smaller than the size of the original data sent.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.rpc.MessageSequence#writeRawDataBuffer
     */
    writeRawData(rawData: number[], size: number): void;

    /**
     * Writes raw data to this {@link MessageSequence} object.
     *
     * @param { ArrayBuffer } rawData - Raw data to wrote.
     * @param { int } size - Size of the raw data, in bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain arrayBuffer information;
     *     4.The transferred size cannot be obtained;
     *     5.The transferred size is less than or equal to 0;
     *     6.The transferred size is greater than the byte length of ArrayBuffer.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    writeRawDataBuffer(rawData: ArrayBuffer, size: int): void;

    /**
     * Reads raw data from this {@link MessageSequence} object.
     *
     * @param { number } size - Size of the raw data to read.
     * @returns { number[] } Return the raw data obtained, in bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.rpc.MessageSequence#readRawDataBuffer
     */
    readRawData(size: number): number[];

    /**
     * Reads raw data from this {@link MessageSequence} object.
     *
     * @param { int } size - Size of the raw data to read.
     * @returns { ArrayBuffer } Return the raw data obtained, in bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    readRawDataBuffer(size: int): ArrayBuffer;

    /**
     * Writes the data in an ArrayBuffer object into this {@Link MessageSequence} object.
     *
     * @param { ArrayBuffer } buf - Data to write.
     * @param { TypeCode } typeCode - Type of the ArrayBuffer data to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The obtained value of typeCode is incorrect;
     *     5.Failed to obtain arrayBuffer information.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void;

    /**
     * Reads raw data from this {@link MessageSequence} object.
     *
     * @param { TypeCode } typeCode - Type of the ArrayBuffer read.
     * @returns { ArrayBuffer } Returns the Arraybuffer obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The obtained value of typeCode is incorrect;
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core 
     * @since 12 dynamic
     * @since 23 static
     */
    readArrayBuffer(typeCode: TypeCode): ArrayBuffer;
  }

  /**
   * @typedef Sequenceable
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.rpc.Parcelable
   */
  interface Sequenceable {
    /**
     * Marshal this {@code Sequenceable} object into a {@link MessageParcel}.
     *
     * @param { MessageParcel } dataOut - Indicates the {@link MessageParcel} object to which the {@code Sequenceable}
     *                          object will be marshalled.
     * @returns { boolean } Return {@code true} if the marshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Parcelable#marshalling
     */
    marshalling(dataOut: MessageParcel): boolean;

    /**
     * Unmarshal this {@code Sequenceable} object from a {@link MessageParcel}.
     *
     * @param { MessageParcel } dataIn - Indicates the {@link MessageParcel} object into which the {@code Sequenceable}
     *                          object has been marshalled.
     * @returns { boolean } Return {@code true} if the unmarshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Parcelable#unmarshalling
     */
    unmarshalling(dataIn: MessageParcel): boolean;
  }

  /**
   * @typedef Parcelable
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9
   */
  /**
   * During inter-process communication, objects of the class are written to the {@link MessageSequence} and
   * they are recovered from the {@link MessageSequence}.
   * 
   * @typedef Parcelable
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface Parcelable {
    /**
     * Marshal this {@code Parcelable} object into a {@link MessageSequence}.
     *
     * @param { MessageSequence } dataOut - Indicates the {@link MessageSequence} object to which the {@code Parcelable}
     *                            object will be marshalled.
     * @returns { boolean } Return {@code true} if the marshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    marshalling(dataOut: MessageSequence): boolean;

    /**
     * Unmarshal this {@code Parcelable} object from a {@link MessageSequence}.
     *
     * @param { MessageSequence } dataIn - Indicates the {@link MessageSequence} object into
     *                            which the {@code Parcelable} object has been marshalled.
     * @returns { boolean } Return {@code true} if the unmarshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unmarshalling(dataIn: MessageSequence): boolean;
  }

  /**
   * Defines the response to the request.
   * <p> SendRequestResult object contains four members, namely error code of this operation, request code, data parcel
   * and reply parcel.
   *
   * @typedef SendRequestResult
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.rpc.RequestResult
   */
  interface SendRequestResult {
    /**
     * Error code. 0 indicates successful, otherwise it is failed.
     *
     * @type { number }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RequestResult#errCode
     */
    errCode: number;

    /**
     * Message code. It is same as the code in {@link SendRequest} method.
     *
     * @type { number }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RequestResult#code
     */
    code: number;

    /**
     * MessageParcel object sent to the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageParcel }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RequestResult#data
     */
    data: MessageParcel;

    /**
     * MessageParcel object returned by the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageParcel }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RequestResult#reply
     */
    reply: MessageParcel;
  }

  /**
   * Defines the response to the request.
   * <p> SendRequestResult object contains four members, namely error code of this operation, request code, data parcel
   * and reply parcel.
   *
   * @typedef RequestResult
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface RequestResult {
    /**
     * Error code. 0 indicates successful, otherwise it is failed.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    errCode: int;

    /**
     * Message code. It is same as the code in {@link SendRequest} method.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * MessageSequence object sent to the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageSequence }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    data: MessageSequence;

    /**
     * MessageSequence object returned by the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageSequence }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reply: MessageSequence;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Used to query or get interface descriptors, add or remove death notifications, dump object status to
   * a specific file, and send messages.
   * 
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  abstract class IRemoteObject {
    /**
     * Queries the description of an interface.
     * <p>A valid {@link IRemoteBroker} object is returned for an interface used by the service provider;
     * {@code null} is returned for an interface used by the service user,
     * indicating that the interface is not a local one.
     *
     * @param { string } descriptor - Indicates the interface descriptor.
     * @returns { IRemoteBroker } Return the {@link IRemoteBroker} object bound to the specified interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#getLocalInterface
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Queries the description of an interface.
     * <p>A valid {@link IRemoteBroker} object is returned for an interface used by the service provider;
     * {@code null} is returned for an interface used by the service user,
     * indicating that the interface is not a local one.
     *
     * @param { string } descriptor - Indicates the interface descriptor.
     * @returns { IRemoteBroker } Return the {@link IRemoteBroker} object bound to the specified interface descriptor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If asynchronous mode is set for {@code option}, a response is returned immediately.
     * If synchronous mode is set for {@code option}, the interface will wait for a response from the peer process
     * until the request times out. The user must prepare {@code reply} for receiving the execution result
     * given by the peer process.
     *
     * @param { number } code - Indicates the message code, which is determined by both sides of the communication.
     * If the interface is generated by the IDL tool, the message code is automatically generated by IDL.
     * @param { MessageParcel } data - Indicates the {@link MessageParcel} object sent to the peer process.
     * @param { MessageParcel } reply - Indicates the {@link MessageParcel} object returned by the peer process.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { boolean } Return {@code true} if the method is called successfully; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#sendMessageRequest
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel } reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<SendRequestResult> } Promise used to return the {@link SendRequestResult} instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * Sends a {@link MessageSequence} message to the peer process asynchronously.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendMessageRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param {MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param {MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<RequestResult> } Promise used to return the {@link RequestResult} instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel } reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * Sends a {@link MessageSequence} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendMessageRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param {int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param { MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<RequestResult> } callback - Callback for receiving the sending result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * Register a callback used to receive notifications of the death of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be registered.
     * @param { number } flags - Indicates the flag of the death notification.
     * @returns { boolean } Return {@code true} if the callback is registered successfully;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#registerDeathRecipient
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Register a callback used to receive notifications of the death of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be registered.
     * @param { int } flags - Indicates the flag of the death notification.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900005 - Operation allowed only for the proxy object.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    registerDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * Unregister a callback used to receive notifications of the death of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be unregister.
     * @param { number } flags - Indicates the flag of the death notification.
     * @returns { boolean } Return {@code true} if the callback is unregister successfully;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#unregisterDeathRecipient
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Unregister a callback used to receive notifications of the death of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be unregister.
     * @param { int } flags - Indicates the flag of the death notification.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900005 - Operation allowed only for the proxy object.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * Obtains the interface descriptor of an object.
     * <p>The interface descriptor is a character string.
     *
     * @returns { string } Return the interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IRemoteObject#getDescriptor
     */
    getInterfaceDescriptor(): string;

    /**
     * Obtains the interface descriptor of an object.
     * <p>The interface descriptor is a character string.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Checks whether an object is dead.
     *
     * @returns { boolean } Return {@code true} if the object is dead; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * @typedef IRemoteBroker
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Used to define the communication interface of the IPC communication objects.
   * 
   * @typedef IRemoteBroker
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface IRemoteBroker {
    /**
     * Obtains a proxy or remote object. This method must be implemented by its derived classes.
     *
     * @returns { IRemoteObject } Return the RemoteObject if the caller is a RemoteObject; return the IRemoteObject,
     * that is, the holder of this RemoteProxy object, if the caller is a RemoteProxy object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    asObject(): IRemoteObject;
  }

  /**
   * Called to perform subsequent operations when a death notification of the remote object is received.
   *
   * @typedef { function } OnRemoteDiedFunc
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 23 static
   */
  type OnRemoteDiedFunc = () => void;

  /**
   * @typedef DeathRecipient
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Used to subscribe to death notifications for remote objects. 
   * <p>
   * When a remote object subscribed to the notification dies, the local end can receive a message and call
   * the onRemoteDied operation. The death of a remote object can be caused by the death of the process to which the
   * remote object belongs, the shutdown or restart of the device to which the remote object belongs,
   * or the death of the remote object when the remote object and the local object belong to different devices,
   * and when the remote object leaves the network.
   * </p>
   * 
   * @typedef DeathRecipient
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface DeathRecipient {
    /**
     * Called to perform subsequent operations when a death notification of the remote object is received.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    onRemoteDied(): void;

    /**
     * Called to perform subsequent operations when a death notification of the remote object is received.
     *
     * @type { OnRemoteDiedFunc }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    onRemoteDied: OnRemoteDiedFunc;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Public Message Option, using the specified flag type, constructs the specified MessageOption object.
   * 
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class MessageOption {
    /**
     * Indicates synchronous call.
     *
     * @type { number }
     * @default 0
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly TF_SYNC: number;

    /**
     * Indicates synchronous call.
     *
     * @returns { int } Return vaule indicating synchronous call.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_SYNC(): int;

    /**
     * Indicates asynchronous call.
     *
     * @type { number }
     * @default 1
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly TF_ASYNC: number;

    /**
     * Indicates asynchronous call.
     *
     * @returns { int } Return vaule indicating asynchronous call.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_ASYNC(): int;

    /**
     * Indicates the sendRequest API for returning the file descriptor.
     *
     * @type { number }
     * @default 16
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly TF_ACCEPT_FDS: number;

    /**
     * Indicates the sendRequest API for returning the file descriptor.
     *
     * @returns { int } Return vaule indicating the sendRequest API for returning the file descriptor.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_ACCEPT_FDS(): int;

    /**
     * Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.
     *
     * @default 4
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7
     */
    /**
     * Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.
     *
     * @type { number }
     * @default 8
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     */
    static readonly TF_WAIT_TIME: number;

    /**
     * Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.
     *
     * @returns { int } Return vaule indicating the wait time for RPC, in seconds. It is NOT used in IPC case.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_WAIT_TIME(): int;

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { number } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @param { number } waitTime - Maximum wait time for a RPC call, in seconds. The default value is TF_WAIT_TIME.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    constructor(syncFlags?: number, waitTime?: number);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { boolean } async - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     */
    constructor(async?: boolean);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { boolean } isAsync - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(isAsync: boolean);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor();

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { int } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(syncFlags: int);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { int } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @param { int } waitTime - Maximum wait time for a RPC call, in seconds. The default value is TF_WAIT_TIME.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(syncFlags: int, waitTime: int);

    /**
     * Obtains the SendRequest call flag, which can be synchronous or asynchronous.
     *
     * @returns { int } Return whether the SendRequest is called synchronously or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getFlags(): int;

    /**
     * Sets the SendRequest call flag, which can be synchronous or asynchronous.
     *
     * @param { int } flags - Indicates the call flag, which can be synchronous or asynchronous.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    setFlags(flags: int): void;

    /**
     * Obtains the SendRequest call flag, which can be synchronous or asynchronous.
     *
     * @returns { boolean } Return {@code true} if the asynchronous call succeeds;
     *                      return {@code false} if the synchronous call succeeds.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    isAsync(): boolean;

    /**
     * Sets the SendRequest call flag, which can be synchronous or asynchronous.
     *
     * @param { boolean } isAsync - Indicates the call flag, which can be synchronous or asynchronous.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setAsync(isAsync: boolean): void;

    /**
     * Obtains the maximum wait time for this RPC call.
     *
     * @returns { int } Return the maximum waiting time obtained by the RPC, in seconds. The default value is TF_WAIT_TIME.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getWaitTime(): int;

    /**
     * Sets the maximum wait time for this RPC call.
     *
     * @param { int } waitTime - Indicates the maximum waiting time for RPC, in seconds. The upper limit is 3000 seconds.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    setWaitTime(waitTime: int): void;
  }
  
  /**
   * A data object indicates the calling informations
   * 
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 23 dynamic
   * @since 23 static
   */
  class CallingInfo {
    /**
     * Indicates the pid of caller.
     * callerPid is valid only when the {@link isLocalCalling} is true. Otherwise callerPid is invalid
     * 
     * @type { number }
     * @default -1
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly callerPid: number

    /**
     * Indicates the pid of caller.
     * callerPid is valid only when the {@link isLocalCalling} is true. Otherwise callerPid is invalid
     * 
     * @returns { int } Return the pid of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerPid(): int;

    /**
     * Indicates the uid of caller.
     * callerUid is valid only when the {@link isLocalCalling} is true. Otherwise callerUid is invalid
     * 
     * @type { number }
     * @default -1
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly callerUid: number

    /**
     * Indicates the uid of caller.
     * callerUid is valid only when the {@link isLocalCalling} is true. Otherwise callerUid is invalid
     * 
     * @returns { int } Return the uid of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerUid(): int;

    /**
     * Indicates the tokenId of caller.
     * callerTokenId is valid only when the {@link isLocalCalling} is true. Otherwise callerTokenId is invalid
     * 
     * @type { number }
     * @default -1
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly callerTokenId: number

    /**
     * Indicates the tokenId of caller.
     * callerTokenId is valid only when the {@link isLocalCalling} is true. Otherwise callerTokenId is invalid
     * 
     * @returns { long } Return the tokenId of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerTokenId(): long;

    /**
     * Indicates the DeviceId of remote device.
     * remoteDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise remoteDeviceId is invalid
     * 
     * @type { string }
     * @default ""
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly remoteDeviceId: string

    /**
     * Indicates the DeviceId of remote device.
     * remoteDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise remoteDeviceId is invalid
     * 
     * @returns { string } Return the DeviceId of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get remoteDeviceId(): string;

    /**
     * Indicates the DeviceId of local device.
     * localDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise localDeviceId is invalid
     * 
     * @type { string }
     * @default ""
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly localDeviceId: string

    /**
     * Indicates the DeviceId of local device.
     * localDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise localDeviceId is invalid
     * 
     * @returns { string } Return the DeviceId of local device.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get localDeviceId(): string;

    /**
     * Indicates whether the peer process is a process of the local device.
     * 
     * @type { boolean }
     * @default true
     * @readonly
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     */
    readonly isLocalCalling: boolean

    /**
     * Indicates whether the peer process is a process of the local device.
     * 
     * @returns { boolean } Return {@code true} if the call is made on the same device; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get isLocalCalling(): boolean;
  }

  /**
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Implement remote objects. The service provider must inherit this class.
   * 
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class RemoteObject extends IRemoteObject {
    /**
     * A constructor to create a RemoteObject instance.
     *
     * @param { string } descriptor - Specifies interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    constructor(descriptor: string);

    /**
     * Queries a remote object using an interface descriptor.
     *
     * @param { string } descriptor - Indicates the interface descriptor used to query the remote object.
     * @returns { IRemoteBroker } Return the remote object matching the interface descriptor;
     *                            return null if no such remote object is found.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#getLocalInterface
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Queries a remote object using an interface descriptor.
     *
     * @param { string } descriptor - Indicates the interface descriptor used to query the remote object.
     * @returns { IRemoteBroker } Return the remote object matching the interface descriptor;
     *                            return null if no such remote object is found.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Queries an interface descriptor.
     *
     * @returns { string } Return the interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#getDescriptor
     */
    getInterfaceDescriptor(): string;

    /**
     * Queries an interface descriptor.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Sets an entry for receiving requests.
     * <p>This method is implemented by the remote service provider. You need to override this method with
     * your own service logic when you are using IPC.
     *
     * @param { int } code - Indicates the service request code sent from the peer end.
     * @param { MessageSequence } data - Indicates the {@link MessageSequence} object sent from the peer end.
     * @param { MessageSequence } reply - Indicates the response message object sent from the remote service.
     * The local service writes the response data to the {@link MessageSequence} object.
     * @param { MessageOption } options - Indicates whether the operation is synchronous or asynchronous.
     * @returns { boolean | Promise<boolean> }
     * Return a simple boolean which is {@code true} if the operation succeeds;
     * {{@code false} otherwise} when the function call is synchronous.
     * Return a promise object with a boolean when the function call is asynchronous.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): boolean | Promise<boolean>;
	
    /**
     * Sets an entry for receiving requests.
     * <p>This method is implemented by the remote service provider. You need to override this method with
     * your own service logic when you are using IPC.
     *
     * @param { int } code - Indicates the service request code sent from the peer end.
     * @param { MessageSequence } data - Indicates the {@link MessageSequence} object sent from the peer end.
     * @param { MessageSequence } reply - Indicates the response message object sent from the remote service.
     * The local service writes the response data to the {@link MessageSequence} object.
     * @param { MessageOption } options - Indicates whether the operation is synchronous or asynchronous.
     * @param { CallingInfo } callingInfo - Indicates the calling information.
     * @returns { boolean | Promise<boolean> }
     * Return a simple boolean which is {@code true} if the operation succeeds;
     * {{@code false} otherwise} when the function call is synchronous.
     * Return a promise object with a boolean when the function call is asynchronous.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 dynamic
     * @since 23 static
     */
    onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callingInfo?: CallingInfo
    ): boolean | Promise<boolean>;

    /**
     * Sets an entry for receiving requests.
     * <p>This method is implemented by the remote service provider. You need to override this method with
     * your own service logic when you are using IPC.
     *
     * @param { number } code - Indicates the service request code sent from the peer end.
     * @param { MessageParcel } data - Indicates the {@link MessageParcel} object sent from the peer end.
     * @param { MessageParcel } reply - Indicates the response message object sent from the remote service.
     * The local service writes the response data to the {@link MessageParcel} object.
     * @param { MessageOption } options - Indicates whether the operation is synchronous or asynchronous.
     * @returns { boolean } Return {@code true} if the operation succeeds; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#onRemoteMessageRequest
     */
    onRemoteRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a request to the peer object.
     * <p>If the peer object and {@code RemoteObject} are on the same device, the request is sent by the IPC driver.
     * If they are on different devices, the request is sent by the socket driver.
     *
     * @param { number } code - Indicates the message code of the request.
     * @param { MessageParcel } data - Indicates the {@link MessageParcel} object storing the data to be sent.
     * @param { MessageParcel } reply - Indicates the {@link MessageParcel} object receiving the response data.
     * @param { MessageOption } options - Indicates a synchronous (default) or asynchronous request.
     * @returns { boolean } Return {@code true} if the operation succeeds; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.rpc.RemoteObject#sendRequest
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel } reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<SendRequestResult> } Promise used to return the {@link SendRequestResult} instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * Sends a {@link MessageSequence} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendMessageRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param { MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<RequestResult> } Promise used to return the {@link RequestResult} instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel} reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * Sends a {@link MessageSequence} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendMessageRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param { MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<RequestResult> } callback - Callback for receiving the sending result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * Obtains the PID of the caller.
     * <p>This API must be called within an IPC context (onRemoteRequest/onRemoteMessagerequest). Any asynchronous
     * operations (for exaple, using await) are strictly prohibited before calling this API.
     *
     * @returns { int } Return the PID of the {@link RemoteProxy} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingPid(): int;

    /**
     * Obtains the UID of the caller.
     * <p>This API must be called within an IPC context (onRemoteRequest/onRemoteMessagerequest). Any asynchronous
     * operations (for exaple, using await) are strictly prohibited before calling this API.
     *
     * @returns { int } Return the UID of the {@link RemoteProxy} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingUid(): int;

    /**
     * Modifies the description of the current {@code RemoteObject}.
     * <p>This method is used to change the default descriptor specified during the creation of {@code RemoteObject}.
     *
     * @param { IRemoteBroker } localInterface - Indicates the {@code RemoteObject} whose descriptor is to be changed.
     * @param { string } descriptor - Indicates the new descriptor of the {@code RemoteObject}.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteObject#modifyLocalInterface
     */
    attachLocalInterface(localInterface: IRemoteBroker, descriptor: string): void;

    /**
     * Modifies the description of the current {@code RemoteObject}.
     * <p>This method is used to change the default descriptor specified during the creation of {@code RemoteObject}.
     *
     * @param { IRemoteBroker } localInterface - Indicates the {@code RemoteObject} whose descriptor is to be changed.
     * @param { string } descriptor - Indicates the new descriptor of the {@code RemoteObject}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string): void;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Implement the IRemoteObject proxy object.
   * 
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class RemoteProxy extends IRemoteObject {
    /**
     * Indicates the message code for a Ping operation.
     *
     * @type { number }
     * @default 1599098439
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly PING_TRANSACTION: number;

    /**
     * Indicates the message code for a Ping operation.
     *
     * @returns { int } Return vaule indicating the message code for a Ping operation.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PING_TRANSACTION(): int;

    /**
     * Indicates the message code for a dump operation.
     *
     * @type { number }
     * @default 1598311760
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly DUMP_TRANSACTION: number;

    /**
     * Indicates the message code for a dump operation.
     *
     * @returns { int } Return vaule indicating the message code for a dump operation.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get DUMP_TRANSACTION(): int;

    /**
     * Indicates the message code for a transmission.
     *
     * @type { number }
     * @default 1598968902
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly INTERFACE_TRANSACTION: number;

    /**
     * Indicates the message code for a transmission.
     *
     * @returns { int } Return vaule indicating the message code for a transmission.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get INTERFACE_TRANSACTION(): int;

    /**
     * Indicates the minimum value of a valid message code.
     * <p>This constant is used to check the validity of an operation.
     *
     * @type { number }
     * @default 0x1
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly MIN_TRANSACTION_ID: number;

    /**
     * Indicates the minimum value of a valid message code.
     * <p>This constant is used to check the validity of an operation.
     *
     * @returns { int } Return vaule indicating the minimum value of a valid message code.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get MIN_TRANSACTION_ID(): int;

    /**
     * Indicates the maximum value of a valid message code.
     * <p>This constant is used to check the validity of an operation.
     *
     * @type { number }
     * @default 0x00FFFFFF
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly MAX_TRANSACTION_ID: number;

    /**
     * Indicates the maximum value of a valid message code.
     * <p>This constant is used to check the validity of an operation.
     *
     * @returns { int } Return vaule indicating the maximum value of a valid message code.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get MAX_TRANSACTION_ID(): int;

    /**
     * Queries a local interface with a specified descriptor.
     *
     * @param { string } interface - Indicates the descriptor of the interface to query.
     * @returns { IRemoteBroker } Return null by default, indicating a proxy interface.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#getLocalInterface
     */
    queryLocalInterface(interface: string): IRemoteBroker;

    /**
     * Queries a local interface with a specified descriptor.
     *
     * @param { string } interfaceDes - Indicates the descriptor of the interface to query.
     * @returns { IRemoteBroker } Return null by default, indicating a proxy interface.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 1900006 - Operation allowed only for the remote object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
	 * @since 23 static
     */
    getLocalInterface(interfaceDes: string): IRemoteBroker;

    /**
     * Register a callback used to receive death notifications of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be registered.
     * @param { number } flags - Indicates the flag of the death notification. This is a reserved parameter.
     *                   Set it to {@code 0}.
     * @returns { boolean } Return {@code true} if the callback is registered successfully;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#registerDeathRecipient
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Register a callback used to receive death notifications of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be registered.
     * @param { int } flags - Indicates the flag of the death notification. This is a reserved parameter.
     *                   Set it to {@code 0}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    registerDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * Unregister a callback used to receive death notifications of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be unregister.
     * @param { number } flags - Indicates the flag of the death notification. This is a reserved parameter.
     *                   Set it to {@code 0}.
     * @returns { boolean } Return {@code true} if the callback is unregister successfully;
     *                      return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#unregisterDeathRecipient
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Unregister a callback used to receive death notifications of a remote object.
     *
     * @param { DeathRecipient } recipient - Indicates the callback to be unregister.
     * @param { int } flags - Indicates the flag of the death notification. This is a reserved parameter.
     *                   Set it to {@code 0}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * Queries the interface descriptor of remote object.
     *
     * @returns { string } Return the interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#getDescriptor
     */
    getInterfaceDescriptor(): string;

    /**
     * Queries the interface descriptor of remote object.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900007 - communication failed.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Sends a request to the peer object.
     * <p>If the peer object and {@code RemoteProxy} are on the same device, the request is sent by the IPC driver.
     * If they are on different devices, the request is sent by the socket driver.
     *
     * @param { number } code - Indicates the message code of the request.
     * @param { MessageParcel } data - Indicates the {@link MessageParcel} object storing the data to be sent.
     * @param { MessageParcel } reply - Indicates the {@link MessageParcel} object receiving the response data.
     * @param { MessageOption } options - Indicates a synchronous (default) or asynchronous request.
     * @returns { boolean } Return {@code true} if the operation succeeds; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.rpc.RemoteProxy#sendRequest
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel} reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<SendRequestResult> } Promise used to return the {@link sendRequestResult} instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * Sends a {@link MessageSequence} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a promise will be fulfilled immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a promise will be fulfilled when the response to sendMessageRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param { MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @returns { Promise<RequestResult> } Promise used to return the {@link RequestResult} instance.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * Sends a {@link MessageParcel} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { number } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageParcel } data - {@link MessageParcel} object holding the data to send.
     * @param { MessageParcel } reply - {@link MessageParcel} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.RemoteProxy#sendMessageRequest
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * Sends a {@link MessageSequence} message to the peer process in synchronous or asynchronous mode.
     * <p>If options indicates the asynchronous mode, a callback will be invoked immediately
     * and the reply message does not contain any content. If options indicates the synchronous mode,
     * a callback will be invoked when the response to sendRequest is returned,
     * and the reply message contains the returned information.
     *
     * @param { int } code - Message code called by the request, which is determined by the client and server.
     * If the method is generated by an IDL tool, the message code is automatically generated by the IDL tool.
     * @param { MessageSequence } data - {@link MessageSequence} object holding the data to send.
     * @param { MessageSequence } reply - {@link MessageSequence} object that receives the response.
     * @param { MessageOption } options - Indicates the synchronous or asynchronous mode to send messages.
     * @param { AsyncCallback<RequestResult> } callback - Callback for receiving the sending result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * Checks whether the {@code RemoteObject} corresponding to a {@code RemoteProxy} is dead.
     *
     * @returns { boolean } Return {@code true} if the {@code RemoteObject} is dead; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7
   */
  /**
   * Used to obtain IPC context information, including obtaining the UID and PID, obtaining the local and
   * peer device IDs, and checking whether the API call is on the same device.
   * 
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class IPCSkeleton {
    /**
     * Obtains a local {@link IRemoteObject} reference of a registered service.
     * <p>This method is static.
     *
     * @returns { IRemoteObject } Return an {@link IRemoteObject} reference of the registered service.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getContextObject(): IRemoteObject;

    /**
     * Obtains the PID of the caller.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest); Any asynchronous
     * operations (for exaple, using await) are strictly prohibited before calling this API.
     *
     * @returns { int } Return the PID of the proxy.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingPid(): int;

    /**
     * Obtains the UID of the caller.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest); Any asynchronous
     * operations (for exaple, using await) are strictly prohibited before calling this API.
     *
     * @returns { int } Return the UID of the proxy.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingUid(): int;

    /**
     * Obtains the TokenId of the caller.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest). Any asynchronous operations (for exaple, using await) are
     * strictly prohibited before calling this API.
     *
     * @returns { long } Return the TOKENID.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    static getCallingTokenId(): long;

    /**
     * Obtains the device ID of the caller.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest). Any asynchronous operations (for exaple, using await) are
     * strictly prohibited before calling this API.
     *
     * @returns { string } Return the ID of the device where the peer process resides.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingDeviceID(): string;

    /**
     * Obtains the local device ID.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest). Any asynchronous operations (for exaple, using await) are
     * strictly prohibited before calling this API.
     *
     * @returns { string } Return the ID of the local device.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getLocalDeviceID(): string;

    /**
     * Checks whether the peer process is a process of the local device.
     * <p>This API is a static method that must be called within an IPC context
     * (onRemoteRequest/onRemoteMessagerequest). Any asynchronous operations (for exaple, using await) are
     * strictly prohibited before calling this API.
     *
     * @returns { boolean } Return {@code true} if the call is made on the same device; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static isLocalCalling(): boolean;

    /**
     * Flush all pending commands from a specified {@link RemoteProxy} to the corresponding {@link RemoteObject}.
     * <p>This method is static. You are advised to call this method before performing any time-sensitive operations.
     *
     * @param { IRemoteObject } object - Indicates the specified {@link RemoteProxy}.
     * @returns { number } Return {@code 0} if the operation succeeds; return an error code if the input object
     *                     is empty or {@link RemoteObject}, or the operation fails.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IPCSkeleton#flushCmdBuffer
     */
    static flushCommands(object: IRemoteObject): number;

    /**
     * Flush all pending commands from a specified {@link RemoteProxy} to the corresponding {@link RemoteObject}.
     * <p>This method is static. You are advised to call this method before performing any time-sensitive operations.
     *
     * @param { IRemoteObject } object - Indicates the specified {@link RemoteProxy}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static flushCmdBuffer(object: IRemoteObject): void;

    /**
     * Replaces the UID and PID of the remote user with those of the local user.
     * <p>This method is static. It can be used in scenarios like authentication.
     *
     * @returns { string } Return a string containing the UID and PID of the remote user.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static resetCallingIdentity(): string;

    /**
     * Restore the UID and PID to those of the remote user.
     * <p>This method is static. It is usually called after {@code resetCallingIdentity} is used
     * and requires the UID and PID of the remote user returned by {@code resetCallingIdentity}.
     *
     * @param { string } identity - Indicates the string containing the UID and PID of the remote user,
     *                   which is returned by {@code resetCallingIdentity}.
     * @returns { boolean } Return {@code true} if the operation succeeds; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.IPCSkeleton#restoreCallingIdentity
     */
    static setCallingIdentity(identity: string): boolean;

    /**
     * Restore the UID and PID to those of the remote user.
     * <p>This method is static. It is usually called after {@code resetCallingIdentity} is used
     * and requires the UID and PID of the remote user returned by {@code resetCallingIdentity}.
     *
     * @param { string } identity - Indicates the string containing the UID and PID of the remote user,
     *                   which is returned by {@code resetCallingIdentity}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static restoreCallingIdentity(identity: string): void;
  }

  /**
   * Provides methods related to anonymous shared memory objects,
   * including creating, closing, mapping, and unmapping an Ashmem object,
   * reading data from and writing data to an Ashmem object,
   * obtaining the Ashmem size, and setting Ashmem protection.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamic
   * @since 23 static
   */
  class Ashmem {
    /**
     * The mapped memory is executable.
     *
     * @type { number }
     * @default 4
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_EXEC: number;

    /**
     * The mapped memory is executable.
     *
     * @returns { int } Return vaule indicating the mapped memory is executable.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_EXEC(): int;

    /**
     * The mapped memory is inaccessible.
     *
     * @type { number }
     * @default 0
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_NONE: number;

    /**
     * The mapped memory is inaccessible.
     *
     * @returns { int } Return vaule indicating the mapped memory is inaccessible.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_NONE(): int;

    /**
     * The mapped memory is readable.
     *
     * @type { number }
     * @default 1
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_READ: number;

    /**
     * The mapped memory is readable.
     *
     * @returns { int } Return vaule indicating the mapped memory is readable.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_READ(): int;

    /**
     * The mapped memory is writable.
     *
     * @type { number }
     * @default 2
     * @readonly
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_WRITE: number;

    /**
     * The mapped memory is writable.
     *
     * @returns { int } Return vaule indicating the mapped memory is writable.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_WRITE(): int;

    /**
     * Creates an Ashmem object with the specified name and size.
     *
     * @param { string } name - Name of the Ashmem object to create.
     * @param { number } size - Size (in bytes) of the Ashmem object to create.
     * @returns { Ashmem } Return the Ashmem object if it is created successfully; return null otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#create
     */
    static createAshmem(name: string, size: number): Ashmem;

    /**
     * Creates an Ashmem object with the specified name and size.
     *
     * @param { string } name - Name of the Ashmem object to create.
     * @param { int } size - Size (in bytes) of the Ashmem object to create.
     * @returns { Ashmem } Return the Ashmem object if it is created successfully; return null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The Ashmem name passed is empty;
     *     4.The Ashmem size passed is less than or equal to 0.
     * @static
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(name: string, size: int): Ashmem;

    /**
     * Creates an Ashmem object by copying the file descriptor (FD) of an existing Ashmem object.
     * The two Ashmem objects point to the same shared memory region.
     *
     * @param { Ashmem } ashmem - Existing Ashmem object.
     * @returns { Ashmem } Ashmem object created.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#create
     */
    static createAshmemFromExisting(ashmem: Ashmem): Ashmem;

    /**
     * Creates an Ashmem object by copying the file descriptor (FD) of an existing Ashmem object.
     * The two Ashmem objects point to the same shared memory region.
     *
     * @param { Ashmem } ashmem - Existing Ashmem object.
     * @returns { Ashmem } Ashmem object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The passed parameter is not an Ashmem object;
     *     3.The ashmem instance for obtaining packaging is empty.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(ashmem: Ashmem): Ashmem;

    /**
     * Closes this Ashmem object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    closeAshmem(): void;

    /**
     * Deletes the mappings for the specified address range of this Ashmem object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    unmapAshmem(): void;

    /**
     * Obtains the mapped memory size of this Ashmem object.
     *
     * @returns { int } Memory size mapped.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    getAshmemSize(): int;

    /**
     * Creates the shared file mapping on the virtual address space of this process.
     * The size of the mapping region is specified by this Ashmem object.
     *
     * @param { number } mapType - Protection level of the memory region to which the shared file is mapped.
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#mapTypedAshmem
     */
    mapAshmem(mapType: number): boolean;

    /**
     * Creates the shared file mapping on the virtual address space of this process.
     * The size of the mapping region is specified by this Ashmem object.
     *
     * @param { int } mapType - Protection level of the memory region to which the shared file is mapped.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The passed mapType exceeds the maximum protection level.
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapTypedAshmem(mapType: int): void;

    /**
     * Maps the shared file to the readable and writable virtual address space of the process.
     *
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#mapReadWriteAshmem
     */
    mapReadAndWriteAshmem(): boolean;

    /**
     * Maps the shared file to the readable and writable virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadWriteAshmem(): void;

    /**
     * Maps the shared file to the read-only virtual address space of the process.
     *
     * @returns { boolean } Return {@code true} if the operation is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#mapReadonlyAshmem
     */
    mapReadOnlyAshmem(): boolean;

    /**
     * Maps the shared file to the read-only virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadonlyAshmem(): void;

    /**
     * Sets the protection level of the memory region to which the shared file is mapped.
     *
     * @param { number } protectionType - Protection type to set.
     * @returns { boolean } Return true if the operation is successful; return false otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#setProtectionType
     */
    setProtection(protectionType: number): boolean;

    /**
     * Sets the protection level of the memory region to which the shared file is mapped.
     *
     * @param { int } protectionType - Protection type to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900002 - Failed to call ioctl.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setProtectionType(protectionType: int): void;

    /**
     * Writes data to the shared file associated with this Ashmem object.
     *
     * @param { number[] } buf - Data to write.
     * @param { number } size - Size of the data to write.
     * @param { number } offset - Start position of the data to write in the memory region associated
     *                   with this Ashmem object.
     * @returns { boolean } Return {@code true} is the data is written successfully; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#writeAshmem
     */
    writeToAshmem(buf: number[], size: number, offset: number): boolean;

    /**
     * Writes data to the shared file associated with this Ashmem object.
     *
     * @param { number[] } buf - Data to write
     * @param { number } size - Size of the data to write
     * @param { number } offset - Start position of the data to write in the memory region associated
     *                   with this Ashmem object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The element does not exist in the array.
     * @throws { BusinessError } 1900003 - Failed to write data to the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.rpc.Ashmem#writeDataToAshmem
     */
    writeAshmem(buf: number[], size: number, offset: number): void;

    /**
     * Writes data to the shared file associated with this Ashmem object.
     *
     * @param { ArrayBuffer } buf - Data to write
     * @param { int } size - Size of the data to write
     * @param { int } offset - Start position of the data to write in the memory region associated
     *                   with this Ashmem object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain arrayBuffer information.
     * @throws { BusinessError } 1900003 - Failed to write data to the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int): void;

    /**
     * Reads data from the shared file associated with this Ashmem object.
     *
     * @param { number } size - Size of the data to read.
     * @param { number } offset - Start position of the data to read in the memory region associated
     *                   with this Ashmem object.
     * @returns { number[] } Data read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.rpc.Ashmem#readAshmem
     */
    readFromAshmem(size: number, offset: number): number[];

    /**
     * Reads data from the shared file associated with this Ashmem object.
     *
     * @param { number } size - Size of the data to read.
     * @param { number } offset - Start position of the data to read in the memory region associated
     *                   with this Ashmem object.
     * @returns { number[] } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900004 - Failed to read data from the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.rpc.Ashmem#readDataFromAshmem
     */
    readAshmem(size: number, offset: number): number[];

    /**
     * Reads data from the shared file associated with this Ashmem object.
     *
     * @param { int } size - Size of the data to read.
     * @param { int } offset - Start position of the data to read in the memory region associated
     *                   with this Ashmem object.
     * @returns { ArrayBuffer } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900004 - Failed to read data from the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    readDataFromAshmem(size: int, offset: int): ArrayBuffer;
  }
}

export default rpc;
