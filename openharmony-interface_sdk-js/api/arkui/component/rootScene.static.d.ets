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

import { AttributeModifier, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Defines the session of RootScene.
 *
 * @interface RootSceneSession
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface RootSceneSession {
}

/**
 * Defines the attribute functions of RootScene.
 *
 * @extends CommonMethod
 * @typedef { RootSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface RootSceneAttribute extends CommonMethod {
  /**
   * Set the attribute modifier
   * 
   * @param { AttributeModifier<RootSceneAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { RootSceneAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  default attributeModifier(modifier:
    AttributeModifier<RootSceneAttribute> | AttributeModifier<CommonMethod> | undefined) : this;
}

/**
 * Defines the RootScene Component.
 *
 * @param { RootSceneSession } session
 * @param { CustomBuilder } [content_] - container
 * @returns { RootSceneAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
@ComponentBuilder
export declare function RootScene(
    session: RootSceneSession,
    content_?: CustomBuilder,
): RootSceneAttribute;