/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type { AsyncCallback } from './@ohos.base';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */

/**
 * This module provides the capability to manage distributed accounts.
 *
 * @namespace distributedAccount
 * @syscap SystemCapability.Account.OsAccount
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace distributedAccount {
  /**
   * Gets the ability of the distributed account.
   *
   * @returns { DistributedAccountAbility } Ability to manage operations of distributed account.
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  function getDistributedAccountAbility(): DistributedAccountAbility;

  /**
   * Defines distributed account functions and interfaces.
   *
   * @interface DistributedAccountAbility
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface DistributedAccountAbility {
    /**
     * Queries the distributed information of the current OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<DistributedInfo> } callback - Asynchronous callback interface.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     */
    queryOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void;

    /**
     * Queries the distributed information of the current OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<DistributedInfo> } The distributed information of the current OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     */
    queryOsAccountDistributedInfo(): Promise<DistributedInfo>;

    /**
     * Gets the distributed information of the current OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<DistributedInfo> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void;

    /**
     * Gets the distributed information of the current OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<DistributedInfo> } The distributed information of the current OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfo(): Promise<DistributedInfo>;

    /**
     * Gets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - Indicates the local ID of the specified OS account.
     * @param { AsyncCallback<DistributedInfo> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Gets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and
     *     ohos.permission.GET_DISTRIBUTED_ACCOUNTS)
     * @param { int } localId - Indicates the local ID of the specified OS account.
     * @param { AsyncCallback<DistributedInfo> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfoByLocalId(localId: int, callback: AsyncCallback<DistributedInfo>): void;

    /**
     * Gets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - Indicates the local ID of the specified OS account.
     * @returns { Promise<DistributedInfo> } The distributed information of the specified OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Gets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and
     *     ohos.permission.GET_DISTRIBUTED_ACCOUNTS)
     * @param { int } localId - Indicates the local ID of the specified OS account.
     * @returns { Promise<DistributedInfo> } The distributed information of the specified OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfoByLocalId(localId: int): Promise<DistributedInfo>;

    /**
     * Updates the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DistributedInfo } accountInfo - Indicates the information of the OS account used for a distributed system.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Updates the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DistributedInfo } accountInfo - Indicates the information of the OS account used for a distributed system.
     * @returns { Promise<void> } The promise returned by the function.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;

    /**
     * Sets the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { DistributedInfo } accountInfo - Indicates the information of the OS account used for a distributed system.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid accountInfo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * This API can be called only by system applications.
     * @since 9 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Sets the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { DistributedInfo } accountInfo - Indicates the information of the OS account used for a distributed system.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid accountInfo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * This API can be called only by system applications.
     * @since 9 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;

    /**
     * Sets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { int } localId - Indicates the local ID of the OS account.
     * @param { DistributedInfo } distributedInfo - Indicates the distributed information.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid distributedInfo.
     * @throws { BusinessError } 12300003 - Account identified by localId or by distributedInfo not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Sets the distributed information of the specified OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { int } localId - Indicates the local ID of the OS account.
     * @param { DistributedInfo } distributedInfo - Indicates the distributed information.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid distributedInfo.
     * @throws { BusinessError } 12300003 - Account identified by localId or by distributedInfo not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo): Promise<void>;
  }

  /**
   * Enum for distributed account status.
   *
   * @enum { int }
   * @syscap SystemCapability.Account.OsAccount
   * @since 10 dynamic
   * @since 23 static
   */
  enum DistributedAccountStatus {
    /**
     * Indicates that the account is not logged in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    NOT_LOGGED_IN = 0,

    /**
     * Indicates that the account is logged in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    LOGGED_IN = 1
  }

  /**
   * Provides the distributed information of the OS account.
   *
   * @interface DistributedInfo
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface DistributedInfo {
    /**
     * The name in the distributed information of the OS account.
     *
     * @type { string }
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * The ID in the distributed information of the OS account.
     *
     * @type { string }
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * The event string in the distributed information of the OS account.
     *
     * @type { string }
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    event: string;

    /**
     * The nickname in the distributed information of the OS account.
     *
     * @type { ?string }
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    nickname?: string;

    /**
     * The avatar in the distributed information of the OS account.
     *
     * @type { ?string }
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    avatar?: string;

    /**
     * The status in the distributed information of the OS account.
     *
     * @type { ?DistributedAccountStatus }
     * @readonly
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    readonly status?: DistributedAccountStatus;

    /**
     * The scalable data in the distributed information of the OS account.
     *
     * @type { ?object }
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     */
    scalableData?: object;

    /**
     * The scalable data in the distributed information of the OS account.
     *
     * @type { ?Record<string, RecordData> }
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    scalableData?: Record<string, RecordData>;
  }
}

export default distributedAccount;
