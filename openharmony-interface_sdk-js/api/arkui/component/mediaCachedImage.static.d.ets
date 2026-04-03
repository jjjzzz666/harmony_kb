'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { ImageAttribute } from './image';
import { ResourceStr } from './units';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';
import { ComponentBuilder, CustomBuilder } from './builder';
import { PixelMap } from './common';

/**
 * Defines the resource which can use ASTC.
 *
 * @interface ASTCResource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface ASTCResource {
    /**
     * Array of ASTC uri resources, indicating the range of ASTC data to be obtained.
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    sources: Array<string>;
    /**
     * Column size, indicating the number of ASTC resources to splice per row.
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    column: int;
}

/**
 * Defines the MediaCachedImageInterface type.
 *
 * @typedef { function } MediaCachedImageInterface
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ASTCResource } src - mediaCachedImage resource type.
 * @returns { MediaCachedImageAttribute } The attribute of the mediaCachedImage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type MediaCachedImageInterface = (src: PixelMap | ResourceStr | DrawableDescriptor | ASTCResource)
    => MediaCachedImageAttribute;

/**
 * Defines the MediaCachedImage component attributes.
 *
 * @extends ImageAttribute
 * @interface MediaCachedImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export interface MediaCachedImageAttribute extends ImageAttribute {
}

/**
 * Defines the MediaCachedImage component.
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ASTCResource } src - mediaCachedImage resource type.
 * @param { CustomBuilder } [content_] - container
 * @returns { MediaCachedImageAttribute } The attribute of the mediaCachedImage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function MediaCachedImage(
    src: PixelMap | ResourceStr | DrawableDescriptor | ASTCResource, 
    content_?: CustomBuilder
): MediaCachedImageAttribute
