/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit AudioKit
 */

import type systemSoundManager from '../@ohos.multimedia.systemSoundManager';

/**
 * Implements a system sound player that provides functions for loading, unloading, playing system sounds.
 * Before using these functions, application must call
 * [createSystemSoundPlayer]{@link #systemSoundManager.createSystemSoundPlayer} to create a
 * SystemSoundPlayer instance first.
 *
 * @typedef SystemSoundPlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export interface SystemSoundPlayer {
  /**
   * Loads a system sound.
   *
   * @param { systemSoundManager.SystemSoundType } soundType - type of sound to preload.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 5400103 - I/O error.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  load(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * Plays a system sound.
   *
   * @param { systemSoundManager.SystemSoundType } soundType - type of sound to play.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 5400103 - I/O error.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  play(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * Unloads a system sound that has been loaded before.
   *
   * @param { systemSoundManager.SystemSoundType } soundType - type of sound to unload.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  unload(soundType: systemSoundManager.SystemSoundType): Promise<void>;

  /**
   * Releases this system sound player instance.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 5400105 - Crash or blocking occurs in system process.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  release(): Promise<void>;
}