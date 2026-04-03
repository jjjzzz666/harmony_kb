/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { AsyncCallback, BusinessError } from './@ohos.base';
import BaseContext from './application/BaseContext';
import image from './@ohos.multimedia.image';
import rpc from './@ohos.rpc';
import dialogRequest from './@ohos.app.ability.dialogRequest';
/*** if arkts dynamic */
import { UIContext } from './@ohos.arkui.UIContext';
import { ColorMetrics } from './@ohos.arkui.node';
/*** endif */
import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';
import bundleManager from './@ohos.bundle.bundleManager';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { UIContext } from '@ohos.arkui.UIContext';
import { ColorMetrics } from '@ohos.arkui.node';
import { ImageFit } from '@ohos.arkui.component';
/*** endif */

/*** if arkts dynamic */
/**
 * Defines the window callback.
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 15 dynamic
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   */
  (data: T): V;
}
/*** endif */

/**
 * Defines the window callback.
 *
 * @typedef {function}
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 23 static
 */
type Callback<T, V = void> = (data: T) => V; 

/**
   * Defines the window animation curve param.
   *
   * @typedef { Array<double> } AnimationCurveParam
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
declare type WindowAnimationCurveParam = Array<double>;

/**
 * Callback function for transition controller
 * 
 * @typedef { function } TransitionControllerCallback
 * @param { window.TransitionContext } context - The transition context
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 23 static
 */
declare type TransitionControllerCallback = (context: window.TransitionContext) => void;

/**
 * Callback function for window event
 * 
 * @param { int } windowId - The id of the window which triggers the event
 * @param { window.WindowEventType } event - Window callback event type
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare type WindowEventListener = (windowId: int, event: window.WindowEventType) => void;

/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @since 6
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @since 10
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace window {
  /**
   * The type of a window.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * The type of a window.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum WindowType {
    /**
     * App.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    TYPE_APP = 0,
    /**
     * System alert.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TYPE_SYSTEM_ALERT = 1,
    /**
     * Input method.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 13
     */
    TYPE_INPUT_METHOD,
    /**
     * Status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_STATUS_BAR = 3,
    /**
     * Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PANEL = 4,
    /**
     * Keyguard.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYGUARD = 5,
    /**
     * Volume.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOLUME_OVERLAY = 6,
    /**
     * Navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_BAR = 7,
    /**
     * Float.
     *
     * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Float.
     * Require "ohos.permission.SYSTEM_FLOAT_WINDOW" permission
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_FLOAT = 8,
    /**
     * Wallpaper.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_WALLPAPER = 9,
    /**
     * Desktop.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DESKTOP = 10,
    /**
     * Recent.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_RECENT = 11,
    /**
     * Dock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_DOCK = 12,
    /**
     * Voice interaction.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOICE_INTERACTION = 13,
    /**
     * Pointer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_POINTER = 14,
    /**
     * Float camera.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_CAMERA = 15,
    /**
     * Dialog.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 10
     */
    /**
     * Dialog.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_DIALOG= 16,
    /**
     * Screenshot.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SCREENSHOT = 17,
    /**
     * System Toast.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_TOAST = 18,
    /**
     * Divider.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DIVIDER= 19,
    /**
     * Global Search.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_GLOBAL_SEARCH= 20,
    /**
     * Handwrite.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_HANDWRITE = 21,
    /**
     * TYPE_WALLET_SWIPE_CARD.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_WALLET_SWIPE_CARD = 22,
    /**
     * Screen Control
     * 
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_SCREEN_CONTROL = 23,
    /**
     * TYPE_FLOAT_NAVIGATION.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 17 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_NAVIGATION = 24,
    /**
     * TYPE_DYNAMIC.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_DYNAMIC = 25,
    /**
     * TYPE_MUTISCREEN_COLLABORATION.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_MUTISCREEN_COLLABORATION = 26,
    /**
     * Main.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_MAIN = 32
  }

  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AvoidAreaType {
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM = 0,

    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_CUTOUT = 1,

    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_GESTURE = 2,

    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_KEYBOARD = 3,

    /**
     * Area for navigation indicator
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for navigation indicator
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_INDICATOR = 4
  }
  /**
   * Describes the window mode of an application
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowMode {
    /**
     * Undefined mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    UNDEFINED = 1,
    /**
     * Fullscreen mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FULLSCREEN,
    /**
     * Primary mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    PRIMARY,
    /**
     * Secondary mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SECONDARY,
    /**
     * Floating mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FLOATING = 5
  }

  /**
   * Describes the mode of window layout
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum WindowLayoutMode {
    /**
     * CASCADE
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WINDOW_LAYOUT_MODE_CASCADE,
    /**
     * TILE
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    WINDOW_LAYOUT_MODE_TILE
  }

  /**
   * Describes the window status of an application
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describes the window status of an application
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  /**
   * Describes the window status of an application
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowStatusType {
    /**
     * Undefined status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Undefined status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Undefined status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,
    /**
     * Full screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Full screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Full screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 1,
    /**
     * Maximize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Maximize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MAXIMIZE = 2,
    /**
     * Minimize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Minimize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MINIMIZE = 3,
    /**
     * Floating status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Floating status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Floating status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FLOATING = 4,
    /**
     * Split screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Split screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Split screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SPLIT_SCREEN = 5
  }

  /**
   * Describes the pixel unit
   * @enum { int }
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum PixelUnit {
    /**
     * Physical pixel unit of the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PX = 0,
    /**
     * Pixel unit specific to the screen density.
     * Pixels in this unit are converted into physical pixels of the screen based on the screen pixel density.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    VP = 1,
  }

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   *
   * @interface SystemBarProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   *
   * @interface SystemBarProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   *
   * @interface SystemBarProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface SystemBarProperties {
    /**
     * The color of the status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * The color of the status bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The color of the status bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    statusBarColor?: string;

    /**
     * The light icon of the status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The light icon of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The light icon of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isStatusBarLightIcon?: boolean;

    /**
     * The content color of the status bar
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * The content color of the status bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;

    /**
     * The color of the navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * The color of the navigation bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The color of the navigation bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
  
    navigationBarColor?: string;

    /**
     * The light icon of the navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The light icon of the navigation bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The light icon of the navigation bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isNavigationBarLightIcon?: boolean;

    /**
     * The content color of the navigation bar
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * The content color of the navigation bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    navigationBarContentColor?: string;

    /**
     * Enable the animation of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Enable the animation of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    enableStatusBarAnimation?: boolean;

    /**
     * Enable the animation of the navigation bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableNavigationBarAnimation?: boolean;
  }

  /**
   * Properties of status bar.
   *
   * @interface StatusBarProperty
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface StatusBarProperty {
    /**
     * The content color of the status bar.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentColor: string;
  }
  
  /**
   * Properties of status bar, it couldn't update automatically
   *
   * @interface SystemBarStyle
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemBarStyle {
    /**
     * The content color of the status bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;
  }

  /**
   * System bar tint of region
   *
   * @interface SystemBarRegionTint
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarRegionTint {
    /**
     * System bar type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: WindowType;

    /**
     * The visibility of system bar
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isEnable?: boolean;

    /**
     * The region of system bar
     *
     * @type { ?Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    region?: Rect;

    /**
     * The background color of the system bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor?: string;

    /**
     * The content color of the system bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentColor?: string;
  }

  /**
   * System bar tint state for systemui
   *
   * @interface SystemBarTintState
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarTintState {
    /**
     * Id of display
     *
     * @type { long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * Region tint of systembar
     *
     * @type { Array<SystemBarRegionTint> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * Frame metrics
   *
   * @interface FrameMetrics
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  interface FrameMetrics {
    /**
     * Indicates whether the first frame of the window.
     *
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    firstDrawFrame: boolean;

    /**
     * Indicates the number of nanoseconds elapsed in the input handling stage of a frame.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    inputHandlingDuration: long;

    /**
     * Indicates the number of nanoseconds elapsed in the layout measure stage of a frame.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    layoutMeasureDuration: long;

    /**
     * Indicates the timestamp of the actual vsync for this frame. The value is expressed in nanoseconds.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    vsyncTimestamp: long;
  }

  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Rect {

    /**
     * The left of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The left of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The left of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * The top of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The top of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The top of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * The width of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The width of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The width of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * The height of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The height of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The height of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * The position and size of the window rectangle, measured in vp.
   *
   * @interface RectInVP
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface RectInVP {
    /**
     * The left of the window rectangle, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    left: double;

    /**
     * The top of the window rectangle, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    top: double;

    /**
     * The width of the window rectangle, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * The height of the window rectangle, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * Describes the location of a window or component.
   *
   * @interface Position
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Position {

    /**
     * The X-coordinate, measured in px.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * The Y-coordinate, measured in px.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Enum for window anchor
   *
   * @enum { int }
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnchor {
    /**
     * The value means window top left corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_START = 0,
    /**
     * The value means horizontal midpoint of the border on the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP = 1,
    /**
     * The value means window top right corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_END = 2,
    /**
     * The value means vertical midpoint of the left border of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    START = 3,
    /**
     * The value means window horizontal and vertical midpoint.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 4,
    /**
     * The value means vertical midpoint of the right border of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    END = 5,
    /**
     * The value means window bottom left corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_START = 6,
    /**
     * The value means horizontal midpoint of the lower border of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 7,
    /**
     * The value means window bottom right corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_END = 8,
  }

  /**
   * Describes the parameters of a window anchor used to maintain the relative position to the target window.
   *
   * @interface WindowAnchorInfo
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface WindowAnchorInfo {
    /**
     * Type of anchor point used to maintain the relative position to the target window.
     *
     * @type { WindowAnchor }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    anchorType: WindowAnchor;

    /**
     * The x-axis offset between the anchor points of two windows that are in a layout attachment, measured in px.
     * The default value is 0.
     *
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetX?: int;

    /**
     * The y-axis offset between the anchor points of two windows that are in a layout attachment, measured in px.
     * The default value is 0.
     * 
     * @type { ?int }
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetY?: int;
  }

  /**
   * Describes the parameters of subwindow layout attachment operation.
   * 
   * @interface SubWindowAttachOptions
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SubWindowAttachOptions {
    /**
     * Current layout mode of the subwindow.
     * 
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    currentLayoutMode?: string;

    /**
     * The callback of windowSizeChange event of the parent window.
     * 
     * @type { ?Callback<Size> }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowSizeChangeCallback?: Callback<Size>;

    /**
     * The callback of windowStatusChange event of the parent window.
     * 
     * @type { ?Callback<WindowStatusType> }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowStatusChangeCallback?: Callback<WindowStatusType>;
  }

  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidArea {
    /**
     * Whether avoidArea is visible on screen
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether avoidArea is visible on screen
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    leftRect: Rect;

    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    topRect: Rect;

    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rightRect: Rect;

    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bottomRect: Rect;
  }

  /**
   * Avoid area for arkUI environment variable, measured in vp.
   *
   * @interface UIEnvAvoidAreaVP
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvAvoidAreaVP {
    /**
     * Whether avoidArea is visible on screen
     *
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    visible: boolean;

    /**
     * Rectangle on the left of the screen, measured in vp.
     *
     * @type { RectInVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    leftRect: RectInVP;

    /**
     * Rectangle on the top of the screen, measured in vp.
     *
     * @type { RectInVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    topRect: RectInVP;

    /**
     * Rectangle on the right of the screen, measured in vp.
     *
     * @type { RectInVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    rightRect: RectInVP;

    /**
     * Rectangle on the bottom of the screen, measured in vp.
     *
     * @type { RectInVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    bottomRect: RectInVP;
  }

  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * The width of the window.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The width of the window.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The width of the window.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * The height of the window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The height of the window.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The height of the window.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Window size, measured in vp.
   *
   * @interface SizeInVP
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface SizeInVP {
    /**
     * The width of the window, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * The height of the window, measured in vp.
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * The info of window
   *
   * @interface WindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi
   * @since 12
   */
  /**
   * The info of window
   *
   * @interface WindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface WindowInfo {
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18 dynamic
     * @since 23 static
     */
    rect: Rect;

    /**
     * Global display rect.
     *
     * @type { ?Rect } 
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;

    /**
     * bundleName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * bundleName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * abilityName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * abilityName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Indicates target window id.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * Indicates target window id.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18 dynamic
     * @since 23 static
     */
    windowId: int;

    /**
     * The window status of an application.
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * The window status of an application.
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    /**
     * The window status of an application.
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    windowStatusType: WindowStatusType;

    /**
     * Whether the window is focused. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 14
     */
    /**
     * Whether the window is focused. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18 dynamic
     * @since 23 static
     */
    isFocused?: boolean;

    /**
     * Indicates the ID of the display where the window is located.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId?: int;

    /**
     * Indicates the actual display size and position of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    globalRect?: Rect;
  }

  /**
   * The info of window density
   *
   * @interface WindowDensityInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowDensityInfo {
    /**
     * System density
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    systemDensity: double;

    /**
     * Default density
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    defaultDensity: double;

    /**
     * Custom density
     *
     * @type { double }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    customDensity: double;
  }

  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface WindowProperties {
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * The position relative to the window and size of drawable area
     *
     * @type { Rect } 
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    /**
     * The position relative to the window and size of drawable area
     *
     * @type { Rect } 
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    drawableRect: Rect;

    /**
     * Global display rect.
     *
     * @type { ?Rect } 
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;
    
    /**
     * Window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: WindowType;

    /**
     * Whether the window is displayed in full screen mode. The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Whether the window is displayed in full screen mode. The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isFullScreen: boolean;

    /**
     * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isLayoutFullScreen: boolean;

    /**
     * Whether the window can gain focus. The default value is true
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window can gain focus. The default value is true
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    focusable: boolean;

    /**
     * Whether the window is touchable. The default value is false
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window is touchable. The default value is false
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    touchable: boolean;

    /**
     * Brightness value of window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Brightness value of window.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Brightness value of window.
     *
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    brightness: double;

    /**
     * The dimbehind value of window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    dimBehindValue: number;

    /**
     * Whether keep screen on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Whether keep screen on.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Whether keep screen on.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isKeepScreenOn: boolean;

    /**
     * Whether make window in privacy mode or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether make window in privacy mode or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPrivacyMode: boolean;

    /**
     * Whether is round corner or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    isRoundCorner: boolean;

    /**
     * Whether is transparent or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether is transparent or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isTransparent: boolean;

    /**
     * Window id.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Window id.
     *
     * @type { int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * display id.
     *
     * @type { ?long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * window name.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    name?: string;
  }

  /**
   * The decor button style of the window.
   *
   * @interface DecorButtonStyle
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface DecorButtonStyle {
    /**
     * color mode.
     *
     * @type { ?colorMode }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    colorMode?: ConfigurationConstant.ColorMode;

    /**
     * button background size when hover.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    buttonBackgroundSize? : int;

    /**
     * button spacing.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    spacingBetweenButtons? : int;

    /**
     * close button right Margin.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    closeButtonRightMargin? : int;

    /**
     * button icon size.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIconSize? : int;

    /**
     * corner radius of button background when hover.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonBackgroundCornerRadius? : int;
  }

  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   */
  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 11
   */
  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ColorSpace {
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    WIDE_GAMUT = 1
  }
  /**
   * Describes the scale Transition Options of window
   *
   * @interface ScaleOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScaleOptions {
    /**
     * The scale param of x direction. Default is 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * The scale param of y direction. Default is 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * The scale param of pivot point of x. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * The scale param of pivot point of y. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * Describes the rotate Transition Options of window
   *
   * @interface RotateOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface RotateOptions {
    /**
     * The rotate degree of x direction. Default value is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * The rotate degree of y direction. Default value is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * The rotate degree of z direction. Default value is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;

    /**
     * The param of pivot point of x. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * The param of pivot point of y. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * Describes the translate Transition Options of window
   *
   * @interface TranslateOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TranslateOptions {
    /**
     * The translate pixel param of x direction. Default is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * The translate pixel param of y direction. Default is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * The translate pixel param of z direction. Default is 0.f
     *
     * @type { ?double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;
  }

  /**
   * Transition Context
   *
   * @interface TransitionContext
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionContext {
    /**
     * The target window with animation
     *
     * @type { Window }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    toWindow: Window;

    /**
     * Set complete state of animation transition
     *
     * @param { boolean } isCompleted - Whether the transition is complete. The value true means that the transition is complete, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Set complete state of animation transition
     *
     * @param { boolean } isCompleted - Whether the transition is complete. The value true means that the transition is complete, and false means the opposite.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    completeTransition(isCompleted: boolean): void;
  }

  /**
   * Transition Controller
   *
   * @interface TransitionController
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionController {
    /**
     * Animation configuration when showing window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Animation configuration when showing window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     */
    animationForShown(context: TransitionContext): void;

    /**
     * Animation configuration when showing window
     *
     * @type { ?TransitionControllerCallback }
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForShown?: TransitionControllerCallback;

    /**
     * Animation configuration when hiding window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Animation configuration when hiding window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     */
    animationForHidden(context: TransitionContext): void;

    /**
     * Animation configuration when hiding window
     *
     * @type { ?TransitionControllerCallback }
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForHidden?: TransitionControllerCallback;
  }

  /**
   * Configuration parameters for window creation.
   *
   * @interface Configuration
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Configuration parameters for window creation.
   *
   * @interface Configuration
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Configuration {
    /**
     * Indicates window id.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window id.
     *
     * @type { string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Indicates window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    windowType: WindowType;

    /**
     * Indicates window context.
     *
     * @type { ?BaseContext }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window context.
     *
     * @type { ?BaseContext }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ctx?: BaseContext;

    /**
     * Indicates display ID.
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates display ID.
     *
     * @type { ?long }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * Indicates Parent window id
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates Parent window id
     *
     * @type { ?int }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    parentId?: int;

    /**
     * Indicates whether enable window decor, only support dialog, The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    decorEnabled?: boolean;

    /**
     * Indicates dialog window title when decor enabled.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * Indicates window container zIndex.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    zIndex?: int;

    /**
     * Indicates whether to use default density.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    defaultDensityEnabled?: boolean;
  }

  /**
   * Limits of window.
   *
   * @interface WindowLimits
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Limits of window.
   *
   * @interface WindowLimits
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowLimits {
    
    /**
     * The maximum width of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The maximum width of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxWidth?: int;

    /**
     * The maximum height of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The maximum height of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxHeight?: int;

    /**
     * The minimum width of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The minimum width of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minWidth?: int;

    /**
     * The minimum height of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The minimum height of the window.
     *
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minHeight?: int;

    /**
     * The unit of window limits.
     *
     * @type { ?PixelUnit }
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    pixelUnit?: PixelUnit;
  }

  /**
   * Rectangular area of the title buttons relative to the upper right corner of the window.
   *
   * @interface TitleButtonRect
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Rectangular area of the title buttons relative to the upper right corner of the window.
   *
   * @interface TitleButtonRect
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface TitleButtonRect {

    /**
     * The right of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The right of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    right: int;

    /**
     * The top of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The top of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * The width of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The width of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * The height of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The height of the Rect.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Rect change options
   *
   * @interface RectChangeOptions
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RectChangeOptions {
    /**
     * Rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect,

    /**
     * Rect change reason
     *
     * @type { RectChangeReason }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reason: RectChangeReason
  }

  /**
   * Avoid area options
   *
   * @interface AvoidAreaOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Avoid area options
   *
   * @interface AvoidAreaOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface AvoidAreaOptions {
    /**
     * Avoid area type
     *
     * @type { AvoidAreaType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Avoid area type
     *
     * @type { AvoidAreaType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    type: AvoidAreaType,

    /**
     * Avoid area
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Avoid area
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    area: AvoidArea
  }

  /**
   * Avoid area info for arkUI environment variable, measured in px.
   *
   * @interface UIEnvWindowAvoidAreaInfoPX
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoPX {
    /**
     * Avoid area of statusBar, measured in px.
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: AvoidArea;

    /**
     * Avoid area of cutout, measured in px.
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: AvoidArea;

    /**
     * Avoid area of keyboard, measured in px.
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: AvoidArea;

    /**
     * Avoid area of navigation indicator, measured in px.
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: AvoidArea;
  }

  /**
   * Avoid area info for arkUI environment variable, measured in vp.
   *
   * @interface UIEnvWindowAvoidAreaInfoVP
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoVP {
    /**
     * Avoid area of statusBar, measured in vp.
     *
     * @type { UIEnvAvoidAreaVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: UIEnvAvoidAreaVP;

    /**
     * Avoid area of cutout, measured in vp.
     *
     * @type { UIEnvAvoidAreaVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: UIEnvAvoidAreaVP;

    /**
     * Avoid area of keyboard, measured in vp.
     *
     * @type { UIEnvAvoidAreaVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: UIEnvAvoidAreaVP;

    /**
     * Avoid area of navigation indicator, measured in vp.
     *
     * @type { UIEnvAvoidAreaVP }
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: UIEnvAvoidAreaVP;
  }

  /**
   * Window rect change reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectChangeReason {
    /**
     * Default RectChangeReason.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,

    /**
     * Window maximize.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MAXIMIZE = 1,

    /**
     * Window recover.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVER = 2,

    /**
     * Window move.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVE = 3,

    /**
     * Window drag.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 4,

    /**
     * Window drag start.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_START = 5,

    /**
     * Window drag end.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_END = 6,
  }

  /**
   * Main window info
   *
   * @interface MainWindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface MainWindowInfo {
    /**
     * Display id of the window.
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    displayId: long,
    /**
     * Window id.
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Showing state of the window.
     *
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    showing: boolean,
    /**
     * Label of the window.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    label: string
  }

  /**
   * Configuration for getting windows' snapshot.
   *
   * @interface WindowSnapshotConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface WindowSnapshotConfiguration {
    /**
     * Whether use cached windows' snapshot.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    useCache?: boolean
  }

  /**
   * Create a window with a specific configuration
   *
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is invalid.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 17 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration, callback: AsyncCallback<Window>): void;

  /**
   * Create a window with a specific configuration
   *
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is invalid.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 17 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration): Promise<Window>;

  /**
   * Create a sub window with a specific id and type, only support 7.
   *
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the subwindow created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Create a sub window with a specific id and type, only support 7.
   *
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @returns { Promise<Window> } Promise used to return the subwindow created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * Create a system or float window with a specific id and type.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;

  /**
   * Create a system or float window with a specific id and type.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Find the window by id.
   *
   * @param { string } id - Indicates window id.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#findWindow
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * Find the window by id.
   *
   * @param { string } id - Indicates window id.
   * @returns { Promise<Window> } Window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#findWindow
   */
  function find(id: string): Promise<Window>;

  /**
   * Find the window by name.
   *
   * @param { string } name - Indicates window name.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Find the window by name.
   *
   * @param { string } name - Indicates window name.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Finds a window based on the name.
   *
   * @param { string } name - Window name, that is, the value of name in Configuration.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: The window is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function findWindow(name: string): Window;

  /**
   * Get the final show window.
   *
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(): Promise<Window>;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(ctx: BaseContext): Promise<Window>;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the top window of the current application. This API uses an asynchronous callback to return the result.
   * If no child window is available, the main window of the application is returned.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Top window or main window is null or destroyed.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the top window of the current application. This API uses a promise to return the result.
   * If no child window is available, the main window of the application is returned.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Top window or main window is null or destroyed.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext): Promise<Window>;

  /**
   * Minimize all app windows.
   *
   * @param { long } id - ID of the display.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Minimize all app windows.
   *
   * @param { long } id - ID of the display.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long, callback: AsyncCallback<void>): void;

  /**
   * Minimize all app windows.
   *
   * @param { long } id - ID of the display.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Minimize all app windows.
   *
   * @param { long } id - ID of the display.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long): Promise<void>;

  /**
   * Minimize all app windows, exclude the specified main window.
   *
   * Device Behavior Differences: This interface can be normally invoked on Phone devices.
   *     On other devices, the call will not take effect.
   *
   * @param { long } displayId - ID of the display.
   * @param { int } excludeWindowId - ID of the main window will be excluded.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible casue: 1. Winodw is nullptr;
   *                     2. Failed to find specified window by id.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function minimizeAllWithExclusion(displayId: long, excludeWindowId: int): Promise<void>;

  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(callback: AsyncCallback<void>): void;

  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(): Promise<void>;

  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function setWindowLayoutMode(mode: WindowLayoutMode, callback: AsyncCallback<void>): void;

  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function setWindowLayoutMode(mode: WindowLayoutMode): Promise<void>;

  /**
   * Sets whether to enable gesture navigation.
   *
   * @param { boolean } enable - Gesture navigation if true, or disable if false.
   * @param { AsyncCallback<void> } callback - The callback of setGestureNavigationEnabled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable gesture navigation.
   *
   * @param { boolean } enable - Gesture navigation if true, or disable if false.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean): Promise<void>;

  /**
   * Set watermark image.
   *
   * @param { image.PixelMap } pixelMap - Watermark image.
   * @param { boolean } enable - Show watermark if true.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean): Promise<void>;

  /**
   * Set watermark image.
   *
   * @param { image.PixelMap } pixelMap - Watermark image.
   * @param { boolean } enable - Show watermark if true.
   * @param { AsyncCallback<void> } callback - The callback of setWaterMarkImage.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Shift window focus within the same application. And the window type contains only main window and subwindow.
   *
   * @param { int } sourceWindowId - Window id which the focus shift from.
   * @param { int } targetWindowId - Window id which the focus shift to.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Shifts the window focus from the source window to the target window in the same application.
   * The window focus can be shifted between the main window and a child window.
   *
   * @param { int } sourceWindowId - Window id which the focus shift from.
   * @param { int } targetWindowId - Window id which the focus shift to.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. The window is not created or destroyed;
   *                     2. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported.
   *                     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function shiftAppWindowFocus(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * Set specific system window zIndex
   *
   * @param { WindowType } windowType - Indicates window type.
   * @param { int } zIndex - ZIndex.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: Invalid window type.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function setSpecificSystemWindowZIndex(windowType: WindowType, zIndex: int): Promise<void>;

  /**
   * Transfers an input event from one window to another within the same application, particularly in split-window scenarios.
   * It takes effect only for the main window and its child windows on 2-in-1 devices.
   *
   * @param { int } sourceWindowId - ID of the source window. You are advised to call getWindowProperties() to obtain the window ID.
   * @param { int } targetWindowId - ID of the target window. You are advised to call getWindowProperties() to obtain the window ID.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error.
   *     Possible cause: 1. Mandatory parameters are left unspecified;
   *                     2. Failed to convert parameter to sourceWindowId;
   *                     3. Failed to convert parameter to targetWindowId;
   *                     4. Invalid sourceWindowId or targetWindowId.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *                     2. TargetWindow cannot find: not created or not belong to current process;
   *                     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *                     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function shiftAppWindowPointerEvent(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * Shift window touch event within the same application. And the window type contains only main window and subwindow.
   *
   * @param { int } sourceWindowId - Window id which the touch event shift from.
   * @param { int } targetWindowId - Window id which the touch event shift to.
   * @param { int } fingerId - Finger id in touch event.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported. Function shiftAppWindowTouchEvent can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *                     2. TargetWindow cannot find: not created or not belong to current process;
   *                     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *                     2. The two windows are not from the same process.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  function shiftAppWindowTouchEvent(sourceWindowId: int, targetWindowId: int, fingerId: int): Promise<void>;

  /**
   * Get info of visible windows.
   *
   * @returns { Promise<Array<WindowInfo>> } - Promise that returns windowInfo list.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  /**
   * Get info of visible windows.
   *
   * @permission ohos.permission.VISIBLE_WINDOW_INFO
   * @returns { Promise<Array<WindowInfo>> } - Promise that returns windowInfo list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   *     Possible cause: Need ohos.permission.VISIBLE_WINDOW_INFO permission.
   * @throws { BusinessError } 801 - Capability not supported. Function getVisibleWindowInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getVisibleWindowInfo(): Promise<Array<WindowInfo>>;

  /**
   * gets snapshot of window
   *
   * @param { int } windowId - Indicates target window id.
   * @returns { Promise<image.PixelMap> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getSnapshot(windowId: int): Promise<image.PixelMap>;

  /**
   * Get windows by coordinate.
   *
   * @param { long } displayId - Indicate the id of display.
   * @param { int } [windowNumber] - Indicate the Number of query windows. If the value is less than or equal to 0,
   *    the function returns all visible windows at the target coordinate in the display. Default Value: 0.
   * @param { int } [x] - Indicate the X-coordinate of the window. If the value is less than or equal to 0,
   *    the function returns all visible windows in the display. Default Value: -1.
   * @param { int } [y] - Indicate the Y-coordinate of the window. If the value is less than or equal to 0,
   *    the function returns all visible windows in the display. Default Value: -1.
   * @returns { Promise<Array<Window>> } Promise used to return the window.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *    capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getWindowsByCoordinate(displayId: long, windowNumber?: int, x?: int, y?: int):
      Promise<Array<Window>>;

  /**
   * Get Layout info of all windows on the selected display.
   *
   * @param { number } displayId - Indicate the id of display.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return the WindowLayoutInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  /**
   * Get Layout info of all windows on the selected display.
   *
   * @param { long } displayId - Indicate the id of display.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return the WindowLayoutInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function getAllWindowLayoutInfo(displayId: long): Promise<Array<WindowLayoutInfo>>;

  /**
   * List the window modes of the foreground window on the specified display.
   *
   * @param { long } [displayId] - Indicate the id of display.
   *     Not passing or passing a value of null or undefined indicates querying all screens.
   * @returns { Promise<int> } Promise used to return the window modes.
   * @throws { BusinessError } 801 - Capability not supported. function getGlobalWindowMode can not work correctly due
   *     to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range;
   *                                                                      2. The parameter format is incorrect.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getGlobalWindowMode(displayId?: long): Promise<int>;

  /**
   * Get the name of the top navigation destination.
   *
   * @param { int } windowId - Indicates target window id.
   * @returns { Promise<string> } The name of the top navigation destination.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getTopNavDestinationName(windowId: int): Promise<string>;

  /**
   * Set or remove the watermark image for all windows of the application.
   *
   * @param { image.PixelMap | undefined } pixelMap - The image that will be set as the watermark for all windows of the
   *     application. If undefined, it removes the watermark from all windows.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function setWatermarkImageForAppWindows can not to work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function setWatermarkImageForAppWindows(pixelMap: image.PixelMap | undefined): Promise<void>;

  /**
   * Register the callback of systemBarTintChange
   *
   * @param { 'systemBarTintChange' } type - The value is fixed at 'systemBarTintChange', indicating the property change event of the system bar.
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the system bar.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void;

  /**
   * Register the callback of systemBarTintChange
   *.
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the system bar.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onSystemBarTintChange(callback: Callback<SystemBarTintState>): void;

  /**
   * Unregister the callback of systemBarTintChange
   *
   * @param { 'systemBarTintChange' } type - The value is fixed at 'systemBarTintChange', indicating the property change
   *     event of the system bar.
   * @param { Callback<SystemBarTintState> } [callback] - Callback used to return the properties of the system bar.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. Incorrect parameter types; 
   *     2. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

   /**
   * Unregister the callback of systemBarTintChange
   *
   * @param { Callback<SystemBarTintState> } [callback] - Callback used to return the properties of the system bar.
   *    If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offSystemBarTintChange(callback?: Callback<SystemBarTintState>): void;

  /**
   * Register the callback for gesture navigation enabled changes.
   *
   * @param { 'gestureNavigationEnabledChange' } type the event of gesture navigation enabled changes.
   * @param { Callback<boolean> } callback Callback used to return the result whether gesture navigation enabled or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'gestureNavigationEnabledChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for gesture navigation enabled changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether gesture navigation enabled or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onGestureNavigationEnabledChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for gesture navigation enabled changes.
   *
   * @param { 'gestureNavigationEnabledChange' } type the event of gesture navigation enabled changes.
   * @param { Callback<boolean> } [callback] Callback used to return the result whether gesture navigation enabled or
   *    not.
   *    If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
   *                                                                  2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'gestureNavigationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for gesture navigation enabled changes.
   *
   * @param { Callback<boolean> } [callback] Callback used to return the result whether gesture navigation enabled or
   *    not.
   *    If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offGestureNavigationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * Register the callback for watermark flag change.
   *
   * @param { 'waterMarkFlagChange' } type the event of watermark flag change.
   * @param { Callback<boolean> } callback Callback used to return the result whether watermark flag change or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'waterMarkFlagChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for watermark flag change.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether watermark flag change or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onWaterMarkFlagChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for watermark flag change.
   *
   * @param { 'waterMarkFlagChange' } type the event of watermark flag change.
   * @param { Callback<boolean> } [callback] Callback used to return the result whether watermark flag change or not.
   *    If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
   * <br>2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'waterMarkFlagChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for watermark flag change.
   *
   * @param { Callback<boolean> } [callback] Callback used to return the result whether watermark flag change or not.
   *    If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offWaterMarkFlagChange(callback?: Callback<boolean>): void;

  /**
   * Register the callback for application process focus state changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether application process
   *      focused or not.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onApplicationFocusStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for application process focus state changes.
   *
   * @param { Callback<boolean> } [callback] Callback used to return the result whether application process
   *      focused or not. If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offApplicationFocusStateChange(callback?: Callback<boolean>): void;

  /**
   * Sets starting window background color
   *
   * @param { string } moduleName - module Name that needs to be set.
   * @param { string } abilityName - ability Name that needs to be set.
   * @param { ColorMetrics } color - Color metrics.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.function setStartWindowBackgroundColor can not to work
   *     correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Parameter exceeds the allowed length.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function setStartWindowBackgroundColor(moduleName: string, abilityName: string, color: ColorMetrics): Promise<void>;

  /**
   * Notify screenshot event
   *
   * @param { ScreenshotEventType } eventType - Screenshot event type.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function notifyScreenshotEvent(eventType: ScreenshotEventType): Promise<void>;

  /**
   * Get all main window info on device
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @returns { Promise<Array<MainWindowInfo>> } Promise used to return the list of main window info.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllMainWindowInfo(): Promise<Array<MainWindowInfo>>;

  /**
   * Get snapshot of the specified windows
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @param { Array<int> } windowId - List of main window IDs to be obtained.
   * @param { WindowSnapshotConfiguration } config - Configuration for getting windows' snapshot.
   * @returns { Promise<Array<image.PixelMap | undefined>> } The list of snapshot PixelMaps, arranged in
   *     the order of the provided window ID array. If window not found or not main window, will return undefined.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getMainWindowSnapshot(windowId: Array<int>, config: WindowSnapshotConfiguration):
    Promise<Array<image.PixelMap | undefined>>;

  /**
   * Create a subwindow with a specific name and bind parent
   *
   * @param { string } name - Indicates window name.
   * @param { int } parentId - Indicates parent window id. The window id is a non-negative number and exists.
   * @param { BaseContext } ctx - Indicates the context on which the window depends.
   * @param { WindowEventListener } parentWindowEventListener - Indicates the event listener of parent window.
   * @returns { Promise<Window> } The interface for creating a window returns a promise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     This can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   *     Possible cause: The parent window does not exist or has been destroyed.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function createSubWindowAndBindParent(name: string, parentId: int, ctx: BaseContext,
    parentWindowEventListener: WindowEventListener): Promise<Window>;

  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LANDSCAPE = 2,

    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 3,

    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * Follow the rotation of the sensor, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 5,

    /**
     * Follow the rotation of the sensor, only work in the vertical direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the vertical direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 6,

    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * Follow the rotation of the sensor, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 8,

    /**
     * Follow the rotation of the sensor, only work in the vertical direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the vertical direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,

    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * Locked mode, keep the same direction as previous one.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Locked mode, keep the same direction as previous one.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCKED = 11,

    /**
     * Follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 12,

    /**
     * Display in portrait orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT = 13,

    /**
     * Display in landscape orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE = 14,

    /**
     * Display in inverted portrait orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT_INVERTED = 15,

    /**
     * Display in inverted landscape orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE_INVERTED = 16,

    /**
     * Follow the desktop rotate mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 17
  }

  /**
   * Type of blur style
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum BlurStyle {
    /**
     * Close blur.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OFF = 0,
    /**
     * Blur style thin.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THIN = 1,
    /**
     * Blur style regular.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 2,
    /**
     * Blur style thick.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THICK = 3
  }

  /**
   * Enum for window callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 10
   */
  /**
   * Enum for window callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum WindowEventType {
    /**
     * The value of window event is window show
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window show
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_SHOWN = 1,
    /**
     * The value of window event is window active
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window active
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_ACTIVE = 2,
    /**
     * The value of window event is window inactive
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window inactive
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_INACTIVE = 3,
    /**
     * The value of window event is window hide
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window hide
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_HIDDEN = 4,
    /**
     * The value of window event is window destroy
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_DESTROYED = 7
  }

  /**
   * Enum for window maximize presentation
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum MaximizePresentation {
    /**
     * The value means follow immersive state which set by app
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_APP_IMMERSIVE_SETTING = 0,
    /**
     * The value means exit immersive state 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EXIT_IMMERSIVE = 1,
    /**
     * The value means enter immersive state 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE = 2,
    /**
     * The value means enter immersive state and the title bar and dock bar cannot be shown, when the mouse hovers over hot area.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER = 3,
  }

  /**
   * the optional move configuration used in moveWindowToAsync/moveWindowToGlobal
   *
   * @interface MoveConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface MoveConfiguration {
    /**
     * The display id of the screen
     *
     * @type { ?long }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    displayId?: long;
  }

  /**
   * Specific system bar type.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 11
   */
  /**
   * Specific system bar type.
   *
   * @typedef {'status' | 'navigation' | 'navigationIndicator'}
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type SpecificSystemBar = 'status' | 'navigation' | 'navigationIndicator';

  /**
   * Describes the window transition animation type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowTransitionType {
    /**
     * Destroy transition
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DESTROY = 0
  }

  /**
   * Describes the window animation type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum AnimationType {
    /**
     * Window animation type fade in out
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN_OUT = 0,
    /**
     * Window animation type fade in
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN = 1,
  }

  /**
   * Describes the window animation curve
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnimationCurve {
    /**
     * Animation curve type linear
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR = 0,

    /**
     * Animation curve type interpolation spring
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INTERPOLATION_SPRING = 1,

    /**
     * Animation curve type cubic bezier
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CUBIC_BEZIER = 2,
  }

  /**
   * Window animation config
   *
   * @interface WindowAnimationConfig
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowAnimationConfig {
    /**
     * Curve of the animation
     *
     * @type { WindowAnimationCurve }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    curve: WindowAnimationCurve;

    /**
     * Duration of the animation
     *
     * @type { ?long }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration?: long;

    /**
     * Param of animation curve
     *
     * @type { ?WindowAnimationCurveParam }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    param?: WindowAnimationCurveParam;
  }

  /**
   * window transition animation config
   *
   * @interface TransitionAnimation
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransitionAnimation {
    /**
     * transition animation config
     *
     * @type { WindowAnimationConfig }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config: WindowAnimationConfig;
    /**
     * transition animation opacity
     *
     * @type { ?double }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    opacity?: double;
  }

  /**
   * The params of start animation
   *
   * @interface StartAnimationSystemParams
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationSystemParams {
    /**
     * The type of window animation
     *
     * @type { AnimationType }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
    /**
     * The configuration of start animation
     *
     * @type { ?WindowAnimationConfig }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    animationConfig?: WindowAnimationConfig;
  }

  /**
   * The params of start animation
   *
   * @interface StartAnimationParams
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationParams {
    /**
     * The type of window animation
     *
     * @type { AnimationType }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
  }

  /**
   * Window create params
   *
   * @interface WindowCreateParams
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowCreateParams {
    /**
     * The params of start animation
     *
     * @type { ?StartAnimationParams }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationParams?: StartAnimationParams;

    /**
     * The params of system start animation
     *
     * @type { ?StartAnimationSystemParams }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    systemAnimationParams?: StartAnimationSystemParams;
    /**
     * Whether to need start animation
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    needAnimation?: boolean;
  }

  /**
   * The information of keyboard
   *
   * @interface KeyboardInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyboardInfo {
    /**
     * The position and size of keyboard before animation.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    beginRect: Rect;

    /**
     * The position and size of keyboard after animation completed.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    endRect: Rect;

    /**
     * Indicates whether animation exists.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    animated?: boolean;

    /**
     * The configuration of keyboard animation.
     *
     * @type { ?WindowAnimationConfig }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config?: WindowAnimationConfig;
  }

  /**
   * The policy of keyframe.
   *
   * @interface KeyFramePolicy
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface KeyFramePolicy {
    /**
     * Whether to use keyframe.
     *
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * Set the drag interval to notify rect change in millisecond.
     *
     * @type { ?long }
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * Set the drag distance to notify rect change in px.
     *
     * @type { ?int }
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    distance?: int;

    /**
     * Set the rect change animation duration in millisecond.
     *
     * @type { ?long }
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDuration?: long;

    /**
     * Set the rect change animation delay in millisecond
     *
     * @type { ?long }
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDelay?: long;
  }

  /**
   * Window
   *
   * @interface Window
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Window
   *
   * @interface Window
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Window {
    /**
     * Hide window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    /**
     * Hide window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hide window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    /**
     * Hide window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * Hide window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Hide window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    hideWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * Hide window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Hide window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    hideWithAnimation(): Promise<void>;

    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#showWindow
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#showWindow
     */
    show(): Promise<void>;

    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Shows this window. This API uses an asynchronous callback to return the result.
     * This API takes effect only for a system window or an application child window.
     * For the main window of an application, this API moves it at the top when the main window is already displayed.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    showWindow(callback: AsyncCallback<void>): void;

    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Shows this window. This API uses a promise to return the result.
     * This API takes effect only for a system window or an application child window.
     * For the main window of an application, this API moves it at the top when the main window is already displayed.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    showWindow(): Promise<void>;

    /**
     * Show window.
     *
     * @param { ShowWindowOptions } options - options for window show.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function showWindow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Modal subwindow and dialog window can not set focusOnShow.
     * @throws { BusinessError } 1300016 - Parameter validation error. Possible cause: 1. The value of the parameter is out of the allowed range;
     *                                                                                 2. The length of the parameter exceeds the allowed length;
     *                                                                                 3. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    showWindow(options: ShowWindowOptions): Promise<void>;

    /**
     * Show window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Show window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    showWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * Show window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Show window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    showWithAnimation(): Promise<void>;

    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#destroyWindow
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#destroyWindow
     */
    destroy(): Promise<void>;

    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Destroys this window. This API uses an asynchronous callback to return the result.
     * This API takes effect only for a system window or an application child window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    destroyWindow(callback: AsyncCallback<void>): void;

    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Destroys this window. This API uses an asynchronous callback to return the result.
     * This API takes effect only for a system window or an application child window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    destroyWindow(): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#moveWindowTo
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#moveWindowTo
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the position of a window.
     *
     * @param { int } x - Indicate the X-coordinate of the window.
     * @param { int } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * Move window to the position.
     *
     * @param { int } x - Indicates the X-coordinate of the window.
     * @param { int } y - Indicates the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int): Promise<void>;

    /**
     * Move window to the position.
     *
     * @param { int } x - Indicates the X-coordinate of the window.
     * @param { int } y - Indicates the Y-coordinate of the window.
     * @param { MoveConfiguration } [moveConfiguration] - Indicate the window move configuration.
     *     If not provided, the window stays on the current display.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * Move window to the position relative to current screen.
     *
     * @param { int } x - Indicates the X-coordinate of the window relative to current screen.
     * @param { int } y - Indicates the Y-coordinate of the window relative to current screen.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int): Promise<void>;

    /**
     * Move window to the position relative to current screen.
     *
     * @param { int } x - Indicates the X-coordinate of the window relative to current screen.
     * @param { int } y - Indicates the Y-coordinate of the window relative to current screen.
     * @param { MoveConfiguration } [moveConfiguration] - Indicate the window move configuration.
     *     If not provided, the window stays on the current display.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * Move window to the position relative to the primary display.
     *
     * @param { int } x - Indicates the X-coordinate of the window relative to the primary display, measured in px.
     *     This parameter only accepts integer values; any floating-point input will be rounded down.
     * @param { int } y - Indicates the Y-coordinate of the window relative to the primary display, measured in px.
     *     This parameter only accepts integer values; any floating-point input will be rounded down.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    moveWindowToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window.
     * @param { number } height - Indicates the height of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#resize
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window.
     * @param { number } height - Indicates the height of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#resize
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    resize(width: int, height: int): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the size of a window .
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    resize(width: int, height: int, callback: AsyncCallback<void>): void;

    /**
     * Set the size of a window.
     *
     * @param { int } width - Indicates the width of the window. The width should be greater than 0.
     * @param { int } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resizeAsync(width: int, height: int): Promise<void>;

    /**
     * Set whether to follow parent window layout. Only subwindows and dialogs are available.
     *
     * @param { boolean } enabled - If true, this window updates the layout follow the parent window.
     *                              If false, this window does not update the layout follow the parent window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *                     2. Internal task error.
     *                     3. The subwindow level is more than one.
     *                     4. The subwindow is following its parent window's position.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and dialog windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>;

    /**
     * Set whether the first level sub window supports maintaining the same relative position with the main window.
     *
     * @param { boolean } enabled - The value true means the first level sub window supports maintaining
     *     the same relative position with the main window, and false means the opposite.
     * @param { WindowAnchor } [anchor] - Window anchor point that setting
     *     when the relative position between the primary sub window and the main window remains unchanged. The
     *     default value is window.WindowAnchor.TOP_Start, meaning the default anchor point is the top-left corner
     *     of the window.
     * @param { int } [offsetX] - The x-axis offset
     *     between the anchor point of the first level sub window and the anchor point of the main window.
     *     The default value is 0.
     * @param { int } [offsetY] - The y-axis offset
     *     between the anchor point of the first level sub window and the anchor point of the main window.
     *     The default value is 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setRelativePositionToParentWindowEnabled can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: int, offsetY?: int): Promise<void>;

    /**
     * Attach to the main window.
     * After attachment, the current window will maintain a fixed relative position with the main window.
     *
     * @param { WindowAnchorInfo } [anchorInfo] - Defines the window anchor point
     *      used to maintain a fixed relative position between the current subwindow and the main window.
     *      If undefined, the anchor point defaults to the top-left corner of the main window with no offset.
     * @param { SubWindowAttachOptions } [attachOptions] - Defines optional behaviors for the layout attachment.
     *      If undefined, no extra behaviors will be applied.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *      Function attachLayoutToParentWindow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *      Possible cause: 1. The window is not created or destroyed;
     *                      2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *      Possible cause: 1. Invalid window type. Only subwindows are supported;
     *                      2. The current window's parent window is not a main window;
     *                      3. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *      Possible cause: 1. The subwindow is following its parent window's layout.
     *                      2. The subwindow is maximized.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    attachLayoutToParentWindow(anchorInfo?: WindowAnchorInfo, attachOptions?: SubWindowAttachOptions): Promise<void>;

    /**
     * Detach from the main window.
     * After detachment, the current window's position will no longer follow the main window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *      Function detachLayoutToParentWindow cannot work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *      Possible cause: 1. The window is not created or destroyed;
     *                      2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *      Possible cause: 1. Invalid window type. Only subwindows are supported;
     *                      2. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *      Possible cause: The subwindow is not attached to the main window.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    detachLayoutToParentWindow(): Promise<void>;

    /**
     * Set the type of a window.
     *
     * @param { WindowType } type - Indicate the type of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType): Promise<void>;

    /**
     * Set the type of a window.
     *
     * @param { WindowType } type - Indicate the type of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType, callback: AsyncCallback<void>): void;

    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode): Promise<void>;

    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode, callback: AsyncCallback<void>): void;

    /**
     * Get the properties of current window
     *
     * @param { AsyncCallback<WindowProperties> } callback - Callback used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowProperties
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

    /**
     * Get the window rectangular area quadruple {left,top,width,height}, left and top represent relative to screen
     * coordinates and are affected by parent window scaling, width and height are the scaling width and height.
     * 
     * @returns { Rect } The quadruple {left,top,width,height} represents respectively the X-coordinate
     * and Y-coordinate of the window relative to current screen, the scaled window width and scaled window height.
     * @throws { BusinessError } 801 - Capability not supported.
     * Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Failed to convert result into JS value object.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    getGlobalRect(): Rect;

    /**
     * Get the properties of current window
     *
     * @returns { Promise<WindowProperties> } Promise used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowProperties
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowProperties(): WindowProperties;

    /**
     * Get the window density of current window.
     *
     * @returns { WindowDensityInfo } Return system density, default density and custom density of window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getWindowDensityInfo(): WindowDensityInfo;

    /**
     * Set whether the current window follows the default density of its screen.
     *
     * @param { boolean } enabled - Use default density if true, or follow system density change if false.
     * @throws { BusinessError } 202 - Permission verification
     *     failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * Set window container color in the active and inactive states.
     *
     * @param { string } activeColor - window container color in active.
     * @param { string } inactiveColor - window container color in inactive.
     * @throws { BusinessError } 202 - Permission verification
     *     failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerModalColor(activeColor: string, inactiveColor: string): void;

    /**
     * Determine whether the window spans multiple screens and displays in full screen mode.
     *
     * @returns { Promise<boolean> } Whether the window spans multiple screens and displays in full screen mode.
     *     The value true means that the window spans multiple screens and displays in full screen mode, and false means
     *     the opposite.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isMainWindowFullScreenAcrossDisplays(): Promise<boolean>;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @param { AsyncCallback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { Promise<AvoidArea> } Area where the window cannot be displayed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Convert avoid area failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: AvoidAreaType): AvoidArea;

    /**
     * Get the avoid area, regardless of whether the area of this type is currently visible.
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Convert avoid area failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea;

    /**
     * Set whether system window type could obtain avoid area.
     *
     * @param { boolean } enabled - If true, the system window type can obtain avoid area. If false, the avoid area obtained by the system window type will always be empty.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only global floating windows, dialog windows,
     *                     or Window Type as system windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether system window type could obtain avoid area.
     *
     * @returns { boolean } enable - If true, the system window type can obtain avoid area. If false, the avoid area obtained by the system window type will always be empty.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create js value failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isSystemAvoidAreaEnabled(): boolean;

    /**
     * Set the flag of the window is shown full screen
     *
     * @param { boolean } isFullScreen - The flag of the window is shown full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the flag of the window is shown full screen
     *
     * @param { boolean } isFullScreen - The flag of the window is shown full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether the main window layout or the child window layout is immersive.
     *
     * @param { boolean } isLayoutFullScreen - Whether the window layout is immersive
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether the main window layout or the child window layout is immersive.
     *
     * @param { boolean } isLayoutFullScreen - Whether the window layout is immersive
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *                                                                  2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to show the system bar of the main window.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar types
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether to show the system bar of the main window.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar types
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether to show the system bar of the main window.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar types
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *                                                                  2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * Sets whether to show the specific system bar of the main window.
     *
     * @param {SpecificSystemBar} name - Type of the system bar to be shown or hidden
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to show the specific system bar of the main window.
     *
     * @param {SpecificSystemBar} name - Type of the system bar to be shown or hidden
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @param {boolean} enableAnimation - Whether using animation during this setting, using animation if true or not using animation if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Get the properties of system bar
     *
     * @returns { SystemBarProperties } Return system bar properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Create js object failed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowSystemBarProperties(): SystemBarProperties;

    /**
     * Set the color of the status bar.
     *
     * @param { ColorMetrics } color - Color metrics.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setStatusBarColor(color: ColorMetrics): Promise<void>;

    /**
     * Get the properties of the status bar.
     *
     * @returns { StatusBarProperty } Return status bar properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed. 
     *                     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getStatusBarProperty(): StatusBarProperty;

    /**
     * Get window state snapshot, including isPcMode information.
     *
     * @returns { Promise<string> } Promise used to return the window state snapshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the api due to limited device
     *     capabilities. Possible cause: The device does not support the api itself.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed;
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: The internal services of the window are not started normally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @stagemodelonly
     * @since 23 dynamic&static
     * @test
     */
    getWindowStateSnapshot(): Promise<string>;

    /**
     * Set whether to disable the gesture back function.
     *
     * @param { boolean } enabled - If true then enable the gesture back function, false then disable the gesture back function.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    setGestureBackEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether the gesture back function is currently disabled.
     *
     * @returns { boolean } enabled - If true then the gesture back function is currently enabled, false then the gesture back function is currently disabled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    isGestureBackEnabled(): boolean;

    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the preferred orientation for the main window.
     * This API uses a promise to return the result.
     * It does not take effect on devices that do not support rotation with the sensor, on 2-in-1 devices or for the child window.
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter value range.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation): Promise<void>;

    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the preferred orientation for the main window.
     * This API uses an asynchronous callback to return the result.
     * It does not take effect on devices that do not support rotation with the sensor, on 2-in-1 devices or for the child window.
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter value range.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * Obtains the orientation of the main window.
     * This API can be called only by the main window.
     *
     * @returns { Orientation } orientation - The orientation config of the window
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredOrientation(): Orientation;

    /**
     * Loads the content of a page, with its path in the current project specified, to this window,
     *     and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window,
     *     and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified,
     *     to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     *     The path is configured in the main_pages.json file of the project.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute for the page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a page, with its path in the current project specified, to this window,
     *     and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window,
     *     and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window,
     *     and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - 	Path of the page from which the content will be loaded.
     *     The path is configured in the main_pages.json file of the project.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute for the page.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * Loads content from a page to this window. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setUIContent
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content from a page to this window. This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setUIContent
     */
    loadContent(path: string): Promise<void>;

    /**
     * Get the UIContext associate with the window content.
     *
     * @returns { UIContext } the object of UIContext.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtain a UIContext instance.
     *
     * @returns { UIContext } UIContext instance obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getUIContext() : UIContext;

    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     *                          In the stage model, the path is configured in the main_pages.json file of the project.
     *                          In the FA model, the path is configured in the config.json file of the project.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setUIContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window.
     * This API uses a promise to return the result.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     *                          In the stage model, the path is configured in the main_pages.json file of the project.
     *                          In the FA model, the path is configured in the config.json file of the project.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setUIContent(path: string): Promise<void>;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute
     *     to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call
     *     this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to 
     *     transfer the state attribute for the page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute
     *     to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call
     *     this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute
     *     to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call
     *     this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to
     *     transfer the state attribute for the page.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * Checks whether the window is displayed
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowShowing
     */
    isShowing(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the window is displayed
     *
     * @returns { Promise<boolean> } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowShowing
     */
    isShowing(): Promise<boolean>;

    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isWindowShowing(): boolean;

    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register the callback of window size change
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change
     *     event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * Register the callback of windowSizeChange
     *
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<Size>): void;

    /**
     * Unregister the callback of window size change
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Unregister the callback of window size change
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unregister the callback of window size change
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change
     *     event.
     * @param { Callback<Size> } [callback] - Callback used to return the window size.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * Unregister the callback of windowSizeChange
     *
     * @param { Callback<Size> } [callback] - Callback used to return the window size.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<Size>): void;

    /**
     * Register the callback of systemAvoidAreaChange
     *
     * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#on_avoidAreaChange
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * Unregister the callback of systemAvoidAreaChange
     *
     * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#off_avoidAreaChange
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to
     *    the avoid area.
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to
     *    the avoid area.
     * @param { Callback<AvoidAreaOptions> } [callback] - Callback used to return the area.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { Callback<AvoidAreaOptions> } [callback] - Callback used to return the area.
     *    If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void;

    /**
     * Register the callback of keyboard height change. This API only takes effect
     *     when the soft keyboard is invoked from this window and overlaps with it.
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange',
     *     indicating the keyboard height change event.
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Register the callback of keyboard height change. This API only takes effect
     *     when the soft keyboard is invoked from this window and overlaps with it.
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange',
     *     indicating the keyboard height change event.
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'keyboardHeightChange', callback: Callback<int>): void;

    /**
     * Register the callback of keyboard height change. This API only takes effect
     *    when the soft keyboard is invoked from this window and overlaps with it.
     *
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onKeyboardHeightChange(callback: Callback<int>): void;

    /**
     * Unregister the callback of keyboard height change
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange',
     *     indicating the keyboard height change event.
     * @param { Callback<int> } [callback] - Callback used to return the current keyboard height,
     *     which is an integer, in px. If not provided, all callbacks for the given event type will be removed.
     * If a value is passed in, the corresponding subscription is canceled.
     * If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Unregister the callback of keyboard height change
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange',
     *     indicating the keyboard height change event.
     * @param { Callback<int> } [callback] - Callback used to return the current keyboard height,
     *     which is an integer, in px. If not provided, all callbacks for the given event type will be removed.
     * If a value is passed in, the corresponding subscription is canceled.
     * If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'keyboardHeightChange', callback?: Callback<int>): void;

    /**
     * Unregister the callback of keyboard height change
     *
     * @param { Callback<int> } [callback] - Callback used to return the current keyboard height,
     *     which is an integer, in px. If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offKeyboardHeightChange(callback?: Callback<int>): void;

    /**
     * Register the callback of keyboard will show
     *
     * @param { 'keyboardWillShow' } type - The value is fixed at 'keyboardWillShow', indicating the start of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard show animation start.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly
     *     due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard show animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardWillShow(callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will show
     *
     * @param { 'keyboardWillShow' } type - The value is fixed at 'keyboardWillShow', indicating the start of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly
     *     due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will hide
     *
     * @param { 'keyboardWillHide' } type - The value is fixed at 'keyboardWillHide', indicating the start of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard hide animation start.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillHide can not work correctly 
     *     due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard hide animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardWillHide(callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will hide
     *
     * @param { 'keyboardWillHide' } type - The value is fixed at 'keyboardWillHide', indicating the start of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillHide can not work correctly
     *     due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboardDidShow
     *
     * @param { 'keyboardDidShow' } type - The value is fixed at 'keyboardDidShow', indicating the completion of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardDidShow(callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboardDidShow
     *
     * @param { 'keyboardDidShow' } type - The value is fixed at 'keyboardDidShow', indicating the completion of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboardDidHide
     *
     * @param { 'keyboardDidHide' } type - The value is fixed at 'keyboardDidHide', indicating the completion of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardDidHide(callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboardDidHide
     *
     * @param { 'keyboardDidHide' } type - The value is fixed at 'keyboardDidHide', indicating the completion of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * Subscribes to the touch event outside this window.
     *
     * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'touchOutside', callback: Callback<void>): void;

    /**
     * Subscribes to the touch event outside this window.
     *
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onTouchOutside(callback: Callback<void>): void;

    /**
     * Unsubscribes from the touch event outside this window.
     *
     * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'touchOutside', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event outside this window.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offTouchOutside(callback?: Callback<void>): void;

    /**
     * Window displayId change callback on.
     *
     * @param { 'displayIdChange' } type - The value is fixed at 'displayIdChange', indicating the Display this window
     *    is current showing has changed.
     * @param { Callback<long> } callback - Callback used to notify the Display this window is current showing has
     *    changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */   
    on(type: 'displayIdChange', callback: Callback<long>): void;

    /**
     * Window displayId change callback on.
     *
     * @param { Callback<long> } callback - Callback used to notify the Display this window is current showing has
     *    changed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */   
    onDisplayIdChange(callback: Callback<long>): void;


    /**
     * Window displayId change callback off.
     *
     * @param { 'displayIdChange' } type - The value is fixed at 'displayIdChange', indicating the Display this window
     *    is current showing has changed.
     * @param { Callback<long> } [callback] - Callback used to notify the Display this window is current showing has
     *    changed.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */
    off(type: 'displayIdChange', callback?: Callback<long>): void;

    /**
     * Window displayId change callback off.
     *
     * @param { Callback<long> } [callback] - Callback used to notify the Display this window is current showing has
     *    changed.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offDisplayIdChange(callback?: Callback<long>): void;

    /**
     * Window visibility change callback on.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Subscribes to the visibility status change event of this window.
     *
     * @param { 'windowVisibilityChange' } type - Event type. The value is fixed at 'windowVisibilityChange', indicating
     *    the visibility status change event.
     * @param { Callback<boolean> } callback - Callback used to return the visibility status of the window, which is a
     *                                            Boolean value.
     *                                         The value true means that the window is visible, and false means the
     *                                            opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowVisibilityChange', callback: Callback<boolean>): void;

    /**
     * Subscribes to the visibility status change event of this window.
     *
     * @param { Callback<boolean> } callback - Callback used to return the visibility status of the window,
     *    which is a Boolean value.
     *    The value true means that the window is visible, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowVisibilityChange(callback: Callback<boolean>): void;

    /**
     * Window visibility change callback off.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unsubscribes from the visibility status change event of this window.
     *
     * @param { 'windowVisibilityChange' } type - Event type. The value is fixed at 'windowVisibilityChange', indicating
     *    the visibility status change event.
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window.
     *                                         If a value is passed in, the corresponding subscription is canceled.
     *                                         If no value is passed in, all subscriptions to the specified event are
     *                                            canceled.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void;

    /**
     * Unsubscribes from the visibility status change event of this window.
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowVisibilityChange(callback?: Callback<boolean>): void;

    /**
     * Register the callback for occlusion state changed.
     *
     * @param { 'occlusionStateChanged' } type - The event of occlusion state changed.
     * @param { Callback<OcclusionState> } callback - Callback used to return the result of occlusion state.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void;

    /**
     * Register the callback for occlusion state changed.
     *
     * @param { Callback<OcclusionState> } callback - Callback used to return the result of occlusion state.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onOcclusionStateChanged(callback: Callback<OcclusionState>): void;

    /**
     * Unregister the callback for occlusion state changed.
     *
     * @param { 'occlusionStateChanged' } type - The event of occlusion state changed.
     * @param { Callback<OcclusionState> } [callback] - Callback used to return the result of occlusion state.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void;

    /**
     * Unregister the callback for occlusion state changed.
     *
     * @param { Callback<OcclusionState> } [callback] - Callback used to return the result of occlusion state.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offOcclusionStateChanged(callback?: Callback<OcclusionState>): void;

    /**
     * Register the callback for frame metrics measured.
     *
     * @param { 'frameMetricsMeasured' } type - The event of frame metrics measured.
     * @param { Callback<FrameMetrics> } callback - Callback used to return the result of frame metrics.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void;

    /**
     * Register the callback for frame metrics measured.
     *
     * @param { Callback<FrameMetrics> } callback - Callback used to return the result of frame metrics.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void;

    /**
     * Unregister the callback for frame metrics measured.
     *
     * @param { 'frameMetricsMeasured' } type - The event of frame metrics measured.
     * @param { Callback<FrameMetrics> } [callback] - Callback used to return the result of frame metrics.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void;

    /**
     * Unregister the callback for frame metrics measured.
     *
     * @param { Callback<FrameMetrics> } [callback] - Callback used to return the result of frame metrics.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void;

    /**
     * System density change callback on.
     *
     * @param { 'systemDensityChange' } type - The value is fixed at 'systemDensityChange', indicating the system
     *    density is current has changed.
     * @param { Callback<double> } callback - Callback used to notify the system density is current has changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'systemDensityChange', callback: Callback<double>): void;

    /**
     * System density change callback on.
     *
     * @param { Callback<double> } callback - Callback used to notify the system density is current has changed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSystemDensityChange(callback: Callback<double>): void;

    /**
     * System density change callback off.
     *
     * @param { 'systemDensityChange' } type - The value is fixed at 'systemDensityChange', indicating the system
     *     density is current showing has changed.
     * @param { Callback<double> } [callback] - Callback used to notify the system density is current has changed.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types; 
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'systemDensityChange', callback?: Callback<double>): void;

    /**
     * System density change callback off.
     *
     * @param { Callback<double> } [callback] - Callback used to notify the system density is current has changed.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSystemDensityChange(callback?: Callback<double>): void;

    /**
     *  Register Callback for window spans multiple screens and displays in full screen mode changed.
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - The value is fixed at
     *     'mainWindowFullScreenAcrossDisplaysChanged', indicating the window spans multiple screens and displays in full
     *     screen mode changed.
     * @param { Callback<boolean> } callback - Callback used to notify the window spans multiple screens and displays in
     *     full screen mode changed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    on(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback: Callback<boolean>): void;

    /**
     *  Register Callback for window spans multiple screens and displays in full screen mode changed.
     *
     * @param { Callback<boolean> } callback - Callback used to notify the window spans multiple screens and displays in
     *     full screen mode changed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onMainWindowFullScreenAcrossDisplaysChanged(callback: Callback<boolean>): void;

    /**
     * Unregister Callback for window spans multiple screens and displays in full screen mode changed.
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - The value is fixed at
     *     'mainWindowFullScreenAcrossDisplaysChanged', indicating the window spans multiple screens and displays in full
     *     screen mode changed.
     * @param { Callback<boolean> } [callback] - Callback used to notify the window spans multiple screens and displays
     *    in full screen mode changed. If not provided, all callbacks of this type will be unregistered.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    off(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback?: Callback<boolean>): void;

    /**
     * Unregister Callback for window spans multiple screens and displays in full screen mode changed.
     *
     * @param { Callback<boolean> } [callback] - Callback used to notify the window spans multiple screens and displays
     *     in full screen mode changed. If not provided, all callbacks of this type will be unregistered.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    offMainWindowFullScreenAcrossDisplaysChanged(callback?: Callback<boolean>): void;

    /**
     * Register the callback function that has no interaction for a long time.
     * Interaction events include physical keyboard input events and screen touch/click events,
     * but not soft keyboard input events.
     * @param { 'noInteractionDetected' } type - The value is fixed at 'noInteractionDetected',
     *     indicating the window has no interaction for a long time.
     * @param { number } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void;

    /**
     * Subscribes to non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { long } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onNoInteractionDetected(timeout: long, callback: Callback<void>): void;

    /**
     * Unsubscribes from non-interaction events in a window within the specified period.
     * Interaction events include physical keyboard input events and screen touch/click events, but not soft keyboard input events.
     *
     * @param { 'noInteractionDetected' } type - The value is fixed at 'noInteractionDetected', indicating the window has no interaction for a long time.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'noInteractionDetected', callback?: Callback<void>): void;

    /**
     * Unsubscribes from non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offNoInteractionDetected(callback?: Callback<void>): void;

    /**
     * Register the callback of screenshot, only the focused window called back
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Register the callback of screenshot, only the focused window called back
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'screenshot', callback: Callback<void>): void;

    /**
     * Register the callback of screenshot, only the focused window called back
     *
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshot(callback: Callback<void>): void;

    /**
     * Unregister the callback of screenshot
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Unregister the callback of screenshot
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } [callback] - Callback invoked when a screenshot event occurs.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types; 
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'screenshot', callback?: Callback<void>): void;

    /**
     * Unregister the callback of screenshot
     *
     * @param { Callback<void> } [callback] - Callback invoked when a screenshot event occurs.
     *    If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshot(callback?: Callback<void>): void;

    /**
     * Register the callback of screenshot app event
     *
     * @param { 'screenshotAppEvent' } type - The value is fixed at 'screenshotAppEvent', indicating the screenshot app
     *     event.
     * @param { Callback<ScreenshotEventType> } callback - Callback invoked when a screenshot app event occurs.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void;

    /**
     * Register the callback of screenshot app event
     *
     * @param { Callback<ScreenshotEventType> } callback - Callback invoked when a screenshot app event occurs.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void;

    /**
     * Unregister the callback of screenshot app event
     *
     * @param { 'screenshotAppEvent' } type - The value is fixed at 'screenshotAppEvent', indicating the screenshot app
     *     event.
     * @param { Callback<ScreenshotEventType> } [callback] - Callback invoked when a screenshot app event occurs.
     *     If not provided, all callbacks of the screenshot app event will be unregistered.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void;

    /**
     * Unregister the callback of screenshot app event
     *
     * @param { 'screenshotAppEvent' } type - The value is fixed at 'screenshotAppEvent', indicating the screenshot app
     *     event.
     * @param { Callback<ScreenshotEventType> } [callback] - Callback invoked when a screenshot app event occurs.
     *     If not provided, all callbacks of the screenshot app event will be unregistered.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void;

    /**
     * Register the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch', indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Subscribes to click or touch events in a window covered by a modal window. This API takes effect only when it is called by a modal window.
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch', indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'dialogTargetTouch', callback: Callback<void>): void;

    /**
     * Subscribes to click or touch events in a window covered by a modal window.
     *     This API takes effect only when it is called by a modal window.
     *
     * @param { Callback<void> } callback
     *     - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onDialogTargetTouch(callback: Callback<void>): void;

    /**
     * Unregister the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch',
     *  indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Unsubscribes from the touch event of the target window in the modal window mode.
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch',
     *  indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'dialogTargetTouch', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event of the target window in the modal window mode.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offDialogTargetTouch(callback?: Callback<void>): void;

    /**
     * Register the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Subscribes to the window lifecycle change event.
     *
     * @param { 'windowEvent' } type - Event type.
     *     The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'windowEvent', callback: Callback<WindowEventType>): void;

     /**
     * Subscribes to the window lifecycle change event.
     *
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
     onWindowEvent(callback: Callback<WindowEventType>): void;

    /**
     * Unregister the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Unsubscribes from the window lifecycle change event.
     *
     * @param { 'windowEvent' } type - Event type.
     *     The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;

    /**
     * Unsubscribes from the window lifecycle change event.
     *
     * @param { Callback<WindowEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowEvent(callback?: Callback<WindowEventType>): void;

    /**
     * Register the callback of windowStatusChange
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Register the callback of window status change
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Register the callback of window status change
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void;

    /**
     * Register the callback of windowStatusChange
     *
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported.
     *  Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    onWindowStatusChange(callback: Callback<WindowStatusType>): void;

    /**
     * Unregister the callback of window status change
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unregister the callback of window status change
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Unregister the callback of window status change
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void;

    /**
     * Unregister the callback of window status change
     *
     * @param { Callback } [callback] - Callback used to return the window status.
     * If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     * Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    offWindowStatusChange(callback?: Callback<WindowStatusType>): void;

    /**
     * Register the callback of windowStatusDidChange. The windowRect has been updated when this callback is triggered.
     *
     * @param { 'windowStatusDidChange' } type - The value is fixed at 'windowStatusDidChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void;

    /**
     * Register the callback of window status did change. The windowRect has been updated when this callback is triggered.
     *
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowStatusDidChange(callback: Callback<WindowStatusType>): void;

    /**
     * Unregister the callback of windowStatusDidChange
     *
     * @param { 'windowStatusDidChange' } type - The value is fixed at 'windowStatusDidChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void;

    /**
     * Unregister the callback of window status did change
     *
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void;

    /**
     * Subscribes to the event indicating that the child window is closed.
     * This event is triggered only when the user clicks the system-provided close button 
     *     in the upper right corner to close the child window.
     * It is not triggered when the child window is closed in other ways.
     *
     * @param { 'subWindowClose' } type - Event type.
     *     The value is fixed at 'subWindowClose', indicating the child window close event.
     * @param { Callback<void> } callback - Callback invoked when the close button in the upper right corner
     *     of the child window is clicked.
     *     The internal logic of the callback function requires a return value of the Boolean type.
     *     The return value determines whether to continue to close the child window.
     *     The value true means not to close the child window, and false means to continue to close the child window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subWindowClose', callback: Callback<void>): void;

    /**
     * Subscribes to the event indicating that the child window is closed.
     * This event is triggered only when the user clicks the system-provided
     * close button in the upper right corner to close the child window.
     * It is not triggered when the child window is closed in other ways.
     *
     * @param { Callback<void> } callback - Callback invoked when the close
     *     button in the upper right corner of the child window is clicked.
     *     The internal logic of the callback function requires a return value of the Boolean type.
     *     The return value determines whether to continue to close the child window.
     *     The value true means not to close the child window, and false means to continue to close the child window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSubWindowClose(callback: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the child window is closed.
     *
     * @param { 'subWindowClose' } type - Event type. 
     *     The value is fixed at 'subWindowClose', indicating the child window close event.
     * @param { Callback<void> } callback - Callback invoked when the close button in the upper right corner
     *     of the child window is clicked.
     *     The internal logic of the callback function requires a return value of the Boolean type.
     *     The return value determines whether to continue to close the child window.
     *     The value true means not to close the child window, and false means to continue to close the child window.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subWindowClose', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the child window is closed.
     *
     * @param { Callback<void> } [callback ] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSubWindowClose(callback?: Callback<void>): void;

    /**
     * Subscribes to the event indicating that the main window or child window will be closed.
     * This event is triggered only when the user clicks the close button in the system-provided title bar to close the window.
     * It is not triggered when the window is closed in other ways.
     *
     * @param { 'windowWillClose' } type - Event type. The value is fixed at 'windowWillClose', indicating the window close event.
     * @param { Callback<void, Promise<boolean>> } callback - Callback used to when the close button in the upper right corner of the window is clicked.
     *                                                        The internal logic of the callback function requires a return value of the Promise type.
     *                                                        In the returned Promise function, resolve(true) means not to close the window,
     *                                                        and resolve(false) or reject means to continue to close the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void;

    /**
     * Subscribes to the event indicating that the main window or child window will be closed.
     * This event is triggered only when the user clicks the close button in the system-provided title bar to close the window.
     * It is not triggered when the window is closed in other ways.
     *
     * @param { Callback<void, Promise<boolean>> } callback - Callback used to when the close button in the upper right corner of the window is clicked.
     *    The internal logic of the callback function requires a return value of the Promise type.
     *    In the returned Promise function, resolve(true) means not to close the window,
     *    and resolve(false) or reject means to continue to close the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowWillClose(callback: Callback<void, Promise<boolean>>): void;

    /**
     * Unsubscribes from the event indicating that the main window or child window will be closed.
     *
     * @param { 'windowWillClose' } type - Event type. The value is fixed at 'windowWillClose', indicating the window close event.
     * @param { Callback<void, Promise<boolean>> } callback - Callback used to when the close button in the upper right corner of the window is clicked.
     *                                                        The internal logic of the callback function requires a return value of the Promise type.
     *                                                        It does not return any parameter. In the returned Promise function,
     *                                                        resolve(true) means not to close the window,
     *                                                        and resolve(false) or reject means to continue to close the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void;

    /**
     * Unsubscribes from the event indicating that the main window or child window will be closed.
     *
     * @param { Callback<void, Promise<boolean>> } [callback] - Unregister the callback function.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void;

    /**
     * Register the callback of window highlight state change
     *
     * @param { 'windowHighlightChange' } type - The value is fixed at 'windowHighlightChange', indicating the window highlight state change event.
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowHighlightChange', callback: Callback<boolean>): void;

    /**
     * Register the callback of window highlight state change
     *
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowHighlightChange(callback: Callback<boolean>): void;

    /**
     * Unregister the callback of window highlight state change
     *
     * @param { 'windowHighlightChange' } type - The value is fixed at 'windowHighlightChange', indicating the window highlight change event.
     * @param { Callback<boolean> } [callback] - Callback used to return the highlight status of the window.
     *     if not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowHighlightChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the callback of window highlight state change
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the highlight status of the window.
     *     if not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowHighlightChange(callback?: Callback<boolean>): void;
  
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token - token of the target window.
     * @param { Callback<void> } deathCallback - the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token - token of the target window.
     * @param { Callback<void> } deathCallback - the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>): Promise<void>;

    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token token of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token token of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>): Promise<void>;

    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    bindDialogTarget(
      requestInfo: dialogRequest.RequestInfo,
      deathCallback: Callback<void>,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Sets whether the modal window responds to the back gesture event. An error code is returned if this API is called for a non-modal window.
     *
     * @param { boolean } enabled - Whether to respond to the back gesture event.
     *                              The value true means to respond to the back gesture event and trigger the onBackPress callback,
     *                              and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDialogBackGestureEnabled(enabled: boolean): Promise<void>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowSupportWideGamut
     */
    isSupportWideGamut(): Promise<boolean>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowSupportWideGamut
     */
    isSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(): Promise<boolean>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowColorSpace
     */
    setColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowColorSpace
     */
    setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * Obtains the set color space.
     *
     * @returns { Promise<ColorSpace> } Promise used to return the current color space.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowColorSpace
     */
    getColorSpace(): Promise<ColorSpace>;

    /**
     * Obtains the set color space.
     *
     * @param { AsyncCallback<ColorSpace> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowColorSpace
     */
    getColorSpace(callback: AsyncCallback<ColorSpace>): void;

    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowColorSpace(): ColorSpace;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBackgroundColor
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBackgroundColor
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the background color of window.
     *
     * @param { string | ColorMetrics } color - the specified color.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setWindowBackgroundColor(color: string | ColorMetrics): void;

    /**
     * Sets the shadow enable of window.
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { boolean } enable - Enable or disable window shadow.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowShadowEnabled(enable: boolean): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBrightness
     */
    setBrightness(brightness: number): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBrightness
     */
    setBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * Set whether the main window is topmost.
     *
     * @param { boolean } isTopmost - Main window is topmost if true.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTopmost(isTopmost: boolean): Promise<void>;

    /**
     * Places the main window above all the other windows of the application.
     *
     * @permission ohos.permission.WINDOW_TOPMOST
     * @param { boolean } isWindowTopmost - Whether to pin the main window on top.
     *                                      The value true means to pin the main window on top, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTopmost(isWindowTopmost: boolean): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the brightness of window.
     *
     * @param { double } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void;

    /**
     * Sets the dimBehind of window.
     *
     * @param { number } dimBehindValue - The specified dimBehind.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the dimBehind of window.
     *
     * @param { number } dimBehindValue - The specified dimBehind.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowFocusable
     */
    setFocusable(isFocusable: boolean): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowFocusable
     */
    setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Window requests to get focus or lose focus.
     *
     * @param { boolean } isFocused - Window requests to get focus if true, requests to lose focus if false.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    requestFocus(isFocused: boolean): Promise<void>;

    /**
     * Sets whether exclusively highlighted or not.
     *
     * @param { boolean } exclusivelyHighlighted Whether the window can become highlight exclusively when it gain focus. The value
     *                                           true means that the window can cause the window outside the current window link to 
     *                                           lose its highlight state, and false means the opposite.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>;

    /**
     * Checks whether the window is highlighted.
     *
     * @returns { boolean } - Whether the window is highlighted. The value true means that the window is highlighted, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isWindowHighlighted(): boolean;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowKeepScreenOn
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowKeepScreenOn
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp Specifies whether to wake up the screen. True means to wake it up, false means not.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp Specifies whether to wake up the screen. True means to wake it up, false means not.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setWakeUpScreen(wakeUp: boolean): void;

    /**
     * Sets whether outside can be touch or not.
     *
     * @param { boolean } touchable outside can be touch if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * Sets whether outside can be touch or not.
     *
     * @param { boolean } touchable outside can be touch if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is private mode or not.
     *
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowPrivacyMode
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * Sets whether is private mode or not.
     *
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowPrivacyMode
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * Ignore this window during screenshot.
     *
     * @param { boolean } isSkip skip if true, or not if false.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Ignore this window during screenshot.
     *
     * @param { boolean } isSkip skip if true, or not if false.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setSnapshotSkip(isSkip: boolean): void;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowTouchable
     */
    setTouchable(isTouchable: boolean): Promise<void>;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowTouchable
     */
    setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean): Promise<void>;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set handwrite flag on the window. This flag means only response handwrite event.
     *
     * @param { boolean } enable - Add handwrite flag to window if true, or remove flag if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setHandwritingFlag(enable: boolean): Promise<void>;

    /**
     * Sets the flag of the window is forbidden to move in split screen mode
     *
     * @param { boolean } isForbidSplitMove the flag of the window is forbidden to move in split screen mode
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setForbidSplitMove(isForbidSplitMove: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets the flag of the window is forbidden to move in split screen mode
     *
     * @param { boolean } isForbidSplitMove the flag of the window is forbidden to move in split screen mode
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setForbidSplitMove(isForbidSplitMove: boolean): Promise<void>;

    /**
     * Obtains snapshot of window
     *
     * @param { AsyncCallback<image.PixelMap> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains snapshot of window
     *
     * @param { AsyncCallback<image.PixelMap> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Get pixelMap failed;
     *                     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    snapshot(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Obtains snapshot of window
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains snapshot of window
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Get pixelMap failed;
     *                     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    snapshot(): Promise<image.PixelMap>;

    /**
     * Obtains snapshot of window
     *
     * @returns { image.PixelMap } Return pixel map of snapshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create pixelMap failed.
     * @throws { BusinessError } 1300018 - Timeout.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    snapshotSync(): image.PixelMap;

    /**
     * Obtains snapshot of window even set the privacy mode.
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create pixelMap failed;
     *                     3. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    snapshotIgnorePrivacy(): Promise<image.PixelMap>;

    /**
     * Sets opacity  of window
     *
     * @param { double } opacity Interval is 0.f-1.f.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets the opacity for this window.
     * This API can be used only when you customize an animation to be played during the display or hiding of a system window.
     *
     * @param { double } opacity Interval is 0.f-1.f.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    opacity(opacity: double): void;

    /**
     * Sets scale options of window.
     *
     * @param { ScaleOptions } scaleOptions scale param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets the scale parameters for this window.
     * This API can be used only when you customize an animation to be played during the display or hiding of a system window.
     *
     * @param { ScaleOptions } scaleOptions scale param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    scale(scaleOptions: ScaleOptions): void;

    /**
     * Sets rotate options of window.
     *
     * @param { RotateOptions } rotateOptions rotate param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets the rotation parameters for this window.
     * This API can be used only when you customize an animation to be played during the display or hiding of a system window.
     *
     * @param { RotateOptions } rotateOptions rotate param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    rotate(rotateOptions: RotateOptions): void;

    /**
     * Sets translate options of window.
     *
     * @param { TranslateOptions } translateOptions translate param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets the translation parameters for this window.
     * This API can be used only when you customize an animation to be played during the display or hiding of a system window.
     *
     * @param { TranslateOptions } translateOptions translate param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    translate(translateOptions: TranslateOptions): void;

    /**
     * Get Transition Controller.
     *
     * @returns { TransitionController }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Get Transition Controller.
     *
     * @returns { TransitionController }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTransitionController(): TransitionController;

    /**
     * Sets the window blur radius.
     *
     * @param { double } radius the blur radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the window blur radius.
     *
     * @param { double } radius the blur radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setBlur(radius: double): void;

    /**
     * Sets the window backdrop blur radius.
     *
     * @param { double } radius the blur radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Blurs the background of this window.
     * The window background refers to the lower-layer area covered by the window, which is the same as the window size.
     * To make the blur effect visible, you must set the window background transparent by calling setWindowBackgroundColor.
     *
     * @param { double } radius the blur radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setBackdropBlur(radius: double): void;

    /**
     * Sets the window backdrop blur style.
     *
     * @param { BlurStyle } blurStyle the specified blur style.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the blur style for the background of this window.
     *
     * @param { BlurStyle } blurStyle the specified blur style.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setBackdropBlurStyle(blurStyle: BlurStyle): void;

    /**
     * Sets shadow.
     *
     * @param { double } radius the radius of the shadow.
     * @param { string } color the color of the shadow.
     * @param { double } offsetX the offset of the shadow on the x-axis.
     * @param { double } offsetY the offset of the shadow on the y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the shadow for the window borders.
     *
     * @param { double } radius the radius of the shadow.
     * @param { string } color the color of the shadow.
     * @param { double } offsetX the offset of the shadow on the x-axis.
     * @param { double } offsetY the offset of the shadow on the y-axis.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setShadow(radius: double, color?: string, offsetX?: double, offsetY?: double): void;

    /**
     * Sets the blur radius of the shadow on the edges of a child window or floating window.
     *
     * @param { double } radius - Radius of the shadow, measured in px.
     *                            The value is a floating point number greater than or equal to 0.0,
     *                            and the value 0.0 means that the shadow is disabled for the window borders.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The shadow radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowShadowRadius(radius: double): void;

    /**
     * Sets corner radius.
     *
     * @param { double } cornerRadius the corner radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the radius of the rounded corners for this window.
     *
     * @param { double } cornerRadius the corner radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setCornerRadius(cornerRadius: double): void;

    /**
     * Sets the radius of the rounded corners for a child window or floating window.
     *
     * @param { double } cornerRadius - Radius of the rounded corners, measured in vp.
     *                                  The value is a floating point number greater than or equal to 0.0.
     *                                  The value 0.0 means that the window does not use rounded corners.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The corner radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowCornerRadius(cornerRadius: double): Promise<void>;

    /**
     * Obtains the radius of rounded corners of a child window or floating window.
     *
     * @returns { double } - Radius of the rounded corner of the child window or floating window, measured in vp.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    getWindowCornerRadius(): double;

    /**
     * Raise app sub window to app top
     *
     * @param { AsyncCallback<void> } callback - The callback of raiseToAppTop
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseToAppTop(callback: AsyncCallback<void>): void;

    /**
     * Raise app sub window to app top
     *
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 14 dynamic
     * @since 23 static
     */
    raiseToAppTop(): Promise<void>;

    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration.
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Sets the aspect ratio of window
     *
     * @param { double } ratio - The aspect ratio of window except decoration.
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double, callback: AsyncCallback<void>): void;

    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Sets the aspect ratio of window
     *
     * @param { double } ratio - The aspect ratio of window except decoration.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double): Promise<void>;

    /**
     * Sets the aspect ratio of window.
     *
     * @param { double } ratio - The aspect ratio of window except decoration.
     * @param { boolean } [isPersistent] - The parameter determines whether the ratio should be persistently saved.
     *     The default value is true, indicating that the ratio will be persisted to the local file.
     * @param { boolean } [needUpdateRect] - The parameter determines whether the window should be resized immediately
     *     with the given aspect ratio.
     *     The default value is true, indicating that the current window will immediately resize based on the ratio.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>;

    /**
     * Resets the aspect ratio of window
     *
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Resets the aspect ratio of window
     *
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resetAspectRatio(callback: AsyncCallback<void>): void;

    /**
     * Resets the aspect ratio of window
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Resets the aspect ratio of window
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resetAspectRatio(): Promise<void>;

    /**
     * Set the watermark flag on the window.
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false.
     * @param { AsyncCallback<void> } callback - The callback of setWaterMarkFlag.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Set the watermark flag on the window.
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false.
     * @param { AsyncCallback<void> } callback - The callback of setWaterMarkFlag.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the watermark flag on the window
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Set the watermark flag on the window
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * Raise one app sub window above another.
     *
     * @param { int } windowId - Indicates target window id.
     * @param { AsyncCallback<void> } callback - The callback of raiseAboveTarget.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * Raise one app sub window above another.
     *
     * @param { int } windowId - Indicates target window id.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int): Promise<void>;

    /**
     * Raise main window above another.
     *
     * @param { int } windowId - Indicates target window id.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    raiseMainWindowAboveTarget(windowId: int): Promise<void>;

    /**
     * Set whether to enable an app sub window to raise itself by click.
     *
     * @param { boolean } enable - Disable app sub window to raise itself by by click if false.
     * @param { AsyncCallback<void> } callback - The callback of setRaiseByClickEnabled.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set whether to enable an app sub window to raise itself by click.
     *
     * @param { boolean } enable - Disable app sub window to raise itself by by click if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @since 14 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * Set whether to enable an app main window to raise itself by click.
     *
     * @param { boolean } enable - Disable app main window to raise itself by click if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    setMainWindowRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * Minimize app main window and hide app subWindow.
     *
     * @param { AsyncCallback<void> } callback - The callback of Minimize.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize the window based on the caller type:
     *     If the caller is the main window, it will minimize the main window, which can be restored from the dock bar.
     *     On 2-in-1 devices, it can also be restored using the restore() method.
     *     If the caller is a subwindow or a float window, it will hide the subwindow or float window,
     *     which cannot be restored from the dock bar.
     *     The subwindow or float window can be made visible again using the showWindow() method.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error;
     *                     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minimize(callback: AsyncCallback<void>): void;

    /**
     * Minimize app main window and hide app subWindow.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize the window based on the caller type:
     *     If the caller is the main window, it will minimize the main window, which can be restored from the dock bar.
     *     On 2-in-1 devices, it can also be restored using the restore() method.
     *     If the caller is a subwindow or a float window, it will hide the subwindow or float window,
     *     which cannot be restored from the dock bar.
     *     The subwindow or float window can be made visible again using the showWindow() method.
     *
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error;
     *                     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minimize(): Promise<void>;

    /**
     * Maximize app main window.
     * @param { MaximizePresentation } presentation - set window presentation when maximize.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Maximizes the main window.
     * 
     * @param { ?MaximizePresentation } presentation - Layout when the window is maximized.
     *                                                 The default value is window.MaximizePresentation.ENTER_IMMERSIVE,
     *                                                 indicating that the window enters the immersive layout when maximized.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function maximize can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation): Promise<void>;

    /**
     * Maximizes the main window.
     *
     * @param { MaximizePresentation } [presentation] - Layout when the window is maximized.
     *     The default value is window.MaximizePresentation.ENTER_IMMERSIVE,
     *     indicating that the window enters the immersive layout when maximized.
     * @param { boolean } [acrossDisplay] - Parameter controls the waterfall mode of main windows in the half-folded state.
     *     The value true Indicates that the window could enter the waterfall mode directly,
     *     and maintains the waterfall mode when the device is half-folded.
     *     The default value is undefined.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function maximize can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>;

    /**
     * Set whether to enable a window to resize by drag.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @param { AsyncCallback<void> } callback - The callback of setResizeByDragEnabled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set whether to enable a window to resize by drag.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean): Promise<void>;

    /**
     * Hide the non-system floating windows.
     *
     * @param { boolean } shouldHide - Hide the non-system floating windows if true, otherwise means the opposite.
     * @param { AsyncCallback<void> } callback - The callback of hideNonSystemFloatingWindows.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean, callback: AsyncCallback<void>): void;

    /**
     * Hide the non-system floating windows.
     *
     * @param { boolean } shouldHide - Hide the non-system floating windows if true, otherwise means the opposite.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean): Promise<void>;

    /**
     * Get the window limits of current window measrued in px.
     *
     * @returns { WindowLimits } - The limits of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Get the window limits of current window measrued in px.
     *
     * @returns { WindowLimits } - The limits of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowLimits(): WindowLimits;

    /**
     * Get the window limits of current window measrued in vp.
     *
     * @returns { WindowLimits } - The limits of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowLimitsVP(): WindowLimits;

    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - window limits of the window.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - window limits of the window.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>;

    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - Window limits of the window.
     * @param { boolean } isForcible - Ignore system limits.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>;

    /**
     * Set whether to enable the single frame composer.
     *
     * @param { boolean } enable - Enable the single frame composer if true, otherwise means the opposite.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    setSingleFrameComposerEnabled(enable: boolean): Promise<void>;

    /**
     * When get focused, keep the keyboard created by other windows, support system window and app subwindow.
     *
     * @param { boolean } keepKeyboardFlag - keep the keyboard if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * When get focused, keep the keyboard created by other windows, support system window and app subwindow.
     *
     * @param { boolean } keepKeyboardFlag - Whether to keep the soft keyboard created by others.
     * The value true means to keep the soft keyboard, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;

    /**
     * Recover app main window.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Restores the main window from the full-screen, maximized, or split-screen mode to a floating window,
     * and restores the window size and position to those before the full-screen, maximized, or split-screen mode is entered.
     *
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    recover(): Promise<void>;

    /**
     * Restores the main window from minimization to the foreground, returning it to
     *     its size and position before it is minimized.
     *
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    restore(): Promise<void>;

    /**
     * Restore the main window of a float window to foreground.
     * This interface can only be used by a float window after it has been clicked once.
     * The interface cannot be invoked when the main window is in PAUSED lifecycle or is in background during recent.
     *
     * @param { Record<string, Object> } [wantParameters] - Want parameters.
     *     Custom want parameter delivered when restoring the main window.
     *     Want parameters are used for UIAbility onNewWant.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. The window is not float window.
     *     2. The window is not at foreground or has never been clicked.
     *     3. The window cannot find main window.
     * @throws { BusinessError } 1300007 - Restore parent main window failed. Possible cause:
     *     1. The main window is in PAUSED lifecycle state.
     *     2. The main window is in background during recent.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>;

    /**
     * Set the visibility of the window decor.
     *
     * @param { boolean } - Enable the decor visible if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set the visibility of the window decor.
     *
     * @param { boolean } isVisible - Enable the decor visible if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Sets whether the title bar is visible in the window.
     *
     * @param { boolean } isVisible - Whether the title bar is visible. The value true means that the title bar is visible and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowDecorVisible(isVisible: boolean): void;

    /**
     * Checks whether the title bar of this window is visible.
     *
     * @returns { boolean } - Check result. The value true means that the title bar is visible, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getWindowDecorVisible(): boolean;

    /**
     * Enables or disables the capability to move the window (either main window or child window)
     * by dragging its title bar and to maximize the window with a double-click.
     *
     * @param { boolean } enabled - Whether to enable the capability to move the window
     *                              by dragging the title bar and to maximize the window with a double-click.
     *                              The value true means to enable the capability, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleMoveEnabled(enabled: boolean): void;

    /**
     * Set the title bar name of the window
     * 
     * @param { string } titleName - The name of the title bar that needs to be set
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowTitle(titleName: string): Promise<void>;

    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Enables the modal property of the child window. After the modal property is enabled,
     * the parent window does not respond to user interactions until the child window is closed or the child window's modal property is disabled.
     *
     * @param { boolean } isModal - Whether to enable the modal property of the child window.
     *                              The value true means to enable the modal property, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean): Promise<void>;

    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @param { ModalityType } modalityType - Set modality type when the window modal is true. 
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    /**
     * Enables the modal property of the child window. After the modal property is enabled,
     * the parent window does not respond to user interactions until the child window is closed or the child window's modal property is disabled.
     *
     * @param { boolean } isModal - Whether to enable the modal property of the child window. The value true means to enable the modal property,
     *                              and false means the opposite. Currently, this parameter can only be set to true.
     * @param { ModalityType } modalityType - Modality type of the child window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>;

    /**
     * Set the height of the window decor.
     *
     * @param { int } - The height of window decor.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Sets the height of the title bar of this window.
     * This API takes effect for the window that has a title bar or a three-button area on 2-in-1 devices.
     *
     * @param { int } height - Height of the title bar. It takes effect only for the window with the title bar.
     *                            The value is an integer in the range [37,112]. The unit is vp. If a floating point number is passed in,
     *                            the value is rounded down. A value outside the range is invalid.
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowDecorHeight(height: int): void;
	
    /**
     * Get the height of the window decor.
     *
     * @returns { int } - The height of window decor.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Obtains the height of the title bar of this window.
     * This API takes effect for the window that has a title bar or a three-button area on 2-in-1 devices.
     *
     * @returns { int } - Height of the title bar. The value is an integer in the range [37,112]. The unit is vp.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowDecorHeight(): int;

    /**
     * Sets the button style of the decoration bar. The setting takes effect only for the main window and the child window with the window title enabled.
     *
     * @param { DecorButtonStyle } dectorStyle - Button style of the decoration bar.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setDecorButtonStyle(dectorStyle: DecorButtonStyle): void;

    /**
     * Obtains the button style of the decoration bar. The setting takes effect only for the main window and the child window with the window title enabled.
     *
     * @returns { DecorButtonStyle } - Button style on the decoration bar of the current window.
     *                                 The decoration button area is located in the upper right corner of the window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getDecorButtonStyle(): DecorButtonStyle;
    
    /**
     * Set touchable areas. By default, the entire window area is touchable.
     * If touchable areas are set in the window, touch events outside the areas will be transparent transmitted.
     * If the window area changes, you need to reset it.
     *
     * @param { Array<Rect> } rects - Touchable areas. The maximum size cannot exceed 10, touchable area cannot exceed the window's area.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTouchableAreas(rects: Array<Rect>): void;
	
    /**
     * Get the area of window title buttons.
     *
     * @returns { TitleButtonRect } - The area of window title buttons.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Obtains the rectangle that holds the minimize, maximize, and close buttons on the title bar of the main window or the decorated child window.
     *
     * @returns { TitleButtonRect } - Rectangle obtained, which is located in the upper right corner of the window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTitleButtonRect(): TitleButtonRect;

    /**
     * Shows or hides the maximize, minimize, and split-screen buttons on the title bar of the main window.
     *
     * @param { boolean } isMaximizeVisible - Whether to show the maximize button. The value true means to show the button, and false means to hide it.
     * @param { boolean } isMinimizeVisible - Whether to show the minimize button. The value true means to show the button, and false means to hide it.
     * @param { boolean } isSplitVisible - Whether to show the split-screen button. The value true means to show the button, and false means to hide it.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setTitleButtonVisible(isMaximizeVisible: boolean, isMinimizeVisible: boolean, isSplitVisible: boolean): void;
    
    /**
     * Shows or hides the maximize, minimize, and close buttons on the title bar of the main window.
     *
     * @param { boolean } isMaximizeButtonVisible - Whether to show the maximize button. The value true means to show the button, and false means the opposite.
     *                                              If the maximize button is hidden, the corresponding restore button is also hidden in the maximize scenario.
     * @param { boolean } isMinimizeButtonVisible - Whether to show the minimize button. The value true means to show the button, and false means the opposite.
     * @param { boolean } isCloseButtonVisible - Whether to show the close button. The value true means to show the button, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void;

    /**
     * Enable landscape multiWindow
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    enableLandscapeMultiWindow(): Promise<void>;

    /**
     * Starts moving this window. This API uses a promise to return the result.
     * The window moves along with the cursor only when this API is called in the callback function of onTouch, where the event type is TouchType.Down.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    startMoving(): Promise<void>;

    /**
     * Specifies the cursor position within the window and moves the window.
     * It first adjusts the window to the cursor position before starting to move the window.
     * The window moves along with the cursor only when this API is called in the callback function of onTouch, where the event type is TouchType.Down.
     *
     * @param { int } offsetX - X-axis offset of the cursor position relative to the upper left corner of the window during movement, measured in px.
     *                             This parameter only accepts integer values; any floating-point input will be rounded down.
     *                             Negative values or values exceeding the window width are invalid. The window width can be obtained from WindowProperties.
     * @param { int } offsetY - Y-axis offset of the cursor position relative to the upper left corner of the window during movement, measured in px.
     *                             This parameter only accepts integer values; any floating-point input will be rounded down.
     *                             Negative values or values exceeding the window height are invalid. The window height can be obtained from WindowProperties.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    startMoving(offsetX: int, offsetY: int): Promise<void>;

    /**
     * Stops window movement when a window is being dragged. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    stopMoving(): Promise<void>;

    /**
     * Enable drag window.
     *
     * @param { boolean } enable - The value true means to enable window dragging, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    /**
     * Enable drag window.
     *
     * @param { boolean } enable - The value true means to enable window dragging, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    enableDrag(enable: boolean): Promise<void>;

    /**
     * Disable landscape multiWindow
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    disableLandscapeMultiWindow(): Promise<void>;

    /**
     * Set window transition animation.
     *
     * @param { WindowTransitionType } transitionType - Transition animation type.
     * @param { TransitionAnimation } animation - Transition animation config.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *                                          1. Invalid parameter range;
     *                                          2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>;
    
    /**
     * Get window transition animation configuration.
     *
     * @param { WindowTransitionType } transitionType - Transition animation type.
     * @returns { TransitionAnimation | undefined } - Transition animation with transition type, or undefined if it has not been set.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities. 
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined;

    /**
     * Register the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Subscribes to the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.
     *
     * @param { 'windowTitleButtonRectChange' } type - Event type. The value is fixed at 'windowTitleButtonRectChange',
     *                                                 indicating that the change event of the rectangle that holds the minimize, maximize, and close buttons.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void;

    /**
     * Subscribes to the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void;

    /**
     * Unregister the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unsubscribes from the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.
     *
     * @param { 'windowTitleButtonRectChange' } type - Event type. The value is fixed at 'windowTitleButtonRectChange',
     *                                                 indicating that the change event of the rectangle that holds the minimize, maximize, and close buttons.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     *                                                 If a value is passed in, the corresponding subscription is canceled.
     *                                                 If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void;
    
    /**
     * Unsubscribes from the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } [callback] - Unregister the callback function.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void;

    /**
     *  Set the window mask of window
     *
     * @param { Array<Array<long>> } windowMask - The mask of window. The value of the array is 0 and 1, the other number is illegal value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
     setWindowMask(windowMask: Array<Array<long>>): Promise<void>;

    /**
     *  Clear the window mask of window
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The window has not set window mask yet.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    clearWindowMask(): Promise<void>;

    /**
     * Register the callback of window rect change
     *
     * @param { 'windowRectChange' } type - The value is fixed at 'windowRectChange', indicating the window rect change event.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void;

    /**
     * Register the callback of window rect change
     *
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowRectChange(callback: Callback<RectChangeOptions>): void;

    /**
     * Unregister the callback of window rect change
     *
     * @param { 'windowRectChange' } type - The value is fixed at 'windowRectChange', indicating the window rect change event.
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the RectChangeOptions.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void;

    /**
     * Unregister the callback of window rect change
     *
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the RectChangeOptions.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowRectChange(callback?: Callback<RectChangeOptions>): void;

    /**
     * Register the callback of rectChangeInGlobalDisplay
     *
     * @param { 'rectChangeInGlobalDisplay' } type - The value is fixed at 'rectChangeInGlobalDisplay', indicating the window global rect change event.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions. Rect position based on the global coordinates.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void;

    /**
     * Register the callback of rect change in global display
     *
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions. Rect position based on the global coordinates.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void;

    /**
     * Unregister the callback of rectChangeInGlobalDisplay
     *
     * @param { 'rectChangeInGlobalDisplay' } type - The value is fixed at 'rectChangeInGlobalDisplay', indicating the window global rect change event.
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the RectChangeOptions. Rect position based on the global coordinates.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void;

    /**
     * Unregister the callback of rect change in global display
     *
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the RectChangeOptions.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void;

    /**
     * Convert the window coordinates to the global coordinates.
     *
     * @param { int } winX - Indicates the X-coordinate of the component relative to the current window.
     * @param { int } winY - Indicates the Y-coordinate of the component relative to the current window.
     * @returns { Position } Position - The pair {x, y} represents respectively the X-coordinate
     *     and Y-coordinate of the window relative to the primary display, measured in px.
     *     This parameter only accepts integer values; any floating-point input will be rounded down.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    clientToGlobalDisplay(winX: int, winY: int): Position;

    /**
     * Convert the global coordinates to the window coordinates.
     *
     * @param { int } globalDisplayX - Indicates the X-coordinate of the component relative to the primary display.
     * @param { int } globalDisplayY - Indicates the Y-coordinate of the component relative to the primary display.
     * @returns { Position } Position - The pair {x, y} represents respectively the X-coordinate
     *     and Y-coordinate of the window relative to the current screen, measured in px.
     *     This parameter only accepts integer values; any floating-point input will be rounded down.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position;

    /**
     * Register the callback of rotation change
     *
     * @param { 'rotationChange' } type - The value is fixed at 'rotationChange',
     *     indicating the window rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback -
     *     Callback used to return the rotation change result.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Register the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } callback -
     *     Register the callback function.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void;

    /**
     * Unregister the callback of rotationChange
     *
     * @param { 'rotationChange' } type - The value is fixed at 'rotationChange',
     *     indicating the window rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } [callback] -
     *     Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'rotationChange',
      callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Unregister the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } [callback] -
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):
      void;

    /**
     * UIExtension in window secure limit change callback on.
     * 
     * @param { 'uiExtensionSecureLimitChange' } eventType The value is fixed at 'uiExtensionSecureLimitChange', indicating the UIExtension secure limit change.
     * @param { Callback<boolean> } callback Callback used to return the result whether the APP has uiextension secure limit. 
     * @throws { BusinessError } 801 - Capability not supported.
     * Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback on.
     *
     * @param { Callback<boolean> } callback
     *     Callback used to return the result whether the APP has uiextension secure limit. 
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onUiExtensionSecureLimitChange(callback: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback off.
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType
     *     The value is fixed at 'uiExtensionSecureLimitChange', indicating the UIExtension secure limit change.
     * @param { Callback<boolean> } callback
     *     Callback used to return the result whether the APP has uiextension secure limit. 
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback off.
     *
     * @param { Callback<boolean> } [callback] Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void;
 

    /**
     * Set gray scale of window.
     *
     * @param { double } grayScale - The value of gray scale.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowGrayScale(grayScale: double): Promise<void>;

    /**
     * Set whether to enable immersive mode.
     *
     * @param { boolean } enabled - The value true means to enable immersive mode, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setImmersiveModeEnabledState(enabled: boolean): void;

    /**
     * Get whether the immersive mode is enabled or not.
     *
     * @returns { boolean } - The value true means the immersive mode is enabled, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getImmersiveModeEnabledState(): boolean;


    /**
     * Checks whether the layout is immersive.
     *
     * @returns { boolean } The value true means that the layout is immersive, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    isImmersiveLayout(): boolean;

    /**
     * Get the window status of current window.
     *
     * @returns { WindowStatusType } - The status of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowStatus(): WindowStatusType;

    /**
     * Checks whether the window is focused.
     *
     * @returns { boolean } - Whether the window is focused. The value true means that the window is focused, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isFocused(): boolean;

    /**
     * Creates a child window under the main window, another child window, or floating window.
     *
     * @param { string } name - Name of the child window.
     * @param { SubWindowOptions } options - Parameters used for creating the child window.
     * @returns { Promise<Window> } Promise used to used to return the child window created.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error;
     *                     3. The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows, subwindows, and floating windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;

    /**
     * Change the parent window of a child window.
     *
     * @param { int } windowId - Indicates parent window id.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setParentWindow(windowId: int): Promise<void>;

    /**
     * Get the parent window.
     *
     * @returns { Window } Parent Window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getParentWindow(): Window;

    /**
     * Set whether the sub window supports simultaneous display on multiple screens when the parent window is dragged to move or dragged to zoom.
     *
     * @param { boolean } enabled - The value true means sub window supports simultaneous display on multiple screens when the parent window
     *                              is dragged to move or dragged to zoom, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.Function setFollowParentMultiScreenPolicy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>;

    /**
     * Set whether the title bar and dock bar will show, when the mouse hovers over hot area.
     *
     * @param { boolean } isTitleHoverShown - The value true means to display the title bar, and false means the opposite.
     * @param { boolean } isDockHoverShown - The value true means to display the dock bar, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    /**
     * Sets whether to show the window title bar and dock bar when the cursor hovers over the hot zone while the main window is in full-screen mode.
     *
     * @param { boolean } isTitleHoverShown - Whether to show the window title bar. The value true means to show the window title bar,
     *                                        and false means the opposite. The default value is true.
     * @param { boolean } isDockHoverShown - Whether to show the dock bar. The value true means to show the dock bar,
     *                                       and false means the opposite. The default value is true.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>;

    /**
     * Set window container active and inactive color.
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { string } activeColor - window container color in active.
     * @param { string } inactiveColor - window container color in inactive.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerColor(activeColor: string, inactiveColor: string): void;

    /**
     * Set whether window delay raise is enabled.
     *
     * @param { boolean } isEnabled - The value true means to enable window delay raise, and false means disable window delay raise.
     * @throws { BusinessError } 801 - Capability not supported.function setWindowDelayRaiseOnDrag can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setWindowDelayRaiseOnDrag(isEnabled: boolean): void;

    /**
     * Set the zlevel of current sub window.
     *
     * @param { int } zLevel - the zlevel of current sub window.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function setSubWindowZLevel can not work correctly due to limited device capabilities. 
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only non-modal subwindows are supported.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSubWindowZLevel(zLevel: int): Promise<void>;

    /**
     * Get the zlevel of current sub window.
     *
     * @returns { int } - the zlevel of current sub window.
     * @throws { BusinessError } 801 - Capability not supported. Function getSubWindowZLevel can not work correctly due to limited device capabilities. 
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getSubWindowZLevel(): int;

    /**
     * Set the keyframe policy when dragging to resize.
     *
     * @param { KeyFramePolicy } keyFramePolicy - The policy of keyframe to set.
     * @returns { Promise<KeyFramePolicy> } - Promise is used to return the effective policy of keyframe.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range; 2. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>;
  
    /**
     * Check if the current device is in free window mode.
     *
     * @returns { boolean } true - means in free window mode; false - means not in free window mode.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isInFreeWindowMode(): boolean;
 
    /**
     * free window mode change callback on.
     * 
     * @param { 'freeWindowModeChange' } type The value is fixed at 'freeWindowModeChange',
     *     indicating the free window mode change.
     * @param { Callback<boolean> } callback Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'freeWindowModeChange', callback: Callback<boolean>): void;
 
    /**
     * free window mode change callback off.
     *
     * @param { 'freeWindowModeChange' } type The value is fixed at 'freeWindowModeChange',
     *     indicating the free window mode change.
     * @param { Callback<boolean> } [callback] Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void;

    /**
     * free window mode change callback on.
     * 
     * @param { Callback<boolean> } callback Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 23 static
     */
    onFreeWindowModeChange(callback: Callback<boolean>): void;
 
    /**
     * free window mode change callback off.
     *
     * @param { Callback<boolean> } [callback] Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 23 static
     */
    offFreeWindowModeChange(callback?: Callback<boolean>): void;

    /**
     * Set whether this window limits screen rotation when this window is shown.
     *
     * @param { boolean } locked - Screen rotation lock status to set.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setRotationLocked(locked: boolean): Promise<void>;

    /**
     * Get whether this window limits screen rotation when this window is shown.
     *
     * @returns { boolean } - Screen rotation lock status of this window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getRotationLocked(): boolean;

    /**
     * Convert orientation and rotation between window and display.
     * @param { RotationInfoType } from - The type of the value to be converted.
     * @param { RotationInfoType } to - The target type of conversion.
     * @param { int } value - The value to be converted.
     * @returns { int } - The converted value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int;

    /**
     * Set whether the window supports event separation capability.
     * When the window doesn't support event separation capability:
     *    After the first finger touch the window,
     *        subsequent fingers' events will be sent to that window regardless of whether they click on it.
     *    If the first finger does not touch the window,
     *        the system will discard the events when subsequent fingers touch the window.
     *
     * @param { boolean } enabled - Whether the window supports event separation capability.
     *     True - means default state, the event will be sent to the window that the finger taps.
     *     False - means the window doesn't support event separation capability.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setSeparationTouchEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether the window supports event separation status.
     *
     * @returns { boolean }  The value true means the window supports event separation, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSeparationTouchEnabled(): boolean;

    /**
     * Set whether the window receive drag event.
     *
     * @param { boolean } enabled - Whether the window receive drag event.
     *     True  means default state, the window can receive drag event.
     *     False  means the window can not receive drag event.
     * @returns { Promise<void> }  Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setReceiveDragEventEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether the window can receive drag event status.
     *
     * @returns { boolean }  The value true means the window can receive drag event, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReceiveDragEventEnabled(): boolean;
  }

  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum WindowStageEventType {
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACTIVE = 2,
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INACTIVE = 3,
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    HIDDEN = 4,
    /**
     * The window stage is interactive in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    RESUMED = 5,
    /**
     * The window stage is not interactive in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PAUSED = 6
  }

  /**
   * Window stage lifecycle callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowStageLifecycleEventType {
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * The window stage is interactive in the foreground.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    RESUMED = 2,
    /**
     * The window stage is not interactive in the foreground.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAUSED = 3,
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    HIDDEN = 4
  }

  /**
   * Enum for window modality Type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum ModalityType {
    /**
     * The value means window modality.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    WINDOW_MODALITY = 0,
    /**
     * The value means application modality.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_MODALITY = 1,
  }


  /**
   * Options for window show
   * 
   * @interface ShowWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ShowWindowOptions {
    /**
     * Indicates whether the window get focus when it is shown
     * 
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    focusOnShow?: boolean;
  }


  /**
   * Options for subwindow creation
   * 
   * @interface SubWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Options for subwindow creation
   * 
   * @interface SubWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SubWindowOptions {
    /**
     * Indicates subwindow title
     * 
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates subwindow title
     * 
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * Indicates decor of subwindow
     * 
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates decor of subwindow
     * 
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    decorEnabled: boolean;
    /**
     * Indicates modality of subwindow
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isModal?: boolean;
    /**
     * Indicates whether subwindow is topmost
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isTopmost?: boolean;
    /**
     * Indicates modality type of subwindow
     * 
     * @type { ?ModalityType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    modalityType?: ModalityType;
    /**
     * Indicates position and size of subwindow
     * 
     * @type { ?Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    windowRect?: Rect;
    /**
     * Indicates whether subwindow support fullscreen
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    maximizeSupported?: boolean;
    /**
     * Indicates zlevel of subwindow
     * 
     * @type { ?int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    zLevel?: int;
    /**
     * Indicates whether subwindow show outline
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    outlineEnabled?: boolean;

  }
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface WindowStage {
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the main window of this window stage. This API uses a promise to return the result.
     *
     * @returns { Promise<Window> } Promise used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getMainWindow(): Promise<Window>;
    /**
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the main window of this window stage. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getMainWindow(callback: AsyncCallback<Window>): void;
    /**
     * Get main window of the stage.
     *
     * @returns { Window }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Window }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the main window of this window stage.
     *
     * @returns { Window } Main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getMainWindowSync(): Window;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    createSubWindow(name: string): Promise<Window>;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    createSubWindow(name: string, callback: AsyncCallback<Window>): void;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @since 11
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;
    /**
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains all the child windows of this window stage. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<Window>> } Promise used to return all the child windows.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getSubWindow(): Promise<Array<Window>>;
    /**
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains all the child windows of this window stage. This API uses a promise to return the result.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the child windows.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getSubWindow(callback: AsyncCallback<Array<Window>>): void;

    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result.
     *     You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result.
     *     You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result.
     *     You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window
     *     of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage?: LocalStorage): Promise<void>;

    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to
     *     return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to
     *     return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to
     *     return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     *     before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 
     *     1. Mandatory parameters are left unspecified; 
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute for the page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a named route page to this window, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content.
     * Exercise caution when using it.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute for the page.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * Release the content of this window in the current project.
     * This API uses a promise to return the result.
     * 
     * @returns { Promise<void> } Promise that returns no value, indicating successful completion.
     *     Throws exception if window state is abnormal.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    releaseUIContent(): Promise<void>;

    /**
     * Window stage event callback on.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Window stage event callback on.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { 'windowStageEvent' } eventType Event type.
     *     The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;

    /**
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    onWindowStageEvent(callback: Callback<WindowStageEventType>): void;

    /**
     * Window stage event callback off.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Window stage event callback off.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { 'windowStageEvent' } eventType Event type.
     *     The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;

    /**
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offWindowStageEvent(callback?: Callback<WindowStageEventType>): void;

    /**
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { 'windowStageLifecycleEvent' } eventType Event type.
     *     The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageLifecycleEventType> } callback Callback used to
     *     return the window stage lifecycle state.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageLifecycleEventType> } callback Callback used to
     *     return the window stage lifecycle state.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { 'windowStageLifecycleEvent' } eventType Event type.
     *     The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageLifecycleEventType> } [callback] Callback used to
     *     return the window stage lifecycle state.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageLifecycleEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * Subscribes to the click event on the close button in the three-button navigation bar of the main window.
     * This event is triggered when the close button in the three-button navigation bar of the main window is clicked.
     * 
     * @param { 'windowStageClose' } eventType - Event type. The value is fixed at 'windowStageClose',
     *                                           indicating that the close button in the three-button navigation bar of the main window is clicked.
     * @param { Callback<void> } callback - Callback invoked when the close button in the upper right corner of the main window is clicked.
     *                                      The return value determines whether to continue to close the main window.
     *                                      The value true means not to close the main window, and false means to continue to close the main window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    on(eventType: 'windowStageClose', callback: Callback<void>): void;

    /**
     * Subscribes to the click event on the close button in the three-button navigation bar of the main window.
     * This event is triggered when the close button in the three-button navigation bar of the main window is clicked.
     *
     * @param { Callback<void, boolean> } callback - Callback invoked when the close button in the upper right corner of the main window is clicked.
     *    The return value determines whether to continue to close the main window.
     *    The value true means not to close the main window, and false means to continue to close the main window.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageClose(callback: Callback<void, boolean>): void;

    /**
     * Unsubscribes from the event indicating that the main window is closed.
     *
     * @param { 'windowStageClose' } eventType - Event type. The value is fixed at 'windowStageClose',
     *                                           indicating that the close button in the three-button navigation bar of the main window is clicked.
     * @param { Callback<void> } callback - Callback invoked when the close button in the upper right corner of the main window is clicked.
     *                                      If a value is passed in, the corresponding subscription is canceled.
     *                                      If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    off(eventType: 'windowStageClose', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the main window is closed.
     *
     * @param { Callback<void, boolean> } [callback] - Unregister the callback function.
     *    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *    Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageClose(callback?: Callback<void, boolean>): void;

    /**
     * Disable window decoration. It must be called before loadContent.
     *
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Disable window decoration. It must be called before loadContent.
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    disableWindowDecor(): void;

    /**
     * Sets whether can show on lock screen or not
     *
     * @param { boolean } showOnLockScreen can show on lock screen if true, or not if false
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    /**
     * Sets whether can show on lock screen or not
     *
     * @param { boolean } showOnLockScreen can show on lock screen if true, or not if false
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    setShowOnLockScreen(showOnLockScreen: boolean): void;

    /**
     * Set whether to use default density.
     *
     * @param { boolean } enabled - Use default density if true, or follow system density change if false
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *    capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * Sets the custom density of ability.
     *
     * @param { double } density - the specified custom density value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     */
    setCustomDensity(density: number): void;

    /**
     * Sets the custom density of ability.
     *
     * @param { double } density - the specified custom density value.
     * @param { boolean } [applyToSubWindow] - whether to apply the custom density to already created subwindows.
     *     The default value is false.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setCustomDensity(density: double, applyToSubWindow?: boolean): void;

    /**
     * Allows the application to control the time when the launch page disappears.
     * This API takes effect only for the application main window
     * when enable.remove.starting.window under metadata in abilities in the module.json5 file is set to true.
     *
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window stage is not created or destroyed;
     *                     2. The main window is not created or destroyed;
     *                     3. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    removeStartingWindow(): Promise<void>;

    /**
     * Set the application modality of the windowStage.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    /**
     * Enables the modal property of the main window.
     *
     * @param { boolean } isModal - Whether to enable the modal property of the main window.
     *                              The value true means to enable the modal property, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowModal(isModal: boolean): Promise<void>;

    /**
     * Sets whether to enable the auto-save feature for the size of the main window.
     *
     * @param { boolean } enabled - Whether to enable the auto-save feature for the main window's size.
     *                              The value true means to enable the auto-save feature, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *   Possible cause: 1. The window is not created or destroyed;
     *                   2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean): Promise<void>;

    /**
     * Set to automatically save the window rect and whether to enable specifiedFlag. 
     * Through the specifiedFlag flag, the window is marked and its rect is saved. 
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @param { boolean } isSaveBySpecifiedFlag - Enable the specifiedFlag if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Function setWindowRectAutoSave can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>;

    /**
     * Whether the window supports the window rect auto-save.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the window rect auto-save is supported, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    /**
     * Checks whether the auto-save feature is enabled for the main window's size.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *                               The value true means that the auto-save feature is enabled, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isWindowRectAutoSave(): Promise<boolean>;

    /**
     * Sets the supported window modes of the main window.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *  Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>;

    /**
     * Sets the supported window modes of the main window.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of window.
     * @param { boolean } grayOutMaximizeButton - Whether to gray out the window maximize button.
     *  The value true means to gray out the button, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *  Function setSupportedWindowModes can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     *     3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>;

    /**
     * Sets Image for recent.
     *
     * @param { number } imgResourceId - This value is resource ID for the recent image.
     * @param { ImageFit } value - Sets the zoom type of an image.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 19 dynamic
     */
    setImageForRecent(imgResourceId: number, value: ImageFit): Promise<void>;

    /**
     * Sets Image for recent.
     *
     * @param { long | image.PixelMap } imageResource - imageResourceId or pixelMap for recent image.
     *     imageResourceId Value Range: [0x1000000, 0xffffffff].
     * @param { ImageFit } value - Sets the zoom type of an image.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>;

    /**
     * Remove Image for recent.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    removeImageForRecent(): Promise<void>;
  }

  /**
   * Attribute of the window for UI service extension ability.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  enum ExtensionWindowAttribute {
    /**
     * System window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM_WINDOW = 0,

    /**
     * Sub window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SUB_WINDOW = 1
  }

  /**
   * Options for system window creation.
   *
   * @interface SystemWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface SystemWindowOptions {
    /**
     * Indicates window type.
     *
     * @type { WindowType }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowType: WindowType;
  }

  /**
   * Configuration of the window for UI service extension ability.
   *
   * @interface ExtensionWindowConfig
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ExtensionWindowConfig {
    /**
     * Window name.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowName: string;

    /**
     * Defines whether the window is a subwindow or a system window.
     *
     * @type { ExtensionWindowAttribute }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowAttribute: ExtensionWindowAttribute;

    /**
     * The position and size of window.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * The options of sub window creation.
     *
     * @type { ?SubWindowOptions }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    subWindowOptions?: SubWindowOptions;

    /**
     * The options of system window creation.
     *
     * @type { ?SystemWindowOptions }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    systemWindowOptions?: SystemWindowOptions;
  }

  /**
   * The layout info of Window.
   *
   * @interface WindowLayoutInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowLayoutInfo {
    /**
     * The position and size of window.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    windowRect: Rect;
  }

  /**
   * Enum for window mode
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum GlobalWindowMode {
    /**
     * Fullscreen
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FULLSCREEN = 1,

    /**
     * Split
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SPLIT = 1 << 1,

    /**
     * Float
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FLOAT = 1 << 2,

    /**
     * Picture in picture
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PIP = 1 << 3
  }

  /**
   * Note: The alpha channel value is included in visibility computation. When a window is covered by another window
   * with alpha < 1, it is not considered occluded, and its occlusion state is reported as fully visible.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum OcclusionState {
    /**
     * The window is fully visible.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    NO_OCCLUSION = 0,

    /**
     * The window is partially occluded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PARTIAL_OCCLUSION = 1,

    /**
     * The window is fully occluded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    FULL_OCCLUSION = 2
  }

  /**
   * Rotation change type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RotationChangeType {
    /**
     * Rotation will begin
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_WILL_ROTATE = 0,

    /**
     * Rotation end
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_DID_ROTATE = 1
  }

  /**
   * Rect type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * Rect relative to screen
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_SCREEN = 0,
    /**
     * Rect relative to parent window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_PARENT_WINDOW = 1
  }

  /**
   * Screenshot event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScreenshotEventType {
    /**
     * System screenshot
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT = 0,
    /**
     * System screenshot abort
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT_ABORT = 1,
    /**
     * Scroll shot start
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_START = 2,
    /**
     * Scroll shot end
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_END = 3,
    /**
     * Scroll shot abort
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_ABORT = 4,
  }

  /**
   * Rotation Info Type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  enum RotationInfoType {
    /**
     * Window orientation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    WINDOW_ORIENTATION = 0,
    /**
     * Display orientation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ORIENTATION = 1,
    /**
     * Display rotation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ROTATION = 2
  }

  /**
   * Rotation change info
   *
   * @interface RotationChangeInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeInfo {
    /**
     * Rotation change type
     *
     * @type { RotationChangeType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    type: RotationChangeType;
    /**
     * window orientation
     *
     * @type { int }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * Display id
     *
     * @type { long }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * Display rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayRect: Rect;
  }

  /**
   * Rotation change result
   *
   * @interface RotationChangeResult
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeResult {
    /**
     * Rect type
     *
     * @type { RectType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    rectType: RectType;
    /**
     * Window rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    windowRect: Rect;
  }

  /**
   * Rotation Change callback
   *
   * @typedef {function}
   * @param { T } info
   * @returns { U } result
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  type RotationChangeCallback<T, U> = (info: T) => U;
}

export default window;
