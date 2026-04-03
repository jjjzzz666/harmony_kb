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
import Context from './application/Context';

/**
 * Provides interfaces to manage network policy rules.
 * @namespace policy
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10 dynamic
 */
declare namespace policy {
  /**
   * Get network bear type.
   * @typedef { connection.NetBearType }
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  type NetBearType = connection.NetBearType;

  /**
   * Control if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - Allow applications to use data on background.
   * @param { AsyncCallback<void> } callback - the callback of setBackgroundAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setBackgroundAllowed(isAllowed: boolean, callback: AsyncCallback<void>): void;
  
  /**
   * Control if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - Allow applications to use data on background.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setBackgroundAllowed(isAllowed: boolean): Promise<void>;

  /**
   * Get the status if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<boolean> } callback - the callback of allowed or not to use data on background.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isBackgroundAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Get the status if applications can use data on background.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isBackgroundAllowed(): Promise<boolean>;

  /**
   * Get the background network policy for the specified uid.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { AsyncCallback<NetBackgroundPolicy> } callback - the callback of getBackgroundPolicyByUid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getBackgroundPolicyByUid(uid: number, callback: AsyncCallback<NetBackgroundPolicy>): void;

  /**
   * Get the background network policy for the specified uid.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @returns { Promise<NetBackgroundPolicy> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getBackgroundPolicyByUid(uid: number): Promise<NetBackgroundPolicy>;

  /**
   * Set the policy for the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - the specified UID of application.
   * @param { NetUidPolicy } policy - the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @param { AsyncCallback<void> } callback - the callback of setPolicyByUid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPolicyByUid(uid: number, policy: NetUidPolicy, callback: AsyncCallback<void>): void;

  /**
   * Set the policy for the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - the specified UID of application.
   * @param { NetUidPolicy } policy - the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPolicyByUid(uid: number, policy: NetUidPolicy): Promise<void>;

  /**
   * Query the policy of the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - the specified UID of application.
   * @param { AsyncCallback<NetUidPolicy> } callback - the callback of getPolicyByUid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPolicyByUid(uid: number, callback: AsyncCallback<NetUidPolicy>): void;

  /**
   * Query the policy of the specified UID.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - the specified UID of application.
   * @returns { Promise<NetUidPolicy> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPolicyByUid(uid: number): Promise<NetUidPolicy>;

  /**
   * Query the application UIDs of the specified policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @param { AsyncCallback<Array<number>> } callback - the callback of getUidsByPolicy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getUidsByPolicy(policy: NetUidPolicy, callback: AsyncCallback<Array<number>>): void;

  /**
   * Query the application UIDs of the specified policy.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - the policy of the current UID of application.For details, see {@link NetUidPolicy}.
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getUidsByPolicy(policy: NetUidPolicy): Promise<Array<number>>;

  /**
   * Get the status whether the uid app can access the metered network or non-metered network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { boolean } isMetered - Indicates metered network or non-metered network.
   * @param { AsyncCallback<boolean> } callback - the callback of isUidNetAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: number, isMetered: boolean, callback: AsyncCallback<boolean>): void;

  /**
   * Get the status whether the uid app can access the metered network or non-metered network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { boolean } isMetered - Indicates metered network or non-metered network.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error. 
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: number, isMetered: boolean): Promise<boolean>;

  /**
   * Get the status of whether the specified uid can access the specified network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { string } iface - The specified network interface name.
   * @param { AsyncCallback<boolean> } callback - the callback of isUidNetAllowed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: number, iface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Get the status of whether the specified uid can access the specified network.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { string } iface - The specified network interface name.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: number, iface: string): Promise<boolean>;

  /**
   * Set metered network quota policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - Indicates {@link NetQuotaPolicy}.
   * @param { AsyncCallback<void> } callback - the callback of setNetQuotaPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>, callback: AsyncCallback<void>): void;

  /**
   * Set metered network quota policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - Indicates {@link NetQuotaPolicy}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>): Promise<void>;

  /**
   * Reset the specified network management policy.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iccid - Indicates the specified SIM that is valid when netType is cellular.
   *     <br>Value range:(0, 1024]
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function restoreAllPolicies(iccid: string): Promise<void>;

  /**
   * Get metered network quota policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<NetQuotaPolicy>> } callback - the callback of getNetQuotaPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getNetQuotaPolicies(callback: AsyncCallback<Array<NetQuotaPolicy>>): void;

  /**
   * Get metered network quota policies.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<NetQuotaPolicy>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getNetQuotaPolicies(): Promise<Array<NetQuotaPolicy>>;

  /**
   * Update the policy when the quota reaches the upper limit.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - {@link NetBearType}.
   * @param { string } simId - Specify the matched simId of quota policy when netType is cellular.
   * @param { RemindType } remindType - {@link RemindType}.
   * @param { AsyncCallback<void> } callback - the callback of updateRemindPolicy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType, callback: AsyncCallback<void>): void;

  /**
   * Update the policy when the quota reaches the upper limit.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - {@link NetBearType}.
   * @param { string } simId - Specify the matched simId of quota policy when netType is cellular.
   * @param { RemindType } remindType - {@link RemindType}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType): Promise<void>;

  /**
   * Set the list of uids that are allowed to access the Internet in hibernation mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids - The specified uids of application.
   * @param { boolean } isAllowed - Whether to allow Uids in the list to access the Internet.
   * @param { AsyncCallback<void> } callback - the callback of setDeviceIdleTrustlist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setDeviceIdleTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set the list of uids that are allowed to access the Internet in hibernation mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids - The specified uids of application.
   * @param { boolean } isAllowed - Whether to allow Uids in the list to access the Internet.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setDeviceIdleTrustlist(uids: Array<number>, isAllowed: boolean): Promise<void>;

  /**
   * Obtain the list of uids that are allowed to access the Internet in hibernation mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<number>> } callback - the callback of getDeviceIdleTrustlist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getDeviceIdleTrustlist(callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtain the list of uids that are allowed to access the Internet in hibernation mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getDeviceIdleTrustlist(): Promise<Array<number>>;

  /**
   * Set the list of uids that are allowed to access the Internet in power saving mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids - The specified uids of application.
   * @param { boolean } isAllowed - Whether to allow Uids in the list to access the Internet.
   * @param { AsyncCallback<void> } callback - the callback of setPowerSaveTrustlist.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set the list of uids that are allowed to access the Internet in power saving mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<number> } uids - The specified uids of application.
   * @param { boolean } isAllowed - Whether to allow Uids in the list to access the Internet.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean): Promise<void>;

  /**
   * Obtain the list of uids that are allowed to access the Internet in power saving mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<number>> } callback - the callback of UIDs list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPowerSaveTrustlist(callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtain the list of uids that are allowed to access the Internet in power saving mode.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<number>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPowerSaveTrustlist(): Promise<Array<number>>;

  /**
   * Reset network policies\rules\quota policies\firewall rules.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - Specify the matched simId of quota policy.
   * @param { AsyncCallback<void> } callback - the callback of resetPolicies.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function resetPolicies(simId: string, callback: AsyncCallback<void>): void;

  /**
   * Reset network policies\rules\quota policies\firewall rules.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - Specify the matched simId of quota policy.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function resetPolicies(simId: string): Promise<void>;

  /**
   * Set the policy to access the network of the specified application.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @param { NetworkAccessPolicy } policy - The network access policy of application. For details, see {@link NetworkAccessPolicy}.
   * @param { boolean } [isReconfirmed] - Whether this operation is reconfirmed by user or not. Default false.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function setNetworkAccessPolicy(uid: number, policy: NetworkAccessPolicy, isReconfirmed?: boolean): Promise<void>;

  /**
   * Query the network access policy of the specified application.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { number } uid - The specified UID of application.
   * @returns { Promise<NetworkAccessPolicy> } Returns the network access policy of the application. For details, see {@link NetworkAccessPolicy}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getNetworkAccessPolicy(uid: number): Promise<NetworkAccessPolicy>;

  /**
   * Query the network access policy of all applications.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<UidNetworkAccessPolicy> } the network access policy of all applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getNetworkAccessPolicy(): Promise<UidNetworkAccessPolicy>;

  /**
   * Register uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Indicates Event name.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  /**
   * Register uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Indicates Event name.
   * @param { Callback<NetUidPolicyInfo> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void;

  /**
   * Unregister uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Indicates Event name.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  /**
   * Unregister uid policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Indicates Event name.
   * @param { Callback<NetUidPolicyInfo> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'netUidPolicyChange', callback?: Callback<NetUidPolicyInfo>): void;

  /**
   * Register uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Indicates Event name.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  /**
   * Register uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Indicates Event name.
   * @param { Callback<NetUidRuleInfo> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void;

  /**
   * Unregister uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Indicates Event name.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  /**
   * Unregister uid rule change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Indicates Event name.
   * @param { Callback<NetUidRuleInfo> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'netUidRuleChange', callback?: Callback<NetUidRuleInfo>): void;

  /**
   * Register metered ifaces change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - Indicates Event name.
   * @param { Callback<Array<string>> } callback - the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void;

  /**
   * Unregister metered ifaces change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - Indicates Event name.
   * @param { Callback<Array<string>> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netMeteredIfacesChange', callback?: Callback<Array<string>>): void;

  /**
   * Register quota policies change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - Indicates Event name.
   * @param { Callback<Array<NetQuotaPolicy>> } callback the callback of on.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Unregister quota policies change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - Indicates Event name.
   * @param { Callback<Array<NetQuotaPolicy>> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netQuotaPolicyChange', callback?: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Register network background policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - Indicates Event name.
   * @param { Callback<boolean> } callback - the callback of on. 
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void;

  /**
   * Unregister network background policy change listener.
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - Indicates Event name.
   * @param { Callback<boolean> } callback - the callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netBackgroundPolicyChange', callback?: Callback<boolean>): void;

  /**
  * Open the network settings interface of the application, which is presented in a semi-modal form and can 
  *     be used to configure the network connection method. This API uses a promise to return the result.
  * @param { Context } context - Indicates Context instance.
  * @returns { Promise<void> } The promise returned by the function.
  * @syscap SystemCapability.Communication.NetManager.Core
  * @stagemodelonly
  * @since 22 dynamic
  */
  function showAppNetPolicySettings(context: Context): Promise<void>;

  /**
   * Indicate whether the application can use metered networks in background.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetBackgroundPolicy {
    /**
     * Default value.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_NONE = 0,

    /**
     * Apps can use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_ENABLE = 1,

    /**
     * Apps can't use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_DISABLE = 2,

    /**
     * Only apps in trustlist can use metered networks on background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_TRUSTLIST = 3,
  }

  /**
   * Net quota policies, including matching network rule usage periods, restrictions, and warnings.
   * @interface NetQuotaPolicy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetQuotaPolicy {
    /**
     * The matching rules of network quota policies.
     * @type {NetworkMatchRule}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    networkMatchRule: NetworkMatchRule;

    /**
     * Policies that limit network quota.
     * @type {QuotaPolicy}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    quotaPolicy: QuotaPolicy;
  }

  /**
   * Policies that limit network quota.
   * @interface QuotaPolicy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface QuotaPolicy {
    /**
     * The period and the start time for quota policy, default: "M1" (Monthly cycle).
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    periodDuration: string;

    /**
     * The warning threshold of traffic, default:  DATA_USAGE_UNKNOWN.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    warningBytes: number;

    /**
     * The limit threshold of traffic, default: DATA_USAGE_UNKNOWN.
     * @type {number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitBytes: number;

    /**
     * Is metered network or not.
     * @type {boolean}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    metered: boolean;

    /**
     * The action while the used bytes reach the limit, see {@link LimitAction}.
     * @type {LimitAction}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitAction: LimitAction;

    /**
     * The time of the last warning reminder. For notifying only, default: REMIND_NEVER.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastWarningRemind?: number;

    /**
     * The time of the last limit reminder. For notifying only, default: REMIND_NEVER.
     * @type {?number}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastLimitRemind?: number;
  }

  /**
   * The matching rules of network quota policies.
   * @interface NetworkMatchRule
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetworkMatchRule {
    /**
     * netType see {@link NetBearType}.
     * @type {NetBearType}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    netType: NetBearType;

    /**
     * To specify the identity of network, such as different WLAN.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    identity: string;

    /**
     * The ID of the target card, valid when netType is BEARER_CELLULAR.
     * @type {string}
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    simId: string;
  }

  /**
   * The interface is used to generate network unique identifiers.
   * @interface NetUidRuleInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidRuleInfo {
    /**
     * The warning threshold of traffic, default:  DATA_USAGE_UNKNOWN.
     * @type { number }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: number;
    /**
     * Rules whether an uid can access to a metered or non-metered network.
     * @type { NetUidRule }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    rule: NetUidRule;
  }

  /**
   * Callback function for registering network UID policy changes.
   * @interface NetUidPolicyInfo
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidPolicyInfo {
    /**
     * The warning threshold of traffic, default:  DATA_USAGE_UNKNOWN.
     * @type { number }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: number;
    /**
     * Uid Specifies the Internet access policy in background mode.
     * @type { NetUidPolicy }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    policy: NetUidPolicy;
  }

  /**
   * The action when quota policy hit the limit.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum LimitAction {
    /**
     * Default action, do nothing.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_NONE = -1,

    /**
     * When the quota policy reaches the limit, the system prohibits users from accessing the network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ACCESS_DISABLED = 0,

    /**
     * When the quota policy reaches the upper limit, the system notifies the user.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ALERT_ONLY = 1,
  }

  /**
   * Rules whether an uid can access to a metered or non-metered network.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidRule {
    /**
     * Default uid rule.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_NONE = 0,

    /**
     * Allow traffic on metered networks while app is foreground.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED_FOREGROUND = 1 << 0,

    /**
     * Allow traffic on metered network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED = 1 << 1,

    /**
     * Reject traffic on metered network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_METERED = 1 << 2,

    /**
     * Allow traffic on all network (metered or non-metered).
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_ALL = 1 << 5,

    /**
     * Reject traffic on all network.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_ALL = 1 << 6,
  }

  /**
   * Specify the remind type, see {@link updateRemindPolicy}.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum RemindType {
    /**
     * Warning alerts when the limit is reached.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_WARNING = 1,

    /**
     * Limit alerts when the limit is reached.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_LIMIT = 2,
  }

  /**
   * Uid Specifies the Internet access policy in background mode.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidPolicy {
    /**
     * Default net policy.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_NONE = 0,

    /**
     * Allow on metered networks when app in background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_ALLOW_METERED_BACKGROUND = 1 << 0,

    /**
     * Reject on metered networks when app in background.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_REJECT_METERED_BACKGROUND = 1 << 1,
  }

  /**
   * Network policies that limit the specified UID of application to access the network.
   * @interface NetworkAccessPolicy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface NetworkAccessPolicy {
    /**
     * Indicate whether the application can be allowed to access the network by wifi.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowWiFi?: boolean;
    /**
     * Indicate whether the application can be allowed to access the network by cellular.
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowCellular?: boolean;
    /**
    * Indicate whether the application can be always allowed to access the network by wifi and users cannot set it.
    * @type { ?boolean }
    * @syscap SystemCapability.Communication.NetManager.Core
    * @systemapi Hide this for inner system use.
    * @since 18 dynamic
    */
    alwaysAllowWiFi?: boolean;
    /**
    * Indicate whether the application can be always allowed to access the network by cellular and users cannot set it.
    * @type { ?boolean }
    * @syscap SystemCapability.Communication.NetManager.Core
    * @systemapi Hide this for inner system use.
    * @since 18 dynamic
    */
    alwaysAllowCellular?: boolean;
  }

  /**
   * Provides the container definition for network access policy key-value pairs.
   * @interface UidNetworkAccessPolicy
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface UidNetworkAccessPolicy {
      /**
       * @type key:value pair. Key indicates the specified UID of an application. For value, see @NetworkAccessPolicy.
       * @syscap SystemCapability.Communication.NetManager.Core
       * @systemapi Hide this for inner system use.
       * @since 12 dynamic
       */
      [uid: string]: NetworkAccessPolicy;
  }
}

export default policy;
