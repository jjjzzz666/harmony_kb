/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit LocalizationKit
 */

/**
 * Provides the capability of install and uninstall font.
 *
 * @namespace fontManager
 * @syscap SystemCapability.Global.FontManager
 * @systemapi
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * Installs the specified path font.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - path indicates the font path.
   * @returns { Promise<int> } - Number indicates the font installation result.
   *        0 - Install successful.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100101 - Font does not exist.
   * @throws { BusinessError } 31100102 - Font is not supported.
   * @throws { BusinessError } 31100103 - Font file copy failed.
   * @throws { BusinessError } 31100104 - Font file installed.
   * @throws { BusinessError } 31100105 - Exceeded maximum number of installed files.
   * @throws { BusinessError } 31100106 - Other error.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function installFont(path: string): Promise<int>;

  /**
   * Uninstalls the specified path font.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } fullName - fullName indicates the font name.
   * @returns { Promise<int> } - number indicates the font uninstallation result.
   *        0 - Uninstall successful.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100107 - Font file does not exist.
   * @throws { BusinessError } 31100108 - Font file delete error.
   * @throws { BusinessError } 31100109 - Other error.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function uninstallFont(fullName: string): Promise<int>;

  /**
   * Font data migration.
   * @permission ohos.permission.UPDATE_FONT
   * @param { DataMigrationCallback } callback callback of dataMigration.
   * @returns { int } The call result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100110 Call failed due to system error.
   * @throws { BusinessError } 31100111 Data migration is in progress.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  function dataMigration(callback: DataMigrationCallback): int;

  /**
   * Provides the DataMigration progress information.
   * @interface DataMigrationProgress
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationProgress {
    /**
     * The Estimated Time Remaining, expressed in seconds.
     * @type { int }
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    timeRemaining: int;

    /**
     * The Progress Percentage.
     * @type { int } int
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    progressPercentage: int;
  }

  /**
   * The Callback of DataMigration.
   * @interface DataMigrationCallback
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationCallback {
    /**
     * The HeartBeat Callback.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onHeartBeat(): void;

    /**
     * The Progress Callback.
     * @param { DataMigrationProgress } progress The DataMigration progress information.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onProgress(progress : DataMigrationProgress): void;

    /**
     * The Result Callback.
     * @param { int } result The DataMigration Result.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onResult(result : int): void;
  }
}

export default fontManager;