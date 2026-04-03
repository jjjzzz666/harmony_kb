'use static'
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

import { AttributeModifier } from '@ohos.arkui.component';
import { NavDestinationAttribute } from '@ohos.arkui.component';

/**
 * Defines NavDestination Modifier
 *
 * @implements { NavDestinationAttribute, AttributeModifier<NavDestinationAttribute> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class NavDestinationModifier implements NavDestinationAttribute, AttributeModifier<NavDestinationAttribute> {
  /**
   * Defines the normal update attribute function.
   * 
   * @param { NavDestinationAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  applyNormalAttribute(instance: NavDestinationAttribute): void;
}
