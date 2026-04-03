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
 * @kit AbilityKit
 */
/**
 * @since 20
 */
export namespace TestModuleB {
  /**
   * @since 20
   * 
   */
  import { TestResult, OperationStatus } from './base_002.d.ts';

  /**
   * @since 20
   * 
   */
  export class ResponseHandler {
    /**
     * @since 20
     * 
     */
    private responses: TestResult<any>[] = [];

    /**
     * @since 20
     * 
     */
    public addResponse<T>(result: TestResult<T>): void {
      this.responses.push(result);
    }

    /**
     * @since 20
     * @systemapi
     */
    public getLastStatus(): OperationStatus {
      const lastResponse = this.responses[this.responses.length - 1];
      return lastResponse?.success ? OperationStatus.COMPLETED : OperationStatus.FAILED;
    }

    /**
     * @since 20
     * @systemapi
     */
    public getAllResults(): TestResult<any>[] {
      return [...this.responses];
    }
  }

  /**
   * @since 20
   * @systemapi
   */
  import { DataProcessor, ValidationRule, ComplexType } from './base_002.d.ts';

  /**
   * @since 20
   * 
   */
  export class UnusedImportDemo {
    /**
     * @since 20
     * 
     */
    private unusedField: string = "This class imports types but doesn't use them";

    /**
     * Do not use DataProcessor, ValidationRule, ComplexType
     * @since 20
     * @systemapi
     */
    public doSomething(): string {
      return this.unusedField;
    }

    /**
     * @since 20
     *
     */
    public anotherMethod(): number {
      return 42;
    }
  }

  /**
   * @since 20
   * 
   */
  export type LocalTypeOnly = {
    id: string;
    name: string;
    value: number;
  };

  /**
   * @since 20
   * @systemapi
   */
  // import { NonExistentType } from './base_002';

  /**
   * @since 20
   * 
   */
  export class ErrorSimulator {
    /**
     * @since 20
     * 
     */
    public simulateImportError(): void {
      try {
        /**
        * Does not exist
        * @since 20
        * @systemapi
        */
        const value: NonExistentType = {} as any;
        console.log("This would fail if uncommented");
      } catch (error) {
        console.error("Expected error:", error);
      }
    }

    /**
     * @since 20
     * @systemapi
     */
    public getErrorMessage(): string {
      return "Cannot find module './NonExistentModule' or its corresponding type declarations";
    }
  }

  /**
   * @since 20
   * 
   */
  export enum ResponseCode {
    /**
     * @since 20
     * 
     */
    OK = 200,
    /**
     * @since 20
     * 
     */
    CREATED = 201,
    /**
     * @since 20
     * 
     */
    BAD_REQUEST = 400,
    /**
     * @since 20
     * 
     */
    UNAUTHORIZED = 401,
    /**
     * @since 20
     * 
     */
    NOT_FOUND = 404,
    /**
     * @since 20
     * @systemapi
     */
    INTERNAL_ERROR = 500
  }

  /**
   * @since 20
   * 
   */
  export interface ProcessingOptions {
    /**
     * @since 20
     * 
     */
    maxRetries: number;
    /**
     * @since 20
     * 
     */
    timeout: number;
    /**
     * @since 20
     * 
     */
    fallbackEnabled: boolean;
    /**
     * @since 20
     * 
     */
    logging: {
      level: 'debug' | 'info' | 'warn' | 'error';
      format: 'json' | 'text';
    };
  }

  /**
   * @since 20
   * @systemapi
   */
  export function processWithOptions(
    options: ProcessingOptions,
    handler: ResponseHandler
  ): TestResult<ProcessingOptions> {
    return {
      success: true,
      data: options,
      timestamp: new Date(),
      metadata: {
        handlerType: handler.constructor.name,
        processedAt: Date.now()
      }
    };
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface AbilityResult {
    /**
     * Indicates the result code returned after the ability is destroyed. You can define the result
     * code to identify an error.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 7
     */
    /**
     * Indicates the result code returned after the ability is destroyed. You can define the result
     * code to identify an error.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    resultCode: int;

    /**
     * Indicates the data returned after the ability is destroyed. You can define the data returned.
     * This parameter can be null.
     *
     * @type { ?Want }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 7
     */
    /**
     * Indicates the data returned after the ability is destroyed. You can define the data returned.
     * This parameter can be null.
     *
     * @type { ?Want }
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    want?: Want;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface DataAbilityHelper {
    /**
     * Opens a file in a specified remote path.
     *
     * @param { string } uri - Indicates the path of the file to open.
     * @param { string } mode - Indicates the file open mode, which can be "r" for read-only access, "w" for write-only
     *                   access (erasing whatever data is currently in the file), "wt" for write access that truncates
     *                   any existing file, "wa" for write-only access to append to any existing data, "rw" for read
     *                   and write access on any existing data, or "rwt" for read and write access that truncates any
     *                   existing file.
     * @param { AsyncCallback<number> } callback - Indicates the callback when openfile success
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    openFile(uri: string, mode: string, callback: AsyncCallback<number>): void;

    /**
     * Opens a file in a specified remote path.
     *
     * @param { string } uri - Indicates the path of the file to open.
     * @param { string } mode - Indicates the file open mode, which can be "r" for read-only access, "w" for write-only
     *                   access (erasing whatever data is currently in the file), "wt" for write access that truncates
     *                   any existing file, "wa" for write-only access to append to any existing data, "rw" for read and
     *                   write access on any existing data, or "rwt" for read and write access that truncates any
     *                   existing file.
     * @returns { Promise<number> } Returns the file descriptor.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    openFile(uri: string, mode: string): Promise<number>;

    /**
     * Registers an observer to observe data specified by the given uri.
     *
     * @param { 'dataChange' } type - dataChange.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - Indicates the callback when dataChange.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * Deregisters all observers used for monitoring data specified by the given uri.
     *
     * @param { 'dataChange' } type - dataChange.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } [callback] - Indicates the registered callback.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

    /**
     * Obtains the MIME type of the date specified by the given URI.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<string> } callback - Indicates the callback method for obtaining the type of media resource,
     *                                             returning the media resource type that matches the uri pointing data.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    getType(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Obtains the MIME type of the date specified by the given URI.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @returns { Promise<string> } Returns the MIME type that matches the data specified by uri.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    getType(uri: string): Promise<string>;

    /**
     * Obtains the MIME types of files supported.
     *
     * @param { string } uri - Indicates the path of the files to obtain.
     * @param { string } mimeTypeFilter - Indicates the MIME types of the files to obtain.
     * @param { AsyncCallback<Array<string>> } callback - Indicates the callback method for obtaining media resource
     *                                                    types, returning an array of matching media resource types.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains the MIME types of files supported.
     *
     * @param { string } uri - Indicates the path of the files to obtain.
     * @param { string } mimeTypeFilter - Indicates the MIME types of the files to obtain.
     * @returns { Promise<Array<string>> } Returns the matched MIME types Array.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>;

    /**
     * Converts the given uri that refers to the Data ability into a normalized uri.
     *
     * @param { string } uri - Indicates the uri object to normalize.
     * @param { AsyncCallback<string> } callback - Indicates the callback method for uri normalization, and if the data
     *                                             function supports uri normalization, returns the normalized uri object;
     *                                             Otherwise return null.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    normalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given uri that refers to the Data ability into a normalized uri.
     *
     * @param { string } uri - Indicates the uri object to normalize.
     * @returns { Promise<string> } Returns normalized uri object if Data ability supports URI normalization or null.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    normalizeUri(uri: string): Promise<string>;

    /**
     * Converts the given normalized uri generated by normalizeUri(uri) into a denormalized one.
     *
     * @param { string } uri - Indicates the uri object to normalize.
     * @param { AsyncCallback<string> } callback - Indicates the callback method of denormalization uri.If
     *                                             denormalization succeeds,the denormalization uri object is returned.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given normalized uri generated by normalizeUri(uri) into a denormalized one.
     *
     * @param { string } uri - Indicates the uri object to normalize.
     * @returns { Promise<string> } Returns the denormalized uri object if the denormalization is successful.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    denormalizeUri(uri: string): Promise<string>;

    /**
     * Notifies the registered observers of a change to the data resource specified by uri.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - callback method.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    notifyChange(uri: string, callback: AsyncCallback<void>): void;

    /**
     * Notifies the registered observers of a change to the data resource specified by uri.
     *
     * @param { string } uri - Indicates the path of the data to operate.
     * @returns { Promise<void> } The promise returned by the function.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    notifyChange(uri: string): Promise<void>;

    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to insert.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data record to insert. If this parameter is null, a blank
     *                                            row will be inserted.
     * @param { AsyncCallback<number> } callback - Indicates the callback method for data insertion, returning the index
     *                                             of the inserted data record.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * Inserts a single data record into the database.
     *
     * @param { string } uri - Indicates the path of the data to insert.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data record to insert. If this parameter is null,
     *                                            a blank row will be inserted.
     * @returns { Promise<number> } Returns the index of the inserted data record.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>;

    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to batchInsert.
     * @param { Array<rdb.ValuesBucket> } valuesBuckets - Indicates the data records to insert.
     * @param { AsyncCallback<number> } callback - Callback method indicating batch data insertion, returning the number
     *                                             of inserted data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void;

    /**
     * Inserts multiple data records into the database.
     *
     * @param { string } uri - Indicates the path of the data to batchInsert.
     * @param { Array<rdb.ValuesBucket> } valuesBuckets - Indicates the data records to insert.
     * @returns { Promise<number> } Returns the number of data records inserted.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>;

    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @param { AsyncCallback<number> } callback - A callback method that indicates data deletion, returning the number of
     *                                             deleted data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { dataAbility.DataAbilityPredicates } [predicates] - Indicates filter criteria. You should define the
     *                                                             processing logic when this parameter is null.
     * @returns { Promise<number> } Returns the number of data records deleted.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

    /**
     * Deletes one or more data records from the database.
     *
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { AsyncCallback<number> } callback - A callback method that indicates data deletion, returning
     *                                             the number of deleted data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    delete(uri: string, callback: AsyncCallback<number>): void;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @param { AsyncCallback<number> } callback - A callback method that indicates data updates, returning the number of
     *                                             updated data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    update(
      uri: string,
      valuesBucket: rdb.ValuesBucket,
      predicates: dataAbility.DataAbilityPredicates,
      callback: AsyncCallback<number>
    ): void;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { dataAbility.DataAbilityPredicates } [predicates] - Indicates filter criteria. You should define the
     *                                                             processing logic when this parameter is null.
     * @returns { Promise<number> } Returns the number of data records updated.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { AsyncCallback<number> } callback - A callback method that indicates data updates, returning the number of
     *                                             updated data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } columns - Indicates columns to query. If this parameter is null, all columns are queried.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @param { AsyncCallback<ResultSet> } callback - Indicates the callback method for data queries, returning the
     *                                                number of queried data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    query(
      uri: string,
      columns: Array<string>,
      predicates: dataAbility.DataAbilityPredicates,
      callback: AsyncCallback<ResultSet>
    ): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { AsyncCallback<ResultSet> } callback - Indicates the callback method for data queries, returning the
     *                                                number of queried data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    query(uri: string, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } columns - Indicates columns to query. If this parameter is null, all columns are queried.
     * @param { AsyncCallback<ResultSet> } callback - Indicates the callback method for data queries, returning the
     *                                                number of queried data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @param { AsyncCallback<ResultSet> } callback - Indicates the callback method for data queries, returning the
     *                                                number of queried data records.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } [columns] - Indicates columns to query. If this parameter is null, all columns are queried.
     * @param { dataAbility.DataAbilityPredicates } [predicates] - Indicates filter criteria. You should define the
     *                                                             processing logic when this parameter is null.
     * @returns { Promise<ResultSet> } Returns the query result {@link ResultSet}.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>;

    /**
     * Calls the extended API of the DataAbility. This method uses a promise to return the result.
     *
     * @param { string } uri - URI of the Data ability. Example: "dataability:///com.example.xxx.xxxx"
     * @param { string } method - Indicates the method to call.
     * @param { string } arg - Indicates the parameter of the String type.
     * @param { PacMap } extras - Indicates the parameter of the PacMap type.
     * @param { AsyncCallback<PacMap> } callback - A callback method that indicates a data operation and returns the
     *                                             result of the operation.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void;

    /**
     * Calls the extended API of the DataAbility. This method uses a promise to return the result.
     *
     * @param { string } uri - URI of the Data ability. Example: "dataability:///com.example.xxx.xxxx"
     * @param { string } method - Indicates the method to call.
     * @param { string } arg - Indicates the parameter of the String type.
     * @param { PacMap } extras - Indicates the parameter of the PacMap type.
     * @returns { Promise<PacMap> } Returns the query result {@link PacMap}.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<DataAbilityOperation> } operations - Indicates the data operation list, which can contain multiple
     *                                                     operations on the database.
     * @param { AsyncCallback<Array<DataAbilityResult>> } callback - Callback method indicating batch operations,
     *                                                               returning the result of each operation in the
     *                                                               DataAbilityResult array.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    executeBatch(
      uri: string,
      operations: Array<DataAbilityOperation>,
      callback: AsyncCallback<Array<DataAbilityResult>>
    ): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<DataAbilityOperation> } operations - Indicates the data operation list, which can contain multiple
     *                                                     operations on the database.
     * @returns { Promise<Array<DataAbilityResult>> } Returns the result of each operation,
     *                                                in array {@link DataAbilityResult}.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    executeBatch(
      uri: string,
      operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>;
  }
}