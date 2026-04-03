/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';

/**
 * Window animation manager.
 *
 * @namespace windowAnimationManager
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace windowAnimationManager {
  /**
   * Set the window animation controller.
   *
   * @param { WindowAnimationController } controller - Window animation controller.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setController(controller: WindowAnimationController): void;

  /**
   * Minimize the window target with animation.
   *
   * @param { WindowAnimationTarget } windowTarget - The window target to be minimized.
   * @param { AsyncCallback<WindowAnimationFinishedCallback> } callback - Returns the animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget,
    callback: AsyncCallback<WindowAnimationFinishedCallback>): void;

  /**
   * Minimize the window target with animation.
   *
   * @param { WindowAnimationTarget }windowTarget - The window target to be minimized.
   * @returns { Promise<WindowAnimationFinishedCallback> } Promise used to return the animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget): Promise<WindowAnimationFinishedCallback>;

  /**
   * Round rect.
   *
   * @interface RRect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface RRect {
    /**
     * The X-axis coordinate of the upper left vertex of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * The Y-axis coordinate of the upper left vertex of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * Width of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * Height of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * Radius of the round corner of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    radius: double;
  }

  /**
   * Window animation target.
   *
   * @interface WindowAnimationTarget
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationTarget {
    /**
     * The bundle name of the window animation target.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
    /* The ability name of the window animation target.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
    /* The window bounds of the window animation target.
     * @type { RRect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly windowBounds: RRect;

    /**
    /* The mission id of the window animation target.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly missionId: int;
  }

  /**
   * Window animation finished callback.
   *
   * @interface WindowAnimationFinishedCallback
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationFinishedCallback {
    /**
     * The function of window animation finished callback.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    onAnimationFinish(): void;
  }

  /**
   * Callback function on starting an application.
   *
   * @typedef { function } AppStartCallback
   * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AppStartCallback = (startingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on application transition.
   *
   * @typedef { function } AppTransitionCallback
   * @param { WindowAnimationTarget } fromWindowTarget - Window target of the source application.
   * @param { WindowAnimationTarget } toWindowTarget - Window target of the destination application.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AppTransitionCallback = (fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on minimizing a window.
   *
   * @typedef { function } WindowMinimizationCallback
   * @param { WindowAnimationTarget } minimizingWindowTarget - Window target of the minimizing window.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowMinimizationCallback = (minimizingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on closing a window.
   *
   * @typedef { function } WindowCloseCallback
   * @param { WindowAnimationTarget }closingWindowTarget - Window target of the closing window.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowCloseCallback = (closingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on unlocking the screen.
   *
   * @typedef { function } ScreenUnlockCallback
   * @param {WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type ScreenUnlockCallback = (finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on window animation targets update.
   *
   * @typedef { function } WindowAnimationTargetsUpdationCallback
   * @param { WindowAnimationTarget } fullScreenWindowTarget - The fullscreen window target.
   * @param { Array<WindowAnimationTarget> } floatingWindowTargets - All the floating window targets.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowAnimationTargetsUpdationCallback = (fullScreenWindowTarget: WindowAnimationTarget,
    floatingWindowTargets: Array<WindowAnimationTarget>) => void;

  /**
   * Window animation controller.
   *
   * @interface WindowAnimationController
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationController {
    /**
     * Called on starting an application form launcher.
     *
     * @param { WindowAnimationTarget } startingWindowTarget  - indicates Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromLauncher(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on starting an application form recent.
     *
     * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on starting an application form other.
     *
     * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on application transition.
     *
     * @param { WindowAnimationTarget } fromWindowTarget - Window target of the source application.
     * @param { WindowAnimationTarget } toWindowTarget - Window target of the destination application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on minimizing a window.
     *
     * @param { WindowAnimationTarget } minimizingWindowTarget - Window target of the minimizing window.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on closing a window.
     *
     * @param { WindowAnimationTarget }closingWindowTarget - Window target of the closing window.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on unlocking the screen.
     *
     * @param {WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on window animation targets update.
     *
     * @param { WindowAnimationTarget } fullScreenWindowTarget - The fullscreen window target.
     * @param { Array<WindowAnimationTarget> } floatingWindowTargets - All the floating window targets.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void;

    /**
     * Callback function on starting an application form launcher.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromLauncher?: AppStartCallback;

    /**
     * Callback function on starting an application form recent.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromRecent?: AppStartCallback;

    /**
     * Callback function on starting an application form other.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromOther?: AppStartCallback;

    /**
     * Callback function on application transition.
     *
     * @type { ?AppTransitionCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onAppTransition?: AppTransitionCallback;

    /**
     * Callback function on minimizing a window.
     *
     * @type { ?WindowMinimizationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onMinimizeWindow?: WindowMinimizationCallback;

    /**
     * Callback function on closing a window.
     *
     * @type { ?WindowCloseCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onCloseWindow?: WindowCloseCallback;

    /**
     * Callback function on unlocking the screen.
     *
     * @type { ?ScreenUnlockCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onScreenUnlock?: ScreenUnlockCallback;

    /**
     * Callback function on window animation targets update.
     *
     * @type { ?WindowAnimationTargetsUpdationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onWindowAnimationTargetsUpdate?: WindowAnimationTargetsUpdationCallback;
  }
}

export default windowAnimationManager;
