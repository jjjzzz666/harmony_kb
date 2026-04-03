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
import { LengthMetrics } from '../Graphics';
import { FlexWrap, FlexDirection, ItemAlign, FlexAlign } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Describes the layout and alignment of child components within the Flex component.
 *
 * @interface FlexOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface FlexOptions {
    /**
     * Direction in which child components are arranged in the Flex component.
     *
     * @type { ?FlexDirection }
     * @default FlexDirection.Row
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: FlexDirection;
    /**
     * Whether the Flex component has a single line or multiple lines.
     *
     * @type { ?FlexWrap }
     * @default FlexWrap.NoWrap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    wrap?: FlexWrap;
    /**
     * Alignment mode of the child components in the Flex component along the main axis.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    justifyContent?: FlexAlign;
    /**
     * Alignment mode of the child components in the Flex component along the cross axis.
     *
     * @type { ?ItemAlign }
     * @default ItemAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    alignItems?: ItemAlign;
    /**
     * Alignment mode of the child components in a multi-row Flex component along the cross axis.
     * This parameter is valid only when wrap is set to Wrap or WrapReverse.
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    alignContent?: FlexAlign;
    /**
     * Spacing between child components along the main axis or cross axis of the Flex component.
     *
     * @type { ?FlexSpaceOptions }
     * @default {main: LengthMetrics.px(0), cross: LengthMetrics.px(0)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    space?: FlexSpaceOptions;
}
/**
 * Defines the spacing between child components along the main axis or cross axis of the Flex component.
 *
 * @interface FlexSpaceOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface FlexSpaceOptions {
    /**
     * Space on the main axis of the Flex component.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    main?: LengthMetrics;
    /**
     * Space on the main axis of the Flex component.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    cross?: LengthMetrics;
}

/**
 * The FlexAttribute.
 * 
 * @extends CommonMethod
 * @interface FlexAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface FlexAttribute extends CommonMethod {
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { FlexAttribute } The attribute of the flex.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): FlexAttribute;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { FlexAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines Flex Component.
 *
 * @param { FlexOptions } [value] - Flex options.
 * @param { CustomBuilder } [content_] - container
 * @returns { FlexAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Flex(
    value?: FlexOptions,
    content_?: CustomBuilder,
): FlexAttribute
