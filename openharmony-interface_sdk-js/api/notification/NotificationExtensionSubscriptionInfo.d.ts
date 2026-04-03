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
 * @file Describes a notification extension subscription info
 * @kit NotificationKit
 */

import type notificationExtensionSubscription from '../@ohos.notificationExtensionSubscription';

/**
 * Describes the notification extension subscription info.
 *
 * @typedef NotificationExtensionSubscriptionInfo
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationExtensionSubscriptionInfo {
  /**
   * Indicates device ID. For example, "11:22:33:AA:BB:FF".
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  addr: string;

  /**
   * The type of subscribe.
   *
   * @type { notificationExtensionSubscription.SubscribeType }
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  type: notificationExtensionSubscription.SubscribeType;
}
