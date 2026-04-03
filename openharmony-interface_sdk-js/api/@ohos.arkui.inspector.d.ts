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

import { Callback } from './@ohos.base';

/**
 * Used to do observer layout and draw event for component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Used to do observer layout and draw event for component.
 * 
 * @namespace inspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace inspector {

  /**
   * The ComponentObserver is used to listen for layout and draw events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The ComponentObserver is used to listen for layout, draw and drawChildren events.
   * 
   * @interface ComponentObserver
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface ComponentObserver {

    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the component layout complete.
     * @param { string } type - type of the listened event.
     * @param { ()=>void } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the component layout complete.
     * @param { 'layout' } type - type of the listened event.
     * @param { function } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'layout', callback: () => void): void;

    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the component layout complete.
     * @param { string } type - type of the listened event.
     * @param { ()=>void } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the component layout complete.
     * @param { 'layout' } type - type of the listened event.
     * @param { function } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'layout', callback?: () => void): void;

    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the component draw complete.
     * @param { string } type - type of the listened event.
     * @param { ()=>void } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the component draw complete.
     * @param { 'draw' } type - type of the listened event.
     * @param { function } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'draw', callback: () => void): void;

    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the component draw complete.
     * @param { string } type - type of the listened event.
     * @param { ()=>void } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the component draw complete.
     * @param { 'draw' } type - type of the listened event.
     * @param { function } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'draw', callback?: () => void): void;
    
    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the child of component draw complete.
     * @param { 'drawChildren' } type - type of the listened event.
     * @param { Callback<void> } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'drawChildren', callback: Callback<void>): void;
    
    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the child of component draw complete.
     * @param { 'drawChildren' } type - type of the listened event.
     * @param { Callback<void> } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'drawChildren', callback?: Callback<void>): void;

    /**
      * Registers a callback with the corresponding query condition by using the handle.
      * This callback is triggered when the child of component draw complete.
      * 
      * @param { Callback<int[]> } callback - callback of the listened event.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 24 dynamic
      */
     onDrawChildren(callback: Callback<int[]>): void;
     
     /**
      * Deregisters a callback with the corresponding query condition by using the handle.
      * This callback is not triggered when the child of component draw complete.
      * 
      * @param { Callback<int[]> } [callback] - callback of the listened event.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 24 dynamic
      */
     offDrawChildren(callback?: Callback<int[]>): void;

    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback will be triggered when the child of component layout is complete.
     *
     * @param { Callback<void> } callback - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onLayoutChildren(callback: Callback<void>): void;
    
    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback will not be triggered when the child of component layout is complete.
     *
     * @param { Callback<void> } [callback] - callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    offLayoutChildren(callback?: Callback<void>): void;
  }

  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   * @param { string } id - component id.
   * @returns { ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   * @param { string } id - component id.
   * @returns { ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIInspector#createComponentObserver
   */
  function createComponentObserver(id: string): ComponentObserver;
}

export default inspector;