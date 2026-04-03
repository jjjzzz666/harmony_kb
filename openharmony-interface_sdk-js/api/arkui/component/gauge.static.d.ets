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
import { CommonMethod, CommonConfiguration, ContentModifier, MultiShadowOptions } from './common';
import { CustomBuilder } from './builder';
import { ResourceStr, Dimension, ResourceColor, Length } from "./units";
import { LinearGradient } from "./dataPanel";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines Gauge constructor options.
 *
 * @interface GaugeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface GaugeOptions {
    /**
     * Set current data value.
     * Anonymous Object Rectification.
     *
     * @type { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: double | undefined;
    /**
     * Set current segment minimum value.
     * Anonymous Object Rectification.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    min?: double;
    /**
     * Set current segment maximum value.
     * Anonymous Object Rectification.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    max?: double;
}
/**
 * Defines the options of gauge track shadow.
 *
 * @extends MultiShadowOptions
 * @interface GaugeShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GaugeShadowOptions extends MultiShadowOptions {}
/**
 * Defines the options of gauge indicator.
 *
 * @interface GaugeIndicatorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GaugeIndicatorOptions {
    /**
     * Current indicator icon path.
     *
     * @type { ?ResourceStr } option type - the current option type.
     * @default system style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Current indicator space.
     *
     * @type { ?Dimension } indicator space - the current indicator space.
     * @default 8
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: Dimension;
}
/**
 * GaugeConfiguration used by content modifier
 *
 * @extends CommonConfiguration<GaugeConfiguration>
 * @interface GaugeConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GaugeConfiguration extends CommonConfiguration<GaugeConfiguration> {
    /**
     * Current data value.
     *
     * @type { double } data value - the current data value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: double;
    /**
     * Current Segment Minimum Value.
     *
     * @type { double } segment minimum value - the current segment minimum value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    min: double;
    /**
     * Current Segment Maximum Value.
     *
     * @type { double } segment maximum value - the current segment maximum value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    max: double;
}
/**
 * Defines the Gauge component attributes.
 *
 * @extends CommonMethod
 * @interface GaugeAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface GaugeAttribute extends CommonMethod {
    /**
     * Sets the value for the current profile.
     *
     * @param { double | undefined } value
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default value(value: double | undefined): this;
    /**
     * Set the start angle. Clock 0 is 0 degrees and clockwise is positive.
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default startAngle(angle: double | undefined): this;
    /**
     * Sets the end angle position. Clock 0 is 0 degrees and clockwise is positive.
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default endAngle(angle: double | undefined): this;
    /**
     * Set the color of the chart. You can set the solid color and segmented gradient color.
     *
     * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, double] | undefined> } colors - 
     *     section colors of gauge drawing.
     * @returns { GaugeAttribute } returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default colors(colors: ResourceColor | LinearGradient | Array<[
        ResourceColor | LinearGradient,
        double
    ]> | undefined): this;
    /**
     * Sets the thickness of the ring chart.
     *
     * @param { Length | undefined } length
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default strokeWidth(length: Length | undefined): this;
    /**
     * Sets description content of the ring chart.
     *
     * @param { CustomBuilder | undefined | null } value - description content builder of the gauge drawing.
     * @returns { GaugeAttribute } - returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default description(value: CustomBuilder | undefined | null): this;
    /**
     * Sets track shadow of the ring chart.
     *
     * @param { GaugeShadowOptions | undefined | null } value - track shadow options of the gauge drawing.
     * @returns { GaugeAttribute } - returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default trackShadow(value: GaugeShadowOptions | undefined | null): this;
    /**
     * Sets indicator options of the ring chart.
     *
     * @param { GaugeIndicatorOptions | undefined | null } value - indicator options of the gauge drawing.
     * @returns { GaugeAttribute } - returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default indicator(value: GaugeIndicatorOptions | undefined | null): this;
    /**
     * Sets if mark to privacy sensitive.
     *
     * @param { boolean | undefined } isPrivacySensitiveMode - indicates if mark to  privacy sensitive .
     * @returns { GaugeAttribute } - returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default privacySensitive(isPrivacySensitiveMode: boolean | undefined): this;
    /**
     * Set the content modifier of gauge.
     *
     * @param { ContentModifier<GaugeConfiguration> | undefined } modifier - The content modifier of gauge.
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<GaugeConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the Gauge component.
 *
 * @param { GaugeOptions } options - gauge options.
 * @param { CustomBuilder } [content_]
 * @returns { GaugeAttribute } The attribute of the Gauge.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Gauge(
    options: GaugeOptions, 
    content_?: CustomBuilder
): GaugeAttribute;
