/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * Auto fill service trigger type.
 *
 * @enum { int }
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export enum AutoFillTriggerType {
    /**
     * Indicates that the autofill service was triggered by the autofill component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUTO_REQUEST = 0,

    /**
     * Indicates that the autofill service was triggered by manual user interaction.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MANUAL_REQUEST = 1,

    /**
     * Indicates that the autofill service was triggered by a paste action.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PASTE_REQUEST = 2,
}