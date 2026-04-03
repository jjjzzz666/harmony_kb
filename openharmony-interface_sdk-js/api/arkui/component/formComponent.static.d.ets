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

import { CommonMethod, Callback } from './common';
import Want from '../../@ohos.app.ability.Want';
import { Visibility } from './enums';
import { VoidCallback } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";

/**
 * Defines the FormDimension enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum FormDimension {
    /**
     * 1 x 2 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    Dimension_1_2 = 0,

    /**
     * 2 x 2 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    Dimension_2_2 = 1,

    /**
     * 2 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    Dimension_2_4 = 2,

    /**
     * 4 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    Dimension_4_4 = 3,

    /**
     * 1 x 1 cards
     * The default value is 6
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    DIMENSION_1_1 = 6,

    /**
     * 6 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    DIMENSION_6_4 = 7,

    /**
     * 2 x 3 cards used for wearable devices
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    DIMENSION_2_3 = 8,

    /**
     * 3 x 3 cards used for wearable devices
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    DIMENSION_3_3 = 9
}

/**
 * Defines the FormRenderingMode enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum FormRenderingMode {
    /**
     *  Full color mode, this is default value
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    FULL_COLOR = 0,

    /**
     *  single color mode
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    SINGLE_COLOR = 1
}
/**
 * Defines the FormShape enum.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum FormShape {
    /**
     * The rect shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    RECT = 1,

    /**
     * The circle shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    CIRCLE = 2
}

/**
 * Form color mode.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FormColorMode {  
  /**
   * Automatic mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_AUTO = -1,

  /**
   * Dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_DARK = 0,

  /**
   * Light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  MODE_LIGHT = 1
}

/**
 * Defines the FormInfo.
 *
 * @interface FormInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface FormInfo {
    /**
     * The id the form.
     *
     * @type { long | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    id: long | string;

    /**
     * The name of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    name: string;

    /**
     * The bundle of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    bundle: string;

    /**
     * The ability of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    ability: string;

    /**
     * The module of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    module: string;

    /**
     * The dimension of the form.
     *
     * @type { ?FormDimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    dimension?: FormDimension;

    /**
     * Whether the form is temporary.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    temporary?: boolean;

    /**
     * The want of the form.
     *
     * @type { ?Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    want?: Want;

    /**
     * The renderingMode of the form.
     *
     * @type { ?FormRenderingMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    renderingMode?: FormRenderingMode;

    /**
     * The shape of the form.
     *
     * @type { ?FormShape }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    shape?: FormShape;

    /**
     * Exempt app lock
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    exemptAppLock?: boolean;
}
/**
 * Defines the FormCallbackInfo.
 *
 * @interface FormCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface FormCallbackInfo {
    /**
     * The id of the form.
     *
     * @type { long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    id: long;

    /**
     * The string id of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    idString: string;

    /**
     * Indicates whether the form is locked.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    isLocked: boolean;
}
/**
 * Defines error information for card loading.
 *
 * @typedef ErrorInformation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface ErrorInformation {
    /**
     * Error code.
     * Anonymous Object Rectification
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    errcode: int;

    /**
     * Error information.
     * Anonymous Object Rectification
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    msg: string;
}
/**
 * Defines the RouterCallbackInfo.
 *
 * @interface RouterCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface RouterCallbackInfo {
    /**
     * The action of the router event.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    action: string;

    /**
     * The bundle name of the router event.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    bundleName: string;
	
	/**
     * The module name of the router event.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    moduleName: string;
	
	/**
     * The ability name of the router event.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    abilityName: string;
	
	/**
     * The params of the router event.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    params: string;
}
/**
 * Define the attribute functions of FormComponent.
 *
 * @extends CommonMethod
 * @interface  FormComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
export declare interface FormComponentAttribute extends CommonMethod {
    /**
     * Card module name.
     *
     * @param { string | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default moduleName(value: string | undefined): this;

    /**
     * Set the card size.
     *
     * @param { FormDimension | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default dimension(value: FormDimension | undefined): this;

    /**
     * Indicates whether to allow card update.
     *
     * @param { boolean | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default allowUpdate(value: boolean | undefined): this;

    /**
     * Whether the card is visible.
     *
     * @param { Visibility | undefined } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default visibility(value: Visibility | undefined): this;

    /**
     * Set the color mode of the card.
     *
     * @param { FormColorMode | undefined } value - The form color mode to set.
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default colorMode(value: FormColorMode | undefined): this;

    /**
     * This function is triggered after card information is obtained.
     * For details about the form information, see the definition of the original capability subsystem.
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onAcquired(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * Card loading error.
     *
     * @param { Callback<ErrorInformation> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onError(callback: Callback<ErrorInformation> | undefined): this;

    /**
     * Card to be redirected.
     *
     * @param { Callback<RouterCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onRouter(callback: Callback<RouterCallbackInfo> | undefined): this;

    /**
     * Uninstall Card.
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onUninstall(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * Card to be loaded.
     *
     * @param { VoidCallback | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onLoad(callback: VoidCallback | undefined): this;

    /**
     * Card has been updated.
     *
     * @param { Callback<FormCallbackInfo> | undefined } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default onUpdate(callback: Callback<FormCallbackInfo> | undefined): this;

    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines FormComponent.
 * @param { FormInfo } formInfo - The formInfo
 * @param { CustomBuilder } [content_] - container
 * @returns { FormComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function FormComponent(
    formInfo: FormInfo, 
    content_?: CustomBuilder,
): FormComponentAttribute
