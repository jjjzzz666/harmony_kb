/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides methods to operate or manage Wi-Fi.
 * @namespace wifiManager
 * @since 9
 */
/**
 * Provides methods to operate or manage Wi-Fi.
 * @namespace wifiManager
 * @atomicservice
 * @since 11
 */
/**
 * Provides methods to operate or manage Wi-Fi.
 * @namespace wifiManager
 * @syscap SystemCapability.Communication.WiFi.STA
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace wifiManager {
  /**
   * Enable Wi-Fi.
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *  ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501003 - Operation failed because the service is being closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function enableWifi(): void;

  /**
   * Disable Wi-Fi.
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *     ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 20 dynamic
   * @since 23 static
   */
  function disableWifi(): void;

  /**
   * Enable semi - Wifi.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Operation failed because the service is being opened.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableSemiWifi(): void;

  /**
   * Query the Wi-Fi status
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
    /**
   * Query the Wi-Fi status
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 11
   */
  /**
   * Query the Wi-Fi status
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Query the Wi-Fi status
   * @returns { boolean } Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function isWifiActive(): boolean;

  /**
   * Scan Wi-Fi hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.startScan
   */
  function scan(): void;

  /**
   * Scan Wi-Fi hotspot.
   * @permission ohos.permission.SET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 21 dynamic
   * @since 23 static
   */
  function startScan(): void;

  /**
   * Obtain the scanned sta list.
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Promise<Array<WifiScanInfo>> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(): Promise<Array<WifiScanInfo>>;

  /**
   * Obtains information about a Wi-Fi detail state.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { WifiDetailState } Returns information about wifi state.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getWifiDetailState(): WifiDetailState;

  /**
   * Obtain the scanned sta list.
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @param { AsyncCallback<Array<WifiScanInfo>> } callback - Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResults(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * Obtain the scanned sta list.
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Array<WifiScanInfo> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead wifiManager.getScanInfoList
   */
  function getScanResultsSync(): Array<WifiScanInfo>;

  /**
   * Obtain the scanned station list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */

  /**
   * Obtain the scanned station list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getScanInfoList(): Array<WifiScanInfo>;

  /**
   * User can trigger scan even Wi-Fi is disabled.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { boolean } isScanAlwaysAllowed - true for allow trigger scan, otherwise don't allow trigger scan when Wi-Fi is disabled.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setScanAlwaysAllowed(isScanAlwaysAllowed: boolean): void;

  /**
   * Get scan always allowed flag.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } Returns {@code true} if scan running state is true, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getScanAlwaysAllowed(): boolean;

  /**
   * Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Indicates the device configuration for connection to the Wi-Fi network.
   * @returns { Promise<int> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Indicates the device configuration for connection to the Wi-Fi network.
   * @param { AsyncCallback<int> } callback - Indicates call back of addDeviceConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
  * Add a specified candidate hotspot configuration and returns the networkId.
  * This method adds one configuration at a time. After this configuration is added,
  *     your device will determine whether to connect to the hotspot.
  * The app must be in the foreground.
  * @permission ohos.permission.SET_WIFI_INFO
  * @param { WifiDeviceConfig } config - candidate config.
  * @returns { Promise<number> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @since 9
  */

 /**
  * Add a specified candidate hotspot configuration and returns the networkId.
  * This method adds one configuration at a time. After this configuration is added,
  *     your device will determine whether to connect to the hotspot.
  * The app must be in the foreground.
  * @permission ohos.permission.SET_WIFI_INFO
  * @param { WifiDeviceConfig } config - candidate config.
  * @returns { Promise<int> } Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @atomicservice
  * @since 12 dynamic
  * @since 23 static
  */
  function addCandidateConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
  * Add a specified candidate hotspot configuration and returns the networkId.
  * This method adds one configuration at a time. After this configuration is added,
  *     your device will determine whether to connect to the hotspot.
  * The app must be in the foreground.
  * @permission ohos.permission.SET_WIFI_INFO
  * @param { WifiDeviceConfig } config - candidate config.
  * @param { AsyncCallback<number> } callback - Indicates call back of addCandidateConfig.
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @since 9
  */

  /**
  * Add a specified candidate hotspot configuration and returns the networkId.
  * This method adds one configuration at a time. After this configuration is added,
  *     your device will determine whether to connect to the hotspot.
  * The app must be in the foreground.
  * @permission ohos.permission.SET_WIFI_INFO
  * @param { WifiDeviceConfig } config - candidate config.
  * @param { AsyncCallback<int> } callback - Indicates call back of addCandidateConfig.
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @atomicservice
  * @since 12 dynamic
  * @since 23 static
  */
  function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - Network ID which will be removed.
   * @returns { Promise<void> } Return results.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be removed.
   * @returns { Promise<void> } Return results.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int): Promise<void>;

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - Network ID which will be removed.
   * @param { AsyncCallback<void> } callback - Indicates call back of removeCandidateConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be removed.
   * @param { AsyncCallback<void> } callback - Indicates call back of removeCandidateConfig.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int, callback: AsyncCallback<void>): void;

  /**
   * Obtain the list of all existed candidate Wi-Fi configurations which added by ourself.
   * You can obtain only the Wi-Fi configurations you created on your own application.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existed Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Obtain the list of all existed candidate Wi-Fi configurations which added by ourself.
   * You can obtain only the Wi-Fi configurations you created on your own application.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existed Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */

  /**
   * Obtain the list of all existed candidate Wi-Fi configurations which added by ourself.
   * You can obtain only the Wi-Fi configurations you created on your own application.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existed Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getCandidateConfigs(): Array<WifiDeviceConfig>;

  /**
   * Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself
   * is allowed to be connected. This method connect to a configuration at a time.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - Network ID which will be connected. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself
   * is allowed to be connected. This method connect to a configuration at a time.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be connected. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function connectToCandidateConfig(networkId: int): void;

  /**
   * Connect to a specified candidate hotspot by networkId, and wait for user respond result.
   * Only the configuration which is added by ourself is allowed to be connected.
   * This method connect to a configuration at a time.
   * The app must be in the foreground.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - Network ID which will be connected. The value of networkId cannot be less than 0.
   * @returns { Promise<void> } - Returns the promise object that used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @throws { BusinessError } 2501001 - Wi-Fi STA disabled.
   * @throws { BusinessError } 2501005 - The user does not respond.
   * @throws { BusinessError } 2501006 - The user refused the action.
   * @throws { BusinessError } 2501007 - Parameter validation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function connectToCandidateConfigWithUserAction(networkId: int): Promise<void>;

  /**
   * Connect to Wi-Fi hotspot by networkId.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } networkId - ID of the connected network. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function connectToNetwork(networkId: int): void;

  /**
   * Connect to Wi-Fi hotspot by WifiDeviceConfig.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   * ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config - Indicates the device configuration for connection to the Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function connectToDevice(config: WifiDeviceConfig): void;

  /**
   * Disconnect connection between sta and Wi-Fi hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function disconnect(): void;

  /**
   * Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { int } rssi - Indicates the Wi-Fi RSSI.
   * @param { int } band - Indicates the Wi-Fi frequency band.
   * @returns { int } Returns Wi-Fi signal level ranging from 0 to 4.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getSignalLevel(rssi: int, band: int): int;

  /**
   * Obtain connection information about the Wi-Fi connection. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } Returns Wi-Fi linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Obtain connection information about the Wi-Fi connection. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } Returns Wi-Fi linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;
  
  /**
   * Obtain multiple Wi-Fi connection information when Wi-Fi linked in MLO(Muti-Link Operation) state.
   * If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid. 
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiLinkedInfo> } Returns Wi-Fi multiple link information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  function getMultiLinkedInfo(): Array<WifiLinkedInfo>;
  
  /**
   * Obtain connection information about the Wi-Fi connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Obtain connection information about the Wi-Fi connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously.
   * If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { WifiLinkedInfo } Returns Wi-Fi linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
   function getLinkedInfoSync(): WifiLinkedInfo;

  /**
   * Check whether the Wi-Fi connection has been set up.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Check whether the Wi-Fi connection has been set up.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isConnected(): boolean;

  /**
   * Obtain the features supported by the device.
   * To check whether this device supports a specified feature.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { long } Returns the features supported by this device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSupportedFeatures(): long;

  /**
   * Check whether the device supports a specified feature.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { long } featureId Indicates the ID of the feature.
   * @returns { boolean } Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isFeatureSupported(featureId: long): boolean;

  /**
   * Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
   * The MAC address is unique and cannot be changed.
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } Returns the MAC address of the Wi-Fi device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceMacAddress(): string[];

  /**
   * Obtain the IPv4 information of the Wi-Fi connection.
   * The IP information includes the host IP address, gateway address, and DNS information.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } Returns the IP information of the Wi-Fi connection.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getIpInfo(): IpInfo;

  /**
   * Obtain the IPv6 information of the Wi-Fi connection.
   * The IPv6 information includes the host IP address, gateway address, and DNS information.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Ipv6Info } Returns the IPv6 information of the Wi-Fi connection.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function getIpv6Info(): Ipv6Info;

  /**
   * Obtain the country code of the device.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } Returns the country code of this device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): string;

  /**
   * Re-associate to current network.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reassociate(): void;

  /**
   * Re-connect to current network.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function reconnect(): void;

  /**
   * Obtain the list of all existed Wi-Fi configurations.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } Returns the list of all existing Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * Obtain the single Wi-Fi configuration with Network ID.
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { int } networkId - The network ID of the Wi-Fi configuration to retrieve.
   * @returns { WifiDeviceConfig } Returns the Wi-Fi configuration corresponding to the network ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed called by Non-system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getDeviceConfig(networkId: int): WifiDeviceConfig;

  /**
   * Update the specified Wi-Fi configuration.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config Indicates the Wi-Fi configuration to update.
   * @returns { int } Returns the network ID in the updated Wi-Fi configuration if the update is successful;
   *     returns {@code -1} if the specified Wi-Fi configuration is not contained in the list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function updateNetwork(config: WifiDeviceConfig): int;

  /**
   * Set whther to allow automatic connnect by networkId.
   * The network can be associated with again if isAllowed is true, else not.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId Identifies the network to be set. The value of networkId cannot be less than 0.
   * @param { boolean } isAllowed Identifies whether allow auto connect or not.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 17 dynamic
   * @since 23 static
   */
  function allowAutoConnect(netId: int, isAllowed: boolean): void;

  /**
   * Disable the specified DeviceConfig by networkId.
   * The disabled DeviceConfig will not be associated with again.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId Identifies the network to disable. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableNetwork(netId: int): void;

  /**
    * Disable the specified DeviceConfig by networkId for a period of time.
    * The disabled DeviceConfig will not be associated with again.
    * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
    * @param { int } netId Identifies the network to disable. The value of networkId cannot be less than 0.
    * @param { int } blockDuration Indicates the duration of network disablement(unit is secondes),
    *     If the value is -1, means permanent disablement.
    * @throws {BusinessError} 201 - Permission denied.
    * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
    * @throws {BusinessError} 801 - Capability not supported.
    * @throws {BusinessError} 2501000 - Operation failed.
    * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
    * @syscap SystemCapability.Communication.WiFi.STA
    * @systemapi Hide this for inner system use.
    * @since 23 dynamic&static
    */
  function disableNetwork(netId: int, blockDuration: int): void;

  /**
   * Remove all the saved Wi-Fi configurations.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllNetwork(): void;

  /**
   * Remove a Wi-Fi DeviceConfig with networkId.
   * After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations.
   * If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted.
   * The application can only delete Wi-Fi DeviceConfig it has created.
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @param { int } id - Indicate the ID of the Wi-Fi DeviceConfig. The value of networkId cannot be less than 0.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function removeDevice(id: int): void;

  /**
   * Check whether the current device supports the specified band.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiBandType } bandType - Indicates the band type.
   * @returns { boolean }Returns {@code true} if the specified band is supported, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function isBandTypeSupported(bandType: WifiBandType): boolean;

  /**
   * Obtain the supported 5G channel list of the device.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<int> } Returns 5G channel list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function get5GChannelList(): Array<int>;

  /**
   * Obtain the latest disconnected reason.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { DisconnectedReason } Returns the latest disconnected reason.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisconnectedReason(): DisconnectedReason;

  /**
   * Start Portal certification.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function startPortalCertification(): void;

  /**
   * Whether the hotspot is metered hotspot or not.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } Returns {@code true} if the hotspot is metered hotspot, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 11 dynamic
   * @since 23 static
   */
  function isMeteredHotspot(): boolean;

  /**
   * Enable hiLink handshake.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { boolean } isHiLinkEnable - Indicates the HiLink enable or not.
   * @param { string } bssid - Indicates the Wi-Fi bssid.
   * @param { WifiDeviceConfig } config - Indicates the Wi-Fi device config.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function enableHiLinkHandshake(isHiLinkEnable: boolean, bssid: string, config: WifiDeviceConfig): void;

  /**
   * Reset all saved device configure.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function factoryReset(): void;

  /**
   * Enable Wi-Fi hotspot function.
   * This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function enableHotspot(): void;

  /**
   * Disable Wi-Fi hotspot function.
   * This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function disableHotspot(): void;

  /**
   * Check whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } Returns {@code true} if the method is called successfully, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * Check whether Wi-Fi hotspot is can be operated under some situation. When the airplane mode is turned on
   * and does not support the coexistence of softap and sta, nor does it support signal bridge,
   * the hotspot switch cannot be operated.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } {@code true} if Wi-Fi hotspot can be operated, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function isOpenSoftApAllowed(): boolean;

  /**
   * Check whether Wi-Fi hotspot is active on a device.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Check whether Wi-Fi hotspot is active on a device.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function isHotspotActive(): boolean;

  /**
   * Set the hotspot configuration for the device.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - Indicates the Wi-Fi hotspot configuration.
   *     The SSID and {@code securityType} must be available and correct.
   *     If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setHotspotConfig(config: HotspotConfig): void;

  /**
   * Obtain the Wi-Fi hotspot configuration.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } Returns the configuration of an existed or enabled Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * Obtain the list of stations that are connected to the Wi-Fi hotspot.
   * This method can only be used on a device that serves as a Wi-Fi hotspot.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } the list of clients that are connected to the Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Obtain the list of stations that are connected to the Wi-Fi hotspot.
   * This method can only be used on a device that serves as a Wi-Fi hotspot.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } the list of clients that are connected to the Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getStations(): Array<StationInfo>;

   /**
   * Add the station into the block list, the station can NOT access the hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - station which will be added in the block list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function addHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * Delete the station from block list, the station can access the hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - station which will be deleted in the block list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function delHotspotBlockList(stationInfo: StationInfo): void;

  /**
   * Get all the stations in the block list. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } stations in the block list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getHotspotBlockList(): Array<StationInfo>;

  /**
   * Obtain information about the P2P connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } Returns p2p linked information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
  
  /**
   * Obtain information about the P2P connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * Obtain information about the current p2p group.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<WifiP2pGroupInfo> } Returns p2p group information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain information about the current p2p group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pGroupInfo> } Returns p2p group information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * Obtain information about the current p2p group.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain information about the current p2p group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * Obtain the information about the found devices.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<WifiP2pDevice[]> } Returns p2p device information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain the information about the found devices.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pDevice[]> } Returns p2p device information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
  
  /**
   * Obtain the information about the found devices.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain the information about the found devices.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * Obtain the information about own device information. 
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Promise<WifiP2pDevice> } Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain the information about own device information. 
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pDevice> } Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 11 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(): Promise<WifiP2pDevice>;
  
  /**
   * Obtain the information about own device information. 
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { AsyncCallback<WifiP2pDevice> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Obtain the information about own device information. 
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pDevice> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 11 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void;

  /**
   * Create a P2P group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - Indicates the configuration for a group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function createGroup(config: WifiP2PConfig): void;

  /**
   * Remove a P2P group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function removeGroup(): void;

  /**
   * Initiate a P2P connection to a device with the specified configuration.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { WifiP2PConfig } config - Indicates the configuration for connecting to a specific group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Initiate a P2P connection to a device with the specified configuration.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - Indicates the configuration for connecting to a specific group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function p2pConnect(config: WifiP2PConfig): void;

  /**
   * Stop an ongoing p2p connection that is being established.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function p2pCancelConnect(): void;

  /**
   * Start discover Wi-Fi P2P devices.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Start discover Wi-Fi P2P devices.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function startDiscoverDevices(): void;

  /**
   * Stop discover Wi-Fi P2P devices.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function stopDiscoverDevices(): void;

  /**
   * Delete the persistent P2P group with the specified network ID.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - Indicates the network ID of the group to be deleted.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function deletePersistentGroup(netId: int): void;

  /**
   * Obtain information about the groups.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<Array<WifiP2pGroupInfo>> } Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Obtain information about the groups.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<WifiP2pGroupInfo>> } Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>;
  
  /**
   * Obtain information about the groups.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Obtain information about the groups.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - Indicates callback of function.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void;

  /**
   * Set the name of the Wi-Fi P2P device.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - Indicate the name to be set.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setDeviceName(devName: string): void;

  /**
   * Subscribe Wi-Fi status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Subscribe Wi-Fi status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi status change events.
   *
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Unsubscribe Wi-Fi status change events.
   *
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi status change events.
   *
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Subscribe Wi-Fi connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

    /**
   * Subscribe Wi-Fi connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function onWifiConnectionChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiConnectionChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi scan status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Subscribe Wi-Fi scan status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi scan status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiScanStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiScanStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi rssi change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi rssi change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function onWifiRssiChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi rssi change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi rssi change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 23 static
   */
  function offWifiRssiChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onStreamChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi stream change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi stream change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offStreamChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'deviceConfigChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on,
   *     0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onDeviceConfigChange(callback: Callback<int>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off,
   *     0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'deviceConfigChange', callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off,
   *     0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offDeviceConfigChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi hotspot state change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi hotspot state change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function onHotspotStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe Wi-Fi hotspot state change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9 dynamic
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

/**
   * Unsubscribe Wi-Fi hotspot state change events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function offHotspotStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe Wi-Fi hotspot sta join events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta join events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaJoin(callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta join events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - event name.
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta join events.
   * All callback functions will be deregistered If there is no specific callback parameter.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaJoin(callback?: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - event name.
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onHotspotStaLeave(callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - event name.
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offHotspotStaLeave(callback?: Callback<StationInfo>): void;

  /**
   * Subscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * Subscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pStateChange(callback: Callback<int>): void;

  /**
   * Unsubscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pStateChange(callback?: Callback<int>): void;

  /**
   * Subscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - event name.
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pConnectionChange(callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - event name.
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pConnectionChange(callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribe P2P local device change events.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Subscribe P2P local device change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * Subscribe P2P local device change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDeviceChange(callback: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribe P2P local device change events.
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Unsubscribe P2P local device change events.
   * @param { 'p2pDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribe P2P local device change events.
   * @param { Callback<WifiP2pDevice> } [callback] - the callback of off
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDeviceChange(callback?: Callback<WifiP2pDevice>): void;

  /**
   * Subscribe P2P peer device change events.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Subscribe P2P peer device change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribe P2P peer device change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPeerDeviceChange(callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribe P2P peer device change events.
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * Unsubscribe P2P peer device change events.
   * @param { 'p2pPeerDeviceChange' } type - event name.
   * @param { Callback<WifiP2pDevice[]> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribe P2P peer device change events.
   * @param { Callback<WifiP2pDevice[]> } [callback] - the callback of off
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPeerDeviceChange(callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - event name.
   * @param { Callback<void> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * Subscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pPersistentGroupChange(callback: Callback<void>): void;

  /**
   * Unsubscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - event name.
   * @param { Callback<void> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * Unsubscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPersistentGroupChange(callback?: Callback<void>): void;

  /**
   * Subscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - event name.
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * Subscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function onP2pDiscoveryChange(callback: Callback<int>): void;

  /**
   * Unsubscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - event name.
   * @param { Callback<number> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * Unsubscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDiscoveryChange(callback?: Callback<int>): void;
  /**
   * Wi-Fi device address( mac / bssid ) type.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 10
   */

  /**
   * Wi-Fi device address( mac / bssid ) type.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceAddressType {
    /**
     * random device address
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 10
     */

    /**
     * random device address
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RANDOM_DEVICE_ADDRESS,

    /**
     * real device address
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 10
     */

    /**
     * real device address
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REAL_DEVICE_ADDRESS,
  }

  /**
   * Wi-Fi EAP method.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum EapMethod {
    /**
     * EAP NONE
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_NONE,
    /**
     * EAP PEAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PEAP,
    /**
     * EAP TLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TLS,
    /**
     * EAP TTLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TTLS,
    /**
     * EAP PWD
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PWD,
    /**
     * EAP SIM
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_SIM,
    /**
     * EAP AKA
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA,
    /**
     * EAP AKA PRIME
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA_PRIME,
    /**
     * EAP UNAUTH TLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_UNAUTH_TLS
  }

  /**
   * Wi-Fi phase 2 method.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum Phase2Method {
    /**
     * Phase2 NONE
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_NONE,
    /**
     * Phase2 PAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_PAP,
    /**
     * Phase2 MSCHAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAP,
    /**
     * Phase2 MSCHAPV2
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAPV2,
    /**
     * Phase2 GTC
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_GTC,
    /**
     * Phase2 SIM
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_SIM,
    /**
     * Phase2 AKA
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA,
    /**
     * Phase2 AKA+
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA_PRIME
  }

  /**
   * Wi-Fi disconnected reason.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DisconnectedReason {
    /**
     * Default reason
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_DEFAULT = 0,

    /**
     * Password is wrong
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_WRONG_PWD = 1,

    /**
     * The number of router's connection reaches the maximum number limit
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_CONNECTION_FULL = 2
  }

  /**
   * Wi-Fi detail state.
   * @enum { int } WifiDetailState
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiDetailState {
    /**
     * state is unknown
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * wifi is closed
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * wifi is opened
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATED = 1,

    /**
     * wifi is opening
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATING = 2,

    /**
     * wifi is closing
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATING = 3,

    /**
     * wifi sta is entering semi active
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVATING = 4,

    /**
     * wifi sta is semi active
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVE = 5,
  }

  /**
   * Wi-Fi Proxy method.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ProxyMethod {
    /**
     * No proxy is to be used.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_NONE = 0,

    /**
     * Use auto configured proxy.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_AUTO = 1,

    /**
     * Use manual configured proxy.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_MANUAL = 2
  }

  /**
   * Wi-Fi Category.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiCategory {
    /**
     * Default.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 1,

    /**
     * Wifi6.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6 = 2,

    /**
     * Wifi6+.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6_PLUS = 3,

    /**
     * Wifi7.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7 = 4,

    /**
     * Wifi7+.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7_PLUS = 5
  }

  /**
   * Wi-Fi link type.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 18 dynamic
   * @since 23 static
   */
  enum WifiLinkType {
    /**
     * Default link.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_LINK = 0,

    /**
     * Wi-Fi7 single link.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_SINGLE_LINK = 1,

    /**
     * Wi-Fi7 MLSR.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_MLSR = 2,

    /**
     * Wi-Fi7 EMLSR.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_EMLSR = 3,

    /**
     * Wi-Fi7 STR.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_STR = 4
  }

  /**
   * Wi-Fi Proxy config.
   * @typedef WifiProxyConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiProxyConfig {
    /** 
     * Wi-Fi proxy method 
     * @type { ?ProxyMethod }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyMethod?: ProxyMethod;

    /** 
     * PAC web address for auto configured proxy.
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    pacWebAddress?: string;

    /** 
     * Server host name for manual configured proxy. 
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverHostName?: string;

    /** 
     * Server port for manual configured proxy. 
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverPort?: int;

    /** 
     * Exclusion objects for manual configured proxy. objects are separated by ','.
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionObjects?: string;
  }

  /**
   * Wi-Fi EAP config.
   * @typedef WifiEapConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiEapConfig {
    /** 
     * EAP authentication method 
     * @type { EapMethod }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapMethod: EapMethod;

    /** 
     * Phase 2 authentication method
     * @type { Phase2Method }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    phase2Method: Phase2Method;

    /** 
     * The identity
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    identity: string;

    /** 
     * Anonymous identity
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    anonymousIdentity: string;

    /** 
     * Password
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    password: string;

    /** 
     * CA certificate alias
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caCertAlias: string;

    /** 
     * CA certificate path
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caPath: string;

    /** 
     * Client certificate alias
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    clientCertAlias: string;

    /** 
     * content of user's certificate
     * @type { Uint8Array }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certEntry: Uint8Array;

    /** 
     * Password of user's certificate
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certPassword: string;

    /** 
     * Alternate subject match
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    altSubjectMatch: string;

    /** 
     * Domain suffix match
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    domainSuffixMatch: string;

    /** 
     * Realm for Passpoint credential
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    realm: string;

    /** 
     * Public Land Mobile Network of the provider of Passpoint credential
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    plmn: string;

    /** 
     * Sub ID of the SIM card
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapSubId: int;
  }

  /**
   * Wi-Fi device configuration information.
   * @typedef WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Wi-Fi device configuration information.
   * @typedef WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiDeviceConfig {
    /** 
     * Wi-Fi SSID: the maximum length is 32.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Wi-Fi SSID: the maximum length is 32.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6.
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Wi-Fi bssid(MAC): the length is 6.
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid?: string;

    /**
     * Wi-Fi bssid type.
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    /**
     * Wi-Fi bssid type.
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssidType?: DeviceAddressType;

    /**
     * Wi-Fi key: maximum length is 64.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Wi-Fi key: maximum length is 64.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * Hide SSID or not, false(default): not hide
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHiddenSsid?: boolean;

    /**
     * Security type: reference definition of WifiSecurityType
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */

	/**
     * Security type: reference definition of WifiSecurityType
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * The UID of the Wi-Fi configuration creator.
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    creatorUid?: int;

    /**
     * Disable reason
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    disableReason?: int;

    /**
     * Allocated networkId
     * @type { ?number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    /**
     * Allocated networkId
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 22 dynamic
     * @since 23 static
     */
    netId?: int;

    /**
     * Random mac type
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacType?: int;

    /**
     * Random mac address, the length is 6.
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacAddr?: string;

    /**
     * IP Type
     * @type { ?IpType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipType?: IpType;

    /**
     * Static IP family: 0 - IPv4, 1 - Ipv6.
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * IP config of static
     * @type { ?IpConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    staticIp?: IpConfig;

    /**
     * IPv6 config of static
     * @type { ?Ipv6Config }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    staticIpv6?: Ipv6Config;

    /**
     * EAP config info.
     * @type { ?WifiEapConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapConfig?: WifiEapConfig;

    /**
     * Proxy config.
     * @type { ?WifiProxyConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyConfig?: WifiProxyConfig;

    /**
     * WAPI config info.
     * @type { ?WifiWapiConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiConfig?: WifiWapiConfig;

    /**
     * Device config status: 0 - enabled, 1 - disabled, 2 - permanent disabled, 3 - unknown.
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    configStatus?: int;

    /**
     * Allow auto connect config: false - not, true - yes.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 17 dynamic
     * @since 23 static
     */
    isAutoConnectAllowed?: boolean;

    /**
     * Secure wifi detect config: false - not, true - yes.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isSecureWifi?: boolean;
  }

  /**
   * Wi-Fi WAPI config.
   * @typedef WifiWapiConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiWapiConfig {
    /**
     * WAPI pre-shared key type.
     * @type { WapiPskType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiPskType: WapiPskType;

    /**
     * WAPI AS certification.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiAsCert: string;

    /**
     * WAPI user certification.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiUserCert: string;
  }

  /**
   * Wi-Fi IP configuration information.
   * @typedef IpConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpConfig {
    /**
     * IP address.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * Gate way.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * Prefix length.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    prefixLength: int;

    /**
     * DNS servers.
     * @type { int[] }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dnsServers: int[];

    /**
     * Domains.
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi Ipv6 configuration information.
   * @typedef Ipv6Config
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface Ipv6Config {
    /**
     * IPv6 address.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    ipAddress: string;
 
    /**
     * Gate way.
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    gateway: string;
 
    /**
     * Prefix length.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    prefixLength: int;
 
    /**
     * DNS servers.
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    dnsServers: Array<string>;
 
    /**
     * Domains.
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi information elements.
   * @typedef WifiInfoElem
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiInfoElem {
    /**
     * Element id
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    eid: int;

    /**
     * Element content
     * @type { Uint8Array }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    content: Uint8Array;
  }

  /**
   * Describes the wifi channel width.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiChannelWidth {
    /**
     * 20MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_20MHZ = 0,

    /**
     * 40MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_40MHZ = 1,

    /**
     * 80MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ = 2,

    /**
     * 160MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_160MHZ = 3,

    /**
     * 80MHz plus.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ_PLUS = 4,

    /**
     * Invalid.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_INVALID
  }

  /**
   * Describes the scanned Wi-Fi information.
   * @typedef WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * Describes the scanned Wi-Fi information.
   * @typedef WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiScanInfo {
    /**
     * Wi-Fi SSID: the maximum length is 32 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Wi-Fi SSID: the maximum length is 32 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Wi-Fi bssid(MAC): the length is 6
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * Wi-Fi bssid type
     * @type { DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    /**
     * Wi-Fi bssid type
     * @type { DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssidType: DeviceAddressType;

    /**
     * Hotspot capability
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    capabilities: string;

    /**
     * Security type: reference definition of WifiSecurityType
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Security type: reference definition of WifiSecurityType
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * Received signal strength indicator (RSSI)
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Received signal strength indicator (RSSI)
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * Frequency band, 1: 2.4G, 2: 5G
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * Frequency
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * Frequency
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Channel width
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    channelWidth: int;

    /**
     * Center frequency 0.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency0: int;

    /**
     * Center frequency 1.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency1: int;

    /**
     * Information elements.
     * @type { Array<WifiInfoElem> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    infoElems: Array<WifiInfoElem>;

    /**
     * Time stamp
     * @type { long }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Supported wifi category
     * @type { WifiCategory }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * Whether the Wi-Fi hotspot is HiLink network.
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * Whether the Wi-Fi hotspot is HiLinkPro network.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;
  }

  /**
   * Describes the wifi security type.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9
   */
  /**
   * Describes the wifi security type.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiSecurityType {
    /**
     * Invalid security type
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * Open
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    /**
     * Open
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /** 
     * Wired Equivalent Privacy (WEP)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP authentication.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * SUITE_B_192 192 bit level.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * Opportunistic Wireless Encryption.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI certificate to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI pre-shared key to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * Describes the WAPI pre-shared key Type.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum WapiPskType {
    /**
     * ASCII character type of WAPI pre-shared key.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_ASCII = 0,

    /**
     * HEX character type of WAPI pre-shared key.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_HEX = 1
  }

  /**
   * Wi-Fi band type.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiBandType {
    /**
     * Default.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_NONE,

    /**
     * Band 2.4G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_2G,

    /**
     * Band 5G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_5G,

    /**
     * Band 6G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_6G,

    /**
     * Band 60G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_60G
  }

  /**
   * Wi-Fi standard.
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiStandard {
    /**
     * Undefined
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_UNDEFINED,

    /**
     * Wifi 802.11a
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11A,

    /**
     * Wifi 802.11b
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11B,

    /**
     * Wifi 802.11g
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11G,

    /**
     * Wifi 802.11n
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11N,

    /**
     * Wifi 802.11ac
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AC,

    /**
     * Wifi 802.11ax
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AX,

    /**
     * Wifi 802.11ad
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_11AD
  }

  /**
   * Wi-Fi connection information.
   * @typedef WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * Wi-Fi connection information.
   * @typedef WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
   
  interface WifiLinkedInfo {
    /**
     * The SSID of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * The SSID of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * The BSSID of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * The BSSID of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * The ID(uniquely identifies) of a Wi-Fi connection.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * The RSSI(dBm) of a Wi-Fi access point.
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * The RSSI(dBm) of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * The frequency band of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * The speed of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    linkSpeed: int;

    /**
     * The rx speed of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    rxLinkSpeed: int;

    /**
     * Max tx speed of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedTxLinkSpeed: int;

    /**
     * Max rx speed of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedRxLinkSpeed: int;

    /**
     * The frequency of a Wi-Fi access point.
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * The frequency of a Wi-Fi access point.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden.
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * Whether this Wi-Fi connection restricts the data volume.
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isRestricted: boolean;

    /**
     * The load value of this Wi-Fi connection. A greater value indicates a higher load.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    chload: int;

    /**
     * The signal-to-noise ratio (SNR) of this Wi-Fi connection.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    snr: int;

    /**
     * Type of macAddress: 0 - real mac, 1 - random mac.
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macType: int;

    /**
     * The Wi-Fi MAC address of a device. 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * The IP address of this Wi-Fi connection. 
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * The state of the supplicant of this Wi-Fi connection. 
     * @type { SuppState }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    suppState: SuppState;

    /**
     * The state of this Wi-Fi connection. 
     * @type { ConnState }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    connState: ConnState;

    /**
     * Channel width of the connected hotspot. 
     * @type { WifiChannelWidth }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    channelWidth: WifiChannelWidth;

    /**
     * Wifi standard of current connection. 
     * @type { WifiStandard }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    wifiStandard: WifiStandard;

    /**
     * Supported wifi category
     * @type { WifiCategory }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * Whether the Wi-Fi hotspot is HiLink network.
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * Whether the Wi-Fi hotspot is HiLinkPro network.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;

    /**
     * Wi-Fi link type
     * @type { ?WifiLinkType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    wifiLinkType?: WifiLinkType;
  }

  /**
   * Wi-Fi IP information.
   * @typedef IpInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpInfo {
    /**
     * The IP address of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * The gateway of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * The network mask of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    netmask: int;

    /**
     * The primary DNS server IP address of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDns: int;

    /**
     * The secondary DNS server IP address of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    secondDns: int;

    /**
     * The DHCP server IP address of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    serverIp: int;

    /**
     * The IP address lease duration of the Wi-Fi connection
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    leaseDuration: int;
  }

  /**
   * Wi-Fi IPv6 information.
   * @typedef Ipv6Info
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface Ipv6Info {
    /**
     * The link IPv6 address of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    linkIpv6Address: string;

    /**
     * The global IPv6 address of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    globalIpv6Address: string;

    /**
     * The rand Global IPv6 address of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    randomGlobalIpv6Address: string;

    /**
     * The unique IPv6 address of the Wi-Fi connection
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueIpv6Address?: string;

    /**
     * The rand unique IPv6 address of the Wi-Fi connection
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    randomUniqueIpv6Address?: string;

    /**
     * The gateway of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    gateway: string;

    /**
     * The network mask of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    netmask: string;

    /**
     * The primary DNS server IPV6 address of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    primaryDNS: string;

    /**
     * The secondary DNS server IPV6 address of the Wi-Fi connection
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    secondDNS: string;
  }

  /**
   * Wi-Fi hotspot configuration information.
   * @typedef HotspotConfig
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HotspotConfig {
    /**
     * The SSID of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * The encryption mode of the Wi-Fi hotspot
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * The frequency band of the Wi-Fi hotspot
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * The channel of the Wi-Fi hotspot.
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    channel?: int;

    /**
     * The password of the Wi-Fi hotspot
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * The maximum number of connections allowed by the Wi-Fi hotspot
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    maxConn: int;

    /**
     * IP address of the dhcp server, it's a string, For example 192.168.43.1
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;
  }

  /**
   * Wi-Fi station information.
   * @typedef StationInfo
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface StationInfo {
    /**
     * The network name of the Wi-Fi client
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * The MAC address of the Wi-Fi client
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * The MAC address type of the Wi-Fi client
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    macAddressType?: DeviceAddressType;

    /**
     * The IP address of the Wi-Fi client
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: string;
  }

  /**
   * Wi-Fi IP type enumeration.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum IpType {
    /**
     * Use statically configured IP settings
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC,

    /**
     * Use dynamically configured IP settings
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DHCP,

    /**
     * No IP details are assigned
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * The state of the supplicant enumeration.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SuppState {
    /**
     * The supplicant is not associated with or is disconnected from the AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * The network interface is disabled.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERFACE_DISABLED,

    /**
     * The supplicant is disabled.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE,

    /**
     * The supplicant is scanning for a Wi-Fi connection.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * The supplicant is authenticating with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * The supplicant is associating with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATING,

    /**
     * The supplicant is associated with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATED,

    /**
     * The four-way handshake is ongoing.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * The group handshake is ongoing.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GROUP_HANDSHAKE,

    /**
     * All authentication is completed.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMPLETED,

    /**
     * Failed to establish a connection to the supplicant.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNINITIALIZED,

    /**
     * The supplicant is in an unknown or invalid state.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID
  }

  /**
   * The state of Wi-Fi connection enumeration.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ConnState {
    /**
     * The device is searching for an available AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * The Wi-Fi connection is being set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTING,

    /**
     * The Wi-Fi connection is being authenticated.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * The IP address of the Wi-Fi connection is being obtained.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    OBTAINING_IPADDR,

    /**
     * The Wi-Fi connection has been set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED,

    /**
     * The Wi-Fi connection is being torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTING,

    /**
     * The Wi-Fi connection has been torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * Failed to set up the Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * P2P device information.
   *
   * @typedef WifiP2pDevice
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pDevice {
    /**
     * Device name
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Device mac address
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * Device mac address type
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * Primary device type
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDeviceType: string;

    /**
     * Device status
     * @type { P2pDeviceStatus }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * Device group capabilities
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupCapabilities: int;
  }

  /**
   * P2P config.
   *
   * @typedef WifiP2PConfig
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2PConfig {
    /** 
     * Device mac address
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * Device mac address type
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * Group network ID. When creating a group, -1 indicates creates a temporary group,
     * -2: indicates creates a persistent group
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * The passphrase of this {@code WifiP2pConfig} instance 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * Group name 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * Group owner band
     * @type { GroupOwnerBand }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goBand: GroupOwnerBand;

    /**
     * Group owner frequency
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 dynamic&static
     */
    goFreq?: int;
  }

  /**
   * P2P group information.
   *
   * @typedef WifiP2pGroupInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pGroupInfo {
    /**
     * Indicates whether it is group owner
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isP2pGo: boolean;

    /**
     * Group owner information
     * @type { WifiP2pDevice }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    ownerInfo: WifiP2pDevice;

    /**
     * The group passphrase
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * Interface name
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     */
    interface: string;

    /**
     * Interface name
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 static
     */
    interfaceName: string;

    /**
     * Group name
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * Network ID
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * Frequency
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * Client list
     * @type { WifiP2pDevice[] }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    clientDevices: WifiP2pDevice[];

    /**
     * Group owner IP address
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goIpAddress: string;
  }

  /**
   * P2P connection status.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pConnectState {
    /**
     * p2p is disconnected 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED = 0,

    /**
     * p2p is connected 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 1
  }

  /**
   * P2P linked information.
   *
   * @typedef WifiP2pLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pLinkedInfo {
    /**
     * Connection status 
     * @type { P2pConnectState }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    connectState: P2pConnectState;

    /**
     * Indicates whether it is group owner
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isGroupOwner: boolean;

    /**
     * Group owner address
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupOwnerAddr: string;
  }

  /**
   * P2P device status.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pDeviceStatus {
    /** 
     * Indicate p2p device is connected.  
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 0,

    /** 
     * Indicate p2p device is invited.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    INVITED = 1,

    /**
     * Indicate p2p device is failed.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * Indicate p2p device is available.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    AVAILABLE = 3,

    /** 
     * Indicate p2p device is unavailable.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 4
  }

  /**
   * P2P group owner band.
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum GroupOwnerBand {
  /**
   * default band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_AUTO = 0,

  /**
   * 2.4G band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_2GHZ = 1,

  /**
   * 5G band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_5GHZ = 2
  }


   /**
   * Start Wi-Fi network detection
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function startWifiDetection(): void;
  
  /**
   * is random mac disabled
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } Returns {@code true} is random mac disabled; Returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 21 dynamic
   * @since 23 static
   */
  function isRandomMacDisabled(): boolean;
}

export default wifiManager;
