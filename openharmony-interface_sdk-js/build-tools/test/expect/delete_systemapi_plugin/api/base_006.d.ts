/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file Provides the capability of integrating advertising services with vendors
 * @kit AdsKit
 */

/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface RespCallback {
    /**
     * Defines the callback data.
     * @param { Map<string, Array<advertising.Advertisement>> } respData
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    (respData: Map<string, Array<advertising.Advertisement>>): void;
}
/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface Advertisement {
    /**
     * The advertisement type.
     * @type { number }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The advertisement type.
     * @type { number }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    adType: number;
    /**
     * The server verifies the configuration parameters.
     * @type { Map<string, string> }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The server verifies the configuration parameters.
     * @type { Map<string, string> }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    rewardVerifyConfig: Map<string, string>;
    /**
     * The unique identifier of the advertisement.
     * @type { string }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The unique identifier of the advertisement.
     * @type { string }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    uniqueId: string;
    /**
     * The subscriber has been rewarded.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The subscriber has been rewarded.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    rewarded: boolean;
    /**
     * The advertisement has been shown.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The advertisement has been shown.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    shown: boolean;
    /**
     * The advertisement has been clicked.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The advertisement has been clicked.
     * @type { boolean }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    clicked: boolean;
    /**
     * The extended attributes of advertisement.
     * @type { Object }
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    /**
     * The extended attributes of advertisement.
     * @type { Object }
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice
     * @since 12
     */
    [key: string]: Object;
}
/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface AppVersionInfo {
    /**
     * Application name.
     *
     * @type { string }
     * @default appName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    /**
     * Application name.
     *
     * @type { string }
     * @default appName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Application name.
     *
     * @type { string }
     * @default appName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly appName: string;
    /**
     * Application version number.
     *
     * @type { number }
     * @default versionCode
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    /**
     * Application version number.
     *
     * @type { number }
     * @default versionCode
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Application version number.
     *
     * @type { number }
     * @default versionCode
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly versionCode: number;
    /**
     * Application version name.
     *
     * @type { string }
     * @default versionName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    /**
     * Application version name.
     *
     * @type { string }
     * @default versionName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Application version name.
     *
     * @type { string }
     * @default versionName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly versionName: string;
}
/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface AbilityDelegatorArgs {
    /**
     * the bundle name of the application being tested.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     */
    /**
     * the bundle name of the application being tested.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * the bundle name of the application being tested.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * the parameters used for unit testing.
     *
     * @type { object }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     */
    /**
     * the parameters used for unit testing.
     *
     * @type { object }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * the parameters used for unit testing.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    parameters: Record<string, string>;
    /**
     * the class names of all test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     */
    /**
     * the class names of all test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * the class names of all test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    testCaseNames: string;
    /**
     * the class name of the test runner used to execute test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 8
     */
    /**
     * the class name of the test runner used to execute test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * the class name of the test runner used to execute test cases.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    testRunnerClassName: string;
}
/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface AbilityMonitor {
    /**
     * The name of the ability to monitor.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * The name of the ability to monitor.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The name of the ability to monitor.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * The name of the module to monitor.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * The name of the module to monitor.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The name of the module to monitor.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName?: string;
    /**
     * Called back when the ability is created for initialization.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when the ability is created for initialization.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back when the ability is created for initialization.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onAbilityCreate?: (ability: UIAbility) => void;
    /**
     * Called back when the state of the ability changes to foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when the state of the ability changes to foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back when the state of the ability changes to foreground.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onAbilityForeground?: (ability: UIAbility) => void;
    /**
     * Called back when the state of the ability changes to background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when the state of the ability changes to background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back when the state of the ability changes to background.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onAbilityBackground?: (ability: UIAbility) => void;
    /**
     * Called back before the ability is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back before the ability is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back before the ability is destroyed.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onAbilityDestroy?: (ability: UIAbility) => void;
    /**
     * Called back when an ability window stage is created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when an ability window stage is created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back when an ability window stage is created.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onWindowStageCreate?: (ability: UIAbility) => void;
    /**
     * Called back when an ability window stage is restored.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when an ability window stage is restored.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onWindowStageRestore?: (ability: UIAbility) => void;
    /**
     * Called back when an ability window stage is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Called back when an ability window stage is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Called back when an ability window stage is destroyed.
     *
     * @type { ?function }.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onWindowStageDestroy?: (ability: UIAbility) => void;
}
