/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit SensorServiceKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * This module provides the capability to subscribe to sensor data.
 * @namespace sensor
 * @syscap SystemCapability.Sensors.Sensor
 * @since 8
 */
/**
 * This module provides the capability to subscribe to sensor data.
 * @namespace sensor
 * @syscap SystemCapability.Sensors.Sensor
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace sensor {
  /**
   * Enum for obtain the type of sensor.
   * @enum { number }
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Enum for obtain the type of sensor.
   * @enum { int }
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum SensorId {
    /**
     * Acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9
     */
    /**
     * Acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCELEROMETER = 1,

    /**
     * Gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9
     */
    /**
     * Gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    GYROSCOPE = 2,

    /**
     * Ambient light sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD = 6,

    /**
     * Barometric pressure sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    BAROMETER = 8,

    /**
     * Hall effect sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HALL = 10,

    /**
     * Proximity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PROXIMITY = 12,

    /**
     * Humidity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HUMIDITY = 13,

    /**
     * Color sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COLOR = 14,

    /**
     * Sar sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SAR = 15,

    /**
     * Orientation sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9
     */
    /**
     * Orientation sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ORIENTATION = 256,

    /**
     * Gravity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GRAVITY = 257,

    /**
     * Linear acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    LINEAR_ACCELEROMETER = 258,

    /**
     * Rotation vector sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER_DETECTION = 265,

    /**
     * Pedometer sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    PEDOMETER = 266,

    /**
     * Heart rate sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    HEART_RATE = 278,

    /**
     * Wear detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    ACCELEROMETER_UNCALIBRATED = 281,

    /**
     * Fusion pressure sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    FUSION_PRESSURE = 283
  }

  /**
   * Subscribe to orientation sensor data, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onOrientationChange(callback: Callback<OrientationResponse>, options?: Options): void;
  
  /**
   * Subscribe to color sensor data, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function onColorChange(callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribe to SAR sensor data, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function onSarChange(callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribe to accelerometer sensor data, {@code SensorId.ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAccelerometerChange(callback: Callback<AccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAccelerometerUncalibratedChange(callback: Callback<AccelerometerUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to ambient light sensor data, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAmbientLightChange(callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribe to ambient temperature sensor data, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onAmbientTemperatureChange(callback: Callback<AmbientTemperatureResponse>, options?: Options): void;

  /**
   * Subscribe to barometer sensor data, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onBarometerChange(callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribe to gravity sensor data, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGravityChange(callback: Callback<GravityResponse>, options?: Options): void;

  /**
   * Subscribe to gyroscope sensor data, {@code SensorId.GYROSCOPE}.
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGyroscopeChange(callback: Callback<GyroscopeResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onGyroscopeUncalibratedChange(callback: Callback<GyroscopeUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to hall sensor data, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHallChange(callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribe to heart rate sensor data, {@code SensorId.HEART_RATE}.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHeartRateChange(callback: Callback<HeartRateResponse>, options?: Options): void;

  /**
   * Subscribe to humidity sensor data, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onHumidityChange(callback: Callback<HumidityResponse>, options?: Options): void;

  /**
   * Subscribe to linear acceleration sensor data, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onLinearAccelerometerChange(callback: Callback<LinearAccelerometerResponse>, options?: Options): void;

  /**
   * Subscribe to magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onMagneticFieldChange(callback: Callback<MagneticFieldResponse>, options?: Options): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onMagneticFieldUncalibratedChange(callback: Callback<MagneticFieldUncalibratedResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer sensor data, {@code SensorId.PEDOMETER}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onPedometerChange(callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer detection sensor data, {@code SensorId.PEDOMETER_DETECTION}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onPedometerDetectionChange(callback: Callback<PedometerDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to proximity sensor data, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onProximityChange(callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribe to rotation vector sensor data, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onRotationVectorChange(callback: Callback<RotationVectorResponse>, options?: Options): void;

  /**
   * Subscribe to significant motion sensor data, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onSignificantMotionChange(callback: Callback<SignificantMotionResponse>, options?: Options): void;

  /**
   * Subscribe to wear detection sensor data, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onWearDetectionChange(callback: Callback<WearDetectionResponse>, options?: Options): void;

  /**
   * Subscribe to fusion pressure sensor data, {@code SensorId.FUSION_PRESSURE}.
   * @param { Callback<FusionPressureResponse> } callback - callback fusion pressure percent data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   *     <br> {@code Options}.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onFusionPressureChange(callback: Callback<FusionPressureResponse>, options?: Options): void;

  /**
   * Subscribe to orientation sensor data once, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceOrientationChange(callback: Callback<OrientationResponse>): void;

  /**
   * Subscribe to accelerometer sensor data once, {@code SensorId.ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { 'accelerometerChange' } type - Indicate the sensor type to listen for.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAccelerometerChange(callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data once, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAccelerometerUncalibratedChange(callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribe to ambient light sensor data once, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient light data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAmbientLightChange(callback: Callback<LightResponse>): void;

  /**
   * Subscribe to ambient temperature sensor data once, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceAmbientTemperatureChange(callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribe to barometer sensor data once, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceBarometerChange(callback: Callback<BarometerResponse>): void;

  /**
   * Subscribe to gravity sensor data once, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGravityChange(callback: Callback<GravityResponse>): void;

  /**
   * Subscribe to gyroscope sensor data once, {@code SensorId.GYROSCOPE}.
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGyroscopeChange(callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data once, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @permission ohos.permission.GYROSCOPE
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceGyroscopeUncalibratedChange(callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribe to hall sensor data once, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHallChange(callback: Callback<HallResponse>): void;

  /**
   * Subscribe to heart rate sensor data once, {@code SensorId.HEART_RATE}.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHeartRateChange(callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribe to humidity sensor data once, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceHumidityChange(callback: Callback<HumidityResponse>): void;

  /**
   * Subscribe to linear acceleration sensor data once, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceLinearAccelerometerChange(callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribe to magnetic field sensor data once, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceMagneticFieldChange(callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data once, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceMagneticFieldUncalibratedChange(callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribe to pedometer sensor data once, {@code SensorId.PEDOMETER}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function oncePedometerChange(callback: Callback<PedometerResponse>): void;

  /**
   * Subscribe to pedometer detection sensor data once, {@code SensorId.PEDOMETER_DETECTION}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function oncePedometerDetectionChange(callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribe to proximity sensor data once, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceProximityChange(callback: Callback<ProximityResponse>): void;

  /**
   * Subscribe to rotation vector sensor data once, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceRotationVectorChange(callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribe to significant motion sensor data once, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceSignificantMotionChange(callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribe to wear detection sensor data once, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onceWearDetectionChange(callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to orientation sensor data, {@code SensorId.ORIENTATION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<OrientationResponse> } [callback] - callback orientation data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offOrientationChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to color sensor data, {@code SensorId.COLOR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ColorResponse> } [callback] - callback color data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function offColorChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribe to sar sensor data, {@code SensorId.SAR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SarResponse> } [callback] - callback sar data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 23 static
   */
  function offSarChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribe to accelerometer sensor data, {@code SensorId.ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerResponse> } [callback] - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAccelerometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to uncalibrated accelerometer sensor data, {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAccelerometerUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to ambient light sensor data, {@code SensorId.AMBIENT_LIGHT}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LightResponse> } [callback] - callback ambient light data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAmbientLightChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data， {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - callback ambient temperature data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offAmbientTemperatureChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to barometer sensor data, {@code SensorId.BAROMETER}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<BarometerResponse> } [callback] - callback barometer data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offBarometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to gravity sensor data, {@code SensorId.GRAVITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GravityResponse> } [callback] - callback gravity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGravityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to gyroscope sensor data, {@code SensorId.GYROSCOPE}.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeResponse> } [callback] - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGyroscopeChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to uncalibrated gyroscope sensor data, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offGyroscopeUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to hall sensor data, {@code SensorId.HALL}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HallResponse> } [callback] - callback hall data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHallChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to heart rate sensor data, {@code SensorId.HEART_RATE}.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HeartRateResponse> } [callback] - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHeartRateChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to humidity sensor data, {@code SensorId.HUMIDITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HumidityResponse> } [callback] - callback humidity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offHumidityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to linear acceleration sensor data, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LinearAccelerometerResponse> } [callback] - callback linear accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offLinearAccelerometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldResponse> } [callback] - callback magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offMagneticFieldChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to uncalibrated magnetic field sensor data, {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offMagneticFieldUncalibratedChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to pedometer sensor data, {@code SensorId.PEDOMETER}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerResponse> } [callback] - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offPedometerChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to pedometer detection sensor data, {@code SensorId.PEDOMETER_DETECTION}.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerDetectionResponse> } [callback] - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offPedometerDetectionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to proximity sensor data, {@code SensorId.PROXIMITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ProximityResponse> } [callback] - callback proximity data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offProximityChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribe to rotation vector sensor data, {@code SensorId.ROTATION_VECTOR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<RotationVectorResponse> } [callback] - callback rotation vector data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offRotationVectorChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to significant motion sensor data, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SignificantMotionResponse> } [callback] - callback significant motion data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offSignificantMotionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to wear detection sensor data, {@code SensorId.WEAR_DETECTION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<WearDetectionResponse> } [callback] - callback wear detection data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offWearDetectionChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to fusion pressure sensor data, {@code SensorId.FUSION_PRESSURE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<FusionPressureResponse> } [callback] - callback fusion pressure percent data.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   *     <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offFusionPressureChange(sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * Subscribe to color sensor data.
   * @param { SensorId.COLOR } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10
   */
  /**
   * Subscribe to color sensor data.
   * @param { SensorId.COLOR } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: SensorId.COLOR, callback: Callback<ColorResponse>, options?: Options): void;

  /**
   * Subscribe to SAR sensor data.
   * @param { SensorId.SAR } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10
   */
  /**
   * Subscribe to SAR sensor data.
   * @param { SensorId.SAR } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: SensorId.SAR, callback: Callback<SarResponse>, options?: Options): void;

  /**
   * Subscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Subscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function on(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Indicate the sensor type to listen for,{@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to ambient light sensor data.
   * @param { SensorId.AMBIENT_LIGHT } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>, options?: Options): void;

  /**
   * Subscribe to ambient temperature sensor data.
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback temperature data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * Subscribe to barometer sensor data.
   * @param { SensorId.BAROMETER } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>, options?: Options): void;

  /**
   * Subscribe to gravity sensor data.
   * @param { SensorId.GRAVITY } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * Subscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Subscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function on(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to hall sensor data.
   * @param { SensorId.HALL } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback uncalibrated gyroscope data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HALL, callback: Callback<HallResponse>, options?: Options): void;

  /**
   * Subscribe to heart rate sensor data.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * Subscribe to humidity sensor data.
   * @param { SensorId.HUMIDITY } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * Subscribe to linear acceleration sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear acceleration data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Subscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function on(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;


  /**
   * Subscribe to pedometer sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>, options?: Options): void;

  /**
   * Subscribe to pedometer detection sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribe to proximity sensor data.
   * @param { SensorId.PROXIMITY } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>, options?: Options): void;

  /**
   * Subscribe to rotation vector sensor data.
   * @param { SensorId.ROTATION_VECTOR } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * Subscribe to significant motion sensor data.
   * @param { SensorId.SIGNIFICANT_MOTION } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * Subscribe to wear detection sensor data.
   * @param { SensorId.WEAR_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function on(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribe to fusion pressure sensor data.
   * @param { SensorId.FUSION_PRESSURE } type - Indicate the sensor type to listen for,
   * <br> {@code SensorId.FUSION_PRESSURE}.
   * @param { Callback<FusionPressureResponse> } callback - callback fusion pressure percent data.
   * @param { Options } [options] - Optional parameters specifying the interval at which sensor data is reported,
   * <br> {@code Options}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   */
  function on(type: SensorId.FUSION_PRESSURE, callback: Callback<FusionPressureResponse>,
    options?: Options): void;

  /**
   * Subscribe to accelerometer sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribe to uncalibrated accelerometer sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Indicate the sensor type to listen for,{@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribe to ambient light sensor data once.
   * @param { SensorId.AMBIENT_LIGHT } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * Subscribe to ambient temperature sensor data once.
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback temperature data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribe to barometer sensor data once.
   * @param { SensorId.BAROMETER } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * Subscribe to gravity sensor data once.
   * @param { SensorId.GRAVITY } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * Subscribe to gyroscope sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribe to uncalibrated gyroscope sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Indicate the sensor type to listen for,{@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribe to hall sensor data once.
   * @param { SensorId.HALL } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HALL, callback: Callback<HallResponse>): void;

  /**
   * Subscribe to heart rate sensor data once.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribe to humidity sensor data once.
   * @param { SensorId.HUMIDITY } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * Subscribe to linear acceleration sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear acceleration data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.LINEAR_ACCELEROMETER, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribe to magnetic field sensor data once.
   * @param { SensorId.MAGNETIC_FIELD } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribe to uncalibrated magnetic field sensor data once.
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribe to orientation sensor data once.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * Subscribe to pedometer sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * Subscribe to pedometer detection sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribe to proximity sensor data once.
   * @param { SensorId.PROXIMITY } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * Subscribe to rotation vector sensor data once.
   * @param { SensorId.ROTATION_VECTOR } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribe to significant motion sensor data once.
   * @param { SensorId.SIGNIFICANT_MOTION } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribe to wear detection sensor data once.
   * @param { SensorId.WEAR_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   *
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function once(type: SensorId.WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to color sensor data.
   * @param { SensorId.COLOR } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10
   */
  /**
   * Unsubscribe to color sensor data.
   * @param { SensorId.COLOR } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { Callback<ColorResponse> } callback - callback color data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: SensorId.COLOR, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribe to color sensor data.
   * @param { SensorId.COLOR } type - Indicate the sensor type to listen for, {@code SensorId.COLOR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ColorResponse> } [callback] - callback color data.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.COLOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<ColorResponse>): void;

  /**
   * Unsubscribe to sar sensor data.
   * @param { SensorId.SAR } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10
   */
  /**
   * Unsubscribe to sar sensor data.
   * @param { SensorId.SAR } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { Callback<SarResponse> } callback - callback sar data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: SensorId.SAR, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribe to sar sensor data.
   * @param { SensorId.SAR } type - Indicate the sensor type to listen for, {@code SensorId.SAR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SarResponse> } [callback] - callback sar data.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 19 dynamic
   */
  function off(type: SensorId.SAR, sensorInfoParam?: SensorInfoParam, callback?: Callback<SarResponse>): void;

  /**
   * Unsubscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Unsubscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.ACCELEROMETER}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerResponse> } [callback] - callback accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to uncalibrated accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to uncalibrated accelerometer sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.ACCELEROMETER_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.ACCELEROMETER_UNCALIBRATED}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AccelerometerUncalibratedResponse> } [callback] - callback uncalibrated accelerometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ACCELEROMETER_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to ambient light sensor data.
   * @param { SensorId.AMBIENT_LIGHT } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback ambient data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient light sensor data.
   * @param { SensorId.AMBIENT_LIGHT } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_LIGHT}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LightResponse> } [callback] - callback ambient data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_LIGHT, sensorInfoParam?: SensorInfoParam, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data.
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback temperature data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to ambient temperature sensor data.
   * @param { SensorId.AMBIENT_TEMPERATURE } type - Indicate the sensor type to listen for, {@code SensorId.AMBIENT_TEMPERATURE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<AmbientTemperatureResponse> } [callback] - callback temperature data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.AMBIENT_TEMPERATURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to barometer sensor data.
   * @param { SensorId.BAROMETER } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to barometer sensor data.
   * @param { SensorId.BAROMETER } type - Indicate the sensor type to listen for, {@code SensorId.BAROMETER}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<BarometerResponse> } [callback] - callback barometer data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.BAROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to gravity sensor data.
   * @param { SensorId.GRAVITY } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to gravity sensor data.
   * @param { SensorId.GRAVITY } type - Indicate the sensor type to listen for, {@code SensorId.GRAVITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GravityResponse> } [callback] - callback gravity data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GRAVITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Unsubscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function off(type: SensorId.GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeResponse> } [callback] - callback gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to uncalibrated gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to uncalibrated gyroscope sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorId.GYROSCOPE_UNCALIBRATED } type - Indicate the sensor type to listen for, {@code SensorId.GYROSCOPE_UNCALIBRATED}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<GyroscopeUncalibratedResponse> } [callback] - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.GYROSCOPE_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to hall sensor data.
   * @param { SensorId.HALL } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { Callback<HallResponse> } callback - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to hall sensor data.
   * @param { SensorId.HALL } type - Indicate the sensor type to listen for, {@code SensorId.HALL}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HallResponse> } [callback] - callback uncalibrated gyroscope data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HALL, sensorInfoParam?: SensorInfoParam, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to heart rate sensor data.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to heart rate sensor data.
   * @permission ohos.permission.READ_HEALTH_DATA
   * @param { SensorId.HEART_RATE } type - Indicate the sensor type to listen for, {@code SensorId.HEART_RATE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HeartRateResponse> } [callback] - callback heart rate data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HEART_RATE, sensorInfoParam?: SensorInfoParam, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to humidity sensor data.
   * @param { SensorId.HUMIDITY } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to humidity sensor data.
   * @param { SensorId.HUMIDITY } type - Indicate the sensor type to listen for, {@code SensorId.HUMIDITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<HumidityResponse> } [callback] - callback humidity data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.HUMIDITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to linear acceleration sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear acceleration data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to linear acceleration sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorId.LINEAR_ACCELEROMETER } type - Indicate the sensor type to listen for, {@code SensorId.LINEAR_ACCELEROMETER}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<LinearAccelerometerResponse> } [callback] - callback linear acceleration data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.LINEAR_ACCELEROMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD } type - Indicate the sensor type to listen for, {@code SensorId.MAGNETIC_FIELD}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldResponse> } [callback] - callback magnetic field data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to uncalibrated magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to uncalibrated magnetic field sensor data.
   * @param { SensorId.MAGNETIC_FIELD_UNCALIBRATED } type - Indicate the sensor type to listen for,
   *        {@code SensorId.MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<MagneticFieldUncalibratedResponse> } [callback] - callback uncalibrated magnetic field data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.MAGNETIC_FIELD_UNCALIBRATED, sensorInfoParam?: SensorInfoParam, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Unsubscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   */
  function off(type: SensorId.ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to orientation sensor data.
   * @param { SensorId.ORIENTATION } type - Indicate the sensor type to listen for, {@code SensorId.ORIENTATION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<OrientationResponse> } [callback] - callback orientation data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 19 dynamic
   */
  function off(type: SensorId.ORIENTATION, sensorInfoParam?: SensorInfoParam, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to pedometer sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to pedometer sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerResponse> } [callback] - callback pedometer data.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to pedometer detection sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to pedometer detection sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorId.PEDOMETER_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.PEDOMETER_DETECTION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<PedometerDetectionResponse> } [callback] - callback pedometer detection data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PEDOMETER_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to proximity sensor data.
   * @param { SensorId.PROXIMITY } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.PROXIMITY, callback?: Callback<ProximityResponse>): void;
  
  /**
   * Unsubscribe to proximity sensor data.
   * @param { SensorId.PROXIMITY } type - Indicate the sensor type to listen for, {@code SensorId.PROXIMITY}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<ProximityResponse> } [callback] - callback proximity data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.PROXIMITY, sensorInfoParam?: SensorInfoParam, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribe to rotation vector sensor data.
   * @param { SensorId.ROTATION_VECTOR } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to rotation vector sensor data.
   * @param { SensorId.ROTATION_VECTOR } type - Indicate the sensor type to listen for, {@code SensorId.ROTATION_VECTOR}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<RotationVectorResponse> } [callback] - callback rotation vector data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.ROTATION_VECTOR, sensorInfoParam?: SensorInfoParam, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to significant motion sensor data.
   * @param { SensorId.SIGNIFICANT_MOTION } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to significant motion sensor data.
   * @param { SensorId.SIGNIFICANT_MOTION } type - Indicate the sensor type to listen for, {@code SensorId.SIGNIFICANT_MOTION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<SignificantMotionResponse> } [callback] - callback significant motion data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.SIGNIFICANT_MOTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to wear detection sensor data.
   * @param { SensorId.WEAR_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to fusion pressure sensor data.
   * @param { SensorId.FUSION_PRESSURE } type - Indicate the sensor type to listen for, {@code SensorId.FUSION_PRESSURE}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<FusionPressureResponse> } callback - callback fusion pressure percent data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   */
  function off(type: SensorId.FUSION_PRESSURE, sensorInfoParam?: SensorInfoParam, callback?: Callback<FusionPressureResponse>): void;

  /**
   * Unsubscribe to wear detection sensor data.
   * @param { SensorId.WEAR_DETECTION } type - Indicate the sensor type to listen for, {@code SensorId.WEAR_DETECTION}.
   * @param { SensorInfoParam } [sensorInfoParam] - Parameters of sensor on the device.
   * @param { Callback<WearDetectionResponse> } [callback] - callback wear detection data.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: SensorId.WEAR_DETECTION, sensorInfoParam?: SensorInfoParam, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @param { Options } options - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback accelerometer uncalibrated data.
   * @param { Options } options - Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback light data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_LIGHT
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
   */
  function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#BAROMETER
   */
  function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GRAVITY
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback gyroscope uncalibrated data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
   */
  function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HALL
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HEART_RATE
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HUMIDITY
   */
  function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
   */
  function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback magnetic field uncalibrated data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
   */
  function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ORIENTATION
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER_DETECTION
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PROXIMITY
   */
  function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ROTATION_VECTOR
   */
  function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
   */
  function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @param { Options } options - options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#WEAR_DETECTION
   */
  function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>,
    options?: Options): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: Callback<AccelerometerResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback accelerometer uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback light data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_LIGHT
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: Callback<LightResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
   */
  function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: Callback<AmbientTemperatureResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#BAROMETER
   */
  function once(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: Callback<BarometerResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GRAVITY
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: Callback<GravityResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: Callback<GyroscopeResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback gyroscope uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
   */
  function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HALL
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HALL, callback: Callback<HallResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.HEART_RATE
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HEART_RATE
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: Callback<HeartRateResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HUMIDITY
   */
  function once(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: Callback<HumidityResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.ACCELERATION
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
   */
  function once(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: Callback<LinearAccelerometerResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: Callback<MagneticFieldResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback magnetic field uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
   */
  function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ORIENTATION
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: Callback<OrientationResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: Callback<PedometerResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER_DETECTION
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: Callback<PedometerDetectionResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PROXIMITY
   */
  function once(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: Callback<ProximityResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ROTATION_VECTOR
   */
  function once(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: Callback<RotationVectorResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
   */
  function once(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: Callback<SignificantMotionResponse>): void;

  /**
   * Subscribe to sensor data once.
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - type Indicate the sensor type to listen for, 
   *        {@code SensorType.SENSOR_TYPE_ID_WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#WEAR_DETECTION
   */
  function once(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: Callback<WearDetectionResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER}.
   * @param { Callback<AccelerometerResponse> } callback - callback accelerometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback?: Callback<AccelerometerResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED}.
   * @param { Callback<AccelerometerUncalibratedResponse> } callback - callback accelerometer uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED,
    callback?: Callback<AccelerometerUncalibratedResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT}.
   * @param { Callback<LightResponse> } callback - callback light data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_LIGHT
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback?: Callback<LightResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE}.
   * @param { Callback<AmbientTemperatureResponse> } callback - callback ambient temperature data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
   */
  function off(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback?: Callback<AmbientTemperatureResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_BAROMETER } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_BAROMETER}.
   * @param { Callback<BarometerResponse> } callback - callback barometer response data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#BAROMETER
   */
  function off(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback?: Callback<BarometerResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_GRAVITY } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_GRAVITY}.
   * @param { Callback<GravityResponse> } callback - callback gravity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GRAVITY
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback?: Callback<GravityResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE}.
   * @param { Callback<GyroscopeResponse> } callback - callback gyroscope data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback?: Callback<GyroscopeResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.GYROSCOPE
   * @param { SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED}.
   * @param { Callback<GyroscopeUncalibratedResponse> } callback - callback gyroscope uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
   */
  function off(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback?: Callback<GyroscopeUncalibratedResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_HALL } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_HALL}.
   * @param { Callback<HallResponse> } callback - callback hall data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HALL
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HALL, callback?: Callback<HallResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.HEALTH_DATA
   * @param { SensorType.SENSOR_TYPE_ID_HEART_RATE } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_HEART_RATE}.
   * @param { Callback<HeartRateResponse> } callback - callback heart rate data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HEART_RATE
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback?: Callback<HeartRateResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_HUMIDITY } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_HUMIDITY}.
   * @param { Callback<HumidityResponse> } callback - callback humidity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#HUMIDITY
   */
  function off(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback?: Callback<HumidityResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.ACCELEROMETER
   * @param { SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION}.
   * @param { Callback<LinearAccelerometerResponse> } callback - callback linear accelerometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
   */
  function off(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback?: Callback<LinearAccelerometerResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD}.
   * @param { Callback<MagneticFieldResponse> } callback - callback magnetic field data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback?: Callback<MagneticFieldResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED}.
   * @param { Callback<MagneticFieldUncalibratedResponse> } callback - callback magnetic field uncalibrated data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
   */
  function off(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback?: Callback<MagneticFieldUncalibratedResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_ORIENTATION } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_ORIENTATION}.
   * @param { Callback<OrientationResponse> } callback - callback orientation data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ORIENTATION
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback?: Callback<OrientationResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER } type - type Indicate the sensor type to unsubscribe, {@code SensorType.SENSOR_TYPE_ID_PEDOMETER}.
   * @param { Callback<PedometerResponse> } callback - callback pedometer data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback?: Callback<PedometerResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @permission ohos.permission.ACTIVITY_MOTION
   * @param { SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION}.
   * @param { Callback<PedometerDetectionResponse> } callback - callback pedometer detection data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PEDOMETER_DETECTION
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback?: Callback<PedometerDetectionResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_PROXIMITY } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_PROXIMITY}.
   * @param { Callback<ProximityResponse> } callback - callback proximity data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#PROXIMITY
   */
  function off(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback?: Callback<ProximityResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR}.
   * @param { Callback<RotationVectorResponse> } callback - callback rotation vector data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#ROTATION_VECTOR
   */
  function off(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback?: Callback<RotationVectorResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION}.
   * @param { Callback<SignificantMotionResponse> } callback - callback significant motion data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
   */
  function off(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback?: Callback<SignificantMotionResponse>): void;

  /**
   * Unsubscribe to sensor data.
   * @param { SensorType.SENSOR_TYPE_ID_WEAR_DETECTION } type - type Indicate the sensor type to unsubscribe, 
   *        {@code SensorType.SENSOR_TYPE_ID_WEAR_DETECTION}.
   * @param { Callback<WearDetectionResponse> } callback - callback wear detection data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId#WEAR_DETECTION
   */
  function off(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback?: Callback<WearDetectionResponse>): void;

  /**
   * Indicates sensor information.
   * @typedef Sensor
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  interface Sensor {
    /**
     * Sensor name.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorName:string;

    /**
     * Sensor vendor.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    vendorName:string;

    /**
     * Sensor firmware version.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    firmwareVersion:string;

    /**
     * Sensor hardware version.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    hardwareVersion:string;

    /**
     * Sensor type ID, {@code SensorType}.
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    sensorId:int;

    /**
     * Maximum measurement range of the sensor.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxRange:double;

    /**
     * Minimum sample period allowed, in ns.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    minSamplePeriod:long;

    /**
     * Maximum sample period allowed, in ns.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    maxSamplePeriod:long;

    /**
     * Sensor accuracy.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    precision:double;

    /**
     * Sensor power.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9 dynamic
     * @since 23 static
     */
    power:double;

    /**
     * Index of sensors of the same type.
     * @type { ?int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;

    /**
     * Device ID which the sensors attached.
     * @type { ?int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Name of the device.
     *
     * @type { ?string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName?: string;

    /**
     * Is the device a local device or an external device
     * @type { ?boolean }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isLocalSensor?: boolean;

    /**
     * Is the device a mock device or a real device
     * @type { ?boolean }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 23 dynamic&static
     */
    isMockSensor?: boolean;
  }

  /**
   * Obtains the sensor information of a specified type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @param { AsyncCallback<Sensor> } callback - callback sensor info.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Obtains the sensor information of a specified type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @param { AsyncCallback<Sensor> } callback - callback sensor info.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSingleSensor(type: SensorId, callback: AsyncCallback<Sensor>): void;

  /**
   * Obtains the sensor information of a specified type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @returns { Promise<Sensor> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  /**
   * Obtains the sensor information of a specified type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @returns { Promise<Sensor> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSingleSensor(type: SensorId): Promise<Sensor>;

  /**
   * Synchronously obtains the sensor information of a specified type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @returns { Sensor } Returns sensor information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @throws { BusinessError } 14500102 - The sensor is not supported by the device.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSingleSensorSync(type: SensorId): Sensor;

  /**
   * Synchronously obtains the sensor information of the specified device and type.
   * @param { SensorId } type - Indicate the sensor type, {@code SensorId}.
   * @param { int } [deviceId] - Device ID which the sensors attached. If not specified, the local device will be used.
   * @returns { Array<Sensor> } Returns sensor information.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>;

  /**
   * Obtains all sensor information on the device.
   * @param { AsyncCallback<Array<Sensor>> } callback - callback sensor list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSensorList(callback: AsyncCallback<Array<Sensor>>): void;

  /**
   * Obtains all sensor information on the device.
   * @returns { Promise<Array<Sensor>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getSensorList(): Promise<Array<Sensor>>;

  /**
   * Synchronously obtains all sensor information on the device.
   * @returns { Array<Sensor> } Return a list of sensor information.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 12 dynamic
   * @since 23 static
   */
  function getSensorListSync(): Array<Sensor>;

  /**
   * Synchronously obtains all sensor information on the device.
   * @param { int } [deviceId] - Device ID which the sensors attached. If not specified, the local device will be used.
   * @returns { Array<Sensor> } Return a list of sensor information.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>;

  /**
   * Indicates geomagnetic field data.
   * @typedef GeomagneticResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GeomagneticResponse {
    /**
     * Geomagnetic x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Geomagnetic y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Geomagnetic z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * The Angle between the earth's magnetic field lines and the horizontal plane.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    geomagneticDip: double;

    /**
     * The Angle of magnetic north and true north on a horizontal plane.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    deflectionAngle: double;

    /**
     * The horizontal strength of the geomagnetic field.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    levelIntensity: double;

    /**
     * The total strength of the geomagnetic field.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    totalIntensity: double;
  }

  /**
   * Indicates geographic location.
   * @typedef LocationOptions
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LocationOptions {
    /**
     * Specifies the latitude of the point.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Specifies the longitude of the point.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Specifies the altitude of the point.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    altitude: double;
  }

  /**
   * Implements the calculation of the geomagnetic field at a specific location on Earth.
   * @param { LocationOptions } locationOptions - Indicates geographic location, {@code LocationOptions}.
   * @param { number } timeMillis - Indicates the time at which the magnetic declination is to be obtained, 
   * in milliseconds since the Unix epoch.
   * @param { AsyncCallback<GeomagneticResponse> } callback - callback geomagnetic field.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getGeomagneticInfo
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number, callback: AsyncCallback<GeomagneticResponse>): void;

  /**
   * Implements the calculation of the geomagnetic field at a specific location on Earth.
   * @param { LocationOptions } locationOptions - LocationOptions Indicates geographic location, {@code LocationOptions}.
   * @param { number } timeMillis - timeMillis Indicates the time at which the magnetic declination is to be obtained, 
   * in milliseconds since the Unix epoch.
   * @returns { Promise<GeomagneticResponse> } Returns the geomagnetic field data, {@code GeomagneticResponse}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getGeomagneticInfo
   */
  function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number): Promise<GeomagneticResponse>;

  /**
   * Obtains the geomagnetic field at a specific location on the Earth.
   * @param { LocationOptions } locationOptions - LocationOptions Indicates geographic location, {@code LocationOptions}.
   * @param { long } timeMillis - timeMillis Indicates the time at which the magnetic declination is to be obtained, 
   * in milliseconds since the Unix epoch.
   * @param { AsyncCallback<GeomagneticResponse> } callback - callback geomagnetic field.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long, callback: AsyncCallback<GeomagneticResponse>): void;

  /**
   * Obtains the geomagnetic field at a specific location on the Earth.
   * @param { LocationOptions } locationOptions - LocationOptions Indicates geographic location, {@code LocationOptions}.
   * @param { long } timeMillis - timeMillis Indicates the time at which the magnetic declination is to be obtained, 
   * in milliseconds since the Unix epoch.
   * @returns { Promise<GeomagneticResponse> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getGeomagneticInfo(locationOptions: LocationOptions, timeMillis: long): Promise<GeomagneticResponse>;

  /**
   * Obtains the altitude at which the device is located based on the current atmospheric pressure.
   * @param { number } seaPressure - Indicates the sea level pressure, in hPa.
   * @param { number } currentPressure - Indicates the atmospheric pressure measured by the barometer, in hPa.
   * @param { AsyncCallback<number> } callback - callback device altitude.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getDeviceAltitude
   */
  function getAltitude(seaPressure: number, currentPressure: number, callback: AsyncCallback<number>): void;

  /**
   * Obtains the altitude at which the device is located based on the current atmospheric pressure.
   * @param { number } seaPressure - seaPressure Indicates the sea level pressure, in hPa.
   * @param { number } currentPressure - currentPressure Indicates the atmospheric pressure measured by the barometer, in hPa.
   * @returns { Promise<number> } Returns the altitude in meters at which the device is located.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getDeviceAltitude
   */
  function getAltitude(seaPressure: number, currentPressure: number): Promise<number>;

  /**
   * Obtains the altitude at which the device is located based on the current atmospheric pressure.
   * @param { double } seaPressure - seaPressure Indicates the sea level pressure, in hPa.
   * @param { double } currentPressure - currentPressure Indicates the atmospheric pressure measured by the barometer, in hPa.
   * @param { AsyncCallback<double> } callback - callback device altitude.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceAltitude(seaPressure: double, currentPressure: double, callback: AsyncCallback<double>): void;

  /**
   * Obtains the altitude at which the device is located based on the current atmospheric pressure.
   * @param { double } seaPressure - seaPressure Indicates the sea level pressure, in hPa.
   * @param { double } currentPressure - currentPressure Indicates the atmospheric pressure measured by the barometer, in hPa.
   * @returns { Promise<double> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceAltitude(seaPressure: double, currentPressure: double): Promise<double>;

  /**
   * Computes the geomagnetic inclination angle in radians from the inclination matrix.
   * @param { Array<number> } inclinationMatrix - Indicates the inclination matrix.
   * @param { AsyncCallback<number> } callback - callback geomagnetic inclination data.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getInclination
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>, callback: AsyncCallback<number>): void;

  /**
   * Computes the geomagnetic inclination angle in radians from the inclination matrix.
   * @param { Array<number> } inclinationMatrix - Indicates the inclination matrix.
   * @returns { Promise<number> } Returns the geomagnetic inclination angle in radians.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getInclination
   */
  function getGeomagneticDip(inclinationMatrix: Array<number>): Promise<number>;

  /**
   * Computes the geomagnetic inclination in radians from the inclination matrix.
   * @param { Array<double> } inclinationMatrix - Indicates the inclination matrix.
   * @param { AsyncCallback<double> } callback - callback inclination in radians.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getInclination(inclinationMatrix: Array<double>, callback: AsyncCallback<double>): void;

  /**
   * Computes the geomagnetic inclination in radians from the inclination matrix.
   * @param { Array<double> } inclinationMatrix - Indicates the inclination matrix.
   * @returns { Promise<double> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getInclination(inclinationMatrix: Array<double>): Promise<double>;

  /**
   * Get the angle change between two rotation matrices.
   * @param { Array<number> } currentRotationMatrix - Indicates the current rotation matrix.
   * @param { Array<number> } preRotationMatrix - Indicates the current rotation matrix.
   * @param { AsyncCallback<Array<number>> } callback - callback angle variation.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getAngleVariation
   */
  function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>,
    callback: AsyncCallback<Array<number>>): void;

  /**
   * Get the angle change between two rotation matrices.
   * @param { Array<number> } currentRotationMatrix - currentRotationMatrix Indicates the current rotation matrix.
   * @param { Array<number> } preRotationMatrix - preRotationMatrix Indicates the current rotation matrix.
   * @returns { Promise<Array<number>> } Returns the array of number(z, x and y) in which the angle variety.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getAngleVariation
   */
  function getAngleModify(currentRotationMatrix: Array<number>, preRotationMatrix: Array<number>): Promise<Array<number>>;

  /**
   * Get the angle variation between two rotation matrices.
   * @param { Array<double> } currentRotationMatrix - currentRotationMatrix Indicates the current rotation matrix.
   * @param { Array<double> } preRotationMatrix - preRotationMatrix Indicates the current rotation matrix.
   * @param { AsyncCallback<Array<double>> } callback - callback angle variation.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>,
    callback: AsyncCallback<Array<double>>): void;

  /**
   * Get the angle variation between two rotation matrices.
   * @param { Array<double> } currentRotationMatrix -  Indicates the current rotation matrix.
   * @param { Array<double> } preRotationMatrix - preRotationMatrix Indicates the current rotation matrix.
   * @returns { Promise<Array<double>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getAngleVariation(currentRotationMatrix: Array<double>, preRotationMatrix: Array<double>): Promise<Array<double>>;

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<number> } rotationVector - Indicates the rotation vector.
   * @param { AsyncCallback<Array<number>> } callback - callback rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getRotationMatrix
   */
  function createRotationMatrix(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<number> } rotationVector - rotationVector Indicates the rotation vector.
   * @returns { Promise<Array<number>> } Returns the rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getRotationMatrix
   */
  function createRotationMatrix(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<double> } rotationVector - rotationVector Indicates the rotation vector.
   * @param { AsyncCallback<Array<double>> } callback - callback rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * Convert rotation vector to rotation matrix.
   * @param { Array<double> } rotationVector - rotationVector Indicates the rotation vector.
   * @returns { Promise<Array<double>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(rotationVector: Array<double>): Promise<Array<double>>;

  /**
   * Indicates the axis of the new coordinate system that coincides with the XY axis of the original coordinate system.
   * @typedef CoordinatesOptions
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface CoordinatesOptions {
    /** Indicates the axis of the new coordinate system that coincides with the X axis of the original coordinate system. 
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: int;

    /** Indicates the axis of the new coordinate system that coincides with the Y axis of the original coordinate system. 
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Rotate the provided rotation matrix so that it can be represented in a different way Coordinate System.
   * @param { Array<number> } inRotationVector - Indicates the rotation matrix to be transformed.
   * @param { CoordinatesOptions } coordinates - Indicates coordinate system guidance, {@code CoordinatesOptions}.
   * @param { AsyncCallback<Array<number>> } callback - callback rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#transformRotationMatrix
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<number>>): void;

  /**
   * Rotate the provided rotation matrix so that it can be represented in a different way Coordinate System.
   * @param { Array<number> } inRotationVector - inRotationVector Indicates the rotation matrix to be transformed.
   * @param { CoordinatesOptions } coordinates - coordinates Indicates coordinate system guidance, {@code CoordinatesOptions}.
   * @returns { Promise<Array<number>> } Returns the transformed rotation matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#transformRotationMatrix
   */
  function transformCoordinateSystem(inRotationVector: Array<number>, coordinates: CoordinatesOptions): Promise<Array<number>>;

  /**
   * Rotate the provided rotation matrix so that it can be represented in a different way coordinate System.
   * @param { Array<double> } inRotationVector - inRotationVector Indicates the rotation matrix to be transformed.
   * @param { CoordinatesOptions } coordinates - coordinates Indicates coordinate system guidance, {@code CoordinatesOptions}.
   * @param { AsyncCallback<Array<double>> } callback - callback rotation matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions,
    callback: AsyncCallback<Array<double>>): void;

  /**
   * Rotate the provided rotation matrix so that it can be represented in a different way coordinate System.
   * @param { Array<double> } inRotationVector - inRotationVector Indicates the rotation matrix to be transformed.
   * @param { CoordinatesOptions } coordinates - coordinates Indicates coordinate system guidance, {@code CoordinatesOptions}.
   * @returns { Promise<Array<double>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function transformRotationMatrix(inRotationVector: Array<double>, coordinates: CoordinatesOptions): Promise<Array<double>>;

  /**
   * convert a rotation vector to a normalized quaternion.
   * @param { Array<number> } rotationVector - Indicates the rotation vector.
   * @param { AsyncCallback<Array<number>> } callback - callback a normalized quaternion.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getQuaternion
   */
  function createQuaternion(rotationVector: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * convert a rotation vector to a normalized quaternion.
   * @param { Array<number> } rotationVector - rotationVector Indicates the rotation vector.
   * @returns { Promise<Array<number>> } Returns the normalized quaternion.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getQuaternion
   */
  function createQuaternion(rotationVector: Array<number>): Promise<Array<number>>;

  /**
   * convert a rotation vector to a normalized quaternion.
   * @param { Array<double> } rotationVector - rotationVector Indicates the rotation vector.
   * @param { AsyncCallback<Array<double>> } callback - callback a normalized quaternion.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getQuaternion(rotationVector: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * convert a rotation vector to a normalized quaternion.
   * @param { Array<double> } rotationVector - rotationVector Indicates the rotation vector.
   * @returns { Promise<Array<double>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getQuaternion(rotationVector: Array<double>): Promise<Array<double>>;

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<number> } rotationMatrix - Indicates the rotation matrix.
   * @param { AsyncCallback<Array<number>> } callback - callback the angle of rotation around the z, x, y axis.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getOrientation
   */
  function getDirection(rotationMatrix: Array<number>, callback: AsyncCallback<Array<number>>): void;

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<number> } rotationMatrix - rotationMatrix Indicates the rotation matrix.
   * @returns { Promise<Array<number>> } Returns the array is the angle of rotation around the z, x, y axis.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getOrientation
   */
  function getDirection(rotationMatrix: Array<number>): Promise<Array<number>>;

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<double> } rotationMatrix - rotationMatrix Indicates the rotation matrix.
   * @param { AsyncCallback<Array<double>> } callback - callback the angle of rotation around the z, x, y axis.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getOrientation(rotationMatrix: Array<double>, callback: AsyncCallback<Array<double>>): void;

  /**
   * Computes the device's orientation based on the rotation matrix.
   * @param { Array<double> } rotationMatrix - rotationMatrix Indicates the rotation matrix.
   * @returns { Promise<Array<double>> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getOrientation(rotationMatrix: Array<double>): Promise<Array<double>>;

  /**
   * Indicates the response of rotation matrix.
   * @typedef RotationMatrixResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationMatrixResponse {
    /**
     * rotation matrix. 
     * @type { Array<double> }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    rotation: Array<double>;

    /**
     * inclination matrix. 
     * @type { Array<double> }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    inclination: Array<double>
  }

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<number> } gravity - Indicates the gravity vector.
   * @param { Array<number> } geomagnetic - Indicates the geomagnetic vector.
   * @param { AsyncCallback<RotationMatrixResponse> } callback - callback rotation matrix and inclination matrix.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getRotationMatrix
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<number> } gravity - gravity Indicates the gravity vector.
   * @param { Array<number> } geomagnetic - geomagnetic Indicates the geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Returns the rotation matrix, {@code RotationMatrixResponse}.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor#getRotationMatrix
   */
  function createRotationMatrix(gravity: Array<number>, geomagnetic: Array<number>,): Promise<RotationMatrixResponse>;

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<double> } gravity - gravity Indicates the gravity vector.
   * @param { Array<double> } geomagnetic - geomagnetic Indicates the geomagnetic vector.
   * @param { AsyncCallback<RotationMatrixResponse> } callback - callback rotation matrix and inclination matrix.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>, callback: AsyncCallback<RotationMatrixResponse>): void;

  /**
   * Calculate rotation matrix based on gravity vector and geomagnetic vector.
   * @param { Array<double> } gravity - gravity Indicates the gravity vector.
   * @param { Array<double> } geomagnetic - geomagnetic Indicates the geomagnetic vector.
   * @returns { Promise<RotationMatrixResponse> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9 dynamic
   * @since 23 static
   */
  function getRotationMatrix(gravity: Array<double>, geomagnetic: Array<double>): Promise<RotationMatrixResponse>;

  /**
   * Subscribe to the sensor's optional parameters.
   * @typedef Options
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8
   */
  /**
   * Subscribe to the sensor's optional parameters.
   * @typedef Options
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Sensor event reporting event interval.
     * @type { ?number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Sensor event reporting event interval.
     * @type { ?(long | SensorFrequency) }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    interval?: long | SensorFrequency;

    /**
     * Parameters of sensor on the device.
     * @type { ?SensorInfoParam }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorInfoParam?: SensorInfoParam;
  }

  /**
   * The sensor reporting frequency is divided into three modes.
   * @typedef {'game' | 'ui' | 'normal'}
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SensorFrequency = 'game' | 'ui' | 'normal';

  /**
   * The type of number.
   * @enum { number }
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead sensor.SensorId
   */
  enum SensorType {
    /**
     * Acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER
     */
    SENSOR_TYPE_ID_ACCELEROMETER = 1,

    /**
     * Gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE
     */
    SENSOR_TYPE_ID_GYROSCOPE = 2,

    /**
     * Ambient light sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_LIGHT
     */
    SENSOR_TYPE_ID_AMBIENT_LIGHT = 5,

    /**
     * Magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD = 6,

    /**
     * Barometric pressure sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#BAROMETER
     */
    SENSOR_TYPE_ID_BAROMETER = 8,

    /**
     * Hall effect sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HALL
     */
    SENSOR_TYPE_ID_HALL = 10,

    /**
     * Proximity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PROXIMITY
     */
    SENSOR_TYPE_ID_PROXIMITY = 12,

    /**
     * Humidity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HUMIDITY
     */
    SENSOR_TYPE_ID_HUMIDITY = 13,

    /**
     * Orientation sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ORIENTATION
     */
    SENSOR_TYPE_ID_ORIENTATION = 256,

    /**
     * Gravity sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GRAVITY
     */
    SENSOR_TYPE_ID_GRAVITY = 257,

    /**
     * Linear acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#LINEAR_ACCELEROMETER
     */
    SENSOR_TYPE_ID_LINEAR_ACCELERATION = 258,

    /**
     * Rotation vector sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ROTATION_VECTOR
     */
    SENSOR_TYPE_ID_ROTATION_VECTOR = 259,

    /**
     * Ambient temperature sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#AMBIENT_TEMPERATURE
     */
    SENSOR_TYPE_ID_AMBIENT_TEMPERATURE = 260,

    /**
     * Uncalibrated magnetic field sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#MAGNETIC_FIELD_UNCALIBRATED
     */
    SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED = 261,

    /**
     * Uncalibrated gyroscope sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#GYROSCOPE_UNCALIBRATED
     */
    SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED = 263,

    /**
     * Significant motion sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#SIGNIFICANT_MOTION
     */
    SENSOR_TYPE_ID_SIGNIFICANT_MOTION = 264,

    /**
     * Pedometer detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER_DETECTION
     */
    SENSOR_TYPE_ID_PEDOMETER_DETECTION = 265,

    /**
     * Pedometer sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#PEDOMETER
     */
    SENSOR_TYPE_ID_PEDOMETER = 266,

    /**
     * Heart rate sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#HEART_RATE
     */
    SENSOR_TYPE_ID_HEART_RATE = 278,

    /**
     * Wear detection sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#WEAR_DETECTION
     */
    SENSOR_TYPE_ID_WEAR_DETECTION = 280,

    /**
     * Uncalibrated acceleration sensor.
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sensor.SensorId#ACCELEROMETER_UNCALIBRATED
     */
    SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED = 281
  }

  /**
   * Enumerates the accuracy levels of data reported by a sensor.
   * @enum { int }
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum SensorAccuracy {
    /**
     * The sensor data is unreliable. It is possible that the sensor does not contact with the device to measure.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_UNRELIABLE = 0,

    /**
     * The sensor data is at a low accuracy level. The data must be calibrated based on the environment before being used.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_LOW = 1,

    /**
     * The sensor data is at a medium accuracy level. You are advised to calibrate the data based on the environment before using it.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_MEDIUM = 2,

    /**
     * The sensor data is at a high accuracy level. The data can be used directly.
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ACCURACY_HIGH = 3
  }

  /**
   * The basic data structure of the sensor event.
   * @typedef Response
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8
   */
  /**
   * The basic data structure of the sensor event.
   * @typedef Response
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Response {
    /**
     * The timestamp of the reported sensor data.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * The timestamp of the reported sensor data.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * The accuracy levels of data reported by a sensor.
     * @type { SensorAccuracy }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    accuracy: SensorAccuracy;
  }

  /**
   * Acceleration sensor event data.
   * @typedef AccelerometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8
   */
  /**
   * Acceleration sensor event data.
   * @typedef AccelerometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface AccelerometerResponse extends Response {
    /**
     * Acceleration x-axis component.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Acceleration x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Acceleration y-axis component.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Acceleration y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Acceleration z-axis component
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Acceleration z-axis component
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Linear acceleration sensor event data.
   * @typedef LinearAccelerometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LinearAccelerometerResponse extends Response {
    /**
     * Linear acceleration x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Linear acceleration y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Linear acceleration z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Acceleration uncalibrated sensor event data.
   * @typedef AccelerometerUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AccelerometerUncalibratedResponse extends Response {
    /**
     * Acceleration uncalibrated x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Acceleration uncalibrated y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Acceleration uncalibrated z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Acceleration uncalibrated x-axis offset.
     * 
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Acceleration uncalibrated y-axis offset.
     * 
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Acceleration uncalibrated z-axis offset.
     * 
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Gravity sensor event data.
   * @typedef GravityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GravityResponse extends Response {
    /**
     * Gravity x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Gravity y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Gravity z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Orientation sensor event data.
   * @typedef OrientationResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8
   */
  /**
   * Orientation sensor event data.
   * @typedef OrientationResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface OrientationResponse extends Response {
    /**
     * The device rotates at an angle around the Z axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * The device rotates at an angle around the Z axis.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    alpha: double;

    /**
     * The device rotates at an angle around the X axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * The device rotates at an angle around the X axis.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    beta: double;

    /**
     * The device rotates at an angle around the Y axis.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * The device rotates at an angle around the Y axis.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    gamma: double;
  }

  /**
   * Rotation vector sensor event data.
   * @typedef RotationVectorResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface RotationVectorResponse extends Response {
    /**
     * Rotation vector x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Rotation vector y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Rotation vector z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Scalar quantity.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    w: double;
  }

  /**
   * Gyroscope sensor event data.
   * @typedef GyroscopeResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8
   */
  /**
   * Gyroscope sensor event data.
   * @typedef GyroscopeResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface GyroscopeResponse extends Response {
    /**
     * Gyroscope x-axis component.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Gyroscope x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Gyroscope y-axis component.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Gyroscope y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Gyroscope z-axis component.
     * @type { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8
     */
    /**
     * Gyroscope z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Gyroscope uncalibrated sensor event data.
   * @typedef GyroscopeUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface GyroscopeUncalibratedResponse extends Response {
    /**
     * Gyroscope uncalibrated x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Gyroscope uncalibrated y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Gyroscope uncalibrated z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Gyroscope uncalibrated x-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Gyroscope uncalibrated y-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Gyroscope uncalibrated z-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Significant motion sensor event data.
   * @typedef SignificantMotionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface SignificantMotionResponse extends Response {
    /**
     * The degree of significant motion.
     * Whether the device has a significant motion.
     * The value 1 means that the device has a significant motion, and 0 means the opposite.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * Proximity sensor event data.
   * @typedef ProximityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface ProximityResponse extends Response {
    /**
     * Indicates the degree of proximity, event 0 indicates proximity, and greater than 0 indicates distance.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    distance: double;
  }

  /**
   * Light sensor event data.
   * @typedef LightResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface LightResponse extends Response {
    /**
     * Indicates light intensity, in lux.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    intensity: double;

    /**
     * Indicates color temperature, in kelvin.
     * @type { ?double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    colorTemperature?: double;

    /**
     * Indicates infrared luminance, in cd/m2.
     * @type { ?double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 12 dynamic
     * @since 23 static
     */
    infraredLuminance?: double;
  }

  /**
   * Hall sensor event data.
   * @typedef HallResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HallResponse extends Response {
    /**
     * Indicates hall status, 0 indicates open, and greater than 0 indicates suction.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    status: double;
  }

  /**
   * Magnetic field sensor event data.
   * @typedef MagneticFieldResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldResponse extends Response {
    /**
     * Magnetic field x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Magnetic field y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Magnetic field z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Magnetic field uncalibrated sensor event data.
   * @typedef MagneticFieldUncalibratedResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface MagneticFieldUncalibratedResponse extends Response {
    /**
     * Magnetic field uncalibrated x-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Magnetic field uncalibrated y-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    y: double;

    /**
     * Magnetic field uncalibrated z-axis component.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    z: double;

    /**
     * Magnetic field uncalibrated x-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasX: double;

    /**
     * Magnetic field uncalibrated y-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasY: double;

    /**
     * Magnetic field uncalibrated z-axis offset.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    biasZ: double;
  }

  /**
   * Pedometer sensor event data.
   * @typedef PedometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerResponse extends Response {
    /**
     * Indicates the number of steps.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    steps: double;
  }

  /**
   * Humidity sensor event data.
   * @typedef HumidityResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HumidityResponse extends Response {
    /**
     * Indicates the number of humidity.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    humidity: double;
  }

  /**
   * Pedometer detection sensor event data.
   * @typedef PedometerDetectionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface PedometerDetectionResponse extends Response {
    /**
     * Indicates the pedometer detection status, 1 indicates that a walking action has occurred,
     * and 0 indicates that no movement has occurred.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    scalar: double;
  }

  /**
   * Ambient temperature sensor event data.
   * @typedef  AmbientTemperatureResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface AmbientTemperatureResponse extends Response {
    /**
     * Indicates ambient temperature, in celsius.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    temperature: double;
  }

  /**
   * Barometer sensor event data.
   * @typedef BarometerResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface BarometerResponse extends Response {
    /**
     * Indicates the number of barometer, in hpa.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    pressure: double;
  }

  /**
   * Heart rate sensor event data.
   * @typedef HeartRateResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface HeartRateResponse extends Response {
    /**
     * Indicates the number of heart rate.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    heartRate: double;
  }

  /**
   * Wear detection sensor event data.
   * @typedef WearDetectionResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 8 dynamic
   * @since 23 static
   */
  interface WearDetectionResponse extends Response {
    /**
     * Indicates the status of wear detection, 1 for wearing, 0 for wearing not.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 8 dynamic
     * @since 23 static
     */
    value: double;
  }

  /**
   * Color sensor event data.
   * @typedef ColorResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface ColorResponse extends Response {
    /**
     * Indicates the intensity of light, in lux.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor      
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    lightIntensity: double;
    /**
     * Indicates the color temperature, in kelvin.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    colorTemperature: double;
  }

  /**
   * Sar sensor event data.
   * @typedef SarResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface SarResponse extends Response {
    /**
     * Indicates the specific absorption rate, in W/kg.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    absorptionRatio: double;
  }

  /**
   * fusion pressure sensor event data.
   * @typedef FusionPressureResponse
   * @syscap SystemCapability.Sensors.Sensor
   * @since 22 dynamic
   * @since 23 static
   */
  interface FusionPressureResponse extends Response {
    /**
     * Indicates the pressure percent data.
     * @type { double }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 22 dynamic
     * @since 23 static
     */
    fusionPressure: double;
  }

  /**
   * Start listening on device status changes.
   * @param { 'sensorStatusChange' } type - event of the listening.
   * @param { Callback<SensorStatusEvent> } callback - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void;

  /**
   * Stop listening on device status changes.
   * @param { 'sensorStatusChange' } type - event of the listening.
   * @param { Callback<SensorStatusEvent> } [callback] - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   */
  function off(type: 'sensorStatusChange', callback?: Callback<SensorStatusEvent>): void;

  /**
   * Start listening on device status changes.
   * @param { Callback<SensorStatusEvent> } callback - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function onSensorStatusChange(callback: Callback<SensorStatusEvent>): void;

  /**
   * Stop listening on device status changes.
   * @param { Callback<SensorStatusEvent> } [callback] - callback of sensor status.
   * @throws { BusinessError } 14500101 - Service exception. Possible causes: 1. Sensor hdf service exception;
   * <br> 2. Sensor service ipc exception;3. Sensor data channel exception.
   * @syscap SystemCapability.Sensors.Sensor
   * @since 23 static
   */
  function offSensorStatusChange(callback?: Callback<SensorStatusEvent>): void;

  /**
   * Defines the data structure of the device status change event.
   * @typedef SensorStatusEvent
   * @syscap SystemCapability.Sensors.Sensor
   * @since 19 dynamic
   * @since 23 static
   */
  interface SensorStatusEvent {
    /**
     * Indicates the timestamp of the status change.
     * @type { long }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Sensor type id.
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorId: int;

    /**
     * Index of sensors of the same type.
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex: int;

    /**
     * Whether the device is online, true indicates online, false indicates offline.
     *
     * @type { boolean }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    isSensorOnline: boolean;

    /**
     * Device ID.
     * @type { int }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId: int;

    /**
     * Device name.
     * @type { string }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
  }

  /**
  * Parameters of sensor on the device.
  * @typedef SensorInfoParam
  * @syscap SystemCapability.Sensors.Sensor
  * @atomicservice
  * @since 19 dynamic
  * @since 23 static
  */
  interface SensorInfoParam {
    /**
     * Unique identifier for the device that contains one or multiple sensors.
     * By default, deviceId may default to querying or controlling the local default sensor.
     *
     * @type { ?int }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    deviceId?: int;

    /**
     * Index of sensors of the same type. By default, it controls default sensors of the sensor type.
     * @type { ?int }
     * @syscap SystemCapability.Sensors.Sensor
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sensorIndex?: int;
  }

}

export default sensor;