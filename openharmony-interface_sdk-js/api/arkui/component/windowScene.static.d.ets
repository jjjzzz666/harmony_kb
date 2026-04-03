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

import { Position } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The WindowSceneAttribute
 *
 * @extends CommonMethod
 * @interface WindowSceneAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface WindowSceneAttribute extends CommonMethod {
  /**
   * Set the attraction deformation effect of WindowScene.
   * 
   * @param { Position | undefined } destination - The position of the
   *     attraction target point in the component coordinate system.
   * @param { double | undefined } fraction - indicates the fraction of WindowScene.
   * @returns { WindowSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  default attractionEffect(destination: Position | undefined, fraction: double | undefined): this;

  /**
   * Set the attribute modifier
   * 
   * @param { AttributeModifier<WindowSceneAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { WindowSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  default attributeModifier(modifier:
    AttributeModifier<WindowSceneAttribute> | AttributeModifier<CommonMethod> | undefined) : this;
}

/**
 * Defines the WindowScene Component.
 *
 * @param { int } persistentId
 * @param { CustomBuilder } [content_] - container
 * @returns { WindowSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
@ComponentBuilder
export declare function WindowScene(
    persistentId: int,
    content_?: CustomBuilder,
): WindowSceneAttribute;