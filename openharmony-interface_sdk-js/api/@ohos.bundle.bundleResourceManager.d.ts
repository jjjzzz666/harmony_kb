/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import bundleManager from './@ohos.bundle.bundleManager';
import type { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import type { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import type { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
/*** endif */
/*** if arkts static */
import bundleManager from './@ohos.bundle.bundleManager';
import { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
import bundleManager from './@ohos.bundle.bundleManager';
/*** endif */

/**
 * This module is used to obtain bundle resource information of various applications installed on the current device.
 *
 * @namespace bundleResourceManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace bundleResourceManager {
  /**
   * Used to query the enumeration value of resource info. Multiple values can be passed in the form.
   * Multiple value input, such as GET_RESOURCE_INFO_WITH_LABEL | GET_RESOURCE_INFO_WITH_ICON.
   *
   * @enum { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceFlag {
    /**
     * Used to obtain the resource info contains label and icon.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ALL = 0x00000001,

    /**
     * Used to obtained the label resource info.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_LABEL = 0x00000002,

    /**
     * Used to obtained the icon resource info.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_ICON = 0x00000004,

    /**
     * Used to obtain the resource info sorted by label.
     * It can't be used alone, it needs to be used with GET_RESOURCE_INFO_ALL or GET_RESOURCE_INFO_WITH_LABEL.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL = 0x00000008,

    /**
     * Used to obtain bundle icon drawable descriptor.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_DRAWABLE_DESCRIPTOR = 0x00000010,

    /**
     * Used to obtain only main ability resource.
     * Only effective on {@link getLauncherAbilityResourceInfo} and {@link getAllLauncherAbilityResourceInfo}
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY = 0x00000020
  }

  /**
   * Obtains the BundleResourceInfo of a specified bundle. Default resourceFlag is GET_RESOURCE_INFO_ALL.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * BundleResourceInfo object that will be returned.
   * @returns { BundleResourceInfo } Returns the BundleResourceInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   */
  function getBundleResourceInfo(bundleName: string, resourceFlags?: int): BundleResourceInfo;

  /**
   * Obtains the BundleResourceInfo of a specified bundle. Default resourceFlag is GET_RESOURCE_INFO_ALL.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { int } [resourceFlags] {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * BundleResourceInfo object that will be returned.
   * @param { int } [appIndex] - Indicates the index of the bundle,The default value is 0.
   * @returns { BundleResourceInfo } Returns the BundleResourceInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): BundleResourceInfo;

  /**
   * Obtains the LauncherAbilityResourceInfo of a specified bundle. Default resourceFlag is GET_RESOURCE_INFO_ALL.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * LauncherAbilityResourceInfo object that will be returned.
   * @returns { Array<LauncherAbilityResourceInfo> } Returns a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   */
  function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains the LauncherAbilityResourceInfo of a specified bundle. Default resourceFlag is GET_RESOURCE_INFO_ALL.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { int } [resourceFlags] {@link ResourceFlag} - Indicates the flag used to specify information
   * <br>contained in the LauncherAbilityResourceInfo object that will be returned.
   * @param { int } [appIndex] - Indicates the index of the bundle,The default value is 0.
   * @returns { Array<LauncherAbilityResourceInfo> } Returns a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains BundleResourceInfo of all bundles available in the system.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * BundleResourceInfo that will be returned.
   * @param { AsyncCallback<Array<BundleResourceInfo>> } callback - The callback of getting a list of BundleResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllBundleResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<BundleResourceInfo>>): void;

  /**
   * Obtains BundleResourceInfo of all bundles available in the system.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * BundleResourceInfo that will be returned.
   * @returns { Promise<Array<BundleResourceInfo>> } Returns a list of BundleResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>;

  /**
   * Obtains LauncherAbilityResourceInfo of all launcher abilities available in the system.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * LauncherAbilityResourceInfo that will be returned.
   * @param { AsyncCallback<Array<LauncherAbilityResourceInfo>> } callback - The callback of getting a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>): void;

  /**
   * Obtains LauncherAbilityResourceInfo of all launcher abilities available in the system.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information contained in the
   * LauncherAbilityResourceInfo that will be returned.
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Returns a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityResourceInfo(resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>;

  /**
   * Obtains the abilityResourceInfo of a specified bundle.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { bundleManager.ExtensionAbilityType } extensionAbilityType - Indicates ExtensionAbilityType.
   * <br>Currently only supported ExtensionAbilityType::INPUTMETHOD,ExtensionAbilityType::SHARE,ExtensionAbilityType::ACTION.
   * @param { int } resourceFlags - Indicates the flag used to specify information.
   * <br>Contained in the ExtensionAbilityResourceInfo object that will be returned.
   * @param { int } [appIndex] - Indicates the index of the bundle.
   * @returns { Array<LauncherAbilityResourceInfo> } Returns a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getExtensionAbilityResourceInfo(bundleName: string, extensionAbilityType: bundleManager.ExtensionAbilityType, 
    resourceFlags: int, appIndex?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains BundleResourceInfo of all uninstalled but retained data bundles in the system.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information
   *     contained in the BundleResourceInfo that will be returned.
   * @returns { Promise<Array<BundleResourceInfo>> } Returns a list of BundleResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllUninstalledBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>;

  /**
   * Obtains LauncherAbilityResourceInfo of all launcher abilities by optionsList in the system.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { Array<BundleOptions> } optionsList - Indicates the bundle options list.
   * @param { int } resourceFlags {@link ResourceFlag} - Indicates the flag used to specify information
   *     contained in the LauncherAbilityResourceInfo that will be returned.
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Returns a list of LauncherAbilityResourceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getLauncherAbilityResourceInfoList(optionsList: Array<BundleOptions>, resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>;

  /**
   * Obtains resource info of a bundle.
   *
   * @typedef { _BundleResourceInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type BundleResourceInfo = _BundleResourceInfo;

  /**
   * Obtains resource info of a ability.
   *
   * @typedef { _LauncherAbilityResourceInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LauncherAbilityResourceInfo = _LauncherAbilityResourceInfo;
}

export default bundleResourceManager;
