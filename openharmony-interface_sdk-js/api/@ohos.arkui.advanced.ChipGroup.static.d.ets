'use static';

/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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

import { Component, BuilderParam, Builder, ResourceStr, SizeOptions, ResourceColor, VoidCallback, Length, Callback } from './@ohos.arkui.component';
import { PropRef, Require } from './@ohos.arkui.stateManagement';
import { ChipSize, ChipSymbolGlyphOptions, CloseOptions, ChipSuffixSymbolGlyphOptions } from './@ohos.arkui.advanced.Chip';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

/**
 * Defines icon options.
 *
 * @interface IconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface IconOptions {

    /**
     * Image resource.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    src: ResourceStr;

    /**
     * Image size option.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    size?: SizeOptions;
}

/**
 * Defines suffix icon options.
 *
 * @extends IconOptions
 * @interface SuffixImageIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface SuffixImageIconOptions extends IconOptions {
    /**
     * Called when the suffix image icon is clicked.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    action?: VoidCallback;

    /**
     * Set accessibility text for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for icon.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityLevel?: string;
}

/**
 * Defines label options.
 *
 * @interface ChipItemLabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipItemLabelOptions {

    /**
     * Text content.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @noninterop
     */
    text: string;
}


/**
 * Defines chipItem options.
 *
 * @interface ChipGroupItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupItemOptions {

    /**
     * Prefix icon.
     *
     * @type { ?IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    prefixIcon?: IconOptions;

    /**
     * Prefix symbol.
     *
     * @type { ?ChipSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    prefixSymbol?: ChipSymbolGlyphOptions;

    /**
     * Chip label.
     *
     * @type { ChipItemLabelOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     * @noninterop
     */
    label: ChipItemLabelOptions;

    /**
     * Suffix icon.
     *
     * @type { ?SuffixImageIconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    suffixImageIcon?: SuffixImageIconOptions;

    /**
     * suffix symbol.
     *
     * @type { ?ChipSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    suffixSymbol?: ChipSymbolGlyphOptions;

    /**
     * Set options for suffix symbol.
     *
     * @type { ?ChipSuffixSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

    /**
     * Allow close.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    allowClose?: boolean;

    /**
     * Set options for default close icon when 'allowaClose' is true.
     *
     * @type { ?CloseOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    closeOptions?: CloseOptions;

    /**
     * Set accessibility description for ChipGroup item.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for ChipGroup item.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityLevel?: string;
}


/**
 * Defines ChipItemStyle.
 *
 * @interface ChipItemStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipItemStyle {

    /**
     * Chip size.
     *
     * @type { ?(ChipSize | SizeOptions) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    size?: ChipSize | SizeOptions;

    /**
     * ChipItem background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    backgroundColor?: ResourceColor;

    /**
     * Text font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    fontColor?: ResourceColor;

    /**
     * Selected Text font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    selectedFontColor?: ResourceColor;

    /**
     * Selected chip item background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    selectedBackgroundColor?: ResourceColor;
}


/**
 * Defines chip group space.
 *
 * @interface ChipGroupSpaceOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupSpaceOptions {

    /**
     * Space between items.
     *
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    itemSpace?: string | double;

    /**
     * Start space.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    startSpace?: Length;

    /**
     * End space.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    endSpace?: Length;
}

/**
 * Defines IconItemOptions.
 *
 * @interface IconItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface IconItemOptions {
    /**
     * IconOptions.
     *
     * @type { IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    icon: IconOptions;

    /**
     * Icon Action.
     *
     * @type { VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    action: VoidCallback;

    /**
     * Set accessibility text for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for icon.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityLevel?: string;
}

/**
 * Defines symbol item options.
 *
 * @interface SymbolItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface SymbolItemOptions {
    /**
     * Set symbol.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    symbol: SymbolGlyphModifier;

    /**
     * Called when the symbol item is clicked.
     *
     * @type { VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    action: VoidCallback;

    /**
     * Set accessibility text for symbol.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for symbol.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for symbol.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    accessibilityLevel?: string;
}

/**
 * Defines ChipGroupPaddingOptions.
 *
 * @interface ChipGroupPaddingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupPaddingOptions {
    /**
     * Top of chip group padding.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    top: Length;

    /**
     * Bottom of chip group padding.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    bottom: Length;
}

/**
 * Defines IconGroupSuffix.
 *
 * @struct IconGroupSuffix
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct IconGroupSuffix {
    /**
     * Suffix item.
     *
     * @type { Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @Require @PropRef
    items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>;

    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}

/**
 * Defines the suffix builder of the Chip Group.
 *
 * @typedef { function } ChipGroupSuffixBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Builder
export type ChipGroupSuffixBuilder = () => void;

/**
 * Defines chipGroup.
 *
 * @struct ChipGroup
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ChipGroup {

    /**
     * Chip item.
     *
     * @type { ChipGroupItemOptions[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @Require @PropRef
    items: ChipGroupItemOptions[];

    /**
     * Chip item style.
     *
     * @type { ?ChipItemStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    itemStyle?: ChipItemStyle;

    /**
     * Default selected chip item indexes.
     *
     * @type { ?Array<int> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    selectedIndexes?: Array<int>;

    /**
     * Support multiple chip item selection.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    multiple?: boolean;

    /**
     * Chip group space.
     *
     * @type { ?ChipGroupSpaceOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    chipGroupSpace?: ChipGroupSpaceOptions;

     /**
     * Chip group padding (only support top and bottom).
     *
     * @type { ?ChipGroupPaddingOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @PropRef
    chipGroupPadding?: ChipGroupPaddingOptions;

    /**
     * Chip group callback. when chip status is changed, this onChange is called.
     *
     * @type { ?Callback<Array<int>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    onChange?: Callback<Array<int>>;

    /**
     * The builder function which will be rendered in the suffix of ChipGroup.
     *
     * @type { ?ChipGroupSuffixBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     * @noninterop
     */
    @BuilderParam
    suffix?: ChipGroupSuffixBuilder;

    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}