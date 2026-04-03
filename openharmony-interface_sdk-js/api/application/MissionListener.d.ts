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

import image from '../@ohos.multimedia.image';

/**
 * MissionListener registered by app.
 *
 * @interface MissionListener
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface MissionListener {
  /**
   * Called by system when mission created.
   *
   * @param { int } mission - Indicates the id of created mission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionCreated(mission: int): void;

  /**
   * Called by system when mission destroyed.
   *
   * @param { int } mission - Indicates the id of destroyed mission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionDestroyed(mission: int): void;

  /**
   * Called by system when mission snapshot changed.
   *
   * @param { int } mission - Indicates the id of the mission which the snapshot changes
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionSnapshotChanged(mission: int): void;

  /**
   * Called by system when mission moved to front.
   *
   * @param { int } mission - Indicates the id of the mission being moved to the foreground.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onMissionMovedToFront(mission: int): void;

  /**
   * Called by system when mission label has changed.
   *
   * @param { int } mission - Indicates the id of the mission whose label has changed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionLabelUpdated(mission: int): void;

  /**
   * Called by system when mission icon has changed.
   *
   * @param { int } mission - Indicates the id of the mission whose icon has changed.
   * @param { image.PixelMap } icon - Indicates the icon of the mission whose icon has changed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionIconUpdated(mission: int, icon: image.PixelMap): void;

  /**
   * Called by system when target mission is closed.
   *
   * @param { int } mission - Indicates the id of the mission whose ability instance is destroyed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  onMissionClosed(mission: int): void;
}
