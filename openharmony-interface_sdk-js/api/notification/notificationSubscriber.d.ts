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
 * @file Provides methods that will be called back when the subscriber receives a new notification or a notification is canceled
 * @kit NotificationKit
 */

import { NotificationRequest } from './notificationRequest';
import { NotificationSortingMap } from './notificationSortingMap';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */

/**
 * Provides methods that will be called back when the subscriber receives a new notification or
 * a notification is canceled.
 *
 * @interface NotificationSubscriber
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscriber {
  /**
   * The callback function that receives a new notification.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConsume?: (data: SubscribeCallbackData) => void;

  /**
   * The callback function that cancels the notification.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onCancel?: (data: SubscribeCallbackData) => void;

  /**
   * The callback function that updates the sort of notifications.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onUpdate?: (data: NotificationSortingMap) => void;

  /**
   * The callback function of the completed subscription.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConnect?: () => void;

  /**
   * The callback function to unsubscribe.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDisconnect?: () => void;

  /**
   * The callback function that service disconnected.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDestroy?: () => void;

  /**
   * Callback when the Do Not Disturb setting changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSubscriber#onDoNotDisturbChanged
   */
  onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void;

  /**
   * Callback when the Do Not Disturb setting changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void;

  /**
   * Callback when the notification permission is changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onEnabledNotificationChanged?: (callbackData: EnabledNotificationCallbackData) => void;

  /**
   * Called when the enabling status of the silent reminder changed.
   *
   * @type { ?EnabledSilentReminderChangedCallback }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback;

  /**
   * Called when the enabling status of the priority notification changes.
   * 
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void;

  /**
   * Called when the enabling status of the application priority notification changes.
   * 
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void;

  /**
   * Callback when badge number changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  onBadgeChanged?: (data: BadgeNumberCallbackData) => void;

  /**
   * Callback when badge enabled state changed.
   *
   * @type { ?BadgeEnabledChangedCallback }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  onBadgeEnabledChanged?: BadgeEnabledChangedCallback;

  /**
   * Callback when badge cancel notifications.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onBatchCancel?: (data: Array<SubscribeCallbackData>) => void;

  /**
   * Callback when the system properties of notification changed.
   *
   * @type { ?SystemUpdateCallback }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onSystemUpdate?: SystemUpdateCallback;
}

/**
 * Provides methods that will be called back when the subscriber receives a new notification or
 * a notification is canceled.
 *
 * @typedef SubscribeCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface SubscribeCallbackData {
  /**
   * Content of the notice.
   *
   * @type { NotificationRequest }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly request: NotificationRequest;

  /**
   * Notify sorting information.
   *
   * @type { ?NotificationSortingMap }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sortingMap?: NotificationSortingMap;

  /**
   * The reason for the deletion.(1:CLICK_REASON_REMOVE,2:CANCEL_REASON_REMOVE)
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly reason?: int;

  /**
   * Notification sound.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sound?: string;

  /**
   * Notice the vibration.
   *
   * @type { ?Array<long> }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly vibrationValues?: Array<long>;
}

/**
 * Describes the properties of the application that the permission to send notifications 
 * or the badge enabled state has changed.
 *
 * @typedef EnabledNotificationCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface EnabledNotificationCallbackData {
  /**
   * The bundle name of the application.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * Apply notification enable status.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly enable: boolean;
}

/**
 * Describes the switch state for silent reminder notification.
 *
 * @typedef EnabledSilentReminderCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface EnabledSilentReminderCallbackData {
  /**
   * The bundle name of the application.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly uid: int;

  /**
   * The switch state for silent reminder notification.
   *
   * @type { notificationManager.SwitchState }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly enableStatus: notificationManager.SwitchState;
}

/**
 * Describes the main switch state for priority notification.
 *
 * @typedef EnabledPriorityNotificationCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationCallbackData {
  /**
   * The main switch state for priority notification.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enable: boolean;
}

/**
 * Describes the switch state to Restrict notification capability.
 *
 * @typedef EnabledPriorityNotificationByBundleCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationByBundleCallbackData {
  /**
   * The bundle name of the application.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly uid: int;

  /**
   * Apply notification enable status.
   *
   * @type { notificationManager.PriorityEnableStatus }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enableStatus: notificationManager.PriorityEnableStatus;
}

/**
 * Describes the badge number of the application has changed.
 *
 * @typedef BadgeNumberCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface BadgeNumberCallbackData {
  /**
   * bundle name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * badge number
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly badgeNumber: int;

  /**
   * Application instance key.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead BadgeNumberCallbackData#appInstanceKey
   */
  readonly instanceKey?: number;

  /**
   * Application instance key.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  readonly appInstanceKey?: string;
}

/**
 * Defines the callback of BadgeEnabledChanged.
 * @typedef BadgeEnabledChangedCallback
 * @syscap SystemCapability.Notification.Notification
 * @since 12 dynamic
 */
export interface BadgeEnabledChangedCallback {
  /**
   * Defines the BadgeEnabledChanged callback.
   * @param { EnabledNotificationCallbackData } data
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  (data: EnabledNotificationCallbackData): void;
}

/**
 * Defines the BadgeEnabledChanged callback.
 * @param { EnabledNotificationCallbackData } data
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void;

/**
 * Defines the SystemUpdateCallback callback.
 *
 * @param { SubscribeCallbackData } data
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export type SystemUpdateCallback = (data: SubscribeCallbackData) => void;

/**
 * Called when the enabling status of the silent reminder changed.
 *
 * @typedef { function }
 * @param { EnabledSilentReminderCallbackData } callbackData - the information of application's silent reminder status.
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void;