/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * ModifierUtils provides utility methods for modifier and attribute operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export declare class ModifierUtils {
  /**
   * Checks if the given instance is of the specified component type.
   *
   * @param { T } instance - The instance to check.
   * @param { string } componentName - The name of the component type to check against.
   * @returns { boolean } Returns true if the instance is of the specified component type. Otherwise, returns false.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  static isInstanceOf<T extends CommonMethod<T>>(instance: T, componentName: string): boolean;
}
