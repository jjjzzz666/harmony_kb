/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file Define capabilities to access app domain verification info.
 * @kit AbilityKit
 */

/**
 * This module provides app domain verification info.
 *
 * @namespace appDomainVerify
 * @syscap SystemCapability.BundleManager.AppDomainVerify
 * @systemapi
 * @stagemodelonly
 * @since 13 dynamic
 * @since 23 static
 */
declare namespace appDomainVerify {


  /**
   * query domains verify associated with bundleName.
   * @permission ohos.permission.GET_APP_DOMAIN_BUNDLE_INFO
   * @param { string } bundleName - app bundleName.
   * @returns { string[] } Result domains.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API accessed by non-system app.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 29900001 - Internal error.
   * @syscap SystemCapability.BundleManager.AppDomainVerify
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function queryAssociatedDomains(bundleName: string): string[];

  /**
   * query bundleNames associated with domain.
   * @permission ohos.permission.GET_APP_DOMAIN_BUNDLE_INFO
   * @param { string } domain - Parameters related to the function.
   * @returns { string[] } Result bundleNames.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API accessed by non-system app.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 29900001 - Internal error.
   * @syscap SystemCapability.BundleManager.AppDomainVerify
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function queryAssociatedBundleNames(domain: string): string[];
}

export default appDomainVerify;

