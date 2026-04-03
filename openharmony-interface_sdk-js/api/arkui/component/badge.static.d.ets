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
import { ResourceColor, Length, Position, Resource, ResourceStr, LengthMetrics } from "./units";
import { FontWeight } from "./enums";
import { CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the badge position property.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum BadgePosition {
    /**
     * The badge is displayed in the upper right corner of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RightTop,
    /**
     * The badge is vertically centered on the right of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Right,
    /**
     * The badge is vertically centered on the left of the parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Left
}
/**
 * BadgeStyle object
 *
 * @interface BadgeStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BadgeStyle {
    /**
     * Font color.
     *
     * @type { ?ResourceColor }
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * Text size.
     *
     * @type { ?(double | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontSize?: double | ResourceStr;
    /**
     * Size of a badge.
     *
     * @type { ?(double | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    badgeSize?: double | ResourceStr;
    /**
     * Badge color.
     *
     * @type { ?ResourceColor }
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    badgeColor?: ResourceColor;
    /**
     * Border color of the background.
     *
     * @type { ?ResourceColor }
     * @default Color.Red
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderColor?: ResourceColor;
    /**
     * Border width of the background.
     * This parameter cannot be set in percentage.
     * Unit: vp
     *
     * @type { ?Length }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    borderWidth?: Length;
    /**
     * Define the font weight of the badge.
     *
     * @type { ?(int | FontWeight | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fontWeight?: int | FontWeight | ResourceStr;
    /**
     * Outer border color of the background.
     *
     * @type { ?ResourceColor }
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    outerBorderColor?: ResourceColor;

    /**
     * Outer border width of the background.
     *
     * @type { ?LengthMetrics }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    outerBorderWidth?: LengthMetrics;

    /**
     * Enable auto-avoidance for text in badge.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    enableAutoAvoidance?: boolean;
}
/**
 * Provides basic parameters for creating a badge.
 *
 * @interface BadgeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BadgeParam {
    /**
     * Position to display the badge relative to the parent component.
     *
     * <p><strong>NOTE</strong>:
     * <br>With the Position type, percentage values are not supported.
     * <br>If an invalid value is set, the default value (0,0),
     * which indicates the upper left corner of the component, will be used.
     * <br>With the BadgePosition type, the position is mirrored based on the Direction property.
     * </p>
     *
     * @type { ?(BadgePosition | Position) }
     * @default BadgePosition.RightTop
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position?: BadgePosition | Position;
    /**
     * Style of the badge, including the font color, font size, badge color, and badge size.
     *
     * @type { BadgeStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    style: BadgeStyle;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithNumber
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BadgeParamWithNumber extends BadgeParam {
    /**
     * Number of notifications.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is less than or equal to 0 and less than the value of maxCount, no badge is displayed.
     * <br>Value range: [-2147483648, 2147483647]
     * <br>If the value is out of the range,
     * it will be adjusted by adding or subtracting 4294967296 to bring it back within the range.
     * <br>If the value is not an integer, it is rounded off to the nearest integer.
     * </p>
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    count: int;
    /**
     * Maximum number of notifications. When the maximum number is reached, only maxCount+ is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: [-2147483648, 2147483647]
     * <br>If the value is out of the range,
     * it will be adjusted by adding or subtracting 4294967296 to bring it back within the range.
     * <br>If the value is not an integer, it is rounded off to the nearest integer.
     * </p>
     *
     * @type { ?int }
     * @default 99
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    maxCount?: int;
}
/**
 * Inherits from BadgeParam and has all attributes of BadgeParam.
 *
 * @extends BadgeParam
 * @interface BadgeParamWithString
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BadgeParamWithString extends BadgeParam {
    /**
     * Text string of the prompt content.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: ResourceStr;
}
/**
 * Defines the Button component attributes.
 *
 * @extends CommonMethod
 * @interface ButtonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface BadgeAttribute extends CommonMethod {
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines Badge Component.
 *
 * @param { BadgeParamWithNumber | BadgeParamWithString } value
 * @param { CustomBuilder } [content_] - container
 * @returns { BadgeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Badge(
    value: BadgeParamWithNumber | BadgeParamWithString, 
    content_?: CustomBuilder
): BadgeAttribute;
