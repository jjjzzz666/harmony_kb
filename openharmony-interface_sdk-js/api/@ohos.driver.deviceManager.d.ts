/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit DriverDevelopmentKit
 */

import type { AsyncCallback } from './@ohos.base';
import type rpc from './@ohos.rpc';

/**
 * This module provides the capability of manage external device.
 *
 * @namespace deviceManager
 * @syscap SystemCapability.Driver.ExternalDevice
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace deviceManager {
  /**
   * Query the external device list.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { int } busType - The bus type of device to be queried.
   * @returns { Array<Readonly<Device>> } External device list.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception or busType parameter error.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function queryDevices(busType?: int): Array<Readonly<Device>>;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback<number> } onDisconnect - Callback is invoked when device is disconnected after bind
   * success.
   * @param { AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}> } callback - Indicates the bind result
   * including device ID and remote object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * 3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#bindDriverWithDeviceId
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}>): void;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback<number> } onDisconnect - Callback is invoked when device is disconnected after bind
   * success.
   * @param { AsyncCallback<RemoteDeviceDriver> } callback - Indicates the bind result including device ID and
   * remote object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * 3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#bindDriverWithDeviceId
   */
  function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<RemoteDeviceDriver>): void;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback<number> } onDisconnect - Callback is invoked when device is disconnected after bind
   * success.
   * @returns { Promise<{deviceId: number; remote: rpc.IRemoteObject;}> } Indicates the bind result including device
   * ID and remote object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * 3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#bindDriverWithDeviceId
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<{deviceId: number;
    remote: rpc.IRemoteObject;}>;

  /**
   * Bind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback<number> } onDisconnect - Callback is invoked when device is disconnected after bind
   * success.
   * @returns { Promise<RemoteDeviceDriver> } Indicates the bind result including device ID and remote object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * 3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#bindDriverWithDeviceId
   */
  function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<RemoteDeviceDriver>;

  /**
   * Unbind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @param { AsyncCallback<number> } callback - Indicates the unbind result invoked when unbind is finished.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#unbindDriverWithDeviceId
   */
  function unbindDevice(deviceId: number, callback: AsyncCallback<number>): void;

  /**
   * Unbind the device based on the device information returned by queryDevices().
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device id on the device list returned by queryDevices().
   * @returns { Promise<number> } - Indicates the unbind result invoked when unbind is finished.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
   * 3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead ohos.driver.deviceManager/deviceManager#unbindDriverWithDeviceId
   */
  function unbindDevice(deviceId: number): Promise<number>;

  /**
   * Queries external device information.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { long } deviceId - ID of device to query.
   * @returns { Array<Readonly<DeviceInfo>> } Device information obtained.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. A non-system application cannot call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function queryDeviceInfo(deviceId?: long): Array<Readonly<DeviceInfo>>;

  /**
   * Queries driver information.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { string } driverUid - Unique identifier of driver query.
   * @returns { Array<Readonly<DriverInfo>> } Driver information obtained.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. A non-system application cannot call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function queryDriverInfo(driverUid?: string): Array<Readonly<DriverInfo>>;

/**
* Bind the device based on the device information returned by queryDevices().
*
* @permission ohos.permission.ACCESS_DDK_DRIVERS
* @param { long } deviceId - Device id on the device list returned by queryDevices().
* @param { AsyncCallback<long> } onDisconnect - Callback is invoked when device is disconnected after bind
*     success.
* @returns { Promise<RemoteDeviceDriver> } Indicates the bind result including device ID and remote object.
* @throws { BusinessError } 201 - The permission check failed.
* @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
* @throws { BusinessError } 26300002 - The driver service does not allow any client to bind.
* @syscap SystemCapability.Driver.ExternalDevice
* @since 19 dynamic
* @since 23 static
*/
  function bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>): Promise<RemoteDeviceDriver>;

/**
* Unbind the device based on the device information returned by queryDevices().
*
* @permission ohos.permission.ACCESS_DDK_DRIVERS
* @param { long } deviceId - Device id on the device list returned by queryDevices().
* @returns { Promise<int> } - Indicates the unbind result invoked when unbind is finished.
* @throws { BusinessError } 201 - The permission check failed.
* @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
* @throws { BusinessError } 26300003 - There is no binding relationship.
* @syscap SystemCapability.Driver.ExternalDevice
* @since 19 dynamic
* @since 23 static
*/
  function unbindDriverWithDeviceId(deviceId: long): Promise<int>;

  /**
   * Enumerates the bus types.
   *
   * @enum { int }
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BusType {
    /**
     * USB device type
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    USB = 1,
  }

  /**
   * Represents a device.
   *
   * @typedef Device
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface Device {
    /**
     * Bus type of the device.
     *
     * @type { BusType }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * Device ID.
     *
     * @type { long }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Description of the device.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * Represents a USB device.
   *
   * @typedef USBDevice
   * @extends Device
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface USBDevice extends Device {
    /**
     * Vendor ID.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    productId: int;
  }
  
  /**
   * Driver of the remote device bound with <b>deviceId</b>.
   *
   * @typedef RemoteDeviceDriver
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11 dynamic
   * @since 23 static
   */
  interface RemoteDeviceDriver {
    /**
     * Device ID.
     *
     * @type { long }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Remote driver object.
     *
     * @type { rpc.IRemoteObject }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    remote: rpc.IRemoteObject;
  }

  /**
   * Represents information about a device interface descriptor.
   *
   * @typedef USBInterfaceDesc
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBInterfaceDesc {
    /**
     * Interface number.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bInterfaceNumber: int;

    /**
     * Interface class code.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bClass: int;

    /**
     * Interface subclass code.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bSubClass: int;

    /**
     * Interface protocol.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bProtocol: int;
  }


  /**
   * Represents the device information.
   *
   * @typedef DeviceInfo
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DeviceInfo {
    /**
     * Device ID.
     *
     * @type { long }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Whether the device has a matched driver.
     *
     * @type { boolean }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isDriverMatched: boolean;

    /**
     * Unique identifier of the driver.
     *
     * @type { ?string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid?: string;
  }

  /**
   * Represents the USB device information.
   *
   * @typedef USBDeviceInfo
   * @extends DeviceInfo
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceInfo extends DeviceInfo {
    /**
     * Vendor ID.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID.
     *
     * @type { int }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * List of USB interface descriptors.
     *
     * @type { Array<Readonly<USBInterfaceDesc>> }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    interfaceDescList: Array<Readonly<USBInterfaceDesc>>;
  }

  /**
   * Represents the driver information.
   *
   * @typedef DriverInfo
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DriverInfo {
    /**
     * Bus type of the device.
     *
     * @type { BusType }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * Unique identifier of the driver.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid: string;

    /**
     * Driver name.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverName: string;

    /**
     * Driver version.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverVersion: string;

    /**
     * Driver size.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverSize: string;

    /**
     * Driver description.
     *
     * @type { string }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * Represents the USB driver information.
   *
   * @typedef USBDriverInfo
   * @extends DriverInfo
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDriverInfo extends DriverInfo {
    /**
     * IDs of supported products.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productIdList: Array<int>;

    /**
     * IDs of supported vendors.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    vendorIdList: Array<int>;
  }
}

export default deviceManager;
