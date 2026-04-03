'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { CommonConfiguration, CommonMethod, ContentModifier, BlurStyle, Bindable, MenuKeyboardAvoidMode } from './common';
import { ControlSize } from './button';
import { LengthMetrics } from '../Graphics';
import { DividerOptions } from './textPicker';
import { ResourceStr, Dimension, EdgeOutlineWidths, ResourceColor, EdgeColors, Resource, Font, Length, Offset, DividerStyleOptions } from './units';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { TextModifier } from '../TextModifier';
import { OptionWidthMode } from './enums';
import { ComponentBuilder,  CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, SystemUiMaterial } from './common';
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SelectOption {
    /**
     * Option string.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * Option icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Indicates the symbol icon of this menu item.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
}
/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ArrowPosition {
    /**
     * The value of arrow position end
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    END = 0,
    /**
     * The value of arrow position start
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    START = 1
}
/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum MenuAlignType {
    /**
     * The value of menu align type start.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    START,
    /**
     * The value of menu align type center.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CENTER,
    /**
     * The value of menu align type end.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    END
}
/**
 * Enumeration of avoidance modes for the Select dropdown menu
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum AvoidanceMode {
    /**
     * The value covers the target component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    COVER_TARGET,
    /**
     * This value is displayed in the maximum space.(Compress the scrollbar)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    AVOID_AROUND_TARGET
}
/**
 * Callback of selecting an item from the select event.
 *
 * @typedef {function} OnSelectCallback
 * @param {int} index - The index of the selected item.
 * @param {string} selectStr - The value of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type OnSelectCallback = (index: int, selectStr: string) => void;
/**
 * The declare of menuOutlineOptions.
 *
 * @interface MenuOutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface MenuOutlineOptions {
    /**
     * the width of the menu outline.
     *
     * @type { ?(Dimension | EdgeOutlineWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    width?: Dimension | EdgeOutlineWidths;
    /**
     * the color of the menu outline.
     *
     * @type { ?(ResourceColor | EdgeColors) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    color?: ResourceColor | EdgeColors;
}

/**
 * Defines the Select component attributes.
 *
 * @extends CommonMethod
 * @interface SelectAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface SelectAttribute extends CommonMethod {
    /**
     * Sets the serial number of the select item, starting from 0.
     *
     * @param { int | Resource | undefined | Bindable<int> | Bindable<Resource> } numCount
     *     the serial number of the select item.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selected(numCount: int | Resource | undefined | Bindable<int> | Bindable<Resource>): this;
    /**
     * Sets the text display of the select button itself.
     *
     * @param { ResourceStr | undefined | Bindable<string> | Bindable<Resource> } resStr
     * the text display of the select button itself.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default value(resStr: ResourceStr | undefined | Bindable<string> | Bindable<Resource>): this;
    /**
     * Sets the text properties of the select button itself.
     *
     * @param { Font | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default font(value: Font | undefined): this;
    /**
     * Sets the text color of the select button itself.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * Sets the background color of the selected items in the select.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedOptionBgColor(value: ResourceColor | undefined): this;
    /**
     * Sets the text style of the selected items in the select.
     *
     * @param { Font | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedOptionFont(value: Font | undefined): this;
    /**
     * Sets the text color of the selected item in the select.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedOptionFontColor(value: ResourceColor | undefined): this;
    /**
     * Sets the background color of the select item.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionBgColor(value: ResourceColor | undefined): this;
    /**
     * Sets the text style for select items.
     *
     * @param { Font | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionFont(value: Font | undefined): this;
    /**
     * Sets the text color for select items.
     *
     * @param { ResourceColor | undefined } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionFontColor(value: ResourceColor | undefined): this;
    /**
     * Callback for selecting an item from the select.
     *
     * @param { OnSelectCallback | undefined } callback
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default onSelect(callback: OnSelectCallback | undefined): this;
    /**
     * Set the space for text and icon in select
     *
     * @param { Length | undefined } value - indicates the length of the space
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default space(value: Length | undefined): this;
    /**
     * Set the layout direction for text and arrow in select
     *
     * @param { ArrowPosition | undefined } value - indicates the arrow position in the select
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default arrowPosition(value: ArrowPosition | undefined): this;
    /**
     * Set the alignment between select and menu.
     *
     * @param { MenuAlignType | undefined } alignType - The type of alignment between select and menu.
     * @param { Offset | undefined } [offset] - The offset between select and menu.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default menuAlign(alignType: MenuAlignType | undefined, offset?: Offset | undefined): this;
    /**
     * Set the width of each option and set whether the option width fit the trigger.
     *
     * @param { Dimension | OptionWidthMode | undefined } value
     * The length of option width and decide option width to fit trigger or content.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionWidth(value: Dimension | OptionWidthMode | undefined): this;
    /**
     * Set the height of each option.
     *
     * @param { Dimension | undefined } value - The length of option height.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionHeight(value: Dimension | undefined): this;
    /**
     * set the menu's background color
     *
     * @param { ResourceColor | undefined } value - The backgroundColor of menu.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default menuBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * set menu background blur Style
     *
     * @param { BlurStyle | undefined } value - The BackgroundBlurStyle of menu.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default menuBackgroundBlurStyle(value: BlurStyle | undefined): this;
    /**
     * Sets the size for controls within Select Component.
     *
     * @param { ControlSize | undefined } value - control size
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default controlSize(value: ControlSize | undefined): this;
    /**
     * Register a ContentModifier for each menu item.
     *
     * @param { ContentModifier<MenuItemConfiguration> | undefined } modifier
     *     The content modifier of select menu item.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration> | undefined): this;
    /**
     * Set the divider of select.
     *
     * @param { DividerOptions | null | undefined } options Set custom and hidden divider.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default divider(options: DividerOptions | null | undefined): this;
    /**
     * Sets the attribute modifier for the text of select.
     *
     * @param { TextModifier | undefined } modifier Set modifier for the text of select.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default textModifier(modifier: TextModifier | undefined): this;
    /**
     * Sets the attribute modifier for the arrow symbol of select.
     *
     * @param { SymbolGlyphModifier | undefined } modifier Set modifier for the arrow symbol of select.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default arrowModifier(modifier: SymbolGlyphModifier | undefined): this;
    /**
     * Sets the attribute modifier for the text of each option.
     *
     * @param { TextModifier | undefined } modifier Set modifier for the text of each option.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default optionTextModifier(modifier: TextModifier | undefined): this;
    /**
     * Sets the attribute modifier for the text of selected option.
     *
     * @param { TextModifier | undefined } modifier Set modifier for the text of selected option.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default selectedOptionTextModifier(modifier: TextModifier | undefined): this;
    /**
     * Set the divider style of option
     *
     * @param { DividerStyleOptions | undefined } style
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default dividerStyle(style: DividerStyleOptions | undefined): this;
    /**
     * Set the select menu avoidance mode
     *
     * @param { AvoidanceMode | undefined } mode - Enumeration value of the avoidance mode
     * @returns { SelectAttribute } Returns the chained object of Select component attributes
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default avoidance(mode: AvoidanceMode | undefined): this;
    /**
     * Sets the outline of menu.
     *
     * @param { MenuOutlineOptions | undefined } outline Set the outline of menu.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default menuOutline(outline: MenuOutlineOptions | undefined): this;
    /**
     * Sets whether to display menu in the sub window.
     *
     * Device Behavior Differences:Setting to display in sub windows is only supported on 2-in-1 devices.
     *
     * @param { boolean | undefined } showInSubWindow - Set whether the Select menu is displayed in the sub window.
     *     true means the Select menu is displayed in the sub window, and this setting is only takes effect on 2-in-1 devices.
     *     false means the select menu is not displayed in the sub window.
     *     <br>Default value:2-in-1 device is true, other devices are false.
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default showInSubWindow(showInSubWindow: boolean | undefined): this;
    /**
    * Set whether to display the default selected icon.
    *
    * @param { boolean | undefined } show - Set whether to display the default selection icon.
    *     true means display the default selected icon
    *     false or undefined means do not display the default selected icon, instead indicate selection by
    *     highlighting the background color.
    *     <br> show is set to true, if the background color of the selected option is set using
    *     selectedOptionBgColor, both the background color of the selected item and the default
    *     selection icon will be displayed. If the background color of the selected option is not set
    *     using selectedOptionBgColor, the background color will1 not be highlighted, and only the default
    *     selection icon will be displayed.
    * @returns { SelectAttribute } - the attribute of the select.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default showDefaultSelectedIcon(show:boolean | undefined): this
    /**
     * Set the attribute modifier of select.
     *
     * @param { AttributeModifier<SelectAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     The attribute modifier of select.
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(
        modifier: AttributeModifier<SelectAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Determine the mode of select menu how to avoid keyboard.
     *
     * No avoiding by default.
     *
     * @param { MenuKeyboardAvoidMode | undefined } mode - How to avoid keyboard.
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default keyboardAvoidMode(mode: MenuKeyboardAvoidMode | undefined): this;
    /**
     * Defines the minimum distance between select menu and keyboard.
     *
     * @param { LengthMetrics | undefined } distance - The minimum avoiding distance.
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default minKeyboardAvoidDistance(distance: LengthMetrics | undefined): this;
    /**
     * Set system-styled materials for select's menu. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of select's menu.
     *
     * Device Behavior Differences:The effect of the same material may vary across different devices depending on
     * their computing power.
     *
     * @param { SystemUiMaterial | undefined } material - The select's menu material, undefined means 
     *     retaining the original visual style of the select's menu.
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default menuSystemMaterial(material: SystemUiMaterial | undefined): this;
}
/**
 * MenuItemConfiguration used by menu item content modifier.
 *
 * @extends CommonConfiguration<MenuItemConfiguration>
 * @interface MenuItemConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration> {
    /**
     * Indicates the text of this menu item.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * Indicates the icon of this menu item.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Indicates the symbol icon of this menu item.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * Indicates whether this menu item is selected or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    selected: boolean;
    /**
     * Indicates the index of the menu item.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    index: int;
    /**
     * Select this menu item.
     *
     * @param { int } index - The value of menu item index.
     * @param { string } value - The value of menu item text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    triggerSelect(index: int, value: string): void;
}
/**
 * Defines Select Component.
 *
 * @param { Array<SelectOptions> } options - the options of Select.
 * @param { CustomBuilder } [content_] - container
 * @returns { SelectAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Select(
    options: Array<SelectOption>,
    content_?: CustomBuilder,
): SelectAttribute
