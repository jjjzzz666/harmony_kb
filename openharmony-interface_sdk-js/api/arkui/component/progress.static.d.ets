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
import { ResourceColor, Length, PX, VP, LPX, Font, ResourceStr } from "./units";
import { Resource } from '../../global/resource';
import { CommonMethod, ContentModifier, CommonConfiguration } from './common';
import { LinearGradient } from "./dataPanel";
import { LengthMetrics } from '../Graphics';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the option of Progress.
 *
 * @interface ProgressOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ProgressOptions {
    /**
     * Sets the value of Progress.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: double;
    /**
     * Sets the total of Progress.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    total?: double;
    /**
     * Sets the type of Progress.
     *
     * @type { ?ProgressType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    type?: ProgressType;
}
/**
 * Type of progress bar
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ProgressType {
    /**
     * Linear progress bar style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Linear = 0,
    /**
     * Ring progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Ring = 1,
    /**
     * Eclipse progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Eclipse = 2,
    /**
     * ScaleRing progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ScaleRing = 3,
    /**
     * Capsule progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Capsule = 4
}
/**
 * Current status of progress bar.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ProgressStatus {
    /**
     * Loading status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LOADING,
    /**
     * Processing status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    PROGRESSING
}
/**
 * Defines style options for progress component.
 *
 * @extends CommonProgressStyleOptions
 * @interface ProgressStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ProgressStyleOptions extends CommonProgressStyleOptions {
    /**
     * Defines the strokeWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * Defines the scaleCount property.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scaleCount?: int;
    /**
     * Defines the scaleWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scaleWidth?: Length;
}
/**
 * Progress common style options.
 *
 * @interface CommonProgressStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CommonProgressStyleOptions {
    /**
     * Enable smooth effect.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableSmoothEffect?: boolean;
}
/**
 * Defines the enable scan effect.
 *
 * @interface ScanEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ScanEffectOptions {
    /**
     * Enable scan effect.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    enableScanEffect?: boolean;
}
/**
 * Defines the Eclipse style Options.
 *
 * @extends CommonProgressStyleOptions
 * @interface EclipseStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface EclipseStyleOptions extends CommonProgressStyleOptions {
}
/**
 * Defines the ScaleRing style Options.
 *
 * @extends CommonProgressStyleOptions
 * @interface ScaleRingStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ScaleRingStyleOptions extends CommonProgressStyleOptions {
    /**
     * Defines the strokeWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * Defines the scaleWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scaleWidth?: Length;
    /**
     * Defines the scaleCount property.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scaleCount?: int;
}
/**
 * Defines the ring style Options.
 *
 * @extends ScanEffectOptions, CommonProgressStyleOptions
 * @interface RingStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface RingStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * Defines the strokeWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * Enables progress shadow.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    shadow?: boolean;
    /**
     * The status of progress, default is PROGRESSING. Set to LOADING status will trigger the loading animation.
     *
     * @type { ?ProgressStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    status?: ProgressStatus;
}
/**
 * Defines the linear style Options.
 *
 * @extends ScanEffectOptions, CommonProgressStyleOptions
 * @interface LinearStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LinearStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * Defines the strokeWidth property.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * Defines the stroke radius property.
     *
     * @type { ?(PX | VP | LPX | Resource) }
     * @default strokeWidth / 2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    strokeRadius?: PX | VP | LPX | Resource;
}
/**
 * Defines the capsule style Options.
 *
 * @extends ScanEffectOptions, CommonProgressStyleOptions
 * @interface CapsuleStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface CapsuleStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * Set the inner border color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderColor?: ResourceColor;
    /**
     * Set the border width.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderWidth?: Length;
    /**
     * Set the text content.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    content?: string;
    /**
     * Set the text style.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    font?: Font;
    /**
     * Set the text fontColor.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * show default percentage.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    showDefaultPercentage?: boolean;
    /**
     * Set border rounded corner radius.
     *
     * @type { ?LengthMetrics }
     * @default height / 2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderRadius?: LengthMetrics;
}
/**
 * Type of progress bar
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ProgressStyle {
    /**
     * Linear progress bar style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Linear,
    /**
     * Ring progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Ring,
    /**
     * Eclipse progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Eclipse,
    /**
     * ScaleRing progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ScaleRing,
    /**
     * Capsule progress bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Capsule
}
/**
 * Defines the Progress component attributes.
 *
 * @extends CommonMethod
 * @interface ProgressAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface ProgressAttribute extends CommonMethod {
    /**
     * Called when the current progress value is set.
     *
     * @param { double | undefined } value
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default value(value: double | undefined): this;
    /**
     * Called when the progress bar foreground is set.
     *
     * @param { ResourceColor | LinearGradient | undefined } value - indicates the color of the progress.
     * @returns { ProgressAttribute } the attribute of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default color(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when the style of progress bar is set.
     *
     * @param { LinearStyleOptions | RingStyleOptions | CapsuleStyleOptions | ProgressStyleOptions | undefined } value - 
     *     indicates the style of the progress.
     * @returns { ProgressAttribute } the attribute of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default style(value: LinearStyleOptions | RingStyleOptions | CapsuleStyleOptions | ProgressStyleOptions | undefined): this;
    /**
     * Sets if mark to privacy sensitive.
     *
     * @param { boolean | undefined } isPrivacySensitiveMode - indicates if mark to privacy sensitive.
     * @returns { ProgressAttribute } the attribute of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default privacySensitive(isPrivacySensitiveMode: boolean | undefined): this;
    /**
     * Set the contentModifier of progress.
     *
     * @param { ContentModifier<ProgressConfiguration> | undefined } modifier - The contentModifier of progress.
     * @returns { ProgressAttribute } the attribute of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<ProgressConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ProgressAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ProgressAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * ProgressConfiguration used by progress contentModifier
 *
 * @extends CommonConfiguration<ProgressConfiguration>
 * @interface ProgressConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ProgressConfiguration extends CommonConfiguration<ProgressConfiguration> {
    /**
     * The value of Progress.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: double;
    /**
     * The total of Progress.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    total: double;
}
/**
 * Defines the Progress component.
 *
 * @param { ProgressOptions } options - progress options.
 * @returns { ProgressAttribute } The attribute of the Progress.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Progress(
    options: ProgressOptions
): ProgressAttribute;
