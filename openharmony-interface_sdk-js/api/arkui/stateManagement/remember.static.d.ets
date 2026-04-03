'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { Builder } from '../component/builder';

/**
 * Mutable state variable declared with rememberVariable.
 *
 * @interface MutableVariable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MutableVariable<T> {
  /**
   * Mutable variable value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: T;
}

/**
 * Type of initial value for rememberVariable.
 *
 * @typedef { (() => T) | T } RememberInitialType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type RememberInitialType<T> = (() => T) | T;

/**
 * Create variable within @Builder functions or build().
 *
 * @param { RememberInitialType<T> } initialValue - directly pass primitives
 *     or use callback to pass class, interface and builtins.
 *     The callback is only executed once.
 * @returns { MutableVariable<T> } mutable state variable.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function rememberVariable<T>(initialValue: RememberInitialType<T>): MutableVariable<T>;