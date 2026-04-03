'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { Callback } from '@ohos.base';

/**
 * Defines Builder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Retention({policy: "SOURCE"})
@Target([
  AnnotationTargets.FUNCTION,
  AnnotationTargets.CLASS_METHOD,
  AnnotationTargets.CLASS_FIELD,
  AnnotationTargets.TYPE,
  AnnotationTargets.PARAMETER,
  AnnotationTargets.TYPE_ALIAS,
  AnnotationTargets.LAMBDA
])
export declare @interface Builder {}

/**
 * Defines BuilderParam Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface BuilderParam {}

/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { @Builder (() => void) } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type CustomBuilder = @Builder (() => void);

/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { @Builder ((t:T) => void) } CustomBuilderT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type CustomBuilderT<T> = @Builder ((t: T) => void);

/**
 * Defines the PageMapBuilder Type.
 *
 * @typedef { function }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export type PageMapBuilder = @Builder ((name: string, param: Object | null | undefined) => void);

/**
 * Defining wrapBuilder function.
 * @param { T } builder
 * @returns { WrappedBuilder<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare function wrapBuilder<T>(builder: T): WrappedBuilder<T>;

/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare class WrappedBuilder<T> {

  /**
   * Builder function.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Builder public builder: T;

  /**
   * Initialize builder.
   * @param { T } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public constructor(builder: T);
}

/**
 * Type for property getter in Builder parameter proxy.
 *
 * @typedef { function } BuilderParameterCallback
 * @returns { Any } parameter value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type BuilderParameterCallback = () => Any;

/**
 * Make proxy for Builder parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param { T } instance initial literal instance
 * @param { Map<string, BuilderParameterCallback> } propertyGetters override property getters
 * @param { Callback<T> } initializer update proxied instance with literal's initial values
 * @returns { T } proxied literal instance
 * @stagemodelonly
 * @since 23 static
 */
export declare function makeBuilderParameterProxy<T>(instance: T, propertyGetters: Map<string, BuilderParameterCallback>, initializer?: Callback<T>): T;

/**
 * Defines ComponentBuilder Annotation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export @interface ComponentBuilder {}
