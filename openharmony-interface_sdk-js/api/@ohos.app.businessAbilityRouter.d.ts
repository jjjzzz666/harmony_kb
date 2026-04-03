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

import type { AsyncCallback } from './@ohos.base';
/*** if arkts dynamic */
import type * as _BusinessAbilityInfo from './application/BusinessAbilityInfo';
/*** endif */
/*** if arkts static */
import { BusinessAbilityInfo as _BusinessAbilityInfo } from './application/BusinessAbilityInfo';
/*** endif */

/**
 * This module is used to obtain business ability information of various applications installed on the current device.
 *
 * @namespace businessAbilityRouter
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace businessAbilityRouter {
  /**
   * This enumeration value is used to identify various types of business ability info
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BusinessType {
    /**
     * Indicates business ability info with type of share
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 0,

    /**
     * Indicates business ability info with type of unspecified
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 255
  }

  /**
   * This filter value is used to filter business ability info
   *
   * @typedef BusinessAbilityFilter
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface BusinessAbilityFilter {
    /**
     * Indicates the type of business ability info
     *
     * @type { BusinessType }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    businessType: BusinessType;

    /**
     * Indicates the supported mime type of business ability info
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    mimeType?: string;

    /**
     * Indicates the supported uri of business ability info
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uri?: string;
  }

  /**
   * Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required
   * for cross user access.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - Indicates the filter containing the business ability info to be queried.
   * @param { AsyncCallback<Array<BusinessAbilityInfo>> } callback - The callback of querying business ability info
   *                                                                 result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryBusinessAbilityInfo(
    filter: BusinessAbilityFilter,
    callback: AsyncCallback<Array<BusinessAbilityInfo>>
  ): void;

  /**
   * Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required
   * for cross user access.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - Indicates the filter containing the business ability info to be queried.
   * @returns { Promise<Array<BusinessAbilityInfo>> } Returns a list of business ability info objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryBusinessAbilityInfo(filter: BusinessAbilityFilter): Promise<Array<BusinessAbilityInfo>>;

  /**
   * Obtains business ability info.
   *
   * @typedef { _BusinessAbilityInfo.BusinessAbilityInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type BusinessAbilityInfo = _BusinessAbilityInfo.BusinessAbilityInfo;

  /**
   * Obtains business ability info.
   *
   * @typedef { _BusinessAbilityInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type BusinessAbilityInfo = _BusinessAbilityInfo;
}

export default businessAbilityRouter;
