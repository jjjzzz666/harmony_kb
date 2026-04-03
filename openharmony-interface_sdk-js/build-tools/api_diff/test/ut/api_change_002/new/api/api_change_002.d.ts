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

import { AsyncCallback } from "./basic";
import Want from "./@ohos.app.ability.Want";

/**
 * This module offers set network policies on the devices.
 * @namespace networkManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 10
 */
declare namespace networkManager {

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getAllNetworkInterfaces.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
   function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;
   /**
    * Gets all of the network interfaces of the device.
    * This function can be called by a super administrator.
    * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
    * @param { Want } admin - admin indicates the administrator ability information.
    * @returns { Promise<Array<string>> } the promise returned by getAllNetworkInterfaces.
    * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
    * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
    * @throws { BusinessError } 201 - the application does not have permission to call this function.
    * @throws { BusinessError } 202 - not system application.
    * @throws { BusinessError } 401 - invalid input parameter.
    * @syscap SystemCapability.Customization.EnterpriseDeviceManager
    * @systemapi
    * @stagemodelonly
    * @since 10
    */
   function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @param { AsyncCallback<string> } callback - the callback of getIpAddress.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  function getIpAddress(networkInterface: string, callback: AsyncCallback<string>): void;
  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @returns { Promise<string> } the promise returned by getIpAddress.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;
  

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { AsyncCallback<string> } callback - the callback of getMac.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @returns { Promise<string> } the promise returned by getMac.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: number): Promise<string>;
}

export default networkManager;
