/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import * as _UIAbilityContext from './application/UIAbilityContext';
import type * as _UIExtensionContext from './application/UIExtensionContext';
import type * as _AutoFillExtensionContext from './application/AutoFillExtensionContext';
import * as _AbilityStageContext from './application/AbilityStageContext';
import * as _ApplicationContext from './application/ApplicationContext';
import * as _BaseContext from './application/BaseContext';
import * as _Context from './application/Context';
import * as _ExtensionContext from './application/ExtensionContext';
import * as _FormExtensionContext from './application/FormExtensionContext';
import * as _FormEditExtensionContext from './application/FormEditExtensionContext';
import * as _LiveFormExtensionContext from './application/LiveFormExtensionContext';
import * as _ServiceExtensionContext from './application/ServiceExtensionContext';
import * as _EventHub from './application/EventHub';
import type * as _VpnExtensionContext from './application/VpnExtensionContext';
import type { AutoStartupCallback as _AutoStartupCallback } from './application/AutoStartupCallback';
import type { AutoStartupInfo as _AutoStartupInfo } from './application/AutoStartupInfo';
import type * as _EmbeddableUIAbilityContext from './application/EmbeddableUIAbilityContext';
import type * as _PhotoEditorExtensionContext from './application/PhotoEditorExtensionContext';
import * as _UIServiceExtensionContext from './application/UIServiceExtensionContext';
import * as _UIServiceProxy from './application/UIServiceProxy';
import * as _UIServiceHostProxy from './application/UIServiceHostProxy';
import * as _UIServiceExtensionConnectCallback from './application/UIServiceExtensionConnectCallback';
/*** endif */
/*** if arkts static */
import _UIAbilityContext from './application/UIAbilityContext';
import _UIExtensionContext from './application/UIExtensionContext';
import _AutoFillExtensionContext from './application/AutoFillExtensionContext';
import _UIServiceExtensionContext from './application/UIServiceExtensionContext';
import _AbilityStageContext from './application/AbilityStageContext';
import _ApplicationContext from './application/ApplicationContext';
import _AppServiceExtensionContext from './application/AppServiceExtensionContext';
import _BaseContext from './application/BaseContext';
import _Context from './application/Context';
import _ExtensionContext from './application/ExtensionContext';
import _FormExtensionContext from './application/FormExtensionContext';
import _FormEditExtensionContext from './application/FormEditExtensionContext';
import _LiveFormExtensionContext from './application/LiveFormExtensionContext';
import _ServiceExtensionContext from './application/ServiceExtensionContext';
import _EventHub from './application/EventHub';
import type _AutoStartupCallback from './application/AutoStartupCallback';
import type _AutoStartupInfo from './application/AutoStartupInfo';
import _UIServiceProxy from './application/UIServiceProxy';
import _UIServiceHostProxy from './application/UIServiceHostProxy';
import _UIServiceExtensionConnectCallback from './application/UIServiceExtensionConnectCallback';
import type _PhotoEditorExtensionContext from './application/PhotoEditorExtensionContext';
/*** endif */
import { AbilityResult as _AbilityResult } from './ability/abilityResult';
import type _AbilityStartCallback from './application/AbilityStartCallback';
import { ConnectOptions as _ConnectOptions } from './ability/connectOptions';
import { PacMap as _PacMap } from './ability/dataAbilityHelper';
import { AgentCard as _AgentCard, AgentProvider as _AgentProvider, AgentCapabilities as _AgentCapabilities,
         AgentSkill as _AgentSkill, AgentAppInfo as _AgentAppInfo } from './application/AgentCard';
import { AgentHostProxy as _AgentHostProxy } from './application/AgentHostProxy';
import { AgentProxy as _AgentProxy } from './application/AgentProxy';
import { AgentExtensionConnectCallback as _AgentExtensionConnectCallback } from './application/AgentExtensionConnectCallback';
import _AgentExtensionContext from './application/AgentExtensionContext';

/**
 * This module provides application context classes and common data structures.
 *
 * @namespace common
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 9
 */
/**
 * This module provides application context classes and common data structures.
 *
 * @namespace common
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * This module provides application context classes and common data structures.
 *
 * @namespace common
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace common {
  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @typedef { _UIAbilityContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  export type UIAbilityContext = _UIAbilityContext.default;

  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @typedef { _UIAbilityContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type UIAbilityContext = _UIAbilityContext;

  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @typedef { _AbilityStageContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  export type AbilityStageContext = _AbilityStageContext.default;

  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @typedef { _AbilityStageContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type AbilityStageContext = _AbilityStageContext;

  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @typedef { _ApplicationContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  export type ApplicationContext = _ApplicationContext.default;

  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @typedef { _ApplicationContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type ApplicationContext = _ApplicationContext;

  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @typedef { _BaseContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  export type BaseContext = _BaseContext.default;
  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @typedef { _BaseContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type BaseContext = _BaseContext;

  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @typedef { _Context.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  export type Context = _Context.default;

  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @typedef { _Context }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type Context = _Context;

  /**
   * The context of an extension. It allows access to extension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of an extension. It allows access to extension-specific resources.
   *
   * @typedef { _ExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  export type ExtensionContext = _ExtensionContext.default;

  /**
   * The context of an extension. It allows access to extension-specific resources.
   *
   * @typedef { _ExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export type ExtensionContext = _ExtensionContext;

  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @typedef { _FormExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  export type FormExtensionContext = _FormExtensionContext.default;

  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @typedef { _FormExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export type FormExtensionContext = _FormExtensionContext;

  /**
   * The context of form edit extension. It allows access to
   * formEditExtension-specific resources.
   *
   * @typedef { _FormEditExtensionContext.default }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  export type FormEditExtensionContext = _FormEditExtensionContext.default;

  /**
   * The context of form edit extension. It allows access to
   * formEditExtension-specific resources.
   *
   * @typedef { _FormEditExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 static
   */
  export type FormEditExtensionContext = _FormEditExtensionContext;

  /**
   * The context of live form extension. It allows access to
   * liveFormExtension-specific resources.
   *
   * @typedef { _LiveFormExtensionContext.default }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  export type LiveFormExtensionContext = _LiveFormExtensionContext.default;

  /**
   * The context of live form extension. It allows access to
   * liveFormExtension-specific resources.
   *
   * @typedef { _LiveFormExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 static
   */
  export type LiveFormExtensionContext = _LiveFormExtensionContext;

  /**
   * The context of service extension. It allows access to
   * serviceExtension-specific resources.
   *
   * @typedef { _ServiceExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  export type ServiceExtensionContext = _ServiceExtensionContext.default;

  /**
   * The context of service extension. It allows access to
   * serviceExtension-specific resources.
   *
   * @typedef { _ServiceExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ServiceExtensionContext = _ServiceExtensionContext;

  /**
   * The event center of a context, support the subscription and publication of events.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * The event center of a context, support the subscription and publication of events.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * The event center of a context, support the subscription and publication of events.
   *
   * @typedef { _EventHub.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export type EventHub = _EventHub.default;

  /**
   * The event center of a context, support the subscription and publication of events.
   *
   * @typedef { _EventHub }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  export type EventHub = _EventHub;

  /**
   * Defines a PacMap object for storing a series of values.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Defines a PacMap object for storing a series of values.
   *
   * @typedef { _PacMap }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type PacMap = _PacMap;

  /**
   * Indicates the result of startAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9
   */
  /**
   * Indicates the result of startAbility.
   *
   * @typedef { _AbilityResult }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type AbilityResult = _AbilityResult;

  /**
   * Indicates the callback of connection
   *
   * @typedef { _ConnectOptions }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  export type ConnectOptions = _ConnectOptions;

  /**
   * The context of UI extension. It allows access to
   * UIExtension-specific resources.
   *
   * @typedef { _UIExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  export type UIExtensionContext = _UIExtensionContext.default;

  /**
   * The context of UI extension. It allows access to
   * UIExtension-specific resources.
   *
   * @typedef { _UIExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIExtensionContext = _UIExtensionContext;

  /**
   * The context of auto fill extension. It allows access to
   * AutoFillExtension-specific resources.
   *
   * @typedef { _AutoFillExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext.default;

  /**
   * The context of auto fill extension. It allows access to
   * AutoFillExtension-specific resources.
   *
   * @typedef { _AutoFillExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillExtensionContext = _AutoFillExtensionContext;

  /**
   * The function Called when some error occurred except disconnected from UIAbility or UIExtensionAbility
   *
   * @typedef { _AbilityStartCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type AbilityStartCallback = _AbilityStartCallback;

  /**
   * The class of auto startup info.
   *
   * @typedef { _AutoStartupInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export type AutoStartupInfo = _AutoStartupInfo;

  /**
   * The class of auto startup callback.
   *
   * @typedef { _AutoStartupCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export type AutoStartupCallback = _AutoStartupCallback;

  /**
   * The context of vpn extension. It allows access to
   * vpnExtension-specific resources.
   * The class of auto startup info.
   *
   * @typedef { _VpnExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type VpnExtensionContext = _VpnExtensionContext.default;

  /**
   * The context of an embeddable UIAbility.
   *
   * @typedef { _EmbeddableUIAbilityContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type EmbeddableUIAbilityContext = _EmbeddableUIAbilityContext.default;

  /**
   * The context of an photo editor extension ability.
   *
   * @typedef { _PhotoEditorExtensionContext.default }
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PhotoEditorExtensionContext = _PhotoEditorExtensionContext.default;

  /**
   * The context of an photo editor extension ability.
   *
   * @typedef { _PhotoEditorExtensionContext }
   * @syscap SystemCapability.Ability.AppExtension.PhotoEditorExtension
   * @stagemodelonly
   * @since 23 static
   */
  export type PhotoEditorExtensionContext = _PhotoEditorExtensionContext;

  /**
   * The context of a UI service ability.
   *
   * @typedef { _UIServiceExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext.default;

  /**
   * The context of a UI service ability.
   *
   * @typedef { _UIServiceExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionContext = _UIServiceExtensionContext;

  /**
   * The UI service proxy.
   *
   * @typedef { _UIServiceProxy.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceProxy = _UIServiceProxy.default;

  /**
   * The UI service proxy.
   *
   * @typedef { _UIServiceProxy }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceProxy = _UIServiceProxy;

  /**
   * The UI service host proxy.
   *
   * @typedef { _UIServiceHostProxy.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  export type UIServiceHostProxy = _UIServiceHostProxy.default;

  /**
   * The UI service host proxy.
   *
   * @typedef { _UIServiceHostProxy }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceHostProxy = _UIServiceHostProxy;

  /**
   * The UI service extension connect callback.
   *
   * @typedef { _UIServiceExtensionConnectCallback.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback.default;

  /**
   * The UI service extension connect callback.
   *
   * @typedef { _UIServiceExtensionConnectCallback}
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback;

  /**
   * The context of app service extension. It allows access to
   * appServiceExtension-specific resources.
   *
   * @typedef { _AppServiceExtensionContext.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext.default;

  /**
   * The context of app service extension. It allows access to
   * appServiceExtension-specific resources.
   *
   * @typedef { _AppServiceExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  export type AppServiceExtensionContext = _AppServiceExtensionContext;

  /**
   * The AgentCard information describes the basic information and capabilities provided by an Agent.
   *
   * @typedef { _AgentCard }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCard = _AgentCard;

  /**
   * The Provider in an AgentCard refers to the organization or platform that issues and
   * manages the agent's credentials.
   *
   * @typedef { _AgentProvider }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentProvider = _AgentProvider;

  /**
   * Capabilities in an AgentCard represent the specific skills, services, and functions that
   * an agent can perform or provide within the system.
   *
   * @typedef { _AgentCapabilities }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentCapabilities = _AgentCapabilities;

  /**
   * Skills in an AgentCard represent the specific abilities, expertise, and proficiencies that an
   * agent possesses for performing tasks or solving problems.
   *
   * @typedef { _AgentSkill }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentSkill = _AgentSkill;

  /**
   * Application-related information for the agent.
   *
   * @typedef { _AgentAppInfo }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentAppInfo = _AgentAppInfo;

  /**
   * The AgentHostProxy is a proxy object for the client connected to the Agent, through which it
   * can communicate with the Agent's connection counterpart.
   *
   * @typedef { _AgentHostProxy }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentHostProxy = _AgentHostProxy;

  /**
   * Represents the AgentProxy type.
   *
   * @typedef { _AgentProxy }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentProxy = _AgentProxy;

  /**
   * Represents the AgentExtensionConnectCallback type.
   *
   * @typedef { _AgentExtensionConnectCallback }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type AgentExtensionConnectCallback = _AgentExtensionConnectCallback;

  /**
   * The context of the agent service ability.
   *
   * @typedef { _AgentExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  export type AgentExtensionContext = _AgentExtensionContext;
}

export default common;
