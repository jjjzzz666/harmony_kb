/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { BusinessError } from './@ohos.base';

/**
 * Defines a onCompleted function.
 *
 * @typedef {function} OnCompletedFn
 * @param { BusinessError<void> } error - Indicates the error during execution.
 * @syscap SystemCapability.Ability.AppStartup
 * @since 23 staticonly
 */
type OnCompletedFn = (error: BusinessError<void>) => void;

/**
 * The listener for running startup tasks, which will be called when all tasks complete.
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class StartupListener {
  /**
   * Called when all startup tasks complete.
   *
   * @param { BusinessError<void> } error - Indicates the error during execution.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  onCompleted?(error: BusinessError<void>): void;

  /**
   * Called when all startup tasks complete.
   *
   * @type { ?OnCompletedFn }
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  onCompleted?: OnCompletedFn;
}

export default StartupListener;
