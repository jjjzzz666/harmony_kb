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
 * @kit UserAuthenticationKit
 */

import UserAuth from '@ohos.userIAM.userAuth';

/**
 * Companion device authentication APIs.
 *
 * This module allows system applications to manage companion device enrollment,
 * template lifecycle, and continuous authentication coordination.
 *
 * Device Behavior Differences:not support on TV or wearables
 *
 * @namespace companionDeviceAuth
 * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace companionDeviceAuth {
    /**
     * Business identifiers supported by the companion device authentication service.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @enum { number }
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enum BusinessId {
        /**
         * Built-in business identifier used when no custom type is required.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        DEFAULT = 0,

        /**
         * Starting value for vendor-defined business identifiers.
         * Assign values greater than 10000 for vendor-defined use cases.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        VENDOR_BEGIN = 10000
    }

    /**
     * Supported device identifier types for device binding and lookup.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @enum { number }
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enum DeviceIdType {
        /**
         * Unified device identifier.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        UNIFIED_DEVICE_ID = 1,

        /**
         * Starting value for vendor-defined device identifier types.
         * Assign values greater than 10000 for vendor-defined use cases.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        VENDOR_BEGIN = 10000
    }

    /**
     * Purpose passed to the device selector when requiring chosen devices.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @enum { number }
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enum SelectPurpose {
        /**
         * Select a device that will add templates for companion device authentication.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        SELECT_ADD_DEVICE = 1,

        /**
         * Select a device that provides authentication capability for shared templates.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        SELECT_AUTH_DEVICE = 2,

        /**
         * Starting value for vendor-defined selection purposes.
         * Assign values greater than 10000 for vendor-defined use cases.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        VENDOR_BEGIN = 10000
    }

    /**
     * Key information that uniquely identifies a companion device.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface DeviceKey
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface DeviceKey {
        /**
         * Identifier type describing how the device is referenced.
         * Use {@link DeviceIdType} values.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { int }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceIdType: int;

        /**
         * Device identifier content such as the Unified Device Identifier or a vendor-specific value.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { string }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceId: string;

        /**
         * Local user identifier on the device.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { int }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceUserId: int;
    }

    /**
     * Companion device metadata and runtime status for template coordination.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface DeviceStatus
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface DeviceStatus {
        /**
         * Device key referencing the device.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { DeviceKey }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceKey: DeviceKey;

        /**
         * Display name of the user on the device.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { string }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceUserName: string;

        /**
         * Model information reported by the device.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { string }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceModelInfo: string;

        /**
         * Friendly name assigned to the device.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { string }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceName: string;

        /**
         * Whether the device is currently reachable.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { boolean }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        isOnline: boolean;

        /**
         * Business identifiers currently enabled on the device.
         * Each identifier corresponds to a capability supported by the device.
         * Use values from {@link BusinessId}.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { int[] }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        supportedBusinessIds: int[];
    }

    /**
     * Template metadata managed by the companion device authentication service.
     * Each companion device will be regarded as an authentication template of the user.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface TemplateStatus
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface TemplateStatus {
        /**
         * Identifier of the template encoded as binary data.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        templateId: Uint8Array;

        /**
         * Whether the template's status has been confirmed.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { boolean }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        isConfirmed: boolean;

        /**
         * Whether the template is still valid and can be used for authentication. In some circumstances,
         * such as when the companion device has been restored to factory settings, the template will become invalid.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { boolean }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        isValid: boolean;

        /**
         * Local user identifier associated with the template.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { int }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        localUserId: int;

        /**
         * Time when the template was added.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { Date }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        addedTime: Date;

        /**
         * Business identifiers enabled for this template.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { int[] }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        enabledBusinessIds: int[];

        /**
         * Device status associated with this template.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { DeviceStatus }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceStatus: DeviceStatus;
    }

    /**
     * Callback invoked when template statuses change.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @typedef { function } TemplateStatusCallback
     * @param { TemplateStatus[] } templateStatusList - Latest template status list.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void;

    /**
     * Callback invoked when continuous authentication results change.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @typedef { function } ContinuousAuthStatusCallback
     * @param { boolean } isAuthPassed - Whether the continuous authentication passes.
     * @param { UserAuth.AuthTrustLevel } [authTrustLevel] - The highest achievable AuthTrustLevel at the time of authentication.
     * Provided only if isAuthPassed is true.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void;

    /**
     * Callback invoked when the list of available devices is updated.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @typedef { function } AvailableDeviceStatusCallback
     * @param { DeviceStatus[] } deviceStatusList - Status list describing available devices.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void;

    /**
     * Parameters for continuous authentication subscription.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface ContinuousAuthParam
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface ContinuousAuthParam {
        /**
         * Optional template identifier that scopes the continuous authentication session.
         * If omitted, subscribes to updates for all templates.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { ?Uint8Array }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        templateId?: Uint8Array;
    }

    /**
     * Monitor that surfaces device and template status changes.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface StatusMonitor
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface StatusMonitor {
        /**
         * Retrieve the full list of template statuses.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @returns { Promise<TemplateStatus[]> } Promise resolved with current template statuses.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        getTemplateStatus(): Promise<TemplateStatus[]>;

        /**
         * Subscribe to template status changes.
         * The callback receives all current templates after registration and every update.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { TemplateStatusCallback } callback - Handler that processes template status updates.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        onTemplateChange(callback: TemplateStatusCallback): void;

        /**
         * Cancel template status subscription. Omit the callback to remove all subscriptions created by the caller.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { TemplateStatusCallback } [callback] - Target callback to remove.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        offTemplateChange(callback?: TemplateStatusCallback): void;

        /**
         * Subscribe to status changes for devices that are available for enrollment.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { AvailableDeviceStatusCallback } callback - Handler that processes available device updates.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        onAvailableDeviceChange(callback: AvailableDeviceStatusCallback): void;

        /**
         * Cancel available device subscription. Omit the callback to remove all subscriptions created by the caller.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { AvailableDeviceStatusCallback } [callback] - Target callback to remove when provided.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        offAvailableDeviceChange(callback?: AvailableDeviceStatusCallback): void;

        /**
         * Subscribe to continuous authentication updates for a template.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { ContinuousAuthParam } param - Subscription parameters describing the template of interest.
         * @param { ContinuousAuthStatusCallback } callback - Handler for continuous authentication outcomes.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @throws { BusinessError } 32600002 - The template is not found.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback): void;

        /**
         * Cancel continuous authentication subscription. Pass a callback to remove that handler;
         * omit the callback to remove all handlers registered by the caller.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @permission ohos.permission.USE_USER_IDM
         * @param { ContinuousAuthStatusCallback } [callback] - Target callback to remove when provided.
         * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void;
    }

    /**
     * Obtain a status monitor bound to the specified local user.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { int } localUserId - Local user identifier bound to the monitor session.
     * @returns { StatusMonitor } Status monitor instance for device and template updates.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @throws { BusinessError } 32600002 - The local user is not found.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    function getStatusMonitor(localUserId: int): StatusMonitor;

    /**
     * Result returned by the device selection callback.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @interface DeviceSelectResult
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    interface DeviceSelectResult {
        /**
         * List of selected device keys that satisfy the selection purpose.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { DeviceKey[] }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        deviceKeys: DeviceKey[];

        /**
         * Optional context information related to the device selection process.
         *
         * Device Behavior Differences:not support on TV or wearables
         *
         * @type { ?Uint8Array }
         * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 23 dynamic&static
         */
        selectionContext?: Uint8Array;
    }

    /**
     * Device selection callback signature that returns appropriate devices for the requested purpose.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @typedef { function } DeviceSelectCallback
     * @param { int } selectPurpose - Purpose value, use {@link SelectPurpose} constants.
     * @returns { DeviceSelectResult } Device selection result containing selected devices and optional context.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult;

    /**
     * Register the device selection callback to provide customized device selection logic.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { DeviceSelectCallback } callback - Selector implementation that returns device candidates.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    function registerDeviceSelectCallback(callback: DeviceSelectCallback): void;

    /**
     * Unregister the currently registered device selection callback.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @permission ohos.permission.USE_USER_IDM
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    function unregisterDeviceSelectCallback(): void;

    /**
     * Update the list of enabled business identifiers for the specified template.
     * The new scope becomes effective after the returned promise resolves.
     *
     * Device Behavior Differences:not support on TV or wearables
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { Uint8Array } templateId - Identifier of the template to modify.
     * @param { int[] } enabledBusinessIds - Business identifiers that should remain enabled.
     * @returns { Promise<void> } Promise resolved when the update completes.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @throws { BusinessError } 32600002 - The template is not found.
     * @throws { BusinessError } 32600003 - The business ID is invalid.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: int[]): Promise<void>;
}

export default companionDeviceAuth;
