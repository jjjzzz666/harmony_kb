/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit BackgroundTasksKit
 */

import { AsyncCallback } from './@ohos.base';
import notification from './@ohos.notificationManager';
import { NotificationSlot } from './notification/notificationSlot';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */
import type { Callback } from './@ohos.base';

/**
 * Providers static methods for managing reminders, including publishing or canceling a reminder.
 * Add or remove a notification slot, and obtain or cancel all reminders of the current application.
 *
 * @namespace reminderAgentManager
 * @syscap SystemCapability.Notification.ReminderAgent
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace reminderAgentManager {
  /**
   * Publishes a scheduled reminder.
   * 
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - Indicates the reminder instance to publish.
   * @param { AsyncCallback<int> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>): void;

  /**
   * Publishes a scheduled reminder.
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - Indicates the reminder instance to publish.
   * @returns { Promise<int> } The reminder id.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest): Promise<int>;

  /**
   * Cancel a reminder.
   *
   * @param { int } reminderId - Indicates the reminder id.
   * @param { AsyncCallback<void> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int, callback: AsyncCallback<void>): void;

  /**
   * Cancel a reminder.
   *
   * @param { int } reminderId - Indicates the reminder id.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int): Promise<void>;

  /**
   * Obtains all the valid reminders of current application.
   *
   * @param { AsyncCallback<Array<ReminderRequest>> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;

  /**
   * Obtains all the valid reminders of current application.
   *
   * @returns { Promise<Array<ReminderRequest>> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(): Promise<Array<ReminderRequest>>;

  /**
   * Cancel all the reminders of current application.
   *
   * @param { AsyncCallback<void> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(callback: AsyncCallback<void>): void;

  /**
   * Cancel all the reminders of current application.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(): Promise<void>;

  /**
   * Add notification slot.
   *
   * @param { NotificationSlot } slot - Indicates the slot.
   * @param { AsyncCallback<void> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Add notification slot.
   *
   * @param { NotificationSlot } slot - Indicates the slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Deletes a created notification slot based on the slot type.
   *
   * @param { notification.SlotType } slotType Indicates the type of the slot.
   * @param { AsyncCallback<void> } callback - Indicates the callback function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;

  /**
   * Deletes a created notification slot based on the slot type.
   *
   * @param { notification.SlotType } slotType Indicates the type of the slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;
  
  /**
   * add exclude date for calendar reminder request.
   *
   * @param { int } reminderId reminder id
   * @param { Date } date date time
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function addExcludeDate(reminderId: int, date: Date): Promise<void>;
  
  /**
   * delete exclude date for calendar reminder request.
   *
   * @param { int } reminderId reminder id
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteExcludeDates(reminderId: int): Promise<void>;
  
  /**
   * get exclude dates
   *
   * @param { int } reminderId reminder id
   * @returns { Promise<Array<Date>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getExcludeDates(reminderId: int): Promise<Array<Date>>;

  /**
   * Obtains all the valid reminders of current application, include reminderId.
   *
   * @returns { Promise<Array<ReminderInfo>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllValidReminders(): Promise<Array<ReminderInfo>>;

  /**
   * Updates a scheduled reminder.
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { int } reminderId - Indicates the reminder id.
   * @param { ReminderRequest } reminderReq - Indicates the reminder.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  function updateReminder(reminderId: int, reminderReq: ReminderRequest): Promise<void>;

  /**
   * Cancel the notification that is currently showing.
   *
   * @param { int } reminderId - Indicates the reminder id.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 23 dynamic&static
   */
  function cancelReminderOnDisplay(reminderId: int): Promise<void>;

  /**
   * Subscribe Reminder State.
   * 
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { Callback<Array<ReminderState>> } callback - Indicates the callback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * UnSubscribe Reminder State. If the parameter is not set, cancel all callbacks.
   * 
   * @param { Callback<Array<ReminderState>> } [callback] - Indicates the callback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unsubscribeReminderState(callback?: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * Declares action button type.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ActionButtonType {
    /**
     * Button for closing the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CLOSE = 0,

    /**
     * Button for snoozing the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_SNOOZE = 1,

    /**
     * The custom button.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CUSTOM = 2
  }

  /**
   * Declares reminder type.
   *
   * @enum { int }
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ReminderType {
    /**
     * Countdown reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_TIMER = 0,

    /**
     * Calendar reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_CALENDAR = 1,

    /**
     * Alarm reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_ALARM = 2
  }

  /**
   * Action button information. The button will show on displayed reminder.
   *
   * @interface ActionButton
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ActionButton {
    /**
     * Text on the button.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * Resource ID for button title.
     * 
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    titleResource?: string;

    /**
     * Button type.
     *
     * @type { ActionButtonType }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    type: ActionButtonType;

    /**
     * Information about the ability that is redirected to when the button is clicked.
     *
     * @type { ?WantAgent }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * It will update the database when the button is clicked.
     *
     * @type { ?DataShareUpdate }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataShareUpdate?: DataShareUpdate;
  }

  /**
   * Want agent information.
   * It will switch to target ability when you click the displayed reminder.
   *
   * @interface WantAgent
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface WantAgent {
    /**
     * Name of the package redirected to when the reminder notification is clicked.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * Name of the ability that is redirected to when the reminder notification is clicked.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * The Uniform Resource Identifier (URI) that will be redirected to.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * The description of the WantParams object in an Want
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * The description of the WantParams object in an Want
     *
     * @type { ?RecordData }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 static
     */
    parameters?: RecordData;
  }

  /**
   * DataShareUpdate information.
   * It will update the database when the button is clicked.
   *
   * @interface DataShareUpdate
   * @syscap SystemCapability.Notification.ReminderAgent
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface DataShareUpdate {
    /**
     * Indicates the path of data to update.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Indicates filter criteria.
     *
     * @type { Record<string, double | string | boolean> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    equalTo: Record<string, double | string | boolean>;

    /**
     * Indicates the data to update. This parameter can be null.
     *
     * @type { ValuesBucket }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    value: ValuesBucket;
  }

  /**
   * Max screen want agent information.
   *
   * @interface MaxScreenWantAgent
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface MaxScreenWantAgent {
    /**
     * Name of the package that is automatically started when the reminder arrives and the device is not in use.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * Name of the ability that is automatically started when the reminder arrives and the device is not in use.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;
  }

  /**
   * Declares ring channel.
   *
   * @enum { int }
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RingChannel {
    /**
     * Ring channel alarm.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_ALARM = 0,

    /**
     * Ring channel media.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_MEDIA = 1,

    /**
     * Ring channel notification.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 dynamic&static
     */
    RING_CHANNEL_NOTIFICATION = 2
  }

  /**
   * Reminder Common information.
   *
   * @interface ReminderRequest
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequest {
    /**
     * Type of the reminder.
     *
     * @type { ReminderType }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    reminderType: ReminderType;

    /**
     * Action button displayed on the reminder notification.
     * (The parameter is optional. Up to two buttons are supported).
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9
     */
    /**
     * Action button displayed on the reminder notification.
     * (The parameter is optional. Up to three buttons are supported).
     *
     * @type { ?[ActionButton?, ActionButton?, ActionButton?] }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     */
    actionButton?: [ActionButton?, ActionButton?, ActionButton?];

    /**
     * Action button displayed on the reminder notification.
     *
     * @type { ?Array<ActionButton> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 static
     */
    actionButton?: Array<ActionButton>;

    /**
     * Information about the ability that is redirected to when the notification is clicked.
     *
     * @type { ?WantAgent }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * Information about the ability that is automatically started when the reminder arrives.
     * If the device is in use, a notification will be displayed.
     *
     * @type { ?MaxScreenWantAgent }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    maxScreenWantAgent?: MaxScreenWantAgent;

    /**
     * Ringing duration.
     *
     * @type { ?long }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ringDuration?: long;

    /**
     * Type of the ring channel.
     *
     * @type { ?RingChannel }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    ringChannel?: RingChannel;

    /**
     * Number of reminder snooze times.
     *
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeTimes?: int;

    /**
     * Reminder snooze interval.
     *
     * @type { ?long }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval?: long;

    /**
     * Reminder title.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * Resource ID for title.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    titleResourceId?: int;
  
    /**
     * Reminder content.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    content?: string;

    /**
     * Resource ID for content.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    contentResourceId?: int;
  
    /**
     * Content to be displayed when the reminder is expired.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    expiredContent?: string;

    /**
     * Resource ID for expired content.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    expiredContentResourceId?: int;
  
    /**
     * Content to be displayed when the reminder is snoozing.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeContent?: string;

    /**
     * Resource ID for snooze content.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    snoozeContentResourceId?: int;
  
    /**
     * Notification id. If there are reminders with the same ID, the later one will overwrite the earlier one.
     *
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    notificationId?: int;

    /**
     * If the same group ID is set for reminders, these reminders are canceled together.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    groupId?: string;

    /**
     * Type of the slot used by the reminder.
     *
     * @type { ?notification.SlotType }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    slotType?: notification.SlotType;

    /**
     * Whether the notification is automatically cleared.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    tapDismissed?: boolean;

    /**
     * Time when the notification is automatically cleared.
     *
     * @type { ?long }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    autoDeletedTime?: long;

    /**
     * Type of the snoozeSlot used by the reminder.
     *
     * @type { ?notification.SlotType }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    snoozeSlotType?: notification.SlotType;

    /**
     * The directory of storing reminder announcements.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    customRingUri?: string;

    /**
     * Force Distributed forwarding flag.
     * 
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    forceDistributed?: boolean;

    /**
     * Distributed forwarding flag.
     * 
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    notDistributed?: boolean;
  }

  /**
   * Calendar reminder information.
   *
   * @extends ReminderRequest
   * @typedef ReminderRequestCalendar
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestCalendar extends ReminderRequest {
    /**
     * Reminder time.
     *
     * @type { LocalDateTime }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    dateTime: LocalDateTime;

    /**
     * Month in which the reminder repeats.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatMonths?: Array<int>;

    /**
     * Date on which the reminder repeats.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatDays?: Array<int>;

    /**
     * Days of a week when the reminder repeats.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    daysOfWeek?: Array<int>;

    /**
     * calendar end date time
     *
     * @type { ?LocalDateTime }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    endDateTime?: LocalDateTime;

    /**
     * For custom repeat calendar(RRule), the service extension will pull up when
     * param set and the notification arrived.
     *
     * @type { ?WantAgent }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    rruleWantAgent?: WantAgent;
  }

  /**
   * Alarm reminder information.
   *
   * @extends ReminderRequest
   * @typedef ReminderRequestAlarm
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestAlarm extends ReminderRequest {
    /**
     * Hour portion of the reminder time.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * Minute portion of the reminder time.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * Days of a week when the reminder repeats.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    daysOfWeek?: Array<int>;
  }

  /**
   * CountDown reminder information.
   *
   * @extends ReminderRequest
   * @typedef ReminderRequestTimer
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestTimer extends ReminderRequest {
    /**
     * The number of seconds to count down.
     *
     * @type { long }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    triggerTimeInSeconds: long;
  }

  /**
   * Reminder information, include reminderId.
   *
   * @interface ReminderInfo
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReminderInfo {
    /**
     * Reminder id.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderId: int;

    /**
     * Reminder request.
     *
     * @type { ReminderRequest }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderReq: ReminderRequest;
  }

  /**
   * Used for ReminderRequestCalendar when set the time.
   *
   * @interface LocalDateTime
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface LocalDateTime {
    /**
     * Value of year.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    year: int;

    /**
     * Value of month.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    month: int;

    /**
     * Value of day.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    day: int;

    /**
     * Value of hour.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * Value of minute.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * Value of second.
     *
     * @type { ?int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    second?: int;
  }

  /**
   * Reminder state.
   * 
   * @interface ReminderState
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ReminderState {
    /**
     * Reminder id.
     * 
     * @type { int }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reminderId: int;

    /**
     * Action button type.
     * 
     * @type { ActionButtonType }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonType: ActionButtonType;

    /**
     * To ensure that the application can receive the callback, this message will be sent twice.
     * false: The first time when the user clicks on the button.
     * true: The second time when the application registers a callback.
     * 
     * @type { boolean }
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isMessageResent: boolean;
  }
}
export default reminderAgentManager;
