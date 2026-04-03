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
 * AgentCard describes the basic information and capabilities provided by an Agent.
 *
 * @typedef AgentCard
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentCard {
  /**
   * A unique identifier for the agent card.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  agentId: string;

  /**
   *  The name of the Agent.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  name: string;

  /**
   * The description of the Agent's function.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  description: string;

  /**
   * Service provider information for the Agent.
   *
   * @type { ?AgentProvider }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  provider?: AgentProvider;

  /**
   * Version of the Agent (format defined by provider, e.g., "1.0.0").
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  version: string;

  /**
   * Url for the Agent's documentation.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  documentationUrl?: string;

  /**
   * Capability set supported by the agent.
   *
   * @type { ?AgentCapabilities }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  capabilities?: AgentCapabilities;

  /**
   * The set of interaction modes that the agent supports across all skills.
   * This can be overridden per skill. Defined as media types.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  defaultInputModes: Array<string>;

  /**
   * The media types supported as outputs from this agent.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  defaultOutputModes: Array<string>;

  /**
   * Skills represent the abilities of an agent.
   *
   * @type { Array<AgentSkill> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  skills: Array<AgentSkill>;

  /**
   * A url to an icon for the agent.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  iconUrl?: string;

  /**
   * The category of this agent.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  category: string;

  /**
   * Extension configuration items for the agent.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;

  /**
   * Application-related information for the agent.
   *
   * @type { AgentAppInfo }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  appInfo: AgentAppInfo;
}

/**
 * Represents the service provider of an agent.
 *
 * @typedef AgentProvider
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentProvider {
  /**
   * The name of the agent provider's organization.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  organization: string;

  /**
   * A url for the agent provider's website or relevant documentation.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  url: string;
}

/**
 * Defines optional capabilities supported by an agent.
 *
 * @typedef AgentCapabilities
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentCapabilities {
  /**
   * Indicates if the agent supports streaming responses.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  streaming?: boolean;

  /**
   * Indicates if the agent supports sending push notifications for asynchronous task updates.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  pushNotifications?: boolean;

  /**
   * If the Agent exposes task state change history.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  stateTransitionHistory?: boolean;

  /**
   * Indicates if the agent supports providing an extended agent card when authenticated.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extendedAgentCard?: boolean;

  /**
   * The protocol extension supported by the agent.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;
}

/**
 * Represents a distinct capability or function that an agent can perform.
 *
 * @typedef AgentSkill
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentSkill {
  /**
   * A unique identifier for the Skill.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  id: string;

  /**
   * A human-readable name.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  name: string;

  /**
   * A detailed description of the skill.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  description: string;

  /**
   * A set of keywords describing the skill's capabilities.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  tags: Array<string>;

  /**
   * Example prompts or scenarios that this skill can handle.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  examples?: Array<string>;

  /**
   * The set of supported input media types for this skill, overriding the agent's defaults.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  inputModes?: Array<string>;

  /**
   * The set of supported output media types for this skill, overriding the agent's defaults.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  outputModes?: Array<string>;

  /**
   * Extension configuration items for the skill.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;
}

/**
 * Application-related information for the agent.
 *
 * @typedef AgentAppInfo
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentAppInfo {
  /**
   * The bundle name the agent card belongs.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  bundleName: string;

  /**
   * The module name the agent card belongs.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  moduleName: string;

  /**
   * The agent extension ability name the agent card belongs.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  abilityName: string;

  /**
   * Device types supported by the agent.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  deviceTypes?: Array<string>;

  /**
   * Agent's minimum supported application version.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  minAppVersion?: string;
}