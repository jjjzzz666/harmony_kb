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
import { CommonMethod, ContentModifier, CommonConfiguration } from './common';
import { ResourceColor } from "./units";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Load style of progress bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LoadingProgressStyle {
    /**
     * Default style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Default,
    /**
     * Announcement style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Circular,
    /**
     * The style of the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Orbital
}
/**
 * Defines the LoadingProgress component attributes.
 *
 * @extends CommonMethod
 * @interface LoadingProgressAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface LoadingProgressAttribute extends CommonMethod {
    /**
     * Load the color of the progress bar.
     *
     * @param { ResourceColor | undefined } value
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default color(value: ResourceColor | undefined): this;
    /**
     * Whether to display the LoadingProgress content.
     *
     * @param { boolean | undefined } value - indicates the state of LoadingProgress content
     * @returns { LoadingProgressAttribute } the attribute of the LoadingProgress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default enableLoading(value: boolean | undefined): this;
    /**
     * Set the content modifier of loadingProgress.
     *
     * @param { ContentModifier<LoadingProgressConfiguration> | undefined } modifier - 
     *     The contentModifier of LoadingProgress.
     * @returns { LoadingProgressAttribute} the attribute of the loading progress
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<LoadingProgressConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<LoadingProgressAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { LoadingProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<LoadingProgressAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * LoadingProgressConfiguration used by LoadingProgress contentModifier
 *
 * @extends CommonConfiguration<LoadingProgressConfiguration>
 * @interface LoadingProgressConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LoadingProgressConfiguration extends CommonConfiguration<LoadingProgressConfiguration> {
    /**
     * Whether to enable the LoadingProgress content.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableLoading: boolean;
}
/**
 * Defines the LoadingProgress component.
 *
 * @returns { LoadingProgressAttribute } The attribute of the LoadingProgress.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function LoadingProgress(
): LoadingProgressAttribute;
