/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * @namespace dataUriUtils
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 */
declare namespace dataUriUtils {
  /**
   * A test case for param tag's miss
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   */
  function getId(uri: string): void;
}

/**
 * Defines the callback type used in UIObserver watch click event.
 * 
 * @typedef { function }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare type ClickEventListenerCallback = (event: ClickEvent) => void;