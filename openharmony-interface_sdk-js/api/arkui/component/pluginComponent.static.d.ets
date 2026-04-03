'use static';
/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { VoidCallback } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { RecordData } from '../../@ohos.base';

/**
 * PluginComponentTemplate
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface PluginComponentTemplate {
    /**
     * Defines the plugin source name.
     *
     * @type { string | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    source: string | undefined;
    /**
     * Defines the bundle name of the Template.
     *
     * @type { string | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    bundleName: string | undefined;
}

/**
 * Define options used to construct a plugin component.
 * AnonyMous Object Rectification
 *
 * @interface PluginComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface PluginComponentOptions {
    /**
     * Plugin component template.
     * AnonyMous Object Rectification
     * @type { PluginComponentTemplate }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    template: PluginComponentTemplate;
    /**
     * Plugin component data.
     * AnonyMous Object Rectification
     * @type { RecordData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    data: RecordData;
}
/**
 * Data provided when an error occurs.
 * AnonyMous Object Rectification
 *
 * @interface PluginErrorData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface PluginErrorData {
    /**
     * Error code.
     * AnonyMous Object Rectification
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    errcode: int;
    /**
     * Error message.
     * AnonyMous Object Rectification
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    msg: string;
}
/**
 * Callback invoked when an error occurs.
 * AnonyMous Object Rectification
 *
 * @typedef { function } PluginErrorCallback
 * @param { PluginErrorData } info - Plugin error data
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * Defines the plugin component attribute functions.
 *
 * @extends CommonMethod
 * @typedef PluginComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @noninterop
 * @since 23 static
 */
export declare interface PluginComponentAttribute extends CommonMethod {
    /**
     * PluginComponent onComplete callback
     * AnonyMous Object Rectification
     *
     * @param { VoidCallback | undefined } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onComplete(callback: VoidCallback | undefined): this;
    /**
     * PluginComponent onError callback
     * AnonyMous Object Rectification
     *
     * @param { PluginErrorCallback | undefined } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onError(callback: PluginErrorCallback | undefined): this;
    /**
     * Set the attribute modifier of PluginComponent Component.
     *
     * @param { AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines PluginComponent Component.
 * @param { PluginComponentOptions } options - The options
 * @returns { PluginComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @systemapi
 * @since 23 static
 */
@ComponentBuilder
export declare function PluginComponent(
    options: PluginComponentOptions
): PluginComponentAttribute