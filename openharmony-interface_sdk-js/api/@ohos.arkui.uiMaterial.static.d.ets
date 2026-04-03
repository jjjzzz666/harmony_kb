'use static'
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
/**
 * Define the namespace for uiMaterial, which contains the definitions of HarmonyOS-style material objects.
 *
 * @namespace uiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
declare namespace uiMaterial {
  /**
   * Enum of the type of material.
   *
   * @enum { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export enum MaterialType {
    /**
     * Material type with no effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * Material type for semitransparent style. It includes predefined backgroundColor, border, and shadow effects.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    SEMI_TRANSPARENT = 1,
  }

  /**
   * Define the interface containing various material parameters.
   *
   * @interface MaterialOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export interface MaterialOptions {
    /**
     * The type of the material.
     *
     * @type { ?MaterialType }
     * @default uiMaterial.MaterialType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    type?: MaterialType,
  }

  /**
   * Define the class of material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export class Material {
    /**
     * Constructor of material class.
     *
     * @param { MaterialOptions } [options] - the options to construct a material.
     *     <br>Default value:{type:uiMaterial.MaterialType.NONE}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: MaterialOptions);
  }
}

/**
 * export uiMaterial namespace.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export default uiMaterial;