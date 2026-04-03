/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import common from './@ohos.enterprise.common';

/**
 * This module provides the capability to manage the applications of the enterprise devices.
 *
 * @namespace applicationManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace applicationManager {
  /**
   * Enum for Kiosk Feature.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum KioskFeature {
    /**
     * Allow notification center.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_NOTIFICATION_CENTER = 1,

    /**
     * Allow control center.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_CONTROL_CENTER = 2,

    /**
     * Allow gesture control.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_GESTURE_CONTROL = 3,

    /**
     * Allow side dock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_SIDE_DOCK = 4
  }

  /**
   * The application information in the Dock.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  interface DockInfo {
    /**
     * The bundle name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    bundleName: string;

    /**
     * The ability name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    abilityName: string;

    /**
     * The index of the application in the Dock.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    index: number;
  }

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
    /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } [accountId] - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } [accountId] - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function addDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run. The size of the array after setting
   *                                   cannot be greater than 200.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIds - appIds or appIdentifiers of the bundle are disallowed to run.
   *                                   The size of the array after setting cannot be greater than 200.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function removeDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Get appIds or appIdentifiers list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Get appIds or appIdentifiers list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<Array<string>> } the promise returned by the getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Get appIds or appIdentifiers list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<Array<string>> } the promise returned by the getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 21
   */
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @returns { Array<string> } ids of the bundle are disallowed to run.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  /**
   * Get appIds or appIdentifiers list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @returns { Array<string> } ids of the bundle are disallowed to run.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function getDisallowedRunningBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Adds auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   *                                        The bundleName and abilityName of the want cannot be non-exist.
   *                                        The size of the array after setting cannot be greater than 10.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                           2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Adds auto start applications which are not allowed to modify their auto start settings.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   *                                        The bundleName and abilityName of the want cannot be non-exist.
   *                                        The size of the array after setting cannot be greater than 10.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @param { boolean } disallowModify - disallowModify specifies whether the applications are
   *                         disallowed to modify their auto start setting.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
   function addAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number, disallowModify: boolean): void;

  /**
   * Removes auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   *                                        The bundleName and abilityName of the want cannot be non-exist.
   *                                        The size of the array after setting cannot be greater 10.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Removes auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   *                                        The bundleName and abilityName of the want cannot be non-exist.
   *                                        The size of the array after setting cannot be greater 10.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void;

  /**
   * Gets information of auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @returns { Array<Want> } the information of auto start applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *                                 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAutoStartApps(admin: Want): Array<Want>;

  /**
   * Gets information of auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   *  @param { number } accountId - accountId indicates the local ID of the OS account.
   * @returns { Array<Want> } the information of auto start applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAutoStartApps(admin: Want, accountId: number): Array<Want>;

  /**
   * Checks whether the specified application is allowed to modify its auto start setting.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   *  @param { Want } autoStartApp - autoStartApp indicates the information of auto start app ability to be checked.
   *                                        The bundleName and abilityName of the want cannot be non-exist.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @returns { boolean } true indicates the application is not allowed to modify its auto start setting.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
   function isModifyAutoStartAppsDisallowed(admin: Want, autoStartApp: Want, accountId: number): boolean;

  /**
   * Adds the keep alive applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle names of applications added to the keep
   *              alive list.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *              2.Incorrect parameter types;3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Adds keep alive applications which are not allowed to modify their keep alive settings.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle names of applications added to the keep
   *              alive list.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @param { boolean } disallowModify - disallowModify specifies whether the applications
   *              are disallowed to modify their keep alive setting.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
   function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number, disallowModify: boolean): void;

  /**
   * Removes the keep alive applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<string> } bundleNames - bundleNames indicates the bundle names of applications removed from the keep
   *              alive list.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *              2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * Gets the keep alive applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @returns { Array<string> } the bundle names of keep alive applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *              2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getKeepAliveApps(admin: Want, accountId: number): Array<string>;

  /**
   * Adds the list of applications that user not stop.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<common.ApplicationInstance> } applicationInstances - applicationInstances indicates
   *              the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *              The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
   function addUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Removes applications from the list that user not stop.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<common.ApplicationInstance> } applicationInstances - applicationInstances indicates
   *              the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *              The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Gets the list of applications that user not stop.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @returns { Array<common.ApplicationInstance> } returns the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *              The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getUserNonStopApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * Adds freeze exempted applications list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<common.ApplicationInstance> } applicationInstances - applicationInstances indicates
   *              the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
   function addFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Removes applications from the freeze exempted list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param  { Array<common.ApplicationInstance> } applicationInstances - applicationInstances indicates
   *              the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *              The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * Gets the list of freeze exempted applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @returns { Array<common.ApplicationInstance> } returns the list of application instance.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *              The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getFreezeExemptedApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * Checks whether the specified application is allowed to modify its keep alive setting.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @param { string } bundleName - bundleName indicates the bundle name of application to be checked.
   * @returns { boolean } true indicates the application is not allowed to modify its keep alive setting.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
   function isModifyKeepAliveAppsDisallowed(admin: Want, accountId: number, bundleName: string): boolean;

  /**
   * Clear up application data.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { string } bundleName - bundleName indicates the bundle name of application.
   * @param { number } appIndex - appIndex indicates the index of bundle.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function clearUpApplicationData(admin: Want, bundleName: string, appIndex: number, accountId: number): void;

  /**
   * Set applications allowed running in kiosk mode.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { Array<string> } appIdentifiers - appIdentifiers indicates the appIdentifiers of applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setAllowedKioskApps(admin: Want, appIdentifiers: Array<string>): void;

  /**
   * Get applications allowed running in kiosk mode.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @returns { Array<string> } the appIdentifiers of applications that allowed running in kiosk mode.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAllowedKioskApps(admin: Want): Array<string>;

  /**
   * Check target application allowed running in kiosk mode.
   *
   * @param { string } appIdentifier - appIdentifier indicates the appIdentifier of application.
   * @returns { boolean } true means the application allowed running in kiosk mode, otherwise false.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isAppKioskAllowed(appIdentifier: string): boolean;

  /**
   * Sets kiosk feature in kiosk mode.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *              The admin must have the corresponding permission.
   * @param { Array<KioskFeature> } features - kiosk feature to allow custom ui.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *              required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setKioskFeatures(admin: Want, features: Array<KioskFeature>): void;

 /**
   * Add appidentify list of bundles that is allowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIdentifiers - appIdentifiers of the bundle are allowed to run.
   *                                           The size of the array after setting cannot be greater than 200.
   * @param { number } accountId - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function addAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * Remove appidentify list of bundles that is allowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } appIdentifiers - appIdentifiers of the bundle are allowed to run.
   *                                           The size of the array after setting cannot be greater than 200.
   * @param { number } accountId - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function removeAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * Get appIdentify list of bundles that is allowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { number } accountId - accountId indicates the account ID.
   * @returns { Array<string> } appIdentifiers of the bundle are allowed to run.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function getAllowedRunningBundles(admin: Want, accountId: number): Array<string>;

  /**
   * Sets whether to disable a specified ability.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } bundleName - bundleName indicates the name of bundle.
   * @param { number } accountId - accountId indicates the ID of OS account.
   * @param { string } abilityName - abilityName indicates the simplified class name of ability.
   * @param { boolean } isDisabled - The value true means to disable it, and the value false means to enable it.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string, isDisabled: boolean): void;

  /**
   * Checks whether a specified ability is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } bundleName - bundleName indicates the name of bundle.
   * @param { number } accountId - accountId indicates the ID of OS account.
   * @param { string } abilityName - abilityName indicates the simplified class name of ability.
   * @returns { boolean } returns true if the ability is disabled; returns false otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function isAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string): boolean;

  /**
   * Adds an application to the Dock.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @param { string } abilityName - abilityName indicates the ability name of the application.
   * @param { number } [index] - index indicates the position of the application in the Dock.
   *     <br>Value range:[0,100) Default value:99
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200015 - The ability does not exist.
   * @throws { BusinessError } 9201013 - The number of applications in the Dock has reached the maximum.
   * @throws { BusinessError } 9201014 - The application is already in the Dock.
   * @throws { BusinessError } 9201015 - The application is not installed.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 9201019 - The location is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addDockApp(admin: Want, bundleName: string, abilityName: string, index?: number): void;

  /**
   * Removes an application from the Dock.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @param { string } abilityName - abilityName indicates the ability name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201016 - The application has not been added to the Dock.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeDockApp(admin: Want, bundleName: string, abilityName: string): void;

  /**
   * Gets the applications in the Dock.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *     The admin must have the corresponding permission.
   * @returns { Array<DockInfo> } returns the information of applications in the Dock.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDockApps(admin: Want): Array<DockInfo>;
}

export default applicationManager;