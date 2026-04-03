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
 * @kit BasicServicesKit
 */

import { BusinessError } from './@ohos.base';
import { Callback } from './@ohos.base';

/**
 * Cache download capability provider.
 *
 * @namespace cacheDownload
 * @syscap SystemCapability.Request.FileTransferAgent
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace cacheDownload {
    /**
     * The secure communication protocol.
     *
     * @enum { string }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 21 dynamic
     * @since 23 static
     */
    enum SslType {
        /**
         * Transport Layer Security.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        TLS = 'TLS',
        /**
         * Transport layer cryptography protocol.
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        TLCP = 'TLCP'
    }

    /**
     * Cache strategy for resources.
     *
     * @enum { int } CacheStrategy
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    enum CacheStrategy {
        /**
         * Force update of cache regardless of whether it already exists.
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        FORCE = 0,
        /**
         * Updates the cache only if the cached resource does not exist.
         *
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        LAZY = 1,
    }

    /**
     * Error codes categorizing different types of cache download failures.
     *
     * @enum { int } ErrorCode
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    enum ErrorCode {  
        /**
         * Other unspecified errors.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        OTHERS = 0xFF,

        /**
         * DNS-related errors.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        DNS = 0x00,

        /**
         * TCP connection errors.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        TCP = 0x10,

        /**
         * SSL security errors.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        SSL = 0x20,
        
        /**
         * HTTP protocol errors.
         * 
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        HTTP = 0x30,
    }

    /**
     * Options of the cache download task.
     *
     * @typedef CacheDownloadOptions
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    interface CacheDownloadOptions {
        /**
         * HTTP headers added to the cache download request.
         *
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 18 dynamic
         * @since 23 static
         */
        headers?: Record<string, string>;
        /**
         * Which secure communication protocol is used.
         * If this value is not specified, use { @link SslType#TLS } by default.
         *
         * @type { ?SslType }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        sslType?: SslType;
        /**
         * The path to the CA certificate within the application.
         * The default value is an empty string.
         * 
         * @type { ?string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 21 dynamic
         * @since 23 static
         */
        caPath?: string;
        /**
         * Cache update strategy for resources.
         * The default value is `CacheStrategy.FORCE`.
         *
         * @type { ?CacheStrategy }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        cacheStrategy?: CacheStrategy;
    }

    /**
     * Resource information of historical cache downloads.
     *
     * @typedef ResourceInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface ResourceInfo {
        /**
         * The decompressed size of the downloaded resource.
         * If the value is -1, it means the resource is not downloaded successfully.
         * 
         * @type { long }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly size: long;
    }

    /**
     * Network information of historical cache downloads.
     *
     * @typedef NetworkInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface NetworkInfo {
        /**
         * The DNS server list is used when downloading resources.
         *
         * @type { string[] }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly dnsServers: string[];
        /**
         * The IP address of a specific URL is used when downloading resources.
         * If the value is undefined, it means that the DNS resolution fails and the IP address cannot be obtained.
         *
         * @type { ?string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly ip?: string;
    }

    /**
     * Performance information of historical cache downloads.
     *
     * @typedef PerformanceInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface PerformanceInfo {
        /**
         * Time taken from startup to DNS resolution completion, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly dnsTime: double;
        /**
         * Time taken from startup to TCP connection completion, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly connectTime: double;
        /**
         * Time taken from startup to TLS connection completion, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly tlsTime: double;
        /**
         * Time taken from startup to start sending the first byte, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly firstSendTime: double;
        /**
         * Time taken from startup to receiving the first byte, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly firstReceiveTime: double;
        /**
         * Time taken from startup to the completion of the request, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly totalTime: double;
        /**
         * Time taken from startup to completion of all redirection steps, in milliseconds.
         *
         * @type { double }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly redirectTime: double;
    }

    /**
     * Download information of historical cache downloads.
     *
     * @typedef DownloadInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    interface DownloadInfo {
        /**
         * Resource information of historical cache downloads.
         *
         * @type { ResourceInfo }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly resource: ResourceInfo;
        /**
         * Network information of historical cache downloads.
         *
         * @type { NetworkInfo }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly network: NetworkInfo;
        /**
         * Performance information of historical cache downloads.
         *
         * @type { PerformanceInfo }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 20 dynamic
         * @since 23 static
         */
        readonly performance: PerformanceInfo;
    }

    /**
     * Interface for download error information.
     *
     * @typedef DownloadError
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    interface DownloadError {
        /**
         * Unique error code identifying the specific type of cache download failure.
         *
         * @type { ErrorCode }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly errorCode: ErrorCode;
        /**
         * Descriptive error message explaining the failure reason.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 23 dynamic&static
         */
        readonly message: string;
    }

    /**
     * Downloads resources at the specified URL. Resources will be stored in memory cache or files cache.
     * The maximum size of the specified URL is 8192 bytes.
     * The maximum size of a single resource after decompression is 20,971,520 bytes(20 MB).
     * If the decompressed size of the downloaded resource exceeds the limit, it will not be recorded in the cache.
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - URL of the cache download target.
     * @param { CacheDownloadOptions } options - Options of the cache download task.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function download(url: string, options: CacheDownloadOptions): void;

    /**
     * Cancels an ongoing cache download task based on the target URL.
     * The maximum size of the specified URL is 8192 bytes.
     *
     * @param { string } url - URL of the cache download target.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function cancel(url: string): void;

    /**
     * Sets the size of the memory cache used to store downloaded content.
     * The default size is 0 bytes.
     * The maximum size is 1,073,741,824 bytes(1 GB).
     *
     * @param { long } bytes - The maximum amount of data cached in memory, in bytes.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     *     2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function setMemoryCacheSize(bytes: long): void;

    /**
     * Sets the size of the file cache used to store downloaded content.
     * The default size is 104,857,600 bytes(100 MB).
     * The maximum size is 4,294,967,296 bytes(4 GB).
     *
     * @param { long } bytes - The maximum amount of data cached in files, in bytes.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     *     2. Incorrect parameter type. 3. Parameter verification failed.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 18 dynamic
     * @since 23 static
     */
    function setFileCacheSize(bytes: long): void;

    /**
     * Gets download information of cache downloads based on URL.
     * These information are stored in memory and cleared when the application exits.
     * The maximum size of the specified URL is 8192 bytes.
     * If the specified URL can be found in the download information list,
     * return { @link DownloadInfo } of the most recent download.
     * If the specified URL can not be found in the download information list, return `undefined`.
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     * @param { string } url - URL to be queried.
     * @returns { DownloadInfo | undefined } the information of the specified cache download or none.
     * @throws { BusinessError } 201 - permission denied.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    function getDownloadInfo(url: string): DownloadInfo | undefined;

    /**
     * Sets the maximum size of the download information list.
     * The download information list is used to store download information  .
     * URLs and download information correspond one to one.
     * Each download will generate a download information.
     * Under the same URL, only the latest download information will be saved.
     * The default value of the specified size is 0. It means no download information can be stored.
     * The maximum value of the specified size is 8192.
     *
     * @param { long } size - the size of the download information list.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20 dynamic
     * @since 23 static
     */
    function setDownloadInfoListSize(size: long): void;

    /**
     * Clears the memory cache used to store downloaded content.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function clearMemoryCache(): void;
   
    /**
     * Clears the file cache used to store downloaded content.
     *
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function clearFileCache(): void;
    /**
     * Registers a callback function for successful download events.
     * The maximum size of the specified URL is 8192 bytes.
     *
     * @param { string } url - URL of the cache download target.
     * @param { Callback<void> } callback - Callback function to be executed when download succeeds.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function onDownloadSuccess(url: string, callback: Callback<void>): void;

    /**
     * Registers a callback function for download error events.
     * The maximum size of the specified URL is 8192 bytes.
     *
     * @param { string } url - URL of the cache download target.
     * @param { Callback<DownloadError> } callback - Callback function to be executed when download fails.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function onDownloadError(url: string, callback: Callback<DownloadError>): void;

    /**
     * Unregisters callback function for successful download events.
     * The maximum size of the specified URL is 8192 bytes.
     * 
     * @param { string } url - URL of the cache download target.
     * @param { Callback<void> } [callback] - Callback function to be executed when download succeeds.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function offDownloadSuccess(url: string, callback?: Callback<void>): void;

    /**
     * Unregisters callback function for download error events.
     * The maximum size of the specified URL is 8192 bytes.
     *
     * @param { string } url - URL of the cache download target.
     * @param { Callback<DownloadError> } [callback] - Callback function to be executed when download fails.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 23 dynamic&static
     */
    function offDownloadError(url: string, callback?: Callback<DownloadError>): void;
}

export default cacheDownload;