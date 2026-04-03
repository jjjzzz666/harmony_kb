/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import type _AbilityContext from './application/UIAbilityContext';

/**
 * Provides VPN related interfaces.
 * @namespace vpn
 * @syscap SystemCapability.Communication.NetManager.Vpn
 * @since 10 dynamic
 */
declare namespace vpn {
  /**
   * Get network link information.
   * @typedef { connection.LinkAddress }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type LinkAddress = connection.LinkAddress;

  /**
   * Get network route information.
   * @typedef { connection.RouteInfo }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  export type RouteInfo = connection.RouteInfo;

  /**
   * The context of an ability. It allows access to ability-specific resources.
   * @typedef _AbilityContext
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10 dynamic
   */
  export type AbilityContext = _AbilityContext;

  /**
   * Create a VPN connection using the AbilityContext.
   * @param { AbilityContext } context - Indicates the context of application or capability.
   * @returns { VpnConnection } the VpnConnection of the construct VpnConnection instance.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function createVpnConnection(context: AbilityContext): VpnConnection;
 
  /**
   * Subscribes to vpn connect state changes.
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - Indicates vpn connect state changes.
   * @param { Callback<VpnConnectState> } callback - The callback of the vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function on(type: 'connect', callback: Callback<VpnConnectState>): void;

  /**
   * Subscribes to vpn connect state changes.
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - Indicates multi vpn connect state changes.
   * @param { Callback<MultiVpnConnectState> } callback - The callback of the multi vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function on(type: 'connectMulti', callback: Callback<MultiVpnConnectState>): void;

  /**
   * Unsubscribes from vpn connect state changes.
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connect' } type - Indicates vpn connect state changes.
   * @param { Callback<VpnConnectState> } callback - The callback of the vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function off(type: 'connect', callback?: Callback<VpnConnectState>): void;

  /**
   * Unsubscribes from vpn connect state changes.
   * @permission ohos.permission.MANAGE_VPN
   * @param { 'connectMulti' } type - Indicates multi vpn connect state changes.
   * @param { Callback<MultiVpnConnectState> } [callback] - The callback of the multi vpn connect state.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function off(type: 'connectMulti', callback?: Callback<MultiVpnConnectState>): void;

  /**
   * Add a system VPN network configuration.
   * @permission ohos.permission.MANAGE_VPN
   * @param { SysVpnConfig } config - Indicates the {@link SysVpnConfig} configuration of the VPN network.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function addSysVpnConfig(config: SysVpnConfig): Promise<void>;

  /**
   * Delete the configuration of system VPN network by the specified vpnId.
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - Indicates the uuid of the VPN network configuration.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function deleteSysVpnConfig(vpnId: string): Promise<void>;

  /**
   * Get all system VPN network configuration.
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<SysVpnConfig>> } The promise returned by the all VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getSysVpnConfigList(): Promise<Array<SysVpnConfig>>;

  /**
   * Get the configuration of system VPN network by the specified vpnId.
   * @permission ohos.permission.MANAGE_VPN
   * @param { string } vpnId - Indicates the uuid of the VPN network.
   * @returns { Promise<SysVpnConfig> } The promise returned by the VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>;

  /**
   * Get the connected VPN network configuration.
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<SysVpnConfig> } The promise returned by the connected VPN network configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getConnectedSysVpnConfig(): Promise<SysVpnConfig>;

  /**
   * Get the connected VPN App Info.
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<Array<string>> } The promise returned by the connected VPN App Info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19900001 - Invalid parameter value.
   * @throws { BusinessError } 19900002 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function getConnectedVpnAppInfo(): Promise<Array<string>>;

  /**
   * Defines a VPN connection.
   * @interface VpnConnection
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConnection {
    /**
     * Create a VPN network using the VpnConfig.
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - Indicates the {@link VpnConfig} configuration of the VPN network.
     * @param { AsyncCallback<number> } callback - The callback is used to return file descriptor of VPN interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    setUp(config: VpnConfig, callback: AsyncCallback<number>): void;
 
    /**
     * Create a VPN network using the VpnConfig.
     * @permission ohos.permission.MANAGE_VPN
     * @param { VpnConfig } config - Indicates the {@link VpnConfig} configuration of the VPN network.
     * @returns { Promise<number> } The promise returns file descriptor of VPN interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203001 - VPN creation denied. Check the user type.
     * @throws { BusinessError } 2203002 - VPN already exists.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    setUp(config: VpnConfig): Promise<number>;
 
    /**
     * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
     * underlying network so its traffic will not be forwarded through the VPN.
     * @permission ohos.permission.MANAGE_VPN
     * @param { number } socketFd - File descriptor of socket, this socket from @ohos.net.socket.
     * @param { AsyncCallback<void> } callback - The callback of protect.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    protect(socketFd: number, callback: AsyncCallback<void>): void;
 
    /**
     * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
     * underlying network so its traffic will not be forwarded through the VPN.
     * @permission ohos.permission.MANAGE_VPN
     * @param { number } socketFd - File descriptor of socket, this socket from @ohos.net.socket.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200001 - Invalid parameter value.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    protect(socketFd: number): Promise<void>;
 
    /**
     * Destroy the VPN network.
     * @permission ohos.permission.MANAGE_VPN
     * @param { AsyncCallback<void> } callback - The callback of destroy.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    destroy(callback: AsyncCallback<void>): void;
 
    /**
     * Destroy the VPN network.
     * @permission ohos.permission.MANAGE_VPN
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2200003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    destroy(): Promise<void>;
  }

  /**
   * Define configuration of the VPN network.
   * @typedef VpnConfig
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface VpnConfig {
    /**
     * The uuid for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    vpnId?: string;

    /**
     * The array of addresses for VPN interface.
     * @type {Array<LinkAddress>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    addresses: Array<LinkAddress>;
 
    /**
     * The array of routes for VPN interface.
     * @type {?Array<RouteInfo>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    routes?: Array<RouteInfo>;

    /**
     * The array of DNS servers for the VPN network.
     * @type {?Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    dnsAddresses?: Array<string>;
 
    /**
     * The array of search domains for the DNS resolver.
     * @type {?Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    searchDomains?: Array<string>;
 
    /**
     * The maximum transmission unit (MTU) for the VPN interface.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    mtu?: number;
 
    /**
     * Whether ipv4 is supported. The default value is true.
     * @type {?boolean}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv4Accepted?: boolean;
 
    /**
     * Whether ipv6 is supported. The default value is false.
     * @type {?boolean}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isIPv6Accepted?: boolean;
 
    /**
     * Whether to use the built-in VPN. The default value is false.
     * @type {?boolean}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isLegacy?: boolean;
 
    /**
     * Whether the VPN interface's file descriptor is in blocking/non-blocking mode. The default value is false.
     * @type {?boolean}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isBlocking?: boolean;
 
    /**
     * The array of trustlist for the VPN network. The string indicates package name.
     * @type {?Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    trustedApplications?: Array<string>;
 
    /**
     * The array of blocklist for the VPN network. The string indicates package name.
     * @type {?Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    blockedApplications?: Array<string>;
  }

  /**
   * Define configuration of the system VPN network.
   * @typedef SysVpnConfig
   * @extends VpnConfig
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface SysVpnConfig extends VpnConfig {
    /**
     * The uuid for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnId?: string;

    /**
     * The name for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnName?: string;

    /**
     * The type for the VPN network.
     * @type {?SysVpnType}
     * See {@link SysVpnType}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    vpnType?: SysVpnType;

    /**
     * The user name for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userName?: string;

    /**
     * The user password for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    password?: string;

    /**
     * Whether the VPN network save login name and password. The default value is false.
     * @type {?boolean}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    saveLogin?: boolean;

    /**
     * The system user id for the VPN network.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    userId?: number;

    /**
     * The forwarding routes for the VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    forwardingRoutes?: string;

    /**
     * The array of addresses for remote server.
     * @type {?Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    remoteAddresses?: Array<string>;

    /**
     * The p12 cert password for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12Password?: string;

    /**
     * The p12 cert data for the ipsec VPN network.
     * @type {?Uint8Array}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    pkcs12FileData?: Uint8Array;
  }

  /**
   * Define configuration of the open VPN network.
   * @typedef OpenVpnConfig
   * @extends SysVpnConfig
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface OpenVpnConfig extends SysVpnConfig {
    /**
     * The port for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPort?: string;

    /**
     * The protocol for the openvpn VPN network.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnProtocol?: number;

    /**
     * The config for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfig?: string;

    /**
     * The auth type for the openvpn VPN network.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnAuthType?: number;

    /**
     * The ask pass for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    askpass?: string;

    /**
     * The config file path for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnConfigFilePath?: string;

    /**
     * The ca cert file path for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnCaCertFilePath?: string;

    /**
     * The user cert file path for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnUserCertFilePath?: string;

    /**
     * The private key file path for the openvpn VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ovpnPrivateKeyFilePath?: string;
  }

  /**
   * Define configuration of the ipsec VPN network.
   * @typedef IpsecVpnConfig
   * @extends SysVpnConfig
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface IpsecVpnConfig extends SysVpnConfig {
    /**
     * The pre share key for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     * The identifier for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     * The swanctl config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    swanctlConfig?: string;

    /**
     * The strongSwan config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     * The ca cert config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     * The private user cert config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * The public user cert config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * The private server cert config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * The public server cert config for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * The ca cert file path for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     * The private user cert file path for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * The public user cert file path for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * The private server cert file path for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * The public server cert file path for the ipsec VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;
  }

  /**
   * Define configuration of the l2tp VPN network.
   * @typedef L2tpVpnConfig
   * @extends SysVpnConfig
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface L2tpVpnConfig extends SysVpnConfig {
    /**
     * The pre share key for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPreSharedKey?: string;

    /**
     * The identifier for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecIdentifier?: string;

    /**
     * The strongSwan config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    strongSwanConfig?: string;

    /**
     * The ca cert config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertConfig?: string;

    /**
     * The private user cert config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertConfig?: string;

    /**
     * The public user cert config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertConfig?: string;

    /**
     * The private server cert config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertConfig?: string;

    /**
     * The public server cert config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertConfig?: string;

    /**
     * The ca cert file path for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecCaCertFilePath?: string;

    /**
     * The private user cert file path for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateUserCertFilePath?: string;

    /**
     * The public user cert file path for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicUserCertFilePath?: string;

    /**
     * The private server cert file path for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPrivateServerCertFilePath?: string;

    /**
     * The public server cert file path for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecPublicServerCertFilePath?: string;

    /**
     * The config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecConfig?: string;

    /**
     * The secrets for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    ipsecSecrets?: string;

    /**
     * The client options for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    optionsL2tpdClient?: string;

    /**
     * The xl2tpd config for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    xl2tpdConfig?: string;

    /**
     * The shared key for the l2tp VPN network.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    l2tpSharedKey?: string;
  }

  /**
   * Defines the type for the VPN network.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export enum SysVpnType {
    /**
     * The type for the IKEv2/IPsec MSCHAPv2 VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_MSCHAPV2 = 1,

    /**
     * The type for the IKEv2/IPsec PSK VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_PSK = 2,

    /**
     * The type for the IKEv2/IPsec RSA VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IKEV2_IPSEC_RSA = 3,

    /**
     * The type for the L2TP/IPsec PSK VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_PSK = 4,

    /**
     * The type for the L2TP/IPsec RSA VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    L2TP_IPSEC_RSA = 5,

    /**
     * The type for the IPsec XAUTH PSK VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_PSK = 6,

    /**
     * The type for the IPsec XAUTH RSA VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_XAUTH_RSA = 7,

    /**
     * The type for the IPsec HYBRID RSA VPN network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    IPSEC_HYBRID_RSA = 8,

    /**
     * The type for the OpenVpn network.
     * @syscap SystemCapability.Communication.NetManager.Vpn
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    OPENVPN = 9
  }
}
export default vpn;
 
