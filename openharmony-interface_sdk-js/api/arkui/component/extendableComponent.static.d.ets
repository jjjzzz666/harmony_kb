'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { Builder } from './builder';
import { Theme } from '@ohos.arkui.theme';
import { UIContext } from '@ohos.arkui.UIContext';
import { NavDestinationInfo, NavigationInfo, RouterPageInfo } from './common';
import { IVariableOwner } from '../stateManagement/decorator';
import promptAction from '@ohos.promptAction'

/**
 * Defining interface of LifeCycle for custom component and custom dialog
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LifeCycle {
    /**
     * aboutToAppear Method.
     *
     * The aboutToAppear function is executed after a new instance of the custom component is created,
     * before its build() function is executed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default aboutToAppear(): void;

    /**
     * aboutToDisappear Method.
     *
     * The aboutToDisappear function executes before a custom component is destroyed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default aboutToDisappear(): void;

    /**
     * The callback method after the custom component is built.
     *
     * Triggered when the custom component has been built.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onDidBuild(): void;

    /**
     * Customize the build process of the custom component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    @Builder
    build(): void
}

/**
 * Definition of extendable component, which is base class of custom component and custom dialog.
 *
 * @implements { LifeCycle, IVariableOwner }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class ExtendableComponent implements LifeCycle, IVariableOwner {
    /**
     * onWillApplyTheme function is a custom hook to get active theme object from the context.
     *
     * @param { Theme } theme - Custom theme init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onWillApplyTheme(theme: Theme): void;

    /**
     * Get current UIContext.
     *
     * @returns { UIContext } The UIContext that the custom component belongs to.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getUIContext(): UIContext

    /**
     * Get uniqueId of the custom component.
     *
     * @returns { int } - The uniqueId of the custom component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getUniqueId(): int
    
    /**
    * Queries the navigation destination information.
    *
    * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    queryNavDestinationInfo(): NavDestinationInfo | undefined;

    /**
     * Queries the navigation destination information.
     *
     * @param { boolean | undefined } isInner
     * @returns { NavDestinationInfo | undefined } - The navigation destination information,
     *     or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    queryNavDestinationInfo(isInner: boolean | undefined): NavDestinationInfo | undefined;

    /**
    * Query the navigation information of the current custom component.
    *
    * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    queryNavigationInfo(): NavigationInfo | undefined;

    /**
    * Query the router page information of the current custom component.
    *
    * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    queryRouterPageInfo(): RouterPageInfo | undefined;

    /**
     * The dialog controller of the custom component.
     *
     * @returns { promptAction.DialogController | undefined } The controller of dialog,
     * or undefined if the custom component does not display in the dialog.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    getDialogController(): promptAction.DialogController | undefined;
}