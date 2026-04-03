'use static'
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
 * @kit ArkUI
 */
import { Theme, CustomTheme } from './@ohos.arkui.theme';
import { Component, CustomDialog } from '@ohos.arkui.component';
import { ResourceStr, ResourceColor, Padding, LocalizedPadding, SizeOptions, TextAlign } from '@ohos.arkui.component';
import { ButtonStyleMode, ButtonRole } from '@ohos.arkui.component';
import { PixelMap, ThemeColorMode, CustomPopupOptions } from '@ohos.arkui.component';
import { PropRef, Link, Require } from '@ohos.arkui.stateManagement';
import { Callback } from './@ohos.base';
import { CustomDialogController } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
import { SheetInfo } from '@ohos.arkui.component';
/**
 * Declare ButtonOptions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ButtonOptions {
  /**
   * Sets the Display Content of a Button.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * Sets the Button Callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * Sets the background color of a button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public background?: ResourceColor;
  /**
   * Sets the Button Text Color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public fontColor?: ResourceColor;
  /**
   * Describes the Button style.
   *
   * @type { ?ButtonStyleMode }
   * @default ButtonStyleMode.TEXTUAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public buttonStyle?: ButtonStyleMode;
  /**
   * Describes the Button role.
   *
   * @type { ?ButtonRole }
   * @default ButtonRole.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public role?: ButtonRole;
  /**
   * Set the default focus of a button.
   *
   * @type { ?boolean }
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public defaultFocus?: boolean;
  /**
   * Set the alignment mode for the button label.
   *
   * @type { ?TextAlign }
   * @default { TextAlign.Start }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  public textAlign?: TextAlign;
}
/**
 * Declare CustomDialog TipsDialog
 * @struct { TipsDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct TipsDialog {
  /**
   * Sets the TipsDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the TipsDialog imageRes.
   *
   * @type { ResourceStr | PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageRes: ResourceStr | PixelMap;
  /**
   * Sets the TipsDialog image size.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageSize?: SizeOptions;
  /**
   * Sets the TipsDialog title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title?: ResourceStr;
  /**
   * Sets the TipsDialog content.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * Sets the TipsDialog checkbox tips.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkTips?: ResourceStr;
  /**
   * Sets the TipsDialog checkbox check state.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef isChecked?: boolean;
  /**
   * Sets the TipsDialog CheckBox Callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkAction?: (isChecked: boolean) => void;
  /**
   * Sets the TipsDialog primary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the TipsDialog secondary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the TipsDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * Sets the TipsDialog CheckBox Callback.
   *
   * @type { ?Callback<boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCheckedChange?: Callback<boolean>;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare CustomDialog SelectDialog
 * @struct { SelectDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct SelectDialog {
  /**
   * Sets the SelectDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the SelectDialog title.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * Sets the SelectDialog content.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * Sets the SelectDialog selected index.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIndex?: int;
  /**
   * Sets the SelectDialog confirm button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  confirm?: ButtonOptions;
  /**
   * Sets the SelectDialog sheets.
   *
   * @type { Array<SheetInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radioContent: Array<SheetInfo>;
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the SelectDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare CustomDialog ConfirmDialog
 * @struct { ConfirmDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct ConfirmDialog {
  /**
   * Sets the ConfirmDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the ConfirmDialog title.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title: ResourceStr;
  /**
   * Sets the ConfirmDialog content.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * Sets the ConfirmDialog checkbox tips.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  checkTips?: ResourceStr;
  /**
   * Sets the ConfirmDialog checkbox state.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef isChecked?: boolean;
  /**
   * Sets the ConfirmDialog primary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the ConfirmDialog secondary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the ConfirmDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * Sets the ConfirmDialog CheckBox Callback.
   *
   * @type { ?Callback<boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCheckedChange?: Callback<boolean>;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare CustomDialog AlertDialog
 * @struct { AlertDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct AlertDialog {
  /**
   * Sets the AlertDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the AlertDialog title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * Sets the AlertDialog secondary title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * Sets the AlertDialog content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ResourceStr;
  /**
   * Sets the AlertDialog primary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the AlertDialog secondary button.
   *
   * @type { ?ButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryButton?: ButtonOptions;
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the AlertDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare CustomDialog LoadingDialog
 * @struct { LoadingDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct LoadingDialog {
  /**
   * Sets the LoadingDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Controller: CustomDialogController;
  /**
   * Sets the LoadingDialog content.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: ResourceStr;
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the LoadingDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare custom content dialog
 * @struct { CustomContentDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@CustomDialog
export declare struct CustomContentDialog {
  /**
   * Sets the CustomContentDialog Controller.
   *
   * @type { CustomDialogController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * Sets the CustomContentDialog title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * Sets the CustomContentDialog secondary title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * Sets the CustomContentDialog content.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  contentBuilder: () => void;
  /**
   * Sets the CustomContentDialog content area padding.
   *
   * @type { ?Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentAreaPadding?: Padding;
  /**
   * Sets the CustomContentDialog content area localized padding.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  localizedContentAreaPadding?: LocalizedPadding;
  /**
   * Sets the CustomContentDialog buttons.
   *
   * @type { ?ButtonOptions[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttons?: ButtonOptions[];
  /**
   * Custom Theme.
   *
   * @type { ?(Theme | CustomTheme) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: Theme | CustomTheme;
  /**
   * Sets the CustomContentDialog dark or light Mode.
   *
   * @type { ?ThemeColorMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  themeColorMode?: ThemeColorMode;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Declare struct PopoverDialog
 * @struct { PopoverDialog }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct PopoverDialog {
  /**
   * Sets the PopoverDialog Visible Status.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Link visible: boolean;
  /**
   * Sets the PopoverDialog options.
   *
   * @type { PopoverOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require @PropRef
  popover: PopoverOptions;
  /**
   * Sets the targetBuilder content.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require @BuilderParam
  targetBuilder: () => void;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder build(): void;
}
/**
 * Defines PopoverDialog Options
 *
 * @extends CustomPopupOptions
 * @typedef PopoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PopoverOptions extends CustomPopupOptions {
}
