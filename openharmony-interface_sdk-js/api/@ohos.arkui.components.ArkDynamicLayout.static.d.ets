'use static'
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

import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';
import { LayoutAlgorithm } from './arkui/LayoutAlgorithm';

/**
 * The DynamicLayoutAttribute
 *
 * @extends CommonMethod
 * @interface DynamicLayoutAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
export declare interface DynamicLayoutAttribute extends CommonMethod {
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<DynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default attributeModifier(
      modifier: AttributeModifier<DynamicLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines DynamicLayout Component.
 *
 * @param { LayoutAlgorithm } algorithm
 * @param { CustomBuilder } content_
 * @returns { DynamicLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function DynamicLayout (
    algorithm: LayoutAlgorithm, 
    content_: CustomBuilder,
): DynamicLayoutAttribute;
