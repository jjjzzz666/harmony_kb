/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';
import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9
 */
/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum Action {
  /**
   * Cancel key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Cancel key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * Down key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Down key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  DOWN = 1,

  /**
   * Up key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Up key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  UP = 2
}

/**
 * Key
 *
 * @interface Key
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9
 */
/**
 * Key
 *
 * @typedef Key
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface Key {
  /**
   * Key code
   * @type { KeyCode }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Key code
   * @type { KeyCode }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  code: KeyCode;

  /**
   * Time when the key is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Time when the key is pressed
   * @type { long }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  pressedTime: long;

  /**
   * Device to which the key belongs
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Device to which the key belongs
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  deviceId: int;
}

/**
 * KeyEvent
 *
 * @interface KeyEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9
 */
/**
 * KeyEvent
 *
 * @typedef KeyEvent
 * @extends InputEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface KeyEvent extends InputEvent {
  /**
   * Key action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Key action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * Key that has changed
   * @type { Key }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Key that has changed
   * @type { Key }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  key: Key;

  /**
   * Unicode character corresponding to the key
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Unicode character corresponding to the key
   * @type { int }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  unicodeChar: int;

  /**
   * List of pressed keys
   * @type { Key[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * List of pressed keys
   * @type { Key[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  keys: Key[];

  /**
   * Whether ctrlKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether ctrlKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  ctrlKey: boolean;

  /**
   * Whether altKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether altKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  altKey: boolean;

  /**
   * Whether shiftKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether shiftKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  shiftKey: boolean;

  /**
   * Whether logoKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether logoKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  logoKey: boolean;

  /**
   * Whether fnKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether fnKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  fnKey: boolean;

  /**
   * Whether capsLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether capsLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  capsLock: boolean;

  /**
   * Whether numLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether numLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  numLock: boolean;

  /**
   * Whether scrollLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9
   */
  /**
   * Whether scrollLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  scrollLock: boolean;
}