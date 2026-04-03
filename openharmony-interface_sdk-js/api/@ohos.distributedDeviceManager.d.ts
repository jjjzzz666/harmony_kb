/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Providers interfaces to create a {@link deviceManager} instances.
 *
 * @namespace distributedDeviceManager
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace distributedDeviceManager {

  /**
   * Basic description information of a distributed device.
   * @interface DeviceBasicInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceBasicInfo {
    /**
     * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
     * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
     * the obtained ID will change.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Device name.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Obtains the device type represented by a string,
     * which can be {@code phone}, {@code tablet}, {@code tv}, {@code smartVision}, {@code car}.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * Device network id.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    networkId?: string;
  }

  /**
   * The state of the nearby devices.
   * @enum { int }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceStateChange {
    /**
     * This state indicates the device is online but the state is unknown,The distributed function cannot used until
     * state changes to AVAILABLE.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * This state indicates the device has been synchronized to the database, Now the distributed function can be used.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    AVAILABLE = 1,

    /**
     * This state indicates the device is offline.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 2,
  }

  /**
   * Device status change result.
   * @interface DeviceStateChangeResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceStateChangeResult {
    /**
     * The state of the nearby devices.
     * @type { DeviceStateChange }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    action: DeviceStateChange;
    /**
     * Basic description information of a distributed device.
     * @type { DeviceBasicInfo }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * Device name change result.
   * @interface DeviceNameChangeResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DeviceNameChangeResult {
    /**
     * Device name.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceName: string;
  }

  /**
   * Discovery failure result.
   * @interface DiscoveryFailureResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoveryFailureResult {
    /**
     * Discovery failure cause code.
     * @type { int }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    reason: int;
  }

  /**
   * Discovery successful result.
   * @interface DiscoverySuccessResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface DiscoverySuccessResult {
    /**
     * Basic description information of a distributed device.
     * @type { DeviceBasicInfo }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    device: DeviceBasicInfo;
  }

  /**
   * Reply result.
   * @interface ReplyResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 23 static
   */
  interface ReplyResult {
    /**
     * Param of ui state changes.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 23 static
     */
    param: string;
  }

  /**
   * ServiceDie data.
   * @interface ServiceDieData
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface ServiceDieData {}

  /**
   * Bind target result.
   * @interface BindTargetResult
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 23 static
   */
  interface BindTargetResult {
    /**
     * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
     * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
     * the obtained ID will change.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * Device profile information filter options.
   * @interface DeviceProfileInfoFilterOptions
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfoFilterOptions {
    /**
     * Whether to request data from the cloud.
     * @type { boolean }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isCloud : boolean,
    /**
     * Device ID list.
     * @type { Array<string> }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceIdList?: Array<string>;
  }

  /**
   * Service profile information.
   * @interface ServiceProfileInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface ServiceProfileInfo {
    /**
     * Device ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Service ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceId: string;

    /**
     * Service Type.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    serviceType: string;

    /**
     * Service data.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    data?: string;
  }

  /**
   * Device profile information.
   * @interface DeviceProfileInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface DeviceProfileInfo {
    /**
     * Device ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Device SerialNumber.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceSn: string;

    /**
     * MAC address.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    mac: string;

    /**
     * Device model.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    model: string;

    /**
     * Device type.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceType: string;

    /**
     * Manufacturer.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * Device name.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Product ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Product sub ID.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * Sdk version.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sdkVersion: string;

    /**
     * Bluetooth BLE MAC address.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    bleMac: string;

    /**
     * Bluetooth BR MAC address.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    brMac: string;

    /**
     * Starflash MAC address.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    sleMac: string;

    /**
     * Firmware version.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    firmwareVersion: string;

    /**
     * Hardware version.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    hardwareVersion: string;

    /**
     * Software version.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    softwareVersion: string;

    /**
     * Protocol type.
     * @type { int }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    protocolType: int;

    /**
     * Setup type.
     * @type { int }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setupType: int;

    /**
     * Wise device ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseDeviceId: string;

    /**
     * Wise user ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    wiseUserId: string;

    /**
     * Register time.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    registerTime: string;

    /**
     * Modify time.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * Share time.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    shareTime: string;

    /**
     * Whether the device is a local device.
     * @type { boolean }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isLocalDevice: boolean;

    /**
     * Service profile information list.
     * @type { Array<ServiceProfileInfo> }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    services?: Array<ServiceProfileInfo>;

    /**
     * Name of the product to which the device belongs.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productName?: string;

    /**
     * Internal model of the product to which the device belongs.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Device icon information filter options.
   * @interface DeviceIconInfoFilterOptions
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfoFilterOptions {
    /**
     * Product ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Product sub ID.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * Image type.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * Spec name.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * Internal model of the product to which the device belongs.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Device icon information.
   * @interface DeviceIconInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface DeviceIconInfo {
    /**
     * Product ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    productId: string;

    /**
     * Product sub ID.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    subProductId?: string;

    /**
     * Image type.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    imageType: string;

    /**
     * Spec name.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    specName: string;

    /**
     * Uniform resoure locator.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * Icon.
     * @type { ArrayBuffer }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    icon: ArrayBuffer;

    /**
     * Internal model of the product to which the device belongs.
     * @type { ?string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    internalModel?: string;
  }

  /**
   * Heartbeat policy.
   * @enum {int}
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum StrategyForHeartbeat {
    /**
     * Temporarily stop heartbeat, which automatically recovers after timeout.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    TEMP_STOP_HEARTBEAT = 100,
    /**
     * Start heartbeat.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    START_HEARTBEAT = 101,
  }

  /**
   * Device network id query filter options.
   * @interface NetworkIdQueryFilter
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface NetworkIdQueryFilter {
    /**
     * Get device network id list by wiseDevice ID.
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    wiseDeviceId : string;

    /**
     * Get device network id list by online status.
     * @type { int }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    onlineStatus : int,
  }

  /**
   * Struct for distributed device identification.
   *
   * @interface DeviceIdentification
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface DeviceIdentification {
    /**
     * Anonymized device ID for application.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    deviceId: string;

    /**
     * Unique device ID (UDID).
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @type { string }
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udid: string;
  }

  /**
   * Creates an {@code DeviceManager} instance.
   *
   * To manage devices, you must first call this method to obtain a {@code DeviceManager} instance and then
   * use this instance to call other device management methods.
   *
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @returns { DeviceManager } - Return the DeviceManager object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                                  1. Mandatory parameters are left unspecified;
   *                                                  2. Incorrect parameter type;
   *                                                  3. Parameter verification failed.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function createDeviceManager(bundleName: string): DeviceManager;

  /**
   * Releases the {@code DeviceManager} instance that is no longer used.
   *
   * @param { DeviceManager } deviceManager - Indicates the {@code DeviceManager} instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                                  1. Mandatory parameters are left unspecified;
   *                                                  2. Incorrect parameter types;
   *                                                  3. Parameter verification failed.
   * @throws { BusinessError } 11600101 - Failed to execute the function.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  function releaseDeviceManager(deviceManager: DeviceManager): void;

  /**
   * Provides methods for managing devices.
   *
   * @interface DeviceManager
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceManager {

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Array<DeviceBasicInfo> } - Returns a list of available devices.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceListSync(): Array<DeviceBasicInfo>;

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<Array<DeviceBasicInfo>> } callback - Indicates the callback to be
     * invoked upon getAvailableDeviceList.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void;

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<Array<DeviceBasicInfo>> } - Returns a list of available devices.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>;

    /**
     * Get the network id of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } - Returns local device network id.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceNetworkId(): string;

    /**
     * Get the device name of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } - Returns local device name.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceName(): string;

    /**
     * Get the device type of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { int } - Returns local device type.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceType(): int;

    /**
     * Get the device id of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } - Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
     * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
     * the obtained ID will change.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getLocalDeviceId(): string;

    /**
     * Get the device name by network id.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - Device network id.
     * @returns { string } - Returns device name.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceName(networkId: string): string;

    /**
     * Get the device type by network id.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } networkId - Device network id.
     * @returns { int } - Returns device type.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified networkId is greater than 255.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceType(networkId: string): int;

    /**
     * Start to discover nearby devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { object } discoverParam - Identifies the type of target discovered:
     *       discoverTargetType : 1     - Discovery target as a device by default, the value is 1.
     * @param { object } filterOptions - FilterOptions to filter discovery device.
     *     The type of filterOptions is map. The map are as follows:
     *     availableStatus: 0-1       - Discover devices only are credible, The value is 0 indicates
     *     device isn't credible;
     *                                      0: Devices are offline, client need to bind the device by calling
     *     bindTarget() and then connect to it.
     *                                      1: Devices already online, client can make connection.
     *       discoverDistance: 0-100    - Discover devices within a certain distance from the local, the unit is cm.
     *       authenticationStatus: 0-1  - Discover devices based on different authentication status:
     *                                      0: Devices not authenticated.
     *                                      1: Devices already authenticated.
     *                                The value is 1 indicates device is trust.
     *       authorizationType: 0-2     - Discover devices based on different authorization type:
     *                                      0: Devices authenticated based on temporary negotiated session key.
     *                                      1: Devices authenticated based on the same account credential key.
     *                                      2: Devices authenticated based on different account credential keys.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; }): void;

    /**
     * Start to discover nearby devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Record<string, int | string> } discoverParam - Identifies the type of target discovered:
     *     discoverTargetType : 1     - Discovery target as a device by default, the value is 1.
     * @param { Record<string, int | string> } [filterOptions] - FilterOptions to filter discovery device.
     *     The type of filterOptions is map. The map are as follows:
     *     availableStatus: 0-1       - Discover devices only are credible, The value is 0 indicates device
     *     isn't credible;
     *                                      0: Devices are offline, client need to bind the device by calling
     *     bindTarget() and then connect to it.
     *                                      1: Devices already online, client can make connection.
     *       discoverDistance: 0-100    - Discover devices within a certain distance from the local, the unit is cm.
     *       authenticationStatus: 0-1  - Discover devices based on different authentication status:
     *                                      0: Devices not authenticated.
     *                                      1: Devices already authenticated.
     *                                The value is 1 indicates device is trust.
     *       authorizationType: 0-2     - Discover devices based on different authorization type:
     *                                      0: Devices authenticated based on temporary negotiated session key.
     *                                      1: Devices authenticated based on the same account credential key.
     *                                      2: Devices authenticated based on different account credential keys.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600104 - Discovery unavailable.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    startDiscovering(discoverParam: Record<string, int | string>, filterOptions?: Record<string, int | string>): void;

    /**
     * Stop discovering nearby devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    stopDiscovering(): void;

    /**
     * Bind the specified target.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - id of device to bind.
     * @param { object } bindParam - parameters of device to bind, The parameter type is map,such as:
     *      "bindType" : 1,           - This value is type of bind, the values are as follows:
     *                                  1 - The bind type is pin code .
     *      "targetPkgName" : "xxxx", - The package name of binding target.
     *      "appName" : "xxxx",       - The app name that try to bind the target.
     *      "appOperation" : "xxxx"   - The reason why the app want to bind the target package.
     *      "customDescription" : "xxxx" - The detail description of the operation.
     * @param { AsyncCallback<{deviceId: string;}> } callback - indicates the callback to be invoked upon bindDevice.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>): void;

    /**
     * Bind the specified target.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - id of device to bind.
     * @param { Record<string, int | string> } bindParam - parameters of device to bind, The parameter type is map,such as:
     *      "bindType" : 1,           - This value is type of bind, the values are as follows:
     *                                  1 - The bind type is pin code .
     *      "targetPkgName" : "xxxx", - The package name of binding target.
     *      "appName" : "xxxx",       - The app name that try to bind the target.
     *      "appOperation" : "xxxx"   - The reason why the app want to bind the target package.
     *      "customDescription" : "xxxx" - The detail description of the operation.
     * @param { AsyncCallback<BindTargetResult> } callback - indicates the callback to be invoked upon bindDevice.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Authentication unavailable.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    bindTarget(deviceId: string, bindParam: Record<string, int | string>, callback: AsyncCallback<BindTargetResult>): void;

    /**
     * Unbind the specified target.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } deviceId - id of device to unbind
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified deviceId is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     * @since 23 static
     */
    unbindTarget(deviceId: string): void;

    /**
     * The reply of ui operation from pin-code window, this interface can only be used by pin-code-hap of devicemanager.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } action - The reply action of user operation.
     * @param { string } actionResult - Indicates the user operation result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified actionResult is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     * @since 23 static
     */
    replyUiAction(action: int, actionResult: string): void;

    /**
     * Register a device state callback so that the application can be notified upon device state changes based on
     * the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - Device state change.
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback
     *     Indicates the device state callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * Register a device state callback so that the application can be notified upon device state changes based on
     * the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } callback
     *     Indicates the device state callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceStateChange(callback: Callback<DeviceStateChangeResult>): void;

    /**
     * UnRegister device state callback based on the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceStateChange' } type - Device state change.
     * @param { Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }> } callback
     *     Indicates the device state callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;

    /**
     * UnRegister device state callback based on the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceStateChangeResult> } [callback]
     *     Indicates the device state callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceStateChange(callback?: Callback<DeviceStateChangeResult>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - Successfully discovered device.
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - Indicates the device discovery callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } callback - Indicates the device discovery callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverSuccess(callback: Callback<DiscoverySuccessResult>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverSuccess' } type - Successfully discovered device.
     * @param { Callback<{ device: DeviceBasicInfo; }> } callback - Indicates the device discovery callback to
     *     unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverSuccess', callback?: Callback<{ device: DeviceBasicInfo; }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoverySuccessResult> } [callback] - Indicates the device discovery callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverSuccess(callback?: Callback<DiscoverySuccessResult>): void;

    /**
     * Register a device name change callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - Changed device name.
     * @param { Callback<{ deviceName: string; }> } callback - Indicates the device name change callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'deviceNameChange', callback: Callback<{ deviceName: string; }>): void;

    /**
     * Register a device name change callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } callback - Indicates the device name change callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDeviceNameChange(callback: Callback<DeviceNameChangeResult>): void;

    /**
     * UnRegister the device name change result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'deviceNameChange' } type - Changed device name.
     * @param { Callback<{ deviceName: string; }> } callback - Indicates the device name change callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'deviceNameChange', callback?: Callback<{ deviceName: string; }>): void;

    /**
     * UnRegister the device name change result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DeviceNameChangeResult> } [callback] - Indicates the device name change callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDeviceNameChange(callback?: Callback<DeviceNameChangeResult>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discover failed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - Discovery Device Failure.
     * @param { Callback<{ reason: int; }> } callback
     *     Indicates the device found result callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'discoverFailure', callback: Callback<{ reason: int; }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discover failed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } callback
     *     Indicates the device found result callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onDiscoverFailure(callback: Callback<DiscoveryFailureResult>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'discoverFailure' } type - Discovery Device Failure.
     * @param { Callback<{ reason: int; }> } callback - Indicates the device found result callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'discoverFailure', callback?: Callback<{ reason: int; }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<DiscoveryFailureResult> } [callback]
     *     Indicates the device found result callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offDiscoverFailure(callback?: Callback<DiscoveryFailureResult>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - Service death.
     * @param { Callback<{}> } callback - Indicates the service error callback to register.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    on(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } callback - Indicates the service error callback to register.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    onServiceDie(callback: Callback<ServiceDieData>): void;

    /**
     * UnRegister the service error callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serviceDie' } type - Service death.
     * @param { Callback<{}> } callback - Indicates the service error callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 10 dynamic
     */
    off(type: 'serviceDie', callback?: Callback<{}>): void;

    /**
     * UnRegister the service error callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ServiceDieData> } [callback] - Indicates the service error callback to unregister.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @since 23 static
     */
    offServiceDie(callback?: Callback<ServiceDieData>): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when uiStateChanges.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { 'replyResult' } type - Ui reply result to register.
     * @param { Callback<{ param: string; }> } callback - Indicates the devicemanager ui state to register.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10 dynamic
     */
    on(type: 'replyResult', callback: Callback<{ param: string; }>): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when uiStateChanges.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } callback - Indicates the devicemanager ui state to register.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    onReplyResult(callback: Callback<ReplyResult>): void;

    /**
      * Unregister uiStateChange, this interface can only be used by devicemanager ui.
      *
      * @permission ohos.permission.ACCESS_SERVICE_DM
      * @param { 'replyResult' } type - Ui reply result to unregister.
      * @param { Callback<{ param: string; }> } callback - Indicates the devicemanager ui state to unregister.
      * @throws { BusinessError } 401 - Parameter error. Possible causes:
      *                                                  1. Mandatory parameters are left unspecified;
      *                                                  2. Incorrect parameter type;
      *                                                  3. Parameter verification failed;
      *                                                  4. The size of specified type is greater than 255.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
      * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
      * @syscap SystemCapability.DistributedHardware.DeviceManager
      * @systemapi this method can be used only by system applications.
      * @since 10 dynamic
      */
    off(type: 'replyResult', callback?: Callback<{ param: string; }>): void;

    /**
     * Unregister uiStateChange, this interface can only be used by devicemanager ui.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Callback<ReplyResult> } [callback] - Indicates the devicemanager ui state to unregister.
     * @throws { BusinessError } 201 - Permission verification failed. 
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 23 static
     */
    offReplyResult(callback?: Callback<ReplyResult>): void;

    /**
     * Get the device list under the same account.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceProfileInfoFilterOptions } filterOptions - parameter for querying the device list, The parameter type is map,such as:
     *      "isCloud" : false,           -  false - Get from the cahce of device side.
     *                                      true  - Get from the cloud.
     *      "deviceIdList" : [],         - Get by specified device ids.
     * @returns { Promise<Array<DeviceProfileInfo>> } - Returns a list of devices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getDeviceProfileInfoList(filterOptions: DeviceProfileInfoFilterOptions): Promise<Array<DeviceProfileInfo>>;

    /**
     * Put the device list under the same account.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { Array<DeviceProfileInfo> } deviceProfileInfoList - parameter for querying the device list for put, 
     * @returns { Promise<int> } - Returns operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     *                                                  4. The size of specified type is greater than 500.
     * @throws { BusinessError } 201 - Permission verification failed.
     *                           The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    putDeviceProfileInfoList(deviceProfileInfoList: Array<DeviceProfileInfo>): Promise<int>;

    /**
     * Get a DeviceIconInfo.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { DeviceIconInfoFilterOptions } filterOptions - parameter for querying the device list,
     *     The parameter type is map,such as:
     *      "productId" : "xxx",           - product id of device
     *      "subProductId" : "xxx",        - subproduct id of device
     *      "imageType" : "xxx",           - image type, such as: ID,ID_Headset_L,ID_Headset_R,
     *     ID_Headset_B,ID_Headset_LB,ID_Headset_RB
     *      "specName" : "xxx",            - image size specification name, such as: sm/lg
     * @returns { Promise<DeviceIconInfo> } - Returns a DeviceIconInfo.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Get data from cloud fail.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceIconInfo(filterOptions: DeviceIconInfoFilterOptions): Promise<DeviceIconInfo>;

    /**
     * Get display name of local device.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { int } maxNameLength - the max number of bytes of the local device display name
     * @returns { Promise<string> } - Returns device display name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalDisplayDeviceName(maxNameLength: int): Promise<string>;

    /**
     * Set local device name.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceName - local device name
     * @returns { Promise<int> } - Returns operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *                                 The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setLocalDeviceName(deviceName: string): Promise<int>;

    /**
     * Set remote device name.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { string } deviceId    - remote device id
     * @param { string } deviceName  - remote device name
     * @returns { Promise<int> } - Returns operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter type;
     *                                                  3. Parameter verification failed;
     * @throws { BusinessError } 201 - Permission verification failed.
     *                                 The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600106 - Failed to get data from the cloud.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @throws { BusinessError } 11600108 - The device name contains non-compliant content.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setRemoteDeviceName(deviceId: string, deviceName: string): Promise<int>;

    /**
     * Set heartbeat policy.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { StrategyForHeartbeat } policy  - Heartbeat policy.
     * @param { int } delayTime  - Indicates the duration for disable heartbeat.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Incorrect parameter types;
     *                                                  3. Parameter verification failed.
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setHeartbeatPolicy(policy: StrategyForHeartbeat, delayTime: int): void;

    /**
     * Restores local device name.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     * @deprecated since 24
     * @useinstead distributedDeviceManager.DeviceManager#restoreLocalDeviceName
     */
    restoreLocalDeivceName(): void;

    /**
     * Get the device network id list by conditions.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param { NetworkIdQueryFilter } filterOptions - parameter for querying the device network id list,
     *                                                 The parameter type is map, such as:
     *      "wiseDeviceId" : xx-xxxxx - Get device network id list by wiseDevice id.
     *      "onlineStatus" : 1,             -  Get device network id list by online status.
     *                                       0 - indicates that the device is offline.
     *                                       1 - indicates that the device is online.
     * @returns { Promise<Array<string>> }  - Returns a list of device network id.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                                  1. Mandatory parameters are left unspecified;
     *                                                  2. Parameter verification failed;
     * @throws { BusinessError } 11600102 - Failed to obtain service.
     * @throws { BusinessError } 11600107 - A login account is required.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getDeviceNetworkIdList(filterOptions: NetworkIdQueryFilter): Promise<Array<string>>;

    /**
     * Query device identification by device IDs.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and
     *     ohos.permission.sec.ACCESS_UDID
     * @param { Array<string> } deviceIds - A list of device IDs that could be obtained by the application,
     *                                      with a maximum list size of 50.
     * @returns { Array<DeviceIdentification> } - Returns a list of DeviceIdentification.
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getIdentificationByDeviceIds(deviceIds: Array<string>): Array<DeviceIdentification>;

    /**
     * Restores the local device name.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11600102 - Failed to obtain the service.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    restoreLocalDeviceName(): void;
  }
}

export default distributedDeviceManager;