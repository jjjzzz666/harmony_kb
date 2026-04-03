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

import AppStateData from './AppStateData';
import AbilityStateData from './AbilityStateData';
/*** if arkts dynamic */
import type * as _ProcessData from './ProcessData';
/*** endif */
/*** if arkts static */
import _ProcessData from './ProcessData';
/*** endif */

/*** if arkts dynamic */
/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 */
export default class ApplicationStateObserver {
/*** endif */

/*** if arkts static */
/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
declare interface ApplicationStateObserver {
/*** endif */
  /**
   * Will be called when foreground or background application changed.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Will be called when ability state changed.
   *
   * @param { AbilityStateData } abilityStateData - State changed ability info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * Will be called when process created.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Will be called when process died.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * Called when process state changes.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessStateChanged(processData: ProcessData): void;

  /**
   * Called when application is started.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAppStarted(appStateData: AppStateData): void;

  /**
   * Called when application is stopped.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAppStopped(appStateData: AppStateData): void;
}

/**
 * The process data.
 * @typedef { _ProcessData.default }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 */
export type ProcessData = _ProcessData.default;

/**
 * The process data.
 * @typedef { _ProcessData }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
export type ProcessData = _ProcessData;

/*** if arkts static */
export default ApplicationStateObserver;
/*** endif */
