'use static'

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

import { IDataSource } from '@ohos.arkui.component';

/**
 * Implement this interface to provide data prefetching for the LazyForEach component.
 *
 * @extends IDataSource<T>
 * @interface IDataSourcePrefetching
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface IDataSourcePrefetching<T> extends IDataSource<T> {
  /**
   * Prefetches data for the specified element in the data collection.
   * This method can be either synchronous or asynchronous.
   *
   * @param { int } index - Index of the item in the collection.
   * @returns { Promise<void> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  prefetch(index: int): Promise<void> | undefined;

  /**
   * Cancels prefetching data for the specified element in the data collection.
   * This method can be either synchronous or asynchronous.
   *
   * @param { int } index - Index of the item in the collection.
   * @returns { Promise<void> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default cancel(index: int): Promise<void> | undefined;
}

/**
 * Implement this interface to provide prefetcher logic.
 *
 * @interface IPrefetcher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface IPrefetcher<T> {
  /**
   * Sets the data source to bind to this prefetcher.
   *
   * @param { IDataSourcePrefetching<T> } dataSource - Data source that supports prefetching.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setDataSource(dataSource: IDataSourcePrefetching<T>): void;

  /**
   * Call this method when the visible area boundaries were changed.
   *
   * @param { int } minVisible - Index of the first visible data item.
   * @param { int } maxVisible - Index of the last visible data item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  visibleAreaChanged(minVisible: int, maxVisible: int): void;
}

/**
 * Basic implementation of {@link IPrefetcher}.
 * It provides an intelligent data prefetching algorithm to make decisions about which data
 * items should be prefetched in response to the real-time changes of visible on-screen area
 * and changes in the duration of the prefetching. It also determines which prefetch requests
 * should be canceled based on user scrolling actions.
 *
 * @implements IPrefetcher<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BasicPrefetcher<T> implements IPrefetcher<T> {
  /**
   * Constructs a basic prefetcher instance and optionally sets the data source.
   *
   * @param { IDataSourcePrefetching<T> } [dataSource] - Data source that supports prefetching.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(dataSource?: IDataSourcePrefetching<T>);

  /**
   * Sets the data source to bind to this prefetcher.
   *
   * @param { IDataSourcePrefetching<T> } dataSource - Data source that supports prefetching.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setDataSource(dataSource: IDataSourcePrefetching<T>): void;

  /**
   * Call this method when the visible area changed.
   *
   * @param { int } minVisible - Index of the first visible data item.
   * @param { int } maxVisible - Index of the last visible data item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  visibleAreaChanged(minVisible: int, maxVisible: int): void;
}
