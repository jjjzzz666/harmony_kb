/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { BuildOptions } from './BuilderNode';
import { Content } from './Content';
import { UIContext } from '../@ohos.arkui.UIContext';
import { WrappedBuilder } from 'wrappedBuilderObject';

/**
 * Defines ComponentContent.
 *
 * @extends Content
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class ComponentContent<T extends Object> extends Content {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<[]> } builder - Defined the builder will be called to build ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[]>);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<[T]> } builder - Defined the builder will be called to build ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T);

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the ComponentContent
   * @param { WrappedBuilder<[T]> } builder - Defined the builder will be called to build ComponentContent.
   * @param { T } args - Parameters used to update the ComponentContent.
   * @param { BuildOptions } options - Defined the options will be used when build.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions);


  /**
   * Update the ComponentContent based on the provided parameters.
   *
   * @param { T } args - Parameters used to update the ComponentContent, which must match the types required by the builder bound to the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(args: T): void;

  /**
   * Reuse the ComponentContent based on the provided parameters.
   * @param { Object } [param] - Parameters for reusing ComponentContent. These parameters will be directly applied
   *     to the reuse of all top-level custom components in the ComponentContent. They should include the content
   *     required for the constructor parameters of each custom component; otherwise, undefined behavior may occur.
   *     Calling this method will synchronously trigger the aboutToReuse lifecycle callback of the internal custom
   *     components, with these parameters passed as the callback's input. The default value is undefined, in which
   *     case the custom components in the ComponentContent will directly use the data source from the construction
   *     phase.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reuse(param?: Object): void;

  /**
   * Recycle the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  recycle(): void;

  /**
   * Dispose the ComponentContent immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Notify ComponentContent to update the configuration to trigger a reload of the ComponentContent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConfiguration(): void;

  /**
   * Set if the ComponentContent inherits the freezing policy of the parent CustomComponent, ComponentContent,
   * or BuilderNode.
   *
   * @param { boolean } enabled - If the ComponentContent inherits the freezing policy of the parent CustomComponent,
   * ComponentContent, or BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Get if the node is disposed.
   * 
   * @returns { boolean } - Returns true if the node is disposed, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
   * Returns a flag indicating whether the current ComponentContent was obtained through dynamic-static conversion,
   * includes conversions in both directions: dynamic-to-static and static-to-dynamic.
   *
   * @returns { boolean } - Returns true if the ComponentContent was converted between dynamic and static states,
   *     otherwise, returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isTransferred(): boolean;
}

/**
 * Defines ReactiveComponentContent.
 *
 * @extends Content
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ReactiveComponentContent<T extends Object[]> extends Content {
   /**
    * Constructor.
    *
    * @param { UIContext } uiContext - uiContext used to create the ReactiveComponentContent
    * @param { WrappedBuilder<T> } builder - Defined the builder will be called to build ReactiveComponentContent.
    * @param { BuildOptions } config - Defined the options will be used when build.
    * @param { T } args - Parameters used to update the ComponentContentEx.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
     constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T);
   /**
    * Reuse the ReactiveComponentContent based on the provided parameters.
    * @param { Object } [param] - Parameters for reusing ReactiveComponentContent. These parameters will be
    *     directly applied to the reuse of all top-level custom components in the ReactiveComponentContent.
    *     They should include the content required for the constructor parameters of each custom component;
    *     otherwise, undefined behavior may occur. Calling this method will synchronously trigger the aboutToReuse
    *     lifecycle callback of the internal custom components, with these parameters passed as the callback's
    *     input. The default value is undefined, in which case the custom components in the ReactiveComponentContent
    *     will directly use the data source from the construction phase.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   reuse(param?: Object): void;
  
   /**
    * Recycle the ReactiveComponentContent.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   recycle(): void;
  
   /**
    * Dispose the ReactiveComponentContent immediately.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   dispose(): void;
  
   /**
    * Notify ReactiveComponentContent to update the configuration to trigger a reload of the ReactiveComponentContent.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   updateConfiguration(): void;

   /**
    * Flushes the current state changes to update the ReactiveComponentContent immediately.
    * This forces a synchronous update of the compponent with the latest state values.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   flushState(): void;
  
   /**
    * Set if the ReactiveComponentContent inherits the freezing policy of the parent CustomComponent, ComponentContent,
    * ReactiveComponentContent, BuilderNode, or ReactiveBuilderNode.
    *
    * @param { boolean } enabled - If the ReactiveComponentContent inherits the freezing policy of the parent
    *     CustomComponent, ComponentContent, ComponentContent, ReactiveComponentContent, BuilderNode, or
    *     ReactiveBuilderNode.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   inheritFreezeOptions(enabled: boolean): void;
  
   /**
    * Get if the ReactiveComponentContent is disposed.
    *
    * @returns { boolean } - Returns true if the ReactiveComponentContent is disposed, false otherwise.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 22 dynamic
    */
   isDisposed(): boolean;
}