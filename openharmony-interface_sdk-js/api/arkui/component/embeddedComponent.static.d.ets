'use static';
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
 * @file
 * @kit ArkUI
 */

import Want from '../../@ohos.app.ability.Want'
import { ComponentBuilder, CustomBuilder } from './builder';
import { Callback, ErrorCallback ,BusinessError} from '../../@ohos.base'
import { AttributeModifier, CommonMethod, TerminationInfo } from './common'
import { EmbeddedType } from './enums'

/**
 * Define the attribute functions of EmbeddedComponent.
 *
 * @extends CommonMethod
 * @typedef EmbeddedComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @noninterop
 * @since 23 static
 */
export declare interface EmbeddedComponentAttribute extends CommonMethod {
  /**
   * Called when the provider of the embedded UI is terminated.
   *
   * @param { Callback<TerminationInfo> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined): this;
  
  /**
   * Called when some error occurred.
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined): this;

  /**
   * Set attributeModifier.
   *
   * @param { AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

}

/**
 * Defines EmbeddedComponent Component.
 *
 * @param { Want } loader - indicates initialization parameter.
 * @param { EmbeddedType } [type] - indicates type of the EmbeddedComponent.
 * @returns { EmbeddedComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @systemapi
 * @since 23 static
 */
@ComponentBuilder
export declare function EmbeddedComponent(
    loader: Want, type?: EmbeddedType
): EmbeddedComponentAttribute
