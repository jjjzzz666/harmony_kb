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
 * Defines the attribute functions of Screen.
 *
 * @extends CommonMethod
 * @typedef ScreenAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
export declare interface ScreenAttribute extends CommonMethod {

   /**
    * Set the attribute modifier.
    *
    * @param { AttributeModifier<ScreenAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
    * @returns { ScreenAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @since 23 static
    */
   default attributeModifier(
      modifier: AttributeModifier<ScreenAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Screen Component.
 *
 * @param { long } [screenId] - screenId
 * @param { CustomBuilder } [content_] - container
 * @returns { ScreenAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Screen(
   screenId: long,
   content_?: CustomBuilder,
): ScreenAttribute