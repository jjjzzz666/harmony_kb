/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @file
 * @kit ArkGraphics2D
 */

/*** if arkts dynamic */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
/*** endif */
/*** if arkts static */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import { FractionStop } from './arkui/component/common';
/*** endif */

/**
 * @namespace effectKit
 * @syscap SystemCapability.Multimedia.Image.Core
 * @since 9
 */
/**
 * @namespace effectKit
 * @syscap SystemCapability.Multimedia.Image.Core
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * @namespace effectKit
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @form
 * @atomicservice
 * @since 14 dynamic
 * @since 23 static
 */

declare namespace effectKit {

  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } radius - Blur radius, in pixels. The blur effect is proportional to the configured value.
    *  A larger value indicates a more obvious effect.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 23 static
    */
    blur(radius: double): Filter;

    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } radius - Blur radius, in pixels. The blur effect is proportional to the configured value.
    *  A larger value indicates a more obvious effect.
    * @param { TileMode } tileMode - Tile mode of the shader effect. The blur effect of image edges is affected. Currently,
    *  only CPU rendering is supported. Therefore, the tile mode supports only DECAL.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 14 dynamic
    * @since 23 static
    */
    blur(radius: double, tileMode: TileMode): Filter;
   
    /**
    * Adds the elliptical gradient blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } blurRadius - Blur radius, in pixels. The blur effect is proportional to the configured value.
    *     A larger value indicates a more obvious effect.
    * @param { EllipticalMaskCenter } center - Set the center point of the ellipse. [0, 0] represents the top-left corner of 
    *     the component, and floating-point numbers are allowed. Values exceeding the boundary will be automatically 
    *     truncated during implementation. 
    * @param { EllipticalMaskRadius } maskRadius - Set the major axis and minor axis of the ellipse. 
    *     A radius of 1 is equal to the height of the component. The value range is [0, 10], 
    *     and floating-point numbers are allowed. Values exceeding the boundary 
    *     will be automatically truncated during implementation. 
    * @param { FractionStop[] } fractionStops - Gradient blur position and intensity array. 
    *     The array length ranges from 0 to 12. It has no effect if the length is 0 or greater than 12. 
    *     Both position and intensity values are between 0 and 1. Position 0 corresponds to the ellipse center, 
    *     and position 1 corresponds to the ellipse boundary. Intensity 0 means no blur, while intensity 1 equals the 
    *     blur effect of the input blur radius. 
    * @returns { Filter } Final image effect.
    * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @stagemodelonly
    * @systemapi
    * @since 23 dynamic&static
    */
    ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter;

    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the brightness effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } bright - Brightness value, ranging from 0 to 1. When the value is 0, the image brightness remains unchanged.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 23 static
    */
    brightness(bright: double): Filter;

    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the grayscale effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 23 static
    */
    grayscale(): Filter;

    /**
    * A invert effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 12
    */
    /**
    * Adds the inversion effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @since 14 dynamic
    * @since 23 static
    */
    invert(): Filter;

    /**
     * A custom effect is added to the image.
     *
     * @param { Array<double> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    /**
     * Adds a custom effect to the filter linked list, and returns the head node of the linked list.
     *
     * @param { Array<double> } colorMatrix - Custom color matrix.
     * A 5 x 4 matrix can be created. The value range of the matrix element is [0, 1],
     * where 0 indicates that the color channel is not involved in the calculation,
     * and 1 indicates that the color channel is involved in the calculation and retains the original weight.
     * @returns { Filter } Final image effect.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added.
    * @returns { image.PixelMap } image.PixelMap.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9 dynamiconly
    * @deprecated since 11
    * @useinstead effectKit.Filter#getEffectPixelMap
    */
    getPixelMap(): image.PixelMap;
  
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 11
    */
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added. This API uses a promise to return the result.
    * @returns { Promise<image.PixelMap> } - Promise used to return image.PixelMap of the source image.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 23 static
    */
    getEffectPixelMap(): Promise<image.PixelMap>;

    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @param { boolean } useCpuRender -  Whether to use cpu render.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20 dynamic
	* @since 23 static
    */
    getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>;
  }

  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface ColorPicker {

    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API uses a promise to return the result.
     * @returns { Promise<Color> } Promise used to return the color value of the main color. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getMainColor(): Promise<Color>;

    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the main color. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getMainColorSync(): Color;

    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the largest proportion from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the color with the largest proportion. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getLargestProportionColor(): Color;

    /**
     * Get top proportion color of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains a given number of colors with the top proportions in the image. This API returns the result synchronously.
     * @param { int } colorCount - Number of colors to obtain. The value range is [1, 10]. If a non-integer is passed in, the value will be rounded down.
     * @returns { Array<Color | null> } Array of colors, sorted by proportion.
     * - If the number of colors obtained is less than the value of colorCount, the array size is the actual number obtained.
     * - If the colors fail to be obtained or the number of colors obtained is less than 1, [null] is returned.
     * - If the value of colorCount is greater than 10, an array holding the first 10 colors with the top proportions is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

    /**
     * Get top proportion colors and percentages of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Map<Color | null, double | null> } Map of colors and percentages, sorted by proportion.
     *    - If the number of colors obtained is less than the value of colorCount, the map size is 
     *      the actual number obtained.
     *    - If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.
     *    - If the value of colorCount is greater than 10, a map holding the first 10 colors with
     *      the top proportions is returned.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>;

    /**
     * Get the proportion of transparent pixels with alpha=0 in the image
     * @returns { double } proportion of transparent pixels with alpha=0
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 23 dynamic&static
     */
    getAlphaZeroTransparentProportion(): double;

    /**
     * Get shade degree of an image
     * @returns { PictureShadeDegree } shade degree of an image
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getShadeDegree(): PictureShadeDegree;

    /**
     * Get complexity degree of an image
     * @returns { PictureComplexityDegree } complexity degree of an image
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getComplexityDegree(): PictureComplexityDegree;

    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the highest saturation from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the color with the highest saturation. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getHighestSaturationColor(): Color;

    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the average color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Average color value. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getAverageColor(): Color;

    /**
     * Determine whether the color is black or white or gray
     * @param { long } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { long } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { long } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    isBlackOrWhiteOrGrayColor(color: long): boolean;

    /**
     * Gets the Morandi shadow color from the dominant color.
     *
     * @returns { Color } - returns the Morandi shadow color converted from the dominant color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getMorandiShadowColor(): Color;

    /**
     * Generates a stronger immersion color that merges with the background color and is deeper than
     * the background color.
     *
     * @returns { Color } - returns the stronger immersion color that both blends with the background
     *     and appears deeper than the background.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getDeepenImmersionColor(): Color;

    /**
     * Generates an immersive background color that creates an immersive visual effect.
     *
     * @returns { Color } - returns the immersive background color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveBackgroundColor(): Color;

    /**
     * Generates an immersive foreground color that creates an immersive visual effect for text and content.
     *
     * @returns { Color } - returns the immersive foreground color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveForegroundColor(): Color;

    /**
     * Discriminates the light and dark degree of the picture.
     *
     * @returns { PictureLightDegree } - returns the picture light and dark degree.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    discriminatePictureLightDegree(): PictureLightDegree;

    /**
     * Gets the reverse color based on the discriminatePictureLightDegree result.
     * When the picture light degree is EXTREMELY_LIGHT_COLOR_PICTURE, returns black color.
     * For other picture light degree types, returns white color.
     *
     * @returns { Color } - returns the reverse color for UI themes or contrast calculations.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getReverseColor(): Color;
  }

  /**
   * The picture light color degree.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 26.0.0 dynamic&static
   */
  enum PictureLightDegree {
    /**
     * Unknown light color degree picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE = 0,
 	 
    /**
     * Extremely light color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_LIGHT_COLOR_PICTURE = 1,

    /**
     * Light color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    LIGHT_COLOR_PICTURE = 2,
 	 
    /**
     * Dark color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    DARK_COLOR_PICTURE = 3,
 	 
    /**
     * Extremely dark color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_DARK_COLOR_PICTURE = 4,
 	 
    /**
     * Flowery picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    FLOWERY_PICTURE = 5,
 	 
    /**
     * Extremely flowery picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_FLOWERY_PICTURE = 6
 	}

  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class that stores the color picked.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface Color {

    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the red component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    red: int;

    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the green component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    green: int;

    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the blue component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    blue: int;

    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the alpha component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    alpha: int;
  }

  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a Filter instance based on a pixel map.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   * by decoding an image or directly created. For details, see Image Overview.
   * @returns { Filter } Head node of the filter linked list without any effect. If the operation fails, null is returned.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be
   * obtained by decoding an image or directly created. For details, see Image Overview.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by decoding
   *  an image or directly created. For details, see Image Overview.
   * @param { Array<double> } region - Region of the image from which the color is picked.
   *  The array consists of four elements, representing the left, top, right, and bottom positions of the image, respectively.
   *  The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the image correspond to 0,
   *  and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater than the first element,
   *  and the fourth element must be greater than the second element.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by
   *  decoding an image or directly created. For details, see Image Overview.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
  
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by decoding an
   *  image or directly created. For details, see Image Overview.PixelMap instance created by the image module. An instance can be
   *  obtained by decoding an image or directly created. For details, see Image Overview.
   * @param { Array<double> } region - Region of the image from which the color is picked.
   *  The array consists of four elements, representing the left, top, right, and bottom positions of the image, respectively.
   *  The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the image correspond to 0,
   *  and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater than the first element,
   *  and the fourth element must be greater than the second element.
   * @param { AsyncCallback<ColorPicker> } callback - Callback used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>, callback: AsyncCallback<ColorPicker>): void;

  /**
   * Enumerates the tile modes of the shader effect.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 14 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * Enumerates the shade degree of an image.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureShadeDegree {
    /**
     * The shade degree of the image is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_SHADE_DEGREE_PICTURE = 0,

    /**
     * The shade degree of the image is extremely light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_LIGHT_PICTURE = 1,

    /**
     * The shade degree of the image is very light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_LIGHT_PICTURE = 2,

    /**
     * The shade degree of the image is light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    LIGHT_PICTURE = 3,

    /**
     * The shade degree of the image is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_SHADE_PICTURE = 4,

    /**
     * The shade degree of the image is dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    DARK_PICTURE = 5,

    /**
     * The shade degree of the image is extremely dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_DARK_PICTURE = 6,
  }

  /**
   * Enumerates the complexity degree of an image.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureComplexityDegree {
    /**
     * The complexity degree of the image is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_COMPLEXITY_DEGREE_PICTURE = 0,

    /**
     * The complexity degree of the image is pure.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PURE_PICTURE = 1,

    /**
     * The complexity degree of the image is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_COMPLEXITY_PICTURE = 2,

    /**
     * The complexity degree of the image is very flowery.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_FLOWERY_PICTURE = 3,
  }

/**
 * The center of the elliptical mask, 
 * specifying where the ellipse mask is anchored in function 'ellipticalGradientBlur'.
 * @typedef { [double, double] } EllipticalMaskCenter
 * @syscap SystemCapability.Multimedia.Image.Core
 * @stagemodelonly
 * @systemapi
 * @since 23 dynamic&static
 */
type EllipticalMaskCenter = [
  double,
  double
];

/**
 * The major axis and minor axis of the elliptical mask
 * used in function 'ellipticalGradientBlur'.
 * @typedef { [double, double] } EllipticalMaskRadius
 * @syscap SystemCapability.Multimedia.Image.Core
 * @stagemodelonly
 * @systemapi
 * @since 23 dynamic&static
 */
type EllipticalMaskRadius = [
  double,
  double
];
}

export default effectKit;
