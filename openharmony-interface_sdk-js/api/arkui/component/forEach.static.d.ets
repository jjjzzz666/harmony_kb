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
import { ComponentBuilder } from './builder';
import { DynamicNode } from './common'

/**
 * Define item generator function.
 *
 * @typedef { function } ItemGeneratorFunc<T>
 * @param { T } item - item in an array
 * @param { int } index - index corresponding to an array item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 staticonly
 */
@Builder
declare type ItemGeneratorFunc<T> = (item: T, index: int) => void;

/**
 * Define key generator function.
 *
 * @typedef { function } KeyGeneratorFunc<T>
 * @param { T } item - item in an array
 * @param { int } index - index corresponding to an array item.
 * @returns { string } Character string generated based on item and index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 staticonly
 */
declare type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
 * declare ForEachAttribute
 *
 * @interface ForEachAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ForEachAttribute extends DynamicNode {
    /**
     * Set the component's source code redirection information. 
     * @param { string } sourceLine - the source code line.
     * @param { string } [moduleName] - module to which the component belongs.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 staticonly
     */
    debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * Defines ForEach Component.
 *
 * @param { Array<T> } arr - the array collection to be used in UI
 * @param { ItemGeneratorFunc<T> } itemGenerator - item generator function
 * @param { KeyGeneratorFunc<T> } [keyGenerator] - key generator function
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ForEach<T>(arr: Array<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
): ForEachAttribute;
