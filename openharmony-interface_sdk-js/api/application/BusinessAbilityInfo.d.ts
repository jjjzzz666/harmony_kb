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
 * @kit AbilityKit
 */

import type { ApplicationInfo } from '../bundleManager/ApplicationInfo';
import type businessAbilityRouter from '../@ohos.app.businessAbilityRouter';

/**
 * Contains basic business ability information.
 *
 * @typedef BusinessAbilityInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface BusinessAbilityInfo {
  /**
   * Indicates the name of the bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Indicates the name of the module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Indicates the name of the business ability info
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Indicates the label id of the business ability info
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly labelId: int;

  /**
   * Indicates the description id of the business ability info
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly descriptionId: int;

  /**
   * Indicates the icon id of the business ability info
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly iconId: int;

  /**
   * Enumerates types of the business ability info
   *
   * @type { businessAbilityRouter.BusinessType }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly businessType: businessAbilityRouter.BusinessType;

  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo;
}