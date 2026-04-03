/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import BaseContext from './application/BaseContext';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * Upload and download
 *
 * @namespace request
 * @since 6
 */
/**
 * Upload and download
 *
 * @namespace request
 * @syscap SystemCapability.Request.FileTransferAgent
 * @crossplatform
 * @since 10
 */
/**
 * Upload and download
 *
 * @namespace request
 * @syscap SystemCapability.Request.FileTransferAgent
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace request {
  /**
   * Error code 201 - The permissions check fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 201 - The permissions check fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_PERMISSION: int;
  /**
   * Error code 401 - The parameters check fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 401 - The parameters check fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_PARAMCHECK: int;
  /**
   * Error code 801 - Call unsupported api.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 801 - Call unsupported api.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_UNSUPPORTED: int;
  /**
   * Error code 13400001 - Invalid file or file system error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 13400001 - Invalid file or file system error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEIO: int;
  /**
   * Error code 13400002 - File path not supported or invalid.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 13400002 - File path not supported or invalid.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_FILEPATH: int;
  /**
   * Error code 13400003 - Task service ability error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 13400003 - Task service ability error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_SERVICE: int;
  /**
   * Error code 13499999 - Others error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 13499999 - Others error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const EXCEPTION_OTHERS: int;

  /**
   * Code 0x00000001 - Bit flag indicating download is allowed when using the cellular network.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  /**
   * Code 0x00000001 - Bit flag indicating download is allowed when using the cellular network.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const NETWORK_MOBILE: int;

  /**
   * Code 0x00010000 - Bit flag indicating download is allowed when using the WLAN.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  /**
   * Code 0x00010000 - Bit flag indicating download is allowed when using the WLAN.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const NETWORK_WIFI: int;

  /**
   * Error code 0 - Indicates that the download cannot be resumed for network reasons.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 0 - Indicates that the download cannot be resumed for network reasons.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_CANNOT_RESUME: int;

  /**
   * Error code 1 - Indicates that no storage device, such as an SD card, is found.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 1 - Indicates that no storage device, such as an SD card, is found.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_DEVICE_NOT_FOUND: int;

  /**
   * Error code 2 - Indicates that files to be downloaded already exist, and that the download session cannot overwrite the existing files.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 2 - Indicates that files to be downloaded already exist, and that the download session cannot overwrite the existing files.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ALREADY_EXISTS: int;

  /**
   * Error code 3 - Indicates that a file operation fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 3 - Indicates that a file operation fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_FILE_ERROR: int;

  /**
   * Error code 4 - Indicates that the HTTP transmission fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 4 - Indicates that the HTTP transmission fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_HTTP_DATA_ERROR: int;

  /**
   * Error code 5 - Indicates insufficient storage space.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 5 - Indicates insufficient storage space.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_INSUFFICIENT_SPACE: int;

  /**
   * Error code 6 - Indicates an error caused by too many network redirections.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 6 - Indicates an error caused by too many network redirections.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_TOO_MANY_REDIRECTS: int;

  /**
   * Error code 7 - Indicates an HTTP code that cannot be identified.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 7 - Indicates an HTTP code that cannot be identified.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_UNHANDLED_HTTP_CODE: int;

  /**
   * Error code 8 - Indicates an undefined error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Error code 8 - Indicates an undefined error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_UNKNOWN: int;

  /**
   * Error code 9 - Indicates network offline.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 9 - Indicates network offline.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_OFFLINE: int;

  /**
   * Error code 10 - Indicates network type configuration error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Error code 10 - Indicates network type configuration error.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const ERROR_UNSUPPORTED_NETWORK_TYPE: int;

  /**
   * Paused code 0 - Indicates that the download is paused and waiting for a WLAN connection,
   * because the file size exceeds the maximum allowed for a session using the cellular network.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Paused code 0 - Indicates that the download is paused and waiting for a WLAN connection,
   * because the file size exceeds the maximum allowed for a session using the cellular network.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const PAUSED_QUEUED_FOR_WIFI: int;

  /**
   * Paused code 1 - Indicates that the download is paused due to a network problem, for example, network disconnection.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Paused code 1 - Indicates that the download is paused due to a network problem, for example, network disconnection.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_FOR_NETWORK: int;

  /**
   * Paused code 2 - Indicates that a network error occurs, and the download session will be retried.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Paused code 2 - Indicates that a network error occurs, and the download session will be retried.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const PAUSED_WAITING_TO_RETRY: int;

  /**
   * Paused code 3 - Indicates that the download is paused due to the user.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Paused code 3 - Indicates that the download is paused due to the user.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const PAUSED_BY_USER: int;

  /**
   * Paused code 4 - Indicates that the download is paused for some reasons.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Paused code 4 - Indicates that the download is paused for some reasons.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const PAUSED_UNKNOWN: int;

  /**
   * Session status code 0 - Indicates that the download session is completed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Session status code 0 - Indicates that the download session is completed.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const SESSION_SUCCESSFUL: int;

  /**
   * Session status code 1 - Indicates that the download session is in progress.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Session status code 1 - Indicates that the download session is in progress.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const SESSION_RUNNING: int;

  /**
   * Session status code 2 - Indicates that the download session is being scheduled.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Session status code 2 - Indicates that the download session is being scheduled.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const SESSION_PENDING: int;

  /**
   * Session status code 3 - Indicates that the download session has been paused.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Session status code 3 - Indicates that the download session has been paused.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const SESSION_PAUSED: int;

  /**
   * Session status code 4 - Indicates that the download session has failed and will not be retried.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   */
  /**
   * Session status code 4 - Indicates that the download session has failed and will not be retried.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  const SESSION_FAILED: int;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config Download config
   * @param { AsyncCallback<DownloadTask> } callback Indicate the callback function to receive DownloadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.downloadFile
   */
  function download(config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @param { AsyncCallback<DownloadTask> } callback Indicate the callback function to receive DownloadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - task service ability error
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @param { AsyncCallback<DownloadTask> } callback Indicate the callback function to receive DownloadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig, callback: AsyncCallback<DownloadTask>): void;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { DownloadConfig } config Download config
   * @returns { Promise<DownloadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Download
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.downloadFile
   */
  function download(config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @returns { Promise<DownloadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - task service ability error
   * @syscap SystemCapability.MiscServices.Download
   * @since 9
   */
  /**
   * Starts a download task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { DownloadConfig } config Download config
   * @returns { Promise<DownloadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400001 - Invalid file or file system error.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @throws { BusinessError } 13400003 - Task service ability error.
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function downloadFile(context: BaseContext, config: DownloadConfig): Promise<DownloadTask>;

  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config Upload config
   * @param { AsyncCallback<UploadTask> } callback Indicate the callback function to receive UploadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.uploadFile
   */
  function upload(config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @param { AsyncCallback<UploadTask> } callback Indicate the callback function to receive UploadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   */
  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @param { AsyncCallback<UploadTask> } callback Indicate the callback function to receive UploadTask.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig, callback: AsyncCallback<UploadTask>): void;

  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { UploadConfig } config Upload config
   * @returns { Promise<UploadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @syscap SystemCapability.MiscServices.Upload
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.uploadFile
   */
  function upload(config: UploadConfig): Promise<UploadTask>;

  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @returns { Promise<UploadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   */
  /**
   * Starts an upload task.
   *
   * @permission ohos.permission.INTERNET
   * @param { BaseContext } context Indicates the application BaseContext.
   * @param { UploadConfig } config Upload config
   * @returns { Promise<UploadTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - The permissions check fails.
   * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
   * <br>2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 13400002 - File path not supported or invalid.
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function uploadFile(context: BaseContext, config: UploadConfig): Promise<UploadTask>;

  /**
   * DownloadConfig data structure.
   * Defines the download task configuration.
   *
   * @interface DownloadConfig
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name DownloadConfig
   */
  /**
   * DownloadConfig data structure.
   * Defines the download task configuration.
   *
   * @typedef DownloadConfig
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   * @name DownloadConfig
   */
  interface DownloadConfig {
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 2048 characters.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 2048 characters.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 8192 characters.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 15 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @type { ?Object }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     */
    header?: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the download request.
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    header?: Record<string, string>;
    /**
     * Allows download under a metered connection.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Allows download under a metered connection.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    enableMetered?: boolean;
    /**
     * Allows download in a roaming network.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Allows download in a roaming network.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    enableRoaming?: boolean;
    /**
     * Sets the description of a download session.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Sets the description of a download session.
     *
     * @type { ?string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;
    /**
     * Sets the network type allowed for download.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Sets the network type allowed for download.
     *
     * @type { ?int }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    networkType?: int;
    /**
     * Sets the path where the downloaded file is stored.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Sets the path where the downloaded file is stored.
     *
     * @type { ?string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    filePath?: string;
    /**
     * Sets a download session title.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Sets a download session title.
     *
     * @type { ?string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * Allow download background task notifications.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Allow download background task notifications.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    background?: boolean;
  }

  /**
   * DownloadInfo data structure.
   * Defines the download task information.
   *
   * @interface DownloadInfo
   * @syscap SystemCapability.MiscServices.Download
   * @since 7
   * @name DownloadInfo
   */
  /**
   * DownloadInfo data structure.
   * Defines the download task information.
   *
   * @typedef DownloadInfo
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface DownloadInfo {
    /**
     * The description of a file to be downloaded.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The description of a file to be downloaded.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    description: string;
    /**
     * The real-time downloads size (in bytes).
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The real-time downloads size (in bytes).
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    downloadedBytes: long;
    /**
     * The ID of a file to be downloaded.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The ID of a file to be downloaded.
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    downloadId: long;
    /**
     * Cause of the download failure, which can be any DownloadSession.ERROR_* constant.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Cause of the download failure, which can be any DownloadSession.ERROR_* constant.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    failedReason: int;
    /**
     * The name of a file to be downloaded.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The name of a file to be downloaded.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    fileName: string;
    /**
     * The URI of a stored file.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The URI of a stored file.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    filePath: string;
    /**
     * Cause of download pause which can be any DownloadSession.PAUSED_* constant.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Cause of download pause, which can be any DownloadSession.PAUSED_* constant.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    pausedReason: int;
    /**
     * The download task status code, which can be any DownloadSession.SESSION_* constant.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The download task status code, which can be any DownloadSession.SESSION_* constant.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    status: int;
    /**
     * The URI of files to be downloaded.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The URI of files to be downloaded.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    targetURI: string;
    /**
     * The title of a file to be downloaded.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The title of a file to be downloaded.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    downloadTitle: string;
    /**
     * The total size of files to be downloaded (in bytes).
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * The total size of files to be downloaded (in bytes).
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    downloadTotalBytes: long;
  }

  /**
   * The callback function for the download progress event.
   *
   * @typedef { function } DownloadProgressCallback
   * @param { long } receivedSize - the length of downloaded data, in bytes.
   * @param { long } totalSize - the length of data expected to be downloaded, in bytes.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadProgressCallback = (receivedSize: long, totalSize: long) => void;

  /**
   * The callback function for the download complete event.
   *
   * @typedef { function } DownloadCompleteCallback
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadCompleteCallback = () => void;

  /**
   * The callback function for the download pause event.
   *
   * @typedef { function } DownloadPauseCallback
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadPauseCallback = () => void;

  /**
   * The callback function for the download remove event.
   *
   * @typedef { function } DownloadRemoveCallback
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadRemoveCallback = () => void;

  /**
   * The callback function for the download fail event.
   *
   * @typedef { function } DownloadFailCallback
   * @param { int } err - the error code for download task.
   * @syscap SystemCapability.MiscServices.Download
   * @since 23 static
   */
  export type DownloadFailCallback = (err: int) => void;

  /**
   * Download task interface.
   * Implements file downloads.
   *
   * @interface DownloadTask
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  /**
   * Download task interface.
   * Implements file downloads.
   *
   * @typedef DownloadTask
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface DownloadTask {
    /**
     * Called when the current download session is in process.
     * Subscribes to download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } callback
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize the length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Called when the current download session is in process.
     * Subscribes to download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } callback
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize the length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session is in process.
     * Subscribes to download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } callback
     * <br>The callback function for the download progress change event
     * <br>receivedSize the length of downloaded data, in bytes
     * <br>totalSize the length of data expected to be downloaded, in bytes.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'progress', callback: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.

     *
     * @param { DownloadProgressCallback } callback - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onProgress(callback: DownloadProgressCallback): void;

    /**
     * Called when the current download session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } [callback]
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize the length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Called when the current download session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } [callback]
     *        The callback function for the download progress change event
     *        receivedSize the length of downloaded data, in bytes
     *        totalSize the length of data expected to be downloaded, in bytes.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the download task progress.
     * @param { function } [callback]
     * <br>The callback function for the download progress change event
     * <br>receivedSize the length of downloaded data, in bytes
     * <br>totalSize the length of data expected to be downloaded, in bytes.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'progress', callback?: (receivedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current download session is in process.
     *
     * @param { DownloadProgressCallback } [callback] - The callback function for the download progress event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offProgress(callback?: DownloadProgressCallback): void;

    /**
     * Called when the current download session complete pause or remove.
     * Subscribes to download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { function } callback The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Called when the current download session complete pause or remove.
     * Subscribes to download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { function } callback The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session complete pause or remove.
     * Subscribes to download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     * <br>complete: download task completed,
     * <br>pause: download task stopped,
     * <br>remove: download task deleted.
     * @param { function } callback The callback function for the download complete pause or remove change event.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'complete' | 'pause' | 'remove', callback: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } callback - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onComplete(callback: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } callback - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onPause(callback: DownloadPauseCallback): void;

    /**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } callback - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onRemove(callback: DownloadRemoveCallback): void;

    /**
     * Called when the current download session complete pause or remove.
     * Unsubscribes from download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { function } [callback] The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Called when the current download session complete pause or remove.
     * Unsubscribes from download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     *        complete: download task completed,
     *        pause: download task stopped,
     *        remove: download task deleted.
     * @param { function } [callback] The callback function for the download complete pause or remove change event.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session complete pause or remove.
     * Unsubscribes from download events.
     *
     * @param { 'complete' | 'pause' | 'remove' } type Indicates the download session event type
     * <br>complete: download task completed,
     * <br>pause: download task stopped,
     * <br>remove: download task deleted.
     * @param { function } [callback] The callback function for the download complete pause or remove change event.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'complete' | 'pause' | 'remove', callback?: () => void): void;

    /**
     * Called when the current download session complete.
     *
     * @param { DownloadCompleteCallback } [callback] - The callback function for the download complete event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offComplete(callback?: DownloadCompleteCallback): void;

	  /**
     * Called when the current download session pause.
     *
     * @param { DownloadPauseCallback } [callback] - The callback function for the download pause event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offPause(callback?: DownloadPauseCallback): void;

	/**
     * Called when the current download session remove.
     *
     * @param { DownloadRemoveCallback } [callback] - The callback function for the download remove event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offRemove(callback?: DownloadRemoveCallback): void;

    /**
     * Called when the current download session fails.
     * Subscribes to download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } callback The callback function for the download fail change event
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Called when the current download session fails.
     * Subscribes to download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } callback The callback function for the download fail change event
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session fails.
     * Subscribes to download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } callback The callback function for the download fail change event
     * <br>err The error code for download task.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'fail', callback: (err: int) => void): void;

    /**
     * Called when the current download session fails.

     *
     * @param { DownloadFailCallback } callback - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    onFail(callback: DownloadFailCallback): void;

    /**
     * Called when the current download session fails.
     * Unsubscribes from download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } [callback] Indicate the callback function to receive err.
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7
     */
    /**
     * Called when the current download session fails.
     * Unsubscribes from download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } [callback] Indicate the callback function to receive err.
     *        err The error code for download task.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current download session fails.
     * Unsubscribes from download failure events.
     *
     * @param { 'fail' } type Indicates the download session type, fail: download task has failed.
     * @param { function } [callback] Indicate the callback function to receive err.
     * <br>err The error code for download task.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'fail', callback?: (err: int) => void): void;

    /**
     * Called when the current download session fails.
     *
     * @param { DownloadFailCallback } [callback] - The callback function for the download fail event.
     * @syscap SystemCapability.MiscServices.Download
     * @since 23 static
     */
    offFail(callback?: DownloadFailCallback): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback Indicates asynchronous invoking Result.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes a download session and the downloaded files.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(): Promise<boolean>;

    /**
     * Pause a download session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback Indicates asynchronous invoking Result.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.suspend
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pause a download session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.suspend
     */
    pause(): Promise<void>;

    /**
     * Resume a paused download session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback Indicates asynchronous invoking Result.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.restore
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * Resume a paused download session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.restore
     */
    resume(): Promise<void>;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback Indicate the callback function to receive download info.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.getTaskInfo
     */
    query(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Queries download information of a session, which is defined in DownloadSession.DownloadInfo.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.getTaskInfo
     */
    query(): Promise<DownloadInfo>;

    /**
     * Queries the MIME type of the download file.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback Indicate the callback function to receive download file MIME type.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.getTaskMimeType
     */
    queryMimeType(callback: AsyncCallback<string>): void;

    /**
     * Queries the MIME type of the download file.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.getTaskMimeType
     */
    queryMimeType(): Promise<string>;

    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Delete the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;

    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    suspend(callback: AsyncCallback<boolean>): void;

    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Suspend the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    suspend(): Promise<boolean>;

    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    restore(callback: AsyncCallback<boolean>): void;

    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Restore the download task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    restore(): Promise<boolean>;

    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<DownloadInfo> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<DownloadInfo>): void;

    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Get the download task info.
     * Obtains the information about this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<DownloadInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<DownloadInfo>;

    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<string> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getTaskMimeType(callback: AsyncCallback<string>): void;

    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @since 9
     */
    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10
     */
    /**
     * Get mimetype of the download task.
     * Obtains the MimeType of this download task.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<string> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getTaskMimeType(): Promise<string>;
  }

  /**
   * File data structure.
   * Defines the file list in UploadConfig.
   *
   * @interface File
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name File
   */
  /**
   * File data structure.
   * Defines the file list in UploadConfig.
   *
   * @typedef File
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface File {
    /**
     * When multipart is submitted, the file name in the request header.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * When multipart is submitted, the file name in the request header.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    filename: string;
    /**
     * When multipart is submitted, the name of the form item. The default is file.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * When multipart is submitted, the name of the form item. The default is file.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * The local storage path of the file (please refer to the storage directory definition for path usage).
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * The local storage path of the file (please refer to the storage directory definition for path usage).
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * The content type of the file is obtained by default according to the suffix of the file name or path.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * The content type of the file is obtained by default according to the suffix of the file name or path.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    type: string;
  }

  /**
   * RequestData data structure.
   * Defines the form data in UploadConfig.
   *
   * @interface RequestData
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   * @name RequestData
   */
  /**
   * RequestData data structure.
   * Defines the form data in UploadConfig.
   *
   * @typedef RequestData
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface RequestData {
    /**
     * Represents the name of the form element.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Represents the name of the form element.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;
    /**
     * Represents the value of the form element.
     *
     * @syscap SystemCapability.MiscServices.Download
     * @since 6
     */
    /**
     * Represents the value of the form element.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Download
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * UploadConfig data structure.
   * Describes the configuration of an upload task.
   *
   * @interface UploadConfig
   * @syscap SystemCapability.MiscServices.Upload
   * @since 6
   * @name UploadConfig
   */
  /**
   * UploadConfig data structure.
   * Describes the configuration of an upload task.
   *
   * @typedef UploadConfig
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface UploadConfig {
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 2048 characters.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 2048 characters.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Resource address.
     * Verification rule: Starting with http (s)://and with a length not exceeding 8192 characters.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 15 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @type { Object }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     */
    header: Object;
    /**
     * Adds an HTTP or HTTPS header to be included with the upload request.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    header: Record<string, string>;
    /**
     * Request method: POST, PUT. The default POST.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * Request method: POST, PUT. The default POST.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    method: string;
    /**
     * The index of paths for a task.
     * Usually used for a continuous job.
     * The default is 0.
     *
     * @type { ?number }
     * @syscap SystemCapability.MiscServices.Upload
     * @since 11
     */
    /**
     * The index of paths for a task.
     * Usually used for a continuous job.
     * The default is 0.
     *
     * @type { ?int }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    index?: int;
    /**
     * The start point of a file.
     * Usually used for a continuous job.
     * It will start read at the point in upload.
     * The default is 0.
     *
     * @type { ?number }
     * @syscap SystemCapability.MiscServices.Upload
     * @since 11
     */
    /**
     * The start point of a file.
     * Usually used for a continuous job.
     * It will start read at the point in upload.
     * The default is 0.
     *
     * @type { ?long }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    begins?: long;
    /**
     * The end point of a file.
     * Usually used for a continuous job.
     * It will end read at the point in upload.
     * The default is -1 indicating the end of the data for upload.
     *
     * @type { ?number }
     * @syscap SystemCapability.MiscServices.Upload
     * @since 11
     */
    /**
     * The end point of a file.
     * Usually used for a continuous job.
     * It will end read at the point in upload.
     * The default is -1 indicating the end of the data for upload.
     *
     * @type { ?long }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    ends?: long;
    /**
     * A list of files to be uploaded. Please use multipart/form-data to submit.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * A list of files to be uploaded. Please use multipart/form-data to submit.
     *
     * @type { Array<File> }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    files: Array<File>;
    /**
     * The requested form data in the request body.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * The requested form data in the request body.
     *
     * @type { Array<RequestData> }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    data: Array<RequestData>;
  }

  /**
   * TaskState data structure.
   * Implements a TaskState object.
   *
   * @interface TaskState
   * @syscap SystemCapability.MiscServices.Upload
   * @since 9
   * @name TaskState
   */
  /**
   * TaskState data structure.
   * Implements a TaskState object.
   *
   * @typedef TaskState
   * @syscap SystemCapability.MiscServices.Upload
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface TaskState {
    /**
     * Upload file path.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Upload file path.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    path: string;
    /**
     * Return value of an upload task.
     * The value 0 means that the task is successful,
     * and other values means that the task fails.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Return value of an upload task.
     * The value 0 means that the task is successful,
     * and other values means that the task fails.
     *
     * @type { int }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    responseCode: int;
    /**
     * Upload task information.
     *
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Upload task information.
     *
     * @type { string }
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * The callback function for the download progress event.
   *
   * @typedef { function } UploadProgressCallback
   * @param { long } uploadedSize - the length of uploaded data, in bytes
   * @param { long } totalSize - the length of data expected to be uploaded, in bytes.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadProgressCallback = (uploadedSize: long, totalSize: long) => void;

  /**
   * The callback function for the HTTP Response Header event.
   *
   * @typedef { function } UploadHeaderReceiveCallback
   * @param { object } header - HTTP Response Header returned by the developer server.
   * @syscap SystemCapability.MiscServices.Upload
   * @since 23 static
   */
  export type UploadHeaderReceiveCallback = (header: object) => void;

  /**
   * Upload task interface.
   * Implements file uploads.
   *
   * @interface UploadTask
   * @syscap SystemCapability.MiscServices.Download
   * @since 6
   */
  /**
   * Upload task interface.
   * Implements file uploads.
   *
   * @typedef UploadTask
   * @syscap SystemCapability.MiscServices.Download
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface UploadTask {
    /**
     * Called when the current upload session is in process.
     * Subscribes to upload progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } callback
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * Called when the current upload session is in process.
     * Subscribes to upload progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } callback
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current upload session is in process.
     * Subscribes to upload progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } callback
     * <br>The callback function for the upload progress change event
     * <br>uploadedSize The length of uploaded data, in bytes
     * <br>totalSize The length of data expected to be uploaded, in bytes.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'progress', callback: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } callback - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onProgress(callback: UploadProgressCallback): void;

    /**
     * Called when the current upload session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } [callback]
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6
     */
    /**
     * Called when the current upload session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } [callback]
     *        The callback function for the upload progress change event
     *        uploadedSize The length of uploaded data, in bytes
     *        totalSize The length of data expected to be uploaded, in bytes.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current upload session is in process.
     * Unsubscribes from download progress events.
     *
     * @param { 'progress' } type progress Indicates the upload task progress.
     * @param { function } [callback]
     * <br>The callback function for the upload progress change event
     * <br>uploadedSize The length of uploaded data, in bytes
     * <br>totalSize The length of data expected to be uploaded, in bytes.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'progress', callback?: (uploadedSize: long, totalSize: long) => void): void;

    /**
     * Called when the current upload session is in process.
     *
     * @param { UploadProgressCallback } [callback] - The callback function for the upload progress event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offProgress(callback?: UploadProgressCallback): void;

    /**
     * Called when the header of the current upload session has been received.
     * Subscribes to HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } callback The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 7
     */
    /**
     * Called when the header of the current upload session has been received.
     * Subscribes to HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } callback The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the header of the current upload session has been received.
     * Subscribes to HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } callback The callback function for the HTTP Response Header event
     * <br>header HTTP Response Header returned by the developer server.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'headerReceive', callback: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } callback - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onHeaderReceive(callback: UploadHeaderReceiveCallback): void;

    /**
     * Called when the header of the current upload session has been received.
     * Unsubscribes from HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } [callback] The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 7
     */
    /**
     * Called when the header of the current upload session has been received.
     * Unsubscribes from HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } [callback] The callback function for the HTTP Response Header event
     *        header HTTP Response Header returned by the developer server.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the header of the current upload session has been received.
     * Unsubscribes from HTTP response events for the upload task.
     *
     * @param { 'headerReceive' } type headerReceive Indicates the upload task headed receive.
     * @param { function } [callback] The callback function for the HTTP Response Header event
     * <br>header HTTP Response Header returned by the developer server.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'headerReceive', callback?: (header: object) => void): void;

    /**
     * Called when the header of the current upload session has been received.
     *
     * @param { UploadHeaderReceiveCallback } [callback] - The callback function for the HTTP Response Header event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offHeaderReceive(callback?: UploadHeaderReceiveCallback): void;

    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *        fail: upload task failed
     * @param { Callback<Array<TaskState>> } callback The callback function for the upload complete or fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *        fail: upload task failed
     * @param { Callback<Array<TaskState>> } callback The callback function for the upload complete or fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     * <br>complete: upload task completed
     * <br>fail: upload task failed
     * @param { Callback<Array<TaskState>> } callback The callback function for the upload complete or fail change event.
     * @throws { BusinessError } 401 - The parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    on(type: 'complete' | 'fail', callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onComplete(callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } callback - The callback function for the upload fail event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    onFail(callback: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *         fail: upload task failed
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete or fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     *        complete: upload task completed
     *         fail: upload task failed
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete or fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the current upload session complete or fail.
     *
     * @param { 'complete' | 'fail' } type Indicates the upload session event type
     * <br>complete: upload task completed
     * <br>fail: upload task failed
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete or fail change event.
     * @throws { BusinessError } 401 - the parameters check fails. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     */
    off(type: 'complete' | 'fail', callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session complete.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload complete event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offComplete(callback?: Callback<Array<TaskState>>): void;

    /**
     * Called when the current upload session fail.
     *
     * @param { Callback<Array<TaskState>> } [callback] - The callback function for the upload fail change event.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 23 static
     */
    offFail(callback?: Callback<Array<TaskState>>): void;

    /**
     * Deletes an upload session.
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback Indicates asynchronous invoking Result.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(callback: AsyncCallback<boolean>): void;

    /**
     * Deletes an upload session.
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.request.delete
     */
    remove(): Promise<boolean>;

    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<boolean>): void;

    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @since 9
     */
    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @throws { BusinessError } 401 - The parameters check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 10
     */
    /**
     * Delete the upload task
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 201 - The permissions check fails.
     * @syscap SystemCapability.MiscServices.Upload
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    delete(): Promise<boolean>;
  }

  /**
   * The request agent api.
   * Supports "background" and "frontend" tasks as while.
   * Though "background" and "frontend" here do not the same with process's concept.
   * All tasks will be executed at request manager service and recorded.
   * Background tasks is for concurrent transfer, such as caching videos for a later play.
   * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
   * Background tasks use notification to tell user tasks' status information.
   * Frontend tasks use callback to tell caller tasks' status information.
   * Background has some automatically restore mechanism.
   * Frontend tasks controlled by caller.
   * Uses `multipart/form-data` in client request for upload.
   * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
   * More details, please see the architecture documents of the request subsystem.
   *
   * @namespace agent
   * @syscap SystemCapability.Request.FileTransferAgent
   * @since 10
   */
  /**
   * The request agent api.
   * Supports "background" and "frontend" tasks as while.
   * Though "background" and "frontend" here do not the same with process's concept.
   * All tasks will be executed at request manager service and recorded.
   * Background tasks is for concurrent transfer, such as caching videos for a later play.
   * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
   * Background tasks use notification to tell user tasks' status information.
   * Frontend tasks use callback to tell caller tasks' status information.
   * Background has some automatically restore mechanism.
   * Frontend tasks controlled by caller.
   * Uses `multipart/form-data` in client request for upload.
   * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
   * More details, please see the architecture documents of the request subsystem.
   * Only front-end mode is supported in cross-platform scenarios.
   *
   * @namespace agent
   * @syscap SystemCapability.Request.FileTransferAgent
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  namespace agent {
    /**
     * Indicates to show completion notification.
     * 
     * @constant
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_COMPLETION: 1;
    /**
     * Indicates to show completion notification.
     * 
     * @constant
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_COMPLETION: int = 1;
    /**
     * Indicates to show progress notification.
     * 
     * @constant
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     */
    const VISIBILITY_PROGRESS: 2;
    /**
     * Indicates to show progress notification.
     * 
     * @constant
     * @syscap SystemCapability.Request.FileTransferAgent
     * @stagemodelonly
     * @since 23 static
     */
    const VISIBILITY_PROGRESS: int = 2;
    /**
     * The action options.
     *
     * @enum { number } Action
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The action options.
     *
     * @enum { number } Action
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    enum Action {
      /**
       * Indicates download task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates download task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      DOWNLOAD,
      /**
       * Indicates upload task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates upload task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      UPLOAD
    }

    /**
     * The mode options.
     *
     * @enum { number } Mode
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The mode options.
     *
     * @enum { number } Mode
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    enum Mode {
      /**
       * Indicates background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      BACKGROUND,
      /**
       * Indicates foreground task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates foreground task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      FOREGROUND
    }

    /**
     * The network options.
     *
     * @enum { number } Network
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The network options.
     *
     * @enum { number } Network
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    enum Network {
      /**
       * Indicates no restriction on network type.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates no restriction on network type.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      ANY,
      /**
       * Indicates Wi-Fi only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates Wi-Fi only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      WIFI,
      /**
       * Indicates cellular only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates cellular only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      CELLULAR
    }

    /**
     * Broadcast events for the request.
     *
     * @enum { string } BroadcastEvent
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    enum BroadcastEvent {
      /**
       * Completion event for the task.
       * The code in the commonEventData can only be "0x40"(COMPLETE) or "0x41"(FAILED), same as "State".
       * The data in the commonEventData contains the id of the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      COMPLETE = 'ohos.request.event.COMPLETE'
    }

    /**
     * The file information for a form item.
     *
     * @typedef FileSpec
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The file information for a form item.
     *
     * @typedef FileSpec
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interface FileSpec {
      /**
       * A relative path string, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", in the caller's cache directory.
       * Provides the file information of a table item.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * A relative path string, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", in the caller's cache directory.
       * Provides the file information of a table item.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11
       */
      /**
       * The path to save the uploaded file.
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: internal protocol path, starting with "internal://", like "internal://cache/path/to/file.txt".
       * 3: application storage path, only the base directory and its subdirectories are supported, like "/data/storage/el1/base/path/to/file.txt".
       * 4: file protocol path with self bundle name, only the base directory and its subdirectories are supported, like "file://com.example.test/data/storage/el2/base/file.txt".
       * 5: user file url, like "file://media/Photo/path/to/file.png".
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      path: string;
      /**
       * The MIME type of the file.
       * The default is obtained by the suffix of the filename.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The MIME type of the file.
       * The default is obtained by the suffix of the filename.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamiconly
       * @deprecated since 18
       * @useinstead ohos.request.agent.FileSpec.contentType
       */
      mimeType?: string;
      /**
       * The filename, the default is obtained by path.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The filename, the default is obtained by path.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      filename?: string;
      /**
       * The extras for the file information.
       * This parameter is not included in HTTP requests.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The extras for the file information.
       * This parameter is not included in HTTP requests.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      extras?: object;
      /**
       * The extras for the file information.
       *
       * @type { ?Record<string, string> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * Sets the content-type field of the part.
       * The default is obtained by the suffix of the filename.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      contentType?: string;
    }

    /**
     * The form item information for a task.
     *
     * @typedef FormItem
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The form item information for a task.
     *
     * @typedef FormItem
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interface FormItem {
      /**
       * The item's name.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The item's name.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * The item's value.
       *
       * @type { string | FileSpec | Array<FileSpec> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The item's value.
       *
       * @type { string | FileSpec | Array<FileSpec> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      value: string | FileSpec | Array<FileSpec>;
    }

    /**
     * Describes the custom information of the notification bar.
     *
     * @typedef Notification
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface Notification {
      /**
       * The title of the notification.
       * If not specified, use default style instead.
       * The maximum size of title is 1024 bytes.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * The text of the notification.
       * If not specified, use the file name of the task instead.
       * The maximum size of text is 3072 bytes.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      text?: string;
      /**
       * Disables the notification.
       * If the value is false, a notification will be displayed, otherwise nothing will be displayed.
       * If not specified, the value is false.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 20 dynamic
       * @since 23 static
       */
      disable?: boolean;
      /**
       * The visibility of the notification.
       * The notification information will be determined by the binary bit of the given value.
       * The default value is 1, which means only completion notifications are displayed.
       * The value cannot be set to 0.
       * 
       * @type { ?int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 21 dynamic
       * @since 23 static
       */
      visibility?: int;
      /**
       * The intent to send when click the notification.
       * 
       * @type { ?WantAgent }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 22 dynamic
       * @since 23 static
       */
      wantAgent?: WantAgent;
    }

    /**
     * Options of the minimum speed of the task.
     *
     * @typedef MinSpeed
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface MinSpeed {
      /**
       * The minimum speed of the task, in bytes per second.
       * If the speed of the task is lower than this value for a period of time, the task fails.
       * If the value is set to 0, no minimum speed limit will be activated.
       *
       * @type { long }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      speed: long;
      /**
       * Duration of the speed which is allowed to be below the minimum speed, in seconds.
       * If the speed of the task is lower than this value for a period of time, the task fails.
       * If the value is set to 0, no minimum speed limit will be activated.
       *
       * @type { int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      duration: int;
    }

    /**
     * Options of the custom task timeout.
     *
     * @typedef Timeout
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface Timeout {
      /**
       * The connection timeout of the task, in seconds.
       * Connection timeout is the maximum time required for a client and a server to establish a connection.
       * If this value is not specified, use default value instead. The default value is 60 seconds.
       * The minimum value allowed is 1 second.
       *
       * @type { ?int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      connectionTimeout?: int;
      /**
       * Total timeout of the task, in seconds.
       * Total timeout includes the time to establish a connection, send a request and receive a response.
       * If this value is not specified, use default value instead. The default value is 604,800 seconds(1 week).
       * The minimum value allowed is 1 second.
       * The maximum value allowed is 604,800 seconds(1 week).
       *
       * @type { ?int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      totalTimeout?: int;
    }

    /**
     * The configurations for a task.
     * Provides the configuration information of an upload or download task.
     * Using a flexible configuration for clear upload and download functions.
     * If without emphasis, an option is for any task.
     *
     * @typedef Config
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The configurations for a task.
     * Provides the configuration information of an upload or download task.
     * Using a flexible configuration for clear upload and download functions.
     * If without emphasis, an option is for any task.
     *
     * @typedef Config
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interface Config {
      /**
       * The task action, upload or download.
       *
       * @type { Action }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task action, upload or download.
       *
       * @type { Action }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      action: Action;
      /**
       * The Universal Resource Locator for a task.
       * Starting with http(s)://
       * The maximum length is 2048 characters.
       * Using raw `url` option, even url parameters in it.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The Universal Resource Locator for a task.
       * The maximum length is 2048 characters.
       * Using raw `url` option, even url parameters in it.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11
       */
      /**
       * The Universal Resource Locator for a task.
       * The maximum length is 8192 characters.
       * Using raw `url` option, even url parameters in it.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 15 dynamic
       * @since 23 static
       */
      url: string;
      /**
       * The title for a task, give a meaningful title please.
       * The maximum length is 256 characters.
       * The default is the same with its action.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The title for a task, give a meaningful title please.
       * The maximum length is 256 characters.
       * The default is upload or download, consistent with its action.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      title?: string;
      /**
       * The details for a task.
       * The maximum length is 1024 characters.
       * The default is empty string.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The details for a task.
       * The maximum length is 1024 characters.
       * The default is empty string.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      description?: string;
      /**
       * Indicates task's mode.
       * The default is background.
       * For frontend task, it has callbacks.
       * For background task, it has notifications and fallback.
       *
       * @type { ?Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates task's mode.
       * The default is BACKGROUND.
       * For frontend task, it has callbacks.
       * For background task, it has notifications and fallback.
       * The cross-platform default is FOREGROUND.
       *
       * @type { ?Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      mode?: Mode;
      /**
       * The solution choice when path already exists during download.
       * Currently support:
       * true, rewrite the existed file;
       * false, go to fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The solution choice when path already exists during download.
       * The default is false.
       * Currently support:
       * true, rewrite the existed file;
       * false, go to fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      overwrite?: boolean;
      /**
       * The HTTP standard method for upload or download: GET/POST/PUT.
       * Case insensitive.
       * For upload, use PUT/POST, the default is PUT.
       * For download, use GET/POST, the default is GET.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The HTTP standard method for upload or download: GET/POST/PUT.
       * Case insensitive.
       * For upload, use PUT/POST, the default is PUT.
       * For download, use GET/POST, the default is GET.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      method?: string;
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      headers?: object;
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @type { ?Record<string, string> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      headers?: Record<string, string>;
      /**
       * The arguments, it can be any text, uses json usually.
       * For download, it can be raw string, the default is empty string.
       * For upload, it can be form items, the default is a empty form.
       * There must be one `FileSpec` item at least or will be a parameter error.
       *
       * @type { ?(string | Array<FormItem>) }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The arguments, it can be any text, uses json usually.
       * For download, it can be raw string, the default is empty string.
       * For upload, it can be form items, the default is a empty form.
       * There must be one `FileSpec` item at least or will be a parameter error.
       *
       * @type { ?(string | Array<FormItem>) }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      data?: string | Array<FormItem>;
      /**
       * The path to save the downloaded file, the default is "./".
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: uri path, like "datashare://bundle/xxx/yyy/zzz.html", the data provider must allow the caller's access.
       *
       * @type { ?string }
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The path to save the downloaded file, the default is "./".
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: uri path, like "datashare://bundle/xxx/yyy/zzz.html", the data provider must allow the caller's access.
       *
       * @type { ?string }
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11
       */
      /**
       * The path to save the downloaded file, the default is "./".
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: internal protocol path, starting with "internal://", like "internal://cache/path/to/file.txt".
       * 3: application storage path, only the base directory and its subdirectories are supported, like "/data/storage/el1/base/path/to/file.txt".
       * 4: file protocol path with self bundle name, only the base directory and its subdirectories are supported, like "file://com.example.test/data/storage/el2/base/file.txt".
       *
       * @type { ?string }
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      saveas?: string;
      /**
       * Network used for the task.
       * The default value is ANY (Wi-Fi or cellular).
       *
       * @type { ?Network }
       * @default Network.ANY
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Network used for the task.
       * The default value is ANY (Wi-Fi or cellular).
       *
       * @type { ?Network }
       * @default Network.ANY
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      network?: Network;
      /**
       * Allows work in metered network or not.
       * The default is false.
       *
       * @type { ?boolean }
       * @default false
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Allows work in metered network or not.
       * The default is false.
       *
       * @type { ?boolean }
       * @default false
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      metered?: boolean;
      /**
       * Allows work in roaming network or not.
       * The default is true.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Allows work in roaming network or not.
       * The default is true.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      roaming?: boolean;
      /**
       * Enable automatic retry or not for the background task.
       * The frontend task is always fast-fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Enable automatic retry or not for the background task.
       * The frontend task is always fast-fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      retry?: boolean;
      /**
       * Allows redirect or not.
       * The default is yes.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Allows redirect or not.
       * The default is true.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      redirect?: boolean;
      /**
       * The proxy url for the task.
       * Only this format is supported: http://<domain or IP-address>:<port>
       * Username and password are not supported.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 12
       */
      /**
       * The proxy url for the task.
       * Only this format is supported: http://<domain or IP-address>:<port>
       * Username and password are not supported.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       * @since 23 static
       */
      proxy?: string;
      /**
       * The index of paths for a task.
       * Usually used for a continuous job.
       * The default is 0.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The index of paths for a task.
       * Usually used for a continuous job.
       * The default is 0.
       *
       * @type { ?int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      index?: int;
      /**
       * The start point of a file.
       * Usually used for a continuous job.
       * It will set the "Range" header in download.
       * It will start read at the point in upload.
       * The default is 0.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The start point of a file.
       * Usually used for a continuous job.
       * It will set the "Range" header in download.
       * It will start read at the point in upload.
       * The default is 0.
       *
       * @type { ?long }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      begins?: long;
      /**
       * The end point of a file.
       * Usually used for a continuous job.
       * It will set The "Range" header in download.
       * It will end read at the point in upload.
       * The default is -1 indicating the end of the data for upload or download.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The end point of a file.
       * Usually used for a continuous job.
       * It will set The "Range" header in download.
       * It will end read at the point in upload.
       * The default is -1 indicating the end of the data for upload or download.
       *
       * @type { ?long }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      ends?: long;
      /**
       * The policy of the progress notification for background task.
       * If false: only completed or failed notification, the default.
       * If true, emits every progress, completed or failed notifications.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The policy of the progress notification for background task.
       * If false: only completed or failed notification, the default.
       * If true, emits every progress, completed or failed notifications.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * Breaks when fail to fetch filesize before upload/download or not.
       * Uses filesize for a precise gauge.
       * The default is not, set size as -1 indicating the case.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Breaks when fail to fetch filesize before upload/download or not.
       * Uses filesize for a precise gauge.
       * The default is false, set size as -1 indicating the case.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      precise?: boolean;
      /**
       * For in-application layer isolation.
       * If given:
       *   the minimum is 8 bytes.
       *   the maximum is 2048 bytes.
       * Creates a task with token, then must provide it during normal query.
       * So saves the token carefully, it can not be retrieved by query.
       * Or leave it empty.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * For in-application layer isolation.
       * If given:
       *   the minimum is 8 bytes.
       *   the maximum is 2048 bytes.
       * Creates a task with token, then must provide it during normal query.
       * So saves the token carefully, it can not be retrieved by query.
       * Or leave it empty.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      token?: string;
      /**
       * The priority of this task.
       * Front-end tasks have higher priority than back-end tasks.
       * In tasks of the same mode, the smaller the number, the higher the priority.
       * The default is 0.
       *
       * @type { ?int }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      priority?: int;
      /**
       * The extras for the configuration.
       * This parameter is left empty by default.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The extras for the configuration.
       * This parameter is left empty by default.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      extras?: object;
      /**
       * The extras for the configuration.
       *
       * @type { ?Record<string, string> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      extras?: Record<string, string>;
      /**
       * Use a single request to upload multiple files.
       * If true, use the form format to merge multiple files into one request.
       * If false, use independent requests to send each file.
       * The default is false.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      multipart?: boolean;
      /**
       * Customizes the notification of the backend task.
       *
       * @type { ?Notification }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification?: Notification;
      /**
       * Customizes the minimum speed of the task.
       *
       * @type { ?MinSpeed }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      minSpeed?: MinSpeed;
      /**
       * Customizes the timeout of the task.
       *
       * @type { ?Timeout }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      timeout?: Timeout;
    }

    /**
     * Indicate the current state of the task.
     *
     * @enum { number } State
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Indicate the current state of the task.
     *
     * @enum { number } State
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    enum State {
      /**
       * Indicates a task created by `new Task(Config)`.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a task created by `new Task(Config)`.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      INITIALIZED = 0x00,
      /**
       * Indicates a task lack of resources or conditions to run or retry.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a task lack of resources or conditions to run or retry.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      WAITING = 0x10,
      /**
       * Indicates a task in processing now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a task in processing now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      RUNNING = 0x20,
      /**
       * Indicates a task failed once at least and in processing again now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a task failed once at least and in processing again now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      RETRYING = 0x21,
      /**
       * Indicates a paused task which tends to be resumed for continuous work.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a paused task which tends to be resumed for continuous work.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      PAUSED = 0x30,
      /**
       * Indicates a stopped task which must be started again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a stopped task which must be started again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      STOPPED = 0x31,
      /**
       * Indicates a completed task which finish its data transfer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a completed task which finish its data transfer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      COMPLETED = 0x40,
      /**
       * Indicates a failed task which interrupted by some error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a failed task which interrupted by some error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      FAILED = 0x41,
      /**
       * Indicates a removed task which can not be processed again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates a removed task which can not be processed again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      REMOVED = 0x50
    }

    /**
     * The progress data structure.
     * Upload allows multiple files per upload task.
     * Only one file in a download task.
     * So using a unified data structure for progress.
     * Generally:
     * 1: sum(sizes) is total files size of the task.
     * 2: float(processed)/sizes[counter] is the progress for the current processing file.
     * 3: float(sum(sizes[:index])+processed)/sum(sizes) is the summary progress for a task.
     * If fetch file size in failure, the size of the file in sizes will be set as -1.
     *
     * @typedef Progress
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The progress data structure.
     * Upload allows multiple files per upload task.
     * Only one file in a download task.
     * So using a unified data structure for progress.
     * Generally:
     * 1: sum(sizes) is total files size of the task.
     * 2: float(processed)/sizes[counter] is the progress for the current processing file.
     * 3: float(sum(sizes[:index])+processed)/sum(sizes) is the summary progress for a task.
     * If fetch file size in failure, the size of the file in sizes will be set as -1.
     *
     * @typedef Progress
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interface Progress {
      /**
       * The current state of the task.
       *
       * @type { State }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The current state of the task.
       *
       * @type { State }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      readonly state: State;
      /**
       * The current processing file index in a task.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The current processing file index in a task.
       *
       * @type { int }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      readonly index: int;
      /**
       * The processed data size for the current file in a task.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The processed data size for the current file in a task.
       *
       * @type { long }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      readonly processed: long;
      /**
       * The sizes of files in a task, in bytes.
       *
       * @type { Array<number> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The sizes of files in a task, in bytes.
       *
       * @type { Array<long> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      readonly sizes: Array<long>;
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded, the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded, the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       * The "body" field is not supported in cross-platform scenarios.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      readonly extras?: object;
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded,
       * <br>the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       * The "body" field is not supported in cross-platform scenarios.
       *
       * @type { ?Record<string, string> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * Indicates the reason for the failure.
     *
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Indicates the reason for the failure.
     *
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    enum Faults {
      /**
       * Indicates others failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates others failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      OTHERS = 0xFF,
      /**
       * Indicates network disconnection.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates network disconnection.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      DISCONNECTED = 0x00,
      /**
       * Indicates task timeout.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates task timeout.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      TIMEOUT = 0x10,
      /**
       * Indicates protocol error, such as 5xx response from server.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates protocol error, such as 5xx response from server.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      PROTOCOL = 0x20,
      /**
       * Indicates parameter error, such as url format error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      PARAM = 0x30,
      /**
       * Indicates filesystem io error, such as open/seek/read/write/close.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Indicates filesystem io error, such as open/seek/read/write/close.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      FSIO = 0x40,
      /**
       * Indicates DNS resolution error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      DNS = 0x50,
      /**
       * Indicates TCP connection error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      TCP = 0x60,
      /**
       * Indicates SSL connection error, such as a certificate error or certificate verification failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      SSL = 0x70,
      /**
       * Indicates redirect error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      REDIRECT = 0x80,
      /**
       * Indicates the speed of the task is too slow.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      LOW_SPEED = 0x90
    }

    /**
     * The filter data structure.
     * Used for search, given fields works as **LOGICAL AND**.
     * Invalid value may cause a parameter error.
     *
     * @typedef Filter
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The filter data structure.
     * Used for search, given fields works as **LOGICAL AND**.
     * Invalid value may cause a parameter error.
     *
     * @typedef Filter
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    interface Filter {
      /**
       * Specify the package name of an application.
       * Only for advanced search, common search will be fixed to the caller.
       * A "*" means any bundle.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      bundle?: string;
      /**
       * Specify the end Unix timestamp.
       * The default is the moment of calling.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify the end Unix timestamp.
       * The default is the moment of calling.
       *
       * @type { ?long }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      before?: long;
      /**
       * Specify the start Unix timestamp.
       * The default is "`before` - 24 hours".
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify the start Unix timestamp.
       * The default is "`before` - 24 hours".
       *
       * @type { ?long }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      after?: long;
      /**
       * Specify the state of tasks.
       * The default is any state.
       *
       * @type { ?State }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify the state of tasks.
       * The default is any state.
       *
       * @type { ?State }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      state?: State;
      /**
       * Specify the action of tasks, "upload" or "download", case insensitive.
       * The default is upload and download.
       *
       * @type { ?Action }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify the action of tasks, "upload" or "download", case insensitive.
       * The default is upload and download.
       *
       * @type { ?Action }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      action?: Action;
      /**
       * Specify task's mode.
       * The default is frontend and background.
       *
       * @type { ?Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify task's mode.
       * The default is FOREGROUND and BACKGROUND.
       *
       * @type { ?Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      mode?: Mode;
    }

    /**
     * The task information data structure for query results.
     * Provides common query and advanced query, visible range of fields is different.
     *
     * @typedef TaskInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The task information data structure for query results.
     * Provides common query and advanced query, visible range of fields is different.
     *
     * @typedef TaskInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    interface TaskInfo {
      /**
       * The UID of an application.
       * For system query only.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly uid?: string;
      /**
       * The bundle name.
       * For system query only.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 10 dynamic
       * @since 23 static
       */
      readonly bundle?: string;
      /**
       * The path to save the downloaded file.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The path to save the downloaded file.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly saveas?: string;
      /**
       * The url of a task.
       * For `${ show }` and `${ touch }`.
       * It is empty string in `${ query }`.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The url of a task.
       * For `${ show }` and `${ touch }`.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly url?: string;
      /**
       * The arguments.
       * For `${ show }` and `${ touch }`.
       * It is empty string in `${ query }`.
       *
       * @type { ?(string | Array<FormItem>) }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The arguments.
       * For `${ show }` and `${ touch }`.
       *
       * @type { ?(string | Array<FormItem>) }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly data?: string | Array<FormItem>;
      /**
       * The task id.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task id.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * The task title.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task title.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly title: string;
      /**
       * The task details.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task details.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly description: string;
      /**
       * The task action.
       *
       * @type { Action }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task action.
       *
       * @type { Action }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly action: Action;
      /**
       * Specify task mode.
       * The default is frontend and background.
       *
       * @type { Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Specify task mode.
       * The default is frontend.
       *
       * @type { Mode }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly mode: Mode;
      /**
       * The priority of this task.
       * Front-end tasks have higher priority than back-end tasks.
       * In tasks of the same mode, the smaller the number, the higher the priority.
       * The default is 0.
       *
       * @type { int }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11 dynamic
       * @since 23 static
       */
      readonly priority: int;
      /**
       * The MIME type in the configuration of the task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The MIME type in the configuration of the task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly mimeType: string;
      /**
       * An instance of `Progress` for a task.
       *
       * @type { Progress }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * An instance of `Progress` for a task.
       *
       * @type { Progress }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly progress: Progress;
      /**
       * The progress notification policy of a background task.
       *
       * @type { boolean }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly gauge: boolean;
      /**
       * The creating date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The creating date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { long }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly ctime: long;
      /**
       * The modified date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The modified date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { long }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly mtime: long;
      /**
       * The retry switch of a task.
       * Just for background, frontend always disabled.
       *
       * @type { boolean }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly retry: boolean;
      /**
       * The tried times of a task.
       *
       * @type { int }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10 dynamic
       * @since 23 static
       */
      readonly tries: int;
      /**
       * The faults case of a task.
       *
       * @type { Faults }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The faults case of a task.
       *
       * @type { Faults }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly faults: Faults;
      /**
       * The reason of a waiting/failed/stopped/paused task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The reason of a waiting/failed/stopped/paused task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       * @since 23 static
       */
      readonly reason: string;
      /**
       * The extras of a task.
       * For background, the last response from server.
       * For frontend, nothing now.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The extras of a task.
       * For frontend, nothing now.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 11 dynamic
       */
      readonly extras?: object;
      /**
       * The extras of a task.
       * For frontend, nothing now.
       *
       * @type { ?Record<string, string> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      readonly extras?: Record<string, string>;
    }

    /**
     * The HTTP response.
     * Describes the data structure of the task response header.
     *
     * @interface HttpResponse
     * @syscap SystemCapability.Request.FileTransferAgent
     * @atomicservice
     * @since 12
     */
    /**
     * The HTTP response.
     * Describes the data structure of the task response header.
     *
     * @interface HttpResponse
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    interface HttpResponse {
      /**
       * The version of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * The version of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       * @since 23 static
       */
      readonly version: string,
      /**
       * The status code of the HTTP response.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * The status code of the HTTP response.
       *
       * @type { int }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       * @since 23 static
       */
      readonly statusCode: int,
      /**
       * The reason of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * The reason of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       * @since 23 static
       */
      readonly reason: string,
      /**
       * The headers of the HTTP response.
       *
       * @type { Map<string, Array<string>> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * The headers of the HTTP response.
       *
       * @type { Map<string, Array<string>> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       * @since 23 static
       */
      readonly headers: Map<string, Array<string>>,
    }

    /**
     * Reason for task waiting.
     *
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    enum WaitingReason {
      /**
       * Indicates the task is waiting for running queue to be free.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      TASK_QUEUE_FULL = 0x00,
      /**
       * Indicates the task is waiting for network to recover.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      NETWORK_NOT_MATCH = 0x01,
      /**
       * Indicates the task is waiting for app to return to the foreground.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      APP_BACKGROUND = 0x02,
      /**
       * Indicates the task is waiting for user to become activated.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       * @since 23 static
       */
      USER_INACTIVATED = 0x03,
    }

    /**
     * The callback function for the download progress event.
     *
     * @typedef { function } ProgressCallback
     * @param { Progress } progress - callback function with a `Progress` argument.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 static
     */
    export type ProgressCallback = (progress: Progress) => void;

    /**
     * The task entry.
     * New task' status is "initialized" and enqueue.
     * Can `start` a initialized task.
     * Can `pause` a waiting/running/retrying background task.
     * Can `resume` a paused background task.
     * Can `stop` a running/waiting/retrying task and dequeue it.
     *
     * @typedef Task
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * The task entry.
     * New task' status is "initialized" and enqueue.
     * Can `start` a initialized task.
     * Can `pause` a waiting/running/retrying background task.
     * Can `resume` a paused background task.
     * Can `stop` a running/waiting/retrying task and dequeue it.
     *
     * @typedef Task
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interface Task {
      /**
       * The task id, unique on system.
       * Generated automatically by system.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The task id, unique on system.
       * Generated automatically by system.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      readonly tid: string;
      /**
       * The configurations for the task.
       *
       * @type { Config }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * The configurations for the task.
       *
       * @type { Config }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      config: Config;
      /**
       * Enable the specified callback for a frontend task.
       *
       * @param { 'progress' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Enables the specified callback.
       *
       * @param { 'progress' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      on(event: 'progress', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onProgress(callback: ProgressCallback): void;
      /**
       * Disable the specified callback for a frontend task.
       * Unsubscribes from task progress events.
       *
       * @param { 'progress' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from task progress events.
       *
       * @param { 'progress' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      off(event: 'progress', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offProgress(callback?: ProgressCallback): void;
      /**
       * Enable the specified callback for a frontend task.
       *
       * @param { 'completed' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - task mode error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Enables the specified callback.
       *
       * @param { 'completed' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      on(event: 'completed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onCompleted(callback: ProgressCallback): void;
      /**
       * Disable the specified callback for a frontend task.
       * Unsubscribes from task completion events.
       *
       * @param { 'completed' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from task completion events.
       *
       * @param { 'completed' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      off(event: 'completed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offCompleted(callback?: ProgressCallback): void;
      /**
       * Enable the specified callback for a frontend task.
       * Subscribes to task failure events.
       *
       * @param { 'failed' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Enables the specified callback.
       * Subscribes to task failure events.
       *
       * @param { 'failed' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      on(event: 'failed', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFailed(callback: ProgressCallback): void;
      /**
       * Disable the specified callback for a frontend task.
       * Unsubscribes from task failure events.
       *
       * @param { 'failed' } event event types.
       * @param { function } callback callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from task failure events.
       *
       * @param { 'failed' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       */
      off(event: 'failed', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFailed(callback?: ProgressCallback): void;
      /**
       * Enables the specified callback.
       * Subscribes to task pause events.
       *
       * @param { 'pause' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Enables the specified callback.
       * Subscribes to task pause events.
       *
       * @param { 'pause' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      on(event: 'pause', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onPause(callback: ProgressCallback): void;
      /**
       * Disables the specified callback.
       * Unsubscribes from the foreground task pause event.
       *
       * @param { 'pause' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from the foreground task pause event.
       *
       * @param { 'pause' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      off(event: 'pause', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offPause(callback?: ProgressCallback): void;
      /**
       * Enables the specified callback.
       * Subscribes to task resume events.
       *
       * @param { 'resume' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Enables the specified callback.
       * Subscribes to task resume events.
       *
       * @param { 'resume' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      on(event: 'resume', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResume(callback: ProgressCallback): void;
      /**
       * Disables the specified callback.
       * Unsubscribes from the foreground task resume event.
       *
       * @param { 'resume' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from the foreground task resume event.
       *
       * @param { 'resume' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      off(event: 'resume', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResume(callback?: ProgressCallback): void;
      /**
       * Enables the specified callback.
       * Subscribes to task removal events.
       *
       * @param { 'remove' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Enables the specified callback.
       * Subscribes to task removal events.
       *
       * @param { 'remove' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      on(event: 'remove', callback: (progress: Progress) => void): void;
      /**
       * Enables the specified callback.
       *
       * @param { ProgressCallback } callback - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onRemove(callback: ProgressCallback): void;
      /**
       * Disables the specified callback.
       * Unsubscribes from the task removal event.
       *
       * @param { 'remove' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Disables the specified callback.
       * Unsubscribes from the task removal event.
       *
       * @param { 'remove' } event - event types.
       * @param { function } callback - callback function with a `Progress` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       */
      off(event: 'remove', callback?: (progress: Progress) => void): void;
      /**
       * Disables the specified callback.
       *
       * @param { ProgressCallback } [callback] - callback function with a `Progress` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offRemove(callback?: ProgressCallback): void;
      /**
       * Enables the response callback.
       *
       * @param { 'response' } event - event types.
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * Enables the response callback.
       *
       * @param { 'response' } event - event types.
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       */
      on(event: 'response', callback: Callback<HttpResponse>): void;
      /**
       * Enables the response callback.
       *
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onResponse(callback: Callback<HttpResponse>): void;
      /**
       * Disables the response callback.
       * Unsubscribes from task response headers.
       *
       * @param { 'response' } event - event types.
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 12
       */
      /**
       * Disables the response callback.
       * Unsubscribes from task response headers.
       *
       * @param { 'response' } event - event types.
       * @param { Callback<HttpResponse> } callback - callback function with an `HttpResponse` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20 dynamic
       */
      off(event: 'response', callback?: Callback<HttpResponse>): void;
      /**
       * Disables the response callback.
       *
       * @param { Callback<HttpResponse> } [callback] - callback function with an `HttpResponse` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offResponse(callback?: Callback<HttpResponse>): void;
      /**
       * Enables the 'faultOccur' callback.
       * This callback is triggered when the task failed.
       * The returned `Faults` will contain the reason why the task failed.
       *
       * @param { 'faultOccur' } event - event types.
       * @param { Callback<Faults> } callback - callback function with a `Faults` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'faultOccur', callback: Callback<Faults>): void;
      /**
       * Enables the 'faultOccur' callback.
       * This callback is triggered when the task failed.
       * The returned `Faults` will contain the reason why the task failed.
       *
       * @param { Callback<Faults> } callback - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onFaultOccur(callback: Callback<Faults>): void;
      /**
       * Disables the 'faultOccur' callback.
       *
       * @param { 'faultOccur' } event - event types.
       * @param { Callback<Faults> } callback - callback function with a `Faults` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'faultOccur', callback?: Callback<Faults>): void;
      /**
       * Disables the 'faultOccur' callback.
       *
       * @param { Callback<Faults> } [callback] - callback function with a `Faults` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offFaultOccur(callback?: Callback<Faults>): void;
      /**
       * Enables the wait callback.
       * This callback is triggered when the task changes from other states to the waiting state.
       * The returned `WaitingReason` will contain the reason why the task enters waiting state.
       *
       * @param { 'wait' } event - event types.
       * @param { Callback<WaitingReason> } callback - callback function with an `WaitingReason` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      on(event: 'wait', callback: Callback<WaitingReason>): void;
      /**
       * Enables the wait callback.
       * This callback is triggered when the task changes from other states to the waiting state.
       * The returned `WaitingReason` will contain the reason why the task enters waiting state.
       *
       * @param { Callback<WaitingReason> } callback - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      onWait(callback: Callback<WaitingReason>): void;
      /**
       * Disables the wait callback.
       *
       * @param { 'wait' } event - event types.
       * @param { Callback<WaitingReason> } callback - callback function with an `WaitingReason` argument.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       * <br>2. Incorrect parameter type. 3. Parameter verification failed.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20 dynamic
       */
      off(event: 'wait', callback?: Callback<WaitingReason>): void;
      /**
       * Disables the wait callback.
       *
       * @param { Callback<WaitingReason> } [callback] - callback function with an `WaitingReason` argument.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 23 static
       */
      offWait(callback?: Callback<WaitingReason>): void;
      /**
       * Starts the task.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Starts the task.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11
       */
      /**
       * Starts the task. The following tasks can be started:
       * 1. Tasks just created.
       * 2. Download tasks that are stopped or become FAILED.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      start(callback: AsyncCallback<void>): void;
      /**
       * Starts the task.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Starts the task.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11
       */
      /**
       * Starts the task. The following tasks can be started:
       * 1. Tasks just created.
       * 2. Download tasks that are stopped or become FAILED.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 12 dynamic
       * @since 23 static
       */
      start(): Promise<void>;
      /**
       * Pauses the background task.
       *
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Pauses a task that is waiting, running, or retrying.
       *
       * @param { AsyncCallback<void> } callback - callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Pauses a task that is waiting, running, or retrying.
       *
       * @param { AsyncCallback<void> } callback - callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       * @since 23 static
       */
      pause(callback: AsyncCallback<void>): void;
      /**
       * Pauses the background task.
       *
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Pauses a task that is waiting, running, or retrying.
       *
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Pauses a task that is waiting, running, or retrying.
       *
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       * @since 23 static
       */
      pause(): Promise<void>;
      /**
       * Resumes the background task.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Resumes a paused task.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Resumes a paused task.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback - callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       * @since 23 static
       */
      resume(callback: AsyncCallback<void>): void;
      /**
       * Resumes the background task.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900005 - Operation with wrong task mode.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Resumes a paused task.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 11
       */
      /**
       * Resumes a paused task.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20 dynamic
       * @since 23 static
       */
      resume(): Promise<void>;
      /**
       * Stop a running, waiting, or retrying task.
       *
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Stop a running, waiting, or retrying task.
       *
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      stop(callback: AsyncCallback<void>): void;
      /**
       * Stop a running, waiting, or retrying task.
       *
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 10
       */
      /**
       * Stop a running, waiting, or retrying task.
       *
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @throws { BusinessError } 21900007 - Operation with wrong task state.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 11 dynamic
       * @since 23 static
       */
      stop(): Promise<void>;
      /**
       * Sets the maximum transfer speed of the task.
       * The minimum value of the speed limit is 16,384 bytes per second(16 KB/s).
       *
       * @param { long } speed - the maximum transfer speed of the task, in bytes per second.
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
       *     2. Incorrect parameter type. 3. Parameter verification failed.
       * @throws { BusinessError } 13400003 - Task service ability error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 18 dynamic
       * @since 23 static
       */
      setMaxSpeed(speed: long): Promise<void>;
    }

    /**
     * Creates a task for upload or download and enqueue it.
     * Only foreground application can create the frontend task.
     * It can deal only one frontend task at a time.
     * A in processing frontend task will be forced to stop when its application had switched to background.
     * A new frontend task will interrupt a existed in processing frontend task.
     * The background task is highly recommended.
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @param { AsyncCallback<Task> } callback indicate the callback function to receive Task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - the application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Creates a task for upload or download and enqueue it.
     * When an application enters the background, the frontend tasks associated
     * with it will gradually be paused until the application returns to the foreground. 
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @param { AsyncCallback<Task> } callback indicate the callback function to receive Task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config, callback: AsyncCallback<Task>): void;

    /**
     * Creates a task for upload or download and enqueue it.
     * Only foreground application can create the frontend task.
     * It can deal only one frontend task at a time.
     * A in processing frontend task will be forced to stop when its application had switched to background.
     * A new frontend task will interrupt a existed in processing frontend task.
     * The background task is highly recommended.
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @returns { Promise<Task> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - the application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Creates a task for upload or download and enqueue it.
     * When an application enters the background, the frontend tasks associated.
     * with it will gradually be paused until the application returns to the foreground.
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @returns { Promise<Task> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - Invalid file or file system error.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900004 - The application task queue is full.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    function create(context: BaseContext, config: Config): Promise<Task>;

    /**
     * Gets the task with the specified id.
     * Obtains task information based on the task ID.
     *
     * @param { BaseContext } context - context of the caller.
     * @param { string } id - the id of the task.
     * @param { string } token - the token of the task, length between 8 and 2048 bytes.
     * @returns { Promise<Task> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 11 dynamic
     * @since 23 static
     */
    function getTask(context: BaseContext, id: string, token?: string): Promise<Task>;

    /**
     * Removes specified task belongs to the caller.
     * The task will be forced to stop if in processing.
     *
     * @param { string } id the task id.
     * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating success or not.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Removes specified task belongs to the caller.
     * The task will be forced to stop if in processing.
     *
     * @param { string } id the task id.
     * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating success or not.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    function remove(id: string, callback: AsyncCallback<void>): void;

    /**
     * Removes specified task belongs to the caller.
     * The task will be forced to stop if in processing.
     *
     * @param { string } id the task id.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Removes specified task belongs to the caller.
     * The task will be forced to stop if in processing.
     *
     * @param { string } id the task id.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    function remove(id: string): Promise<void>;

    /**
     * Shows specified task details belongs to the caller.
     * Queries a task details based on the task ID.
     *
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Shows specified task details belongs to the caller.
     * Queries a task details based on the task ID.
     *
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function show(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Shows specified task details belongs to the caller.
     * Queries a task details based on the task ID.
     *
     * @param { string } id the task id.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Shows specified task details belongs to the caller.
     * Queries a task details based on the task ID.
     *
     * @param { string } id the task id.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function show(id: string): Promise<TaskInfo>;

    /**
     * Touches specified task with token.
     * Queries the task details based on the task ID and token.
     *
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Touches specified task with token.
     * Queries the task details based on the task ID and token.
     *
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key, length between 8 and 2048 bytes.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Touches specified task with token.
     * Queries the task details based on the task ID and token.
     *
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key, length between 8 and 2048 bytes.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Touches specified task with token.
     * Queries the task details based on the task ID and token.
     *
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key, length between 8 and 2048 bytes.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function touch(id: string, token: string): Promise<TaskInfo>;

    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function search(callback: AsyncCallback<Array<string>>): void;

    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { Filter } filter an instance of `Filter`.
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { Filter } filter an instance of `Filter`.
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function search(filter: Filter, callback: AsyncCallback<Array<string>>): void;

    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { Filter } filter an instance of `Filter`.
     * @returns { Promise<Array<string>> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    /**
     * Searches tasks, for system.
     * Searches for task IDs based on Filter.
     *
     * @param { Filter } filter an instance of `Filter`.
     * @returns { Promise<Array<string>> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter type.
     * <br>2. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    function search(filter?: Filter): Promise<Array<string>>;

    /**
     * Queries specified task details.
     * Creates a group based on GroupConfig
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string, callback: AsyncCallback<TaskInfo>): void;

    /**
     * Queries specified task details.
     *
     * @permission ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER
     * @param { string } id the task id.
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    function query(id: string): Promise<TaskInfo>;

    /**
     * Describes group configuration options for download tasks.
     * 
     * @typedef GroupConfig
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    interface GroupConfig {
      /**
       * Sets display strategy for background task notifications.
       * If true, progress, completed, and failed notifications will be displayed.
       * If false, only completed or failed notifications will be displayed.
       * The default value is false.
       * 
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      gauge?: boolean;
      /**
       * Customizes the notification of the task group.
       * 
       * @type { Notification }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 15 dynamic
       * @since 23 static
       */
      notification: Notification;
    }

    /**
     * Creates a background download task notification group.
     * Creates a group based on GroupConfig and returns the group ID.
     * 
     * @param { GroupConfig } config - config of the group.
     * @returns { Promise<string> } the gid of the group.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function createGroup(config: GroupConfig): Promise<string>;

    /**
     * Attaches multiple download task IDs to a specified group ID.
     * If any task ID does not meet the attachment conditions,
     * all tasks in the list will not be added to the group.
     * 
     * @param { string } gid - the gid of the target group.
     * @param { string[] } tids - the tid list of tasks to be attached.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900005 - Operation with wrong task mode.
     * @throws { BusinessError } 21900006 - Task removed or not found.
     * @throws { BusinessError } 21900007 - Operation with wrong task state.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function attachGroup(gid: string, tids: string[]): Promise<void>;

    /**
     * Deletes the target group, no more new tasks can be added to this group.
     * If all tasks in this group end, completed or failed notifications will be displayed.
     * 
     * @param { string } gid - the gid of the target group.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400003 - Task service ability error.
     * @throws { BusinessError } 21900008 - Group deleted or not found.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 15 dynamic
     * @since 23 static
     */
    function deleteGroup(gid: string): Promise<void>;
  }
}

export default request;
