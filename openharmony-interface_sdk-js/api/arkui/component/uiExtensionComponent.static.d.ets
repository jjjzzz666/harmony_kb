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
import Want from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback, BusinessError, RecordData } from '../../@ohos.base';
import { CommonMethod, TerminationInfo } from './common';
import { ComponentContentBase } from '../ComponentContent';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { VoidCallback } from './units';

/**
 * Enumeration of different types of DpiFollowStrategy.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum DpiFollowStrategy {
    /**
     * Followed the host DPI.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    FOLLOW_HOST_DPI = 0,
    /**
     * Followed the UIExtensionAbility.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * Enumeration of different types of WindowModeFollowStrategy.
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare enum WindowModeFollowStrategy {
    /**
     * Followed the host Window Mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    FOLLOW_HOST_WINDOW_MODE = 0,
    /**
     * Followed the UIExtensionAbility.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}
/**
 * This interface is used to set the options for UIExtensionComponentAttribute during construction
 *
 * @interface UIExtensionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface UIExtensionOptions {
    /**
     * Set whether the current capability is used as a Caller.<br/>
     * If set to true, as a Caller, the current token of UIExtensionComponent is set to rootToken.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    isTransferringCaller?: boolean;
    /**
     * Set placeholder.
     * If set placeholder ComponentContentBase, show placeholder node when connection is not established.
     *
     * @type { ?ComponentContentBase }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    placeholder?: ComponentContentBase;
    /**
     * Set Areachange placeholder.
     * If the Areachange placeholder ComponentContentBase is set, the placeholder node is displayed until
     * the UIExtensionComponent size change is complete.
     *
     * @type { ?Record<string, ComponentContentBase> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    areaChangePlaceholder?: Record<string, ComponentContentBase>;
    /**
     * Set UIExtensionComponent Content Dpi Follow Strategy.
     *
     * @type { ?DpiFollowStrategy }
     * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    dpiFollowStrategy?: DpiFollowStrategy;
    /**
     * Set UIExtensionComponent Content Window Mode Follow Strategy.
     * @type { ?WindowModeFollowStrategy }
     * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    windowModeFollowStrategy?: WindowModeFollowStrategy;
}
/**
 * Get Callback from @ohos.base.
 *
 * @typedef { Callback<Record<string, RecordData>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type ReceiveCallback = Callback<Record<string, RecordData>>;
/**
 * This interface is used for send data to the UIExtensionAbility.<br/>
 * It is returned from onRemoteReady callback of UIExtensionComponent<br/>
 * when UIExtensionAbility connects successfully
 *
 * @interface UIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export declare interface UIExtensionProxy {
    /**
     * This function is for sending data to the UIExtensionAbility.
     * AnonyMous Object Rectification
     *
     * @param { Record<string, RecordData> } data
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    send(data: Record<string, RecordData>): void;
    /**
     * This function is for sending data to the UIExtensionAbility and waiting for the result in blocking mode.
     * AnonyMous Object Rectification
     *
     * @param { Record<string, RecordData> } data - Data send to the UIExtensionAbility.
     * @returns { Record<string, RecordData> } data - Data transferred from the UIExtensionAbility.
     * @throws { BusinessError } 100011 - No callback has been registered to respond to this request.
     * @throws { BusinessError } 100012 - Transferring data failed.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    sendSync(data: Record<string, RecordData>): Record<string, RecordData>;
    /**
     * Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.
     * AnonyMous Object Rectification
     *
     * @param { Callback<UIExtensionProxy> } callback - Callback of the listened event.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onAsyncReceiverRegister(callback: Callback<UIExtensionProxy>): void;
    /**
     * Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
     * AnonyMous Object Rectification
     *
     * @param { Callback<UIExtensionProxy> } callback - Callback of the listened event.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onSyncReceiverRegister(callback: Callback<UIExtensionProxy>): void;
    /**
     * Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.
     * AnonyMous Object Rectification
     *
     * @param { Callback<UIExtensionProxy> } [callback] - Callback of the listened event.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    offAsyncReceiverRegister(callback?: Callback<UIExtensionProxy>): void;
    /**
     * Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
     * AnonyMous Object Rectification
     *
     * @param { Callback<UIExtensionProxy> } [callback] - Callback of the listened event.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    offSyncReceiverRegister(callback?: Callback<UIExtensionProxy>): void;
}

/**
 * Define the attribute functions of UIExtensionComponent.
 *
 * @extends CommonMethod
 * @typedef UIExtensionComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @noninterop
 * @since 23 static
 */
export declare interface UIExtensionComponentAttribute extends CommonMethod {
    /**
     * callback called when remote UIExtensionAbility object is ready for receive data
     *
     * @param { Callback<UIExtensionProxy> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onRemoteReady(callback: Callback<UIExtensionProxy> | undefined): this;
    /**
     * AnonyMous Object Rectification
     *
     * @param { ReceiveCallback | undefined  } callback - Called when data received from UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onReceive(callback: ReceiveCallback | undefined): this;
    /**
     * called when some error occurred except disconnected from UIExtensionAbility.
     *
     * @param { ErrorCallback<BusinessError> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    /**
     * Called when the provider of the embedded UI is terminated.
     *
     * @param { Callback<TerminationInfo> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    /**
     * Callback called when the UIExtensionAbility draw the first frame.
     * @param { VoidCallback | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    onDrawReady(callback: VoidCallback | undefined): this;

    /**
     * Set the attribute modifier of UIExtensionComponent Component.
     *
     * @param { AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    attributeModifier(modifier: AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines UIExtensionComponent Component.
 * @param { Want } want - The want
 * @param { UIExtensionOptions } [options] - The options
 * @returns { UIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @systemapi
 * @since 23 static
 */
@ComponentBuilder
export declare function UIExtensionComponent(
    want: Want, options?: UIExtensionOptions
): UIExtensionComponentAttribute
