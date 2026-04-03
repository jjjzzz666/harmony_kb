/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * A test case for typedef tag's value
 * @typedef test1
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9
 */
export interface OnReleaseCallback {}

/**
 * A test case for typedef tag's value
 * @typedef { error }
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 12
 */
declare type ValueType = number | string;

/**
 * A test case for typedef tag's value
 * @typedef { (event: ClickEvent) => void } 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 * @param { ClickEvent } event - the information of ClickEvent
 */
declare type ClickEventListenerCallback = (event: ClickEvent) => void;

/**
   * A test case for typedef tag's value
   * @typedef { { navigationId: ResourceStr } } 
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 9
   */
export type DataAbilityHelper = { navigationId: ResourceStr };