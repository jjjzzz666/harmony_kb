/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { ShortcutInfo as _ShortcutInfo, ShortcutWant as _ShortcutWant, ParameterItem as _ParameterItem } from './bundleManager/ShortcutInfo';

/**
 * Desktop shortcut bundle manager.
 *
 * @namespace shortcutManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi
 * @since 12
 */
/**
 * Desktop shortcut bundle manager.
 *
 * @namespace shortcutManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace shortcutManager {
  /**
   * Add desktop shortcut info.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - Indicates the shortcut info which contains shortcut want.
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function addDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>;

  /**
   * Delete desktop shortcut info.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { ShortcutInfo } shortcutInfo - Indicates the shortcut info which contains shortcut want.
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteDesktopShortcutInfo(shortcutInfo: ShortcutInfo, userId: int): Promise<void>;

  /**
   * Get all desktop shortcut info.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<Array<ShortcutInfo>> } the LauncherShortcutInfo object.
   * @throws { BusinessError } 201 - Verify permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDesktopShortcutInfo(userId: int): Promise<Array<ShortcutInfo>>;

  /**
   * Set a shortcut of current application is visible or invisible.
   *
   * @param { string } id - Indicates id of shortcut to set.
   * @param { boolean } visible - The value true means to set the shortcut visible, otherwise set the shortcut invisible.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function setShortcutVisibleForSelf(id: string, visible: boolean): Promise<void>;

  /**
   * Obtains all shortcut info of the application.
   *
   * @returns { Promise<Array<ShortcutInfo>> } The LauncherShortcutInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllShortcutInfoForSelf(): Promise<Array<ShortcutInfo>>;

  /**
   * Add dynamic shortcut info.
   * If you need to add dynamic shortcutinfo under the current user, ohos.permission.MANAGE_SHORTCUTS
   * needs to be applied for.
   * If you need to add dynamic shortcutinfo under other users, ohos.permission.MANAGE_SHORTCUTS and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { Array<ShortcutInfo> } shortcutInfo - Indicates the dynamic shortcut infos which
   *     contains shortcut want. The sourceType in shortcutInfo will be fixed as 2 (indicating dynamic shortcuts).
   * @param { int } userId - Indicates the id for the user.
   * @returns { Promise<void> } - the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @throws { BusinessError } 18100001 - A combination of bundleName and appIndex in the shutcutInfo list is
   *     different from the others.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function addDynamicShortcutInfos(shortcutInfo: Array<ShortcutInfo>, userId: int): Promise<void>;

  /**
   * Delete dynamic shortcut info.
   * If you need to delete dynamic shortcutinfo under the current user, ohos.permission.MANAGE_SHORTCUTS
   * needs to be applied for.
   * If you need to delete dynamic shortcutinfo under other users, ohos.permission.MANAGE_SHORTCUTS and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS or
   *     (ohos.permission.MANAGE_SHORTCUTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Indicates the application bundle name to be recovered.
   * @param { int } appIndex - Indicates the index of clone app.
   * @param { int } userId - Indicates the user ID.
   * @param { Array<string> } [ids] - Indicates the list of dynamic shortcut ids to be deleted.
   *     If not provided or empty, all dynamic shortcuts will be removed.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function deleteDynamicShortcutInfos(bundleName: string, appIndex: int, userId: int, ids?: Array<string>): Promise<void>;

  /**
   * Set whether to enable specified shortcuts.
   *
   * @permission ohos.permission.MANAGE_SHORTCUTS
   * @param { Array<ShortcutInfo> } shortcutsInfo - Indicates the ShortcutInfo object.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700070 - The specified shortcut id is illegal.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 23 dynamic&static
   */
  function setShortcutsEnabled(shortcutsInfo: Array<ShortcutInfo>, isEnabled: boolean): Promise<void>;

  /**
   * Obtains shortcut info by bundleName, moduleName, abilityName, userId and appIndex.
   * If you need to obtains shortcut info under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * needs to be applied for.
   * If you need to obtains shortcut info under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Indicates the bundle name.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { int } [userId] - Indicates the user ID.
   * @param { int } [appIndex] - Indicates the index of clone app.
   * @returns { Array<ShortcutInfo> } An array of ShortcutInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>;

  /**
   * Checks whether the shortcut capability is supported.
   * @returns { boolean } Returns true if the shortcut capability is supported; returns false otherwise.
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   * 
   */
  function isShortcutSupported(): boolean;

  /**
   * Provides information about a shortcut, including the shortcut ID and label.
   *
   * @typedef { _ShortcutInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Provides information about a shortcut, including the shortcut ID and label.
   *
   * @typedef { _ShortcutInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  export type ShortcutInfo = _ShortcutInfo;
  /**
   * Obtains information about the ability that a shortcut will start.
   *
   * @typedef { _ShortcutWant }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Obtains information about the ability that a shortcut will start.
   *
   * @typedef { _ShortcutWant }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  export type ShortcutWant = _ShortcutWant;
  /**
   * Indicates the custom parameters in shortcut want.
   *
   * @typedef { _ParameterItem }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
    /**
   * Indicates the custom parameters in shortcut want.
   *
   * @typedef { _ParameterItem }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  export type ParameterItem = _ParameterItem;
  }

  export default shortcutManager;
