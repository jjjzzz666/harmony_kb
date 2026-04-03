/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @kit ArkData
 */

import { AsyncCallback, RecordData } from './@ohos.base';
import image from "./@ohos.multimedia.image";
import Want from "./@ohos.app.ability.Want";

/**
 * As a part of the Unified Data Management Framework (UDMF), the unifiedDataChannel module provides unified data
 * channels and standard data access interfaces for many-to-many data sharing across applications. It also provides
 * definitions for uniform data types, such as text and image, to streamline data interaction between different
 * applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are
 * advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.
 *
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 10
 */
/**
 * As a part of the Unified Data Management Framework (UDMF), the unifiedDataChannel module provides unified data
 * channels and standard data access interfaces for many-to-many data sharing across applications. It also provides
 * definitions for uniform data types, such as text and image, to streamline data interaction between different
 * applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are
 * advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.
 *
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @atomicservice
 * @since 11
 */
/**
 * As a part of the Unified Data Management Framework (UDMF), the unifiedDataChannel module provides unified data
 * channels and standard data access interfaces for many-to-many data sharing across applications. It also provides
 * definitions for uniform data types, such as text and image, to streamline data interaction between different
 * applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are
 * advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.
 *
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @since 23 static
 */
declare namespace unifiedDataChannel {
  /**
   * Types of scope that UnifiedData can be used.
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShareOptions {
    /**
     * IN_APP indicates that only use in the same app is allowed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    IN_APP = 0,
    /**
     * CROSS_APP indicates that use in any app in this device is allowed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CROSS_APP = 1
  }

  /**
   * Indicated delay get UnifiedData
   *
   * @typedef {function} GetDelayData
   * @param { string } type - the type of UnifiedData required.
   * @returns { UnifiedData } Return the UnifiedData required.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type GetDelayData = (type: string) => UnifiedData;

  /**
   * Indicates type of value.
   * @typedef {int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined}
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Indicates type of value.
   * @typedef {int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined}
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined;

  /**
   * Indicates type of value.
   * @typedef {int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | RecordData | null | undefined}
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | RecordData | null | undefined;

  /**
   * Describe the unified data properties.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class UnifiedDataProperties {
    /**
     * extra property data. key-value pairs.
     * @type { ?Record<string, object> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     */
    extras?: Record<string, object>;

    /**
     * extra property data. key-value pairs.
     * @type { ?Record<string, RecordData> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    extras?: Record<string, RecordData>;

    /**
     * the user-defined tag of a UnifiedData object.
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    tag?: string;
    /**
     * a timestamp, which indicates when data is written.
     * @type { ?Date }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp?: Date;
    /**
     * Indicates the scope of clipboard data which can be used.
     * If it is not set or is incorrectly set, The default value is CrossDevice.
     * @type { ?ShareOptions }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    shareOptions?: ShareOptions;

    /**
     * Indicated delay get UnifiedData.
     * @type { ?GetDelayData }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayData?: GetDelayData;
  }

  /**
   * Describe the unified data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class UnifiedData {
    /**
     * Create unified data with a record
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Create unified data with a record
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Create unified data with a record
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    constructor(record: UnifiedRecord);
    /**
     * Create a empty unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Create a empty unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Add a record into unified data
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Add a record into unified data
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Add a record into unified data
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    addRecord(record: UnifiedRecord): void;
    /**
     * Get all records of unified data
     *
     * @returns { Array<UnifiedRecord> } Return the records of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Get all records of unified data
     *
     * @returns { Array<UnifiedRecord> } Return the records of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get all records of unified data
     *
     * @returns { Array<UnifiedRecord> } Return the records of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getRecords(): Array<UnifiedRecord>;

    /**
     * Checks whether this UnifiedData object contains the specified data type, including the data types added by using
     * the addEntry function.
     * For file types, if the type set of UnifiedData contains general.jpeg, true is returned when the hasType API is
     * called to check whether the general.image type is included, because the general.jpeg type belongs to the
     * general.image type.
     * 
     * @param { string } type - indicates to query data type.
     * @returns { boolean } if having mimeType in UnifiedData returns true, else returns false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Checks whether this UnifiedData object contains the specified data type, including the data types added by using
     * the addEntry function.
     * For file types, if the type set of UnifiedData contains general.jpeg, true is returned when the hasType API is
     * called to check whether the general.image type is included, because the general.jpeg type belongs to the
     * general.image type.
     * 
     * @param { string } type - indicates to query data type.
     * @returns { boolean } if having mimeType in UnifiedData returns true, else returns false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    hasType(type: string): boolean;

    /**
     * UTD types of all content in the UnifiedData.
     * @returns { Array<string> } type of array
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * UTD types of all content in the UnifiedData.
     * @returns { Array<string> } type of array
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * UnifiedData properties.
     * @type { UnifiedDataProperties }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * UnifiedData properties.
     * @returns { UnifiedDataProperties } Properties of all data records in a unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get properties(): UnifiedDataProperties;

    /**
     * UnifiedData properties.
     * @type { UnifiedDataProperties }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * UnifiedData properties.
     * @param { UnifiedDataProperties } Properties of all data records in a unified data.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set properties(value: UnifiedDataProperties);
  }

  /**
   * The data abstract supported by unified data
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Summarizes the data information of the unifiedData object, including the data type and size.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class Summary {
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @type { Record<string, long> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @returns { Record<string, long> } Type and size information of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get summary(): Record<string, long>;

    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @type { Record<string, long> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @param { Record<string, long> } Type and size information of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set summary(value: Record<string, long>);

    /**
     * Total data size of data in Bytes
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Total data size of data in Bytes
     *
     * @type { long }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Total data size of data in Bytes
     *
     * @returns { long } Total size information of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get totalSize(): long;

    /**
     * Total data size of data in Bytes
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Total data size of data in Bytes
     *
     * @type { long }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Total data size of data in Bytes
     *
     * @param { long } Total size information of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set totalSize(value: long);

    /**
     * Indicates the overview information of unifiedData.
     *
     * @type { Record<string, long> }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Indicates the overview information of unifiedData.
     *
     * @returns { Record<string, long> } Key represents the data type, and value represents the corresponding data size.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get overview(): Record<string, long>;
  }

  /**
   * Describe the unified record
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified record
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * An abstract definition of the data content supported by the UDMF. A UnifiedRecord object contains one or more data
   * records, for example, a text record, an image record, or an HTML record. Since API version 15, different styles of
   * the same content can be added to a UnifiedRecord object. Data users can obtain the corresponding styles as
   * required.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class UnifiedRecord {
    /**
     * Get type of unified record
     *
     * @returns { string } Return the type of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Get type of unified record
     *
     * @returns { string } Return the type of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get type of unified record
     *
     * @returns { string } Return the type of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * Create unified record.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Create unified record.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Create unified record by type and value.
     *
     * @param { string } type - indicates to data type of unified record. It can not be empty. When type of value is
     * object, parameter type must be pixel-map or want UTD type.
     * @param { ValueType } value - indicates to value of unified record.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Create unified record by type and value.
     *
     * @param { string } type - indicates to data type of unified record. It can not be empty. When type of value is
     * object, parameter type must be pixel-map or want UTD type.
     * @param { ValueType } value - indicates to value of unified record.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    constructor(type: string, value: ValueType);

    /**
     * Get the value of unified record.
     *
     * @returns { ValueType } Return the value of unified record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get the value of unified record.
     *
     * @returns { ValueType } Return the value of unified record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getValue(): ValueType;

    /**
     * Obtains all the data types in the data record. This API can be called using the UnifiedRecord object to query all
     * data types in the record, including the data types added using the addEntry function.
     *
     * @returns { Array<string> } Return the types of unified record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * Adds data of a specified data type and content to the current data record. You can use this API to add different
     * data types and contents to the same data.
     *
     * @param { string } type - type of entry.
     * @param { ValueType } value - value of entry.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * Get an entry from unified record
     *
     * @param { string } type - type of entry want to get.
     * @returns { ValueType } Return the value corresponding to the type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntry(type: string): ValueType;

    /**
     * Get entries from unified record
     *
     * @returns { Record<string, ValueType> } Return all entries in the record.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntries(): Record<string, ValueType>;
  }

  /**
   * Describe the unified text data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified text data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified text data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Text extends UnifiedRecord {
    /**
     * Indicates the details of unified text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the details of unified text
     *
     * @returns { Record<string, string> | undefined } the details of unified text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified text
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the details of unified text
     *
     * @param { Record<string, string> | undefined } the details of unified text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);
  }

  /**
   * Describe the unified plain text data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified plain text data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified plain text data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class PlainText extends Text {
    /**
     * Indicates the content of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the content of text
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the content of text
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the content of text
     *
     * @returns { string } the content of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get textContent(): string;

    /**
     * Indicates the content of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the content of text
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the content of text
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the content of text
     *
     * @param { string } the content of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set textContent(value: string);

    /**
     * Indicates the abstract of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the abstract of text
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the abstract of text
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of text
     *
     * @returns { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get textAbstract(): string | undefined;

    /**
     * Indicates the abstract of text
     *
     * @param { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set textAbstract(value: string | undefined);
  }

  /**
   * Describe the unified link data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified link data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified link data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Hyperlink extends Text {
    /**
     * Indicates the url of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the url of a link
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the url of a link
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the url of a link
     *
     * @returns { string } the url of a link
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get url(): string;

    /**
     * Indicates the url of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the url of a link
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the url of a link
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the url of a link
     *
     * @param { string } the url of a link
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set url(value: string);

    /**
     * Indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    description?: string;

    /**
     * Indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the description of a link
     *
     * @returns { string | undefined } the description of a link.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get description(): string | undefined;

    /**
     * Indicates the description of a link.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the description of a link
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the description of a link
     *
     * @param { string | undefined } the description of a link
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set description(value: string | undefined);
  }

  /**
   * Describe the unified html data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified html data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified html data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class HTML extends Text {
    /**
     * Indicates the content of html, with html tags
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @returns { string } the content of html.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get htmlContent(): string;

    /**
     * Indicates the content of html, with html tags
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the content of html, with html tags
     *
     * @param { string } the content of html.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set htmlContent(value: string);

    /**
     * Indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    plainContent?: string;

    /**
     * Indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the plain content of html
     *
     * @returns { string | undefined } the plain content of html
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get plainContent(): string | undefined;

    /**
     * Indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the plain content of html
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the plain content of html
     *
     * @param { string | undefined} the plain content of html
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set plainContent(value: string | undefined);
  }

  /**
   * Describe the unified file data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified file data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified file data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class File extends UnifiedRecord {
    /**
     * Indicates the details of unified File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the details of unified File
     *
     * @returns { Record<string, string> | undefined } the details of unified File
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> | undefined }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    /**
     * Indicates the details of unified File
     *
     * @param { Record<string, string> } the details of unified File.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);

    /**
     * Indicates the uri of file
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of file
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of file
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of file
     *
     * @returns { string } the uri of file.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get uri(): string;

    /**
     * Indicates the uri of file
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of file
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of file
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of file
     *
     * @param { string } the uri of file.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set uri(value: string);
  }

  /**
   * Describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Image extends File {
    /**
     * Indicates the uri of image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of image
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of image
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of image
     *
     * @returns { string } the uri of image.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get imageUri(): string;

    /**
     * Indicates the uri of image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of image
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of image
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of image
     *
     * @param { string } the uri of image.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set imageUri(value: string);
  }

  /**
   * Describe the unified video data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified video data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified video data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Video extends File {
    /**
     * Indicates the uri of video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of video
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of video
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of video
     *
     * @returns { string } the uri of video.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get videoUri(): string;

    /**
     * Indicates the uri of video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of video
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of video
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of video
     *
     * @param { string } the uri of video.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set videoUri(value: string);
  }

  /**
   * Describe the unified audio data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified audio data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified audio data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Audio extends File {
    /**
     * Indicates the uri of audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of audio
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of audio
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of audio
     *
     * @returns { string } the uri of audio.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get audioUri(): string;

    /**
     * Indicates the uri of audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of audio
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of audio
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of audio
     *
     * @param { string } the uri of audio.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set audioUri(value: string);
  }

  /**
   * Describe the unified folder data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the unified folder data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the unified folder data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class Folder extends File {
    /**
     * Indicates the uri of folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of folder
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of folder
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of folder
     *
     * @returns { string } the uri of folder
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    get folderUri(): string;

    /**
     * Indicates the uri of folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the uri of folder
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the uri of folder
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    /**
     * Indicates the uri of folder
     *
     * @param { string } the uri of folder
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    set folderUri(value: string);
  }

  /**
   * Describe system defined type data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe system defined type data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class SystemDefinedRecord extends UnifiedRecord {
    /**
     * Indicates the details of system defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of system defined data
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * Indicates the details of system defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of system defined data
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of system defined data
     *
     * @returns { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, int | long | double | string | Uint8Array> | undefined;

    /**
     * Indicates the details of system defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the details of system defined data
     *
     * @type { ?Record<string, int | long | double | string | Uint8Array> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the details of system defined data
     *
     * @param { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, int | long | double | string | Uint8Array> | undefined);
  }

  /**
   * Describe system defined form data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe system defined form data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class SystemDefinedForm extends SystemDefinedRecord {
    /**
     * Indicates the id of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the id of form
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of form
     *
     * @returns { int } the id of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get formId(): int;

    /**
     * Indicates the id of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the id of form
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of form
     *
     * @param { int } the id of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set formId(value: int);

    /**
     * Indicates the name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the name of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the name of form
     *
     * @returns { string } the name of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get formName(): string;

    /**
     * Indicates the name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the name of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the name of form
     *
     * @param { string } the name of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set formName(value: string);

    /**
     * Indicates the bundle name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the bundle name of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the bundle name of form
     *
     * @returns { string } the bundle name of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the bundle name of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the bundle name of form
     *
     * @param { string } the bundle name of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set bundleName(value: string);

    /**
     * Indicates the ability name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the ability name of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the ability name of form
     *
     * @returns { string } the ability name of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the ability name of form.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the ability name of form.
     *
     * @param { string } the ability name of form
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set abilityName(value: string);

    /**
     * Indicates the module of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the module of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the module of form
     *
     * @returns { string } the module of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get module(): string;

    /**
     * Indicates the module of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the module of form
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the module of form
     *
     * @param { string } the module of form.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set module(value: string);
  }

  /**
   * Describe system defined app item data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe system defined app item data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class SystemDefinedAppItem extends SystemDefinedRecord {
    /**
     * Indicates the app id
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the app id
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the app id
     *
     * @returns { string } the app id.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get appId(): string;

    /**
     * Indicates the app id
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the app id
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the app id
     *
     * @param { string } the app id.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set appId(value: string);

    /**
     * Indicates the app name
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the app name
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the app name
     *
     * @returns { string } the app name.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get appName(): string;

    /**
     * Indicates the app name
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the app name
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the app name
     *
     * @param { string } the app name.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set appName(value: string);

    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10 dynamic
     */
    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of app icon.
     * This field can be sourced from BMS or customized as needed.
     *
     * @returns { string } the id of app icon
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    get appIconId(): string;

    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10 dynamic
     */
    /**
     * Indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of app icon.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app icon
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    set appIconId(value: string);

    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10 dynamic
     */
    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of app label.
     * This field can be sourced from BMS or customized as needed.
     *
     * @returns { string } the id of app label
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    get appLabelId(): string;

    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10 dynamic
     */
    /**
     * Indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the id of app label.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app label
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    set appLabelId(value: string);

    /**
     * Indicates the bundle name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the bundle name of app
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the bundle name of app
     *
     * @returns { string } the bundle name of app.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the bundle name of app
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the bundle name of app
     *
     * @param { string } the bundle name of app.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set bundleName(value: string);

    /**
     * Indicates the ability name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the ability name of app
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the ability name of app
     *
     * @returns { string } the ability name of app.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the ability name of app
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the ability name of app
     *
     * @param { string } the ability name of app.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set abilityName(value: string);
  }

  /**
   * Describe system defined pixel map data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe system defined pixel map data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class SystemDefinedPixelMap extends SystemDefinedRecord {
    /**
     * Indicates the raw data of pixel map
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the raw data of pixel map
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the raw data of pixel map
     *
     * @returns { Uint8Array } the raw data of pixel map.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of pixel map
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the raw data of pixel map
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the raw data of pixel map
     *
     * @param { Uint8Array } the raw data of pixel map.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * Describe application defined data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe application defined data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class ApplicationDefinedRecord extends UnifiedRecord {
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @returns { string } the type of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get applicationDefinedType(): string;

    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @param { string } the type of data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set applicationDefinedType(value: string);

    /**
     * Indicates the raw data of application defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the raw data of application defined data
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the raw data of application defined data
     *
     * @returns { Uint8Array } the raw data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of application defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the raw data of application defined data
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Indicates the raw data of application defined data
     *
     * @param { Uint8Array } the raw data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * Describe the sharing channel that UDMF support
   *
   * @enum { string }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the sharing channel that UDMF support
   *
   * @enum { string }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum Intention {
    /**
     * Indicates the intention of data hub
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the intention of data hub
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DATA_HUB = 'DataHub',

    /**
     * Indicates the intention of drag
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @systemapi
     * @StageModelOnly
     * @since 12
     */
    /**
     * Indicates the intention of drag
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    DRAG = 'Drag',

    /**
     * Indicates a system sharing channel.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SHARE = 'SystemShare',

    /**
     * Indicates a Picker channel.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PICKER = 'Picker',

    /**
     * Indicates a menu channel.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    MENU = 'Menu'
  }

  /**
   * Describe the visibility range of data
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum Visibility {
    /**
     * The visibility level that specifies that any hap or native can be obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ALL,

    /**
     * The visibility level that specifies that only data providers can be obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OWN_PROCESS
  }

  /**
   * Describe the optional arguments of data operation
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Describe the optional arguments of data operation
   *
   * @typedef { object }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describe the optional arguments of data operation
   *
   * @interface { Options }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Indicates the target Intention
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the target Intention
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the target Intention
     *
     * @type { ?Intention }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    intention?: Intention;

    /**
     * Indicates the unique identifier of target UnifiedData
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    /**
     * Indicates the unique identifier of target UnifiedData
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the unique identifier of target UnifiedData
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    key?: string;

    /**
     * Represents the visibility range of data.
     * This parameter is used only when data is inserted.
     *
     * @type { ?Visibility }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    visibility?: Visibility;
  }

  /**
   * Defines the types of file conflict options when getting data from the UDMF.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * Overwrite when destUri has file with same name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * Skip when destUri has file with same name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * Defines the types of progress indicator when getting data from the UDMF.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * Getting data without system default progress indicator.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Getting data with system default progress indicator.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * Defines the listener status of obtaining progress and data.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ListenerStatus {
    /**
     * Indicates the finished status.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FINISHED = 0,

    /**
     * Indicates that processing is still in progress.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    PROCESSING = 1,

    /**
     * Indicates that the process has been canceled.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCELED = 2,

    /**
     * Indicates that an internal error has occurred.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INNER_ERROR = 200,

    /**
     * Indicates that the GetDataParams contains invalid parameters.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 201,

    /**
     * Indicates that no data is obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DATA_NOT_FOUND = 202,

    /**
     * Indicates that an error occurred in the synchronization process.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SYNC_FAILED = 203,

    /**
     * Indicates that an error occurred during file copying.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    COPY_FILE_FAILED = 204,
  }

  /**
   * Indicates the progress information.
   *
   * @interface ProgressInfo
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * Indicates the UDMF processing progress.
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * Indicates the status of obtaining progress and data.
     *
     * @type { ListenerStatus }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    status: ListenerStatus;
  }

  /**
   * A listener callback function that fetches progress info and data.
   *
   * @typedef { function } DataProgressListener
   * @param { ProgressInfo } progressInfo - the progress information.
   * @param { UnifiedData | null } data - Data obtained when the progress reaches 100%.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type DataProgressListener = (progressInfo: ProgressInfo, data: UnifiedData | null) => void;

  /**
   * Represents the get data parameters when getting data from udmf.
   *
   * @interface GetDataParams
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * Indicates whether to use default system progress indicator.
     *
     * @type { ProgressIndicator }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * Indicates progress and data listener when getting unified data.
     *
     * @type { DataProgressListener }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    dataProgressListener: DataProgressListener;

    /**
     * Indicates the dest path uri where copy file will be copied to sandbox of application.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * Indicates file conflict options when dest path has file with same name.
     *
     * @type { FileConflictOptions }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * Indicates the supported data information.
     *
     * @type { ?DataLoadInfo }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    acceptableInfo?: DataLoadInfo;
  }

  /**
   * Indicates data loading information.
   *
   * @interface DataLoadInfo
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadInfo {
    /**
     * Represents the data type or supported types to load.
     * <br>This parameter is mandatory when used by the data provider.
     *
     * @type { ?Set<string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    types?: Set<string>;

    /**
     * Indicates the maximum number of data records to be loaded.
     *
     * @type { ?long }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    recordCount?: long;
  }

  /**
   * Indicates the callback function for loading data.
   *
   * @typedef { function } DataLoadHandler
   * @param { DataLoadInfo } acceptableInfo Indicates the type and number of data that can be accepted by the receiver.
   * @returns { UnifiedData | null } the {@link UnifiedData} object to be loaded.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null;

  /**
   * Indicates the callback function for deferred and non-blocking data loading.
   *
   * @typedef { function } DelayedDataLoadHandler
   * @param { DataLoadInfo } [acceptableInfo] - Indicates the type and number of data
   *     that can be accepted by the receiver.
   * @returns { Promise<UnifiedData | null> } - Asynchronously return the {@link UnifiedData} object
   *     that needs to be loaded.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type DelayedDataLoadHandler = (acceptableInfo?: DataLoadInfo) => Promise<UnifiedData | null>;

  /**
   * Indicates data loading params.
   *
   * @interface DataLoadParams
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadParams {
    /**
     * Indicates the callback function for loading data.
     *
     * @type { DataLoadHandler }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    loadHandler: DataLoadHandler;

    /**
     * Indicates data loading information.
     * @type { DataLoadInfo }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    dataLoadInfo: DataLoadInfo;

    /**
     * Indicates the callback function for deferred and non-blocking data loading.
     * This handler is optional. If it is provided, it will take precedence over
     * the synchronous DataLoadHandler (i.e., DataLoadHandler will be ignored).
     *
     * @type { ?DelayedDataLoadHandler }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    delayedDataLoadHandler?: DelayedDataLoadHandler;
  }

  /**
   * Insert data into unified data channel by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Insert data into unified data channel by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Insert data into unified data channel by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @returns { Promise<string> } {string}: the unique identifier.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Insert data into unified data channel by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @returns { Promise<string> } {string}: the unique identifier.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData): Promise<string>;

  /**
   * Update data to unified data channel by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @param { AsyncCallback<void> } callback - the callback of updateData.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Update data to unified data channel by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @param { AsyncCallback<void> } callback - the callback of updateData.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Update data to unified data channel by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Update data to unified data channel by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData): Promise<void>;

  /**
   * Query data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link UnifiedData}
   * object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Query data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link UnifiedData} object
   *  array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Query data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the target {@link UnifiedData} object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Query data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the target {@link UnifiedData} object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function queryData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * Delete data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link UnifiedData}
   * object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Delete data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link UnifiedData}
   * object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Delete data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  /**
   * Delete data of unified data channel by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention}
   * or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function deleteData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * Sets the ShareOptions for the application data. Currently, only the drag-and-drop data channel is supported.
   *
   * @param { Intention } intention - Describe the sharing channel that UDMF support.
   * @param { ShareOptions } shareOptions - Types of scope that UnifiedData can be used.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                                                   2. Incorrect parameter types.
   * @throws { BusinessError } 20400001 - Settings already exist.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  /**
   * Sets the ShareOptions for the application data. Currently, only the drag-and-drop data channel is supported.
   *
   * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION
   * @param { Intention } intention - Describe the sharing channel that UDMF support. Currently only supports DRAG intention.
   * @param { ShareOptions } shareOptions - Types of scope that UnifiedData can be used.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION".
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                                                   2. Incorrect parameter types;
   *                                                                   3. Parameter verification failed.
   * @throws { BusinessError } 20400001 - Settings already exist.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
   function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void;

   /**
    * Remove app sharing options.
    *
    * @param { Intention } intention - Describe the sharing channel that UDMF support.
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
    * uses system API.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *                                                                   2. Incorrect parameter types.
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi
    * @StageModelOnly
    * @since 12
    */
  /**
   * Remove app sharing options.
   *
   * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION
   * @param { Intention } intention - Describe the sharing channel that UDMF support. Currently only supports DRAG intention.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION".
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                                                   2. Incorrect parameter types;
   *                                                                   3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
   function removeAppShareOptions(intention: Intention): void;

  /**
   * Converts the provided data into a multi-style data structure, which is useful when the original data uses multiple
   * records to represent different styles of the same data. This API is used only when the following rules are met:
   * 1.The number of records in data is greater than
   * 2.The value of unifiedData.properties.tag is records_to_entries_data_format.
   *
   * @param { UnifiedData } data - {@link UnifiedData} Data represents the data that needs to be converted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   * @since 23 static
   */
   function convertRecordsToEntries(data: UnifiedData): void;
}

export default unifiedDataChannel;
