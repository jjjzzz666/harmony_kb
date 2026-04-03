
/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */
/**
 * Defines the struct of Theme.
 *
 * @interface Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Theme {
    /**
    *  Define tokens associated with color resources.
    *
    * @type { Colors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    colors: Colors;
}

/**
 * Defines the struct of Colors.
 *
 * @interface Colors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Colors {

    /**
    * System brand Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    brand: ResourceColor;
    
    /**
    * System warning Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    warning: ResourceColor;

    /**
    * System alert Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    alert: ResourceColor;

    /**
    * System confirm Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    confirm: ResourceColor;

    /**
    * First level text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontPrimary: ResourceColor;

    /**
    * Secondary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontSecondary: ResourceColor;

    /**
    * tertiary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontTertiary: ResourceColor;

    /**
    * Fourth text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontFourth: ResourceColor;

    /**
    * Emphasize text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontEmphasize: ResourceColor;

    /**
    * First level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontOnPrimary: ResourceColor;

    /**
    * Secondary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontOnSecondary: ResourceColor;

    /**
    * Tertiary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontOnTertiary: ResourceColor;

    /**
    * Fourth level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    fontOnFourth: ResourceColor;

    /**
    * First level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconPrimary: ResourceColor;

    /**
    * Secondary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconSecondary: ResourceColor;

    /**
    * Tertiary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconTertiary: ResourceColor;

    /**
    * Fourth level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconFourth: ResourceColor;

    /**
    * Emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconEmphasize: ResourceColor;

    /**
    * Secondary emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconSubEmphasize: ResourceColor;

    /**
    * First level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconOnPrimary: ResourceColor;

    /**
    * Secondary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconOnSecondary: ResourceColor;

    /**
    * Tertiary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconOnTertiary: ResourceColor;

    /**
    * Fourth level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    iconOnFourth: ResourceColor;

    /**
    * System Primary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    backgroundPrimary: ResourceColor;

    /**
    * System Secondary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    backgroundSecondary: ResourceColor;

    /**
    * System tertiary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    backgroundTertiary: ResourceColor;

    /**
    * System fourth level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    backgroundFourth: ResourceColor;

    /**
    * System emphasize level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    backgroundEmphasize: ResourceColor;

    /**
    * CompForegroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compForegroundPrimary: ResourceColor;

    /**
    * CompBackgroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundPrimary: ResourceColor;

    /**
    * CompBackgroundPrimaryTran color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundPrimaryTran: ResourceColor;

    /**
    * CompBackgroundPrimaryContrary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundPrimaryContrary: ResourceColor;

    /**
    * CompBackgroundGray color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundGray: ResourceColor;

    /**
    * 10% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundSecondary: ResourceColor;

    /**
    * 5% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundTertiary: ResourceColor;

    /**
    * 100% bright brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundEmphasize: ResourceColor;

    /**
    * Black neutral high gloss color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundNeutral: ResourceColor;
    
    /**
    * 20% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compEmphasizeSecondary: ResourceColor;

    /**
    * 10% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compEmphasizeTertiary: ResourceColor;

    /**
    * Universal Division Line Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compDivider: ResourceColor;

    /**
    * CompCommonContrary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compCommonContrary: ResourceColor;

    /**
    * CompBackgroundFocus Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compBackgroundFocus: ResourceColor;

    /**
    * CompFocusedPrimary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compFocusedPrimary: ResourceColor;

    /**
    * CompFocusedSecondary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compFocusedSecondary: ResourceColor;

    /**
    * CompFocusedTertiary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    compFocusedTertiary: ResourceColor;

    /**
    *  Hover interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactiveHover: ResourceColor;

    /**
    * Pressed interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactivePressed: ResourceColor;

    /**
    * Focus interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactiveFocus: ResourceColor;

    /**
    * Active interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactiveActive: ResourceColor;

    /**
    * Select interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactiveSelect: ResourceColor;

    /**
    * Click interactive color 
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    interactiveClick: ResourceColor;
}

/**
 * Defines the struct of CustomTheme.
 *
 * @interface CustomTheme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface CustomTheme {
    /**
    * Define tokens associated with color resources..
    *
    * @type { ?CustomColors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    colors?: CustomColors;

    /**
    * Define tokens associated with dark mode color resources.
    *
    * @type { ?CustomDarkColors }
    * @default If not set darkColors, color value will same as colors under light mode and will not change with color
    * mode, unless the color is setted by resource in dark directory.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20 dynamic
    */
    darkColors?: CustomDarkColors;
}

/**
 * Defines the struct of CustomColors.
 *
 * @typedef { Partial<Colors> } CustomColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type CustomColors = Partial<Colors>;

/**
 * Defines the struct of CustomDarkColors.
 *
 * @typedef { Partial<Colors> } CustomDarkColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type CustomDarkColors = Partial<Colors>;

/**
 * Class ThemeControl provides the Theme management for whole Ability and pages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ThemeControl {
    /**
    * Sets the default Theme:
    * - for whole Ability when invoked from the Ability level code.
    * - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.
    *
    * @param { CustomTheme } theme
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
    static setDefaultTheme(theme: CustomTheme): void;
}
