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
 * @file Defines toolbar attributes.
 * @kit ArkUI
 */
import { ComponentBuilder, CustomBuilder } from './builder';
/**
 * Declare the placement of the toolbar item.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare enum ToolBarItemPlacement {
    /**
     * Place toolbar item at the leading of top bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TOP_BAR_LEADING = 0,
    /**
     * Place toolbar item at the trailing of top bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TOP_BAR_TRAILING = 1
}
/**
 * ToolBarItem constructor options.
 *
 * @interface ToolBarItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
interface ToolBarItemOptions {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?ToolBarItemPlacement }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    placement?: ToolBarItemPlacement;
}
/**
 * Defines the ToolBarItem component attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare class ToolBarItemAttribute {
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
 * Defines ToolBarItem Component.
 *
 * @param { ToolBarItemOptions } options - column options
 * @param { CustomBuilder } [content_] - container
 * @returns { ToolBarItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function ToolBarItem(
    options?: ToolBarItemOptions,
    content_?: CustomBuilder,
): ToolBarItemAttribute
