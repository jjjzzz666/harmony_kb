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
import { Resource } from "../../global/resource";
import { CommonMethod, PixelMap } from './common';
import { AnimationStatus, FillMode } from "./enums";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ImageFrameInfo {
    /**
     * Image path
     *
     * @type { string | Resource | PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    src: string | Resource | PixelMap;
    /**
     * Image width
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: double | string;
    /**
     * Image height
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height?: double | string;
    /**
     * Vertical coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    top?: double | string;
    /**
     * Horizontal coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(double | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    left?: double | string;
    /**
     * Playback duration of this image frame, in milliseconds.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    duration?: int;
}
/**
 * Defines the ImageAnimator component attributes.
 *
 * @extends CommonMethod
 * @interface ImageAnimatorAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface ImageAnimatorAttribute extends CommonMethod {
    /**
     * Sets the image frame information.
     *
     * <p><strong>NOTE</strong>:
     * <br>Dynamic update is not supported.
     * </p>
     *
     * @param { Array<ImageFrameInfo> | undefined } value - Image frame informatio, Default value is [].
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default images(value: Array<ImageFrameInfo> | undefined): this;
    /**
     * Sets the playback state of the animation.
     *
     * @param { AnimationStatus | undefined } value - Playback state of the animation,
     *     Default value is AnimationStatus.Initial.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default state(value: AnimationStatus | undefined): this;
    /**
     * Sets the playback duration.
     * The unit is millisecond.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when a separate duration is set for any of the image frames.
     * </p>
     *
     * @param { int | undefined } value - Playback duration, Default value is 1000.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default duration(value: int | undefined): this;
    /**
     * Sets the playback direction.
     *
     * @param { boolean | undefined } value - Playback direction, Default value is false.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default reverse(value: boolean | undefined): this;
    /**
     * Sets whether the image size is fixed at the component size.
     *
     * @param { boolean | undefined } value - Whether the image size is fixed at the 
     *     component size, Default value is true.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fixedSize(value: boolean | undefined): this;
    /**
     * Sets the status before and after execution of the animation in the current playback direction.
     *
     * @param { FillMode | undefined } value - Status before and after execution of the 
     *     animation in the current playback direction,
     * Default value is FillMode.Forwards.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fillMode(value: FillMode | undefined): this;
    /**
     * Sets the number of times that the animation is played.
     * Played once by default
     *
     * @param { int | undefined } value - Number of times that the animation is played, Default value is 1.
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default iterations(value: int | undefined): this;
    /**
     * Sets whether the component should automatically pause or resume based on its visibility, using the system's
     * onVisibleAreaChange event.
     *
     * @param { boolean | undefined } monitorInvisibleArea - 	Whether the component should automatically 
     *     pause or resume based on
     * its visibility, using the system's onVisibleAreaChange event, Default value is false.
     * @returns { ImageAnimatorAttribute }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default monitorInvisibleArea(monitorInvisibleArea: boolean | undefined): this;
    /**
     * Status callback, which is triggered when the animation starts to play.
     *
     * @param { function | undefined } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onStart(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation pauses.
     *
     * @param { function | undefined } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onPause(event: (() => void) | undefined): this;
    /**
     * Status callback, triggered when the animation is replayed
     *
     * @param { function | undefined } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onRepeat(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation playback returns to the initial state.
     *
     * @param { function | undefined } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onCancel(event: (() => void) | undefined): this;
    /**
     * Status callback, which is triggered when the animation playback is complete or stopped.
     *
     * @param { function | undefined } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onFinish(event: (() => void) | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the ImageAnimator component.
 *
 * @returns { ImageAnimatorAttribute } The attribute of the ImageAnimator.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ImageAnimator(): ImageAnimatorAttribute;
