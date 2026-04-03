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
 * @file Defines WithTheme component.
 * @kit ArkUI
 */

import { CustomTheme } from '../../@ohos.arkui.theme';
import { ThemeColorMode, AttributeModifier, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Defines the struct of WithThemeOptions.
 *
 * @interface WithThemeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface WithThemeOptions {
  /**
   * Custom Theme.
   *
   * @type { ?CustomTheme }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  theme?: CustomTheme;

  /**
   * Theme Color Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  colorMode?: ThemeColorMode;
}

/**
 * Defines the WithTheme attribute functions..
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface WithThemeAttribute {
  /**
   * Set the component's source code redirection information. 
   * @param { string } sourceLine - the source code line.
   * @param { string } [moduleName] - module to which the component belongs.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * Defines WithTheme Component
 *
 * @param { WithThemeOptions | undefined } options - options of WithTheme.
 * @param { CustomBuilder } [content_] - the content of the component
 * @returns { WithThemeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function WithTheme(
    options: WithThemeOptions | undefined, 
    content_?: CustomBuilder,
): WithThemeAttribute
