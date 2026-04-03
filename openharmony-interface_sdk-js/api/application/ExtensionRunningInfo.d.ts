/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { ElementName } from '../bundleManager/ElementName';
import bundle from '../@ohos.bundle.bundleManager';

/**
 * The class of an extension running information.
 *
 * @typedef ExtensionRunningInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionRunningInfo {
  /**
   * @type { ElementName }
   * @default Indicates the extension of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  extension: ElementName;

  /**
   * @type { int }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * @type { int }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * @type { long }
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  startTime: long;

  /**
   * @type { Array<String> }
   * @default All package names under the current process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  clientPackage: Array<String>;

  /**
   * @type { bundle.ExtensionAbilityType }
   * @default Enumerates types of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type: bundle.ExtensionAbilityType;
}
