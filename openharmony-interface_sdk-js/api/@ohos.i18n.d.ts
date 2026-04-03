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
 * @kit LocalizationKit
 */

/*** if arkts dynamic&static */
import { BusinessError } from './@ohos.base';
import intl from './@ohos.intl';
/*** endif */
/*** if arkts static */
import { StyledString, TextStyle } from './arkui/component/styledString';
/*** endif */

/**
 * Provides international settings related APIs.
 *
 * @namespace i18n
 * @syscap SystemCapability.Global.I18n
 * @since 7
 */
/**
 * Provides international settings related APIs.
 *
 * @namespace i18n
 * @syscap SystemCapability.Global.I18n
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace i18n {
  /**
   * Obtains the localized name of the specified country/region.
   *
   * @param { string } country - Specified country.
   * @param { string } locale - System locale, which consists of the language, script, and country/region.
   * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
   *                                     display the text in title case format, and the value "false" means to display
   *                                     the text in the default case format of the locale. The default value is true.
   * @returns { string } Localized script for the specified country.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.System.getDisplayCountry
   */
  export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

  /**
   * Obtains the localized script for the specified language.
   *
   * @param { string } language - Specified language.
   * @param { string } locale - System locale, which consists of the language, script, and country/region.
   * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
   *                                     display the text in title case format, and the value "false" means to display
   *                                     the text in the default case format of the locale. The default value is true.
   * @returns { string } Localized script for the specified language.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.System.getDisplayLanguage
   */
  export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

  /**
   * Obtains the system language.
   *
   * @returns { string } System language ID.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.System.getSystemLanguage
   */
  export function getSystemLanguage(): string;

  /**
   * Obtains the system region.
   *
   * @returns { string } System region ID.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.System.getSystemRegion
   */
  export function getSystemRegion(): string;

  /**
   * Obtains the system locale.
   *
   * @returns { string } System locale ID.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.System.getSystemLocale
   */
  export function getSystemLocale(): string;

  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides system functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  export class System {
    /**
     * Obtains the country or region name localized for display on a given locale.
     *
     * @param { string } country - The locale whose country or region name will be displayed.
     * @param { string } locale - The locale used to display the country or region.
     * @param { boolean } [sentenceCase] - Specifies whether the country or region name is displayed in sentence case.
     * @returns { string } the country or region name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the country or region name localized for display on a given locale.
     *
     * @param { string } country - The locale whose country or region name will be displayed. It must be a valid country.
     * @param { string } locale - The locale used to display the country or region. It must be a valid locale.
     * @param { boolean } [sentenceCase] - Specifies whether the country or region name is displayed in sentence case.
     * @returns { string } the country or region name localized for display on a given locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the country/region display name in the specified language.
     *
     * @param { string } country - Valid country/region code.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
     *                                     display the text in title case format, and the value "false" means to
     *                                     display the text in the default case format of the locale. The default value
     *                                     is true.
     * @returns { string } Country/region display name in the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains the language name localized for display on a given locale.
     *
     * @param { string } language - The locale whose language name will be displayed.
     * @param { string } locale - The locale used to display the language.
     * @param { boolean } [sentenceCase] - Specifies whether the language name is displayed in sentence case.
     * @returns { string } the language name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the language name localized for display on a given locale.
     *
     * @param { string } language - The locale whose language name will be displayed.
     * @param { string } locale - The locale used to display the language.
     * @param { boolean } [sentenceCase] - Specifies whether the language name is displayed in sentence case.
     * @returns { string } the language name localized for display on a given locale.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 890001 - param value not valid
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the language display name in the specified language.
     *
     * @param { string } language - Valid language ID.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @param { boolean } [sentenceCase] - Whether to use sentence case to display the text. The value "true" means to
     *                                     display the text in title case format, and the value "false" means to
     *                                     display the text in the default case format of the locale. The default value
     *                                     is true.
     * @returns { string } Language display name in the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    static getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

    /**
     * Obtains all languages supported by the system.
     *
     * @returns { Array<string> } all languages supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the list of system languages.
     *
     * @returns { Array<string> } List of system languages.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the list of system languages.
     *
     * @returns { Array<string> } List of system languages.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getSystemLanguages(): Array<string>;

    /**
     * Obtains all regions supported by the system in the language.
     *
     * @param { string } language - The language used to get the list of regions. It must be a valid language.
     * @returns { Array<string> } all countries or regions supported by the system in the language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the list of countries/regions supported for the specified language.
     *
     * @param { string } language - Valid language ID.
     * @returns { Array<string> } List of countries/regions supported for the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the list of countries/regions supported for the specified language.
     *
     * @param { string } language - Valid language ID.
     * @returns { Array<string> } List of countries/regions supported for the specified language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getSystemCountries(language: string): Array<string>;

    /**
     * Determine whether the current language or region is recommended.
     *
     * @param { string } language - The language code. It must be a valid language.
     * @param { string } [region] - The region code. It must be a valid region.
     * @returns { boolean } whether the current language or region is recommended.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Checks whether a language is a suggested language in the specified region. It can be used for region-based
     * language recommendation or language-based region recommendation.
     *
     * @param { string } language - Valid language ID, for example, "zh".
     * @param { string } [region] - Valid region ID, for example, "CN". The default value is the country/region of the
     *                              SIM card.
     * @returns { boolean } Whether a language is a suggested language. The value "true" indicates that the language
     *                      is a suggested language of the region, the the value "false" indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Checks whether a language is a suggested language in the specified region. It can be used for region-based
     * language recommendation or language-based region recommendation.
     *
     * @param { string } language - Valid language ID, for example, "zh".
     * @param { string } [region] - Valid region ID, for example, "CN". The default value is the country/region of the
     *                              SIM card.
     * @returns { boolean } Whether a language is a suggested language. The value "true" indicates that the language
     *                      is a suggested language of the region, the the value "false" indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static isSuggested(language: string, region?: string): boolean;

    /**
     * Obtains the language currently used by the system.
     *
     * @returns { string } the language currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the language currently used by the system.
     *
     * @returns { string } the language currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the current system language.
     *
     * @returns { string } Language ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    static getSystemLanguage(): string;

    /**
     * Sets the system language.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid language ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static setSystemLanguage(language: string): void;

    /**
     * Obtains the region currently used by the system.
     *
     * @returns { string } the region currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the region currently used by the system.
     *
     * @returns { string } the region currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the current system country/region.
     *
     * @returns { string } Country/region ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getSystemRegion(): string;

    /**
     * Sets the system region.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } region - Valid region ID.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static setSystemRegion(region: string): void;

    /**
     * Obtains the locale currently used by the system.
     *
     * @returns { string } the locale currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the locale currently used by the system.
     *
     * @returns { string } the locale currently used by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the current system locale.
     *
     * @returns { string } Locale ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.System.getSystemLocaleInstance
     */
    static getSystemLocale(): string;

    /**
     * Obtains the locale object currently used by the system.
     *
     * @returns { Intl.Locale } the locale object currently used by the system.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemLocaleInstance(): Intl.Locale;

    /**
     * Sets the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    static setSystemLocale(locale: string): void;

    /**
     * Check out whether system is 24-hour system.
     *
     * @returns { boolean } a boolean represent whether system is 24-hour system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Check out whether system is 24-hour system.
     *
     * @returns { boolean } a boolean represent whether system is 24-hour system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Check out whether system is 24-hour system.
     *
     * @returns { boolean } a boolean represent whether system is 24-hour system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Checks whether the 24-hour clock is used.
     *
     * @returns { boolean } Whether the 24-hour clock is used. The value "true" indicates that the 24-hour clock is
     *                      used, the the value "false" means the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static is24HourClock(): boolean;

    /**
     * Sets whether to use the 24-hour clock.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } option - Whether to use the 24-hour clock. The value "true" means to use the 24-hour clock,
     *                             the the value "false" means the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static set24HourClock(option: boolean): void;

    /**
     * Adds a preferred language to the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } language - Valid ID of the language to be added as a preferred language.
     * @param { int } [index] - Position to which the preferred language is added. The default value is the length
     *                             of the preferred language list.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static addPreferredLanguage(language: string, index?: int): void;

    /**
     * Removes a preferred language from the specified position on the preferred language list.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { int } index - Position of the preferred language to delete.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static removePreferredLanguage(index: int): void;

    /**
     * Access the system preferred language list.
     *
     * @returns { Array<string> } a string Array represent the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the list of preferred languages.
     *
     * @returns { Array<string> } List of preferred languages.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the list of preferred languages.
     *
     * @returns { Array<string> } List of preferred languages.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getPreferredLanguageList(): Array<string>;

    /**
     * Get the first preferred language of system.
     *
     * @returns { string } a string represent the first preferred language of system.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the first language in the preferred language list.
     *
     * @returns { string } First language in the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the first language in the preferred language list.
     *
     * @returns { string } First language in the preferred language list.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getFirstPreferredLanguage(): string;

    /**
     * Set the preferred language of App.
     *
     * @param { string } language - the language to be set. It must be a valid language.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Sets the preferred language of the application. Resources are loaded in the preferred language when the
     * application is launched. If the preferred language is set to default, the application's language will be the
     * same as the system language, and the setting will take effect upon cold starting of the application.
     *
     * @param { string } language - Valid language ID or default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12
     */
    /**
     * Sets the preferred language of the application. Resources are loaded in the preferred language when the
     * application is launched. If the preferred language is set to default, the application's language will be the
     * same as the system language, and the setting will take effect upon cold starting of the application.
     *
     * @param { string } language - Valid language ID or default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static setAppPreferredLanguage(language: string): void;

    /**
     * Get the preferred language of App.
     *
     * @returns { string } a string represent the preferred language of App.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the preferred language of an application.
     *
     * @returns { string } Preferred language of the application.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the preferred language of an application.
     *
     * @returns { string } Preferred language of the application.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static getAppPreferredLanguage(): string;

    /**
     * Specifies whether to enable use of local digits.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { boolean } flag - Whether to turn on the local digit switch. The value "true" means to turn on the local
     *                           digit switch, and the value "false" indicates the opposite.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static setUsingLocalDigit(flag: boolean): void;

    /**
     * Get whether to use local digit.
     *
     * @returns { boolean } a boolean represents whether to use local digit.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Checks whether use of local digits is enabled.
     *
     * @returns { boolean } Whether use of local digits is enabled. The value "true" indicates that use of local digits
     *                      is enabled, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Checks whether use of local digits is enabled.
     *
     * @returns { boolean } Whether use of local digits is enabled. The value "true" indicates that use of local digits
     *                      is enabled, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getUsingLocalDigit(): boolean;

    /**
     * Obtains the simplified representation of a language. For example, the simplified representation of "en-Latn-US"
     * is "en", and that of "en-Latn-GB" is "en-GB".
     *
     * @param { string } [language] - Valid language ID. The default value is the system language.
     * @returns { string } If language is not passed, the application checks for dialects supported by the system based
     *                     on the system language and locale. If such a dialect is found, the simplified representation
     *                     of the dialect is returned. Otherwise, the simplified representation of the system language
     *                     is returned. If language is passed, the simplified representation of the specified language
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    /**
     * Obtains the simplified representation of a language. For example, the simplified representation of "en-Latn-US"
     * is "en", and that of "en-Latn-GB" is "en-GB".
     *
     * @param { string } [language] - Valid language ID. The default value is the system language.
     * @returns { string } If language is not passed, the application checks for dialects supported by the system based
     *                     on the system language and locale. If such a dialect is found, the simplified representation
     *                     of the dialect is returned. Otherwise, the simplified representation of the system language
     *                     is returned. If language is passed, the simplified representation of the specified language
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getSimplifiedLanguage(language?: string): string;

    /**
     * Sets the temperature unit of the system.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { TemperatureType } type - Temperature unit.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    static setTemperatureType(type: TemperatureType): void;

    /**
     * Obtains the temperature unit of the system.
     *
     * @returns { TemperatureType } Temperature unit.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Obtains the temperature unit of the system.
     *
     * @returns { TemperatureType } Temperature unit.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getTemperatureType(): TemperatureType;

    /**
     * Obtains the name of a temperature unit.
     *
     * @param { TemperatureType } type - Temperature unit.
     * @returns { string } Name of the temperature unit, which can be "celsius", "fahrenheit", and "kelvin".
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Obtains the name of a temperature unit.
     *
     * @param { TemperatureType } type - Temperature unit.
     * @returns { string } Name of the temperature unit, which can be "celsius", "fahrenheit", and "kelvin".
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getTemperatureName(type: TemperatureType): string;

    /**
     * Sets the first day of a week.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { WeekDay } type - Start day of a week.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *                                 required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    static setFirstDayOfWeek(type: WeekDay): void;

    /**
     * Obtains the first day of a week in the system settings.
     *
     * @returns { WeekDay } Start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Obtains the first day of a week in the system settings.
     *
     * @returns { WeekDay } Start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getFirstDayOfWeek(): WeekDay;

    /**
     * Gets collations supported by system locale.
     *
     * @returns { Map<string, string> } The map will containing the collation's identifier and name.
     * If the map is empty of the collation for given locale does not need to be set.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemCollations(): Map<string, string>;

    /**
     * Gets collation currently used by system locale.
     *
     * @returns { string } The identifier of the collation model used by system locale will be return.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingCollation(): string;

    /**
     * Sets the system collation mode.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the collation mode.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemCollation(identifier: string): void;

    /**
     * Gets measurements supported by system locale.
     *
     * @returns { Map<string, string> } a map will containing identifier and name of measurements supported by system locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemMeasurements(): Map<string, string>;

    /**
     * Gets measurement currently used by system locale.
     *
     * @returns { string } The identifier of measurement system using by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingMeasurement(): string;

    /**
     * Sets the measurement system used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the measurement system.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemMeasurement(identifier: string): void;

    /**
     * Gets numbering system currently used by system locale.
     *
     * @returns { string } the numbering systems's identifier.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumberingSystem(): string;

    /**
     * Sets the numbering system used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the numbering system.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumberingSystem(identifier: string): void;

    /**
     * Gets numbering systems supported by system locale.
     *
     * @returns { Map<string,string> } a map will containing the numbering system 's identifier and sample.
     * If the map is empty, there is no local digit for given locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumberingSystems(): Map<string, string>;

    /**
     * Gets commonly used number patterns for system locale.
     *
     * @returns { Map<string,string> } a map containing the used number patterns and example of system locale.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumberPatterns(): Map<string, string>;

    /**
     * Sets the number pattern used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } pattern - Identifier of the number pattern.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumberPattern(pattern: string): void;


    /**
     * Gets number pattern used by system locale.
     *
     * @returns { string } The number pattern identifier used by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumberPattern(): string;

    /**
     * Gets numerical date patterns and examples supported by system locale.
     *
     * @returns { Map<string, string> } a map containing the date patterns and examples
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getSystemNumericalDatePatterns(): Map<string, string>;

    /**
     * Sets the numerical date pattern used by the system locale.
     *
     * @permission ohos.permission.UPDATE_CONFIGURATION
     * @param { string } identifier - Identifier of the numerical date pattern.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     * required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static setSystemNumericalDatePattern(identifier : string): void;

    /**
     * Gets numerical date pattern currently used by system locale.
     *
     * @returns { string } The numerical date pattern used by system locale
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static getUsingNumericalDatePattern(): string;
  }

  /**
   * Enumerates the first day of a week. The value ranges from Monday to Sunday.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the first day of a week. The value ranges from Monday to Sunday.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export enum WeekDay {
    /**
     * Monday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Monday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    MON = 1,

    /**
     * Tuesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Tuesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TUE = 2,

    /**
     * Wednesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Wednesday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    WED = 3,

    /**
     * Thursday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Thursday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    THU = 4,

    /**
     * Friday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Friday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    FRI = 5,

    /**
     * Saturday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Saturday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    SAT = 6,

    /**
     * Sunday.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Sunday.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    SUN = 7
  }

  /**
   * Enumerates temperature units.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  /**
   * Enumerates temperature units.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export enum TemperatureType {
    /**
     * Celesius.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Celesius.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CELSIUS = 1,

    /**
     * Fahrenheit.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Fahrenheit.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    FAHRENHEIT = 2,

    /**
     * Kelvin.
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    /**
     * Kelvin.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    KELVIN = 3
  }

  /**
   * Provides util functions.
   *
   * @interface Util
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.I18NUtil
   */
  export interface Util {
    /**
     * Converts one measurement unit into another and formats the unit based on the specified locale and style.
     *
     * @param { UnitInfo } fromUnit - Measurement unit to be converted.
     * @param { UnitInfo } toUnit - Measurement unit to be converted to.
     * @param { double } value - Value of the measurement unit to be converted.
     * @param { string } locale - Locale ID used for formatting, for example, "zh-Hans-CN".
     * @param { string } [style] - Style used for formatting. The value can be "long", "short", or "narrow". The
     *                             default value is short.
     * @returns { string } String obtained after formatting based on the measurement unit specified by toUnit.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.i18n/i18n.I18NUtil#unitConvert
     */
    unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string;
  }

  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides util functions.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export class I18NUtil {
    /**
     * Convert from unit to unit and format according to the locale.
     *
     * @param { UnitInfo } fromUnit - Information of the unit to be converted.
     * @param { UnitInfo } toUnit - Information about the unit to be converted to.
     * @param { double } value - Indicates the number to be formatted.
     * @param { string } locale - The locale to be used.
     * @param { string } [style] - The style of format.
     * @returns { string } converted number and unit.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Converts one measurement unit into another and formats the unit based on the specified locale and style.
     *
     * @param { UnitInfo } fromUnit - Measurement unit to be converted.
     * @param { UnitInfo } toUnit - Measurement unit to be converted to.
     * @param { double } value - Value of the measurement unit to be converted.
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @param { string } [style] - Style used for formatting. The value can be long, short, or narrow. The default
     *                             value is short. For details about the meaning or display effect of different values,
     *                             see Number and Unit of Measurement Formatting.
     * @returns { string } String converted to the measurement unit after formatting.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Converts one measurement unit into another and formats the unit based on the specified locale and style.
     *
     * @param { UnitInfo } fromUnit - Measurement unit to be converted.
     * @param { UnitInfo } toUnit - Measurement unit to be converted to.
     * @param { double } value - Value of the measurement unit to be converted.
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @param { string } [style] - Style used for formatting. The value can be long, short, or narrow. The default
     *                             value is short. For details about the meaning or display effect of different values,
     *                             see Number and Unit of Measurement Formatting.
     * @returns { string } String converted to the measurement unit after formatting.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string;

    /**
     * Get the order of year, month, day in the specified locale. Year, month, day are separated by '-'.
     * 'y' stands for year, 'L' stands for month, d stands for day.
     *
     * @param { string } locale - Information of the locale
     * @returns { string } the string of 'y', 'L', 'd' joined by '-'.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get the order of year, month, day in the specified locale. Year, month, day are separated by '-'.
     * 'y' stands for year, 'L' stands for month, d stands for day.
     *
     * @param { string } locale - Information of the locale.
     * @returns { string } the string of 'y', 'L', 'd' joined by '-'.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the sequence of the year, month, and day in the specified locale.
     *
     * @param { string } locale - Locale ID, which consists of the language, script, and country/region, for example,
     *                            "zh-Hans-CN".
     * @returns { string } Sequence of the year, month, and day in the locale. "y" indicates the year, "L" indicates
     *                     the month, and "d" indicates the day.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getDateOrder(locale: string): string;

    /**
     * Get the time period name for the specified hour.
     *
     * @param { int } hour - the hour value.
     * @param { string } [locale] - specified the locale. Use current app locale by default. It must be a valid locale.
     * @returns { string } the string of time period name. The return value may be empty string
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Obtains the localized expression of the specified time in the specified locale.
     *
     * @param { int } hour - Specified time, for example, 16.
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region. for
     *                              example, "zh-Hans-CN". The default value is the current system locale.
     * @returns { string } Localized expression of the specified time in the specified locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the localized expression of the specified time in the specified locale.
     *
     * @param { int } hour - Specified time, for example, 16.
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region. for
     *                              example, "zh-Hans-CN". The default value is the current system locale.
     * @returns { string } Localized expression of the specified time in the specified locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getTimePeriodName(hour:int, locale?: string): string;

    /**
     * Obtains the locale that best matches a region from the specified locale list.
     *
     * @param { string } locale - Locale ID, for example, "zh-Hans-CN".
     * @param { string[] } localeList - List of locale IDs.
     * @returns { string } ID of the locale that best matches a region. If no matching locale is found, an empty string
     *                     is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getBestMatchLocale(locale: string, localeList: string[]): string;

    /**
     * Converts a language code from two letters to three letters. For example, the two-letter language code of Chinese
     * is "zh", and the corresponding three-letter language code is "zho". For details, see
     * [ISO 639](https://www.iso.org/iso-639-language-code).
     *
     * @param { string } locale - Two-letter code of the language to be converted, for example, "zh".
     * @returns { string } Language code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Converts a language code from two letters to three letters. For example, the two-letter language code of Chinese
     * is "zh", and the corresponding three-letter language code is "zho". For details, see
     * [ISO 639](https://www.iso.org/iso-639-language-code).
     *
     * @param { string } locale - Two-letter code of the language to be converted, for example, "zh".
     * @returns { string } Language code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getThreeLetterLanguage(locale: string): string;

    /**
     * Converts a region code from two letters to three letters. For example, the two-letter region code of China is
     * "CN", and the corresponding three-letter region code is "CHN". For details, see
     * [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
     *
     * @param { string } locale - Two-letter country/region code to be converted, for example, "CN".
     * @returns { string } Region code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Converts a region code from two letters to three letters. For example, the two-letter region code of China is
     * "CN", and the corresponding three-letter region code is "CHN". For details, see
     * [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
     *
     * @param { string } locale - Two-letter country/region code to be converted, for example, "CN".
     * @returns { string } Region code after conversion.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getThreeLetterRegion(locale: string): string;

    /**
     * Localizes a file path for the specified locale. For example, /data/out/tmp is changed to tmp/out/data/ after
     * localization.
     *
     * @param { string } path - Path to mirror, for example, "/data/out/tmp".
     * @param { string } [delimiter] - Path delimiter. The default value is "/"".
     * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
     * @returns { string } File path after localization. If the specified locale object corresponds to an RTL language,
     *                     the processed file path contains a direction control character to ensure that the file path
     *                     is displayed in mirror mode.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Localizes a file path for the specified locale. For example, /data/out/tmp is changed to tmp/out/data/ after
     * localization.
     *
     * @param { string } path - Path to mirror, for example, "/data/out/tmp".
     * @param { string } [delimiter] - Path delimiter. The default value is "/"".
     * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
     * @returns { string } File path after localization. If the specified locale object corresponds to an RTL language,
     *                     the processed file path contains a direction control character to ensure that the file path
     *                     is displayed in mirror mode.
     * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: Intl.Locale): string;

    /**
     * Localizes a file path for the specified locale. For example, /data/out/tmp is changed to tmp/out/data/ after
     * localization.
     *
     * @param { string } path - Path to mirror, for example, "/data/out/tmp".
     * @param { string } [delimiter] - Path delimiter. The default value is "/"".
     * @param { intl.Locale } [locale] - Locale object. The default value is the current system locale.
     * @returns { string } File path after localization. If the specified locale object corresponds to an RTL language,
     *                     the processed file path contains a direction control character to ensure that the file path
     *                     is displayed in mirror mode.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead getUnicodeWrappedFilePath
     */
    static getUnicodeWrappedFilePath(path: string, delimiter?: string, locale?: intl.Locale): string;
  }

  /**
   * Provides the options of unit.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Defines the measurement unit information.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Defines the measurement unit information.
   *
   * @interface UnitInfo
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface UnitInfo {
    /**
     * Unit name.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Name of the measurement unit, for example, "meter", "inch", or "cup".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Name of the measurement unit, for example, "meter", "inch", or "cup".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    unit: string;

    /**
     * The measurement system of the unit.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Measurement system. The value can be "SI", "US", or "UK".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Measurement system. The value can be "SI", "US", or "UK".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    measureSystem: string;
  }

  /**
   * Provides the options of PhoneNumberFormat.
   *
   * @interface PhoneNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the options of PhoneNumberFormat.
   *
   * @interface PhoneNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 11
   */
  /**
   * Options for PhoneNumberFormat object initialization.
   *
   * @interface PhoneNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PhoneNumberFormatOptions {
    /**
     * Indicates the type to format phone number.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Indicates the type to format phone number.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the type to format phone number.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Type of the phone number. The value can be "E164", "INTERNATIONAL", "NATIONAL", "RFC3966", or "TYPING".
     * In API version 8, type is mandatory. In API version 9 or later, type is optional.
     * In API version 12 or later, "TYPING" is supported, which indicates that the dialed number is formatted in real
     * time.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type?: string;
  }

  /**
   * Provides the API for formatting phone number strings
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the API for formatting phone number strings
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 11
   */
  /**
   * Provides the API for formatting phone number strings
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export class PhoneNumberFormat {
    /**
     * A constructor used to create a PhoneNumberFormat object.
     *
     * @param { string } country - Indicates a character string containing the country information for the PhoneNumberFormat object.
     * @param { PhoneNumberFormatOptions } [options] - format types: "E164", "RFC3966", "INTERNATIONAL", "NATIONAL".
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create a PhoneNumberFormat object.
     *
     * @param { string } country - Indicates a character string containing the country information for the PhoneNumberFormat object.
     * @param { PhoneNumberFormatOptions } [options] - format types: "E164", "RFC3966", "INTERNATIONAL", "NATIONAL".
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Creates a PhoneNumberFormat object.
     *
     * @param { string } country - Country/region to which the phone number to be formatted belongs.
     * @param { PhoneNumberFormatOptions } [options] - Options for PhoneNumberFormat object initialization.
     *                                                 The default value is "NATIONAL".
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * Judge whether phone number is valid.
     *
     * @param { string } number - Indicates the input phone number.
     * @returns { boolean } a boolean indicates whether the input phone number is valid.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Judge whether phone number is valid.
     *
     * @param { string } number - Indicates the input phone number.
     * @returns { boolean } a boolean indicates whether the input phone number is valid.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Checks whether the phone number is valid for the country/region in the PhoneNumberFormat object.
     *
     * @param { string } phoneNumber - Phone number to be checked.
     * @returns { boolean } Whether the phone number is valid. The value "true" indicates that the phone number is
     *                      valid, and the value "false" indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isValidNumber(phoneNumber: string): boolean;

    /**
     * Obtains the formatted phone number strings of number.
     *
     * @param { string } number - Indicates the input phone number to be formatted.
     * @returns { string } the formatted phone number.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains the formatted phone number strings of number.
     *
     * @param { string } number - Indicates the input phone number to be formatted.
     * @returns { string } the formatted phone number.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Formats a phone number.
     *
     * @param { string } phoneNumber - Phone number to be formatted.
     * @returns { string } Formatted phone number.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    format(phoneNumber: string): string;

    /**
     * Determine the location by phone number, and return it according to the specified regional language.
     *
     * @param { string } number - input phone number.
     * @param { string } locale - locale ID.
     * @returns { string } a string represents phone number's location.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the home location of a phone number.
     *
     * @param { string } phoneNumber - Phone number. To obtain the home location of a number in other countries/regions,
     *                            you need to prefix the number with 00 and the country code.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Home location of the phone number. If the number is invalid, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getLocationName(phoneNumber: string, locale: string): string;
  }

  /**
   * Get a Calendar instance specified by locale and type.
   *
   * @param { string } locale - The locale used to get calendar.
   * @param { string } [type] - If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
   *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
   *  japanese, persian.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Get a Calendar instance specified by locale and type.
   *
   * @param { string } locale - The locale used to get calendar.
   * @param { string } [type] - If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
   *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
   *  japanese, persian.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the Calendar object for the specified locale and calendar type.
   *
   * @param { string } locale - Locale ID, which consists of the language, script, and country/region,
   *                            for example, zh-Hans-CN.
   * @param { string } [type] - Calendar. The value can be: "buddhist", "chinese", "coptic", "ethiopic",
   *                            "hebrew", "gregory", "indian", "islamic_civil", "islamic_tbla",
   *                            "islamic_umalqura", "japanese", or "persian". The default value is the default
   *                            calendar of the locale. For details about the meanings and application scenarios of
   *                            different values, see Calendar Setting.
   * @returns { Calendar } Calendar object
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export function getCalendar(locale: string, type?: string): Calendar;

  /**
   * Provides the API for accessing Calendar name, time and date related information.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Provides the API for accessing Calendar name, time and date related information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the API for accessing Calendar name, time and date related information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export class Calendar {
    /**
     * set the date.
     *
     * @param { Date } date - Date object used to set the time and date.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * set the date.
     *
     * @param { Date } date - Date object used to set the time and date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the date and time for a Calendar object.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setTime(date: Date): void;

    /**
     * set the time.
     *
     * @param { double } time - Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * set the time.
     *
     * @param { double } time - Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the date and time for a Calendar object.
     *
     * @param { double } time - Unix timestamp, which indicates the number of milliseconds that have elapsed since the
     *                          Unix epoch.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setTime(time: double): void;

    /**
     * Set the time
     *
     * @param { int } year - The year field of the calendar, ranges from 0 to 9999.
     * @param { int } month - The month field of the calendar, ranges from 0 to 11.
     * @param { int } date - The day field of the calendar, ranges from 1 to 31.
     * @param { int } hour - The hour field of the calendar, ranges from 0 to 23.
     * @param { int } minute - The minute field of the calendar, ranges from 0 to 59.
     * @param { int } second - the second field of the calendar, ranges from 0 to 59.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the time
     *
     * @param { int } year - The year field of the calendar, ranges from 0 to 9999.
     * @param { int } month - The month field of the calendar, ranges from 0 to 11.
     * @param { int } date - The day field of the calendar, ranges from 1 to 31.
     * @param { int } hour - The hour field of the calendar, ranges from 0 to 23.
     * @param { int } minute - The minute field of the calendar, ranges from 0 to 59.
     * @param { int } second - the second field of the calendar, ranges from 0 to 59.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the year, month, day, hour, minute, and second for this Calendar object.
     *
     * @param { int } year - Year to set.
     * @param { int } month - Month to set. Note: The month starts from 0. For example, 0 indicates January.
     * @param { int } date - Day to set.
     * @param { int } hour - Hour to set. The default value is the current system time.
     * @param { int } minute - Minute to set. The default value is the current system time.
     * @param { int } second - Second to set. The default value is the current system time.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    set(year: int, month: int, date:int, hour?: int, minute?: int, second?: int): void;

    /**
     * Set the timezone of this calendar.
     *
     * @param { string } timezone - The id of a timezone.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the timezone of this calendar.
     *
     * @param { string } timezone - The id of a timezone.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the time zone of this Calendar object.
     *
     * @param { string } timezone - Valid time zone ID, for example, Asia/Shanghai.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setTimeZone(timezone: string): void;

    /**
     * Get the timezone id of this calendar instance.
     *
     * @returns { string } the timezone id of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the timezone id of this calendar instance.
     *
     * @returns { string } the timezone id of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the time zone ID of this Calendar object.
     *
     * @returns { string } Time zone ID.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeZone(): string;

    /**
     * Get the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @returns { int } start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @returns { int } start day of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the first day of a week for this Calendar object.
     *
     * @returns { int } First day of a week. The value 1 indicates Sunday, and the value 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getFirstDayOfWeek(): int;

    /**
     * Set the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @param { int } value - Indicates the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @param { int } value - Indicates the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the first day of a week for this Calendar object.
     *
     * @param { int } value - Start day of a week. The value 1 indicates Sunday, and the value 7 indicates Saturday.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setFirstDayOfWeek(value: int): void;

    /**
     * Get the minimal days of a week, which is needed for the first day of a year.
     *
     * @returns { int } the minimal days of a week.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the minimal days of a week, which is needed for the first day of a year.
     *
     * @returns { int } the minimal days of a week.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the minimum number of days in the first week for this Calendar object.
     *
     * @returns { int } Minimum number of days in the first week of a year.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getMinimalDaysInFirstWeek(): int;

    /**
     * Set the minimal days of a week, which is needed for the first week of a year.
     *
     * @param { int } value - The value to be set.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Set the minimal days of a week, which is needed for the first week of a year.
     *
     * @param { int } value - The value to be set.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the minimum number of days in the first week for this Calendar object.
     *
     * @param { int } value - Minimum number of days in the first week of a year.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setMinimalDaysInFirstWeek(value: int): void;

    /**
     * Get the associated value with the field.
     *
     * @param { string } field - Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @returns { int } the associated value.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Get the associated value with the field.
     *
     * @param { string } field - Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @returns { int } the associated value.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the values of the calendar attributes in this Calendar object.
     *
     * @param { string } field - Calendar attributes. The following table lists the supported attribute values.
     * @returns { int } Value of the calendar attribute. For example, if the year of the internal date of the
     *                     current Calendar object is 1990, get('year') returns 1990.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get(field: string): int;

    /**
     * Get calendar's name localized for display in the given locale.
     *
     * @param { string } locale - Locale used to get the localized name for this calendar. It must be a valid locale.
     * @returns { string } the localized name of this calendar.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains calendar display name in the specified language.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Calendar display name in the specified language. For example, buddhist is displayed as
     *                     Buddhist Calendar if the locale is en-US.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains calendar display name in the specified language.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Calendar display name in the specified language. For example, buddhist is displayed as
     *                     Buddhist Calendar if the locale is en-US.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getDisplayName(locale: string): string;

    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @param { Date } [date] - Date object whose attribute is desired.
     * @returns { boolean } whether the date is a weekend day.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @param { Date } [date] - Date object whose attribute is desired.
     * @returns { boolean } whether the date is a weekend day.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether a given date is a weekend in this Calendar object.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is current date of the Calendar object.
     * @returns { boolean } The value "true" indicates that the specified date is a weekend, and the value "false"
     *                      indicates the opposite.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isWeekend(date?: Date): boolean;

    /**
     * Adds or subtract the specified amount of time to the given calendar field.
     *
     * @param { string } field - field values such as year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond
     * @param { int } amount - the amount of date or time to be added to the field.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Performs addition or subtraction on the calendar attributes of this Calendar object.
     *
     * @param { string } field - Calendar attribute. The value can be any of the following: year, month, week_of_year,
     *                           week_of_month, date, day_of_year, day_of_week, day_of_week_in_month, hour,
     *                           hour_of_day, minute, second, millisecond. For details about the values, see get.
     * @param { int } amount - Addition or subtraction amount.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    add(field: string, amount: int): void;

    /**
     * Get the UTC milliseconds.
     *
     * @returns { long }  the calendar time as UTC milliseconds.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Obtains the timestamp of this Calendar object.
     *
     * @returns { long } Unix timestamp, which indicates the number of milliseconds that have elapsed since the
     *                     Unix epoch.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeInMillis(): long;

    /**
     * Returns days comparison result.
     *
     * @param { Date } date - Date object to be compared.
     * @returns { int }  value of of the comparison result. A positive value indicates that the date is later,
     * and a negative value indicates that the date is earlier.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 11
     */
    /**
     * Compares the current date of this Calendar object with the specified date for the difference in the number of
     * days.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { int } Difference in the number of days. A positive number indicates that the calendar date is
     *                     earlier, and a negative number indicates the opposite. The value is accurate to
     *                     milliseconds. If the value is less than one day, it is considered as one day.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    compareDays(date: Date): int;
  }

  /**
   * Judge whether the locale is RTL locale.
   *
   * @param { string } locale - The locale to be used.
   * @returns { boolean } true representing the locale is an RTL locale
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Judge whether the locale is RTL locale.
   *
   * @param { string } locale - The locale to be used.
   * @returns { boolean } true representing the locale is an RTL locale
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether the input character is of the right to left (RTL) language.
   *
   * @param { string } locale - Input character. If the input is a string, only the type of the first character is checked.
   * @returns { boolean } true if the input character is of the RTL language, and false otherwise.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export function isRTL(locale: string): boolean;

  /**
   * Obtains a BreakIterator object for finding the location of break point in text.
   *
   * @param { string } locale - the returned BreakIterator will adapt the rule, specified by the locale, to break text.
   * @returns { BreakIterator } a newly constructed BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Obtains a BreakIterator object. The BreakIterator object maintains an internal break iterator that can be used to
   * access various line break points.
   *
   * @param { string } locale - System locale, which consists of the language, script, and country/region. The
   *                            generated BreakIterator object calculates the positions of line breaks based on
   *                            the rules of the specified locale.
   * @returns { BreakIterator } BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Obtains a BreakIterator object. The BreakIterator object maintains an internal break iterator that can be used to
   * access various line break points.
   *
   * @param { string } locale - System locale, which consists of the language, script, and country/region. The
   *                            generated BreakIterator object calculates the positions of line breaks based on
   *                            the rules of the specified locale.
   * @returns { BreakIterator } BreakIterator object.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export function getLineInstance(locale: string): BreakIterator;

  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * The BreakIterator class is used for finding the location of break point in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class BreakIterator {
    /**
     * Obtains the current position of the BreakIterator instance.
     *
     * @returns { int } the current position of the BreakIterator instance.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains the position of the break iterator in the text.
     *
     * @returns { int } Position of the break iterator in the text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the position of the break iterator in the text.
     *
     * @returns { int } Position of the break iterator in the text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    current(): int;

    /**
     * Set the BreakIterator's position to the first break point, the first break point is always the beginning of the
     * processed text.
     *
     * @returns { int } the index of the first break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Moves the break iterator to the first line break point, which is always at the beginning of the processed text.
     *
     * @returns { int } Offset of the first line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Moves the break iterator to the first line break point, which is always at the beginning of the processed text.
     *
     * @returns { int } Offset of the first line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    first(): int;

    /**
     * Set the BreakIterator's position to the last break point. the last break point is always the index beyond the
     * last character of the processed text.
     *
     * @returns { int } the index of the last break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Moves the break iterator to the last line break point, which is always the next position after the end of the
     * processed text.
     *
     * @returns { int } Offset of the last line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Moves the break iterator to the last line break point, which is always the next position after the end of the
     * processed text.
     *
     * @returns { int } Offset of the last line break point in the processed text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    last(): int;

    /**
     * Set the BreakIterator's position to the nth break point from the current break point.
     *
     * @param { int } [index] - indicates the number of break points to advance. If index is not given, n is treated as 1.
     * @returns { int } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Moves the break iterator backward by the specified number of line break points.
     *
     * @param { int } [index] - Number of line break points for moving the break iterator. The value is an integer.
     *                             A positive number means to move the break iterator backward, and a negative number
     *                             means to move the break iterator forward. The default value is 1.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Moves the break iterator backward by the specified number of line break points.
     *
     * @param { int } [index] - Number of line break points for moving the break iterator. The value is an integer.
     *                             A positive number means to move the break iterator backward, and a negative number
     *                             means to move the break iterator forward. The default value is 1.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    next(index?: int): int;

    /**
     * Set the BreakIterator's position to the break point preceding the current break point.
     *
     * @returns { int } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Moves the break iterator foreward by one line break point.
     *
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Moves the break iterator foreward by one line break point.
     *
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    previous(): int;

    /**
     * Set the text to be processed.
     *
     * @param { string } text - Indicates the text to be processed by the BreakIterator.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Sets the text to be processed by the BreakIterator object.
     *
     * @param { string } text - Input text.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Sets the text to be processed by the BreakIterator object.
     *
     * @param { string } text - Input text.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    setLineBreakText(text: string): void;

    /**
     * Set the BreakIterator's position to the first break point following the specified offset.
     *
     * @param { int } offset
     * @returns { int } the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Moves the line break iterator to the line break point after the specified position.
     *
     * @param { int } offset - Offset of the line break point.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Moves the line break iterator to the line break point after the specified position.
     *
     * @param { int } offset - Offset of the line break point.
     * @returns { int } Position of the break iterator in the text after movement. The value -1 is returned if the
     *                     position of the break iterator is outside of the processed text after movement.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    following(offset: int): int;

    /**
     * Obtains the text being processed.
     *
     * @returns { string } the text that is processed by the BreakIterator.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains the text processed by the BreakIterator object.
     *
     * @returns { string } Text being processed by the BreakIterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the text processed by the BreakIterator object.
     *
     * @returns { string } Text being processed by the BreakIterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineBreakText(): string;

    /**
     * Returns true if the position indicated by the offset is a break point, otherwise false. The BreakIterator's
     * position will be set to the position indicated by the offset if it returns true, otherwise the BreakIterator
     * will be moved to the break point following the offset.
     *
     * @param { int } offset The offset to be checked.
     * @returns { boolean } true if the offset is a break point.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Checks whether the specified position is a line break point.
     *
     * @param { int } offset - Specified position in the text.
     * @returns { boolean } Whether the specified position is a line break point. The value "true" indicates that the
     *                      specified position is a line break point, and the value "false" indicates the opposite.
     *                      If true is returned, the break iterator is moved to the position specified by offset.
     *                      Otherwise, the break iterator is moved to the text line break point after the position
     *                      specified by offset, which is equivalent to calling following.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the specified position is a line break point.
     *
     * @param { int } offset - Specified position in the text.
     * @returns { boolean } Whether the specified position is a line break point. The value "true" indicates that the
     *                      specified position is a line break point, and the value "false" indicates the opposite.
     *                      If true is returned, the break iterator is moved to the position specified by offset.
     *                      Otherwise, the break iterator is moved to the text line break point after the position
     *                      specified by offset, which is equivalent to calling following.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    isBoundary(offset: int): boolean;
  }

  /**
   * Get IndexUtil object.
   *
   * @param { string } [locale] - Indicates a character string containing the locale information, including
   *               the language and optionally the script and region, for the NumberFormat object.
   * @returns { IndexUtil } IndexUtil object.
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Creates an IndexUtil object.
   *
   * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
   *                              The default value is the current system locale.
   * @returns { IndexUtil } IndexUtil object created based on the specified locale ID.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Creates an IndexUtil object.
   *
   * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
   *                              The default value is the current system locale.
   * @returns { IndexUtil } IndexUtil object created based on the specified locale ID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export function getInstance(locale?:string): IndexUtil;

  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Sequence text can be grouped under the specified area,
   * and grouping index with different lengths can be specified.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class IndexUtil {
    /**
     * Get a list of labels for use as a UI index
     *
     * @returns { Array<string> } a list of labels
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains the index list of the current locale.
     *
     * @returns { Array<string> } Index list of the current locale. The first and last elements are "...".
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the index list of the current locale.
     *
     * @returns { Array<string> } Index list of the current locale. The first and last elements are "...".
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getIndexList(): Array<string>;

    /**
     * Add the index characters from a Locale to the index.
     *
     * @param { string } locale - The locale whose index characters are to be added.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Adds the index list of a new locale to the index list of the current locale to form a composite list.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Adds the index list of a new locale to the index list of the current locale to form a composite list.
     *
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    addLocale(locale: string): void;

    /**
     * Get corresponding index of the input text.
     *
     * @param { string } text - input text
     * @returns { string } index of the input text
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Obtains the index of the text object.
     *
     * @param { string } text - text object.
     * @returns { string } Index of the text object. If no proper index is found, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the index of the text object.
     *
     * @param { string } text - text object.
     * @returns { string } Index of the text object. If no proper index is found, an empty string is returned.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getIndex(text: string): string;
  }

  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Unicode
   */
  export class Character {
    /**
     * Checks whether the input character is a digit.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character is a digit, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isDigit
     */
    isDigit(ch: string): boolean;

    /**
     * Checks whether the input character is a space.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character is a space, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isSpaceChar
     */
    isSpaceChar(ch: string): boolean;

    /**
     * Checks whether the input character is a whitespace.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character is a white space, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isWhitespace
     */
    isWhitespace(ch: string): boolean;

    /**
     * Checks whether the input character is of the right to left (RTL) language.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character is of the RTL language, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isRTL
     */
    isRTL(ch: string): boolean;

    /**
     * Checks whether the input character is an ideographic character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character an ideographic character, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isIdeograph
     */
    isIdeograph(ch: string): boolean;

    /**
     * Checks whether the input character is a letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character a letter, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isLetter
     */
    isLetter(ch: string): boolean;

    /**
     * Checks whether the input character is a lowercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character a lowercase letter, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isLowerCase
     */
    isLowerCase(ch: string): boolean;

    /**
     * Checks whether the input character is an uppercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { boolean } true if the input character an uppercase letter, and false otherwise.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.isUpperCase
     */
    isUpperCase(ch: string): boolean;

    /**
     * Obtains the type of the input character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *     checked.
     * @returns { string } Type of the input character.
     * @syscap SystemCapability.Global.I18n
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Unicode.getType
     */
    getType(ch: string): string;
  }

  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the API for accessing unicode character properties. For example, determine whether a character is a number.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export class Unicode {
    /**
     * Determines whether the specified code point is a digit character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a digit character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines whether the specified code point is a digit character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a digit character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is a digit.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a digit, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isDigit(ch: string): boolean;

    /**
     * Determines if the specified character is a space character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a space character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a space character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a space character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is a space.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a space, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isSpaceChar(ch: string): boolean;

    /**
     * Determines if the specified character is a whitespace character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a whitespace character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a whitespace character
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a whitespace character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is a whitespace.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is a white space, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isWhitespace(ch: string): boolean;

    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a RTL character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a RTL character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is of the right to left (RTL) language.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character is of the RTL language, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isRTL(ch: string): boolean;

    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Ideographic character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Ideographic character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is an ideographic character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character an ideographic character, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isIdeograph(ch: string): boolean;

    /**
     * Determines if the specified character is a Letter or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Letter
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a Letter or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a Letter
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is a letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character a letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isLetter(ch: string): boolean;

    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a LowerCase character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a LowerCase character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is a lowercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character a lowercase letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isLowerCase(ch: string): boolean;

    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a UpperCase character
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @param { string } char - the character to be tested
     * @returns { boolean } true if the character is a UpperCase character
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the input character is an uppercase letter.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { boolean } true if the input character an uppercase letter, and false otherwise.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static isUpperCase(ch: string): boolean;

    /**
     * Get the general category value of the specified character.
     *
     * @param { string } char - the character to be tested
     * @returns { string } the general category of the specified character.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get the general category value of the specified character.
     *
     * @param { string } char - the character to be tested
     * @returns { string } the general category of the specified character.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the type of the input character.
     *
     * @param { string } ch - Input character. If the input is a string, only the type of the first character is
     *                          checked.
     * @returns { string } Type of the input character.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getType(ch: string): string;

    /**
     * Detects the encoding format of the input byte array.
     * It is recommended to check the encoding format before performing data conversion operations.
     *
     * @param { Uint8Array } bytes - Input byte stream. To detect the encoding of a text string,
     *     convert the text to a byte stream first while preserving its original format.
     *     <br>Byte stream to be identified and encoded
     * @returns { EncodingInfo } An object containing the detected encoding name and detection confidence level.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    static detectEncoding(bytes: Uint8Array): EncodingInfo;
  }

  /**
   * Defines the detect encoding result information.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export interface EncodingInfo {  
    /**
     * Name of the detect encoding result, the value can be "UTF-8", "UTF-16BE", "UTF-16LE", "TF-32BE",
     * "UTF-32LE", "Shift_JIS", "ISO-2022-JP", "ISO-2022-CN", "ISO-2022-KR", "GB18030", "Big5", "EUC-JP",
     * "EUC-KR", "ISO-8859-1", "ISO-8859-2", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8",
     * "ISO-8859-9", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254",
     * "windows-1255", "windows-1256", "KOI8-R", "IBM420", "IBM424".
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    encodingName: string;

    /**
     * An integer between 0 to 100, determine the accuracy of the result.
     * Higher value indicates a more reliable detection result.
     *
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    confidence: int;
  }

  /**
   * Checks whether the 24-hour clock is used.
   *
   * @returns { boolean } true if the 24-hour clock is used, and false otherwise.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#is24HourClock
   */
  export function is24HourClock(): boolean;

  /**
   * Sets the 24-hour clock.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { boolean } option - Whether to enable the 24-hour clock. The value "true" means to enable the 24-hour
   *                             clock, and the value "false" means the opposite.
   * @returns { boolean } true if the setting is successful, and false otherwise.
   * @syscap SystemCapability.Global.I18n
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#set24HourClock
   */
  export function set24HourClock(option: boolean): boolean;

  /**
   * Adds a preferred language to the specified position on the preferred language list.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { string } language - Preferred language to add.
   * @param { int } [index] - Position to which the preferred language is added. The default value is the length of
   *                             the preferred language list.
   * @returns { boolean } true if the operation is successful, and false otherwise.
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#addPreferredLanguage
   */
  export function addPreferredLanguage(language: string, index?: int): boolean;

  /**
   * Removes a preferred language from the specified position on the preferred language list.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { int } index - Position of the preferred language to delete.
   * @returns { boolean } Whether the operation is successful. The value "true" indicates that the operation is
   *                      successful, and the value "false" indicates the opposite.
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#removePreferredLanguage
   */
  export function removePreferredLanguage(index: int): boolean;

  /**
   * Obtains the list of preferred languages.
   *
   * @returns { Array<string> } List of preferred languages.
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#getPreferredLanguageList
   */
  export function getPreferredLanguageList(): Array<string>;

  /**
   * Obtains the first language in the preferred language list.
   *
   * @returns { string } First language in the preferred language list.
   * @syscap SystemCapability.Global.I18n
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.i18n/i18n.System#getFirstPreferredLanguage
   */
  export function getFirstPreferredLanguage(): string;

  /**
   * Get the default TimeZone object or the TimeZone object corresponds to zoneID.
   *
   * @param { string } [zoneID] - TimeZone ID used to create TimeZone Object.
   * @returns { TimeZone } a TimeZone object corresponds to zoneID.
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Get the default TimeZone object or the TimeZone object corresponds to zoneID.
   *
   * @param { string } [zoneID] - TimeZone ID used to create TimeZone Object.
   * @returns { TimeZone } a TimeZone object corresponds to zoneID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the TimeZone object corresponding to the specified time zone ID.
   *
   * @param { string } [zoneID] - Time zone ID. The default value is the system time zone.
   * @returns { TimeZone } TimeZone object corresponding to the time zone ID.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export function getTimeZone(zoneID?: string): TimeZone;

  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 7
   */
  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the API for accessing TimeZone name, rawOffset and offset information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export class TimeZone {
    /**
     * Get the id of the TimeZone object.
     *
     * @returns { string } a string represents the timezone id.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the id of the TimeZone object.
     *
     * @returns { string } a string represents the timezone id.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the ID of the specified TimeZone object.
     *
     * @returns { string } Time zone ID corresponding to the TimeZone object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getID(): string;

    /**
     * Get the displayName of the TimeZone Object under the locale.
     *
     * @param { string } [locale] - the locale tag use to display timezone object's name.
     * @param { boolean } [isDST] - wether consider daylight saving time when display timezone object's name.
     * @returns { string } a string represents the display name.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Obtains time zone display name in the specified language.
     *
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
     *                              The default value is the current system locale.
     * @param { boolean } [isDST] - Whether DST information is displayed. The value "true" indicates that DST
     *                              information is displayed, and the value "false" indicates the opposite.
     *                              The default value is false.
     * @returns { string } Time zone display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains time zone display name in the specified language.
     *
     * @param { string } [locale] - System locale, which consists of the language, script, and country/region.
     *                              The default value is the current system locale.
     * @param { boolean } [isDST] - Whether DST information is displayed. The value "true" indicates that DST
     *                              information is displayed, and the value "false" indicates the opposite.
     *                              The default value is false.
     * @returns { string } Time zone display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getDisplayName(locale?: string, isDST?: boolean): string;

    /**
     * Get the raw offset of the TimeZone object.
     *
     * @returns { int } a number represents the raw offset.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the raw offset of the TimeZone object.
     *
     * @returns { int } a number represents the raw offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the raw offset of the specified time zone.
     *
     * @returns { int } Raw offset of the time zone, in milliseconds.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getRawOffset(): int;

    /**
     * Get the offset of the TimeZone object.
     *
     * @param { double } [date] - Indicates a date use to compute offset.
     * @returns { int } a number represents the offset with date.
     * @syscap SystemCapability.Global.I18n
     * @since 7
     */
    /**
     * Get the offset of the TimeZone object.
     *
     * @param { double } [date] - Indicates a date use to compute offset.
     * @returns { int } a number represents the offset with date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the offset of the specified time zone at the specified time.
     *
     * @param { double } [date] - Specified time, in milliseconds. The default value is the system time.
     * @returns { int } Time zone offset, in milliseconds. When the DST is used, the time zone offset
     *                     is the raw time zone offset plus the DST offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getOffset(date?: double): int;

    /**
     * Get available TimeZone ID list.
     *
     * @returns { Array<string> } a string array represents the available TimeZone ID list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Get available TimeZone ID list.
     *
     * @returns { Array<string> } a string array represents the available TimeZone ID list.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the list of time zone IDs supported by the system.
     *
     * @returns { Array<string> } List of time zone IDs supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getAvailableIDs(): Array<string>;

    /**
     * Get available Zone City ID list.
     *
     * @returns { Array<string> } a string array represents the available Zone City ID list.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains the list of time zone city IDs supported by the system.
     *
     * @returns { Array<string> } List of time zone city IDs supported by the system.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getAvailableZoneCityIDs(): Array<string>;

    /**
     * Get City display name in a certain locale.
     *
     * @param { string } cityID - Zone City ID.
     * @param { string } locale - locale used to display city name.
     * @returns { string } a string represents the display name of City in locale.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains time zone city display name in the specified language.
     *
     * @param { string } cityID - Time zone city ID.
     * @param { string } locale - System locale, which consists of the language, script, and country/region.
     * @returns { string } Time zone city display name in the specified language.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getCityDisplayName(cityID: string, locale: string): string;

    /**
     * Get TimeZone Object from city ID.
     *
     * @param { string } cityID - Zone City ID.
     * @returns { TimeZone } a TimeZone Object from city ID.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Creates a TimeZone object corresponding to the specified time zone city.
     *
     * @param { string } cityID - Time zone city ID. The value must be a time zone city ID supported by the system.
     * @returns { TimeZone } TimeZone object corresponding to the specified time zone city ID.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getTimezoneFromCity(cityID: string): TimeZone;

    /**
     * Get the possible time zones from the specified longitude and latitude.
     *
     * @param { double } longitude value
     * @param { double } latitude value
     * @returns { Array<TimeZone> } Returns a TimeZone array from the specified longitude and latitude.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Creates an array of TimeZone objects corresponding to the specified location.
     *
     * @param { double } longitude - Longitude. The value range is [-180, 179.9). A positive value is used for east
     *                               longitude and a negative value is used for west longitude.
     * @param { double } latitude - Latitude. The value range is [-90, 89.9). A positive value is used for north
     *                              latitude and a negative value is used for south latitude.
     * @returns { Array<TimeZone> } TimeZone objects corresponding to the specified location.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @static
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getTimezonesByLocation(longitude: double, latitude: double): Array<TimeZone>;

    /**
     * Get the zone rules object corresponds to the timezone objects.
     *
     * @returns { ZoneRules } Returns a ZoneRuels object which defines timezone offset changing rule.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Get the zone rules object corresponds to the timezone objects.
     *
     * @returns { ZoneRules } Returns a ZoneRuels object which defines timezone offset changing rule.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    public getZoneRules(): ZoneRules;
  }

  /**
   * Provides the API for obtaining timezone offset changing rules information.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  /**
   * Provides the API for obtaining timezone offset changing rules information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class ZoneRules {
    /**
     * Get the next timezone offset transition after date.
     *
     * @param { double } [ date ] - Indicates milliseconds.
     * @returns { ZoneOffsetTransition } Returns a timezone offset transition after date.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Get the next timezone offset transition after date.
     *
     * @param { double } [ date ] - Indicates milliseconds.
     * @returns { ZoneOffsetTransition } Returns a timezone offset transition after date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    public nextTransition(date?: double): ZoneOffsetTransition;
  }

  /**
   * Provides the API for obtaining a timezone transition information.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  /**
   * Provides the API for obtaining a timezone transition information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class ZoneOffsetTransition {
    /**
     * Obtains the timestamp of the change in the time zone offset.
     *
     * @returns { double } Timestamp of the change in the time zone offset.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Obtains the timestamp of the change in the time zone offset.
     *
     * @returns { double } Timestamp of the change in the time zone offset.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    public getMilliseconds(): double;

    /**
     * Get the offset after time zone offset trasition.
     *
     * @returns { int } Returns the offset after time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Get the offset after time zone offset trasition.
     *
     * @returns { int } Returns the offset after time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    public getOffsetAfter(): int;

    /**
     * Get the offset before time zone offset trasition.
     *
     * @returns { int } Returns the offset before time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Get the offset before time zone offset trasition.
     *
     * @returns { int } Returns the offset before time zone offset trasition.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    public getOffsetBefore(): int;
  }

  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 9
   */
  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Provides the API for transliterate text from one format to another.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class Transliterator {
    /**
     * Get a string array of all available transliterator ids.
     *
     * @returns { string[] } a string array of all available transliterator ids.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Obtains a list of IDs supported by the Transliterator object.
     *
     * @returns { string[] } List of IDs supported by the Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains a list of IDs supported by the Transliterator object.
     *
     * @returns { string[] } List of IDs supported by the Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getAvailableIDs(): string[];

    /**
     * Get a Transliterator that is specified by id name.
     *
     * @param { string } id - specified the type of Transliterator. id is formed by source and dest. Transliterator will transliterate
     *           the input string from source format to the dest format. For example, a Simplified Chinese to Latn
     *           Transliterator will transform the text written in Chinese to Latn characters.
     * @returns { Transliterator } Transliterator that is specified by id name.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Creates a Transliterator object based on the specified ID.
     *
     * @param { string } id - ID supported by the Transliterator object.
     * @returns { Transliterator } Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Creates a Transliterator object based on the specified ID.
     *
     * @param { string } id - ID supported by the Transliterator object.
     * @returns { Transliterator } Transliterator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getInstance(id: string): Transliterator;

    /**
     * Transform the input text.
     *
     * @param { string } text - text to be transliterated.
     * @returns { string } the output text that is transliterated from source format to the dest format.
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Converts the input text from the source format to the target format.
     *
     * @param { string } text - Input text.
     * @returns { string } Text after conversion.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Converts the input text from the source format to the target format.
     *
     * @param { string } text - Input text.
     * @returns { string } Text after conversion.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    transform(text: string): string;
  }

  /**
   * Enumerates the Normalizer modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @since 10
   */
  /**
   * Enumerates text normalization modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Enumerates text normalization modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export enum NormalizerMode {
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Normalization form C, characters are decomposed and then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NFC = 1,
    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Normalization form D, characters are decomposed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NFD = 2,
    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Normalization form KC, characters are decomposed by compatibility, then re-composed by canonical equivalence
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NFKC = 3,
    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Normalization form KD, characters are decomposed by compatibility
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NFKD = 4
  }

  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 10
   */
  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Provides the API for text encoding normalization.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class Normalizer {
    /**
     * Get a Normalizer that is specified by normalize mode.
     *
     * @param { NormalizerMode } mode - specified the mode of Normalizer. It must be a valid mode.
     * @returns { Normalizer } Transliterator that is specified by id name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Obtains a Normalizer object.
     *
     * @param { NormalizerMode } mode - Text normalization mode.
     * @returns { Normalizer } Normalizer object for text normalization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains a Normalizer object.
     *
     * @param { NormalizerMode } mode - Text normalization mode.
     * @returns { Normalizer } Normalizer object for text normalization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getInstance(mode: NormalizerMode): Normalizer;

    /**
     * Get a normalized string of specified mode.
     *
     * @param { string } text - text to normalized.
     * @returns { string } a normalized string from source.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @since 10
     */
    /**
     * Normalizes input strings.
     *
     * @param { string } text - Input strings.
     * @returns { string } Normalized strings.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Normalizes input strings.
     *
     * @param { string } text - Input strings.
     * @returns { string } Normalized strings.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    normalize(text: string): string;
  }

  /**
   * Represents the language or country/region suggestion type.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum SuggestionType {
    /**
     * Not a recommended language or country/region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_NONE = 0,
    /**
     * Country/region recommended by the system language or language recommended by the system country/region.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_RELATED = 1,
    /**
     * Language recommended by the country/region of the SIM card.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SUGGESTION_TYPE_SIM = 2,
  }

  /**
   * Represents the language or country/region sorting option.
   *
   * @interface SortOptions
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface SortOptions {
    /**
     * Locale information, which consists of the language, script, and country/region, for example, "zh-Hans-CN".
     * The default value is the current system locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * Whether to use the local name for sorting. The value "true" means to use the local name for sorting, and the
     * value "false" means the opposite. If getLanguageInfoArray is called, the default value of isUseLocalName is
     * true. If getRegionInfoArray is called, the default value of isUseLocalName is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    isUseLocalName?: boolean;

    /**
     * Whether to move the recommended language or country/region to the top in the sorting result. The value "true"
     * means to move the recommended language or country/region to the top, and the value "false" means the opposite.
     * The default value is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    isSuggestedFirst?: boolean;
  }

  /**
   * Represents the locale information, which consists of the language, script, and country/region.
   *
   * @interface LocaleItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocaleItem {
    /**
     * Language code or country/region code, for example, "zh" or "CN".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Language or country/region suggestion type.
     *
     * @type { SuggestionType }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    suggestionType: SuggestionType;

    /**
     * Representation of ID in the specified locale in SystemLocaleManager.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    displayName: string;

    /**
     * Local name of the ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    localName?: string;
  }

  /**
   * Represents a time zone and city combination item.
   *
   * @interface TimeZoneCityItem
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TimeZoneCityItem {
    /**
     * Time zone ID, for example, "Asia/Shanghai".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    zoneId: string;

    /**
     * City ID, for example, "Shanghai".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    cityId: string;

    /**
     * City display name in the system locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    cityDisplayName: string;

    /**
     * Offset of the time zone ID.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    offset: int;

    /**
     * Time zone display name in the system locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    zoneDisplayName: string;

    /**
     * Fixed offset of the time zone ID.
     *
     * @type { ?int }
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    rawOffset?: int;
  }

  /**
   * Provide some functions for settings and startup guide to select language or region.
   *
   * @syscap SystemCapability.Global.I18n
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export class SystemLocaleManager {
    /**
     * Creates a SystemLocaleManager object.
     *
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Obtains sorted language array for setting or startup guide app.
     *
     * @param { Array<string> } languages - The languages whose name will be sorted and displayed.
     * @param { SortOptions } options - Sort options for locale item.
     * @returns { Array<LocaleItem> } Locale Informations sorted for specified options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Obtains the list of languages after sorting.
     *
     * @param { Array<string> } languages - Valid IDs of the languages to be sorted.
     * @param { SortOptions } options - Language sorting option.
     * @returns { Array<LocaleItem> } Language list after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getLanguageInfoArray(languages: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains sorted region array for setting or startup guide app.
     *
     * @param { Array<string>  } regions - The regions whose name will be sorted and displayed.
     * @param { SortOptions } options - Sort options for locale item.
     * @returns { Array<LocaleItem> } Locale Informations sorted for specified options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Obtains the IDs of the countries or regions after sorting.
     *
     * @param { Array<string>  } regions - Valid IDs of the countries or regions to be sorted.
     * @param { SortOptions } options - Country/region sorting option. By default, locale is the current system
     *                                  locale, isUseLocalName is false, and isSuggestedFirst is true.
     * @returns { Array<LocaleItem> } IDs of the countries or regions after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getRegionInfoArray(regions: Array<string>, options?: SortOptions): Array<LocaleItem>;

    /**
     * Obtains sorted time zone city info array for showing time zone list
     *
     * @returns { Array<TimeZoneCityItem> } Time zone city information sorted by city name.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Obtains list of time zone city items after sorting.
     *
     * @returns { Array<TimeZoneCityItem> } List of time zone city items after sorting.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Global.I18n
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    static getTimeZoneCityItemArray(): Array<TimeZoneCityItem>;
  }

  /**
   * Provides the informations of one holiday.
   *
   * @interface HolidayInfoItem
   * @syscap SystemCapability.Global.I18n
   * @since 11
   */
  /**
   * Represents the holiday information.
   *
   * @interface HolidayInfoItem
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Represents the holiday information.
   *
   * @interface HolidayInfoItem
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface HolidayInfoItem {
    /**
     * Holiday base name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Holiday name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Holiday name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baseName: string;

    /**
     * Holiday start year.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Year of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Year of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    year: int;

    /**
     * Holiday start month.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Month of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Month of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    month: int;

    /**
     * Holiday start day.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Day of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Day of the holiday.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    day: int;

    /**
     * Holiday local name array.
     *
     * @type { ?Array<HolidayLocalName> }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Local names of the holiday.
     *
     * @type { ?Array<HolidayLocalName> }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Local names of the holiday.
     *
     * @type { ?Array<HolidayLocalName> }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    localNames?: Array<HolidayLocalName>;
  }

  /**
   * Provides the informations holiday locale name.
   *
   * @interface HolidayLocalName
   * @syscap SystemCapability.Global.I18n
   * @since 11
   */
  /**
   * Represents the name of a holiday in different languages.
   *
   * @interface HolidayLocalName
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Represents the name of a holiday in different languages.
   *
   * @interface HolidayLocalName
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface HolidayLocalName {
    /**
     * Holiday locale name language id.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Language, for example, "ar", "en", or "tr".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Language, for example, "ar", "en", or "tr".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    language: string;

    /**
     * Holiday local name.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Local name of a holiday. For example, the Turkish name of Sacrifice Feast is Kurban Bayrami.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Local name of a holiday. For example, the Turkish name of Sacrifice Feast is Kurban Bayrami.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;
  }

  /**
   * Provide some functions to manage holidays in a country or region. Partly follows the RFC2445 standard.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 11
   */
  /**
   * Provide some functions to manage holidays in a country or region. Partly follows the RFC2445 standard.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Provide some functions to manage holidays in a country or region. Partly follows the RFC2445 standard.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class HolidayManager {
    /**
     * A constructor used to create a HolidayManager object.
     *
     * @param { String } icsPath - the path of the iCalendar format file to create HolidayManager object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Creates a HolidayManager object for parsing holiday data.
     *
     * @param { String } icsPath - Path of the .ics file with the read permission granted for applications.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Creates a HolidayManager object for parsing holiday data.
     *
     * @param { String } icsPath - Path of the .ics file with the read permission granted for applications.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    constructor(icsPath: String);

    /**
     * Returns true if the given date is a holiday. If the date is not given,
     *  the date object of current time is used.
     *
     * @param { Date } [date] - Date object whose attribute is desired.
     * @returns { boolean } whether the date is a holiday day.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Determines whether the specified date is a holiday.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is the current date.
     * @returns { boolean } true if the specified date is a holiday, and false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Determines whether the specified date is a holiday.
     *
     * @param { Date } [date] - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     *                          The default value is the current date.
     * @returns { boolean } true if the specified date is a holiday, and false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    isHoliday(date?: Date): boolean;

    /**
     * Obtains holiday info array for a specified year
     *
     * @param { int } [year] - specified holiday year. If the year is not given,
     *  the current year is used.
     * @returns { Array<HolidayInfoItem> } holiday information array for one year.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Obtains the holiday information list of the specified year.
     *
     * @param { int } [year] - Specified year, for example, 2023.<br>The default value is the current year.
     * @returns { Array<HolidayInfoItem> } Holiday information list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains the holiday information list of the specified year.
     *
     * @param { int } [year] - Specified year, for example, 2023.<br>The default value is the current year.
     * @returns { Array<HolidayInfoItem> } Holiday information list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getHolidayInfoItemArray(year?: int): Array<HolidayInfoItem>;
  }

  /**
   * Provides the informations of one entity.
   *
   * @interface EntityInfoItem
   * @syscap SystemCapability.Global.I18n
   * @since 11
   */
  /**
   * Defines a list of entities.
   *
   * @interface EntityInfoItem
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Defines a list of entities.
   *
   * @interface EntityInfoItem
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export interface EntityInfoItem {
    /**
     * Entity begin position.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Start position of the entity in the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Start position of the entity in the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    begin: int;

    /**
     * Entity end position.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * End position of the entity the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * End position of the entity the input string.
     *
     * @type { int }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    end: int;

    /**
     * Entity type. Field values such as phone_number, date
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Entity type. The value can be "phone_number" or "date". "phone_number" indicates that the entity is a phone
     * number, and "date" indicates that the entity is a date.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Entity type. The value can be "phone_number" or "date". "phone_number" indicates that the entity is a phone
     * number, and "date" indicates that the entity is a date.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    type: string;
  }

  /**
   * Provide some functions to find named entity in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 11
   */
  /**
   * Provide some functions to find named entity in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  /**
   * Provide some functions to find named entity in text.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  export class EntityRecognizer {
    /**
     * A constructor used to create a EntityRecognizer object.
     *
     * @param { string } [locale] - specified the locale. Use current app locale by default. It must be a valid locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Creates an entityRecognizer object. This object is used to recognize entities in the text for the specified
     * locale.
     *
     * @param { string } [locale] - Locale ID, which consists of the language, script, and country/region, for example,
     *                              "zh-Hans-CN". The default value is the current system locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Creates an entityRecognizer object. This object is used to recognize entities in the text for the specified
     * locale.
     *
     * @param { string } [locale] - Locale ID, which consists of the language, script, and country/region, for example,
     *                              "zh-Hans-CN". The default value is the current system locale.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    constructor(locale?: string);

    /**
     * Obtains holiday info array for a specified text
     *
     * @param { string } text - the text to find entities.
     * @returns { Array<EntityInfoItem> } entity information array found.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @since 11
     */
    /**
     * Obtains entity information in the text object.
     *
     * @param { string } text - text object.
     * @returns { Array<EntityInfoItem> } List of entities in the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    /**
     * Obtains entity information in the text object.
     *
     * @param { string } text - text object.
     * @returns { Array<EntityInfoItem> } List of entities in the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    findEntityInfo(text: string): Array<EntityInfoItem>;
  }

  /**
   * Obtains a SimpleDateTimeFormat object based on the specified pattern string. For details about the display
   * differences between the objects obtained by this API and getSimpleDateTimeFormatBySkeleton,
   * see SimpleDateTimeFormat.
   *
   * @param { string } pattern - Valid pattern. For details about the supported characters and their meanings, see
   *                             [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                             This parameter also supports custom text enclosed in single quotation marks ('').
   * @param { intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead getSimpleDateTimeFormatByPattern
   */
  export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: intl.Locale): SimpleDateTimeFormat;

  /**
   * Obtains a SimpleDateTimeFormat object based on the specified pattern string. For details about the display
   * differences between the objects obtained by this API and getSimpleDateTimeFormatBySkeleton,
   * see SimpleDateTimeFormat.
   *
   * @param { string } pattern - Valid pattern. For details about the supported characters and their meanings, see
   *                             [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                             This parameter also supports custom text enclosed in single quotation marks ('').
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale): SimpleDateTimeFormat;

  /**
   * Obtains a SimpleDateTimeFormat object based on the specified skeleton. For details about the display differences
   * between the objects obtained by this API and getSimpleDateTimeFormatByPattern, see SimpleDateTimeFormat.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                              This parameter does not support custom text.
   * @param { intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead getSimpleDateTimeFormatBySkeleton
   */
  export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat;

  /**
   * Obtains a SimpleDateTimeFormat object based on the specified skeleton. For details about the display differences
   * between the objects obtained by this API and getSimpleDateTimeFormatByPattern, see SimpleDateTimeFormat.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *                              This parameter does not support custom text.
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleDateTimeFormat } SimpleDateTimeFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat;

  /**
   * Provide a simple date time formatting interface.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class SimpleDateTimeFormat {
    /**
     * Formats the date and time.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { string } A string containing the formatted date and time.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(date: Date): string;
  }

  /**
   * Obtains a SimpleNumberFormat object based on the specified skeleton.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons).
   * @param { intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleNumberFormat } SimpleNumberFormat object.
   * @throws { BusinessError } 890001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead getSimpleNumberFormatBySkeleton
   */
  export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat;

  /**
   * Obtains a SimpleNumberFormat object based on the specified skeleton.
   *
   * @param { string } skeleton - Valid skeleton. For details about the supported characters and their meanings, see
   *                              [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons).
   * @param { Intl.Locale } [locale] - Locale object. The default value is the current system locale.
   * @returns { SimpleNumberFormat } SimpleNumberFormat object.
   * @throws { BusinessError } 8900001 - Invalid parameter. Possible causes: Parameter verification failed.
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat;

  /**
   * Provide a simple number formatting interface.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class SimpleNumberFormat {
    /**
     * Formats a number.
     *
     * @param { double } value - Number to be formatted.
     * @returns { string } Formatted number.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(value: double): string;
  }

  /**
   * Provide a number formatting interface which could format number to StyleString.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export class StyledNumberFormat {
    /**
     * Creates a NumberFormat object for rich text display.
     *
     * @param { intl.NumberFormat | SimpleNumberFormat } numberFormat - NumberFormat object.
     * @param { StyledNumberFormatOptions } [ options ] - Configuration options of the NumberFormat object.
     *                                                    The default value is the default text style.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead constructor
     */
    constructor(numberFormat: intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions);

    /**
     * A constructor used to create a StyledNumberFormat object.
     *
     * @param { Intl.NumberFormat | SimpleNumberFormat } numberFormat - Indicates the number format object that used to format number.
     * @param { StyledNumberFormatOptions } [ options ] - Indicates the options used to format the number.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(numberFormat: Intl.NumberFormat | SimpleNumberFormat, options?: StyledNumberFormatOptions);


    /**
     * Formats a number as a rich text object.
     *
     * @param { double } value - Number to be formatted.
     * @returns { StyledString } Rich text object after formatting.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    format(value: double): StyledString;
  }

  /**
   * Represents optional configuration items for the NumberFormat object.
   *
   * @interface StyledNumberFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface StyledNumberFormatOptions {
    /**
     * Text style for the integer part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    integer?: TextStyle;

    /**
     * Text style for the decimal point. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    decimal?: TextStyle;

    /**
     * Text style for the fraction part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    fraction?: TextStyle;

    /**
     * Text style for the unit. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    unit?: TextStyle;
  }

  /**
   * Provide a DateTime formatting interface which could format DateTime to StyleString.
   *
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 dynamic&static
   */
  export class StyledDateTimeFormat {
    /**
     * A constructor used to create a StyledDateTimeFormat object.
     *
     * @param { Intl.DateTimeFormat | SimpleDateTimeFormat } dateTimeFormat - Indicates the date and time format object
     *     that used to format date.
     * @param { StyledDateTimeFormatOptions } [ options ] - Indicates the options used to format the date.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    constructor(dateTimeFormat: Intl.DateTimeFormat | SimpleDateTimeFormat,
        options?: StyledDateTimeFormatOptions);

    /**
     * Formats a date as a rich text object.
     *
     * @param { Date } date - date to be formatted.
     * @returns { StyledString } Rich text object after formatting.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    format(date: Date): StyledString;
  }

  /**
   * Represents optional configuration items for the DateTimeFormat object.
   *
   * @interface StyledDateTimeFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @atomicservice
   * @since 23 dynamic&static
   */
  export interface StyledDateTimeFormatOptions {
    /**
     * Text style for the year part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    year?: TextStyle;

    /**
     * Text style for the month part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    month?: TextStyle;

    /**
     * Text style for the day part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    day?: TextStyle;

    /**
     * Text style for the hour part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    hour?: TextStyle;

    /**
     * Text style for the minute part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    minute?: TextStyle;

    /**
     * Text style for the second part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    second?: TextStyle;

    /**
     * Text style for the day period part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    dayPeriod?: TextStyle;

    /**
     * Text style for the weekday part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    weekday?: TextStyle;

    /**
     * Text style for the era part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    era?: TextStyle;

    /**
     * Text style for the timezone name part. The default value is the default text style.
     *
     * @type { ?TextStyle }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since 23 dynamic&static
     */
    timeZoneName?: TextStyle;
  }
  
  /**
   * Building upon the measurement unit formatting capabilities provided by Intl.NumberFormat, the formatting
   * functionality has been enhanced. It supports automatically selecting appropriate measurement units
   * based on usage scenarios to format numbers.For example, there are many units of measurement for length,
   * including millimeters, centimeters, meters, kilometers, and so on. However, depending on the context
   * in which the measurement is used, each scenario has its commonly used units. Millimeters are more frequently
   * used when expressing rainfall, while meters are more commonly used to describe visibility.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export class AdvancedMeasureFormat {  
    /**
     * A constructor used to create an AdvancedMeasureFormat object.
     *
     * @param { Intl.NumberFormat } numberFormat - Indicates the number format object that used to format number.
     * @param { AdvancedMeasureFormatOptions } [ options ] - Indicates the options for AdvancedMeasureFormat.
     *     When no options are provided, the formatting result is consistent with that of NumberFormat.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    constructor(numberFormat: Intl.NumberFormat, options?: AdvancedMeasureFormatOptions);

    /**
     * Formats a number by appropriate measure for usage scenarios. For instance, when formatting the value 12.3
     *     for rainfall in the English locale, the output is "12.3 mm".
     *
     * @param { double } num - number to be formatted.
     * @returns { string } measure formatting result.
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    format(num: double): string;
  }

  /**
   * Represents optional configuration items for AdvancedMeasureFormat object.
   *
   * @interface AdvancedMeasureFormatOptions
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export interface AdvancedMeasureFormatOptions {  
    /**
     * Scenarios for MeasureFormat.
     *
     * @type { ?UnitUsage }
     * @syscap SystemCapability.Global.I18n
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    unitUsage?: UnitUsage;
  }

  /**
   * Enumerates Scenarios for MeasureFormat.
   *
   * @enum { int }
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export enum UnitUsage {    
  /**
   * Area land agricult scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  AREA_LAND_AGRICULT = 1,

  /**
   * Area land commercl scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  AREA_LAND_COMMERCL = 2,

  /**
   * Area land residntl scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  AREA_LAND_RESIDNTL = 3,

  /**
   * Length person scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_PERSON = 4,

  /**
   * Length person small scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_PERSON_SMALL = 5,

  /**
   * Length rainfall scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_RAINFALL = 6,

  /**
   * Length road scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_ROAD = 7,

  /**
   * Length road small scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_ROAD_SMALL = 8,

  /**
   * Length snowfall scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_SNOWFALL = 9,

  /**
   * Length vehicle scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_VEHICLE = 10,

  /**
   * Length visiblty scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_VISIBLTY = 11,

  /**
   * Length visiblty small scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_VISIBLTY_SMALL = 12,

  /**
   * Length person informal scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_PERSON_INFORMAL = 13,

  /**
   * Length person small informal scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_PERSON_SMALL_INFORMAL = 14,

  /**
   * Length road informal scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  LENGTH_ROAD_INFORMAL = 15,

  /**
   * Speed road travel scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  SPEED_ROAD_TRAVEL = 16,

  /**
   * Speed wind scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  SPEED_WIND = 17,

  /**
   * Temperature person scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  TEMPERATURE_PERSON = 18,

  /**
   * Temperature weather scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  TEMPERATURE_WEATHER = 19,

  /**
   * Volume vehicle fuel scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  VOLUME_VEHICLE_FUEL = 20,

  /**
   * Elapsed time second scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  ELAPSED_TIME_SECOND = 21,

  /**
   * Size file byte scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  SIZE_FILE_BYTE = 22,

  /**
   * Size shortfile byte scenario.
   *
   * @syscap SystemCapability.Global.I18n
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  SIZE_SHORTFILE_BYTE = 23
}
}
export default i18n;
