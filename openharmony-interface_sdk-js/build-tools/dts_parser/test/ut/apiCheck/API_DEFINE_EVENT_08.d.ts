/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */
/**
 * Implements intelligent voice management.
 * @typedef IntelligentVoiceManager
 * @syscap SystemCapability.AI.IntelligentVoice.Core
 * @since 12
 */
interface IntelligentVoiceManager {
  /**
   * Subscribes service change events. When the state of intelligent voice service changes,
   * the callback is invoked.
   * @param { 'ServiceChange' } type - Type of the event to listen for. Only the serviceChange event is supported.
   * @param { Callback<ServiceChangeType> } callback - Callback is invoked when the event is triggered.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @since 12
   */
  on(type: 'ServiceChange', callback: Callback<ServiceChangeType>): void;
  /**
   * Unsubscribes service change events.
   * @param { 'ServiceChange' } type - Type of the event to listen for. Only the serviceChange event is supported.
   * @param { Callback<ServiceChangeType> } [callback] - Callback is invoked when the event is triggered.
   * @syscap SystemCapability.AI.IntelligentVoice.Core
   * @since 12
   */
  off(type: 'ServiceChange', callback?: Callback<ServiceChangeType>): void;
}