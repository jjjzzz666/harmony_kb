/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * System scan
 *
 * @namespace scan
 * @syscap SystemCapability.Print.PrintFramework
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace scan {
    /**
     * Enumeration of scan error codes.
     * @enum { int } ScanErrorCode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScanErrorCode {
        /**
         * No permission error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_PERMISSION = 201,

        /**
         * Not system application error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NOT_SYSTEM_APPLICATION = 202,

        /**
         * Invalid parameter error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID_PARAMETER = 401,

        /**
         * Generic failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_GENERIC_FAILURE = 13100001,

        /**
         * RPC failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_RPC_FAILURE = 13100002,

        /**
         * Server failure error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_SERVER_FAILURE = 13100003,

        /**
         * Unsupported operation error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_UNSUPPORTED = 13100004,

        /**
         * Operation canceled error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_CANCELED = 13100005,

        /**
         * Device busy error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_DEVICE_BUSY = 13100006,

        /**
         * Invalid operation error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_INVALID = 13100007,

        /**
         * Paper jam error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_JAMMED = 13100008,

        /**
         * No documents error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_DOCS = 13100009,

        /**
         * Cover open error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_COVER_OPEN = 13100010,

        /**
         * I/O error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_IO_ERROR = 13100011,

        /**
         * No memory error.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_ERROR_NO_MEMORY = 13100012,
    }

    /**
     * Enumeration of constraint types.
     * @enum { int } ConstraintType
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ConstraintType {
        /**
         * No constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_NONE = 0,

        /**
         * Range constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_RANGE = 1,

        /**
         * Word list constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_WORD_LIST = 2,

        /**
         * String list constraint.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_CONSTRAINT_STRING_LIST = 3,
    }

    /**
     * Enumeration of physical units.
     * @enum { int } PhysicalUnit
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum PhysicalUnit {
        /**
         * No unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_NONE = 0,

        /**
         * Pixel unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PIXEL = 1,

        /**
         * Bit unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_BIT = 2,

        /**
         * Millimeter unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MM = 3,

        /**
         * DPI unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_DPI = 4,

        /**
         * Percentage unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_PERCENT = 5,

        /**
         * Microsecond unit.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_UNIT_MICROSECOND = 6,
    }

    /**
     * Enumeration of option value types.
     * @enum { int } OptionValueType
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum OptionValueType {
        /**
         * Boolean type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_BOOL = 0,

        /**
         * Integer type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_INT = 1,

        /**
         * Fixed point type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_FIXED = 2,

        /**
         * String type.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        SCAN_TYPE_STRING = 3,
    }

    /**
     * Enumeration of scanner sync modes.
     * @enum { string } ScannerSyncMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerSyncMode {
        /**
         * Update mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        UPDATE_STR = 'update',

        /**
         * Delete mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        DELETE_STR = 'delete',
    }

    /**
     * Enumeration of scanner discovery modes.
     * @enum { string } ScannerDiscoveryMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    enum ScannerDiscoveryMode {
        /**
         * TCP discovery mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        TCP_STR = 'TCP',

        /**
         * USB discovery mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        USB_STR = 'USB',
    }

    /**
     * Defines a range with minimum, maximum and quantization values.
     * @typedef Range
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface Range {
        /**
         * Minimum value of the range.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        minValue: int;

        /**
         * Maximum value of the range.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        maxValue: int;

        /**
         * Quantization value of the range.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        quantValue: int;
    }

    /**
     * Defines scanner parameters.
     * @typedef ScannerParameter
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerParameter {
        /**
         * Name of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionName: string;

        /**
         * Index of the option.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionIndex: int;

        /**
         * Title of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionTitle: string;

        /**
         * Description of the option.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionDesc: string;

        /**
         * Type of the option value.
         * @type { OptionValueType }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionType: OptionValueType;

        /**
         * Physical unit of the option.
         * @type { PhysicalUnit }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionUnit: PhysicalUnit;

        /**
         * Constraint type of the option.
         * @type { ConstraintType }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintType: ConstraintType;

        /**
         * String constraints for the option.
         * @type { ?string[] }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintString?: string[];

        /**
         * Int constraints for the option.
         * @type { ?int[] }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintInt?: int[];

        /**
         * Range constraints for the option.
         * @type { ?Range }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        optionConstraintRange?: Range;
    }

    /**
     * Defines scanner option values.
     * @typedef ScannerOptionValue
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerOptionValue {
        /**
         * Type of the value.
         * @type { OptionValueType }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        valueType: OptionValueType;

        /**
         * Numeric value.
         * @type { ?int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        numValue?: int;

        /**
         * String value.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        strValue?: string;

        /**
         * Boolean value.
         * @type { ?boolean }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        boolValue?: boolean;
    }

    /**
     * Defines picture scan progress.
     * @typedef PictureScanProgress
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface PictureScanProgress {
        /**
         * Current progress percentage.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        progress: int;

        /**
         * File descriptor of the scanned picture.
         * @type { int }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        pictureFd: int;

        /**
         * Whether this is the final progress update.
         * @type { boolean }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        isFinal: boolean;
    }

    /**
     * Defines scanner device information.
     * @typedef ScannerDevice
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    interface ScannerDevice {
        /**
         * Unique identifier of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;

        /**
         * Discovery mode of the scanner.
         * @type { ScannerDiscoveryMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * Unique ID of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * Manufacturer of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        manufacturer: string;

        /**
         * Model of the scanner.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        model: string;

        /**
         * Name of the scanner device.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        deviceName: string;
    }

    /**
     * Defines scanner sync device information.
     * @typedef ScannerSyncDevice
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
    */
    interface ScannerSyncDevice {
        /**
         * Scanner ID.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        scannerId: string;
            /**
         * Discovery mode.
         * @type { ScannerDiscoveryMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        discoveryMode: ScannerDiscoveryMode;

        /**
         * Unique ID.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        uniqueId: string;

        /**
         * Sync mode.
         * @type { ScannerSyncMode }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        syncMode: ScannerSyncMode;

        /**
         * Old scanner ID, which is valid only when syncMode is "update".
		 * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 20 dynamic
         * @since 23 static
         */
        oldScannerId?: string;
    }

    /**
     * Initialize the scan service.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function init(): Promise<void>;

    /**
     * Exit the scan service.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function exit(): Promise<void>;

    /**
     * Start discovering scanners.
     * @permission ohos.permission.PRINT
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScannerDiscovery(): Promise<void>;

    /**
     * Open a scanner.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner to open.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function openScanner(scannerId: string): Promise<void>;

    /**
     * Close a scanner.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner to close.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function closeScanner(scannerId: string): Promise<void>;

    /**
     * Get scanner parameters.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<ScannerParameter[]> } the promise returned with scanner parameters.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>;

    /**
     * Set scanner parameter.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { int } optionIndex - The index of the option to set.
     * @param { ScannerOptionValue } value - The value to set.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScannerParameter(scannerId: string, optionIndex: int, value: ScannerOptionValue): Promise<void>;

    /**
     * Set scan option to auto.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { int } optionIndex - The index of the option to set to auto.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function setScanAutoOption(scannerId: string, optionIndex: int): Promise<void>;

    /**
     * Get current scanner setting.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { int } optionIndex - The index of the option to get.
     * @returns { Promise<ScannerOptionValue> } the promise returned with the current setting.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>;

    /**
     * Start scanning.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @param { boolean } batchMode - Whether to use batch mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function startScan(scannerId: string, batchMode: boolean): Promise<void>;

    /**
     * Cancel scanning.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function cancelScan(scannerId: string): Promise<void>;

    /**
     * Get picture scan progress.
     * @permission ohos.permission.PRINT
     * @param { string } scannerId - The ID of the scanner.
     * @returns { Promise<PictureScanProgress> } the promise returned with scan progress.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>;

    /**
     * Add a scanner (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - The unique ID of the scanner.
     * @param { ScannerDiscoveryMode } discoveryMode - The discovery mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * Delete a scanner (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } uniqueId - The unique ID of the scanner.
     * @param { ScannerDiscoveryMode } discoveryMode - The discovery mode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

    /**
     * Get added scanners (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @returns { Promise<ScannerDevice[]> } the promise returned with scanner devices.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    function getAddedScanners(): Promise<ScannerDevice[]>;

    /**
     * Register event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback for device found event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } callback - Callback for device found event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceFound(callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { 'scanDeviceFound' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device found.
     * @permission ohos.permission.PRINT
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceFound(callback?: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device sync.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } callback - Callback for device sync event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void;

    /**
     * Register event callback for scanner device sync.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } callback - Callback for device sync event.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function onScanDeviceSync(callback: Callback<ScannerSyncDevice>): void;

    /**
     * Unregister event callback for scanner device sync.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceSync' } type - Event type.
     * @param { Callback<ScannerSyncDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void;

    /**
     * Unregister event callback for scanner device sync.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerSyncDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    function offScanDeviceSync(callback?: Callback<ScannerSyncDevice>): void;

    /**
     * Register event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback for device add event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceAdd', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - Callback for device add event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceAdd(callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceAdd' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device add (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceAdd(callback?: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } callback - Callback for device delete event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function on(type: 'scanDeviceDel', callback: Callback<ScannerDevice>): void;

    /**
     * Register event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } callback - Callback for device delete event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function onScanDeviceDel(callback: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { 'scanDeviceDel' } type - Event type.
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void;

    /**
     * Unregister event callback for scanner device delete (system API).
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    function offScanDeviceDel(callback?: Callback<ScannerDevice>): void;
}
export default scan;