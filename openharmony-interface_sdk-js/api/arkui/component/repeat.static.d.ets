/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { Builder } from './builder';
import { ComponentBuilder } from './builder';
import { DynamicNode } from './common'

/**
 * Indicates the type of Repeat's Data Source.
 *
 * @typedef { Array<T> | ReadonlyArray<T> | Readonly<Array<T>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
type RepeatArray<T> = Array<T> | ReadonlyArray<T> | Readonly<Array<T>>;
/**
 * Function that return typed string to render one template.
 *
 * @typedef {function} TemplateTypedFunc<T>
 * @param { T } item - data item.
 * @param { int } index - data index in array.
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
type TemplateTypedFunc<T> = (item: T, index: int) => string;
/**
 * Define builder function to render one template type.
 *
 * @typedef {function} RepeatItemBuilder<T>
 * @param { RepeatItem<T> } repeatItem - the repeat item builder function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
 * Construct a new type for each item.
 *
 * @interface RepeatItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RepeatItem<T> {
  /**
   * The origin data.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  item: T;
  /**
   * index of each item.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  index: int;
}

/**
 * Function that is used to do lazy loading.
 *
 * @typedef {function} OnLazyLoadingFunc
 * @param { int } index - data index.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
type OnLazyLoadingFunc = (index: int) => void;

/**
 * Define key generator function.
 *
 * @typedef {function} KeyGeneratorFunc<T>
 * @param { T } item - data item.
 * @param { int } index - data index in array.
 * @returns { string } key value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
 * Function that is used to get total count.
 *
 * @typedef {function} OnTotalCountFunc
 * @returns { int } Returns the total data count
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
type OnTotalCountFunc = () => int;

/**
 * Define the options of repeat virtualScroll to implement reuse and lazy loading.
 *
 * @interface VirtualScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface VirtualScrollOptions {
  /**
   * Total data count.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  totalCount?: int;
  /**
   * Reuse or not.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  reusable?: boolean;
  /**
   * Data lazy loading
   *
   * @type { ?OnLazyLoadingFunc }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onLazyLoading?: OnLazyLoadingFunc;
  /**
   * The function of total data count.
   *
   * @type { ?OnTotalCountFunc }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTotalCount?: OnTotalCountFunc;
  /**
   * Indicates whether to activate virtual scroll mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  disableVirtualScroll?: boolean;
}

/**
 * Define a builder template option parameter.
 *
 * @interface TemplateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface TemplateOptions {
  /**
   * The cached number of each template.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  cachedCount?: int;
}

/**
 * Defines the Repeat component attribute functions.
 *
 * @extends DynamicNode
 * @typedef RepeatAttribute<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface RepeatAttribute<T> extends DynamicNode {
  /**
   * Executes itemGenerator of each item.
   *
   * @param { RepeatItemBuilder<T> } itemGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  each(itemGenerator: RepeatItemBuilder<T>): this;
  /**
   * Obtains key of each item.
   *
   * @param { KeyGeneratorFunc<T> } keyGenerator
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  key(keyGenerator: KeyGeneratorFunc<T>): this;
  /**
   * Enable UI lazy loading when scroll up or down.
   *
   * @param { VirtualScrollOptions } [virtualScrollOptions] that defines the options of repeat virtual scroll to
   *     implement reuse and lazy loading.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  virtualScroll(virtualScrollOptions?: VirtualScrollOptions): this;
  /**
   * Type builder function to render specific type of data item.
   *
   * @param { string } type that defines the template id.
   * @param { RepeatItemBuilder<T> } itemBuilder that defines UI builder function.
   * @param { TemplateOptions } [templateOptions] that defines a builder template option parameter.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): this;
  /**
   * Typed function to render specific type of data item.
   *
   * @param { TemplateTypedFunc<T> } typedFunc that define template typed function.
   * @returns { this } RepeatAttribute instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  templateId(typedFunc: TemplateTypedFunc<T>): this;
  /**
   * Set the component's source code redirection information. 
   * @param { string } sourceLine - the source code line.
   * @param { string } [moduleName] - module to which the component belongs.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;
}

/**
 * Indicates the type of Repeat.
 *
 * @param { RepeatArray<T> } arr - The Data Source
 * @returns { RepeatAttribute<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Repeat<T>(arr: RepeatArray<T>): RepeatAttribute<T>;