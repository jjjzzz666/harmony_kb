/*
 * Copyright (C) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * Provides methods related to cellular data services.
 *
 * @namespace data
 * @syscap SystemCapability.Telephony.CellularData
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace data {
  /**
   * Get the default cellular data card.
   *
   * @param { AsyncCallback<int> } callback - Indicates the default cellular data slot id.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotId(callback: AsyncCallback<int>): void;

  /**
   * Get the default cellular data card.
   *
   * @returns { Promise<int> } Returns the default cellular data slot id.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotId(): Promise<int>;

  /**
   * Get the default cellular data card.
   *
   * @returns { int } Returns default cellular data slot id.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotIdSync(): int;

  /**
   * Switch cellular data services to another card, without changing the default settings.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of setDefaultCellularDataSlotId.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Internal error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultCellularDataSlotId(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Switch cellular data services to another card, without changing the default settings.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the setDefaultCellularDataSlotId.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Internal error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultCellularDataSlotId(slotId: int): Promise<void>;

  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @param { AsyncCallback<DataFlowType> } callback - Indicates the data flow type.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   */
  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<DataFlowType> } callback - Indicates the data flow type.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 22 dynamic
   * @since 23 static
   */
  function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void;

  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @returns { Promise<DataFlowType> } Returns the data flow type.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   */
  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<DataFlowType> } Returns the data flow type.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 22 dynamic
   * @since 23 static
   */
  function getCellularDataFlowType(): Promise<DataFlowType>;

  /**
   * Obtain the connection state of the PS domain.
   *
   * @param { AsyncCallback<DataConnectState> } callback - Indicates the callback for getting the connection state,
   *     which can be any of the following:
   *     <ul>
   *     <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   *     <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   *     </ul>
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   */
  /**
   * Obtain the connection state of the PS domain.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<DataConnectState> } callback - Indicates the callback for getting the connection state,
   *     which can be any of the following:
   *     <ul>
   *     <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   *     <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   *     </ul>
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 22 dynamic
   * @since 23 static
   */
  function getCellularDataState(callback: AsyncCallback<DataConnectState>): void;

  /**
   * Obtain the connection state of the PS domain.
   *
   * @returns { Promise<DataConnectState> } Returns the connection state,
   *     which can be any of the following:
   *     <ul>
   *     <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   *     <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   *     </ul>
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   */
  /**
   * Obtain the connection state of the PS domain.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<DataConnectState> } Returns the connection state,
   *     which can be any of the following:
   *     <ul>
   *     <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   *     <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   *     <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   *     <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   *     </ul>
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 22 dynamic
   * @since 23 static
   */
  function getCellularDataState(): Promise<DataConnectState>;

  /**
   * Check whether cellular data services are enabled.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for checking whether cellular data services
   * are enabled. Returns {@code true} if cellular data services are enabled; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Check whether cellular data services are enabled.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } Returns {@code true} if cellular data services are enabled.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataEnabled(): Promise<boolean>;

  /**
   * Check whether cellular data services are enabled.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } Returns {@code true} if cellular data services are enabled.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 12 dynamic
   * @since 23 static
   */
  function isCellularDataEnabledSync(): boolean;

  /**
   * Enable cellular data services.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of enableCellularData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularData(callback: AsyncCallback<void>): void;

  /**
   * Enable cellular data services.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } The promise returned by the enableCellularData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularData(): Promise<void>;

  /**
   * Disable cellular data services.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - The callback of disableCellularData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularData(callback: AsyncCallback<void>): void;

  /**
   * Disable cellular data services.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } The promise returned by the disableCellularData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularData(): Promise<void>;

  /**
   * Check whether roaming is enabled for cellular data services.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for checking whether roaming is enabled
   * for cellular data services. Returns {@code true} if roaming is enabled for cellular data services;
   * returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabled(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Check whether roaming is enabled for cellular data services.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<boolean> } Returns {@code true} if roaming is enabled for cellular data services.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabled(slotId: int): Promise<boolean>;

  /**
   * Check whether roaming is enabled for cellular data services.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { boolean } Returns {@code true} if roaming is enabled for cellular data services.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   * 2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 12 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabledSync(slotId: int): boolean;

  /**
   * Enable cellular data roaming.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of enableCellularDataRoaming.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Enable cellular data roaming.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the enableCellularDataRoaming.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularDataRoaming(slotId: int): Promise<void>;

  /**
   * Disable cellular data roaming.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of disableCellularDataRoaming.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Disable cellular data roaming.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of a card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the disableCellularDataRoaming.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Internal error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularDataRoaming(slotId: int): Promise<void>;

  /**
   * Obtains the default cellular data SIM ID.
   *
   * @returns { int } Returns the SIM ID of the default cellular data sim and SIM ID will increase from 1.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSimId(): int;

  /**
   * Query all APN info.
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @returns { Promise<Array<ApnInfo>> } Returns all APN info of default cellular data card.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function queryAllApns(): Promise<Array<ApnInfo>>;

  /**
   * Get Active APN's Name.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<string> } Returns the name of the active APN or null if cellular network is not active.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 20 dynamic
   * @since 23 static
   */
  function getActiveApnName(): Promise<string>;

  /**
   * Query APN IDs.
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @param { ApnInfo } apnInfo - The APN information that needs to be queried.
   * @returns { Promise<Array<int>> } Returns IDs of all APNs that meet the query conditions.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function queryApnIds(apnInfo: ApnInfo): Promise<Array<int>>;

  /**
   * Set preferred APN.
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @param { int } apnId - The APN ID which is used to be set.
   * @returns { Promise<boolean> } Returns {@code true} if preferred APN set success; returns {@code false} otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function setPreferredApn(apnId: int): Promise<boolean>;

  /**
   * Defines the APN info.
   *
   * @interface ApnInfo
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  interface ApnInfo {
    /**
     * Indicates APN name.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    apnName: string;
    /**
     * Indicates APN.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    apn: string;
    /**
     * Indicates APN mcc.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mcc: string;
    /**
     * Indicates APN mcc.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mnc: string;
    /**
     * Indicates APN user.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    user?: string;
    /**
     * Indicates APN type.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    type?: string;
    /**
     * Indicates APN proxy.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    proxy?: string;
    /**
     * Indicates APN mmsproxy.
     *
     * @type { ?string }
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mmsproxy?: string;
  }

  /**
   * Describes the cellular data flow type.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DataFlowType {
    /**
     * Indicates that there is no uplink or downlink data.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_NONE = 0,

    /**
     * Indicates that there is only downlink data.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_DOWN = 1,

    /**
     * Indicates that there is only uplink data.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_UP = 2,

    /**
     * Indicates that there is uplink and downlink data.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_UP_DOWN = 3,

    /**
     * Indicates that there is no uplink or downlink data, and the bottom-layer link is in the dormant state.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_DORMANT = 4
  }

  /**
   * Describes the cellular data link connection state.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DataConnectState {
    /**
     * Indicates that a cellular data link is unknown.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_UNKNOWN = -1,

    /**
     * Indicates that a cellular data link is disconnected.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_DISCONNECTED = 0,

    /**
     * Indicates that a cellular data link is being connected.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_CONNECTING = 1,

    /**
     * Indicates that a cellular data link is connected.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_CONNECTED = 2,

    /**
     * Indicates that a cellular data link is suspended.
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_SUSPENDED = 3
  }
}

export default data;
