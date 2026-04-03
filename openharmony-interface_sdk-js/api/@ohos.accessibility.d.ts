/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';
import { Resource } from './global/resource';

/**
 * Accessibility action that the ability can execute.
 *
 * @enum { int }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityAction {
  /**
   * AccessibilityFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  ACCESSIBILITY_FOCUS = 0,

  /**
   * ClearAccessibilityFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_ACCESSIBILITY_FOCUS = 1,

  /**
   * Focus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  FOCUS = 2,

  /**
   * ClearFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_FOCUS = 3,

  /**
   * Click
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLICK = 4,

  /**
   * LongClick
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  LONG_CLICK = 5,

  /**
   * Cut
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CUT = 6,

  /**
   * Copy
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  COPY = 7,

  /**
   * Paste
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  PASTE = 8,

  /**
   * Select
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SELECT = 9,

  /**
   * SetText
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_TEXT = 10,

  /**
   * ScrollForward
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_FORWARD = 11,

  /**
   * ScrollBackward
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_BACKWARD = 12,

  /**
   * SetSelection
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_SELECTION = 13,

  /**
   * SetCursorPosition
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_CURSOR_POSITION = 14,

  /**
   * Home
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  HOME = 15,

  /**
   * Back
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 16,

  /**
   * RecentTask
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  RECENT_TASK = 17,

  /**
   * NotificationCenter
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  NOTIFICATION_CENTER = 18,

  /**
   * ControlCenter
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CONTROL_CENTER = 19,

  /**
   * SpanClick
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SPAN_CLICK = 20
}


/**
 * AccessibilityEvent type
 *
 * @enum { int }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityEventType {
  //EventType
  /**
   * AccessibilityFocus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS = 0,

  /**
   * AccessibilityFocusClear type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS_CLEAR = 1,

  /**
   * Click type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_CLICK = 2,

  /**
   * LongClick type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_LONG_CLICK = 3,

  /**
   * Select type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SELECT = 4,

  /**
   * HoverEnter type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_ENTER = 5,

  /**
   * HoverExit type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_EXIT = 6,

  /**
   * Focus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOCUS = 7,

  /**
   * TextUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_UPDATE = 8,

  /**
   * TextSelectionUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_SELECTION_UPDATE = 9,

  /**
   * Scroll type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLL = 10,

  /**
   * RequestFocusForAccessibility type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY = 11,

  /**
   * AnnounceForAccessibility type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY = 12,

  /**
   * RequestFocusForAccessibilityNotInterrupt type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY_NOT_INTERRUPT = 13,

  /**
   * AnnounceForAccessibilityNotInterrupt type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY_NOT_INTERRUPT = 14,

  /**
   * ElementInfoChange type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ELEMENT_INFO_CHANGE = 15,

  /**
   * Scrolling type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLLING = 16,

  // WindowUpdateType
  /**
   * Window add type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ADD = 17,

  /**
   * Window remove type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_REMOVE = 18,

  /**
   * Window bounds type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_BOUNDS = 19,

  /**
   * Window active type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ACTIVE = 20,

  /**
   * Window focus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_FOCUS = 21,

  /**
   * Window property type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_PROPERTY = 22,

  /**
   * Window layer type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_LAYER = 23,

  //TouchGuideType
  /**
   * TouchBegin type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_BEGIN = 24,

  /**
   * TouchEnd type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_END = 25,

  //PageUpdateType
  /**
   * PageContentUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CONTENT_UPDATE = 26,

  /**
   * PageStateUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_STATE_UPDATE = 27,

  /**
   * PageOpen type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_OPEN = 28,

  /**
   * PageClose type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CLOSE = 29,

  //GestureType
  /**
   * left type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT = 30,

  /**
   * leftThenRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_RIGHT = 31,

  /**
   * leftThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_UP = 32,

  /**
   * leftThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_DOWN = 33,

  /**
   * right type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT = 34,

  /**
   * rightThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_LEFT = 35,

  /**
   * rightThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_UP = 36,

  /**
   * rightThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_DOWN = 37,

  /**
   * up type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP = 38,

  /**
   * upThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_LEFT = 39,

  /**
   * upThenRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_RIGHT = 40,

  /**
   * upThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_DOWN = 41,

  /**
   * down type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN = 42,

  /**
   * downThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_LEFT = 43,

  /**
 * downThenRight type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  TYPE_SWIPE_DOWN_THEN_RIGHT = 44,

  /**
   * downThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_UP = 45,

  /**
   * twoFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_SINGLE_TAP = 46,

  /**
   * twoFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP = 47,

  /**
   * twoFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP_AND_HOLD = 48,

  /**
 * twoFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  TYPE_TWO_FINGER_TRIPLE_TAP = 49,

  /**
   * twoFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_TRIPLE_TAP_AND_HOLD = 50,

  /**
   * threeFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SINGLE_TAP = 51,

  /**
   * threeFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP = 52,

  /**
   * threeFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP_AND_HOLD = 53,

  /**
 * threeFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  TYPE_THREE_FINGER_TRIPLE_TAP = 54,

  /**
   * threeFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_TRIPLE_TAP_AND_HOLD = 55,

  /**
   * fourFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SINGLE_TAP = 56,

  /**
   * fourFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP = 57,

  /**
   * fourFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP_AND_HOLD = 58,

  /**
 * fourFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  TYPE_FOUR_FINGER_TRIPLE_TAP = 59,

  /**
   * fourFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP_AND_HOLD = 60,

  /**
   * threeFingerSwipeUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_UP = 61,

  /**
   * threeFingerSwipeDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_DOWN = 62,

  /**
   * threeFingerSwipeLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_LEFT = 63,

  /**
   * threeFingerSwipeRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_RIGHT = 64,

  /**
   * fourFingerSwipeUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_UP = 65,

  /**
   * fourFingerSwipeDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_DOWN = 66,

  /**
 * fourFingerSwipeLeft type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  TYPE_FOUR_FINGER_SWIPE_LEFT = 67,

  /**
   * fourFingerSwipeRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_RIGHT = 68,

  /**
   * page active type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  TYPE_PAGE_ACTIVE = 69
}

/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 7
 */
/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @atomicservice
 * @since 11
 */
/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic&static
 */
declare namespace accessibility {
  /**
   * The type of the Ability app.
   *
   *{ 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The type of the Ability app.
   *
   * { 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all' }
   * @typedef {'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   */
  /**
   * The type of the Ability app.
   *
   * { 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all' }
   * @typedef {'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type AbilityType = 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all';

  /**
   * The action that the ability can execute.
   * value range: { 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
   * 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
   * 'scrollForward' | 'scrollBackward' | 'setSelection' }
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The action that the ability can execute.
   * value range: { 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
   * 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
   * 'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
   * 'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' }
   *
   * @typedef {'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' | 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' | 'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' | 'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamic
   */
  /**
   * The action that the ability can execute.
   * value range: { 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
   * 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
   * 'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
   * 'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' }
   *
   * @typedef {'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  *     'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' | 'scrollForward' |
  *     'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' | 'back' | 'recentTask' |
  *     'notificationCenter' | 'controlCenter' | 'common'}
  * @syscap SystemCapability.BarrierFree.Accessibility.Core
  * @crossplatform
  * @form
  * @atomicservice
  * @since 23 dynamic&static
  */
  type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
  'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
  'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common';

  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' }
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   * 'announceForAccessibility' }
   *
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' | 'announceForAccessibility'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   * 'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' |
   * 'announceForAccessibilityNotInterrupt' | 'scrolling' }
   *
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' | 'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 'announceForAccessibilityNotInterrupt' | 'scrolling'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamic
   */
  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   * 'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' |
   * 'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' }
   *
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' |
  *     'focus' | 'select' | 'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' |
  *     'scroll' | 'requestFocusForAccessibility' | 'announceForAccessibility' |
  *     'requestFocusForAccessibilityNotInterrupt' | 'announceForAccessibilityNotInterrupt' | 'scrolling' |
  *     'pageActive'}
  * @syscap SystemCapability.BarrierFree.Accessibility.Core
  * @crossplatform
  * @form
  * @atomicservice
  * @since 23 dynamic&static
  */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' |
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive';

  /**
   * The change type of the windowsChange event.
   * It's used when received the {@code windowsChange} event.
   *
   * @typedef {'add' | 'remove' | 'bounds' | 'active' | 'focus'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * The change type of the windowsChange event.
   * It's used when received the {@code windowsChange} event.
   *
   * @typedef {'add' | 'remove' | 'bounds' | 'active' | 'focus'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';

  /**
   * The type of the ability state.
   *
   * @typedef {'enable' | 'disable' | 'install'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * The type of the ability state.
   *
   * @typedef {'enable' | 'disable' | 'install'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type AbilityState = 'enable' | 'disable' | 'install';

  /**
   * The ability that accessibility subsystem support.
   * touchExplorer: Describes the capability to talkback.
   * magnification: Describes the capability to request to control the display magnification.
   * gesturesSimulation: Describes the capability to request to simulate the gesture.
   * windowContent: Describes the capability to search for the content of the active window.
   * filterKeyEvents: Describes the capability to request to filter key events.
   * fingerprintGesture: Describes the capability to request to fingerprint gesture.
   *
   * @typedef {'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * The ability that accessibility subsystem support.
   * touchExplorer: Describes the capability to talkback.
   * magnification: Describes the capability to request to control the display magnification.
   * gesturesSimulation: Describes the capability to request to simulate the gesture.
   * windowContent: Describes the capability to search for the content of the active window.
   * filterKeyEvents: Describes the capability to request to filter key events.
   * fingerprintGesture: Describes the capability to request to fingerprint gesture.
   *
   * @typedef {'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture';

  /**
   * The granularity of text move.
   *
   * @typedef {'char' | 'word' | 'line' | 'page' | 'paragraph'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * The granularity of text move.
   *
   * @typedef {'char' | 'word' | 'line' | 'page' | 'paragraph'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @param { AsyncCallback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenAccessibilitySync
   */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the accessibility is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenAccessibilitySync
   */
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 10
   */
  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isOpenAccessibilitySync(): boolean;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @param { AsyncCallback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenTouchGuideSync
   */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the touch browser is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenTouchGuideSync
   */
  function isOpenTouchGuide(): Promise<boolean>;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { boolean } Returns true if the touch browser is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 10
   */
  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { boolean } Returns true if the touch browser is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @atomicservice
   * @since 11 dynamic
   */
  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { boolean } Returns true if the touch browser is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isOpenTouchGuideSync(): boolean;

  /**
   * Checks screen reader ability (which is used by talkback) is enabled.
   * @returns { boolean } Returns true if the screen reader is enabled; return false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 18 dynamic
   */
  /**
   * Checks screen reader ability (which is used by talkback) is enabled.
   * @returns { boolean } Returns true if the screen reader is enabled; return false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isScreenReaderOpenSync(): boolean;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.accessibility#getAccessibilityExtensionList
   */
  function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Returns the list of abilityInfos.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.accessibility#getAccessibilityExtensionList
   */
  function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Returns the list of abilityInfos.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   */
  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Returns the list of abilityInfos.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   */
  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Array<AccessibilityAbilityInfo> } Returns the list of abilityInfos.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamic
   */
  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Array<AccessibilityAbilityInfo> } Returns the list of abilityInfos.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>;

  /**
   * Send accessibility Event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AsyncCallback<void> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.accessibility#sendAccessibilityEvent
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Send accessibility Event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @returns { Promise<void> } Returns {@code true} if success ; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.accessibility#sendAccessibilityEvent
   */
  function sendEvent(event: EventInfo): Promise<void>;

  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AsyncCallback<void> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   */
  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AsyncCallback<void> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @returns { Promise<void> } Returns {@code true} if success ; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   */
  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @returns { Promise<void> } Returns {@code true} if success ; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function sendAccessibilityEvent(event: EventInfo): Promise<void>;

  /**
   * Gets touch mode type.
   * @returns { string } Returns touch mode type, include 'singleTouchMode', 'doubleTouchMode' and 'none'.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamic
   */
  /**
   * Gets touch mode type.
   * @returns { string } Returns touch mode type, include 'singleTouchMode', 'doubleTouchMode' and 'none'.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getTouchModeSync(): string;

  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onAccessibilityStateChange(callback: Callback<boolean>): void;

  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamic
   */
  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function on(type: 'touchGuideStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchGuideStateChange(callback: Callback<boolean>): void;

  /**
   * Register the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamic
   */
  /**
   * Register the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function on(type: 'screenReaderStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the screen reader state changed.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onScreenReaderStateChange(callback: Callback<boolean>): void;

  /**
   * Register the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamic
   */
  /**
   * Register the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function on(type: 'touchModeChange', callback: Callback<string>): void;

  /**
   * Register the observe of the touch mode changed.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchModeChange(callback: Callback<string>): void;

  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @since 20 dynamic
   */
  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offAccessibilityStateChange(callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function off(type: 'touchGuideStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchGuideStateChange(callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamic
   */
  /**
   * Unregister the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function off(type: 'screenReaderStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the screen reader state changed.
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offScreenReaderStateChange(callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } [callback] callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamic
   */
  /**
   * Unregister the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } [callback] callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  function off(type: 'touchModeChange', callback?: Callback<string>): void;

  /**
   * Unregister the observe of the touch mode changed.
   * @param { Callback<string> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchModeChange(callback?: Callback<string>): void;

  /**
   * Get the captions manager.
   *
   * @returns { CaptionsManager } Returns the captions manager.
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamic
   * @since 23 static
   * @deprecated since 12
   */
  function getCaptionsManager(): CaptionsManager;

  /**
   * Register the observe of the animationReduce state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAnimationReduceStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the observe of the animationReduce state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAnimationReduceStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether animationReduce is enabled.
   *
   * @returns { boolean } Returns true if the animationReduce is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabledSync(): boolean;

  /**
   * Checks whether animationReduce is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the animationReduce is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabled(): Promise<boolean>;

  /**
   * Register the observe of the flash reminder state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onFlashReminderStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the observe of the flash reminder state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offFlashReminderStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether flash reminder is enabled.
   *
   * @returns { boolean } Returns true if the flash reminder is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabledSync(): boolean;

  /**
   * Checks whether flash reminder is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the flash reminder is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabled(): Promise<boolean>;

  /**
   * Register the observe of the audioMono state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAudioMonoStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the observe of the audioMono state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAudioMonoStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether audioMono is enabled.
   *
   * @returns { boolean } Returns true if the audioMono is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabledSync(): boolean;

  /**
   * Checks whether audioMono is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the audioMono is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabled(): Promise<boolean>;

  /**
   * Check if senior mode is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if senior mode is enabled; returns {@code false} otherwise.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isSeniorModeEnabled(): Promise<boolean>;

  /**
   * Register an observer for senior mode state changes.
   *
   * @param { Callback<boolean> } callback - Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the observer for senior mode state changes.
   *
   * @param { Callback<boolean> } [callback] - Asynchronous callback interface.
   *     <br>Default behavior: Unregister all callbacks for senior mode state changes.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChange(callback?: Callback<boolean>): void;

  /**
   * Indicates the captions manager.
   *
   * @typedef CaptionsManager
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamic
   */
  /**
   * Indicates the captions manager.
   *
   * @typedef CaptionsManager
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface CaptionsManager {
    /**
     * Indicates whether captions are enabled.
     *
     * @type {boolean}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates whether captions are enabled.
     *
     * @type {boolean}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    enabled: boolean;
    /**
     * Indicates the style of captions.
     *
     * @type {CaptionsStyle}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the style of captions.
     *
     * @type {CaptionsStyle}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    style: CaptionsStyle;

    /**
     * Register the observe of the enable state.
     *
     * @param { 'enableChange' } type
     * @param { Callback<boolean> } callback
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'enableChange', callback: Callback<boolean>): void;

    /**
     * Register the observe of the enable state.
     *
     * @param { Callback<boolean> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onEnableChange(callback: Callback<boolean>): void;

    /**
     * Register the observer of the style.
     *
     * @param { 'styleChange' } type
     * @param { Callback<CaptionsStyle> } callback
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'styleChange', callback: Callback<CaptionsStyle>): void;

    /**
     * Register the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onStyleChange(callback: Callback<CaptionsStyle>): void;

    /**
     * Unregister the observe of the enable state.
     *
     * @param { 'enableChange' } type
     * @param { Callback<boolean> } callback
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'enableChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the observe of the enable state.
     *
     * @param { Callback<boolean> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offEnableChange(callback?: Callback<boolean>): void;

    /**
     * Unregister the observer of the style.
     *
     * @param { 'styleChange' } type
     * @param { Callback<CaptionsStyle> } callback
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void;

    /**
     * Unregister the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offStyleChange(callback?: Callback<CaptionsStyle>): void;
  }

  /**
   * Indicates the edge type of the captions font.
   *
   * @typedef {'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamic
   */
  /**
   * Indicates the edge type of the captions font.
   *
   * @typedef {'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  type CaptionsFontEdgeType = 'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow';
  /**
   * Indicates the font family of captions.
   *
   * @typedef {'default' | 'monospacedSerif' | 'serif' | 'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals'}     
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamic
   */
  /**
   * Indicates the font family of captions.
   *
   * @typedef {'default' | 'monospacedSerif' | 'serif' | 'monospacedSansSerif' |
  * 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals'}
  * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
  * @form
  * @atomicservice
  * @since 23 dynamic&static
  */
  type CaptionsFontFamily = 'default' | 'monospacedSerif' | 'serif' |
  'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals';
  /**
   * Indicates the style of captions.
   *
   * @typedef CaptionsStyle
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamic
   */
  /**
   * Indicates the style of captions.
   *
   * @typedef CaptionsStyle
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface CaptionsStyle {
    /**
     * Indicates the font family of captions.
     *
     * @type {CaptionsFontFamily}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the font family of captions.
     *
     * @type {CaptionsFontFamily}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    fontFamily: CaptionsFontFamily;
    /**
     * Indicates the font scaling of captions, in units of %.
     * @type { int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the font scaling of captions, in units of %.
     * @type { int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    fontScale: int;
    /**
     * Indicates the font color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the font color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    fontColor: int | string;
    /**
     * Indicates the edge type of the captions font.
     * @type { CaptionsFontEdgeType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the edge type of the captions font.
     * @type { CaptionsFontEdgeType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    fontEdgeType: CaptionsFontEdgeType;
    /**
     * Indicates the background color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the background color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    backgroundColor: int | string;
    /**
     * Indicates the window color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     */
    /**
     * Indicates the window color of captions.
     * @type { int | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    windowColor: int | string;
  }

  /**
   * Indicates the info of accessibility.
   *
   * @typedef AccessibilityAbilityInfo
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * Indicates the info of accessibility.
   *
   * @typedef AccessibilityAbilityInfo
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface AccessibilityAbilityInfo {
    /**
     * The ability id.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The ability id.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly id: string;

    /**
     * The ability name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The ability name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly name: string;

    /**
     * The bundle name of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The bundle name of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly bundleName: string;
    /**
     * The target bundle name for the observation.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 9 dynamic
     */
    /**
     * The target bundle name for the observation.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly targetBundleNames: Array<string>;

    /**
     * The type of the ability.
     * @type { Array<AbilityType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The type of the ability.
     * @type { Array<AbilityType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly abilityTypes: Array<AbilityType>;

    /**
     * The capabilities of the ability.
     * @type { Array<Capability> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The capabilities of the ability.
     * @type { Array<Capability> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly capabilities: Array<Capability>;

    /**
     * The description of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The description of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly description: string;

    /**
     * The events which the accessibility ability wants to observe.
     * @type { Array<EventType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The events which the accessibility ability wants to observe.
     * @type { Array<EventType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly eventTypes: Array<EventType>;

    /**
     * Indicates whether the extended service needs to be hidden.
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12 dynamic
     */
    /**
     * Indicates whether the extended service needs to be hidden.
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly needHide: boolean;

    /**
     * The label of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12 dynamic
     */
    /**
     * The label of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly label: string;
  }

  /**
   * Indicates the info of events.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamic
   */
  /**
   * Indicates the info of events.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic&static
   */
  class EventInfo {
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { Object } jsonObject - Character string in JSON format required for creating an object.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { Object } jsonObject - Character string in JSON format required for creating an object.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic
     */
    constructor(jsonObject: Object);
    /**
     * A constructor used to create a EventInfo object.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 static
     */
    constructor();
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { EventType } type - The type of the accessibility event.
     * @param { string } bundleName - The name of the bundle.
     * @param { Action } triggerAction - The action that the ability can execute.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 11 dynamic
     */
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { EventType } type - The type of the accessibility event.
     * @param { string } bundleName - The name of the bundle.
     * @param { Action } triggerAction - The action that the ability can execute.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    constructor(type: EventType, bundleName: string, triggerAction: Action);
    /**
     * The type of an accessibility event.
     * @type { EventType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The type of an accessibility event.
     * @type { EventType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    type: EventType;

    /**
     * The type of the window change event.
     * @type { ?WindowUpdateType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The type of the window change event.
     * @type { ?WindowUpdateType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    windowUpdateType?: WindowUpdateType;

    /**
     * The bundle name of the target application.
     * @type { string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The bundle name of the target application.
     * @type { string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    bundleName: string;

    /**
     * The type of the event source component,such as button, chart.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The type of the event source component,such as button, chart.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    componentType?: string;

    /**
     * The page id of the event source.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The page id of the event source.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    pageId?: int;

    /**
     * The accessibility event description.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The accessibility event description.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    description?: string;

    /**
     * The action that triggers the accessibility event, for example, clicking or focusing a view.
     * @type { Action }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The action that triggers the accessibility event, for example, clicking or focusing a view.
     * @type { Action }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    triggerAction: Action;

    /**
     * The movement step used for reading texts.
     * @type { ?TextMoveUnit }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The movement step used for reading texts.
     * @type { ?TextMoveUnit }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    textMoveUnit?: TextMoveUnit;

    /**
     * The content list.
     * @type { ?Array<string> }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The content list.
     * @type { ?Array<string> }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    contents?: Array<string>;

    /**
     * The content changed before.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The content changed before.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    lastContent?: string;

    /**
     * The start index of listed items on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The start index of listed items on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    beginIndex?: int;

    /**
     * The index of the current item on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The index of the current item on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    currentIndex?: int;

    /**
     * The end index of listed items on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The end index of listed items on the screen.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    endIndex?: int;

    /**
     * The total of the items, talkback used it when scroll.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7 dynamic
     */
    /**
     * The total of the items, talkback used it when scroll.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    itemCount?: int;

    /**
     * The id of element.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12 dynamic
     */
    /**
     * The id of element.
     * @type { ?int }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    elementId?: int;

    /**
     * The content of announce accessibility text.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12 dynamic
     */
    /**
     * The content of announce accessibility text.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    textAnnouncedForAccessibility?: string;

    /**
     * The content of announce accessibility text.
     * @type { ?Resource }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 18 dynamic
     */
    /**
     * The content of announce accessibility text.
     * @type { ?Resource }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    textResourceAnnouncedForAccessibility?: Resource;

    /**
     * The customized element id.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12 dynamic
     */
    /**
     * The customized element id.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    customId?: string;
  }
}
export default accessibility;

/**
 * The focus move result code.
 *
 * @enum { int }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export enum FocusMoveResultCode {
  /**
   * The code of not supported.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  NOT_SUPPORTED = -1,
  /**
   * The code of success.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS = 0,
  /**
   * The code of success next bypass descendants.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS_NEXT_BYPASS_DESCENDANTS = 1,
  /**
   * The code of failure.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE = 2,
  /**
   * The code of failure in child tree.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_CHILD_TREE = 3,
  /**
   * The code of failure lost node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_LOST_NODE = 4,
  /**
   * The code of search next.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_NEXT = 5,
  /**
   * The code of check child property.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY = 6,
  /**
   * The code of check child property and get last.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY_AND_GET_LAST = 7,
  /**
   * The code of failure in scroll component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_SCROLL = 8
}
