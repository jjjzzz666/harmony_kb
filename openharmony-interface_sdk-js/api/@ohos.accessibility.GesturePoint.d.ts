/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AccessibilityKit
 */

/**
 * Indicates the point of the gesture.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare class GesturePoint {
  /**
   * A constructor used to create a GesturePoint object.
   *
   * @param { double } positionX - Indicates the X coordinate of point, in units of px.
   * @param { double } positionY - Indicates the Y coordinate of point, in units of px.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  constructor(positionX: double, positionY: double);
  /**
   * Indicates the X coordinate of point, in units of px.
   *
   * @type { double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  positionX: double;
  /**
   * Indicates the Y coordinate of point, in units of px.
   *
   * @type { double }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  positionY: double;
}
