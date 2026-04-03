/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { ProcessInformation as _ProcessInformation } from './application/ProcessInformation';
import bundleManager from './@ohos.bundle.bundleManager';
import { RunningMultiAppInfo as _RunningMultiAppInfo } from './application/RunningMultiAppInfo';
/*** if arkts dynamic */
import * as _ApplicationStateObserver from './application/ApplicationStateObserver';
import type * as _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import * as _AbilityStateData from './application/AbilityStateData';
import * as _AppStateData from './application/AppStateData';
import type * as _ProcessData from './application/ProcessData';
import * as _AbilityFirstFrameStateObserver from './application/AbilityFirstFrameStateObserver';
import * as _AbilityFirstFrameStateData from './application/AbilityFirstFrameStateData';
/*** endif */
/*** if arkts static */
import _ApplicationStateObserver from './application/ApplicationStateObserver';
import _AbilityStateData from './application/AbilityStateData';
import _AppStateData from './application/AppStateData';
import _ProcessData from './application/ProcessData';
import _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import { AbilityFirstFrameStateObserver as _AbilityFirstFrameStateObserver } from './application/AbilityFirstFrameStateObserver';
import { AbilityFirstFrameStateData as _AbilityFirstFrameStateData } from './application/AbilityFirstFrameStateData';
/*** endif */

/**
 * This module provides the function of app manager service.
 *
 * @namespace appManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * This module provides the function of app manager service.
 *
 * @namespace appManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace appManager {
  /**
   * Enum for the application state
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationState {
    /**
     * The state in which the application is being created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_CREATE,

    /**
     * The state that the application is in when it switches to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND,

    /**
     * The state in which the application is in focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_ACTIVE,

    /**
     * The state in which the application is invisible in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND,

    /**
     * The state that the application is in when it is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_DESTROY
  }

  /**
   * Enum for the process state
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10
   */
  /**
   * Enum for the process state
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ProcessState {
    /**
     * The state that the process is in when it is being created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * The state that the process is in when it is being created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    STATE_CREATE,

    /**
     * The state in which the process is in when it switches to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * The state in which the process is in when it switches to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND,

    /**
     * The state in which the process is in focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * The state in which the process is in focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    STATE_ACTIVE,

    /**
     * The state in which a process is invisible in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * The state in which a process is invisible in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND,

    /**
     * The state that the process is in when it is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * The state that the process is in when it is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    STATE_DESTROY
  }

  /**
   * Enum for the preload mode
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PreloadMode {
    /**
     * Preload application when press the app icon down.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESS_DOWN
  }

  /**
   * Indicates the type of keep-alive apps.
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
    export enum KeepAliveAppType {
      /**
       * All apps.
       *
       * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      ALL = 0,
  
      /**
       * 3rd party app.
       *
       * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      THIRD_PARTY = 1,
  
      /**
       * System app.
       *
       * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      SYSTEM = 2
    }
  
    /**
     * Setter who sets the keep-alive flag for a bundle.
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    export enum KeepAliveSetter {
      /**
       * Indicates the bundle is set keep-alive by system.
       *
       * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      SYSTEM = 0,
  
      /**
       * Indicates the bundle is set keep-alive by user.
       *
       * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      USER = 1
    }
  
    /**
     * The class of keep-alive bundle information.
     *
     * @typedef KeepAliveBundleInfo
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    export interface KeepAliveBundleInfo {
      /**
       * The name of the bundle.
       *
       * @type { string }
       * @syscap SystemCapability.Ability.AbilityRuntime.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      bundleName: string;
  
      /**
       * App type.
       *
       * @type { KeepAliveAppType }
       * @syscap SystemCapability.Ability.AbilityRuntime.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      type: KeepAliveAppType;
  
      /**
       * The setter who sets the keep-alive flag.
       *
       * @type { KeepAliveSetter }
       * @syscap SystemCapability.Ability.AbilityRuntime.Core
       * @systemapi
       * @since 14 dynamic
       * @since 23 static
       */
      setter: KeepAliveSetter;

      /**
       * The user id of setter.
       *
       * @type { ?int }
       * @syscap SystemCapability.Ability.AbilityRuntime.Core
       * @systemapi
       * @since 20 dynamic
       * @since 23 static
       */
      setterUserId?: int;

      /**
       * Weather allow user to cancel keep-alive status.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Ability.AbilityRuntime.Core
       * @systemapi
       * @since 20 dynamic
       * @since 23 static
       */
      allowUserToCancel?: boolean;
    }
  
  /**
   * Bundle type filter flags.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterBundleType {
    /**
    * Indicates the app bundle type.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    APP = 1 << 0,

    /**
    * Indicates the atomic service bundle type.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ATOMIC_SERVICE = 1 << 1
  }

  /**
   * Application state filter flags.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAppStateType {
    /**
    * Indicates the application creation state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    CREATE = 1 << 0,

    /**
    * Indicates the application foreground state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    FOREGROUND = 1 << 1,

    /**
    * Indicates the application background state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    BACKGROUND = 1 << 2,

    /**
    * Indicates the application destruction state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    DESTROY = 1 << 3
  }

  /**
   * Process state filter flags.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterProcessStateType {
    /**
    * Indicates the process creation state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    CREATE = 1 << 0,

    /**
    * Indicates the process foreground state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    FOREGROUND = 1 << 1,

    /**
    * Indicates the process background state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    BACKGROUND = 1 << 2,

    /**
    * Indicates the process destruction state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    DESTROY = 1 << 3
  }

  /**
   * Ability state filter flags.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAbilityStateType {
    /**
    * Indicates the ability creation state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    CREATE = 1 << 0,

    /**
    * Indicates the ability foreground state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    FOREGROUND = 1 << 1,

    /**
    * Indicates the ability background state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    BACKGROUND = 1 << 2,

    /**
    * Indicates the ability destruction state.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    DESTROY = 1 << 3
  }

  /**
   * Callback type filter flags.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterCallback {
    /**
    * Indicates the foreground application changed callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_FOREGROUND_APPLICATION_CHANGED = 1 << 0,

    /**
    * Indicates the ability state changed callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_ABILITY_STATE_CHANGED = 1 << 1,

    /**
    * Indicates the process created callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_PROCESS_CREATED = 1 << 2,

    /**
    * Indicates the process died callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_PROCESS_DIED = 1 << 3,

    /**
    * Indicates the process state changed callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_PROCESS_STATE_CHANGED = 1 << 4,

    /**
    * Indicates the application started callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_APP_STARTED = 1 << 5,

    /**
    * Indicates the application stopped callback.
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    ON_APP_STOPPED = 1 << 6
  }

  /**
   * Application state filter configuration.
   *
   * @typedef AppStateFilter
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface AppStateFilter {
    /**
    * Bundle type filter flags, bitwise OR combination of {@link FilterBundleType}.
    * If unset, all bundle types are monitored.
    *
    * @type { ?int }
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    bundleTypes?: int;

    /**
    * Application state filter flags, bitwise OR combination of {@link FilterAppStateType}.
    * If unset, all application states are monitored.
    *
    * @type { ?int }
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    appStateTypes?: int;

    /**
    * Process state filter flags, bitwise OR combination of {@link FilterProcessStateType}.
    * If unset, all process states are monitored.
    *
    * @type { ?int }
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    processStateTypes?: int;

    /**
    * Ability state filter flags, bitwise OR combination of {@link FilterAbilityStateType}.
    * If unset, all ability states are monitored.
    *
    * @type { ?int }
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    abilityStateTypes?: int;

    /**
    * Callback type filter flags, bitwise OR combination of {@link FilterCallback}.
    * If unset, all callback types are monitored.
    *
    * @type { ?int }
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi
    * @since 21 dynamic
    * @since 23 static
    */
    callbacks?: int;
  }
  
  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - applicationState.
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - applicationState.
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { Array<string> } bundleNameList - The list of bundleName. The max length is 128.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { Array<string> } bundleNameList - The list of bundleName. The max length is 128.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * Register application state observer with filter.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - applicationState.
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { AppStateFilter } filter - Filter configuration for targeted monitoring.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * Register application state observer with filter.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { AppStateFilter } filter - Filter configuration for targeted monitoring.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * Register app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - app foreground or background state.
   * @param { AppForegroundStateObserver } observer - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'appForegroundState', observer: AppForegroundStateObserver): void;

  /**
   * Register app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } observer - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAppForegroundStateChange(observer: AppForegroundStateObserver): void;

  /**
   * Register ability first frame state observe.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - The ability first frame drawing state.
   * @param { AbilityFirstFrameStateObserver } observer - The ability first frame state observer.
   * @param { string } [bundleName] - The target bundle name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * Register ability first frame state observe.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } observer - The ability first frame state observer.
   * @param { string } [bundleName] - The target bundle name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAbilityFirstFrameStateChange(observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - applicationState.
   * @param { int } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 15 dynamic
   */
  function off(type: 'applicationState', observerId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - applicationState.
   * @param { int } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function off(type: 'applicationState', observerId: int): Promise<void>;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int): Promise<void>;

  /**
   * Unregister app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - app foreground or background state.
   * @param { AppForegroundStateObserver } [observer] - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'appForegroundState', observer?: AppForegroundStateObserver): void;

  /**
   * Unregister app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } observer - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAppForegroundStateChange(observer?: AppForegroundStateObserver): void;

  /**
   * Unregister ability first frame state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - The ability first frame drawing state.
   * @param { AbilityFirstFrameStateObserver } [observer] - The ability first frame state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'abilityFirstFrameState', observer?: AbilityFirstFrameStateObserver): void;

  /**
   * Unregister ability first frame state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } observer - The ability first frame state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAbilityFirstFrameStateChange(observer?: AbilityFirstFrameStateObserver): void;

  /**
   * getForegroundApplications.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AppStateData>> } callback - The callback is used to return the list of AppStateData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;

  /**
   * getForegroundApplications.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AppStateData>> } Returns the list of AppStateData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(): Promise<Array<AppStateData>>;

  /**
   * Kill process with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - The process bundle name.
   * @param { number } accountId - The account id.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9
   */
  /**
   * Kill process with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - The process bundle name.
   * @param { int } accountId - The account id.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int): Promise<void>;

  /**
   * Kill process with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - The process bundle name.
   * @param { int } accountId - The account id.
   * @param { boolean } clearPageStack - The flag that indicates whether the page stack need to be cleared.
   * @param { int } [appIndex] - The application index.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, clearPageStack: boolean, appIndex?: int):
    Promise<void>;

  /**
   * Kill process with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - The process bundle name.
   * @param { number } accountId - The account id.
   * @param { AsyncCallback<void> } callback - The callback of killProcessWithAccount.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9
   */
  /**
   * Kill process with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - The process bundle name.
   * @param { int } accountId - The account id.
   * @param { AsyncCallback<void> } callback - The callback of killProcessWithAccount.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * Is user running in stability test.
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return true if user is running stability test.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Is user running in stability test.
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return true if user is running stability test.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;

  /**
   * Is user running in stability test.
   *
   * @returns { Promise<boolean> } Returns true if user is running stability test.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Is user running in stability test.
   *
   * @returns { Promise<boolean> } Returns true if user is running stability test.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(): Promise<boolean>;

  /**
   * Kill processes by bundle name
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - bundle name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9
   */
  /**
   * Kill processes by bundle name
   *
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - bundle name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string): Promise<void>;

  /**
   * Kill processes by bundle name
   *
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - bundle name.
   * @param { boolean } clearPageStack - The flag that indicates whether the page stack need to be cleared.
   * @param { int } [appIndex] - The index of clone app.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, clearPageStack: boolean, appIndex?: int): Promise<void>;

  /**
   * Kill processes by bundle name
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - bundle name.
   * @param { AsyncCallback<void> } callback - The callback of killProcessesByBundleName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9
   */
  /**
   * Kill processes by bundle name
   *
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - bundle name.
   * @param { AsyncCallback<void> } callback - The callback of killProcessesByBundleName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Clear up application data by bundle name
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - bundle name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string): Promise<void>;

  /**
   * Clear up application data by bundle name
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - bundle name.
   * @param { AsyncCallback<void> } callback - The callback of clearUpApplicationData.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Is it a ram-constrained device
   *
   * @returns { Promise<boolean> } Returns true if the device is ram-constrained.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Is it a ram-constrained device
   *
   * @returns { Promise<boolean> } Returns true if the device is ram-constrained.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(): Promise<boolean>;

  /**
   * Is it a ram-constrained device
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return true if the device is ram-constrained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Is it a ram-constrained device
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return true if the device is ram-constrained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

  /**
   * Get the memory size of the application
   *
   * @returns { Promise<number> } Returns the application memory size.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Get the memory size of the application
   *
   * @returns { Promise<int> } Returns the application memory size.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getAppMemorySize(): Promise<int>;

  /**
   * Get the memory size of the application
   *
   * @param { AsyncCallback<number> } callback - The callback is used to return the application memory size.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Get the memory size of the application
   *
   * @param { AsyncCallback<int> } callback - The callback is used to return the application memory size.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getAppMemorySize(callback: AsyncCallback<int>): void;

  /**
   * If you apply for permission, you can obtain information about all running processes.
   * If you do not apply, you can only obtain information about the current process.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Get information about the current process.
   *
   * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(): Promise<Array<ProcessInformation>>;

  /**
   * Get running process information by bundle type.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { bundleManager.BundleType } bundleType - the bundle type of the process
   * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningProcessInformationByBundleType(
    bundleType: bundleManager.BundleType): Promise<Array<ProcessInformation>>;

  /**
   * If you apply for permission, you can obtain information about all running processes.
   * If you do not apply, you can only obtain information about the current process.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * Get information about the current process.
   *
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Check whether the shared bundle is running.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Indicates the bundle name of the shared bundle.
   * @param { long } versionCode - Indicates the version code of the shared bundle.
   * @returns { Promise<boolean> } Returns the shared bundle running result. The result is true if running, false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long): Promise<boolean>;

  /**
   * Check whether the shared bundle is running.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Indicates the bundle name of the shared bundle.
   * @param { long } versionCode - Indicates the version code of the shared bundle.
   * @param { AsyncCallback<boolean> } callback - The callback of checking the shared bundle running result.
   *                                              The result is true if running, false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains memory usage of one process by its pid.
   *
   * @param { int } pid - Indicates the pid of the process.
   * @returns { Promise<int> } Returns the memory usage of the process in KB.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int): Promise<int>;

  /**
   * Obtains memory usage of one process by its pid.
   *
   * @param { int } pid - Indicates the pid of the process.
   * @param { AsyncCallback<int> } callback - Indicates the callback of getting process memory by pid result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int, callback: AsyncCallback<int>): void;

  /**
   * Obtains the process information list of running processes that belong to a specific bundle of current user.
   *
   * @param { string } bundleName - Indicates the bundle name of the application to which the processes belong to.
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Indicates the callback of getting process information by bundleName result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Obtains the process information list of running processes that belong to a specific bundle and specific user ID.
   *
   * @param { string } bundleName - Indicates the bundle name of the application to which the processes belong to.
   * @param { int } userId - Indicates the user ID of the application to which the processes belong to.
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Indicates the callback of getting process information by bundleName result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Obtains the process information list of running processes that belong to a specific bundle of current user.
   *
   * @param { string } bundleName - Indicates the bundle name of the application to which the processes belong to.
   * @returns { Promise<Array<ProcessInformation>> } Returns a list of process information.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string): Promise<Array<ProcessInformation>>;

  /**
   * Obtains the process information list of running processes that belong to a specific bundle and specific user ID.
   *
   * @param { string } bundleName - Indicates the bundle name of the application to which the processes belong to.
   * @param { int } userId - Indicates the user ID of the application to which the processes belong to.
   * @returns { Promise<Array<ProcessInformation>> } Returns a list of process information.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int): Promise<Array<ProcessInformation>>;

  /**
   * Check whether the bundle is running.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Indicates the bundle name of the bundle.
   * @returns { Promise<boolean> } Returns the bundle running result. The result is true if running, false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string): Promise<boolean>;

  /**
   * Check whether the bundle is running.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Indicates the bundle name of the bundle.
   * @param { AsyncCallback<boolean> } callback - The callback of checking the bundle running result.
   *                                              The result is true if running, false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Preload the target application, create process and initialize resources.
   *
   * @permission ohos.permission.PRELOAD_APPLICATION
   * @param { string } bundleName - The bundle name of the application to preload.
   * @param { int } userId - Indicates the user identification.
   * @param { PreloadMode } mode - Preload application mode.
   * @param { int } [appIndex] - The index of application clone.
   * @returns { Promise<void> } Returns the result of preloadApplication.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function preloadApplication(bundleName: string, userId: int, mode: PreloadMode, appIndex?: int): Promise<void>;

  /**
   * Get all running multi app info by bundleName
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - The bundle name of the application to query.
   * @returns { Promise<RunningMultiAppInfo> } Returns the {@link RunningMultiAppInfo} for given bundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningMultiAppInfo(bundleName: string): Promise<RunningMultiAppInfo>;

  /**
  * Check whether the bundle is running.
  *
  * @permission ohos.permission.GET_RUNNING_INFO
  * @param { string } bundleName - Indicates the bundle name of the bundle.
  * @param { int } [appCloneIndex] - app clone index
  * @returns { Promise<boolean> } Returns the bundle running result. The result is true if running, false otherwise.
  * @throws { BusinessError } 201 - Permission denied.
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  * 2. Incorrect parameter types; 3. Parameter verification failed.
  * @throws { BusinessError } 16000050 - Internal error.
  * @throws { BusinessError } 16000073 - The app clone index is invalid.
  * @syscap SystemCapability.Ability.AbilityRuntime.Core
  * @since 14 dynamic
  * @since 23 static
  */
  function isAppRunning(bundleName: string, appCloneIndex?: int): Promise<boolean>;

  /**
   * Clear up application data by bundle name
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - bundle name.
   * @param { int } [appCloneIndex] - app clone index
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function clearUpAppData(bundleName: string, appCloneIndex?: int): Promise<void>;

  /**
   * Terminate the mission of a UIAbility and back to caller.
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { int } missionId - The mission id of the UIAbility need to be terminated.
   * @returns { Promise<void> } Returns the result of terminateMission.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function terminateMission(missionId: int): Promise<void>;

  /**
   * Get pids of processes which belong to specific bundle name and support process cache feature.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - bundle name.
   * @returns { Promise<Array<int>> } Returns the list of pid.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  function getSupportedProcessCachePids(bundleName : string): Promise<Array<int>>;

  /**
   * Set keep alive for the specified bundle.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - bundle name.
   * @param { int } userId - user id.
   * @param { boolean } enable - flag indicates whether the bundle should be kept alive.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @throws { BusinessError } 16300008 - The target bundle has no MainAbility.
   * @throws { BusinessError } 16300009 - The target bundle has no status-bar ability.
   * @throws { BusinessError } 16300010 - The target application is not attached to the status bar.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
    function setKeepAliveForBundle(bundleName: string, userId: int, enable: boolean): Promise<void>;

  /**
   * Get keep-alive bundle information.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { KeepAliveAppType } type - type of keep-alive apps to be quried.
   * @param { int } [userId] - user id.
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Returns the list of KeepAliveBundleInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function getKeepAliveBundles(type: KeepAliveAppType, userId?: int): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * Set keep alive for the specified app service extension.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - bundle name.
   * @param { boolean } enabled - True indicates to enable process keep-alive, while false indicates to disable it.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000081 - Failed to obtain the target application information.
   * @throws { BusinessError } 16000202 - Invalid main element type.
   * @throws { BusinessError } 16000203 - Cannot change the keep-alive status.
   * @throws { BusinessError } 16000204 - The target bundle is not in u1.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setKeepAliveForAppServiceExtension(bundleName: string, enabled: boolean): Promise<void>;

  /**
   * Get keep-alive bundle information.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Returns the list of KeepAliveBundleInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * Kill processes in batch.
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { Array<int> } pids - The pids of the processes.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesInBatch(pids: Array<int>): Promise<void>;

  /**
   * The ability or extension state data.
   *
   * @typedef { _AbilityStateData.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AbilityStateData = _AbilityStateData.default;

  /**
   * The ability or extension state data.
   *
   * @typedef { _AbilityStateData }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AbilityStateData = _AbilityStateData;

  /**
   * The application state data.
   *
   * @typedef { _AppStateData.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AppStateData = _AppStateData.default;

  /**
   * The application state data.
   *
   * @typedef { _AppStateData }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AppStateData = _AppStateData;

  /**
   * The application state observer.
   *
   * @typedef { _ApplicationStateObserver.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ApplicationStateObserver = _ApplicationStateObserver.default;

  /**
   * The application state observer.
   *
   * @typedef { _ApplicationStateObserver }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ApplicationStateObserver = _ApplicationStateObserver;

  /**
   * The application foreground state observer.
   *
   * @typedef { _AppForegroundStateObserver.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver.default;

  /**
   * The application foreground state observer.
   *
   * @typedef { _AppForegroundStateObserver }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver;

  /**
   * The class of a process information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * The class of a process information.
   *
   * @typedef { _ProcessInformation }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export type ProcessInformation = _ProcessInformation;

  /**
   * The class of a process data.
   *
   * @typedef { _ProcessData.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ProcessData = _ProcessData.default;

  /**
   * The class of a process data.
   *
   * @typedef { _ProcessData }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ProcessData = _ProcessData;

  /**
   * The ability first frame state observer.
   *
   * @typedef { _AbilityFirstFrameStateObserver.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver.default;

  /**
   * The ability first frame state observer.
   *
   * @typedef { _AbilityFirstFrameStateObserver }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver;

  /**
   * The class of an ability first frame state data.
   *
   * @typedef { _AbilityFirstFrameStateData.default }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData.default;

  /**
   * The class of an ability first frame state data.
   *
   * @typedef { _AbilityFirstFrameStateData }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData;

  /**
   * The class of running multi app information.
   *
   * @typedef { _RunningMultiAppInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type RunningMultiAppInfo = _RunningMultiAppInfo;
}

export default appManager;
