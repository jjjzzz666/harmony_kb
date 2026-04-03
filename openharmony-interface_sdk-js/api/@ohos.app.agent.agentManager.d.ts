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
import Want from './@ohos.app.ability.Want';
import { AgentCard } from './application/AgentCard';
import { AgentProxy } from './application/AgentProxy';
import { AgentExtensionConnectCallback } from './application/AgentExtensionConnectCallback';

/**
 * The module provides the capability to interact with agents in the system.
 *
 * @namespace agentManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare namespace agentManager {
  /**
   * Connects to an AgentExtensionAbility.
   *
   * @permission ohos.permission.CONNECT_AGENT
   * @param { Want } want - Indicates the want info to connect.
   * @param { string } agentId - The agent id to connect.
   * @param { AgentExtensionConnectCallback } callback - The callback of connection.
   * @returns { Promise<AgentProxy> } The promise to get AgentProxy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @throws { BusinessError } 35600003 - Maximum connections from the same caller have been reached.
   * Please disconnect at least one agent extension beforehand.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectAgentExtensionAbility(want: Want, agentId: string,
    callback: AgentExtensionConnectCallback): Promise<AgentProxy>;

  /**
   * Disconnects to an AgentExtensionAbility.
   *
   * @permission ohos.permission.CONNECT_AGENT
   * @param { AgentProxy } proxy - The agent proxy to disconnect.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function disconnectAgentExtensionAbility(proxy: AgentProxy): Promise<void>;

  /**
   * Gets all AgentCards on the device.
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @returns { Promise<Array<AgentCard>> } Returns the array of AgentCard.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAllAgentCards(): Promise<Array<AgentCard>>;

  /**
   * Gets all AgentCards within specified bundleName.
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @param { string } bundleName - The bundle name of the agent card belongs to.
   * @returns { Promise<Array<AgentCard>> } Returns the array of AgentCard.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAgentCardsByBundleName(bundleName: string): Promise<Array<AgentCard>>;

  /**
   * Gets the AgentCard within specified agent id.
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @param { string } bundleName - The bundle name of the agent card belongs to.
   * @param { string } agentId - The agent id the agent card belongs to.
   * @returns { Promise<AgentCard> } Returns the specified AgentCard.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAgentCardByAgentId(bundleName: string, agentId: string): Promise<AgentCard>;
}

export default agentManager;