/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * The proxy object of the AgentExtensionAbility, used to send messages to the AgentExtensionAbility, etc.
 *
 * @interface AgentProxy
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface AgentProxy {
  /**
   * Send data to the AgentExtensionAbility.
   *
   * @param { string } data - Indicates the data to send.
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  sendData(data: string): void;

  /**
   * Send authentication to the AgentExtensionAbility.
   *
   * @param { string } handshakeData - Indicates the handshake data to send.
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  authorize(handshakeData: string): void;
}