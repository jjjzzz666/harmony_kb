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
 * @kit MechanicKit
 */

import type { Callback } from './@ohos.base';

/**
 * Provides capabilities for controlling and interacting with mechanical devices connected to this device.
 * The capabilities cover connection management, control, and monitoring.
 *
 * @namespace mechanicManager
 * @syscap SystemCapability.Mechanic.Core
 * @since 20 dynamic
 * @since 23 static
 */

declare namespace mechanicManager {

    /**
     * Subscribes to device attachment state change events.
     * @param { 'attachStateChange' } type Event type.
     * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     */
    function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void;

    /**
     * Subscribes to device attachment state change events.
     * @param { Callback<AttachStateChangeInfo> } callback Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 23 static
     */
    function onAttachStateChange(callback: Callback<AttachStateChangeInfo>): void;

    /**
     * Unsubscribes from device attachment state change events.
     * @param { 'attachStateChange' } type Event type.
     * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     */
    function off(type: 'attachStateChange', callback?: Callback<AttachStateChangeInfo>): void;

    /**
     * Unsubscribes from device attachment state change events.
     * @param { Callback<AttachStateChangeInfo> } [callback] Callback used to return the state change.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 23 static
    */
   function offAttachStateChange(callback?: Callback<AttachStateChangeInfo>): void;

    /**
     * Obtain the list of connected mechanical devices.
     * @returns { MechInfo[] } List of connected mechanical devices.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    function getAttachedMechDevices(): MechInfo[];

    /**
     * Sets a user operation.
     * @permission ohos.permission.CONNECT_MECHANIC_HARDWARE
     * @param { Operation } operation Operation type.
     * @param { string } mac MAC address.
     * @param { string } params Operation parameters.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function setUserOperation(operation: Operation, mac: string, params: string): void;

    /**
     * Enables or disables camera tracking.
     * @param { boolean } isEnabled Whether to enable camera tracking.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */

    function setCameraTrackingEnabled(isEnabled: boolean): void;

    /**
     * Checks whether camera tracking is enabled for this mechanical device.
     * @returns { boolean } Enabled status. The value true means that camera tracking is enabled, and false means
     * the opposite.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */

    function getCameraTrackingEnabled(): boolean;

    /**
     * Subscribes to tracking events.
     * @param { 'trackingStateChange' } type Event type.
     * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     */
    function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void;

    /**
    * Subscribes to tracking events.
    * @param { Callback<TrackingEventInfo> } callback Callback used to return the tracking event information.
    * @throws { BusinessError } 33300001 - Service exception.
    * @syscap SystemCapability.Mechanic.Core
    * @since 23 static
    */
    function onTrackingStateChange(callback: Callback<TrackingEventInfo>): void;

    /**
     * Unsubscribes from tracking events.
     * @param { 'trackingStateChange' } type Event type.
     * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     */
    function off(type: 'trackingStateChange', callback?: Callback<TrackingEventInfo>): void;

    /**
     * Unsubscribes from tracking events.
     * @param { Callback<TrackingEventInfo> } [callback] Callback used to return the tracking event information.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @since 23 static
     */
    function offTrackingStateChange(callback?: Callback<TrackingEventInfo>): void;

    /**
     * Sets the camera tracking layout for this mechanical device.
     * @param { CameraTrackingLayout } trackingLayout Camera tracking layout.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    function setCameraTrackingLayout(trackingLayout: CameraTrackingLayout): void;

    /**
     * Obtains the camera tracking layout of this mechanical device.
     * @returns { CameraTrackingLayout } Camera tracking layout obtained.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    function getCameraTrackingLayout(): CameraTrackingLayout;

    /**
     * Rotates a mechanical device to the relative angles.
     * @param { int } mechId ID of the mechanical device.
     * @param { RotationAngles } angles Relative angles.
     * @param { int } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    function rotate(mechId: int, angles: RotationAngles, duration: int): Promise<Result>;

    /**
     * Rotates a mechanical device to the absolute angles.
     * @param { int } mechId ID of the mechanical device.
     * @param { EulerAngles } angles Absolute angles.
     * @param { int } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    function rotateToEulerAngles(mechId: int, angles: EulerAngles, duration: int): Promise<Result>;

    /**
     * Obtains the maximum continuous rotation duration of a mechanical device.
     *
     * @param { int } mechId ID of the mechanical device.
     * @returns { int } Maximum rotation duration. Unit: millisecond.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function getMaxRotationTime(mechId: int): int;

    /**
     * Obtains the maximum rotation speed of a mechanical device.
     *
     * @param { int } mechId ID of the mechanical device.
     * @returns { RotationSpeed } Maximum speed. Only the absolute value of the speed is returned.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function getMaxRotationSpeed(mechId: int): RotationSpeed;

    /**
     * Rotates a mechanical device at the specified speed.
     * @param { int } mechId ID of the mechanical device.
     * @param { RotationSpeed } speed Rotation speed.
     * @param { int } duration Rotation duration. Unit: millisecond.
     * @returns { Promise<Result> } Promise that return the execution result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function rotateBySpeed(mechId: int, speed: RotationSpeed, duration: int): Promise<Result>;

    /**
     * Stops a mechanical device from moving.
     * @param { int } mechId ID of the mechanical device.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function stopMoving(mechId: int): Promise<void>;

    /**
     * Obtains the current angles of a mechanical device.
     * @param { int } mechId ID of the mechanical device.
     * @returns { EulerAngles } Rotation angles.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    function getCurrentAngles(mechId: int): EulerAngles;

    /**
     * Obtains the maximum rotation angles relative to the reference point for the specified mechanical device.
     *
     * @param { int } mechId ID of the mechanical device.
     * @returns { RotationLimits } Maximum rotation angles.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    function getRotationLimits(mechId: int): RotationLimits;

    /**
     * Obtains the status of the rotation axes.
     * @param { int } mechId ID of the mechanical device.
     * @returns { RotationAxesStatus } Rotation axis status.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    function getRotationAxesStatus(mechId: int): RotationAxesStatus;


    /**
     * Register a listener for axis state changes.
     * The status of the rotation axis changes dynamically, which needs to be monitored.
     *
     * @param { 'rotationAxesStatusChange' } type - Event type.
     * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     */
    function on(type: 'rotationAxesStatusChange', callback: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Register a listener for axis state changes.
     * The status of the rotation axis changes dynamically, which needs to be monitored.
     *
     * @param { Callback<RotationAxesStateChangeInfo> } callback - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 23 static
     */
    function onRotationAxesStatusChange(callback: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Unregister a listener for axis state changes.
     *
     * @param { 'rotationAxesStatusChange' } type - Event type.
     * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     */
    function off(type: 'rotationAxesStatusChange', callback?: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Unregister a listener for axis state changes.
     *
     * @param { Callback<RotationAxesStateChangeInfo> } [callback] - Rotate axis state changes callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 23 static
     */
    function offRotationAxesStatusChange(callback?: Callback<RotationAxesStateChangeInfo>): void;

    /**
     * Searching for a specified target.
     *
     * @param { TargetInfo } target - Target infomation.
     * @param { SearchParams } params - Parameters to use when searching.
     * @returns { Promise<SearchResult> } Promise that return the Search result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 33300001 - Service exception.
     * @throws { BusinessError } 33300002 - Device not connected.
     * @throws { BusinessError } 33300003 - Feature not supported.
     * @throws { BusinessError } 33300004 - Camera not opened.
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>;

    /**
     * Mechanical device information.
     * @typedef MechInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    export interface MechInfo {
        /**
         * ID of the mechanical device.
         * @type { int }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        mechId: int;


        /**
         * Type of the mechanical device.
         * @type { MechDeviceType }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        mechDeviceType: MechDeviceType;

        /**
         * Name of the mechanical device.
         * @type { string }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        mechName: string;
    }


    /**
     * The rotion angles, relative to the current position.
     * @typedef RotationAngles
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export interface RotationAngles {
        /**
         * Yaw angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        yaw?: double;

        /**
         * Roll angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        roll?: double;

        /**
         * Pitch angle, ranging from -2*Math.PI to 2*Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        pitch?: double;
    }

    /**
     * Absolute euler angles relative to the home position.
     *
     * @typedef EulerAngles
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export interface EulerAngles {
        /**
         * Yaw angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        yaw?: double;

        /**
         * Roll angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        roll?: double;

        /**
         * Pitch angle, ranging from -Math.PI to Math.PI, measured in radians.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        pitch?: double;
    }

    /**
     * Rotational speed. A negative value indicates a clockwise rotation, and a positive value indicates a
     * counterclockwise rotation.
     * @typedef RotationSpeed
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    export interface RotationSpeed {
        /**
         * Yaw speed, measured in radians per second.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        yawSpeed?: double;

        /**
         * Roll speed, measured in radians per second.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        rollSpeed?: double;

        /**
         * Pitch speed, measured in radians per second.
         * @type { ?double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */

        pitchSpeed?: double;
    }


    /**
     * Rotation angle limits relative to the reference point.
     * @typedef RotationLimits
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */

    export interface RotationLimits {
        /**
         * Maximum yaw rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        negativeYawMax: double;

        /**
         * Maximum yaw rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        positiveYawMax: double;

        /**
         * Maximum roll rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        negativeRollMax: double;

        /**
         * Maximum roll rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        positiveRollMax: double;

        /**
         * Maximum pitch rotation angles in the negative direction, ranging from -2*Math.PI to 0, measured in radians.
         * If the value is less than or equal to -2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        negativePitchMax: double;

        /**
         * Maximum pitch rotation angles in the positive direction, ranging from 0 to 2*Math.PI, measured in radians.
         * If the value is greater than or equal to 2*Math.PI, there is no restriction.
         * @type { double }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        positivePitchMax: double;
    }

    /**
     * Rotation axes status
     *
     * @typedef RotationAxesStatus
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export interface RotationAxesStatus {
        /**
         * Whether the yaw axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        yawEnabled: boolean;

        /**
         * Whether the roll axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        rollEnabled: boolean;

        /**
         * Whether the pitch axis is enabled.
         * @type { boolean }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        pitchEnabled: boolean;

        /**
         * Whether the yaw axis is limited.
         * @type { ?RotationAxisLimited } RotationAxisLimited
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        yawLimited?: RotationAxisLimited;

        /**
         * Whether the roll axis is limited.
         * @type { ?RotationAxisLimited }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        rollLimited?: RotationAxisLimited;

        /**
         * Whether the pitch axis is limited.
         * @type { ?RotationAxisLimited }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        pitchLimited?: RotationAxisLimited;
    }

    /**
     * Enumerates the rotation axis limit states.
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export enum RotationAxisLimited {
        /**
         * Not limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        NOT_LIMITED = 0,

        /**
         * Negative limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        NEGATIVE_LIMITED = 1,

        /**
         * Positive limited.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        POSITIVE_LIMITED = 2,
    }

    /**
     * Rotation axes state change information.
     * @typedef RotationAxesStateChangeInfo
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export interface RotationAxesStateChangeInfo {
        /**
         * ID of the mechanical device.
         * @type { int }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        mechId: int;

        /**
         * Rotate axis status.
         * @type { RotationAxesStatus }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        status: RotationAxesStatus,
    }

    /**
     * Tracking event callback info.
     *
     * @typedef TrackingEventInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    export interface TrackingEventInfo {
        /**
         * Tracking event.
         * @type { TrackingEvent } Tracking event.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        event: TrackingEvent;
    }

    /**
     * Callback information about the device attachment state change.
     * @typedef AttachStateChangeInfo
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    export interface AttachStateChangeInfo {

        /**
         * Device attachment state.
         * @type { AttachState }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        state: AttachState;

        /**
         * Mechanical device information.
         * @type { MechInfo }
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        mechInfo: MechInfo,
    }

    /**
     * Target information.
     *
     * @typedef TargetInfo
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    export interface TargetInfo {
        /**
         * Target type.
         * @type { TargetType }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        targetType: TargetType;
    }

    /**
     * Parameters for target searching.
     *
     * @typedef SearchParams
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    export interface SearchParams {

        /**
         * Search direction.
         * @type { SearchDirection }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        direction: SearchDirection;
    }

    /**
     * Search result.
     *
     * @typedef SearchResult
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    export interface SearchResult {
        /**
         * Search result. Returns the number of targets found.0 means not found.
         * @type { int }
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        targetCount: int;
    }

    /**
     * Enumerates the user operations.
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export enum Operation {
        /**
         * Connection operation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        CONNECT = 0,

        /**
         * Disconnection operation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        DISCONNECT = 1
    }

    /**
     * Enumerates the tracking events.
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */

    export enum TrackingEvent {
        /**
         * Camera tracking enabled by user.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        CAMERA_TRACKING_USER_ENABLED = 0,

        /**
         * Camera tracking disabled by user.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        CAMERA_TRACKING_USER_DISABLED = 1,

        /**
         * Camera tracking layout changed. You can call getCameraTrackingLayout to obtain the new layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        CAMERA_TRACKING_LAYOUT_CHANGED = 2,
    }

    /**
     * Rotation execution results.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    export enum Result {
        /**
         * Rotation completed.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        COMPLETED = 0,

        /**
         * Rotation was interrupted.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        INTERRUPTED = 1,

        /**
         * Device reached limitation.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        LIMITED = 2,

        /**
         * Rotation time out.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        TIMEOUT = 3,

        /**
         * Rotation failed due to system error.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 20 dynamic
         * @since 23 static
         */
        SYSTEM_ERROR = 100
    }

    /**
     * Enumerates the mechanical device types.
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */

    export enum MechDeviceType {
        /**
         * Gimbal device.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */

        GIMBAL_DEVICE = 0
    }

    /**
     * Device attach states.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    export enum AttachState {

        /**
         * Device attached.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        ATTACHED = 0,

        /**
         * Device detached.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        DETACHED = 1
    }

    /**
     * Enumerates the camera tracking layouts.
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    export enum CameraTrackingLayout {
        /**
         * Default layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        DEFAULT = 0,

        /**
         * Left-side layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        LEFT = 1,

        /**
         * Middle layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        MIDDLE = 2,

        /**
         * Right-side layout.
         * @syscap SystemCapability.Mechanic.Core
         * @since 20 dynamic
         * @since 23 static
         */
        RIGHT = 3
    }

    /**
     * Target type.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    export enum TargetType {
        /**
         * human Face type.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        HUMAN_FACE = 0
    }

    /**
     * Search direction.
     *
     * @enum { int }
     * @syscap SystemCapability.Mechanic.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    export enum SearchDirection {
        /**
         * System Default Direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        DEFAULT = 0,

        /**
         * Leftward direction. Also indicates clockwise direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        LEFTWARD = 1,

        /**
         * Rightward direction. Also indicates the counterclockwise direction.
         * @syscap SystemCapability.Mechanic.Core
         * @systemapi
         * @since 21 dynamic
         * @since 23 static
         */
        RIGHTWARD = 2,
    }
}

export default mechanicManager;