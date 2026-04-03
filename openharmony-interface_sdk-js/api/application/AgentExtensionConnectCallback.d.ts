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
 * Agent extension connect callback.
 *
 * @interface AgentExtensionConnectCallback
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface AgentExtensionConnectCallback {
  /**
   * Called back when data is received.
   *
   * @param { string } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onData(data: string): void;

  /**
   * Called back when authentication is received.
   *
   * @param { string } handshakeData - Indicates the received handshake data.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onAuth(handshakeData: string): void;

  /**
   * The callback interface was disconnected successfully.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onDisconnect(): void;
}