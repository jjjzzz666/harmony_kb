/*
 * Copyright (c) 2022-2022 Huawei Device Co., Ltd.
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
 * @kit UserAuthenticationKit
 */

/**
 * This module provides the capability to manage face auth.
 *
 * @namespace faceAuth
 * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace faceAuth {
  /**
   * Provides the abilities for face authentication.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  class FaceAuthManager {
    /**
     * Constructor to get the FaceAuthManager class instance.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Set XComponent surface id for camera preview during enroll.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { string } surfaceId Indicates surface id for face enroll preview.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
     * @throws { BusinessError } 12700001 - The service is unavailable.
     * @syscap SystemCapability.UserIAM.UserAuth.FaceAuth
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setSurfaceId(surfaceId: string): void;
  }
}

export default faceAuth;
