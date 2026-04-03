/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit NotificationKit
 */

import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationActionButton as _NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent as _NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent as _NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent as _NotificationLongTextContent } from './notification/notificationContent';
import { NotificationMultiLineContent as _NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent as _NotificationPictureContent } from './notification/notificationContent';
import { NotificationSystemLiveViewContent as _NotificationSystemLiveViewContent } from './notification/notificationContent';
import { NotificationCapsule as _NotificationCapsule } from './notification/notificationContent';
import { NotificationButton as _NotificationButton } from './notification/notificationContent';
import { NotificationTime as _NotificationTime } from './notification/notificationContent';
import { NotificationProgress as _NotificationProgress } from './notification/notificationContent';
import { NotificationFlags as _NotificationFlags } from './notification/notificationFlags';
import { NotificationFlagStatus as _NotificationFlagStatus } from './notification/notificationFlags';
import { NotificationRequest as _NotificationRequest } from './notification/notificationRequest';
import { NotificationIconButton as _NotificationIconButton } from './notification/notificationContent';
import { UnifiedGroupInfo as _UnifiedGroupInfo } from './notification/notificationRequest';
import { DistributedOptions as _DistributedOptions } from './notification/notificationRequest';
import { NotificationSlot as _NotificationSlot } from './notification/notificationSlot';
import { NotificationSorting as _NotificationSorting } from './notification/notificationSorting';
import { NotificationTemplate as _NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput as _NotificationUserInput } from './notification/notificationUserInput';
import { TriggerType as _TriggerType } from './notification/notificationRequest';
import { Trigger as _Trigger } from './notification/notificationRequest';
import { NotificationParameters as _NotificationParameters } from './notification/notificationRequest';
import { Geofence as _Geofence } from './notification/notificationRequest';
import { CoordinateSystemType as _CoordinateSystemType } from './notification/notificationRequest';
import { MonitorEvent as _MonitorEvent } from './notification/notificationRequest';
import { GroupInfo as _GroupInfo } from './notification/notificationRequest';

/*** if arkts dynamic */
import { AsyncCallback } from './@ohos.base';
import type { NotificationLiveViewContent as _NotificationLiveViewContent } from './notification/notificationContent';
import type { LiveViewStatus as _LiveViewStatus } from './notification/notificationContent';
import type { LiveViewTypes as _LiveViewTypes } from './notification/notificationContent';
import type { NotificationFilter as _NotificationFilter } from './notification/notificationRequest';
import type { NotificationCheckRequest as _NotificationCheckRequest } from './notification/notificationRequest';
import type UIAbilityContext from './application/UIAbilityContext';
/*** endif */
/*** if arkts static */
import { AsyncCallback, RecordData } from '@ohos.base';
import { NotificationLiveViewContent as _NotificationLiveViewContent } from './notification/notificationContent';
import { LiveViewStatus as _LiveViewStatus } from './notification/notificationContent';
import { LiveViewTypes as _LiveViewTypes } from './notification/notificationContent';
import { NotificationFilter as _NotificationFilter } from './notification/notificationRequest';
import { NotificationCheckRequest as _NotificationCheckRequest } from './notification/notificationRequest';
import type UIAbilityContext from './application/UIAbilityContext';
/*** endif */

/**
 * The NotificationManager module provides notification management capabilities, covering notifications,
 * notification slots, notification enabled status, and notification badge status.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @since 9
 */
/**
 * The NotificationManager module provides notification management capabilities, covering notifications,
 * notification slots, notification enabled status, and notification badge status.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace notificationManager {
  /**
   * Publish a notification. This API uses an asynchronous callback to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Publish a notification. This API uses an asynchronous callback to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Publish a notification. This API uses an asynchronous callback to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * Publish a notification. This API uses a promise to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Publish a notification. This API uses a promise to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Publish a notification. This API uses a promise to return the result.
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { int } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { int } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The device does not support geofencing.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 1600025 - Geofencing disabled.
   * @throws { BusinessError } 1600026 - The location switch is off.
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is off.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function publish(request: NotificationRequest, userId: int, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { int } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { int } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The device does not support geofencing.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 1600025 - Geofencing disabled.
   * @throws { BusinessError } 1600026 - The location switch is off.
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is off.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function publish(request: NotificationRequest, userId: int): Promise<void>;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { int } userId - userid of the representative
   * @param { AsyncCallback<void> } callback - The callback of publishAsBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   */
  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { int } userId - userid of the representative
   * @param { AsyncCallback<void> } callback - The callback of publishAsBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The device does not support geofencing.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 1600025 - Geofencing disabled.
   * @throws { BusinessError } 1600026 - The location switch is off.
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is off.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function publishAsBundle(
    request: NotificationRequest,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { int } userId - userid of the representative
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   */
  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { int } userId - userid of the representative
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The device does not support geofencing.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 1600025 - Geofencing disabled.
   * @throws { BusinessError } 1600026 - The location switch is off.
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is off.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: int): Promise<void>;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { NotificationRequest } request - a notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { NotificationRequest } request - a notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The device does not support geofencing.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
   * @throws { BusinessError } 1600025 - Geofencing disabled.
   * @throws { BusinessError } 1600026 - The location switch is off.
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is off.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function publishAsBundle(representativeBundle: BundleOption, request: NotificationRequest): Promise<void>;

  /**
   * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
   *
   * @param { number } id - Notification ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
   *
   * @param { int } id - Notification ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function cancel(id: int, callback: AsyncCallback<void>): void;

  /**
   * Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the result.
   *
   * @param { int } id - Notification ID.
   * @param { string } label - Notification label.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(id: int, label: string, callback: AsyncCallback<void>): void;

  /**
   * Cancels a notification with the specified ID and optional label. This API uses a promise to return the result.
   *
   * @param { int } id - Notification ID.
   * @param { string } [label] - Notification label. This parameter is left empty by default.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(id: int, label?: string): Promise<void>;

  /**
   * Cancel a notification with the representative and ID.
   *
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { int } id - ID of the notification to cancel, which must be unique in the application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function cancel(representativeBundle: BundleOption, id: int): Promise<void>;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } representativeBundle - bundle name of the representative.
   * @param { int } userId - userid of the representative.
   * @param { AsyncCallback<void> } callback - The callback of cancelAsBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAsBundle(
    id: int,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } representativeBundle - bundle name of the representative.
   * @param { int } userId - userid of the representative.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAsBundle(id: int, representativeBundle: string, userId: int): Promise<void>;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { int } id - ID of the notification to cancel, which must be unique in the application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function cancelAsBundle(representativeBundle: BundleOption, id: int): Promise<void>;

  /**
   * Cancels all notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancels all notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * Cancels all notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancels all notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function cancelAll(): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * @param { AsyncCallback<void> } callback - The callback of addSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Adds a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * Creates notification slots.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * @param { AsyncCallback<void> } callback - The callback of addSlots.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * Creates notification slots.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @param { AsyncCallback<NotificationSlot> } callback - Callback used to return the result. If the operation is successful, err is undefined
   *                                                       and data is the obtained NotificationSlot; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @param { AsyncCallback<NotificationSlot|null> } callback - Callback used to return the result. If the operation is successful, err is undefined
   *                                                       and data is the obtained NotificationSlot; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot|null>): void;

  /**
   * Obtains a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @returns { Promise<NotificationSlot> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @returns { Promise<NotificationSlot|null> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot|null>;

  /**
   * Obtains all notification slots of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return the result. If the operation is successful, err is undefined
   *                                                              and data is the obtained NotificationSlot array; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Obtains all notification slots of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationSlot>> } Promise used to return the NotificationSlot array.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Obtains allow notification application list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<BundleOption>> } Returns all enable notification applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllNotificationEnabledBundles(): Promise<Array<BundleOption>>;

  /**
   * Obtains allow notification application list to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId of applications.
   * @returns { Promise<Array<BundleOption>> } Returns all enable notification applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllNotificationEnabledBundles(userId: int): Promise<Array<BundleOption>>;

  /**
   * Removes a notification slot of a specified type for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Removes a notification slot of a specified type for this application. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification, content consultation, and so on.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * Removes all notification slots for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * Removes all notification slots for this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllSlots(): Promise<void>;

  /**
   * Set whether the application can send notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setNotificationEnable(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set whether the application can send notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setNotificationEnable(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
   *                                              notification is enabled, and false means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
   *                                              notification is enabled, and false means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
   *                                              notification is enabled, and false means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether notification is enabled for the specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result. The value true means that the notification is enabled, and false means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Checks whether notification is enabled for the specified application. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value true means that the notification is enabled, and false means the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Checks whether notification is enabled for the specified application. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value true means that the notification is enabled, and false means the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * Checks whether notification is enabled for the specified application. This API returns the result synchronously.
   *
   * @returns { boolean } Result of the notification enabling status. The value true means that the notification is enabled,
   *                      and false means the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  function isNotificationEnabledSync(): boolean;

  /**
   * Checks whether this application allows to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userid of the representative.
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(userId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application allows to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userid of the representative.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(userId: int): Promise<boolean>;

  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of displayBadge.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of displayBadge.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isBadgeDisplayed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isBadgeDisplayed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @param { AsyncCallback<void> } callback - The callback of setSlotByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @param { AsyncCallback<void> } callback - The callback of setSlotByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - The callback of getSlotsByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - The callback of getSlotsByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Get notification slot for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } slotType - Indicates the notification slot.
   * @returns { Promise<NotificationSlot> } Returns the NotificationSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Get notification slot for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } slotType - Indicates the notification slot.
   * @returns { Promise<NotificationSlot> } Returns the NotificationSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Get notification slot for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } slotType - Indicates the notification slot.
   * @returns { Promise<NotificationSlot|null> } Returns the NotificationSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot|null>;

  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<Array<NotificationSlot>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<Array<NotificationSlot>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<number> } callback - The callback of getSlotNumByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<long> } callback - The callback of getSlotNumByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<long>): void;

  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<long>;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - The callback of getAllActiveNotifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains the number of active notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful, err is undefined and data is the
   *                                             obtained number of active notifications; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotificationCount(callback: AsyncCallback<long>): void;

  /**
   * Obtains the number of active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotificationCount(): Promise<long>;

  /**
   * Obtains the active notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result. If the operation is successful,
   *                                                                 err is undefined and data is the obtained NotificationRequest array;
   *                                                                 otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains the active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @param { AsyncCallback<NotificationRequest> } callback - The callback of getActiveNotificationByFilter.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  function getActiveNotificationByFilter(filter: NotificationFilter, callback: AsyncCallback<NotificationRequest>): void;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @param { AsyncCallback<NotificationRequest|null> } callback - The callback of getActiveNotificationByFilter.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getActiveNotificationByFilter(filter: NotificationFilter, callback: AsyncCallback<NotificationRequest|null>): void;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @returns { Promise<NotificationRequest> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  function getActiveNotificationByFilter(filter: NotificationFilter): Promise<NotificationRequest>;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @returns { Promise<NotificationRequest|null> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getActiveNotificationByFilter(filter: NotificationFilter): Promise<NotificationRequest|null>;

  /**
   * Get information that cannot be directly obtained through NotificationRequest, which is passed in
   * by the user when creating the notification.
   *
   * @param { number } id - ID of the notification to query, which must be unique in the application.
   * @param { string } [label] - Label of the notification to query.
   * @returns { Promise<NotificationParameters> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic
   */
  function getNotificationParameters(id: number, label?: string): Promise<NotificationParameters>;

  /**
   * Get information that cannot be directly obtained through NotificationRequest, which is passed in
   * by the user when creating the notification.
   *
   * @param { int } id - ID of the notification to query, which must be unique in the application.
   * @param { string } [label] - Label of the notification to query.
   * @returns { Promise<NotificationParameters | null> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 static
   */
  function getNotificationParameters(id: int, label?: string): Promise<NotificationParameters | null>;

  /**
   * Cancels notifications under a notification group of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { string } groupName - Name of the notification group, which is specified through NotificationRequest when the notification is published.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined; otherwise,
   *                                           err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Cancels notifications under a notification group of this application. This API uses a promise to return the result.
   *
   * @param { string } groupName - Name of the notification group, which is specified through NotificationRequest when the notification is published.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } groupName - The name of the group.
   * @param { AsyncCallback<void> } callback - The callback of removeGroupByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } groupName - The name of the group.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { int } userId - The userId.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: int, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { int } userId - The userId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: int): Promise<void>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(userId: int, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(userId: int): Promise<DoNotDisturbDate>;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether Do Not Disturb
   *                                              mode is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Returns whether Do Not Disturb mode is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportDoNotDisturbMode(): Promise<boolean>;

  /**
   * Checks whether a specified template is supported before using NotificationTemplate to publish a notification.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } templateName - Template name. Currently, only downloadTemplate is supported.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the specified template is supported,
   *                                              and false means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified template is supported before using NotificationTemplate to publish a notification. This API uses a promise to return the result.
   *
   * @param { string } templateName - Template name. Currently, only downloadTemplate is supported.
   * @returns { Promise<boolean> } Promise used to return the result. The value true means that the specified template
   *                               is supported, and false means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamiconly
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses an asynchronous callback to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 10
   */
  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses an asynchronous callback to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 11
   */
  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses an asynchronous callback to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, err is undefined;
   *                                           otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>): void;

  /**
   * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamiconly
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 10
   */
  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 11
   */
  /**
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable
   * notification for your application before publishing a notification. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function requestEnableNotification(context: UIAbilityContext): Promise<void>;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnable(enable: boolean): Promise<void>;

  /**
   * Checks whether the device supports cross-device notifications. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that
   *                                              distributed notification is enabled, and false means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the device supports cross-device notifications. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value true means that distributed notification
   *                               is enabled, and false means the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnableByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnableByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnabledByBundle(bundle: BundleOption, deviceType: string, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the distributed
   *                                              notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the distributed
   *                                              notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, deviceType: string): Promise<boolean>;

  /**
   * Sets whether applications supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DistributedBundleEnableInfo> } bundleEnableInfos - The enable bundles.
   * @param { string } deviceType - The device type.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundles(bundleEnableInfos: Array<DistributedBundleEnableInfo>, deviceType: string): Promise<void>;

  /**
   * Sets whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Sets whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSmartReminderEnabled(deviceType: string, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the smart reminders across devices notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Obtains whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the smart reminders across devices notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isSmartReminderEnabled(deviceType: string): Promise<boolean>;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - The callback is used to return the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - The callback is used to return the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Returns the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Returns the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    isForceControl: boolean,
    callback: AsyncCallback<void>,
  ): void;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(bundle: BundleOption, type: SlotType, enable: boolean, isForceControl?: boolean): Promise<void>;

  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @returns { Promise<boolean> } Returns whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @returns { Promise<boolean> } Returns whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType): Promise<boolean>;

  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setSyncNotificationEnabledWithoutApp.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setSyncNotificationEnabledWithoutApp.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean): Promise<void>;

  /**
   * Obtains whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether to sync notifications to devices.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSyncNotificationEnabledWithoutApp(userId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - The userId.
   * @returns { Promise<boolean> } Returns whether to sync notifications to devices.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSyncNotificationEnabledWithoutApp(userId: int): Promise<boolean>;

  /**
   * Sets the notification badge number. This API uses an asynchronous callback to return the result.
   *
   * @param { number } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *                                           err is undefined; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 10
   */
  /**
   * Sets the notification badge number. This API uses an asynchronous callback to return the result.
   *
   * @param { number } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *                                           err is undefined; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  /**
   * Sets the notification badge number. This API uses an asynchronous callback to return the result.
   *
   * @param { int } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *                                           err is undefined; otherwise, err is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  function setBadgeNumber(badgeNumber: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the notification badge number. This API uses a promise to return the result.
   *
   * @param { number } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 10
   */
  /**
   * Sets the notification badge number. This API uses a promise to return the result.
   *
   * @param { number } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  /**
   * Sets the notification badge number. This API uses a promise to return the result.
   *
   * @param { int } badgeNumber - Notification badge number to set. If badgeNumber is set to 0, badges are cleared;
   *                                 if the value is greater than 99, 99+ is displayed on the badge.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  function setBadgeNumber(badgeNumber: int): Promise<void>;

  /**
   * Set badge number by bundle.
   *
   * @param { BundleOption } bundle - Use the bundleOption to carry bundleName and uid of the application.
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Set badge number by bundle.
   *
   * @param { BundleOption } bundle - Use the bundleOption to carry bundleName and uid of the application.
   * @param { int } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setBadgeNumberByBundle(bundle: BundleOption, badgeNumber: int): Promise<void>;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  function on(type: 'checkNotification', callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function onCheckNotification(callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  function on(type: 'checkNotification', checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function onCheckNotification(checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void;

  /**
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } [callback] - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  /**
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } [callback] - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   */
  function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void;

  /**
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } [callback] - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function offCheckNotification(
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void;

  /**
   * Trigger system live view notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } notificationId - The notification id.
   * @param { ButtonOptions } buttonOptions - The button option.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Trigger system live view notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { int } notificationId - The notification id.
   * @param { ButtonOptions } buttonOptions - The button option.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function triggerSystemLiveView(bundle: BundleOption, notificationId: int, buttonOptions: ButtonOptions): Promise<void>;

  /**
   * Subscribe to system live view notifications
   *
   * @param { SystemLiveViewSubscriber } subscriber - The system live vie notification subscriber.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Subscribe to system live view notifications
   *
   * @param { SystemLiveViewSubscriber } subscriber - The system live vie notification subscriber.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function subscribeSystemLiveView(subscriber: SystemLiveViewSubscriber): Promise<void>;

  /**
   * Set basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } slotFlags - Indicates the slotFlags.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { long } slotFlags - Indicates the slotFlags.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setSlotFlagsByBundle(bundle: BundleOption, slotFlags: long): Promise<void>;

  /**
   * Obtains basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Obtains basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<long> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getSlotFlagsByBundle(bundle: BundleOption): Promise<long>;

  /**
   * Obtains a notification setting of the calling application.
   *
   * @returns { Promise<NotificationSetting> } Returns notificationsetting of this application.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  function getNotificationSetting(): Promise<NotificationSetting>;

  /**
   * Add do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Add do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * Add do not disturb notification templates to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @param { int } userId - The userId of profile.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>, userId: int): Promise<void>;

  /**
   * Remove do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Remove do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function removeDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * Remove do not disturb notification templates to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @param { int } userId - The userId of profile.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function removeDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>, userId: int): Promise<void>;

  /**
   * Set system additional config information of notification
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - addition config key.
   * @param { string } value - addition config value.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Set system additional config information of notification
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - addition config key.
   * @param { string } value - addition config value.
   * @returns { Promise<int> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setAdditionalConfig(key: string, value: string): Promise<int>;

  /**
   * Sets the priority configuration of an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } value - config value.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setBundlePriorityConfig(bundle: BundleOption, value: string): Promise<void>;

  /**
   * Obtains the priority configuration of an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<string> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function getBundlePriorityConfig(bundle: BundleOption): Promise<string>;

  /**
   * Checks whether the intelligent priority notification service is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isPriorityIntelligentEnabled(): Promise<boolean>;

  /**
   * Sets the intelligent service enabling status of the priority notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityIntelligentEnabled(enable: boolean): Promise<void>;

  /**
   * Sets the enabling status of the priority notification for applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } switches - The map of bundleOption to set priority for applications enabled.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityEnabledByBundles(switches: Map<BundleOption, boolean>): Promise<void>;

  /**
   * Gets whether the priority notification for applications is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - The array of bundleOption.
   * @returns { Promise<Map<BundleOption, boolean>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getPriorityEnabledByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, boolean>>;

  /**
   * Sets the strategy of the priority notification for applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, long> } strategies - The map of bundleOption to set strategy for applications.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityStrategyByBundles(strategies: Map<BundleOption, long>): Promise<void>;

  /**
   * Gets the strategy of the priority notification for applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - The array of bundleOption.
   * @returns { Promise<Map<BundleOption, long>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getPriorityStrategyByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, long>>;

  /**
   * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set
   * the notification enabling and notification mode. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 13
   */
  /**
   * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set
   * the notification enabling and notification mode. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function openNotificationSettings(context: UIAbilityContext): Promise<void>;

  /**
   * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set
   * the notification enabling and notification mode. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<NotificationSetting> } Returns notificationsetting of this application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function openNotificationSettingsWithResult(context: UIAbilityContext): Promise<NotificationSetting>;

  /**
   * Get do not disturb profile by id.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } id - The id of profile.
   * @returns { Promise<DoNotDisturbProfile> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 13
   */
  /**
   * Get do not disturb profile by id.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - The id of profile.
   * @returns { Promise<DoNotDisturbProfile> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDoNotDisturbProfile(id: long): Promise<DoNotDisturbProfile>;

 /**
   * Get do not disturb profile by id to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - The id of profile.
   * @param { int } userId - The userId of profile.
   * @returns { Promise<DoNotDisturbProfile> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getDoNotDisturbProfile(id: long, userId: int): Promise<DoNotDisturbProfile>;

  /**
   * Disabling notifications based on the application list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - The switch of disableNotification.
   * @param { Array<string> } bundleList - The bundles of disableNotification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function disableNotificationFeature(disabled:boolean, bundleList: Array<string>): Promise<void>;

  /**
   * Disabling notifications based on the application list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - The switch of disableNotification.
   * @param { Array<string> } bundleList - The bundles of disableNotification.
   * @param { int } userId - the userId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function disableNotificationFeature(disabled: boolean, bundleList: Array<string>, userId: int): Promise<void>;

  /**
   * Set target device status.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device.
   * @param { long } status - The device status.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setTargetDeviceStatus(deviceType: string, status: long): Promise<void>;

  /**
   * Set notification slot synchronization switch.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - The slot type.
   * @param { string } deviceType - The device type.
   * @param { boolean } enabled - The switch state.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnabledBySlot(slot: SlotType, deviceType: string, enabled: boolean): Promise<void>;

  /**
   * Get notification slot synchronization switch.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - The slot type.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isDistributedEnabledBySlot(slot: SlotType, deviceType: string): Promise<boolean>;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(deviceType: string): Promise<boolean>;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @param { string } deviceType - The device type.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDistributedEnabled(enable: boolean, deviceType: string): Promise<void>;

  /**
   * Get distributed device list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<string>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getDistributedDeviceList(): Promise<Array<string>>;

  /**
   * Sets the enabling status of the priority notification for an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { PriorityEnableStatus } enableStatus - The switch state.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPriorityEnabledByBundle(bundle: BundleOption, enableStatus: PriorityEnableStatus): Promise<void>;

  /**
   * Checks whether the priority notification for a specified application is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<PriorityEnableStatus> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function isPriorityEnabledByBundle(bundle: BundleOption): Promise<PriorityEnableStatus>;

  /**
   * Checks whether the priority notification is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function isPriorityEnabled(): Promise<boolean>;

  /**
   * Sets the enabling status of the priority notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPriorityEnabled(enable: boolean): Promise<void>;

  /**
   * Set the switch status of silent reminders.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enabled - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setSilentReminderEnabled(bundle: BundleOption, enabled: boolean): Promise<void>;

  /**
   * Obtains whether an application silent reminder is enable.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<SwitchState> } Returns whether an application silent reminder is enable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function isSilentReminderEnabled(bundle: BundleOption): Promise<SwitchState>;

  /**
   * Set the custom ringtone information of application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { RingtoneInfo } ringtoneInfo - Custom ringtone information.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setRingtoneInfoByBundle(bundle: BundleOption, ringtoneInfo: RingtoneInfo): Promise<void>;

  /**
   * Get the custom ringtone information of application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<RingtoneInfo> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @throws { BusinessError } 1600024 - The specified bundle has no custom ringtone information.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getRingtoneInfoByBundle(bundle: BundleOption): Promise<RingtoneInfo>;

  /**
   * Set reminder info for all applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationReminderInfo> } reminderInfos - The array of reminderInfo objects.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setReminderInfoByBundles(reminderInfos: Array<NotificationReminderInfo>) : Promise<void>;

  /**
   * Obtains the reminder info of all applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - The array of BundleOption objects.
   * @returns { Promise<Array<NotificationReminderInfo>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getReminderInfoByBundles(bundles: Array<BundleOption>) : Promise<Array<NotificationReminderInfo>>;

  /**
   * Set badge display status for all applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } badges - The map of BundleOption to badge enabled status.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setBadgeDisplayStatusByBundles(badges: Map<BundleOption, boolean>) : Promise<void>;

  /**
   * Obtains the badge display status of all applications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - The array of BundleOption objects.
   * @returns { Promise<Map<BundleOption, boolean>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getBadgeDisplayStatusByBundles(bundles: Array<BundleOption>) : Promise<Map<BundleOption, boolean>>;

  /**
   * Subscribe the callback for getting the badge number.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { function } callback - The callback for getting the badge number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function onBadgeNumberQuery(callback: (bundle: BundleOption) => Promise<long>): void;

  /**
   * Unsubscribe the callback for getting the badge number.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function offBadgeNumberQuery(): void;

  /**
   * Obtains the badge number of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the badge number.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getBadgeNumber(): Promise<long>;

  /**
   * Set geofence switch.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enabled - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setGeofenceEnabled(enabled: boolean): Promise<void>;

  /**
   * Checks if the geofence is enabled.
   *
   * @returns { Promise<boolean> } whether the geofence is enabled.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  function isGeofenceEnabled(): Promise<boolean>;

  /**
   * Represents the state of a switch,
   * distinguishing system defaults from user modifications.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum SwitchState {
    /**
     * User-modified OFF state,
     * Represents an off state that was explicitly set by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_OFF = 0,

    /**
     * User-modified ON state,
     * Represents an on state that was explicitly set by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_ON = 1,

    /**
     * System default OFF state,
     * Represents the initial off state before any user modification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_OFF = 2,

    /**
     * System default ON state,
     * Represents the initial on state before any user modification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_ON = 3,
  }

  /**
   * Describes a button option for a triggering.
   *
   * @typedef ButtonOptions
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ButtonOptions {
    /**
     * The button name for a triggering.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    buttonName: string;
  }

  /**
   * Describes a subscriber for system live view.
   *
   * @typedef SystemLiveViewSubscriber
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SystemLiveViewSubscriber {
    /**
     * The callback function that receives a new button option of a notification.
     *
     * @type { ?function }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    onResponse?: (notificationId: int, buttonOptions: ButtonOptions) => void;
  }

  /**
   * Describes the parameters of check notifications.
   *
   * @typedef NotificationCheckInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckInfo {
    /**
     * The application bundle name for publishing notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * The notification id.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { int }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    notificationId: int;

    /**
     * Label of the notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    label?: string;

    /**
     * The notification content type.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    contentType: ContentType;

    /**
     * UserId of the notification creator.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { int }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    creatorUserId: int;

    /**
     * Type of the notification slot.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { SlotType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    slotType: SlotType;

    /**
     * Additional information of the live view notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     */
    extraInfos?: Record<string, Object>;

    /**
     * Additional information of the live view notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ?Record<string, RecordData> }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 static
     */
    extraInfos?: Record<string, RecordData>;
  }

  /**
   * Describes the result of check notifications.
   *
   * @typedef NotificationCheckResult
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckResult {
    /**
     * The result code. 0-display, 1-no display
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { int }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * The result message.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * Describes a NotificationSetting instance.
   *
   * @typedef NotificationSetting
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  export interface NotificationSetting {
    /**
     * Indicates whether vibration is enabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    vibrationEnabled: boolean;

    /**
     * Indicates whether sound is enabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    soundEnabled: boolean;

    /**
     * Indicates whether lockScreen is enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lockScreenEnabled?: boolean;
 	 
    /**
     * Indicates whether banner is enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bannerEnabled?: boolean;
 	 
    /**
     * Indicates whether badgeNumber show is enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    badgeNumberEnabled?: boolean;

    /**
     * Indicates whether notification is enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    notificationEnabled?: boolean;
  }

  /**
   * Enumerates the notification slot types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Enumerates the notification slot types.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SlotType {
    /**
     * Unknown type. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Unknown type. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * Notification slot for social communication. This type corresponds to SlotLevel being LEVEL_HIGH.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Notification slot for social communication. This type corresponds to SlotLevel being LEVEL_HIGH.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * Notification slot for service information. This type corresponds to SlotLevel being LEVEL_HIGH.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Notification slot for service information. This type corresponds to SlotLevel being LEVEL_HIGH.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SERVICE_INFORMATION = 2,

    /**
     * Notification slot for content consultation. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Notification slot for content consultation. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CONTENT_INFORMATION = 3,

    /**
     * Live view. A third-party application cannot directly create a notification of this slot type. After the system proxy creates a system live view,
     * the third-party application releases a notification with the same ID to update the specified content.
     * This type corresponds to SlotLevel being LEVEL_DEFAULT.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Live view. A third-party application cannot directly create a notification of this slot type. After the system proxy creates a system live view,
     * the third-party application releases a notification with the same ID to update the specified content.
     * This type corresponds to SlotLevel being LEVEL_DEFAULT.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LIVE_VIEW = 4,

    /**
     * Customer service message. This type is used for messages between users and customer service providers. The messages must be initiated by users.
     * This type corresponds to SlotLevel being LEVEL_DEFAULT.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Customer service message. This type is used for messages between users and customer service providers. The messages must be initiated by users.
     * This type corresponds to SlotLevel being LEVEL_DEFAULT.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CUSTOMER_SERVICE = 5,

    /**
     * NotificationSlot for emergency information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EMERGENCY_INFORMATION = 10,

    /**
     * Notification slot for other purposes. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Notification slot for other purposes. This type corresponds to SlotLevel being LEVEL_MIN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * Enumerates the notification content types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Enumerates the notification content types.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ContentType {
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_MULTILINE,

    /**
     * Live view notification. A third-party application cannot directly create a notification of this type.
     * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Live view notification. A third-party application cannot directly create a notification of this type.
     * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,

    /**
     * Common live view notification. Only system applications are supported.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Common live view notification. Only system applications are supported.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LIVE_VIEW,
  }

  /**
   * Enumerates the notification level.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SlotLevel {
    /**
     * Notification is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_NONE = 0,

    /**
     * Notification is enabled, but the notification icon is not displayed in the status bar, with no banner and alert tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_MIN = 1,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with no banner and alert tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_LOW = 2,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone but no banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_DEFAULT = 3,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone and banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_HIGH = 4
  }

  /**
   * The type of the Do Not Disturb.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DoNotDisturbType {
    /**
     * Non do not disturb type notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NONE = 0,

    /**
     * Execute do not disturb once in the set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ONCE = 1,

    /**
     * Execute do not disturb every day with a set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DAILY = 2,

    /**
     * Execute in the set time period (specify the time, month, day and hour)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CLEARLY = 3
  }

  /**
   * Describes a DoNotDisturbDate instance.
   *
   * @typedef DoNotDisturbDate
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbDate {
    /**
     * the type of the Do Not Disturb.
     *
     * @type { DoNotDisturbType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    type: DoNotDisturbType;

    /**
     * The start time of the Do Not Disturb.
     *
     * @type { Date }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    begin: Date;

    /**
     * The end time of the Do Not Disturb.
     *
     * @type { Date }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    end: Date;
  }

  /**
   * Describes a DistributedBundleEnableInfo instance.
   *
   * @typedef DistributedBundleEnableInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DistributedBundleEnableInfo {
    /**
     * The bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * The uid.
     *
     * @type { int }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * Indicates whether application is enabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enable?: boolean;
  }

  /**
   * Describes a DoNotDisturbProfile instance.
   *
   * @typedef DoNotDisturbProfile
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbProfile {
    /**
     * The profile id of the Do Not disturb.
     *
     * @type { long }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * The profile name of the Do Not disturb.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * The trustlist of application.
     *
     * @type { ?Array<BundleOption> }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    trustlist?: Array<BundleOption>;
  }

  /**
   * Describes the ringtone information.
   *
   * @typedef RingtoneInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface RingtoneInfo {
    /**
     * Ringtone type.
     *
     * @type { RingtoneType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneType: RingtoneType;

    /**
     * Title of ringtone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneTitle?: string;

    /**
     * File name of ringtone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneFileName?: string;

    /**
     * Uri of ringtone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneUri?: string;
  }

  /**
   * Describes reminder info.
   *
   * @typedef NotificationReminderInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface NotificationReminderInfo {
    /**
     * The application bundle option.
     *
     * @type { BundleOption }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundle: BundleOption;

    /**
     * Obtains the notification reminder flags.
     *
     * @type { long }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    reminderFlags: long;

    /**
     * The application silent reminder enable status.
     *
     * @type { boolean }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    silentReminderEnabled: boolean;
  }

  /**
   * The remind type of the notification.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use, remind
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use, reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_REMIND = 3
  }

  /**
   * Notification source type
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SourceType {
    /**
     * General notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Scheduled notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_TIMER = 2
  }

  /**
   * Enum for notification control flag status.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum NotificationControlFlagStatus {
    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of ringtone.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_SOUND = 1 << 0,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of lock screen.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LOCKSCREEN = 1 << 1,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of banner.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_BANNER = 1 << 2,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of light screen.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LIGHT_SCREEN = 1 << 3,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of vibration.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_VIBRATION = 1 << 4,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of status bar icon.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_STATUSBAR_ICON = 1 << 5
  }

  /**
   * Priority notification type
   * @enum { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  export enum PriorityNotificationType {
    /**
     * Other, non-priority
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    OTHER = 'OTHER',

    /**
     * Priority contact
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    PRIMARY_CONTACT = 'PRIMARY_CONTACT',

    /**
     * Someone @me
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    AT_ME = 'AT_ME',

    /**
     * Urgent message
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    URGENT_MESSAGE = 'URGENT_MESSAGE',

    /**
     * Schedule reminder
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    SCHEDULE_REMINDER = 'SCHEDULE_REMINDER',

    /**
     * Payment due
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PAYMENT_DUE = 'PAYMENT_DUE',

    /**
     * Transaction alert
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRANSACTION_ALERT = 'TRANSACTION_ALERT',

    /**
     * Express progress
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    EXPRESS_PROGRESS = 'EXPRESS_PROGRESS',

    /**
     * Miss call
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    MISS_CALL = 'MISS_CALL',

    /**
     * Travel alert
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAVEL_ALERT = 'TRAVEL_ALERT',

    /**
     * Account alert
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ACCOUNT_ALERT = 'ACCOUNT_ALERT',

    /**
     * Appointment reminder
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    APPOINTMENT_REMINDER = 'APPOINTMENT_REMINDER',

    /**
     * Traffic notice
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAFFIC_NOTICE = 'TRAFFIC_NOTICE',

    /**
     * Key progress
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    KEY_PROGRESS = 'KEY_PROGRESS',

    /**
     * Public event
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PUBLIC_EVENT = 'PUBLIC_EVENT',

    /**
     * Iot warning
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    IOT_WARNING = 'IOT_WARNING',

    /**
     * Custom keyword
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    CUSTOM_KEYWORD = 'CUSTOM_KEYWORD',
  }

  /**
   * Priority notification enable status for bundle
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export enum PriorityEnableStatus {
    /**
     * disable priority notification
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    DISABLE = 0,

    /**
     * enable priority notification by intelligent identification
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE_BY_INTELLIGENT = 1,

    /**
     * enable priority notification
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE = 2,
  }

  /**
   * Priority strategy status for bundle
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum PriorityStrategyStatus {  
    /**
     * Default priority strategy status
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_DEFAULT = 1 << 0,

    /**
     * Priority rules only
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_RULE = 1 << 1,

    /**
     * Intelligent recognition only
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_INTELLIGENT = 1 << 2,

    /**
     * User-defined only
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_USER_DEFINED = 1 << 3,

    /**
     * Application-defined only
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_APPLICATION_DEFINED = 1 << 4,

    /**
     * All notifications are priority state
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_ALL_PRIORITY = 1 << 5
  }

  /**
   * Enumerates the ringtone types.
   *
   * @enum { int }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum RingtoneType {
    /**
     * System custom ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_SYSTEM = 0,

    /**
     * Local custom ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_LOCAL = 1,

    /**
     * Online custom ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_ONLINE = 2,

    /**
     * No custom ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_NONE = 3,
  }

  /**
   * Describes a bundleOption in a notification.
   *
   * @typedef { _BundleOption } BundleOption
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * Describes an action button displayed in a notification.
   *
   * @typedef { _NotificationActionButton } NotificationActionButton
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationActionButton = _NotificationActionButton;

  /**
   * Describes a normal text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a normal text notification.
   *
   * @typedef { _NotificationBasicContent } NotificationBasicContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export type NotificationBasicContent = _NotificationBasicContent;

  /**
   * Describes notification types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes notification types.
   *
   * @typedef { _NotificationContent } NotificationContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export type NotificationContent = _NotificationContent;

  /**
   * Describes a long text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a long text notification.
   *
   * @typedef { _NotificationLongTextContent } NotificationLongTextContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export type NotificationLongTextContent = _NotificationLongTextContent;

  /**
   * Describes a live view notification.
   *
   * @typedef { _NotificationLiveViewContent } NotificationLiveViewContent
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationLiveViewContent = _NotificationLiveViewContent;

  /**
   * Describes a multi-line text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a multi-line text notification.
   *
   * @typedef { _NotificationMultiLineContent } NotificationMultiLineContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export type NotificationMultiLineContent = _NotificationMultiLineContent;

  /**
   * Describes a picture-attached notification.
   *
   * @typedef { _NotificationPictureContent } NotificationPictureContent
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationPictureContent = _NotificationPictureContent;

  /**
   * Describes a system live view notification.
   *
   * @typedef { _NotificationSystemLiveViewContent } NotificationSystemLiveViewContent
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationSystemLiveViewContent = _NotificationSystemLiveViewContent;

  /**
   * Describes a NotificationFlags instance.
   *
   * @typedef { _NotificationFlags } NotificationFlags
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlags = _NotificationFlags;

  /**
   * The status of the notification flag.
   *
   * @typedef { _NotificationFlagStatus } NotificationFlagStatus
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlagStatus = _NotificationFlagStatus;

  /**
   * Defines a NotificationRequest instance.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Defines a NotificationRequest instance.
   *
   * @typedef { _NotificationRequest } NotificationRequest
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  export type NotificationRequest = _NotificationRequest;

  /**
   * Defines a UnifiedGroupInfo instance.
   *
   * @typedef { _UnifiedGroupInfo } UnifiedGroupInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type UnifiedGroupInfo = _UnifiedGroupInfo;

  /**
   * Defines a NotificationFilter instance.
   *
   * @typedef { _NotificationFilter } NotificationFilter
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationFilter = _NotificationFilter;

  /**
   * Defines a NotificationCheckRequest instance.
   *
   * @typedef { _NotificationCheckRequest } NotificationCheckRequest
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCheckRequest = _NotificationCheckRequest;

  /**
   * Describes distributed options.
   *
   * @typedef { _DistributedOptions } DistributedOptions
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type DistributedOptions = _DistributedOptions;

  /**
   * Describes a NotificationSlot instance.
   *
   * @typedef { _NotificationSlot } NotificationSlot
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSlot = _NotificationSlot;

  /**
   * Describes live view notification option type.
   *
   * @typedef { _LiveViewStatus } LiveViewStatus
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LiveViewStatus = _LiveViewStatus;

  /**
   * Describes live view notification task type.
   *
   * @typedef { _LiveViewTypes } LiveViewTypes
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  export type LiveViewTypes = _LiveViewTypes;

  /**
   * Provides sorting information about an active notification.
   *
   * @typedef { _NotificationSorting } NotificationSorting
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSorting = _NotificationSorting;

  /**
   * Describes a NotificationTemplate instance.
   *
   * @typedef { _NotificationTemplate } NotificationTemplate
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationTemplate = _NotificationTemplate;

  /**
   * Describes a NotificationUserInput instance.
   *
   * @typedef { _NotificationUserInput } NotificationUserInput
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationUserInput = _NotificationUserInput;

  /**
   * Describes a system live view capsule type.
   *
   * @typedef { _NotificationCapsule } NotificationCapsule
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCapsule = _NotificationCapsule;

  /**
   * Describes a system live view button type.
   *
   * @typedef { _NotificationButton } NotificationButton
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationButton = _NotificationButton;

  /**
   * Describes a system live view time type.
   *
   * @typedef { _NotificationTime } NotificationTime
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationTime = _NotificationTime;

  /**
   * Describes a system live view progress type.
   *
   * @typedef { _NotificationProgress } NotificationProgress
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationProgress = _NotificationProgress;

  /**
   * Describes a system live view button with icon.
   *
   * @typedef { _NotificationIconButton } NotificationIconButton
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type NotificationIconButton = _NotificationIconButton;

  /**
   * Describes a live view notification of a trigger condition type.
   *
   * @typedef { _TriggerType } TriggerType
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type TriggerType = _TriggerType;

  /**
   * Describes a live view notification of a trigger condition instance.
   *
   * @typedef { _Trigger } Trigger
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Trigger = _Trigger;

  /**
   * Defines Notification Parameters to describe the key information of wantAgent in the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type NotificationParameters = _NotificationParameters;

  /**
   * Describes a geofence.
   *
   * @typedef { _Geofence } Geofence
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Geofence = _Geofence;

  /**
   * Describes the coordinate of the geofence.
   *
   * @typedef { _CoordinateSystemType } CoordinateSystemType
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type CoordinateSystemType = _CoordinateSystemType;

  /**
   * Describes the monitor event type of the geofence.
   *
   * @typedef { _MonitorEvent } MonitorEvent
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type MonitorEvent = _MonitorEvent;

  /**
   * The type of group notification customization information
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type GroupInfo = _GroupInfo;
}

export default notificationManager;
