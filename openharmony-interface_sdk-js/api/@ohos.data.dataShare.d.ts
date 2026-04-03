/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit ArkData
 */

import type { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Context from './application/Context';
import DataShareResultSet from './@ohos.data.DataShareResultSet';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import { ValuesBucket, ValueType } from './@ohos.data.ValuesBucket';

/**
 * This module provides the dataShare capability for consumer.
 *
 * @namespace dataShare
 * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
/**
 * This module provides the dataShare capability for consumer.
 *
 * @namespace dataShare
 * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace dataShare {
  /**
   * Manages create datashare helper options.
   *
   * @interface DataShareHelperOptions
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface DataShareHelperOptions {
    /**
     * Specifies whether the {@link DataShareHelper} in proxy mode.
     * If value is true, the {@link DataShareHelper} to be created is in proxy mode, and all operations will not open provider APP as possible
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    isProxy?: boolean;
    /**
     * Specifies the time to wait for connecting extension, in seconds.
     *
     * @type { ?int }
     * @default 2
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    waitTime?: int;
  }

  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 202 - Not System Application.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void;
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 202 - Not System Application.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options: DataShareHelperOptions,
    callback: AsyncCallback<DataShareHelper>
  ): void;

  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @returns { Promise<DataShareHelper> } {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @returns { Promise<DataShareHelper> } {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @returns { Promise<DataShareHelper> } {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 202 - Not System Application.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options?: DataShareHelperOptions
  ): Promise<DataShareHelper>;

  /**
   * Enables silent access dynamically.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the uri of the data share silent proxy resource.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * Enables silent access dynamically.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the uri of the data share silent proxy resource.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  function enableSilentProxy(context: Context, uri?: string): Promise<void>;

  /**
   * Disables silent access dynamically.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the uri of the data share silent proxy resource.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * Disables silent access dynamically.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the uri of the data share silent proxy resource.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  function disableSilentProxy(context: Context, uri?: string): Promise<void>;

  /**
   * Specifies the {@link Template} id structure.
   * A template is marked by the template id. Note that the template id is auto generated in {@link DataShareHelper#addTemplate}.
   * After {@link DataShareHelper#addTemplate}, can use the template id to direct a template.
   *
   * @interface TemplateId
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface TemplateId {
    /**
     * Specifies the id of subscriber, who process the callback
     * Same as subscriberId in {@link DataShareHelper#addTemplate}
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId: string;
    /**
     * Specifies the bundleName of template owner, who create the template
     * Same as the caller's bundleName of {@link DataShareHelper#addTemplate}
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleNameOfOwner: string;
  }

  /**
   * Specifies the published item structure.
   *
   * @interface PublishedItem
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedItem {
    /**
     * Specifies the key of the published data
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;
    /**
     * Specifies the published data
     * If the data is large, use ArrayBuffer.
     *
     * @type { string | ArrayBuffer }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: string | ArrayBuffer;
    /**
     * Specifies the subscriber id
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId: string;
  }

  /**
   * Specifies the change node structure of rdb store data in callback.
   *
   * @interface RdbDataChangeNode
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface RdbDataChangeNode {
    /**
     * Specifies the uri of the callback.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Specifies the templateId of the callback.
     *
     * @type { TemplateId }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    templateId: TemplateId;
    /**
     * Specifies the datas of the callback.
     * every node is a json, json's key is [key of {@link Template#predicates}
     * and value is the query result from rdb store query by value of{@link Template#predicates}].
     *
     * @type { Array<string> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: Array<string>;
  }

  /**
   * Specifies the change node structure of published data in callback.
   *
   * @interface PublishedDataChangeNode
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedDataChangeNode {
    /**
     * Specifies the bundleName of the callback.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * Specifies the datas of the callback.
     *
     * @type { Array<PublishedItem> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: Array<PublishedItem>;
  }

  /**
   * Specifies the template structure in subscribe.
   *
   * @interface Template
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface Template {
    /**
     * Specifies the predicates of the template.
     * When the callback in {@link DataShareHelper#on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}
     * is called, the predicates is used to generate data in {@link ChangeNode}. Only for rdb store data.
     *
     * @type { [key: string]: string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Specifies the predicates of the template.
     * When the callback in {@link DataShareHelper#on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}
     * is called, the predicates is used to generate data in {@link ChangeNode}. Only for rdb store data.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    predicates: Record<string, string>;

    /**
     * Specifies the scheduler sql of the template.
     * When modify the subscribed uri's data, scheduler is auto called.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    scheduler: string;

    /**
     * Specifies the update sql of the template.
     * The update is called after the predicates execution is complete.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    update?: string;
  }
  /**
   * Specifies the operation result structure.
   *
   * @interface OperationResult
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface OperationResult {
    /**
     * Specifies the key of the operation result.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * Specifies the operation result.
     *
     * @type { int }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    result: int;
  }

  /**
   * Struct for a batch update operation.
   *
   * @interface UpdateOperation
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface UpdateOperation {
    /**
     * Indicates the data to update.
     *
     * @type { ValuesBucket }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    values: ValuesBucket;

    /**
     * Indicates filter criteria.
     *
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Enumerates the data change types.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  /**
   * Enumerates the data change types.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum ChangeType {
    /**
     * Data inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    /**
     * Data inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    INSERT = 0,

    /**
     * Data deleted.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    /**
     * Data deleted.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    DELETE = 1,

    /**
     * Data updated.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    /**
     * Data updated.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    UPDATE = 2
  }
  /**
   * Enumerates the subscription types.
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum SubscriptionType {
    /**
     * Subscribe to the change of the data with the specified URI.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSCRIPTION_TYPE_EXACT_URI = 0
  }

  /**
   * Struct for the data change.
   *
   * @interface ChangeInfo
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeInfo {
    /**
     * Type of the data change.
     *
     * @type { ChangeType }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * URI of the data changed.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Data changed.
     *
     * @type { Array<ValuesBucket> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    values: Array<ValuesBucket>;
  }

  /**
   * DataShareHelper
   *
   * @interface DataShareHelper
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataShareHelper {
    /**
     * Registers an observer to observe data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of on.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Registers an observer to observe data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of on.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * Registers an observer to observe data specified by the given uri.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Callback<void> } callback - The callback of on.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(uri: string, callback: Callback<void>): void;

    /**
     * Deregisters an observer used for monitoring data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Deregisters an observer used for monitoring data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

    /**
     * Deregisters an observer used for monitoring data specified by the given uri.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Callback<void> } [callback] - The callback of off.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(uri: string, callback?: Callback<void>): void;

    /**
     * Subscribes to the change of the data specified by the given URI.
     *
     * @param { 'dataChange' } event - Indicates the event type, which must be 'dataChange'.
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to subscribe.
     * @param { AsyncCallback<ChangeInfo> } callback - Indicates the callback used to return the data change.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>): void;

    /**
     * Subscribes to the change of the data specified by the given URI.
     *
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to subscribe.
     * @param { Callback<ChangeInfo> } callback - Indicates the callback used to return the data change.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(type:SubscriptionType, uri: string, callback: Callback<ChangeInfo>): void;

    /**
     * Unsubscribes from the change of the data specified by the given URI.
     *
     * @param { 'dataChange' } event - Indicates the event type, which must be 'dataChange'.
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to unsubscribe.
     * @param { AsyncCallback<ChangeInfo> } callback - Indicates the callback to unsubscribe.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    off(event: 'dataChange', type:SubscriptionType, uri: string, callback?: AsyncCallback<ChangeInfo>): void;

    /**
     * Unsubscribes from the change of the data specified by the given URI.
     *
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to unsubscribe.
     * @param { Callback<ChangeInfo> } [callback] - Indicates the callback to unsubscribe.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(type:SubscriptionType, uri: string, callback?: Callback<ChangeInfo>): void;

    /**
     * Adds a template of {@link #on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}.
     *
     * @param { string } uri - Indicates the uri to add.
     * @param { string } subscriberId - The subscribe id to add..
     * @param { Template } template - The template to add.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Adds a template of {@link #on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}.
     *
     * @param { string } uri - Indicates the uri to add.
     * @param { string } subscriberId - The subscribe id to add..
     * @param { Template } template - The template to add.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    addTemplate(uri: string, subscriberId: string, template: Template): void;

    /**
     * Deletes a template of {@link #on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}.
     *
     * @param { string } uri - Indicates the uri to delete.
     * @param { string } subscriberId - The subscribe id.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Deletes a template of {@link #on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}.
     *
     * @param { string } uri - Indicates the uri to delete.
     * @param { string } subscriberId - The subscribe id.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    delTemplate(uri: string, subscriberId: string): void;

    /**
     * Registers observers to observe rdb data specified by the given uri and template.
     *
     * @param { 'rdbDataChange' } type - Type must be 'rdbDataChange'.
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of on.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Registers observers to observe rdb data specified by the given uri and template.
     *
     * @param { 'rdbDataChange' } type - Type must be 'rdbDataChange'.
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of on.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    on(
       type: 'rdbDataChange',
       uris: Array<string>,
       templateId: TemplateId,
       callback: AsyncCallback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Registers observers to observe rdb data specified by the given uri and template.
     *
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of on.
     * @param { Callback<RdbDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onRdbDataChange(
       uris: Array<string>,
       templateId: TemplateId,
       callback: Callback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Deregisters observers used for monitoring data specified by the given uri and template.
     *
     * @param { 'rdbDataChange' } type - Type must be 'rdbDataChange'.
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of off.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Deregisters observers used for monitoring data specified by the given uri and template.
     *
     * @param { 'rdbDataChange' } type - Type must be 'rdbDataChange'.
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of off.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    off(
       type: 'rdbDataChange',
       uris: Array<string>,
       templateId: TemplateId,
       callback?: AsyncCallback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Deregisters observers used for monitoring data specified by the given uri and template.
     *
     * @param { Array<string> } uris - Indicates the paths of the data to operate.
     * @param { TemplateId } templateId - The template of off.
     * @param { Callback<RdbDataChangeNode> } [callback] - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offRdbDataChange(
       uris: Array<string>,
       templateId: TemplateId,
       callback?: Callback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Registers observers to observe published data specified by the given key and subscriberId.
     *
     * @param { 'publishedDataChange' } type - Type must be 'publishedDataChange'.
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of on.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Registers observers to observe published data specified by the given key and subscriberId.
     *
     * @param { 'publishedDataChange' } type - Type must be 'publishedDataChange'.
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of on.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    on(
       type: 'publishedDataChange',
       uris: Array<string>,
       subscriberId: string,
       callback: AsyncCallback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Registers observers to observe published data specified by the given key and subscriberId.
     *
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of on.
     * @param { Callback<PublishedDataChangeNode> } callback - The callback of on.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onPublishedDataChange(
       uris: Array<string>,
       subscriberId: string,
       callback: Callback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Deregisters observers used for monitoring data specified by the given key and subscriberId.
     *
     * @param { 'publishedDataChange' } type - Type must be 'publishedDataChange'.
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of off.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Deregisters observers used for monitoring data specified by the given key and subscriberId.
     *
     * @param { 'publishedDataChange' } type - Type must be 'publishedDataChange'.
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of off.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    off(
       type: 'publishedDataChange',
       uris: Array<string>,
       subscriberId: string,
       callback?: AsyncCallback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Deregisters observers used for monitoring data specified by the given key and subscriberId.
     *
     * @param { Array<string> } uris - Indicates the uris of the data to operate.
     * @param { string } subscriberId - The subscriberId of off.
     * @param { Callback<PublishedDataChangeNode> } [callback] - The callback of off.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offPublishedDataChange(
       uris: Array<string>,
       subscriberId: string,
       callback?: Callback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { number } version - Indicates the version of data to publish, larger is newer.
     * @param { AsyncCallback<Array<OperationResult>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { int } version - Indicates the version of data to publish, larger is newer.
     * @param { AsyncCallback<Array<OperationResult>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    publish(
       data: Array<PublishedItem>,
       bundleName: string,
       version: int,
       callback: AsyncCallback<Array<OperationResult>>
     ): void;

    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { AsyncCallback<Array<OperationResult>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { AsyncCallback<Array<OperationResult>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    publish(
       data: Array<PublishedItem>,
       bundleName: string,
       callback: AsyncCallback<Array<OperationResult>>
     ): void;

    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { number } version - Indicates the version of data to publish, larger is newer.
     * @returns { Promise<Array<OperationResult>> }
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Update a single data into host data area.
     *
     * @param { Array<PublishedItem> } data - Indicates the data to publish.
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { int } version - Indicates the version of data to publish, larger is newer.
     * @returns { Promise<Array<OperationResult>> }
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    publish(data: Array<PublishedItem>, bundleName: string, version?: int): Promise<Array<OperationResult>>;

    /**
     * Registers a one-time observer to observe data specified by the given uri and template.
     *
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { AsyncCallback<Array<PublishedItem>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Registers a one-time observer to observe data specified by the given uri and template.
     *
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @param { AsyncCallback<Array<PublishedItem>> } callback
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    getPublishedData(bundleName: string, callback: AsyncCallback<Array<PublishedItem>>): void;

    /**
     * Registers a one-time observer to observe data specified by the given uri and template.
     *
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @returns { Promise<Array<PublishedItem>> }
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    /**
     * Registers a one-time observer to observe data specified by the given uri and template.
     *
     * @param { string } bundleName - Indicates the bundleName of data to publish.
     * @returns { Promise<Array<PublishedItem>> }
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    getPublishedData(bundleName: string): Promise<Array<PublishedItem>>;

    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { ValuesBucket } value - Indicates the data record to insert. If this parameter is null,
     * a blank row will be inserted.
     * @param { AsyncCallback<number> } callback - {number}: the index of the inserted data record.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { ValuesBucket } value - Indicates the data record to insert. If this parameter is null,
     * a blank row will be inserted.
     * @param { AsyncCallback<int> } callback - {int}: the index of the inserted data record.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    insert(uri: string, value: ValuesBucket, callback: AsyncCallback<int>): void;

    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { ValuesBucket } value - Indicates the data record to insert. If this parameter is null,
     * a blank row will be inserted.
     * @returns { Promise<number> } {number}: the index of the inserted data record.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { ValuesBucket } value - Indicates the data record to insert. If this parameter is null,
     * a blank row will be inserted.
     * @returns { Promise<int> } {int}: the index of the inserted data record.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    insert(uri: string, value: ValuesBucket): Promise<int>;

    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { AsyncCallback<number> } callback - {number}: the number of data records deleted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { AsyncCallback<int> } callback - {int}: the number of data records deleted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    delete(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<int>): void;

    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @returns { Promise<number> } {number}: the number of data records deleted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @returns { Promise<int> } {int}: the number of data records deleted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    delete(uri: string, predicates: dataSharePredicates.DataSharePredicates): Promise<int>;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @param { AsyncCallback<DataShareResultSet> } callback - {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @param { AsyncCallback<DataShareResultSet> } callback - {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    query(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       columns: Array<string>,
       callback: AsyncCallback<DataShareResultSet>
     ): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @returns { Promise<DataShareResultSet> } {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @returns { Promise<DataShareResultSet> } {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    query(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       columns: Array<string>
     ): Promise<DataShareResultSet>;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @param { AsyncCallback<number> } callback - {number}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @param { AsyncCallback<int> } callback - {int}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    update(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       value: ValuesBucket,
       callback: AsyncCallback<int>
     ): void;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @returns { Promise<number> } {number}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @returns { Promise<int> } {int}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    update(uri: string, predicates: dataSharePredicates.DataSharePredicates, value: ValuesBucket): Promise<int>;

    /**
     * Updates data records in the database.
     *
     * @param { Record<string, Array<UpdateOperation>> } operations - Indicates the data to update.
     * @returns {Promise<Record<string, Array<int>>>} {Record<string, Array<int>>}: The result set of batch operations.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: 1.The internal status is abnormal;
     *         2.The interface is incorrectly used; 3.Permission configuration error; 4.A system error.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    batchUpdate(operations: Record<string, Array<UpdateOperation>>): Promise<Record<string, Array<int>>>;

    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Array<ValuesBucket> } values - Indicates the data records to insert.
     * @param { AsyncCallback<number> } callback - {number}: the number of data records inserted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Array<ValuesBucket> } values - Indicates the data records to insert.
     * @param { AsyncCallback<int> } callback - {int}: the number of data records inserted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    batchInsert(uri: string, values: Array<ValuesBucket>, callback: AsyncCallback<int>): void;

    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Array<ValuesBucket> } values - Indicates the data records to insert.
     * @returns { Promise<number> } {number}: the number of data records inserted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { Array<ValuesBucket> } values - Indicates the data records to insert.
     * @returns { Promise<int> } {int}: the number of data records inserted.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    batchInsert(uri: string, values: Array<ValuesBucket>): Promise<int>;

    /**
     * Converts the given {@code uri} that refers to the DataShare into a normalized {@link ohos.utils.net.Uri}.
     * A normalized uri can be used across devices, persisted, backed up, and restored.
     * <p>To transfer a normalized uri from another environment to the current environment, you should call this
     * method again to re-normalize the uri for the current environment or call {@link #denormalizeUri(Uri)}
     * to convert it to a denormalized uri that can be used only in the current environment.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to normalize.
     * @param { AsyncCallback<string> } callback - {string}: the normalized Uri,
     * if the DataShare supports uri normalization.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Converts the given {@code uri} that refers to the DataShare into a normalized {@link ohos.utils.net.Uri}.
     * A normalized uri can be used across devices, persisted, backed up, and restored.
     * <p>To transfer a normalized uri from another environment to the current environment, you should call this
     * method again to re-normalize the uri for the current environment or call {@link #denormalizeUri(Uri)}
     * to convert it to a denormalized uri that can be used only in the current environment.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to normalize.
     * @param { AsyncCallback<string> } callback - {string}: the normalized Uri,
     * if the DataShare supports uri normalization.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    normalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given {@code uri} that refers to the DataShare into a normalized {@link ohos.utils.net.Uri}.
     * A normalized uri can be used across devices, persisted, backed up, and restored.
     * <p>To transfer a normalized uri from another environment to the current environment, you should call this
     * method again to re-normalize the uri for the current environment or call {@link #denormalizeUri(Uri)}
     * to convert it to a denormalized uri that can be used only in the current environment.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to normalize.
     * @returns { Promise<string> } {string}: the normalized Uri if the DataShare supports uri normalization;
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Converts the given {@code uri} that refers to the DataShare into a normalized {@link ohos.utils.net.Uri}.
     * A normalized uri can be used across devices, persisted, backed up, and restored.
     * <p>To transfer a normalized uri from another environment to the current environment, you should call this
     * method again to re-normalize the uri for the current environment or call {@link #denormalizeUri(Uri)}
     * to convert it to a denormalized uri that can be used only in the current environment.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to normalize.
     * @returns { Promise<string> } {string}: the normalized Uri if the DataShare supports uri normalization;
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    normalizeUri(uri: string): Promise<string>;

    /**
     * Converts the given normalized {@code uri} generated by {@link #normalizeUri(Uri)} into a denormalized one.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to denormalize.
     * @param { AsyncCallback<string> } callback - {string}: the denormalized {@code Uri} object if
     * the denormalization is successful; returns the original {@code Uri} passed to this method if
     * there is nothing to do; returns {@code null} if the data identified by the normalized {@code Uri}
     * cannot be found in the current environment.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Converts the given normalized {@code uri} generated by {@link #normalizeUri(Uri)} into a denormalized one.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to denormalize.
     * @param { AsyncCallback<string> } callback - {string}: the denormalized {@code Uri} object if
     * the denormalization is successful; returns the original {@code Uri} passed to this method if
     * there is nothing to do; returns {@code null} if the data identified by the normalized {@code Uri}
     * cannot be found in the current environment.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given normalized {@code uri} generated by {@link #normalizeUri(Uri)} into a denormalized one.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to denormalize.
     * @returns { Promise<string> } {string}: the denormalized {@code Uri} object if the denormalization
     * is successful; returns the original {@code Uri} passed to this method if there is nothing to do;
     * returns {@code null} if the data identified by the normalized {@code Uri} cannot be found in the
     * current environment.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Converts the given normalized {@code uri} generated by {@link #normalizeUri(Uri)} into a denormalized one.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to denormalize.
     * @returns { Promise<string> } {string}: the denormalized {@code Uri} object if the denormalization
     * is successful; returns the original {@code Uri} passed to this method if there is nothing to do;
     * returns {@code null} if the data identified by the normalized {@code Uri} cannot be found in the
     * current environment.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    denormalizeUri(uri: string): Promise<string>;

    /**
     * Notifies the registered observers of a change to the data resource specified by Uri.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to notifyChange.
     * @param { AsyncCallback<void> } callback - The callback of notifyChange.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Notifies the registered observers of a change to the data resource specified by Uri.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to notifyChange.
     * @param { AsyncCallback<void> } callback - The callback of notifyChange.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Mandatory parameters are left unspecified.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    notifyChange(uri: string, callback: AsyncCallback<void>): void;

    /**
     * Notifies the registered observers of a change to the data resource specified by Uri.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to notifyChange.
     * @returns { Promise<void> } The promise returned by the function.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9
     */
    /**
     * Notifies the registered observers of a change to the data resource specified by Uri.
     *
     * @param { string } uri - Indicates the {@link ohos.utils.net.Uri} object to notifyChange.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Mandatory parameters are left unspecified.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    notifyChange(uri: string): Promise<void>;

    /**
     * Notifies the registered observers of the data change.
     *
     * @param { ChangeInfo } data - Indicates the data change information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    notifyChange(data: ChangeInfo): Promise<void>;

    /**
     * Close the connection between datashare and extension.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 15700000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12
     */
    /**
     * Close the connection between datashare and extension.
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 15700000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 19 dynamic
     * @since 23 static
     */
    close(): Promise<void>;
  }

  /**
   * Obtains the data proxy handle, which can be used to subscribe, publish, and access globally shared data.
   *
   * @returns { Promise<DataProxyHandle> } Handle used for the data proxy operations.
   * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
   *     restarted abnormally.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createDataProxyHandle(): Promise<DataProxyHandle>;

  /**
   * Specifies the proxy data structure.
   *
   * @interface ProxyData
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ProxyData {
    /**
     * URI for proxy data that uniquely identifies a proxy data item. Maximum length 256 bytes.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Value of the proxy data. Maximum length 4096 bytes.
     * When the proxy data is first published, if it is not filled in, it is set to an empty string by default.
     * When updating the proxy data, if it is not filled in, the value of the proxy data is not updated.
     *
     * @type { ?ValueType }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value?: ValueType;

    /**
     * List of applications that are allowed to subscribe and read proxy data. The maximum length of the list is 256.
     * Uses appId to represent the allowed application.
     * When the proxy data is first published, if it is not filled in, it defaults to an empty array.
     * When updating the proxy data, if it is not filled in, the allowList of the proxy data is not updated.
     * An empty allowList array indicates that only the publisher can access the data.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList?: string[];
  }

  /**
   * Structure that describes the info of the proxy data changed.
   *
   * @interface DataProxyChangeInfo
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyChangeInfo {
    /**
     * Type of the data changed.
     *
     * @type { ChangeType }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * URI of the data changed.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Value of the data changed.
     *
     * @type { ValueType }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType;
  }

  /**
   * Enumeration of data proxy operation error codes.
   *
   * @enum { int } DataProxyErrorCode
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyErrorCode {
    /**
     * Operation successful.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SUCCESS = 0,
    
    /**
     * URI format is incorrect or does not exist.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    URI_NOT_EXIST = 1,

    /**
     * Do not have permission to perform this operation on this URI.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    NO_PERMISSION = 2,

    /**
     * Exceeds the upper limit of the number of data records.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OVER_LIMIT = 3
  }

  /**
   * Structure that indicates the result of a single data proxy operation.
   *
   * @interface DataProxyResult
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyResult {
    /**
     * URI of the data being operated on.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Error code of the operation result.
     * @type { DataProxyErrorCode }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;
  }

  /**
   * Structure that indicates the result of a single getting operation.
   *
   * @interface DataProxyGetResult
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyGetResult {
    /**
     * URI of the data being operated on.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Error code of the operation result.
     *
     * @type { DataProxyErrorCode }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;

    /**
     * If the getting operation is successful, it is the value of the proxy data,
     * if the getting operation is failed, it is undefined.
     *
     * @type { ValueType | undefined }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType | undefined;

    /**
     * If the getting operation is successful, it is the allowList of the proxy data,
     * if the getting operation is failed, it is undefined.
     * Only the publisher can obtain the allowList. Other applications can only obtain the value.
     *
     * @type { string[] | undefined}
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList: string[] | undefined;
  }

  /**
   * Enumeration of data proxy types.
   *
   * @enum { int } DataProxyType
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyType {
    /**
     * Indicates shared configuration between applications.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHARED_CONFIG = 0
  }

  /**
   * Structure that indicates the configuration for data proxy operation.
   *
   * @interface DataProxyConfig
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyConfig {
    /**
     * Type of the data proxy operation.
     *
     * @type { DataProxyType }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: DataProxyType;
  }

  /**
   * Handle for data proxy operations.
   *
   * @interface DataProxyHandle
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyHandle {
    /**
     * Registers observers to observe proxy data change specified by the given URIs.
     *
     * @param { 'dataChange' } event - Event type must be 'sharedDataChange'.
     * @param { string[] } uris - Indicates the uris of the data to operate.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @param { AsyncCallback<DataProxyChangeInfo[]> } callback - The callback function when data changes.
     * @returns { DataProxyResult[] } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
 	   * Registers observers to observe proxy data change specified by the given URIs.
 	   *
 	   * @param { string[] } uris - Indicates the uris of the data to operate.
 	   * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
 	   * @param { Callback<DataProxyChangeInfo[]> } callback - The callback function when data changes.
 	   * @returns { DataProxyResult[] } : The operation result.
 	   * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
 	   *     restarted abnormally.
 	   * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
 	   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 	   * @stagemodelonly
 	   * @since 23 static
 	   */
 	  onDataChange(
 	    uris: string[],
 	    config: DataProxyConfig,
 	    callback: Callback<DataProxyChangeInfo[]>
 	  ): DataProxyResult[];

    /**
     * Deregisters observers to observe proxy data change specified by the given URIs.
     *
     * @param { 'dataChange' } event - Event type must be 'sharedDataChange'.
     * @param { string[] } uris - Indicates the uris of the data to operate.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @param { AsyncCallback<DataProxyChangeInfo[]> } [callback] - The callback function when data changes.
     * @returns { DataProxyResult[] } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback?: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
 	   * Deregisters observers to observe proxy data change specified by the given URIs.
 	   *
 	   * @param { string[] } uris - Indicates the uris of the data to operate.
 	   * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
 	   * @param { Callback<DataProxyChangeInfo[]> } [callback] - The callback function when data changes.
 	   * @returns { DataProxyResult[] } : The operation result.
 	   * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
 	   *     restarted abnormally.
 	   * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
 	   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 	   * @stagemodelonly
 	   * @since 23 static
 	   */
 	  offDataChange(
 	    uris: string[],
 	    config: DataProxyConfig,
 	    callback?: Callback<DataProxyChangeInfo[]>
 	  ): DataProxyResult[];

    /**
     * Publishes proxy data. The data that is published can be accessed by the publisher and the applications
     * specified in the allowList.
     * If the URI being published already exists, update the corresponding data.
     * Only the publisher is allowed to update the data.
     *
     * @param { ProxyData[] } data - Indicates the data to create or update.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @returns { Promise<DataProxyResult[]> } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    publish(data: ProxyData[], config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * Deletes the proxy data specified by the URIs.
     * Only the data publisher can delete the data.
     *
     * @param { string[] } uris - Indicates the uris of data to delete.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @returns { Promise<DataProxyResult[]> } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    delete(uris: string[], config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * Gets published data specified by the URIs.
     * Only the publisher itself and applications in the allowList can get the data.
     *
     * @param { string[] } uris - Indicates the uris of data to get.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @returns { Promise<DataProxyGetResult[]> } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    get(uris: string[], config: DataProxyConfig): Promise<DataProxyGetResult[]>;
  }
}

export default dataShare;
