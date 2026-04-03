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
 * @kit BasicServicesKit
 */

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import type SelectionExtensionContext from './@ohos.selectionInput.SelectionExtensionContext';

/**
 * Defines the class of the ExtensionAbility for word selection.
 * 
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi
 * @since 20 dynamic
 */
/**
 * Defines the class of the ExtensionAbility for word selection.
 * 
 * @syscap SystemCapability.SelectionInput.Selection
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare class SelectionExtensionAbility {
  /**
   * Context of the ExtensionAbility.
   * 
   * @type { SelectionExtensionContext }
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   */
  /**
   * Context of the ExtensionAbility.
   * 
   * @type { SelectionExtensionContext }
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  context: SelectionExtensionContext;

  /**
   * Callback invoked when the ExtensionAbility is initialized.
   * 
   * @param { Want } want Want object used to initialize the ExtensionAbility.
   * @returns { rpc.RemoteObject } RPC remote connection object.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   */
  /**
   * Callback invoked when the ExtensionAbility is initialized.
   * 
   * @param { Want } want Want object used to initialize the ExtensionAbility.
   * @returns { rpc.RemoteObject } RPC remote connection object.
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * Callback invoked when the ExtensionAbility is disconnected.
   * 
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi
   * @since 20 dynamic
   */
  /**
   * Callback invoked when the ExtensionAbility is disconnected.
   * 
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onDisconnect(): void;

}

export default SelectionExtensionAbility;