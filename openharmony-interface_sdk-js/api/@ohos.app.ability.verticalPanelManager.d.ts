/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import type common from './@ohos.app.ability.common';
import { AbilityResult } from './ability/abilityResult';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * Defines a OnError function.
 * 
 * @typedef { function } OnErrorFn
 * @param { number } code - The code returned if the UIAbility or UIExtensionAbility failed to start.
 * @param { string } name - The name returned if the UIAbility or UIExtensionAbility failed to start.
 * @param { string } message - The message returned if the UIAbility or UIExtensionAbility failed to start.
 * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
type OnErrorFn = (code: number, name: string, message: string) => void;

/**
 * Defines a onResult function.
 * 
 * @typedef { function } OnResultFn
 * @param { AbilityResult } parameter - The Parameter returned if the UIExtensionAbility call terminateSelfWithResult.
 * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
type OnResultFn = (parameter: AbilityResult) => void;

/**
 * Defines a vertical domain panel manager.
 * 
 * @namespace verticalPanelManager
 * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace verticalPanelManager {

  /**
   * Starts the vertical domain picker with panel config.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the caller application is in the background, it is not allowed to call this interface.
   * 
   * @param { common.UIAbilityContext } context - Indicates the ui ability context of the application.
   * @param { Record<string, Object> } wantParam - Indicates the want parameter.
   * @param { PanelConfig } panelConfig - Indicates the panel config.
   * @param { PanelStartCallback } panelStartCallback - indicates the panelStartCallback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service or system server handle failed.
   * @throws { BusinessError } 16000135 - The main window of this ability of this context does not exits.
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  function startVerticalPanel(
      context: common.UIAbilityContext,
      wantParam: Record<string, Object>,
      panelConfig: PanelConfig,
      panelStartCallback: PanelStartCallback
  ): Promise<void>;
 
  /**
   * Starts the vertical domain picker with panel config.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the caller application is in the background, it is not allowed to call this interface.
   * 
   * @param { common.UIAbilityContext } context - Indicates the ui ability context of the application.
   * @param { Record<string, RecordData> } wantParam - Indicates the want parameter.
   * @param { PanelConfig } panelConfig - Indicates the panel config.
   * @param { PanelStartCallback } panelStartCallback - indicates the panelStartCallback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service or system server handle failed.
   * @throws { BusinessError } 16000135 - The main window of this ability of this context does not exits.
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function startVerticalPanel(
      context: common.UIAbilityContext,
      wantParam: Record<string, RecordData>,
      panelConfig: PanelConfig,
      panelStartCallback: PanelStartCallback
  ): Promise<void>;

  /**
   * Indicates the panel config
   * 
   * @interface PanelConfig
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface PanelConfig {
    /**
     * The type of vertical domain
     * 
     * @type { VerticalType }
     * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: VerticalType;

    /**
     * Indicates the info about source app
     * 
     * <p>**NOTE**
     * <br>1. The values of the following keys are assigned by the system. Manual settings do not take effect,
     * since the system automatically changes the values to the actual values during data transfer.
     * -SOURCE_APP_BUNDLE_NAME: bundle name of the caller. The value is a string.
     * -SOURCE_APP_MODULE_NAME: module name of the caller. The value is a string.
     * -SOURCE_APP_ABILITY_NAME: ability name of the caller. The value is a string.
     * -SOURCE_APP_WINDOW_ID: the window ID of the caller. The value is a string.
     * -SOURCE_APP_SCREEN_MODE: the screen mode of the split screen. The value is a string. The value is "1".
     * @type { Record<string, string> }
     * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    sourceAppInfo: Record<string, string>;
  }

  /**
   * Provides vertical type definition.
   * 
   * @enum { string } VerticalType
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export enum VerticalType {
    /**
     * Indicates the type for Navigation.
     * 
     * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    NAVIGATION = 'navigation',
  }

  /**
   * The callback of start vertical panel.
   * 
   * @typedef PanelStartCallback
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface PanelStartCallback {
    /**
     * Called when some error occurred except disconnected from UIAbility or UIExtensionAbility.
     * 
     * @type { OnErrorFn } 
     * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    onError: OnErrorFn;
    
    /**
     * Called when UIExtensionAbility terminate with result.
     * 
     * @type { ?OnResultFn }
     * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    onResult?: OnResultFn;
  }

  /**
   * export the const string of bundleName and provide it for sourceAppInfo.
   * @constant
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export const SOURCE_APP_BUNDLE_NAME = 'bundleName';

  /**
   * export the const string of moduleName and provide it for sourceAppInfo.
   * @constant
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export const SOURCE_APP_MODULE_NAME = 'moduleName';

  /**
   * export the const string of abilityName and provide it for sourceAppInfo.
   * @constant
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export const SOURCE_APP_ABILITY_NAME = 'abilityName';

  /**
   * export the const string of windowId and provide it for sourceAppInfo.
   * @constant
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export const SOURCE_APP_WINDOW_ID = 'windowId';

  /**
   * export the const string of screenMode and provide it for sourceAppInfo.
   * @constant
   * @syscap SystemCapability.Ability.AppExtension.VerticalPanel
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export const SOURCE_APP_SCREEN_MODE = 'screenMode';
}

export default verticalPanelManager;