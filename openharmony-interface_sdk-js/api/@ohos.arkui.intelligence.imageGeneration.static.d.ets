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

import type image from './@ohos.multimedia.image';
import { BusinessError, Callback } from './@ohos.base';
import type common2D from './@ohos.graphics.common2D';
import type componentUtils from './@ohos.arkui.componentUtils';
import { UIContext } from './@ohos.arkui.UIContext';
import { Resource } from './global/resource';
import { ResourceStr } from './@ohos.arkui.component';

/**
 * Module for AI-generated images using UI Component.
 *
 * @namespace imageGeneration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare namespace imageGeneration {

  /**
   * Provides stream output result type definition.
   *
   * @enum { int } Constants
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  enum PartialResultType {
    /**
     * Indicates the action for partial result.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    PARTIAL = 0,
    /**
     * Indicates the action for complete result.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * Indicates the action for partial fail result.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    PARTIAL_FAIL = 2,
  }

  /**
   * Style types supported by AI image generation models, like Graffiti, Watercolor.
   *
   * @interface ImageStyle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface ImageStyle {
    /**
     * The style icon information which will display in style list.
     *
     * @type { image.PixelMap | string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    icon: image.PixelMap | string | Resource;

    /**
     * The style name information which will display in style list.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;
  }

  /**
   * Configuration parameter options for AI-generated image tasks.
   *
   * @interface GenerateImageTaskParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GenerateImageTaskParams {
    /**
     * image information used for AI-generated image tasks.
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    images: Array<ImageItem>;
    /**
     * Location reference map for multi-image generated tasks.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    positionImage?: image.PixelMap;

    /**
     * Path information for lasso selection in AI-generated image tasks.
     *
     * @type { ?Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    selectPath?: Array<common2D.Point>;

    /**
     * Description information for AI-generated image tasks.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    prompt: string;

    /**
     * the style of AI-generated image in one task.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    style?: string;

    /**
     * the size information of AI-generated image in one task.
     *
     * @type { image.Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageSize: image.Size;
    /**
     * the number of AI-generated image in one task.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageCount?: int;
  }

  /**
   * Configuration stream result for AI-generated image tasks.
   *
   * @interface GenerateImageTaskPartialResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GenerateImageTaskPartialResult {
    /**
     * The type information used for AI-generated image task.
     *
     * @type { PartialResultType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    type: PartialResultType;

    /**
     * Sequence number of the image corresponding to AI-generated image task, available in partial and partial error result.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageIndex?: int;

    /**
     * image data of the image corresponding to AI-generated image task, available in partial result.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageData?: string;

    /**
     * Total number of the image corresponding to AI-generated image task, available in completed result.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    totalCount?: int;

    /**
     * Information of the partial error corresponding to AI-generated image task, available in partial error result.
     *
     * @type { ?BusinessError }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    partialFail?: BusinessError;
  }

  /**
   * Configuration result for AI-generated image tasks.
   *
   * @interface GenerateImageTaskResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GenerateImageTaskResult {
    /**
     * The image result corresponding to AI-generated image task.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageData: Array<string>;
  }

  /**
   * AI Image Model Abstract Interface.
   *
   * @interface ImageGenerationModel
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface ImageGenerationModel {
    /**
     * Get the types of image styles supported by the AI model.
     *
     * @returns { Array<ImageStyle> } image style information.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    getModelSupportStyles(): Array<ImageStyle>;

    /**
     * Request AI image generation task to get the generated image.
     *
     * @param { int } sessionId - The session id for requesting an AI image generation task.
     *     <br>Value: range:[0, +∞]
     * @param { GenerateImageTaskOptions } params - Parameters for requesting an AI image generation task.
     * @param { Callback<GenerateImageTaskPartialResult> } callback - the callback used to return the GenerateImageTaskPartialResult.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void;

    /**
     * Cancel AI image generation task.
     *
     * @param { int } sessionId - The session id for cancel an AI image generation task.
     *     <br>Value: range: [0, +∞]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    cancelImageGeneration(sessionId: int): void;

    /**
     * User use complaint menu to complain the result of an AI-generated image task.
     *
     * @param { int } sessionId - The session id of AI image generation task.
     *     <br>Value: range: [0, +∞]
     * @param { GenerateImageTaskParams } request - The origin request for AI-generated image task.
     * @param { GenerateImageTaskResult } result - The result for AI-generated image task.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void;
  }

  /**
   * Configuration stream result for AI-generated text tasks.
   *
   * @interface GenerateTextTaskPartialResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GenerateTextTaskPartialResult {
    /**
     * The type information used for AI-generated text task.
     *
     * @type { PartialResultType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    type: PartialResultType;

    /**
     * Think information in AI-generated text task, available in partial result.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    reasoningContent?: string;

    /**
     * Final data in AI-generated text task, available in partial result.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    content?: string;

    /**
     * Information of the partial error corresponding to AI-generated text task, available in partial error result.
     *
     * @type { ?BusinessError }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    partialFail?: BusinessError;
  }

  /**
   * Configuration result for AI-generated text tasks.
   *
   * @interface GenerateTextTaskResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GenerateTextTaskResult {
    /**
     * Think information in AI-generated text task.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    reasoningContent: string;

    /**
     * Final data in AI-generated text task.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    content: string;
  }

  /**
   * AI Text Model Abstract Interface.
   *
   * @interface TextGenerationModel
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface TextGenerationModel {
    /**
     * Request AI text generation task to get the generated text.
     *
     * @param { int } sessionId - The session id for requesting an AI text generation task.
     *     <br>Value: range: [0, +∞]
     * @param { string } value - Parameters for requesting an AI text generation task.
     * @param { Callback<GenerateTextTaskPartialResult> } callback - the callback used to return the GenerateTextTaskPartialResult.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    requestTextGeneration(sessionId: int, value: string,
      callback: Callback<GenerateTextTaskPartialResult>): void;
    /**
     * Cancel AI text generation task.
     *
     * @param { int } sessionId - The session id for cancel an AI text generation task.
     *     <br>Value: range: [0, +∞]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    cancelTextGeneration(sessionId: int): void;
    /**
     * User use complaint menu to complain the result of an AI-generated text task.
     *
     * @param { int } sessionId - The session id of AI text generation task.
     *     <br>Value: range: [0, +∞]
     * @param { string } request - The origin request for AI-generated text task.
     * @param { GenerateTextTaskResult } result - The result for AI-generated text task.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onComplain(sessionId: int, request: string, result: GenerateTextTaskResult): void;
  }

  /**
   * Image information for AI-generated images.
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface ImageItem {
    /**
     * Image decoding information for preview in the page of ImageGeneratorDialog.
     *
     * <p>**NOTE**:
     * Displayed within the canvas in the ImageGeneratorDialog; if not provided, the image will be decoded from the url.
     * </p>
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    image?: image.PixelMap;

    /**
     * Original image path information for image generation;
     *
     * <p>**NOTE**:
     * for high-resolution scenarios, it is best to provide the original image path; if not provided, the image.PixelMap
     * will be used for image generation.
     * </p>
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    url?: ResourceStr;

    /**
     * The size and position of the container used to display images in the preview canvas.
     *
     * <p>**NOTE**:
     * it is recommended to be provided in multi-image fusion scenarios to achieve better results.
     * </p>
     *
     * @type { ?common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rect?: common2D.Rect;

    /**
     * The rotation of the container used to display images in the preview canvas.
     *
     * <p>**NOTE**:
     * it is recommended to be provided in multi-image fusion scenarios to achieve better results.
     * </p>
     *
     * @type { ?componentUtils.Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rotation?: componentUtils.Rotation2D;

    /**
     * In scenarios with multiple images, information about image rendering hierarchy.
     *
     * <p>**NOTE**:
     * it is recommended to be provided in multi-image fusion scenarios to achieve better results.
     * </p>
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    zIndex?: int;

    /**
     * whether the image type is a hand-drawn line art.
     *
     * <p>**NOTE**:
     * it is recommended to be provided in Hand-drawn line art scenarios to achieve better results.
     * </p>
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    isHandwrite?: boolean;
  }

  /**
   * Statistics Related to AI Image Generation Tasks.
   *
   * @interface TaskStatistic
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface TaskStatistic {
    /**
     * The style used in AI image generation tasks.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    style: string;

    /**
     * Whether the image AI generation task is a sticker generation task.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    isSticker: boolean;

    /**
     * Number of images used for AI image generation tasks.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageCount: int;

    /**
     * Time taken for AI image generation task in seconds.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    generationTime: double;
  }

  /**
   * The result of AI-generated images
   *
   * @interface GeneratorResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GeneratorResult {
    /**
     * Decoded data of AI-generated images.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    image?: image.PixelMap;
    /**
     * The path information of AI-generated images.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    url?: string;

    /**
     * Statistics of AI-generated image tasks.
     *
     * @type { TaskStatistic }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    statistic: TaskStatistic;
  }

  /**
   * Custom icon object in the generation result page of ImageGeneratorDialog.
   *
   * @interface GeneratorResultPageIcon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GeneratorResultPageIcon {
    /**
     * Icon image information.
     *
     * @type { image.PixelMap | string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    image: image.PixelMap | string | Resource;
    /**
     * Icon text description.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    text: ResourceStr;
    /**
     * Icon click event callback.
     *
     * @type { Callback<GeneratorResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    callback: Callback<GeneratorResult>;
  }

  /**
   * Parameters used to open the ImageGeneratorDialog.
   *
   * @interface GeneratorDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GeneratorDialogOptions {
    /**
     * Initial image parameters used for AI-generated image tasks.
     *
     * @type { ?Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    images?: Array<ImageItem>;
    /**
     * Initial text information used for AI-generated image tasks.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    content?: ResourceStr;
    /**
     * Custom icons used on the AI generated image results page.
     *
     * @type { ?Array<GeneratorResultPageIcon> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    customIcons?: Array<GeneratorResultPageIcon>;
    /**
     * Model used for AI generate image tasks.
     *
     * @type { ?ImageGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    imageGenerationModel?: ImageGenerationModel;
    /**
     * Text polishing model used in AI generate image tasks.
     *
     * @type { ?TextGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    textGenerationModel?: TextGenerationModel;
    /**
     * Callback triggered when the ImageGeneratorDialog changes in size or position.
     *
     * @type { ?Callback<common2D.Rect> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onAreaDidChange?: Callback<common2D.Rect>;
  }

  /**
   * Open the AI image generation task popup and perform AI image generation operations.
   *
   * @param { UIContext } uiContext - the context of dialog for ui display.
   * @param { GeneratorDialogOptions } [options] - Generate image task parameters.
   * @returns { Promise<Array<GeneratorResult>> } - Returns the result of generated image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>;
}

export default imageGeneration;