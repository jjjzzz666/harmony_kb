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
 * @file Information carried when a notification is sent
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import type notificationManager from '../@ohos.notificationManager';
import type notificationSubscribe from '../@ohos.notificationSubscribe';
import { NotificationContent } from './notificationContent';
import { NotificationActionButton } from './notificationActionButton';
import { NotificationTemplate } from './notificationTemplate';
import { NotificationFlags } from './notificationFlags';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
import type { BundleOption } from './NotificationCommonDef';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { BundleOption } from './NotificationCommonDef';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * Defines Notification Parameters to describe the key information of wantAgent in the notification.
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface NotificationParameters {
  /**
   * The action field of the corresponding want when the user creates the wantAgent for the NotificationRequest.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantAction?:string;

  /**
   * The uri field of the corresponding want when the user creates the wantAgent for the NotificationRequest.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantUri?:string;

  /**
   * The parameters field of the corresponding want when the user creates the wantAgent for the NotificationRequest.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic
   */
  wantParameters?:Record<string, Object>;

  /**
   * The parameters field of the corresponding want when the user creates the wantAgent for the NotificationRequest.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 static
   */
  wantParameters?:Record<string, RecordData>;
}

/**
 * The monitor event of a geofence.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum MonitorEvent {
  /**
   * The entry geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_ENTRY = 1,

  /**
   * The leave geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_LEAVE = 2
}

/**
 * The coordinate type of a geofence.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum CoordinateSystemType {
  /**
   * The WGS84 type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_WGS84 = 1,

  /**
   * The GCJ02 type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_GCJ02 = 2
}

/**
 * The type of a trigger condition.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum TriggerType {
  /**
   * The Geofence trigger type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  TRIGGER_TYPE_GEOFENCE = 1
}

/**
 * The type of group notification customization information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface GroupInfo {
  /**
   * Replaces the group notification icon with the notification icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isGroupIcon?: boolean;
 	 
  /**
   * The title of the group notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupTitle?: string;
}

/**
 * Defines a geofence.
 *
 * @typedef Geofence
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Geofence {
  /**
   * The longitude of the geofence.
   *
   * @type { double }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  longitude:double;

  /**
   * The latitude of the geofence.
   *
   * @type { double }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  latitude:double;

  /**
   * The radius of the geofence.
   *
   * @type { double }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  radius:double;

  /**
   * the delay time of the geofence.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  delayTime?:int;

  /**
   * the coordinate of the geofence.
   *
   * @type { CoordinateSystemType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  coordinateSystemType:CoordinateSystemType;

  /**
   * the monitor event type of the geofence.
   *
   * @type { MonitorEvent }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  monitorEvent:MonitorEvent;
}

/**
 * Defines a TriggerCondition instance.
 *
 * @typedef Trigger
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Trigger {
  /**
   * trigger type.
   *
   * @type { TriggerType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  type:TriggerType;

  /**
   * Trigger description.
   *
   * @type { Geofence }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  condition:Geofence;
  
  /**
   * The auto delete time to live view.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  displayTime?:int;
}

/**
 * Defines a NotificationRequest instance.
 *
 * @typedef NotificationRequest
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Defines a NotificationRequest instance.
 *
 * @typedef NotificationRequest
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12 dynamic
 * @since 23 static
 */
export interface NotificationRequest {
  /**
   * Notification content.
   *
   * @type { NotificationContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification content.
   *
   * @type { NotificationContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  content: NotificationContent;

  /**
   * notification trigger
   *
   * @type { ?Trigger }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  trigger?:Trigger;

  /**
   * Notification ID. The default value is 0. If the same notification ID exists, the notification content is updated.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification ID. The default value is 0. If the same notification ID exists, the notification content is updated.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  id?: int;

  /**
   * Notification priority type, which is used to determine whether the notification needs to be prioritized.
   *
   * @type { ?notificationManager.PriorityNotificationType }
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  priorityNotificationType?: notificationManager.PriorityNotificationType;

  /**
   * Unique ID carried in a notification sent by an app, which is used for notification deduplication.
   * If an app publishes notifications with the same appMessageId locally or on the cloud, the device displays only one message.
   * Repeated notifications received later will be silenced and deduplicated, and will not be displayed or notified.
   * The deduplication flag is valid only within 24 hours after the notification is published. After 24 hours or the device is restarted,
   * the deduplication flag becomes invalid.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  appMessageId?: string;

  /**
   * Notification slot type.
   *
   * @type { ?notification.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationRequest#notificationSlotType
   */
  slotType?: notification.SlotType;

  /**
   * Notification slot type. The default value is OTHER_TYPES.
   *
   * @type { ?notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationSlotType?: notificationManager.SlotType;

  /**
   * Whether the notification is an ongoing notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether the notification is an ongoing notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  isOngoing?: boolean;

  /**
   * Whether the notification can be removed.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isUnremovable?: boolean;

  /**
   * Whether to update notifications only.
   * - true: If a notification with the same ID exists, the notification is updated; otherwise, the notification fails to update and no notification is created.
   * - false (default): If a notification with the same ID exists, the notification is updated; otherwise, a notification is created.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 18 dynamic
   * @since 23 static
   */
  updateOnly?: boolean;

  /**
   * Time when the notification is sent. This API is automatically generated by the system. Data format: timestamp, in milliseconds.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Time when the notification is sent. This API is automatically generated by the system. Data format: timestamp, in milliseconds.
   *
   * @type { ?long }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  deliveryTime?: long;

  /**
   * Whether the notification is automatically cleared. This parameter is valid only when the notification carries wantAgent or actionButtons.
   * - true (default): The current notification is automatically cleared after the notification or button is tapped.
   * - false: The current notification is retained after the notification or button is tapped.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether the notification is automatically cleared. This parameter is valid only when the notification carries wantAgent or actionButtons.
   * - true (default): The current notification is automatically cleared after the notification or button is tapped.
   * - false: The current notification is retained after the notification or button is tapped.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  tapDismissed?: boolean;

  /**
   * Time when the notification is automatically cleared. Data format: timestamp, in milliseconds.
   * For example, if a notification is to be cleared after being displayed for 3 seconds (3000 ms),
   * you can set new Date().getTime() + 3000 to meet this requirement.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Time when the notification is automatically cleared. Data format: timestamp, in milliseconds.
   * For example, if a notification is to be cleared after being displayed for 3 seconds (3000 ms),
   * you can set new Date().getTime() + 3000 to meet this requirement.
   *
   * @type { ?long }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  autoDeletedTime?: long;

  /**
   * WantAgent instance to which the notification will be redirected after being clicked.
   *
   * @type { ?WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  wantAgent?: WantAgent;

  /**
   * Expand parameters to provide customized services for applications.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Expand parameters to provide customized services for applications.
   *
   * @type { ?Record<string, RecordData> }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * Extended parameter. Recommendation system application usage.
   *
   * @type { ?Record<string, Object> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   */
  extendInfo?: Record<string, Object>;
  /**
   * Extended parameter. Recommendation system application usage.
   *
   * @type { ?Record<string, RecordData> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extendInfo?: Record<string, RecordData>;

  /**
   * Background color of the notification.
   *
   * @type { ?long }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  color?: long;

  /**
   * Whether the notification background color can be enabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  colorEnabled?: boolean;

  /**
   * Whether to send a notification only once when the notification is published or updated.
   * - true: A notification is sent only when the notification is published for the first time. For subsequent update,
   *         the notification mode is changed to LEVEL_MIN.
   * - false (default): A notification is sent based on the configured notification mode.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether to send a notification only once when the notification is published or updated.
   * - true: A notification is sent only when the notification is published for the first time. For subsequent update,
   *         the notification mode is changed to LEVEL_MIN.
   * - false (default): A notification is sent based on the configured notification mode.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  isAlertOnce?: boolean;

  /**
   * Whether to display the stopwatch.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isStopwatch?: boolean;

  /**
   * Whether to display the countdown time.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * Whether the notification is displayed as a floating icon in the status bar.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isFloatingIcon?: boolean;

  /**
   * Notification label. The label field can be used independently, or used together with ID as a notification identifier. ID is preferentially used.
   * If the label is not empty when a notification is published, you need to specify the label when updating or deleting the notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  label?: string;

  /**
   * Notification badge type.
   *
   * @type { ?int }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeIconStyle?: int;

  /**
   * Whether to display the time when the notification is delivered.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether to display the time when the notification is delivered.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  showDeliveryTime?: boolean;

  /**
   * Notification button. A notification can contain a maximum of two buttons by default.
   *
   * @type { ?Array<NotificationActionButton> }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * Small notification icon. Optional field. The total number of the icon pixel bytes cannot exceed 192 KB (which is
   * obtained through getPixelBytesNumber. The recommended icon size is 128 px × 128 px.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  smallIcon?: image.PixelMap;

  /**
   * Large notification icon. Optional field. The total number of the icon pixel bytes cannot exceed 192 KB (which is
   * obtained through getPixelBytesNumber. The recommended icon size is 128 px × 128 px.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  largeIcon?: image.PixelMap;

  /**
   * Overlay notification icon.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  /**
   * Overlay notification icon.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  overlayIcon?: image.PixelMap;

  /**
   * Notification group name. This parameter is left blank by default.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  /**
   * Notification group name. This parameter is left blank by default.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  groupName?: string;

  /**
   * Name of the bundle that creates the notification.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorBundleName?: string;

  /**
   * UID used for creating the notification.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorUid?: int;

  /**
   * PID used for creating the notification.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorPid?: int;

  /**
   * ID of the user who creates the notification.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  readonly creatorUserId?: int;

  /**
   * Application instance key.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead NotificationRequest#appInstanceKey
   */
  readonly creatorInstanceKey?: number;

  /**
   * Name of the custom ringtone file for application notifications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Obtains the classification of this notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  classification?: string;

  /**
   * Unique ID of the notification.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly hashCode?: string;

  /**
   * Whether the notification can be remove.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  /**
   * Whether the notification can be remove.
   *
   * @permission ohos.permission.SET_UNREMOVABLE_NOTIFICATION
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  isRemoveAllowed?: boolean;

  /**
   * Notification source. enum SourceType
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly source?: int;

  /**
   * Notification template.
   *
   * @type { ?NotificationTemplate }
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  template?: NotificationTemplate;

  /**
   * Distributed notification options. Not supported currently.
   *
   * @type { ?DistributedOptions }
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  distributedOption?: DistributedOptions;

  /**
   * The device ID of the notification source.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly deviceId?: string;

  /**
   * Notification flags.
   *
   * @type { ?NotificationFlags }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  /**
   * Notification flags.
   *
   * @type { ?NotificationFlags }
   * @syscap SystemCapability.Notification.Notification
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  notificationFlags?: NotificationFlags;

  /**
   * WantAgent instance to which the notification will be redirected when it is removed.
   * Currently, redirection to UIAbility is not supported. Only common events can be published (that is, actionType is set to 4).
   *
   * @type { ?WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  removalWantAgent?: WantAgent;

  /**
   * Number of notifications displayed on the application icon. If the badgeNumber is set to 0, badges are cleared;
   * if the value is greater than 99, 99+ is displayed on the badge.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Number of notifications displayed on the application icon. If the badgeNumber is set to 0, badges are cleared;
   * if the value is greater than 99, 99+ is displayed on the badge.
   *
   * @type { ?long }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  badgeNumber?: long;

  /**
   * Whether the notification need to be agent display.
   *
   * @type { ?BundleOption }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  representativeBundle?: BundleOption;
  
  /**
   * Proxy identity of creation notification.
   * 
   * @type { ?BundleOption }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly agentBundle?: BundleOption;

  /**
   * Unified aggregation of information across applications.
   *
   * @type { ?UnifiedGroupInfo }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  unifiedGroupInfo?: UnifiedGroupInfo;

  /**
   * Notification control flags.
   *
   * @type { ?long }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  notificationControlFlags?: long;

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

  /**
   * Force distributed forwarding flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  forceDistributed?: boolean;

  /**
   * Distributed forwarding flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  notDistributed?: boolean;

  /**
   * Group notification customization information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupInfo?: GroupInfo;
}

/**
 * Describes distributed notification options.
 *
 * @typedef DistributedOptions
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface DistributedOptions {
  /**
   * Whether the notification is a distributed notification.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  isDistributed?: boolean;

  /**
   * List of the devices to which the notification can be synchronized.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportDisplayDevices?: Array<string>;

  /**
   * List of the devices on which the notification can be opened.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportOperateDevices?: Array<string>;

  /**
   * Obtains the remind mode of the notification. enum DeviceRemindType.
   *
   * @type { ?int }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly remindType?: int;
}

/**
 * Describes notification filter.
 *
 * @typedef NotificationFilter
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationFilter {
  /**
   * BundleOption of the notification.
   *
   * @type { BundleOption }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  bundle: BundleOption;

  /**
   * Indicates the label and id of the notification.
   *
   * @type { notificationSubscribe.NotificationKey }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  notificationKey: notificationSubscribe.NotificationKey;

  /**
   * Indicates the additional information filter keys list.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys?: Array<string>;
}

/**
 * Describes notification check information.
 *
 * @typedef NotificationCheckRequest
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCheckRequest {
  /**
   * The notification content type.
   *
   * @type { notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  contentType: notificationManager.ContentType;

  /**
   * Type of the notification slot..
   *
   * @type { notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  slotType: notificationManager.SlotType;

  /**
   * Additional information of the notification.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys: Array<string>;
}

/**
 * Unified aggregation of information across applications.
 *
 * @typedef UnifiedGroupInfo
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface UnifiedGroupInfo {
  /**
   * The key is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  key?: string;

  /**
   * The title is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * The content is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  content?: string;

  /**
   * Aggregation scenario name.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  sceneName?: string;

  /**
   * Other information is aggregated across applications.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Other information is aggregated across applications.
   *
   * @type { ?Record<string, RecordData> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;
}
