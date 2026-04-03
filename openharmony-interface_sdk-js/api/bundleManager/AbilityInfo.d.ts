/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { ApplicationInfo } from './ApplicationInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';
import { Skill } from './Skill';

/**
 * Obtains configuration information about an ability
 *
 * @typedef AbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Obtains configuration information about an ability
 *
 * @typedef AbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @since 10
 */
/**
 * Obtains configuration information about an ability
 *
 * @typedef AbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export interface AbilityInfo {
  /**
   * Indicates the name of the bundle containing the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the name of the bundle containing the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the name of the bundle containing the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Indicates the module name of the package to which the capability belongs
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the module name of the package to which the capability belongs
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the module name of the package to which the capability belongs
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Ability simplified class name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Ability simplified class name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Ability simplified class name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Indicates the label of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the label of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the label of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Indicates the label id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the label id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the label id of the ability
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Indicates the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Indicates the description id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the description id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the description id of the ability
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Indicates the icon of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the icon of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the icon of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Indicates the icon id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the icon id of the ability
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the icon id of the ability
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Process of ability, if user do not set it, the value equal application process
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Process of ability, if user do not set it, the value equal application process
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Process of ability, if user do not set it, the value equal application process
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly process: string;

  /**
   * Indicates whether this ability can be called by other abilities
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates whether this ability can be called by other abilities
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates whether this ability can be called by other abilities
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * Enumerates types of templates that can be used by an ability
   *
   * @type { bundleManager.AbilityType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly type: bundleManager.AbilityType;

  /**
   * Enumerates ability display orientations
   *
   * @type { bundleManager.DisplayOrientation }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Enumerates ability display orientations
   *
   * @type { bundleManager.DisplayOrientation }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enumerates ability display orientations
   *
   * @type { bundleManager.DisplayOrientation }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly orientation: bundleManager.DisplayOrientation;

  /**
   * Enumerates ability launch type
   *
   * @type { bundleManager.LaunchType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Enumerates ability launch type
   *
   * @type { bundleManager.LaunchType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Enumerates ability launch type
   *
   * @type { bundleManager.LaunchType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly launchType: bundleManager.LaunchType;

  /**
   * The permissions that others need to launch this ability
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * The permissions that others need to launch this ability
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The permissions that others need to launch this ability
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * Indicates the permission required for reading ability data
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly readPermission: string;

  /**
   * Indicates the permission required for writing data to the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly writePermission: string;

  /**
   * Uri of ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly uri: string;

  /**
   * The device types that this ability can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * The device types that this ability can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The device types that this ability can run on
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Obtains configuration information about an application
   *
   * @type { ApplicationInfo | null }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo | null;

  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the metadata of ability
   *
   * @type { Array<Metadata> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Indicates whether the ability is enabled
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates whether the ability is enabled
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates whether the ability is enabled
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * Indicates which window mode is supported
   *
   * @type { Array<bundleManager.SupportWindowMode> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates which window mode is supported
   *
   * @type { Array<bundleManager.SupportWindowMode> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates which window mode is supported
   *
   * @type { Array<bundleManager.SupportWindowMode> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly supportWindowModes: Array<bundleManager.SupportWindowMode>;

  /**
   * Indicates window size
   *
   * @type { WindowSize }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates window size
   *
   * @type { WindowSize }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates window size
   *
   * @type { WindowSize }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly windowSize: WindowSize;

  /**
   * Indicates whether to hide the application icon from the dock area
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly excludeFromDock: boolean;

  /**
   * Indicates skills of the ability
   *
   * @type { Array<Skill> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly skills: Array<Skill>;

  /**
   * Indicates the appIndex of application, only work in clone app mode
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Indicates the orientation id of the ability
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  readonly orientationId: long;
}

/**
 * Indicates the window size.
 *
 * @typedef WindowSize
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
/**
 * Indicates the window size.
 *
 * @typedef WindowSize
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 11
 */
/**
 * Indicates the window size.
 *
 * @typedef WindowSize
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface WindowSize {
  /**
   * Indicates maximum ratio of width over height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates maximum ratio of width over height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates maximum ratio of width over height of window under free window status.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly maxWindowRatio: double;

  /**
   * Indicates minimum ratio of width over height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates minimum ratio of width over height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates minimum ratio of width over height of window under free window status.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly minWindowRatio: double;

  /**
   * Indicates maximum width of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates maximum width of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates maximum width of window under free window status.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly maxWindowWidth: long;

  /**
   * Indicates minimum width of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates minimum width of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates minimum width of window under free window status.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly minWindowWidth: long;

  /**
   * Indicates maximum height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates maximum height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates maximum height of window under free window status.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly maxWindowHeight: long;

  /**
   * Indicates minimum height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  /**
   * Indicates minimum height of window under free window status.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates minimum height of window under free window status.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly minWindowHeight: long;
}
