/*
 * Copyright (C) 2022-2026 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import type http from './@ohos.net.http';
import type socket from './@ohos.net.socket';
/*** endif */

/**
 * Provides interfaces to manage and use data networks.
 * @namespace connection
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 8
 */
/**
 * Provides interfaces to manage and use data networks.
 * @namespace connection
 * @syscap SystemCapability.Communication.NetManager.Core
 * @crossplatform
 * @since 10
 */
/**
 * Provides interfaces to manage and use data networks.
 * @namespace connection
 * @syscap SystemCapability.Communication.NetManager.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace connection {
  /**
   * Get an HTTP request task.
   * @syscap SystemCapability.Communication.NetStack
   * @since 8
   */
  /**
   * Get an HTTP request task.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * Get an HTTP request task.
   * @typedef { http.HttpRequest }
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  type HttpRequest = http.HttpRequest;

  /**
   * Get a TCPSocket object.
   * @syscap SystemCapability.Communication.NetStack
   * @since 8
   */
  /**
   * Get a TCPSocket object.
   * @typedef { socket.TCPSocket }
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10 dynamic
   */
  type TCPSocket = socket.TCPSocket;

  /**
   * Get a UDPSocket object.
   * @syscap SystemCapability.Communication.NetStack
   * @since 8
   */
  /**
   * Get a UDPSocket object.
   * @typedef { socket.UDPSocket }
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10 dynamic
   */
  type UDPSocket = socket.UDPSocket;

  /**
   * Create a network connection with optional netSpecifier and timeout.
   * @param { NetSpecifier } [netSpecifier] - Indicates the network specifier. See {@link NetSpecifier}.
   * @param { int } [timeout] - The time in milliseconds to attempt looking for a suitable network before
   * {@link NetConnection#netUnavailable} is called.
   * @returns { NetConnection } the NetConnection of the NetSpecifier.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Create a network connection with optional netSpecifier and timeout.
   * @param { NetSpecifier } [netSpecifier] - Indicates the network specifier. See {@link NetSpecifier}.
   * @param { int } [timeout] - The time in milliseconds to attempt looking for a suitable network before
   * {@link NetConnection#netUnavailable} is called.
   * @returns { NetConnection } the NetConnection of the NetSpecifier.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Create a network connection with optional netSpecifier and timeout.
   * @param { NetSpecifier } [netSpecifier] - Indicates the network specifier. See {@link NetSpecifier}.
   * @param { int } [timeout] - The time in milliseconds to attempt looking for a suitable network before
   * {@link NetConnection#netUnavailable} is called.
   * @returns { NetConnection } the NetConnection of the NetSpecifier.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<NetHandle> } callback - the callback of getDefaultNet.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<NetHandle> } callback - the callback of getDefaultNet.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<NetHandle> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<NetHandle> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultNet(): Promise<NetHandle>;

  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { NetHandle } if the default network is not activated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9
   */
  /**
   * Obtains the data network that is activated by default.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { NetHandle } if the default network is not activated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultNetSync(): NetHandle;

  /**
   * Obtains the list of data networks that are activated.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<Array<NetHandle>> } callback - the callback of getAllNets.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void;

  /**
   * Obtains the list of data networks that are activated.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<NetHandle>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * Obtains the list of data networks that are activated.
   * To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Array<NetHandle> } Returns data networks that are activated.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllNetsSync(): Array<NetHandle>;

  /**
   * Queries the connection properties of a network.
   * This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the network to be queried.
   * @param { AsyncCallback<ConnectionProperties> } callback - the callback of getConnectionProperties.{@link ConnectionProperties}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getConnectionProperties(netHandle: NetHandle, callback: AsyncCallback<ConnectionProperties>): void;

  /**
   * Queries the connection properties of a network.
   * This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the network to be queried.
   * @returns { Promise<ConnectionProperties> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  function getConnectionProperties(netHandle: NetHandle): Promise<ConnectionProperties>;

  /**
   * Queries the connection properties of a network.
   * This method requires the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the network to be queried.
   * @returns { ConnectionProperties } Returns the connection properties of a network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getConnectionPropertiesSync(netHandle: NetHandle): ConnectionProperties;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @param { AsyncCallback<NetCapabilities> } callback - the callback of getNetCapabilities.{@link NetCapabilities}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @param { AsyncCallback<NetCapabilities> } callback - the callback of getNetCapabilities.{@link NetCapabilities}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @returns { Promise<NetCapabilities> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @returns { Promise<NetCapabilities> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @returns { NetCapabilities } Returns the connection capabilities of a network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the handle. See {@link NetHandle}.
   * @returns { NetCapabilities } Returns the connection capabilities of a network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getNetCapabilitiesSync(netHandle: NetHandle): NetCapabilities;

  /**
   * Set the network extended attribute for a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission.
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - Indicates the network to be set. See {@link NetHandle}.
   * @param { string } netExtAttribute - Indicates the extended attribute of the network.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setNetExtAttribute(netHandle: NetHandle, netExtAttribute: string): Promise<void>;
 
  /**
   * Set the network extended attribute for a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission.
   * @permission ohos.permission.SET_NET_EXT_ATTRIBUTE
   * @param { NetHandle } netHandle - Indicates the network to be set. See {@link NetHandle}.
   * @param { string } netExtAttribute - Indicates the extended attribute of the network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setNetExtAttributeSync(netHandle: NetHandle, netExtAttribute: string): void;
     
  /**
   * Get the network extended attribute for a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the network to be queried. See {@link NetHandle}.
   * @returns { Promise<string> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getNetExtAttribute(netHandle: NetHandle): Promise<string>;
     
  /**
   * Get the network extended attribute for a {@link NetHandle} object.
   * To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { NetHandle } netHandle - Indicates the network to be queried. See {@link NetHandle}.
   * @returns { string } The netExtAttribute string returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getNetExtAttributeSync(netHandle: NetHandle): string;
    
  /**
   * Checks whether data traffic usage on the current network is metered.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Returns {@code true} if data traffic usage on the current network is metered;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function isDefaultNetMetered(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether data traffic usage on the current network is metered.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function isDefaultNetMetered(): Promise<boolean>;

  /**
   * Checks whether data traffic usage on the current network is metered.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } Returns true if the current network is metered, else returns false.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  function isDefaultNetMeteredSync(): boolean;

  /**
   * Checks whether the default data network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Returns {@code true} if the default data network is activated;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Checks whether the default data network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Returns {@code true} if the default data network is activated;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function hasDefaultNet(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the default data network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Checks whether the default data network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function hasDefaultNet(): Promise<boolean>;

  /**
   * Checks whether the default data network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } Returns true if the default data network is activated, else returns false.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function hasDefaultNetSync(): boolean;

  /**
   * Enables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - the callback of enableAirplaneMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error. 
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Enables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableAirplaneMode(): Promise<void>;

  /**
   * Disables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { AsyncCallback<void> } callback - the callback of disableAirplaneMode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableAirplaneMode(callback: AsyncCallback<void>): void;

  /**
   * Disables the airplane mode for a device.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableAirplaneMode(): Promise<void>;

  /**
   * Reports the network state is connected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the network whose state is to be reported.
   * @param { AsyncCallback<void> } callback - the callback of reportNetConnected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is connected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the network whose state is to be reported.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * Reports the network state is disconnected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the network whose state is to be reported.
   * @param { AsyncCallback<void> } callback - the callback of reportNetDisconnected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Reports the network state is disconnected.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the network whose state is to be reported.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { AsyncCallback<Array<NetAddress>> } callback - Returns the NetAddress list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   */
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;
 
/**
   * Resolves a host name to obtain all IP addresses with specified query option.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { QueryOptions } [option] - Indicates the query option.
   * @returns { Promise<Array<NetAddress>> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   * @param { AsyncCallback<NetHandle> } callback - Returns the {@link NetHandle} bound to the process;
   * returns {@code null} if no {@link NetHandle} is bound to the process.For details, see {@link NetHandle}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function getAppNet(callback: AsyncCallback<NetHandle>): void;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   * @returns { Promise<NetHandle> } the promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function getAppNet(): Promise<NetHandle>;

  /**
   * Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.
   * @returns { NetHandle } Returns the {@link NetHandle} bound to a process using {@link setAppNet}.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  function getAppNetSync(): NetHandle;

  /**
   * Binds a process to {@code NetHandle}.
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.</p>
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the handle. For details, see {@link NetHandle}.
   * @param { AsyncCallback<void> } callback - the callback of setAppNet.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function setAppNet(netHandle: NetHandle, callback: AsyncCallback<void>): void;

  /**
   * Binds a process to {@code NetHandle}.
   * <p>All the sockets created from the process will be bound to the {@code NetHandle},
   * and the resolution of all host names will be managed by the {@code NetHandle}.</p>
   * @permission ohos.permission.INTERNET
   * @param { NetHandle } netHandle - Indicates the handle. For details, see {@link NetHandle}.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 9 dynamic
   */
  function setAppNet(netHandle: NetHandle): Promise<void>;

  /**
   * Set a specific interface up.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifaceName - the name of the interface to set up.
   *     <br>Value range:(0,1024]
   *     <br>Name of the actual network adapter to be started
   *     If the network adapter exists, try to up the network adapter.
   *     If the network adapter does not exist or does not meet the up condition, the network adapter fails to be up.
   *     The network adapter exists in the kernel, and the network adapter meets the up condition.
   *     None
   *     None
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use. Only used for system app.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setInterfaceUp(ifaceName: string): Promise<void>;

  /**
   * Obtains the default {@link HttpProxy} proxy settings.
   *
   * If an application level proxy is set, the application level proxy parameters are returned.
   * If a global proxy is set, the global proxy parameters are returned.
   * If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.
   * In other cases, the proxy settings of default network are returned.
   *
   * @param { AsyncCallback<HttpProxy> } callback - Returns the default {@link HttpProxy} settings.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * Obtains the default {@link HttpProxy} proxy settings.
   *
   * If an application level proxy is set, the application level proxy parameters are returned.
   * If a global proxy is set, the global proxy parameters are returned.
   * If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.
   * In other cases, the proxy settings of default network are returned.
   *
   * @returns { Promise<HttpProxy> } the promise returned by the function.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultHttpProxy(): Promise<HttpProxy>;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   * @param { AsyncCallback<HttpProxy> } callback - Returns the proxy settings. For details, see {@link HttpProxy}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void;

  /**
   * Obtains the network independent global {@link HttpProxy} proxy settings.
   * @returns { Promise<HttpProxy> } the promise returned by the function.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getGlobalHttpProxy(): Promise<HttpProxy>;

  /**
   * Set application level http proxy {@link HttpProxy}.
   * @param { HttpProxy } httpProxy - Indicates the application level proxy settings. For details, see {@link HttpProxy}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid http proxy.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function setAppHttpProxy(httpProxy: HttpProxy): void;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @param { AsyncCallback<void> } callback - the callback of setGlobalHttpProxy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Set a network independent global {@link HttpProxy} proxy settings.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { HttpProxy } httpProxy - Indicates the global proxy settings. For details, see {@link HttpProxy}.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGlobalHttpProxy(httpProxy: HttpProxy): Promise<void>;

  /**
   * Set the URL {@link pacUrl} of the current PAC script.
   * To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacUrl - Indicates the URL of the current PAC script.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   */
  function setPacUrl(pacUrl: string): void;

  /**
   * Obtain the URL {@link pacUrl} of the current PAC script.
   * @returns { string } Returns the URL of the current PAC script or empty string if there is no PAC script.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 15 dynamic
   */
  function getPacUrl(): string;

  /**
   * Set the URL {@link pacFileUrl} of the current PAC script.
   * Proxy information can be obtained through parsing the script address.
   * To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.
   * @permission ohos.permission.SET_PAC_URL
   * @param { string } pacFileUrl - Indicates the URL of the current PAC script.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function setPacFileUrl(pacFileUrl: string): void;

  /**
   * Obtain the URL {@link pacFileUrl} of the current PAC script.
   * @returns { string } Returns the URL of the current PAC script or empty string if there is no PAC script.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function getPacFileUrl(): string;

  /**
   * Find pac proxy info for the url.
   * @param { string } url - the url.
   * @returns { string } Returns the proxy infomation.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 20 dynamic
   */
  function findProxyForUrl(url: string): string;

  /**
   * Set the proxy mode {@link ProxyMode}.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { ProxyMode } mode - Indicates the proxy mode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  function setProxyMode(mode: ProxyMode): Promise<void>;

  /**
   * Obtain the proxy mode {@link ProxyMode}.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<ProxyMode> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  function getProxyMode(): Promise<ProxyMode>;

  /**
   * Add a custom {@link host} and corresponding {@link ip} mapping for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @param { AsyncCallback<void> } callback - Returns the callback of addCustomDnsRule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  /**
   * Add a custom {@link host} and corresponding {@link ip} mapping for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @param { AsyncCallback<void> } callback - Returns the callback of addCustomDnsRule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 15 dynamic
   */
  function addCustomDnsRule(host: string, ip: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add a custom {@link host} and corresponding {@link ip} mapping for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  /**
   * Add a custom {@link host} and corresponding {@link ip} mapping for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { Array<string> } ip - List of IP addresses mapped to the host name.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 15 dynamic
   */
  function addCustomDnsRule(host: string, ip: Array<string>): Promise<void>;

  /**
   * Remove the custom DNS rule of the {@link host} for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { AsyncCallback<void> } callback - Returns the callback of removeCustomDnsRule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  /**
   * Remove the custom DNS rule of the {@link host} for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @param { AsyncCallback<void> } callback - Returns the callback of removeCustomDnsRule.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 15 dynamic
   */
  function removeCustomDnsRule(host: string, callback: AsyncCallback<void>): void;

  /**
   * Remove the custom DNS rule of the {@link host} for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11
   */
  /**
   * Remove the custom DNS rule of the {@link host} for current application.
   * @permission ohos.permission.INTERNET
   * @param { string } host - Indicates the host name or the domain.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 15 dynamic
   */
  function removeCustomDnsRule(host: string): Promise<void>;

  /**
   * Clear all custom DNS rules for current application.
   * @permission ohos.permission.INTERNET
   * @param { AsyncCallback<void> } callback - Returns the callback of clearCustomDnsRules.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  function clearCustomDnsRules(callback: AsyncCallback<void>): void;

  /**
   * Clear all custom DNS rules for current application.
   * @permission ohos.permission.INTERNET
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   */
  function clearCustomDnsRules(): Promise<void>;

  /**
   * factory reset network settings
   *
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): Promise<void>;

  /**
   * Obtains the data network that is activated by default.
   * You can only call this method in VPN application.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - Protocol type.
   * @param { NetAddress } local - Local net address.
   * @param { NetAddress } remote - Remote net address.
   * @returns { Promise<int> } The owner uid of the specified connection.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  function getConnectOwnerUid(protocol: ProtocolType, local: NetAddress, remote: NetAddress): Promise<int>;

  /**
   * Obtains the data network that is activated by default.
   * You can only call this method in VPN application.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ProtocolType } protocol - Protocol type.
   * @param { NetAddress } local - Local net address.
   * @param { NetAddress } remote - Remote net address.
   * @returns { int } The owner uid of the specified connection.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100301 - Incorrect usage in non-VPN application.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int;

  /**
   * Obtain the IP and MAC address correspondence table of the neighboring network.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<Array<NetIpMacInfo>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   * @since 24 static
   */
  function getIpNeighTable(): Promise<Array<NetIpMacInfo>>;

  /**
   * Convert a string from Unicode to ASCII Compatible Encoding (ACE), as defined by the ToASCII operation of RFC 3490.
   *
   * @param { string } host - Indicates the domain name of the Unicode type.
   * @param { ConversionProcess } [flag] - Indicates process flag, can be 0 or any logical OR of possible flags.
   *  can be ALLOW_UNASSIGNED | USE_STD3_ASCII_RULES to set all flag.
   * @returns { string } - Return the converted string.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  function getDnsAscii(host: string, flag?: ConversionProcess): string;

  /**
   * Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490.
   *
   * @param { string } host - Indicates the domain name of the ASCII type.
   * @param { ConversionProcess } [flag] - Indicates process flag, can be 0 or any logical OR of possible flags.
   *  can be ALLOW_UNASSIGNED | USE_STD3_ASCII_RULES to set all flag.
   * @returns { string } - Return the converted string.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  function getDnsUnicode(host: string, flag?: ConversionProcess): string;

  /**
 	 * Obtains the port states of system network.
   * To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission.
   *
   * @permission ohos.permission.GET_IP_MAC_INFO
   * @returns { Promise<NetPortStatesInfo> } Returns the port status of system network.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getSystemNetPortStates(): Promise<NetPortStatesInfo>;
 
  /**
   * Defines port states of system network.
   *
   * @interface NetPortStatesInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export interface NetPortStatesInfo {  
    /**
     * Port information of the TCP network.
     *
     * @type { ?Array<TcpNetPortStatesInfo> }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpPortStatesInfo?: Array<TcpNetPortStatesInfo>;

    /**
     * Port information of the UDP network.
     *
     * @type { ?Array<UdpNetPortStatesInfo> }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udpPortStatesInfo?: Array<UdpNetPortStatesInfo>;
  }

  /**
   * Defines TCP port states of system network.
   *
   * @interface TcpNetPortStatesInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export interface TcpNetPortStatesInfo {  
    /**
     * Local IP of the TCP network.
     *
     * @type { string }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpLocalIp: string;
    /**
     * Local port of the TCP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpLocalPort: int;
    /**
     * Remote IP of the TCP network.
     *
     * @type { string }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpRemoteIp: string;
    /**
     * Remote port of the TCP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpRemotePort: int;
    /**
     * UID of the TCP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpUid: int;
    /**
     * PID of the TCP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpPid: int;
    /**
     * Port state of the TCP network.
     *
     * @type { TcpState }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    tcpState: TcpState;
  }

  /**
   * Defines UDP port states of system network.
   *
   * @interface UdpNetPortStatesInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export interface UdpNetPortStatesInfo {  
    /**
     * Local IP of the UDP network.
     *
     * @type { string }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udpLocalIp: string;
    /**
     * Local port of the UDP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udpLocalPort: int;
    /**
     * UID of the UDP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udpUid: int;
    /**
     * PID of the UDP network.
     *
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    udpPid: int;
  }

  /**
   * State of the TCP network port.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export enum TcpState {  
    /**
     * The TCP connection is in the ESTABLISHED state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_ESTABLISHED = 1,
    /**
     * The TCP connection is in the SYN_SENT state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_SYN_SENT = 2,
    /**
     * The TCP connection is in the SYN_RECV state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_SYN_RECV = 3,
    /**
     * The TCP connection is in the FIN_WAIT1 state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_FIN_WAIT1 = 4,
    /**
     * The TCP connection is in the FIN_WAIT2 state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_FIN_WAIT2 = 5,
    /**
     * The TCP connection is in the TIME_WAIT state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_TIME_WAIT = 6,
    /**
     * The TCP connection is in the CLOSE state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_CLOSE = 7,
    /**
     * The TCP connection is in the CLOSE_WAIT state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_CLOSE_WAIT = 8,
    /**
     * The TCP connection is in the LAST_ACK state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_LAST_ACK = 9,
    /**
     * The TCP connection is in the LISTEN state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_LISTEN = 10,
    /**
     * The TCP connection is in the CLOSING state.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TCP_CLOSING = 11
  }

  /**
   * Create vlan interface by vlanId.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - interface name.
   * @param { int } vlanId - vlan id.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface card name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function createVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * Destroy vlan interface by vlanId.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - interface name.
   * @param { int } vlanId - vlan id.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface card name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function destroyVlanInterface(ifName: string, vlanId: int): Promise<void>;

  /**
   * Add ip of vlan interface by vlanId.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - interface name.
   * @param { int } vlanId - vlan id.
   * @param { LinkAddress } address - vlan ip address.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface card name is incorrect.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function addVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * Delete ip of vlan interface by vlanId.
   * To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } ifName - interface name.
   * @param { int } vlanId - vlan id.
   * @param { LinkAddress } address - vlan ip address.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 2100400 - The input network interface card name is incorrect.
   * @throws { BusinessError } 2100401 - The input IP address is not found.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function deleteVlanIp(ifName: string, vlanId: int, address: LinkAddress): Promise<void>;

  /**
   * Query a network trace route.
   *
   * @permission ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and
   *     ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { string } destination - the destination domain or address.
   * @param { TraceRouteOptions } [option] - the trace route option.
   * @returns { Promise<TraceRouteInfo[]> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>;

  /**
   * Query a network probe result.
   *
   * @permission ohos.permission.INTERNET
   * @param { string } destination - the distination domain or address.
   * @param { int } duration - probe duration. Unit: second.
   * @returns { Promise<ProbeResultInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function queryProbeResult(destination: string, duration: int): Promise<ProbeResultInfo>;
  
  /**
   * Represents the network connection handle.
   * @interface NetConnection
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Represents the network connection handle.
   * @interface NetConnection
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Represents the network connection handle.
   * @interface NetConnection
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetConnection {
    /**
     * Registers a listener for netAvailable events.
     * @param { 'netAvailable' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for netAvailable events.
     * @param { 'netAvailable' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Registers a listener for netAvailable events.
     * @param { 'netAvailable' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     * @param { 'netBlockStatusChange' } type - Indicates Event name.
     * @param { Callback<{ netHandle: NetHandle, blocked: boolean }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for netBlockStatusChange events.
     * @param { 'netBlockStatusChange' } type - Indicates Event name.
     * @param { Callback<NetBlockStatusInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     */
    on(type: 'netBlockStatusChange', callback: Callback<NetBlockStatusInfo>): void;

    /**
     * Registers a listener for netBlockStatusChange events.
     * @param { Callback<NetBlockStatusInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    onNetBlockStatusChange(callback: Callback<NetBlockStatusInfo>): void;

    /**
     * Registers a listener for **netCapabilitiesChange** events.
     * @param { 'netCapabilitiesChange' } type - Indicates Event name.
     * @param { Callback<NetCapabilityInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for **netCapabilitiesChange** events.
     * @param { 'netCapabilitiesChange' } type - Indicates Event name.
     * @param { Callback<NetCapabilityInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Registers a listener for **netCapabilitiesChange** events.
     * @param { 'netCapabilitiesChange' } type - Indicates Event name.
     * @param { Callback<NetCapabilityInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'netCapabilitiesChange', callback: Callback<NetCapabilityInfo>): void;

    /**
     * Registers a listener for netConnectionPropertiesChange events.
     * @param { 'netConnectionPropertiesChange' } type - Indicates Event name.
     * @param { Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for netConnectionPropertiesChange events.
     * @param { 'netConnectionPropertiesChange' } type - Indicates Event name.
     * @param { Callback<NetConnectionPropertyInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     */
    on(type: 'netConnectionPropertiesChange', callback: Callback<NetConnectionPropertyInfo>): void;

    /**
     * Registers a listener for **netLost** events.
     * @param { 'netLost' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for **netLost** events.
     * @param { 'netLost' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Registers a listener for **netLost** events.
     * @param { 'netLost' } type - Indicates Event name.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'netLost', callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for **netLost** events.
     * @param { Callback<NetHandle> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetLost(callback: Callback<NetHandle>): void;

    /**
     * Registers a listener for netUnavailable events.
     * @param { 'netUnavailable' } type - Indicates Event name.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    /**
     * Registers a listener for netUnavailable events.
     * @param { 'netUnavailable' } type - Indicates Event name.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Registers a listener for netUnavailable events.
     * @param { 'netUnavailable' } type - Indicates Event name.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Registers a listener for netUnavailable events.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onNetUnavailable(callback: Callback<void>): void;

    /**
     * Receives status change notifications of a specified network.
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { AsyncCallback<void> } callback - the callback of register.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101008 - The callback already exists.
     * @throws { BusinessError } 2101022 - The number of requests exceeded the maximum allowed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Receives status change notifications of a specified network.
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { AsyncCallback<void> } callback - the callback of register.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101008 - The callback already exists.
     * @throws { BusinessError } 2101022 - The number of requests exceeded the maximum allowed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Receives status change notifications of a specified network.
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { AsyncCallback<void> } callback - the callback of register.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101008 - The callback already exists.
     * @throws { BusinessError } 2101022 - The number of requests exceeded the maximum allowed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    register(callback: AsyncCallback<void>): void;

    /**
     * Cancels listening for network status changes.
     * @param { AsyncCallback<void> } callback - the callback of unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101007 - The callback does not exist.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Cancels listening for network status changes.
     * @param { AsyncCallback<void> } callback - the callback of unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101007 - The callback does not exist.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Cancels listening for network status changes.
     * @param { AsyncCallback<void> } callback - the callback of unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101007 - The callback does not exist.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Cancels listening for network status changes.
     * @param { AsyncCallback<void> } callback - the callback of unregister.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2101007 - The callback does not exist.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    unregister(callback: AsyncCallback<void>): void;
  }

  /**
   * Provides an instance that bear data network capabilities.
   * @interface NetSpecifier
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Provides an instance that bear data network capabilities.
   * @interface NetSpecifier
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetSpecifier {
    /**
     * The transmission capacity and support of the network's global proxy storage data network.
     * @type {NetCapabilities}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * The transmission capacity and support of the network's global proxy storage data network.
     * @type {NetCapabilities}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    netCapabilities: NetCapabilities;

    /**
     * Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    bearerPrivateIdentifier?: string;
  }

  /**
   * Defines options of DNS query.
   * @interface QueryOptions
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  export interface QueryOptions {
    /**
     * Specify family type of DNS query.
     * @type {?FamilyType}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    family?: FamilyType;
  }

  /**
   * Defines the address family type.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  export enum FamilyType {
    /**
     * Indicates that no ip type is specified, all address types can be use.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    FAMILY_TYPE_ALL = 0,
    /**
     * Indicates that the family type is ipv4.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    FAMILY_TYPE_IPV4 = 1,
    /**
     * Indicates that the family type is ipv6.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    FAMILY_TYPE_IPV6 = 2,
  }

  /**
   * Receive information about changes in network capabilities.
   * @interface NetCapabilityInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Receive information about changes in network capabilities.
   * @interface NetCapabilityInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetCapabilityInfo {
    /**
     * Defines the handle of the data network.
     * @type { NetHandle }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the handle of the data network.
     * @type { NetHandle }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;

    /**
     * Defines the network capability set.
     * @type { NetCapabilities }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the network capability set.
     * @type { NetCapabilities }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    netCap: NetCapabilities;
  }

  /**
   * Defines the handle of the data network.
   * @interface NetHandle
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Defines the handle of the data network.
   * @interface NetHandle
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the handle of the data network.
   * @interface NetHandle
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetHandle {
    /**
     * Network ID, a value of 0 means that there is no default network, and the other values must be greater than or equal to 100.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Network ID, a value of 0 means that there is no default network, and the other values must be greater than or equal to 100.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Network ID, a value of 0 means that there is no default network, and the other values must be greater than or equal to 100.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * <p>Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.</p>
     * Before using this method, ensure that the socket is disconnected.
     * @param { TCPSocket | UDPSocket } socketParam - Indicates the TCPSocket or UDPSocket object.
     * @param { AsyncCallback<void> } callback - the callback of bindSocket.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;

    /**
     * <p>Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.</p>
     * Before using this method, ensure that the socket is disconnected.
     * @param { TCPSocket | UDPSocket } socketParam - Indicates the TCPSocket or UDPSocket object.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 9 dynamic
     */
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @param { AsyncCallback<Array<NetAddress>> } callback - the callback of getAddressesByName.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @param { AsyncCallback<Array<NetAddress>> } callback - the callback of getAddressesByName.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 15 dynamic
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 15 dynamic
     */
    getAddressesByName(host: string): Promise<Array<NetAddress>>;
    
	/**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle with specified query option.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @param { QueryOptions } [option] - Indicates the query option.
     * @returns { Promise<Array<NetAddress>> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 24 static
     */
    getAddressesByNameWithOptions(host: string, option?: QueryOptions): Promise<Array<NetAddress>>;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @param { AsyncCallback<NetAddress> } callback - the callback of getAddressByName.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     * @permission ohos.permission.INTERNET
     * @param { string } host - Indicates the host name or the domain.
     * @returns { Promise<NetAddress> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100001 - Invalid parameter value.
     * @throws { BusinessError } 2100002 - Failed to connect to the service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    getAddressByName(host: string): Promise<NetAddress>;
  }

  /**
   * Defines the network capability set.
   * @interface NetCapabilities
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Defines the network capability set.
   * @interface NetCapabilities
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the network capability set.
   * @interface NetCapabilities
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetCapabilities {
    /**
     * Uplink (device-to-network) bandwidth.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkUpBandwidthKbps?: int;

    /**
     * Downstream (network-to-device) bandwidth.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkDownBandwidthKbps?: int;

    /**
     * Network-specific capabilities.
     * @type {?Array<NetCap>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Network-specific capabilities.
     * @type {?Array<NetCap>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    networkCap?: Array<NetCap>;

    /**
     * Network type.
     * @type {Array<NetBearType>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Network type.
     * @type {Array<NetBearType>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Network type.
     * @type {Array<NetBearType>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    bearerTypes: Array<NetBearType>;
  }

  /**
   * Get information about network connections.
   * @interface NetConnectionPropertyInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetConnectionPropertyInfo {
    /**
     * Defines the handle of the data network.
     * @type { NetHandle }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * Defines the network connection properties.
     * @type { ConnectionProperties }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    connectionProperties: ConnectionProperties;
  }

  /**
   * Get network status information.
   * @interface NetBlockStatusInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 11 dynamic
   * @since 23 static
   */
  export interface NetBlockStatusInfo {
    /**
     * Defines the handle of the data network.
     * @type { NetHandle }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    netHandle: NetHandle;
    /**
     * Check whether the current state is blocked.
     * @type { boolean }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 11 dynamic
     * @since 23 static
     */
    blocked: boolean;
  }

  /**
   * Defines the network capability.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Defines the network capability.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export enum NetCap {
    /**
     * Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * Indicates that the network traffic is not metered.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network traffic is not metered.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * Indicates that the network can access the Internet.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network can access the Internet.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * Indicates that the network does not use a VPN.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network does not use a VPN.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * Indicates that the network is available.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network is available.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_VALIDATED = 16,
    /**
     * Indicates that the network is portal.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_PORTAL = 17,

    /**
     * Indicates that the network is checking connectivity.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NET_CAPABILITY_CHECKING_CONNECTIVITY = 31
  }

  /**
   * Enumerates network types.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Enumerates network types.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Enumerates network types.
   * @enum {int}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export enum NetBearType {
    /**
     * Indicates that the network is based on a cellular network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network is based on a cellular network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates that the network is based on a cellular network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    BEARER_CELLULAR = 0,

    /**
     * Indicates that the network is based on a Wi-Fi network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network is based on a Wi-Fi network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates that the network is based on a Wi-Fi network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    BEARER_WIFI = 1,

    /**
     * Indicates that the network is based on a bluetooth network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_BLUETOOTH = 2,
 
    /**
     * Indicates that the network is an Ethernet network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Indicates that the network is an Ethernet network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    BEARER_ETHERNET = 3,

    /**
     * Indicates that the network is based on a VPN network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BEARER_VPN = 4,
  }

  /**
   * Enumerates proxy modes.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use. Only used for system app.
   * @since 20 dynamic
   */
  export enum ProxyMode{
    /**
     * Off proxy mode.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     */
    PROXY_MODE_OFF = 0,
  
    /**
     * Auto proxy mode.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use. Only used for system app.
     * @since 20 dynamic
     */
    PROXY_MODE_AUTO = 1
  }

  /**
   * Defines the flag of conversion operations.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  export enum ConversionProcess {
    /**
     * Indicates that no flag are configured.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    NO_CONFIGURATION = 0,
    /**
     * Indicates that the conversion allow unassigned code points.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    ALLOW_UNASSIGNED = 1,
    /**
     * Indicates that the conversion turn on the check against STD-3 ASCII rules.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    USE_STD3_ASCII_RULES = 2,
  }

  /**
   * Defines the network connection properties.
   * @interface ConnectionProperties
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface ConnectionProperties {
    /**
     * Network card name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    interfaceName: string;
    /**
     * Domain. The default value is "".
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    domains: string;
    /**
     * Link information.
     * @type {Array<LinkAddress>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    linkAddresses: Array<LinkAddress>;

    /**
     * Network address, refer to [NetAddress].
     * @type {Array<NetAddress>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    dnses: Array<NetAddress>;

    /**
     * Routing information.
     * @type {Array<RouteInfo>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    routes: Array<RouteInfo>;

    /**
     * Maximum transmission unit.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    mtu: int;

    /**
     * Whether the IPv4 address of the interface is valid.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIPv4LinkValid?: boolean;

    /**
     * Whether the IPv6 address of the interface is valid.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIPv6LinkValid?: boolean;
  }

  /**
   * Defines network route information.
   * @interface RouteInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface RouteInfo {
    /**
     * Network card name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     */
    interface: string;

    /**
     * Network card name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 static
     */
    iface: string;    

    /**
     * Destination Address
     * @type {LinkAddress}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    destination: LinkAddress;

    /**
     * Gateway address.
     * @type {NetAddress}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    gateway: NetAddress;

    /**
     * Whether a gateway is present.
     * @type {boolean}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    hasGateway: boolean;

    /**
     * Whether the route is the default route.
     * @type {boolean}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    isDefaultRoute: boolean;

    /**
     * Whether the route is the excluded route.
     * @type { ?boolean}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 20 dynamic
     */
    isExcludedRoute?: boolean;
  }

  /**
   * Defines network link information.
   * @interface LinkAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8 dynamic
   * @since 23 static
   */
  export interface LinkAddress {
    /**
     * Link address.
     * @type {NetAddress}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    address: NetAddress;
    /**
     * The length of the link address prefix.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8 dynamic
     * @since 23 static
     */
    prefixLength: int;
  }

  /**
   * Defines a network address.
   * @interface NetAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 8
   */
  /**
   * Defines a network address.
   * @interface NetAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Defines a network address.
   * @interface NetAddress
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface NetAddress {
    /**
     * Network address.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Network address.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Network address.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    address: string;

    /**
     * Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    family?: int; 

    /**
     * Port number. The value ranges from 0 to 65535.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 8
     */
    /**
     * Port number. The value ranges from 0 to 65535.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Port number. The value ranges from 0 to 65535.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    port?: int; 
  }

  /**
   * Network Global Proxy Configuration Information.
   * @interface HttpProxy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10
   */
  /**
   * Network Global Proxy Configuration Information.
   * @interface HttpProxy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  /**
   * Network Global Proxy Configuration Information.
   * @interface HttpProxy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface HttpProxy {
    /**
     * Proxy server host name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    /**
     * Proxy server host name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    /**
     * Proxy server host name.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    host: string;

    /**
     * Host port.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    /**
     * Host port.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    /**
     * Host port.
     * @type {int}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    port: int;

    /**
     * Http proxy username.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    username?: string;

    /**
     * Http proxy password.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 12 dynamic
     * @since 23 static
     */
    password?: string;

    /**
     * Do not use a blocking list for proxy servers.
     * @type {Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 10
     */
    /**
     * Do not use a blocking list for proxy servers.
     * @type {Array<string>}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    exclusionList: Array<string>;
  }

  /**
   * The correspondence information between IP and MAC address.
   * @interface NetIpMacInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 22 dynamic
   * @since 24 static
   */
  export interface NetIpMacInfo {
    /**
     * Link address of the network.
     * @type {NetAddress}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 24 static
     */
    ipAddress: NetAddress;

    /**
     * Mac address of the network.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 24 static
     */
    macAddress: string;

    /**
     * Interface name of the network.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 22 dynamic
     * @since 24 static
     */
    iface: string;
  }

  /**
   * Defines the protocol type.
   * @enum { int }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 23 dynamic
   * @since 24 static
   */
  export enum ProtocolType {
    /**
     * Indicates that protocol type is TCP.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    PROTO_TYPE_TCP = 6,
    /**
     * Indicates that protocol type is UDP.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 23 dynamic
     * @since 24 static
     */
    PROTO_TYPE_UDP = 17
  }

  /**
   * Enumerates packets types.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PacketsType {
    /**
     * ICMP.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETCONN_PACKETS_ICMP = 0,

    /**
     * UDP.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETCONN_PACKETS_UDP = 1
  }

  /**
   * Network traceroute option definition.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TraceRouteOptions {
    /**
     * Maximum number of jumps, max is 30. Default is 30.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxJumpNumber?: int;

    /**
     * Packets type. Default is NETCONN_PACKETS_ICMP.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packetsType?: PacketsType;
  }

  /**
   * Defines the trace route information structure.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TraceRouteInfo {
    /**
     * Number of jumps.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    jumpNo: int;

    /**
     * Host name or address.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * RTT in microseconds, min/avg/max/std.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtt: int[];
  }

  /**
   * Defines the probe result information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ProbeResultInfo {
    /**
     * Packet loss rate. The value 100 indicates 100% packet loss, and 50 indicates 50% packet loss.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lossRate: int;

    /**
     * RTT in microseconds, min/avg/max/std.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtt: int[];
  }
}

export default connection;
