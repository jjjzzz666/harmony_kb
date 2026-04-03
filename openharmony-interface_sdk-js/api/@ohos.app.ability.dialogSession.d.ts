/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import type Want from './@ohos.app.ability.Want';
import type { MultiAppMode } from './bundleManager/ApplicationInfo';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * This module provides the capability to manage dialog session.
 *
 * @namespace dialogSession
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace dialogSession {

  /**
   * Indicates the ability information displayed in the picker dialog, including bundleName, moduleName, and abilityName.
   *
   * @typedef DialogAbilityInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogAbilityInfo {

    /**
     * Bundle name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Module name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Ability name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * The icon id of ability
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityIconId: int;

    /**
     * The label id of ability
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityLabelId: int;

    /**
     * The icon id of bundle
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleIconId: int;

    /**
     * The label id of bundle
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleLabelId: int;

    /**
     * The ability is visible
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * Index of an application clone. It takes effect only for cloned applications.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
      * The mode of the multi-application.
      *
      * @type { MultiAppMode }
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      * @systemapi
      * @stagemodelonly
      * @since 12 dynamic
      * @since 23 static
      */
    multiAppMode: MultiAppMode;

    /**
     * Indicates the application source code path.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    codePath?: string;

    /**
     * Indicates sources to install the app.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    installSource?: string;
  }

  /**
   * Dialog session info
   *
   * @typedef DialogSessionInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogSessionInfo {

    /**
     * The dialog info of caller ability
     *
     * @type { DialogAbilityInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    callerAbilityInfo: DialogAbilityInfo;

    /**
     * The dialog infos of target ability to select
     *
     * @type { Array<DialogAbilityInfo> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    targetAbilityInfos: Array<DialogAbilityInfo>;

    /**
     * The description of the params object in dialog session info
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * The description of the params object in dialog session info
     *
     * @type { ?Record<string, RecordData> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * Query the session info of dialog.
   *
   * @param { string } dialogSessionId - Query information by dialog session id.
   * @returns { DialogSessionInfo } Returns the session info.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo;

  /**
   * Query the session info of dialog.
   *
   * @param { string } dialogSessionId - Query information by dialog session id.
   * @returns { DialogSessionInfo | null } Returns the session info when the target DialogSessionInfo of
   *     dialogSessionId exists. Returns null if the target DialogSessionInfo of dialogSessionId not exist.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo | null;

  /**
   * Send the selection result of dialog.
   *
   * @param { string } dialogSessionId - Send Result by dialog session id.
   * @param { Want } targetWant - The selection target ability to start.
   * @param { boolean } isAllowed - allowed or disallowed to start target ability.
   * @returns { Promise<void> } The promise returned by the sendDialogResult.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean): Promise<void>;

  /**
   * Send the selection result of dialog.
   *
   * @param { string } dialogSessionId - Send Result by dialog session id.
   * @param { Want } targetWant - The selection target ability to start.
   * @param { boolean } isAllowed - allowed or disallowed to start target ability.
   * @param { AsyncCallback<void> } callback - The callback of sendDialogResult.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean, callback: AsyncCallback<void>): void;
}

export default dialogSession;