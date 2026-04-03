/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * This module provides the capability to get systemLoad.
 *
 * @namespace systemLoad
 * @syscap SystemCapability.ResourceSchedule.SystemLoad
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace systemLoad {
    /**
     * Enumerates the {@link SystemLoadLevel} types.
     *
     * @enum {int}
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    export enum SystemLoadLevel {
        /**
         * level low
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        LOW = 0,
        /**
         * level NORMAL
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        NORMAL = 1,
        /**
         * level MEDIUM
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        MEDIUM = 2,
        /**
         * level HIGH
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        HIGH = 3,
        /**
         * level OVERHEATED
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        OVERHEATED = 4,
        /**
         * level WARNING
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        WARNING = 5,
        /**
         * level EMERGENCY
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        EMERGENCY = 6,
        /**
         * level ESCAPE
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        ESCAPE = 7
    }

    /**
     * Register system load callback for perception system load change
     * @param { 'systemLoadChange' } type system load change type.
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
     * <br> 2. Register a exist callback type; 3. Parameter verification failed.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     */
    function on(type: 'systemLoadChange', callback: Callback<SystemLoadLevel>): void;

    /**
     * Register system load callback for perception system load change
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 23 static
     */
    function onSystemLoadChange(callback: Callback<SystemLoadLevel>): void;

    /**
     * Unregister system load callback for perception system load change
     * @param { 'systemLoadChange' } type system load change type.
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
     * <br> 2. Unregister type has not register; 3. Parameter verification failed.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     */
    function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void;

    /**
     * Unregister system load callback for perception system load change
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 23 static
     */
    function offSystemLoadChange(callback?: Callback<SystemLoadLevel>): void;

    /**
     * @returns { Promise<SystemLoadLevel> } The promise form returns the SystemLoadLevel result
     * Queries the current system level
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    function getLevel(): Promise<SystemLoadLevel>;
}
export default systemLoad;