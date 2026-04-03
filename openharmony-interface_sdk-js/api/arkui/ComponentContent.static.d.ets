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

import { BuildOptions } from 'arkui.BuilderNode';
import { Content } from 'arkui.Content';
import { UIContext } from '@ohos.arkui.UIContext';
import { WrappedBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';
import { RecordData } from '@ohos.base';

/**
 * Defines the base class for ComponentContent.
 *
 * @extends Content
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export abstract class ComponentContentBase extends Content {
}

/**
 * Defines ComponentContent.
 *
 * @extends ComponentContentBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ComponentContent<T = undefined> extends ComponentContentBase {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilder> } builder - Defined the builder will be called to build ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilder>);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defined the builder will be called to build
   * ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilderT<T>>, args: T);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defined the builder will be called to build
   * ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @param { BuildOptions } options - Defined the options will be used when build.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<CustomBuilderT<T>>, args: T, options: BuildOptions);


  /**
   * Update the ComponentContent based on the provided parameters.
   *
   * @param { T } args - Parameters used to update the ComponentContent, which must match the types required by the
   * builder bound to the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  update(args: T): void;

  /**
   * Reuse the ComponentContent based on the provided parameters.
   *
   * @param { RecordData } [param] - Parameters for reusing ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  recycle(): void;

  /**
   * Dispose the ComponentContent immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dispose(): void;

  /**
   * Get if the ComponentContent is disposed.
   *
   * @returns { boolean } - Returns true if the ComponentContent is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  isDisposed(): boolean;

  /**
   * Notify ComponentContent to update the configuration to trigger a reload of the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateConfiguration(): void;

  /**
  * Returns a flag indicating whether the current ComponentContent was obtained through dynamic-static conversion,
  * includes conversions in both directions: dynamic-to-static and static-to-dynamic.
  *
  * @returns { boolean } - Returns true if the ComponentContent was converted between dynamic and static states,
  * otherwise returns false.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 24 static
  */
  isTransferred(): boolean;
}

/**
 * Defines ReactiveComponentContent.
 *
 * @extends ComponentContentBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare class ReactiveComponentContent extends ComponentContentBase {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ReactiveComponentContent
   * @param { CustomBuilder } builder - Defined the builder will be called to build ReactiveComponentContent.
   * @param { BuildOptions } [options] - Defined the options will be used when build.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
    constructor(uiContext: UIContext, builder: CustomBuilder, options?: BuildOptions);
  /**
   * Reuse the ReactiveComponentContent based on the provided parameters.
   *
   * @param { RecordData } [param] - Parameters for reusing ReactiveComponentContent. These parameters will be
   *     directly applied to the reuse of all top-level custom components in the ReactiveComponentContent. They
   *     should include the content required for the constructor parameters of each custom component; otherwise,
   *     undefined behavior may occur. Calling this method will synchronously trigger the aboutToReuse lifecycle
   *     callback of the internal custom components, with these parameters passed as the callback's input. The
   *     default value is undefined, in which case the custom components in the ReactiveComponentContent will
   *     directly use the data source from the construction phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the ReactiveComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  recycle(): void;

  /**
   * Dispose the ReactiveComponentContent immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  dispose(): void;

  /**
   * Get if the ReactiveComponentContent is disposed.
   * @returns { boolean } - Returns true if the ReactiveComponentContent is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  isDisposed(): boolean;

  /**
   * Notify ReactiveComponentContent to update the configuration to trigger a reload of the ReactiveComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  updateConfiguration(): void;

  /**
   * Flushes the current state changes to update the ReactiveComponentContent immediately.
   * This forces a synchronous update of the compponent with the latest state values.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  flushState(): void;
}
