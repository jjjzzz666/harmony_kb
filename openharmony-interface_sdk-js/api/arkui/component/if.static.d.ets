'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

/**
 * The IfAttribute.
 *
 * @interface IfAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface IfAttribute {
    /**
     * Defines 'ElseIf' branch.
     *
     * @param { boolean } condition - condition of the branch.
     * @param { CustomBuilder } content_ - code for the branch
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    ElseIf(
        condition: boolean,
        content_: CustomBuilder
    ): this;

    /**
     * Defines 'Else' branch.
     *
     * @param { CustomBuilder } content_ - code for the branch
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    Else(
        content_: CustomBuilder
    ): void;

    /**
     * Set the component's source code redirection information. 
     * @param { string } sourceLine - the source code line.
     * @param { string } [moduleName] - module to which the component belongs.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 staticonly
     */
    debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * Defines If Component.
 *
 * @param { boolean } condition - condition of the branch.
 * @param { CustomBuilder } content_ - code for the branch
 * @returns { IfAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@ComponentBuilder
export declare function If(
    condition: boolean,
    content_: CustomBuilder
): IfAttribute;