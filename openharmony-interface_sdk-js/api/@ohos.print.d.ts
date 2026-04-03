/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';

/**
 * System print
 *
 * @namespace print
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace print {

  /**
   * PrintTask provide event callback.
   * @interface PrintTask
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintTask {
    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - Indicates the print task has been blocked.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'block', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onBlock(callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - Indicates the print task succeed.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'succeed', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onSucceed(callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - Indicates the print task has completed with failure.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'fail', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onFail(callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - Indicates the print task has been cancelled.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'cancel', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onCancel(callback: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - Indicates the print task has been blocked.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'block', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offBlock(callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - Indicates the print task succeed.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'succeed', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offSucceed(callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - Indicates the print task has completed with failure.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'fail', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offFail(callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - Indicates the print task has been cancelled.
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'cancel', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offCancel(callback?: Callback<void>): void;

  }

  /**
   * Third-party application implement this interface to render files to be printed.
   * @interface PrintDocumentAdapter
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintDocumentAdapter {

    /**
     * Implement this function to update the print file.
     * @permission ohos.permission.PRINT
     * @param { string } jobId - Indicates print job id.
     * @param { PrintAttributes } oldAttrs - Indicates old print attributes.
     * @param { PrintAttributes } newAttrs - Indicates new print attributes.
     * @param { int } fd - Indicates print file fd.
     * @param { function } writeResultCallback - Indicates this function should execute after the file is updated.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    onStartLayoutWrite(jobId: string, oldAttrs: PrintAttributes, newAttrs: PrintAttributes, fd: int,
      writeResultCallback: (jobId: string, writeResult: PrintFileCreationState) => void): void;

    /**
     * Implement this function to listen job status change.
     * @permission ohos.permission.PRINT
     * @param { string } jobId - Indicates print job id.
     * @param { PrintDocumentAdapterState } state - Indicates job changes to this state.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    onJobStateChanged(jobId: string, state: PrintDocumentAdapterState): void;
  }

  /**
   * Start new print task for App.
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
   * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;

  /**
   * Start new print task for App.
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
   * @returns { Promise<PrintTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  function print(files: Array<string>): Promise<PrintTask>;

  /**
   * Start new print task for App.
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
   * @param { Context } context - The ability context that initiates the call print request.
   * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context, callback: AsyncCallback<PrintTask>): void;

  /**
   * Start new print task for App.
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
   * @param { Context } context - The ability context that initiates the call print request.
   * @returns { Promise<PrintTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context): Promise<PrintTask>;

  /**
   * Start new print task for App And the App need update print file.
   * @permission ohos.permission.PRINT
   * @param { string } jobName - Indicates print file Name.
   * @param { PrintDocumentAdapter } printAdapter - Indicates functions implemented by the cpp.
   * @param { PrintAttributes } printAttributes - Indicates print attributes.
   * @param { Context } context - The ability context that initiates the call print request.
   * @returns { Promise<PrintTask> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(jobName: string, printAdapter: PrintDocumentAdapter, printAttributes: PrintAttributes,
    context: Context): Promise<PrintTask>;

  /**
   * defines print attributes.
   * @typedef PrintAttributes
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintAttributes {
    /**
     * Copies of document list.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    copyNumber?: int;

    /**
     * Range size to be printed.
     * @type { ?PrintPageRange }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageRange?: PrintPageRange;

    /**
     * Page size.
     * @type { ?(PrintPageSize | PrintPageType) }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageSize?: PrintPageSize | PrintPageType;

    /**
     * Print direction.
     * @type { ?PrintDirectionMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    directionMode?: PrintDirectionMode;

    /**
     * Color mode.
     * @type { ?PrintColorMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    colorMode?: PrintColorMode;

    /**
     * Duplex mode.
     * @type { ?PrintDuplexMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    duplexMode?: PrintDuplexMode;
  }

  /**
   * defines print page range.
   * @typedef PrintPageRange
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageRange {
    /**
     * Start page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    startPage?: int;

    /**
     * End page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    endPage?: int;

    /**
     * Discrete page of sequence.
     * @type { ?Array<int> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pages?: Array<int>;
  }

  /**
   * defines print margin.
   * @typedef PrintMargin
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print margin.
   * @typedef PrintMargin
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrintMargin {
    /**
     * Top margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Top margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    top?: int;

    /**
     * Bottom margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Bottom margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    bottom?: int;

    /**
     * Left margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Left margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    left?: int;

    /**
     * Right margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Right margin.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    right?: int;
  }

  /**
   * defines print range.
   * @typedef PrinterRange
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print range.
   * @typedef PrinterRange
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrinterRange {
    /**
     * Start page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Start page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    startPage?: int;

    /**
     * End page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * End page of sequence.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    endPage?: int;

    /**
     * Discrete page of sequence.
     * @type { ?Array<int> }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Discrete page of sequence.
     * @type { ?Array<int> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    pages?: Array<int>;
  }

  /**
   * defines print preview attribute.
   * @typedef PreviewAttribute
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print preview attribute.
   * @typedef PreviewAttribute
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PreviewAttribute {
    /**
     * Preview page range.
     * @type { PrinterRange }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Preview page range.
     * @type { PrinterRange }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    previewRange: PrinterRange;

    /**
     * Preview file result.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Preview file result.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    result?: int;
  }

  /**
   * defines print resolution.
   * @typedef PrintResolution
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print resolution.
   * @typedef PrintResolution
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrintResolution {
    /**
     * Resolution id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Resolution id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    id: string;

    /**
     * Horizontal DPI.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Horizontal DPI.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    horizontalDpi: int;

    /**
     * Vertical DPI.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Vertical DPI.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    verticalDpi: int;
  }

  /**
   * defines print page size.
   * @typedef PrintPageSize
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageSize {
    /**
     * Page size id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Page size name.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Unit: millimeter width.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Unit: millimeter height.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * defines print capability.
   * @typedef PrinterCapability
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print capability.
   * @typedef PrinterCapability
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrinterCapability {
    /**
     * Color mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Color mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    colorMode: int;

    /**
     * Duplex mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Duplex mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    duplexMode: int;

    /**
     * The page size list supported by the printer.
     * @type { Array<PrintPageSize> }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * The page size list supported by the printer.
     * @type { Array<PrintPageSize> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    pageSize: Array<PrintPageSize>;

    /**
     * The resolution list supported by the printer.
     * @type { ?Array<PrintResolution> }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * The resolution list supported by the printer.
     * @type { ?Array<PrintResolution> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    resolution?: Array<PrintResolution>;

    /**
     * Min margin of printer.
     * @type { ?PrintMargin }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Minimum margin of the printer.
     * @type { ?PrintMargin }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    minMargin?: PrintMargin;

    /**
     * JSON object string.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    /**
     * JSON object string.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    options?: Object;
  }

  /**
   * defines print info.
   * @typedef PrinterInfo
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print info.
   * @typedef PrinterInfo
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrinterInfo {
    /**
     * Printer id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Printer id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    printerId: string;

    /**
     * Printer name.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Printer name.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    printerName: string;

    /**
     * Current printer state.
     * @type { PrinterState }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Current printer state.
     * @type { PrinterState }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    printerState: PrinterState;

    /**
     * Resource id of printer icon.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Resource ID of printer icon.
     * @type { ?int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    printerIcon?: int;

    /**
     * Printer description.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Printer description.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    description?: string;

    /**
     * Printer capability.
     * @type { ?PrinterCapability }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Printer capability.
     * @type { ?PrinterCapability }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    capability?: PrinterCapability;

    /**
     * JSON object string.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * JSON object string.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    options?: Object;
  }

  /**
   * defines print job.
   * @typedef PrintJob
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Defines print job.
   * @typedef PrintJob
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  interface PrintJob {
    /**
     * Document fd list to be printed.
     * @type { Array<int> }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Document FD list to be printed.
     * @type { Array<int> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    fdList: Array<int>;

    /**
     * Job id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Job ID.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    jobId: string;

    /**
     * Printer id to take charge of printing.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Printer ID that takes charge of printing.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    printerId: string;

    /**
     * Current print job state.
     * @type { PrintJobState }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Current print job state.
     * @type { PrintJobState }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    jobState: PrintJobState;

    /**
     * Current print job sub state.
     * @type { PrintJobSubState }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    /**
     * Current print job sub-state.
     * @type { PrintJobSubState }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    jobSubstate: PrintJobSubState;

    /**
     * Copies of document list.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Number of copies of the document.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    copyNumber: int;

    /**
     * Range size to be printed.
     * @type { PrinterRange }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Page range to be printed.
     * @type { PrinterRange }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    pageRange: PrinterRange;

    /**
     * Sequential print.
     * @type { boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Sequential printing.
     * @type { boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    isSequential: boolean;

    /**
     * The selected page size.
     * @type { PrintPageSize }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * The selected page size.
     * @type { PrintPageSize }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    pageSize: PrintPageSize;

    /**
     * Vertical printing.
     * @type { boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Vertical printing.
     * @type { boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    isLandscape: boolean;

    /**
     * Color mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Color mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    colorMode: int;

    /**
     * Duplex mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Duplex mode.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    duplexMode: int;

    /**
     * Current margin setting.
     * @type { ?PrintMargin }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Current margin setting.
     * @type { ?PrintMargin }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    margin?: PrintMargin;

    /**
     * Preview setting.
     * @type { ?PreviewAttribute }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * Preview setting.
     * @type { ?PreviewAttribute }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    preview?: PreviewAttribute;

    /**
     * JSON object string.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    /**
     * JSON object.
     * @type { ?Object }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 24 dynamic&static
     */
    options?: Object;
  }

  /**
   * defines job data for multi format supported print.
   * @typedef PrintJobData
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PrintJobData {
    /**
     * Printer id to take charge of printing.
     * 
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printerId: string;

    /**
     * Print Job Name.
     * 
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobName: string;

    /**
     * Document format.
     * 
     * @type { PrintDocumentFormat }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    documentFormat: PrintDocumentFormat;

    /**
     * Specifies the data source type for the document.
     * 
     * @type { DocFlavor }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    docFlavor: DocFlavor;

    /**
     * Copies of document list.
     * 
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    copyNumber: int;

    /**
     * Landscape printing.
     * 
     * @type { boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLandscape: boolean;

    /**
     * Color mode.
     * 
     * @type { PrintColorMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    colorMode: PrintColorMode;

    /**
     * Duplex mode.
     * 
     * @type { PrintDuplexMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    duplexMode: PrintDuplexMode;

    /**
     * Page size.
     * @type { PrintPageSize }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageSize: PrintPageSize;

    /**
     * Job id.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobId?: string;

    /**
     * Document fd list to be printed.
     * 
     * @type { ?int[] }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fdList?: int[];

    /**
     * Binary data to be printed.
     * 
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    binaryData?: Uint8Array;

    /**
     * Print quality.
     * 
     * @type { ?PrintQuality }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printQuality?: PrintQuality;

    /**
     * Media type.
     * 
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaType?: string;

    /**
     * Is borderless.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isBorderless?: boolean;

    /**
     * Is Auto Rotate.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isAutoRotate?: boolean;

    /**
     * Print Reverse.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReverse?: boolean;

    /**
     * Is Collate Print.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isCollate?: boolean;

    /**
     * Sequential print.
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSequential?: boolean;

    /**
     * Detail information in json format.
     * 
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    options?: string;
  }

  /**
   * Print Document Format.
   * 
   * @enum { int } PrintDocumentFormat
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PrintDocumentFormat {
    /**
     * Auto format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_AUTO = 0,

    /**
     * Jpeg format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_JPEG = 1,

    /**
     * Pdf format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_PDF = 2,

    /**
     * Postscript format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_POSTSCRIPT = 3,

    /**
     * Text format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_TEXT = 4,

    /**
     * Raw format.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_RAW = 5
  }

  /**
   * Print Data Format.
   * 
   * @enum { int } DocFlavor
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DocFlavor {
    /**
     * Document is provided via file descriptors.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FILE_DESCRIPTOR = 0,

    /**
     * Document is provided as raw binary data.
     * 
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BYTES = 1
  }

  /**
   * Start print job supporting multiple formats
   * .
   * @permission ohos.permission.PRINT
   * @param { PrintJobData } job - Indicates the information of print job.
   * @returns { Promise<void> } callback - The promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function startPrint(job: PrintJobData): Promise<void>;

  /**
   * Enumeration of Print Direction Mode.
   * @enum { int } PrintDirectionMode
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDirectionMode {
    /**
     * Automatically select direction.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_AUTO = 0,

    /**
     * Print portrait.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_PORTRAIT = 1,

    /**
     * Print landscape.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_LANDSCAPE = 2,
  }

  /**
   * Enumeration of Print Color Mode.
   * @enum { int } PrintColorMode
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintColorMode {
    /**
     * Print monochrome.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_MONOCHROME = 0,

    /**
     * Color printing.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_COLOR = 1,
  }

  /**
   * Enumeration of Print Duplex Mode.
   * @enum { int } PrintDuplexMode
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDuplexMode {
    /**
     * Single side printing.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_NONE = 0,

    /**
     * Long-edge flip-up duplex printing.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_LONG_EDGE = 1,

    /**
     * Short-edge flip-up duplex printing.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_SHORT_EDGE = 2,
  }

  /**
   * Enumeration of Print Page Type.
   * @enum { int } PrintPageType
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintPageType {
    /**
     * A3 page.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A3 = 0,

    /**
     * A4 page.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A4 = 1,

    /**
     * A5 page.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A5 = 2,

    /**
     * B5 page.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_JIS_B5 = 3,

    /**
     * C5 page.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_C5 = 4,

    /**
     * DL Envelope.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_DL = 5,

    /**
     * Letter.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LETTER = 6,

    /**
     * Legal.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LEGAL = 7,

    /**
     * Photo 4x6.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_4X6 = 8,

    /**
     * Photo 5x7.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_5X7 = 9,

    /**
     * Envelope INT DL.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_INT_DL_ENVELOPE = 10,

    /**
     * Tabloid B.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_B_TABLOID = 11,
  }

  /**
   * Enumeration of Print Document Adapter State.
   * @enum { int } PrintDocumentAdapterState
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDocumentAdapterState {
    /**
     * Preview failed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PREVIEW_DESTROY = 0,

    /**
     * Print state is succeed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_SUCCEED = 1,

    /**
     * Print state is fail.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_FAIL = 2,

    /**
     * Print state is cancel.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_CANCEL = 3,

    /**
     * Print state is block.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_BLOCK = 4,
  }

  /**
   * Enumeration of Print File Creation State.
   * @enum { int } PrintFileCreationState
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintFileCreationState {
    /**
     * Print file created success.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED = 0,

    /**
     * Print file created fail.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATION_FAILED = 1,

    /**
     * Print file created success but unrendered.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED_UNRENDERED = 2,
  }

  /**
   * Enumeration of Printer State.
   * @enum { int } PrinterState
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterState {
    /**
     * New printers arrival.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_ADDED = 0,

    /**
     * Printer lost.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_REMOVED = 1,

    /**
     * Printer update.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CAPABILITY_UPDATED = 2,

    /**
     * Printer has been connected.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CONNECTED = 3,

    /**
     * Printer has been disconnected.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_DISCONNECTED = 4,

    /**
     * Printer is working.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_RUNNING = 5,
  }

  /**
   * Enumeration of  Print Job State.
   * @enum { int } PrintJobState
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobState {
    /**
     * Initial state of print job.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_PREPARE = 0,

    /**
     * Deliver print job to the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_QUEUED = 1,

    /**
     * Executing print job.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING = 2,

    /**
     * Print job has been blocked.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCKED = 3,

    /**
     * Print job completed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED = 4,
  }

  /**
   * Enumeration of  Print Job Sub State.
   * @enum { int } PrintJobSubState
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobSubState {
    /**
     * Print job succeed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_SUCCESS = 0,

    /**
     * Print job fail.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FAILED = 1,

    /**
     * Print job has been cancelled.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_CANCELLED = 2,

    /**
     * Print job has been corrupted.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FILE_CORRUPTED = 3,

    /**
     * Print is offline.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OFFLINE = 4,

    /**
     * Print is occupied by other process.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BUSY = 5,

    /**
     * Blocking print job is cancelled.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_CANCELLED = 6,

    /**
     * Print out of paper.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_PAPER = 7,

    /**
     * Print out of ink.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_INK = 8,

    /**
     * Print out of toner.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_TONER = 9,

    /**
     * Print paper jam.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_JAMMED = 10,

    /**
     * Print cover open.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DOOR_OPEN = 11,

    /**
     * Print service request.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVICE_REQUEST = 12,

    /**
     * Print low on ink.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_INK = 13,

    /**
     * Print low on toner.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_TONER = 14,

    /**
     * Print really low on ink.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_REALLY_LOW_ON_INK = 15,

    /**
     * Print bad certification.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BAD_CERTIFICATE = 16,

    /**
     * Print printer driver exception.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic	
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_EXCEPTION = 17,

    /**
     * Print an error occurred when printing the account.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_ACCOUNT_ERROR = 18,

    /**
     * Print the printing permission is abnormal.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_PERMISSION_ERROR = 19,

    /**
     * Print color printing permission exception.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_COLOR_PERMISSION_ERROR = 20,

    /**
     * Print the device is not connected to the network.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_NETWORK_ERROR = 21,

    /**
     * Print unable to connect to the server.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVER_CONNECTION_ERROR = 22,

    /**
     * Print large file exception.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LARGE_FILE_ERROR = 23,

    /**
     * Print file parsing exception.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_PARSING_ERROR = 24,

    /**
     * Print the file conversion is too slow.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SLOW_FILE_CONVERSION = 25,

    /**
     * Print uploading file.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_UPLOADING_FILES = 26,

    /**
     * Print converting files.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_CONVERTING_FILES = 27,

    /**
     * Print file uploading exception.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_UPLOADING_ERROR = 30,

    /**
     * Print driver file missing.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic	
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_MISSING = 34,

    /**
     * Print job interrupt.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic	
     * @since 23 static
     */
    PRINT_JOB_BLOCK_INTERRUPT = 35,

    /**
     * Print on an unavailable printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic	
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINTER_UNAVAILABLE = 98,

    /**
     * Print unknown issue.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_UNKNOWN = 99,
  }

  /**
   * Enumeration of  Print error Code.
   * @enum { int } PrintErrorCode
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintErrorCode {
    /**
     * No error.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NONE = 0,

    /**
     * No permission.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NO_PERMISSION = 201,

    /**
     * Invalid parameter.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PARAMETER = 401,

    /**
     * Generic failure of print.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_GENERIC_FAILURE = 13100001,

    /**
     * RPC failure.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_RPC_FAILURE = 13100002,

    /**
     * Failure of print service.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_SERVER_FAILURE = 13100003,

    /**
     * Invalid print extension.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_EXTENSION = 13100004,

    /**
     * Invalid printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINTER = 13100005,

    /**
     * Invalid print job.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINT_JOB = 13100006,

    /**
     * File i/o error.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_FILE_IO = 13100007,

    /**
     * Number of files exceeding the upper limit.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    E_PRINT_TOO_MANY_FILES = 13100010,

    /**
     * The SMB account is locked due to multiple failed login attempts.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_LOGIN_LOCKOUT = 13100012,

    /**
     * SMB Connection Failure (A network error occurs, the host is unreachable, or the port is blocked.)
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_CONNECTION_FAILURE = 13100013,

    /**
     * The login account or password is invalid.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_INVALID_CREDENTIALS = 13100014,
  }

  /**
   * Enumeration of application event.
   * @enum { int } ApplicationEvent
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum ApplicationEvent {
    /**
     * Application created.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CREATED = 0,

    /**
     * Application closed for printing started.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_STARTED = 1,

    /**
     * Application closed for printing canceled.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_CANCELED = 2,
  }

  /**
   * defines print ExtensionInfo.
   * @typedef PrinterExtensionInfo
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterExtensionInfo {
    /**
     * Extension id of printer extension.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * Vendor id of extension.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: string;

    /**
     * Vendor name.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorName: string;

    /**
     * Vendor icon.
     * @type { int }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorIcon: int;

    /**
     * Version of current printer extension.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    version: string;
  }

  /**
   * Get all printer extension installed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrinterExtensionInfo>> } callback - The callback function for handling the extension list found.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;

  /**
   * Get all printer extension installed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterExtensionInfo>> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

  /**
   * Load the specific printer extension and start to discover printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } extensionList - Indicates the list of printer extension.
   *     empty list of extensionList Indicates to find printer with all installed extension.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Load the specific printer extension and start to discover printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @param { Array<string> } extensionList - Indicates the list of printer extension.
   *     empty list of extensionList Indicates to find printer with all installed extension.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Load the specific printer extension and start to discover printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } extensionList - Indicates the list of printer extension.
   *     empty list of extensionList Indicates to find printer with all installed extension.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Load the specific printer extension and start to discover printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @param { Array<string> } extensionList - Indicates the list of printer extension.
   *     empty list of extensionList Indicates to find printer with all installed extension.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function startDiscoverPrinter(extensionList: Array<string>): Promise<void>;

  /**
   * Stop discovering the printer with specific printer extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Stop discovering the printer with specific printer extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function stopDiscoverPrinter(callback: AsyncCallback<void>): void;

  /**
   * Stop discovering the printer with specific printer extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Stop discovering the printer with specific printer extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function stopDiscoverPrinter(): Promise<void>;

  /**
   * Connect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Connect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @param { string } printerId - Indicates id of the printer.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function connectPrinter(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Connect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Connect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic	
     * @since 23 static
   */
  function connectPrinter(printerId: string): Promise<void>;

  /**
   * Disconnect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Disconnect the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function disconnectPrinter(printerId: string): Promise<void>;

  /**
   * Query capability for the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @param { AsyncCallback<void> } callback - The callback function for capability from printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryPrinterCapability(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Query capability for the specific printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryPrinterCapability(printerId: string): Promise<void>;

  /**
   * Start print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Indicates the information of print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function startPrintJob(jobInfo: PrintJob, callback: AsyncCallback<void>): void;

  /**
   * Start print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Indicates the information of print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function startPrintJob(jobInfo: PrintJob): Promise<void>;

  /**
   * Cancel the print job has been sent to printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the specific print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPrintJob(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Cancel the print job has been sent to printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the specific print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPrintJob(jobId: string): Promise<void>;

  /**
   * Restart the print job has been sent.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the specific print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic	
     * @since 23 static
   */
  function restartPrintJob(jobId: string): Promise<void>;

  /**
   * Request preview of the print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Indicates the information of print job.
   * @param { Callback<int> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function requestPrintPreview(jobInfo: PrintJob, callback: Callback<int>): void;

  /**
   * Request preview of the print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Indicates the information of print job.
   * @returns { Promise<int> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function requestPrintPreview(jobInfo: PrintJob): Promise<int>;

  /**
   * Register event callback for the state change of printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - Indicates state change of printer.
   * @param { function } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'printerStateChange', callback: (state: PrinterState, info: PrinterInfo) => void): void;

  /**
   * Defines the callback type used in registering to listen for PrinterState.
   * The value of state indicates the state of printer.
   * The value of info indicates the latest printer info.
   *
   * @typedef { function } PrinterStateChangeCallback
   * @param { PrinterState } state - the state of printer
   * @param { PrinterInfo } info - the information of the latest printer
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type PrinterStateChangeCallback = (state: PrinterState, info: PrinterInfo) => void;

  /**
   * Register event callback for the state change of printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterStateChangeCallback } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onPrinterStateChange(callback: PrinterStateChangeCallback): void;

  /**
   * Unregister event callback for the state change of printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - Indicates state change of printer.
   * @param { Callback<boolean> } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'printerStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the state change of printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offPrinterStateChange(callback?: Callback<boolean>): void;

  /**
   * Register event callback for the state change of print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - Indicates state change of printer.
   * @param { function } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'jobStateChange', callback: (state: PrintJobState, job: PrintJob) => void): void;

  /**
   * Defines the callback type used in registering to listen for PrintJobState.
   * The value of state indicates the state of print job.
   * The value of job indicates the latest print job info.
   *
   * @typedef { function } PrintJobStateChangeCallback
   * @param { PrintJobState } state - the state of print job
   * @param { PrintJob } job - the information of the print job
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type PrintJobStateChangeCallback = (state: PrintJobState, job: PrintJob) => void;

  /**
   * Register event callback for the state change of print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJobStateChangeCallback } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onJobStateChange(callback: PrintJobStateChangeCallback): void;

  /**
   * Unregister event callback for the state change of print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - Indicates state change of printer.
   * @param { Callback<boolean> } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'jobStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the state change of print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offJobStateChange(callback?: Callback<boolean>): void;

  /**
   * Register event callback for the information change of print extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - Indicates information change of print extension.
   * @param { function } callback - The callback function for information change of print extension.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'extInfoChange', callback: (extensionId: string, info: string) => void): void;

  /**
   * Defines the callback type used in registering to listen for extension change.
   * The value of extensionId indicates the print extension id.
   * The value of info indicates the connect info.
   *
   * @typedef { function } ExtInfoChangeCallback
   * @param { string } extensionId - the printer extension id
   * @param { string } info - the information of printer
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type ExtInfoChangeCallback = (extensionId: string, info: string) => void;

  /**
   * Register event callback for the information change of print extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ExtInfoChangeCallback } callback - The callback function for information change of print extension.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onExtInfoChange(callback: ExtInfoChangeCallback): void;

  /**
   * Unregister event callback for the information change of print extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - Indicates state change of printer.
   * @param { Callback<boolean> } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'extInfoChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the information change of print extension.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offExtInfoChange(callback?: Callback<boolean>): void;

  /**
   * New printers have been found and notify Print SA.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - Indicates new arrived printer lists.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function addPrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

  /**
   * New printers have been found and notify Print SA.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - Indicates new arrived printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function addPrinters(printers: Array<PrinterInfo>): Promise<void>;

  /**
   * Printers have been lost and notify Print SA.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - Indicates the lost printer lists.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removePrinters(printerIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Printers have been lost and notify Print SA.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - Indicates the lost printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removePrinters(printerIds: Array<string>): Promise<void>;

  /**
   * Update the information of the specific printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - Indicates to be updated printer lists.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

  /**
   * Update the information of the specific printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - Indicates to be updated printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinters(printers: Array<PrinterInfo>): Promise<void>;

  /**
   * Notify Print SA the state of printer has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @param { PrinterState } state - Indicates state of the printer.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinterState(printerId: string, state: PrinterState, callback: AsyncCallback<void>): void;

  /**
   * Notify Print SA the state of printer has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @param { PrinterState } state - Indicates state of the printer.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinterState(printerId: string, state: PrinterState): Promise<void>;

  /**
   * Notify Print SA the state of print job has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string} jobId - Indicates id of the print job.
   * @param { PrintJobState } state - Indicates new state of print job.
   * @param { PrintJobSubState } subState - Indicates sub state of print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Notify Print SA the state of print job has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { string} jobId - Indicates id of the print job.
   * @param { PrintJobState } state - Indicates the new state of the print job.
   * @param { PrintJobSubState } subState - Indicates sub-state of print job.
   * @param { AsyncCallback<void> } callback - The callback function for indicating the result of API execution.
   * @throws { BusinessError } 201 - The application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState,
    callback: AsyncCallback<void>): void;

  /**
   * Notify Print SA the state of print job has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string} jobId - Indicates id of the print job.
   * @param { PrintJobState } state - Indicates new state of print job.
   * @param { PrintJobSubState } subState - Indicates sub state of print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  /**
   * Notify Print SA the state of print job has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { string} jobId - Indicates id of the print job.
   * @param { PrintJobState } state - Indicates new state of print job.
   * @param { PrintJobSubState } subState - Indicates sub state of print job.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<void>;

  /**
   * Notify Print SA the state of print extension has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - Indicates changed information of print extension.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updateExtensionInfo(info: string, callback: AsyncCallback<void>): void;

  /**
   * Notify Print SA the state of print extension has been changed.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - Indicates changed information of print extension.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updateExtensionInfo(info: string): Promise<void>;

  /**
   * Get all the printJobs in the queue.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<void> } callback - The callback function for handling the printJob list found.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 11
   * @useinstead print#queryPrintJobList
   */
  function queryAllPrintJobs(callback: AsyncCallback<void>): void;

  /**
   * Get all the printJobs in the queue.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 11
   * @useinstead print#queryPrintJobList
   */
  function queryAllPrintJobs(): Promise<void>;

  /**
   * Get all active printJobs in the queue.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<PrintJob[]> } Returns a list of all active print jobs.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic	
     * @since 23 static
   */
  function queryAllActivePrintJobs(): Promise<PrintJob[]>;

  /**
   * Get all the printJobs in the queue.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrintJob>> } callback - The callback function for handling the printJob list found.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void;

  /**
   * Get all the printJobs in the queue.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrintJob>> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(): Promise<Array<PrintJob>>;

  /**
   * Get printJob by jobId.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { AsyncCallback<PrintJob> } callback - The callback function for get printJob by jobId.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobById(jobId: string, callback: AsyncCallback<PrintJob>): void;

  /**
   * Get printJob by jobId.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @returns { Promise<PrintJob> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobById(jobId: string): Promise<PrintJob>;

  /**
   * Start getting print file.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { PrintAttributes } printAttributes - Indicates print attributes.
   * @param { int } fd - Indicates print file fd.
   * @param { Callback<PrintFileCreationState> } onFileStateChanged - The callback function for update the file state.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function startGettingPrintFile(jobId: string, printAttributes: PrintAttributes, fd: int,
    onFileStateChanged: Callback<PrintFileCreationState>): void;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - Indicates notify information.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function notifyPrintService(jobId: string, type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started',
    callback: AsyncCallback<void>): void;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForCancelled(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForStarted(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - Indicates notify information.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function notifyPrintService(jobId: string,
    type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started'): Promise<void>;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForCancelled(jobId: string): Promise<void>;

  /**
   * Notify print service the information.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForStarted(jobId: string): Promise<void>;

  /**
   * Get all added printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @returns { Promise<Array<string>> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  function getAddedPrinters(): Promise<Array<string>>;

  /**
   * Get printer info by printer id.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<PrinterInfo> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getPrinterInfoById(printerId: string): Promise<PrinterInfo>;

  /**
   * Notify print service of application event.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - Indicates the event to be notified.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function notifyPrintServiceEvent(event: ApplicationEvent): Promise<void>;

  /**
   * New printers have been found and notify Print SA.
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - Indicates new arrived printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function addPrinterToDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Update the information of the specific printer.
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - Indicates to be updated printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function updatePrinterInDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Notify Print SA to remove printer.
   * @permission ohos.permission.PRINT
   * @param { string } printerId - Indicates the lost printer lists.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function removePrinterFromDiscovery(printerId: string): Promise<void>;

  /**
   * Get printerInformation by printer id.
   * @permission ohos.permission.PRINT
   * @param { string } printerId - Indicates id of the printer.
   * @returns { Promise<PrinterInformation> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrinterInformationById(printerId: string): Promise<PrinterInformation>;

  /**
   * defines printer information.
   * @typedef PrinterInformation
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterInformation {
    /**
     * Printer id.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * Printer name.
     * @type { string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerName: string;

    /**
     * Current printer status.
     * @type { PrinterStatus }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerStatus: PrinterStatus;

    /**
     * Printer description.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Printer capabilities.
     * @type { ?PrinterCapabilities }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    capability?: PrinterCapabilities;

    /**
     * Printer uri.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * Printer make.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerMake?: string;

    /**
     * Printer preferences.
     * @type { ?PrinterPreferences }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    preferences?: PrinterPreferences;

    /**
     * Printer alias.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    alias?: string;

    /**
     * Information about the selected driver when adding the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedDriver?: PpdInfo;

    /**
     * Protocol used when adding the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedProtocol?: string;

    /**
     * Detail information in json format.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * defines printer capabilities.
   * @typedef PrinterCapabilities
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterCapabilities {
    /**
     * The page size list supported by the printer.
     * @type { Array<PrintPageSize> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedPageSizes: Array<PrintPageSize>;

    /**
     * Array of supported color mode.
     * @type { Array<PrintColorMode> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedColorModes: Array<PrintColorMode>;

    /**
     * Array of supported duplex mode.
     * @type { Array<PrintDuplexMode> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedDuplexModes: Array<PrintDuplexMode>;

    /**
     * Array of supported print media types.
     * @type { ?Array<string> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedMediaTypes?: Array<string>;

    /**
     * Array of supported print quality.
     * @type { ?Array<PrintQuality> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedQualities?: Array<PrintQuality>;

    /**
     * Array of supported print orientation.
     * @type { ?Array<PrintOrientationMode> }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedOrientations?: Array<PrintOrientationMode>;

    /**
     * Advanced capability in json format.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * Enumeration of Print Quality.
   * @enum { int } PrintQuality
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintQuality {
    /**
     * Draft quality mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_DRAFT = 3,

    /**
     * Normal quality mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_NORMAL = 4,

    /**
     * High quality mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_HIGH = 5,
  }

  /**
   * Enumeration of Print OrientationMode.
   * @enum { int } PrintOrientationMode
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintOrientationMode {
    /**
     * Portrait mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_PORTRAIT = 0,

    /**
     * Landscape mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_LANDSCAPE= 1,

    /**
     * Reverse landscape mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_LANDSCAPE = 2,

    /**
     * Reverse portrait mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_PORTRAIT = 3,

    /**
     * Not specified.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_NONE = 4,
  }

  /**
   * Enumeration of Printer Status.
   * @enum { int } PrinterStatus
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterStatus {
    /**
     * Printer idle.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_IDLE = 0,

    /**
     * Printer busy.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_BUSY = 1,

    /**
     * Printer not available.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_UNAVAILABLE = 2,
  }

  /**
   * defines printer preferences.
   * @typedef PrinterPreferences
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrinterPreferences {
    /**
     * Default duplex mode.
     * @type { ?PrintDuplexMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultDuplexMode?: PrintDuplexMode;

    /**
     * Default quality.
     * @type { ?PrintQuality }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPrintQuality?: PrintQuality;

    /**
     * Default media type.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultMediaType?: string;

    /**
     * Default page size id.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPageSizeId?: string;

    /**
     * Default orientation mode.
     * @type { ?PrintOrientationMode }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultOrientation?: PrintOrientationMode;

    /**
     * Default margins.
     * @type { ?boolean }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    borderless?: boolean;

    /**
     * Default color mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultColorMode?: PrintColorMode;

    /**
     * Default collate.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultCollate?: boolean;

    /**
     * Default reverse.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultReverse?: boolean;

    /**
     * Detailed printer preferences in json format.
     * @type { ?string }
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * Enumeration of Printer Change Events.
   * @enum { int } PrinterEvent
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum PrinterEvent {
    /**
     * Printer added.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_ADDED = 0,

    /**
     * Printer deleted.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_DELETED = 1,

    /**
     * Printer state changed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_STATE_CHANGED = 2,

    /**
     * Printer info changed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_INFO_CHANGED = 3,

    /**
     * Printer preference changed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_PREFERENCE_CHANGED = 4,

    /**
     * Last used printer changed.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_LAST_USED_PRINTER_CHANGED = 5,
  }

  /**
   * Enumeration of default printer type.
   * @enum { int } DefaultPrinterType
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum DefaultPrinterType {
    /**
     * Default printer set by user.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_SET_BY_USER = 0,

    /**
     * The last used printer is used as the default printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_LAST_USED_PRINTER = 1,
  }

  /**
   * Update the information of the specific added printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInformation } printerInformation - Indicates the printer to be updated.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  /**
   * Update the information of the specific added printer.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { PrinterInformation } printerInformation - Indicates the printer to be updated.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 24 dynamic&static
   */
  function updatePrinterInformation(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Save the preferences set by the user.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer to be updated.
   * @param { PrinterPreferences } printerPreferences - Indicates the printer preferences set by the user.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setPrinterPreferences(printerId: string, printerPreferences: PrinterPreferences): Promise<void>;

  /**
   * Discover all usb printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterInformation>> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function discoverUsbPrinters(): Promise<Array<PrinterInformation>>;

  /**
   * Save the default printer set by the user.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer to be set as the default printer.
   * @param { DefaultPrinterType } type - Indicates the default printer type.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDefaultPrinter(printerId: string, type: DefaultPrinterType): Promise<void>;

  /**
   * Notify print service of application event.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - Indicates the event to be notified.
   * @param { string } jobId - Indicates the job id.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function notifyPrintServiceEvent(event: ApplicationEvent, jobId: string): Promise<void>;

  /**
   * Defines the callback type used in registering to listen for PrinterEvent.
   * The value of event indicates the information of PrinterEvent.
   * The value of printerInformation indicates the latest printer information.
   *
   * @typedef { function } PrinterChangeCallback
   * @param { PrinterEvent } event - the information of PrinterEvent
   * @param { PrinterInformation } printerInformation - the information of the latest printer
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void;

  /**
   * Register event callback for the change of printer.
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - Indicates change of printer.
   * @param { PrinterChangeCallback } callback - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function on(type: 'printerChange', callback: PrinterChangeCallback): void;

  /**
   * Register event callback for the change of printer.
   * @permission ohos.permission.PRINT
   * @param { PrinterChangeCallback } callback - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function onPrinterChange(callback: PrinterChangeCallback): void;

  /**
   * Unregister event callback for the change of printer.
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - Indicates change of printer.
   * @param { PrinterChangeCallback } [callback] - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *   1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function off(type: 'printerChange', callback?: PrinterChangeCallback): void;

  /**
   * Unregister event callback for the change of printer.
   * @permission ohos.permission.PRINT
   * @param { PrinterChangeCallback } [callback] - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function offPrinterChange(callback?: PrinterChangeCallback): void;

  /**
   * Interface defining shared device information
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SharedHost {
    /**
     * IP address of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ip: string;
  
    /**
     * Share name of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    shareName: string;
    
    /**
     * Workgroup name of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    workgroupName: string;
  }

  /**
   * Get all available shared hosts.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<SharedHost[]> } Promise that resolves with the list of shared hosts.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getSharedHosts(): Promise<SharedHost[]>;

  /**
   * Authenticate SMB device as registered user and get available printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { SharedHost } host - The SMB host to authenticate.
   *     <br>The SMB host to authenticate.
   * @param { string } username - The username for authentication.
   *     <br>User name used for authentication.
   * @param { string } password - The password for authentication.
   *     <br>Password used for authentication.
   * @returns { Promise<PrinterInformation[]> } Promise that resolves with the list of available printers.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100012 - SMB account is locked due to multiple failed login attempts.
   * @throws { BusinessError } 13100013 - SMB connection failed (network error, host unreachable, or port blocked).
   * @throws { BusinessError } 13100014 - Invalid login account or password.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function authSmbDeviceAsRegisteredUser(host: SharedHost, username: string, password: string): Promise<PrinterInformation[]>;

  /**
   * Check preferences conflicts.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Added printer ID in the system.
   * @param { string } changedType - Indicates the field name that was modified on the printing interface.
   *     <br>Field names set in the print preview or preferences interface.
   * @param { PrinterPreferences } preferences - Indicates the selected value on the printing interface.
   *     <br>The selected value on the printinginterface.
   * @returns { Promise<string[]> } Promise that resolves with the conflicting field names.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer or printer's ppd file in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function checkPreferencesConflicts(printerId: string, changedType: string, preferences: PrinterPreferences): Promise<string[]>;

  /**
   * Get default preferences by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Added printer ID in the system.
   * @returns { Promise<PrinterPreferences> } - Promise that resolves with the default preferences of the printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer or printer's ppd file in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getPrinterDefaultPreferences(printerId: string): Promise<PrinterPreferences>;

  /**
   * Query printer capabilityies by printer uri.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - Indicates the printer uri.
   *     <br>Printer URI in the process of connecting.
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID in the process of connecting.
   * @returns { Promise<PrinterCapabilities> } - Promise that resolves with the printer capabilityies.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>;

  /**
   * Add a printer to cups.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - Indicates the printer uri.
   *     <br>Printer URI in the process of connecting.
   * @param { string } printerName - Indicates the printer name.
   *     <br>Printer name in the process of connecting.
   * @param { string } printerMake - Indicates the printer make.
   *     <br>Printer make in the process of connecting.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100003 - Add a printer to cups failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>;

  /**
   * Delete a printer from cups.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerName - Indicates the printer name.
   *     <br>Printer name to be deleted.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function deletePrinterFromCups(printerName: string): Promise<void>;

  /**
   * Authenticate a print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the print job ID.
   *     <br>Job ID to be printed.
   * @param { string } userName - Indicates the user name.
   *     <br>Indicates the user name.
   * @param { string } password - Indicates the user password.
   *     <br>Indicates the user password.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100006 - Can not find the print job.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function authPrintJob(jobId: string, userName: string, password: string): Promise<boolean>;

  /**
   * Analyze print events.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID to be analyzed.
   * @param { string } eventType - Indicates the avant type.
   *     <br>Event types to be analyzed.
   * @returns { Promise<string> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function analyzePrintEvents(printerId: string, eventType: string): Promise<string>;

  /**
   * defines ppd info.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface PpdInfo {
    /**
     * Manufacturer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    manufacturer: string;

    /**
     * Nick name.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    nickName: string;

    /**
     * Ppd name.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ppdName: string;
  }

  /**
   * Query all printer ppds.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<PpdInfo[]> } - Promise that resolves with all printer ppd info.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryAllPrinterPpds(): Promise<PpdInfo[]>;

  /**
   * Defines the callback type used in registering to listen for printerInfoQuery event.
   * The value of printerInfo indicates the printer info.
   * The value of ppdInfo indicates all the printer ppd info.
   *
   * @param { PrinterInformation } printerInfo - the printer info
   *     <br>Printer Information.
   * @param { PpdInfo[] } ppdInfo - all the printer ppd info
   *     <br>All the printer ppd info.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type PrinterInfoQueryCallback = (printerInfo: PrinterInformation, ppdInfo: PpdInfo[]) => void;

  /**
   * Register event callback for the printer info queried.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } callback - The callback function for the printer info queried.
   *     <br>The callback function for the printer info queried.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function onPrinterInfoQuery(callback: PrinterInfoQueryCallback): void;

  /**
   * Unregister event callback for the printer info queried.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } [callback] - The callback function for the printer info queried.
   *     <br>The callback function for the printer info queried.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function offPrinterInfoQuery(callback?: PrinterInfoQueryCallback): void;

  /**
   * Query printer info by ip.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - Indicates the printer IP.
   *     <br>Indicates the printer IP.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Invalid printer IP.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryPrinterInfoByIp(printerIp: string): Promise<void>;

  /**
   * Connect a printer by the printer IP and ppd.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - Indicates the printer IP.
   *     <br>IP of the printer to be connected.
   * @param { string } protocol - Indicates the protocol.
   *     <br>Protocol of the printer to be connected.
   * @param { string } ppdName - Indicates the ppd name.
   *     <br>Ppd name of the printer to be connected.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Invalid printer IP.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectPrinterByIpAndPpd(printerIp: string, protocol: string, ppdName: string): Promise<void>;

  /**
   * Save the pdf file for a print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the print job ID.
   *     <br>The print job ID to which the file to be saved belongs.
   * @param { int } fd - Indicates the fd.
   *     <br>Fd of the file to be saved.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100006 - Invalid job ID.
   * @throws { BusinessError } 13100007 - Save file failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function savePdfFileJob(jobId: string, fd: int): Promise<void>;

  /**
   * Query recommend printer drivers by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Indicates the printer ID.
   * @returns { Promise<PpdInfo[]> } - Promise that resolves with all ppd info of the printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryRecommendDriversById(printerId: string): Promise<PpdInfo[]>;

  /**
   * Query recommend printer drivers by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID of the printer to be connected.
   * @param { string } protocol - Indicates the protocol.
   *     <br>Protocol of the printer to be connected.
   * @param { string } ppdName - Indicates the ppd name.
   *     <br>Ppd name of the printer to be connected.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100003 - Add the printer to system failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectPrinterByIdAndPpd(printerId: string, protocol: string, ppdName: string): Promise<void>;

  /**
   * Add a printer to system.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINTER_DRIVER
   * @param { string } printerName - Indicates the printer name.
   *     <br>Name of the printer to be added.
   * @param { string } uri - Indicates the printer uri.
   *     <br>Uri of the printer to be added.
   * @param { string } [ppdName] - Indicates the ppd name.
   *     <br>Ppd name of the printer to be added.
   * @param { string } [options] - Indicates the options.
   *     <br>Optional parameters when adding a printer.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 13100003 - Add the printer to system failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function addPrinter(printerName: string, uri: string, ppdName?: string, options?: string): Promise<boolean>;

  /**
   * Watermark handling result.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum WatermarkHandleResult {
    /**
     * Watermark handling success.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_SUCCESS = 0,

    /**
     * Watermark handling failure.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_FAILURE = 1,
  }

  /**
   * Defines the callback type used in registering to listen for watermark handling.
   * The value of jobId indicates the print job ID.
   * The value of fd indicates the fd.
   *
   * @param { string } jobId - the print job ID
   *     <br>Print job ID in preview.
   * @param { int } fd - File Descriptor
   *     <br>File descriptor in preview.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type WatermarkCallback = (jobId: string, fd: int) => void;

  /**
   * Register to listen for watermark handling.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } callback - Indicates the callback type used in registering to 
   *     listen for watermark handling.
   *     <br>Indicates the callback type used in registering to listen for watermark handling.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function registerWatermarkCallback(callback: WatermarkCallback): void;

  /**
   * Unregister to listen for watermark handling.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } [callback] - Indicates the callback type used in registering to 
   *     listen for watermark handling.
   *     <br>Indicates the callback type used in registering to listen for watermark handling.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function unregisterWatermarkCallback(callback?: WatermarkCallback): void;

  /**
   * Notify watermark complete.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { string } jobId - Indicates the job ID.
   *     <br>Print job ID in preview.
   * @param { WatermarkHandleResult } result - Indicates the result.
   *     <br>Watermark processing results.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function notifyWatermarkComplete(jobId: string, result: WatermarkHandleResult): void;
}

export default print;