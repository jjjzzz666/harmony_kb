/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * A object that records the result of shell command executes.
 *
 * @typedef ShellCmdResult
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 8
 */
/**
 * A object that records the result of shell command executes.
 *
 * @typedef ShellCmdResult
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export interface ShellCmdResult {
  /**
   * the cmd standard result.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   */
  /**
   * the cmd standard result.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  stdResult: string;

  /**
   * shell cmd exec result.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 8
   */
  /**
   * shell cmd exec result.
   *
   * @type { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  exitCode: int;
}

/*** if arkts dynamic */
export default ShellCmdResult;
/*** endif */
