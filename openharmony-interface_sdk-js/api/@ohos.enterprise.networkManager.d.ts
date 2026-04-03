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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type connection from './@ohos.net.connection';

/**
 * This module offers set network policies on the devices.
 *
 * @namespace networkManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 10
 */
declare namespace networkManager {
  /**
   * Iptables rule add method.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum AddMethod {
    /**
     * Append method
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    APPEND = 0,

    /**
     * Insert method
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    INSERT = 1
  }

  /**
   * Iptables rule direction.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Direction {
    /**
     * Input direction
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    INPUT = 0,

    /**
     * Output direction
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    OUTPUT = 1,

    /**
     * Forward direction
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    FORWARD = 2
  }

  /**
   * Iptables rule action.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Action {
    /**
     * Action allow
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALLOW = 0,

    /**
     * Action deny
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DENY = 1,

    /**
     * Action reject
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    REJECT = 2
  }

  /**
   * Iptables rule protocol
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Protocol {
    /**
     * Protocol all
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALL = 0,

    /**
     * Protocol tcp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    TCP = 1,

    /**
     * Protocol udp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UDP = 2,

    /**
     * Protocol icmp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ICMP = 3
  }

  /**
   * Iptables rule logType.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum LogType {
    /**
     * Netfilter Log
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    NFLOG = 0
  }

  /**
   * Iptables add filter rule
   *
   * @typedef AddFilterRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface AddFilterRule {
    /**
     * Iptables rule num
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ruleNo?: number;

    /**
     * Iptables ip source address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Iptables ip destination address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Iptables source port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Iptables destination port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Add method
     *
     * @type { AddMethod }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    method: AddMethod;

    /**
     * Direction
     *
     * @type { Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action
     *
     * @type { Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action: Action;

    /**
     * Protocol
     *
     * @type { ?Protocol }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Iptables remove filter rule
   *
   * @typedef RemoveFilterRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface RemoveFilterRule {
    /**
     * Iptables ip source address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Iptables ip destination address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Iptables source port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Iptables destination port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Direction
     *
     * @type { Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action
     *
     * @type { ?Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action?: Action;

    /**
     * Protocol
     *
     * @type { ?Protocol }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Firewall rule
   *
   * @typedef FirewallRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface FirewallRule {
    /**
     * Source IP
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcAddr?: string;

    /**
     * Destination IP
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destAddr?: string;

    /**
     * Source Port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcPort?: string;

    /**
     * Destination Port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destPort?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * Direction
     *
     * @type { ?Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    direction?: Direction;

    /**
     * Action
     *
     * @type { ?Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * Protocol
     *
     * @type { ?Protocol }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    protocol?: Protocol;

    /**
     * Address family. 1: IPV4, 2: IPV6, default is IPV4.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * Log type
     *
     * @type { ?LogType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * Domain filter rule
   *
   * @typedef DomainFilterRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface DomainFilterRule {
    /**
     * Domain name
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    domainName?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * action
     *
     * @type { ?Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * Direction
     *
     * @type { ?Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    direction?: Direction;

    /**
     * Address family. 1: IPV4, 2: IPV6, default is IPV4.
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * Log type
     *
     * @type { ?LogType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * Defines the configuration mode of the Ethernet connection.
   * @enum { int }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum IpSetMode {
    /**
     * Static configuration.
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    STATIC = 0,

    /**
     * Dynamic configuration.
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DHCP = 1,
  }

  /**
   * Network interface configuration for the Ethernet connection.
   *
   * @typedef InterfaceConfig
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface InterfaceConfig {

    /**
     * IP set mode.
     *
     * @type { IpSetMode }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipSetMode: IpSetMode;

    /**
     * IP information.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipAddress?: string;

    /**
     * Gateway information.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    gateway?: string;

    /**
     * NetMask information.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    netMask?: string;

    /**
     * DNS service address.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    dnsServers?: string;
  }
  
  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getAllNetworkInterfaces.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Promise<Array<string>> } the promise returned by getAllNetworkInterfaces.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Gets all the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Array<string> } all the network interfaces of the device.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllNetworkInterfacesSync(admin: Want): Array<string>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @param { AsyncCallback<string> } callback - the callback of getIpAddress.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @returns { Promise<string> } the promise returned by getIpAddress.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - the ip address of the network interface.
   * @returns { string } the promise returned by getIpAddress.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getIpAddressSync(admin: Want, networkInterface: string): string;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { AsyncCallback<string> } callback - the callback of getMac.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @returns { Promise<string> } the promise returned by getMac.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @returns { string } the mac address of the network interface.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getMacSync(admin: Want, networkInterface: string): string;

  /**
   * Gets state of whether the network interface is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @param { AsyncCallback<boolean> } callback - the callback of isNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Gets state of whether the network interface is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @returns { Promise<boolean> } the promise returned by isNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * Gets state of whether the network interface is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @returns { boolean } true if disable the network interfaces, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function isNetworkInterfaceDisabledSync(admin: Want, networkInterface: string): boolean;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to set status.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of setNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to set status.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @returns { Promise<void> } the promise returned setNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<void>;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to set status.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setNetworkInterfaceDisabledSync(admin: Want, networkInterface: string, isDisabled: boolean): void;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @param { AsyncCallback<void> } callback - the callback of setGlobalProxy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @returns { Promise<void> } the promise returned by the setGlobalProxy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy): Promise<void>;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setGlobalProxySync(admin: Want, httpProxy: connection.HttpProxy): void;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy for a system account.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @param { number } accountId - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function setGlobalProxyForAccount(admin: Want, httpProxy: connection.HttpProxy, accountId: number): void;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.If the admin is not empty, it must
   *                         have the corresponding permission.
   * @param { AsyncCallback<connection.HttpProxy> } callback - the callback carries the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want, callback: AsyncCallback<connection.HttpProxy>): void;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.If the admin is not empty, it must
   *                         have the corresponding permission.
   * @returns { Promise<connection.HttpProxy> } the promise carries the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want): Promise<connection.HttpProxy>;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.If the admin is not empty, it must
   *                         have the corresponding permission.
   * @returns { connection.HttpProxy } the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getGlobalProxySync(admin: Want): connection.HttpProxy;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy for a system account.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.If the admin is not empty, it must
   *                         have the corresponding permission.
   * @param { number } accountId - accountId indicates the account ID.
   * @returns { connection.HttpProxy } the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy for a system account.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - admin indicates the administrator ability information.If the admin is not empty, it must
   *                         have the corresponding permission.
   * @param { number } accountId - accountId indicates the account ID.
   * @returns { connection.HttpProxy } the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getGlobalProxyForAccount(admin: Want | null, accountId: number): connection.HttpProxy;

  /**
   * Add iptables filter rule by {@link AddFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AddFilterRule } filterRule - iptables filter rule configuration information.
   * @param { AsyncCallback<void> } callback - the callback of addIptablesFilterRule.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Add iptables filter rule by {@link AddFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AddFilterRule } filterRule - iptables filter rule configuration information.
   * @returns { Promise<void> } the promise returned by the addIptablesFilterRule.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule): Promise<void>;

  /**
   * Remove iptables filter rule by {@link RemoveFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { RemoveFilterRule } filterRule - iptables filter rule configuration information.
   * @param { AsyncCallback<void> } callback - the callback of removeIptablesFilterRule.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Remove iptables filter rule by {@link RemoveFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { RemoveFilterRule } filterRule - iptables filter rule configuration information.
   * @returns { Promise<void> } the promise returned by the removeIptablesFilterRule.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule): Promise<void>;

  /**
   * Query iptables rule and list the result.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AsyncCallback<string> } callback - the callback carries the iptables rules in the table filter.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Query iptables rule and list the result.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Promise<string> } the promise carries the iptables rules in the table filter.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want): Promise<string>;

  /**
   * Adds firewall rule by {@link Firewall}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { FirewallRule } firewallRule - firewall rule that needs to be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addFirewallRule(admin: Want, firewallRule: FirewallRule): void;

  /**
   * Removes firewall rule by {@link Firewall}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { FirewallRule } firewallRule - matching rule used to remove firewall rule.
   *    if firewallRule or firewallRule#direction,firewallRule#action is empty, multiple firewall rule can be removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeFirewallRule(admin: Want, firewallRule?: FirewallRule): void;

  /**
   * Gets all firewall rules, Contains the rules added by {@link addFirewallRule} and {@link addIptablesFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Array<FirewallRule> } an array of added firewall rules.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getFirewallRules(admin: Want): Array<FirewallRule>;

  /**
   * Adds domain filter rule by {@link DomainFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { DomainFilterRule } domainFilterRule - domain filter rule that needs to be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDomainFilterRule(admin: Want, domainFilterRule: DomainFilterRule): void;

  /**
   * Removes domain filter rule by {@link DomainFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { DomainFilterRule } domainFilterRule - matching rule used to remove domain filter rule.
   *    if domainFilterRule or domainFilterRule#action is empty, multiple domain filter rule can be removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDomainFilterRule(admin: Want, domainFilterRule?: DomainFilterRule): void;

  /**
   * Gets all domain filter rules, Contains the rules added by {@link addDomainFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Array<DomainFilterRule> } an array of added domain filter rules.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDomainFilterRules(admin: Want): Array<DomainFilterRule>;

  /**
   * Turn on mobile data.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { boolean } isForce - True means force open mobile data, user can not turn off it, false means user can turn off it.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOnMobileData(admin: Want, isForce: boolean): void;

    /**
   * Turn off mobile data.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
    function turnOffMobileData(admin: Want): void;

  /**
   * Add apn to the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Record<string, string> } apnInfo - Apn param info that needs to be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addApn(admin: Want, apnInfo: Record<string, string>): void;

  /**
   * Delete apn by appId.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } apnId - Apn id that needs to be deleted.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function deleteApn(admin: Want, apnId: string): void;

  /**
   * Update apn.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Record<string, string> } apnInfo - Apn param info that needs to be updated.
   * @param { string } apnId - Apn id that needs to be update.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function updateApn(admin: Want, apnInfo: Record<string, string>, apnId: string): void;

  /**
   * Sets preferred apn.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } apnId - Apn id that needs to be set prefer.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setPreferredApn(admin: Want, apnId: string): void;

  /**
   * Get the apn params for the specific apn info.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Record<string, string> } apnInfo - The query conditions for the apn.
   * @returns { Array<string> } id(s) of the apns which meet the query conditions.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function queryApn(admin: Want, apnInfo: Record<string, string>): Array<string>;

  /**
   * Get the apn params for the specific apn id.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { string } apnId - The id of the apn.
   * @returns { Record<string, string> } The apn params for the specific apn id.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function queryApn(admin: Want, apnId: string): Record<string, string>;

  /**
   * Sets ip address of the specific network interface.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } networkInterface - networkInterface indicates the network interface to set ip address.
   * @param { InterfaceConfig } config - config indicates configuration of network interface.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201010 - Ethernet configuration failed. Ethernet device not connected.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setEthernetConfig(admin: Want, networkInterface: string, config: InterfaceConfig): void;
}

export default networkManager;
