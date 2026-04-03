'use static'
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

import insightIntent from './@ohos.app.ability.insightIntent';

/**
 * Enum definition of the paramCategory {@link #LinkIntentParamMapping#paramCategory},
 * paramCategory is an attribute of LinkIntentParamMapping and
 * used in InsightIntentLink {@link #InsightIntentLink}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum LinkParamCategory {
  /**
   * The parameter will added to the end of link uri.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LINK = 'link',

  /**
   * The parameter will transferred to the application as parameters of want.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WANT = 'want'
}

/**
 * Declare interface of LinkIntentParamMapping.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LinkIntentParamMapping {
  /**
   * The parameter name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramName: string;

  /**
   * The parameter mapping name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramMappingName?: string;

  /**
   * The parameter category.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramCategory?: LinkParamCategory;
}
/**
 * Define InsightIntentLink Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentLink {
  /**
   * The intent name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * The intent domain.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * The intent version.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * The display name of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * The display description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * The schema of intent, indicates a standard intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * The icon of intent, the string type indicates an online resource or a local resource.
   * For example, "$r('app.media.startIcon')".
   * The value of Resource type must be a literal.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * The large language model description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';

  /**
   * The search keywords of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * The parameters of intent.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * The type definition of the result returned by intent call.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * The uri of a link.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  uri: string;

  /**
   * The parameters mapping of a link.
   * The value is the name of a variable of type LinkIntentParamMapping[].
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramMappings: string = '';
}

/**
 * Define InsightIntentPage Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentPage {
  /**
   * The intent name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * The intent domain.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * The intent version.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * The display name of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * The display description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * The schema of intent, indicates a standard intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * The icon of intent, the string type indicates an online resource or a local resource.
   * For example, "$r('app.media.startIcon')".
   * The value of Resource type must be a literal.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * The large language model description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * The search keywords of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * The parameters of intent.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * The type definition of the result returned by intent call.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * The uiAbility name bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  uiAbility: string = '';

  /**
   * The page path bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  pagePath: string;

  /**
   * The navigation Id bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  navigationId: string = '';

  /**
   * The navigation destination name bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  navDestinationName: string = '';
}
/**
 * Define InsightIntentFunction Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentFunction { }

/**
 * Define InsightIntentFunctionMethod Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentFunctionMethod {
  /**
   * The intent name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * The intent domain.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * The intent version.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * The display name of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * The display description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * The schema of intent, indicates a standard intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';
  /**
   * The icon of intent, the string type indicates an online resource or a local resource.
   * For example, "$r('app.media.startIcon')".
   * The value of Resource type must be a literal.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * The large language model description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';

  /**
   * The search keywords of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * The parameters of intent.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * The type definition of the result returned by intent call.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';
}
/**
 * Define InsightIntentForm Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentForm {
  /**
   * The intent name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * The intent domain.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * The intent version.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * The display name of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * The display description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * The schema of intent, indicates a standard intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * The icon of intent, the string type indicates an online resource or a local resource.
   * For example, "$r('app.media.startIcon')".
   * The value of Resource type must be a literal.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * The large language model description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * The search keywords of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * The parameters of intent.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * The type definition of the result returned by intent call.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * The form name bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  formName: string;
}
/**
 * Define InsightIntentEntry Annotation.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentEntry {
  /**
   * The intent name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * The intent domain.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * The intent version.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * The display name of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * The display description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * The schema of intent, indicates a standard intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * The icon of intent, the string type indicates an online resource or a local resource.
   * For example, "$r('app.media.startIcon')".
   * The value of Resource type must be a literal.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * The large language model description of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * The search keywords of intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * The parameters of intent.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * The type definition of the result returned by intent call.
   * The value is the name of a variable of type Record<string, RecordData>.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * The ability name bound to the intent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  abilityName: string;

  /**
   * The execute mode of the intent.
   * For UIAbility, the parameter can be set to insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND or
   * insightIntent.ExecuteMode.UI_ABILITY_BACKGROUND or both of them.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  executeMode: insightIntent.ExecuteMode[];
}
