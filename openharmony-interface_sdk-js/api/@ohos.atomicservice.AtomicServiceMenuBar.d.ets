/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file Defines provides a configuration capabilities for the menuBar of atomicservice.
 * @kit ArkUI
 */

/**
 * Provide configuration capabilities for the menuBar of atomicservice
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamiconly
 */
export declare class AtomicServiceMenuBar {
  /**
   * The constructor used to create a AtomicServiceMenuBar object.
   *
   * @param { UIContext } uiContext - The atomicservice context instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  constructor(uiContext: UIContext);

  /**
   * Set the visibility of the atomicservice menubar.
   *
   * @param { boolean } visible - whether this bar is visible,true indicate the menubar is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamiconly
   */
  public setVisible(visible: boolean): void;
}