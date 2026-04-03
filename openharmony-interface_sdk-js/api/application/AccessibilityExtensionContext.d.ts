/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @file Provides accessibility extension context
 * @kit AccessibilityKit
 */

import type { AsyncCallback, BusinessError, Callback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import type accessibility from '../@ohos.accessibility';
/*** if arkts dynamic */
import type { GesturePath } from '../@ohos.accessibility.GesturePath';
/*** endif */
import type Want from '../@ohos.app.ability.Want';
import { AccessibilityAction, FocusMoveResultCode } from '../@ohos.accessibility';

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * Set the bundle names that is interested in sending the event.
   *
   * @param { Array<string> } targetNames The bundle names that are interested in sending the event.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Set the bundle names that is interested in sending the event.
   *
   * @param { Array<string> } targetNames The bundle names that are interested in sending the event.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>): Promise<void>;

  /**
   * Get focus element.
   *
   * @param { boolean } isAccessibilityFocus Indicates whether the acquired element has an accessibility focus.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus: boolean, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get focus element.
   *
   * @param { boolean } isAccessibilityFocus Indicates whether the acquired element has an accessibility focus.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus?: boolean): Promise<AccessibilityElement>;

  /**
   * Get focus element.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window root element.
   *
   * @param { int } windowId Indicates the window ID.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(windowId: int, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window root element.
   *
   * @param { int } windowId Indicates the window ID.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(windowId?: int): Promise<AccessibilityElement>;

  /**
   * Get window root element.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window list.
   *
   * @param { long } displayId Indicates the display ID.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(displayId: long, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Get window list.
   *
   * @param { long } displayId Indicates the display ID.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(displayId?: long): Promise<Array<AccessibilityElement>>;

  /**
   * Get window list.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext/AccessibilityExtensionContext#injectGestureSync
   */
  injectGesture(gesturePath: GesturePath, callback: AsyncCallback<void>): void;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext/AccessibilityExtensionContext#injectGestureSync
   */
  injectGesture(gesturePath: GesturePath): Promise<void>;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  injectGestureSync(gesturePath: GesturePath): void;

  /**
   * Starts a new ability.
   *
   * @param { Want } want - Indicates the start options.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * get all subElements in window.
   * @param { int } windowId Indicates the window ID.
   * @param { long } elementId Indicates the elementId.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *    1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameter types;
   *    3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  getElements(windowId: int, elementId?: long): Promise<Array<AccessibilityElement>>;

  /**
   * Get default focused element ids.
   * @param { int } windowId Indicates whether the windowid can be used as the default focus.
   * @returns { Promise<Array<long>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *    1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameter types;
   *    3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  getDefaultFocusedElementIds(windowId: int): Promise<Array<long>>;

  /**
   * Hold running lock to prevent screen turning off automatically.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  holdRunningLockSync(): void;

  /**
   * Unhold running lock.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  unholdRunningLockSync(): void;

  /**
   * Register accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type Indicates the accessibilityExtensionAbility pre disconnect.
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   */
  on(type: 'preDisconnect', callback: Callback<void>): void;

  /**
   * Register accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  onPreDisconnect(callback: Callback<void>): void;

  /**
   * Unregister accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type Indicates the accessibilityExtensionAbility pre disconnect.
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   */
  off(type: 'preDisconnect', callback?: Callback<void>): void;

  /**
   * Unregister accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  offPreDisconnect(callback?: Callback<void>): void;

  /**
   * Notify accessibility when accessibilityExtensionAbility is ready to disconnect.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  notifyDisconnect(): void;

  /**
   * Get accessibility focused element.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getAccessibilityFocusedElement(): Promise<AccessibilityElement>;

  /**
   * Get window root element.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { int } [windowId] Indicates the window ID.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getRootInActiveWindow(windowId?: int): Promise<AccessibilityElement>;

  /**
   * Get window list.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } [displayId] Indicates the display ID. If this parameter is not provided, indicates the default displayId.
   * @returns { Array<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getAccessibilityWindowsSync(displayId?: long): Array<AccessibilityElement>;
}
export default AccessibilityExtensionContext;

/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef AccessibilityElement
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 */
/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef AccessibilityElement
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export declare interface AccessibilityElement {
  /**
   * Get a list of attribute names.
   *
   * @param { AsyncCallback<Array<T>> } callback Indicates the listener.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void;

  /**
   * Get a list of attribute names.
   * @returns { Promise<Array<T>> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>;

  /**
   * Get the value of an attribute.
   *
   * @param { T } attributeName Indicates the attribute name.
   * @param { AsyncCallback<ElementAttributeValues[T]> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void;

  /**
   * Get the value of an attribute.
   *
   * @param { T } attributeName Indicates the attribute name.
   * @returns { Promise<ElementAttributeValues[T]> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>;

  /**
   * Get a list of supported actions.
   *
   * @param { AsyncCallback<Array<string>> } callback Indicates the listener.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(callback: AsyncCallback<Array<string>>): void;

  /**
   * Get a list of supported actions.
   *
   * @returns { Promise<Array<string>> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(): Promise<Array<string>>;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { object } parameters Indicates the parameters needed to execute the action.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { object } parameters Indicates the parameters needed to execute the action.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, parameters?: object): Promise<void>;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, callback: AsyncCallback<void>): void;

  /**
   * Get the position of cursor in TextInput.
   *
   * @param { AsyncCallback<int> } callback Indicates the listener. 
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(callback: AsyncCallback<int>): void;

  /**
   * Get the position of cursor in TextInput.
   *
   * @returns { Promise<int> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(): Promise<int>;

  /**
   * Set the screen curtain enable or disable.
   *
   * @param { boolean } isEnable Indicates whether the screen curtain is enabled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enableScreenCurtain(isEnable: boolean): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'content' } type The type of query condition is content.
   * @param { string } condition Indicates the specific content to be queried.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'content' } type The type of query condition is content.
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusType' } type The type of query condition is focus type.
   * @param { FocusType } condition Indicates the type of focus to query.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusType' } type The type of query condition is focus type.
   * @param { FocusType } condition Indicates the type of focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusDirection' } type The type of query condition is focus direction.
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusDirection' } type The type of query condition is focus direction.
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'textType' } type The type of query condition is text type.
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  findElement(type: 'textType', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  findElementByTextType(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'elementId' } type The type of query condition is element id.
   * @param { long } condition Indicates the specific content to be queried.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  findElement(type: 'elementId', condition: long): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { long } condition Indicates the specific content to be queried.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  findElementByElementId(condition: long): Promise<AccessibilityElement>;

  /**
   * Indicates accessibility focus state.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityFocused?: boolean;

  /**
   * Indicates the bundle name to which it belongs.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * Indicates whether the element is checkable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checkable?: boolean;

  /**
   * Indicates whether the element is checked.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checked?: boolean;

  /**
   * Indicates whether the element is clickable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clickable?: boolean;

  /**
   * Indicates the component ID to which the element belongs.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentId?: long;

  /**
   * Indicates the component type to which the element belongs.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentType?: string;

  /**
   * Indicates the content.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  contents?: Array<string>;

  /**
   * Indicates the index of the current item.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentIndex?: int;

  /**
   * Indicates the description of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  description?: string;

  /**
   * Indicates whether the element is editable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  editable?: boolean;

  /**
   * Indicates the list index of the last item displayed on the screen.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  endIndex?: int;

  /**
   * Indicates the string of error state.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  error?: string;

  /**
   * Indicates whether the element is focusable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  focusable?: boolean;

  /**
   * Indicates the hint text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hintText?: string;

  /**
   * Indicates the type of input text.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inputType?: int;

  /**
   * Indicates the inspector key.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inspectorKey?: string;

  /**
   * Indicates whether the element is active or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isActive?: boolean;

  /**
   * Indicates whether the element is enable or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isEnable?: boolean;

  /**
   * Indicates whether the element is hint state or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isHint?: boolean;

  /**
   * Indicates whether the element is focused or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isFocused?: boolean;

  /**
   * Indicates whether the element is password or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isPassword?: boolean;

  /**
   * Indicates whether the element is visible or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isVisible?: boolean;

  /**
   * Indicates the total count of the items.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  itemCount?: int;

  /**
   * Indicates the last content.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  lastContent?: string;

  /**
   * Indicates the display layer of the element.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  layer?: int;

  /**
   * Indicates whether the element is long clickable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  longClickable?: boolean;

  /**
   * Indicates the page id.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pageId?: int;

  /**
   * Indicates whether the element supports multiple lines of text.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pluralLineSupported?: boolean;

  /**
   * Indicates the area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rect?: Rect;

  /**
   * Indicates the resource name of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  resourceName?: string;

  /**
   * Indicates the display area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  screenRect?: Rect;

  /**
   * Indicates whether the element is scrollable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollable?: boolean;

  /**
   * Indicates whether the element is selected.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selected?: boolean;

  /**
   * Indicates the list index of the first item displayed on the screen.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  startIndex?: int;

  /**
   * Indicates the text of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  text?: string;

  /**
   * Indicates the maximum length limit of the element text.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textLengthLimit?: int;

  /**
   * Indicates the unit of movement of the element text as it is read.
   *
   * @type { ?accessibility.TextMoveUnit }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textMoveUnit?: accessibility.TextMoveUnit;

  /**
   * Indicates the action that triggered the element event.
   *
   * @type { ?AccessibilityAction }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  triggerAction?: AccessibilityAction;

  /**
   * Indicates the window type of the element.
   *
   * @type { ?WindowType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type?: WindowType;

  /**
   * Indicates the maximum value.
   *
   * @type { ?double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMax?: double;

  /**
   * Indicates the minimum value.
   *
   * @type { ?double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMin?: double;

  /**
   * Indicates the current value.
   *
   * @type { ?double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueNow?: double;

  /**
   * Indicates the window id.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  windowId?: int;

  /**
   * Indicates the offset, in units of px.
   *
   * @type { ?double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: double;

  /**
   * Indicates the text type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textType?: string;

  /**
   * Indicates the accessibility text of component.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText?: string;

  /**
   * Indicates the custom state of component.
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  accessibilityStateDescription?: string;

  /**
   * Indicates the hot area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hotArea?: Rect;

  /**
   * Indicates the custom component type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  customComponentType?: string;

  /**
   * Indicates the component next accessibility focus id.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityNextFocusId?: long;

  /**
   * Indicates the component previous accessibility focus id.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityPreviousFocusId?: long;

  /**
   * Indicates the extra info of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;

  /**
   * Indicates whether the element is scrollable for accessibility.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityScrollable?: boolean;

  /**
   * Indicates actions the element support.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  supportedActionNames?: Array<string>;

  /**
   * Indicates whether the element is accessibilityGroup.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityGroup?: boolean;

  /**
   * Indicates the accessibilityLevel of component.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel?: string;

  /**
   * Indicates the navDestination id of component.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  navDestinationId?: long;

  /**
   * Indicates the current item in grid of component.
   *
   * @type { ?AccessibilityGrid }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentItem?: AccessibilityGrid;

  /**
   * Indicates the span array of component.
   *
   * @type { ?AccessibilitySpan[] }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spans?: AccessibilitySpan[];

  /**
   * Indicates whether the component is accessibility visible.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityVisible?: boolean;

  /**
   * Indicates the main windowId of component.
   *
   * @type { ?int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  mainWindowId?: int;

  /**
   * Indicates whether the component need clip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clip?: boolean;

  /**
   * Indicates the parent element id of component.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  parentId?: long;

  /**
   * Indicates the children elements id list of component.
   *
   * @type { ?Array<long> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  childrenIds?: Array<long>;

  /**
   * Execute the specified action.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityAction } action Indicates the action to execute.
   * @param { Parameter } [parameters] Indicates the parameters needed to execute the action.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  executeAction(action: AccessibilityAction, parameters?: Parameter): Promise<void>;

  /**
   * Get element's parent.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getParent(): Promise<AccessibilityElement>;

  /**
   * Get element's children.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getChildren(): Promise<Array<AccessibilityElement>>;

  /**
 * Get element's root.
 *
 * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
 * @returns { Promise<AccessibilityElement> }
 * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
 * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
  getRoot(): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementByContent(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the focus direction.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementByFocusDirection(condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition Indicates the specific json string to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementsByAccessibilityHintText(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the elementId.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } condition Indicates the elementId to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementById(condition: long): Promise<AccessibilityElement>;

  /**
   * Find elements to be focused that match the condition.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusRule } rule Indicates the rule to check accessibility node.
   * @param { FocusCondition } condition Indicates the condition to execute accessibility focus.
   * @returns { Promise<FocusMoveResult> }
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  findElementsByCondition(rule: FocusRule, condition: FocusCondition): Promise<FocusMoveResult>;
}

/**
 * Indicates grid info.
 *
 * @typedef AccessibilityGrid
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilityGrid {
  /**
   * The row index in grid.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rowIndex: int;
  /**
   * The colum index in grid.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  columnIndex: int;
}

/**
 * Indicates span info.
 *
 * @typedef AccessibilitySpan
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilitySpan {
  /**
   * The id of span.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId: int;
  /**
   * The text of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanText: string;
  /**
   * The accessibility text of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText: string;
  /**
   * The accessibility description of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityDescription: string;
  /**
   * The accessibility level of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel: string;
}

/**
 * Indicates the parameter of the AccessibiltyAction.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare class Parameter {
  /**
   * Indicates the text to set for AccessibilityAction.SET_TEXT.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  setText?: string;
  /**
   * Indicates the begin position of select text  for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextBegin?: string;
  /**
   * Indicates the end position of select text for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextEnd?: string;
  /**
   * Indicates the direction of select text for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextInForWard?: boolean;
  /**
   * Indicates the cursor position for AccessibilityAction.SET_CURSOR_POSITION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: string;
  /**
   * Indicates the span id for AccessibilityAction.SPAN_CLICK.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId?: string;
  /**
   * Indicates the scroll type for AccessibilityAction.SCROLL_FORWARD and AccessibilityAction.SCROLL_BACKWARD.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollType?: string;
}

/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @typedef ElementAttributeValues
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 11 dynamiconly
 */
/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @typedef ElementAttributeValues
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 23 dynamiconly
 */
export interface ElementAttributeValues {
  /**
   * Indicates accessibility focus state.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  accessibilityFocused: boolean;
  /**
   * Indicates the bundle name to which it belongs.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  bundleName: string;
  /**
   * Indicates whether the element is checkable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checkable: boolean;
  /**
   * Indicates whether the element is checked.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checked: boolean;
  /**
   * Indicates all child elements.
   *
   * @type {Array<AccessibilityElement>}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  children: Array<AccessibilityElement>;
  /**
   * Indicates whether the element is clickable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  clickable: boolean;
  /**
   * Indicates the component ID to which the element belongs.
   *
   * @type {long}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentId: long;
  /**
   * Indicates the component type to which the element belongs.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentType: string;
  /**
   * Indicates the content.
   *
   * @type {Array<string>}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  contents: Array<string>;
  /**
   * Indicates the index of the current item.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  currentIndex: int;
  /**
   * Indicates the description of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  description: string;
  /**
   * Indicates whether the element is editable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  editable: boolean;
  /**
   * Indicates the list index of the last item displayed on the screen.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  endIndex: int;
  /**
   * Indicates the string of error state.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  error: string;
  /**
   * Indicates whether the element is focusable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  focusable: boolean;
  /**
   * Indicates the hint text.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  hintText: string;
  /**
   * Indicates the type of input text.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inputType: int;
  /**
   * Indicates the inspector key.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inspectorKey: string;
  /**
   * Indicates whether the element is active or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isActive: boolean;
  /**
   * Indicates whether the element is enable or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isEnable: boolean;
  /**
   * Indicates whether the element is hint state or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isHint: boolean;
  /**
   * Indicates whether the element is focused or not.
   * 
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isFocused: boolean;
  /**
   * Indicates whether the element is password or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isPassword: boolean;
  /**
   * Indicates whether the element is visible or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isVisible: boolean;
  /**
   * Indicates the total count of the items.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  itemCount: int;
  /**
   * Indicates the last content.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  lastContent: string;
  /**
   * Indicates the display layer of the element.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  layer: int;
  /**
   * Indicates whether the element is long clickable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  longClickable: boolean;
  /**
   * Indicates the page id.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pageId: int;
  /**
   * Indicates the parent of the element.
   *
   * @type {AccessibilityElement}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  parent: AccessibilityElement;
  /**
   * Indicates whether the element supports multiple lines of text.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pluralLineSupported: boolean;
  /**
   * Indicates the area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rect: Rect;
  /**
   * Indicates the resource name of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  resourceName: string;
  /**
   * Indicates the root element of the window element.
   *
   * @type {AccessibilityElement}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rootElement: AccessibilityElement;
  /**
   * Indicates the display area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  screenRect: Rect;
  /**
   * Indicates whether the element is scrollable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  scrollable: boolean;
  /**
   * Indicates whether the element is selected.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  selected: boolean;
  /**
   * Indicates the list index of the first item displayed on the screen.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  startIndex: int;
  /**
   * Indicates the text of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  text: string;
  /**
   * Indicates the maximum length limit of the element text.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textLengthLimit: int;
  /**
   * Indicates the unit of movement of the element text as it is read.
   *
   * @type {accessibility.TextMoveUnit}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textMoveUnit: accessibility.TextMoveUnit;
  /**
   * Indicates the action that triggered the element event.
   *
   * @type {accessibility.Action}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  triggerAction: accessibility.Action;
  /**
   * Indicates the window type of the element.
   *
   * @type {WindowType}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  type: WindowType;
  /**
   * Indicates the maximum value.
   *
   * @type {double}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMax: double;
  /**
   * Indicates the minimum value.
   *
   * @type {double}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMin: double;
  /**
   * Indicates the current value.
   * 
   * @type {double}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueNow: double;
  /**
   * Indicates the window id.
   *
   * @type {int}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  windowId: int;
  /**
   * Indicates the offset, in units of px.
   *
   * @type {double}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  offset: double;
  /**
   * Indicates the text type.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textType: string;
  /**
   * Indicates the accessibility text of component.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  accessibilityText: string;
  /**
   * Indicates the custom state of component.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamiconly
   */
  accessibilityStateDescription?: string;
  /**
   * Indicates the hot area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  hotArea: Rect;
  /**
   * Indicates the component next accessibility focus id.
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityNextFocusId?: long;
  /**
   * Indicates the custom component type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  customComponentType?: string;
  /**
   * Indicates the extra info of the element.
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  extraInfo?: string;
  /**
   * Indicates the component Previous accessibility focus id.
   *
   * @type { ?long }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityPreviousFocusId?: long;
  /**
   * Indicates whether the element is scrollable for accessibility.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityScrollable?: boolean;
}

/**
 * Indicates the direction of the search focus.
 *
 * @typedef {'up' | 'down' | 'left' | 'right' | 'forward' | 'backward'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type FocusDirection = 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward';

/**
 * Indicates the condition of the search focus.
 *
 * @typedef {'forward' | 'backward' | 'findLast' | 'getForwardScrollAncestor' |
*     'getBackwardScrollAncestor' | 'getScrollableAncestor'}
* @syscap SystemCapability.BarrierFree.Accessibility.Core
* @systemapi
* @since 23 dynamic&static
*/
export type FocusCondition = 'forward' | 'backward' |
'findLast' | 'getForwardScrollAncestor' | 'getBackwardScrollAncestor' | 'getScrollableAncestor';

/**
 * Indicates the type of the focus.
 *
 * @typedef {'accessibility' | 'normal'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export type FocusType = 'accessibility' | 'normal';

/**
 * Indicates the type of the window.
 *
 * @typedef {'application' | 'system'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type WindowType = 'application' | 'system';

/**
 * Indicates the rule of the search focus.
 *
 * @typedef {'bypassSelf' | 'bypassSelfDescendants' |
*     'checkSelf' | 'checkSelfBypassDescendants'}
* @syscap SystemCapability.BarrierFree.Accessibility.Core
* @systemapi
* @since 23 dynamic&static
*/
export type FocusRule = 'bypassSelf' | 'bypassSelfDescendants' |
'checkSelf' | 'checkSelfBypassDescendants';

/**
 * Indicates rectangle.
 *
 * @typedef Rect
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * The left position of Rect, in units of px.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  left: int;
  /**
   * The top position of Rect, in units of px.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  top: int;
  /**
   * The width position of Rect, in units of px.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  width: int;
  /**
   * The height position of Rect, in units of px.
   *
   * @type { int }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  height: int;
}

/**
 * Indicates focus move result.
 *
 * @typedef FocusMoveResult
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export declare interface FocusMoveResult {
  /**
   * The accessibility elementInfos result.
   *
   * @type { Array<AccessibilityElement> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  target: Array<AccessibilityElement>;

  /**
   * The focus move result code.
   *
   * @type { FocusMoveResultCode }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  result: FocusMoveResultCode;
}
