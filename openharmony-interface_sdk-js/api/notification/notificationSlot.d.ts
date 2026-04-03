/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file The NotificationSlot module provides APIs for defining the notification slot.
 * @kit NotificationKit
 */

/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */
/*** if arkts dynamic&static */
import type notificationManager from '../@ohos.notificationManager';
/*** endif */

/**
 * The NotificationSlot module provides APIs for defining the notification slot.
 *
 * @typedef NotificationSlot
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSlot {
  /**
   * Notification slot type.
   *
   * @type { ?notification.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * Notification slot type.
   *
   * @type { ?notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationType?: notificationManager.SlotType;

  /**
   * Notification level.
   *
   * @type { ?notification.SlotLevel }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 20
   * @useinstead NotificationSlot#notificationLevel
   */
  level?: notification.SlotLevel;

  /**
   * SlotLevel is used to regulate the display behavior and alert mechanisms of notifications.
   * Each value of SlotLevel determines whether the system displays notification icons in the status bar,
   * shows banners, or plays prompt tones.
   *
   * @type { ?notificationManager.SlotLevel }
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  notificationLevel?: notificationManager.SlotLevel;

  /**
   * Notification slot description.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  desc?: string;

  /**
   * Whether to display the badge.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeFlag?: boolean;

  /**
   * Whether to bypass DND mode in the system.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  bypassDnd?: boolean;

  /**
   * Mode for displaying the notification on the lock screen.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lockscreenVisibility?: int;

  /**
   * Whether to enable vibration for the notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationEnabled?: boolean;

  /**
   * Notification alert tone.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Whether the indicator blinks for the notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightEnabled?: boolean;

  /**
   * Indicator color of the notification.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightColor?: int;

  /**
   * Vibration mode of the notification.
   *
   * @type { ?Array<long> }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationValues?: Array<long>;

  /**
   * Whether the notification slot is enabled. The value true means to enable the notification slot, and false means the opposite.
   *
   * @type { ?boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled?: boolean;

  /**
   * Obtains the notification reminder mode of the current notification entry.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderMode?: int;

  /**
   * Obtains channel information is authorized by the user.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly authorizedStatus?: int;
}
