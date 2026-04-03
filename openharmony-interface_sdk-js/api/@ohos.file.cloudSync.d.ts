/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Provides the capabilities to control cloud file synchronization.
 *
 * @namespace cloudSync
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cloudSync {
  /**
   * Describes the Sync state type.
   *
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum SyncState {
    /**
     * Indicates that the sync state is uploading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * Indicates that the sync failed in upload processing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILED = 1,
    /**
     * Indicates that the sync state is downloading.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOADING = 2,
    /**
     * Indicates that the sync failed in download processing.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 3,
    /**
     * Indicates that the sync finish.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    COMPLETED = 4,
    /**
     * Indicates that the sync has been stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    STOPPED = 5,
  }

  /**
   * Describes the Sync Error type.
   *
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum ErrorType {
    /**
     * No error occurred.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * Synchronization aborted due to network unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 1,
    /**
     * Synchronization aborted due to wifi unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 2,
    /**
     * Synchronization aborted due to low capacity level.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_LOW = 3,
    /**
     * Synchronization aborted due to warning low capacity level.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BATTERY_LEVEL_WARNING = 4,
    /**
     * Synchronization aborted due to cloud storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUD_STORAGE_FULL = 5,
    /**
     * Synchronization aborted due to local storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 6,
    /**
     * Synchronization aborted due to device temperature is too high.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_TEMPERATURE_TOO_HIGH = 7,
    /**
     * Synchronization aborted due to remote server is abnormal.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    REMOTE_SERVER_ABNORMAL = 8,
    
  }

  /**
   * The SyncProgress data structure.
   *
   * @interface SyncProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface SyncProgress {
    /**
     * The current sync state.
     *
     * @type { SyncState }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    state: SyncState;
    /**
     * The error type of sync.
     *
     * @type { ErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    error: ErrorType;
  }

  /**
   * GallerySync object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class GallerySync {
    /**
     * A constructor used to create a GallerySync object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    onProgress(callback: Callback<SyncProgress>): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress', callback: (pg: SyncProgress) => void): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(callback: Callback<SyncProgress>): void;
    /**
     * Unsubscribes all callbacks objects from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress'): void;
    /**
     * Unsubscribes all callbacks objects from sync progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(): void;
    /**
     * Start the gallery sync task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;
    /**
     * Start the gallery sync task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stop the gallery sync task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * Stop the gallery sync task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
  }

  /**
   * Describes the State type of download.
   *
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum State {
    /**
     * Indicates that the download task in process now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    RUNNING = 0,
    /**
     * Indicates that the download task finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * Indicates that the download task failed.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAILED = 2,
    /**
     * Indicates that the download task stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 3,
  }

  /**
   * Describes the download Error type.
   *
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DownloadErrorType {
    /**
     * No error occurred.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NO_ERROR = 0,
    /**
     * download aborted due to unknown error.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,
    /**
     * download aborted due to network unavailable.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    NETWORK_UNAVAILABLE = 2,
    /**
     * download aborted due to local storage is full.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    LOCAL_STORAGE_FULL = 3,
    /**
     * download aborted due to content is not found in the cloud.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CONTENT_NOT_FOUND = 4,
    /**
     * download aborted due to frequent user requests.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 5,
  }

  /**
   * The DownloadProgress data structure.
   *
   * @interface DownloadProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface DownloadProgress {
    /**
     * The current download state.
     *
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * The processed data size for current file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    processed: long;
    /**
     * The size of current file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * The uri of current file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * The error type of download.
     *
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * Describes the download file type.
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum DownloadFileType {
    /**
     * Content file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CONTENT = 0,
    /**
     * Thumbnail file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL = 1,
    /**
     * LCD file type.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    LCD = 2
  }

  /**
   * FailedFileInfo struct.
   * @interface FailedFileInfo
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface FailedFileInfo {
    /**
     * The uri of the file that failes to be downloaded.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Error code of the file that failes to be downloaded.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    error: DownloadErrorType;
  }

  /**
   * MultiDownloadProgress object.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class MultiDownloadProgress {
    /**
     * The current download state.
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * The download ID of the batch files.
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    taskId: long;
    /**
     * The number of files that downloaded successfully
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    successfulCount: int;
    /**
     * The number of files that fail to be downloaded.
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    failedCount: int;
    /**
     * Total number of the batch files.
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalCount: int;
    /**
     * Total size of downloaded files.
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    downloadedSize: long;
    /**
     * Total size of the batch files.
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    totalSize: long;
    /**
     * The error type of download.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
    /**
     * Get the list of files that fail to be downloaded.
     * @returns { Array<FailedFileInfo> } - Return list of files that fail to be downloaded.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getFailedFiles(): Array<FailedFileInfo>;
    /**
     * Get the list of files that are successfully downloaded.
     * @returns { Array<string> } - Return list of files that are successfully downloaded.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getSuccessfulFiles(): Array<string>;
  }

  /**
   * Download object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class Download {
    /**
     * A constructor used to create a Download object.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Subscribes to download progress change event. This method uses a callback to get download progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Subscribes to download progress change event. This method uses a callback to get download progress changes.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<SyncProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    onProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @param { function } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress', callback: (pg: DownloadProgress) => void): void;
    /**
     * Unsubscribes from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes all callbacks objects from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { 'progress' } evt - event type.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(evt: 'progress'): void;
    /**
     * Unsubscribes all callbacks objects from download progress event.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 23 static
     */
    offProgress(): void;
    /**
     * Start the download task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(uri: string): Promise<void>;
    /**
     * Start the download task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Stop the download task.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(uri: string): Promise<void>;
    /**
     * Stop the download task with callback.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } [callback] - Callback function.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
  }

  /**
   * FileSync object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  class FileSync {
    /**
     * A constructor used to create a FileSync object.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * A constructor used to create a FileSync object.
     *
     * @param { string } bundleName - Name of the bundle that need to synchronize and subscribe the sync progress event.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(bundleName: string);
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     */
    on(event: 'progress', callback: Callback<SyncProgress>): void;
    /**
     * Subscribes to sync progress change event. This method uses a callback to get sync progress changes.
     *
     * @param { Callback<SyncProgress> } callback - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onProgress(callback: Callback<SyncProgress>): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<SyncProgress> } [callback] - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     */
    off(event: 'progress', callback?: Callback<SyncProgress>): void;
    /**
     * Unsubscribes from sync progress event.
     *
     * @param { Callback<SyncProgress> } [callback] - callback function with a `SyncProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offProgress(callback?: Callback<SyncProgress>): void;
    /**
     * Start the file sync task.
     *
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    start(): Promise<void>;
    /**
     * Start the file sync task with callback.
     *
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 22400001 - Cloud status not ready.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400003 - Low battery level.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Stop the file sync task.
     *
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * Stop the file sync task with callback.
     *
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Get the last synchronization time.
     *
     * @returns { Promise<long> } - Return the date of last synchronization.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSyncTime(): Promise<long>;
    /**
     * Get the last synchronization time.
     *
     * @param { AsyncCallback<long> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSyncTime(callback: AsyncCallback<long>): void;
  }
  /**
   * CloudFileCache object.
   *
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class CloudFileCache {
    /**
     * A constructor used to create a CloudFileCache object.
     *
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Incorrect parameter types.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     */
    on(event: 'progress', callback: Callback<DownloadProgress>): void;
    /**
     * Subscribes to cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { Callback<DownloadProgress> } callback - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onProgress(callback: Callback<DownloadProgress>): void;
    /**
     * Subscribes to a batch of cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { 'batchDownload' } event - event type.
     * @param { Callback<MultiDownloadProgress> } callback - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     */
    on(event: 'batchDownload', callback: Callback<MultiDownloadProgress>): void;
    /**
     * Subscribes to a batch of cloud file cache download progress change event. This method uses a callback to get download progress changes.
     *
     * @param { Callback<MultiDownloadProgress> } callback - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    onBatchDownload(callback: Callback<MultiDownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { 'progress' } event - event type.
     * @param { Callback<DownloadProgress> } [callback] - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     */
    off(event: 'progress', callback?: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { Callback<DownloadProgress> } [callback] - callback function with a `DownloadProgress` argument.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offProgress(callback?: Callback<DownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { 'batchDownload' } event - event type.
     * @param { Callback<MultiDownloadProgress> } [callback] - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     */
    off(event: 'batchDownload', callback?: Callback<MultiDownloadProgress>): void;
    /**
     * Unsubscribes from cloud file cache download progress event.
     *
     * @param { Callback<MultiDownloadProgress> } [callback] - callback function with a `MultiDownloadProgress` argument.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 23 static
     */
    offBatchDownload(callback?: Callback<MultiDownloadProgress>): void;
    /**
     * Start the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(uri: string): Promise<void>;
    /**
     * Start the cloud file cache download task with callback.
     *
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900025 - No space left on device.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Batch start the cloud file cache download task.
     *
     * @param { Array<string> } uris - The list of uri of file.
     * @param { DownloadFileType } [fileType] - download file type.
     * @returns { Promise<long> } - Return the downloadId in Promise mode.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid uri.
     * @throws { BusinessError } 22400004 - Exceed the maximum limit.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    startBatch(uris: Array<string>, fileType?: DownloadFileType): Promise<long>;
    /**
     * Stop the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11
     */
    /**
     * Stop the cloud file cache download task.
     *
     * @param { string } uri - uri of file.
     * @param { boolean } [needClean] - whether to delete the file that already downloaded.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    stop(uri: string, needClean?: boolean): Promise<void>;
    /**
     * Stop the cloud file cache download task with callback.
     *
     * @param { string } uri - uri of file.
     * @param { AsyncCallback<void> } callback - Callback function.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 11 dynamic
     * @since 23 static
     */
    stop(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Batch stop the cloud file caches download task.
     *
     * @param { long } downloadId - The download ID of a batch of file cache.
     * @param { boolean } [needClean] - whether to delete the file that already downloaded.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    stopBatch(downloadId: long, needClean?: boolean): Promise<void>;
    /**
     * Clean the local file cache.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameter types.
     * @throws { BusinessError } 13600001 - IPC error.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cleanCache(uri: string): void;
    /**
     * Clean local content of the file that has been synced to the Cloud
     *
     * @param { string } uri - uri of file.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
     cleanFileCache(uri: string): void;
  }

  /**
   * Describes the external sync state of file.
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
   enum FileState {
    /**
     * Indicates the initial state after a file is downloaded from the cloud to the local host.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    INITIAL_AFTER_DOWNLOAD = 0,
    /**
     * Indicates that the file is uploading now.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOADING = 1,
    /**
     * Indicates that the file sync task stopped.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    STOPPED = 2,
    /**
     * Indicates that the file is waiting for upload.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 3,
    /**
     * Indicates that the file has been already uploaded successfully.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 4,
    /**
     * Indicates that the file upload failure
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 5
  }
  /**
   * Describes the sync state of file.
   *
   * @enum { int }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum FileSyncState {
    /**
     * Indicates that the file cache is uploading now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UPLOADING = 0,
    /**
     * Indicates that the file cache is downloading now.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DOWNLOADING = 1,
    /**
     * Indicates that the file cache sync task finished.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMPLETED = 2,
    /**
     * Indicates that the file cache sync task stopped.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    STOPPED = 3,
    /**
     * Indicates that the file is waiting for upload.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TO_BE_UPLOADED = 4,
    /**
     * Indicates that the file has been already uploaded successfully.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_SUCCESS = 5,
    /**
     * Indicates that the file upload failure.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UPLOAD_FAILURE = 6,
  }

  /**
   * Get the sync state of file.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - uri of files.
   * @returns { Promise<Array<FileSyncState>> } - Return the sync state of given files.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: Array<string>): Promise<Array<FileSyncState>>;
  /**
   * Get the sync state of the specified file.
   *
   * @param { string } uri - uri of file.
   * @returns { FileState } - return the sync state of the specified file.
   * @throws { BusinessError } 13600001 - IPC error. Possible causes:
   *     <br>1.IPC failed or timed out. 2.Failed to load the service.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
   *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @throws { BusinessError } 22400005 - Inner error. Possible causes:
   *     <br>1.Failed to access the database or execute the SQL statement.
   *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
   function getCoreFileSyncState(uri: string): FileState;
  /**
   * Get the sync state of file.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { Array<string> } uri - uri of file.
   * @param { AsyncCallback<Array<FileSyncState>> } callback - The callback is used to return the sync state of given files.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: Array<string>, callback: AsyncCallback<Array<FileSyncState>>): void;
  /**
   * Get the sync state of file.
   *
   * @param { string } uri - uri of file.
   * @returns { FileSyncState } - return the sync state of given files.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900042 - Unknown error 
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getFileSyncState(uri: string): FileSyncState;
  /**
   * Register change notify for the specified uri.
   *
   * @param { string } uri - uri of file.
   * @param { boolean } recursion - Whether to monitor the child files.
   * @param { Callback<ChangeData> } callback - Returns the changed data.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  function registerChange(uri: string, recursion: boolean, callback: Callback<ChangeData>): void;
  /**
   * Unregister change notify fir the specified uri.
   *
   * @param { string } uri - uri of file.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory.
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 14000002 - Invalid URI.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  function unregisterChange(uri: string): void;

  /**
   * Enumeration types of data change.
   *
   * @enum { int } NotifyType
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * File has been newly created
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_ADDED = 0,
    /**
     * File has been modified.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_MODIFIED = 1,
    /**
     * File has been deleted.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_DELETED = 2,
    /**
     * File has been renamed or moved.
     *
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFY_RENAMED = 3,
  }

  /** 
   * Defines the change data
   * 
   * @interface ChangeData
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * The notify type of the change.
     * 
     * @type {NotifyType}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * Indicates whether the changed uri is directory.
     * 
     * @type {Array<boolean>}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    isDirectory: Array<boolean>;
    /**
     * The changed uris.
     * 
     * @type {Array<string>}
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 12 dynamic
     * @since 23 static
     */
    uris: Array<string>;
  }

  /**
   * Optimize storage space
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @returns { Promise<void> } - Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function optimizeStorage(): Promise<void>;

  /**
   * Start optimize storage space task.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @param { OptimizeSpaceParam } optimizePara - Setting parameters with a `OptimizeSpaceParam` argument.
   * @param { Callback<OptimizeSpaceProgress> } callback - callback function with a `OptimizeSpaceProgress` argument.
   * @returns { Promise<void> } - Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @throws { BusinessError } 22400006 - The same task is already in progress.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function startOptimizeSpace(optimizePara: OptimizeSpaceParam, callback?: Callback<OptimizeSpaceProgress>): Promise<void>;

  /**
   * Stop optimize storage space task.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 22400005 - Inner error.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  function stopOptimizeSpace(): void;

  /**
   * Describes the state type of optimize space task.
   * @enum { int } OptimizeState
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  enum OptimizeState {

    /**
     * Indicates that the optimize space task in process now.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    RUNNING = 0,

    /**
     * Indicates that the optimize space task finished successfully.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    COMPLETED = 1,

    /**
     * Indicates that the optimize space task failed.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * Indicates that the optimize space task stopped.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    STOPPED = 3
  }

  /**
   * Defines the OptimizeSpaceProgress data structure.
   * @typedef OptimizeSpaceProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceProgress {

    /**
     * The current optimize space task state.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { OptimizeState }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    state: OptimizeState;

    /**
     * The percentage of clearing files.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    progress: int;
  }

  /**
   * Defines the OptimizeSpaceParam data structure.
   * @typedef OptimizeSpaceParam
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @systemapi
   * @since 17 dynamic
   * @since 23 static
   */
  interface OptimizeSpaceParam {

    /**
     * The total size(Unit:byte) of clean space.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    totalSize: long;

    /**
     * Clean files that are not accessed agingDays(unit:day) ago.
     * @permission ohos.permission.CLOUDFILE_SYNC
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    agingDays: int;
  }

  /**
   * Defines the HistoryVersion data structure.
   * @typedef HistoryVersion
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface HistoryVersion {
    /**
     * The time when the content of this version file is edited.
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    editedTime: long;
    /**
     * The size of this history version file.
     * @type { long }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    fileSize: long;
    /**
     * The version ID of this version.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    versionId: string;
    /**
     * The original file name used to create this version.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    originalFileName: string;
    /**
     * The Sha256 check value of this version file.
     * @type { string }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    sha256: string;
    /**
     * Indicates whether this version automatically resolves the conflict.
     * @type { boolean }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    autoResolved: boolean;
  }

  /**
   * Defines the VersionDownloadProgress data structure.
   * @typedef VersionDownloadProgress
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface VersionDownloadProgress {
    /**
     * The current download task state.
     * @type { State }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    state: State;
    /**
     * The percentage of downloaded files.
     * @type { int }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    progress: int;
    /**
     * The error type of download.
     * @type { DownloadErrorType }
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    errType: DownloadErrorType;
  }

  /**
   * FileVersion object.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
   * @since 20 dynamic
   * @since 23 static
   */
  class FileVersion {
    /**
     * A constructor used to create a FileVersion object.
     *
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Get the specified number of most recent historical versions of the file specified by the URI.
     *
     * @param { string } uri - uri of file.
     * @param { int } versionNumLimit - Maximum number of historical versions you want to obtained.
     * @returns { Promise<Array<HistoryVersion>> } - Return the most recent history version list of the specified file.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    getHistoryVersionList(uri: string, versionNumLimit: int): Promise<Array<HistoryVersion>>;
    /**
     * Download the content of the specified history version to the specified temporary directory.
     *
     * @param { string } uri - Uri of file.
     * @param { string } versionId - The version ID of the history version you want.
     * @param { Callback<VersionDownloadProgress> } callback - callback function with a `VersionDownloadProgress` argument.
     * @returns { Promise<string> } - Return the temporary directory to use for saving the content of the specified history version.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400002 - Network unavailable.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    downloadHistoryVersion(uri: string, versionId: string, callback: Callback<VersionDownloadProgress>): Promise<string>;
    /**
     * Replace the content of the specified file with the content of the specified history version.
     *
     * @param { string } originalUri - The uri of the file whose content you want to replace.
     * @param { string } versionUri - The uri of the downloaded history version used to replace the original file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900005 - I/O error.
     * @throws { BusinessError } 13900008 - Bad file descriptor.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI. Possible causes: 1.originalUri invalid; 2.versionUri invalid.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @throws { BusinessError } 22400007 - The version file specified to replace the original file does not exist.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    replaceFileWithHistoryVersion(originalUri: string, versionUri: string): Promise<void>;
    /**
     * Check whether the current file content is in conflict with other versions.
     *
     * @param { string } uri - Uri of file.
     * @returns { Promise<boolean> } - Return a Boolean value indicating whether the current file content is in conflict with other versions.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isFileConflict(uri: string): Promise<boolean>;
    /**
     * Clean the current file conflict flag after the conflict is resolved.
     *
     * @param { string } uri - Uri of file.
     * @returns { Promise<void> } - Return Promise.
     * @throws { BusinessError } 13600001 - IPC error. Possible causes:
     *     <br>1.IPC failed or timed out. 2.Failed to load the service.
     * @throws { BusinessError } 13900002 - No such file or directory.
     * @throws { BusinessError } 13900010 - Try again.
     * @throws { BusinessError } 13900012 - Permission denied by the file system.
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 14000002 - Invalid URI.
     * @throws { BusinessError } 22400005 - Inner error. Possible causes:
     *     <br>1.Failed to access the database or execute the SQL statement.
     *     <br>2.System error, such as a null pointer, insufficient memory or a JS engine exception.
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSync.Core
     * @since 20 dynamic
     * @since 23 static
     */
    clearFileConflict(uri: string): Promise<void>;
  }
}

export default cloudSync;
