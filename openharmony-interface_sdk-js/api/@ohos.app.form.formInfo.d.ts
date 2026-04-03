/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import Want from './@ohos.app.ability.Want';

/**
 * interface of formInfo.
 *
 * @namespace formInfo
 * @syscap SystemCapability.Ability.Form
 * @since 9
 */
/**
 * interface of formInfo.
 *
 * @namespace formInfo
 * @syscap SystemCapability.Ability.Form
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace formInfo {
  /**
   * Provides information about a form.
   *
   * @typedef FormInfo
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides information about a form.
   *
   * @typedef FormInfo
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormInfo {
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Obtains the display name of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    displayName: string;

    /**
     * Obtains the displayName resource id of this form.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    displayNameId: int;

    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * Obtains the description id of this form.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Obtains the description id of this form.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    descriptionId: int;

    /**
     * Obtains the type of this form. Currently, JS forms are supported.
     *
     * @type { FormType }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the type of this form. Currently, JS forms are supported.
     *
     * @type { FormType }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    type: FormType;

    /**
     * Obtains the JS component name of this JS form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the JS component name of this JS form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    jsComponentName: string;

    /**
     * Obtains the color mode of this form.
     *
     * @type { ColorMode }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the color mode of this form.
     *
     * @type { ColorMode }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     */
    colorMode: ColorMode;

    /**
     * Checks whether this form is a default form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Checks whether this form is a default form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isDefault: boolean;

    /**
     * Obtains the updateEnabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the updateEnabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    updateEnabled: boolean;

    /**
     * Obtains whether notify visible of this form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains whether notify visible of this form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    formVisibleNotify: boolean;

    /**
     * Obtains the scheduledUpdateTime.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the scheduledUpdateTime.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    scheduledUpdateTime: string;

    /**
     * Obtains the form config ability about this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the form config ability about this form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    formConfigAbility: string;

    /**
     * Obtains the updateDuration.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the updateDuration.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    updateDuration: int;

    /**
     * Obtains the default grid style of this form.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the default grid style of this form.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    defaultDimension: int;

    /**
     * Obtains the grid styles supported by this form.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the grid styles supported by this form.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    supportDimensions: Array<int>;

    /**
     * Obtains the custom data defined in this form.
     *
     * @type { object }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the custom data defined in this form.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    customizeData: Record<string, string>;

    /**
     * Obtains whether this form is a dynamic form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Obtains whether this form is a dynamic form.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isDynamic: boolean;

    /**
     * Indicates whether the form can be set as a transparent background
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    transparencyEnabled: boolean;

    /**
     * Obtains the shape supported by this form.
     *
     * @type { Array<int> }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    supportedShapes: Array<int>;

    /**
     * Indicates the form previewImage IDs map corresponds to the \"supportDimensions\".
     *
     * @type { ?Array<int> }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    readonly previewImages?: Array<int>;

    /**
     * Indicates whether the form uses a blur background provided by the form host.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly enableBlurBackground?: boolean;

    /**
     * Obtains the rendering mode of the form.
     *
     * @type { ?RenderingMode }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly renderingMode?: RenderingMode;

    /**
     * Indicates the fun interaction form params
     *
     * @type { ?FunInteractionParams }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly funInteractionParams?: FunInteractionParams;

    /**
     * Indicates the scene animation form params
     *
     * @type { ?SceneAnimationParams }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly sceneAnimationParams?: SceneAnimationParams;

    /**
     * Obtains the resizable of the form.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly resizable?: boolean;

    /**
     * Obtains the group id of the form.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly groupId?: string;

    /**
     * Obtains whether the form is template form.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly isTemplateForm?: boolean;

    /**
     * Obtains whether the form supports standby.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isStandbySupported?: boolean;

    
    /**
     * Obtains whether the form is adapted for standby.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isStandbyAdapted?: boolean;

    /**
     * Obtains whether the form is privacy sensitive.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly isPrivacySensitive?: boolean;
  }

  /**
   * Rendering mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum RenderingMode {
    /**
     * Auto color mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    AUTO_COLOR = 0,
    /**
     * Full color mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    FULL_COLOR = 1,
    /**
     * Single color mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SINGLE_COLOR = 2
  }

  /**
   * Type of form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Type of form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormType {
    /**
     * JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * JS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    JS = 1,

    /**
     * eTS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * eTS form.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    eTS = 2
  }

  /**
   * Color mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Color mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 20
   */
  enum ColorMode {
    /**
     * Automatic mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Automatic mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     */
    MODE_AUTO = -1,

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     */
    MODE_DARK = 0,

    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Light mode.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     */
    MODE_LIGHT = 1
  }

  /**
   * Provides state information about a form.
   *
   * @typedef FormStateInfo
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides state information about a form.
   *
   * @typedef FormStateInfo
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormStateInfo {
    /**
     * Obtains the form state.
     *
     * @type { FormState }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the form state.
     *
     * @type { FormState }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    formState: FormState;

    /**
     * Obtains the want form .
     *
     * @type { Want }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Obtains the want form .
     *
     * @type { Want }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    want: Want;
  }

  /**
   * Provides state about a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Provides state about a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormState {
    /**
     * Indicates that the form status is unknown due to an internal error.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form status is unknown due to an internal error.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * Indicates that the form is in the default state.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form is in the default state.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Indicates that the form is ready.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates that the form is ready.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    READY = 1
  }

  /**
   * Form update reason.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FormUpdateReason {
    /**
     * The reason for the form update is unknown.
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    UNKNOWN = -1,
    /**
     * The reason for the form update is node reuse.
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FORM_NODE_REUSE = 0
  }

  /**
   * Parameter of form.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Parameter of form.
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormParam {
    /**
     * Indicates the key specifying the ID of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       IDENTITY_KEY: "119476135"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the ID of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       IDENTITY_KEY: "119476135"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    IDENTITY_KEY = "ohos.extra.param.key.form_identity",

    /**
     * Indicates the key specifying the grid style of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       DIMENSION_KEY: FormDimension.Dimension_1_2
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the grid style of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       DIMENSION_KEY: FormDimension.Dimension_1_2
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DIMENSION_KEY = "ohos.extra.param.key.form_dimension",

    /**
     * Indicates the key specifying the name of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       NAME_KEY: "formName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       NAME_KEY: "formName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    NAME_KEY = "ohos.extra.param.key.form_name",

    /**
     * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
     * represented as
     * want: {
     *   "parameters": {
     *       MODULE_NAME_KEY: "formEntry"
     *    }
     * }
     * This constant is mandatory.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
     * represented as
     * want: {
     *   "parameters": {
     *       MODULE_NAME_KEY: "formEntry"
     *    }
     * }
     * This constant is mandatory.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    MODULE_NAME_KEY = "ohos.extra.param.key.module_name",

    /**
     * Indicates the key specifying the width of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       WIDTH_KEY: 800
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the width of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       WIDTH_KEY: 800
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WIDTH_KEY = "ohos.extra.param.key.form_width",

    /**
     * Indicates the key specifying the height of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       HEIGHT_KEY: 400
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the height of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       HEIGHT_KEY: 400
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    HEIGHT_KEY = "ohos.extra.param.key.form_height",

    /**
     * Indicates the key specifying whether a form is temporary, which is represented as
     * want: {
     *   "parameters": {
     *       TEMPORARY_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying whether a form is temporary, which is represented as
     * want: {
     *   "parameters": {
     *       TEMPORARY_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    TEMPORARY_KEY = "ohos.extra.param.key.form_temporary",

    /**
     * Indicates the key specifying the name of the bundle to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       BUNDLE_NAME_KEY: "bundleName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the bundle to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       BUNDLE_NAME_KEY: "bundleName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    BUNDLE_NAME_KEY = "ohos.extra.param.key.bundle_name",

    /**
     * Indicates the key specifying the name of the ability to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       ABILITY_NAME_KEY: "abilityName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the key specifying the name of the ability to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       ABILITY_NAME_KEY: "abilityName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ABILITY_NAME_KEY = "ohos.extra.param.key.ability_name",

    /**
     * Indicates the key specifying whether a form type is theme, which is represented as
     * want: {
     *   "parameters": {
     *       THEME_KEY: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    THEME_KEY = 'ohos.extra.param.key.form_is_theme',

    /**
     * Indicates the key specifying the the device ID, which is represented as
     * want: {
     *   "parameters": {
     *       DEVICE_ID_KEY : "EFC11C0C53628D8CC2F8CB5052477E130D075917034613B9884C55CD22B3DEF2"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE_ID_KEY = "ohos.extra.param.key.device_id",

    /**
     * Indicates the key specifying the launch reason of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       LAUNCH_REASON_KEY: LaunchReason.FORM_DEFAULT
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the key specifying the launch reason of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       LAUNCH_REASON_KEY: LaunchReason.FORM_DEFAULT
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    LAUNCH_REASON_KEY = "ohos.extra.param.key.form_launch_reason",

    /**
     * Indicates the key specifying the custom data of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       PARAM_FORM_CUSTOMIZE_KEY: {
     *          "key": "userData"
     *       }
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the key specifying the custom data of the form to be obtained, which is represented as
     * want: {
     *   "parameters": {
     *       PARAM_FORM_CUSTOMIZE_KEY: {
     *          "key": "userData"
     *       }
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PARAM_FORM_CUSTOMIZE_KEY = "ohos.extra.param.key.form_customize",

    /**
     * Indicates the key specifying the form location, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_LOCATION_KEY: FormLocation.DESKTOP
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_LOCATION_KEY = 'ohos.extra.param.key.form_location',

    /**
     * Indicates the key specifying the form rendering mode, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_RENDERING_MODE_KEY: FormRenderingMode.SINGLE_COLOR
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 11
     */
    /**
     * Indicates the key specifying the form rendering mode, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_RENDERING_MODE_KEY: FormRenderingMode.SINGLE_COLOR
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_RENDERING_MODE_KEY = 'ohos.extra.param.key.form_rendering_mode',

    /**
     * Indicates the key specifying the inverse of the host background color, which is represented as
     * want: {
     *   "parameters": {
     *       HOST_BG_INVERSE_COLOR_KEY: "#FF000000"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    HOST_BG_INVERSE_COLOR_KEY = 'ohos.extra.param.key.host_bg_inverse_color',

    /**
     * Indicates the key specifying the user granted permission name, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_PERMISSION_NAME_KEY: "permissionName"
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_PERMISSION_NAME_KEY = 'ohos.extra.param.key.permission_name',

    /**
     * Indicates the key specifying whether the user granted, which is represented as
     * want: {
     *   "parameters": {
     *       FORM_PERMISSION_GRANTED_KEY: true
     *    }
     * }.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_PERMISSION_GRANTED_KEY = 'ohos.extra.param.key.permission_granted',

    /**
     * Indicates the key specifying the original form id, used in conjunction with LaunchReason.FORM_SIZE_CHANGE.
     * which is represented as
     * want: {
     *   "parameters": {
     *       ORIGINAL_FORM_KEY: "119476135"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ORIGINAL_FORM_KEY = 'ohos.extra.param.key.original_form_id',

    /**
     * Indicates the key specifying the edit form id, used in conjunction with LaunchReason.FORM_EDIT_PREVIEW.
     * which is represented as
     * want: {
     *   "parameters": {
     *       EDIT_FORM_KEY: "119476135"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    EDIT_FORM_KEY = 'ohos.extra.param.key.edit_form_id',

    /**
     * Indicates the key specifying the flag whether show single form in form manage page.
     * which is represented as
     * want: {
     *   "parameters": {
     *       FORM_MANAGER_SHOW_SINGLE_FORM: true
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    FORM_MANAGER_SHOW_SINGLE_FORM = 'ohos.extra.param.key.form_manager_show_single_form',

    /**
     * Indicates the key specifying the template form detail id.
     * which is represented as
     * want: {
     *   "parameters": {
     *       TEMPLATE_FORM_DETAIL_ID: "119476135"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DETAIL_ID = 'ohos.extra.param.key.template_form_detail_id',
      
    /**
     * Indicates the key specifying the form data of the template form.
     * which is represented as
     * want: {
     *   "parameters": {
     *       TEMPLATE_FORM_DATA: "formData"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DATA = 'ohos.extra.param.key.template_form_data',

    /**
     * Indicates the key specifying the display name of the form.
     * which is represented as
     * want: {
     *   "parameters": {
     *       TEMPLATE_FORM_DISPLAY_NAME: "formDisplayName"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DISPLAY_NAME = 'ohos.extra.param.key.template_form_display_name',
    
    /**
     * Indicates the key specifying the description of the form.
     * which is represented as
     * want: {
     *   "parameters": {
     *       TEMPLATE_FORM_DESCRIPTION: "formDescription"
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 23 dynamic&static
     */
    TEMPLATE_FORM_DESCRIPTION = 'ohos.extra.param.key.template_form_description',

    /**
     * Indicates the key specifying the reason for the form update.
     * which is represented as
     * want: {
     *   "parameters": {
     *       UPDATE_FORM_REASON_KEY: FormUpdateReason.FORM_NODE_REUSE
     *    }
     * }
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    UPDATE_FORM_REASON_KEY = 'ohos.extra.param.key.update_form_reason'
  }

  /**
   * The optional options used as filters to ask
   * getFormsInfo to return formInfos from only forms that match the options.
   *
   * @typedef FormInfoFilter
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * The optional options used as filters to ask
   * getFormsInfo to return formInfos from only forms that match the options.
   *
   * @typedef FormInfoFilter
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormInfoFilter {
    /**
     * optional bundleName that used to ask getFormsInfo to return
     * form infos with the same bundleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * optional moduleName that used to ask getFormsInfo to return
     * form infos with the same moduleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * optional moduleName that used to ask getFormsInfo to return
     * form infos with the same moduleName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName?: string;

    /**
     * optional supportedDimensions that used to ask getFormsInfo to return
     * form infos with the same supportedDimensions.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    supportedDimensions?: Array<int>;

    /**
     * optional supportedShapes that used to ask getFormsInfo to return
     * form infos with the same supportedShapes.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    supportedShapes?: Array<int>;
  }

  /**
   * Defines the FormDimension enum.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * Defines the FormDimension enum.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormDimension {
    /**
     * 1 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 1 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    Dimension_1_2 = 1,

    /**
     * 2 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 2 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    Dimension_2_2 = 2,

    /**
     * 2 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    Dimension_2_4 = 3,

    /**
     * 4 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 4 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    Dimension_4_4 = 4,

    /**
     * 2 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * 2 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     */
    Dimension_2_1,

    /**
     * 1 x 1 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DIMENSION_1_1 = 6,

    /**
     * 6 x 4 form
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DIMENSION_6_4 = 7,

    /**
     * 2 x 3 form used for wearable devices
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DIMENSION_2_3 = 8,

    /**
     * 3 x 3 form used for wearable devices
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DIMENSION_3_3 = 9
  }

  /**
   * Defines the FormShape enum.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum FormShape {
    /**
     * The rect shape.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECT = 1,

    /**
     * The circle shape.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CIRCLE = 2
  }

  /**
   * The visibility of a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  /**
   * The visibility of a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum VisibilityType {
    /**
     * Indicates the type of the form type is unknown.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to unknown.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the type of the form type is unknown.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to unknown.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * Indicates the type of the form is visible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to visible.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the type of the form is visible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to visible.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    FORM_VISIBLE = 1,
    /**
     * Indicates the type of the form is invisible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to invisible.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    /**
     * Indicates the type of the form is invisible.
     * Often used as a condition variable in function OnVisibilityChange to specify actions only on forms that are
     * changing to invisible.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    FORM_INVISIBLE = 2
  }

  /**
   * Indicates the launch reason of a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @since 10
   */
  /**
   * Indicates the launch reason of a form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum LaunchReason {
    /**
     * Indicates the launch reason of a form is default.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the launch reason of a form is default.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    FORM_DEFAULT = 1,
    /**
     * Indicates the launch reason of a form is share.
     *
     * @syscap SystemCapability.Ability.Form
     * @since 10
     */
    /**
     * Indicates the launch reason of a form is share.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    FORM_SHARE = 2,
    /**
     * Indicates the launch reason of a form is change size.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FORM_SIZE_CHANGE = 3,
  }

  /**
   * The result of publish form.
   *
   * @typedef PublishFormResult
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface PublishFormResult {
    /**
     * The error code.
     *
     * @type { PublishFormErrorCode }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    code: PublishFormErrorCode;

    /**
     * The message.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * The error code of publish form.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum PublishFormErrorCode {
    /**
     * Publish form success.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * Host has no space to publish form.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NO_SPACE = 1,

    /**
     * Check param failed.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PARAM_ERROR = 2,

    /**
     * Internal error occurs during form processing.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    INTERNAL_ERROR = 3
  }

  /**
   * Information about a running form.
   *
   * @typedef FormProviderFilter
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface FormProviderFilter {
    /**
     * Obtains the bundle name of the provider application.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Obtains the form name of the provider application form.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    formName ?: string;

    /**
     * Obtains the module name of the provider application module.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    moduleName ?: string;

    /**
     * Obtains the ability name of the provider application module.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    abilityName ?: string;

    /**
     * Indicates whether to include unused form.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    isUnusedIncluded?: boolean;
  }

  /**
   * The class of a running form information.
   *
   * @typedef RunningFormInfo
   * @syscap SystemCapability.Ability.Form
   * @systemapi hide this for inner system use
   * @since 10
   */
  /**
   * The class of a running form information.
   *
   * @typedef RunningFormInfo
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface RunningFormInfo {
    /**
     * Obtains the id of the this form.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the id of the this form.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formId: string;

    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the bundle name of the application to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * Obtains the bundle name of the form host application.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostBundleName: string;

    /**
     * The location of this form.
     *
     * @type { FormLocation }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * The location of this form.
     *
     * @type { FormLocation }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formLocation: FormLocation;

    /**
     * Obtains the visibility of this form.
     *
     * @type { VisibilityType }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    readonly visibilityType: VisibilityType;

    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the name of the application module to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the class name of the ability to which this form belongs.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the name of this form.
     *
     * @type { string }
     * @readonly
     * @default -
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formName: string;

    /**
     * Obtains the grid style of this form.
     *
     * @type { int }
     * @default -
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 10
     */
    /**
     * Obtains the grid style of this form.
     *
     * @type { int }
     * @default -
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly dimension: int;

    /**
     * Obtains the stage of form use.
     *
     * @type { FormUsageState }
     * @default FormUsageState.USED
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly formUsageState: FormUsageState;

    /**
     * Obtains the description of this form.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly formDescription: string;

    /**
     * Obtains the extra data of the this form.
     *
     * @type { ?Record<string, Object> }
     * @default -
     * @readonly
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly extraData?: Record<string, Object>;
  }

  /**
   * The stage of form use.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum FormUsageState {
    /**
     * Indicates the stage of the form is used.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    USED = 0,
    /**
     * Indicates the stage of the form is unused.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UNUSED = 1
  }

  /**
   * Defines the FormLocation enum.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12
   */
  /**
   * Defines the FormLocation enum.
   *
   * @enum { int }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum FormLocation {
    /**
     * Form is on the other location.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OTHER = -1,

    /**
     * Form is on the desktop
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the desktop
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DESKTOP = 0,

    /**
     * Form is on the form center.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the form center.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FORM_CENTER = 1,

    /**
     * Form is on the form manager.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the form manager.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FORM_MANAGER = 2,

    /**
     * Form is on the negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    NEGATIVE_SCREEN = 3,

    /**
     * Form is on the form center of negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_CENTER_NEGATIVE_SCREEN = 4,

    /**
     * Form is on the form manager of negative screen.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FORM_MANAGER_NEGATIVE_SCREEN = 5,

    /**
     * Form is on the screen lock.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the screen lock.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK = 6,

    /**
     * Form is on the ai suggestion.
     *
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 12
     */
    /**
     * Form is on the ai suggestion.
     *
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    AI_SUGGESTION = 7,

    /**
     * Form is in standby.
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    STANDBY = 8
  }

  /**
   * Provides OverflowInfo about funInteraction or sceneAniamtion form
   *
   * @typedef { OverflowInfo }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface OverflowInfo {
    /**
     * The overflow animation area
     *
     * @type { Rect }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    area: Rect;

    /**
     * The overflow animation duration
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration: int;

    /**
     * Whether use default animation, default is true
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    useDefaultAnimation?: boolean;
  }

  /**
   * Provides OverflowRequest about request/cancel form's overflow
   *
   * @typedef { OverflowRequest }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface OverflowRequest {
    /**
     * The form id about request/cancel overflow animation
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    formId: string;

    /**
     * Whether the form request or cancel overflow animation
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isOverflow: boolean;

    /**
     * The form's overflow animation paramter
     *
     * @type { ?OverflowInfo }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    overflowInfo?: OverflowInfo;
  }

  /**
   * ChangeSceneAnimationStateRequest
   *
   * @typedef { ChangeSceneAnimationStateRequest }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChangeSceneAnimationStateRequest {
    /**
     * The form id about request change scene animation state
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    formId: string;

    /**
     * The state of scene animation.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    state: int;
  }

  /**
   * Indicates rectangle
   *
   * @typedef { Rect }
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * The left position of rect
     *
     * @type { double }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * The top position of rect
     *
     * @type { double }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * The width of rect
     *
     * @type { double }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * The height of rect
     *
     * @type { double }
     * @syscap SystemCapability.Ability.Form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    height: double;
  }

  /**
   * The fun interaction form params.
   *
   * @typedef { FunInteractionParams }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface FunInteractionParams {
    /**
     * The ability name of the fun interaction form.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;

    /**
     * The bundle name used by game engine.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    targetBundleName: string;

    /**
     * The sub bundle name used by game engine.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    subBundleName: string;

    /**
     * The duration of the fun interaction form will be paused if not operate, default is 10s
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    keepStateDuration? :int;
  }

  /**
   * The scene animation form params.
   *
   * @typedef { SceneAnimationParams }
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface SceneAnimationParams {
    /**
     * Ability name of the scene animation form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Indicates disabled desktop behaviors, only takes effect for system app.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    disabledDesktopBehaviors?: string;
  }

  /**
   * Get form rect info callback
   *
   * @typedef { function } GetFormRectInfoCallback
   * @param { string } formId
   * @returns { Promise<formInfo.Rect> } form rect info
   * @throws { BusinessError } 202 - The application must be system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type GetFormRectInfoCallback = (formId: string) => Promise<formInfo.Rect>;

  /**
   * Get live form status info callback
   *
   * @typedef { function } GetLiveFormStatusCallback
   * @returns { Record<string, string> } form status info, the key is formId, value is one of "INACTIVE" "PAUSE" "ACTIVE".
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type GetLiveFormStatusCallback = () => Record<string, string>;

  /**
   * TemplateFormDetailInfo
   *
   * @typedef TemplateFormDetailInfo
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateFormDetailInfo {  
    /**
     * Obtains the bundle name of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName: string;

    /**
     * Obtains the module name of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    moduleName: string;

    /**
     * Obtains the ability name of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    abilityName: string;

    /**
     * Obtains the form name of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    formName: string;

    /**
     * Obtains the form dimension of the template form.
     *
     * @type { FormDimension }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dimension: FormDimension;

    /**
     * Obtains the form detail Id of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    detailId: string;

    /**
     * Obtains the form display name of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayName: string;

    /**
     * Obtains the form description of the template form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    description: string;
  }

  /**
   * template form detail info callback.
   *
   * @typedef { function } TemplateFormDetailInfoCallback
   * @param { Array<TemplateFormDetailInfo> } info - Template form detail info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateFormDetailInfoCallback = (info: Array<TemplateFormDetailInfo>) => void;

  /**
   * PublishFormCrossBundleInfo
   *
   * @typedef PublishFormCrossBundleInfo
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PublishFormCrossBundleInfo {  
    /**
     * Obtains the caller bundle name of the form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    callerBundleName: string;

    /**
     * Obtains the target bundle name of the form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    targetBundleName: string;

    /**
     * Obtains the target template form detail id of the form.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    targetTemplateFormDetailId: string;
  }

  /**
   * publish form cross bundle control callback.
   *
   * @typedef { function } PublishFormCrossBundleControlCallback
   * @param { PublishFormCrossBundleInfo } info - Publish form cross bundle info.
   * @returns { boolean } Publish form cross bundle control result, true indicates success, false indicates failure.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type PublishFormCrossBundleControlCallback = (info: PublishFormCrossBundleInfo) => boolean;
}
export default formInfo;
