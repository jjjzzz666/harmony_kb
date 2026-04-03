/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit DataProtectionKit
 */

/**
 * Provides the capability to set the DLP feature information.
 * 
 * @namespace dlpSetDlpFeature
 * @syscap SystemCapability.Security.DataLossPrevention
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0
 */
declare namespace dlpSetDlpFeature {
    /**
     * Sets DLP feature status information.
     * 
     * @interface StatusInfoResult
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface StatusInfoResult {
        /**
         * Whether the DLP information is set successfully.
         * 
         * @type { boolean }
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        isSuccess: boolean;
    }

    /**
     * Sets DLP feature status.
     * 
     * @enum { number } DlpFeatureStatus
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export enum DlpFeatureStatus {
        /**
         * DLP feature is not enabled.
         * 
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        NOT_ENABLED_FEATURE = 0,
        /**
         * DLP feature is enabled.
         * 
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        ENABLED_FEATURE = 1
    }

    /**
     * Sets DLP feature status information.
     * 
     * @interface DLPFeatureInfo
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface DLPFeatureInfo {
        /**
         * Feature information for DLP.
         * 
         * @type { DlpFeatureStatus }
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        dlpFeatureStatus: DlpFeatureStatus;
    }

    /**
     * Sets DLP feature status. This method returns a Promise with the result.
     * 
     * @param { DlpFeatureStatus } status - Indicates the DLP feature status.
     * @returns { Promise<StatusInfoResult> } Returns the {@link StatusInfoResult}.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>;
}

export default dlpSetDlpFeature;
