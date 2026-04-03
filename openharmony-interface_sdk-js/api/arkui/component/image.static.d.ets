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
import image from '../../@ohos.multimedia.image';
import drawing from '../../@ohos.graphics.drawing';
import matrix4 from '../../@ohos.matrix4';
import cacheDownload from '../../@ohos.request.cacheDownload';
import { BusinessError } from '../../@ohos.base';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { ResourceStr, ResourceColor, ColorFilter, EdgeWidths, ColorMetrics, VoidCallback } from "./units";
import { ImageFit, ImageRepeat, CopyOptions } from "./enums";
import { Resource } from '../../global/resource';
import { CommonMethod, PointLightStyle, PixelMap, ContentTransitionEffect } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * Import the DrawingColorFilter type object for image color filter setting.
 *
 * @typedef { drawing.ColorFilter } DrawingColorFilter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type DrawingColorFilter = drawing.ColorFilter;
/**
 * Enumerates all the levels available for the image resolution quality.
 *
 * @typedef { image.ResolutionQuality } ResolutionQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 23 static
 */
export type ResolutionQuality = image.ResolutionQuality;
/**
 * Lattice for dividing an image into grids.
 *
 * @typedef { drawing.Lattice } DrawingLattice
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type DrawingLattice = drawing.Lattice;
/**
 * Object matrix used for setting image transformations.
 *
 * @typedef { matrix4.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ImageMatrix = matrix4.Matrix4Transit;
/**
 * Download information of network images.
 *
 * @typedef { cacheDownload.DownloadInfo } RequestDownloadInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type RequestDownloadInfo = cacheDownload.DownloadInfo;

/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 23 static
 */
export declare enum ImageRenderMode {
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Original,
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Template
}
/**
 * Specify image's content.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageContent {
    /**
     * Make image empty.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    EMPTY = 0
}
/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum DynamicRangeMode {
    /**
     * Allow image content to use an unrestricted extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    HIGH = 0,
    /**
     * Allow image content to use some extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CONSTRAINT = 1,
    /**
     * Restrict the image content dynamic range to the standard range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    STANDARD = 2
}
/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageInterpolation {
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    None,
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Low,
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    Medium,
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    High
}
/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ImageRotateOrientation {
    /**
     * Rotate according to the image rotation
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    AUTO = 0,
    /**
     * Ignore the rotation of the image
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP = 1,
    /**
     * Based on image rotation, rotate clockwise 90 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RIGHT = 2,
    /**
     * Based on image rotation, rotate clockwise 180 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN = 3,
    /**
     * Based on image rotation, rotate clockwise 270 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LEFT = 4,
    /**
     * Flip the orignial image horizontally
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP_MIRRORED = 5,
    /**
     * Flip the orignial image horizontally and rotate clockwise 90 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    RIGHT_MIRRORED = 6,
    /**
     * Flip the orignial image vertically
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN_MIRRORED = 7,
    /**
     * Flip the orignial image horizontally and rotate clockwise 270 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LEFT_MIRRORED = 8
}
/**
 * ImageCompleteEvent
 *
 * @interface ImageCompleteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ImageCompleteEvent {
    /**
     * The width of the image source.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width: int;
    /**
     * The height of the image source.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height: int;
    /**
     * The width of the component source.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    componentWidth: int;
    /**
     * The height of the component source.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    componentHeight: int;
    /**
     * The value of the status of the image being loaded successfully.
     * If the returned status value is 0, the image data is successfully loaded.
     * If the returned status value is 1, the image is successfully decoded.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    loadingStatus: int;
    /**
     * The width of the picture that is actually drawn.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    contentWidth: int;
    /**
     * The height of the picture that is actually drawn.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    contentHeight: int;
    /**
     * The actual draw is offset from the x-axis of the component itself.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    contentOffsetX: int;
    /**
     * The actual draw is offset from the y-axis of the component itself.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    contentOffsetY: int;
}
/**
 * Defines source size of image.
 *
 * @interface ImageSourceSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ImageSourceSize {
    /**
     * Set width.
     * Anonymous Object Rectification.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width: double;
    /**
     * Set height.
     * Anonymous Object Rectification.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    height: double;
}
/**
 * Set the placeholder image.
 * @interface ImageAlt
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface ImageAlt {
  /**
   * Set the placeholder image during the loading process.
   * @type { ?(ResourceStr | PixelMap) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  placeholder?: ResourceStr | PixelMap;

  /**
   * Set the placeholder image when loading fails .
   * @type { ?(ResourceStr | PixelMap) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  error?: ResourceStr | PixelMap;
}
/**
 * Defines the ColorContent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ColorContent {
    /**
     * Indicates the ColorContent to original value.
     *
     * @type { ColorContent }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    static readonly ORIGIN: ColorContent;
}
/**
 * Defines the Image component attributes.
 *
 * @extends CommonMethod
 * @interface ImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface ImageAttribute extends CommonMethod {
    /**
     * Sets the placeholder image displayed during loading.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     * @param { string | Resource | PixelMap | ImageAlt | undefined } value - Placeholder image displayed
     *     during loading, Default value is null.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default alt(value: string | Resource | PixelMap | ImageAlt | undefined): this;
    /**
     * Specifies whether to display the image in the system language direction.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean | undefined } value - Whether to display the image in the system 
     *     language direction, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default matchTextDirection(value: boolean | undefined): this;
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean | undefined } value - Whether to fit the image to the size 
     *     of the image source, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fitOriginalSize(value: boolean | undefined): this;
    /**
     * Sets the fill color to be superimposed on the image.
     * By default, no fill color is applied. If an invalid value is passed, the system uses the default theme color:
     * black in light mode and white in dark mode.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute applies only to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ResourceColor | ColorContent | ColorMetrics | undefined } color
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fillColor(color: ResourceColor | ColorContent | ColorMetrics | undefined): this;
    /**
     * Sets how the image is resized to fit its container.
     *
     * @param { ImageFit | undefined } value - How the image is resized to 
     *     fit its container, Default value is ImageFit.Cover.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default objectFit(value: ImageFit | undefined): this;
    /**
     * Sets the transformation matrix of the image.
     *
     * @param { ImageMatrix | undefined } matrix
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default imageMatrix(matrix: ImageMatrix | undefined): this;
    /**
     * Set the repeat style of the picture
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageRepeat | undefined } value - How the image is repeated, Default value is ImageRepeat.NoRepeat.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default objectRepeat(value: ImageRepeat | undefined): this;
    /**
     * Specifies whether to resize the image source based on the size of the display area during image decoding.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor
     * or SVG.
     * </p>
     *
     * @param { boolean | undefined } value - Whether to resize the image source based on the size of the display area
     * during image decoding, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default autoResize(value: boolean | undefined): this;
    /**
     * Sets the rendering mode of the image.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>When ColorFilter is set, this attribute is not effective.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageRenderMode | undefined } value - Rendering mode of the image, 
     *     Default value is ImageRenderMode.Original.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default renderMode(value: ImageRenderMode | undefined): this;
    /**
     * Sets the dynamic range of the image to be displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * </p>
     *
     * @param { DynamicRangeMode | undefined } value - Dynamic range of the image.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute, Default value is
     * dynamicRangeMode.Standard.
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default dynamicRangeMode(value: DynamicRangeMode | undefined): this;
    /**
     * Set hdrBrightness for Image.
     *
     * @param { double | undefined } brightness - Control the brightness of HDR Image, Default value is 1.0.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default hdrBrightness(brightness: double | undefined): this;
    /**
     * Sets the interpolation effect of the image, which can alleviate aliasing that occurs when the image is zoomed.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageInterpolation | undefined } value - Interpolation effect of the image, 
     *     Default value is ImageInterpolation.Low.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default interpolation(value: ImageInterpolation | undefined): this;
    /**
     * Sets the decoding size of the image.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     * Anonymous Object Rectification.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute works only when the target size is smaller than the source size.
     * <br>This attribute is not applicable to SVG images or PixelMap objects.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageSourceSize | undefined } value - Decoding size of the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default sourceSize(value: ImageSourceSize | undefined): this;
    /**
     * Specifies whether to load the image synchronously.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean | undefined } value - Whether to load the image synchronously, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default syncLoad(value: boolean | undefined): this;
    /**
     * Sets the color filter for the image.
     *
     * <p><strong>NOTE</strong>:
     * <br>When this attribute is set, renderMode is not effective.
     * </p>
     *
     * @param { ColorFilter | DrawingColorFilter | undefined } value -  Color filter of the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default colorFilter(value: ColorFilter | DrawingColorFilter | undefined): this;
    /**
     * Whether the image can be copied.
     *
     * <strong>NOTE</strong>:
     * <br>SVG images cannot be copied.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param {  CopyOptions | undefined } value - Specifies whether the image can be 
     *     copied, Default value is CopyOptions.None.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default copyOption(value: CopyOptions | undefined): this;
    /**
     * Specifies whether the image is draggable.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute cannot be used together with the onDragStart event.
     * </p>
     *
     * @param { boolean | undefined } value - Whether the image is draggable, Default value is true.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default draggable(value: boolean | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle | undefined } value - The point light style.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default pointLight(value: PointLightStyle | undefined): this;
    /**
     * SVG anti-aliasing.
     * The range of the parameter values is (0.333, 1.333].
     * Default value is 0.0.
     *
     * @param { double | undefined } value - The degree of anti-aliasing.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default edgeAntialiasing(value: double | undefined): this;
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { ImageOnCompleteCallback | undefined } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onComplete(callback: ImageOnCompleteCallback | undefined): this;
    /**
     * Triggered when an error occurs during image loading.
     *     The field of "message" carries the detailed information of failed image loading.
     *
     * <p><strong>NOTE</strong>:
     * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageErrorCallback | undefined } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onError(callback: ImageErrorCallback | undefined): this;
    /**
     * When the loaded source file is a svg image, this callback is triggered 
     *     when the playback of the svg image is complete.
     *     If the svg image is a wireless loop image, this callback is not triggered.
     *
     * <p><strong>NOTE</strong>:
     * <br>Only SVG images are supported.
     * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { VoidCallback | undefined } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onFinish(event: VoidCallback | undefined): this;
    /**
     * Sets whether to enable the AI analyzer
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute cannot be used together with the overlay attribute. If they are set at the same time,
     * the CustomBuilder attribute in overlay has no effect. This attribute depends on device capabilities.
     * <br>Images to be analyzed must be static, non-vector images. That is, SVG and GIF images cannot be analyzed.
     * Pixel maps in RGBA_8888 format can be passed in for analysis.
     * <br>The placeholder images (specified by alt) cannot be analyzed. An image can be analyzed only when
     * objectRepeat is set to ImageRepeat.NoRepeat and obscured is disabled.
     * <br>Analysis is performed based on the complete original image. If the clip, margin, borderRadius,
     * position, or objectFit attribute is set, the image is not displayed completely.
     * If renderMode is used to apply a mask, analysis is still performed based on the complete original image.
     * The copyOption attribute does not affect the AI analyzer.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * <br>The ohos.permission.INTERNET permission must be declared.
     * </p>
     *
     * @param { boolean | undefined} enable - Whether to enable the AI analyzer, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full     
     * @since 23 static
     */
    default enableAnalyzer(enable: boolean | undefined): this;
    /**
     * Set image analyzer with config.
     *
     * @param { ImageAnalyzerConfig | undefined } config
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default analyzerConfig(config: ImageAnalyzerConfig | undefined): this;
    /**
     * Sets the resizable image options.
     *
     * <p><strong>NOTE</strong>:
     * <br>Resizing is effective for drag previews and placeholder images.
     * <br>When ResizableOptions is set to a valid value, the objectRepeat attribute does not take effect.
     * <br>When the sum of the values of top and bottom is greater than the source image height,
     * or the sum of the values of left and right is greater than the source image width,
     * the ResizableOptions attribute does not take effect.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor
     * or SVG.
     * </p>
     *
     * @param { ResizableOptions | undefined } value - 	Resizable image options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default resizable(value: ResizableOptions | undefined): this;
    /**
     * Set the quality enhancement level of image.
     *
     * @param { boolean | undefined } supported - Whether to support sensitive privacy information.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default privacySensitive(supported: boolean | undefined): this;
    /**
     * Set the quality enhancement level of image.
     *
     * @param { ResolutionQuality | undefined } imageQuality
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 23 static
     */
    default enhancedImageQuality(imageQuality: ResolutionQuality | undefined): this;
    /**
     * Sets the display orientation of the image content.
     *
     * @param { ImageRotateOrientation | undefined } orientation - Display orientation of the 
     *     image content, Default value is ImageRotateOrientation.UP.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default orientation(orientation: ImageRotateOrientation | undefined): this;
    /**
     * Set the range of SVG parsing capabilities supported through enable switch.
     * @param { boolean | undefined } enable - switch
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default supportSvg2(enable: boolean | undefined): this;
    /**
     * Animation effect when the image content changes.
     * @param { ContentTransitionEffect | undefined } transition - Animation effect
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default contentTransition(transition: ContentTransitionEffect | undefined): this;
    /**
     * Anti-aliasing of image edges.
     *
     * @param { boolean | undefined } isAntialiased 
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default antialiased(isAntialiased: boolean | undefined): this;
    /**
     * Set the attribute modifier.
     *
     * @param { AttributeModifier<ImageAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ImageAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * ImageErrorCallback
 * 
 * @typedef { function } ImageErrorCallback
 * @param { ImageError } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ImageErrorCallback = (error: ImageError) => void;
/**
 * ImageOnCompleteCallback
 *
 * @typedef { function } ImageOnCompleteCallback
 * @param { ImageCompleteEvent } [loadEvent]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type ImageOnCompleteCallback = (loadEvent?: ImageCompleteEvent) => void;
/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ImageError {
    /**
     * Component width.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    componentWidth: int;
    /**
     * Component height.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    componentHeight: int;
    /**
     * Message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    message: string;
    /**
     * Business Error.
     *
     * @type { ?BusinessError<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    error?: BusinessError<void>;
    /**
     * Download information of network images.
     *
     * @type { ?RequestDownloadInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    downloadInfo?: RequestDownloadInfo;
}
/**
 * Image resizable options
 *
 * @interface ResizableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface ResizableOptions {
    /**
     * Image slice widths.
     *
     * @type { ?EdgeWidths }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    slice?: EdgeWidths;
    /**
     * Image lattice.
     *
     * @type { ?DrawingLattice }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    lattice?: DrawingLattice;
}
/**
 * Defines the Image component.
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - image resource type.
 * @param { ImageAIOptions } [imageAIOptions] - Options for AI analyzer.
 * @returns { ImageAttribute } The attribute of the Image.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Image(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    imageAIOptions?: ImageAIOptions
): ImageAttribute;
