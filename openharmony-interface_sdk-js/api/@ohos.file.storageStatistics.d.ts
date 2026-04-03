/*
 * Copyright (C) 2022-2025 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides filesystem statistics APIs.
 *
 * @namespace storageStatistics
 * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace storageStatistics {
  /**
   * Get the total size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getTotalSizeOfVolume(volumeUuid: string, callback: AsyncCallback<long>): void;

  /**
   * Get the total size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getTotalSizeOfVolume(volumeUuid: string): Promise<long>;
  /**
   * Get the free size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getFreeSizeOfVolume(volumeUuid: string, callback: AsyncCallback<long>): void;

  /**
   * Get the free size of volume.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeUuid - The uuid of the volume
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getFreeSizeOfVolume(volumeUuid: string): Promise<long>;

  /**
   * Get the bundle statistics.
   *
   * @interface BundleStats
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BundleStats {
    /**
     * The size of application installation data.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    appSize: long;

    /**
     * The size of application cache data.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    cacheSize: long;

    /**
     * The size of application local data, distributed data and database data.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @since 9 dynamic
     * @since 23 static
     */
    dataSize: long;
  }
  /**
   * Get the bundle statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - The name of the application
   * @param { AsyncCallback<BundleStats> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */ 
  /**
   * Get the bundle statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - The name of the application
   * @param { AsyncCallback<BundleStats> } callback - callback
   * @param { number } index - The index number of the clone application, the default value is 0.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getBundleStats(packageName: string, callback: AsyncCallback<BundleStats>, index?: int): void;

  /**
   * Get the bundle statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - The name of the application
   * @returns { Promise<BundleStats> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the bundle statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } packageName - The name of the application
   * @param { int } index - The index number of the clone application, the default value is 0.
   * @returns { Promise<BundleStats> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getBundleStats(packageName: string, index?: int): Promise<BundleStats>;

  /**
   * Get the current bundle statistics.
   *
   * @param { AsyncCallback<BundleStats> } callback - callback
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentBundleStats(callback: AsyncCallback<BundleStats>): void;

  /**
   * Get the current bundle statistics.
   *
   * @returns { Promise<BundleStats> } return Promise
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentBundleStats(): Promise<BundleStats>;

  /**
   * Get the system size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSystemSize(callback: AsyncCallback<long>): void;

  /**
   * Get the system size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSystemSize(): Promise<long>;

  /**
   * Get the user storage statistics.
   *
   * @interface StorageStats
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface StorageStats {
    /**
     * The total size of device.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    total: long;

    /**
     * The size of audio file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    audio: long;

    /**
     * The size of video file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    video: long;

    /**
     * The size of image file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    image: long;

    /**
     * The size of other file.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    file: long;

    /**
     * The size of application.
     *
     * @type { long }
     * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    app: long;
  }

  /**
   * Get the user storage statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<StorageStats> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(): Promise<StorageStats>;

  /**
   * Get the user storage statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<StorageStats> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getUserStorageStats(callback: AsyncCallback<StorageStats>): void;

  /**
   * Get the user storage statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - The id of the user
   * @returns { Promise<StorageStats> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600009 - User if out of range.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
function getUserStorageStats(userId: long): Promise<StorageStats>;

  /**
   * Get the user storage statistics.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { long } userId - The id of the user
   * @param { AsyncCallback<StorageStats> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:1.Mandatory
parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600009 - User if out of range.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
function getUserStorageStats(userId: long, callback: AsyncCallback<StorageStats>): void;

  /**
   * Get the total size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the total size.
   *
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
function getTotalSize(callback: AsyncCallback<long>): void;

  /**
   * Get the total size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the total size.
   *
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getTotalSize(): Promise<long>;

  /**
   * Get the total size with sync interface
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { number } return the total size
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 10
   */
  /**
   * Get the total size with sync interface
   *
   * @returns { long } return the total size
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getTotalSizeSync(): long;

  /**
   * Get the free size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the free size.
   *
   * @param { AsyncCallback<long> } callback - callback
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
function getFreeSize(callback: AsyncCallback<long>): void;

  /**
   * Get the free size.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 9
   */
  /**
   * Get the free size.
   *
   * @returns { Promise<long> } return Promise
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getFreeSize(): Promise<long>;

  /**
   * Get the free size with sync interface.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { number } return the free size
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @since 10
   */
  /**
   * Get the free size with sync interface.
   *
   * @returns { long } return the free size
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @since 15 dynamic
   * @since 23 static
   */
  function getFreeSizeSync(): long;

  /**
   * Space occupancy information of the business.
   *
   * @interface ExtBundleStats
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ExtBundleStats { 
    /**
    * The business name.
    *
    * @type { string }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
    businessName: string;

    /**
    * The business size.
    *
    * @type { long }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
    size: long;

    /**
    * The business flag. Whether it is displayed independently on the interface.
    *
    * @type { boolean }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
    flag: boolean;
  }

  /**
   * Applications actively report the amount of space occupied by their respective services.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - The id of the user
   * @param { ExtBundleStats } stats - Space occupancy information of the business.
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600011 - Failed to report the specified business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setExtBundleStats(userId: int, stats: ExtBundleStats): Promise<void>;

   /**
   * Querying the usage of a specified business space.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - The id of the user
   * @param { string } businessName - Space occupancy information of the business.
   * @returns { Promise<ExtBundleStats> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600012 - Failed to query the specified business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getExtBundleStats(userId: int, businessName: string): Promise<ExtBundleStats>;

    /**
   * Querying the Space Usage of All Business.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { int } userId - The id of the user
   * @returns { Promise<Array<ExtBundleStats>> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600013 - Failed to query all business space usage.
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getAllExtBundleStats(userId: int): Promise<Array<ExtBundleStats>>;
  /**
   * Scan user data dirs.
   * @interface StorageStats
   * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface UserdataDirInfo {  
   /**
    * The user data dirs list.
    *
    * @type { string }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   path: string;
   /**
    * The size of user data dirs.
    *
    * @type { long }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   totalSize: long;
   /**
    * The size of inode count.
    *
    * @type { int }
    * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   totalCnt: int;
 }

 /**
  * Scan user data dirs.
  *
  * @permission ohos.permission.STORAGE_MANAGER
  * @returns { Promise<Array<UserdataDirInfo>> } return the user data dirs scan result
  * @throws { BusinessError } 201 - Permission verification failed.
  * @throws { BusinessError } 202 - The caller is not a system application.
  * @throws { BusinessError } 13600001 - IPC error.
  * @throws { BusinessError } 13600015 - Failed to traverse the query data partition directory.
  * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
  * @systemapi
  * @stagemodelonly
  * @since 23 dynamic&static
  */
 function listUserdataDirInfo(): Promise<Array<UserdataDirInfo>>;

 /**
  * Get the total inodes.
  *
  * @returns { Promise<long> } return Promise
  * @throws { BusinessError } 13600001 - IPC error.
  * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
  * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
  * @stagemodelonly
  * @since 24 dynamic&static
   */
 function getTotalInodes(): Promise<long>;

 /**
  * Get the free inodes.
  *
  * @returns { Promise<long> } return Promise
  * @throws { BusinessError } 13600001 - IPC error.
  * @throws { BusinessError } 13600016 - Failed to query the inode information of the data partition.
  * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
  * @stagemodelonly
  * @since 24 dynamic&static
  */
 function getFreeInodes(): Promise<long>;

 /**
  * Get the current bundle inodes.
  *
  * @returns { Promise<long> } return Promise
  * @throws { BusinessError } 13600001 - IPC error.
  * @throws { BusinessError } 13600002 - File system not supported.
  * @throws { BusinessError } 13600010 - The input parameter is invalid.
  * @throws { BusinessError } 13600017 - Failed to query the inode information of the application.
  * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
  * @stagemodelonly
  * @since 24 dynamic&static
  */
 function getCurrentBundleInodes(): Promise<long>;

 /**
  * Get the system data size.
  *
  * @permission ohos.permission.STORAGE_MANAGER
  * @returns { Promise<long> } return Promise
  * @throws { BusinessError } 201 - Permission verification failed.
  * @throws { BusinessError } 202 - The caller is not a system application.
  * @throws { BusinessError } 13600001 - IPC error.
  * @throws { BusinessError } 13600018 - Failed to query the system data size.
  * @syscap SystemCapability.FileManagement.StorageService.SpatialStatistics
  * @systemapi
  * @stagemodelonly
  * @since 24 dynamic&static
  */
 function getSystemDataSize(): Promise<long>;
}

export default storageStatistics;
