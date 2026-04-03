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

/**
 * Indicates the profile file information of a bundle.
 *
 * @typedef AppProvisionInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface AppProvisionInfo {
  /**
   * Indicates the version code of the profile file.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Indicates the version name of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * Indicates the uuid of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uuid: string;

  /**
   * Indicates the type of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * Indicates the app distribution type of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * Indicates the validity of the profile file.
   *
   * @type { Validity }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly validity: Validity;

  /**
   * Indicates the developer id of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly developerId: string;

  /**
   * Indicates the distribution or development certificate of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly certificate: string;

  /**
   * Indicates the apl of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly apl: string;

  /**
   * Indicates the issuer of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly issuer: string;

  /**
   * Globally unique identifier of an application, which is allocated by the cloud.
   * AppIdentifier does not change along the application lifecycle, including version updates, certificate changes,
   * public and private key changes, and application transfer.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly appIdentifier: string;

  /**
   * Indicates the organization information of the profile file.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly organization: string;

  /**
   * Indicates the bundleName.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundleName?: string;
}

/**
 * The validity of the profile file.
 *
 * @typedef Validity
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface Validity {
  /**
   * Indicates the earliest validity of the profile file.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notBefore: long;

  /**
   * Indicates the latest validity of the profile file.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notAfter: long;
}
