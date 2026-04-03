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
 * @kit NetworkKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import connection from './@ohos.net.connection';
import Context from './application/Context';

/**
 * Provides interfaces to discover DNS based services on a local network over Multicast DNS.
 * @namespace mdns
 * @syscap SystemCapability.Communication.NetManager.MDNS
 * @since 10
 */
/**
 * Provides interfaces to discover DNS based services on a local network over Multicast DNS.
 * @namespace mdns
 * @syscap SystemCapability.Communication.NetManager.MDNS
 * @atomicservice
 * @since 11 dynamic
 */
declare namespace mdns {
  /**
   * Get a network address.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Get a network address.
   * @typedef { connection.NetAddress }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 12 dynamic
   */
  type NetAddress = connection.NetAddress;

  /**
   * Adds an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of addLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Adds an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of addLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function addLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * Adds an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Adds an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function addLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * Removes an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of removeLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Removes an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of removeLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function removeLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * Removes an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Removes an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204002 - Callback not found.
   * @throws { BusinessError } 2204008 - Failed to delete the service instance.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function removeLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * Create an mDNS based discovery service with context and serviceType.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } serviceType - The service type being discovered.
   * @returns { DiscoveryService } the DiscoveryService of the createDiscoveryService.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Create an mDNS based discovery service with context and serviceType.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } serviceType - The service type being discovered.
   * @returns { DiscoveryService } the DiscoveryService of the createDiscoveryService.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function createDiscoveryService(context: Context, serviceType: string): DiscoveryService;

  /**
   * Resolves an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of resolveLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Resolves an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of resolveLocalService.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void;

  /**
   * Resolves an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Resolves an mDNS service.
   * @param { Context } context - Indicates the context of application or capability.
   * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
   * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2204003 - Callback duplicated.
   * @throws { BusinessError } 2204006 - Request timeout.
   * @throws { BusinessError } 2204010 - Failed to send the message.
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;

  /**
   * Defines a DiscoveryService object for discovering mDNS services of the specified type.
   * @interface DiscoveryService
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Defines a DiscoveryService object for discovering mDNS services of the specified type.
   * @interface DiscoveryService
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export interface DiscoveryService {
    /**
     * Enables listening for discoveryStart events of mDNS services.
     * @param { 'discoveryStart' } type - Indicates Event name.
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Enables listening for discoveryStart events of mDNS services.
     * @param { 'discoveryStart' } type - Indicates Event name.
     * @param { Callback<DiscoveryEventInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void;

    /**
     * Cancels listening for discoveryStart events of mDNS services.
     * @param { 'discoveryStart' } type - Indicates Event name.
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Cancels listening for discoveryStart events of mDNS services.
     * @param { 'discoveryStart' } type - Indicates Event name.
     * @param { Callback<DiscoveryEventInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void;

    /**
     * Enables listening for discoveryStop events of mDNS services.
     * @param { 'discoveryStop' } type - Indicates Event name.
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Enables listening for discoveryStop events of mDNS services.
     * @param { 'discoveryStop' } type - Indicates Event name.
     * @param { Callback<DiscoveryEventInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void;

    /**
     * Cancels listening for discoveryStop events of mDNS services.
     * @param { 'discoveryStop' } type - Indicates Event name.
     * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Cancels listening for discoveryStop events of mDNS services.
     * @param { 'discoveryStop' } type - Indicates Event name.
     * @param { Callback<DiscoveryEventInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void;

    /**
     * Enables listening for serviceFound events of mDNS services.
     * @param { 'serviceFound' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Enables listening for serviceFound events of mDNS services.
     * @param { 'serviceFound' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void;

    /**
     * Cancels listening for serviceFound events of mDNS services.
     * @param { 'serviceFound' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Cancels listening for serviceFound events of mDNS services.
     * @param { 'serviceFound' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void;

    /**
     * Enables listening for serviceLost events of mDNS services.
     * @param { 'serviceLost' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Enables listening for serviceLost events of mDNS services.
     * @param { 'serviceLost' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void;

    /**
     * Cancels listening for serviceLost events of mDNS services.
     * @param { 'serviceLost' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10 dynamic
     */
    /**
     * Cancels listening for serviceLost events of mDNS services.
     * @param { 'serviceLost' } type - Indicates Event name.
     * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void;

    /**
     * Starts searching for mDNS services on the LAN.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Starts searching for mDNS services on the LAN.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    startSearchingMDNS(): void;

    /**
     * Stops searching for mDNS services on the LAN.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Stops searching for mDNS services on the LAN.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    stopSearchingMDNS(): void;
  }

  /**
   * Defines the mDNS service information.
   * @interface LocalServiceInfo
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Defines the mDNS service information.
   * @interface LocalServiceInfo
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export interface LocalServiceInfo {
    /**
     * Service type. Use an underscore (_) as the prefix, for example, _http._tcp.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Service type. Use an underscore (_) as the prefix, for example, _http._tcp.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    serviceType: string;
    /**
     * Service name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Service name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    serviceName: string;
    /**
     * Port number.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Port number.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    port?: number;
    /**
     * IP address of the host.
     * @type {?NetAddress}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * IP address of the host.
     * @type {?NetAddress}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    host?: NetAddress;
    /**
     * DNS-SD TXT record pairs.
     * @type {?Array<ServiceAttribute>}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * DNS-SD TXT record pairs.
     * @type {?Array<ServiceAttribute>}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    serviceAttribute?: Array<ServiceAttribute>;
  }

  /**
   * Defines the mDNS service attribute information.
   * @interface ServiceAttribute
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Defines the mDNS service attribute information.
   * @interface ServiceAttribute
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export interface ServiceAttribute {
    /**
     * TXT record key.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * TXT record key.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    key: string;

    /**
     * TXT record value.
     * @type {Array<number>}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * TXT record value.
     * @type {Array<number>}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    value: Array<number>;
  }

  /**
   * Defines the discovery events information of mDNS services.
   * @interface DiscoveryEventInfo
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export interface DiscoveryEventInfo {
    /**
     * Information about the mDNS service.
     * @type {LocalServiceInfo}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    serviceInfo: LocalServiceInfo;

    /**
     * The mDNS error information.
     * @type {?MdnsError}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    errorCode?: MdnsError;
  }

  /**
   * Defines the mDNS error information.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @since 10
   */
  /**
   * Defines the mDNS error information.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.MDNS
   * @atomicservice
   * @since 11 dynamic
   */
  export enum MdnsError {
    /**
     * Indicates that the operation failed due to internal error.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Indicates that the operation failed due to internal error.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    INTERNAL_ERROR = 0,

    /**
     * Indicates that the operation failed because it is already active.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * Indicates that the operation failed because it is already active.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    ALREADY_ACTIVE = 1,

    /**
     * <p>Indicates that the operation failed because the maximum outstanding
     * requests from the applications have reached.</p>
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    /**
     * <p>Indicates that the operation failed because the maximum outstanding
     * requests from the applications have reached.</p>
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @atomicservice
     * @since 11 dynamic
     */
    MAX_LIMIT = 2
  }
}

/**
 * @since 10 dynamic
 */
export default mdns;
