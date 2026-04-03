
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit ConnectivityKit
 */

/**
 * Provide common Bluetooth interfaces and types.
 *
 * @namespace common
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace common {
    /**
     * Describe the type of Bluetooth address.
     *
     * @typedef BluetoothAddress
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 23 static
     */
    export interface BluetoothAddress {
      /**
       * The string of the Bluetooth address.
       *
       * @type { string }
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 21 dynamic
       * @since 23 static
       */
      address: string;
      /**
       * The type of the Bluetooth address.
       *
       * @type { BluetoothAddressType }
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 21 dynamic
       * @since 23 static
       */
      addressType: BluetoothAddressType;
      /**
       * Address type defined by the Bluetooth Core Specification.
       * It is used only when the {@link BluetoothAddress#addressType} is {@link BluetoothAddressType#REAL}.
       *
       * @type { ?BluetoothRawAddressType }
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 23 dynamic&static
       */
      rawAddressType?: BluetoothRawAddressType;
    }

    /**
     * Enum for the type of Bluetooth address.
     *
     * @enum { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 23 static
     */
    export enum BluetoothAddressType {
      /**
       * virtual address.
       *
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 21 dynamic
       * @since 23 static
       */
      VIRTUAL = 1,
      /**
       * real address.
       *
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 21 dynamic
       * @since 23 static
       */
      REAL = 2
    }

    /**
     * Enum for the type of Bluetooth raw address.
     * The enum is used only when the {@link BluetoothAddress#addressType} is {@link BluetoothAddressType#REAL}.
     *
     * @enum { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic&static
     */
    export enum BluetoothRawAddressType {
      /**
       * Public address type defined by the Bluetooth Core Specification.
       *
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 23 dynamic&static
       */
      PUBLIC = 0,
      /**
       * Random address type defined by the Bluetooth Core Specification.
       *
       * @syscap SystemCapability.Communication.Bluetooth.Core
       * @since 23 dynamic&static
       */
      RANDOM = 1
    }
  }

  export default common;