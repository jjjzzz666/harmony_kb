'use static';
/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import image from './@ohos.multimedia.image';
import drawing from './@ohos.graphics.drawing';
import { AnimationStatus, ResourceStr } from '@ohos.arkui.component';

/**
 * The result of loading image.
 *
 * @typedef DrawableDescriptorLoadedResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface DrawableDescriptorLoadedResult {
  /**
   * The width of the image, in px.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  imageWidth: int;
  /**
   * The height of the image, in px.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  imageHeight: int;
}
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DrawableDescriptor {
  /**
   * Creates a new DrawableDescriptor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  constructor();

  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap | undefined } - Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPixelMap(): image.PixelMap | undefined;

  /**
   * Synchronously loads the image and returns the loading result.
   * 
   * @returns { DrawableDescriptorLoadedResult } - loading outcome.
   * @throws { BusinessError } 111001 - resource loading failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  loadSync(): DrawableDescriptorLoadedResult;

  /**
   * Asynchronously loads image and returns loading result.
   *
   * @returns { Promise<DrawableDescriptorLoadedResult> } - The image loading result.
   * @throws { BusinessError } 111001 - resource loading failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  load(): Promise<DrawableDescriptorLoadedResult>;
}

/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LayeredDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new LayeredDrawableDescriptor.
   * 
   * @param { DrawableDescriptor } [foreground] - Indicates the foreground option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [background] - Indicates the background option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [mask] - Indicates the mask option to create LayeredDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(
    foreground?: DrawableDescriptor,
    background?: DrawableDescriptor,
    mask?: DrawableDescriptor
  );

  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getForeground(): DrawableDescriptor | undefined;

  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getBackground(): DrawableDescriptor | undefined;

  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMask(): DrawableDescriptor | undefined;

  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static getMaskClipPath(): string;

  /**
   * Set the composition mode.
   *
   * @param { drawing.BlendMode | undefined } mode - Indicates the composition mode to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setBlendMode(mode: drawing.BlendMode | undefined): void;
}

/**
 * Use the PixelMapDrawableDescriptor class to get the resource of pixelmap or resource descriptor information.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PixelMapDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new PixelMapDrawableDescriptor.
   *
   * @param { image.PixelMap } [src] - Indicates the resource to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(src?: image.PixelMap);
}

/**
 * Animation stop mode.
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum AnimationStopMode {
  /**
   * First frame.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  FIRST_FRAME = 0,
  /**
   * Last frame.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  LAST_FRAME = 1
}

/**
 * Animation control options
 *
 * @interface AnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface AnimationOptions {
  /**
   * The duration of animation playback once.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  duration?: int;
  /**
   * Animation playback times.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  iterations?: int;
 /**
   * Animation frames duration of playback once.
   *
   * @type { ?Array<int> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  frameDurations?: Array<int>;
  /**
   * Auto play animated images, default value is true.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  autoPlay?: boolean;
  /**
   * Mode in which animation stops
   * 
   * @type { ?AnimationStopMode }
   * @default AnimationStopMode.FIRST_FRAME
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  stopMode?: AnimationStopMode;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @interface AnimationController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface AnimationController {
  /**
   * Start animtion playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  start(): void;

  /**
   * Stop animation playback, and reset to first frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  stop(): void;

  /**
   * Pause animation playback, and keep it to the current frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pause(): void;

  /**
   * Resume animation playback from the current frame.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  resume(): void;

  /**
   * Get animtion status of the current component.
   *
   * @returns { AnimationStatus } - Return the status of animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getStatus(): AnimationStatus;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class AnimatedDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { Array<image.PixelMap> } pixelMaps - PixelMap List.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { ResourceStr | Array<image.PixelMap> } src - animated images or local resource.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(src: ResourceStr | Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * Get the animation controller of the component based on the component id.
   *
   * @param { string } [id] - component id.
   * @returns { AnimationController | undefined } - Return the component of animation controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getAnimationController(id?: string): AnimationController | undefined;
}
