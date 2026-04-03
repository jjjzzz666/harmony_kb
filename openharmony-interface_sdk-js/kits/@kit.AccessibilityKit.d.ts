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
 * @kit AccessibilityKit
 */

/*** if arkts dynamic */
import config from '@ohos.accessibility.config';
import accessibility from '@ohos.accessibility';
import { GesturePath } from '@ohos.accessibility.GesturePath';
import { GesturePoint } from '@ohos.accessibility.GesturePoint';
import AccessibilityExtensionAbility, {
  AccessibilityElement, AccessibilityExtensionContext, ElementAttributeKeys,
  ElementAttributeValues, FocusDirection, FocusType, Rect, WindowType, AccessibilityEvent, AccessibilityEventInfo,
  Parameter, FocusRule, FocusCondition, FocusMoveResult
} from '@ohos.application.AccessibilityExtensionAbility';
import { AccessibilityEventType, AccessibilityAction, FocusMoveResultCode } from '@ohos.accessibility';
/*** endif */

/*** if arkts static */
import config from '@ohos.accessibility.config';
import accessibility from '@ohos.accessibility';
import AccessibilityExtensionAbility, {
  AccessibilityElement, AccessibilityExtensionContext, FocusDirection, Rect, WindowType, AccessibilityEventInfo,
  Parameter, FocusRule, FocusCondition, FocusMoveResult
} from '@ohos.application.AccessibilityExtensionAbility';
import { AccessibilityEventType, AccessibilityAction, FocusMoveResultCode } from '@ohos.accessibility';
/*** endif */

/*** if arkts dynamic */
export {
  AccessibilityElement, AccessibilityExtensionAbility, AccessibilityExtensionContext,
  ElementAttributeKeys, ElementAttributeValues, FocusDirection, FocusType, GesturePath,
  GesturePoint, Rect, WindowType, accessibility, config, AccessibilityEvent, AccessibilityEventInfo,
  AccessibilityAction, AccessibilityEventType, Parameter,
  FocusRule, FocusCondition, FocusMoveResult, FocusMoveResultCode
};
/*** endif */

/*** if arkts static */
export {
  AccessibilityElement, AccessibilityExtensionAbility, AccessibilityExtensionContext, FocusDirection, Rect,
  WindowType, accessibility, config, AccessibilityEventInfo, AccessibilityAction, AccessibilityEventType,
  Parameter, FocusRule, FocusCondition, FocusMoveResult, FocusMoveResultCode
};
/*** endif */
