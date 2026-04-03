/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import BaseContext from './application/BaseContext';

/**
 * Provider interfaces to create a {@link KVManager} instance.
 *
 * @namespace distributedKVStore
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @stagemodelonly[staticonly]
 * @since 9 dynamic
 * @since 23 static
 */
/**
 * Provider interfaces to create a {@link KVManager} instance.
 *
 * @namespace distributedKVStore
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @stagemodelonly[staticonly]
 * @crossplatform
 * @since 24 dynamic&static
 */
declare namespace distributedKVStore {
  /**
   * Provides configuration information to create a {@link KVManager} instance,
   * which includes the caller's package name and ability or hap context.
   *
   * @interface KVManagerConfig
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides configuration information to create a {@link KVManager} instance,
   * which includes the caller's package name and ability or hap context.
   *
   * @interface KVManagerConfig
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface KVManagerConfig {
    /**
     * Indicates the bundleName
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the bundleName
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    bundleName: string;

    /**
     * Indicates the ability or hap context
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     *     if swap the area, you should close all the KV store and use the new Context to create the KVManager
     * @since 9
     */
    /**
     * Indicates the ability or hap context
     *
     * @type { BaseContext }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     *     if swap the area, you should close all the KV store and use the new BaseContext to create the KVManager
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Indicates the ability or hap context
     *
     * @type { BaseContext }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     *     if swap the area, you should close all the KV store and use the new BaseContext to create the KVManager
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    context: BaseContext;
  }

  /**
   * KVStore constants
   *
   * @interface Constants
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 9 dynamic
   */
  /**
   * KVStore constants
   *
   * @interface Constants
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @crossplatform
   * @since 24 dynamic
   */
  interface Constants {
    /**
     * Max key length is 1024 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max key length is 1024 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_KEY_LENGTH: number;

    /**
     * Max value length is 4194303 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max value length is 4194303 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_VALUE_LENGTH: number;

    /**
     * Max device coordinate key length is 896 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max device coordinate key length is 896 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_KEY_LENGTH_DEVICE: number;

    /**
     * Max store id length is 128 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max store id length is 128 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_STORE_ID_LENGTH: number;

    /**
     * Max query length is 512000 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max query length is 512000 bytes.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_QUERY_LENGTH: number;

    /**
     * Max batch operation size is 128.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Max batch operation size is 128.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    readonly MAX_BATCH_SIZE: number;
  }

  /**
   * KVStore constants
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly
   * @since 23 static
   */
  enum Constants {
    /**
     * Max batch operation size is 128.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_BATCH_SIZE = 128,

    /**
     * Max store id length is 128 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_STORE_ID_LENGTH = 128,

    /**
     * Max device coordinate key length is 896 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_KEY_LENGTH_DEVICE = 896,

    /**
     * Max key length is 1024 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_KEY_LENGTH = 1024,

    /**
     * Max query length is 512000 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_QUERY_LENGTH = 512000,

    /**
     * Max value length is 4194303 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_VALUE_LENGTH = 4194303,
  }

  /**
   * Indicates the {@code ValueType}.
   * <p>{@code ValueType} is obtained based on the value.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Indicates the {@code ValueType}.
   * <p>{@code ValueType} is obtained based on the value.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  enum ValueType {
    /**
     * Indicates that the value type is string.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates that the value type is string.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    STRING = 0,

    /**
     * Indicates that the value type is int.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Indicates that the value type is int.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    INTEGER = 1,

    /**
     * Indicates that the value type is float.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Indicates that the value type is float.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform
     * @since 24 dynamic
     */
    FLOAT = 2,

    /**
     * Indicates that the value type is byte array.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates that the value type is byte array.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    BYTE_ARRAY = 3,

    /**
     * Indicates that the value type is boolean.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates that the value type is boolean.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    BOOLEAN = 4,

    /**
     * Indicates that the value type is double.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates that the value type is double.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    DOUBLE = 5,

    /**
     * Indicates that the value type is long.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    LONG = 6
  }

  /**
   * Obtains {@code Value} objects stored in a {@link SingleKVStore} or {@link DeviceKVStore} database.
   *
   * @interface Value
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Obtains {@code Value} objects stored in a {@link SingleKVStore} or {@link DeviceKVStore} database.
   *
   * @interface Value
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface Value {
    /**
     * Indicates the value type
     *
     * @type { ValueType }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     * @see ValueType
     */
    /**
     * Indicates the value type
     *
     * @type { ValueType }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     * @see ValueType
     */
    type: ValueType;

    /**
     * Indicates the value
     *
     * @type { Uint8Array | string | long | double | boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the value
     *
     * @type { Uint8Array | string | long | double | boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    value: Uint8Array | string | long | double | boolean;
  }

  /**
   * Provides key-value pairs stored in the distributedKVStore.
   *
   * @interface Entry
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides key-value pairs stored in the distributedKVStore.
   *
   * @interface Entry
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface Entry {
    /**
     * Indicates the key
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the key
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    key: string;

    /**
     * Indicates the value
     *
     * @type { Value }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the value
     *
     * @type { Value }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    value: Value;
  }

  /**
   * Receive notifications of all data changes, including data insertion, update, and deletion.
   * <p>If you have subscribed to {@code SingleKVStore} or {@code DeviceKVStore}, you will receive
   * data change notifications and obtain the changed data from the parameters in callback methods
   * upon data insertion, update or deletion.
   *
   * @interface ChangeNotification
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ChangeNotification {
    /**
     * Indicates data insertion records.
     *
     * @type { Entry[] }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    insertEntries: Entry[];

    /**
     * Indicates data update records.
     *
     * @type { Entry[] }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    updateEntries: Entry[];

    /**
     * Indicates data deletion records.
     *
     * @type { Entry[] }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deleteEntries: Entry[];

    /**
     * Indicates the device id which brings the data change.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * Indicates the database synchronization mode.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SyncMode {
    /**
     * Indicates that data is only pulled from the remote end.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PULL_ONLY,

    /**
     * Indicates that data is only pushed from the local end.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PUSH_ONLY,

    /**
     * Indicates that data is pushed from the local end, and then pulled from the remote end.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PUSH_PULL
  }

  /**
   * Describes the subscription type.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SubscribeType {
    /**
     * Subscription to local data changes
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_LOCAL,

    /**
     * Subscription to remote data changes
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_REMOTE,

    /**
     * Subscription to both local and remote data changes
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_ALL
  }

  /**
   * Describes the KVStore type.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Describes the KVStore type.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  enum KVStoreType {
    /**
     * Device-collaboration database, as specified by {@code DeviceKVStore}
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE_COLLABORATION,

    /**
     * Single-version database, as specified by {@code SingleKVStore}
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Single-version database, as specified by {@code SingleKVStore}
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    SINGLE_VERSION
  }

  /**
   * Describes the KVStore security level.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Describes the KVStore security level.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  enum SecurityLevel {
    /**
     * S1: means the db is in the low security level
     * There are some low impact when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S1,

    /**
     * S2: means the db is in the middle security level
     * There are some major impact when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S2,

    /**
     * S3: means the db is in the high security level
     * There are some severity impact when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * S3: means the db is in the high security level
     * There are some severity impact when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    S3,

    /**
     * S4: means the db is in the critical security level
     * There are some critical impact when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S4
  }

  /**
   * Provides configuration options to create a {@code SingleKVStore} or {@code DeviceKVStore}.
   *
   * @interface Options
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides configuration options to create a {@code SingleKVStore} or {@code DeviceKVStore}.
   *
   * @interface Options
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface Options {
    /**
     * Indicates whether to create a database when the database file does not exist
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates whether to create a database when the database file does not exist
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    createIfMissing?: boolean;

    /**
     * Indicates whether database files to be encrypted
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    encrypt?: boolean;

    /**
     * Indicates whether to back up database files
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    backup?: boolean;

    /**
     * Indicates whether database files are automatically synchronized
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    autoSync?: boolean;

    /**
     * Indicates the database type
     *
     * @type { ?KVStoreType }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the database type
     *
     * @type { ?KVStoreType }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    kvStoreType?: KVStoreType;

    /**
     * Indicates the database security level
     *
     * @type { SecurityLevel }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the database security level
     *
     * @type { SecurityLevel }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    securityLevel: SecurityLevel;

    /**
     * Indicates the database schema
     *
     * @type { ?Schema }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Indicates the database schema
     *
     * @type { ?Schema }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    schema?: Schema;

    /**
     * Specifies the root directory relative to the database
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    rootDir?: string;
  }

  /**
   * Provides backup config to backup or restore KVStore.
   *
   * @interface BackupConfig
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 24 dynamic&static
   */
  interface BackupConfig {
    /**
     * Specifies the file name to the backup database
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    fileName: string;

    /**
     * Specifies the root directory relative to the backup database
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    filePath: string;
  }

  /**
   * Represents the database schema.
   * You can set the schema object in options when create or open the database.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Represents the database schema.
   * You can set the schema object in options when create or open the database.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  class Schema {
    /**
     * A constructor used to create a Schema instance.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * A constructor used to create a Schema instance.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    constructor();

    /**
     * Get the root json object.
     *
     * @returns { FieldNode } returns the root json object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the root json object.
     *
     * @returns { FieldNode } returns the root json object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get root(): FieldNode;

    /**
     * Set the root json object.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the root json object.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set root(root: FieldNode);

    /**
     * Get the string array of json.
     *
     * @returns { Array<string> } returns the string array of json.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the string array of json.
     *
     * @returns { Array<string> } returns the string array of json.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get indexes(): Array<string>;

    /**
     * Set the string array of json.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the string array of json.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set indexes(indexes: Array<string>);

    /**
     * Get the mode of schema.
     *
     * @returns { int } returns the mode of schema.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the mode of schema.
     *
     * @returns { int } returns the mode of schema.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get mode(): int;

    /**
     * Set the mode of schema.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the mode of schema.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set mode(mode: int);

    /**
     * Get the skip size of schema.
     *
     * @returns { int } returns the skip size of schema.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the skip size of schema.
     *
     * @returns { int } returns the skip size of schema.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get skip(): int;

    /**
     * Set the skip size of schema.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the skip size of schema.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set skip(skip: int);
  }

  /**
   * Represents a node of a {@link Schema} instance.
   * <p>With a {@link Schema} instance, you can define the value fields which stored in the database.
   * <p>A FieldNode of the {@link Schema} instance is either a leaf or a non-leaf node.
   * <p>The leaf node must have a value; the non-leaf node must have a child {@code FieldNode}.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Represents a node of a {@link Schema} instance.
   * <p>With a {@link Schema} instance, you can define the value fields which stored in the database.
   * <p>A FieldNode of the {@link Schema} instance is either a leaf or a non-leaf node.
   * <p>The leaf node must have a value; the non-leaf node must have a child {@code FieldNode}.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  class FieldNode {
    /**
     * A constructor used to create a FieldNode instance with the specified field.
     * name Indicates the field node name.
     *
     * @param { string } name - It can not be empty.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * A constructor used to create a FieldNode instance with the specified field.
     * name Indicates the field node name.
     *
     * @param { string } name - It can not be empty.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    constructor(name: string);

    /**
     * Adds a child node to this {@code FieldNode}.
     * <p>Add a child node to makes this node a non-leaf node and field value will be ignored if it has a child node.
     *
     * @param { FieldNode } child - The field node to append.
     * @returns { boolean } Returns true if the child node is successfully added to this {@code FieldNode} and false otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Adds a child node to this {@code FieldNode}.
     * <p>Add a child node to makes this node a non-leaf node and field value will be ignored if it has a child node.
     *
     * @param { FieldNode } child - The field node to append.
     * @returns { boolean } Returns true if the child node is successfully added to this {@code FieldNode} and false
     *     otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    appendChild(child: FieldNode): boolean;

    /**
     * Indicates the default value of field node.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9 dynamic
     */
    /**
     * Indicates the default value of field node.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @crossplatform
     * @since 24 dynamic
     */
    default: string;

    /**
     * Get the default value of field node.
     *
     * @returns { string } returns the default value of field node.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    get defaultValue(): string;

    /**
     * Set the default value of field node.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    set defaultValue(defaultValue: string);

    /**
     * Get the nullable of database field.
     *
     * @returns { boolean } returns the nullable of database field.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the nullable of database field.
     *
     * @returns { boolean } returns the nullable of database field.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get nullable(): boolean;

    /**
     * Set the nullable of database field.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the nullable of database field.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set nullable(isnullable: boolean);

    /**
     * Get the type of value.
     *
     * @returns { int } returns the type of value.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get the type of value.
     *
     * @returns { int } returns the type of value.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get type(): int;

    /**
     * Set the type of value.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Set the type of value.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    set type(type: int);
  }

  /**
   * Provides methods to operate the result set of the {@code SingleKVStore} or {@code DeviceKVStore} database.
   * <p>The result set is created by using the {@code getResultSet} method in the {@code SingleKVStore} or
   * {@code DeviceKVStore} class. This interface also provides methods to move the data read
   * position in the result set.
   *
   * @interface KVStoreResultSet
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides methods to operate the result set of the {@code SingleKVStore} or {@code DeviceKVStore} database.
   * <p>The result set is created by using the {@code getResultSet} method in the {@code SingleKVStore} or
   * {@code DeviceKVStore} class. This interface also provides methods to move the data read
   * position in the result set.
   *
   * @interface KVStoreResultSet
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface KVStoreResultSet {
    /**
     * Obtains the number of lines in a result set.
     *
     * @returns { int } Returns the number of lines.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of lines in a result set.
     *
     * @returns { int } Returns the number of lines.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getCount(): int;

    /**
     * Obtains the current read position in a result set.
     *
     * @returns { int } Returns the current read position. The read position starts with 0.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the current read position in a result set.
     *
     * @returns { int } Returns the current read position. The read position starts with 0.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getPosition(): int;

    /**
     * Moves the read position to the first line.
     * <p>If the result set is empty, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position to the first line.
     * <p>If the result set is empty, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    moveToFirst(): boolean;

    /**
     * Moves the read position to the last line.
     * <p>If the result set is empty, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position to the last line.
     * <p>If the result set is empty, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    moveToLast(): boolean;

    /**
     * Moves the read position to the next line.
     * <p>If the result set is empty or the data in the last line is being read, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position to the next line.
     * <p>If the result set is empty or the data in the last line is being read, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    moveToNext(): boolean;

    /**
     * Moves the read position to the previous line.
     * <p>If the result set is empty or the data in the first line is being read, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position to the previous line.
     * <p>If the result set is empty or the data in the first line is being read, false is returned.
     *
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    moveToPrevious(): boolean;

    /**
     * Moves the read position by a relative offset to the current position.
     *
     * @param { int } offset - Indicates the relative offset to the current position. A negative offset indicates moving
     * backwards, and a positive offset indicates moving forwards. For example, if the current position is entry 1 and
     * this offset is 2, the destination position will be entry 3; if the current position is entry 3 and this offset is -2,
     * the destination position will be entry 1. The valid final position after moving forwards starts with 0. If the
     * final position is invalid, false will be returned.
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position by a relative offset to the current position.
     *
     * @param { int } offset - Indicates the relative offset to the current position. A negative offset indicates moving
     *     backwards, and a positive offset indicates moving forwards. For example, if the current position is entry 1
     *     and this offset is 2, the destination position will be entry 3; if the current position is entry 3 and this
     *     offset is -2, the destination position will be entry 1. The valid final position after moving forwards starts
     *     with 0. If the final position is invalid, false will be returned.
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    move(offset: int): boolean;

    /**
     * Moves the read position from 0 to an absolute position.
     *
     * @param { int } position - Indicates the absolute position.
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Moves the read position from 0 to an absolute position.
     *
     * @param { int } position - Indicates the absolute position.
     * @returns { boolean } Returns true if the operation succeeds; return false otherwise.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    moveToPosition(position: int): boolean;

    /**
     * Checks whether the read position is the first line.
     *
     * @returns { boolean } Returns true if the read position is the first line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the read position is the first line.
     *
     * @returns { boolean } Returns true if the read position is the first line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isFirst(): boolean;

    /**
     * Checks whether the read position is the last line.
     *
     * @returns { boolean } Returns true if the read position is the last line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the read position is the last line.
     *
     * @returns { boolean } Returns true if the read position is the last line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isLast(): boolean;

    /**
     * Checks whether the read position is before the last line.
     *
     * @returns { boolean } Returns true if the read position is before the first line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the read position is before the last line.
     *
     * @returns { boolean } Returns true if the read position is before the first line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isBeforeFirst(): boolean;

    /**
     * Checks whether the read position is after the last line.
     *
     * @returns { boolean } Returns true if the read position is after the last line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the read position is after the last line.
     *
     * @returns { boolean } Returns true if the read position is after the last line; returns false otherwise.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isAfterLast(): boolean;

    /**
     * Obtains a key-value pair.
     *
     * @returns { Entry } Returns a key-value pair.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains a key-value pair.
     *
     * @returns { Entry } Returns a key-value pair.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getEntry(): Entry;
  }

  /**
   * Represents a database query using predicates.
   * <p>This class provides a constructor used to create a {@code Query} instance, which is used to query data
   * matching specified conditions in the database.
   * <p>This class also provides methods to add predicates to the {@code Query} instance.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Represents a database query using predicates.
   * <p>This class provides a constructor used to create a {@code Query} instance, which is used to query data
   * matching specified conditions in the database.
   * <p>This class also provides methods to add predicates to the {@code Query} instance.
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  class Query {
    /**
     * A constructor used to create a Query instance.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * A constructor used to create a Query instance.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    constructor();

    /**
     * Resets this {@code Query} object.
     *
     * @returns { Query } Returns the reset {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Resets this {@code Query} object.
     *
     * @returns { Query } Returns the reset {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    reset(): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is equal to the specified long value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is equal to the
     * specified long value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    equalTo(field: string, value: long | double | string | boolean): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not equal to the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not equal to the
     * specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    notEqualTo(field: string, value: long | double | string | boolean): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or equal to the
     * specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or
     * equal to the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    greaterThan(field: string, value: long | double | string | boolean): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is less than the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is less than the
     * specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    lessThan(field: string, value: long | double | string): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or
     * equal to the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or
     * equal to the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    greaterThanOrEqualTo(field: string, value: long | double | string): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is less than or equal to the
     * specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is less than or
     * equal to the specified int value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string } value - Indicates the value to be compared.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    lessThanOrEqualTo(field: string, value: long | double | string): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is null.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is null.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isNull(field: string): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified int value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long[] | double[] } valueList - Indicates the int value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified
     * int value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long[] | double[] } valueList - Indicates the int value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    inNumber(field: string, valueList: long[] | double[]): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified string value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string[] } valueList - Indicates the string value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified
     * string value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string[] } valueList - Indicates the string value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    inString(field: string, valueList: string[]): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified int value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long[] | double[] } valueList - Indicates the int value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not within the
     * specified int value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long[] | double[] } valueList - Indicates the int value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    notInNumber(field: string, valueList: long[] | double[]): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified string value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string[] } valueList - Indicates the string value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not within the
     * specified string value list.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string[] } valueList - Indicates the string value list.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    notInString(field: string, valueList: string[]): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is similar to the specified string value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string } value - Indicates the string value.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is similar to the
     * specified string value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string } value - Indicates the string value.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    like(field: string, value: string): Query;

    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not similar to the specified string value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string } value - Indicates the string value.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to query entries with the specified field whose value is not similar to the
     * specified string value.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { string } value - Indicates the string value.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    unlike(field: string, value: string): Query;

    /**
     * Constructs a {@code Query} object with the and condition.
     * <p>Multiple predicates should be connected using the and or or condition.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object with the and condition.
     * <p>Multiple predicates should be connected using the and or or condition.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    and(): Query;

    /**
     * Constructs a {@code Query} object with the or condition.
     * <p>Multiple predicates should be connected using the and or or condition.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object with the or condition.
     * <p>Multiple predicates should be connected using the and or or condition.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    or(): Query;

    /**
     * Constructs a {@code Query} object to sort the query results in ascending order.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to sort the query results in ascending order.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    orderByAsc(field: string): Query;

    /**
     * Constructs a {@code Query} object to sort the query results in descending order.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to sort the query results in descending order.
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    orderByDesc(field: string): Query;

    /**
     * Constructs a {@code Query} object to specify the number of results and the start position.
     *
     * @param { int } total - Indicates the number of results.
     * @param { int } offset - Indicates the start position.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Constructs a {@code Query} object to specify the number of results and the start position.
     *
     * @param { int } total - Indicates the number of results.
     * @param { int } offset - Indicates the start position.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    limit(total: int, offset: int): Query;

    /**
     * Creates a {@code Query} condition with a specified field that is not null.
     *
     * @param { string } field - Indicates the specified field.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates a {@code Query} condition with a specified field that is not null.
     *
     * @param { string } field - Indicates the specified field.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    isNotNull(field: string): Query;

    /**
     * Creates a query condition group with a left bracket.
     * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
     * whole to combine with other query conditions.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates a query condition group with a left bracket.
     * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can
     * be used as a whole to combine with other query conditions.
     *
     * @returns { Query } Returns the {@coed Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    beginGroup(): Query;

    /**
     * Creates a query condition group with a right bracket.
     * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
     * whole to combine with other query conditions.
     *
     * @returns { Query } Returns the {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates a query condition group with a right bracket.
     * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can
     * be used as a whole to combine with other query conditions.
     *
     * @returns { Query } Returns the {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    endGroup(): Query;

    /**
     * Creates a query condition with a specified key prefix.
     *
     * @param { string } prefix - Indicates the specified key prefix.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates a query condition with a specified key prefix.
     *
     * @param { string } prefix - Indicates the specified key prefix.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    prefixKey(prefix: string): Query;

    /**
     * Sets a specified index that will be preferentially used for query.
     *
     * @param { string } index - Indicates the index to set.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Sets a specified index that will be preferentially used for query.
     *
     * @param { string } index - Indicates the index to set.
     * @returns { Query } Returns the {@coed Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    setSuggestIndex(index: string): Query;

    /**
     * Add device ID key prefix.Used by {@code DeviceKVStore}.
     *
     * @param { string } deviceId - Specify device id to query from, It can not be empty.
     * @returns { Query } Returns the {@code Query} object with device ID prefix added.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId(deviceId: string): Query;

    /**
     * Get a String that represents this {@code Query}.
     * <p>The String would be parsed to DB query format.
     * The String length should be no longer than 500kb.
     *
     * @returns { string } String representing this {@code Query}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Get a String that represents this {@code Query}.
     * <p>The String would be parsed to DB query format.
     * The String length should be no longer than 500kb.
     *
     * @returns { string } String representing this {@code Query}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getSqlLike(): string;
  }

  /**
   * Provides methods related to single-version distributed databases.
   * <p>To create a {@code SingleKVStore} database,
   * you can use the {@link data.distributed.common.KVManager#getKVStore​(Options, String)} method
   * with {@code KVStoreType} set to {@code SINGLE_VERSION} for the input parameter {@code Options}.
   * This database synchronizes data to other databases in time sequence.
   * The {@code SingleKVStore} database does not support
   * synchronous transactions, or data search using snapshots.
   *
   * @interface SingleKVStore
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides methods related to single-version distributed databases.
   * <p>To create a {@code SingleKVStore} database,
   * you can use the {@link data.distributed.common.KVManager#getKVStore​(Options, String)} method
   * with {@code KVStoreType} set to {@code SINGLE_VERSION} for the input parameter {@code Options}.
   * This database synchronizes data to other databases in time sequence.
   * The {@code SingleKVStore} database does not support
   * synchronous transactions, or data search using snapshots.
   *
   * @interface SingleKVStore
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface SingleKVStore {
    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of put.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of put.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local
     * database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     *     Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of put.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    put(key: string, value: Uint8Array | string | long | double | boolean, callback: AsyncCallback<void>): void;

    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Writes a key-value pair of the string type into the {@code SingleKVStore} database.
     * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local
     * database.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     *     Spaces before and after the key will be cleared.
     * @param { Uint8Array | string | long | double | boolean } value - Indicates the value to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    put(key: string, value: Uint8Array | string | long | double | boolean): Promise<void>;

    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    putBatch(entries: Entry[], callback: AsyncCallback<void>): void;

    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Inserts key-value pairs into the {@code SingleKVStore} database in batches.
     *
     * @param { Entry[] } entries - Indicates the key-value pairs to be inserted in batches.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    putBatch(entries: Entry[]): Promise<void>;

    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     */
    putBatch(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;

    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     */
    putBatch(value: Array<ValuesBucket>): Promise<void>;

    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @param { AsyncCallback<void> } callback - the callback of putBatch.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    putValuesBuckets(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;

    /**
     * Writes values of ValuesBucket type into the {@code SingleKVStore} database.
     *
     * @param { Array<ValuesBucket> } value - Indicates the ValuesBucket array to be inserted.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    putValuesBuckets(value: Array<ValuesBucket>): Promise<void>;

    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { AsyncCallback<void> } callback - the callback of delete.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param { AsyncCallback<void> } callback - the callback of delete.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     *     Spaces before and after the key will be cleared.
     * @param { AsyncCallback<void> } callback - the callback of delete.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    delete(key: string, callback: AsyncCallback<void>): void;

    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param { string } key - Indicates the key. Length must be less than {@code MAX_KEY_LENGTH}.
     *     Spaces before and after the key will be cleared.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    delete(key: string): Promise<void>;

    /**
     * Deletes the key-value pairs based on the dataSharePredicates.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @param { AsyncCallback<void> } callback - the callback of delete.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Deletes the key-value pairs based on the dataSharePredicates.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @param { AsyncCallback<void> } callback - the callback of delete.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    delete(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): void;

    /**
     * Deletes the key-value pairs based on the dataSharePredicates.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Deletes the key-value pairs based on the dataSharePredicates.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    delete(predicates: dataSharePredicates.DataSharePredicates): Promise<void>;

    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @param { AsyncCallback<void> } callback - the callback of deleteBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @param { AsyncCallback<void> } callback - the callback of deleteBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @param { AsyncCallback<void> } callback - the callback of deleteBatch.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteBatch(keys: string[], callback: AsyncCallback<void>): void;

    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Deletes key-value pairs in batches from the {@code SingleKVStore} database.
     *
     * @param { string[] } keys - Indicates the key-value pairs to be deleted in batches, It can not be empty.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteBatch(keys: string[]): Promise<void>;

    /**
     * Removes data of the specified device from current database. This method is used to remove only the data
     * synchronized from remote devices. This operation does not synchronize data to other databases or affect
     * subsequent data synchronization.
     *
     * @param { string } deviceId - Identifies the device whose data is to be removed and the value cannot be the current device ID.
     * @param { AsyncCallback<void> } callback - the callback of removeDeviceData.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * Removes data of the specified device from current database. This method is used to remove only the data
     * synchronized from remote devices. This operation does not synchronize data to other databases or affect
     * subsequent data synchronization.
     *
     * @param { string } deviceId - Identifies the device whose data is to be removed and the value cannot be the current device ID.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    removeDeviceData(deviceId: string): Promise<void>;

    /**
     * Obtains the value of a specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback -
     * {Uint8Array|string|boolean|long|double}: the returned value specified by the key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the value of a specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback -
     *     {Uint8Array|string|boolean|long|double}: the returned value specified by the key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get(key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * Obtains the value of a specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<boolean | string | long | double | Uint8Array> }
     * {Uint8Array|string|boolean|long|double}: the returned value specified by the key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the value of a specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<boolean | string | long | double | Uint8Array> }
     *     {Uint8Array|string|boolean|long|double}: the returned value specified by the key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    get(key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * Obtains all key-value pairs that match a specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * that match the specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains all key-value pairs that match a specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     *     that match the specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains all key-value pairs that match a specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs that match the
     * specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains all key-value pairs that match a specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs that match the
     *     specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getEntries(keyPrefix: string): Promise<Entry[]>;

    /**
     * Obtains the list of key-value pairs matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the list of key-value pairs matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     *     matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains the list of key-value pairs matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs matching the
     * specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the list of key-value pairs matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs matching the
     *     specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     *     object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database. The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Obtains the result set with a specified prefix from a {@code SingleKVStore} database.
     * The {@code KVStoreResultSet}
     * object can be used to query all key-value pairs that meet the search criteria. Each {@code SingleKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created
     * four objects, calling this method will return a failure. Therefore, you are advised to call the closeResultSet
     * method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     *     object matching the specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSet(keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     *     object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     *     object matching the specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSet(query: Query): Promise<KVStoreResultSet>;

    /**
     * Obtains the KVStoreResultSet object matching the specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching the specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the KVStoreResultSet object matching the specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching the specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * Closes a {@code KVStoreResultSet} object returned by getResultSet method.
     *
     * @param { KVStoreResultSet } resultSet - Indicates the {@code KVStoreResultSet} object to close.
     * @param { AsyncCallback<void> } callback - the callback of closeResultSet.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Closes a {@code KVStoreResultSet} object returned by getResultSet method.
     *
     * @param { KVStoreResultSet } resultSet - Indicates the {@code KVStoreResultSet} object to close.
     * @param { AsyncCallback<void> } callback - the callback of closeResultSet.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>): void;

    /**
     * Closes a {@code KVStoreResultSet} object returned by getResultSet method.
     *
     * @param { KVStoreResultSet } resultSet - Indicates the {@code KVStoreResultSet} object to close.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Closes a {@code KVStoreResultSet} object returned by getResultSet method.
     *
     * @param { KVStoreResultSet } resultSet - Indicates the {@code KVStoreResultSet} object to close.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    closeResultSet(resultSet: KVStoreResultSet): Promise<void>;

    /**
     * Obtains the number of results matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<int> } callback - {int}: the number of results matching the
     * specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of results matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<int> } callback - {int}: the number of results matching the
     *     specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSize(query: Query, callback: AsyncCallback<int>): void;

    /**
     * Obtains the number of results matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<int> } {int}: the number of results matching the specified
     * {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of results matching the specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<int> } {int}: the number of results matching the specified
     *     {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getResultSize(query: Query): Promise<int>;

    /**
     * Backs up a database in the specified filename.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<void> } callback - the callback of backup.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Backs up a database in the specified filename.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<void> } callback - the callback of backup.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    backup(file: string, callback: AsyncCallback<void>): void;

    /**
     * Backs up a database in the specified filename.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Backs up a database in the specified filename.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    backup(file: string): Promise<void>;

    /**
     * Backs up a database by specifying {@code BackupConfig}.
     *
     * @param { BackupConfig } backupConfig - Indicates the {@code BackupConfig} object for backup database.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    backupEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * Restores a database from a specified database file.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<void> } callback - the callback of restore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Restores a database from a specified database file.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<void> } callback - the callback of restore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    restore(file: string, callback: AsyncCallback<void>): void;

    /**
     * Restores a database from a specified database file.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Restores a database from a specified database file.
     *
     * @param { string } file - Indicates the database backup filename, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    restore(file: string): Promise<void>;

    /**
     * Restores a database by specifying {@code BackupConfig}.
     *
     * @param { BackupConfig } backupConfig - Indicates the {@code BackupConfig} object for restore database.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    restoreEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * Delete database backup files based on the specified filenames.
     *
     * @param { Array<string> } files - Indicates the backup filenames to be deleted, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<Array<[string, int]>> } callback - {Array<[string, int]>}:
     * the list of backup file and it's corresponding delete result which 0 means delete success
     * and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Delete database backup files based on the specified filenames.
     *
     * @param { Array<string> } files - Indicates the backup filenames to be deleted, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<Array<[string, int]>> } callback - {Array<[string, int]>}:
     *     the list of backup file and it's corresponding delete result which 0 means delete success
     *     and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteBackup(files: Array<string>, callback: AsyncCallback<Array<[string, int]>>): void;

    /**
     * Delete database backup files based on the specified filenames.
     *
     * @param { Array<string> } files - Indicates the backup filenames to be deleted, It can not be empty and
     * The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<Array<[string, int]>> } {Array<[string, int]>}: the list of backup
     * file and it's corresponding delete result which 0 means delete success and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Delete database backup files based on the specified filenames.
     *
     * @param { Array<string> } files - Indicates the backup filenames to be deleted, It can not be empty and
     *     The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<Array<[string, int]>> } {Array<[string, int]>}: the list of backup
     *     file and it's corresponding delete result which 0 means delete success and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteBackup(files: Array<string>): Promise<Array<[string, int]>>;

    /**
     * Delete database backup file by specifying {@code BackupConfig}.
     *
     * @param { BackupConfig } backupConfig - Indicates the {@code BackupConfig} object for delete backup file.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 24 dynamic&static
     */
    deleteBackupEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @param { AsyncCallback<void> } callback - the callback of startTransaction.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @param { AsyncCallback<void> } callback - the callback of startTransaction.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @param { AsyncCallback<void> } callback - the callback of startTransaction.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    startTransaction(callback: AsyncCallback<void>): void;

    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Starts a transaction operation in the {@code SingleKVStore} database.
     * <p>After the database transaction is started, you can submit or roll back the operation.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    startTransaction(): Promise<void>;

    /**
     * Submits a transaction operation in the {@code SingleKVStore} database.
     *
     * @param { AsyncCallback<void> } callback - the callback of commit.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Submits a transaction operation in the {@code SingleKVStore} database.
     *
     * @param { AsyncCallback<void> } callback - the callback of commit.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    commit(callback: AsyncCallback<void>): void;

    /**
     * Submits a transaction operation in the {@code SingleKVStore} database.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Submits a transaction operation in the {@code SingleKVStore} database.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    commit(): Promise<void>;

    /**
     * Rolls back a transaction operation in the {@code SingleKVStore} database.
     *
     * @param { AsyncCallback<void> } callback - the callback of rollback.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Rolls back a transaction operation in the {@code SingleKVStore} database.
     *
     * @param { AsyncCallback<void> } callback - the callback of rollback.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    rollback(callback: AsyncCallback<void>): void;

    /**
     * Rolls back a transaction operation in the {@code SingleKVStore} database.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Rolls back a transaction operation in the {@code SingleKVStore} database.
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    rollback(): Promise<void>;

    /**
     * Sets whether to enable synchronization.
     *
     * @param { boolean } enabled - Specifies whether to enable synchronization. The value true
     * means to enable synchronization, and false means the opposite.
     * @param { AsyncCallback<void> } callback - the callback of enableSync.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    enableSync(enabled: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to enable synchronization.
     *
     * @param { boolean } enabled - Specifies whether to enable synchronization. The value true
     * means to enable synchronization, and false means the opposite.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    enableSync(enabled: boolean): Promise<void>;

    /**
     * Sets synchronization range labels.
     * <p>The labels determine the devices with which data will be synchronized.
     *
     * @param { string[] } localLabels - Indicates the synchronization labels of the local device.
     * @param { string[] } remoteSupportLabels - Indicates the labels of the devices with which
     * data will be synchronized.
     * @param { AsyncCallback<void> } callback - the callback of setSyncRange.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;

    /**
     * Sets synchronization range labels.
     * <p>The labels determine the devices with which data will be synchronized.
     *
     * @param { string[] } localLabels - Indicates the synchronization labels of the local device.
     * @param { string[] } remoteSupportLabels - Indicates the labels of the devices with which
     * data will be synchronized.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;

    /**
     * Sets the default delay allowed for database synchronization
     *
     * @param { int } defaultAllowedDelayMs - Indicates the default delay allowed for the
     * database synchronization, in milliseconds.
     * @param { AsyncCallback<void> } callback - the callback of setSyncParam.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncParam(defaultAllowedDelayMs: int, callback: AsyncCallback<void>): void;

    /**
     * Sets the default delay allowed for database synchronization
     *
     * @param { int } defaultAllowedDelayMs - Indicates the default delay allowed for the
     * database synchronization, in milliseconds.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncParam(defaultAllowedDelayMs: int): Promise<void>;

    /**
     * Synchronize the database to the specified devices with the specified delay allowed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - Indicates the list of devices to which to synchronize the database.
     * @param { SyncMode } mode - Indicates the synchronization mode. The value can be {@code PUSH},
     * {@code PULL}, or {@code PUSH_PULL}.
     * @param { int } delayMs - Indicates the delay allowed for the synchronization, in milliseconds.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    sync(deviceIds: string[], mode: SyncMode, delayMs?: int): void;

    /**
     * Synchronize the database to the specified devices with the specified delay allowed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - Indicates the list of devices to which to synchronize the database.
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { SyncMode } mode - Indicates the synchronization mode. The value can be {@code PUSH},
     * {@code PULL}, or {@code PUSH_PULL}.
     * @param { int } delayMs - Indicates the delay allowed for the synchronization, in milliseconds.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    sync(deviceIds: string[], query: Query, mode: SyncMode, delayMs?: int): void;

    /**
     * Register a callback to the database and when data in the distributed database has changed,
     * the callback will be invoked.
     *
     * @param { 'dataChange' } event - Subscribed event name, fixed as 'dataChange', indicates the data change event.
     * @param { SubscribeType } type - Indicates the subscription type, which is defined in {@code SubscribeType}.
     * @param { Callback<ChangeNotification> } listener - {ChangeNotification}: the {@code ChangeNotification}
     * object indicates the data change events in the distributed database.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Register a callback to the database and when data in the distributed database has changed,
     * the callback will be invoked.
     *
     * @param { 'dataChange' } event - Subscribed event name, fixed as 'dataChange', indicates the data change event.
     * @param { SubscribeType } type - Indicates the subscription type, which is defined in {@code SubscribeType}.
     * @param { Callback<ChangeNotification> } listener - {ChangeNotification}: the {@code ChangeNotification}
     * object indicates the data change events in the distributed database.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 10 dynamic
     */
    on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * Register a callback to the database and when data in the distributed database has changed,
     * the callback will be invoked.
     *
     * @param { SubscribeType } type - Indicates the subscription type, which is defined in {@code SubscribeType}.
     * @param { Callback<ChangeNotification> } listener - {ChangeNotification}: the {@code ChangeNotification}
     *     object indicates the data change events in the distributed database.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * Register a databases synchronization callback to the database.
     * <p> Sync result is returned through asynchronous callback.
     *
     * @param { 'syncComplete' } event - Subscribed event name, fixed as 'syncComplete', indicates the synchronization completion event.
     * @param { Callback<Array<[string, number]>> } syncCallback - {Array<[string, number]>}: the
     * deviceId and it's corresponding synchronization result which 0 means synchronization success
     * and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

    /**
     * Register a databases synchronization callback to the database.
     * <p> Sync result is returned through asynchronous callback.
     *
     * @param { Callback<Array<[string, int]>> } syncCallback - {Array<[string, int]>}: the
     *     deviceId and it's corresponding synchronization result which 0 means synchronization success
     *     and otherwise failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    onSyncComplete(syncCallback: Callback<Array<[string, int]>>): void;

    /**
     * Unsubscribe from the SingleKVStore database based on the specified subscribeType and listener.
     *
     * @param { 'dataChange' } event - The unsubscribe event name, fixed as 'dataChange', indicates the data change event.
     * @param { Callback<ChangeNotification> } listener - {ChangeNotification}: the {@code ChangeNotification}
     * object indicates the data change events in the distributed database.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

    /**
     * Unsubscribe from the SingleKVStore database based on the specified subscribeType and listener.
     *
     * @param { Callback<ChangeNotification> } [listener] - {ChangeNotification}: the {@code ChangeNotification}
     *     object indicates the data change events in the distributed database.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(listener?: Callback<ChangeNotification>): void;

    /**
     * Unregister the database synchronization callback.
     *
     * @param { 'syncComplete' } event - The unsubscribe event name, fixed as 'syncComplete', indicates the synchronization completion event.
     * @param { Callback<Array<[string, number]>> } syncCallback - {Array<[string, number]>}: the
     * deviceId and it's corresponding synchronization result which 0 means synchronization success
     * and otherwise failed.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

    /**
     * Unregister the database synchronization callback.
     *
     * @param { Callback<Array<[string, int]>> } [syncCallback] - {Array<[string, int]>}: the
     *     deviceId and it's corresponding synchronization result which 0 means synchronization success
     *     and otherwise failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    offSyncComplete(syncCallback?: Callback<Array<[string, int]>>): void;

    /**
     * Get the security level of the database.
     *
     * @param { AsyncCallback<SecurityLevel> } callback - {SecurityLevel}: the {@code SecurityLevel}
     * object indicates the security level of the database.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;

    /**
     * Get the security level of the database.
     *
     * @returns { Promise<SecurityLevel> } {SecurityLevel}: the {@code SecurityLevel} object indicates
     * the security level of the database.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getSecurityLevel(): Promise<SecurityLevel>;
  }

  /**
   * Provides methods related to device-collaboration distributed databases.
   * <p>To create a {@code DeviceKVStore} database, you can use the {@link data.distributed.common.KVManager.getKVStore(Options, String)}
   * method with {@code KVStoreType} set to {@code DEVICE_COLLABORATION} for the input parameter Options. This database manages distributed
   * data by device, and cannot modify data synchronized from remote devices. When an application writes a key-value pair entry
   * into the database, the system automatically adds the ID of the device running the application to the key.
   *
   * @extends SingleKVStore
   * @typedef DeviceKVStore
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DeviceKVStore extends SingleKVStore {
    /**
     * Obtains the value matching the local device ID and specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback -
     * {Uint8Array|string|boolean|long|double}: the returned value specified by the local device ID and specified key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * Obtains the value matching the local device ID and specified key.
     *
     * @param { string } key - Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<boolean | string | long | double | Uint8Array> }
     * {Uint8Array|string|boolean|long|double}: the returned value specified by the local device ID and specified key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * Obtains the value matching a specified device ID and key.
     *
     * @param { string } deviceId - Indicates the device to be queried.
     * @param { string } key - Indicates the key of the value to be queried. The length must be less than {@code MAX_KEY_LENGTH}.
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback -
     * {boolean | string | long | double | Uint8Array}: the returned value specified by the deviceId and key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * Obtains the value matching a specified device ID and key.
     *
     * @param { string } deviceId - Indicates the device to be queried.
     * @param { string } key - Indicates the key of the value to be queried. The length must be less than {@code MAX_KEY_LENGTH}.
     * @returns { Promise<boolean | string | long | double | Uint8Array> }
     * {Uint8Array|string|boolean|long|double}: the returned value specified by the deviceId and key.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(deviceId: string, key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * Obtains all key-value pairs that match the local device ID and specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * that match the local device ID and specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains all key-value pairs that match the local device ID and specified key prefix.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs that match the
     * local device ID and specified key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(keyPrefix: string): Promise<Entry[]>;

    /**
     * Obtains all key-value pairs matching a specified device ID and key prefix.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * that match the specified deviceId and key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains all key-value pairs matching a specified device ID and key prefix.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs that match the
     * specified deviceId and key prefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

    /**
     * Obtains the list of key-value pairs matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * matching the local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains the list of key-value pairs matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs matching the local device ID and
     * specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * Obtains the list of key-value pairs matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the key-value pairs belong.
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<Entry[]> } callback - {Entry[]}: the list of all key-value pairs
     * matching the specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * Obtains the list of key-value pairs matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the key-value pairs belong.
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<Entry[]> } {Entry[]}: the list of all key-value pairs matching the
     * specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, query: Query): Promise<Entry[]>;

    /**
     * Obtains the result set with the local device ID and specified prefix from a {@code DeviceKVStore} database.
     * The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria.
     * Each {@code DeviceKVStore} instance can have a maximum of four {@code KVStoreResultSet} objects at the same time.
     * If you have created four objects, calling this method will return a failure. Therefore, you are advised to
     * call the closeResultSet method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    /**
     * Obtains the result set with the local device ID and specified prefix from a {@code DeviceKVStore} database.
     * The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria.
     * Each {@code DeviceKVStore} instance can have a maximum of four {@code KVStoreResultSet} objects at the same time.
     * If you have created four objects, calling this method will return a failure. Therefore, you are advised to
     * call the closeResultSet method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the result set with the local device ID and specified prefix from a {@code DeviceKVStore} database.
     * The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria.
     * Each {@code DeviceKVStore} instance can have a maximum of four {@code KVStoreResultSet} objects at the same time.
     * If you have created four objects, calling this method will return a failure. Therefore, you are advised to
     * call the closeResultSet method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the result set with the local device ID and specified prefix from a {@code DeviceKVStore} database.
     * The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria.
     * Each {@code DeviceKVStore} instance can have a maximum of four {@code KVStoreResultSet} objects at the same time.
     * If you have created four objects, calling this method will return a failure. Therefore, you are advised to
     * call the closeResultSet method to close unnecessary {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
     * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code DeviceKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
     * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
     * {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
     * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code DeviceKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
     * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
     * {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
     * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code DeviceKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
     * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
     * {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the specified device ID and key prefix.
     * <p>The {@code KVStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code DeviceKVStore}
     * instance can have a maximum of four {@code KVStoreResultSet} objects at the same time. If you have created four objects,
     * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
     * {@code KVStoreResultSet} objects in a timely manner.
     *
     * @param { string } deviceId - Identifies the device whose data is to be queried.
     * @param { string } keyPrefix - Indicates the key prefix to match.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and keyPrefix.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the {@code KVStoreResultSet} object matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(query: Query): Promise<KVStoreResultSet>;

    /**
     * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9
     */
    /**
     * Obtains the {@code KVStoreResultSet} object matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the {@code KVStoreResultSet} object belongs.
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, query: Query): Promise<KVStoreResultSet>;

    /**
     * Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the datasharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @param { AsyncCallback<KVStoreResultSet> } callback - {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the dataSharePredicates.
     * @returns { Promise<KVStoreResultSet> } {KVStoreResultSet}: the {@code KVStoreResultSet}
     * object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * Obtains the number of results matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<int> } callback - {int}: the number of results matching the
     * local device ID and specified {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(query: Query, callback: AsyncCallback<int>): void;

    /**
     * Obtains the number of results matching the local device ID and specified {@code Query} object.
     *
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<int> } {int}: the number of results matching the local device ID and specified
     * {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(query: Query): Promise<int>;

    /**
     * Obtains the number of results matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the results belong.
     * @param { Query } query - Indicates the {@code Query} object.
     * @param { AsyncCallback<int> } callback - {int}: the number of results matching the
     * specified deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(deviceId: string, query: Query, callback: AsyncCallback<int>): void;

    /**
     * Obtains the number of results matching a specified device ID and {@code Query} object.
     *
     * @param { string } deviceId - Indicates the ID of the device to which the results belong.
     * @param { Query } query - Indicates the {@code Query} object.
     * @returns { Promise<int> } {int}: the number of results matching the specified
     * deviceId and {@code Query} object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(deviceId: string, query: Query): Promise<int>;
  }

  /**
   * Creates a {@link KVManager} instance based on the configuration information.
   * <p>You must pass {@link KVManagerConfig} to provide configuration information
   * to create a {@link KVManager} instance.
   *
   * @param { KVManagerConfig } config - Indicates the KVStore configuration information,
   * including the package name and context, and package name can not be empty.
   * @returns { KVManager } : the {@code KVManager} instance.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameters types;
   * <br>3.Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Creates a {@link KVManager} instance based on the configuration information.
   * <p>You must pass {@link KVManagerConfig} to provide configuration information
   * to create a {@link KVManager} instance.
   *
   * @param { KVManagerConfig } config - Indicates the KVStore configuration information,
   *     including the package name and context, and package name can not be empty.
   * @returns { KVManager } : the {@code KVManager} instance.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameters types;
   *     <br>3.Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  function createKVManager(config: KVManagerConfig): KVManager;

  /**
   * Provides interfaces to manage a {@code SingleKVStore} database, including obtaining, closing, and deleting the {@code SingleKVStore}.
   *
   * @interface KVManager
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  /**
   * Provides interfaces to manage a {@code SingleKVStore} database, including obtaining, closing, and deleting the
   * {@code SingleKVStore}.
   *
   * @interface KVManager
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly[staticonly]
   * @crossplatform
   * @since 24 dynamic&static
   */
  interface KVManager {
    /**
     * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
     *
     * @param { string } storeId - Identifies the KVStore database. The value of this parameter must be unique
     * for the same application, and different applications can share the same value. The storeId can consist
     * of only letters, digits, and underscores (_), and cannot exceed 128 characters.
     * @param { Options } options - Indicates the {@code Options} object used for creating and
     * obtaining the KVStore database.
     * @param { AsyncCallback<T> } callback - {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
     *
     * @param { string } storeId - Identifies the KVStore database. The value of this parameter must be unique
     *     for the same application, and different applications can share the same value. The storeId can consist
     *     of only letters, digits, and underscores (_), and cannot exceed 128 characters.
     * @param { Options } options - Indicates the {@code Options} object used for creating and
     *     obtaining the KVStore database.
     * @param { AsyncCallback<T> } callback - {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

    /**
     * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
     *
     * @param { string } storeId - Identifies the KVStore database. The value of this parameter must be unique
     * for the same application, and different applications can share the same value. The storeId can consist
     * of only letters, digits, and underscores (_), and cannot exceed 128 characters.
     * @param { Options } options - Indicates the {@code Options} object used for creating and
     * obtaining the KVStore database.
     * @returns { Promise<T> } {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Creates and obtains a KVStore database by specifying {@code Options} and {@code storeId}.
     *
     * @param { string } storeId - Identifies the KVStore database. The value of this parameter must be unique
     *     for the same application, and different applications can share the same value. The storeId can consist
     *     of only letters, digits, and underscores (_), and cannot exceed 128 characters.
     * @param { Options } options - Indicates the {@code Options} object used for creating and
     *     obtaining the KVStore database.
     * @returns { Promise<T> } {T}: the {@code SingleKVStore} or {@code DeviceKVStore} instance.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    getKVStore<T>(storeId: string, options: Options): Promise<T>;

    /**
     * Closes the KVStore database.
     * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
     * thread may crash.
     * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
     * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
     * closing the database will fail.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256 characters.
     * @param { string } storeId - Identifies the KVStore database to close. The storeId can consist of only letters, digits,
     * and underscores (_), and cannot exceed 128 characters.
     * @param { AsyncCallback<void> } callback - the callback of closeKVStore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Closes the KVStore database.
     * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
     * thread may crash.
     * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
     * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
     * closing the database will fail.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256 characters.
     * @param { string } storeId - Identifies the KVStore database to close. The storeId can consist of only letters, digits,
     *     and underscores (_), and cannot exceed 128 characters.
     * @param { AsyncCallback<void> } callback - the callback of closeKVStore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

    /**
     * Closes the KVStore database.
     * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
     * thread may crash.
     * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
     * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
     * closing the database will fail.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256 characters.
     * @param { string } storeId - Identifies the KVStore database to close. The storeId can consist of only letters, digits,
     * and underscores (_), and cannot exceed 128 characters.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Closes the KVStore database.
     * <p>Warning: This method is not thread-safe. If you call this method to stop a KVStore database that is running, your
     * thread may crash.
     * <p>The KVStore database to close must be an object created by using the {@code getKVStore} method. Before using this
     * method, release the resources created for the database, for example, {@code KVStoreResultSet} for KVStore, otherwise
     * closing the database will fail.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256 characters.
     * @param { string } storeId - Identifies the KVStore database to close. The storeId can consist of only letters, digits,
     *     and underscores (_), and cannot exceed 128 characters.
     * @param { Options } [kvConfig] - Indicates the {@code Options} object used for close the KVStore database.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    closeKVStore(appId: string, storeId: string, kvConfig?: Options): Promise<void>;

    /**
     * Deletes the KVStore database identified by storeId.
     * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
     * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data will be
     * lost.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256 characters.
     * @param { string } storeId - Identifies the KVStore database to delete. The storeId can consist of only letters, digits,
     * and underscores (_), and cannot exceed 128 characters.
     * @param { AsyncCallback<void> } callback - the callback of deleteKVStore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Deletes the KVStore database identified by storeId.
     * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
     * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data
     * will be lost.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256
     *     characters.
     * @param { string } storeId - Identifies the KVStore database to delete. The storeId can consist of only letters,
     *     digits, and underscores (_), and cannot exceed 128 characters.
     * @param { AsyncCallback<void> } callback - the callback of deleteKVStore.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

    /**
     * Deletes the KVStore database identified by storeId.
     * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
     * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data
     * will be lost.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256
     * characters.
     * @param { string } storeId - Identifies the KVStore database to delete. The storeId can consist of only letters,
     * digits, and underscores (_), and cannot exceed 128 characters.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    /**
     * Deletes the KVStore database identified by storeId.
     * <p>Before using this method, close all KVStore instances in use that are identified by the same storeId.
     * <p>You can use this method to delete a KVStore database not in use. After the database is deleted, all its data
     * will be lost.
     *
     * @param { string } appId - Identifies the application that the database belong to, and cannot exceed 256
     *     characters.
     * @param { string } storeId - Identifies the KVStore database to delete. The storeId can consist of only letters,
     *     digits, and underscores (_), and cannot exceed 128 characters.
     * @param { Options } [kvConfig] - Indicates the {@code Options} object used for delete the KVStore database.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @crossplatform
     * @since 24 dynamic&static
     */
    deleteKVStore(appId: string, storeId: string, kvConfig?: Options): Promise<void>;

    /**
     * Obtains the storeId of all KVStore databases that are created by using the {@code getKVStore} method and not deleted by
     * calling the {@code deleteKVStore} method.
     *
     * @param { string } appId - Identifies the application that obtains the databases, and cannot exceed 256 characters.
     * @param { AsyncCallback<string[]> } callback - {string[]}: the storeId of all created KVStore databases.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;

    /**
     * Obtains the storeId of all KVStore databases that are created by using the {@code getKVStore} method and not
     * deleted by calling the {@code deleteKVStore} method.
     *
     * @param { string } appId - Identifies the application that obtains the databases, and cannot exceed 256
     * characters.
     * @returns { Promise<string[]> } {string[]}: the storeId of all created KVStore databases.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly[staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getAllKVStoreId(appId: string): Promise<string[]>;

    /**
     * Register a death callback to get notification when the data manager service is terminated.
     * <p>If the data manager service is terminated,you need to re-subscribe to data change notifications and synchronization
     * completion notifications, and calling the sync method will return a failure.
     *
     * @param { 'distributedDataServiceDie' } event - Subscribed event name, fixed as 'distributedDataServiceDie', as a service status change events.
     * @param { Callback<void> } deathCallback - callback to be invoked when the data manager service is terminated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9 dynamic
     */
    on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

    /**
     * Register a death callback to get notification when the data manager service is terminated.
     * <p>If the data manager service is terminated,you need to re-subscribe to data change notifications and synchronization
     * completion notifications, and calling the sync method will return a failure.
     *
     * @param { Callback<void> } deathCallback - callback to be invoked when the data manager service is terminated.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    onDistributedDataServiceDie(deathCallback: Callback<void>): void;

    /**
     * Unregister the death callback. Not notification will be received when the data manager service is terminated.
     * <p>The unregistered death callback must be a registered death callback of the database. If no death callback parameter
     * is passed, all database death callbacks will be unregistered.
     *
     * @param { 'distributedDataServiceDie' } event - Unsubscribe event name, fixed as 'distributedDataServiceDie', as a service status change events.
     * @param { Callback<void> } deathCallback - the data manager service is terminated callback which has been registered.
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9 dynamic
     */
    off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;

    /**
     * Unregister the death callback. Not notification will be received when the data manager service is terminated.
     * <p>The unregistered death callback must be a registered death callback of the database. If no death callback parameter
     * is passed, all database death callbacks will be unregistered.
     *
     * @param { Callback<void> } [deathCallback] - the data manager service is terminated callback which has been registered.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    offDistributedDataServiceDie(deathCallback?: Callback<void>): void;
  }
}

export default distributedKVStore;