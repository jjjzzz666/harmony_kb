/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
/*** endif */
import Want from './@ohos.app.ability.Want';

/**
 * Used for application interception control
 *
 * @namespace appControl
 * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appControl {
  /**
   * Indicates the ability component type.
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * Indicates the UI ability type.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY = 1,

    /**
     * Indicates the extension ability type.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }

  /**
   * Indicates the ability component type when uninstalled.
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export enum UninstallComponentType {
    /**
     * Indicates the service extension ability type.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    EXTENSION = 1,
    /**
     * Indicates the UI extension ability type.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UI_EXTENSION = 2
  }

  /**
   * Indicates when to intercept the specified application.
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DisposedType {
    /**
     * All abilities will be blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_APPLICATION = 1,
    /**
     * Only the specified abilities will be blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOCK_ABILITY = 2,
    /**
     * All abilities will not be blocked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NON_BLOCK = 3
  }

  /**
   * Indicates the strategy to intercept the specified application.
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ControlType {
    /**
     * Only the specified abilities are allowed to run.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALLOWED_LIST = 1,
    /**
     * The specified abilities are not allowed to run.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DISALLOWED_LIST = 2
  }

  /**
   * Indicates the rule for interception.
   *
   * @typedef DisposedRule
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DisposedRule {
    /**
     * Indicates the ability that will be pulled up when interception occurs.
     *
     * @type { Want }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * Indicates the type of the ability that will be pulled up when interception occurs.
     *
     * @type { ComponentType }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * Indicates when to intercept the specified application.
     *
     * @type { DisposedType }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    disposedType: DisposedType;

    /**
     * Indicates the interception policy.
     *
     * @type { ControlType }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    controlType: ControlType;

    /**
     * Indicates the abilities to be disposed of the specified application.
     *
     * @type { Array<ElementName> }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    elementList: Array<ElementName>;

    /**
     * Indicates priority of the rule.
     *
     * @type { int }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    priority: int;
  }

  /**
   * Indicates the uninstall rule for interception.
   *
   * @typedef UninstallDisposedRule
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface UninstallDisposedRule {
    /**
     * Indicates the ability that will be pulled up when interception occurs.
     *
     * @type { Want }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * Indicates the type of the ability that will be pulled up when interception occurs.
     *
     * @type { UninstallComponentType }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    uninstallComponentType: UninstallComponentType;

    /**
     * Indicates priority of the rule.
     *
     * @type { int }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    priority: int;
  }

  /**
   * Indicate the configuration for batch interception settings.
   *
   * @typedef DisposedRuleConfiguration
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DisposedRuleConfiguration {
    /**
     * Indicates the app ID of the application.
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appId: string;

    /**
     * Indicates the index of clone app.
     *
     * @type { int }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
     * Indicates the rule for interception.
     *
     * @type { DisposedRule }
     * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    disposedRule: DisposedRule;
  }

  /**
   * Set the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { Want } disposedWant - Indicates the disposed want.
   * @param { AsyncCallback<void> } callback - The callback of setting the disposed status result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want, callback: AsyncCallback<void>): void;

  /**
   * Set the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { Want } disposedWant - Indicates the disposed want.
   * @returns { Promise<void> } The result of setting the disposed status of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDisposedStatus(appId: string, disposedWant: Want): Promise<void>;

  /**
   * Set the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { Want } disposedWant - Indicates the disposed want.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDisposedStatusSync(appId: string, disposedWant: Want): void;

  /**
   * Obtains the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { AsyncCallback<Want> } callback - The callback of getting the disposed status of a specified bundle result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @returns { Promise<Want> } Returns the disposed status of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDisposedStatus(appId: string): Promise<Want>;

  /**
   * Obtains the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @returns { Want } Returns the disposed status of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getDisposedStatusSync(appId: string): Want;

  /**
   * Delete the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { AsyncCallback<void> } callback - the callback of deleting the disposed status of a specified bundle result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void;

  /**
   * Delete the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @returns { Promise<void> } Returns the result of deleting the disposed status of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteDisposedStatus(appId: string): Promise<void>;

  /**
   * Delete the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 10
   */
  /**
   * Delete the disposed status of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteDisposedStatusSync(appId: string, appIndex?: int): void;

  /**
   * Obtains the disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @returns { DisposedRule } Returns the disposed rule of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is an empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11
   */
  /**
   * Obtains the disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @returns { DisposedRule } Returns the disposed rule of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getDisposedRule(appId: string, appIndex?: int): DisposedRule;

  /**
   * Sets the disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { DisposedRule } rule - Indicates the disposed rule of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is an empty string.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 11
   */
  /**
   * Sets the disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appId - Indicates the app ID of the application.
   * @param { DisposedRule } rule - Indicates the disposed rule of a specified bundle.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setDisposedRule(appId: string, rule: DisposedRule, appIndex?: int): void;

  /**
   * Sets the uninstall disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - Indicates the appIdentifier of the application.
   * @param { UninstallDisposedRule } rule - Indicates the uninstall disposed rule of a specified bundle.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @throws { BusinessError } 17700075 - The specified bundleName of want is not the same with caller.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function setUninstallDisposedRule(appIdentifier: string, rule: UninstallDisposedRule, appIndex?: int): void;
  
  /**
   * Obtains the uninstall disposed rule of a specified bundle.
   *
   * @permission ohos.permission.GET_DISPOSED_APP_STATUS or ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - Indicates the appIdentifier of the application.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @returns { UninstallDisposedRule } Returns the uninstall disposed rule of a specified bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function getUninstallDisposedRule(appIdentifier: string, appIndex?: int): UninstallDisposedRule;

  /**
   * Delete the uninstall disposed rule of a specified bundle.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { string } appIdentifier - Indicates the appIdentifier of the application.
   * @param { int } [appIndex] Indicates the index of clone app.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @throws { BusinessError } 17700074 - The specified appIdentifier is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function deleteUninstallDisposedRule(appIdentifier: string, appIndex?: int): void;

  /**
   * Batch set disposed rules for specified bundles.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS
   * @param { Array<DisposedRuleConfiguration> } disposedRuleConfigurations - Indicate the configuration for batch interception settings.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700005 - The specified app ID is invalid.
   * @throws { BusinessError } 17700061 - AppIndex is not in the valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDisposedRules(disposedRuleConfigurations: Array<DisposedRuleConfiguration>): void;

  /**
   * Query all disposed rules under the current user.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @returns { Array<DisposedRuleConfiguration> } Returns all disposed rules.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllDisposedRules(): Array<DisposedRuleConfiguration>;

  /**
   * Query all disposed rules under the current user for the specified setter bundle name.
   *
   * @permission ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS
   * @param { string } bundleName - Indicates the bundle name of the setter that sets the disposed rules.
   * @returns { Array<DisposedRuleConfiguration> } Returns disposed rules.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.AppControl
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   * @since 24 static
   */
  function getDisposedRulesByBundle(bundleName: string): Array<DisposedRuleConfiguration>;
}

export default appControl;
