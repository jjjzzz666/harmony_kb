/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @since 7
 */
/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform
 * @since 10
 */
/**
 * Provides interfaces to generate system logs.
 *
 * @namespace hilog
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hilog {

  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs debug-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function debug(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Outputs debug-level logs.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { RecordData[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function debug(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs info-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function info(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Outputs info-level logs.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { RecordData[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function info(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs warning-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function warn(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Outputs warning-level logs.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { RecordData[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function warn(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs error-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function error(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Outputs error-level logs.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { RecordData[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Outputs fatal-level logs.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { any[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function fatal(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Outputs fatal-level logs.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { string } format Indicates the log format string.
   * @param { RecordData[] }args Indicates the log parameters.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function fatal(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Checks whether logs of the specified tag, and level can be printed.
   *
   * @param { number } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { LogLevel } level log level
   * @returns { boolean }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Checks whether logs of the specified tag, and level can be printed.
   *
   * @param { int } domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFF
   *                          if the value exceeds the range, logs cannot be printed.
   * @param { string } tag Identifies the log tag, length cannot exceed 32 bytes, the excess part will be truncated.
   * @param { LogLevel } level log level
   * @returns { boolean }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function isLoggable(domain: int, tag: string, level: LogLevel): boolean;

  /**
   * Sets the lowest log level of the current application process.
   *
   * @param { LogLevel } level log level
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
   function setMinLogLevel(level: LogLevel): void;

  /**
   * Sets the lowest log level of the current application process. Different preference strategy can be set.
   * 
   * @param { LogLevel } level log level.
   * @param { PreferStrategy } prefer preference strategy. See detail in PreferStrategy.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setLogLevel(level: LogLevel, prefer: PreferStrategy): void;

  /**
   * Log level define
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @since 7
   */
  /**
   * Log level define
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @since 10
   */
  /**
   * Log level define
   *
   * @enum { int }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum LogLevel {
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * DEBUG Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DEBUG = 3,
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * INFO Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INFO = 4,
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * WARN Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WARN = 5,
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * ERROR Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ERROR = 6,
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @since 7
     */
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @since 10
     */
    /**
     * FATAL Log level define
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    FATAL = 7
  }

  /**
   * Enumerates preference strategy to be used in setLogLevel.
   * 
   * @enum { int }
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PreferStrategy {
      /**
       * UNSET_LOGLEVEL Used to unset SetLogLevel, then none is set
       * 
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @crossplatform
       * @atomicservice
       * @since 21 dynamic
       * @since 23 static
       */
      UNSET_LOGLEVEL = 0,
      /**
       * PREFER_CLOSE_LOG The actual lowest log level is determined by
       * the maximum level between the new level and the system-controlled level.
       * This is equivalent to calling OH_LOG_SetMinLogLevel.
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @crossplatform
       * @atomicservice
       * @since 21 dynamic
       * @since 23 static
       */
      PREFER_CLOSE_LOG = 1,
      /**
       * PREFER_OPEN_LOG The actual lowest log level is determined by
       * the minimum level between the new level and the system-controlled level.
       * @syscap SystemCapability.HiviewDFX.HiLog
       * @crossplatform
       * @atomicservice
       * @since 21 dynamic
       * @since 23 static
       */
      PREFER_OPEN_LOG = 2,
  }
}

export default hilog;