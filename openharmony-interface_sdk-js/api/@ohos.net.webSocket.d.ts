/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

import type { AsyncCallback, ErrorCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @since 6
 */
/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform
 * @since 10
 */
/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace webSocket {
  /**
   * @typedef { connection.HttpProxy }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * @typedef { connection.HttpProxy }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform
   * @since 24 dynamic&static
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * Creates a web socket connection.
   * @returns { WebSocket } the WebSocket of the createWebSocket.
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  /**
   * Creates a web socket connection.
   * @returns { WebSocket } the WebSocket of the createWebSocket.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * Creates a web socket connection.
   * @returns { WebSocket } the WebSocket of the createWebSocket.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function createWebSocket(): WebSocket;

  /**
   * Defines the optional parameters carried in the request for establishing a WebSocket connection.
   * @interface WebSocketRequestOptions
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  /**
   * Defines the optional parameters carried in the request for establishing a WebSocket connection.
   * @interface WebSocketRequestOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the optional parameters carried in the request for establishing a WebSocket connection.
   * @interface WebSocketRequestOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface WebSocketRequestOptions {
    /**
     * HTTP request header.
     * @type {?Object}
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * HTTP request header.
     * @type {?Object}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * HTTP request header.
     * @type {?Object}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    header?: Object;

    /**
     * HTTP request header.
     * 
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 23 static
     */
    header?: Record<string, string>;
    
    /**
     * File path for client cert.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * File path for client cert.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    caPath?: string;

    /**
     * Wheter or not to skip the verification of the server's certification.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetStack
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Wheter or not to skip the verification of the server's certification.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    skipServerCertVerification?: boolean;

    /**
     * Client cert.
     * @type {?ClientCert}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * Client cert.
     * @type {?ClientCert}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    clientCert?: ClientCert;

    /**
     * HTTP proxy configuration. Use 'system' if this filed is not set.
     * @type {?ProxyConfiguration}
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * HTTP proxy configuration. Use 'system' if this filed is not set.
     * @type {?ProxyConfiguration}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    proxy?: ProxyConfiguration;

    /**
     * Self defined protocol.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Self defined protocol.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    protocol?: string;

    /**
     * Self defined interval of ping frame.
     * default: 30. disable: 0. max: 30000. unit:second.
     * Ping is performed at every pingInterval.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 21 dynamic
     * @since 23 static
     */
    /**
     * Self defined interval of ping frame.
     * default: 30. disable: 0. max: 30000. unit:second.
     * Ping is performed at every pingInterval.
     *
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    pingInterval?: int;

    /**
     * Self defined timeout of pong frame.
     * default: 30. max: 30000. unit:second. The value must be less than or equal to pingInterval.
     * If no pong is received within the pongTimeout period, the websocket connection will be disconnected.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 21 dynamic
     * @since 23 static
     */
    /**
     * Self defined timeout of pong frame.
     * default: 30. max: 30000. unit:second. The value must be less than or equal to pingInterval.
     * If no pong is received within the pongTimeout period, the websocket connection will be disconnected.
     *
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    pongTimeout?: int;

    /**
     * The minimum support version of TLS protocol.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minSupportTlsProtocol?: TlsProtocol;
  }

  /**
   * HTTP proxy configuration.
   * system: means that use system proxy configuration.
   * no-proxy: means do not use proxy.
   * object of @type {connection.HttpProxy} means providing custom proxy settings
   * @typedef { 'system' | 'no-proxy' | HttpProxy }
   * @syscap SystemCapability.Communication.NetStack
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * HTTP proxy configuration.
   * system: means that use system proxy configuration.
   * no-proxy: means do not use proxy.
   * object of @type {connection.HttpProxy} means providing custom proxy settings
   * @typedef { 'system' | 'no-proxy' | HttpProxy }
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export type ProxyConfiguration = 'system' | 'no-proxy' | HttpProxy;

  /**
   * The clientCert field of the client certificate, which includes three attributes:
   * client certificate (certPath) and only support PEM format, certificate private key (keyPath), 
   * and passphrase (keyPassword).
   * @interface ClientCert
   * @syscap SystemCapability.Communication.NetStack
   * @since 11
   */
  /**
   * The clientCert field of the client certificate, which includes three attributes:
   * client certificate (certPath) and only support PEM format, certificate private key (keyPath), 
   * and passphrase (keyPassword).
   * @interface ClientCert
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export interface ClientCert {
    /**
     * The path to the client certificate file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * The path to the client certificate file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    certPath: string;
    
    /**
     * The path of the client certificate private key file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * The path of the client certificate private key file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    keyPath: string;

    /**
     * Client certificate password.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * Client certificate password.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    keyPassword?: string;
  }

  /**
   * Enumerates TLS protocols.
   *
   * @interface ClientCert
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum TlsProtocol {
    /**
     * TLS1.0.
     * 
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_0 = 0,

    /**
     * TLS1.1.
     * 
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_1 = 1,

    /**
     * TLS1.2.
     * 
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_2 = 2,

    /**
     * TLS1.3.
     * 
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_3 = 3
  }

  /**
   * Defines the optional parameters carried in the request for closing a WebSocket connection.
   * @interface WebSocketCloseOptions
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  /**
   * Defines the optional parameters carried in the request for closing a WebSocket connection.
   * @interface WebSocketCloseOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the optional parameters carried in the request for closing a WebSocket connection.
   * @interface WebSocketCloseOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface WebSocketCloseOptions {
    /**
     * Error code.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Error code.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Error code.
     * @type {?int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    code?: int;
    /**
     * Error cause.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Error cause.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Error cause.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    reason?: string;
  }

  /**
   * The result for closing a WebSocket connection.
   * @interface CloseResult
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * The result for closing a WebSocket connection.
   * @interface CloseResult
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloseResult {
    /**
     * Error code.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Error code.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;
    /**
     * Error cause.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Error cause.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    reason: string;
  }

  /**
   * The result for connect status a WebSocket connection.
   * @interface OpenResult
   * @syscap SystemCapability.Communication.NetStack
   * @since 23 static
   */
  export interface OpenResult {
    /**
     * result status.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    status: int;

    /**
     * result message.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    message: string;
  }

  /**
   * HTTP response headers.
   * @typedef { object }
   * @syscap SystemCapability.Communication.NetStack
   * @since 12 dynamic
   */
  /**
   * HTTP response headers.
   * @typedef { object }
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic
   */
  export type ResponseHeaders = {
    [k: string]: string | string[] | undefined;
  }

  /**
   * HTTP response headers.
   * @typedef { Record<string, string | string[] | undefined> }
   * @syscap SystemCapability.Communication.NetStack
   * @since 23 static
   */
  export type ResponseHeaders = Record<string, string | string[] | undefined>;

  /**
   * <p>Defines a WebSocket object. Before invoking WebSocket APIs,
   * you need to call webSocket.createWebSocket to create a WebSocket object.</p>
   * @interface WebSocket
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  /**
   * <p>Defines a WebSocket object. Before invoking WebSocket APIs,
   * you need to call webSocket.createWebSocket to create a WebSocket object.</p>
   * @interface WebSocket
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 10
   */
  /**
   * <p>Defines a WebSocket object. Before invoking WebSocket APIs,
   * you need to call webSocket.createWebSocket to create a WebSocket object.</p>
   * @interface WebSocket
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export interface WebSocket {
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url - URL for establishing a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302001 - Websocket url error.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302003 - Websocket connection already exists.
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    connect(url: string, callback: AsyncCallback<boolean>): void;

    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302001 - Websocket url error.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302003 - Websocket connection already exists.
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;

    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @permission ohos.permission.INTERNET
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302001 - Websocket url error.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302003 - Websocket connection already exists.
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain.
     * @throws { BusinessError } 2302999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;

    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<boolean> } callback - the callback of send.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<boolean> } callback - the callback of send.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<boolean> } callback - the callback of send.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void;

    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Sends data through a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    send(data: string | ArrayBuffer): Promise<boolean>;

    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    close(callback: AsyncCallback<boolean>): void;

    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @param { AsyncCallback<boolean> } callback - the callback of close.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;

    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    /**
     * Closes a WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    close(options?: WebSocketCloseOptions): Promise<boolean>;

    /**
     * Enables listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Enables listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Enables listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'open', callback: AsyncCallback<Object>): void;

    /**
     * Enables listening for the open events of a WebSocket connection.
     * @param { Callback<OpenResult> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onOpen(callback: Callback<OpenResult>): void;

    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
     * @param { AsyncCallback<Object> } callback the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'open', callback?: AsyncCallback<Object>): void;

    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @param { Callback<OpenResult> } [callback] the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    offOpen(callback?: Callback<OpenResult>): void;

    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onMessage(callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { 'message' } type - event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    offMessage(callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Enables listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Enables listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Enables listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'close', callback: AsyncCallback<CloseResult>): void;

    /**
     * Enables listening for the close events of a WebSocket connection.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onWebSocketClose(callback: AsyncCallback<CloseResult>): void;

    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'close', callback?: AsyncCallback<CloseResult>): void;

    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @param { AsyncCallback<CloseResult> } [callback] - the callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offWebSocketClose(callback?: AsyncCallback<CloseResult>): void;

    /**
     * Enables listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Enables listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Enables listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Enables listening for the error events of a WebSocket connection.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onWebSocketError(callback: ErrorCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamic
     */
    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10 dynamic
     */
    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offWebSocketError(callback?: ErrorCallback): void;

    /**
     * Enables listening for receiving data ends events of a WebSocket connection.
     * @param { 'dataEnd' } type - event indicating the WebSocket connection has received data ends.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * Enables listening for receiving data ends events of a WebSocket connection.
     * @param { 'dataEnd' } type - event indicating the WebSocket connection has received data ends.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'dataEnd', callback: Callback<void>): void;

    /**
     * Enables listening for receiving data ends events of a WebSocket connection.
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onDataEnd(callback: Callback<void>): void;

    /**
     * Cancels listening for receiving data ends events of a WebSocket connection.
     * @param { 'dataEnd' } type - event indicating the WebSocket connection has received data ends.
     * @param { Callback<void> } [ callback ] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    /**
     * Cancels listening for receiving data ends events of a WebSocket connection.
     * @param { 'dataEnd' } type - event indicating the WebSocket connection has received data ends.
     * @param { Callback<void> } [ callback ] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'dataEnd', callback?: Callback<void>): void;

    /**
     * Cancels listening for receiving data ends events of a WebSocket connection.
     * @param { Callback<void> } [ callback ] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offDataEnd(callback?: Callback<void>): void;

    /**
     * Registers an observer for HTTP Response Header events.
     * @param { 'headerReceive'} type - Indicates Event name.
     * @param { Callback<ResponseHeaders> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     */
    /**
     * Registers an observer for HTTP Response Header events.
     * @param { 'headerReceive'} type - Indicates Event name.
     * @param { Callback<ResponseHeaders> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'headerReceive', callback: Callback<ResponseHeaders>): void;

    /**
     * Registers an observer for HTTP Response Header events.
     * @param { Callback<ResponseHeaders> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    onHeaderReceive(callback: Callback<ResponseHeaders>): void;

    /**
     * Unregisters the observer for HTTP Response Header events.
     * @param { 'headerReceive' } type - Indicates Event name.
     * @param { Callback<ResponseHeaders> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     */
    /**
     * Unregisters the observer for HTTP Response Header events.
     * @param { 'headerReceive' } type - Indicates Event name.
     * @param { Callback<ResponseHeaders> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'headerReceive', callback?: Callback<ResponseHeaders>): void;

    /**
     * Unregisters the observer for HTTP Response Header events.
     * @param { Callback<ResponseHeaders> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    offHeaderReceive(callback?: Callback<ResponseHeaders>): void;
  }

  /**
   * Creates a web socket Server.
   * @returns { WebSocketServer } the WebSocketServer Object.
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   */
  /**
   * Creates a web socket Server.
   * @returns { WebSocketServer } the WebSocketServer Object.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 23 dynamic&static
   */
  function createWebSocketServer(): WebSocketServer;

  /**
   * Defines parameters for a WebSocket Server.
   * @interface WebSocketServerConfig
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * Defines parameters for a WebSocket Server.
   * @interface WebSocketServerConfig
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export interface WebSocketServerConfig {
    /**
     * Network card that the server listens on.
     * The server listens on this specific address. It's 0.0.0.0 by default.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Network card that the server listens on.
     * The server listens on this specific address. It's 0.0.0.0 by default.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    serverIP?: string;

    /**
     * Port number that the server listens on.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Port number that the server listens on.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    serverPort: int;

    /**
     * Server cert.
     * @type {?ServerCert}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Server cert.
     * @type {?ServerCert}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    serverCert?: ServerCert;

    /**
     * Maximum number of concurrent clients. When it's reached, the server will reject new connections.
     * @type { int }
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Maximum number of concurrent clients. When it's reached, the server will reject new connections.
     * @type { int }
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    maxConcurrentClientsNumber: int;

    /**
     * Self defined protocol.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Self defined protocol.
     * @type {?string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    protocol?: string;

    /**
     * Maximum number of one client's connections. When it's reached, the server will reject new connections.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Maximum number of one client's connections. When it's reached, the server will reject new connections.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    maxConnectionsForOneClient: int;
  }

  /**
   * The serverCert field of the server certificate, which includes two attributes:
   * File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format.
   * @interface ServerCert
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * The serverCert field of the server certificate, which includes two attributes:
   * File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format.
   * @interface ServerCert
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export interface ServerCert {
    /**
     * File path for the server cert.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * File path for the server cert.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    certPath: string;

    /**
     * The path of the server certificate private key file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * The path of the server certificate private key file.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    keyPath: string;
  }

  /**
   * Info about the connection from each specific client.
   * @interface WebSocketConnection
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * Info about the connection from each specific client.
   * @interface WebSocketConnection
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export interface WebSocketConnection {
    /**
     * IP address of the client.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * IP address of the client.
     * @type {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    clientIP: string;

    /**
     * Port of the client.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Port of the client.
     * @type {int}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    clientPort: int;
  }

  /**
   * Info about the message received from a specific client.
   * @interface WebSocketMessage
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * Info about the message received from a specific client.
   * @interface WebSocketMessage
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export interface WebSocketMessage {
    /**
     * Contend of the message.
     * @type {string | ArrayBuffer}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Contend of the message.
     * @type {string | ArrayBuffer}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    data: string | ArrayBuffer;

    /**
     * The connection where the message comes from.
     * @type {WebSocketConnection}
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * The connection where the message comes from.
     * @type {WebSocketConnection}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    clientConnection: WebSocketConnection;
  }

  /**
   * Callback function when a client connection is closed.
   * @typedef { function } ClientConnectionCloseCallback
   * @param { WebSocketConnection } clientConnection - the connection which is closed.
   * @param { CloseResult } closeReason - the error code and reason why the connection is closed.
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * Callback function when a client connection is closed.
   * @typedef { function } ClientConnectionCloseCallback
   * @param { WebSocketConnection } clientConnection - the connection which is closed.
   * @param { CloseResult } closeReason - the error code and reason why the connection is closed.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export type ClientConnectionCloseCallback = (clientConnection: WebSocketConnection, closeReason: CloseResult) => void;

  /**
   * <p>Defines a WebSocketServer object. Before invoking WebSocketServer APIs,
   * you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.</p>
   * @interface WebSocketServer
   * @syscap SystemCapability.Communication.NetStack
   * @since 19 dynamic
   * @since 23 static
   */
  /**
   * <p>Defines a WebSocketServer object. Before invoking WebSocketServer APIs,
   * you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.</p>
   * @interface WebSocketServer
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 24 dynamic&static
   */
  export interface WebSocketServer {
    /**
     * Start the WebSocket Server, and listen to a given port.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketServerConfig } config - setting for the server, such as ip address and port to listen to.
     * @returns { Promise<boolean> } Indicating whether the server starts sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302004 - Can't listen on the given NIC.
     * @throws { BusinessError } 2302005 - Can't listen on the given Port.
     * @throws { BusinessError } 2302999 - Websocket other unknown error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Start the WebSocket Server, and listen to a given port.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketServerConfig } config - setting for the server, such as ip address and port to listen to.
     * @returns { Promise<boolean> } Indicating whether the server starts sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302004 - Can't listen on the given NIC.
     * @throws { BusinessError } 2302005 - Can't listen on the given Port.
     * @throws { BusinessError } 2302007 - Websocket port already occupied.
     * @throws { BusinessError } 2302999 - Websocket other unknown error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    start(config: WebSocketServerConfig): Promise<boolean>;

    /**
     * List all alive connections.
     * @permission ohos.permission.INTERNET
     * @returns { WebSocketConnection[] } an array consists connections from all clients.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * List all alive connections.
     * @permission ohos.permission.INTERNET
     * @returns { WebSocketConnection[] } an array consists connections from all clients.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    listAllConnections(): WebSocketConnection[];

    /**
     * Close a given WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketConnection } connection - which on to be closed.
     * @param { webSocket.WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<boolean> } Indicating whether the connection is closed sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Close a given WebSocket connection.
     * @permission ohos.permission.INTERNET
     * @param { WebSocketConnection } connection - which on to be closed.
     * @param { webSocket.WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<boolean> } Indicating whether the connection is closed sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>;

    /**
     * Send a message using a specific connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - What to send. It can be a string or an ArrayBuffer.
     * @param { WebSocketConnection } connection - Where to sent.
     * @returns { Promise<boolean> } Indicating whether the message is sent sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Send a message using a specific connection.
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - What to send. It can be a string or an ArrayBuffer.
     * @param { WebSocketConnection } connection - Where to sent.
     * @returns { Promise<boolean> } Indicating whether the message is sent sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>;

    /**
     * Stop listening.
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } The Indicating whether the server stops sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     * @since 23 static
     */
    /**
     * Stop listening.
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } The Indicating whether the server stops sucessfully.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic&static
     */
    stop(): Promise<boolean>;

    /**
     * Enables listening for the error events of a WebSocket Server.
     * @param { 'error' } type - event indicating that the WebSocket Server has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Enables listening for the error events of a WebSocket Server.
     * @param { 'error' } type - event indicating that the WebSocket Server has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Enables listening for events that a client requested to connect the server.
     * @param { 'connect' } type - event indicating that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Enables listening for events that a client requested to connect the server.
     * @param { 'connect' } type - event indicating that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'connect', callback: Callback<WebSocketConnection>): void;

    /**
     * Enables listening for events that the server received a message.
     * @param { 'messageReceive' } type - event indicating that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Enables listening for events that the server received a message.
     * @param { 'messageReceive' } type - event indicating that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void;

    /**
     * Enables listening for events that a connection from a given client has been closed.
     * @param { 'close' } type - event indicating that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback function when a client connection is closed.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Enables listening for events that a connection from a given client has been closed.
     * @param { 'close' } type - event indicating that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback function when a client connection is closed.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    on(type: 'close', callback: ClientConnectionCloseCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket Server.
     * @param { 'error' } type - event indicating that the WebSocket Server has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Cancels listening for the error events of a WebSocket Server.
     * @param { 'error' } type - event indicating that the WebSocket Server has encountered an error.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Cancels listening for events that a client requested to connect the server.
     * @param { 'connect' } type - event indicating that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Cancels listening for events that a client requested to connect the server.
     * @param { 'connect' } type - event indicating that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'connect', callback?: Callback<WebSocketConnection>): void;

    /**
     * Cancels listening for events that a connection from a given client has been closed.
     * @param { 'close' } type - event indicating that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Cancels listening for events that a connection from a given client has been closed.
     * @param { 'close' } type - event indicating that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'close', callback?: ClientConnectionCloseCallback): void;

    /**
     * Cancels listening for events that the server received a message.
     * @param { 'messageReceive' } type - event indicating that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 19 dynamic
     */
    /**
     * Cancels listening for events that the server received a message.
     * @param { 'messageReceive' } type - event indicating that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 24 dynamic
     */
    off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void;

    /**
     * Enables listening for the error events of a WebSocket Server.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    onWebSocketServerError(callback: ErrorCallback): void;

    /**
     * Enables listening for events that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    onConnect(callback: Callback<WebSocketConnection>): void;

    /**
     * Enables listening for events that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    onMessageReceive(callback: Callback<WebSocketMessage>): void;

    /**
     * Enables listening for events that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback function when a client connection is closed.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    onWebSocketServerClose(callback: ClientConnectionCloseCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket Server.
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    offWebSocketServerError(callback?: ErrorCallback): void;

    /**
     * Cancels listening for events that a client requested to connect the server.
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    offConnect(callback?: Callback<WebSocketConnection>): void;

    /**
     * Cancels listening for events that a connection from a given client has been closed.
     * @param { ClientConnectionCloseCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    offWebSocketServerClose(callback?: ClientConnectionCloseCallback): void;
    
    /**
     * Cancels listening for events that the server received a message.
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    offMessageReceive(callback?: Callback<WebSocketMessage>): void;
  }
}

export default webSocket;