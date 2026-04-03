/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { BundleInfo } from './bundleManager/BundleInfo';
import { ElementName } from './bundleManager/ElementName';

/**
 * Default application manager.
 *
 * @namespace defaultAppManager
 * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace defaultAppManager {
  /**
   * The constant for application type.
   *
   * @enum { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationType {
    /**
     * Default browser identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    BROWSER = 'Web Browser',
    /**
     * Default image identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    IMAGE = 'Image Gallery',
    /**
     * Default audio identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = 'Audio Player',
    /**
     * Default video identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO = 'Video Player',
    /**
     * Default PDF identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PDF = 'PDF Viewer',
    /**
     * Default word identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    WORD = 'Word Viewer',
    /**
     * Default excel identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    EXCEL = 'Excel Viewer',
    /**
     * Default PPT identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PPT = 'PPT Viewer',
    /**
     * Default email identifier.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 12 dynamic
     * @since 23 static
     */
    EMAIL = 'Email'
  }

  /**
   * Query whether the caller is default application based on type.
   *
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { AsyncCallback<boolean> } callback - The callback of querying default application result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string, callback: AsyncCallback<boolean>): void;

  /**
   * Query whether the caller is default application based on type.
   *
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @returns { Promise<boolean> } Return true if caller is default application; return false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string): Promise<boolean>;

  /**
   * Query whether the caller is default application based on type.
   *
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @returns { boolean } Return true if caller is default application; return false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 10 dynamic
   * @since 23 static
   */
  function isDefaultApplicationSync(type: string): boolean;

  /**
   * Get default application based on type.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @param { AsyncCallback<BundleInfo> } callback - The callback of the BundleInfo object result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, userId: int, callback: AsyncCallback<BundleInfo>): void;

  /**
   * Get default application based on type.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { AsyncCallback<BundleInfo> } callback - The callback of the BundleInfo object result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, callback: AsyncCallback<BundleInfo>): void;

  /**
   * Get default application based on type.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<BundleInfo> } Return the BundleInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, userId?: int): Promise<BundleInfo>;

  /**
   * Get default application based on type.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @returns { BundleInfo } Return the BundleInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultApplicationSync(type: string, userId?: int): BundleInfo;

  /**
   * Set default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { ElementName } elementName - Uniquely identifies an ability or extensionAbility.
   * @param { int } userId - Indicates the id for the user.
   * @param { AsyncCallback<void> } callback - The callback of setting default application result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string,
    elementName: ElementName, userId: int, callback: AsyncCallback<void>): void;

  /**
   * Set default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { ElementName } elementName - Uniquely identifies an ability or extensionAbility.
   * @param { AsyncCallback<void> } callback - The callback of setting default application result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string, elementName: ElementName, callback: AsyncCallback<void>): void;

  /**
   * Set default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { ElementName } elementName - Uniquely identifies an ability or extensionAbility.
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<void> } The result of setting default application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId?: int): Promise<void>;

  /**
   * Set default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { ElementName } elementName - Uniquely identifies an ability or extensionAbility.
   * @param { int } userId - Indicates the id for the user.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDefaultApplicationSync(type: string, elementName: ElementName, userId?: int): void;

  /**
   * Reset default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @param { AsyncCallback<void> } callback - The callback of resetting default application result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, userId: int, callback: AsyncCallback<void>): void;

  /**
   * Reset default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { AsyncCallback<void> } callback - The callback of resetting default application result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, callback: AsyncCallback<void>): void;

  /**
   * Reset default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<void> } The result of resetting default application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, userId?: int): Promise<void>;

  /**
   * Reset default application based on type.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { int } userId - Indicates the id for the user.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function resetDefaultApplicationSync(type: string, userId?: int): void;

  /**
   * Set default application for app clone.
   * If you need to set default application under the current user, ohos.permission.SET_DEFAULT_APPLICATION
   * needs to be applied for.
   * If you need to set default application under other users, ohos.permission.SET_DEFAULT_APPLICATION and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION or
   *     (ohos.permission.SET_DEFAULT_APPLICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } type - Application type or a file type that conforms to media type format.
   * @param { ElementName } elementName - Uniquely identifies an ability or extensionAbility.
   * @param { int } appIndex - Indicates the index of clone app.
   * @param { int } [userId] - Indicates the id for the user.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability and type do not match.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 23 dynamic&static
   */
  function setDefaultApplicationForAppClone(type: string, elementName: ElementName, appIndex: int, userId?: int): void
}

export default defaultAppManager;
