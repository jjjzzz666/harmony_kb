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
import { Dimension } from './units';
import { Axis } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * Specifies the position of guideLine
 *
 * @interface GuideLinePosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GuideLinePosition {
    /**
     * Specifies the distance to start of container
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    start?: Dimension;
    /**
     * Specifies the distance to end of container
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    end?: Dimension;
}
/**
 * Specifies the GuideLineStyle of relative container
 *
 * @interface GuideLineStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface GuideLineStyle {
    /**
     * Specifies the id of guideLine
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    id: string;
    /**
     * Specifies the direction of guideLine
     *
     * @type {Axis}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction: Axis;
    /**
     * Specifies the position of guideLine
     *
     * @type {GuideLinePosition}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    position: GuideLinePosition;
}
/**
 * Specifies the direction value of Barrier.
 *
 * @enum {number}
 * @syscap SystemCapability.Test.UiTest
 * @since 23 static
 */
export declare enum BarrierDirection {
    /**
     * Barrier will be positioned to the far left of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LEFT,
    /**
     * Barrier will be positioned to the far right of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RIGHT,
    /**
     * Barrier will be positioned to the top of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TOP,
    /**
     * Barrier will be positioned to the bottom of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BOTTOM
}
/**
 * Specifies the localized direction value of Barrier.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LocalizedBarrierDirection {
    /**
     * Localized barrier will be positioned to the far start of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    START = 0,
    /**
     * Localized barrier will be positioned to the far end of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    END = 1,
    /**
     * Localized barrier will be positioned to the top of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    TOP = 2,
    /**
     * Localized barrier will be positioned to the bottom of all referenced components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    BOTTOM = 3
}
/**
 * Specifies the BarrierStyle of relative container
 *
 * @interface BarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface BarrierStyle {
    /**
     * Specifies the id of barrier
     *
     * @type {string}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    id: string;
    /**
     * Specifies the direction of barrier
     *
     * @type {BarrierDirection}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction: BarrierDirection;
    /**
     * Specifies the referencedId of barrier
     *
     * @type {Array<string>}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    referencedId: Array<string>;
}
/**
 * Specifies the Localized BarrierStyle of relative container
 *
 * @interface LocalizedBarrierStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface LocalizedBarrierStyle {
    /**
     * Specifies the id of localized barrier
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    id: string;
    /**
     * Specifies the localized barrier direction of barrier
     *
     * @type { LocalizedBarrierDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    localizedDirection: LocalizedBarrierDirection;
    /**
     * Specifies the referencedId of localized barrier
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    referencedId: Array<string>;
}

/**
 * The RelativeContainerAttribute.
 * 
 * @extends CommonMethod
 * @interface RelativeContainerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface RelativeContainerAttribute extends CommonMethod {
    /**
     * Specifies guideLines of relativeContainer
     *
     * @param { Array<GuideLineStyle> } value
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default guideLine(value: Array<GuideLineStyle> | undefined): this;
    /**
    * Specifies barriers of relativeContainer
    *
    * @param { Array<BarrierStyle> | Array<LocalizedBarrierStyle> | undefined } barrierStyle
    * @returns { RelativeContainerAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 23 static
    */
    default barrier(barrierStyle: Array<BarrierStyle> | Array<LocalizedBarrierStyle> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<RelativeContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RelativeContainerAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines RelativeContainer Component.
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { RelativeContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RelativeContainer(
    
    content_?: CustomBuilder,
): RelativeContainerAttribute
