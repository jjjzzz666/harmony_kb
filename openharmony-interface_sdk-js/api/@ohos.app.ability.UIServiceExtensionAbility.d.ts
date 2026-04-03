/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
/*** if arkts dynamic */
import type Want from './@ohos.app.ability.Want';
import type UIServiceExtensionContext from './application/UIServiceExtensionContext';
import type UIServiceHostProxy from './application/UIServiceHostProxy';
/*** endif */
/*** if arkts static */
import Want from './@ohos.app.ability.Want';
import UIServiceExtensionContext from './application/UIServiceExtensionContext';
import UIServiceHostProxy from './application/UIServiceHostProxy';
import { RecordData } from './@ohos.base';
/*** endif */
import window from './@ohos.window';

/**
 * The class of UI service extension ability.
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
declare class UIServiceExtensionAbility extends ExtensionAbility {
  /**
   * Indicates configuration information about an UI service extension ability context.
   *
   * @type { UIServiceExtensionContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  context: UIServiceExtensionContext;

  /**
   * Called back when an UI service extension is started for initialization.
   *
   * @param { Want } want - Indicates the want of created UI service extension.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Called back when a UI service extension is started.
   *
   * @param { Want } want - Indicates the want of UI service extension to start.
   * @param { int } startId - Indicates the number of times the UI service extension has been started.
   *                             The {@code startId} is incremented by 1 every time the UI service extension is started.
   *                             For example, if the UI service extension has been started for six times.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Called back when a UI service extension is connected to an ability.
   *
   * @param { Want } want - Indicates connection information about the UI service ability.
   * @param { UIServiceHostProxy } proxy - Indicates the UI service host proxy.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onConnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * Called back when ability connected to a UI service extension is disconnected.
   *
   * @param { Want } want - Indicates disconnection information about the UI service extension.
   * @param { UIServiceHostProxy } proxy - Indicates the UI service host proxy.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * Called back when a window will create.
   *
   * @param { window.ExtensionWindowConfig } config - Indicates the extension window config.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowWillCreate(config: window.ExtensionWindowConfig): void;

  /**
   * Called back when a window  is created.
   *
   * @param { window.Window } window - Indicates the created Window.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowDidCreate(window: window.Window): void;

  /**
   * Called back when data is sent.
   *
   * @param { UIServiceHostProxy } proxy - Indicates the UI service host proxy.
   * @param { Record<string, Object> } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void;

  /**
   * Called back when data is sent.
   *
   * @param { UIServiceHostProxy } proxy - Indicates the UI service host proxy.
   * @param { Record<string, RecordData> } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, RecordData>): void;

  /**
   * Called back before a UI service extension is destroyed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}
export default UIServiceExtensionAbility;
