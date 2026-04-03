/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * Provides methods for obtaining information about the ability that a shortcut will start, including the target
 * bundle name, target module name and ability class name.
 *
 * @typedef ShortcutWant
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant
 */
export interface ShortcutWant {
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant#targetBundle
   */
  readonly targetBundle: string;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant#targetAbility
   */
  readonly targetClass: string;
}

/**
 * Provides information about a shortcut, including the shortcut ID and label.
 *
 * @typedef ShortcutInfo
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo
 */
export interface ShortcutInfo {
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#id
   */
  readonly id: string;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#bundleName
   */
  readonly bundleName: string;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#hostAbility
   */
  readonly hostAbility: string;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#icon
   */
  readonly icon: string;
  /**
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#iconId
   */
  readonly iconId: number;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#label
   */
  readonly label: string;
  /**
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#labelId
   */
  readonly labelId: number;
  /**
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly disableMessage: string;
  /**
   * @type { Array<ShortcutWant> }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#wants
   */
  readonly wants: Array<ShortcutWant>;
  /**
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isStatic?: boolean;
  /**
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isHomeShortcut?: boolean;
  /**
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#visible
   */
  readonly isEnabled?: boolean;
}
