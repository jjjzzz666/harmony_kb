'use static';
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { UIContext } from '@ohos.arkui.UIContext';
import { FrameNode } from 'arkui.FrameNode';
import { Size } from 'arkui.Graphics';
import { Callback } from '@ohos.base';
import { TouchEvent } from '@ohos.arkui.component';


/**
 * Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
 * and methods to control the child node of the NodeContainer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 23 static
 */
export declare abstract class NodeController {
  /**
   * MakeNode Method. Used to build a node tree and return the a FrameNode or null, and
   * attach the return result to the associated NodeContainer.
   * Executed when the associated NodeContainer is created or the rebuild function is called.
   *
   * @param { UIContext } uiContext - uiContext used to makeNode
   * @returns { FrameNode | null } - Returns a FrameNode or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  abstract makeNode(uiContext: UIContext): FrameNode | null;

  /**
   * AboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   *
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  aboutToResize(size: Size): void;

  /**
   * AboutToAppear Method. Executed before the associated NodeContainer is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  aboutToAppear(): void;
  
  /**
   * AboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  aboutToDisappear(): void;

  /**
   * Rebuild Method. Used to re invoke the makeNode method.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  rebuild(): void;
  
  /**
   * OnTouchEvent Method. Executed when associated NodeContainer is touched.
   *
   * @param { TouchEvent } event - The TouchEvent when associated NodeContainer is touched.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onTouchEvent(event: TouchEvent): void;

  /**
   * OnAttach Method. Executed when the associated NodeContainer is attached to the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onAttach(): void;

  /**
   * OnDetach Method. Executed when the associated NodeContainer is detached from the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onDetach(): void;

  /**
   * OnWillBind Method. Executed before the NodeController is bound to a NodeContainer.
   *
   * @param { long } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onWillBind(containerId: long): void;

  /**
   * OnWillUnbind Method. Executed before the NodeController is unbind with the NodeContainer.
   *
   * @param { long } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onWillUnbind(containerId: long): void;

  /**
   * OnBind Method. Executed when the NodeController is bound to a NodeContainer.
   *
   * @param { long } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onBind(containerId: long): void;

  /**
   * OnUnbind Method. Executed when the NodeController is unbind with the NodeContainer.
   *
   * @param { long } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  onUnbind(containerId: long): void;
}
