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

/*** if arkts dynamic */
import type { AutoFillType } from './AutoFillType';
import type AutoFillRect from './AutoFillRect';
/*** endif */
/*** if arkts static */
import { AutoFillType } from './AutoFillType';
import AutoFillRect from './AutoFillRect';
/*** endif */

/**
 * Page node info for automatic filling.
 *
 * @interface PageNodeInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export default interface PageNodeInfo {
  /**
   * The id of page node.
   *
   * @type { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  id: int;

  /**
   * The depth of page node.
   *
   * @type { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  depth: int;

  /**
   * The auto fill type of page node.
   *
   * @type { AutoFillType }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  autoFillType: AutoFillType;

  /**
   * The tag of page node.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  tag: string;

  /**
   * The value of page node.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  value: string;

  /**
   * The placeholder of page node.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  placeholder?: string;

  /**
   * The password rules of page node.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  passwordRules?: string;

  /**
   * The auto fill flag of page node.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  enableAutoFill: boolean;

  /**
   * The rect of page node.
   *
   * @type { AutoFillRect }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  rect: AutoFillRect;

  /**
   * Is the page node in the focus.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isFocus: boolean;

  /**
   * The metadata of a node.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  metadata?: string;
}