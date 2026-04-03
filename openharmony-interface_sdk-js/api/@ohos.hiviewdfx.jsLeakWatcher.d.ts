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
 * @kit PerformanceAnalysisKit
 */

/**
 * This module provides the capability to monitor leakage of JS objects.
 *
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @since 12 dynamic
 * @since 26.0.0 static
 */
declare namespace jsLeakWatcher {
  /**
   * Enable or disable jsLeakWatcher.
   *
   * @param { boolean } isEnable - True is enable jsLeakWatcher, false is disable jsLeakWatcher.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  function enable(isEnable: boolean): void;

  /**
   * Register an object that needs to be monitored.
   *
   * @param { object } obj - Object being monitored.
   * @param { string } msg - Customized object information.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  function watch(obj: object, msg: string): void;

  /**
   * Check suspected leaked objects.
   *
   * @returns { string } List of suspected leaked objects in JSON format.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  function check(): string;

  /**
   * Dump leak list and heap snapshot.
   *
   * @param { string } filePath - Directory for exporting files.
   * @returns { Array<string> } The array of exported results, index 0 is leakListFileName, index 1 is heapSnapShotFileName.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  function dump(filePath: string): Array<string>;

  /**
   * Enables or disables jsLeakWatcher.
   *
   * This interface can detect js object memory leaks in a single call, which is more concise than the previous method
   * requiring four function (enable,watch,check dump) calls.If there is a memory leak, the leak file will be
   * returned to the developer through the callback function.
   *
   * @param { boolean } isEnabled - Whether to enable or disable jsLeakWatcher.
   *     The value true means to enable the feature, and false means the opposite.
   * @param { Array<string> } configs - Array of types of objects to watch.
   * @param { Callback<Array<string>> } callback - Callback invoked when an object-related memory leak is detected.
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   *     Input parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  function enableLeakWatcher(isEnabled: boolean, configs: Array<string>, callback: Callback<Array<string>>): void;

  /**
   * The types of component objects to be monitored.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.0.0 static
   */
  export declare enum MonitorObjectType {
    /**
     * Monitor all object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    ALL = -1,
    /**
     * Monitor CustomComponent object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    CUSTOM_COMPONENT = 1 << 0,
    /**
     * Monitor Window object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    WINDOW = 1 << 1,
    /**
     * Monitor NodeContainer object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    NODE_CONTAINER = 1 << 2,
    /**
     * Monitor XComponent object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    X_COMPONENT = 1 << 3,
    /**
     * Monitor Ability object types.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    ABILITY = 1 << 4
  }

  /**
   * JSLeakWatcher Configurations.
   *
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.0.0 static
   */
  interface LeakWatcherConfig {
    /**
     * The types of component objects to be monitored.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    monitorObjectTypes: MonitorObjectType;
    /**
     * List of monitored object IDs. Default: value is an empty array. This field applies only to CUSTOM_COMPONENT type.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    objectUniqueIDs?: Array<int>;
    /**
     * Interval between each leak detection cycle. Default: value is 30000 ms.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    checkInterval?: int;
    /**
     * The first time to triggers a dump when the count of leaked objects reaches the specified threshold
     * while the application is in the foreground.
     * Default: 5.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    fgLeakCountThreshold?: int;
    /**
     * The first time to triggers a dump when the count of leaked objects reaches the specified threshold
     * while the application is in the background.
     * Default: 1.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    bgLeakCountThreshold?: int;
    /**
     * Maximum int of dump files that can be saved to prevent the disk space from being exhausted.
     * Default: value is 10.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    maxStoredHeapDumps?: int;
    /**
     * Delay the dump execution to ensure that the GC can be scheduled and executed before the dump is performed.
     * Default: value is 5000 ms.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    dumpHeapWaitTimeMs?: int;
    /**
     * Exclude objects from monitoring based on their component, ability, or window names.
     * Default: value is an empty array.
     *
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    exclusionList?: Array<string>;
  }

  /**
   * Enables or disables jsLeakWatcher.
   *
   * This interface can detect js object memory leaks in a single call, which is more concise than the previous method
   * requiring four functions (enable, watch, check, dump) calls.If there is a memory leak, the leak file will be
   * returned to the developer through the callback function.
   * Furthermore, parameters such as object's unique IDs for monitored objects and check interval can be adjusted via
   * the configs parameter.
   *
   * @param { boolean } isEnabled - Whether to enable or disable jsLeakWatcher.
   *     The value true means to enable the feature, and false means the opposite.
   * @param { LeakWatcherConfig } configs - Configuration of monitored.
   * @param { Callback<Array<string>> } callback - Callback invoked when an object-related memory leak is detected.
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   *     Input parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   * @since 26.0.0 static
   */
  function enableLeakWatcher(isEnabled: boolean, configs: LeakWatcherConfig, callback: Callback<Array<string>>): void;
}
export default jsLeakWatcher;
