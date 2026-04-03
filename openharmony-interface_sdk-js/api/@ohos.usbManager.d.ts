/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capability of manage USB device.
 *
 * @namespace usbManager
 * @syscap SystemCapability.USB.USBManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usbManager {
  /**
   * Obtains the USB device list.
   *
   * @returns { Array<Readonly<USBDevice>> } USB device list.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Obtains the USB device list.
   *
   * @returns { Array<Readonly<USBDevice>> } USB device list.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * Connects to the USB device based on the device information returned by getDevices().
   *
   * @param { USBDevice } device - USB device on the device list returned by getDevices(). It cannot be empty.
   * @returns { Readonly<USBDevicePipe> } object for data transfer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Connects to the USB device based on the device information returned by getDevices().
   *
   * @param { USBDevice } device - USB device on the device list returned by getDevices(). It cannot be empty.
   * @returns { Readonly<USBDevicePipe> } object for data transfer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 Service exception. Possible causes: <br>1. No accessory is plugged in. [staticonly]
   * @throws { BusinessError } 14400012 Transmission I/O error. [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function connectDevice(device: USBDevice): Readonly<USBDevicePipe>;

  /**
   * Checks whether the application has the permission to access the device.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } indicates if the user has the permission to access the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Checks whether the application has the permission to access the device.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } indicates if the user has the permission to access the device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function hasRight(deviceName: string): boolean;

  /**
   * Requests the permission for a given application to access the USB device.
   * The system application has access to the device by default, and there is no need to call this interface to apply.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { Promise<boolean> } indicates if the device access permissions are granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Requests the permission for a given application to access the USB device.
   * The system application has access to the device by default, and there is no need to call this interface to apply.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { Promise<boolean> } indicates if the device access permissions are granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function requestRight(deviceName: string): Promise<boolean>;

  /**
   * Remove the permission for a given application to access the USB device.
   * The system application has access to the device by default, and calling this interface will not have any impact.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } indicates if the device access permissions are removed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Remove the permission for a given application to access the USB device.
   * The system application has access to the device by default, and calling this interface will not have any impact.
   *
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } indicates if the device access permissions are removed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function removeRight(deviceName: string): boolean;

  /**
   * Add device access permission.
   * The system application has access to the device by default, and calling this interface will not have any impact.
   *
   * @param { string } bundleName - refers to application that require access permissions. It cannot be empty.
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } value to indicate whether the permission is granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#addDeviceAccessRight
   */
  function addRight(bundleName: string, deviceName: string): boolean;

  /**
   * Converts the string descriptor of a given USB function list to a numeric mask combination.
   *
   * @param { string } funcs - descriptor of the supported function list. It cannot be empty.
   * @returns { number } the numeric mask combination of the function list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#getFunctionsFromString
   */
  function usbFunctionsFromString(funcs: string): number;

  /**
   * Converts the numeric mask combination of a given USB function list to a string descriptor.
   *
   * @param { FunctionType } funcs - numeric mask combination of the function list. The type of funcs must be number. It cannot be empty.
   * @returns { string } - descriptor of the supported function list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#getStringFromFunctions
   */
  function usbFunctionsToString(funcs: FunctionType): string;

  /**
   * Sets the current USB function list in Device mode.
   *
   * @param { FunctionType } funcs - numeric mask combination of the supported function list. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#setDeviceFunctions
   */
  function setCurrentFunctions(funcs: FunctionType): Promise<void>;

  /**
   * Obtains the numeric mask combination for the current USB function list in Device mode.
   *
   * @returns { FunctionType } the numeric mask combination for the current USB function list in FunctionType.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#getDeviceFunctions
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * Obtains the USBPort list.
   *
   * @returns { Array<USBPort> } the USBPort list.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#getPortList
   */
  function getPorts(): Array<USBPort>;

  /**
   * Gets the mask combination for the supported mode list of the specified USBPort.
   *
   * @param { number } portId - unique ID of the port. It cannot be empty.
   * @returns { PortModeType } the mask combination for the supported mode list in PortModeType.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#getPortSupportModes
   */
  function getSupportedModes(portId: number): PortModeType;

  /**
   * Sets the role types supported by the specified USBPort, which can be powerRole (for charging) and dataRole (for data transfer).
   *
   * @param { number } portId - unique ID of the port. It cannot be empty.
   * @param { PowerRoleType } powerRole - charging role. It cannot be empty.
   * @param { DataRoleType } dataRole - data role. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#setPortRoleTypes
   */
  function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>;

  /**
   * Add USB device access right.
   * The system application has access to the device by default, and calling this interface will not have any impact.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - refers to application that require access permissions. It cannot be empty.
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } value to indicate whether the permission is granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Add USB device access right.
   * The system application has access to the device by default, and calling this interface will not have any impact.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - refers to application that require access permissions. It cannot be empty.
   * @param { string } deviceName - device name defined by USBDevice.name. It cannot be empty.
   * @returns { boolean } value to indicate whether the permission is granted.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function addDeviceAccessRight(tokenId: string, deviceName: string): boolean;

  /**
   * Converts the string descriptor of a given USB function list to a numeric mask combination.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - descriptor of the supported function list. It cannot be empty.
   * @returns { number } the numeric mask combination of the function list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Converts the string descriptor of a given USB function list to a numeric mask combination.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - descriptor of the supported function list. It cannot be empty.
   * @returns { int } the numeric mask combination of the function list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getFunctionsFromString(funcs: string): int;

  /**
   * Converts the numeric mask combination of a given USB function list to a string descriptor.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - numeric mask combination of the function list. It cannot be empty.
   * @returns { string } - descriptor of the supported function list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Converts the numeric mask combination of a given USB function list to a string descriptor.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - numeric mask combination of the function list. It cannot be empty.
   * @returns { string } - descriptor of the supported function list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   */
  function getStringFromFunctions(funcs: FunctionType): string;

  /**
   * Converts the numeric mask combination of a given USB function list to a string descriptor.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } funcs - numeric mask combination of the function list.
   * @returns { string } - descriptor of the supported function list.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function getStringFromFunctions(funcs: int): string;

  /**
   * Sets the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - numeric mask combination of the supported function list. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @throws { BusinessError } 14400006 - Unsupported operation. The function is not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Sets the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - numeric mask combination of the supported function list. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @throws { BusinessError } 14400006 - Unsupported operation. The function is not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   */
  function setDeviceFunctions(funcs: FunctionType): Promise<void>;

  /**
   * Sets the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } funcs - numeric mask combination of the supported function list.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @throws { BusinessError } 14400006 - Unsupported operation. The function is not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function setDeviceFunctions(funcs: int): Promise<void>;

  /**
   * Obtains the numeric mask combination for the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { FunctionType } the numeric mask combination for the current USB function list in FunctionType.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Obtains the numeric mask combination for the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { FunctionType } the numeric mask combination for the current USB function list in FunctionType.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   */
  function getDeviceFunctions(): FunctionType;

  /**
   * Obtains the numeric mask combination for the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { int } the numeric mask combination for the current USB function list in FunctionType.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 Service exception. Possible causes: <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function getDeviceFunctions(): int;

  /**
   * Obtains the USBPort list.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { Array<USBPort> } the USBPort list.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Obtains the USBPort list.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { Array<USBPort> } the USBPort list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 Service exception. Possible causes: <br>1. No accessory is plugged in. [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getPortList(): Array<USBPort>;

  /**
   * Gets the mask combination for the supported mode list of the specified USBPort.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { number } portId - unique ID of the port. It cannot be empty.
   * @returns { PortModeType } the mask combination for the supported mode list in PortModeType.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Gets the mask combination for the supported mode list of the specified USBPort.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - unique ID of the port. It cannot be empty.
   * @returns { PortModeType } the mask combination for the supported mode list in PortModeType.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getPortSupportModes(portId: int): PortModeType;

  /**
   * Sets the role types supported by the specified USBPort, which can be powerRole (for charging) and dataRole (for data transfer).
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { number } portId - unique ID of the port. It cannot be empty.
   * @param { PowerRoleType } powerRole - charging role. It cannot be empty.
   * @param { DataRoleType } dataRole - data role. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 14400003 - Unsupported operation. The current device does not support port role switching.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12
   */
  /**
   * Sets the role types supported by the specified USBPort, which can be powerRole (for charging) and dataRole (for data transfer).
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - unique ID of the port. It cannot be empty.
   * @param { PowerRoleType } powerRole - charging role. It cannot be empty.
   * @param { DataRoleType } dataRole - data role. It cannot be empty.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400003 - Unsupported operation. The current device does not support port role switching.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setPortRoleTypes(portId: int, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>;

  /**
   * Adds USB accessory access right.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { number } tokenId - refers to application that require access permissions. It cannot be empty.
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 14
   */
  /**
   * Adds USB accessory access right.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - refers to application that require access permissions. It cannot be empty.
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function addAccessoryRight(tokenId: int, accessory: USBAccessory): void;

  /**
   * Claims a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to claim. It cannot be empty.
   * @param { boolean } [force] - optional parameter that determines whether to forcibly claim the USB interface.
   * @returns { number } returns **0** if the USB interface is successfully claimed; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Claims a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to claim. It cannot be empty.
   * @param { boolean } [force] - optional parameter that determines whether to forcibly claim the USB interface.
   * @returns { int } returns **0** if the USB interface is successfully claimed; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): int;

  /**
   * Releases a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to release. It cannot be empty.
   * @returns { number } returns **0** if the USB interface is successfully released; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Releases a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to release. It cannot be empty.
   * @returns { int } returns **0** if the USB interface is successfully released; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function releaseInterface(pipe: USBDevicePipe, iface: USBInterface): int;

  /**
   * Sets the device configuration.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBConfiguration } config - device configuration. It cannot be empty.
   * @returns { number } returns **0** if the device configuration is successfully set; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Sets the device configuration.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBConfiguration } config - device configuration. It cannot be empty.
   * @returns { int } returns **0** if the device configuration is successfully set; returns an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): int;

  /**
   * Sets a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to set. It cannot be empty.
   * @returns { number } returns **0** if the USB interface is successfully set; return an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Sets a USB interface.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @param { USBInterface } iface - USB interface, which is used to determine the interface to set. It cannot be empty.
   * @returns { int } returns **0** if the USB interface is successfully set; return an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function setInterface(pipe: USBDevicePipe, iface: USBInterface): int;

  /**
   * Obtains the raw USB descriptor.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @returns { Uint8Array } returns the raw descriptor data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Obtains the raw USB descriptor.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the bus number and device address. It cannot be empty.
   * @returns { Uint8Array } returns the raw descriptor data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 Access right denied. Call requestRight to get the USBDevicePipe access right first. [staticonly]
   * @throws { BusinessError } 14400004 Service exception. Possible causes: <br>1. No accessory is plugged in. [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getRawDescriptor(pipe: USBDevicePipe): Uint8Array;

  /**
   * Obtains the file descriptor.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @returns { number } returns the file descriptor of the USB device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Obtains the file descriptor.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @returns { int } returns the file descriptor of the USB device.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getFileDescriptor(pipe: USBDevicePipe): int;

  /**
   * Performs control transfer.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @param { USBControlParams } controlparam - control transfer parameters. It cannot be empty.
   * @param { number } [timeout] - timeout duration. This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<number> } returns the size of the transmitted or received data block if the control transfer is successful;
   * return -1 if an exception occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.usbManager/usbManager#usbControlTransfer
   */
  function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>;

  /**
   * Performs usb control transfer.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @param { USBDeviceRequestParams } requestparam - control transfer parameters. It cannot be empty.
   * @param { number } [timeout] - timeout duration. This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<number> } returns the size of the transmitted or received data block if the control transfer is successful;
   * return -1 if an exception occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 12
   */
  /**
   * Performs usb control transfer.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @param { USBDeviceRequestParams } requestparam - control transfer parameters. It cannot be empty.
   * @param { int } [timeout] - timeout duration. This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<int> } returns the size of the transmitted or received data block if the control transfer is successful;
   * return -1 if an exception occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: int): Promise<int>;

  /**
   * Performs bulk transfer.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @param { USBEndpoint } endpoint - USB endpoint, which is used to determine the USB port for data transfer. It cannot be empty.
   * @param { Uint8Array } buffer - buffer for writing or reading data. It cannot be empty.
   * @param { number } [timeout] - timeout duration. This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<number> } the size of the transmitted or received data block if the control transfer is successful;
   * return -1 if an exception occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Performs bulk transfer.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @param { USBEndpoint } endpoint - USB endpoint, which is used to determine the USB port for data transfer. It cannot be empty.
   * @param { Uint8Array } buffer - buffer for writing or reading data. It cannot be empty.
   * @param { int } [timeout] - timeout duration. This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<int> } the size of the transmitted or received data block if the control transfer is successful;
   * return -1 if an exception occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: int
  ): Promise<int>;

  /**
   * Closes a USB device pipe.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @returns { number } returns **0** if the USB device pipe is closed successfully; return an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9
   */
  /**
   * Closes a USB device pipe.
   *
   * @param { USBDevicePipe } pipe - device pipe, which is used to determine the USB device. It cannot be empty.
   * @returns { int } returns **0** if the USB device pipe is closed successfully; return an error code otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function closePipe(pipe: USBDevicePipe): int;

  /**
   * Checks whether the application has the right to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @returns { boolean } indicates if the user has the right to access the USB accessory.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Checks whether the application has the right to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @returns { boolean } indicates if the user has the right to access the USB accessory.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function hasAccessoryRight(accessory: USBAccessory): boolean;

  /**
   * Requests the right for a given application to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @returns { Promise<boolean> } indicates if the USB accessory access right are granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Requests the right for a given application to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @returns { Promise<boolean> } indicates if the USB accessory access right are granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>;

  /**
   * Cancels the right for a given application to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Cancels the right for a given application to access the USB accessory.
   *
   * @param { USBAccessory } accessory - USB accessory. It cannot be empty.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function cancelAccessoryRight(accessory: USBAccessory): void;

  /**
   * Obtains the USB Accessory list.
   *
   * @returns { Array<Readonly<USBAccessory>> } USB accessory list.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Obtains the USB Accessory list.
   *
   * @returns { Array<Readonly<USBAccessory>> } USB accessory list.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getAccessoryList(): Array<Readonly<USBAccessory>>;

  /**
   * Obtains the accessory handle and opens accessory file descriptor.
   *
   * @param { USBAccessory } accessory - accessory, which is used to determine the accessory. It cannot be empty.
   * @returns { USBAccessoryHandle } returns the handle of the accessory.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14401002 - Failed to open the native accessory node.
   * @throws { BusinessError } 14401003 - Cannot reopen the accessory.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Obtains the accessory handle and opens accessory file descriptor.
   *
   * @param { USBAccessory } accessory - accessory, which is used to determine the accessory. It cannot be empty.
   * @returns { USBAccessoryHandle } returns the handle of the accessory.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14401002 - Failed to open the native accessory node.
   * @throws { BusinessError } 14401003 - Cannot reopen the accessory.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function openAccessory(accessory: USBAccessory): USBAccessoryHandle;

  /**
   * Closes the accessory file descriptor.
   *
   * @param { USBAccessoryHandle } accessoryHandle - Accessory handle to be closed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 14
   */
  /**
   * Closes the accessory file descriptor.
   *
   * @param { USBAccessoryHandle } accessoryHandle - Accessory handle to be closed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   * <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function closeAccessory(accessoryHandle: USBAccessoryHandle): void;

  /**
   * Represents the USB endpoint from which data is sent or received. You can obtain the USB endpoint through USBInterface.
   *
   * @typedef USBEndpoint
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBEndpoint {
    /**
     * Endpoint address
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    address: int;

    /**
     * Endpoint attributes
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Endpoint interval
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * Maximum size of data packets on the endpoint
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPacketSize: int;

    /**
     * Endpoint direction
     *
     * @type { USBRequestDirection }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    direction: USBRequestDirection;

    /**
     * Endpoint number
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     */
    number: number;

    /**
     * Endpoint address
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 23 static
     */
    endpointAddr: int;

    /**
     * Endpoint type
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    type: int;

    /**
     * Unique ID defined by USBInterface.id, which indicates the interface to which the endpoint belongs
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaceId: int;



  }

  /**
   * Represents a USB interface. One config can contain multiple **USBInterface** instances, each providing a specific function.
   *
   * @typedef USBInterface
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBInterface {
    /**
     * Unique ID of the USB interface
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Interface protocol
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * Device type
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * Device subclass
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * Alternation between descriptors of the same USB interface
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    alternateSetting: int;

    /**
     * Interface name
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * USBEndpoint that belongs to the USB interface
     *
     * @type { Array<USBEndpoint> }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    endpoints: Array<USBEndpoint>;
  }

  /**
   * USB configuration. One USBDevice can contain multiple USBConfiguration instances.
   *
   * @typedef USBConfiguration
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBConfiguration {
    /**
     * Unique ID of the USB configuration
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Configuration attributes
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Maximum power consumption, in mA
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPower: int;

    /**
     * Configuration name, which can be left empty
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Support for remote wakeup
     *
     * @type { boolean }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isRemoteWakeup: boolean;

    /**
     * Support for independent power supplies
     *
     * @type { boolean }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isSelfPowered: boolean;

    /**
     * Supported interface attributes
     *
     * @type { Array<USBInterface> }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaces: Array<USBInterface>;
  }

  /**
   * Represents a USB device.
   *
   * @typedef USBDevice
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevice {
    /**
     * Bus address
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * Device address
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    devAddress: int;

    /**
     * Device SN
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * Device name
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Device manufacturer
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    manufacturerName: string;

    /**
     * Product information
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productName: string;

    /**
     * Product version
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * Vendor ID
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * Device class
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * Device subclass
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * Device protocol code
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * Device configuration descriptor information
     *
     * @type { Array<USBConfiguration> }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    configs: Array<USBConfiguration>;
  }

  /**
   * Represents a USB device pipe, which is used to determine the USB device.
   *
   * @typedef USBDevicePipe
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevicePipe {
    /**
     * Bus address.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * Device address
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    devAddress: int;
  }

  /**
   * Enumerates power role types.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PowerRoleType {
    /**
     * None
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * External power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE = 1,

    /**
     * Internal power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SINK = 2
  }

  /**
   * Enumerates data role types.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DataRoleType {
    /**
     * None
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Host mode
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HOST = 1,

    /**
     * Device mode
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE = 2
  }

  /**
   * Enumerates port mode types
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PortModeType {
    /**
     * None
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Upstream facing port, which functions as the sink of power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    UFP = 1,

    /**
     * Downstream facing port, which functions as the source of power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DFP = 2,

    /**
     * Dynamic reconfiguration port (DRP), which can function as the DFP (host) or UFP (device). It is not supported currently.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DRP = 3,

    /**
     * Not supported currently
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NUM_MODES = 4
  }

  /**
   * Enumerates USB device port roles.
   *
   * @typedef USBPortStatus
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPortStatus {
    /**
     * USB mode
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentMode: int;

    /**
     * Power role
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentPowerRole: int;

    /**
     * Data role
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentDataRole: int;
  }

  /**
   * Represents a USB device port.
   *
   * @typedef USBPort
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPort {
    /**
     * Unique ID of the USB port
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Mask combination for the supported mode list of the USB port
     *
     * @type { PortModeType }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    supportedModes: PortModeType;

    /**
     * USB port role
     *
     * @type { USBPortStatus }
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    status: USBPortStatus;
  }

  /**
   * Represents control transfer parameters (deprecated).
   *
   * @typedef USBControlParams
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.usbManager/usbManager#USBDeviceRequestParams
   */
  interface USBControlParams {
    /**
     * Request type
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    request: number;

    /**
     * Request target type
     *
     * @type { USBRequestTargetType }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    target: USBRequestTargetType;

    /**
     * Control request type
     *
     * @type { USBControlRequestType }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    reqType: USBControlRequestType;

    /**
     * Request parameter value
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    value: number;

    /**
     * Index of the parameter value
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    index: number;

    /**
     * Data written to or read from the buffer
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.usbManager/usbManager.USBDeviceRequestParams
     */
    data: Uint8Array;
  }

  /**
   * Represents control transfer parameters.
   *
   * @typedef USBDeviceRequestParams
   * @syscap SystemCapability.USB.USBManager
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceRequestParams {
    /**
     * Bit map request type
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bmRequestType: int;

    /**
     * Byte request
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bRequest: int;

    /**
     * Request parameter word value
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wValue: int;

    /**
     * Word index of the parameter value
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wIndex: int;

    /**
     * Word length of the parameter value
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wLength: int;

    /**
     * Data written to or read from the buffer
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * Enumerates USB request target types.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestTargetType {
    /**
     * USB device
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * USB interface
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * Endpoint
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * Others
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_OTHER = 3
  }

  /**
   * Enumerates control request types.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBControlRequestType {
    /**
     * Standard
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * Class
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * Vendor
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_VENDOR = 2
  }

  /**
   * Enumerates request directions.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestDirection {
    /**
     * Request for writing data from the host to the device
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_TO_DEVICE = 0,

    /**
     * Request for reading data from the device to the host
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_FROM_DEVICE = 0x80
  }

  /**
   * Enumerates function modes.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum FunctionType {
    /**
     * None
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Serial port device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACM = 1,

    /**
     * Ethernet port device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ECM = 2,

    /**
     * HDC device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HDC = 4,

    /**
     * MTP device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MTP = 8,

    /**
     * PTP device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PTP = 16,

    /**
     * RNDIS device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RNDIS = 32,

    /**
     * MIDI device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MIDI = 64,

    /**
     * Audio source device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE = 128,

    /**
     * NCM device
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NCM = 256
  }

  /**
   * Represents a USB Accessory.
   *
   * @typedef USBAccessory
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessory {
    /**
     * The manufacturer name of the accessory.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * The product of the accessory.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    product: string;

    /**
     * The user visible description of the accessory.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * The version of the accessory.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * The serial number of the accessory.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    serialNumber: string;
  }

  /**
   * Handle of accessory.
   *
   * @typedef USBAccessoryHandle
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessoryHandle {
    /**
     * The file descriptor of the accessory.The valid USBAccessoryHandle.accessoryFd is a positive value.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    accessoryFd: int;
  }

  /**
   * Usb transfer flag.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbTransferFlags {
    /**
     * Report short frames as errors
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_SHORT_NOT_OK = 0,

    /**
     * Automatically free transfer buffer
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_BUFFER = 1,

    /**
     * Automatically free transfer after callback returns
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_TRANSFER = 2,

    /**
     * Transmissions that are multiples of wMaxPacketSize will add an additional zero packet.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_ADD_ZERO_PACKET = 3
  }

  /**
   * Usb transfer status.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbTransferStatus {
    /**
     * Transfer completed
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_COMPLETED = 0,

    /**
     * Transfer failed
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_ERROR = 1,

    /**
     * Transfer timed out
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TIMED_OUT = 2,

    /**
     * Transfer was canceled
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_CANCELED = 3,

    /**
     * For bulk/interrupt endpoints: halt condition detected (endpoint
     * stalled). For control endpoints: control request not supported.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_STALL = 4,

    /**
     * Device was disconnected
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_NO_DEVICE = 5,

    /**
     * Device sent more data than requested
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_OVERFLOW = 6
  }

  /**
   * USB DATA transfer type.
   *
   * @enum { int }
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbEndpointTransferType {
    /**
     * Isochronous endpoint
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_ISOCHRONOUS = 0x1,

    /**
     * Bulk endpoint
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BULK = 0x2,

    /**
     * Interrupt endpoint
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_INTERRUPT = 0x3
  }

  /**
   * Isochronous packet descriptors, only for isochronous transfers.
   *
   * @typedef UsbIsoPacketDescriptor
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbIsoPacketDescriptor {
    /**
     * Length of data to request in this packet
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Amount of data that was actually transferred
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;

    /**
     * Status code for this packet
     *
     * @type { UsbTransferStatus }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;
  }

   /**
   * submit transfer callback.
   *
   * @typedef SubmitTransferCallback
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface SubmitTransferCallback {
    /**
     * Actual length of data that was transferred. Read-only, and only for
     * use within transfer callback function. Not valid for isochronous endpoint transfers.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;

    /**
     * The status of the transfer. Read-only, and only for use within transfer callback function.
     *
     * @type { UsbTransferStatus }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;

    /**
     * Isochronous packet descriptors, for isochronous transfers only.
     *
     * @type { Array<Readonly<UsbIsoPacketDescriptor>> }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>;
  }

  /**
   * As a generic USB data transfer interface. The Client populates this interface and
   * submits it in order to request a transfer.
   *
   * @typedef UsbDataTransferParams
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbDataTransferParams {
    /**
     * Pipe of the device that this data transfer will be submitted to.
     *
     * @type { USBDevicePipe }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    devPipe: USBDevicePipe;

    /**
     * A bitwise OR combination of UsbTransferFlags.
     *
     * @type { UsbTransferFlags }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    flags: UsbTransferFlags;

    /**
     * Address of the endpoint where this transfer will be sent.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    endpoint: int;

    /**
     * Type of the transfer
     *
     * @type { UsbEndpointTransferType }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    type: UsbEndpointTransferType;

    /**
     * Timeout for this transfer in milliseconds. A value of 0 indicates no timeout.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    timeout: int;

    /**
     * Length of the data buffer. Must be non-negative.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Callback function. This will be invoked when the transfer completes, fails, or is canceled.
     *
     * @type { AsyncCallback<SubmitTransferCallback> }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    callback: AsyncCallback<SubmitTransferCallback>;

    /**
     * User context data. Useful for associating specific data to a transfer
     * that can be accessed from within the callback function.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    userData: Uint8Array;

    /**
     * Data buffer
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    buffer: Uint8Array;

    /**
     * Count of isochronous packets. Only used for I/O with isochronous endpoints. Must be non-negative.
     *
     * @type { int }
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketCount: int;
  }

  /**
   * Submit USB data transfer.
   *
   * @param { transfer } As a generic USB data transfer interface. The Client populates this interface and
   * submits it in order to request a transfer
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400007 - Resource busy. Possible causes:
   * <br>1. The transfer has already been submitted.
   * <br>2. The interface is claimed by another program or driver.
   * @throws { BusinessError } 14400008 - No such device (it may have been disconnected).
   * @throws { BusinessError } 14400009 - Insufficient memory. Possible causes:
   * <br>1. Memory allocation failed.
   * @throws { BusinessError } 14400012 - Transmission I/O error.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbSubmitTransfer(transfer: UsbDataTransferParams): void;

  /**
   * Cancel USB data transfer.
   *
   * @param { transfer } Cancel the target transfer
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400008 - No such device (it may have been disconnected).
   * @throws { BusinessError } 14400010 - Other USB error. Possible causes:
   * <br>1.Unrecognized discard error code.
   * @throws { BusinessError } 14400011 - The transfer is not in progress, or is already complete or cancelled.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbCancelTransfer(transfer: UsbDataTransferParams): void;

  /**
   * Perform a USB port reset to reinitialize a usb device. The operation will attempt to restore the previous configuration
   * and alternate interface settings after the reset has completed.
   *
   * @param { USBDevicePipe } pipe - Represents a USB device,which is the target object to be restarted.It cannot be empty.
   * @returns { boolean } If the restart operation is successful, return {@code true}; if the restart operation fails, return {@code false}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 -Service exception. Possible causes: 1. No accessory is plugged in.
   * @throws { BusinessError } 14400008 - No such device(it may have been disconnected)
   * @throws { BusinessError } 14400010 - Other USB error. Possible causes:
   * <br>1.Unrecognized discard error code.
   * @throws { BusinessError } 14400013 - The USBDevicePipe validity check failed. Possible causes:
   * <br>1.The input parameters fail the validation check.
   * <br>2.The call chain used to obtain the input parameters is not reasonable.
   * @syscap SystemCapability.USB.USBManager
   * @since 20 dynamic
   * @since 23 static
   */
  function resetUsbDevice(pipe: USBDevicePipe): boolean;





}

export default usbManager;