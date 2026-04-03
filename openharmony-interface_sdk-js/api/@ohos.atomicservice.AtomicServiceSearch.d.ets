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
 * @file This section describes the interfaces used by AtomicServiceSearch
 * @kit ArkUI
 */
import { OperationOption } from '@ohos.arkui.advanced.SubHeader';
/**
 * Callback when the Select option is clicked.
 *
 * @typedef { function } OnSelectCallback
 * @param { number } index - Indicates the index of the selected item.
 * @param { string } [selectValue] - Indicates the value of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnSelectCallback = (index: number, selectValue: string) => void;
/**
 * Callback when text is pasted into the search box.
 *
 * @typedef { function } OnPasteCallback
 * @param { string } pasteValue - Indicates the text content to be pasted.
 * @param { PasteEvent } event - Indicates a user-defined paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnPasteCallback = (pasteValue: string, event: PasteEvent) => void;
/**
 * Callback when the position of the cursor entered in the search box changes.
 *
 * @typedef { function } OnTextSelectionChangeCallback
 * @param { number } selectionStart - Indicates the start position of the text selection area. 
 * @param { number } selectionEnd - Indicates end position of the text selection area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
/**
 * Callback when the content in the search box scrolls.
 *
 * @typedef { function } OnContentScrollCallback
 * @param { number } totalOffsetX - Indicates horizontal coordinate offset of the text in the content area, in px.
 * @param { number } totalOffsetY - Indicates the vertical coordinate offset of the text in the content area, in px. 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
/**
 * Defines the InputFilter parameters.
 *
 * @typedef InputFilterParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface InputFilterParams {
  /**
   * Regular expression.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilterValue: ResourceStr;
  /**
   * If the regular expression matching fails, the filtered content is returned.
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  error?: Callback<string>;
}
/**
 * Defines the SearchButton parameters.
 *
 * @typedef SearchButtonParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchButtonParams {
  /**
   * Indicates the text of the search button.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButtonValue: ResourceStr;
  /**
   * Indicates the fontSize and fontColor of the search button.
   *
   * @type { ?SearchButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: SearchButtonOptions;
}
/**
 * Defines the MenuAlign parameters.
 *
 * @typedef MenuAlignParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface MenuAlignParams {
  /**
   * Indicates the fontSize and fontColor of the search button.
   *
   * @type { MenuAlignType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  alignType: MenuAlignType;
  /**
   * Offset of the drop-down menu relative to the drop-down button.
   * after alignment based on the alignment type.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  offset?: Offset;
}
/**
 * Events and styles supported by the search area.
 *
 * @typedef SearchParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchParams {
  /**
   * Used to identify a unique search component.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchKey?: ResourceStr;
  /**
   * Indicates the background color of a component.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  componentBackgroundColor?: ResourceColor;
  /**
   * Background color when pressed.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  pressedBackgroundColor?: ResourceColor;
  /**
   * Set the search button text, fontSize and fontColor.
   *
   * @type { ?SearchButtonParams }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButton?: SearchButtonParams;
  /**
   * Set the place hold text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderColor?: ResourceColor;
  /**
   * Set the font used for place holder text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderFont?: Font;
  /**
   * Set enter key type of soft keyboard.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textFont?: Font;
  /**
   * Called when the text align is set.
   *
   * @type { ?TextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textAlign?: TextAlign;
  /**
   * Called when the copy option is set.
   *
   * @type { ?CopyOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  copyOptions?: CopyOptions;
  /**
   * Set the search icon style.
   *
   * @type { ?(IconOptions | SymbolGlyphModifier) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchIcon?: IconOptions | SymbolGlyphModifier;
  /**
   * Set the cancel button style.
   *
   * @type { ?IconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  cancelIcon?: IconOptions;
  /**
   * Set the SearchButton fontColor.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * Set the cursor style.
   *
   * @type { ?CaretStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  caretStyle?: CaretStyle;
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableKeyboardOnFocus?: boolean;
  /**
   * Controls whether the selection menu pops up.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  hideSelectionMenu?: boolean;
  /**
   * Called when the search type is set.
   *
   * @type { ?SearchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  type?: SearchType;
  /**
   * Called when the input of maximum text length is set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxLength?: number;
  /**
   * Set enter key type of soft keyboard.
   *
   * @type { ?EnterKeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enterKeyType?: EnterKeyType;
  /**
   * Called when the text decoration of the text is set.
   *
   * @type { ?TextDecorationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  decoration?: TextDecorationOptions;
  /**
   * Called when the distance between text fonts is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  letterSpacing?: number | string | Resource;
  /**
   * Set font feature.
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of search component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontFeature?: ResourceStr;
  /**
   * Define the text selected background color of the text input.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedBackgroundColor?: ResourceColor;
  /**
   * Called when the inputFilter of text is set.
   *
   * @type { ?InputFilterParams }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilter?: InputFilterParams;
  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textIndent?: Dimension;
  /**
   * Called when the minimum font size of the font is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  minFontSize?: number | string | Resource;
  /**
   * Called when the maximum font size of the font is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxFontSize?: number | string | Resource;
  /**
   * Set the custom text menu.
   *
   * @type { ?EditMenuOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  editMenuOptions?: EditMenuOptions;
  /**
   * Define the preview text mode of the text input.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enablePreviewText?: boolean;
  /**
   * Enable or disable haptic feedback.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableHapticFeedback?: boolean;
  /**
   * Call the function when clicked the search button.
   *
   * @type { ?(Callback<string> | SearchSubmitCallback) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSubmit?: Callback<string> | SearchSubmitCallback;
  /**
   * Call the function when editing the input text.
   *
   * @type { ?EditableTextOnChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * Called when using the Clipboard menu.
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCopy?: Callback<string>;
  /**
   * Called when using the Clipboard menu.
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCut?: Callback<string>;
  /**
   * Called when using the Clipboard menu.
   *
   * @type { ?OnPasteCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onPaste?: OnPasteCallback;
  /**
   * Called when the text selection changes.
   *
   * @type { ?OnTextSelectionChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onTextSelectionChange?: OnTextSelectionChangeCallback;
  /**
   * Called when the content scrolls.
   *
   * @type { ?OnContentScrollCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onContentScroll?: OnContentScrollCallback;
  /**
   * Called when judging whether the text editing change finished.
   *
   * @type { ?Callback<boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onEditChange?: Callback<boolean>;
  /**
   * Get text value information when about to input.
   *
   * @type { ?Callback<InsertValue, boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * Get text value information when completed input.
   *
   * @type { ?Callback<InsertValue> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * Get text value information when about to delete.
   *
   * @type { ?Callback<DeleteValue, boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * Get text value information when the deletion has been completed.
   *
   * @type { ?Callback<DeleteValue> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidDelete?: Callback<DeleteValue>;
}
/**
 * Contents, events, and styles of the select area.
 *
 * @typedef SelectParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SelectParams {
  /**
   * SubOption array of the select.
   *
   * @type { ?Array<SelectOption> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: Array<SelectOption>;
  /**
   * The default selected index.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selected?: number;
  /**
   * The default text value.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectValue?: ResourceStr;
  /**
   * Callback when the select is selected.
   *
   * @type { ?OnSelectCallback }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSelect?: OnSelectCallback;
  /**
   * Register a ContentModifier for each menu item.
   *
   * @type { ?ContentModifier<MenuItemConfiguration> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuItemContentModifier?: ContentModifier<MenuItemConfiguration>;
  /**
   * Sets the divider of select.
   *
   * @type { ?(Optional<DividerOptions> | null) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  divider?: Optional<DividerOptions> | null;
  /**
   * Sets the text properties of the select button itself.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  font?: Font;
  /**
   * Sets the text color of the select button itself.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * Sets the background color of the selected items in the select.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionBgColor?: ResourceColor;
  /**
   * Sets the text style of the selected items in the select.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFont?: Font;
  /**
   * Sets the text color of the selected item in the select.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFontColor?: ResourceColor;
  /**
   * Sets the background color of the select item.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionBgColor?: ResourceColor;
  /**
   * Sets the text style for select items.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFont?: Font;
  /**
   * Sets the text color for select items.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFontColor?: ResourceColor;
  /**
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @type { ?(Dimension | OptionWidthMode) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionWidth?: Dimension | OptionWidthMode;
  /**
   * Set the height of each option.
   *
   * @type { ?Dimension }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionHeight?: Dimension;
  /**
   * Set the space for text and icon in select.
   *
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  space?: Length;
  /**
   * Set the layout direction for text and arrow in select.
   *
   * @type { ?ArrowPosition }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  arrowPosition?: ArrowPosition;
  /**
   * Set the alignment between select and menu.
   *
   * @type { ?MenuAlignParams }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuAlign?: MenuAlignParams;
  /**
   * Set the menu's background color.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundColor?: ResourceColor;
  /**
   * Set menu background blur Style.
   *
   * @type { ?BlurStyle }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundBlurStyle?: BlurStyle;
}
/**
 * Function settings in the selection area (right).
 *
 * @typedef OperationParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface OperationParams {
  /**
   * Function bits attached to the search area (right).
   *
   * @type { ?OperationOption }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  auxiliaryItem?: OperationOption;
  /**
   * Function bits independent of search area (right).
   *
   * @type { ?OperationOption }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  independentItem?: OperationOption;
}
/**
 * Defines AtomicServiceSearch.
 *
 * @struct {AtomicServiceSearch}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * Sets the search text content that is currently displayed.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  value?: ResourceStr;
  /**
   * Indicates default prompt text displayed in the search box.
   * The default value is Search, which supports globalization.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  placeholder?: ResourceStr;
  /**
   * Events and styles supported by the search area.
   *
   * @type { ?SearchParams }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  search?: SearchParams;
  /**
   * Contents, events, and styles of the select area.
   *
   * @type { ?SelectParams }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  select?: SelectParams;
  /**
   * Function settings in the selection area (right).
   *
   * @type { ?OperationParams }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  operation?: OperationParams;
  /**
   * Set the Search component controller.
   *
   * @type { ?SearchController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  controller?: SearchController;
}