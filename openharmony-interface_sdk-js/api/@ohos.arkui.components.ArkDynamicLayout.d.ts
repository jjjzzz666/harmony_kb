/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { LayoutAlgorithm } from './arkui/LayoutAlgorithm';
/**
 * Defines the DynamicLayout Component.
 *
 * @interface DynamicLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export interface DynamicLayoutInterface {
    /**
     * Sets the layout algorithm of DynamicLayout component.
     *
     * @param { LayoutAlgorithm } algorithm
     * @returns { DynamicLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    (algorithm: LayoutAlgorithm): DynamicLayoutAttribute;
}
/**
 * Defines the DynamicLayout attribute functions.
 *
 * @extends CommonMethod<DynamicLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export declare class DynamicLayoutAttribute extends CommonMethod<DynamicLayoutAttribute> {}

/**
 * Defines DynamicLayout Component.
 *
 * @type { DynamicLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export declare const DynamicLayout: DynamicLayoutInterface;
/**
 * Defines DynamicLayout Component instance.
 * @type { DynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export declare const DynamicLayoutInstance: DynamicLayoutAttribute;
