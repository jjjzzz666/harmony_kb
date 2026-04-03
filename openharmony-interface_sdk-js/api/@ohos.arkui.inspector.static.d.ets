'use static';
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
 * @file
 * @kit ArkUI
 */
import { RecordData } from './@ohos.base';
import { VoidCallback } from '@ohos.arkui.component';
import { Callback } from './@ohos.base';

/**
 * Used to do observer layout and draw event for component.
 *
 * @namespace inspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare namespace inspector {
    
    /**
     * The ComponentObserver is used to listen for layout, draw and drawChildren events.
     *
     * @interface ComponentObserver
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    interface ComponentObserver {
        
        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the component layout complete.
         * @param { VoidCallback } callback - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onLayout(callback: VoidCallback): void;
        
        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the component layout complete.
         * @param { VoidCallback } [callback] - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offLayout(callback?: VoidCallback): void;
        
        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the component draw complete.
         * @param { VoidCallback } callback - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDraw(callback: VoidCallback): void;
        
        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the component draw complete.
         * @param { VoidCallback } [callback] - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offDraw(callback?: VoidCallback): void;

        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the child of component draw complete.
         * @param { VoidCallback } callback - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        onDrawChildren(callback: VoidCallback): void;

        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the child of component draw complete.
         * @param { VoidCallback } [callback] - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 23 static
         */
        offDrawChildren(callback?: VoidCallback): void;

        /**
          * Registers a callback with the corresponding query condition by using the handle.
          * This callback is triggered when the child of component draw complete.
          *
          * @param { Callback<int[]> } callback - callback of the listened event.
          * @syscap SystemCapability.ArkUI.ArkUI.Full
          * @stagemodelonly
          * @since 24 static
          */
        onDrawChildren(callback: Callback<int[]>): void;
 
         /**
          * Deregisters a callback with the corresponding query conditiion by using the handle.
          * This callback is not triggered when the child of component draw complete.
          *
          * @param { Callback<int[]> } [callback] - callback of the listened event.
          *     <br>Default value undefined
          * @syscap SystemCapability.ArkUI.ArkUI.Full
          * @stagemodelonly
          * @since 24 static
          */
        offDrawChildren(callback?: Callback<int[]>): void;

        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the child of component layout complete.
         * 
         * @param { VoidCallback } callback - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onLayoutChildren(callback: VoidCallback): void;

        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the child of component layout complete.
         * 
         * @param { VoidCallback } [callback] - callback of the listened event.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        offLayoutChildren(callback?: VoidCallback): void;
    }
    
    /**
     * Obtains all attributes of the component with the specified ID.
     *
     * @param { string } id - ID of the component whose attributes are to be obtained.
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @test
     */
    function getInspectorByKey(id: string): string;
    /**
     * Get components tree.
     *
     * @returns { RecordData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @test
     */
    function getInspectorTree(): RecordData;
    /**
     * Sends an event to the component with the specified ID.
     *
     * @param { string } id - ID of the component for which the event is to be sent.
     * @param { int } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
     * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @test
     */
    function sendEventByKey(id: string, action: int, params: string): boolean;
}
export default inspector;
/**
 * export function getInspectorByKey from inspector namespace and provide it for kit ArkUI.
 * @constant
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const GETINSPECTORBYKEY = inspector.getInspectorByKey;
/**
 * export function getInspectorTree from inspector namespace and provide it for kit ArkUI.
 * @constant
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const GETINSPECTORTREE = inspector.getInspectorTree;
/**
 * export function sendEventByKey from inspector namespace and provide it for kit ArkUI.
 * @constant
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const SENDEVENTBYKEY = inspector.sendEventByKey;
