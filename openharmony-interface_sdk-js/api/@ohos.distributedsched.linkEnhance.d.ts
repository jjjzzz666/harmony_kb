/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';

/**
 * Provides methods to establish enhance link.
 *
 * @namespace linkEnhance
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace linkEnhance {

  /**
   * Describes the result of connect operation.
   *
   * @typedef ConnectResult
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * Indicates the peer device id.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Indicates success or not, true if success, false if failure.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    success: boolean;

    /**
     * Indicates the reason if failure, it is always 0 if success.
     * value below:
     * - 32390200 - Connect timeout.
     * - 32390201 - Peer server is not started.
     * - 32390300 - Internal error.
     *
     * @type { int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    reason: int
  }


  /**
   * Manages server.
   * Before calling any server methods, you must call {@link createServer} first.
   *
   * @typedef Server
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Server {
    /**
     * Start server which can be connected by others.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390202 - The number of servers exceeds the limit.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * Stop server which can not be connected ever.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    stop(): void;

    /**
     * Closes this {@code Server} object and unregisters its callbacks.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Subscribe server is connected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - Type of the server is connected event to listen for.
     * @param { Callback<Connection> } callback - Callback used to listen for the server is connected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectionAccepted', callback: Callback<Connection>): void;

    /**
     * Unsubscribe server is connected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectionAccepted' } type - Type of the server is connected event to listen for.
     * @param { Callback<Connection> } callback - Callback used to listen for the server is connected event.
     * @throws { BusinessError } 201 -  Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectionAccepted', callback?: Callback<Connection>): void;

    /**
     * Subscribe server is connected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } callback - Callback used to listen for the server is connected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectionAccepted(callback: Callback<Connection>): void;

    /**
     * Unsubscribe server is connected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<Connection> } [callback] - Callback used to listen for the server is connected event.
     * @throws { BusinessError } 201 -  Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectionAccepted(callback?: Callback<Connection>): void;

    /**
     * Subscribe server stop event, it should always rebuild the server after being called.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - Type of the server state change event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the server stop event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'serverStopped', callback: Callback<number>): void;

    /**
     * Unsubscribe server stop event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'serverStopped' } type - Type of the server state change event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the server state change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'serverStopped', callback?: Callback<number>): void;

    /**
     * Subscribe server stop event, it should always rebuild the server after being called.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - Callback used to listen for the server stop event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onServerStopped(callback: Callback<int>): void;

    /**
     * Unsubscribe server stop event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - Callback used to listen for the server state change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Parameter invalid.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offServerStopped(callback?: Callback<int>): void;

  }

  /**
   * Create an server instance.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } name - Name of the server.
   * @returns { Server } Returns a server instance {@code Server}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390206 - Invalid parameter.
   * @throws { BusinessError } 32390203 - Duplicate server name.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createServer(name: string): Server;

  /**
   * Manages connection.
   * Before calling any connection methods, you must use {@link createServer} to create an instance,
   * or get a connection from {@link acceptConnect} of server.
   *
   * @typedef Connection
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface Connection {
    /**
     * Connects to the peer server, which must be in connectable advertising state.
     * <p>The 'ConnectResult' event should be subscribed to get the result of this operation.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390204 - The number of connection exceeds the limit.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    connect(): void;

    /**
     * Disconnects from or stops an ongoing connection to the peer server.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    disconnect(): void;

    /**
     * Disables connection.
     * <p> This method unregisters the device and clears all registered callbacks and handles.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly     
     * @since 20 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * Gets the peer device id of connection
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { string } Returns the peer device id, return "" if operation failed.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    getPeerDeviceId(): string;

    /**
     * Send data to the peer.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { ArrayBuffer } data - Indicates data to be sent.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @throws { BusinessError } 32390205 - Connection is not ready.
     * @throws { BusinessError } 32390300 - Internal error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly     
     * @since 20 dynamic
     * @since 23 static
     */
    sendData(data: ArrayBuffer): void;

    /**
     * Subscribe connect result event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - Type of result event to listen for.
     * @param { Callback<ConnectResult> } callback - Callback used to listen for result  event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'connectResult', callback: Callback<ConnectResult>): void;

    /**
     * Unsubscribe connect result event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'connectResult' } type - Type of result event to listen for.
     * @param { Callback<ConnectResult> } callback - Callback used to listen for result  event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'connectResult', callback?: Callback<ConnectResult>): void;

    /**
     * Subscribe connect result event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } callback - Callback used to listen for result  event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onConnectResult(callback: Callback<ConnectResult>): void;

    /**
     * Unsubscribe connect result event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ConnectResult> } [callback] - Callback used to listen for result  event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offConnectResult(callback?: Callback<ConnectResult>): void;

    /**
     * Subscribe connection disconnected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - Type of connection disconnected event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the connection disconnected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'disconnected', callback: Callback<number>): void;

    /**
     * Unsubscribe connection disconnected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'disconnected' } type - Type of connection disconnected event to listen for.
     * @param { Callback<number> } callback - Callback used to listen for the connection disconnected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'disconnected', callback?: Callback<number>): void;

    /**
     * Subscribe connection disconnected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } callback - Callback used to listen for the connection disconnected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly     
     * @since 23 static
     */
    onDisconnected(callback: Callback<int>): void;

    /**
     * Unsubscribe connection disconnected event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<int> } [callback] - Callback used to listen for the connection disconnected event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDisconnected(callback?: Callback<int>): void;

    /**
     * Subscribe connection data received event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - Type of the connection data received event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback used to listen for the connection data received event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(type: 'dataReceived', callback: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribe connection data received event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { 'dataReceived' } type - Type of the connection data received event to listen for.
     * @param { Callback<ArrayBuffer> } callback - Callback used to listen for the connection data received event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(type: 'dataReceived', callback?: Callback<ArrayBuffer>): void;

    /**
     * Subscribe connection data received event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } callback - Callback used to listen for the connection data received event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    onDataReceived(callback: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribe connection data received event.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Callback<ArrayBuffer> } [callback] - Callback used to listen for the connection data received event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 32390206 - Invalid parameter.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 23 static
     */
    offDataReceived(callback?: Callback<ArrayBuffer>): void;
  }

  /**
   * Create a connection instance.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } deviceId - Indicates device id.
   * @param { string } name - Indicates server name to be connected.
   * @returns { Connection } Returns a connection instance {@code Connection}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390206 - Invalid parameter.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createConnection(deviceId: string, name: string): Connection;
}

export default linkEnhance;
