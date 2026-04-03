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

import type { AsyncCallback } from './@ohos.base';
import type { ChildProcessArgs } from './@ohos.app.ability.ChildProcessArgs';
import type { ChildProcessOptions } from './@ohos.app.ability.ChildProcessOptions';

/**
 * This module provides the capability to start and manage child process.
 *
 * @namespace childProcessManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace childProcessManager {

  /**
   * Enum for the process start mode.
   * 
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export const enum StartMode {

    /**
     * Fork child process by application self.
     * Binder IPC can not be used in child process in this mode, may cause crash.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SELF_FORK = 0,

    /**
     * Fork child process by app spawn.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    APP_SPAWN_FORK = 1,
  }

  /**
   * Start child process with the given src entry and start mode.
   *
   * @param { string } srcEntry - Child process source file entrance to be started.
   * @param { StartMode } startMode - Child process start mode.
   * @returns { Promise<int> } Returns the started child process pid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode): Promise<int>;

  /**
   * Start child process with the given src entry and mode.
   *
   * @param { string } srcEntry - Child process source file entrance to be started.
   * @param { StartMode } startMode - Child process start mode.
   * @param { AsyncCallback<int> } callback - The callback of startChildProcess.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode, callback: AsyncCallback<int>): void;

  /** 
   * Start child process with the given args and options.
   *
   * @param { string } srcEntry - Indicates child process source file entrance to be started.
   * @param { ChildProcessArgs } args - Indicates args to pass to child process.
   * @param { ChildProcessOptions } [options] - Indicates options for starting child process.
   * @returns { Promise<number> } Returns the started child process pid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12
   */
  /** 
   * Start child process with the given args and options.
   *
   * @param { string } srcEntry - Indicates child process source file entrance to be started.
   * @param { ChildProcessArgs } args - Indicates args to pass to child process.
   * @param { ChildProcessOptions } [options] - Indicates options for starting child process.
   * @returns { Promise<int> } Returns the started child process pid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function startArkChildProcess(srcEntry: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;

  /** 
   * Start native child process with the given args and options.
   *
   * @param { string } entryPoint - Indicates entry point of child process, consisting of library and entry function, such as "libEntry.so:Main".
   * @param { ChildProcessArgs } args - Indicates args to pass to child process.
   * @param { ChildProcessOptions } [options] - Indicates options for starting child process.
   * @returns { Promise<int> } Returns the started child process pid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function startNativeChildProcess(entryPoint: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;

}

export default childProcessManager;