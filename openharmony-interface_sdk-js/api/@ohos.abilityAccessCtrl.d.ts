/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import type _Context from './application/Context';
import type _PermissionRequestResult from './security/PermissionRequestResult';

/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 8
 */
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @atomicservice
 * @since 11
 */
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace abilityAccessCtrl {
  /**
   * Obtains the AtManager instance.
   *
   * @returns { AtManager } Returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @since 8
   */
  /**
   * Obtains the AtManager instance.
   *
   * @returns { AtManager } returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the AtManager instance.
   *
   * @returns { AtManager } returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function createAtManager(): AtManager;

  /**
   * Provides methods for managing access_token.
   *
   * @interface AtManager
   * @syscap SystemCapability.Security.AccessToken
   * @since 8
   */
  /**
   * Provides methods for managing access_token.
   *
   * @interface AtManager
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface AtManager {
    /**
     * Checks whether a specified application has been granted the given permission.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified. The Permissions type supports only valid permission names.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @syscap SystemCapability.Security.AccessToken
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;

    /**
     * Checks whether a specified application has been granted the given permission.
     *
     * @param { number } tokenID - Token ID of the application.
     * @param { string } permissionName - Name of the permission to be verified.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @syscap SystemCapability.Security.AccessToken
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.abilityAccessCtrl.AtManager#checkAccessToken
     */
    verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;

    /**
     * Checks whether a specified application has been granted the given permission synchronously.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { GrantStatus } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;

    /**
     * Checks whether a specified application has been granted the given permission.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @since 9
     */
    /**
     * Checks whether a specified application has been granted the given permission.
     * On the cross-platform, this function can be used to check the permission grant status for the current application only.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether a specified application has been granted the given permission.
     * On the cross-platform, this function can be used to check the permission grant status for the current application only.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    checkAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;

    /**
     * Checks whether a specified application has been granted the given permission.
     * On the cross-platform, this function can be used to check the permission grant status for the current application only.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { GrantStatus } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether a specified application has been granted the given permission.
     * On the cross-platform, this function can be used to check the permission grant status for the current application only.
     *
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { GrantStatus } Returns permission verify result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    checkAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;

    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This
     *     parameter cannot be null or empty.
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from
     *     requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to
     *     the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 9
     */
    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested.
     *     This parameter cannot be null or empty.
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from
     *     requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the
     *     application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested.
     *     This parameter cannot be null or empty.
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from
     *     requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left
     *     unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(
      context: Context,
      permissionList: Array<Permissions>,
      requestCallback: AsyncCallback<PermissionRequestResult>
    ): void;

    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
     * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 9
     */
    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
     * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Requests certain permissions from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested.
     *     This parameter cannot be null or empty.
     * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left
     *     unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>): Promise<PermissionRequestResult>;

    /**
     * Requests user permissions based on the window ID.
     *
     * @param { Context } context Context of the ability that initiates the permission request.
     * @param { int } windowId Window ID.
     * @param { Array<Permissions> } permissionList - Array of permissions to request.
     *     <br>The value cannot be null or empty.
     * @returns { Promise<PermissionRequestResult> } Promise used to return the results of requested permissions.
     * @throws { BusinessError } 12100001 - Invalid parameter. windowId is invalid.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the popup window or
     *     obtaining the user operation result.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestPermissionsFromUserWithWindowId(
      context: Context,
      windowId: int,
      permissionList: Array<Permissions>) : Promise<PermissionRequestResult>;

    /**
     * Grants a specified user_grant permission to the given application.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be granted.
     * @param { int } permissionFlags - Flags of permission state. This parameter can be 1 or 2 or 64.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,
     *  or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with the specified permission.
     *  Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;

    /**
     * Grants a specified user_grant permission to the given application.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be granted.
     * @param { int } permissionFlags - Flags of permission state. This parameter can be 1 or 2 or 64.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,
     *  or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with the specified permission.
     *  Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      callback: AsyncCallback<void>
    ): void;


    /**
     * Revoke a specified user_grant permission to the given application.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be revoked.
     * @param { int } permissionFlags - Flags of permission state. This parameter can be 1 or 2 or 64.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,
     *  or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with the specified permission.
     *  Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;

    /**
     * Revoke a specified user_grant permission to the given application.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be revoked.
     * @param { int } permissionFlags - Flags of permission state. This parameter can be 1 or 2 or 64.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,
     *  or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with the specified permission.
     *  Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Queries specified permission flags of the given application.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be get.
     * @returns { Promise<int> } Return permission flags.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not declared in the module.json file.
     * @throws { BusinessError } 12100006 - The operation is not allowed. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>;

    /**
     * Set the toggle status of one permission flag.
     *
     * @permission ohos.permission.DISABLE_PERMISSION_DIALOG
     * @param { Permissions } permissionName - Name of the permission associated with the toggle status to be set.
     * @param { PermissionRequestToggleStatus } status - The toggle status to be set.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, the specified permission is not a user_grant permission,
     *  or the status value is invalid.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>;

    /**
     * Get the toggle status of one permission flag.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Permissions } permissionName - Name of the permission associated with the toggle status to be get.
     * @returns { Promise<PermissionRequestToggleStatus> } Return the toggle status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, or the specified permission is not a user_grant permission.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>;

    /**
     * Queries permission management version.
     *
     * @returns { Promise<int> } Return permission version.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): Promise<int>;

    /**
     * Queries permissions status of the given application.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be queried. This parameter cannot be null or empty.
     * @returns { Promise<Array<PermissionStatus>> } Return permission status.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0 or the permissionList is empty or exceeds the size limit.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>;

    /**
     * Registers a permission state callback so that the application can be notified upon specified permission state of specified applications changes.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - Event type.
     * @param { Array<int> } tokenIDList - A list of permissions that specify the permissions to be listened on. The value in the list can be:
     * <br> {@code empty} - Indicates that the application can be notified if the specified permission state of any applications changes.
     * <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications change.
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be listened on. The value in the list can be:
     * <br> {@code empty} - Indicates that the application can be notified if any permission state of the specified applications changes.
     * <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications changes.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from registering permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList exceeds the size limit;
     *  2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     */
    on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Registers a permission state callback so that the application can be notified upon specified permission
     * state of specified applications changes.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - A list of permissions that specify the permissions to be listened on.
     *     The value in the list can be:
     *     <br> {@code empty} - Indicates that the application can be notified if the specified permission state of
     *     any applications changes.
     *     <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission
     *     state of the specified applications change.
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
     *     listened on. The value in the list can be:
     *     <br> {@code empty} - Indicates that the application can be notified if any permission state of the specified
     *     applications changes.
     *     <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission
     *     state of the specified applications changes.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from registering permissions.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList
     *     exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 23 static
     */
    onPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Subscribes to the permission changes of this application.
     *
     * @param { 'selfPermissionStateChange' } type - Event type.
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
     * listened on. The value in the list can be:
     * <br> {@code empty} - Indicates that the application can be notified if any permission state changes.
     * <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission
     * state changes.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from registering
     * permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left
     * unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     * the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     */
    on(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Subscribes to the permission changes of this application.
     *
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
     *     listened on. The value in the list can be:
     *     <br> {@code empty} - Indicates that the application can be notified if any permission state
     *     changes.
     *     <br> {@code non-empty} - Indicates that the application can only be notified if the specified
     *     permission state changes.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from registering
     *     permissions.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     *     the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @since 23 static
     */
    onSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Unregisters a permission state callback so that the specified applications cannot be notified upon specified permissions state changes anymore.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - Event type.
     * @param { Array<int> } tokenIDList - A list of permissions that specify the permissions to be listened on.
     *  It should correspond to the value registered by function of "on", whose type is "permissionStateChange".
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be listened on.
     *  It should correspond to the value registered by function of "on", whose type is "permissionStateChange".
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback for the result from unregistering permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is not in the listening list.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     */
    off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Unregisters a permission state callback so that the specified applications cannot be notified upon specified
     * permissions state changes anymore.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - Event type.
     * @param { Array<int> } tokenIDList - A list of permissions that specify the permissions to be listened on.
     *     It should correspond to the value registered by function of "onPermissionStateChange".
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
     *     listened on. It should correspond to the value registered by function of "onPermissionStateChange".
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback for the result from unregistering
     *     permissions.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is
     *     not in the listening list.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 23 static
     */
    offPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Unsubscribes from the permission changes of this application.
     *
     * @param { 'selfPermissionStateChange' } type Event type.
     * @param { Array<Permissions> } permissionList A list of permissions that specify the permissions to be
     * listened on.
     *  It should correspond to the value registered by function of "on", whose type is
     * "selfPermissionStateChange".
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback for the result from unregistering
     * permissions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left
     * unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12100004 - The API is not used in pair with "on".
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     */
    off(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Unsubscribes from the permission changes of this application.
     *
     * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
     *     listened on. It should correspond to the value registered by function of "onSelfPermissionStateChange".
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback for the result from unregistering
     *     permissions.
     * @throws { BusinessError } 12100004 - The API is not used in pair with "onSelfPermissionStateChange".
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @since 23 static
     */
    offSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;

    /**
     * Requests certain permissions on setting from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     *     <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permission to be requested. This
     *     parameter cannot be null or empty.
     * @returns { Promise<Array<GrantStatus>> } Returns the list of status of the specified permission.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself;
     *     2. The permission list contains the permission that is not declared in the module.json file; 3. The
     *     permission list is invalid because the permissions in it do not belong to the same permission group.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100010 - The request already exists.
     * @throws { BusinessError } 12100011 - All permissions in the permission list have been granted.
     * @throws { BusinessError } 12100012 - The permission list contains the permission that has not been
     *     revoked by the user.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    /**
     * Requests certain permissions on setting from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     *     <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { Array<Permissions> } permissionList - Indicates the list of permission to be requested. This
     *     parameter cannot be null or empty.
     * @returns { Promise<Array<GrantStatus>> } Returns the list of status of the specified permission.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission list contains the permission that is
     *     not declared in the module.json file; 3. The permission list is invalid because the permissions in it
     *     do not belong to the same permission group; 4. The permission list contains one or more system_grant
     *     permissions.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100011 - All permissions in the permission list have been granted.
     * @throws { BusinessError } 12100012 - The permission list contains the permission that has not been
     *     revoked by the user.
     * @throws { BusinessError } 12100014 - Unexpected permission. You cannot request this type of permission
     *     from users via a pop-up window.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>;

    /**
     * Requests certain global switch status on setting from the user.
     *
     * @param { Context } context - The context that initiates the permission request.
     * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
     * @param { SwitchType } type - Indicates the type of global switch to be requested. This parameter cannot be
     *     null or empty.
     * @returns { Promise<boolean> } Returns the status of the specified global switch.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid because
     *     it does not belong to the application itself; 2. The type of global switch is not support.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100013 - The specific global switch is already open.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>;

    /**
     * Starts the permission manager page of an application.
     *
     * @param { int } tokenID - Token ID of the application.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    requestPermissionOnApplicationSetting(tokenID: int): Promise<void>;

    /**
     * Queries permission status of the application synchronously.
     *
     * @param { Permissions } permissionName - Indicates the permission to be queried. This parameter cannot be null or empty.
     * @returns { PermissionStatus } Return permission status.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getSelfPermissionStatus(permissionName: Permissions): PermissionStatus;

    /**
     * Grants a specified permission to the given application.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be granted.
     * @param { int } permissionFlags - Flags of permission state.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
     *     exceeds 256 characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be
     *     granted with the specified permission. Either the application is a sandbox or the tokenID is from
     *     a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;

    /**
     * Revokes a specified permission from the given application.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be revoked.
     * @param { int } permissionFlags - Flags of permission state.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
     *     exceeds 256 characters or is not declared in the module.json file,
     *     or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The specified permission is not allowed to be revoked
     *     from the application specified by the tokenID. Either the application is a sandbox or the tokenID
     *     is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    /**
     * Revokes the specified permission from the given application.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be revoked.
     * @param { int } permissionFlags - Permission status flag.
     * @param { boolean } [killProcess] - Whether to kill the process when the permission is revoked.
     *     If killProcess is set to true, the application process is killed after the permission is revoked.
     *     If the value is false, the process will not be killed. The default value is true.
     * @returns { Promise<void> } Promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied. The interface invoker does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not a system application. The interface invoker is not a system
     *     application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The token ID is 0, the permission name
     *     exceeds 256 characters or is not declared in the module.json file,
     *     or the value of flags is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The specified permission is not allowed to be revoked
     *     from the application specified by the tokenID. Either the application is a sandbox or the tokenID
     *     is from a remote device.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    revokePermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        killProcess?: boolean): Promise<void>;

    /**
     * Prompts users to grant the required permissions on the Settings screen.
     *
     * @param { Context } context The context that initiates the permission request.
     *     <br> The context must belong to the Stage model and only supports UIAbilityContext and
     *     UIExtensionContext.
     * @param { Permissions } permission Indicates permission to open on setting.
     * @returns { Promise<SelectedResult> } Returns result of user selection.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission is invalid or not
     *     declared in the module.json file.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100014 - Unexpected permission. The permission is not a manual_settings
     *     permission.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    openPermissionOnSetting(context: Context, permission: Permissions): Promise<SelectedResult>;

    /**
      * Queries all applications that have requested the specified permissions and their permission status.
      *
      * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
      * @param { Array<Permissions> } permissionList - List of permissions to be queried. This parameter cannot be
      *     null or empty.
      * @returns { Promise<Array<PermissionStatusInfo>> } Returns the list of applications and their
      *     permission status.
      * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
      *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
      * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
      * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is empty or exceeds the size
      *     limit.
      * @throws { BusinessError } 12100003 - The specified permission does not exist.
      * @throws { BusinessError } 12100007 - The service is abnormal.
      * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
      * @syscap SystemCapability.Security.AccessToken
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
      queryStatusByPermission(
          permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>;

      /**
      * Queries the status of all permissions for the specified applications.
      *
      * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
      * @param { Array<int> } tokenIDList - List of token IDs to be queried. This parameter cannot be null or
      *     empty.
      * @returns { Promise<Array<PermissionStatusInfo>> } Returns the list of permission
      *     status for the specified applications.
      * @throws { BusinessError } 201 - Permission denied. Interface caller does not have
      *     permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
      * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
      * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList is empty
      *     or exceeds the size limit.
      * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
      * @throws { BusinessError } 12100007 - The service is abnormal.
      * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
      * @syscap SystemCapability.Security.AccessToken
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
      queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>;
  }

  /**
   * GrantStatus.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @since 8
   */
  /**
   * GrantStatus.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @crossplatform
   * @since 10
   */
  /**
   * GrantStatus.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export enum GrantStatus {
    /**
     * access_token permission check fail
     *
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     */
    /**
     * access_token permission check fail
     *
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * access_token permission check fail
     *
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PERMISSION_DENIED = -1,
    /**
     * access_token permission check success
     *
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     */
    /**
     * access_token permission check success
     *
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * access_token permission check success
     *
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED = 0
  }

  /**
   * Enum for permission state change type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum PermissionStateChangeType {
    /**
     * A granted user_grant permission is revoked.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_REVOKED_OPER = 0,
    /**
     * A user_grant permission is granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED_OPER = 1
  }

  /**
   * Enum for permission request toggle status.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PermissionRequestToggleStatus {
    /**
     * The toggle status of one permission flag is closed.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CLOSED = 0,
    /**
     * The toggle status of one permission flag is open.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OPEN = 1,
  }

  /**
   * Indicates the information of permission state change.
   *
   * @interface PermissionStateChangeInfo
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @name PermissionStateChangeInfo
   */
  interface PermissionStateChangeInfo {
    /**
     * Indicates the permission state change type.
     *
     * @type { PermissionStateChangeType }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    change: PermissionStateChangeType;

    /**
     * Indicates the application whose permission state has been changed.
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    tokenID: int;

    /**
     * Indicates the permission whose state has been changed.
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    permissionName: Permissions;
  }

  /**
   * PermissionStatus.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum PermissionStatus {
    /**
     * permission has been denied, only can change it in settings
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DENIED = -1,
    /**
     * permission has been granted
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    GRANTED = 0,
    /**
     * permission is not determined
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_DETERMINED = 1,
    /**
     * permission is invalid
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INVALID = 2,
    /**
     * permission has been restricted
     *
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    RESTRICTED = 3
  }

  /**
   * SwitchType.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
    export enum SwitchType {
      /**
       * switch of camera
       *
       * @syscap SystemCapability.Security.AccessToken
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      CAMERA = 0,
      /**
       * switch of microphone
       *
       * @syscap SystemCapability.Security.AccessToken
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      MICROPHONE = 1,
      /**
       * switch of location
       *
       * @syscap SystemCapability.Security.AccessToken
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      LOCATION = 2,
    }

  /**
   * SelectedResult.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.AccessToken
   * @since 22 dynamic
   * @since 23 static
   */
  export enum SelectedResult {
    /**
     * Rejected by user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @since 22 dynamic
     * @since 23 static
     */
    REJECTED = -1,
    /**
     * Open the setting.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @since 22 dynamic
     * @since 23 static
     */
    OPENED = 0,
    /**
     * Permission has been granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @since 22 dynamic
     * @since 23 static
     */
    GRANTED = 1
  }
  /**
  * Permission status information.
  *
  * @interface PermissionStatusInfo
  * @syscap SystemCapability.Security.AccessToken
  * @systemapi
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  interface PermissionStatusInfo {
    /**
    * Token ID of the application.
    *
    * @type { int }
    * @syscap SystemCapability.Security.AccessToken
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    tokenID: int;
  
    /**
    * Permission name.
    *
    * @type { Permissions }
    * @syscap SystemCapability.Security.AccessToken
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    permissionName: Permissions;

    /**
    * Permission grant status.
    *
    * @type { GrantStatus }
    * @syscap SystemCapability.Security.AccessToken
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    grantStatus: GrantStatus;

    /**
    * Permission grant flag.
    *
    * @type { int }
    * @syscap SystemCapability.Security.AccessToken
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    grantFlags: int;
  }
}

export default abilityAccessCtrl;
export { Permissions };
/**
 * PermissionRequestResult interface.
 *
 * @typedef { _PermissionRequestResult }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * PermissionRequestResult interface.
 *
 * @typedef { _PermissionRequestResult }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export type PermissionRequestResult = _PermissionRequestResult;
/**
 * Context interface.
 *
 * @typedef { _Context }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Context interface.
 *
 * @typedef { _Context }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export type Context = _Context;
