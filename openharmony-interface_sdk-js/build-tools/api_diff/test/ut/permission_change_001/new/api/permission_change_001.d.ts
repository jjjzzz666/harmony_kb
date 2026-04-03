/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';
import { Permissions } from './permissions';

/**
 * @namespace privacyManager
 * @syscap SystemCapability.Security.AccessToken
 * @since 9
 */
declare namespace privacyManager {
  /**
   * Adds access record of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be added.
   * @param { number } successCount - Access count.
   * @param { number } failCount - Reject count.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The parameter is invalid. The tokenID is 0, or the string size of permissionName is larger than 256, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function addPermissionUsedRecord(
    tokenID: number,
    permissionName: Permissions,
    successCount: number,
    failCount: number
  ): Promise<void>;

  /**
   * Adds access record of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be added.
   * @param { number } successCount - Access count.
   * @param { number } failCount - Reject count.
   * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The parameter is invalid. The tokenID is 0, or the string size of permissionName is larger than 256, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function addPermissionUsedRecord(
    tokenID: number,
    permissionName: Permissions,
    successCount: number,
    failCount: number,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Queries the access records of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - The request of permission used records.
   * @returns { Promise<PermissionUsedResponse> } Return the response of permission used records.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The parameter is invalid. the value of flag in request is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function getPermissionUsedRecord(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;

  /**
   * Queries the access records of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - The request of permission used records.
   * @param { AsyncCallback<PermissionUsedResponse> } callback - Return the response of permission used records.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The parameter is invalid. the value of flag in request is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function getPermissionUsedRecord(
    request: PermissionUsedRequest,
    callback: AsyncCallback<PermissionUsedResponse>
  ): void;

  /**
   * Start using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be started.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The tokenID is 0, permissionName is longer than 256 bytes, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The interface is called repeatedly with the same input. It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function startUsingPermission(tokenID: number, permissionName: Permissions): Promise<void>;

  /**
   * Start using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be started.
   * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The tokenID is 0, permissionName is longer than 256 bytes, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The interface is called repeatedly with the same input. It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function startUsingPermission(tokenID: number, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * Stop using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be stopped.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The tokenID is 0, permissionName is longer than 256 bytes, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The interface is not used with "startUsingPermission".
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function stopUsingPermission(tokenID: number, permissionName: Permissions): Promise<void>;

  /**
   * Stop using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be stopped.
   * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The tokenID is 0, permissionName is longer than 256 bytes, or the count value is invalid.
   * @throws { BusinessError } 12100002 - TThe specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The interface is not used with "startUsingPermission".
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function stopUsingPermission(tokenID: number, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * Subscribes to the change of active state of the specified permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type.
   * @param { Array<Permissions> } permissionList - Indicates the permission list, which are specified.
   * @param { Callback<ActiveChangeResponse> } callback Callback for listening permission change.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The parameter is invalid. The tokenID is 0, or the string size of permissionName is larger than 256.
   * @throws { BusinessError } 12100004 - The interface is called repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limitation.
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function on(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>
  ): void;

  /**
   * Unsubscribes to the change of active state of the specified permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type.
   * @param { Array<Permissions> } permissionList - Indicates the permission list, which are specified.
   * @param { Callback<ActiveChangeResponse> } callback - Callback for listening permission change.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - The permissionNames in the list are all invalid, or the list size exceeds 1024 bytes.
   * @throws { BusinessError } 12100004 - The interface is not used together with "on".
   * @throws { BusinessError } 12100007 - Service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function off(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>
  ): void;

  /**
   * Enum for permission for status.
   *
   * @enum { number } PermissionActiveStatus
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  enum PermissionActiveStatus {
    /**
     * permission is not used yet.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    PERM_INACTIVE = 0,

    /**
     * permission is used in front_end.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    PERM_ACTIVE_IN_FOREGROUND = 1,

    /**
     * permission is used in back_end.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    PERM_ACTIVE_IN_BACKGROUND = 2
  }

  /**
   * Indicates the response of permission active status.
   *
   * @interface ActiveChangeResponse
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface ActiveChangeResponse {
    /**
     * AccessTokenID
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    tokenId: number;

    /**
     * The permission name
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    permissionName: Permissions;

    /**
     * The device id
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    deviceId: string;
    /**
     * The active status name
     *
     * @type { PermissionActiveStatus }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    activeStatus: PermissionActiveStatus;
  }

  /**
   * PermissionUsageFlag.
   *
   * @enum { number } PermissionUsageFlag
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  enum PermissionUsageFlag {
    /**
     * permission used summary
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    FLAG_PERMISSION_USAGE_SUMMARY = 0,
    /**
     * permission used detail
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    FLAG_PERMISSION_USAGE_DETAIL = 1
  }

  /**
   * Provides request of querying permission used records.
   *
   * @interface PermissionUsedRequest
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface PermissionUsedRequest {
    /**
     * AccessTokenID
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    tokenId: number;

    /**
     * Distribute flag
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    isRemote: boolean;

    /**
     * The device id
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    deviceId: string;

    /**
     * The bundle name
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    bundleName: string;

    /**
     * The list of permission name
     *
     * @type { Array<Permissions> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    permissionNames: Array<Permissions>;

    /**
     * The begin time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    beginTime: number;

    /**
     * The end time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    endTime: number;

    /**
     * The permission usage flag
     *
     * @type { PermissionUsageFlag }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    flag: PermissionUsageFlag;
  }

  /**
   * Provides response of querying permission used records.
   *
   * @interface PermissionUsedResponse
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface PermissionUsedResponse {
    /**
     * The begin time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    beginTime: number;

    /**
     * The end time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    endTime: number;

    /**
     * The list of permission used records of bundle
     *
     * @type { Array<BundleUsedRecord> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    bundleRecords: Array<BundleUsedRecord>;
  }

  /**
   * BundleUsedRecord.
   *
   * @interface BundleUsedRecord
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface BundleUsedRecord {
    /**
     * AccessTokenID
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    tokenId: number;

    /**
     * Distribute flag
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    isRemote: boolean;

    /**
     * The device id
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    deviceId: string;

    /**
     * The bundle name
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    bundleName: string;

    /**
     * The list of permission used records
     *
     * @type { Array<PermissionUsedRecord> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    permissionRecords: Array<PermissionUsedRecord>;
  }

  /**
   * PermissionUsedRecord.
   *
   * @interface PermissionUsedRecord
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface PermissionUsedRecord {
    /**
     * The permission name
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    permissionName: Permissions;

    /**
     * The access counts
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    accessCount: number;

    /**
     * The reject counts
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    rejectCount: number;

    /**
     * The last access time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    lastAccessTime: number;

    /**
     * The last reject time, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    lastRejectTime: number;

    /**
     * The last access duration, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    lastAccessDuration: number;

    /**
     * The list of access records of details
     *
     * @type { Array<UsedRecordDetail> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    accessRecords: Array<UsedRecordDetail>;

    /**
     * The list of reject records of details
     *
     * @type { Array<UsedRecordDetail> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    rejectRecords: Array<UsedRecordDetail>;
  }

  /**
   * UsedRecordDetail.
   *
   * @interface UsedRecordDetail
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  interface UsedRecordDetail {
    /**
     * The status
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    status: number;

    /**
     * Timestamp, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    timestamp: number;

    /**
     * Access duration, in milliseconds
     *
     * @type { number }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9
     */
    accessDuration: number;
  }
}

export default privacyManager;
export { Permissions };