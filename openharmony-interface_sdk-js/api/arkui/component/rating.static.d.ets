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
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, Bindable } from './common';
import { ResourceStr } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Define options used to construct a rating.
 *
 * @interface RatingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RatingOptions {
    /**
     * Rating option.
     *
     * @type { double | undefined | Bindable<double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rating: double | undefined | Bindable<double>;
    /**
     * Indicator option.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    indicator?: boolean;
}
/**
 * Define star style options.
 *
 * @interface StarStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StarStyleOptions {
    /**
     * Background URI option.
     * Anonymous Object Rectification.
     *
     * @type { ResourceStr | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    backgroundUri: ResourceStr | undefined;
    /**
     * Foreground URI option.
     * Anonymous Object Rectification.
     *
     * @type { ResourceStr | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    foregroundUri: ResourceStr | undefined;
    /**
     * Secondary URI option.
     * Anonymous Object Rectification.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    secondaryUri?: ResourceStr;
}
/**
 * RatingConfiguration used by rating content modifier.
 *
 * @extends CommonConfiguration<RatingConfiguration>
 * @interface RatingConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RatingConfiguration extends CommonConfiguration<RatingConfiguration> {
    /**
     * Current number of Rating.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    rating: double;
    /**
     * Indicates whether Rating is used as an indicator.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    indicator: boolean;
    /**
     * Total stars of Rating.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    stars: int;
    /**
     * The step size of the Rating.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    stepSize: double;
    /**
     * Trigger Rating select change.
     *
     * @type { Callback<double> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    triggerChange: Callback<double>;
}
/**
 * Callback of the star rating of the operation scoring bar changes event.
 *
 * @typedef {function} OnRatingChangeCallback
 * @param {double} rating - The rating of the rating bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnRatingChangeCallback = (rating: double) => void;
/**
 * Defines the Rating component attributes.
 *
 * @extends CommonMethod
 * @interface RatingAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RatingAttribute extends CommonMethod {
    /**
     * Called when the total number of stars is set.
     *
     * @param { int | undefined } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stars(value: int | undefined): this;
    /**
     * Called when the step size of the operation rating.
     *
     * @param { double | undefined } value
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default stepSize(value: double | undefined): this;
    /**
     * Called when a picture is set.
     * Anonymous Object Rectification.
     *
     * @param { StarStyleOptions | undefined } options - star style options
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default starStyle(options: StarStyleOptions | undefined): this;
    /**
     * Called when the star rating of the operation scoring bar changes.
     *
     * @param { OnRatingChangeCallback | undefined } callback
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onChange(callback: OnRatingChangeCallback | undefined): this;
    /**
     * Set the content modifier of rating.
     *
     * @param { ContentModifier<RatingConfiguration> | undefined } modifier - The content modifier of rating.
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<RatingConfiguration> | undefined): this;
    /**
     * Set the attribute modifier of rating.
     *
     * @param { AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     The attribute modifier of rating.
     * @returns { RatingAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RatingAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Rating Component.
 *
 * @param { RatingOptions } [options] - the options of Rating.
 * @param { CustomBuilder } [content_] - container
 * @returns { RatingAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Rating(
    options?: RatingOptions,
    content_?: CustomBuilder,
): RatingAttribute
