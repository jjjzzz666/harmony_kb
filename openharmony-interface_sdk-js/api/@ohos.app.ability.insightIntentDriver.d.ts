/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
import wantConstant from './@ohos.app.ability.wantConstant';
import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * Insight intent driver.
 *
 * @namespace insightIntentDriver
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntentDriver {
  /**
   * Param when execute insight intent.
   *
   * @typedef ExecuteParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteParam {
    /**
     * Indicates the bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Indicates the module name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Indicates the ability name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Indicates the insight intent name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    insightIntentName: string;

    /**
     * Indicates the insight intent param.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     */
    insightIntentParam: Record<string, Object>;

    /**
     * Indicates the insight intent param.
     *
     * @type { Record<string, RecordData> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 23 static
     */
    insightIntentParam: Record<string, RecordData>;

    /**
     * Indicates the execute mode.
     *
     * @type { insightIntent.ExecuteMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    executeMode: insightIntent.ExecuteMode;

    /**
     * Indicates the display Id, only works when executeMode is UIAbility foreground.
     *
     * @type { ?long }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * Indicates the URIs will be authorized to the insight intent executor.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * Indicates the URIs read and write permissions which consistent with {@link Want#flags},
     * flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;

    /**
     * Indicates the target user ID.
     * 
     * If the user ID of the caller application is different from the target user ID, you need to apply for permission:
     *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
     * 
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;
  }

  /**
   * The optional options used as filters to get insight intent infomation.
   *
   * @typedef InsightIntentInfoFilter
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface InsightIntentInfoFilter {  
    /**
     * Indicates the flags of get insight intent information.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentFlags: int;

    /**
     * Indicates the bundle name.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;

    /**
     * Indicates the module name.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    moduleName?: string;

    /**
     * Indicates the intent name.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentName?: string;

    /**
     * Indicates the target user ID.
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;    
  }

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @param { AsyncCallback<insightIntent.ExecuteResult> } callback - The callback of executeIntent.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam, callback: AsyncCallback<insightIntent.ExecuteResult>): void;

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @returns { Promise<insightIntent.ExecuteResult> } Returns the execute result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam): Promise<insightIntent.ExecuteResult>;

  /**
   * Enum for intent type.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum InsightIntentType {
    /**
     * The InsightIntent decorator type.
     * {@link InsightIntentDecorator#InsightIntentLink}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK = '@InsightIntentLink',

    /**
     * Page insight intent.
     * {@link InsightIntentDecorator#InsightIntentPage}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAGE = '@InsightIntentPage',

    /**
     * Entry insight intent.
     * {@link InsightIntentDecorator#InsightIntentEntry}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ENTRY = '@InsightIntentEntry',

    /**
     * Function insight intent.
     * {@link InsightIntentDecorator#InsightIntentFunctionMethod}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FUNCTION = '@InsightIntentFunctionMethod',

    /**
     * Form insight intent.
     * {@link InsightIntentDecorator#InsightIntentForm}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FORM = '@InsightIntentForm',
  }

  /**
   * Enum for execute mode when develop type is {@link DevelopType#CONFIGURATION}.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum ExecuteModeForConfiguration {  
    /**
     * Foreground execute mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FOREGROUND = 0,

    /**
     * Background execute mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BACKGROUND = 1
  }

  /**
   * The UIAbility information of intent when develop type is {@link DevelopType#CONFIGURATION}.
   *
   * @interface UIAbilityIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIAbilityIntentInfo {  
    /**
     * The ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
    /**
     * The execute mode.
     *
     * @type { ExecuteModeForConfiguration[] }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly executeMode: ExecuteModeForConfiguration[];
  }

  /**
   * The UIExtension information of intent when develop type is {@link DevelopType#CONFIGURATION}.
   *
   * @interface UIExtensionIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIExtensionIntentInfo {  
    /**
     * The ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * The service extension information of intent when develop type is {@link DevelopType#CONFIGURATION}.
   *
   * @interface ServiceExtensionIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ServiceExtensionIntentInfo {  
    /**
     * The ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * Enum for intent develop type.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DevelopType {  
    /**
     * Develop by configuration.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    CONFIGURATION = 'configuration',

    /**
     * Develop by decorator.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DECORATOR = 'decorator'
  }

  /**
   * The sub intent information when develop type is {@link DevelopType#CONFIGURATION}..
   *
   * @interface SubIntentInfoForConfiguration
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SubIntentInfoForConfiguration {
    /**
     * The srcEntry information of intent.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly srcEntry: string;

    /**
     * The UIAbility information of intent.
     *
     * @type { ?UIAbilityIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiAbility?: UIAbilityIntentInfo;

    /**
     * The UIExtension information of intent.
     *
     * @type { ?UIExtensionIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiExtension?: UIExtensionIntentInfo;
      /**
     * The service extension information of intent.
     *
     * @type { ?ServiceExtensionIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly serviceExtension?: ServiceExtensionIntentInfo;

    /**
     * The form information of intent.
     *
     * @type { ?FormIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly form?: FormIntentInfo;

    /**
     * The inputParams information of intent.
     *
     * @type { ?Array<Record<string, Object>> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly inputParams?: Array<Record<string, Object>>;

    /**
     * The inputParams information of intent.
     *
     * @type { ?Array<Record<string, RecordData>> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly inputParams?: Array<Record<string, RecordData>>;

    /**
     * The outputParams information of intent.
     *
     * @type { ?Array<Record<string, Object>> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly outputParams?: Array<Record<string, Object>>;

    /**
     * The outputParams information of intent.
     *
     * @type { ?Array<Record<string, RecordData>> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly outputParams?: Array<Record<string, RecordData>>;

    /**
     * The entities information of intent.
     *
     * @type { ?Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly entities?: Record<string, Object>;

    /**
     * The entities information of intent.
     *
     * @type { ?Record<string, RecordData> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly entities?: Record<string, RecordData>;
  }
  /**
   * The insight intent information.
   *
   * @interface InsightIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface InsightIntentInfo {
    /**
     * The bundle name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * The module name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * The intent name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentName: string;

    /**
     * The intent domain.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly domain: string;

    /**
     * The intent version.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentVersion: string;

    /**
     * The intent display name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * The intent display description.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayDescription: string;

    /**
     * The intent schema.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly schema: string;

    /**
     * The intent icon.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly icon: string;

    /**
     * The intent large language model description.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly llmDescription: string;

    /**
     * The intent keywords.
     *
     * @type { string[] }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly keywords: string[];

    /**
     * The intent type.
     *
     * @type { InsightIntentType }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentType: InsightIntentType;

    /**
     * The sub intent information.
     * If the intentType is "@InsightIntentLink", subIntentInfo is a LinkIntentInfo.
     * If the intentType is "@InsightIntentPage", subIntentInfo is a PageIntentInfo.
     * If the intentType is "@InsightIntentFunctionMethod", subIntentInfo is a FunctionIntentInfo.
     * If the intentType is "@InsightIntentForm", subIntentInfo is a FormIntentInfo.
     * If the intentType is "@InsightIntentEntry", subIntentInfo is a EntryIntentInfo.
     *
     * @type { LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly subIntentInfo: LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo;

    /**
     * The insight intent parameters.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The insight intent parameters.
     *
     * @type { Record<string, RecordData> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * The type definition of the result returned by intent call.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly result: Record<string, Object>;

    /**
     * The type definition of the result returned by intent call.
     *
     * @type { Record<string, RecordData> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly result: Record<string, RecordData>;

    /**
     * The entity informations.
     *
     * @type { Array<EntityInfo> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entities: Array<EntityInfo>;

    /**
     * The intent develop type.
     *
     * @type { ?DevelopType }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly developType?: DevelopType;

    /**
     * The sub intent information when develop type is {@link DevelopType#CONFIGURATION}.
     *
     * @type { ?SubIntentInfoForConfiguration }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly subIntentInfoForConfiguration?: SubIntentInfoForConfiguration;
  }

  /**
   * The link intent information.
   *
   * @interface LinkIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface LinkIntentInfo {
    /**
     * The uri.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uri: string;
  }

  /**
   * The page intent information.
   *
   * @interface PageIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface PageIntentInfo {
    /**
     * The UIAbility.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uiAbility: string;

    /**
     * The page path.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly pagePath: string;

    /**
     * The navigationId.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navigationId: string;

    /**
     * The navigation destination name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navDestinationName: string;
  }

  /**
   * The function intent information.
   *
   * @interface FunctionIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FunctionIntentInfo {}

  /**
   * The form intent information.
   *
   * @interface FormIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FormIntentInfo {
    /**
     * The form extension ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * The form name of the form extension ability.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formName: string;
  }

  /**
   * The form intent information.
   *
   * @interface EntryIntentInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntryIntentInfo {
    /**
     * The ability name.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * The execute mode.
     *
     * @type { insightIntent.ExecuteMode[] }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly executeMode: insightIntent.ExecuteMode[];
  }

  /**
   * Enum for get insight intent flag.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum GetInsightIntentFlag {
    /**
     * Get full insight intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_FULL_INSIGHT_INTENT = 0x00000001,

    /**
     * Get summary insight intent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_SUMMARY_INSIGHT_INTENT = 0x00000002,

    /**
     * Get entities info.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_ENTITY_INFO = 0x00000004
  }

  /**
   * The entity information.
   *
   * @interface EntityInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntityInfo {
    /**
     * The entity class name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly className: string;

    /**
     * The entity Id.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityId: string;

    /**
     * The entity category.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityCategory: string;

    /**
     * The parameters of intent entity.
     *
     * @type { Record<string, Object> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The parameters of intent entity.
     *
     * @type { Record<string, RecordData> }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * The entity class name of parent.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly parentClassName: string;
  }

  /**
   * Get all insight intent information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } intentFlags - The flags of get insight intent information.
   * @returns { Promise<Array<InsightIntentInfo>> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllInsightIntentInfo(intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * Get insight intent information by bundle name.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - The specified bundle name.
   * @param { int } intentFlags - The flags of get insight intent information.
   * @returns { Promise<Array<InsightIntentInfo>> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByBundleName(bundleName: string, intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * Get insight intent information by intent name.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - The specified bundle name.
   * @param { string } moduleName - The specified module name.
   * @param { string } intentName - The specified intent name.
   * @param { int } intentFlags - The flags of get insight intent information.
   * @returns { Promise<InsightIntentInfo> } Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module. 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: int): Promise<InsightIntentInfo>;

  /**
   * Get insight intent information by filter.
   *
   * if the caller is cross-user, you need to apply for permission:
   *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
   * 
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { InsightIntentInfoFilter } filter - Indicates the requirements that the insightIntentInfo belong
   *     to have to meet.
   * @returns { Promise<Array<InsightIntentInfo>> } - Returns the insight intent information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getInsightIntentInfoByFilter(filter: InsightIntentInfoFilter): Promise<Array<InsightIntentInfo>>;
}

export default insightIntentDriver;
