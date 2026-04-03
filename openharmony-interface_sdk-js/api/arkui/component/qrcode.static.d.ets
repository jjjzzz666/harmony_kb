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
import { CommonMethod } from './common';
import { ResourceColor, ResourceStr } from "./units";
import { Resource } from '../../global/resource';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the QRCode component attributes.
 *
 * @extends CommonMethod
 * @interface QRCodeAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface QRCodeAttribute extends CommonMethod {
    /**
     * Called when the QR code color is set.
     *
     * @param { ResourceColor | undefined } value
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * Called when setting the QR code background color.
     *
     * @param { ResourceColor | undefined } value
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Set the opacity of the QR code content color.
     * @param { double | Resource | undefined } value - indicates the opacity of the QR code content color. The value is between 0 and 1, with a default value of 1.
     * @returns { QRCodeAttribute } the attribute of the QR code
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentOpacity(value: double | Resource | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<QRCodeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { QRCodeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<QRCodeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the QRCode component.
 *
 * @param { ResourceStr } value - qrcode string.
 * @returns { QRCodeAttribute } The attribute of the QRCode.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function QRCode(
    value: ResourceStr
): QRCodeAttribute;
