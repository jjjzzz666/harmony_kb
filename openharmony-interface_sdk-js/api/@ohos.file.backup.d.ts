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
 * @kit CoreFileKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Module providing backup and restore capabilities.
 *
 * @namespace backup
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace backup {
  /**
   * Corresponding to a file's metadata. FileMeta is useful when doing IPC with the backup service.
   *
   * @interface FileMeta
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface FileMeta {
    /**
     * Indicates the name of a bundle.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Indicates a uri to a file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;
  }

  /**
   * Corresponding to a file's data. Filedata is useful when doing IPC with the backup service.
   *
   * @interface FileData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface FileData {
    /**
     * Indicates a native file descriptor typically retrieved from the backup service to hold the file's content.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    fd: int;
  }

  /**
   * Save the time information of the incremental backup. IncrementalBackupTime is useful when doing IPC with the backup service.
   *
   * @interface IncrementalBackupTime
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface IncrementalBackupTime {
    /**
     * Indicates the name of a bundle.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Time of the last incremental backup
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    lastIncrementalTime: long;
  }

  /**
   * Manifest file information in incremental data. FileManifestData is useful when doing IPC with the backup service.
   *
   * @interface FileManifestData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface FileManifestData {
    /**
     * A file descriptor for the manifest file that holds the data
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    manifestFd: int;
  }

  /**
   * Provides configuration parameters for backup and restore.
   *
   * @interface BackupParams
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface BackupParams {
    /**
     * The optional parameters a json strings in the form of key value in backup or restore.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    parameters?: string;
  }

  /**
   * Control backup and restore priority sequence
   *
   * @interface BackupPriority
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface BackupPriority {
    /**
     * Indicates the priority of a bundle.
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    priority?: int;
  }

  /**
   * Corresponds to an incremental application, including its last incremental time and incremental list.
   *
   * @extends IncrementalBackupTime, FileManifestData, BackupParams, BackupPriority
   * @interface IncrementalBackupData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface IncrementalBackupData extends IncrementalBackupTime, FileManifestData, BackupParams, BackupPriority {}

  /**
   * Corresponding to a file, including its metadata and data.
   * File is useful when doing IPC with the backup service.
   *
   * @extends FileMeta, FileData, FileManifestData
   * @interface File
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  /**
   * Corresponds to a file, including its metadata and data and the file's manifest data.
   * Files are useful as IPC and backup services.
   *
   * @extends FileMeta, FileData, FileManifestData
   * @interface File
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface File extends FileMeta, FileData, FileManifestData {}

  /**
   * Parameters required to perform garbage collection (GC).
   *
   * @interface FileSystemRequestConfig
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface FileSystemRequestConfig {
    /**
     * Specifies the trigger type for garbage collection (0-default Device GC).
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    triggerType: int;

    /**
     * Defines the target size (in MBytes) for garbage collection.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    writeSize: int;

    /**
     * Sets the maximum wait time (in seconds) for GC operation.
     *
     * @type { int }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    waitTime: int;
  }

  /**
   * Requests filesystem garbage collection with specified configuration.
   *
   * @permission ohos.permission.BACKUP
   * @param { FileSystemRequestConfig } config - Configuration parameters for garbage collection.
   *     <br>triggerType: 0. writeSize: 0 - 2097152(MB). waitTime: 0-300(s).
   * @returns { Promise<int> } The errcode of garbage collection.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function fileSystemServiceRequest(config: FileSystemRequestConfig): Promise<int>;

  /**
   * Obtain the backupVersion.
   *
   * @permission ohos.permission.BACKUP
   * @returns { string } Return the backupVersion.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getBackupVersion(): string;

  /**
   * Obtain a Json file that describes local capabilities.
   *
   * @permission ohos.permission.BACKUP
   * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
   *     deleted automatically when closed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(): Promise<FileData>;

  /**
   * Obtain a Json file that describes local capabilities.
   *
   * @permission ohos.permission.BACKUP
   * @param { AsyncCallback<FileData> } callback A callback method, the argument FileData will holding all the local capabilities.
   *     The returned file is a temporal file that will be deleted automatically when closed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(callback: AsyncCallback<FileData>): void;

  /**
   * Obtain a json file that describes local capabilities.
   *
   * @permission ohos.permission.BACKUP
   * @param { Array<IncrementalBackupTime> } dataList
   * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
   * deleted automatically when closed.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLocalCapabilities(dataList: Array<IncrementalBackupTime>): Promise<FileData>;

  /**
    * Get Backup information from bundle.
    *
    * @permission ohos.permission.BACKUP
    * @param { string } bundleToBackup Bundle to backup.
    * @returns { string } Return the backup application's info.
    * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
    * <br>2. Incorrect parameter types. 3.Parameter verification failed.
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @systemapi
    * @since 12 dynamic
    * @since 23 static
    */
  function getBackupInfo(bundleToBackup: string): string;

  /**
   * Update backup or restore timeout.
   *
   * @permission ohos.permission.BACKUP
   * @param { string } bundleName set update to bundleName app.
   * @param { int } timeout Update backup or restore timeout(unit:ms).
   * @returns { boolean } Return update result, true is success, false is fail.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function updateTimer(bundleName: string, timeout: int): boolean;

  /**
   * Update send file fd rate.
   *
   * @permission ohos.permission.BACKUP
   * @param { string } bundleName set update to bundleName app.
   * @param { int } sendRate set send file fd rate.
   * @returns { boolean } Return update result, true is success, false is fail.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
  */
  function updateSendRate(bundleName: string, sendRate: int): boolean;

  /**
   * function that returns backup datasize by bundleName.
   *
   * @typedef {function} OnBackupSizeReport
   * @param {string} reportInfo -the scanned backup datasize infos.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
   type OnBackupSizeReport = (reportInfo: string) => void;

  /**
   * function that returns backup BundlePara.
   *
   * @typedef { undefined | string }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type BundlePara = undefined | string;

  /**
   * function that returns backup datasize by bundleName.
   * Callback called when the backup_sa service return result information.
   * The first return string parameter indicates the result of the bundle.
   * 
   * @typedef {function} OnProcess
   * @param { string } bundleName - the bundleName that triggers the callback.
   * @param { string } process - the process info of the bundle.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type OnProcess = (bundleName: string, process: string) => void;

  /**
   * Callback called when the backup service return result information.
   * The first return string parameter indicates the bundleName that triggers the callback.
   * The second return string parameter indicates the result of the bundle.
   * 
   * @typedef {function} OnResultReport
   * @param { string } bundleName - the bundleName that triggers the callback.
   * @param { string } result - the result of the bundle.
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type OnResultReport = (bundleName: string, result: string) => void;

  /**
   * General callbacks for both backup and restore procedure.
   * The backup service will notify the client by these callbacks.
   *
   * @interface GeneralCallbacks
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface GeneralCallbacks {
    /**
     * Callback called when the backup service tries to send files to the client.
     * The File argument indicates a file to send to the client.
     *     The returned file is owned by the backup service and will be cleaned by the service once the file is closed.
     *
     * @type { AsyncCallback<File> }
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onFileReady: AsyncCallback<File>;

    /**
     * Callback called when a backup/restore procedure for an bundle is started.
     * The return string argument indicates the name of the bundle.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     */
    /**
     * Callback called when a backup/restore procedure for an bundle is started.
     * The first return string parameter indicates the name of the bundle.
     * The second return string parameter indicates that when BusinessError errors occur,
     * the callback data is the name of the bundle.
     *
     * @type { AsyncCallback<string, void | string> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500001 - The application is not added to the backup or restore
     * @throws { BusinessError } 13500002 - Failed to start application extension Procedure
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     */
    onBundleBegin: AsyncCallback<string, void | string>;

    /**
     * Callback called when a backup/restore procedure for an bundle is started.
     * The first return string parameter indicates the name of the bundle.
     * The second return string parameter indicates that when BusinessError errors occur,
     * the callback data is the name of the bundle.
     *
     * @type { AsyncCallback<string, BundlePara> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500001 - The application is not added to the backup or restore
     * @throws { BusinessError } 13500002 - Failed to start application extension Procedure
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onBundleBegin: AsyncCallback<string, BundlePara>;

    /**
     * Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly.
     * The return string argument indicates the name of the bundle.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     */
    /**
     * Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly.
     * The first return string parameter indicates the name of the bundle.
     * The second return string parameter indicates that when BusinessError errors occur,
     * the callback data is the name of the bundle.
     *
     * @type { AsyncCallback<string, void | string> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500003 - Backup or restore timed out
     * @throws { BusinessError } 13500004 - Application extension death
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     */
    onBundleEnd: AsyncCallback<string, void | string>;

    /**
     * Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly.
     * The first return string parameter indicates the name of the bundle.
     * The second return string parameter indicates that when BusinessError errors occur,
     * the callback data is the name of the bundle.
     *
     * @type { AsyncCallback<string, BundlePara> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500003 - Backup or restore timed out
     * @throws { BusinessError } 13500004 - Application extension death
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onBundleEnd: AsyncCallback<string, BundlePara>;

    /**
     * Callback called when the all the bundles to backup/restore are done or aborted unexpectedly.
     *
     * @type { AsyncCallback<undefined> }
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onAllBundlesEnd: AsyncCallback<undefined>;

    /**
     * Callback called when the backup service dies unexpectedly.
     *
     * @type { Callback<undefined> }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    onBackupServiceDied: Callback<undefined>;

    /**
     * Callback called when the backup service return result information.
     * The first return string parameter indicates the bundleName that triggers the callback.
     * The second return string parameter indicates the result of the bundle.
     *
     * @param { string } bundleName the bundleName that triggers the callback.
     * @param { string } result the result of the bundle.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    onResultReport(bundleName: string, result: string): void;

    /**
     * Callback called when the backup service return result information.
     * The first return string parameter indicates the bundleName that triggers the callback.
     * The second return string parameter indicates the result of the bundle.
     *
     * @type { OnResultReport }
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onResultReport: OnResultReport;

    /**
     * Callback called when the backup_sa service return result information.
     * The first return string parameter indicates the result of the bundle.
     *
     * @param { string } bundleName the bundleName that triggers the callback.
     * @param { string } process the process info of the bundle.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500006 - Tar error
     * @throws { BusinessError } 13500008 - Untar error
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    onProcess(bundleName: string, process: string): void;

    /**
     * Callback called when the backup_sa service return result information.
     * The first return string parameter indicates the result of the bundle.
     *
     * @type { OnProcess }
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13500006 - Tar error
     * @throws { BusinessError } 13500008 - Untar error
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onProcess: OnProcess;

    /**
     * Callback called when the backup_sa service return result information.
     * The first return string parameter indicates the result of the scanned bundle datasize.
     *
     * @type {OnBackupSizeReport}.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    onBackupSizeReport?: OnBackupSizeReport;
  }

  /**
   * Control class for backup procedure.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class SessionBackup {
    /**
     * Constructor for obtaining the instance of the SessionBackup class.
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks Callbacks to be registered for the backup.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * Obtain a Json file that describes local capabilities.
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
     * deleted automatically when closed.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * Obtain application data size to be backed up.
     *
     * @permission ohos.permission.BACKUP
     * @param { boolean } isPreciseScan Indicates whether to obtain the exact data size.
     * @param { Array<IncrementalBackupTime> } dataList Application list.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getBackupDataSize(isPreciseScan: boolean, dataList: Array<IncrementalBackupTime>): Promise<void>;

    /**
     * Append new bundles to backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup Bundles to backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    /**
     * Append new bundles and backupInfos to backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup Bundles to backup.
     * @param { string[] } infos Infos to backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: string[], infos?: string[]): Promise<void>;

    /**
     * Append new bundles to backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup Bundles to backup.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when appendBundles has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: string[], callback: AsyncCallback<void>): void;

    /**
     * End Backup process
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * cancel the application being backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be canceled.
     * @returns { int } Return cancel result, 0 is success, 13500011 is fail, 13500012 is not have task. 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

     /**
     * Provides an interface for the tool to clear temporary directories
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be cleaned.
     * @returns { Promise<boolean> } Return clean result, true is success, false is fail.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * Provides an interface for the tool to get compatibility info.
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application that need to get compatibilityInfo.
     * @param { string } extInfo - Indicates the extension information of application.
     * @returns { Promise<string> } Return compatibility info.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;
  }

  /**
   * Control class for restore procedure.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class SessionRestore {
    /**
     * Constructor for obtaining the instance of the SessionBackup class.
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks Callbacks to be registered for the restore.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * Obtain a Json file that describes local capabilities.
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
     * deleted automatically when closed.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * Append new bundles to be restore up during the restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd Opened JSON file that stores remote device capabilities.
     *     You can use the getLocalCapabilities method to obtain the value.
     * @param { string[] } bundlesToBackup Bundles to restore.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    /**
     * Append new bundles and restoreInfos to be restore up during the restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd Opened JSON file that stores remote device capabilities.
     *     You can use the getLocalCapabilities method to obtain the value.
     * @param { string[] } bundlesToBackup Bundles to restore.
     * @param { string[] } [infos] infos to restore
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], infos?: string[]): Promise<void>;

    /**
     * Append new bundles to be restore up during the restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { int } remoteCapabilitiesFd Opened JSON file that stores remote device capabilities.
     *     You can use the getLocalCapabilities method to obtain the value.
     * @param { string[] } bundlesToBackup Bundles to restore.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when appendBundles has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    appendBundles(remoteCapabilitiesFd: int, bundlesToBackup: string[], callback: AsyncCallback<void>): void;

    /**
     * Publish the file handle to the backup service to make the service aware that the file's content is ready.
     * This interface is part of the zero-copy feature.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Make sure that the backup framework holds
     *     this file by calling getFileHandle.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    publishFile(fileMeta: FileMeta): Promise<void>;

    /**
     * Publish the file handle to the backup service to make the service aware that the file's content is ready.
     * This interface is part of the zero-copy feature.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Make sure that the backup framework holds
     *     this file by calling getFileHandle.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when publishFile has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    publishFile(fileMeta: FileMeta, callback: AsyncCallback<void>): void;

    /**
     * Request to get a shared file from the service. This interface is part of the zero-copy feature.
     * Developers could get the file through onFileReady callback.
     * When the client accomplished the file, use publishFile to publish.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Note that all the files should come
     *     from the backup procedure or the getLocalCapabilities method.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getFileHandle(fileMeta: FileMeta): Promise<void>;

    /**
     * Request to get a shared file from the service. This interface is part of the zero-copy feature.
     * Developers could get the file through onFileReady callback.
     * When the client accomplished the file, use publishFile to publish.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Note that all the files should come
     *     from the backup procedure or the getLocalCapabilities method.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when getFileHandle has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getFileHandle(fileMeta: FileMeta, callback: AsyncCallback<void>): void;

    /**
     * End restore process
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * cancel the application being restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be canceled.
     * @returns { int } Return cancel result, 0 is success, 13500011 is fail, 13500012 is not have task. 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

    /**
     * Provides an interface for the tool to clear temporary directories
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be cleaned.
     * @returns { Promise<boolean> } Return clean result, true is success, false is fail.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * Provides an interface for the tool to get compatibility info.
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application that need to get compatibilityInfo.
     * @param { string } extInfo - Indicates the extension information of application.
     * @returns { Promise<string> } Return compatibility info.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;
  }

  /**
   * Control class for incremental backup procedure.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class IncrementalBackupSession {
    /**
     * Constructor for obtaining the instance of the IncrementalBackupSession class.
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks Callbacks to be registered for the backup.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(callbacks: GeneralCallbacks);

   /**
     * Obtain a Json file that describes local capabilities.
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
     * deleted automatically when closed.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getLocalCapabilities(): Promise<FileData>;

    /**
     * Obtain application data size to be backed up.
     *
     * @permission ohos.permission.BACKUP
     * @param { boolean } isPreciseScan Indicates whether to obtain the exact data size.
     * @param { Array<IncrementalBackupTime> } dataList Application list.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Internal error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getBackupDataSize(isPreciseScan: boolean, dataList: Array<IncrementalBackupTime>): Promise<void>;

    /**
     * Append new bundles to incremental backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { Array<IncrementalBackupData> } bundlesToBackup Bundles to incremental backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToBackup: Array<IncrementalBackupData>): Promise<void>;

    /**
     * Append new bundles to incremental backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { Array<IncrementalBackupData> } bundlesToAppend Bundles to incremental backup.
     * @param { string[] } infos information of the bundlesToBackup
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed. This error code is usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appendBundles(bundlesToAppend: Array<IncrementalBackupData>, infos: string[]): Promise<void>;

    /**
     * End backup process
     *
     * @permission ohos.permission.BACKUP
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * cancel the application being incrementalBackup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be canceled.
     * @returns { int } Return cancel result, 0 is success, 13500011 is fail, 13500012 is not have task. 
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    cancel(bundleName: string): int;

    /**
     * Provides an interface for the tool to clear temporary directories
     *
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application to be cleaned.
     * @returns { Promise<boolean> } Return clean result, true is success, false is fail.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    cleanBundleTempDir(bundleName: string): Promise<boolean>;

    /**
     * Provides an interface for the tool to get compatibility info.
     * @permission ohos.permission.BACKUP
     * @param { string } bundleName - Set the bundleName of the application that need to get compatibilityInfo.
     * @param { string } extInfo - Indicates the extension information of application.
     * @returns { Promise<string> } Return compatibility info.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCompatibilityInfo(bundleName: string, extInfo: string): Promise<string>;
  }
}
export default backup;
