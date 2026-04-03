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

import type { Callback } from './@ohos.base';
import type radio from './@ohos.telephony.radio';
import type data from './@ohos.telephony.data';
import type call from './@ohos.telephony.call';
import type sim from './@ohos.telephony.sim';

/**
 * Monitors telephony state updates of a device, including updates of the network state,
 * signal strength, call state, the data link connection state and others.
 *
 * @namespace observer
 * @syscap SystemCapability.Telephony.StateRegistry
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace observer {
  /**
   * Describes the network registration state.
   *
   * @typedef { radio.NetworkState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type NetworkState = radio.NetworkState;

  /**
   * Describes the signal strength information.
   *
   * @typedef { radio.SignalInformation }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SignalInformation = radio.SignalInformation;

  /**
   * Describes current cell information.
   *
   * @typedef { radio.CellInformation }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  type CellInformation = radio.CellInformation;

  /**
   * Describes the cellular data link connection state.
   *
   * @typedef { data.DataConnectState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataConnectState = data.DataConnectState;

  /**
   * Describes the radio access technology.
   *
   * @typedef { radio.RadioTechnology }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type RatType = radio.RadioTechnology;

  /**
   * Describes the cellular data flow type.
   *
   * @typedef { data.DataFlowType }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataFlowType = data.DataFlowType;

  /**
   * Indicates the states of call.
   *
   * @typedef { call.CallState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CallState = call.CallState;

  /**
   * Indicates the SIM card types.
   *
   * @typedef { sim.CardType }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CardType = sim.CardType;

  /**
   * Indicates the SIM card states.
   *
   * @typedef { sim.SimState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SimState = sim.SimState;

  /**
   * Indicates the states of tel call.
   *
   * @typedef { call.TelCallState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   * @since 23 static
   */
  type TelCallState = call.TelCallState;

  /**
   * Indicates the states of carrier call.
   *
   * @typedef { call.CCallState }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  type CCallState = call.CCallState;

  /**
   * Indicates the result of network search.
   *
   * @typedef { radio.NetworkSearchRealTimeResult }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  type NetworkSearchRealTimeResult = radio.NetworkSearchRealTimeResult;

  /**
   * Callback when the network state corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - Event type. Indicates the networkStateChange event to be subscribed to.
   * @param { Callback<NetworkState> } callback - Indicates the callback for
   * getting an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  function on(type: 'networkStateChange', callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<NetworkState> } callback - Indicates the callback for
   *     getting an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - Event type. Indicates the networkStateChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   * an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6
   */
  /**
   * Callback when the network state corresponding to the monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - Event type. Indicates the networkStateChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   * an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * Cancel callback when the network state is updated.
   *
   * @param { 'networkStateChange' } type - Event type. Indicates the networkStateChange event to unsubscribe from.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   * an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void;

  /**
   * Cancel callback when the network state is updated.
   *
   * @param { Callback<NetworkState> } [callback] - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offNetworkStateChange(callback?: Callback<NetworkState>): void;

  /**
   * Callback when the signal strength corresponding to the default sim card is updated.
   *
   * @param { 'signalInfoChange' } type - Event type. Indicates the signalInfoChange event to be subscribed to.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to the default sim card is updated.
   *
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to a monitored {@code slotId} is updated.
   *
   * @param { 'signalInfoChange' } type - Event type. Indicates the signalInfoChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6
   */
  /**
   * Callback when the signal strength corresponding to a monitored {@code slotId} is updated.
   *
   * @param { 'signalInfoChange' } type - Event type. Indicates the signalInfoChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to a monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * Cancel callback when the signal strength is updated.
   *
   * @param { 'signalInfoChange' } type - Event type. Indicates the signalInfoChange event to unsubscribe from.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback to unsubscribe from
   * the signalInfoChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void;

  /**
   * Cancel callback when the signal strength is updated.
   *
   * @param { Callback<Array<SignalInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the signalInfoChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSignalInfoChange(callback?: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the cell information corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - Event type. Indicates the cellInfoChange event to be subscribed to.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to a monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - Event type. Indicates the cellInfoChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  /**
   * Callback when the cell information corresponding to a monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - Event type. Indicates the cellInfoChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   * an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to a monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * Cancel callback when the cell information is updated.
   *
   * @param { 'cellInfoChange' } type - Event type. Indicates the cellInfoChange event to unsubscribe from.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback to unsubscribe from
   * the cellInfoChange event.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function off(type: 'cellInfoChange', callback?: Callback<Array<CellInformation>>): void;

  /**
   * Cancel callback when the cell information is updated.
   *
   * @param { Callback<Array<CellInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the cellInfoChange event.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offCellInfoChange(callback?: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the default sim card is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to be subscribed to.
   * @param { Callback<{ state: DataConnectState, network: RatType }> } callback - Indicates the callback for
   * getting the cellular data link connection state, and networkType Indicates the radio access technology
   * for cellular data services.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7
   */
  /**
   * Callback when the cellular data link connection state corresponding to the default sim card is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to be subscribed to.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   * getting the cellular data link connection state, and networkType Indicates the radio access technology
   * for cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the default sim card is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology
   *     for cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<{ state: DataConnectState, network: RatType }> } callback - Indicates the callback for
   * getting the cellular data link connection state, and networkType Indicates the radio access technology for
   * cellular data services.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7
   */
  /**
   * Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   * getting the cellular data link connection state, and networkType Indicates the radio access technology for
   * cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology for
   *     cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Cancel callback when the cellular data link connection state is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to unsubscribe from.
   * @param { Callback<{ state: DataConnectState, network: RatType }> } callback - Indicates the callback to unsubscribe
   * from the cellularDataConnectionStateChange event.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7
   */
  /**
   * Cancel callback when the cellular data link connection state is updated.
   *
   * @param { 'cellularDataConnectionStateChange' } type - Event type. Indicates the cellularDataConnectionStateChange
   * event to unsubscribe from.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback to unsubscribe
   * from the cellularDataConnectionStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * Cancel callback when the cellular data link connection state is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } [callback] - Indicates the callback to unsubscribe
   *     from the cellularDataConnectionStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataConnectionStateChange(callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the default sim card is updated.
   *
   * @param { 'cellularDataFlowChange' } type - Event type. Indicates the cellularDataFlowChange event to be subscribed to.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the default sim card is updated.
   *
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'cellularDataFlowChange' } type - Event type. Indicates the cellularDataFlowChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7
   */
  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'cellularDataFlowChange' } type - Event type. Indicates the cellularDataFlowChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * Cancel callback when the uplink and downlink data flow state of cellular data services is updated.
   *
   * @param { 'cellularDataFlowChange' } type - Event type. Indicates the cellularDataFlowChange event to unsubscribe from.
   * @param { Callback<DataFlowType> } callback - Indicates the callback to unsubscribe from
   * the cellularDataFlowChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void;

  /**
   * Cancel callback when the uplink and downlink data flow state of cellular data services is updated.
   *
   * @param { Callback<DataFlowType> } [callback] - Indicates the callback to unsubscribe from
   *     the cellularDataFlowChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataFlowChange(callback?: Callback<DataFlowType>): void;

  /**
   * Callback when the call state corresponding to the default sim card is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to be subscribed to.
   * @param { Callback<{ state: CallState, number: string }> } callback - Indicates the callback for
   * getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6
   */
  /**
   * Callback when the call state corresponding to the default sim card is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to be subscribed to.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   * getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   */
  function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the default sim card is updated.
   *
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<{ state: CallState, number: string }> } callback - Indicates the callback for
   * getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6
   */
  /**
   * Callback when the call state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   * getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   */
  function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * Cancel callback when the call state is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to unsubscribe from.
   * @param { Callback<{ state: CallState, number: string }> } callback - Indicates the callback to
   * unsubscribe from the callStateChange event.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6
   */
  /**
   * Cancel callback when the call state is updated.
   *
   * @param { 'callStateChange' } type - Event type. Indicates the callStateChange event to unsubscribe from.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback to
   * unsubscribe from the callStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   */
  function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void;

  /**
   * Cancel callback when the call state is updated.
   *
   * @param { Callback<CallStateInfo> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChange(callback?: Callback<CallStateInfo>): void;

  /**
   * Callback when the telCall state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'callStateChangeEx' } type - Event type. Indicates the callStateChangeEx event to be subscribed to.
   * @param { Callback<TelCallState> } callback - Indicates the callback for
   *     getting the telCall state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * Callback when the telCall state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { Callback<TelCallState> } callback - Indicates the callback for
   *     getting the telCall state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChangeEx(callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * Cancel callback when the telCall state is updated.
   *
   * @param { 'callStateChangeEx' } type - Event type. Indicates the callStateChangeEx event to unsubscribe from.
   * @param { Callback<TelCallState> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChangeEx event.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void;

  /**
   * Cancel callback when the telCall state is updated.
   *
   * @param { Callback<TelCallState> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChangeEx event.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChangeEx(callback?: Callback<TelCallState>): void;

  /**
   * Called when the carrier call state changes.
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } callback - Indicates the callback for getting the carrier call state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void;

  /**
   * Unsubscribes from the callback for listening to the carrier call state.
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } [callback] - Indicates the callback to unsubscribe from.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offCCallStateChange(callback?: Callback<CCallStateInfo>): void;

  /**
   * Callback when the sim state corresponding to the default sim card is updated.
   *
   * @param { 'simStateChange' } type - Event type. Indicates the simStateChange event to be subscribed to.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * including state Indicates the sim state, and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  function on(type: 'simStateChange', callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the default sim card is updated.
   *
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   *     including state Indicates the sim state, and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'simStateChange' } type - Event type. Indicates the simStateChange event to be subscribed to.
   * @param { object } options - Indicates the ID of the target card slot.
   * The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7
   */
  /**
   * Callback when the sim state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { 'simStateChange' } type - Event type. Indicates the simStateChange event to be subscribed to.
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
   * Cancel callback when the sim state is updated.
   *
   * @param { 'simStateChange' } type - Event type. Indicates the simStateChange event to unsubscribe from.
   * @param { Callback<SimStateData> } callback - Indicates the callback to unsubscribe from the simStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  function off(type: 'simStateChange', callback?: Callback<SimStateData>): void;

  /**
   * Cancel callback when the sim state is updated.
   *
   * @param { Callback<SimStateData> } [callback] - Indicates the callback to unsubscribe from the simStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSimStateChange(callback?: Callback<SimStateData>): void;

  /**
   * Receives an ICC account change. This callback is invoked when the ICC account updates
   * and the observer is added to monitor the updates.
   *
   * @param { 'iccAccountInfoChange' } type - iccAccountInfoChange
   * @param { Callback<void> } callback - including state Indicates the ICC account information,
   * and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   * @since 23 static
   */
  function on(type: 'iccAccountInfoChange', callback: Callback<void>): void;

  /**
   * Receives an ICC account change. This callback is invoked when the ICC account updates
   * and the observer is added to monitor the updates.
   *
   * @param { Callback<void> } callback - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onIccAccountInfoChange(callback: Callback<void>): void;

  /**
   * Cancel to receive an ICC account change.
   *
   * @param { 'iccAccountInfoChange' } type - iccAccountInfoChange
   * @param { Callback<void> } callback - including state Indicates the ICC account information,
   * and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   * @since 23 static
   */
  function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void;

  /**
   * Cancel to receive an ICC account change.
   *
   * @param { Callback<void> } [callback] - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offIccAccountInfoChange(callback?: Callback<void>): void;

  /**
   * Indicates SIM card type and status.
   *
   * @interface SimStateData
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimStateData {
    /**
     * Indicates the SIM card type.
     *
     * @type { CardType }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    type: CardType;

    /**
     * Indicates the SIM card states.
     *
     * @type { SimState }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    state: SimState;

    /**
     * Indicates the SIM card lock type.
     *
     * @type { LockReason }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    reason: LockReason;
  }

  /**
   * Indicates call state and number.
   *
   * @interface CallStateInfo
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallStateInfo {
    /**
     * Indicates call state.
     *
     * @type { CallState }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: CallState;

    /**
     * Indicates call number.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     */
    number: string;

    /**
     * Indicates call number.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 static
     */
    teleNumber: string;
  }

  /**
   * Indicates carrier call state and number.
   *
   * @interface CCallStateInfo
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  export interface CCallStateInfo {
    /**
     * Indicates carrier call state.
     *
     * @type { CCallState }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    state: CCallState;

    /**
     * Indicates carrier call number.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    teleNumber: string;
  }

  /**
   * Indicates cellular data connect state and technology type.
   *
   * @interface DataConnectionStateInfo
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DataConnectionStateInfo {
    /**
     * Indicates cellular data connect state.
     *
     * @type { DataConnectState }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: DataConnectState;

    /**
     * Indicates technology type.
     *
     * @type { RatType }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    network: RatType;
  }

  /**
   * Indicates observer options.
   *
   * @interface ObserverOptions
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ObserverOptions {
    /**
     * Indicates the ID of the target card slot.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    slotId: int;
  }

  /**
   * Enum for SIM card lock type.
   *
   * @enum { int }
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 8 dynamic
   * @since 23 static
   */
  export enum LockReason {
    /**
     * Indicates no SIM lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NONE = 0,

    /**
     * Indicates the PIN lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN = 1,

    /**
     * Indicates the PUK lock.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PUK = 2,

    /**
     * Indicates network personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PIN = 3,

    /**
     * Indicates network personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PUK = 4,

    /**
     * Indicates network subset personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PIN = 5,

    /**
     * Indicates network subset personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PUK = 6,

    /**
     * Indicates service provider personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PIN = 7,

    /**
     * Indicates service provider personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PUK = 8,

    /**
     * Indicates corporate personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PIN = 9,

    /**
     * Indicates corporate personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PUK = 10,

    /**
     * Indicates SIM/USIM personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PIN = 11,

    /**
     * Indicates SIM/USIM personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PUK = 12
  }

  /**
   * Subscribe to sim active state change events using a callback-based approach as an asynchronous method.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the ID of the target card slot.
   * @param { Callback< boolean> } callback - Indicates the callback for sim active state
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void;

  /**
   * Cancel callback when the sim active state is updated.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { Callback<boolean> } [callback] - Indicates the callback to unsubscribe from the simActiveStateChange event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offGetSimActiveState(callback?: Callback<boolean>): void;
}

export default observer;