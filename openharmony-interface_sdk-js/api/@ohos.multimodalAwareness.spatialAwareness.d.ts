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
 * @kit MultimodalAwarenessKit
 */
import type { Callback } from './@ohos.base';
/**
 * This module provides the capability to subscribe to report the distance measurement result.
 * @namespace spatialAwareness
 * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace spatialAwareness {
  /**
   * Enum for distance measurement technology types.
   *
   * @enum { int } TechnologyType
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum TechnologyType {
    /**
     * indicates Bluetooth Low Energy (BLE) technology
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BLE_RSSI = 0,
    /**
     * indicates Wi-Fi technology
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    WIFI_RSSI = 1,
    /**
     * indicates ultrasound technology
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ULTRASOUND = 2,
    /**
     * indicates NearLink technology
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NEAR_LINK = 3,
    /**
     * indicates Wi-Fi and Bluetooth technology
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    WIFI_BLE_RSSI = 4
  }
  /**
   * Enum for distance measurement result reporting modes.
   * @enum { int } ReportingMode
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum ReportingMode {
    /**
     * indicates periodic reporting
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REPORT_MODE_PERIODIC_REPORTING = 0,
    /**
     * indicates triggered reporting
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REPORT_MODE_TRIGGERED_REPORTING = 1
  }
  
  /**
   * Enum for distance rank.
   *
   * @enum { string } DistanceRank
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum DistanceRank {
    /**
     * indicates ultra-short range
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_ULTRA_SHORT_RANGE = 'rankUltraShort',
    /**
     * indicates short range
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_SHORT_RANGE = 'rankShort',
    /**
     * indicates medium-short range
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_SHORT_MEDIUM_RANGE = 'rankMediumShort',
    /**
     * indicates medium range
     *
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANK_MEDIUM_RANGE = 'rankMedium'
  }
  
  /**
   * Interface for distance measurement result
   * @interface DistanceMeasurementResponse
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DistanceMeasurementResponse {
    /**
     * indicates distance rank
     * @type { DistanceRank }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rank: DistanceRank;
    /**
     * indicates distance result
     * @type { float }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    distance: float;
    /**
     * indicates confidence of distance measurement
     * @type { float }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    confidence: float;
    /**
     * indicates the ID of the remote ranging device
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;
  }
  
  /**
   * Enum for identification result inside and outside the door
   *
   * @enum { int } PositionRelativeToDoor
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum PositionRelativeToDoor {
   /**
    * indicates outdoor result
    * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   OUTDOOR = 0,
   /**
    * indicates indoor result
    * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   INDOOR = 1
  }
  
  /**
   * Interface for indoor or outdoor identify result
   * @interface DoorPositionResponse
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DoorPositionResponse {
    /**
     * indicates random code for unlocking the door
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    doorLockCode: int;
    /**
     * indicates result inside and outside the door
     * @type { PositionRelativeToDoor }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    position: PositionRelativeToDoor;
    /**
     * indicates the ID of the remote ranging device
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;
  }
  
  /**
   * Configuration parameters for the distance measurement interface
   * @interface DistanceMeasurementConfigParams
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface DistanceMeasurementConfigParams {
    /**
     * distance measurement supported devices list
     * @type { string[]}
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceList: string[];
    /**
     * distance measurement technology type
     * @type { TechnologyType }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    techType: TechnologyType;
    /**
     * distance measurement result reporting mode
     * @type { ReportingMode }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportMode: ReportingMode;
    /**
     * distance measurement result reporting frequency
     * @type { int }
     * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportFrequency: int;
  }

  /**
   * Subscribe to distance measurement result data.
   * @param { DistanceMeasurementConfigParams } configParams - Configuration parameters for distance measurement.
   * @param { Callback<DistanceMeasurementResponse> } callback - Callback distance measurement results.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100002 - Subscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DistanceMeasurementResponse>): void;

  /**
   * Unsubscribe to distance measurement result data.
   * @param { DistanceMeasurementConfigParams } configParams - Configuration parameters for distance measurement.
   * @param { Callback<DistanceMeasurementResponse> } [callback] - Callback distance measurement results.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100003 - UnSubscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offDistanceMeasure(configParams: DistanceMeasurementConfigParams,
    callback?: Callback<DistanceMeasurementResponse>): void;
   
  /**
   * Subscribe to the results of indoorand outdoor identification.
   * @param { DistanceMeasurementConfigParams } configParams - Configuration parameters for distance measurement.
   * @param { Callback<DoorPositionResponse> } callback - Callback indoor and outdoor identification results.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100002 - Subscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onIndoorOrOutdoorIdentify(configParams: DistanceMeasurementConfigParams,
    callback: Callback<DoorPositionResponse>): void;
   
  /**
   * Unsubscribe to the results of indoor and outdoor recognition.
   * @param { DistanceMeasurementConfigParams } configParams - Configuration parameters for distance measurement.
   * @param { Callback<DoorPositionResponse> } [callback] - Callback indoor and outdoor identification results.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 35100001 - Service exception.
   * @throws { BusinessError } 35100003 - Unsubscription failed.
   * @throws { BusinessError } 35100004 - Parameter invalid.
   * @syscap SystemCapability.MultimodalAwareness.DistanceMeasurement
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offIndoorOrOutdoorIdentify(configParams: DistanceMeasurementConfigParams,
    callback?: Callback<DoorPositionResponse>): void;
}
export default spatialAwareness;
