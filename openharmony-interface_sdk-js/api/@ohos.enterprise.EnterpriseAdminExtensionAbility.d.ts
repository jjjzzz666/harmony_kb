/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type systemManager from './@ohos.enterprise.systemManager';
import common from './@ohos.enterprise.common';
import EnterpriseAdminExtensionContext from './application/EnterpriseAdminExtensionContext';

/**
 * Class of the enterprise admin extension ability.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 12
 */
export default class EnterpriseAdminExtensionAbility {
  /**
   * Indicates enterpriseAdmin extension context.
   *
   * @type { EnterpriseAdminExtensionContext }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  context: EnterpriseAdminExtensionContext;

  /**
   * Called back when an application is enabled.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAdminEnabled(): void;

  /**
   * Called back when an application is disabled.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAdminDisabled(): void;

  /**
   * Called back when a bundle is installed.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onBundleAdded(bundleName: string): void;

  /**
   * Called back when a bundle is installed under an account.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @param { number } accountId - accountId indicates the account ID.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  onBundleAdded(bundleName: string, accountId: number): void;

  /**
   * Called back when a bundle is uninstalled.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle uninstalled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onBundleRemoved(bundleName: string): void;

  /**
   * Called back when a bundle is uninstalled under an account.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @param { number } accountId - accountId indicates the account ID.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  onBundleRemoved(bundleName: string, accountId: number): void;

  /**
   * Called back when an app is started.
   *
   * @param { string } bundleName - bundleName indicates the name of the app started.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAppStart(bundleName: string): void;

  /**
   * Called back when an app is stopped.
   *
   * @param { string } bundleName - bundleName indicates the name of the app stopped.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAppStop(bundleName: string): void;

  /**
   * Called back when a system version need to update. 
   *
   * @param { systemManager.SystemUpdateInfo } systemUpdateInfo - the information of the system version.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo): void;

  /**
   * Called back when the enterprise admin extension is started.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onStart(): void;

  /**
   * Called when a system account is added.
   *
   * @param { number } accountId ID of the added account.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountAdded(accountId: number): void;

  /**
   * Called when a system account is switched.
   *
   * @param { number } accountId ID of the switched account.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountSwitched(accountId: number): void;

  /**
   * Called when a system account is removed.
   *
   * @param { number } accountId ID of the removed account.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountRemoved(accountId: number): void;

  /**
   * Called back when a bundle entering kiosk mode under an account.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle.
   * @param { number } accountId - accountId indicates the account ID.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  onKioskModeEntering(bundleName: string, accountId: number): void;

  /**
   * Called back when a bundle exiting kiosk mode under an account.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle.
   * @param { number } accountId - accountId indicates the account ID.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  onKioskModeExiting(bundleName: string, accountId: number): void;

  /**
   * Called back when an application is enabled as a device administrator.
   *
   * @param { string } bundleName - bundleName indicates the name of the enabled admin.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onDeviceAdminEnabled(bundleName: string): void;

  /**
   * Called back when a device administrator is disabled.
   *
   * @param { string } bundleName - bundleName indicates the name of the disabled admin.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onDeviceAdminDisabled(bundleName: string): void;

  /**
   * Called back when the installation status of an application that installed by the application market changes.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle.
   * @param { common.InstallationResult } result - status indicates the result of application installation.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void;

  /**
   * Called back when the log has collected.
   *
   * @param { common.Result } result - result indicates the result of collect log.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onLogCollected(result: common.Result): void;

  /**
   * Called back when the key event happens.
   *
   * @param { systemManager.KeyEvent } keyEvent - keyEvent indicates the information of key event.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onKeyEvent(keyEvent: systemManager.KeyEvent): void;

  /**
   * Called back when startup guide is completed.
   *
   * @param { common.StartupScene } scene - scene indicates the scene of startup guide completed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  onStartupGuideCompleted(scene: common.StartupScene): void;

  /**
   * Called back when the device boot is completed.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  onDeviceBootCompleted(): void;

  /**
   * Called back when a bundle is updated under an account.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @param { number } accountId - accountId indicates the account ID.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  onBundleUpdated(bundleName: string, accountId: number): void;
}
