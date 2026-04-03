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
 * @file Defines 3D component
 * @kit ArkUI
 */

import { Scene } from './../../@ohos.graphics.scene';
import { ResourceStr, Dimension } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * The enum of model type
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 */
export declare enum ModelType {
  /**
   * Render to texture, gpu would compose this texture to screen.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  TEXTURE = 0,

  /**
   * Render to surface, special hardware would compose this surface to screen.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  SURFACE = 1
}

/**
 * Scene options used by 3D scene control
 *
 * @interface SceneOptions
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 */
export declare interface SceneOptions {
  /**
   * ResourceStr type for 3D rendering, Scene type for 3d scene controlling
   *
   * @type { ?(ResourceStr | Scene) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  scene?: ResourceStr | Scene;

  /**
   * Scene type when 3D rendering
   *
   * @type { ?ModelType }
   * @default ModelType.SURFACE
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  modelType?: ModelType;
}

/**
 * The Component3DAttribute.
 * 
 * @extends CommonMethod
 * @interface Component3DAttribute
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 * @noninterop
 */
export declare interface Component3DAttribute extends CommonMethod {
  /**
   * Load 3D model environment resource.
   *
   * @param { ResourceStr | undefined } uri - The path of 3D environment resource
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default environment(uri: ResourceStr | undefined): this;

  /**
   * Set render pipeline of 3D scene render.
   *
   * @param { ResourceStr | undefined } uri - The path of Render pipeline config file
   * @param { boolean | undefined } selfRenderUpdate - Trigger rendering every frame
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default customRender(uri: ResourceStr | undefined, selfRenderUpdate: boolean | undefined): this;

  /**
   * Load shader uri.
   *
   * @param { ResourceStr | undefined } uri - The path of custom shader
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shader(uri: ResourceStr | undefined): this;

  /**
   * Load shader texture uri.
   *
   * @param { ResourceStr | undefined } uri - The path of texture used by shader
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shaderImageTexture(uri: ResourceStr | undefined): this;

  /**
   * Buffer input for shader animation
   *
   * @param { Array<double> | undefined } buffer - The uniform buffer of shader input
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shaderInputBuffer(buffer: Array<double> | undefined): this;

  /**
   * Set render width resolution.
   *
   * @param { Dimension | undefined } value - Width of gpu render target,
   *     target would upscale or downscale to view's width.
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default renderWidth(value: Dimension | undefined): this;

  /**
   * Set render height resolution.
   *
   * @param { Dimension | undefined } value - Height of gpu render target,
   *     target would upscale or downscale to view's height.
   * @returns { Component3DAttribute } The attribute of the component3D
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default renderHeight(value: Dimension | undefined): this;

  /**
   * Set the attribute modifier
   *
   * @param { AttributeModifier<Component3DAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<Component3DAttribute>
      | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Component3D.
 *
 * @param { SceneOptions } [sceneOptions] - The 3D scene controller
 * @param { CustomBuilder } [content_] - container
 * @returns { Component3DAttribute }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Component3D(
    sceneOptions?: SceneOptions,
    content_?: CustomBuilder,
): Component3DAttribute
