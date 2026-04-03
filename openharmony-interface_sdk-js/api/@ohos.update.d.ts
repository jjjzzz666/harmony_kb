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
 * @kit BasicServicesKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * A static class to do update for device.
 *
 * @namespace update
 * @syscap SystemCapability.Update.UpdateService
 * @systemapi hide for inner use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace update {
  /**
   * Get online update handler for the calling device.
   *
   * @param { UpgradeInfo } upgradeInfo - Indicates client app and business type.
   * @returns { Updater } online update handler to perform online update.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater;

  /**
   * Get restore handler.
   *
   * @returns { Restorer } restore handler to perform factory reset.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getRestorer(): Restorer;

  /**
   * Get local update handler.
   *
   * @returns { LocalUpdater } local update handler to perform local update.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getLocalUpdater(): LocalUpdater;

  /**
   * A static class to do online update.
   *
   * @interface Updater
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Updater {
    /**
     * Check new version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CheckResult> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(callback: AsyncCallback<CheckResult>): void;

    /**
     * Check new version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CheckResult> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(): Promise<CheckResult>;

    /**
     * Get new version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<NewVersionInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void;

    /**
     * Get new version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<NewVersionInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(): Promise<NewVersionInfo>;

    /**
     * Get new version description.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * Get new version description.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @returns { Promise<Array<ComponentDescription>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>;

    /**
     * Get current version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CurrentVersionInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void;

    /**
     * Get current version.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CurrentVersionInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(): Promise<CurrentVersionInfo>;

    /**
     * Get current version description.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * Get current version description.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - Options of the description file.
     * @returns { Promise<Array<ComponentDescription>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>;

    /**
     * Get task info.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<TaskInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<TaskInfo>): void;

    /**
     * Get task info.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<TaskInfo> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<TaskInfo>;

    /**
     * Trigger download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DownloadOptions } downloadOptions - Download options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *    If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Trigger download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { DownloadOptions } downloadOptions - Download options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>;

    /**
     * Resume download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ResumeDownloadOptions } resumeDownloadOptions - Options for resume download.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *   If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Resume download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ResumeDownloadOptions } resumeDownloadOptions - Options for resume download.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>;

    /**
     * Pause download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { PauseDownloadOptions } pauseDownloadOptions - Options for pause download.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *    If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Pause download new version packages.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { PauseDownloadOptions } pauseDownloadOptions - Options for pause download.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>;

    /**
     * Install packages for the device.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { UpgradeOptions } upgradeOptions - Update options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *   If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void;

    /**
     * Install packages for the device.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { UpgradeOptions } upgradeOptions - Update options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>;

    /**
     * Clear error during upgrade.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ClearOptions } clearOptions - Clear options.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *   If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void;

    /**
     * Clear error during upgrade.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - Version digest information.
     * @param { ClearOptions } clearOptions - Clear options.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>;

    /**
     * Get current upgrade policy.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<UpgradePolicy> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void;

    /**
     * Get current upgrade policy.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<UpgradePolicy> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(): Promise<UpgradePolicy>;

    /**
     * Set upgrade policy.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - Update policy.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void;

    /**
     * Set upgrade policy.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - Update policy.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy): Promise<void>;

    /**
     * Terminate upgrade task.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *     If the operation is successful, 'err' is 'undefined'; otherwise, 'err' is an 'Error' object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(callback: AsyncCallback<void>): void;

    /**
     * Terminate upgrade task.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(): Promise<void>;

    /**
     * Subscribe task update events
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * Unsubscribe task update events
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   * A static class to do restore.
   *
   * @interface Restorer
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Restorer {
    /**
     * Reboot and clean user data.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *   If the operation is successful, `err` is `undefined`; otherwise, `err` is an `Error` object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(callback: AsyncCallback<void>): void;

    /**
     * Reboot and clean user data.
     *
     * @permission ohos.permission.FACTORY_RESET
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(): Promise<void>;

    /**
     * Force reboot and clean user data.
     *
     * @permission ohos.permission.FORCE_FACTORY_RESET
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 23 dynamic&static
     */
    forceFactoryReset(): Promise<void>;
  }

  /**
   * A static class to do local update.
   *
   * @interface LocalUpdater
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocalUpdater {
    /**
     * Verify local update package.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - Update file.
     * @param { string } certsFile - Path of the certificate file.
     * @param { AsyncCallback<void> } callback - Callback used to return the verify upgrade package result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void;

    /**
     * Verify local update package.
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - Update file.
     * @param { string } certsFile - Path of the certificate file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>;

    /**
     * Apply local update package.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - Update files.
     * @param { AsyncCallback<void> } callback - Callback used to return the apply new version result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void;

    /**
     * Apply local update package.
     * Apps should listen to task update event
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - Update files.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>;

    /**
     * Subscribe task update events
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * Unsubscribe task update events
     *
     * @param { EventClassifyInfo } eventClassifyInfo - Event information.
     * @param { UpgradeTaskCallback } taskCallback - Event callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   * Represents upgrade info.
   *
   * @typedef UpgradeInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeInfo {
    /**
     * Upgrade client package name
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeApp: string;

    /**
     * BusinessType of upgrade
     *
     * @type { BusinessType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    businessType: BusinessType;
  }

  /**
   * Represents business type.
   *
   * @typedef BusinessType
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BusinessType {
    /**
     * Vendor of business type
     *
     * @type { BusinessVendor }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    vendor: BusinessVendor;

    /**
     * Update service type
     *
     * @type { BusinessSubType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subType: BusinessSubType;
  }

  /**
   * Represents new version check result.
   *
   * @typedef CheckResult
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
   */
  export interface CheckResult {
    /**
     * New version exist or not
     *
     * @type { boolean }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isExistNewVersion: boolean;

    /**
     * New version info
     *
     * @type { NewVersionInfo }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    newVersionInfo: NewVersionInfo;
  }

  /**
   * Represents new version info.
   *
   * @typedef NewVersionInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NewVersionInfo {
    /**
     * Digest info of new version
     *
     * @type { VersionDigestInfo }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * New version component array
     *
     * @type { Array<VersionComponent> }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents version digest info.
   *
   * @typedef VersionDigestInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionDigestInfo {
    /**
     * Version digest value
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigest: string;
  }

  /**
   * Represents version component info.
   *
   * @typedef VersionComponent
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionComponent {
    /**
     * Version component id
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * Version component type
     *
     * @type { ComponentType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * Upgrade action
     *
     * @type { UpgradeAction }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeAction: UpgradeAction;

    /**
     * Display version number
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    displayVersion: string;

    /**
     * Internal version number
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    innerVersion: string;

    /**
     * Update package size
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * Effective mode
     *
     * @type { EffectiveMode }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    effectiveMode: EffectiveMode;

    /**
     * Information about the version description file
     *
     * @type { DescriptionInfo }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;

    /**
     * Ota mode
     *
     * @type { ?OtaMode }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    otaMode?: OtaMode;
  }

  /**
   * Represents description options.
   *
   * @typedef DescriptionOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionOptions {
    /**
     * Format of the description file
     *
     * @type { DescriptionFormat }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    format: DescriptionFormat;

    /**
     * Language of the description file
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    language: string;
  }

  /**
   * Represents version component description.
   *
   * @typedef ComponentDescription
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ComponentDescription {
    /**
     * Component id
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * Information about the description file
     *
     * @type { DescriptionInfo }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;
  }

  /**
   * Represents new version description information.
   *
   * @typedef DescriptionInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionInfo {
    /**
     * Description content type
     *
     * @type { DescriptionType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionType: DescriptionType;

    /**
     * Content of the description file
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    content: string;
  }

  /**
   * Represents current version info.
   *
   * @typedef CurrentVersionInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CurrentVersionInfo {
    /**
     * System version number
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    osVersion: string;

    /**
     * Device name
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * Current version component array
     *
     * @type { Array<VersionComponent> }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents download options.
   *
   * @typedef DownloadOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DownloadOptions {
    /**
     * Allow download with the network type
     *
     * @type { NetType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;

    /**
     * Upgrade command
     *
     * @type { Order }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * Represents resume download options.
   *
   * @typedef ResumeDownloadOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ResumeDownloadOptions {
    /**
     * Allow download with the network type
     *
     * @type { NetType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;
  }

  /**
   * Represents pause download options.
   *
   * @typedef PauseDownloadOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface PauseDownloadOptions {
    /**
     * Whether allow auto resume when net available
     *
     * @type { boolean }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isAllowAutoResume: boolean;
  }

  /**
   * Represents upgrade options.
   *
   * @typedef UpgradeOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeOptions {
    /**
     * Upgrade command
     *
     * @type { Order }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * Represents clear error options.
   *
   * @typedef ClearOptions
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ClearOptions {
    /**
     * Clear status error
     *
     * @type { UpgradeStatus }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;
  }

  /**
   * Represents upgrade policy.
   *
   * @typedef UpgradePolicy
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePolicy {
    /**
     * Download strategy: open or close
     *
     * @type { boolean }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    downloadStrategy: boolean;

    /**
     * Auto upgrade strategy: open or close
     *
     * @type { boolean }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradeStrategy: boolean;

    /**
     * Auto upgrade period
     *
     * @type { Array<UpgradePeriod> }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradePeriods: Array<UpgradePeriod>;
  }

  /**
   * Represents upgrade period.
   *
   * @typedef UpgradePeriod
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePeriod {
    /**
     * Start time of upgrade period
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * End time of upgrade period
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Represents task info.
   *
   * @typedef TaskInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskInfo {
    /**
     * Whether upgrade task exist
     *
     * @type { boolean }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    existTask: boolean;

    /**
     * Task body info
     *
     * @type { TaskBody }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * Represents event info.
   *
   * @typedef EventInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventInfo {
    /**
     * Event id
     *
     * @type { EventId }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventId: EventId;

    /**
     * Task body info
     *
     * @type { TaskBody }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * Represents task body info.
   *
   * @typedef TaskBody
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskBody {
    /**
     * Digest info of new version
     *
     * @type { VersionDigestInfo }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * Upgrade status
     *
     * @type { UpgradeStatus }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;

    /**
     * Upgrade sub status
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subStatus: int;

    /**
     * Upgrade progress
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * Install mode
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    installMode: int;

    /**
     * Error messages
     *
     * @type { Array<ErrorMessage> }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessages: Array<ErrorMessage>;

    /**
     * Version component array
     *
     * @type { Array<VersionComponent> }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * Represents error message.
   *
   * @typedef ErrorMessage
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ErrorMessage {
    /**
     * Error code
     *
     * @type { int }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorCode: int;

    /**
     * Error message
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessage: string;
  }

  /**
   * Represents event classify info.
   *
   * @typedef EventClassifyInfo
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventClassifyInfo {
    /**
     * Event classify
     *
     * @type { EventClassify }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventClassify: EventClassify;

    /**
     * Additional information
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    extraInfo: string;
  }

  /**
   * Represents upgrade file info.
   *
   * @typedef UpgradeFile
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeFile {
    /**
     * Upgrade file type
     *
     * @type { ComponentType }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    fileType: ComponentType;

    /**
     * Upgrade file path
     *
     * @type { string }
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    filePath: string;
  }

  /**
   * Called when upgrade task info changes.
   * You need to implement this method in a child class.
   *
   * @typedef UpgradeTaskCallback
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9
   */
  /**
   * UpgradeTaskCallback change form interface to type.
   * Called when upgrade task info changes.
   * You need to implement this method in a child class.
   *
   * @typedef { function } UpgradeTaskCallback
   * @param { EventInfo } eventInfo - Event information.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 23 dynamic
   * @since 23 static
   */
  export type UpgradeTaskCallback = (eventInfo: EventInfo) => void;

  /**
   * Enumerates business vendor type.
   *
   * @enum { string }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessVendor {
    /**
     * Device vendor is open source.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    PUBLIC = 'public'
  }

  /**
   * Enumerates business sub type.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessSubType {
    /**
     * Business sub type is Firmware.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    FIRMWARE = 1
  }

  /**
   * Enumerates component type.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * Component type is OTA.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    OTA = 1
  }

  /**
   * Enumerates upgrade action type.
   *
   * @enum { string }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeAction {
    /**
     * Differential package.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE = 'upgrade',

    /**
     * Recovery package.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY = 'recovery'
  }

  /**
   * Enumerates effective mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EffectiveMode {
    /**
     * Cold update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    COLD = 1,

    /**
     * Live update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE = 2,

    /**
     * Hybrid live and cold update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE_AND_COLD = 3
  }

  /**
   * Enumerates ota mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 20 dynamic
   * @since 23 static
   */
  export enum OtaMode {
    /**
     * Regular update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    REGULAR_OTA = 0,

    /**
     * Stream update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    STREAM_OTA = 1,

    /**
     * AB regular update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_REGULAR_OTA = 2,

    /**
     * AB stream update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_STREAM_OTA = 3
  }

  /**
   * Enumerates description type.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionType {
    /**
     * Description type is content.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONTENT = 0,

    /**
     * Description type is link.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    URI = 1
  }

  /**
   * Enumerates description format.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionFormat {
    /**
     * Description format is standard format.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    STANDARD = 0,

    /**
     * Description format is Simple format.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    SIMPLIFIED = 1
  }

  /**
   * Enumerates network type.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum NetType {
    /**
     * Network type is data network.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR = 1,

    /**
     * Network type is Wi-Fi hotspot.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    METERED_WIFI = 2,

    /**
     * Network type is non Wi-Fi hotspot.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_METERED_WIFI = 4,

    /**
     * Network type is Wi-Fi.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI = 6,

    /**
     * Network type is data network and Wi-Fi.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR_AND_WIFI = 7
  }

  /**
   * Enumerates upgrade order.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Order {
    /**
     * Upgrade order is download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD = 1,

    /**
     * Upgrade order is Install.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL = 2,

    /**
     * Upgrade order is download and install.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_AND_INSTALL = 3,

    /**
     * Upgrade order is apply.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLY = 4,

    /**
     * Upgrade order is install and apply.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL_AND_APPLY = 6
  }

  /**
   * Enumerates upgrade status.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeStatus {
    /**
     * Upgrade status is waiting for download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_DOWNLOAD = 20,

    /**
     * Upgrade status is downloading.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOADING = 21,

    /**
     * Upgrade status is download paused.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_PAUSED = 22,

    /**
     * Upgrade status is download failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAIL = 23,

    /**
     * Upgrade status is waiting for installation.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_INSTALL = 30,

    /**
     * Upgrade status is upgrading.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPDATING = 31,

    /**
     * Upgrade status is waiting for applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_APPLY = 40,

    /**
     * Upgrade status is applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLYING = 41,

    /**
     * Upgrade status is update succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_SUCCESS = 50,

    /**
     * Upgrade status is update failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_FAIL = 51
  }

  /**
   * Enumerates event classify.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventClassify {
    /**
     * Event classify is task event.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    TASK = 0x01000000
  }

  /**
   * Enumerates event id.
   *
   * @enum { number }
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventId {
    /**
     * Event id is task event.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_BASE = EventClassify.TASK,

    /**
     * Event id is task received.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_RECEIVE = 0x01000001,

    /**
     * Event id is task cancelled.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_CANCEL = 0x01000002,

    /**
     * Event id is waiting for download.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_WAIT = 0x01000003,

    /**
     * Event id is download started.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_START = 0x01000004,

    /**
     * Event id is download progress update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_UPDATE = 0x01000005,

    /**
     * Event id is download paused.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_PAUSE = 0x01000006,

    /**
     * Event id is download resumed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_RESUME = 0x01000007,

    /**
     * Event id is download succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_SUCCESS = 0x01000008,

    /**
     * Event id is download failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_FAIL = 0x01000009,

    /**
     * Event id is waiting for update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_WAIT = 0x0100000a,

    /**
     * Event id is update started.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_START = 0x0100000b,

    /**
     * Event id is update in progress.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_UPDATE = 0x0100000c,

    /**
     * Event id is waiting for applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_WAIT = 0x0100000d,

    /**
     * Event id is applying the update.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_START = 0x0100000e,

    /**
     * Event id is update succeeded.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_SUCCESS = 0x0100000f,

    /**
     * Event id is update failed.
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_FAIL = 0x01000010
  }
}

export default update;