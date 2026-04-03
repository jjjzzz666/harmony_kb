'use static'
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
 * @file Defines a modifier which can update attributes to native side.
 * @kit ArkUI
 */

import { AttributeModifier } from '@ohos.arkui.component';
import { RecordData } from '../@ohos.base';


/**
 * function that returns by the function updateConstructorParams.
 *
 * @typedef { function } Initializer<T>
 * @param { FixedArray<RecordData> } params
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Initializer<T> = (...params:FixedArray<RecordData>) => T;

/**
 * Defines a modifier which can update attributes to native side.
 *
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare class AttributeUpdater<T> implements AttributeModifier<T> {
   
  /**
   * Get attribute of the modifier.
   *
   * @returns { T | undefined } The attribute of the modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
   get attribute(): T | undefined;

  /**
   * Defines a function for initialization.
   *
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
   initializeModifier(instance: T): void;

  /**
   * Used to update constructor params.
   *
   * @type { Initializer<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
   get updateConstructorParams(): Initializer<T>;

     /**
   * Defines a function executed when component changed.
   *
   * @param { T } component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
   onComponentChanged(component: T): void;
}
