/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Providers interfaces to control distributed hardware.
 * @namespace hardwareManager
 * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hardwareManager {
  /**
   * Distributed hardware Type definitions
   * @enum {int}
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareType {
    /**
     * Indicates all hardware
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALL = 0,
    /**
     * Distributed camera
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA = 1,
    /**
     * Distributed screen
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 8,
    /**
     * Mic of distributed modem
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_MIC = 256,
    /**
     * Speaker of distributed modem
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_SPEAKER = 512,
    /**
     * Distributed mic
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MIC = 1024,
    /**
     * Distributed speaker
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPEAKER = 2048
  }

  /**
   * Enum for distributed hardware error code.
   * @enum {number}
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareErrorCode {
    /**
     * The distributed hardware is not started.
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DISTRIBUTED_HARDWARE_NOT_STARTED = 24200101,

    /**
     * The source device is not connected.
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_NOT_CONNECTED = 24200102
  }

  /**
   * The description of the distributed hardware
   * @typedef HardwareDescriptor
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface HardwareDescriptor {
    /**
     * Indicates the type of distributed hardware {@link DistributedHardwareType}
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @type {DistributedHardwareType}
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: DistributedHardwareType;

    /**
     * Indicates the source device. Not providing this parameter means all.
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @type {?string}
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    srcNetworkId?: string;
  }

  /**
   * Pause the distributed hardware service from the controlled device.
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Indicates distributed hardware {@link HardwareDescriptor}.
   * @returns {Promise<void>} pause result.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function pauseDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * Resume the distributed hardware service from the controlled device.
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Indicates distributed hardware {@link HardwareDescriptor}.
   * @returns {Promise<void>} resume result.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function resumeDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * Stop the distributed hardware service from the controlled device.
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Indicates distributed hardware {@link HardwareDescriptor}.
   * @returns {Promise<void>} stop result.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function stopDistributedHardware(description: HardwareDescriptor): Promise<void>;
}

export default hardwareManager;