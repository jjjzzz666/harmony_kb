/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file The NotificationFlags module implements a NotificationFlags instance.
 * @kit NotificationKit
 */

/**
 * Enumerates the notification flag statuses.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 8
 */
/**
 * Enumerates the notification flag statuses.
 *
 * @enum { int }
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export enum NotificationFlagStatus {
  /**
   * The default flag is used. The effect is the same as that of TYPE_OPEN.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  /**
   * The default flag is used. The effect is the same as that of TYPE_OPEN.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  TYPE_NONE = 0,

  /**
   * The notification flag is enabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  /**
   * The notification flag is enabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  TYPE_OPEN = 1,

  /**
   * The notification flag is disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  /**
   * The notification flag is disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  TYPE_CLOSE = 2
}

/**
 * Describes a NotificationFlags instance.
 *
 * @typedef NotificationFlags
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationFlags {
  /**
   * Whether to enable sound reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  /**
   * Whether to enable sound reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  soundEnabled?: NotificationFlagStatus;

  /**
   * Whether to enable vibration reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  /**
   * Whether to enable vibration reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  vibrationEnabled?: NotificationFlagStatus;

  /**
   * Whether to enable banner reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  bannerEnabled?: NotificationFlagStatus;

  /**
   * Whether to enable lockScreen reminder.
   *
   * @type { ?NotificationFlagStatus }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  lockScreenEnabled?: NotificationFlagStatus;

  /**
   * Read-only the prompt entry information allowed by the current channel.
   *
   * @type { ?long }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderFlags?: long;
}
