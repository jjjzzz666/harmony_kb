/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (The type of "License");
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
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.
 *
 * @namespace buffer
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.
 *
 * @namespace buffer
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.
 *
 * @namespace buffer
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace buffer {
  /**
   * This parameter specifies the type of a common encoding format.
   *
   * @typedef { 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex' }
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * This parameter specifies the type of a common encoding format.
   *
   * @typedef { 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex' }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * This parameter specifies the type of a common encoding format.
   *
   * @typedef { 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex' }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type BufferEncoding =
    | 'ascii'
    | 'utf8'
    | 'utf-8'
    | 'utf16le'
    | 'ucs2'
    | 'ucs-2'
    | 'base64'
    | 'base64url'
    | 'latin1'
    | 'binary'
    | 'hex';
  /**
   * TypedArray inherits the features and methods of Int8Array
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * TypedArray inherits the features and methods of Int8Array
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * TypedArray inherits the features and methods of Int8Array
   * 
   * @extends Int8Array
   * @typedef TypedArray
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  interface TypedArray extends Int8Array {}
  /**
   * TypedArray  features and methods
   * 
   * @typedef { Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  type TypedArray = Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array
    | BigInt64Array
    | BigUint64Array;

  /**
   * ArrayUnionType features and methods
   *
   * @typedef { Array<Int8Array> | Array<Uint8Array> | Array<Uint8ClampedArray> | Array<Int16Array> | Array<Uint16Array> | Array<Int32Array> |
   * Array<Uint32Array> | Array<Float32Array> | Array<Float64Array> | Array<BigInt64Array> | Array<BigUint64Array> | Array<string> |
   * Array<ArrayBuffer> | Array<DataView> | Array<Blob>}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  type ArrayUnionType =  Array<Int8Array>
    | Array<Uint8Array>
    | Array<Uint8ClampedArray>
    | Array<Int16Array>
    | Array<Uint16Array>
    | Array<Int32Array>
    | Array<Uint32Array>
    | Array<Float32Array>
    | Array<Float64Array>
    | Array<BigInt64Array>
    | Array<BigUint64Array>
    | Array<string>
    | Array<ArrayBuffer>
    | Array<DataView>
    | Array<Blob>;

  /**
   * Allocates a new Buffer for a fixed size bytes. If fill is undefined, the Buffer will be zero-filled.
   *
   * @param { number } size - size size The desired length of the new Buffer
   * @param { string | Buffer | number } [fill] - fill [fill=0] A value to pre-fill the new Buffer with
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8']  If `fill` is a string, this is its encoding
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 9 dynamic
   */
  /**
   * Creates and initializes a Buffer instance of the specified length.
   *
   * @param { number } size - Size of the Buffer instance to create, in bytes.
   * @param { string | Buffer | number } [fill] - Value to be filled in the buffer. The default value is 0.
   * @param { BufferEncoding } [encoding] - Encoding format (valid only when fill is a string). The default value is 'utf8'.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10 dynamic
   */
  /**
   * Creates and initializes a Buffer instance of the specified length.
   *
   * @param { int } size - Size of the Buffer instance to create, in bytes.
   * @param { string | Buffer | int | double | long } [fill] - Value to be filled in the buffer. The default value is 0.
   * @param { BufferEncoding } [encoding] - Encoding format (valid only when fill is a string). The default value is 'utf8'.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer;

  /**
   * Allocates a new Buffer for a fixed size bytes. The Buffer will not be initially filled.
   *
   * @param { number } size - size size The desired length of the new Buffer
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Creates a Buffer instance of the specified size from the buffer pool, without initializing it.
   * You need to use fill() to initialize the Buffer instance created.   
   *
   * @param { number } size - Size of the Buffer instance to create, in bytes.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Creates a Buffer instance of the specified size from the buffer pool, without initializing it.
   * You need to use fill() to initialize the Buffer instance created.   
   *
   * @param { int } size - Size of the Buffer instance to create, in bytes.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function allocUninitializedFromPool(size: int): Buffer;

  /**
   * Allocates a new un-pooled Buffer for a fixed size bytes. The Buffer will not be initially filled.
   *
   * @param { number } size - size size The desired length of the new Buffer
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Creates a Buffer instance of the specified size, without initializing it. 
   *
   * @param { number } size - Size of the Buffer instance to create, in bytes.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Creates a Buffer instance of the specified size, without initializing it. 
   *
   * @param { int } size - Size of the Buffer instance to create, in bytes.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function allocUninitialized(size: int): Buffer;

  /**
   * Returns the byte length of a string when encoded using `encoding`.
   * This is not the same as [`String.prototype.length`], which does not account
   * for the encoding that is used to convert the string into bytes.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } string - string string A value to calculate the length of
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] If `string` is a string, this is its encoding
   * @returns { number } The number of bytes contained within `string`
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Returns the byte length of a string when encoded using `encoding`.
   * This is not the same as [`String.prototype.length`], which does not account
   * for the encoding that is used to convert the string into bytes.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } string - string string A value to calculate the length of
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] If `string` is a string, this is its encoding
   * @returns { number } The number of bytes contained within `string`
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the number of bytes of a string based on the encoding format.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } string - Target string.
   * @param { BufferEncoding } [encoding] - Encoding format of the string. The default value is 'utf8'.
   * @returns { number } The number of bytes contained within `string`
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number;

  /**
   * Obtains the number of bytes of a string based on the encoding format.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer } doc - Target string.
   * @param { BufferEncoding } [encoding] - Encoding format of the string. The default value is 'utf8'.
   * @returns { int } The number of bytes contained within `string`
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function byteLength(
    doc: string | Buffer | TypedArray | DataView | ArrayBuffer,
    encoding?: BufferEncoding
  ): int

  /**
   * Returns a new `Buffer` which is the result of concatenating all the `Buffer`instances in the `list` together.
   *
   * @param { Buffer[] | Uint8Array[] } list - list list List of `Buffer` or Uint8Array instances to concatenate
   * @param { number } [totalLength] - totalLength totalLength Total length of the `Buffer` instances in `list` when concatenated
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of "length" is out of range. It must be >= 0 and <= uint32 max. Received value is: [length]
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Concatenates an array of Buffer instances of the specified length into a new instance.
   *
   * @param { Buffer[] | Uint8Array[] } list - Array of instances to concatenate.
   * @param { number } [totalLength] - Total length of bytes to be copied. The default value is 0.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of "length" is out of range. It must be >= 0 and <= uint32 max. Received value is: [length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Concatenates an array of Buffer instances of the specified length into a new instance.
   *
   * @param { Buffer[] | Uint8Array[] } list - Array of instances to concatenate.
   * @param { int } [totalLength] - Total length of bytes to be copied. The default value is 0.
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types;
   * 3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of "length" is out of range. It must be >= 0 and <= uint32 max. Received value is: [length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function concat(list: Buffer[] | Uint8Array[], totalLength?: int): Buffer;

  /**
   * Allocates a new Buffer using an array of bytes in the range 0 – 255. Array entries outside that range will be truncated to fit into it.
   *
   * @param { number[] } array - array array an array of bytes in the range 0 – 255
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Allocates a new Buffer using an array of bytes in the range 0 – 255. Array entries outside that range will be truncated to fit into it.
   *
   * @param { number[] } array - array array an array of bytes in the range 0 – 255
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Allocates a new Buffer using an array of bytes in the range 0 – 255. Array entries outside that range will be truncated to fit into it.
   *
   * @param { double[] } array - array array an array of bytes in the range 0 – 255
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function from(array: double[]): Buffer;

  /**
   * This creates a view of the ArrayBuffer without copying the underlying memory.
   *
   * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - arrayBuffer arrayBuffer An ArrayBuffer, 
   * SharedArrayBuffer, for example the .buffer property of a TypedArray.
   * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Index of first byte to expose
   * @param { number } [length] - length [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
   * @returns { Buffer } Return a view of the ArrayBuffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   * It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * This creates a view of the ArrayBuffer without copying the underlying memory.
   *
   * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - arrayBuffer arrayBuffer An ArrayBuffer, 
   * SharedArrayBuffer, for example the .buffer property of a TypedArray.
   * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Index of first byte to expose
   * @param { number } [length] - length [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
   * @returns { Buffer } Return a view of the ArrayBuffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   * It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * This creates a view of the ArrayBuffer without copying the underlying memory.
   *
   * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - arrayBuffer arrayBuffer An ArrayBuffer, 
   * SharedArrayBuffer, for example the .buffer property of a TypedArray.
   * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Index of first byte to expose
   * @param { number } [length] - length [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
   * @returns { Buffer } Return a view of the ArrayBuffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   * It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;

  /**
   * This creates a view of the ArrayBuffer without copying the underlying memory.
   *
   * @param { ArrayBuffer } arrayBuffer - arrayBuffer arrayBuffer An ArrayBuffer, 
   * @param { int } [byteOffset] - byteOffset [byteOffset = 0] Index of first byte to expose
   * @param { int } [length] - length [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
   * @returns { Buffer } Return a view of the ArrayBuffer
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   *     It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function from(arrayBuffer: ArrayBuffer, byteOffset?: int, length?: int): Buffer;

  /**
   * Copies the passed buffer data onto a new Buffer instance.
   *
   * @param { Buffer | Uint8Array } buffer - buffer buffer An existing Buffer or Uint8Array from which to copy data
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Copies the passed buffer data onto a new Buffer instance.
   *
   * @param { Buffer | Uint8Array } buffer - buffer buffer An existing Buffer or Uint8Array from which to copy data
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Copies the passed buffer data onto a new Buffer instance.
   *
   * @param { Buffer | Uint8Array } buffer - buffer buffer An existing Buffer or Uint8Array from which to copy data
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function from(buffer: Buffer | Uint8Array): Buffer;

  /**
   * For the object whose value returned by valueof() function is strictly equal to object
   * or supports symbol To primitive object, a new buffer instance is created.
   *
   * @param { Object } object - object object An object supporting Symbol.toPrimitive or valueOf()
   * @param { number | string } offsetOrEncoding - offsetOrEncoding offsetOrEncoding A byte-offset or encoding
   * @param { number } length - length length A length
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * For the object whose value returned by valueof() function is strictly equal to object
   * or supports symbol To primitive object, a new buffer instance is created.
   *
   * @param { Object } object - object object An object supporting Symbol.toPrimitive or valueOf()
   * @param { number | string } offsetOrEncoding - offsetOrEncoding offsetOrEncoding A byte-offset or encoding
   * @param { number } length - length length A length
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * For the object whose value returned by valueof() function is strictly equal to object
   * or supports symbol To primitive object, a new buffer instance is created.
   *
   * @param { Object } object - object object An object supporting Symbol.toPrimitive or valueOf()
   * @param { int | string } offsetOrEncoding - offsetOrEncoding offsetOrEncoding A byte-offset or encoding
   * @param { int } length - length length A length
   * @returns { Buffer } Return a new allocated Buffer
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function from(object: Object, offsetOrEncoding: int | string, length: int): Buffer

  /**
   * Creates a new Buffer containing string. The encoding parameter identifies the character encoding
   * to be used when converting string into bytes.
   *
   * @param { String } string - string string  A string to encode
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The encoding of string
   * @returns { Buffer } Return a new Buffer containing string
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Creates a new Buffer containing string. The encoding parameter identifies the character encoding
   * to be used when converting string into bytes.
   *
   * @param { String } string - string string  A string to encode
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The encoding of string
   * @returns { Buffer } Return a new Buffer containing string
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Creates a new Buffer containing string. The encoding parameter identifies the character encoding
   * to be used when converting string into bytes.
   *
   * @param { String } string - string string  A string to encode
   * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The encoding of string
   * @returns { Buffer } Return a new Buffer containing string
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function from(string: String, encoding?: BufferEncoding): Buffer;

  /**
   * Returns true if obj is a Buffer, false otherwise
   *
   * @param { Object } obj - obj obj Objects to be judged
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Checks whether the specified object is a Buffer instance.
   *
   * @param { Object } obj - Object to check.
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether the specified object is a Buffer instance.
   *
   * @param { Object } obj - Object to check.
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isBuffer(obj: Object): boolean;

  /**
   * Returns true if encoding is the name of a supported character encoding, or false otherwise.
   *
   * @param { string } encoding - encoding encoding A character encoding name to check
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Checks whether the encoding format is supported.
   *
   * @param { string } encoding - Encoding format.
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether the encoding format is supported.
   *
   * @param { string } encoding - Encoding format.
   * @returns { boolean } true or false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isEncoding(encoding: string): boolean;

  /**
   * Compares buf1 to buf2
   *
   * @param { Buffer | Uint8Array } buf1 - buf1 buf1 A Buffer or Uint8Array instance.
   * @param { Buffer | Uint8Array } buf2 - buf2 buf2 A Buffer or Uint8Array instance.
   * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
   *         1 is returned if target should come before buf when sorted.
   *        -1 is returned if target should come after buf when sorted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Compares buf1 to buf2
   *
   * @param { Buffer | Uint8Array } buf1 - buf1 buf1 A Buffer or Uint8Array instance.
   * @param { Buffer | Uint8Array } buf2 - buf2 buf2 A Buffer or Uint8Array instance.
   * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
   *         1 is returned if target should come before buf when sorted.
   *        -1 is returned if target should come after buf when sorted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Compares buf1 to buf2
   *
   * @param { Buffer | Uint8Array } buf1 - buf1 buf1 A Buffer or Uint8Array instance.
   * @param { Buffer | Uint8Array } buf2 - buf2 buf2 A Buffer or Uint8Array instance.
   * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
   *         1 is returned if target should come before buf when sorted.
   *        -1 is returned if target should come after buf when sorted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): -1 | 0 | 1;

  /**
   * Compares buf1 to buf2
   *
   * @param { Buffer | Uint8Array } buf1 - buf1 buf1 A Buffer or Uint8Array instance.
   * @param { Buffer | Uint8Array } buf2 - buf2 buf2 A Buffer or Uint8Array instance.
   * @returns { int } 0 is returned if target is the same as buf
   *     1 is returned if target should come before buf when sorted.
   *     -1 is returned if target should come after buf when sorted.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): int;

  /**
   * Re-encodes the given Buffer or Uint8Array instance from one character encoding to another.
   *
   * @param { Buffer | Uint8Array } source - source source A Buffer or Uint8Array instance.
   * @param { string } fromEnc - fromEnc fromEnc The current encoding
   * @param { string } toEnc - toEnc toEnc To target encoding
   * @returns { Buffer } Returns a new Buffer instance
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Transcodes the given Buffer or Uint8Array object from one encoding format to another.
   *
   * @param { Buffer | Uint8Array } source - Instance to encode.
   * @param { string } fromEnc - Current encoding format
   * @param { string } toEnc - Target encoding format.
   * @returns { Buffer } Returns a new Buffer instance
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Transcodes the given Buffer or Uint8Array object from one encoding format to another.
   *
   * @param { Buffer | Uint8Array } source - Instance to encode.
   * @param { string } fromEnc - Current encoding format
   * @param { string } toEnc - Target encoding format.
   * @returns { Buffer } Returns a new Buffer instance
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer;


  /**
   * The Buffer object is a method of handling buffers dedicated to binary data.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * The Buffer object is a method of handling buffers dedicated to binary data.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * The Buffer object is a method of handling buffers dedicated to binary data.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class Buffer {
    /**
     * Returns the number of bytes in buf
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - Length  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the number of bytes in buf
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - Length  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Returns the number of bytes in buf
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - Length  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    length: number;

    /**
     * Gets the element number of the buffer.
     *
     * @type { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get length(): int;

    /**
     * The underlying ArrayBuffer object based on which this Buffer object is created.
     *
     * @type { ArrayBuffer }
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The underlying ArrayBuffer object based on which this Buffer object is created.
     *
     * @type { ArrayBuffer }
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * The underlying ArrayBuffer object based on which this Buffer object is created.
     *
     * @type { ArrayBuffer }
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    buffer: ArrayBuffer;

    /**
     * The underlying ArrayBuffer object based on which this Buffer object is created.
     *
     * @type { ArrayBuffer }
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get buffer(): ArrayBuffer;

    /**
     * The byteOffset of the Buffers underlying ArrayBuffer object
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The byteOffset of the Buffers underlying ArrayBuffer object
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * The byteOffset of the Buffers underlying ArrayBuffer object
     *
     * @type { number }
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    byteOffset: number;

    /**
     * The byteOffset of the Buffers underlying ArrayBuffer object
     *
     * @type { int }
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get byteOffset(): int;

    /**
     * Fills buf with the specified value. If the offset and end are not given, the entire buf will be filled.
     *
     * @param { string | Buffer | Uint8Array | number } value - value value The value with which to fill buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to fill buf
     * @param { number } [end] - end [end = buf.length] Where to stop filling buf (not inclusive)
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The encoding for value if value is a string
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200001 - The value of "[offset/end]" is out of range. It must be >= 0 and <= [right range]. Received value is: [offset/end]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 9 dynamic
     */
    /**
     * Fills this Buffer instance at the specified position. By default, data is filled cyclically.
     *
     * @param { string | Buffer | Uint8Array | number } value - Value to fill.
     * @param { number } [offset] - Offset to the start position in this Buffer instance where data is filled. The default value is 0.
     * @param { number } [end] - Offset to the end position in this Buffer instance (not inclusive). The default value is the length of this Buffer instance.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200001 - The value of "[offset/end]" is out of range. It must be >= 0 and <= [right range]. Received value is: [offset/end]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Fills this Buffer instance at the specified position. By default, data is filled cyclically.
     *
     * @param { string | Buffer | Uint8Array | int | double | long } value - Value to fill.
     * @param { int } [offset] - Offset to the start position in this Buffer instance where data is filled. The default value is 0.
     * @param { int } [end] - Offset to the end position in this Buffer instance (not inclusive). The default value is the length of this Buffer instance.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200001 - The value of "[offset/end]" is out of range. It must be >= 0 and <= [right range]. Received value is: [offset/end]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Incorrect parameter types;
     * 2.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    fill(
      value: string | Buffer | Uint8Array | int | double | long,
      offset?: int,
      end?: int,
      encoding?: BufferEncoding
    ): Buffer;

    /**
     * Compares buf with target and returns a number indicating whether buf comes before, after,
     * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array with which to compare buf
     * @param { number } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin comparison
     * @param { number } [targetEnd] - targetEnd [targetEnd = target.length] The offset within target at which to end comparison (not inclusive)
     * @param { number } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf at which to begin comparison
     * @param { number } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to end comparison (not inclusive)
     * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
     *         1 is returned if target should come before buf when sorted.
     *        -1 is returned if target should come after buf when sorted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of range.
     *         It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Compares buf with target and returns a number indicating whether buf comes before, after,
     * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array with which to compare buf
     * @param { number } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin comparison
     * @param { number } [targetEnd] - targetEnd [targetEnd = target.length] The offset within target at which to end comparison (not inclusive)
     * @param { number } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf at which to begin comparison
     * @param { number } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to end comparison (not inclusive)
     * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
     *         1 is returned if target should come before buf when sorted.
     *        -1 is returned if target should come after buf when sorted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of range.
     *         It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Compares buf with target and returns a number indicating whether buf comes before, after,
     * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array with which to compare buf
     * @param { number } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin comparison
     * @param { number } [targetEnd] - targetEnd [targetEnd = target.length] The offset within target at which to end comparison (not inclusive)
     * @param { number } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf at which to begin comparison
     * @param { number } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to end comparison (not inclusive)
     * @returns { -1 | 0 | 1 } 0 is returned if target is the same as buf
     *         1 is returned if target should come before buf when sorted.
     *        -1 is returned if target should come after buf when sorted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of range.
     *         It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    compare(
      target: Buffer | Uint8Array,
      targetStart?: number,
      targetEnd?: number,
      sourceStart?: number,
      sourceEnd?: number
    ): -1 | 0 | 1;

    /**
     * Compares buf with target and returns a number indicating whether buf comes before, after,
     * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array with which to compare buf
     * @param { int } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin comparison
     * @param { int } [targetEnd] - targetEnd [targetEnd = target.length] The offset within target at which to end comparison (not inclusive)
     * @param { int } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf at which to begin comparison
     * @param { int } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to end comparison (not inclusive)
     * @returns { int } number is returned if target is the same as buf
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of range.
     *         It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    compare(
      target: Buffer | Uint8Array,
      targetStart?: int,
      targetEnd?: int,
      sourceStart?: int,
      sourceEnd?: int
    ): int

    /**
     * Copies data from a region of buf to a region in target, even if the target memory region overlaps with buf.
     * If sourceEnd is greater than the length of the target, the length of the target shall prevail, and the extra part will not be overwritten.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array to copy into
     * @param { number } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin writing
     * @param { number } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf from which to begin copying
     * @param { number } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to stop copying (not inclusive)
     * @returns { number } The number of bytes copied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/sourceStart/sourceEnd]" is out of range. It must be >= 0.
     *                                    Received value is: [targetStart/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Copies data at the specified position in this Buffer instance to the specified position in another Buffer instance.
     *
     * @param { Buffer | Uint8Array } target - Instance to which data is copied.
     * @param { number } [targetStart] - Offset to the start position in the target instance where data is copied. The default value is 0.
     * @param { number } [sourceStart] - Offset to the start position in this Buffer instance where data is copied. The default value is 0.
     * @param { number } [sourceEnd] - Offset to the end position in this Buffer instance (not inclusive).
     * The default value is the length of this Buffer instance.
     * @returns { number } The number of bytes copied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/sourceStart/sourceEnd]" is out of range. It must be >= 0.
     *                                    Received value is: [targetStart/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Copies data at the specified position in this Buffer instance to the specified position in another Buffer instance.
     *
     * @param { Buffer | Uint8Array } target - Instance to which data is copied.
     * @param { int } [targetStart] - Offset to the start position in the target instance where data is copied. The default value is 0.
     * @param { int } [sourceStart] - Offset to the start position in this Buffer instance where data is copied. The default value is 0.
     * @param { int } [sourceEnd] - Offset to the end position in this Buffer instance (not inclusive).
     * The default value is the length of this Buffer instance.
     * @returns { int } The number of bytes copied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/sourceStart/sourceEnd]" is out of range. It must be >= 0.
     *                                    Received value is: [targetStart/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    copy(target: Buffer | Uint8Array, targetStart?: int, sourceStart?: int, sourceEnd?: int): int

    /**
     * Returns true if both buf and otherBuffer have exactly the same bytes, false otherwise
     *
     * @param { Uint8Array | Buffer } otherBuffer - otherBuffer otherBuffer A Buffer or Uint8Array with which to compare buf
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether this Buffer instance is the same as another Buffer instance.
     *
     * @param { Uint8Array | Buffer } otherBuffer - Buffer instance to compare.
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether this Buffer instance is the same as another Buffer instance.
     *
     * @param { Uint8Array | Buffer } otherBuffer - Buffer instance to compare.
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    equals(otherBuffer: Uint8Array | Buffer): boolean;

    /**
     * Returns true if value was found in buf, false otherwise
     *
     * @param { string | number | Buffer | Uint8Array } value - value value What to search for
     * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Where to begin searching in buf. If negative, then offset is calculated from the end of buf
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] If value is a string, this is its encoding
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9 dynamic
     */
    /**
     * Checks whether this Buffer instance contains the specified value.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match.
     * @param { number } [byteOffset] - Number of bytes to skip before starting to check data.
     * Number of bytes to skip before starting to check data. If the offset is a negative number,
     * data is checked from the end of the Buffer instance. The default value is 0.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Checks whether this Buffer instance contains the specified value.
     *
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match.
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data.
     * Number of bytes to skip before starting to check data. If the offset is a negative number,
     * data is checked from the end of the Buffer instance. The default value is 0.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { boolean } true or false
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    includes(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): boolean;

    /**
     * The index of the first occurrence of value in buf
     *
     * @param { string | number | Buffer | Uint8Array } value - value value What to search for
     * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Where to begin searching in buf
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] If value is a string,
     * this is the encoding used to determine the binary representation of the string that will be searched for in buf
     * @returns { number } The index of the first occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9 dynamic
     */
    /**
     * Obtains the index of the first occurrence of the specified value in this Buffer instance.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match.
     * @param { number } [byteOffset] - Number of bytes to skip before starting to check data.
     * If the offset is a negative number, data is checked from the end of the Buffer instance. The default value is 0.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { number } The index of the first occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Obtains the index of the first occurrence of the specified value in this Buffer instance.
     *
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match.
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data.
     * If the offset is a negative number, data is checked from the end of the Buffer instance. The default value is 0.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { int } The index of the first occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    indexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * Creates and returns an iterator of buf keys (indices).
     *
     * @returns { IterableIterator<number> }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates and returns an iterator that contains the keys of this Buffer instance.
     *
     * @returns { IterableIterator<number> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates and returns an iterator that contains the keys of this Buffer instance.
     *
     * @returns { IterableIterator<int> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    keys(): IterableIterator<int>;

    /**
     * Creates and returns an iterator for buf values (bytes).
     *
     * @returns { IterableIterator<number> }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates and returns an iterator that contains the values of this Buffer instance.
     *
     * @returns { IterableIterator<number> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates and returns an iterator that contains the values of this Buffer instance.
     *
     * @returns { IterableIterator<long> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    values(): IterableIterator<long>;

    /**
     * Creates and returns an iterator of [index, byte] pairs from the contents of buf.
     *
     * @returns { IterableIterator<[number, number]> }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates and returns an iterator that contains key-value pairs of this Buffer instance.
     *
     * @returns { IterableIterator<[number, number]> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates and returns an iterator that contains key-value pairs of this Buffer instance.
     *
     * @returns { IterableIterator<[int, long]> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    entries(): IterableIterator<[int, long]>;

    /**
     * The index of the last occurrence of value in buf
     *
     * @param { string | number | Buffer | Uint8Array } value - value value What to search for
     * @param { number } [byteOffset] - byteOffset [byteOffset = 0] Where to begin searching in buf
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] If value is a string,
     * this is the encoding used to determine the binary representation of the string that will be searched for in buf
     * @returns { number } The index of the last occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9 dynamic
     */
    /**
     * Obtains the index of the last occurrence of the specified value in this Buffer instance.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match.
     * @param { number } [byteOffset] - Number of bytes to skip before starting to check data.
     * If the offset is a negative number, data is checked from the end of the Buffer instance.
     * The default value is the length of this Buffer instance.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * this is the encoding used to determine the binary representation of the string that will be searched for in buf
     * @returns { number } The index of the last occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Obtains the index of the last occurrence of the specified value in this Buffer instance.
     *
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match.
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data.
     * If the offset is a negative number, data is checked from the end of the Buffer instance.
     * The default value is the length of this Buffer instance.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @returns { int } The index of the last occurrence of value in buf, or -1 if buf does not contain value
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    lastIndexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * Reads a signed, big-endian 64-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { bigint } Return a signed, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, big-endian, signed big integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a signed, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, big-endian, signed big integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a signed, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readBigInt64BE(offset?: int): bigint;

    /**
     * Reads a signed, little-endian 64-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { bigint } Return a signed, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, little-endian, signed big integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a signed, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, little-endian, signed big integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a signed, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readBigInt64LE(offset?: int): bigint;

    /**
     * Reads a unsigned, big-endian 64-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { bigint } Return a unsigned, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, big-endian, unsigned big integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a unsigned, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, big-endian, unsigned big integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a unsigned, big-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readBigUInt64BE(offset?: int): bigint;

    /**
     * Reads a unsigned, little-endian 64-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { bigint } Return a unsigned, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, little-endian, unsigned big integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a unsigned, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, little-endian, unsigned big integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { bigint } Return a unsigned, little-endian 64-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readBigUInt64LE(offset?: int): bigint;

    /**
     * Reads a 64-bit, big-endian double from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } Return a 64-bit, big-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, big-endian, double-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } Return a 64-bit, big-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, big-endian, double-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { double } Return a 64-bit, big-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readDoubleBE(offset?: int): double;

    /**
     * Reads a 64-bit, little-endian double from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } Return a 64-bit, little-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 64-bit, little-endian, double-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } Return a 64-bit, little-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 64-bit, little-endian, double-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { double } Return a 64-bit, little-endian double
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readDoubleLE(offset?: int): double;

    /**
     * Reads a 32-bit, big-endian float from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } Return a 32-bit, big-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, big-endian, single-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Return a 32-bit, big-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, big-endian, single-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { double } Return a 32-bit, big-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readFloatBE(offset?: int): double;

    /**
     * Reads a 32-bit, little-endian float from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } Return a 32-bit, little-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, little-endian, single-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Return a 32-bit, little-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, little-endian, single-precision floating-point number from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { double } Return a 32-bit, little-endian float
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readFloatLE(offset?: int): double;

    /**
     * Reads a signed 8-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 1
     * @returns { number } Return a signed 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads an 8-bit signed integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { number } Return a signed 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads an 8-bit signed integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { long } Return a signed 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readInt8(offset?: int): long;

    /**
     * Reads a signed, big-endian 16-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 2
     * @returns { number } Return a signed, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 16-bit, big-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } Return a signed, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 16-bit, big-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { long } Return a signed, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readInt16BE(offset?: int): long;

    /**
     * Reads a signed, little-endian 16-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 2
     * @returns { number } Return a signed, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 16-bit, little-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } Return a signed, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 16-bit, little-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { long } Return a signed, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readInt16LE(offset?: int): long;

    /**
     * Reads a signed, big-endian 32-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } Return a signed, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, big-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Return a signed, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, big-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { long } Return a signed, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readInt32BE(offset?: int): long;

    /**
     * Reads a signed, little-endian 32-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } Return a signed, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, little-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Return a signed, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, little-endian, signed integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { long } Return a signed, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readInt32LE(offset?: int): long;

    /**
     * Reads byteLength number of bytes from buf at the specified offset and interprets the result as a big-endian,
     * two's complement signed value supporting up to 48 bits of accuracy
     *
     * @param { number } offset - offset offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as a big-endian,
     * two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { number } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as a big-endian,
     * two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { int } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { long }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readIntBE(offset: int, byteLength: int): long;

    /**
     * Reads byteLength number of bytes from buf at the specified offset and interprets the result as a little-endian,
     * two's complement signed value supporting up to 48 bits of accuracy.
     *
     * @param { number } offset - offset offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset and interprets the result as a little-endian,
     * two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { number } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset and interprets the result as a little-endian,
     * two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { int } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { long }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readIntLE(offset: int, byteLength: int): long;

    /**
     * Reads an unsigned 8-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 1
     * @returns { number } Reads an unsigned 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads an 8-bit unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { number } Reads an unsigned 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads an 8-bit unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { long } Reads an unsigned 8-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUInt8(offset?: int): long;

    /**
     * Reads an unsigned, big-endian 16-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 2
     * @returns { number } Reads an unsigned, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 16-bit, big-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } Reads an unsigned, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 16-bit, big-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { long } Reads an unsigned, big-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUInt16BE(offset?: int): long;

    /**
     * Reads an unsigned, little-endian 16-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 2
     * @returns { number } Reads an unsigned, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 16-bit, little-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } Reads an unsigned, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 16-bit, little-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { long } Reads an unsigned, little-endian 16-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUInt16LE(offset?: int): long;

    /**
     * Reads an unsigned, big-endian 32-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 4
     * @returns { number } Reads an unsigned, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, big-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Reads an unsigned, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, big-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { long } Reads an unsigned, big-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUInt32BE(offset?: int): long;

    /**
     * Reads an unsigned, little-endian 32-bit integer from buf at the specified offset
     *
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to read. Must satisfy 0 <= offset <= buf.length - 4
     * @returns { number } Reads an unsigned, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads a 32-bit, little-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { number } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } Reads an unsigned, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads a 32-bit, little-endian, unsigned integer from this Buffer instance at the specified offset.
     *
     * @param { int } [offset] - Number of bytes to skip before starting to read data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { long } Reads an unsigned, little-endian 32-bit integer
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUInt32LE(offset?: int): long;

    /**
     * Reads byteLength number of bytes from buf at the specified offset and interprets the result as
     * an unsigned big-endian integer supporting up to 48 bits of accuracy.
     *
     * @param { number } offset - offset offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as an unsigned,
     * big-endian integer that supports up to 48 bits of precision.
     *
     * @param { number } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as an unsigned,
     * big-endian integer that supports up to 48 bits of precision.
     *
     * @param { int } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { long }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUIntBE(offset: int, byteLength: int): long;

    /**
     * Reads byteLength number of bytes from buf at the specified offset and interprets the result as an unsigned,
     * little-endian integer supporting up to 48 bits of accuracy.
     *
     * @param { number } offset - offset offset Number of bytes to skip before starting to read. Must satisfy: 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to read. Must satisfy 0 < byteLength <= 6
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as an unsigned,
     * little-endian integer that supports up to 48 bits of precision.
     *
     * @param { number } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { number }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reads the specified number of bytes from this Buffer instance at the specified offset, and interprets the result as an unsigned,
     * little-endian integer that supports up to 48 bits of precision.
     *
     * @param { int } offset - Number of bytes to skip before starting to read data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to read. The value range is [1, 6].
     * @returns { long }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    readUIntLE(offset: int, byteLength: int): long;

    /**
     * Returns a new Buffer that references the same memory as the original, but offset and cropped by the start and end indices.
     *
     * @param { number } [start] - start [start = 0] Where the new Buffer will start
     * @param { number } [end] - end [end = buf.length] Where the new Buffer will end (not inclusive)
     * @returns { Buffer } Returns a new Buffer that references the same memory as the original
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Truncates this Buffer instance from the specified position to create a new Buffer instance.
     *
     * @param { number } [start] - Offset to the start position in this Buffer instance where data is truncated. The default value is 0.
     * @param { number } [end] - Offset to the end position in this Buffer instance (not inclusive). The default value is the length of this Buffer instance.
     * @returns { Buffer } Returns a new Buffer that references the same memory as the original
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Truncates this Buffer instance from the specified position to create a new Buffer instance.
     *
     * @param { int } [start] - Offset to the start position in this Buffer instance where data is truncated. The default value is 0.
     * @param { int } [end] - Offset to the end position in this Buffer instance (not inclusive). The default value is the length of this Buffer instance.
     * @returns { Buffer } Returns a new Buffer that references the same memory as the original
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    subarray(start?: int, end?: int): Buffer

    /**
     * Interprets buf as an array of unsigned 16-bit integers and swaps the byte order in-place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 16-bits
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 16-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 16-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 16-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 16-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    swap16(): Buffer;

    /**
     * Interprets buf as an array of unsigned 32-bit integers and swaps the byte order in-place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 32-bits
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 32-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 32-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 32-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 32-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    swap32(): Buffer;

    /**
     * Interprets buf as an array of unsigned 64-bit integers and swaps the byte order in-place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 64-bits
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 64-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 64-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Interprets this Buffer instance as an array of unsigned 64-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } A reference to buf
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 64-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    swap64(): Buffer;

    /**
     * Returns a JSON representation of buf
     *
     * @returns { Object } Returns a JSON
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns a JSON representation of buf
     *
     * @returns { Object } Returns a JSON
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Converts this Buffer instance into a JSON object.
     *
     * @returns { Object } Returns a JSON
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    toJSON(): Object;
    
    /**
     * Converts this Buffer instance into a JsonElement.
     *
     * @returns { jsonx.JsonElement } A new JsonElement containing the Buffer
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toJSON(): jsonx.JsonElement;

    /**
     * Decodes buf to a string according to the specified character encoding in encoding
     *
     * @param { string } [encoding] - encoding [encoding='utf8'] The character encoding to use
     * @param { number } [start] - start [start = 0] The byte offset to start decoding at
     * @param { number } [end] - end [end = buf.length] The byte offset to stop decoding at (not inclusive)
     * @returns { string }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Decodes buf to a string according to the specified character encoding in encoding
     *
     * @param { string } [encoding] - encoding [encoding='utf8'] The character encoding to use
     * @param { number } [start] - start [start = 0] The byte offset to start decoding at
     * @param { number } [end] - end [end = buf.length] The byte offset to stop decoding at (not inclusive)
     * @returns { string }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Converts the data at the specified position in this Buffer instance into a string in the specified encoding format.
     *
     * @param { string } [encoding] - Encoding format (valid only when value is a string). The default value is 'utf8'.
     * @param { number } [start] - Offset to the start position of the data to convert. The default value is 0.
     * @param { number } [end] - Offset to the end position of the data to convert. The default value is the length of this Buffer instance.
     * @returns { string }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    toString(encoding?: string, start?: number, end?: number): string;

    /**
     * Decodes buf to a string according to the specified character encoding in encoding
     *
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The character encoding to use
     * @param { int } [start] - start [start = 0] The byte offset to start decoding at
     * @param { int } [end] - end [end = buf.length] The byte offset to stop decoding at (not inclusive)
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toString(encoding?: BufferEncoding, start?: int, end?: int): string

    /**
     * Writes string to buf at offset according to the character encoding in encoding
     *
     * @param { string } str - str str Writes string to buf at offset according to the character encoding in encoding
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write string
     * @param { number } [length] - length [length = buf.length - offset] Maximum number of bytes to write (written bytes will not exceed buf.length - offset)
     * @param { string } [encoding] - encoding [encoding='utf8'] The character encoding of string.
     * @returns { number } Number of bytes written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[offset/length]" is out of range. It must be >= 0 and <= buf.length. Received value is: [offset/length]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a string of the specified length to this Buffer instance at the specified position in the given encoding format.
     *
     * @param { string } str - String to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0.
     * @param { number } [length] - Maximum number of bytes to write. The default value is Buffer.length minus offset.
     * @param { string } [encoding] - Encoding format of the string. The default value is 'utf8'.
     * @returns { number } Number of bytes written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[offset/length]" is out of range. It must be >= 0 and <= buf.length. Received value is: [offset/length]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a string of the specified length to this Buffer instance at the specified position in the given encoding format.
     *
     * @param { string } str - String to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0.
     * @param { int } [length] - Maximum number of bytes to write. The default value is Buffer.length minus offset.
     * @param { string } [encoding] - Encoding format of the string. The default value is 'utf8'.
     * @returns { int } Number of bytes written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[offset/length]" is out of range. It must be >= 0 and <= buf.length. Received value is: [offset/length]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    write(str: string, offset?: int, length?: int, encoding?: string): int

    /**
     * Writes value to buf at the specified offset as big-endian.
     *
     * @param { bigint } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, big-endian, signed big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, big-endian, signed big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeBigInt64BE(value: bigint, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian.
     *
     * @param { bigint } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, little-endian, signed big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, little-endian, signed big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeBigInt64LE(value: bigint, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian.
     *
     * @param { bigint } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, big-endian, unsigned big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, big-endian, unsigned big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeBigUInt64BE(value: bigint, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian.
     *
     * @param { bigint } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, little-endian, unsigned big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, little-endian, unsigned big integer to this Buffer instance at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeBigUInt64LE(value: bigint, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, big-endian, double-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, big-endian, double-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeDoubleBE(value: double, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 8
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 64-bit, little-endian, double-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 64-bit, little-endian, double-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 8].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeDoubleLE(value: double, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, big-endian, single-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, big-endian, single-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeFloatBE(value: double, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0]  Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, little-endian, single-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, little-endian, single-precision floating-point number to this Buffer instance at the specified offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeFloatLE(value: double, offset?: int): int;

    /**
     * Writes value to buf at the specified offset. value must be a valid signed 8-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 1
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes an 8-bit signed integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes an 8-bit signed integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeInt8(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian. The value must be a valid signed 16-bit integer
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 2
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 16-bit, big-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 16-bit, big-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeInt16BE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian. The value must be a valid signed 16-bit integer
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 2
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 16-bit, little-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 16-bit, little-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeInt16LE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian. The value must be a valid signed 32-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, big-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, big-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeInt32BE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian. The value must be a valid signed 32-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy: 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, little-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, little-endian, signed integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeInt32LE(value: long, offset?: int): int;

    /**
     * Writes byteLength bytes of value to buf at the specified offset as big-endian
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } offset - offset offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a big-endian signed value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to write.
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a big-endian signed value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeIntBE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes byteLength bytes of value to buf at the specified offset as little-endian
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } offset - offset offset  Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a little-endian signed value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } offset - Number of bytes to skip before starting to write data. The default value is 0.
     *     The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to write.
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a little-endian signed value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeIntLE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes value to buf at the specified offset. value must be a valid unsigned 8-bit integer
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 1
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes an 8-bit unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes an 8-bit unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 1].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUInt8(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian. The value must be a valid unsigned 16-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 2
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 16-bit, big-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - 	Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 16-bit, big-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - 	Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUInt16BE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian. The value must be a valid unsigned 16-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 2
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 16-bit, little-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 16-bit, little-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 2].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUInt16LE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as big-endian. The value must be a valid unsigned 32-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, big-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, big-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUInt32BE(value: long, offset?: int): int;

    /**
     * Writes value to buf at the specified offset as little-endian. The value must be a valid unsigned 32-bit integer.
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } [offset] - offset [offset = 0] Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - 4
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes a 32-bit, little-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes a 32-bit, little-endian, unsigned integer to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Number of bytes to skip before starting to write data. The default value is 0. The value range is [0, Buffer.length - 4].
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUInt32LE(value: long, offset?: int): int;

    /**
     * Writes byteLength bytes of value to buf at the specified offset as big-endian
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } offset - offset offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes an unsigned big-endian value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to write.
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes an unsigned big-endian value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUIntBE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes byteLength bytes of value to buf at the specified offset as little-endian
     *
     * @param { number } value - value value Number to be written to buf
     * @param { number } offset - offset offset Number of bytes to skip before starting to write. Must satisfy 0 <= offset <= buf.length - byteLength
     * @param { number } byteLength - byteLength byteLength Number of bytes to write. Must satisfy 0 < byteLength <= 6
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Writes an unsigned little-endian value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { number } value - Data to write.
     * @param { number } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { number } byteLength - Number of bytes to write.
     * @returns { number } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes an unsigned little-endian value of the specified length to this Buffer instance at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Number of bytes to skip before starting to write data.
     *     The default value is 0. The value range is [0, Buffer.length - byteLength].
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } offset plus the number of bytes written
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    writeUIntLE(value: long, offset: int, byteLength: int): int;

    /**
     * Returns the item at that index.
     *
     * @param { int } index - The zero-based index of the desired code unit.
     *     Throws error if index < 0 or index >= buffer.length.
     * @returns { long } The element in the buffer matching the given index.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    [index: int]: long;
  }

  /**
   * Defines the Blob related options parameters.
   *
   * @interface BlobOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  interface BlobOptions {
    /**
     * Blob content type. The default parameter is' '.
     * @type { ?string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    type?: string;

    /**
     * How to output a string ending with '\ n' as' transparent or native . The default value is transparent.
     * @type { ?string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    endings?: string;
  }

  /**
   * Process data as blob type
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Process data as blob type
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Process data as blob type
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class Blob {
    /**
     * Creates a new Blob object containing a concatenation of the given sources.
     *
     * @param { string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] } sources - sources sources An array of string, <ArrayBuffer>,
     * <TypedArray>, <DataView>, or <Blob> objects, or any mix of such objects, that will be stored within the Blob
     * @param { Object } [options] - options options {endings: string, type: string}
     *                 endings:  One of either 'transparent' or 'native'.
     *                 type: The Blob content-type
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates a new Blob object containing a concatenation of the given sources.
     *
     * @param { string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] } sources - sources sources An array of string, <ArrayBuffer>,
     * <TypedArray>, <DataView>, or <Blob> objects, or any mix of such objects, that will be stored within the Blob
     * @param { Object } [options] - options options {endings: string, type: string}
     *                 endings:  One of either 'transparent' or 'native'.
     *                 type: The Blob content-type
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a new Blob object containing a concatenation of the given sources.
     *
     * @param { string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] } sources - sources sources An array of string, <ArrayBuffer>,
     * <TypedArray>, <DataView>, or <Blob> objects, or any mix of such objects, that will be stored within the Blob
     * @param { Object } [options] - options options {endings: string, type: string}
     *                 endings:  One of either 'transparent' or 'native'.
     *                 type: The Blob content-type
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[], options?: Object);

    /**
     * Creates a new Blob object containing a concatenation of the given sources.
     *
     * @param { ArrayUnionType } sources - sources sources ArrayUnionType will be stored within the Blob.
     * @param { BlobOptions } [options] - options options {endings: string, type: string}
     *     endings:  One of either 'transparent' or 'native'.
     *     type: The Blob content-type
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    constructor(sources: ArrayUnionType, options?: BlobOptions);

    /**
     * The total size of the Blob in bytes
     *
     * @type { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Total size of the Blob instance, in bytes.
     *
     * @type { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Total size of the Blob instance, in bytes.
     *
     * @type { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    get size(): int;

    /**
     * The content-type of the Blob
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Type of the data in the Blob instance.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the data in the Blob instance.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    get type(): string;

    /**
     * Returns a promise that fulfills with an <ArrayBuffer> containing a copy of the Blob data.
     *
     * @returns { Promise<ArrayBuffer> }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Puts the Blob data into an ArrayBuffer instance. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Puts the Blob data into an ArrayBuffer instance. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    arrayBuffer(): Promise<ArrayBuffer>;

    /**
     * Creates and returns a new Blob containing a subset of this Blob objects data. The original Blob is not altered
     *
     * @param { number } [start] - start start The starting index
     * @param { number } [end] - end end The ending index
     * @param { string } [type] - type type The content-type for the new Blob
     * @returns { Blob }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates a Blob instance by copying specified data from this Blob instance.
     *
     * @param { number } [start] - Offset to the start position of the data to copy. The default value is 0.
     * @param { number } [end] - Offset to the end position of the data to copy. The default value is the data length in the original Blob instance.
     * @param { string } [type] - Type of the data in the new Blob instance. The default value is ''.
     * @returns { Blob }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a Blob instance by copying specified data from this Blob instance.
     *
     * @param { int } [start] - Offset to the start position of the data to copy. The default value is 0.
     * @param { int } [end] - Offset to the end position of the data to copy. The default value is the data length in the original Blob instance.
     * @param { string } [type] - Type of the data in the new Blob instance. The default value is ''.
     * @returns { Blob }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    slice(start?: int, end?: int, type?: string): Blob

    /**
     * Returns a promise that fulfills with the contents of the Blob decoded as a UTF-8 string.
     *
     * @returns { Promise<string> }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns text in UTF-8 format. This API uses a promise to return the result.
     *
     * @returns { Promise<string> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Returns text in UTF-8 format. This API uses a promise to return the result.
     *
     * @returns { Promise<string> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    text(): Promise<string>;
  }
}
export default buffer;
