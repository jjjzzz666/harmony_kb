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
import { CommonShapeMethod, AttributeModifier, CommonMethod } from "./common";
import { ComponentBuilder, CustomBuilder } from './builder';
import { Length, ResourceStr } from './units';

/**
 * Define options used to construct a path.
 *
 * @interface PathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PathOptions {
    /**
     * Width option.
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Length;
    /**
     * Height option.
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: Length;
    /**
     * Commands option.
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    commands?: ResourceStr;
}

/**
 * Provides methods for attribute path component.
 *
 * @extends CommonShapeMethod
 * @interface PathAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PathAttribute extends CommonShapeMethod {
    /**
     * Set a series of path commands that define the path to be drawn
     *
     * @param { ResourceStr | undefined } value
     * @returns { PathAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default commands(value: ResourceStr | undefined): this;
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<PathAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PathAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<PathAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Path is returned when the parameter is transferred.
 *
 * @param { PathOptions } [options] - The options to create a Path
 * @returns { PathAttribute } The attribute of the Path.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Path(
    options?: PathOptions
): PathAttribute;
