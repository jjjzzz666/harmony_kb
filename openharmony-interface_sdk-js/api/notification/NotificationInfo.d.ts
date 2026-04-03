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
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';
import { NotificationExtensionContent } from './NotificationExtensionContent';

/**
 * The notification info describes the notification to be shared with third party wearables.
 *
 * @typedef NotificationInfo
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationInfo {
  /**
   * Unique ID of the notification.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly hashCode: string;

  /**
   * Notification slot type. The default value is OTHER_TYPES.
   *
   * @type { notificationManager.SlotType }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly notificationSlotType: notificationManager.SlotType;

  /**
   * Notification content.
   *
   * @type { NotificationExtensionContent }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly content: NotificationExtensionContent;
  
  /**
   * Name of the bundle that creates the notification.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Name of the application that creates the notification.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;

  /**
   * The publish timestamp of notification.
   *
   * @type { ?long }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly deliveryTime?: long;

  /**
   * Notification group name. This parameter is left blank by default.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly groupName?: string;

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
}