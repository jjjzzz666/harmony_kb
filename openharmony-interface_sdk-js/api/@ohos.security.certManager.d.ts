/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit DeviceCertificateKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * OpenHarmony Universal CertificateManager
 *
 * @namespace certificateManager
 * @syscap SystemCapability.Security.CertificateManager
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace certificateManager {
  /**
   * Enum for result code
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CMErrorCode {
    /**
     * Indicates that the application has no permission to call the API.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_PERMISSION = 201,

    /**
     * Indicates that the application is not a system application.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NOT_SYSTEM_APP = 202,

    /**
     * Indicates that the input parameters are invalid.
     * For example, the number of parameters or the parameter type is incorrect.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INVALID_PARAMS = 401,

    /**
     * Indicates that internal error.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_GENERIC = 17500001,

    /**
     * Indicates that the certificate does not exist.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_FOUND = 17500002,

    /**
     * Indicates that the keystore is in an invalid format or the keystore password is incorrect.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INCORRECT_FORMAT = 17500003,

    /**
     * Indicates that the number of certificates or credentials reaches the maximum allowed.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_MAX_CERT_COUNT_REACHED = 17500004,

    /**
     * Indicates that the application is not authorized by the user.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_AUTHORIZATION = 17500005,

    /**
     * Indicates that the device enters advanced security mode.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_ERROR_DEVICE_ENTER_ADVSECMODE = 17500007,

    /**
     * Indicates that the password is incorrect.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CM_ERROR_PASSWORD_IS_ERR = 17500008,

    /**
     * Indicates that the device does not support the specified certificate store path.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    CM_ERROR_STORE_PATH_NOT_SUPPORTED = 17500009,

    /**
     * Indicates that access USB key service failed.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_ACCESS_UKEY_SERVICE_FAILED = 17500010,

    /**
     * Indicates that the input parameters validation failed.
     * For example, the parameter format is incorrect or the value range is invalid.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_PARAMETER_VALIDATION_FAILED = 17500011,
  }

  /**
   * Provides the CertInfo type.
   *
   * @typedef CertInfo
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertInfo {
    /**
     * Indicates the uri of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Indicates the alias of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * Indicates the state of certificate.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * Indicates the issuer name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    issuerName: string;

    /**
     * Indicates the subject name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;

    /**
     * Indicates the serial number of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * Indicates the not before time of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notBefore: string;

    /**
     * Indicates the not after time of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notAfter: string;

    /**
     * Indicates the fingerprint of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    fingerprintSha256: string;

    /**
     * Indicates the certificate binary data.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    cert: Uint8Array;
  }

  /**
   * Provides the abstract Cert type.
   *
   * @typedef CertAbstract
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertAbstract {
    /**
     * Indicates the uri of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Indicates the alias of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * Indicates the state of certificate.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * Indicates the subject name of certificate.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;
  }

  /**
   * Provides the Credential type.
   *
   * @typedef Credential
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Credential {
    /**
     * Indicates the type of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Indicates the alias of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Indicates the uri of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;

    /**
     * Indicates the number of certificates included in the credential.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certNum: int;

    /**
     * Indicates the number of keys included in the credential.
     *
     * @type { int }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyNum: int;

    /**
     * Indicates the credential binary data.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialData: Uint8Array;

    /**
     * Indicates the certificate purpose.
     *
     * @type { ?CertificatePurpose }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: CertificatePurpose;
  }

  /**
   * Provides the abstract Credential type.
   *
   * @typedef CredentialAbstract
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CredentialAbstract {
    /**
     * Indicates the type of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Indicates the alias of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Indicates the uri of Credential.
     *
     * @type { string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;
  }

  /**
   * Provides the CMResult type.
   *
   * @typedef CMResult
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMResult {
    /**
     * Indicates the certificate list of CMResult.
     *
     * @type { ?Array<CertAbstract> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certList?: Array<CertAbstract>;

    /**
     * Indicates the certificate info of CMResult.
     *
     * @type { ?CertInfo }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certInfo?: CertInfo;

    /**
     * Indicates the credential list of CMResult.
     *
     * @type { ?Array<CredentialAbstract> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialList?: Array<CredentialAbstract>;

    /**
     * Indicates the credential of CMResult.
     *
     * @type { ?Credential }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credential?: Credential;

    /**
     * Indicates the app uid list of CMResult.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    appUidList?: Array<string>;

    /**
     * Indicates the certificate uri of CMResult.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * Indicates the outData of CMResult.
     *
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    outData?: Uint8Array;

    /**
     * Indicates the credential detail list of CMResult.
     *
     * @type { ?Array<Credential> }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    credentialDetailList?: Array<Credential>;

    /**
     * Indicates the certificate URI list of CMResult.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    uriList?: Array<string>;
  }

  /**
   * Enum for Key Purpose
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPurpose {
    /**
     * Indicates that key for signature.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_SIGN = 4,

    /**
     * Indicates that key for verify.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_VERIFY = 8
  }

  /**
   * Enum for Key Digest
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyDigest {
    /**
     * Indicates that key digest is none.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_NONE = 0,

    /**
     * Indicates that key digest is md5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_MD5 = 1,

    /**
     * Indicates that key digest is sha1.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA1 = 2,

    /**
     * Indicates that key digest is sha224.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA224 = 3,

    /**
     * Indicates that key digest is sha256.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA256 = 4,

    /**
     * Indicates that key digest is sha384.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA384 = 5,

    /**
     * Indicates that key digest is sha512.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA512 = 6,

    /**
     * Indicates that key digest is SM3.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_DIGEST_SM3 = 7,
  }

  /**
   * Enum for Key Padding
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPadding {
    /**
     * Indicates that key padding is none.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_NONE = 0,

    /**
     * Indicates that key padding is PSS.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PSS = 1,

    /**
     * Indicates that key padding is PKCS1_V1_5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PKCS1_V1_5 = 2
  }

  /**
   * Provides the CMSignatureSpec type.
   *
   * @typedef CMSignatureSpec
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMSignatureSpec {
    /**
     * Indicates the key purpose of CMSignatureSpec.
     *
     * @type { CmKeyPurpose }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    purpose: CmKeyPurpose;

    /**
     * Indicates the key padding of CMSignatureSpec.
     *
     * @type { ?CmKeyPadding }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    padding?: CmKeyPadding;

    /**
     * Indicates the key digest of CMSignatureSpec.
     *
     * @type { ?CmKeyDigest }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    digest?: CmKeyDigest;
  }

  /**
   * Provides the CMHandle type.
   *
   * @typedef CMHandle
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMHandle {
    /**
     * Indicates the handle .
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    handle: Uint8Array;
  }

  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @param { AsyncCallback<CMResult> } callback - The callback of installPrivateCertificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @param { AsyncCallback<CMResult> } callback - The callback of installPrivateCertificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(
    keystore: Uint8Array,
    keystorePwd: string,
    certAlias: string,
    callback: AsyncCallback<CMResult>
  ): void;

  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string): Promise<CMResult>;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<void> } callback - The callback of uninstallPrivateCertificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstall the specified normal application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function uninstallPrivateCertificate(keyUri: string): Promise<void>;

  /**
   * Get a list of all applications private certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<CMResult> } callback - The callback of getAllAppPrivateCertificates.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllAppPrivateCertificates(callback: AsyncCallback<CMResult>): void;

  /**
   * Get a list of all applications private certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllAppPrivateCertificates(): Promise<CMResult>;

  /**
   * Get the detail of private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @param { AsyncCallback<CMResult> } callback - The callback of getPrivateCertificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function getPrivateCertificate(keyUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * Get the detail of private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates key's name.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function getPrivateCertificate(keyUri: string): Promise<CMResult>;

  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification.
   * @param { AsyncCallback<CMHandle> } callback - The callback of init.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification.
   * @param { AsyncCallback<CMHandle> } callback - The callback of init.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback<CMHandle>): void;

  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification.
   * @returns { Promise<CMHandle> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11
   */
  /**
   * Init operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Indicates the authorization relationship between application and application certificate.
   * @param { CMSignatureSpec } spec - Indicates the properties of the signature and verification.
   * @returns { Promise<CMHandle> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function init(authUri: string, spec: CMSignatureSpec): Promise<CMHandle>;

  /**
   * Update operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } data - Indicates the input value.
   * @param { AsyncCallback<void> } callback - The callback of update.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function update(handle: Uint8Array, data: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * Update operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } data - Indicates the input value.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function update(handle: Uint8Array, data: Uint8Array): Promise<void>;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { AsyncCallback<CMResult> } callback - The callback of finish.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } signature - Indicates the sign data.
   * @param { AsyncCallback<CMResult> } callback - The callback of finish.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, signature: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * Finish operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { Uint8Array } [options] signature - Indicates the sign data.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, signature?: Uint8Array): Promise<CMResult>;

  /**
   * Abort operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @param { AsyncCallback<void> } callback - The callback of abort.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function abort(handle: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * Abort operation for signing and verifying etc.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Indicates the handle of the init operation.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function abort(handle: Uint8Array): Promise<void>;

  /**
   * Get the detail of public application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates the key's name.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getPublicCertificate(keyUri: string): Promise<CMResult>;

  /**
   * Whether the current application is authorized by the specified public application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates the key's name.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function isAuthorizedApp(keyUri: string): Promise<boolean>;

  /**
   * Get a list of all user trusted CA certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllUserTrustedCertificates(): Promise<CMResult>;

  /**
   * Get the detail of user trusted CA certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } certUri - Indicates the certificate's name.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getUserTrustedCertificate(certUri: string): Promise<CMResult>;

  /**
   * Get a list of all system application certificates, such as WLAN, VPN certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllSystemAppCertificates(): Promise<CMResult>;

  /**
   * Get all private certificates installed by the application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } The private certificates installed by the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 13 dynamic
   * @since 23 static
   */
  function getPrivateCertificates(): Promise<CMResult>;

  /**
   * Obtains the path of the certificate file.
   * 
   * @param { CertStoreProperty } property Properties of the certificate file storage path.
   * @returns { string } Path of the certificate file obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   * unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.  For example, CertStoreProperty.certType
   * is set to CA_CERT_USER, but CertStoreProperty.certScope is not specified.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18
   */
  /**
   * Obtains the path of the certificate file.
   * @param { CertStoreProperty } property Properties of the certificate file storage path.
   * @returns { string } Path of the certificate file obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   * unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed. For example, CertStoreProperty.certType
   * is set to CA_CERT_USER, but CertStoreProperty.certScope is not specified.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500009 - The device does not support the specified certificate storage path,
   * For example, the device outside China does not support the certificate that uses SM algorithm.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 20 dynamic
   * @since 23 static
   */
  function getCertificateStorePath(property: CertStoreProperty): string;

  /**
   * Install the user trusted CA certificate.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { Uint8Array } cert - Indicates the certificate file content to be installed.
   * @param { CertScope } certScope - Indicates the scope of user ca certificate.
   * @returns { CMResult } The certificate uri that identifies the installed certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500007 - Indicates that the device enters advanced security mode. In this mode, the user CA certificate cannot be installed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function installUserTrustedCertificateSync(cert: Uint8Array, certScope: CertScope): CMResult;

  /**
   * Enum for storage authentication level
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum AuthStorageLevel {
    /**
     * Indicates that the file can be accessed after the device is started.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL1 = 1,

    /**
     * Indicates that the file can be accessed after the device is unlocked for the first time.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL2 = 2,

    /**
     * Indicates that the file can be accessed when the device is unlocked.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL4 = 4
  }

  /**
   * Provides the certificate file store property type.
   *
   * @typedef CertStoreProperty
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export interface CertStoreProperty {
    /**
     * Indicates the certificate type managed by Certificate Manager.
     *
     * @type { CertType }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certType: CertType;

    /**
     * Indicates the scope of user ca certificate. This parameter is valid only when certType is set to CA_CERT_USER.
     *
     * @type { ?CertScope }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certScope?: CertScope;

    /**
     * Indicates the certificate algorithm type. This parameter is valid only when certType is set to CA_CERT_SYSTEM. default value is INTERNATIONAL.
     *
     * @type { ?CertAlgorithm }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    certAlg?: CertAlgorithm;
  }

  /**
   * Enum for certificate type managed by Certificate Manager.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertType {
    /**
     * Indicates that CA certificate installed by OS.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_SYSTEM = 0,

    /**
     * Indicates that CA certificate installed by user.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_USER = 1
  }

  /**
   * Install private application certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @param { string } certAlias - Indicates the certificate name inputted by the user.
   * @param { AuthStorageLevel } level - Indicates the storage authentication level of key file.
   * @returns { Promise<CMResult> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, level: AuthStorageLevel): Promise<CMResult>;

  /**
   * Get a list of all user trusted CA certificates.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { CertScope } scope - Indicates the scope of user ca certificate.
   * @returns { Promise<CMResult> } The user ca certificates.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getAllUserTrustedCertificates(scope: CertScope): Promise<CMResult>;

  /**
   * Enum for the scope of user ca certificate.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertScope {
    /**
     * Indicates that the user ca certificate for a current user.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CURRENT_USER = 1,

    /**
     * Indicates that the user ca certificate for all users.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    GLOBAL_USER = 2
  }

  /**
   * Uninstall the user trusted CA certificate.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - Indicates the certificate uri to be uninstalled.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   * <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function uninstallUserTrustedCertificateSync(certUri: string): void;

  /**
   * Enum for the certificate algorithm type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CertAlgorithm {
    /**
     * Indicates that the international cryptography algorithms, such as RSA, ECC NIST.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    INTERNATIONAL = 1,

    /**
     * Indicates that the Commercial Password algorithms, such as SM2, SM4.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    SM = 2,
  }

  /**
   * Enum for certificate purpose
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export enum CertificatePurpose {
    /**
     * Indicates default certificate purpose.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_DEFAULT = 0,

    /**
     * Indicates all certificate purposes, used for query certificates function.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ALL = 1,

    /**
     * Indicates certificate for signature.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_SIGN = 2,

    /**
     * Indicates certificate for encryption.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ENCRYPT = 3,
  }

  /**
   * Get the detail of USB key certificate.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Indicates the USB key certificate uri.
   * @param { UkeyInfo } ukeyInfo - Indicates USB key certificate attribute information.
   * @returns { Promise<CMResult> } Indicates the USB key certificate detail.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @throws { BusinessError } 17500010 - Indicates that access USB key service failed.
   * @throws { BusinessError } 17500011 - Indicates that the input parameters validation failed.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  function getUkeyCertificate(keyUri: string, ukeyInfo: UkeyInfo): Promise<CMResult>;

  /**
   * Provides the USB key certificate attribute information.
   *
   * @typedef UkeyInfo
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export interface UkeyInfo {
    /**
     * Indicates the purpose of certificate.
     *
     * @type { ?CertificatePurpose }
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
     certPurpose?: CertificatePurpose;
  }

  /**
   * Get the detail of system trusted CA certificate.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } certUri - Indicates the certificate's URI.
   *     <br>Unique ID of a certificate, which can be obtained through the getSystemTrustedCertificateList interface.
   * @returns { Promise<CMResult> } Indicates the detail of system trusted certificate.
   * @throws { BusinessError } 201 - Permission verification failed.
   *      <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *      <br>Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemTrustedCertificate(certUri: string): Promise<CMResult>;

  /**
   * Get a list of system trusted CA certificates.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Indicates the list of system trusted certificates.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemTrustedCertificateList(): Promise<CMResult>;

  /**
   * Set the certificate status. This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - Indicates the certificate's URI.
   *     <br>Unique ID of the certificate. Currently, this interface only supports the user CA certificate.
   * @param { CertType } certType - Indicates the certificate type.
   *     <br>Currently, this interface supports only setting the status of the user CA certificate (CA_CERT_USER).
   * @param { boolean } enabled - Indicate whether the certificate status is enabled or disabled.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br>Possible causes: the URI is null or the URI format is wrong,
   *     <br> the certType's value is invalid or not supported.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function setCertificateStatus(certUri: string, certType: CertType, enabled: boolean) : Promise<void>;

  /**
   * Enum for certificate file format.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export enum CertFileFormat {
      /**
       * Indicates the certificate file format is PEM or DER.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      PEM_DER = 0,

      /**
       * Indicates the certificate file format is P7B.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      P7B = 1,
  }

  /**
   * Provides the Cert Blob type.
   *
   * @typedef CertBlob
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export interface CertBlob {
      /**
       * Indicates the certificate file data.
       *
       * @type { Uint8Array }
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certData: Uint8Array;

      /**
       * Indicates the certificate file format.
       *
       * @type { ?CertFileFormat }
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certFormat? : CertFileFormat;

      /**
       * Indicates the scope of user CA certificate.
       *
       * @type { ?CertScope }
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certScope? : CertScope;
  }

  /**
   * Install the user trusted CA certificate.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERTorohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { CertBlob } certificate - Indicates the certificate information.
   * @returns { Promise<CMResult> } Indicates the certificate's URI that identifies the installed certificate.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>the certData parameter is empty or exceeds the maximum length .
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500007 - Indicates that the device enters advanced security mode.
   *     <br>In this mode, the user CA certificate cannot be installed.
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function installUserTrustedCertificate(certificate: CertBlob) : Promise<CMResult>;

  /**
   * Uninstall all the user trusted CA certificates.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallAllUserTrustedCertificate() : Promise<void>;

  /**
   * Install the user public certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   *     <br>Only the P12 format is supported.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @returns { Promise<CMResult> } Indicates the certificate's key URI that identifies the installed certificate.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>the keystore parameter is empty or exceeds the maximum length.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500008 - Indicates that the password is error.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function installPublicCertificate(keystore: Uint8Array, keystorePwd: string) : Promise<CMResult>;

  /**
   * Uninstall the user public certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates the user public certificate's key URI to be uninstalled.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallPublicCertificate(keyUri: string) : Promise<void>;

  /**
   * Get all the user public certificate credentials.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Indicates the list of user public certificate credentials.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAllPublicCertificates() : Promise<CMResult>;

  /**
   * Grant application permission to use the user public certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates the user public certificate's key URI to grant permission.
   * @param { int } clientAppUid - Indicates the application UID.
   * @returns { Promise<CMResult> } Indicates the authorization URI for application
   *     <br> using the user public certificate credential.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function grantPublicCertificate(keyUri: string, clientAppUid: int) : Promise<CMResult>;

  /**
   * Get the authorized applications list of the user public certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates the user public certificate's key URI.
   * @returns { Promise<CMResult> } Indicates the authorized applications list.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAuthorizedAppList(keyUri: string) : Promise<CMResult>;

  /**
   * Remove application permission to use the user public certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Indicates the user public certificate's key URI to remove permission.
   * @param { int } clientAppUid - Indicates the application UID.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function removeGrantedPublicCertificate(keyUri: string, clientAppUid: int) : Promise<void>;

  /**
   * Get all the private certificates of specified application.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { int } appUid - Indicates the application UID.
   * @returns { Promise<CMResult> } Indicates the private certificates.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAllAppPrivateCertificatesByUid(appUid: int) : Promise<CMResult>;

  /**
   * Install the system application certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { Uint8Array } keystore - Indicates the keystore file with key pair and certificate.
   *     <br>Only the P12 format is supported.
   * @param { string } keystorePwd - Indicates the password of keystore file.
   * @returns { Promise<CMResult> } Indicates the certificate's key URI that identifies the installed certificate.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>The keystore parameter is empty or exceeds the maximum length.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500008 - Indicates that the password is error.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function installSystemAppCertificate(keystore: Uint8Array, keystorePwd: string): Promise<CMResult>;

  /**
   * Get the detail of system application certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - Indicates the system application certificate's key URI.
   * @returns { Promise<CMResult> } Indicates the detail of system application certificate.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemAppCertificate(keyUri: string) : Promise<CMResult>;

  /**
   * Uninstall the system application certificate credential.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - Indicates the system application certificate's key URI.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallSystemAppCertificate(keyUri: string) : Promise<void>;

  /**
   * Get the USB key certificate list.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } ukeyProvider - Indicates the USB key provider.
   * @param { UkeyInfo } ukeyInfo - Indicates USB key certificate attribute information.
   * @returns { Promise<CMResult> } Indicates the USB key certificate list.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error.
   * @throws { BusinessError } 17500010 - Indicates that access USB key service failed.
   * @throws { BusinessError } 17500011 - Parameter verification failed.
   *     <br> Possible causes: the ukeyInfo parameter is invalid.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function getUkeyCertificateList(ukeyProvider: string, ukeyInfo: UkeyInfo): Promise<CMResult>;

  /**
   * Uninstall all the system application certificate credentials and user public certificate credentials.
   *  This function is only provided for certificate management application.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   *     and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallAllAppCertificate() : Promise<void>;
}

export default certificateManager;
