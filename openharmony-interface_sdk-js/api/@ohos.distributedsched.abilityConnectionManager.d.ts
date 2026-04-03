/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
import image from './@ohos.multimedia.image';
import Context from './application/Context';
import colorSpaceManager from './@ohos.graphics.colorSpaceManager';

/**
 * Providers interfaces to create a {@link abilityConnectionManager} instances.
 *
 * @namespace abilityConnectionManager
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace abilityConnectionManager {

  /**
   * Collaborative application information.
   * @interface PeerInfo
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface PeerInfo {
    /**
     * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
     * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
     * the obtained ID will change.
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * bundle name.
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * module name.
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * ability name.
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Service name.
     * @type { ?string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    serviceName?: string;
    }

  /**
   * Connection options for ability connection sessions.
   * @interface ConnectOptions
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectOptions {
    /**
     * Send Data Configuration Options. WiFi needs to be turned on.
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendData?: boolean;

    /**
     * Send Stream Data Configuration Options. WiFi needs to be turned on.
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needSendStream?: boolean;

    /**
     * Receive Stream Data Configuration Options. WiFi needs to be turned on.
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    needReceiveStream?: boolean;

    /**
     * Startup option.
     * @type { ?StartOptionParams }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    startOptions?: StartOptionParams;

    /**
     * Additional information about the ability connection request.
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    parameters?: Record<string, string>;
    }

  /**
   * Connection result.
   * @interface ConnectResult
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ConnectResult {
    /**
     * Connection is accepted or rejected.
     * @type { boolean }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    isConnected: boolean;

    /**
     * Connection failure error code.
     * @type { ?ConnectErrorCode }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    errorCode?: ConnectErrorCode;

    /**
     * Indicates the reason for reject.
     * @type { ?string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: string;
    }

  /**
   * Connection failure error code.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ConnectErrorCode {
    /**
     * A connected session exists between the two application.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECTED_SESSION_EXISTS = 0,

    /**
     * The peer application rejects the collaboration request.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_REJECTED = 1,

    /**
     * Connection failed due to the device's WiFi being off.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    LOCAL_WIFI_NOT_OPEN = 2,

    /**
     * Connection failed due to the peer's WiFi being off.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_WIFI_NOT_OPEN = 3,

    /**
     * Connection failed due to the peer ability has not implemented the onCollaborate method.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_ABILITY_NO_ONCOLLABORATE = 4,

    /**
     * The connection failed due to an internal system error.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SYSTEM_INTERNAL_ERROR = 5
    }

  /**
   * The constant for params of the start option.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StartOptionParams {
    /**
     * Launching the peer application to the foreground.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    START_IN_FOREGROUND = 0,

    /**
     * Launching the peer application to the background.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    START_IN_BACKGROUND = 1
    }

  /**
   * Connection event callback information.
   * @interface EventCallbackInfo
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface EventCallbackInfo {
    /**
     * Ability connection Session id.
     * @type { int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    sessionId: int;

    /**
     * Indicates the reason of ability disconnection.
     * @type { ?DisconnectReason }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    reason?: DisconnectReason;

    /**
     * Received message data.
     * @type { ?string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    msg?: string;

    /**
     * Received data.
     * @type { ?ArrayBuffer }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    data?: ArrayBuffer;

    /**
     * Received image.
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    image?: image.PixelMap;
    }

  /**
   * Collaborate event information.
   * @interface CollaborateEventInfo
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface CollaborateEventInfo {
    /**
     * Indicates the type of collaborate event.
     * @type { CollaborateEventType }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventType: CollaborateEventType;

    /**
     * Indicates the collaborate message of collaborate event.
     * @type { ?string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    eventMsg?: string;
    }

  /**
   * CollaborateEventType.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum CollaborateEventType {
    /**
     * Indicates send task failure.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SEND_FAILURE = 0,

    /**
     * Indicates color space conversion failure.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLOR_SPACE_CONVERSION_FAILURE = 1
    }

  /**
   * DisconnectReason.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum DisconnectReason {
    /**
     * Indicates that the reason is the peer application actively closes the collaboration.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_CLOSE_COLLABORATION = 0,

    /**
     * Indicates that the reason is the peer application exit.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_APP_EXIT = 1,

    /**
     * Indicates that the reason is a network disconnection.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly     
     * @since 18 dynamic
     * @since 23 static
     */
    NETWORK_DISCONNECTED = 2
    }

  /**
   * Registers connect event.
   *
   * @param { 'connect' } type - Registration Type, 'connect'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'connect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters connect event.
   *
   * @param { 'connect' } type - Registration Type, 'connect'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'connect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;
        
  /**
   * Registers connect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onConnect(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters connect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('connect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offConnect(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;                 

  /**
   * Registers disconnect event.
   *
   * @param { 'disconnect' } type - Registration Type, 'disconnect'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'disconnect', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters disconnect event.
   *
   * @param { 'disconnect' } type - Registration Type, 'connect'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'disconnect', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers disconnect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onDisconnect(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters disconnect event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('disconnect') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offDisconnect(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveMessage event.
   *
   * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveMessage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveMessage event.
   *
   * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveMessage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveMessage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveMessage(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveMessage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveMessage') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveMessage(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;        
        

  /**
   * Registers receiveData event.
   *
   * @param { 'receiveData' } type - Registration Type, 'receiveData'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveData', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveData event.
   *
   * @param { 'receiveData' } type - Registration Type, 'receiveData'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveData', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;

 /**
   * Registers receiveData event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveData(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveData event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveData') command.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveData(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;

  /**
   * Registers receiveImage event.
   *
   * @param { 'receiveImage' } type - Registration Type, 'receiveImage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'receiveImage', sessionId: number,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveImage event.
   *
   * @param { 'receiveImage' } type - Registration Type, 'receiveImage'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'receiveImage', sessionId: number,
        callback?: Callback<EventCallbackInfo>): void;
        
  /**
   * Registers receiveImage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveImage(sessionId: int,
        callback: Callback<EventCallbackInfo>): void;

  /**
   * Unregisters receiveImage event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<EventCallbackInfo> } [callback] - Used to handle ('receiveImage') command.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveImage(sessionId: int,
        callback?: Callback<EventCallbackInfo>): void;             

  /**
   * Registers collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'collaborateEvent', sessionId: number,
        callback: Callback<CollaborateEventInfo>): void;

  /**
   * Unregisters collaborateEvent event.
   *
   * @param { 'collaborateEvent' } type - Registration Type, 'collaborateEvent'.
   * @param { number } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'collaborateEvent', sessionId: number,
        callback?: Callback<CollaborateEventInfo>): void;
        
  /**
   * Registers collaborateEvent event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } callback - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onCollaborateEvent(sessionId: int,
        callback: Callback<CollaborateEventInfo>): void;

  /**
   * Unregisters collaborateEvent event.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { Callback<CollaborateEventInfo> } [callback] - Called when an error event comes.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offCollaborateEvent(sessionId: int,
        callback?: Callback<CollaborateEventInfo>): void;                

  /**
   * Create the Ability connection Session.
   *
   * @permission ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO and ohos.permission.SET_NETWORK_INFO and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } serviceName - Service name, which must be consistent at both ends.
   * @param { Context } context - The context of an ability.
   * @param { PeerInfo } peerInfo - Collaborative application information at the sink end.
   * @param { ConnectOptions } connectOptions - Connection options for Ability connection sessions.
   * @returns { int}  Returns the Ability connection Session id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function createAbilityConnectionSession(serviceName: string, context: Context, peerInfo: PeerInfo,
        connectOptions: ConnectOptions): int;

  /**
   * Destroy the ability connection session
   *
   * @param { int } sessionId - Ability connection Session id.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyAbilityConnectionSession(sessionId: int): void;

  /**
   * Get the application information in the ability connection session
   *
   * @param { int } sessionId - Ability connection Session id.
   * @returns { PeerInfo | undefined } Returns the collaborative application information at the sink end.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   */
  function getPeerInfoById(sessionId: int): PeerInfo | undefined;

  /**
   * Get the application information in the ability connection session
   *
   * @param { int } sessionId - Ability connection Session id.
   * @returns { PeerInfo | undefined } Returns the collaborative application information at the sink end.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function getPeerInfoById(sessionId: int): PeerInfo | null;

  /**
   * Initiate an ability session connection.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @returns { Promise<ConnectResult> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function connect(sessionId: int): Promise<ConnectResult>;

  /**
   * Disconnect a Ability connection Session.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function disconnect(sessionId: int): void;

  /**
   * Accept connection request and prepare the connection environment.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { string } token - Token for collaborative service management
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function acceptConnect(sessionId: int, token: string): Promise<void>;

  /**
   * Notify the peer end of the reason why the connection is rejected.
   *
   * @param { string } token - Token for collaborative service management.
   * @param { string } reason - Reason for connection rejection.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function reject(token: string, reason: string): void;

  /**
   * Send message data.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { string } msg - Message data to be sent.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendMessage(sessionId: int, msg: string): Promise<void>;

  /**
   * Send data.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { ArrayBuffer } data - Data to be sent.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendData(sessionId: int, data: ArrayBuffer): Promise<void>;

  /**
   * Send image data.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { image.PixelMap } image - image data to be sent.
   * @param { int } [quality] - image compression quality, range 0~100, default 30.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function sendImage(sessionId: int, image: image.PixelMap, quality?: int): Promise<void>;

  /**
   * Creating a Stream.
   *
   * @param { int } sessionId - Ability connection Session id.
   * @param { StreamParam } param - Transport Stream Parameters
   * @returns {Promise<int>}  The promise returned by the function, contain the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 32300001 - Only one stream can be created for the current session.
   * @throws { BusinessError } 32300003 - Bitrate not supported.
   * @throws { BusinessError } 32300004 - Color space not supported.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function createStream(sessionId: int, param: StreamParam): Promise<int>;

  /**
   * Sets the transmission surface.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @param { string } surfaceId - Surface ID.
   * @param { SurfaceParam } param - Surface Parameters
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function setSurfaceId(streamId: int, surfaceId: string, param: SurfaceParam): void;
  /**
   * Obtains the transmission surface.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @param { SurfaceParam } param - Surface Parameters
   * @returns {string}  Returns the ID of a surface.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function getSurfaceId(streamId: int, param: SurfaceParam): string;

  /**
   * Update surface parameters.
   *
   * @param { int } streamId - Stream ID.
   * @param { SurfaceParam } param - Surface Parameters
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function updateSurfaceParam(streamId: int, param: SurfaceParam): void;

  /**
   * Destroy the Stream.
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function destroyStream(streamId: int): void;

  /**
   * Start Streaming
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 32300002 - The stream at the receive end is not started.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function startStream(streamId: int): void;

  /**
   * Stop Streaming
   *
   * @param { int } streamId - Indicates the ID of a transport stream.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function stopStream(streamId: int): void;

  /**
   * Streaming configuration parameters.
   * @interface StreamParam
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface StreamParam {
    /**
     * Stream name, the receive end must be consistent with the transmit end.
     * @type { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Stream transmission role, which can be a receive stream or a transmit stream.
     * @type { StreamRole }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    role: StreamRole;

    /**
     * This value indicates video bitrate, default 80(kbps). Only valid on the sender side.
     * @type { ?int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    bitrate?: int;

    /**
     * The target color space for conversion. Currently, only BT709_LIMIT is supported.
     * If the video format on the sender side is HDR and needs to be converted to SDR during transmission, this parameter should be set.
     * @type { ?colorSpaceManager.ColorSpace }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    colorSpaceConversionTarget?: colorSpaceManager.ColorSpace;
    }

  /**
   * Surface configuration parameters.
   * @interface SurfaceParam
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface SurfaceParam {
    /**
     * Encoding width. Must be set before stream starts and cannot update once set.
     * @type { int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Encoding length. Must be set before stream starts and cannot update once set.
     * @type { int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * Video PixelFormat, this option must be configured on the sender.
     * Must be set before stream starts and cannot update once set.
     * @type { ?VideoPixelFormat }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    format?: VideoPixelFormat;

    /**
     * This value identifies the rotation angle of the video.
     * the range of rotation angle should be {0, 90, 180, 270}, default is 0
     * @type { ?int }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    rotation?: int;

    /**
     * This value indicates whether the video is reversed.
     * @type { ?FlipOptions }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    flip?: FlipOptions;
    }

  /**
   * Flip option.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum FlipOptions {
    /**
     * Horizontal Flip
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    HORIZONTAL = 0,

    /**
     * Vertical Flip
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly     
     * @since 18 dynamic
     * @since 23 static
     */
    VERTICAL = 1
    }

  /**
   * Stream transmission role.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum StreamRole {
    /**
     * This status indicates the stream is a send stream.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE = 0,

    /**
     * This status indicates the stream is a receive stream.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SINK = 1
    }

  /**
   * Video pixelFormat Configuration Options.
   * @enum { int }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum VideoPixelFormat {
    /**
     * Unknown.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * NV12. yuv 420 semiplanar.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NV12 = 0,

    /**
     * NV21. yvu 420 semiplanar.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NV21 = 1
    }

  /**
   * The keys for ability onCollaborate parameters.
   * @enum { string }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationKeys {
    /**
     * The key of peerinfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    PEER_INFO = 'ohos.collaboration.key.peerInfo',

    /**
     * The key of connect options
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    CONNECT_OPTIONS = 'ohos.collaboration.key.connectOptions',

    /**
     * The key of collaboration type
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    COLLABORATE_TYPE = 'ohos.collaboration.key.abilityCollaborateType'
    }

  /**
   * Ability collaboration values.
   * @enum { string }
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborationValues {
    /**
     * Default collaboration type
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ABILITY_COLLABORATION_TYPE_DEFAULT = 'ohos.collaboration.value.abilityCollab',

    /**
     * Collaboration type of connect proxy
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly     
     * @since 18 dynamic
     * @since 23 static
     */
    ABILITY_COLLABORATION_TYPE_CONNECT_PROXY = 'ohos.collaboration.value.connectProxy'
    }

               
}
export default abilityConnectionManager;
