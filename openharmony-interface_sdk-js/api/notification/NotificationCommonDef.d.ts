/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file The NotificationCommonDef module provides APIs for describing the BundleOption information, that is, the bundle information of a specified application.
 * @kit NotificationKit
 */

/**
 * The NotificationCommonDef module provides APIs for describing the BundleOption information, that is, the bundle information of a specified application.
 *
 * @typedef BundleOption
 * @syscap SystemCapability.Notification.Notification
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleOption {
  /**
   * Application name.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  bundle: string;

  /**
   * UID of an application, which is obtained from ApplicationInfo. The default value is 0.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  uid?: int;
}

/**
 * The NotificationCommonDef module provides APIs for describing the GrantedBundleInfo, that is,
 *  the bundle information of a specified application granted to third party wearable application by user.
 *
 * @typedef GrantedBundleInfo
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface GrantedBundleInfo {
  /**
   * Name of the bundle.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * The appIndex of application that creates the notification, only work in appClone mode.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Name of the application.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;
}

/**
 * The NotificationCommonDef module provides APIs for describing the UserGrantSetting, that is,
 * the bundle information of a specified application granted to third party wearable application by user.
 *
 * @typedef UserGrantSetting
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface UserGrantSetting {
  /**
   * User-granted state.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly userGrantEnabled: boolean;

  /**
   * Array of user-granted bundle info.
   *
   * @type { ?Array<GrantedBundleInfo> }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly grantedBundleInfos?: Array<GrantedBundleInfo>;
}
