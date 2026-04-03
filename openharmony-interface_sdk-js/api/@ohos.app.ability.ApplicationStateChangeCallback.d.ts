/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
/**
 * The application state change callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 10
 */
/**
 * The application state change callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @atomicservice
 * @since 11
 */
/**
 * The application state change callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export default class ApplicationStateChangeCallback {
/*** endif */

/*** if arkts static */
/**
 * The application state change callback.
 *
 * @typedef ApplicationStateChangeCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 23 static
 */
declare interface ApplicationStateChangeCallback {
/*** endif */
  /**
   * Called back when the state of the application changes to foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 10
   */
  /**
   * Called back when the state of the application changes to foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  /**
   * Called back when the state of the application changes to foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  onApplicationForeground(): void;

  /**
   * Called back when the state of the application changes to background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 10
   */
  /**
   * Called back when the state of the application changes to background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  /**
   * Called back when the state of the application changes to background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  onApplicationBackground(): void;
}

/*** if arkts static */
export default ApplicationStateChangeCallback;
/*** endif */