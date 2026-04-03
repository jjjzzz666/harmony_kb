/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import type common2D from './@ohos.graphics.common2D';
import type image from './@ohos.multimedia.image';
/*** if arkts static */
import { LinearGradientBlurOptions } from '@ohos.arkui.component';
/*** endif */

/**
 * @namespace uiEffect
 * @syscap SystemCapability.Graphics.Drawing
 * @since 12 dynamic
 */
/**
 * @namespace uiEffect
 * @syscap SystemCapability.Graphics.Drawing
 * @form
 * @since 22 dynamic
 * @since 23 static
 */
declare namespace uiEffect {

  /**
   * The Filter for Component.
   * @typedef Filter
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  interface Filter {
    /**
     * Set the edge pixel stretch effect of the Component.
     *
     * @param { Array<double> } stretchSizes
     * @param { TileMode } tileMode
     * @returns { Filter }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter;

    /**
     * Set blur effect of the Component.
     *
     * @param { double } blurRadius
     * @returns { Filter }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 23 static
     */
    blur(blurRadius: double): Filter;

    /**
     * Set waterRipple effect of the Component.
     *
     * @param { double } progress - Indicates the ripple progress. The value 1 indicates that ripples are displayed on all screens.
     * @param { int } waveCount - The number of waves when the water ripples. The maximum count of waves is 3, the minimum value is 1,  default is 2.
     * @param { double } x - Represents the X-axis position of center point  where the water ripple first appears on the screen.
     * @param { double } y - Represents the Y-axis position of center point  where the water ripple first appears on the screen.
     * @param { WaterRippleMode } rippleMode - Set the mode of water ripple,
     * 0 for mobile to desktop(Receive), 1 for mobile to desktop(Send), 2 for mobile to mobile, 3 for cross platform.
     * @returns { Filter } - Returns  water ripple Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter;

    /**
     * Set the fly in or fly out effect of the component.
     *
     * @param { double } degree - set the degree of fly in or fly out effect, value range [0, 1].
     * @param { FlyMode } flyMode - set the location of stretching when fly in or out
     * If the value is 0, the component keep same, else the value is 1, component are fully fly out or fly in.
     * @returns { Filter } - Returns  fly in fly out Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter;

    /**
     * Set distort effect of the component.
     *
     * @param { double } distortionK - set the degree of distort effect, value range [-1, 1].
     * If the value is 0, the component keep same,
     * if the value is less than 0, the component is barrel distortion,
     * if the value is more than 0, the component is pincushion distortion.
     * @returns { Filter } - Returns distort Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    distort(distortionK: double): Filter;

    /**
     * Adds the content radius gradient blurring effect for the current component.
     * The input parameter is the blurring radius.
     *
     * @param { double } radius - the blurring radius.
     *     The larger the blurring radius, the more blurring the content, and if the value is 0,
     *     the content blurring effect is not blurring.
     * @param { LinearGradientBlurOptions } gradientParam - the radius gradient blur options.
     * @returns { Filter } - Returns radius gradient blur Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter;

    /**
     * Sets the deformation effect controlled by bezier curves of the component.
     *
     * @param { Array<common2D.Point> } controlPoints - The bezier control points, 12 points needed.
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bezierWarp(controlPoints: Array<common2D.Point>): Filter;

    /**
     * Sets the content light filter.
     *
     * @param { common2D.Point3d } lightPosition
     * @param { common2D.Color } lightColor
     * @param { double } lightIntensity
     * @param { Mask } [displacementMap]
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter;

    /**
     * Sets the color gradient filter, may blend with alpha mask.
     *
     * @param { Array<Color> } colors
     * @param { Array<common2D.Point> } positions
     * @param { Array<double> } strengths
     * @param { Mask } [alphaMask]
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter;

    /**
     * Detects and glows edges of contents.
     *
     * @param { double } alpha
     * @param { Color } [color]
     * @param { Mask } [mask]
     * @param { boolean } [bloom]
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter;

    /**
     * Sets distort effect with displacement map.
     *
     * @param { Mask } displacementMap
     * @param { [double, double] } [factor]
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter;

    /**
     * Sets dispersion effect with mask map.
     *
     * @param { Mask } dispersionMap
     * @param { double } alpha
     * @param { [double, double] } [rFactor]
     * @param { [double, double] } [gFactor]
     * @param { [double, double] } [bFactor]
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter;

    /**
    * Applies a high dynamic range (HDR) brightness enhancement filter to the component.
    * 
    * @param { double } ratio - The brightness multiplier ratio (1.0 = original, >1.0 = brighter).
    * @returns { Filter } - Returns hdr brightness Filter.
    * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
    * @syscap SystemCapability.Graphics.Drawing
    * @systemapi
    * @since 20 dynamic
    * @since 23 static
    */
   /**
    * Applies a high dynamic range (HDR) brightness enhancement filter to the component.
    * 
    * @permission ohos.permission.HDR_BRIGHTNESS
    * @param { double } ratio - The brightness multiplier ratio (1.0 = original, >1.0 = brighter).
    * @returns { Filter } - Returns hdr brightness Filter.
    * @throws { BusinessError } 201 - Permission verification failed.
    *     The application does not have the permission required to call the API.
    * @syscap SystemCapability.Graphics.Drawing
    * @since 24 dynamic&static
    */
    hdrBrightnessRatio(ratio: double): Filter;

    /**
     * Sets variable radius blur effect with radius map.
     * 
     * @param { double } radius - the blurring radius. The larger the blurring radius, the more blurring the content,
     *     and if the value is 0, the content blurring effect is not blurring.
     * @param { Mask } radiusMap - the alpha of the mask determines the degree of blurring.
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    variableRadiusBlur(radius: double, radiusMap: Mask): Filter;

    /**
     * Generates lighting effects from mask and directional light.
     * 
     * @param { common2D.Point3d } direction - Direction of light
     * @param { Color } color - Color of light
     * @param { double } intensity - Intensity of light
     * @param { Mask } [mask] - Mask, as a displacement map that affects lighting effects
     * @param { double } [factor] - Mask scale factor, used to scale the mask channel values
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter;

    /**
     * Applies Transition with alpha mask
     * 
     * @param { Mask } alphaMask - Animatable mask object
     * @param { double } [factor] - The coefficient of the mask, defaulting to 1.0f [0~1]
     * @param { boolean } [inverse] - Transition mode, default is fasle (true, false)
     * @returns { Filter } - Returns the Filter that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter;
  }

  /**
   * TileMode enumeration description
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * Clamp mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Decal mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * WaterRippleMode enumeration description
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum WaterRippleMode {
    /**
     * SMALL2MEDIUM_RECV mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_RECV = 0,

    /**
     * SMALL2MEDIUM_SEND mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_SEND = 1,

    /**
     * SMALL2SMALL mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2SMALL = 2,

    /**
     * MINI_RECV mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    MINI_RECV = 3,
  }

  /**
   * FlyMode enumeration description
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum FlyMode {
    /**
     * BOTTOM fly mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM = 0,

    /**
     * TOP fly mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TOP = 1,
  }

  /**
   * The VisualEffect of Component.
   * @typedef VisualEffect
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * The VisualEffect of Component.
   * @typedef VisualEffect
   * @syscap SystemCapability.Graphics.Drawing
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  interface VisualEffect {
    /**
    * A backgroundColorEffect effect is added to the Component.
    * @param { BrightnessBlender } blender - The blender to blend backgroundColor.
    * @returns { VisualEffect } VisualEffects for the current effect have been added.
    * @syscap SystemCapability.Graphics.Drawing
    * @systemapi
    * @since 12 dynamic
     */
    /**
    * A backgroundColorEffect effect is added to the Component.
    * @param { BrightnessBlender } blender - The blender to blend backgroundColor.
    * @returns { VisualEffect } VisualEffects for the current effect have been added.
    * @syscap SystemCapability.Graphics.Drawing
    * @systemapi
    * @form
    * @since 22 dynamic
    * @since 23 static
    */
    backgroundColorBlender(blender: BrightnessBlender): VisualEffect;

    /**
     * Sets the border light effect.
     *
     * @param { common2D.Point3d } lightPosition
     * @param { common2D.Color } lightColor
     * @param { double } lightIntensity
     * @param { double } borderWidth
     * @returns { VisualEffect } - Returns the VisualEffect that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect;

    /**
     * Sets the color gradient effect, may blend with alpha mask.
     *
     * @param { Array<Color> } colors - array of colors.
     * @param { Array<common2D.Point> } positions - the centers of colors.
     * @param { Array<double> } strengths - the weights of color Mixing.
     * @param { Mask } [alphaMask] - the mask determines the alpha of the effect.
     * @returns { VisualEffect } - Returns the VisualEffect that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect;

    /**
     * Sets the liquid material effect.
     *
     * @param { LiquidMaterialEffectParam } param - the liquid material effect parameters.
     * @param { Mask } useEffectMask - the mask determines the use effect flag.
     * @param { Mask } [distortMask] - the mask determines the distort of the effect.
     * @param { BrightnessParam } [brightnessParam] - the background brightness params of material effect.
     * @returns { VisualEffect } - Returns the VisualEffect that the current effect have been added.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect;
  }

  /**
   * The parameters of brightness.
   * @typedef BrightnessParam
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessParam {
    /**
     * Defines rate of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rate : double;
  
    /**
     * Defines lightUpDegree of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    lightUpDegree : double;
  
    /**
     * Defines cubicCoeff of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    cubicCoeff : double;
  
    /**
     * Defines quadCoeff of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    quadCoeff : double;

    /**
     * Defines saturation of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    saturation : double;
  
    /**
     * Defines positive RGB of brightness.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    posRgb : [double, double, double];
  
    /**
     * Defines negative RGB of brightness.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    negRgb : [double, double, double];
  
    /**
     * Defines fraction of brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    fraction : double;
  }

  /**
   * The parameters of liquid material effect.
   * @typedef LiquidMaterialEffectParam
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface LiquidMaterialEffectParam {
    /**
     * Defines enable switch for material effect.
     *
     * @type { boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    enable : boolean;

    /**
     * Defines distort progress for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortProgress : double;

    /**
     * Defines distort factor for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortFactor : double;

    /**
     * Defines ripple animation progress for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rippleProgress : double;

    /**
     * Defines ripple animation position for material effect.
     *
     * @type { ?Array<[double, double]> }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    ripplePosition?: Array<[double, double]>;

    /**
     * Defines refraction factor for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    refractionFactor : double;

    /**
     * Defines reflection factor for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    reflectionFactor : double;

    /**
     * Defines material factor for material effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    materialFactor : double;

    /**
     * Defines tint color for material effect.
     *
     * @type { [double, double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    tintColor : [double, double, double, double];

  }

  /**
   * Defines the blending effect.
   * @typedef { BrightnessBlender }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 13
   */  
  /**
   * Defines the blending effect.
   * @typedef { BrightnessBlender | HdrBrightnessBlender }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender;

  /**
   * The Blender of backgroundColorEffect.
   * @typedef BrightnessBlender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * The Blender of backgroundColorEffect.
   * @typedef BrightnessBlender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessBlender {
    /**
     * Defines third-order rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines third-order rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    cubicRate: double;

    /**
     * Defines second-order rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines second-order rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    quadraticRate: double;

    /**
     * Defines linear rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines linear rate for grayscale adjustment.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    linearRate: double;

    /**
     * Defines grayscale adjustment degree.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines grayscale adjustment degree.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    degree: double;

    /**
     * Defines the reference saturation for brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines the reference saturation for brightness.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    saturation: double;

    /**
     * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    positiveCoefficient: [double, double, double];

    /**
     * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [double, double, double] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    negativeCoefficient: [double, double, double];

    /**
     * Defines the blending fraction for brightness effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     */
    /**
     * Defines the blending fraction for brightness effect.
     *
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    fraction: double;
  }

  /**
   * The HDR enabled Blender of backgroundColorEffect.
   * @extends BrightnessBlender
   * @typedef HdrBrightnessBlender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrBrightnessBlender extends BrightnessBlender {}

  /**
   * The Color of Light.
   * @typedef Color
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color {
    /**
     * Red component of color.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;
    /**
     * Green component of color.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;
    /**
     * Blue component of color
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;
    /**
     * Alpha component of color.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
  }

  /**
   * Defines the mask for Filter or VisualEffect.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class Mask {
    /**
     * Create a Mask of ripple.
     * @param { common2D.Point } center
     * @param { double } radius
     * @param { double } width
     * @param { double } [offset]
     * @returns { Mask }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask;

    /**
     * Create a Mask of pixelmap.
     * @param { image.PixelMap } pixelMap
     * @param { common2D.Rect } srcRect
     * @param { common2D.Rect } dstRect
     * @param { Color } [fillColor]
     * @returns { Mask }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask;
    
    /**
     * Create a Mask of pixelMap to use directly.
     * @param { image.PixelMap } pixelMap - The pixelMap of PixelMapMask.
     * @returns { Mask } - Returns pixelMap mask.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap): Mask;

    /**
     * Create a Mask of radial gradient.
     * @param { common2D.Point } center
     * @param { double } radiusX
     * @param { double } radiusY
     * @param { Array<[double, double]> } gradients
     * @returns { Mask }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask;

    /**
     * Create a Mask of single wave gradient.
     * @param { common2D.Point } center - The wave source center of the single-wave mask.
     * @param { double } width - The circular ring width of the single-wave mask.
     * @param { double } propagationRadius - The outer diffusion radius of the single-wave mask.
     * @param { double } blurRadius - The blur radius of the single-wave mask.
     * @param { double } [turbulenceStrength] - The turbulent displacement intensity of the single-wave mask.
     * @returns { Mask } - Returns wave gradient mask.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask;
    
    /**
     * Create a Mask of use effect.
     * @param { boolean } useEffect - The use effect flag of UseEffectMask.
     * @returns { Mask } - Returns use effect mask.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createUseEffectMask(useEffect: boolean): Mask;
  }

  /**
   * Create a Filter to add multiple effects to the component.
   * @returns { Filter } Returns the head node of Filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  function createFilter(): Filter;

  /**
   * Create a VisualEffect to add multiple effects to the component.
   * @returns { VisualEffect } Returns the head node of visualEffect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Create a VisualEffect to add multiple effects to the component.
   * @returns { VisualEffect } Returns the head node of visualEffect.
   * @syscap SystemCapability.Graphics.Drawing
   * @form
   * @since 24 dynamic&static
   */
  function createEffect(): VisualEffect;

  /**
   * Create a BrightnessBlender, which is used to adjust the brightness of UI components.
   * @param { BrightnessBlenderParam } param - The brightness blender parameters.
   * @returns { BrightnessBlender } Returns the blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Create a BrightnessBlender, which is used to adjust the brightness of UI components.
   * @param { BrightnessBlenderParam } param - The brightness blender parameters.
   * @returns { BrightnessBlender } Returns the blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender;

  /**
   * Create an HdrBrightnessBlender, which is used to adjust the HDR brightness of UI components.
   * @param { BrightnessBlenderParam } param - The brightness blender parameters.
   * @returns { HdrBrightnessBlender } Returns the blender.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender;
}

/**
 * The parameters of brightness blender.
 * @typedef BrightnessBlenderParam
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @since 12 dynamic
 */
/**
 * The parameters of brightness blender.
 * @typedef BrightnessBlenderParam
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @form
 * @since 22 dynamic
 * @since 23 static
 */
export declare interface BrightnessBlenderParam {
  /**
   * Defines third-order rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines third-order rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  cubicRate: double;

  /**
   * Defines second-order rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines second-order rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  quadraticRate: double;

  /**
   * Defines linear rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines linear rate for grayscale adjustment.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  linearRate: double;

  /**
   * Defines grayscale adjustment degree.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines grayscale adjustment degree.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  degree: double;

  /**
   * Defines the reference saturation for brightness.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines the reference saturation for brightness.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  saturation: double;

  /**
   * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [double, double, double] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [double, double, double] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  positiveCoefficient: [double, double, double];

  /**
   * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [double, double, double] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [double, double, double] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  negativeCoefficient: [double, double, double];

  /**
   * Defines the blending fraction for brightness effect.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   */
  /**
   * Defines the blending fraction for brightness effect.
   *
   * @type { double }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form
   * @since 22 dynamic
   * @since 23 static
   */
  fraction: double;
}

export default uiEffect;