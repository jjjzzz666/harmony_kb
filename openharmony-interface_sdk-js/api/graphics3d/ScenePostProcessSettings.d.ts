/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file Defines 3D post process related interfaces
 * @kit ArkGraphics3D
 */

/**
 * The enum of tone mapping type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum ToneMappingType {
  /**
   * The tone mapping type is ACES.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES = 0,

  /**
   * The tone mapping type is ACES_2020.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES_2020 = 1,

  /**
   * The tone mapping type is FILMIC.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  FILMIC = 2,
}

/**
 * Defines tone mapping parameters.
 *
 * @typedef ToneMappingSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ToneMappingSettings {
  /**
   * Type of the tone mapping.
   *
   * @type { ?ToneMappingType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  type?: ToneMappingType;

  /**
   * Exposure of the tone mapping.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  exposure?: double;
}

/**
 * Defines bloom parameters.
 * 
 * @typedef BloomSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface BloomSettings {
  /**
   * Bloom threshold hard.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdHard?: double;

  /**
   * Bloom threshold soft.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdSoft?: double;

  /**
   * Scaling factor. Controls the amount of scaling and bloom spread.
   * Reduces the downscale and upscale steps.
   * Values 0 - 1. Value of 0.5 halves the scale steps.
   * 
   * @type { ?double}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scaleFactor?: double;

  /**
   * Scatter (amount of bloom spread). (1.0 full spread / default).
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scatter?: double;
}

/**
 * Defines vignette parameters.
 *
 * @typedef VignetteSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface VignetteSettings {
  /**
   * Controls the roundness of vignette between [0, 1].
   * Lower value will make the vignette effect more square.
   *
   * @type { ?double }
   * @default sqrt(0.5)
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  roundness?: double;

  /**
   * Controls how strong the dark or bright edges are.
   * When intensity > 0, the edges darken and the center brightens, creating a classic vignette effect.
   * When intensity < 0, the center darkens and the edges brighten, producing an reverse vignette effect.
   *
   * @type { ?double }
   * @default 0.4
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  intensity?: double;
}

/**
 * Defines color fringe parameters.
 *
 * @typedef ColorFringeSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface ColorFringeSettings {
  /**
   * Controls the strength of color fringe.
   *
   * @type { ?double }
   * @default 0.2
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  intensity?: double;
}

/**
 * Defines post processing settings.
 *
 * @typedef PostProcessSettings 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface PostProcessSettings {
  /**
   * Tone mapping settings of the post processing settings.
   *
   * @type { ?ToneMappingSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  toneMapping?: ToneMappingSettings;

  /**
   * Bloom settings of the post processing settings
   * 
   * @type { ?BloomSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  bloom?: BloomSettings;

  /**
   * Vignette settings of the post processing settings
   *
   * @type { ?VignetteSettings }
   * @default vignette enabled by default
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  vignette?: VignetteSettings;

  /**
   * Color fringe settings of the post processing settings
   *
   * @type { ?ColorFringeSettings }
   * @default colorFringe enabled by default
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  colorFringe?: ColorFringeSettings;
}
