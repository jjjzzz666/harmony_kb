/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
import type common from './@ohos.bluetooth.common';

/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10
 */
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @atomicservice
 * @since 12
 */
/**
 * Provides methods to operate or manage Bluetooth.
 *
 * @namespace ble
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 * @since 23 static
 */
declare namespace ble {
  /**
   * Indicate the profile connection state.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Indicate the profile connection state.
   *
   * @typedef { constant.ProfileConnectionState } ProfileConnectionState
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Indicate the profile connection state.
   *
   * @typedef { constant.ProfileConnectionState } ProfileConnectionState
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  type ProfileConnectionState = constant.ProfileConnectionState;
  /**
   * Bluetooth device address.
   *
   * @typedef { common.BluetoothAddress } BluetoothAddress
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 23 dynamic&static
   */
  type BluetoothAddress = common.BluetoothAddress;
  /**
   * create a Gatt server instance.
   *
   * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * create a Gatt server instance.
   *
   * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * create a Gatt server instance.
   *
   * @returns { GattServer } Returns a Gatt server instance {@code GattServer}.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function createGattServer(): GattServer;

  /**
   * create a Gatt client device instance.
   *
   * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
   * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * create a Gatt client device instance.
   *
   * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
   * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * create a Gatt client device instance.
   *
   * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
   * @returns { GattClientDevice } Returns a Gatt client device instance {@code GattClientDevice}.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function createGattClientDevice(deviceId: string): GattClientDevice;

  /**
   * Create a ble scanner instance. Each ble scanner instance can be independently started or stopped.
   *
   * @returns { BleScanner } Returns the promise object.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function createBleScanner(): BleScanner;

  /**
   * Obtains the list of devices in the connected status.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Array<string> } Returns the list of device address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Obtains the list of devices in the connected status.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @returns { Array<string> } Returns the list of device address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   * @since 23 static
   */
  function getConnectedBLEDevices(): Array<string>;

  /**
   * Obtains the list of devices in the connected status.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { BleProfile } profile - The profile in the BLE protocol.
   *     It is used to obtain the connected devices corresponding to the profile.
   * @returns { Array<string> } Returns the list of device address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 21 dynamic
   * @since 23 static
   */
  function getConnectedBLEDevices(profile: BleProfile): Array<string>;

  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
   * If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
   * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
   * If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
   * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
   * If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
   * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  function startBLEScan(filters: Array<ScanFilter>, options?: ScanOptions): void;

  /**
   * Starts scanning for specified BLE devices with filters.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { Array<ScanFilter> | null } filters - Indicates the list of filters used to filter out specified devices.
   * If you do not want to use filter, set this parameter to {@code null}.
   * @param { ScanOptions } [options] - Indicates the parameters for scanning and if the user does not assign a value, the default value will be used.
   * {@link ScanOptions#interval} set to 0, {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
   * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
   * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 static
   */
  function startBLEScan(filters: Array<ScanFilter> | null, options?: ScanOptions): void;

  /**
   * Stops BLE scanning.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Stops BLE scanning.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Stops BLE scanning.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function stopBLEScan(): void;

  /**
   * Starts BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Starts BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Starts BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  /**
   * Starts BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  /**
   * Starts BLE advertising.
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   *   the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   *   its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   *   the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
   * @param { AdvertiseSetting } setting - Indicates the settings for BLE advertising.
   * @param { AdvertiseData } advData - Indicates the advertising data.
   * @param { AdvertiseData } advResponse - Indicates the scan response associated with the advertising data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic&static
   */
  function startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void;

  /**
   * Stops BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Stops BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Stops BLE advertising.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function stopAdvertising(): void;

  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
   * @param { AsyncCallback<number> } callback - the callback of advertise ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
   * @param { AsyncCallback<number> } callback - the callback of advertise ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
   * @param { AsyncCallback<int> } callback - the callback of advertise ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   *   the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   *   its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   *   the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
   * @param { AdvertisingParams } advertisingParams - Indicates the params for BLE advertising.
   * @param { AsyncCallback<int> } callback - the callback of advertise ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 dynamic&static
   */
  function startAdvertising(advertisingParams: AdvertisingParams, callback: AsyncCallback<int>): void;

  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
   * @returns { Promise<number> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
   * @returns { Promise<number> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
   * @returns { Promise<int> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Starts BLE advertising.
   * The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising
   * using the API {@link enableAdvertising} or {@link disableAdvertising}.
   * To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID.
   * - If only {@link AdvertiseData#includeDeviceName} is set to true,
   *   the local name will be carried in the broadcast packet.
   * - If only {@link AdvertiseData#advertiseName} is set,
   *   its value will be used as a custom name and carried in the broadcast packet.
   * - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified,
   *   the {@link AdvertiseData#advertiseName} property will take effect.
   * - To set {@link AdvertiseData#advertiseName},
   *   ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
   *     ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)
   * @param { AdvertisingParams } advertisingParams - Indicates the param for BLE advertising.
   * @returns { Promise<int> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900010 - The number of advertising resources reaches the upper limit.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902054 - The length of the advertising data exceeds the upper limit.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 23 dynamic&static
   */
  function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>;

  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams, callback: AsyncCallback<void>): void;

  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Enable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingEnableParams } advertisingEnableParams - Indicates the params for enable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function enableAdvertising(advertisingEnableParams: AdvertisingEnableParams): Promise<void>;

  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams, callback: AsyncCallback<void>): void;

  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Disable the advertising with a specific ID temporarily.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { AdvertisingDisableParams } advertisingDisableParams - Indicates the params for disable advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function disableAdvertising(advertisingDisableParams: AdvertisingDisableParams): Promise<void>;

  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13
   */
  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @param { AsyncCallback<void> } callback - the callback result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 20 dynamic
   */
  function stopAdvertising(advertisingId: number, callback: AsyncCallback<void>): void;

  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13
   */
  /**
   * Stops BLE advertising.
   * Completely stop the advertising corresponding to the ID.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { number } advertisingId - Indicates the ID for this BLE advertising.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @throws { BusinessError } 2902055 - Invalid advertising id.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 20 dynamic
   */
  function stopAdvertising(advertisingId: number): Promise<void>;

  /**
   * Subscribing to advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Subscribing to advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   */
  function on(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Unsubscribe from advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Unsubscribe from advertising state change event.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'advertisingStateChange' } type - Type of the advertising state to listen for.
   * @param { Callback<AdvertisingStateChangeInfo> } callback - Callback used to listen for the advertising state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   */
  function off(type: 'advertisingStateChange', callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * Subscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Subscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Subscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  function on(type: 'BLEDeviceFind', callback: Callback<Array<ScanResult>>): void;

  /**
   * Unsubscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Unsubscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Unsubscribe BLE scan result.
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
   * @param { Callback<Array<ScanResult>> } callback - Callback used to listen for the scan result event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  function off(type: 'BLEDeviceFind', callback?: Callback<Array<ScanResult>>): void;

  /**
   * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
   *
   * @typedef GattServer
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
   *
   * @typedef GattServer
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Manages GATT server. Before calling an Gatt server method, you must use {@link createGattServer} to create an GattServer instance.
   *
   * @typedef GattServer
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface GattServer {
    /**
     * Adds a specified service to be hosted.
     * <p>The added service and its characteristics are provided by the local device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { GattService } service - Indicates the service to add.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Adds a specified service to be hosted.
     * <p>The added service and its characteristics are provided by the local device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { GattService } service - Indicates the service to add.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Adds a specified service to be hosted.
     * <p>The added service and its characteristics are provided by the local device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { GattService } service - Indicates the service to add.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    addService(service: GattService): void;

    /**
     * Removes a specified service from the list of GATT services provided by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service to remove.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Removes a specified service from the list of GATT services provided by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service to remove.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Removes a specified service from the list of GATT services provided by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service to remove.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    removeService(serviceUuid: string): void;

    /**
     * Obtain a specific GATT service by using a UUID.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } serviceUuid - Indicates the UUID of the service.
     * @returns { GattService } The GATT service has been obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901008 - Gatt service is not found.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    getService(serviceUuid: string): GattService;

    /**
     * Obtain the list of GATT services registered by the application.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { GattService[] } The list of GATT service has been obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    getServices(): GattService[];

    /**
     * Closes this {@code GattServer} object and unregisters its callbacks.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Closes this {@code GattServer} object and unregisters its callbacks.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Closes this {@code GattServer} object and unregisters its callbacks.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    notifyCharacteristicChanged(
      deviceId: string,
      notifyCharacteristic: NotifyCharacteristic,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Sends a notification of a change in a specified local characteristic with a asynchronous callback.
     * <p>This method should be called for every BLE peripheral device that has requested notifications.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { NotifyCharacteristic } notifyCharacteristic - Indicates the local characteristic that has changed.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic): Promise<void>;

    /**
     * Sends a response to a specified read or write request to a given BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Sends a response to a specified read or write request to a given BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Sends a response to a specified read or write request to a given BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ServerResponse } serverResponse - Indicates the response parameters {@link ServerResponse}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    sendResponse(serverResponse: ServerResponse): void;

    /**
     * Get the connection state of a specific device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { ProfileConnectionState } Connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    getConnectedState(deviceId: string): ProfileConnectionState;

    /**
     * Read the phy associated with the connection.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { Promise<PhyValue> } Promise used to return the phy value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readPhy(deviceId: string): Promise<PhyValue>;

    /**
     * Set the preferred phy associated with the connection.
     * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
     * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { PhyValue } phyValue - Indicates the phy to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setPhy(deviceId: string, phyValue: PhyValue): Promise<void>;

    /**
     * Removes all services from the list of GATT services offered by this device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API because the short-range chip is not inserted on the 2in1 device.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    removeAllServices(): void;

    /**
     * Subscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'characteristicRead', callback: Callback<CharacteristicReadRequest>): void;

    /**
     * Unsubscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe characteristic read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicRead' } type - Type of the characteristic read event to listen for.
     * @param { Callback<CharacteristicReadRequest> } callback - Callback used to listen for the characteristic read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'characteristicRead', callback?: Callback<CharacteristicReadRequest>): void;

    /**
     * Subscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'characteristicWrite', callback: Callback<CharacteristicWriteRequest>): void;

    /**
     * Unsubscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe characteristic write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'characteristicWrite' } type - Type of the characteristic write event to listen for.
     * @param { Callback<CharacteristicWriteRequest> } callback - Callback used to listen for the characteristic write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'characteristicWrite', callback?: Callback<CharacteristicWriteRequest>): void;

    /**
     * Subscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'descriptorRead', callback: Callback<DescriptorReadRequest>): void;

    /**
     * Unsubscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe descriptor read event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorRead' } type - Type of the descriptor read event to listen for.
     * @param { Callback<DescriptorReadRequest> } callback - Callback used to listen for the descriptor read event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'descriptorRead', callback?: Callback<DescriptorReadRequest>): void;

    /**
     * Subscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'descriptorWrite', callback: Callback<DescriptorWriteRequest>): void;

    /**
     * Unsubscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe descriptor write event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'descriptorWrite' } type - Type of the descriptor write event to listen for.
     * @param { Callback<DescriptorWriteRequest> } callback - Callback used to listen for the descriptor write event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'descriptorWrite', callback?: Callback<DescriptorWriteRequest>): void;

    /**
     * Subscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'connectionStateChange', callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe server connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'connectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     */
    on(type: 'BLEMtuChange', callback: Callback<number>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     */
    off(type: 'BLEMtuChange', callback?: Callback<number>): void;

    /**
     * Subscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * Unsubscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
   *
   * @typedef GattClientDevice
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
   *
   * @typedef GattClientDevice
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Manages GATT client. Before calling an Gatt client method, you must use {@link createGattClientDevice} to create an GattClientDevice instance.
   *
   * @typedef GattClientDevice
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface GattClientDevice {
    /**
     * Connects to a BLE peripheral device.
     * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Connects to a BLE peripheral device.
     * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Connects to a BLE peripheral device.
     * <p>The 'BLEConnectionStateChange' event is subscribed to return the connection state.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    connect(): void;

    /**
     * Disconnects from or stops an ongoing connection to a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Disconnects from or stops an ongoing connection to a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Disconnects from or stops an ongoing connection to a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    disconnect(): void;

    /**
     * Disables a BLE peripheral device.
     * <p> This method unregisters the device and clears the registered callbacks and handles.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Disables a BLE peripheral device.
     * <p> This method unregisters the device and clears the registered callbacks and handles.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Disables a BLE peripheral device.
     * <p> This method unregisters the device and clears the registered callbacks and handles.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<string> } callback - Callback used to obtain the device name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    getDeviceName(callback: AsyncCallback<string>): void;

    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<string> } Returns a string representation of the name if obtained;
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<string> } Returns a string representation of the name if obtained;
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the name of BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<string> } Returns a string representation of the name if obtained;
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    getDeviceName(): Promise<string>;

    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<Array<GattService>> } callback - Callback used to catch the services.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    getServices(callback: AsyncCallback<Array<GattService>>): void;

    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Starts discovering services.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<Array<GattService>> } Returns the list of services {@link GattService} of the BLE peripheral device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    getServices(): Promise<Array<GattService>>;

    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @param { AsyncCallback<BLECharacteristic> } callback - Callback invoked to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    readCharacteristicValue(characteristic: BLECharacteristic, callback: AsyncCallback<BLECharacteristic>): void;

    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Reads the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to read.
     * @returns { Promise<BLECharacteristic> } - Promise used to return the characteristic value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readCharacteristicValue(characteristic: BLECharacteristic): Promise<BLECharacteristic>;

    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @param { AsyncCallback<BLEDescriptor> } callback - Callback invoked to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<BLEDescriptor>): void;

    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Reads the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to read.
     * @returns { Promise<BLEDescriptor> } - Promise used to return the descriptor read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901000 - Read forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readDescriptorValue(descriptor: BLEDescriptor): Promise<BLEDescriptor>;

    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    writeCharacteristicValue(
      characteristic: BLECharacteristic,
      writeType: GattWriteType,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Writes the characteristic of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    writeCharacteristicValue(characteristic: BLECharacteristic, writeType: GattWriteType): Promise<void>;

    /**
     * Writes the characteristic of a BLE peripheral device with context.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to write.
     * @param { GattWriteType } writeType - Write type of the characteristic.
     *     The interface currently only supports {@link GattWriteType#WRITE} mode.
     * @returns { Promise<GattRspContext> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    writeCharacteristicValueWithContext(
      characteristic: BLECharacteristic, writeType: GattWriteType): Promise<GattRspContext>;

    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    writeDescriptorValue(descriptor: BLEDescriptor, callback: AsyncCallback<void>): void;

    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    /**
     * Writes the descriptor of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLEDescriptor } descriptor - Indicates the descriptor to write.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901001 - Write forbidden.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @throws { BusinessError } 2901004 - The connection is congested.
     * @throws { BusinessError } 2901005 - The connection is not encrypted.
     * @throws { BusinessError } 2901006 - The connection is not authenticated.
     * @throws { BusinessError } 2901007 - The connection is not authorized.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    writeDescriptorValue(descriptor: BLEDescriptor): Promise<void>;

    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<number> } callback - Callback invoked to return the RSSI, in dBm.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { AsyncCallback<int> } callback - Callback invoked to return the RSSI, in dBm.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 22 dynamic
     */
    getRssiValue(callback: AsyncCallback<number>): void;

    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<number> } Returns the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<number> } Returns the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<number> } Returns the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20
     */
    /**
     * Get the RSSI value of this BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<int> } Returns the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 22 dynamic
     */
    getRssiValue(): Promise<number>;

    /**
     * Set the mtu size of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } mtu - The maximum transmission unit.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Set the mtu size of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { number } mtu - The maximum transmission unit.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Set the mtu size of a BLE peripheral device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } mtu - The maximum transmission unit.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    setBLEMtuSize(mtu: int): void;

    /**
     * Enables or disables notification of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that notification is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Enables or disables notification of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that notification is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enables or disables notification of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that notification is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeNotification.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    setCharacteristicChangeNotification(
      characteristic: BLECharacteristic,
      enable: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    setCharacteristicChangeNotification(characteristic: BLECharacteristic, enable: boolean): Promise<void>;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @param { AsyncCallback<void> } callback - the callback of setCharacteristicChangeIndication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setCharacteristicChangeIndication(
      characteristic: BLECharacteristic,
      enable: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enables or disables indication of a characteristic when value changed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BLECharacteristic } characteristic - Indicates the characteristic to indicate.
     * @param { boolean } enable - Specifies whether to enable indication of the characteristic. The value {@code true} indicates
     * that indication is enabled, and the value {@code false} indicates that indication is disabled.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900011 - The operation is busy. The last operation is not complete.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setCharacteristicChangeIndication(characteristic: BLECharacteristic, enable: boolean): Promise<void>;

    /**
     * Get the connection status of a specific device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { ProfileConnectionState } Connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    getConnectedState(): ProfileConnectionState;

    /**
     * Update the connection parameters of the current GATT link to save power or improve transmission performance.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ConnectionParam } param - GATT connection parameters.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    updateConnectionParam(param: ConnectionParam): Promise<void>;

    /**
     * Read the phy associated with the connection.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<PhyValue> } Promise used to return the phy value read.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readPhy(): Promise<PhyValue>;

    /**
     * Set the preferred phy associated with the connection.
     * Whether the phy value will be changed depends on the strategy of the Bluetooth chip.
     * A successful call to this interface does not guarantee that the chip's phy value has been successfully set.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { PhyValue } phyValue - Indicates the phy to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2901003 - The connection is not established.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setPhy(phyValue: PhyValue): Promise<void>;

    /**
     * Subscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'BLECharacteristicChange', callback: Callback<BLECharacteristic>): void;

    /**
     * Unsubscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe characteristic value changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLECharacteristicChange' } type - Type of the characteristic value changed event to listen for.
     * @param { Callback<BLECharacteristic> } callback - Callback used to listen for the characteristic value changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'BLECharacteristicChange', callback?: Callback<BLECharacteristic>): void;

    /**
     * Subscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'BLEConnectionStateChange', callback: Callback<BLEConnectionChangeState>): void;

    /**
     * Unsubscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe client connection state changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEConnectionStateChange' } type - Type of the connection state changed event to listen for.
     * @param { Callback<BLEConnectionChangeState> } callback - Callback used to listen for the connection state changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'BLEConnectionStateChange', callback?: Callback<BLEConnectionChangeState>): void;

    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Subscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'BLEMtuChange', callback: Callback<number>): void;

    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unsubscribe mtu changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEMtuChange' } type - Type of the mtu changed event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the mtu changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'BLEMtuChange', callback?: Callback<number>): void;

    /**
     * Subscribe to GATT service changed event. Receiving this event indicates that
     * the peer GATT database has been refreshed, and it is necessary to re-fetch the GATT service list.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - Type of the service changed event to listen for.
     * @param { Callback<void> } callback - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    on(type: 'serviceChange', callback: Callback<void>): void;

    /**
     * Unsubscribe to GATT service changed event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'serviceChange' } type - Type of the service changed event to listen for.
     * @param { Callback<void> } [callback] - Callback used to listen for the service changed event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    off(type: 'serviceChange', callback?: Callback<void>): void;

    /**
     * Subscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } callback - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onBlePhyUpdate(callback: Callback<PhyValue>): void;

    /**
     * Unsubscribe phy updated event.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<PhyValue> } [callback] - Callback used to listen for the phy updated event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offBlePhyUpdate(callback?: Callback<PhyValue>): void;
  }

  /**
   * Manages the ble scanner.
   * Before calling a ble scanner method, you must use {@link createBleScanner} to create an BleScanner instance.
   *
   * @typedef BleScanner
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface BleScanner {
    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> } filters - Indicates the list of filters used to filter out specified devices.
     * If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } options - Indicates the parameters for scanning and if the user does not assign a value,
     * the default value will be used. {@link ScanOptions#interval} set to 0,
     * and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     * and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900009 - Fails to start scan as it is out of hardware resources.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902050 - Failed to start scan as Ble scan is already started by the app.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    startScan(filters: Array<ScanFilter>, options?: ScanOptions): Promise<void>;

    /**
     * Starts scanning for specified BLE devices with filters.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Array<ScanFilter> | null } filters - Indicates the list of filters used to filter out specified devices.
     * If you do not want to use filter, set this parameter to {@code null}.
     * @param { ScanOptions } [options] - Indicates the parameters for scanning and if the user does not assign a value,
     * the default value will be used. {@link ScanOptions#interval} set to 0,
     * and {@link ScanOptions#dutyMode} set to {@link SCAN_MODE_LOW_POWER}
     * and {@link ScanOptions#matchMode} set to {@link MATCH_MODE_AGGRESSIVE}.
     * and {@link ScanOptions#phyType} set to {@link PHY_LE_ALL_SUPPORTED}.
     * and {@link ScanOptions#reportMode} set to {@link ScanReportMode#NORMAL}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900009 - Fails to start scan as it is out of hardware resources.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902050 - Failed to start scan as Ble scan is already started by the app.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 23 static
     */
    startScan(filters: Array<ScanFilter> | null, options?: ScanOptions): Promise<void>;
    /**
     * Stops BLE scanning.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    stopScan(): Promise<void>;
    /**
     * Subscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'BLEDeviceFind', callback: Callback<ScanReport>): void;
    /**
     * Unsubscribe BLE scan result.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'BLEDeviceFind' } type - Type of the scan result event to listen for.
     * @param { Callback<ScanReport> } callback - Callback used to listen for the scan result event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'BLEDeviceFind', callback?: Callback<ScanReport>): void;
  }

  /**
   * Describes the Gatt service.
   *
   * @typedef GattService
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the Gatt service.
   *
   * @typedef GattService
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the Gatt service.
   *
   * @typedef GattService
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface GattService {
    /**
     * The UUID of a GattService instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a GattService instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a GattService instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * Indicates whether the GattService instance is primary or secondary.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates whether the GattService instance is primary or secondary.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates whether the GattService instance is primary or secondary.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    isPrimary: boolean;
    /**
     * The {@link BLECharacteristic} list belongs to this GattService instance
     *
     * @type { Array<BLECharacteristic> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The {@link BLECharacteristic} list belongs to this GattService instance
     *
     * @type { Array<BLECharacteristic> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The {@link BLECharacteristic} list belongs to this GattService instance
     *
     * @type { Array<BLECharacteristic> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristics: Array<BLECharacteristic>;
    /**
     * The list of GATT services contained in the service
     *
     * @type { ?Array<GattService> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The list of GATT services contained in the service
     *
     * @type { ?Array<GattService> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    includeServices?: Array<GattService>;
  }

  /**
   * Describes the Gatt characteristic.
   *
   * @typedef BLECharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the Gatt characteristic.
   *
   * @typedef BLECharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the Gatt characteristic.
   *
   * @typedef BLECharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface BLECharacteristic {
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of a BLECharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a BLECharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a BLECharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The value of a BLECharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The value of a BLECharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The value of a BLECharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicValue: ArrayBuffer;
    /**
     * The list of {@link BLEDescriptor} contained in the characteristic
     *
     * @type { Array<BLEDescriptor> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The list of {@link BLEDescriptor} contained in the characteristic
     *
     * @type { Array<BLEDescriptor> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The list of {@link BLEDescriptor} contained in the characteristic
     *
     * @type { Array<BLEDescriptor> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    descriptors: Array<BLEDescriptor>;
    /**
     * The properties of a BLECharacteristic instance
     *
     * @type { ?GattProperties }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The properties of a BLECharacteristic instance
     *
     * @type { ?GattProperties }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The properties of a BLECharacteristic instance
     *
     * @type { ?GattProperties }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    properties?: GattProperties;
    /**
     * The characteristic value handle of a BLECharacteristic instance
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    characteristicValueHandle?: int;

    /**
     * The permissions of a BLECharacteristic instance. The default value is Readable and Writable.
     *
     * @type { ?GattPermissions }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    permissions?: GattPermissions;
  }

  /**
   * Describes the Gatt descriptor.
   *
   * @typedef BLEDescriptor
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the Gatt descriptor.
   *
   * @typedef BLEDescriptor
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the Gatt descriptor.
   *
   * @typedef BLEDescriptor
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface BLEDescriptor {
    /**
     * The UUID of the {@link GattService} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the {@link GattService} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the {@link GattService} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the BLEDescriptor instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the BLEDescriptor instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the BLEDescriptor instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The value of the BLEDescriptor instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The value of the BLEDescriptor instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The value of the BLEDescriptor instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    descriptorValue: ArrayBuffer;
    /**
     * The descriptor handle of the BLEDescriptor instance
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    descriptorHandle?: int;

    /**
     * The permissions of a BLEDescriptor instance. The default value is Readable and Writable.
     *
     * @type { ?GattPermissions }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    permissions?: GattPermissions;
  }

  /**
   * Describes the value of the indication or notification sent by the Gatt server.
   *
   * @typedef NotifyCharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the value of the indication or notification sent by the Gatt server.
   *
   * @typedef NotifyCharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the value of the indication or notification sent by the Gatt server.
   *
   * @typedef NotifyCharacteristic
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface NotifyCharacteristic {
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the {@link GattService} instance to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * The UUID of a NotifyCharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a NotifyCharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a NotifyCharacteristic instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The value of a NotifyCharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The value of a NotifyCharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The value of a NotifyCharacteristic instance
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicValue: ArrayBuffer;
    /**
     * Specifies whether to request confirmation from the BLE peripheral device (indication) or
     * send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Specifies whether to request confirmation from the BLE peripheral device (indication) or
     * send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    confirm: boolean;
  }

  /**
   * Describes the parameters of the Gatt client's characteristic read request.
   *
   * @typedef CharacteristicReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters of the Gatt client's characteristic read request.
   *
   * @typedef CharacteristicReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters of the Gatt client's characteristic read request.
   *
   * @typedef CharacteristicReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface CharacteristicReadRequest {
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the read request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The Id of the read request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The Id of the read request
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * The UUID of a CharacteristicReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a CharacteristicReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a CharacteristicReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the of the Gatt client's characteristic write request.
   *
   * @typedef CharacteristicWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters of the of the Gatt client's characteristic write request.
   *
   * @typedef CharacteristicWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters of the of the Gatt client's characteristic write request.
   *
   * @typedef CharacteristicWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface CharacteristicWriteRequest {
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The Id of the write request
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Whether this request should be pending for later operation
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Whether this request should be pending for later operation
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * Whether the remote client need a response
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Whether the remote client need a response
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
    /**
     * The UUID of a CharacteristicWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a CharacteristicWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a CharacteristicWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the service to which the characteristic belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the Gatt client's descriptor read request.
   *
   * @typedef DescriptorReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters of the Gatt client's descriptor read request.
   *
   * @typedef DescriptorReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters of the Gatt client's descriptor read request.
   *
   * @typedef DescriptorReadRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface DescriptorReadRequest {
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the address of the client that initiates the read request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the read request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The Id of the read request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The Id of the read request
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the byte offset of the start position for reading characteristic value
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * The UUID of a DescriptorReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a DescriptorReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a DescriptorReadRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of the Gatt client's characteristic write request.
   *
   * @typedef DescriptorWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters of the Gatt client's characteristic write request.
   *
   * @typedef DescriptorWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters of the Gatt client's characteristic write request.
   *
   * @typedef DescriptorWriteRequest
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface DescriptorWriteRequest {
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the address of the client that initiates the write request
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The Id of the write request
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the byte offset of the start position for writing characteristic value
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Whether this request should be pending for later operation
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Whether this request should be pending for later operation
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPrepared: boolean;
    /**
     * Whether the remote client need a response
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Whether the remote client need a response
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    needRsp: boolean;
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the value to be written
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
    /**
     * The UUID of a DescriptorWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of a DescriptorWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of a DescriptorWriteRequest instance
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    descriptorUuid: string;
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the characteristic to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    characteristicUuid: string;
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The UUID of the service to which the descriptor belongs
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
  }

  /**
   * Describes the parameters of a response send by the server to a specified read or write request.
   *
   * @typedef ServerResponse
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters of a response send by the server to a specified read or write request.
   *
   * @typedef ServerResponse
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters of a response send by the server to a specified read or write request.
   *
   * @typedef ServerResponse
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ServerResponse {
    /**
     * Indicates the address of the client to which to send the response
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the address of the client to which to send the response
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the address of the client to which to send the response
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The Id of the write request
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The Id of the write request
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    transId: int;
    /**
     * Indicates the status of the read or write request, set this parameter to '0' in normal cases
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the status of the read or write request, set this parameter to '0' in normal cases
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the status of the read or write request, set this parameter to '0' in normal cases
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    status: int;
    /**
     * Indicates the byte offset of the start position for reading or writing operation
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the byte offset of the start position for reading or writing operation
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    offset: int;
    /**
     * Indicates the value to be sent
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the value to be sent
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the value to be sent
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    value: ArrayBuffer;
  }

  /**
   * Describes the Gatt profile connection state.
   *
   * @typedef BLEConnectionChangeState
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the Gatt profile connection state.
   *
   * @typedef BLEConnectionChangeState
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the Gatt profile connection state.
   *
   * @typedef BLEConnectionChangeState
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface BLEConnectionChangeState {
    /**
     * Indicates the peer device address
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the peer device address
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the peer device address
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * Connection state of the Gatt profile
     *
     * @type { ProfileConnectionState }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Connection state of the Gatt profile
     *
     * @type { ProfileConnectionState }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Connection state of the Gatt profile
     *
     * @type { ProfileConnectionState }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    state: ProfileConnectionState;
    /**
     * Reason of the disconnection of the gatt connection.
     *
     * @type { ?GattDisconnectReason }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    reason?: GattDisconnectReason;
  }

  /**
   * Describes the contents of the scan results.
   *
   * @typedef ScanResult
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the contents of the scan results.
   *
   * @typedef ScanResult
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the contents of the scan results.
   *
   * @typedef ScanResult
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ScanResult {
    /**
     * Address of the scanned device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Address of the scanned device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Address of the scanned device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId: string;
    /**
     * The address object of a BLE peripheral device, including the address type.
     *
     * @type { ?BluetoothAddress }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic&static
     */
    address?: BluetoothAddress;
    /**
     * RSSI of the remote device
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * RSSI of the remote device
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * RSSI of the remote device
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    rssi: int;
    /**
     * The raw data of broadcast packet
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The raw data of broadcast packet
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The raw data of broadcast packet
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    data: ArrayBuffer;
    /**
     * The local name of the BLE device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The local name of the BLE device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The local name of the BLE device
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceName: string;
    /**
     * Connectable of the remote device
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Connectable of the remote device
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Connectable of the remote device
     *
     * @type { boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    connectable: boolean;

    /**
     * This field is used to identify the discovery mode and supported capabilities of the peer device.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    advertiseFlags?: int;

    /**
     * Map of manufacturer data.
     *
     * @type { ?Map<int, Uint8Array> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    manufacturerDataMap?: Map<int, Uint8Array>;

    /**
     * Map of service data.
     *
     * @type { ?Map<string, Uint8Array> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    serviceDataMap?: Map<string, Uint8Array>;

    /**
     * The list of service uuid.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    serviceUuids?: string[];

    /**
     * The tx power level of the packet in dBm.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    txPowerLevel?: int;

    /**
     * Map of advertising data fields.
     *
     * @type { ?Map<int, Uint8Array> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    advertisingDataMap?: Map<int, Uint8Array>;
  }

  /**
   * Describes the contents of the scan report.
   *
   * @typedef ScanReport
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ScanReport {
    /**
     * The type of scan report
     *
     * @type { ScanReportType }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    reportType: ScanReportType;
    /**
     * Describes the contents of the scan results.
     *
     * @type { Array<ScanResult> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    scanResult: Array<ScanResult>;
  }

  /**
   * Describes the settings for BLE advertising.
   *
   * @typedef AdvertiseSetting
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the settings for BLE advertising.
   *
   * @typedef AdvertiseSetting
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the settings for BLE advertising.
   *
   * @typedef AdvertiseSetting
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface AdvertiseSetting {
    /**
     * Minimum slot value for the advertising interval, which is {@code 32} (20 ms)
     * Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s)
     * Default slot value for the advertising interval, which is {@code 1600} (1s)
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Minimum slot value for the advertising interval, which is {@code 32} (20 ms)
     * Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s)
     * Default slot value for the advertising interval, which is {@code 1600} (1s)
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    interval?: int;
    /**
     * Minimum transmission power level for advertising, which is {@code -127}
     * Maximum transmission power level for advertising, which is {@code 1}
     * Default transmission power level for advertising, which is {@code -7}
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Minimum transmission power level for advertising, which is {@code -127}
     * Maximum transmission power level for advertising, which is {@code 1}
     * Default transmission power level for advertising, which is {@code -7}
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    txPower?: int;
    /**
     * Indicates whether the BLE is connectable, default is {@code true}
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates whether the BLE is connectable, default is {@code true}
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates whether the BLE is connectable, default is {@code true}
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    connectable?: boolean;
  }

  /**
   * Describes the advertising data.
   *
   * @typedef AdvertiseData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the advertising data.
   *
   * @typedef AdvertiseData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the advertising data.
   *
   * @typedef AdvertiseData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface AdvertiseData {
    /**
     * The specified service UUID list to this advertisement
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The specified service UUID list to this advertisement
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The specified service UUID list to this advertisement
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuids: Array<string>;
    /**
     * The specified manufacturer data list to this advertisement
     *
     * @type { Array<ManufactureData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The specified manufacturer data list to this advertisement
     *
     * @type { Array<ManufactureData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The specified manufacturer data list to this advertisement
     *
     * @type { Array<ManufactureData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureData: Array<ManufactureData>;
    /**
     * The specified service data list to this advertisement
     *
     * @type { Array<ServiceData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The specified service data list to this advertisement
     *
     * @type { Array<ServiceData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The specified service data list to this advertisement
     *
     * @type { Array<ServiceData> }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceData: Array<ServiceData>;
    /**
     * Indicates whether the device name will be included in the advertisement packet.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates whether the device name will be included in the advertisement packet.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates whether the device name will be included in the advertisement packet.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    includeDeviceName?: boolean;
    /**
     * Indicates whether the tx power will be included in the advertisement packet.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    includeTxPower?: boolean;
    /**
     * Indicates the local name data type in the advertisement packet. If both the property and
     * {@link AdvertiseData#includeDeviceName} property are used together,
     * the {@link AdvertiseData#advertiseName} property will ultimately take effect.
     *
     * @permission ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    advertiseName?: string;
  }

  /**
   * Describes the advertising parameters.
   *
   * @typedef AdvertisingParams
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Describes the advertising parameters.
   *
   * @typedef AdvertisingParams
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   * @since 23 static
   */
  interface AdvertisingParams {
    /**
     * Indicates the advertising settings.
     *
     * @type { AdvertiseSetting }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Indicates the advertising settings.
     *
     * @type { AdvertiseSetting }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    advertisingSettings: AdvertiseSetting;
    /**
     * Indicates the advertising data.
     *
     * @type { AdvertiseData }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Indicates the advertising data.
     *
     * @type { AdvertiseData }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    advertisingData: AdvertiseData;
    /**
     * Indicates the advertising response.
     *
     * @type { ?AdvertiseData }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Indicates the advertising response.
     *
     * @type { ?AdvertiseData }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    advertisingResponse?: AdvertiseData;
    /**
     * Indicates the duration for advertising continuously.
     * The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms).
     * If this parameter is not specified or is set to 0, advertisement is continuously sent.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * Parameter for dynamically enable advertising.
   *
   * @typedef AdvertisingEnableParams
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingEnableParams {
    /**
     * Indicates the ID of current advertising.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * Indicates the duration for advertising continuously.
     * The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms).
     * If this parameter is not specified or is set to 0, advertise is continuously sent.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;
  }

  /**
   * Parameter for dynamically disable advertising.
   *
   * @typedef AdvertisingDisableParams
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AdvertisingDisableParams {
    /**
     * Indicates the ID of current advertising.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    advertisingId: int;
  }

  /**
   * Advertising state change information.
   *
   * @typedef AdvertisingStateChangeInfo
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * Advertising state change information.
   *
   * @typedef AdvertisingStateChangeInfo
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   * @since 23 static
   */
  interface AdvertisingStateChangeInfo {
    /**
     * Indicates the ID of current advertising.
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Indicates the ID of current advertising.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    advertisingId: int;
    /**
     * Indicates the advertising state.
     *
     * @type { AdvertisingState }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * Indicates the advertising state.
     *
     * @type { AdvertisingState }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    state: AdvertisingState;
  }

  /**
   * Describes the manufacturer data.
   *
   * @typedef ManufactureData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the manufacturer data.
   *
   * @typedef ManufactureData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the manufacturer data.
   *
   * @typedef ManufactureData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ManufactureData {
    /**
     * Indicates the manufacturer ID assigned by Bluetooth SIG
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the manufacturer ID assigned by Bluetooth SIG
     *
     * @type { number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the manufacturer ID assigned by Bluetooth SIG
     *
     * @type { int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureId: int;
    /**
     * Indicates the manufacturer data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the manufacturer data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the manufacturer data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureValue: ArrayBuffer;
  }

  /**
   * Describes the service data.
   *
   * @typedef ServiceData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the service data.
   *
   * @typedef ServiceData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the service data.
   *
   * @typedef ServiceData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ServiceData {
    /**
     * Indicates the UUID of the service data to add
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the UUID of the service data to add
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the UUID of the service data to add
     *
     * @type { string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid: string;
    /**
     * Indicates the service data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Indicates the service data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Indicates the service data to add
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceValue: ArrayBuffer;
  }

  /**
   * Describes the criteria for filtering scanning results can be set.
   *
   * @typedef ScanFilter
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the criteria for filtering scanning results can be set.
   *
   * @typedef ScanFilter
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the criteria for filtering scanning results can be set.
   *
   * @typedef ScanFilter
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ScanFilter {
    /**
     * The address of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The address of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The address of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    deviceId?: string;
    /**
     * The address object of a BLE peripheral device, including the address type.
     *
     * @type { ?BluetoothAddress }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic&static
     */
    address?: BluetoothAddress;
    /**
     * Identity Resolving Key of BLE peripheral device.
     * {@link ScanFilter#irk} needs to be used with {@link ScanFilter#address}.
     *
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    irk?: Uint8Array;

    /**
     * The name of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The name of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The name of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * The service UUID of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * The service UUID of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The service UUID of a BLE peripheral device
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuid?: string;

    /**
     * Service UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Service UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Service UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceUuidMask?: string;

    /**
     * Service solicitation UUID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Service solicitation UUID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Service solicitation UUID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceSolicitationUuid?: string;

    /**
     * Service solicitation UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Service solicitation UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Service solicitation UUID mask.
     *
     * @type { ?string }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceSolicitationUuidMask?: string;

    /**
     * Service data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Service data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Service data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceData?: ArrayBuffer;

    /**
     * Service data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Service data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Service data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    serviceDataMask?: ArrayBuffer;

    /**
     * Manufacture id.
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Manufacture id.
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Manufacture id.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureId?: int;

    /**
     * Manufacture data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Manufacture data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Manufacture data.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureData?: ArrayBuffer;

    /**
     * Manufacture data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Manufacture data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Manufacture data mask.
     *
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufactureDataMask?: ArrayBuffer;

    /**
     * RSSI threshold for filtering advertising that pass through.
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    rssiThreshold?: int;
  }

  /**
   * Describes the parameters for scan.
   *
   * @typedef ScanOptions
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the parameters for scan.
   *
   * @typedef ScanOptions
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the parameters for scan.
   *
   * @typedef ScanOptions
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface ScanOptions {
    /**
     * Time of delay for reporting the scan result
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Time of delay for reporting the scan result
     *
     * @type { ?number }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Time of delay for reporting the scan result
     *
     * @type { ?int }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    interval?: int;
    /**
     * Bluetooth LE scan mode
     *
     * @type { ?ScanDuty }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Bluetooth LE scan mode
     *
     * @type { ?ScanDuty }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Bluetooth LE scan mode
     *
     * @type { ?ScanDuty }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    dutyMode?: ScanDuty;
    /**
     * Match mode for Bluetooth LE scan filters hardware match
     *
     * @type { ?MatchMode }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Match mode for Bluetooth LE scan filters hardware match
     *
     * @type { ?MatchMode }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    matchMode?: MatchMode;
    /**
     * Physical Layer used during scan.
     *
     * @type { ?PhyType }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Physical Layer used during scan.
     *
     * @type { ?PhyType }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    phyType?: PhyType;
    /**
     * Report mode used during scan.
     *
     * @type { ?ScanReportMode }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    reportMode?: ScanReportMode;
  }

  /**
   * Describes the properties of a gatt characteristic.
   *
   * @typedef GattProperties
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * Describes the properties of a gatt characteristic.
   *
   * @typedef GattProperties
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the properties of a gatt characteristic.
   *
   * @typedef GattProperties
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  interface GattProperties {
    /**
     * Support write property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Support write property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Support write property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    write?: boolean;
    /**
     * Support write no response property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Support write no response property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Support write no response property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    writeNoResponse?: boolean;
    /**
     * Support read property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Support read property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Support read property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    read?: boolean;
    /**
     * Support notify property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Support notify property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Support notify property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    notify?: boolean;
    /**
     * Support indicate property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Support indicate property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    indicate?: boolean;

    /**
     * Support broadcast property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    broadcast?: boolean;

    /**
     * Support authenticated signed write property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    authenticatedSignedWrite?: boolean;

    /**
     * Support extended properties property of the characteristic.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    extendedProperties?: boolean;
  }

  /**
   * The enum of gatt characteristic write type
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * The enum of gatt characteristic write type
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The enum of gatt characteristic write type
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  enum GattWriteType {
    /**
     * Write characteristic with response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Write characteristic with response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Write characteristic with response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    WRITE = 1,
    /**
     * Write characteristic without response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Write characteristic without response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Write characteristic without response.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    WRITE_NO_RESPONSE = 2
  }

  /**
   * The enum of scan duty.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * The enum of scan duty.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The enum of scan duty.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  enum ScanDuty {
    /**
     * low power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * low power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * low power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * balanced power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * balanced power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * balanced power mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * Scan using highest duty cycle
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * Scan using highest duty cycle
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Scan using highest duty cycle
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    SCAN_MODE_LOW_LATENCY = 2
  }

  /**
   * The enum of BLE match mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10
   */
  /**
   * The enum of BLE match mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum MatchMode {
    /**
     * aggressive mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * aggressive mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MATCH_MODE_AGGRESSIVE = 1,
    /**
     * sticky mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    /**
     * sticky mode
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MATCH_MODE_STICKY = 2
  }

  /**
   * The enum of BLE advertising state.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11
   */
  /**
   * The enum of BLE advertising state.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 13 dynamic
   * @since 23 static
   */
  enum AdvertisingState {
    /**
     * advertising started.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * advertising started.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    STARTED = 1,
    /**
     * advertising temporarily enabled.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    ENABLED = 2,
    /**
     * advertising temporarily disabled.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    DISABLED = 3,
    /**
     * advertising stopped.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11
     */
    /**
     * advertising stopped.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 13 dynamic
     * @since 23 static
     */
    STOPPED = 4
  }

  /**
   * Phy type used during scan.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Phy type used during scan.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  enum PhyType {
    /**
     * Use 1M phy for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Use 1M phy for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    PHY_LE_1M = 1,
    /**
     * Use all supported Phys for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Use all supported Phys for scanning.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    PHY_LE_ALL_SUPPORTED = 255
  }

  /**
   * Report mode used during scan.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ScanReportMode {
    /**
     * In normal mode, the advertisement packet is reported immediately after being scanned.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NORMAL = 1,
    /**
     * Enables the batch mode in which advertisement packets are sent after the interval specified by {@link
     * ScanOptions#interval}.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    BATCH = 2,
    /**
     * In low sensitivity fence mode, the advertisement packets are reported only when they are received for
     * the first time and lost for the last time. The reception sensitivity is low.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FENCE_SENSITIVITY_LOW = 10,
    /**
     * In high sensitivity fence mode, the advertisement packets are reported only when they are received for
     * the first time and lost for the last time. The reception sensitivity is high.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    FENCE_SENSITIVITY_HIGH = 11,
  }

  /**
   * Scan report type used during scan.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ScanReportType {
    /**
     * The found of advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    ON_FOUND = 1,
    /**
     * The lost of advertisement packet.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    ON_LOST = 2,
    /**
     * The type of advertisement packet reported in batch mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    ON_BATCH = 3,
  }

  /**
   * The Profile of the BLE protocol.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 21 dynamic
   * @since 23 static
   */
  enum BleProfile {
    /**
     * Indicates the profile type of the gatt, including gatt client and gatt server.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 23 static
     */
    GATT = 1,
    /**
     * Indicates the profile type of the gatt client.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 23 static
     */
    GATT_CLIENT = 2,
    /**
     * Indicates the profile type of the gatt server.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 23 static
     */
    GATT_SERVER = 3
  }

  /**
   * GATT connection parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @since 22 dynamic
   */
  enum ConnectionParam {
    /**
     * low power mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    LOW_POWER = 1,
    /**
     * balanced power mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    BALANCED = 2,
    /**
     * Use the highest connection parameters.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @since 22 dynamic
     */
    HIGH = 3
  }

  /**
   * The enum of gatt disconnection reasons.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum GattDisconnectReason {

    /**
     * Disconnection due to timeout.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CONN_TIMEOUT = 1,

    /**
     * The connection is disconnected due to the peer.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CONN_TERMINATE_PEER_USER = 2,

    /**
     * The connection is disconnected due to the local host.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CONN_TERMINATE_LOCAL_HOST = 3,

    /**
     * Disconnection due to unknown reason.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CONN_UNKNOWN = 4
  }

  /**
   * Phy type for advertising or connection.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum BlePhy {
    /**
     * Use 1M phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_PHY_1M = 1,
    /**
     * Use 2M phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_PHY_2M = 2,
    /**
     * Use coded phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_PHY_CODED = 3
  }
  /**
   * Coded phy mode for advertising or connection.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum CodedPhyMode {
    /**
     * Use coded S2 phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_PHY_CODED_S2 = 1,
    /**
     * Use coded S8 phy for advertising or connection.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_PHY_CODED_S8 = 2
  }

  /**
   * Describes the permission of a att attribute item.
   *
   * @typedef GattPermissions
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface GattPermissions {

    /**
     * The attribute field has the read permission.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    read?: boolean;

    /**
     * The attribute field has the encrypted read permission.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncrypted?: boolean;

    /**
     * The attribute field has the read permission for encryption authentication.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readEncryptedMitm?: boolean;

    /**
     * The attribute field has the write permission.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    write?: boolean;

    /**
     * The attribute field has the encrypted write permission.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncrypted?: boolean;

    /**
     * The attribute field has the write permission for encryption authentication.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeEncryptedMitm?: boolean;

    /**
     * The attribute field has the signed write permission.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeSigned?: boolean;

    /**
     * The attribute field has the write permission for signature authentication.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    writeSignedMitm?: boolean;
  }

  /**
   * Describe the context of GATT responses.
   *
   * @typedef GattRspContext
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  interface GattRspContext {
    /**
     * Timestamp of when Bluetooth received the response command.
     *
     * @type { long }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    timestamp: long;
  }

  /**
   * Describes the parameters of the Ble phy.
   *
   * @typedef PhyValue
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PhyValue {
    /**
     * Transmitter phy.
     *
     * @type { BlePhy }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    txPhy: BlePhy;
    /**
     * Receiver phy.
     *
     * @type { BlePhy }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rxPhy: BlePhy;
    /**
     * Preferred coded phy mode.
     *
     * @type { ?CodedPhyMode }
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    phyMode?: CodedPhyMode;
  }
}

export default ble;