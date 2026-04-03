'use static'
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 
import { BuilderParam, Callback, Component, NavPathInfo, NavPathStack, NavigationMode, NavigationOptions, PopInfo, Builder, PageMapBuilder } from '@ohos.arkui.component';
import { State } from '@ohos.arkui.stateManagement';
 
/**
 * Splitpolicy indicates the policy of pages pushed to the stack.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare enum SplitPolicy {
  /**
   * Indicates that the page will be pushed to the stack as home page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  HOME_PAGE = 0,
 
  /**
   * Indicates that the page will be pushed to the stack as detail page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DETAIL_PAGE = 1,
 
  /**
   * Indicates that the page will be pushed to the stack as full-screen page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FULL_PAGE = 2,
}
 
/**
 * Callback function when NavigationMode changed.
 *
 * @typedef { function } OnNavigationModeChangeCallback
 * @param { NavigationMode } mode - current NavigationMode.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;
 
/**
 * Callback function when home NavDestination shown in top.
 *
 * @typedef { function } OnHomeShowOnTopCallback
 * @param { string } name - the name of home NavDestination shown in top.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;
 
/**
 * Declaration struct MultiNavigation.
 *
 * @struct { MultiNavigation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct MultiNavigation {
  /**
   * MultiNavigation path stack of the MultiNavigation.
   *
   * @type { MultiNavPathStack }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @State
  multiStack: MultiNavPathStack;
 
  /**
   * build function of NavDestination.
   *
   * @type { NavDestinationBuildFunction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  navDestination: PageMapBuilder | undefined;
 
  /**
   * callback when the MultiNavigationMode change.
   *
   * @type { ?OnNavigationModeChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;
 
  /**
   * This callback is triggered when the HomePage at the top of the stack.
   *
   * @type { ?OnHomeShowOnTopCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onHomeShowOnTop?: OnHomeShowOnTopCallback;
 
  /**
   * The method to build multiNavigation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Builder
  build(): void;
}
 
/**
 * MultiNavPathStack is used for storing pages when shown as split mode.
 *
 * @extends NavPathStack
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare class MultiNavPathStack extends NavPathStack {
  /**
   * Creates an instance of MultiNavPathStack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();
 
  /**
   * Pushes the NavDestination into the stack.
   *
   * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;
 
  /**
   * Pushes the NavDestination into the stack.
   *
   * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
   * @param { NavigationOptions } [options] - Indicates options of stack operation.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void;
 
  /**
   * Pushes the NavDestination of specified name into the stack.
   *
   * @param { string } name - Indicates the name of the NavDestination to be pushed.
   * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;
 
  /**
   * Pushes the NavDestination of specified name into the stack.
   *
   * @param { string } name - Indicates the name of the NavDestination to be pushed.
   * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
   * @param { Callback<PopInfo> } [onPop] - The callback when next page returns. 
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pushPathByName(
    name: string, param: Object, onPop?: Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;
 
  /**
   * Replace the current NavDestination with the one specificed by NavPathInfo.
   * The current NavDestination will be destroyed.
   *
   * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;
 
  /**
   * Replace the current NavDestination with the one specificed by NavPathInfo.
   * The current NavDestination will be destroyed.
   *
   * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
   * @param { NavigationOptions } [options] - Indicates options of stack operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;
 
  /**
   * Replace the current NavDestination with the one specificed by name.
   * The current NavDestination will be destroyed.
   * 
   * @param { string } name - Indicates name of the new NavDestination in top of stack.
   * @param { Object } param - Indicates the detailed parameter of the new NavDestination in top of the stack.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;
 
  /**
   * Remove the specified NavDestinations by indexes.
   *
   * @param { Array<int> } indexes - Indicates the indexes of the NavDestinations to be removed.
   * @returns { int } Returns the number of removed pages. Invalid indexes will be ignored.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  removeByIndexes(indexes: Array<int>): int;
 
  /**
   * Remove the specified NavDestination by name.
   *
   * @param { string } name - Indicates the name of the NavDestination to be removed.
   * @returns { int } Returns the number of removed NavDestinations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  removeByName(name: string): int;
 
  /**
   * Pop the top NavDestination of the stack. When keepBottomPage sets true, the page at the bottom of the
   * stack will be retained.
   *
   * @param { Object } [result] - Page Customization processing results.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty,
   *                                      otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  pop(result?: Object, animated?: boolean): NavPathInfo | undefined;
 
  /**
   * Pop to the NavDestination of specified name. Always the first one
   * in the stack from bottom up when several NavDestinations match the same name.
   *
   * @param { string } name - Name of the NavDestination.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @returns { int } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  popToName(name: string, animated?: boolean): int;
 
  /**
   * Pop to the NavDestination of specified name. Always the first one
   * in the stack from bottom up when several NavDestinations match the same name.
   *
   * @param { string } name - Name of the NavDestination.
   * @param { Object } result - Page Customization processing results.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @returns { int } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  popToName(name: string, result: Object, animated?: boolean): int;
 
  /**
   * Pop to the NavDestination of specified index. Do nothing if index is invalid.
   *
   * @param { int } index - The index of NavDestination page.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  popToIndex(index: int, animated?: boolean): void;
 
  /**
   * Pop to the NavDestination of specified index. Do nothing if index is invalid.
   *
   * @param { int } index - The index of NavDestination page.
   * @param { Object } result - Page Customization processing results.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  popToIndex(index: int, result: Object, animated?: boolean): void;
 
  /**
   * Move the first NavDestination of specified name to the top of the stack. Always the first one
   * in the stack from bottom up when several NavDestinations match the same name.
   * 
   * @param { string } name - Indicates the name of the NavDestination to be moved to the top.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @returns { int } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  moveToTop(name: string, animated?: boolean): int;
 
  /**
   * Move the first NavDestination of specified index to the top of the stack.
   *
   * @param { int } index - Indicates the index of the NavDestination to be moved to the top.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  moveIndexToTop(index: int, animated?: boolean): void;
 
  /**
   * Clear the stack. When keepBottomPage sets true, the page at the bottom of the
   * stack will be retained.
   *
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  clear(animated?: boolean): void;
 
  /**
   * Obtains all the NavDestination name in the stack.
   *
   * @returns { Array<string> } Returns all the NavDestination name in the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getAllPathName(): Array<string>;
 
  /**
   * Obtains parameter information of the NavDestination page specified by index.
   *
   * @param { int } index - The index of NavDestination page.
   * @returns { Object | undefined } Returns the detailed parameter of the NavDestination
   *                                  if it exists in the stack, otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getParamByIndex(index: int): Object | undefined;
 
  /**
   * Obtains parameter information of all NavDestination pages specified by name.
   *
   * @param { string } name - Indicates the name of the NavDestination.
   * @returns { Array<Object | null | undefined> } Returns the detailed parameter of all the NavDestinations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getParamByName(name: string): Array<Object | null | undefined>;
 
  /**
   * Obtains the index of all NavDestination pages specified by name.
   *
   * @param { string } name - Indicates the name of the NavDestination.
   * @returns { Array<int> } Returns the index of all the NavDestinations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getIndexByName(name: string): Array<int>;
 
  /**
   * Obtains the size of the stack.
   *
   * @returns { int } Returns the size of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  size(): int;
 
  /**
   * disable or enable all transition animation in this MultiNavigation.
   *
   * @param { boolean } disable - Indicates whether to disable the transition animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  disableAnimation(disable: boolean): void;
 
  /**
   * Switches the details page of the split-mode page on the top stack to full screen (true) 
   * or split (false).
   *
   * @param { boolean } [isFullScreen] - Whether to switch to full screen.
   * @returns { boolean } Returns switch result success(true) or failure(false).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  switchFullScreenState(isFullScreen?: boolean): boolean;
 
  /**
   * Sets the dragable range of the home page width.
   *
   * @param { double } minPercent - Minimum Home Width Percentage.
   * @param { double } maxPercent - Maximum Home Width Percentage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setHomeWidthRange(minPercent: double, maxPercent: double): void;
 
  /**
   * Indicates whether to retain the bottom NavDestination of the stack when doing pop or clear.
   *
   * @param { boolean } keepBottom - Indicates whether to retain the bottom NavDestination of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  keepBottomPage(keepBottom: boolean): void;
 
  /**
   * Set placeholder NavDestination.
   *
   * @param { NavPathInfo } info - info of placeHolder NavDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setPlaceholderPage(info: NavPathInfo): void;
}