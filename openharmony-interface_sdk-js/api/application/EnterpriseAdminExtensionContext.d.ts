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
 * @kit MDMKit
 */

import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';

/**
 * The context of enterpriseAdmin extension. It allows access to enterpriseAdminExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 23
 */
declare class EnterpriseAdminExtensionContext extends ExtensionContext {
  /**
   * Starts an ability by enterprise administrator. Only supports start UIAbility or AppServiceExtensionAbility.
   *
   * @permission ohos.permission.ENTERPRISE_START_ABILITIES
   * @param { Want } admin - Indicates the enterprise admin extension ability information.
   * @param { Want } want - Includes ability name, parameters and relative info sending to an ability.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200014 - Failed to start the ability.
   * @throws { BusinessError } 9200015 - The ability does not exist.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  startAbilityByAdmin(admin: Want, want: Want): Promise<void>;
}

export default EnterpriseAdminExtensionContext;