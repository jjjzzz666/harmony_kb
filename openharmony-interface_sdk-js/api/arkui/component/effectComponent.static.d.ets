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
 * @kit ArkUI
 */

import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { CustomBuilder } from '@ohos.arkui.component';

/**
 * Effect layer enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectLayer {
  /**
   * No layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  NONE = 0,

  /**
   * Charge motion layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  CHARGE_MOTION = 1,

  /**
   * Charge text layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  CHARGE_TEXT = 2
}

/**
 * Defines the Effect Component constructor options.
 *
 * @interface EffectComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EffectComponentOptions {

  /** Use this to determine the component layer 1evel. Default value is none.
   *
   * @type { ?EffectLayer }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  effectLayer?: EffectLayer;
}

/**
 * Define the EffectComponentAttribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface EffectComponentAttribute extends CommonMethod {
    /**
     * Use snapshot when Effect Component have no visual effect.
     *
     * @param { boolean | undefined } enable - <br>true indicates using the snapshot method,
     *     false indicates not using the snapshot method.
     *     undefined means the default value false.
     * @returns { EffectComponentAttribute }
     * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    alwaysSnapshot(enable: boolean | undefined): this;
    /**
     * Set the attribute modifier for EffectComponent.
     *
     * @param { AttributeModifier<EffectComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { EffectComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<EffectComponentAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines EffectComponent Component
 *
 * @param { EffectComponentOptions } [options] - The options to create an EffectComponent.
 * @param { CustomBuilder } [content_] - Subcomponents of EffectComponent
 * @returns { EffectComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function EffectComponent(
    options?: EffectComponentOptions,
    content_?: CustomBuilder,
): EffectComponentAttribute;
