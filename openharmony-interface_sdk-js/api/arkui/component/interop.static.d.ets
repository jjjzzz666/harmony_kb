'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { Builder } from './builder';
import { ExtendableComponent } from './extendableComponent';
import { IDecoratedV1Variable } from '../stateManagement/decorator';

/**
 * Defines the info of compatible custom component.
 *
 * @typedef CompatibleComponentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface CompatibleComponentInfo {
    /**
     * the name of compatible custom component
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    name: string;

    /**
     * the compatible custom component
     *
     * @type { ESValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    component: ESValue;
}

/**
 * Defines the callback for initializing compatible custom component.
 *
 * @typedef { function } CompatibleInitCallback
 * @param { ESValue } parent - the parent of compatible custom component
 * @returns { CompatibleComponentInfo } the info of compatible custom component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CompatibleInitCallback = (parent: ESValue) => CompatibleComponentInfo;

/**
 * Defines the callback for updating compatible custom component.
 *
 * @typedef { function } CompatibleUpdateCallback
 * @param { ESValue } component - the compatible custom component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CompatibleUpdateCallback = (component: ESValue) => void;

/**
 * Obtains the compatible custom component.
 *
 * @param { CompatibleInitCallback } init - the callback for initializing compatible custom component
 * @param { CompatibleUpdateCallback } update - the callback for updating compatible custom component
 * @param { ExtendableComponent } [component] - the custom component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
export declare function compatibleComponent(
    init: CompatibleInitCallback,
    update: CompatibleUpdateCallback,
    component?: ExtendableComponent
): void;

/**
 * Obtains the compatible state.
 *
 * @param { IDecoratedV1Variable<T> } state - the source state
 * @returns { ESValue } the compatible state
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function getCompatibleState<T>(state: IDecoratedV1Variable<T>): ESValue;

/**
 * Obtains the compatible WrappedBuilder.
 *
 * @param { Any } builder - the WrappedBuilder
 * @param { FixedArray<ESValue> } args - the parameters of WrappedBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
export declare function compatibleWrappedBuilder(builder: Any, ...args: FixedArray<ESValue>): void;

/**
 * Transfer compatible Builder
 * 
 * @param { T } builder - the source builder
 * @returns { ESValue } the compatible builder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function transferCompatibleBuilder<T extends Function>(@Builder builder: T): ESValue;

/**
 * Defines the source builder for updating compatible builder.
 *
 * @typedef { function } CompatibleUpdatableBuilder<T>
 * @param { T } arg - the argument of the source builder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
export type CompatibleUpdatableBuilder<T> = (arg: T) => void;
 
/**
 * Transfer compatible and updatable Builder
 * 
 * @param { CompatibleUpdatableBuilder<T> } builder - the source builder
 * @returns { ESValue } the compatible builder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function transferCompatibleUpdatableBuilder<T extends Object>(
    builder: CompatibleUpdatableBuilder<T>
): ESValue;

/**
 * Enable compatible ObservedV2 for Dynamic
 * 
 * @param { T } value - the source value
 * @returns { T } the result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 staticonly
 */
export declare function enableCompatibleObservedV2ForDynamic<T>(value: T): T;

/**
 * Enable compatible ObservedV2 for Static
 * 
 * @param { T } value - the source value
 * @returns { T } the result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 staticonly
 */
export declare function enableCompatibleObservedV2ForStatic<T>(value: T): T;