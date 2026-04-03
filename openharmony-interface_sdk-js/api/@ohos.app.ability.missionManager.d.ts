/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { MissionInfo as _MissionInfo } from './application/MissionInfo';
import { MissionListener as _MissionListener } from './application/MissionListener';
import { MissionSnapshot as _MissionSnapshot } from './application/MissionSnapshot';
import StartOptions from './@ohos.app.ability.StartOptions';

/**
 * This module provides the capability to manage abilities and obtaining system task information.
 *
 * @namespace missionManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace missionManager {
  /**
   * Register the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - mission.
   * @param { MissionListener } listener - Indicates the MissionListener to be registered.
   * @returns { long } Returns the index number of the MissionListener.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'mission', listener: MissionListener): long;

  /**
   * Register the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { MissionListener } listener - Indicates the MissionListener to be registered.
   * @returns { long } Returns the index number of the MissionListener.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function onMission(listener: MissionListener): long;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - mission.
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'mission', listenerId: long, callback: AsyncCallback<void>): void;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long, callback: AsyncCallback<void>): void;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { 'mission' } type - mission.
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'mission', listenerId: long): Promise<void>;

  /**
   * Unregister the missionListener to ams.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { long } listenerId - Indicates the listener id to be unregistered.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16300002 - The specified mission listener does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 23 static
   */
  function offMission(listenerId: long): Promise<void>;

  /**
   * Get the missionInfo with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @param { AsyncCallback<MissionInfo> } callback - The callback is used to return the MissionInfo of the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfo(deviceId: string, missionId: int, callback: AsyncCallback<MissionInfo>): void;

  /**
   * Get the missionInfo with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @returns { Promise<MissionInfo> } Returns the MissionInfo of the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfo(deviceId: string, missionId: int): Promise<MissionInfo>;

  /**
   * Get missionInfos in the given deviceId with maximum number of numMax.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } numMax - Indicates the maximum number of returned missions.
   * @param { AsyncCallback<Array<MissionInfo>> } callback - The callback is used to return the array of the MissionInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>): void;

  /**
   * Get missionInfos in the given deviceId with maximum number of numMax.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } numMax - Indicates the maximum number of returned missions.
   * @returns { Promise<Array<MissionInfo>> } Returns the array of the MissionInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionInfos(deviceId: string, numMax: int): Promise<Array<MissionInfo>>;

  /**
   * Get the mission snapshot with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @param { AsyncCallback<MissionSnapshot> } callback - The callback is used to return the MissionSnapshot of
   *                                                      the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionSnapShot(deviceId: string, missionId: int, callback: AsyncCallback<MissionSnapshot>): void;

  /**
   * Get the mission snapshot with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @returns { Promise<MissionSnapshot> } Returns the MissionSnapshot of the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>;

  /**
   * Get the mission low resolution snapshot with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @param { AsyncCallback<MissionSnapshot> } callback - The callback is used to return the MissionSnapshot of
   *                                                      the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLowResolutionMissionSnapShot(
    deviceId: string,
    missionId: int,
    callback: AsyncCallback<MissionSnapshot>
  ): void;

  /**
   * Get the mission low resolution snapshot with the given missionId.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the device to be queried.
   * @param { int } missionId - Indicates mission id to be queried.
   * @returns { Promise<MissionSnapshot> } Returns the MissionSnapshot of the given id.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLowResolutionMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>;

  /**
   * Lock the mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be locked.
   * @param { AsyncCallback<void> } callback - The callback of lockMission.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function lockMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Lock the mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be locked.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function lockMission(missionId: int): Promise<void>;

  /**
   * Unlock the mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be unlocked.
   * @param { AsyncCallback<void> } callback - The callback of unlockMission.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unlockMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Unlock the mission.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be unlocked.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300001 - Mission not found.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unlockMission(missionId: int): Promise<void>;

  /**
   * Clear the given mission in the ability manager service.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be cleared.
   * @param { AsyncCallback<void> } callback - The callback of clearMission.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearMission(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Clear the given mission in the ability manager service.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be cleared.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearMission(missionId: int): Promise<void>;

  /**
   * Clear all missions in the ability manager service.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { AsyncCallback<void> } callback - The callback of clearAllMissions.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearAllMissions(callback: AsyncCallback<void>): void;

  /**
   * Clear all missions in the ability manager service.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearAllMissions(): Promise<void>;

  /**
   * Schedule the given mission to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be moved to foreground.
   * @param { AsyncCallback<void> } callback - The callback of moveMissionToFront.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, callback: AsyncCallback<void>): void;

  /**
   * Schedule the given mission to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be moved to foreground.
   * @param { StartOptions } options - Indicates the start options.
   * @param { AsyncCallback<void> } callback - The callback of moveMissionToFront.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Schedule the given mission to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { int } missionId - Indicates mission id to be moved to foreground.
   * @param { StartOptions } [options] - Indicates the start options.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function moveMissionToFront(missionId: int, options?: StartOptions): Promise<void>;

  /**
   * Schedule the given missions to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Indicates mission ids to be moved to foreground.
   * @param { AsyncCallback<void> } callback - The callback of moveMissionsToForeground.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, callback: AsyncCallback<void>): void;

  /**
   * Schedule the given missions to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Indicates mission ids to be moved to foreground.
   * @param { int } topMission - Indicates mission id to be moved to top.
   * @param { AsyncCallback<void> } callback - The callback of moveMissionsToForeground.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, topMission: int, callback: AsyncCallback<void>): void;

  /**
   * Schedule the given missions to foreground.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Indicates mission ids to be moved to foreground.
   * @param { int } topMission - Indicates mission id to be moved to top.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToForeground(missionIds: Array<int>, topMission?: int): Promise<void>;

  /**
   * Schedule the given missions to background.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Indicates mission ids will be moved to background
   * @param { AsyncCallback<Array<int>> } callback - The callback of moveMissionsToForeground.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToBackground(missionIds: Array<int>, callback: AsyncCallback<Array<int>>): void;

  /**
   * Schedule the given missions to background.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { Array<int> } missionIds - Indicates mission ids will be moved to background
   * @returns { Promise<Array<int>> } - The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function moveMissionsToBackground(missionIds: Array<int>): Promise<Array<int>>;

  /**
   * Mission information corresponding to ability.
   *
   * @typedef { _MissionInfo }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionInfo = _MissionInfo;

  /**
   * MissionListener registered by app.
   *
   * @typedef { _MissionListener }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionListener = _MissionListener;

  /**
   * Mission snapshot corresponding to mission.
   *
   * @typedef { _MissionSnapshot }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type MissionSnapshot = _MissionSnapshot;
}

export default missionManager;
