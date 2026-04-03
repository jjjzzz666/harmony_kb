'use static';
/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
import font from './@ohos.font';
import mediaQuery from './@ohos.mediaquery';
import type inspector from './@ohos.arkui.inspector';
import type observer from '@ohos.arkui.observer';
import promptAction from './@ohos.promptAction';
import { LevelOrder } from './@ohos.promptAction';
import router from './@ohos.router';
import type componentUtils from './@ohos.arkui.componentUtils';
import { SimpleAnimatorOptions } from './@ohos.animator';
import type { Callback, AsyncCallback } from './@ohos.base';
import { MeasureOptions } from './@ohos.measure';
import type componentSnapshot from './@ohos.arkui.componentSnapshot';
import type dragController from './@ohos.arkui.dragController';
import image from './@ohos.multimedia.image';
import type common from './@ohos.app.ability.common';
import type pointer from './@ohos.multimodalInput.pointer';
import { ComponentContent, FrameNode, Frame } from '@ohos.arkui.node';
import { ComponentContentBase } from 'arkui.ComponentContent';
import { AnimatorOptions, AnimatorResult } from './@ohos.animator';
import { ClickEvent, ExpectedFrameRateRange, DragItemInfo, AnimateParam, KeyframeAnimateParam, KeyframeState,
  SheetOptions, PopupCommonOptions, MenuOptions, KeyEvent,
  ContentCoverOptions } from '@ohos.arkui.component';
import { CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';
import { GestureEvent, GestureRecognizer } from '@ohos.arkui.component';
import { ResourceStr, SizeOptions, VoidCallback } from '@ohos.arkui.component';
import { Nullable, Color, FontStyle, WidthBreakpoint, HeightBreakpoint, PixelRoundMode } from '@ohos.arkui.component';
import { TimePickerDialogOptions } from '@ohos.arkui.component';
import { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, AlertDialogParamWithOptions } from '@ohos.arkui.component';
import { ActionSheetOptions } from '@ohos.arkui.component';
import { TextPickerDialogOptions, TextPickerDialogOptionsExt } from '@ohos.arkui.component';
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { DatePickerDialogOptions } from '@ohos.arkui.component';
import { TabsController } from '@ohos.arkui.component';
import { Scroller } from '@ohos.arkui.component';
import { KeyProcessingMode } from '@ohos.arkui.component';
import { TextMenuOptions, TextLayoutOptions, StyledString, Paragraph } from '@ohos.arkui.component';
/**
 * class Font
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Font {
  /**
   * Register a customized font in the FontManager.
   *
   * @param { font.FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  registerFont(options: font.FontOptions): void;

  /**
   * Gets a list of fonts supported by system.
   * @returns { Array<string> } A list of font names
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getSystemFontList(): Array<string>;

  /**
   * Get font details according to the font name.
   * @param { string } fontName - font name
   * @returns { font.FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFontByName(fontName: string): font.FontInfo;
}

/**
 * class MediaQuery
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class MediaQuery {
  /**
   * Sets the media query criteria and returns the corresponding listening handle
   *
   * @param { string } condition - media conditions
   * @returns { mediaQuery.MediaQueryListener } the corresponding listening handle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  matchMediaSync(condition: string): mediaQuery.MediaQueryListener;
}

/**
 * class UIInspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class UIInspector {
  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   * @param { string } id - component id.
   * @returns { inspector.ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createComponentObserver(id: string): inspector.ComponentObserver;
  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle.
   *
   * @param { string | int } id - component id or uniqueId of the component.
   * @returns { inspector.ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createComponentObserver(id: string | int): inspector.ComponentObserver;
}

/**
 * class Router
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Router {
  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of pushUrl.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   *
   * @param { router.RouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of pushUrl.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   * not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   * not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   * not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   * system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   * not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Returns to the previous page or a specified page.
   *
   * @param { router.RouterOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  back(options?: router.RouterOptions): void;

  /**
   * Returns to the specified page.
   *
   * @param { int } index - index of page.
   * @param { Object } [params] - params of page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  back(index: int, params?: Object): void;

  /**
   * Clears all historical pages and retains only the current page at the top of the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   *
   * @returns { string } Number of pages in the stack. The maximum value is 32.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getLength(): string;

  /**
   * Obtains the number of pages in the current stack.
   *
   * @returns { int } Number of pages in the stack. The maximum value is 32.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStackSize(): int;

  /**
   * Obtains information about the current page state.
   *
   * @returns { router.RouterState } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getState(): router.RouterState;

  /**
   * Obtains page information by index.
   *
   * @param { int } index - Index of page.
   * @returns { router.RouterState | undefined } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getStateByIndex(index: int): router.RouterState | undefined;

  /**
   * Obtains page information by url.
   *
   * @param { string } url - URL of page.
   * @returns { Array<router.RouterState> } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getStateByUrl(url: string): Array<router.RouterState>;

  /**
   * Pop up alert dialog to ask whether to back.
   *
   * @param { router.EnableAlertOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showAlertBeforeBackPage(options: router.EnableAlertOptions): void;

  /**
   * Hide alert before back page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  hideAlertBeforeBackPage(): void;

  /**
   * Obtains information about the current page params.
   *
   * @returns { Object } Page params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParams(): Object;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of pushNamedRoute.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { router.NamedRouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of pushNamedRoute.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of replaceNamedRoute.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { router.NamedRouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not
   * string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of replaceNamedRoute.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not
   * string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   * standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { router.NamedRouterOptions } options - Options.
   * @param { router.RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   * system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;
}

/**
 * Defines the custom builder with id.
 *
 * @typedef { function } CustomBuilderWithId
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
declare type CustomBuilderWithId = (id: int) => void;

/**
 * Defines the target info.
 *
 * @interface TargetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface TargetInfo {
  /**
   * ID of target node.
   *
   * @type { string | int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  id: string | int;

  /**
   * Unique ID that generated by framework. This ID used to constrain range of target.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  componentId?: int;
}

/**
 * class PromptAction
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PromptAction {
  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showToast(options: promptAction.ShowToastOptions): void;

  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Options.
   * @returns { Promise<int> } return the toast id that will be used by closeToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openToast(options: promptAction.ShowToastOptions): Promise<int>;

  /**
   * Close the notification text.
   *
   * @param { int } toastId - the toast id that returned by openToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103401 - Cannot find the toast.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeToast(toastId: int): void;

  /**
   * Displays the dialog box.
   *
   * @param { promptAction.ShowDialogOptions } options - Options.
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showDialog(options: promptAction.ShowDialogOptions,
    callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * Displays the dialog box.
   *
   * @param { promptAction.ShowDialogOptions } options - Options.
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * Displays the menu.
   *
   * @param { promptAction.ActionMenuOptions } options - Options.
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showActionMenu(options: promptAction.ActionMenuOptions,
    callback: AsyncCallback<promptAction.ActionMenuSuccessResponse>): void;

  /**
   * Displays the menu.
   *
   * @param { promptAction.ActionMenuOptions } options - Options.
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>;

  /**
   * Open the custom dialog with frameNode.
   *
   * @param { ComponentContent<T> } dialogContent - the content of custom dialog.
   * @param { promptAction.BaseDialogOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialog<T extends Object>(dialogContent: ComponentContent<T>,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Open the custom dialog with frameNode and controller.
   *
   * @param { ComponentContent<T> } dialogContent - the content of custom dialog.
   * @param { promptAction.DialogController } controller - Dialog controller.
   * @param { promptAction.BaseDialogOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>,
    controller: promptAction.DialogController,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Update the custom dialog with frameNode.
   *
   * @param { ComponentContent<T> } dialogContent - the content of custom dialog.
   * @param { promptAction.BaseDialogOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateCustomDialog<T extends Object>(dialogContent: ComponentContent<T>,
    options: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Close the custom dialog with frameNode.
   *
   * @param { ComponentContent<T> } dialogContent - the content of custom dialog.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeCustomDialog<T extends Object>(dialogContent: ComponentContent<T>): Promise<void>;

  /**
   * Open the custom dialog.
   *
   * @param { promptAction.CustomDialogOptions } options - Options.
   * @returns { Promise<int> } return the dialog id that will be used by closeCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialog(options: promptAction.CustomDialogOptions): Promise<int>;

  /**
   * Present the custom dialog with controller.
   *
   * @param { CustomBuilder | CustomBuilderT<int> } builder - Dialog builder.
   * @param { promptAction.DialogController } [controller] - Dialog controller.
   * @param { promptAction.DialogOptions } [options] - Options.
   * @returns { Promise<int> } return the dialog id that will be used by closeCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  presentCustomDialog(builder: CustomBuilder | CustomBuilderT<int>, controller?: promptAction.DialogController,
    options?: promptAction.DialogOptions): Promise<int>;

  /**
   * Close the custom dialog.
   *
   * @param { int } dialogId - the dialog id that returned by openCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeCustomDialog(dialogId: int): void;

  /**
   * Get order value of top dialog.
   *
   * @returns { LevelOrder | undefined } the display order, or undefined if there is no dialog.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getTopOrder(): LevelOrder | undefined;

  /**
   * Get order value of bottom dialog.
   *
   * @returns { LevelOrder | undefined } the display order, or undefined if there is no dialog.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getBottomOrder(): LevelOrder | undefined;

  /**
   * Open popup with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of popup.
   * @param { TargetInfo } target - The target of popup.
   * @param { PopupCommonOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The content is incorrect.
   * @throws { BusinessError } 103302 - The content already exists.
   * @throws { BusinessError } 103304 - The target does not exist.
   * @throws { BusinessError } 103305 - The target node is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo,
    options?: PopupCommonOptions): Promise<void>;

  /**
   * Update popup with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of popup.
   * @param { PopupCommonOptions } options - Options.
   * @param { boolean } partialUpdate - If true, only the specified properties in the options are updated,
   *                                    otherwise the rest of the properties are overwritten with the default values.
   *                                    Default value is false.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions,
    partialUpdate?: boolean): Promise<void>;

  /**
   * Close popup with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of popup.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closePopup<T extends Object>(content: ComponentContent<T>): Promise<void>;

  /**
   * Open menu with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of menu.
   * @param { TargetInfo } target - The target of menu.
   * @param { MenuOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The content is incorrect.
   * @throws { BusinessError } 103302 - The content already exists.
   * @throws { BusinessError } 103304 - The target does not exist.
   * @throws { BusinessError } 103305 - The target node is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openMenu<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: MenuOptions): Promise<void>;

  /**
   * Update menu with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of menu.
   * @param { MenuOptions } options - Options.
   * @param { boolean } partialUpdate - If true, only the specified properties in the MenuOptions are updated,
   *                                    otherwise the rest of the properties are overwritten with the default values.
   *                                    Default value is false.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions,
    partialUpdate?: boolean): Promise<void>;

  /**
   * Close menu with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of menu.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeMenu<T extends Object>(content: ComponentContent<T>): Promise<void>;
}

/**
 * Defines the callback type used in UIObserver watch click event.
 * The value of event indicates the information of ClickEvent.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } ClickEventListenerCallback
 * @param { ClickEvent } event - the information of ClickEvent
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;
/**
 * Defines the callback type used in UIObserver watch pan event.
 * The value of event indicates the information of pan event.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } PanListenerCallback
 * @param { GestureEvent } event - the information of pan event
 * @param { GestureRecognizer } current - the information of panRecognizer
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;
/**
 * Defines the callback type used in UIObserver watch gesture.
 * The value of event indicates the information of gesture.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } GestureEventListenerCallback
 * @param { GestureEvent } event - the information of GestureEvent
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;
/**
 * Defines the PageInfo type.
 * The value of routerPageInfo indicates the information of the router page, or undefined if the
 * frameNode does not have router page information. And the value of navDestinationInfo indicates
 * the information of the navDestination, or undefined if the frameNode does not have navDestination
 * information.
 *
 * @interface PageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface PageInfo {
  /**
   * the property of router page information.
   *
   * @type { ?observer.RouterPageInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  routerPageInfo?: observer.RouterPageInfo;

  /**
   * the property of navDestination information.
   *
   * @type { ?observer.NavDestinationInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  navDestinationInfo?: observer.NavDestinationInfo;
}

/**
 * the property of OverlayManager.
 *
 * @interface OverlayManagerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface OverlayManagerOptions {
  /**
   * the render property of overlay node.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  renderRootOverlay?: boolean;

  /**
   * Set whether support backPressed event or not.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  enableBackPressedEvent?: boolean;
}

/**
 * Defines the type can be used for identiting the node, for the string type, it's the inspector id
 * set through .id attribute, and for the int type, it's the unique ID got from the FrameNode by
 * getUniqueID method.
 *
 * @typedef { string | int } NodeIdentity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type NodeIdentity = string | int;

/**
 * An enumeration type that identifies the current node's rendering state. The UI components used in
 * the application are automatically managed by the system and controlled for participation in graphical
 * rendering by either mounting them onto the render tree or removing them from it. Only nodes that
 * participate in graphical rendering have the potential to be displayed. However, participating in
 * rendering does not equal to the node's visibility, as there may be many occlusion scenarios in the
 * actual implementation of the application. Nevertheless, if a node does not participate in rendering,
 * it will definitely not be visible.
 *
 * @enum { number } NodeRenderState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export const enum NodeRenderState {
  /**
   * The node has been mount on to the render tree and will soon be rendered. Generally, after the next frame,
   * the user will be able to see this node. However, this is not always the case, as in reality, the node may be
   * occluded by other nodes, meaning it is rendered but not be visible.
   * When registering a listener for the render state using the UIObserver interface, the system will immediately
   * trigger the callback once, and the state notified at this time typically represents the current state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ABOUT_TO_RENDER_IN = 0,

  /**
   * The node has been removed from the render tree and will no longer be rendered shortly. Generally speaking,
   * after the next frame, the user will no longer be able to see this node.
   * When registering a listener for the render state using the UIObserver interface, the system will immediately
   * trigger the callback once, and the state notified at this time typically represents the current state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ABOUT_TO_RENDER_OUT = 1
}

/**
 * Defines the callback type used in UIObserver to monitor one specific node's render state.
 *
 * @typedef { function } NodeRenderStateChangeCallback
 * @param { NodeRenderState } state - the node's render state
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * This is an enumeration type representing the gesture callback phases to be triggered, corresponding to
 * the action callbacks defined in gesture.d.ts. Therefore, not all gesture types have all the following
 * phase definitions. For example, SwipeGesture only has one callback named onAction, so it also only has
 * one enumeration type, which is WILL_START.
 *
 * @enum { number } GestureActionPhase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export const enum GestureActionPhase {
  /**
   * The gesture has been successfully recognized by the system, and the action-start/action callback will be
   * executed immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WILL_START = 0,

  /**
   * This indicates the gesture has been determined to be an end, which usually happens when the user lifts their
   * fingers, ending the entire interaction, and the action-end callback will be executed immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WILL_END = 1
}

/**
 * This is an enumeration type indicating what kind of gesture you want to monitor for.
 *
 * @enum { number } GestureListenerType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export const enum GestureListenerType {
  /**
   * The tap gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  TAP = 0,

  /**
   * The long press gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  LONG_PRESS = 1,

  /**
   * The pan gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  PAN = 2,

  /**
   * The pinch gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  PINCH = 3,

  /**
   * The swipe gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SWIPE = 4,

  /**
   * The rotation gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ROTATION = 5
}

/**
 * The information when one gesture specific callback is triggered.
 *
 * @interface GestureTriggerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface GestureTriggerInfo {
  /**
   * The gesture event object.
   *
   * @type { GestureEvent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  event: GestureEvent;

  /**
   * The gesture recognizer object. You can obtain the detailed information of the gesture from it,
   * but please do not keep this object locally, as it might be unavailable when the node is released.
   *
   * @type { GestureRecognizer }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  current: GestureRecognizer;

  /**
   * The gesture action callback phase.
   *
   * @type { GestureActionPhase }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  currentPhase: GestureActionPhase;

  /**
   * The node which the gesture is being triggered on.
   *
   * @type { ?FrameNode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  node?: FrameNode;
}

/**
 * The observer options for global gesture listener.
 *
 * @interface GestureObserverConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface GestureObserverConfigs {
  /**
   * The gesture callback phases want to monitor. Only the specific action phases can be notified when the
   * gesture is triggered. If empty array provided, the register will has no any effect.
   *
   * @type { Array<GestureActionPhase> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  actionPhases: Array<GestureActionPhase>;
}

/**
 * Defines the callback type used in UIObserver to monitor specific gesture triggered information.
 *
 * @typedef { function } GestureListenerCallback
 * @param { GestureTriggerInfo } info - the gesture details triggered with user interaction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type GestureListenerCallback = (info: GestureTriggerInfo) => void;

/**
 * Register callbacks to observe ArkUI behavior.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class UIObserver {
  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationUpdate(
    options: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationInfo>
    ): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdate()`.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to remove.
   *     If not provided, all callbacks for the given event type and navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationUpdate(
    options: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationInfo>
    ): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationUpdate(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdate()`.
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationUpdate(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { int } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called when
   *     the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationUpdateByUniqueId(navigationUniqueId: int, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdateByUniqueId()`.
   *
   * @param { int } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationUpdateByUniqueId(navigationUniqueId: int, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   * start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onScrollEvent(options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent'} type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
   * callbacks for the given event type and scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offScrollEvent(options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   * start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onScrollEvent(callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onScrollEvent()`.
   *
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
   * callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offScrollEvent(callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the router page in a ui context is updated.
   *
   * @param { Callback<observer.RouterPageInfo> } callback - The callback function to be called
   *     when the router page is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onRouterPageUpdate(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onRouterPageUpdate()`.
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offRouterPageUpdate(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the screen density in a ui context is updated.
   *
   * @param { Callback<observer.DensityInfo> } callback - The callback function to be called when the screen density is
   * updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDensityUpdate(callback: Callback<observer.DensityInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<observer.DensityInfo> } [callback] - The callback function to remove. If not provided, all
   * callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offDensityUpdate(callback?: Callback<observer.DensityInfo>): void;

  /**
   * Registers a callback function to be called when the draw command will be drawn.
   *
   * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onWillDraw(callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   * given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offWillDraw(callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the layout is done.
   *
   * @param { Callback<void> } callback - The callback function to be called when the layout is done.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onDidLayout(callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   * given event type
   *                                                        will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offDidLayout(callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when
   *     the navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationSwitch(callback: Callback<observer.NavDestinationSwitchInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationSwitch()`.
   *
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationSwitch(callback?: Callback<observer.NavDestinationSwitchInfo>): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when the
   *     navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationSwitch(
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationSwitch()`.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationSwitch(
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Registers a callback function to be called when the window size layout breakpoint changes.
   * This method allows observing changes in window size breakpoints which can be used to
   * adapt UI layouts responsively based on window dimensions.
   *
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } callback - The callback function to be
   *     called when the window size layout breakpoint changes. The callback receives a
   *     {@link WindowSizeLayoutBreakpointInfo} object containing the current width and height
   *     breakpoint classifications.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  onWindowSizeLayoutBreakpointChange(callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * Removes a previously registered callback function for window size layout breakpoint changes.
   * If no callback is provided, all callbacks for the specified context will be removed.
   *
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } [callback] - The specific callback function to remove.
   *     If not provided, all callbacks for the given event type and context will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  offWindowSizeLayoutBreakpointChange(callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when the tabContent show or hide.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTabContentUpdate(options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offTabContentUpdate(options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTabContentUpdate(callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offTabContentUpdate(callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when text field's content is changed.
   *
   * @param { Callback<observer.TextChangeEventInfo> } callback - The callback function to be called when
   *     text field's content is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  onTextChange(callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  offTextChange(callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Registers a callback function to be called when text field's content is changed.
   *
   * @param { observer.ObserverOptions } identity - Identity options.
   * @param { Callback<observer.TextChangeEventInfo> } callback - The callback function to be called when the
   *     text field's content is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  onTextChange(identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { observer.ObserverOptions } identity - Identity options.
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  offTextChange(identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Registers a callback to monitor the gesture trigger information.
   *
   * @param { GestureListenerType } type - The type of gesture to monitor.
   * @param { GestureObserverConfigs } option - The options when bind the global listener.
   * @param { GestureListenerCallback } callback - The callback function to be called when any gesture's state
   *     is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void;

  /**
   * Removes a callback function for one gesture listener type.
   *
   * @param { GestureListenerType } type - The type of event to remove the listener for.
   * @param { GestureListenerCallback } [callback] - The callback function to be removed. If not provided,
   *     all callbacks for the given gesture type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { observer.ObserverOptions } config - The options object.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called when when
   *     the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTabChange(config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onTabChange`.
   *
   * @param { observer.ObserverOptions } config - The options object.
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offTabChange(config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called when the tabContent is
   *     showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTabChange(callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onTabChange`.
   *
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offTabChange(callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the swiper content is updated.
   *
   * @param { Callback<SwiperContentInfo> } callback - The callback function to be called
   *     when the content is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with 'onSwiperContentUpdate'.
   *
   * @param { Callback<SwiperContentInfo> } callback - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void;

  /**
   * Registers a callback function to be called when the swiper content is updated.
   *
   * @param { observer.ObserverOptions } config - The options object.
   * @param { Callback<SwiperContentInfo> } callback - The callback function to be called
   *     when the swiper content is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with 'onSwiperContentUpdate'.
   *
   * @param { observer.ObserverOptions } config - The options object.
   * @param { Callback<SwiperContentInfo> } callback - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void;

  /**
   * Registers a callback function to be called when the visible router page's size is changed.
   *
   * @param { Callback<observer.RouterPageInfo> } callback - The callback function to be called
   *     when the visible router page's size is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * Removes a callback function that was previously registered with 'onRouterPageSizeChange()'.
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the visible NavDestination's size is changed.
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the visible NavDestination's size is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with 'onNavDestinationSizeChange()'.
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the size of the visible NavDestination of the navigation
   * with the specified uniqueId changes.
   *
   * @param { int } navigationUniqueId - The uniqueId of the Navigation to which NavDestination belongs.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the visible NavDestination's size is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavDestinationSizeChangeByUniqueId(navigationUniqueId: int, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the specific node's render state changed.
   * This callback will be executed once immediately when the register is successful.
   * [Notes]:
   *  1. Be aware of the limit on the number of nodes:
   *     For performance considerations, the system has imposed a limit on the number of
   *     nodes that can be registered for monitoring in a single UI instance, exception will be thrown
   *     if overmuch. Please use this interface with caution.
   *  2. Understanding scenarios where notifications may not occur:
   *     In general, within container components that have view or page switching functionality,
   *     when a view or page within the screen is moved outside the screen, the components previously
   *     within the screen should be removed from the render tree and should receive a RENDER_OUT
   *     notification. However, this is not always the case, as some scenarios involve views or components
   *     being moved outside the screen's display range without triggering a RENDER_OUT notification.
   *     For example, some components with caching capabilities may affect this behavior, and swiper is one
   *     such component. The cacheCount property of the swiper component allows you to force, via its second
   *     parameter isShow, that even if the current page is moved outside the display range, it remains in the
   *     render tree. This can be useful in scenarios where multiple pages are displayed on the screen simultaneously.
   *     Another example is scrolling components like list or scroll, where their internal content remains in the
   *     render tree even if it is scrolled outside the screen's display range, provided that lazyForEach/Repeat is
   *     not used. As a result, there will be no changes to the render state. Once you understand the principles
   *     behind the triggers for render state changes, these scenarios will become easier to comprehend.
   *
   * @param { NodeIdentity } nodeIdentity - The identity of the target node
   * @param { NodeRenderStateChangeCallback } callback - The callback function executed when the rendering state
   *     of the component node changes.
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onNodeRenderState(nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * Removes a callback function for node render state monitoring.
   *
   * @param { NodeIdentity } nodeIdentity - The identity of the target node
   * @param { NodeRenderStateChangeCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offNodeRenderState(nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void;

  /**
   * Removes a callback function that was previously registered with 'onNavDestinationSizeChangeByUniqueId()'.
   *
   * @param { int } navigationUniqueId - The uniqueId of the Navigation to which NavDestination belongs.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  offNavDestinationSizeChangeByUniqueId(navigationUniqueId: int, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called before clickEvent is called.
   *
   * @param { ClickEventListenerCallback } callback - The callback function to be called
   *     when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onWillClick(callback: ClickEventListenerCallback): void;

  /**
   * Removes a callback function to be called before clickEvent is called.
   *
   * @param { ClickEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offWillClick(callback?: ClickEventListenerCallback): void;

  /**
   * Registers a callback function to be called after clickEvent is called.
   *
   * @param { ClickEventListenerCallback } callback - The callback function to be called
   *     when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onDidClick(callback: ClickEventListenerCallback): void;

  /**
   * Removes a callback function to be called after clickEvent is called.
   *
   * @param { ClickEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offDidClick(callback?: ClickEventListenerCallback): void;

  /**
   * Registers a callback function to be called before tapGesture is called.
   *
   * @param { GestureEventListenerCallback } callback - The callback function to be called
   *     when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onWillTap(callback: GestureEventListenerCallback): void;

  /**
   * Removes a callback function to be called before tapGesture is called.
   *
   * @param { GestureEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offWillTap(callback?: GestureEventListenerCallback): void;

  /**
   * Registers a callback function to be called after tapGesture is called.
   *
   * @param { GestureEventListenerCallback } callback - The callback function to be called
   *     when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onDidTap(callback: GestureEventListenerCallback): void;

  /**
   * Removes a callback function to be called after tapGesture is called.
   *
   * @param { GestureEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offDidTap(callback?: GestureEventListenerCallback): void;

  /**
   * Registers a callback function to be called before panGesture onActionStart is called.
   *
   * @param { PanListenerCallback } callback - The callback function to be called
   *     when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onBeforePanStart(callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called before panGesture onActionStart is called.
   *
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offBeforePanStart(callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called before panGesture onActionEnd is called.
   *
   * @param { PanListenerCallback } callback - The callback function to be called
   *     when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onBeforePanEnd(callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called before panGesture onActionEnd is called.
   *
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offBeforePanEnd(callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called after panGesture onActionStart is called.
   *
   * @param { PanListenerCallback } callback - The callback function to be called
   *     when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onAfterPanStart(callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called after panGesture onActionStart is called.
   *
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offAfterPanStart(callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called after panGesture onActionEnd is called.
   *
   * @param { PanListenerCallback } callback - The callback function to be called
   *     when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onAfterPanEnd(callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called after panGesture onActionEnd is called.
   *
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offAfterPanEnd(callback?: PanListenerCallback): void;
}

/**
 * The information returned when the Swiper content changes.
 *
 * @interface SwiperContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface SwiperContentInfo {
  /**
   * Swiper id, set by the 'id' attribute.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  id: string;

  /**
   * Swiper uniqueId, generated by the system.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  uniqueId: int;

  /**
   * The array of changed SwiperItemInfo.
   *
   * @type { Array<SwiperItemInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  swiperItemInfos: Array<SwiperItemInfo>;
}

/**
 * The information of changed SwiperItem.
 *
 * @interface SwiperContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface SwiperItemInfo {
  /**
   * The uniqueId of SwiperItem.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  uniqueId: int;

  /**
   * The index of SwiperItem.
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  index: int;
}

/**
 * class ComponentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ComponentUtils {
  /**
   * Provide the ability to obtain the coordinates and size of component drawing areas.
   *
   * @param { string } id - ID of the component whose attributes are to be obtained.
   * @returns { componentUtils.ComponentInfo } the object of ComponentInfo.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getRectangleById(id: string): componentUtils.ComponentInfo;
}

/**
 * class OverlayManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class OverlayManager {
  /**
   * Add the ComponentContent to the OverlayManager.
   *
   * @param { ComponentContent<T> } content - The content will be added to the OverlayManager.
   * @param { int } [ index ] - The index at which to add the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  addComponentContent<T>(content: ComponentContent<T>, index?: int): void;

  /**
   * Add the ComponentContent to the OverlayManager with order.
   *
   * @param { ComponentContent<T> } content - The content will be added to the OverlayManager.
   * @param { LevelOrder } [ levelOrder ] - The display order of the ComponentContent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  addComponentContentWithOrder<T>(content: ComponentContent<T>, levelOrder?: LevelOrder): void;

  /**
   * Remove the ComponentContent from the OverlayManager.
   *
   * @param { ComponentContent<T> } content - The content will be removed from the OverlayManager.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  removeComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * Show the ComponentContent.
   *
   * @param { ComponentContent<T> } content - The content will be shown.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * Hide the ComponentContent.
   *
   * @param { ComponentContent<T> } content - The content will be hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  hideComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * Show all ComponentContents on the OverlayManager.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showAllComponentContents(): void;

  /**
   * Hide all ComponentContents on the OverlayManager.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  hideAllComponentContents(): void;
}

/**
 * Provides the method for magnifier capabilities.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class Magnifier {
  /**
   * Bind magnifier to a component.
   *
   * @param { string } id - component id.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bind(id: string): void;

  /**
   * Set the position of the magnified content.
   *
   * @param { double } x - the x position of the magnified content relative to the component.
   *     The unit of x is vp.
   * @param { double } y - the y position of the magnified content relative to the component.
   *     The unit of y is vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  show(x: double, y: double): void;

  /**
   * Unbind the magnifier from its associated component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  unbind(): void;
}

/**
 * interface AtomicServiceBar
 * @interface AtomicServiceBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface AtomicServiceBar {
  /**
   * Set the visibility of the bar, except the icon.
   *
   * @param { boolean } visible - whether this bar is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setVisible(visible: boolean): void;

  /**
   * Set the background color of the bar.
   *
   * @param { Nullable< Color | int | string> } color - the color to set, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setBackgroundColor(color: Nullable< Color | int | string>): void;

  /**
   * Set the title of the bar.
   *
   * @param { string } content - the content of the bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setTitleContent(content: string): void;

  /**
   * Set the font style of the bar's title.
   *
   * @param { FontStyle } font - the font style of the bar's title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setTitleFontStyle(font: FontStyle): void;

  /**
   * Set the color of the icon on the bar.
   *
   * @param { Nullable< Color | int | string> } color - the color to set to icon, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setIconColor(color: Nullable< Color | int | string>): void;

  /**
   * Get size and position of the bar.
   *
   * @returns { Frame } The size and position of bar in vp relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getBarRect(): Frame;
}

/**
 * Represents a dynamic synchronization scene.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DynamicSyncScene {
  /**
   * Sets the FrameRateRange of the DynamicSyncScene.
   *
   * @param { ExpectedFrameRateRange } range - The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setFrameRateRange(range: ExpectedFrameRateRange): void;

  /**
   * Gets the FrameRateRange of the DynamicSyncScene.
   *
   * @returns { ExpectedFrameRateRange } The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFrameRateRange(): ExpectedFrameRateRange;
}

/**
 * Represents a dynamic synchronization scene of Swiper.
 *
 * @extends DynamicSyncScene
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SwiperDynamicSyncScene extends DynamicSyncScene {
  /**
   * Type of the SwiperDynamicSyncSceneType.
   * @type { SwiperDynamicSyncSceneType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly type: SwiperDynamicSyncSceneType;
}

/**
 * Represents a dynamic synchronization scene of Marquee.
 *
 * @extends DynamicSyncScene
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class MarqueeDynamicSyncScene extends DynamicSyncScene {
  /**
   * Type of the MarqueeDynamicSyncSceneType.
   * @type { MarqueeDynamicSyncSceneType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  readonly type: MarqueeDynamicSyncSceneType;
}

/**
 * class DragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DragController {
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo | undefined } custom - Object used for prompts displayed when the object
   * is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<dragController.DragEventParam> } callback - Callback that contains
   * the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo,
    callback: AsyncCallback<dragController.DragEventParam>): void;

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo | undefined } custom - Object used for prompts displayed when the object
   * is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> | null } A Promise with the drag event information. Null will be returned
   *     if the parameters' checking failed or some internal errors occur, for example: the runtime environment is
   *     broken.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam> | null;

  /**
   * Create one drag action object, which can be used for starting drag later or monitoring the drag status after
   * drag started.
   * @param { Array<CustomBuilder | DragItemInfo> | undefined } customArray - Objects used for prompts 
   * displayed when the objects are dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { dragController.DragAction } one drag action object
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createDragAction(customArray: Array<CustomBuilder | DragItemInfo> | undefined,
    dragInfo: dragController.DragInfo): dragController.DragAction;

  /**
   * Get a drag preview object.
   * @returns { dragController.DragPreview } A drag preview object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getDragPreview(): dragController.DragPreview;

  /**
   * Enable drag event strict reporting for drag enter and leave notification in nested situation.
   * For example, the parent and child both register the onDragEnter/onDragLeave events, if this
   * flag is enabled, the parent will be notified with leave event, and the child will notified with
   * enter event at the same time, when user drag action is passing through the parent and enter the
   * scope of the child.
   * Please be noted, the default value of the flag is false, it means, for the same situation, the
   * parent will not receive the leave notification, just the child can get the enter event, which is
   * not fully strict.
   * @param { boolean } enable - Indicating enable drag event strict reporting or not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * Notify the drag start request to specific pending or continue.
   * @param { dragController.DragStartRequestStatus } requestStatus - Status about the drag start behavior.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void;

  /**
   * Cancel the UDMF data sync process by passing in the data key as the identify, can only be used after the drop.
   *
   * @param { string } key - The data key returned by startDataLoading method.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190004 - Operation failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  cancelDataLoading(key: string): void;

  /**
   * Sets whether to enable the disallow badge icon show.
   *
   * Typically, when a component can receive or process data dragged by the user, or when it declares to the
   * system that data should be processed in COPY way by returning DragBehavior.COPY, the system will display
   * a plus sign together with the data number on the upper-left corner of the dragged object; if returning
   * DragBehavior.MOVE to the system to declare that data should be processed in CUT way, the system will only
   * display the data number on the upper-left corner of the dragged object.
   *
   * In some cases, when the system determines or the component explicitly declares that it cannot handle the
   * data that the user is dragging, the system displays a badge icon in the same way as it does for DragBehavior.MOVE.
   * So if you want to show the more clearly status, you can call this method on the UI instance in advance to force
   * the system to display a clear prohibition icon on the upper left corner in such cases, and the user can clearly
   * know that data cannot be dropped here.
   *
   * @param { boolean } enabled - Indicating enable the disallow status showing or not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enableDropDisallowedBadge(enabled: boolean): void;
}

/**
 * class MeasureUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class MeasureUtils {
  /**
   * Obtains the width of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options.
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  measureText(options: MeasureOptions): double;

  /**
   * Obtains the width and height of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  measureTextSize(options: MeasureOptions): SizeOptions;
  /**
   * Get layout info of the styled string.
   *
   * @param { StyledString } styledString - The styled string value.
   * @param { TextLayoutOptions } [options] - The layout options.
   * @returns { Array<Paragraph> } paragraph result
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>;
}

/**
 * class FocusController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class FocusController {
  /**
   * clear focus to the root container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clearFocus(): void;

  /**
   * request focus to the specific component.
   * @param { string } key - the inspector key of the component.
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  requestFocus(key: string): void;

  /**
   * Activate focus style.
   * @param { boolean } isActive - activate/deactivate the focus style.
   * @param { boolean } [autoInactive] - deactivate the focus style when touch event or mouse event triggers,
   * the default value is true.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  activate(isActive: boolean, autoInactive?: boolean): void;

  /**
   * Get whether the focus style is active.
   * @returns { boolean } Whether the focus style is active.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isActive(): boolean;

  /**
   * Set whether to enable autofocus transfer.
   * @param { boolean } isAutoFocusTransfer - A Boolean value that indicates whether autofocus transfer is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * Set the priority of key event processing when component cannot handle the key event..
   * @param { KeyProcessingMode } mode - Key processing mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * Pointer style.
 *
 * @typedef {pointer.PointerStyle} PointerStyle
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * class CursorController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class CursorController {
  /**
   * Restore default cursor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  restoreDefault(): void;
  /**
   * Set cursor style.
   *
   * @param { PointerStyle } value - cursor style enum.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCursor(value: PointerStyle): void;
}

/**
 * class ContextMenuController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ContextMenuController {
  /**
   * Close context menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  close(): void;
}

/**
 * Class FrameCallback
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare abstract class FrameCallback {
  /**
   * Call when a new display frame is being rendered.
   *
   * @param { long } frameTimeInNano - The frame time in nanoseconds.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onFrame(frameTimeInNano: long): void;

  /**
   * Called at the end of the next idle frame. If there is no next frame, will request one automatically.
   *
   * @param { long } timeLeftInNano - The remaining time from the deadline for this frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onIdle(timeLeftInNano: long): void;
}

/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @typedef { common.Context } Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 23 static
 */
export type Context = common.Context;

/**
 * class ComponentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ComponentSnapshot {
  /**
   * Get a component snapshot by component id.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * Get a component snapshot by component id.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get(id: string, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: int, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   * the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createFromBuilder(builder: CustomBuilder, delay?: int,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap | null } The snapshot result in PixelMap format. Null will be returned
   *     if the parameters' checking failed or some internal errors occur, for example: the runtime environment is
   *     broken.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getSync(id: string, options?: componentSnapshot.SnapshotOptions): image.PixelMap | null;

  /**
   * Get a component snapshot by uniqueId.
   *
   * @param { int } uniqueId - The uniqueId of the node, can get through getUniqueId.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getWithUniqueId(uniqueId: int, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { int } uniqueId - The uniqueId of the node, can get through getUniqueId.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getSyncWithUniqueId(uniqueId: int, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * Generate a snapshot from a custom component content.
   *
   * @param { ComponentContent<T> } content - The content to be taken snapshot.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createFromComponent<T extends Object>(content: ComponentContent<T>, delay?: int,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Get a component snapshot by component range.
   *
   * @param { NodeIdentity } start - the start component ID, set by developer through .id attribute or the unique ID
   *    get from FrameNode.
   * @param { NodeIdentity } end - the end component ID, set by developer through.id attribute or the unique ID
   *    get from FrameNode.
   * @param { boolean } isStartRect - indicating the snapshot rect to use, true for using the
   *   rect of the start component, false for using the rect of the end component.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 100001 - Invalid ID detected.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  getWithRange(start: NodeIdentity, end: NodeIdentity, isStartRect: boolean,
    options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;
}

/**
 * Enum of strategy of resolved UIContext.
 * @enum { number } strategy of resolved UIContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum ResolveStrategy {
  /**
   * Get UIContext of calling scope.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CALLING_SCOPE = 0,

  /**
   * Get UIContext of last focused instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAST_FOCUS = 1,

  /**
   * Get UIContext with maximum instanceId.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MAX_INSTANCE_ID = 2,

  /**
   * Get UIContext of unique UI instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNIQUE = 3,

  /**
   * Get UIContext of last foregrounded instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAST_FOREGROUND = 4,

  /**
   * Get UIContext of undefined calling scope.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNDEFINED = 5
}

/**
 * Defines the result of UIContext.resolveUIContext.
 * This class is a subclass of UIContext and additionally provides the strategy used to
 * obtain this UIContext.
 * @extends UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ResolvedUIContext extends UIContext {
  /**
   * Resolving strategy of the UIContext.
   * @type { ResolveStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strategy: ResolveStrategy;
}

/**
 * class UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIContext {
  /**
   * UIContext constructor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  constructor();

  /**
   * Gets the UIContext associated with the current calling scope.
   * @returns { UIContext | undefined } - The UIContext for the current calling scope,
   *     or undefined if no context can be determined from the call stack.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  static getCallingScopeUIContext(): UIContext | undefined;

  /**
   * Gets the UIContext of the last focused UI instance if one exists.
   * @returns { UIContext | undefined } - The UIContext of the last focused UI instance or undefined if no one exists.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  static getLastFocusedUIContext(): UIContext | undefined;

  /**
   * Gets the UIContext of the last foregrounded UI instance if one exists.
   * @returns { UIContext | undefined } - The UIContext of the last foregrounded UI instance or undefined if no one
   *     exists
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  static getLastForegroundUIContext(): UIContext | undefined;

  /**
   * Gets all currently active UIContext instances.
   * @returns { UIContext[] } - An array containing all valid UIContext instances,
   *     returns an empty array if no contexts are available.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 24 static
   */
  static getAllUIContexts(): UIContext[];

  /**
   * Resolves a UIContext using priority strategy.
   *
   * Resolves and returns a UIContext instance following a predefined priority sequence.
   * resolution rules in order:
   * <br>1. the UIContext with current calling scope
   * <br>2. Returns the unique UIContext if only one UI instance exists.
   * <br>3. Returns the UIContext of the last focused UI instance if one exists.
   * <br>4. Returns the UIContext of the last foregrounded UI instance if one exists.
   * <br>5. Returns the UIContext of the most recently created UI instance if any UI instance exists.
   * <br>6. Returns an invalid UIContext instance if none of the above conditions are met.
   * @returns { ResolvedUIContext } - ResolvedUIContext instance
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static resolveUIContext(): ResolvedUIContext;

  /**
   * get object font.
   *
   * @returns { Font } object Font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFont(): Font;

  /**
   * Check whether the UIContext object is available.
   *
   * @returns { boolean } Returns true if the UIContext object is available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isAvailable(): boolean;

  /**
   * get object mediaQuery.
   *
   * @returns { MediaQuery } object MediaQuery.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMediaQuery(): MediaQuery;

  /**
   * get object UIInspector.
   * @returns { UIInspector } object UIInspector.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUIInspector(): UIInspector;

  /**
   * get the filtered attributes of the component tree.
   * @param { Array<string> } [filters] - the list of filters used to filter out component tree to be obtained.
   * @returns { string } the specified attributes of the component tree in json string.
   * @throws { BusinessError } 100023 - Unable to obtain current ui context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFilteredInspectorTree(filters?: Array<string>): string;

  /**
   * get the filtered attributes of the component tree with the specified id and depth
   * @param { string } id - ID of the specified component tree to be obtained.
   * @param { int } depth - depth of the component tree to be obtained.
   * @param { Array<string> } [filters] - the list of filters used to filter out component tree to be obtained.
   * @returns { string } the specified attributes of the component tree in json string.
   * @throws { BusinessError } 100023 - Unable to obtain current ui context.
   * @throws { BusinessError } 100024 - The parameter depth must be greater than 0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFilteredInspectorTreeById(id: string, depth: int, filters?: Array<string>): string;

  /**
   * get object router.
   *
   * @returns { Router } object Router.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getRouter(): Router;

  /**
   * get object PromptAction.
   *
   * @returns { PromptAction } object PromptAction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPromptAction(): PromptAction;

  /**
   * get object ComponentUtils.
   * @returns { ComponentUtils } object ComponentUtils.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getComponentUtils(): ComponentUtils;

  /**
   * Get the UI observer.
   *
   * @returns { UIObserver } The UI observer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getUIObserver(): UIObserver;

  /**
   * Get object OverlayManager.
   *
   * @returns { OverlayManager } object OverlayManager.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getOverlayManager(): OverlayManager;
  /**
   * Obtains the Magnifier object.
   *
   * @returns { Magnifier } Magnifier instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMagnifier(): Magnifier;

  /**
   * Init OverlayManager.
   *
   * @param { OverlayManagerOptions } options - Options.
   * @returns { boolean } Returns true if it is called first and before getting an OverlayManager instance; returns
   * false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setOverlayManagerOptions(options: OverlayManagerOptions): boolean;

  /**
   * Get object OverlayManagerOptions.
   *
   * @returns { OverlayManagerOptions } object OverlayManagerOptions.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getOverlayManagerOptions(): OverlayManagerOptions;

  /**
   * Create an animator object for custom animation.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Options.
   * @returns { AnimatorResult }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  createAnimator(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult;

  /**
   * Defining animation function
   *
   * @param { AnimateParam } value - parameters for animation.
   * @param { function } event - the closure base on which, the system will create animation automatically
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * alertDialog display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options -
   * Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showAlertDialog(
    options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void;

  /**
   * actionSheet display.
   *
   * @param { ActionSheetOptions } value - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showActionSheet(value: ActionSheetOptions): void;

  /**
   * datePickerDialog display.
   *
   * @param { DatePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showDatePickerDialog(options: DatePickerDialogOptions): void;

  /**
   * timePickerDialog display.
   *
   * @param { TimePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showTimePickerDialog(options: TimePickerDialogOptions): void;

  /**
   * textPickerDialog display.
   *
   * @param { TextPickerDialogOptions | TextPickerDialogOptionsExt } style - Dialog style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showTextPickerDialog(style: TextPickerDialogOptions | TextPickerDialogOptionsExt): void;

  /**
   * Set image cache capacity of decoded image count.
   * if not set, the application will not cache any decoded image.
   *
   * @param { int } value - capacity of decoded image count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setImageCacheCount(value: int): void;

  /**
   * Set image cache capacity of raw image data size in bytes before decode.
   * if not set, the application will not cache any raw image data.
   *
   * @param { int } value - capacity of raw image data size in bytes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setImageRawDataCacheSize(value: int): void;

  /**
   * Run custom functions inside the UIContext scope.
   *
   * @param { function } callback - The function called through UIContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  runScopedTask(callback: () => void): void;

  /**
   * Set KeyboardAvoidMode. The default mode is KeyboardAvoidMode.OFFSET
   *
   * @param { KeyboardAvoidMode } value - The mode of keyboard avoid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setKeyboardAvoidMode(value: KeyboardAvoidMode): void;

  /**
   * Get KeyboardAvoidMode.
   * @returns { KeyboardAvoidMode } The mode of keyboard avoid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getKeyboardAvoidMode(): KeyboardAvoidMode;

  /**
   * Set the pixel round mode of the system. The default mode is PixelRoundMode.PIXEL_ROUND_ON_LAYOUT_FINISH.
   *
   * @param { PixelRoundMode } mode - The mode of pixel round.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setPixelRoundMode(mode: PixelRoundMode): void;

  /**
   * Get the pixel round mode of the system.
   *
   * @returns { PixelRoundMode } the mode of pixel round.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPixelRoundMode(): PixelRoundMode;

  /**
   * Dispach keyboard event to the frameNode with inspector key.
   *
   * @param { int | string } node - The uniqueId or inspector key of the target FrameNode.
   * @returns { boolean } Returns whether the key event is consumed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dispatchKeyEvent(node: int | string, event: KeyEvent): boolean;

  /**
   * Get AtomicServiceBar.
   * @returns { Nullable<AtomicServiceBar> } The atomic service bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getAtomicServiceBar(): Nullable<AtomicServiceBar>;

  /**
   * Get DragController.
   * @returns { DragController } the DragController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getDragController(): DragController;

  /**
   * Get MeasureUtils.
   * @returns { MeasureUtils } the MeasureUtils
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMeasureUtils(): MeasureUtils;

  /**
   * Defining keyframe animation function.
   *
   * @param { KeyframeAnimateParam } param - overall animation parameters
   * @param { Array<KeyframeState> } keyframes - all keyframe states
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void;

  /**
   * Get FocusController.
   * @returns { FocusController } the FocusController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFocusController(): FocusController;

  /**
   * Define animation functions for immediate distribution.
   *
   * @param { AnimateParam } param - Set animation effect parameters.
   * @param { VoidCallback } processor - Specify the closure function that displays dynamic effects,
   *     and the system will automatically insert transition animations for
   *     state changes caused by the closure function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  animateToImmediately(param: AnimateParam, processor: VoidCallback): void;

  /**
   * Get FrameNode by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * Get the FrameNode attached to current window by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getAttachedFrameNodeById(id: string): FrameNode | null;

  /**
   * Get FrameNode by uniqueId.
   *
   * @param { int } id - The uniqueId of the FrameNode.
   * @returns { FrameNode | null } - The FrameNode with the target uniqueId, or null if the frameNode is not existed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getFrameNodeByUniqueId(id: int): FrameNode | null;

  /**
   * Get page information of the frameNode with uniqueId.
   *
   * @param { int } id - The uniqueId of the target FrameNode.
   * @returns { PageInfo } - The page information of the frameNode with the target uniqueId, includes
   * navDestination and router page information. If the frame node does not have navDestination and
   * router page information, it will return an empty object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getPageInfoByUniqueId(id: int): PageInfo;

  /**
   * Get navigation information of the frameNode with uniqueId.
   *
   * @param { int } id - The uniqueId of the target FrameNode.
   * @returns { observer.NavigationInfo | undefined } - The navigation information of the frameNode with the
   * target uniqueId, or undefined if the frameNode is not existed or does not have navigation information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getNavigationInfoByUniqueId(id: int): observer.NavigationInfo | undefined;

  /**
   * Dynamic dimming.
   *
   * @param { string } id - The id of FrameNode.
   * @param { double } value - Compared to the original level of dimming.value range [0,1],
   *     set values less than 0 to 0 and values greater than 1 to 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  setDynamicDimming(id: string, value: double): void;

  /**
   * Get object cursor controller.
   *
   * @returns { CursorController } object cursor controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getCursorController(): CursorController;

  /**
   * Get object context menu controller.
   *
   * @returns { ContextMenuController } object context menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getContextMenuController(): ContextMenuController;

  /**
   * Get ComponentSnapshot.
   * @returns { ComponentSnapshot } the ComponentSnapshot
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getComponentSnapshot(): ComponentSnapshot;

  /**
   * Converts a value in vp units to a value in px.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  vp2px(value: double): double;

  /**
   * Converts a value in px units to a value in vp.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  px2vp(value: double): double;

  /**
   * Converts a value in fp units to a value in px.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fp2px(value: double): double;

  /**
   * Converts a value in px units to a value in fp.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  px2fp(value: double): double;

  /**
   * Converts a value in lpx units to a value in px.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  lpx2px(value: double): double;

  /**
   * Converts a value in px units to a value in lpx.
   * @param { double } value
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  px2lpx(value: double): double;

  /**
   * Get current LocalStorage shared from stage.
   *
   * @returns { LocalStorage | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getSharedLocalStorage(): LocalStorage | undefined;

  /**
   * Obtains context of the ability.
   *
   * @returns { Context | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getHostContext(): Context | undefined;

  /**
   * Get the name of current window.
   *
   * @returns { string | undefined } The name of current window, or undefined if the window doesn't exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getWindowName(): string | undefined;

  /**
   * Get window id to which the current UIContext belongs.
   * <p>**NOTE**:
   * If the current UIContext is in a UIExtensionAbility running within the host process,
   * this method returns the top-level window ID of the host application.
   * </p>
   *
   * @returns { int | undefined } - Window id. If the current UIContext is unavailable, return undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getWindowId(): int | undefined;

  /**
   * Get the width breakpoint of current window.
   *
   * @returns { WidthBreakpoint } The width breakpoint of current window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getWindowWidthBreakpoint(): WidthBreakpoint;

  /**
   * Get the height breakpoint of current window.
   *
   * @returns { HeightBreakpoint } The height breakpoint of current window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getWindowHeightBreakpoint(): HeightBreakpoint;

  /**
   * Open the BindSheet.
   *
   * @param { ComponentContentBase } bindSheetContent - The content of BindSheet.
   * @param { SheetOptions } [sheetOptions] - The options of sheet.
   * @param { int } [targetId] - The uniqueId of the FrameNode to which BindSheet is attached.
   *     <br>Value range:(0, +∞)
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120002 - The bindSheetContent already exists.
   * @throws { BusinessError } 120004 - The targetId does not exist.
   * @throws { BusinessError } 120005 - The node of targetId is not in the component tree.
   * @throws { BusinessError } 120006 - The node of targetId is not a child of the page node or NavDestination node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  openBindSheet(bindSheetContent: ComponentContentBase,
    sheetOptions?: SheetOptions, targetId?: int): Promise<void>;

  /**
   * Update the BindSheet with sheetOptions.
   *
   * @param { ComponentContentBase } bindSheetContent - The content of BindSheet.
   * @param { SheetOptions } sheetOptions - The update options of sheet.
   * @param { boolean } [partialUpdate] - If true, only the specified properties in the sheetOptions are updated,
   *     otherwise the rest of the properties are overwritten with the default values.
   *     Default value is false.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateBindSheet(bindSheetContent: ComponentContentBase,
    sheetOptions: SheetOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * Close the BindSheet.
   *
   * @param { ComponentContentBase } bindSheetContent - The content of BindSheet.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  closeBindSheet(bindSheetContent: ComponentContentBase): Promise<void>;

  /**
   * Post a frame callback to run on the next frame.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  postFrameCallback(frameCallback: FrameCallback): void;

  /**
   * Post a frame callback to run on the next frame after the specified delay.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @param { long } delayTime - The delay time in milliseconds,
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  postDelayedFrameCallback(frameCallback: FrameCallback, delayTime: long): void;

  /**
   * Require DynamicSyncScene by id.
   *
   * @param { string } id - The id of DynamicSyncScene.
   * @returns { Array<DynamicSyncScene>} The instance of SwiperDynamicSyncScene.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  requireDynamicSyncScene(id: string): Array<DynamicSyncScene>;

  /**
   * Clear the cache generated by using $r/$rawfile to retrieve resources. This cache is used to accelerate the process
   * of repeatedly loading resources. Clearing this cache may slow down the loading speed of resources during page
   * overload.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  clearResourceCache(): void;

  /**
   * Checks whether current font scale follows the system.
   *
   * @returns { boolean } Returns true if current font scale follows the system; returns false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  isFollowingSystemFontScale(): boolean;

  /**
   * Get the max font scale.
   *
   * @returns { double } The max font scale.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getMaxFontScale(): double;

  /**
   * Bind tabs to scrollable container component to automatically hide tab bar.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bindTabsToScrollable(tabsController: TabsController, scroller: Scroller): void;

  /**
   * Unbind tabs from scrollable container component.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  unbindTabsFromScrollable(tabsController: TabsController, scroller: Scroller): void;

  /**
   * Bind tabs to nested scrollable container components to automatically hide tab bar.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } parentScroller - The controller of the parent scrollable container component.
   * @param { Scroller } childScroller - The controller of the child scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bindTabsToNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void;

  /**
   * Unbind tabs from nested scrollable container components.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } parentScroller - The controller of the parent scrollable container component.
   * @param { Scroller } childScroller - The controller of the child scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  unbindTabsFromNestedScrollable(tabsController: TabsController, parentScroller: Scroller,
    childScroller: Scroller): void;

  /**
   * whether to enable or disable swipe to back event.
   *
   * @param { boolean | undefined } enabled - enable or disable swipe to back event.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  enableSwipeBack(enabled: boolean | undefined): void;

  /**
   * Sets the component freezing flag based on the component id to prevent the
   * UI component from marking and updating dirty areas.
   * @param { string } id - Id of the frame node.
   * @param { boolean } isFrozen  - whether the component is frozen.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  freezeUINode(id: string, isFrozen: boolean): void;

  /**
   * Sets the component freezing flag based on the component uniqueId to prevent the
   * UI component from marking and updating dirty areas.
   * @param { int } uniqueId - Unique Id of the frame node.
   * @param { boolean } isFrozen - whether the component is frozen.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 static
   */
  freezeUINode(uniqueId: int, isFrozen: boolean): void;

  /**
   * Get object text menu controller.
   *
   * @returns { TextMenuController } object text menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getTextMenuController(): TextMenuController;

  /**
   * Create a UI instance singleton without window and get its UIContext object.
   *
   * @param { common.UIAbilityContext | common.ExtensionContext } context - UIAbilityContext or ExtensionContext.
   * @returns { UIContext | undefined } object UIContext, or undefined when failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. The number of parameters is incorrect.
   * <br> 2. Invalid parameter type of context.
   * @throws { BusinessError } 100001 - Internal error.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static createUIContextWithoutWindow(
    context: common.UIAbilityContext | common.ExtensionContext): UIContext | undefined;

  /**
   * Destroy the UI instance singleton without window.
   *
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static destroyUIContextWithoutWindow(): void;

  /**
   * Thread-safe UI state variables updates interface.
   *
   * @param { VoidCallback } callback - The callback function to be executed in the UI thread.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  setUIStates(callback: VoidCallback): void;

  /**
   * Get id of the UI instance.
   *
   * @returns { int } Returns id of the UI instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getId(): int;

  /**
   * Set the switch for memory recycling of invisible image nodes
   * 
   * @param { boolean } enabled - The switch for memory recycling.
   *    <br>Default value: false, Passing `undefined` restores the default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  recycleInvisibleImageMemory(enabled: boolean): void;

  /**
   * Set custom keyboard continue feature.
   *
   * @param { CustomKeyboardContinueFeature } feature - The custom keyboard continue feature.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCustomKeyboardContinueFeature(feature: CustomKeyboardContinueFeature): void;

  /**
   * Retrieve the root node of the corresponding page of the UIContext.
   *
   * @returns { FrameNode | null } The root node of the corresponding page of the UIContext,
   *     or null if no root node exists.
   * @throws { BusinessError } 120007 - The UIContext is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getPageRootNode(): FrameNode | null;

  /**
   * Checks whether the current UI instance is in easy split mode.
   *
   * @returns { boolean } Returns true if the current UI instance is in easy split mode; returns false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  isEasySplit(): boolean;
}

/**
 * Enum of KeyBoardAvoidMethodType
 *
 * @enum { number } KeyBoardAvoidMethodType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const enum KeyboardAvoidMode {
  /**
   * Default Type, offset the whole page when keyBoard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  OFFSET = 0,

  /**
   * Resize Type, resize the page when keyBoard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE = 1,

  /**
   * Offset Type, offset the whole page when caret position or keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  OFFSET_WITH_CARET = 2,

  /**
   * Resize Type, resize the whole page when when caret position or keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  RESIZE_WITH_CARET = 3,

  /**
   * None Type, nothing to do when keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  NONE = 4
}

/**
 * Enum of SwiperDynamicSyncSceneType
 *
 * @enum { number } SwiperDynamicSyncSceneType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const enum SwiperDynamicSyncSceneType {
  /**
   * Scene type is GESTURE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  GESTURE = 0,

  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ANIMATION = 1
}

/**
 * Enum of scene type for Marquee
 *
 * @enum { number } MarqueeDynamicSyncSceneType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export const enum MarqueeDynamicSyncSceneType {
  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  ANIMATION = 1
}

/**
 * class TextMenuController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class TextMenuController {
  /**
   * Set text menu options.
   *
   * @param { TextMenuOptions } options - the options of the text menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setMenuOptions(options: TextMenuOptions): void;

  /**
   * Disable all system service menus, such as translation and ai writer.
   * True means disable, false means enable.
   *
   * @param { boolean } disable - flag to disable service menu items
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static disableSystemServiceMenuItems(disable: boolean): void;
}

/**
 * Enum of CustomKeyboardContinueFeature
 * 
 * @enum { int } CustomKeyboardContinueFeature
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
 export const enum CustomKeyboardContinueFeature {
 
  /**
   * Enable custom keyboard continuation.
   * 
   * @syscap SystemCapability. ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENABLED = 0,
 
  /**
   * Disable custom keyboard continuation.
   * 
   * @syscap SystemCapability. ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISABLED = 1
}