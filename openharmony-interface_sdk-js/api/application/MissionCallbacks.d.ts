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

/**
 * Callback function on mission changed.
 *
 * @typedef { function } NotifyMissionsChangedCallback
 * @param { string } deviceId - Indicates the deviceId mission changed.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyMissionsChangedCallback = (deviceId: string) => void;

/**
 * Callback function on snapshot changed.
 *
 * @typedef { function } NotifySnapshotCallback
 * @param { string } deviceId - Indicates the deviceId snapshot changed.
 * @param { int } mission - Indicates the id of mission.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifySnapshotCallback = (deviceId: string, mission: int) => void;

/**
 * Callback function on network disconnect.
 *
 * @typedef { function } NotifyNetDisconnectCallback
 * @param { string } deviceId - Indicates the deviceId network disconnect.
 * @param { int } state - Indicates the state of network.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type NotifyNetDisconnectCallback = (deviceId: string, state: int) => void;

/**
 * MissionCallback registered by app.
 *
 * @interface MissionCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface MissionCallback {
  /**
   * Called by system when mission changed.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @type { NotifyMissionsChangedCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifyMissionsChanged: NotifyMissionsChangedCallback;

  /**
   * Called by system when snapshot changed.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @type { NotifySnapshotCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifySnapshot: NotifySnapshotCallback;

  /**
   * Called by system when network disconnect.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @type { NotifyNetDisconnectCallback }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  notifyNetDisconnect: NotifyNetDisconnectCallback;
}
