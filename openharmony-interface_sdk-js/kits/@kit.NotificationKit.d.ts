/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import notificationManager from '@ohos.notificationManager';
import notificationSubscribe from '@ohos.notificationSubscribe';
import notificationExtensionSubscription from '@ohos.notificationExtensionSubscription';
import NotificationSubscriberExtensionAbility from '@ohos.application.NotificationSubscriberExtensionAbility';
import NotificationSubscriberExtensionContext from '@ohos.application.NotificationSubscriberExtensionContext';
import Notification, { ActionResult, ShowNotificationOptions } from '@system.notification';

export {
  ActionResult, Notification, ShowNotificationOptions, notificationManager, notificationSubscribe,
  notificationExtensionSubscription, NotificationSubscriberExtensionAbility, NotificationSubscriberExtensionContext
};

/*** if arkts static */
import notificationManager from '@ohos.notificationManager';
import notificationSubscribe from '@ohos.notificationSubscribe';

export { notificationManager, notificationSubscribe };
/*** endif */
