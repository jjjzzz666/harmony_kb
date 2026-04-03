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

import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';

/**
 * Defines a OnAbilityWillCreate function.
 *
 * @typedef {function} OnAbilityWillCreateFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillCreateFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillCreate function.
 *
 * @typedef {function} OnWindowStageWillCreateFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillCreateFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onWillNewWant function.
 *
 * @typedef {function} OnWillNewWantFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWillNewWantFn = (ability: UIAbility) => void;

/**
 * Defines a onNewWant function.
 *
 * @typedef {function} OnNewWantFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnNewWantFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillDestroy function.
 *
 * @typedef {function} OnWindowStageWillDestroyFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillDestroyFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onAbilityWillDestroy function.
 *
 * @typedef {function} OnAbilityWillDestroyFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillDestroyFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillForeground function.
 *
 * @typedef {function} OnAbilityWillForegroundFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillForegroundFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillBackground function.
 *
 * @typedef {function} OnAbilityWillBackgroundFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillBackgroundFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilityWillContinue function.
 *
 * @typedef {function} OnAbilityWillContinueFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillContinueFn = (ability: UIAbility) => void;

/**
 * Defines a onWindowStageWillRestore function.
 *
 * @typedef {function} OnWindowStageWillRestoreFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageWillRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onWindowStageRestore function.
 *
 * @typedef {function} OnWindowStageRestoreFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @param { window.WindowStage } windowStage - window stage to create
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnWindowStageRestoreFn = (ability: UIAbility, windowStage: window.WindowStage) => void;

/**
 * Defines a onAbilityWillSaveState function.
 *
 * @typedef {function} OnAbilityWillSaveStateFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilityWillSaveStateFn = (ability: UIAbility) => void;

/**
 * Defines a onAbilitySaveState function.
 *
 * @typedef {function} OnAbilitySaveStateFn
 * @param { UIAbility } ability - Indicates the ability to register for listening.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @since 23 static
 */
type OnAbilitySaveStateFn = (ability: UIAbility) => void;

/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 9
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare class AbilityLifecycleCallback {
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onAbilityCreate(ability: UIAbility): void;

  /**
   * Called back before an ability is started for initialization.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillCreate?(ability: UIAbility): void;

  /**
   * Called back before an ability is started for initialization.
   *
   * @type { ?OnAbilityWillCreateFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillCreate?: OnAbilityWillCreateFn;

  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is created.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to create
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage will create.
   *
   * @type { ?OnWindowStageWillCreateFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillCreate?: OnWindowStageWillCreateFn;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWillNewWant?(ability: UIAbility): void;

  /**
   * Called back before the UIAbility will called onNewWant.
   *
   * @type { ?OnWillNewWantFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWillNewWant?: OnWillNewWantFn;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onNewWant?(ability: UIAbility): void;

  /**
   * Called back after the UIAbility called onNewWant.
   *
   * @type { ?OnNewWantFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onNewWant?: OnNewWantFn;

  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is active.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to active
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is inactive.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to inactive
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to destroy
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back before a window stage will destroy.
   *
   * @type { ?OnWindowStageWillDestroyFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillDestroy?: OnWindowStageWillDestroyFn;

  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onAbilityDestroy(ability: UIAbility): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillDestroy?(ability: UIAbility): void;

  /**
   * Called back before an ability will destroy.
   *
   * @type { ?OnAbilityWillDestroyFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillDestroy?: OnAbilityWillDestroyFn;

  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onAbilityForeground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to foreground.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillForeground?(ability: UIAbility): void;

  /**
   * Called back before the state of an ability willl changes to foreground.
   *
   * @type { ?OnAbilityWillForegroundFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillForeground?: OnAbilityWillForegroundFn;

  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Called back when the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onAbilityBackground(ability: UIAbility): void;

  /**
   * Called back before the state of an ability changes to background.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillBackground?(ability: UIAbility): void;

  /**
   * Called back before the state of an ability willl changes to background.
   *
   * @type { ?OnAbilityWillBackgroundFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillBackground?: OnAbilityWillBackgroundFn;

  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 9
   */
  /**
   * Called back when an ability prepares to continue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  onAbilityContinue(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onContinue.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillContinue?(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onContinue.
   *
   * @type { ?OnAbilityWillContinueFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillContinue?: OnAbilityWillContinueFn;

  /**
   * Called back when the ability prepares to call onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability prepares to call onWindowStageRestore.
   *
   * @type { ?OnWindowStageWillRestoreFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageWillRestore?: OnWindowStageWillRestoreFn;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @param { window.WindowStage } windowStage - window stage to restore.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void;

  /**
   * Called back when the ability has called onWindowStageRestore.
   *
   * @type { ?OnWindowStageRestoreFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onWindowStageRestore?: OnWindowStageRestoreFn;

  /**
   * Called back when the ability prepares to call onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilityWillSaveState?(ability: UIAbility): void;

  /**
   * Called back when the ability prepares to call onSaveState.
   *
   * @type { ?OnAbilityWillSaveStateFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityWillSaveState?: OnAbilityWillSaveStateFn;

  /**
   * Called back when the ability has called onSaveState.
   *
   * @param { UIAbility } ability - Indicates the ability to register for listening.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onAbilitySaveState?(ability: UIAbility): void;

  /**
   * Called back when the ability has called onSaveState.
   *
   * @type { ?OnAbilitySaveStateFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onAbilitySaveState?: OnAbilitySaveStateFn;
}

export default AbilityLifecycleCallback;